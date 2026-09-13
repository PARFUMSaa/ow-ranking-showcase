'use strict';
/**
 * プレイヤーデータ自動更新スクリプト v3(依存ゼロ / Node 18+)
 * - モード別: ライバル(competitive) / 全モード(= quickplay + competitive)
 * - Power Rating 設計: 5要素(重み付きバトルスコア) × ランク係数
 *   ランク係数はブロンズ(指数0)基準。アンランクはブロンズと同値(1.0)
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { detailOf, getStat } from './power-v6.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const API = 'https://overfast-api.tekrop.fr';
const UA = 'ow-friend-rankings-updater/3.1 (personal use)';
const DRY = process.argv.includes('--dry');
const PLAYER_ORDER = ['Tank', 'Damage', 'Support'];
const RANK_ORDER = ['bronze', 'silver', 'gold', 'platinum', 'emerald', 'diamond', 'master', 'grandmaster'];
const EXP_BY_DIV = { bronze: 0, silver: 1, gold: 2, platinum: 3, emerald: 4, diamond: 5, master: 6, grandmaster: 7 };
const RANK_BASE = 1.10; // ランク1段あたりの伸び(要調整)
const UNRANKED_COEF = 1.0; // アンランクはブロンズ(指数0)と同値

/* 試合数係数(±15%に弱めた緩やかな信頼度補正): 25試合で1.0 */
const MATCH_G_REF = 25;      // この試合数を中央(係数1.0)とする
const MATCH_SLOPE = 0.06;    // log2 1段あたりの増分
const MATCH_MIN = 0.85;
const MATCH_MAX = 1.15;

/* 簡単キャラ用: 試合数を「ほんの少し」だけ考慮する緩い係数(25試合=1.0、0.92〜1.08) */
const EASY_MATCH_SLOPE = 0.03;
const EASY_MATCH_MIN = 0.92;
const EASY_MATCH_MAX = 1.08;

/* だれが使っても高成績になりやすい「簡単・強いキャラ」: 全プレイヤーの最終スコアに×1.25 */
const EASY_HERO_BONUS = 1.25;
const EASY_HEROES = new Set([
  // Tank
  'mauga', 'zarya', 'sigma', 'ramattra',
  // Damage
  'reaper', 'anran', 'bastion',
  // Support
  'moira'
]);
const cfg = JSON.parse(readFileSync(resolve(ROOT, 'players.json'), 'utf8'));

/* ---------------- utils ---------------- */
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const num = (v) => Number(v) || 0;
const r2 = (x) => Math.round(x * 100) / 100;
const cap = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

async function apiGet(url, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(30000) });
      if (res.ok) return await res.json();
      if (res.status === 422) return null;
      // 404 は「存在しない」ことが多いが OverFast のデータ更新中に一時的に出る場合があるため少し待って再試行
      if (res.status === 404) { if (i === tries - 1) return null; await sleep(1500 * (i + 1)); continue; }
      if (res.status === 429 || res.status >= 500) { await sleep(1200 * (i + 1)); continue; }
      return null;
    } catch {
      if (i === tries - 1) return null;
      await sleep(800 * (i + 1));
    }
  }
  return null;
}

/* slugメタ */
function loadSlugMeta() {
  const src = readFileSync(resolve(ROOT, 'heroes-meta.js'), 'utf8');
  const grab = (name) => {
    const out = {};
    const re = new RegExp('const ' + name + '=\\{([\\s\\S]*?)\\};');
    const body = src.match(re);
    if (!body) return out;
    for (const m of body[1].matchAll(/'([^']+)'\s*:\s*'([^']*)'/g)) out[m[1]] = m[2];
    return out;
  };
  return { role: grab('SLUG_ROLE'), name: grab('SLUG_NAME') };
}
const META = loadSlugMeta();

/* ---------------- 新ヒーローの自動追随 ---------------- */
/* OverFast の /heroes に、heroes-meta.js に無いヒーローがあれば追記する(新キャラ対策) */
const UNKNOWN_HEROES = new Set();
function metaLine(mapName, key, val) {
  const v = String(val == null ? '' : val).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  return `  '${key}':'${v}',`;
}
function insertMetaEntry(src, mapName, key, val) {
  const lines = src.split('\n');
  const start = lines.findIndex((l) => l.startsWith(`const ${mapName}=`));
  if (start < 0) return src;
  let end = -1;
  for (let i = start + 1; i < lines.length; i++) if (lines[i].trim() === '};') { end = i; break; }
  if (end < 0) return src;
  let at = end;
  for (let i = start + 1; i < end; i++) {
    const m = lines[i].match(/^\s*'([^']+)':/);
    if (m && m[1] > key) { at = i; break; }   // アルファベット順の位置へ
  }
  lines.splice(at, 0, metaLine(mapName, key, val));
  return lines.join('\n');
}
async function syncHeroMeta() {
  const list = await apiGet(`${API}/heroes`);
  if (!Array.isArray(list) || !list.length) return;
  const missing = list.filter((h) => h && h.key && !META.role[h.key]);
  if (!missing.length) return;
  const file = resolve(ROOT, 'heroes-meta.js');
  let src = readFileSync(file, 'utf8');
  for (const h of missing) {
    const name = h.name || h.key;
    src = insertMetaEntry(src, 'SLUG_ROLE', h.key, h.role || '');
    src = insertMetaEntry(src, 'SLUG_NAME', h.key, name);
    src = insertMetaEntry(src, 'SLUG_URL', h.key, h.portrait || '');
    META.role[h.key] = h.role || '';
    META.name[h.key] = name;
    console.log(`  ＋ 新ヒーローを heroes-meta.js に追記: ${h.key}(${name} / ${h.role || 'ロール不明'})`);
  }
  if (!DRY) writeFileSync(file, src, 'utf8');
}

function loadPrevious() {
  const file = resolve(ROOT, 'players-data.js');
  if (!existsSync(file)) return { comp: [], all: [] };
  try {
    const sandbox = {};
    vm.createContext(sandbox);
    const src = readFileSync(file, 'utf8')
      + '\n;globalThis.__PC = (typeof PLAYERS_COMP!=="undefined"?PLAYERS_COMP:[]);'
      + '\n;globalThis.__PA = (typeof PLAYERS_ALL!=="undefined"?PLAYERS_ALL:[]);';
    vm.runInContext(src, sandbox, { filename: 'players-data.js' });
    return { comp: Array.isArray(sandbox.__PC) ? sandbox.__PC : [], all: Array.isArray(sandbox.__PA) ? sandbox.__PA : [] };
  } catch { return { comp: [], all: [] }; }
}
const PREV = loadPrevious();

/* ---------------- 検索・取得 ---------------- */
/* playerId 固定が無ければ名前検索。同名アカウントが複数ある場合は前回使ったIDを最優先する */
async function resolvePlayerId(cfgItem, preferPid) {
  const out = [];
  if (cfgItem.playerId) out.push(cfgItem.playerId);
  if (cfgItem.search) {
    const data = await apiGet(`${API}/players?name=${encodeURIComponent(cfgItem.search)}&limit=10`);
    const list = (data && data.results) || [];
    for (const x of list) if (x.player_id && !out.includes(x.player_id)) out.push(x.player_id);
  }
  if (out.length > 1 && preferPid) {
    const i = out.indexOf(preferPid);
    if (i > 0) { out.splice(i, 1); out.unshift(preferPid); }   // 前回と同じアカウントを優先(取り違え防止)
  }
  return out;
}
function pickPlatform(summary) { const c = summary.competitive || {}; return c.pc || c.console || null; }
function normalizeRanks(summary, assumeRank) {
  const ranks = { Tank: null, Damage: null, Support: null };
  const plat = pickPlatform(summary);
  if (plat) {
    for (const role of PLAYER_ORDER) {
      const r = plat[role.toLowerCase()];
      if (r && r.division) ranks[role] = { division: r.division, tier: r.tier ?? 0, icon: r.rank_icon || '' };
    }
  }
  // 全ロールがアンランクのとき、設定された推定ランク(例: プラチナ5)を全ロールへ適用
  if (assumeRank && assumeRank.division && !ranks.Tank && !ranks.Damage && !ranks.Support) {
    for (const role of PLAYER_ORDER) {
      ranks[role] = { division: String(assumeRank.division).toLowerCase(), tier: Number(assumeRank.tier) || 1, icon: '', assumed: true };
    }
  }
  return ranks;
}
function roleRankVal(rk) {
  if (!rk || !rk.division) return -1;
  const i = RANK_ORDER.indexOf(String(rk.division).toLowerCase());
  if (i < 0) return -1;
  return i * 10 + (6 - (Number(rk.tier) || 1));
}
function pickMainRole(ranks, allGames) {
  let best = null, bestScore = -1;
  for (const r of PLAYER_ORDER) { const sc = roleRankVal(ranks[r]); if (sc > bestScore) { bestScore = sc; best = r; } }
  if (best) return best;
  let bestN = -1;
  for (const r of PLAYER_ORDER) { const g = allGames[r.toLowerCase()] || 0; if (g > bestN) { bestN = g; best = r; } }
  return best || 'Damage';
}

/* ---------------- 統計マージ/整形(Player Rankings用) ---------------- */
function nodeInt(s) {
  const tot = (s && s.total) || {};
  return {
    g: num(s && s.games_played), w: num(s && s.games_won), l: num(s && s.games_lost), time: num(s && s.time_played),
    elims: num(tot.eliminations), assists: num(tot.assists), deaths: num(tot.deaths), dmg: num(tot.damage), heal: num(tot.healing)
  };
}
const zero = () => ({ g: 0, w: 0, l: 0, time: 0, elims: 0, assists: 0, deaths: 0, dmg: 0, heal: 0 });
function addNodes(a, b) {
  const out = {};
  for (const k of ['g', 'w', 'l', 'time', 'elims', 'assists', 'deaths', 'dmg', 'heal']) out[k] = a[k] + b[k];
  return out;
}
function toFields(x) {
  return {
    g: x.g, w: x.w, l: x.l, time: x.time,
    wr: x.g ? Math.round((x.w / x.g) * 10000) / 100 : 0,
    kda: x.deaths ? Math.round(((x.elims + x.assists) / x.deaths) * 100) / 100 : 0,
    elim: x.time ? Math.round((x.elims / x.time) * 60000) / 100 : 0,
    deaths: x.time ? Math.round((x.deaths / x.time) * 60000) / 100 : 0,
    dmg: x.time ? Math.round((x.dmg / x.time) * 60000) / 100 : 0,
    heal: x.time ? Math.round((x.heal / x.time) * 60000) / 100 : 0
  };
}
function mergeStats(list) {
  const out = { general: {}, roles: {}, heroes: {} };
  const rolesAll = new Set(), heroesAll = new Set();
  for (const st of list) {
    if (!st) continue;
    if (st.roles) for (const k of Object.keys(st.roles)) rolesAll.add(k);
    if (st.heroes) for (const k of Object.keys(st.heroes)) heroesAll.add(k);
  }
  for (const r of rolesAll) out.roles[r] = null;
  for (const h of heroesAll) out.heroes[h] = null;
  let gen = zero();
  for (const st of list) if (st && st.general) gen = addNodes(gen, nodeInt(st.general));
  out.general = gen;
  for (const r of rolesAll) {
    let acc = zero();
    for (const st of list) if (st && st.roles && st.roles[r]) acc = addNodes(acc, nodeInt(st.roles[r]));
    out.roles[r] = acc;
  }
  for (const h of heroesAll) {
    let acc = zero();
    for (const st of list) if (st && st.heroes && st.heroes[h]) acc = addNodes(acc, nodeInt(st.heroes[h]));
    out.heroes[h] = acc;
  }
  return out;
}
function toPlayerStats(merged) {
  const overall = toFields(merged.general);
  const roles = {};
  for (const role of PLAYER_ORDER) {
    const key = role.toLowerCase();
    if (merged.roles[key]) {
      const f = toFields(merged.roles[key]);
      roles[role] = { g: f.g, w: f.w, l: f.l, time: f.time, wr: f.wr, kda: f.kda, elim: f.elim, deaths: f.deaths, dmg: f.dmg, heal: f.heal };
    }
  }
  const heroes = [];
  for (const slug of Object.keys(merged.heroes)) {
    const f = toFields(merged.heroes[slug]);
    if (f.g <= 0) continue;
    if (!META.role[slug]) UNKNOWN_HEROES.add(slug);   // heroes-meta.js に無いヒーロー(=要メタ追加)
    heroes.push({ slug, n: META.name[slug] || slug, role: META.role[slug] || '', g: f.g, wr: f.wr, kda: f.kda });
  }
  heroes.sort((a, b) => b.g - a.g);
  return {
    overall: { matches: overall.g, wins: overall.w, losses: overall.l, wr: overall.wr, kda: overall.kda,
      elim: overall.elim, deaths: overall.deaths, dmg: overall.dmg, heal: overall.heal, time: overall.time },
    roles, heroes
  };
}

/* ---------------- Power Rating(5要素 × ランク係数) ---------------- */
function metricOf(hd) {
  const gs = (cat, key) => getStat(hd, cat, key);
  const g = gs('game', 'games_played');
  const elim = gs('combat', 'eliminations'), death = gs('combat', 'deaths');
  return {
    g, time: gs('game', 'time_played'), wr: gs('game', 'win_percentage'),
    kda: death > 0 ? elim / death : 0,
    multi: gs('combat', 'multikills'),
    obj10: gs('average', 'objective_time_avg_per_10_min'),
    allDmg10: gs('average', 'all_damage_done_avg_per_10_min'),
    heroDmg10: gs('average', 'hero_damage_done_avg_per_10_min'),
    elim10: gs('average', 'eliminations_avg_per_10_min'),
    heal10: gs('average', 'healing_done_avg_per_10_min'),
    assist10: gs('average', 'assists_avg_per_10_min'),
    death10: gs('average', 'deaths_avg_per_10_min'),
    solo10: gs('average', 'solo_kills_avg_per_10_min'),
    fire10: gs('average', 'time_spent_on_fire_avg_per_10_min'),
    wa: gs('combat', 'weapon_accuracy'),
    ca: gs('combat', 'critical_hit_accuracy'),
    scoped: gs('hero_specific', 'scoped_accuracy')
  };
}
function metricsMap(raw) {
  const out = {};
  if (!raw || typeof raw !== 'object') return out;
  for (const slug of Object.keys(raw)) {
    if (slug === 'all-heroes') continue;
    const hd = raw[slug];
    if (!Array.isArray(hd)) continue;
    const m = metricOf(hd);
    if (m.g > 0) out[slug] = { slug, ...m };
  }
  return out;
}
function weightedMetrics(c, q, key) {
  const t = c.g + q.g;
  return t ? (c[key] * c.g + q[key] * q.g) / t : (c[key] || q[key] || 0);
}
function combineMetricsMap(compMap, qpMap) {
  const out = {};
  const keys = new Set([...Object.keys(compMap), ...Object.keys(qpMap)]);
  for (const slug of keys) {
    const c = compMap[slug], q = qpMap[slug];
    if (c && q) {
      const t = c.g + q.g;
      const m = { slug, g: t, time: c.time + q.time, kda: t ? (c.kda * c.g + q.kda * q.g) / t : 0, multi: c.multi + q.multi };
      for (const k of ['wr', 'obj10', 'allDmg10', 'heroDmg10', 'elim10', 'heal10', 'assist10', 'death10', 'solo10', 'fire10', 'wa', 'ca', 'scoped']) m[k] = weightedMetrics(c, q, k);
      out[slug] = m;
    } else out[slug] = c || q;
  }
  return out;
}
function detMap(raw) {
  const out = {};
  if (!raw || typeof raw !== 'object') return out;
  for (const slug of Object.keys(raw)) {
    if (slug === 'all-heroes') continue;
    const hd = raw[slug];
    if (!Array.isArray(hd)) continue;
    const d = detailOf(hd);
    if (d.g > 0) out[slug] = d;
  }
  return out;
}
function combineDetMap(compD, qpD) {
  const out = {};
  const keys = new Set([...Object.keys(compD), ...Object.keys(qpD)]);
  for (const slug of keys) {
    const c = compD[slug], q = qpD[slug];
    if (c && q) {
      const t = c.g + q.g;
      const d = { g: t, time: c.time + q.time };
      for (const k of ['wr', 'el10', 'de10', 'dm10', 'he10', 'as10', 'wa', 'ca']) d[k] = t ? (c[k] * c.g + q[k] * q.g) / t : 0;
      out[slug] = d;
    } else out[slug] = c || q;
  }
  return out;
}

/* 偏差値(集団: 同ヒーローを登録している全プレイヤー) */
function devStats(vals) {
  const n = vals.length;
  if (!n) return null;
  const mean = vals.reduce((a, b) => a + b, 0) / n;
  const variance = vals.reduce((a, b) => a + (b - mean) * (b - mean), 0) / n;
  return { n, mean, sd: Math.sqrt(variance) };
}
function devValue(val, st) {
  if (!st || st.n < 3 || st.sd < 1e-6) return 50; // 母集団不足は50固定
  return Math.max(0, Math.min(100, 50 + 10 * (val - st.mean) / st.sd));
}
function buildDatasetStats(records, modeKey) {
  const groups = new Map();
  for (const rec of records) {
    const mm = rec.metrics[modeKey];
    if (!mm) continue;
    for (const slug of Object.keys(mm)) {
      let g = groups.get(slug);
      if (!g) { g = new Map(); groups.set(slug, g); }
      const m = mm[slug];
      const push = (k, v) => { if (v !== undefined && v !== null && isFinite(v)) { let arr = g.get(k); if (!arr) { arr = []; g.set(k, arr); } arr.push(v); } };
      push('wr', m.wr); push('kda', m.kda);
      push('multi', m.g ? m.multi / m.g : 0);
      push('obj10', m.obj10); push('allDmg10', m.allDmg10); push('heroDmg10', m.heroDmg10);
      push('elim10', m.elim10); push('heal10', m.heal10); push('assist10', m.assist10);
      push('death10', m.death10); push('solo10', m.solo10); push('fire10', m.fire10);
      push('wa', m.wa); push('ca', m.ca); push('scoped', m.scoped);
    }
  }
  const out = new Map();
  for (const [slug, g] of groups) {
    const st = {};
    for (const [k, arr] of g) st[k] = devStats(arr);
    out.set(slug, st);
  }
  return out;
}
function coefficientFor(rank) {
  if (!rank || !rank.division) return UNRANKED_COEF; // アンランク=ブロンズ同値
  const exp = EXP_BY_DIV[String(rank.division).toLowerCase()];
  if (exp === undefined) return UNRANKED_COEF;
  return Math.pow(RANK_BASE, exp);
}
function effectiveRank(rec, roleKey) {
  // ロール別ランクが無い(アンランク)場合、プレイヤー設定の rankFallback(例: Damage)があればそれで代用
  const own = rec.ranks[roleKey] || null;
  if (own && own.division) return own;
  const fb = rec.rankFallback;
  if (fb && rec.ranks[fb] && rec.ranks[fb].division) return rec.ranks[fb];
  return null; // 全部アンランク → UNRANKED_COEF
}
/* 簡単・強いキャラは「誰が使っても強い=プレイヤー間の実力差が出にくい」ため、
   キャラ内の最終スコア幅を12以内に線形圧縮する(中央基準で全員を中間へ寄せる)。
   ※ Makky はレベルが違うので圧縮対象から除外する */
const COMPRESS_EXCLUDE_IDS = ['makky'];
function compressEasySpreads(entries) {
  if (!Array.isArray(entries)) return;
  const groups = new Map(); // slug -> [{id, bs, slug, v}]
  for (const it of entries) {
    const bs = it && it.bs;
    if (!bs) continue;
    const id = it && it.id;
    if (COMPRESS_EXCLUDE_IDS.includes(id)) continue; // 除外プレイヤーは圧縮しない
    for (const slug of Object.keys(bs)) {
      if (!EASY_HEROES.has(slug)) continue;
      const entry = bs[slug];
      const v = entry && entry.finalScore;
      if (typeof v !== 'number') continue;
      if (!groups.has(slug)) groups.set(slug, []);
      groups.get(slug).push({ bs, slug, v });
    }
  }
  for (const [, arr] of groups) {
    if (arr.length < 2) continue;
    let mn = Infinity, mx = -Infinity;
    for (const x of arr) { if (x.v < mn) mn = x.v; if (x.v > mx) mx = x.v; }
    if (mx - mn <= 12.0001) continue;
    const mid = (mn + mx) / 2;
    const k = 12 / (mx - mn);
    for (const x of arr) {
      x.bs[x.slug].finalScore = r2(mid + (x.v - mid) * k); // ← ヒーローエントリへ代入する
    }
  }
}

/* Makky(全モード)のヒーローレート: 最上位はそのまま、最下位が90になるよう線形に底上げ
   (Makky内のレート差が大きすぎるため。順位は不変) */
const MAKKY_FLOOR = 90;
function liftMakkyFloor(entries) {
  if (!Array.isArray(entries)) return;
  let mn = Infinity, mx = -Infinity;
  for (const it of entries) {
    const bs = it && it.bs;
    if (!bs) continue;
    if (it.id !== 'makky') continue; // Makkyのみ対象
    for (const slug of Object.keys(bs)) {
      const v = bs[slug] && bs[slug].finalScore;
      if (typeof v !== 'number') continue;
      if (v < mn) mn = v;
      if (v > mx) mx = v;
    }
  }
  if (!isFinite(mn) || !isFinite(mx) || mx <= mn) return;
  if (mn >= MAKKY_FLOOR) return; // すでに下駄を履いている
  // [mn, mx] → [MAKKY_FLOOR, mx] の線形写像
  const k = (mx - MAKKY_FLOOR) / (mx - mn);
  for (const it of entries) {
    const bs = it && it.bs;
    if (!bs) continue;
    if (it.id !== 'makky') continue;
    for (const slug of Object.keys(bs)) {
      const e = bs[slug];
      if (!e || typeof e.finalScore !== 'number') continue;
      e.finalScore = r2(MAKKY_FLOOR + (e.finalScore - mn) * k);
    }
  }
}

function playerScores(rec, stats, modeKey) {
  const mm = rec.metrics[modeKey] || {};
  const dm = rec.dets[modeKey] || {};
  const out = {};
  for (const slug of Object.keys(mm)) {
    const m = mm[slug];
    const role = META.role[slug];
    if (!role) continue;
    const roleKey = role.charAt(0).toUpperCase() + role.slice(1);
    // アンランクロールは rankFallback(Damage等)のランクで代用(例: MakkyのTankヒーロー→Damageランク)
    const rank = effectiveRank(rec, roleKey);
    const st = stats.get(slug) || {};
    const dv = (key, rev) => { let x = devValue(m[key], st[key]); return rev ? 100 - x : x; };

    // ④ ロール別パフォーマンス(偏差値平均)
    const roleList = role === 'tank' ? [{ k: 'obj10' }, { k: 'allDmg10' }, { k: 'death10', rev: true }]
      : role === 'damage' ? [{ k: 'heroDmg10' }, { k: 'elim10' }]
        : [{ k: 'heal10' }, { k: 'assist10' }];
    const roleDevs = roleList.map((x) => dv(x.k, x.rev));
    const roleAvg = roleDevs.length ? roleDevs.reduce((a, b) => a + b, 0) / roleDevs.length : 50;

    // ⑤ 命中率(weapon_accuracy→scoped→crit の順でフォールバック)
    let accDev = 50;
    for (const k of ['wa', 'scoped', 'ca']) {
      if (st[k] && st[k].n >= 3 && st[k].sd >= 1e-6) { accDev = devValue(m[k], st[k]); break; }
    }

    // ⑥ インパクト(マルチキル/試合・ソロキル10分・on fire 10分)
    const impDevs = [];
    if (st.multi && st.multi.n >= 3 && st.multi.sd >= 1e-6) impDevs.push(devValue(m.g ? m.multi / m.g : 0, st.multi));
    for (const k of ['solo10', 'fire10']) if (st[k] && st[k].n >= 3 && st[k].sd >= 1e-6) impDevs.push(devValue(m[k], st[k]));
    const impactAvg = impDevs.length ? impDevs.reduce((a, b) => a + b, 0) / impDevs.length : 50;

    const pid = (rec.comp && rec.comp.id) || (rec.all && rec.all.id) || '';
    const adjWr = (m.wr * m.g + 500) / (m.g + 10);
    const battle =
      adjWr * 0.30 +                          // ① 勝率30%
      Math.min(m.kda, 5) * 10 * 0.20 +        // ② KDA20%
      roleAvg * 0.20 +                        // ④ ロール指標20%
      accDev * 0.10 +                         // ⑤ 命中率10%
      impactAvg * 0.10;                       // ⑥ インパクト10%(③使用率は加算から除外→係数へ)
    const coeff = coefficientFor(rank);
    // 試合数係数: Makky は全モード時、全ロールで「試合数の多いキャラを上位に」するため従来式(0.25〜2.0)へ戻す
    const isMakkyAll = modeKey === 'all' && pid === 'makky';
    // 簡単キャラは「ほんの少しだけ」試合数を考慮(0.92〜1.08)。Makkyの全モードは従来式
    const matchCoef = isMakkyAll
      ? Math.min(2.0, Math.max(0.25, 0.45 + 0.25 * Math.log2(m.g / 10)))
      : EASY_HEROES.has(slug)
        ? Math.min(EASY_MATCH_MAX, Math.max(EASY_MATCH_MIN, 1 + EASY_MATCH_SLOPE * Math.log2(m.g / MATCH_G_REF)))
        : Math.min(MATCH_MAX, Math.max(MATCH_MIN, 1 + MATCH_SLOPE * Math.log2(m.g / MATCH_G_REF)));
    // 簡単・強いキャラは誰でも高成績になりやすいため、全プレイヤーのスコアに×1.25
    const bonus = EASY_HEROES.has(slug) ? EASY_HERO_BONUS : 1;
    const final = battle * coeff * matchCoef * bonus;

    out[slug] = {
      finalScore: r2(final),
      battleScore: r2(battle),
      coeff: r2(coeff),
      matchCoef: r2(matchCoef),
      gamesPlayed: m.g,
      rankIndex: rank ? (EXP_BY_DIV[String(rank.division).toLowerCase()] ?? 0) : 0,
      det: dm[slug] || null
    };
  }
  return out;
}

/* ---------------- 1プレイヤー ---------------- */
async function fetchPlayer(cfgItem, preferPid) {
  const ids = await resolvePlayerId(cfgItem, preferPid);
  if (!ids || !ids.length) throw new Error(`検索結果なし: ${cfgItem.search || cfgItem.id}`);
  let lastErr = null;
  for (const pid of ids) {
    const summary = await apiGet(`${API}/players/${encodeURIComponent(pid)}/summary`);
    if (!summary) { lastErr = new Error('summary取得失敗'); continue; }
    const compRaw = await apiGet(`${API}/players/${encodeURIComponent(pid)}/stats/summary?gamemode=competitive&platform=pc`);
    const qpRaw = await apiGet(`${API}/players/${encodeURIComponent(pid)}/stats/summary?gamemode=quickplay&platform=pc`);
    const compDetail = await apiGet(`${API}/players/${encodeURIComponent(pid)}/stats?gamemode=competitive`);
    const qpDetail = await apiGet(`${API}/players/${encodeURIComponent(pid)}/stats?gamemode=quickplay`);
    if (!compRaw && !qpRaw) { lastErr = new Error('stats取得失敗'); continue; }
    return buildPlayer(cfgItem, summary, compRaw, qpRaw, compDetail, qpDetail, pid);
  }
  throw lastErr || new Error('取得失敗');
}
function buildPlayer(cfgItem, summary, compRaw, qpRaw, compDetail, qpDetail, pid) {
  const compStats = compRaw && compRaw.general ? compRaw : null;
  const qpStats = qpRaw && qpRaw.general ? qpRaw : null;
  const allStats = mergeStats([qpStats, compStats]);
  const compMerged = mergeStats([compStats]);
  const ranks = normalizeRanks(summary, cfgItem.assumeRank);

  const allGames = {};
  for (const role of PLAYER_ORDER) allGames[role.toLowerCase()] = (allStats.roles[role.toLowerCase()] || {}).g || 0;

  const identity = {
    id: cfgItem.id,
    pid: pid || summary.player_id || '',
    name: summary.username || cfgItem.name || cfgItem.search || cfgItem.id,
    tag: cfgItem.tag || '',
    endorse: summary.endorsement && summary.endorsement.level != null ? summary.endorsement.level : null,
    title: summary.title || null,
    avatar: summary.avatar || '',
    namecard: summary.namecard || '',
    role: cfgItem.role || pickMainRole(ranks, allGames),
    ranks
  };
  const mainRank = ranks[identity.role];
  identity.rankTier = mainRank ? `${cap(mainRank.division)} ${mainRank.tier ?? ''}`.trim() : null;

  const rec = {
    comp: { ...identity, ...toPlayerStats(compMerged || { general: {}, roles: {}, heroes: {} }) },
    all: { ...identity, ...toPlayerStats(allStats) },
    ranks,
    rankFallback: cfgItem.rankFallback || null,
    metrics: {
      comp: metricsMap(compDetail),
      all: combineMetricsMap(metricsMap(compDetail), metricsMap(qpDetail))
    },
    dets: {
      comp: detMap(compDetail),
      all: combineDetMap(detMap(compDetail), detMap(qpDetail))
    }
  };
  return rec;
}

/* ---------------- 前回ランキングとの順位変動(ヒーロー単位) ---------------- */
/* そのプレイヤーのヒーローを Power Rating(finalScore) 降順に並べた順位を作る */
function heroRanks(pool) {
  const list = Object.keys(pool || {})
    .filter((s) => pool[s] && typeof pool[s].finalScore === 'number')
    .map((s) => ({ slug: s, v: pool[s].finalScore }))
    .sort((a, b) => b.v - a.v);
  const m = new Map();
  list.forEach((x, i) => m.set(x.slug, i + 1));
  return m;
}
/* 前回ファイルのプールと比較して rankDelta(正=順位アップ) / rankNew を各ヒーローへ埋め込む */
function applyHeroRankDelta(recs, prevList, poolOf) {
  const prevById = new Map();
  for (const p of (prevList || [])) if (p && p.id) prevById.set(p.id, heroRanks(poolOf(p)));
  for (const rec of recs) {
    if (!rec || !rec.id) continue;
    const pool = poolOf(rec);
    if (!pool) continue;
    const prev = prevById.get(rec.id);
    const cur = heroRanks(pool);
    for (const [slug, rank] of cur) {
      const b = pool[slug];
      if (!b) continue;
      delete b.rankDelta;
      delete b.rankNew;
      if (!prev) continue;                                  // 前回データ無し=比較不能(バッジを出さない)
      const pr = prev.get(slug);
      if (pr == null) b.rankNew = true;                      // 前回のランキングに無いヒーロー
      else if (pr !== rank) b.rankDelta = pr - rank;          // 正=順位アップ / 負=順位ダウン
    }
  }
}

/* ---------------- serialize ---------------- */
function serialize(compList, allList) {
  const now = new Date().toISOString();
  return `'use strict';

/* 生成データ: update.mjs が自動生成(手編集は上書き) ・ 元データ: OverFast API */
const LAST_UPDATED_ISO = ${JSON.stringify(now)};
/* ライバル・プレイ(コンペティティブ)のみ */
const PLAYERS_COMP = ${JSON.stringify(compList, null, 2)};
/* 全モード(クイック・プレイ + ライバル・プレイの合算) */
const PLAYERS_ALL = ${JSON.stringify(allList, null, 2)};
`;
}

/* ---------------- main ---------------- */
console.log('== OW 身内ランキング: データ更新(Power Rating 5要素 / ブロンズ基準ランク係数) ==');
await syncHeroMeta();   // 新ヒーローが追加されていれば heroes-meta.js に追記
const RECS = [];
for (const item of cfg.players) {
  const prevC = PREV.comp.find((p) => p.id === item.id);
  const prevA = PREV.all.find((p) => p.id === item.id);
  try {
    const rec = await fetchPlayer(item, (prevA && prevA.pid) || (prevC && prevC.pid) || null);
    rec.fresh = true;
    RECS.push(rec);
    const c = rec.comp, a = rec.all;
    console.log(`  ✓ ${rec.comp.name}: comp ${c.overall.matches}戦 / all ${a.overall.matches}戦 / メイン:${c.role} ${c.rankTier || ''} / id:${(rec.comp.pid || '').slice(0, 12)}…`);
  } catch (e) {
    console.error(`  ✗ ${item.search || item.id}: ${e.message}`);
    if (prevC || prevA) {
      console.log('    → 前回データを維持');
      RECS.push({ comp: prevC, all: prevA, ranks: (prevC && prevC.ranks) || {}, metrics: { comp: {}, all: {} }, dets: { comp: {}, all: {} } });
    } else throw new Error(`更新失敗(前回データなし): ${item.search || item.id}`);
  }
  await sleep(400);
}
if (!DRY) {
  // 偏差値を「同ヒーローを使う全プレイヤー」で計算してから各プレイヤーへ適用
  const statsComp = buildDatasetStats(RECS, 'comp');
  const statsAll = buildDatasetStats(RECS, 'all');
  for (const rec of RECS) {
    if (!rec.fresh) continue; // フォールバック時は既存データ保持
    rec.comp.bscore = playerScores(rec, statsComp, 'comp');
    rec.all.bscore = playerScores(rec, statsAll, 'all');
    rec.all.bscoreAll = rec.all.bscore;
  }
  // 簡単・強いキャラ: プレイヤー間のスコア幅を12以内に圧縮(全プレイヤー分をまとめてから・Makkyは除外)
  compressEasySpreads(RECS.map((r) => ({ id: r.comp && r.comp.id, bs: r.comp && r.comp.bscore })));
  compressEasySpreads(RECS.map((r) => ({ id: r.all && r.all.id, bs: r.all && r.all.bscore })));
  // Makky(全モード)のレート差が大きすぎるため、最上位はそのまま・最下位が90になるよう線形に底上げ
  liftMakkyFloor(RECS.map((r) => ({ id: r.all && r.all.id, bs: r.all && r.all.bscore })));
  // 前回のランキング(生成前の players-data.js)と比べたヒーロー順位の変動を埋め込む
  applyHeroRankDelta(RECS.map((r) => r.all).filter(Boolean), PREV.all, (p) => p.bscoreAll || p.bscore);
  applyHeroRankDelta(RECS.map((r) => r.comp).filter(Boolean), PREV.comp, (p) => p.bscore);
}
const COMP_OUT = RECS.map((r) => r.comp);
const ALL_OUT = RECS.map((r) => r.all);
if (DRY) { console.log('(--dry: 書き込みなし)'); process.exit(0); }
writeFileSync(resolve(ROOT, 'players-data.js'), serialize(COMP_OUT, ALL_OUT), 'utf8');
console.log(`\n✓ players-data.js 更新完了 (${COMP_OUT.length}人 × 2モード / Power Rating 5要素・ブロンズ基準)`);
if (UNKNOWN_HEROES.size) {
  console.log(`⚠ heroes-meta.js に無いヒーロー: ${[...UNKNOWN_HEROES].join(', ')}`);
  console.log('  (OverFast の /heroes にまだ無い新キャラの可能性。表示は名前=slug・ロール未設定になります)');
}
