'use strict';
/**
 * プレイヤーデータ自動更新スクリプト v2(依存ゼロ / Node 18+)
 * - モード別に「ライバル・プレイのみ(competitive)」と「全モード(= quickplay + competitive の合算)」を出力
 * - players.json の各プレイヤーを OverFast API で名前検索 → summary / stats 取得
 * - players-data.js を再生成
 *
 * 使い方:
 *   node update.mjs            # 通常更新
 *   node update.mjs --dry      # 結果だけ表示
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = dirname(fileURLToPath(import.meta.url));
const API = 'https://overfast-api.tekrop.fr';
const UA = 'ow-friend-rankings-updater/2.0 (personal use)';
const DRY = process.argv.includes('--dry');
const PLAYER_ORDER = ['Tank', 'Damage', 'Support'];
const RANK_ORDER = ['bronze', 'silver', 'gold', 'platinum', 'diamond', 'emerald', 'master', 'grandmaster'];

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
      if (res.status === 404 || res.status === 422) return null;
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

/* 前回データ(失敗時フォールバック) */
function loadPrevious() {
  const file = resolve(ROOT, 'players-data.js');
  if (!existsSync(file)) return [];
  try {
    const sandbox = {};
    vm.createContext(sandbox);
    const src = readFileSync(file, 'utf8') + '\n;globalThis.__PREV__ = (typeof PLAYERS_COMP!=="undefined"?PLAYERS_COMP:[]);';
    vm.runInContext(src, sandbox, { filename: 'players-data.js' });
    return Array.isArray(sandbox.__PREV__) ? sandbox.__PREV__ : [];
  } catch { return []; }
}
const PREV = loadPrevious();

/* ---------------- 検索・取得 ---------------- */
async function resolvePlayerId(searchName) {
  const data = await apiGet(`${API}/players?name=${encodeURIComponent(searchName)}&limit=10`);
  const list = (data && data.results) || [];
  return list.map((x) => x.player_id).filter(Boolean);
}

function pickPlatform(summary) {
  const c = summary.competitive || {};
  return c.pc || c.console || null;
}
function normalizeRanks(summary) {
  const ranks = { Tank: null, Damage: null, Support: null };
  const plat = pickPlatform(summary);
  if (!plat) return ranks;
  for (const role of PLAYER_ORDER) {
    const r = plat[role.toLowerCase()];
    if (r && r.division) {
      ranks[role] = { division: r.division, tier: r.tier ?? 0, icon: r.rank_icon || '' };
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
  for (const r of PLAYER_ORDER) {
    const sc = roleRankVal(ranks[r]);
    if (sc > bestScore) { bestScore = sc; best = r; }
  }
  if (best) return best;
  let bestN = -1;
  for (const r of PLAYER_ORDER) {
    const g = allGames[r.toLowerCase()] || 0;
    if (g > bestN) { bestN = g; best = r; }
  }
  return best || 'Damage';
}

/* ---------------- 統計マージ/整形 ---------------- */
function nodeInt(s) {
  const tot = (s && s.total) || {};
  return {
    g: num(s && s.games_played), w: num(s && s.games_won), l: num(s && s.games_lost),
    time: num(s && s.time_played),
    elims: num(tot.eliminations), assists: num(tot.assists), deaths: num(tot.deaths),
    dmg: num(tot.damage), heal: num(tot.healing)
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
/* 複数gamemodeの旧形式stats {general,roles,heroes} を1つに合算 */
function mergeStats(list) {
  const out = { general: {}, roles: {}, heroes: {} };
  const rolesAll = new Set();
  const heroesAll = new Set();
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
/* 合算済みオブジェクトをページ用データに変換 */
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
    heroes.push({ slug, n: META.name[slug] || slug, role: META.role[slug] || '', g: f.g, wr: f.wr, kda: f.kda });
  }
  heroes.sort((a, b) => b.g - a.g);
  return {
    overall: {
      matches: overall.g, wins: overall.w, losses: overall.l, wr: overall.wr, kda: overall.kda,
      elim: overall.elim, deaths: overall.deaths, dmg: overall.dmg, heal: overall.heal, time: overall.time
    },
    roles,
    heroes
  };
}

/* ---------------- 1プレイヤー ---------------- */
async function fetchPlayer(cfgItem) {
  const ids = await resolvePlayerId(cfgItem.search);
  if (!ids || !ids.length) throw new Error(`検索結果なし: ${cfgItem.search}`);
  let lastErr = null;
  for (const pid of ids) {
    const summary = await apiGet(`${API}/players/${encodeURIComponent(pid)}/summary`);
    if (!summary) { lastErr = new Error('summary取得失敗'); continue; }
    const compRaw = await apiGet(`${API}/players/${encodeURIComponent(pid)}/stats/summary?gamemode=competitive&platform=pc`);
    const qpRaw = await apiGet(`${API}/players/${encodeURIComponent(pid)}/stats/summary?gamemode=quickplay&platform=pc`);
    if (!compRaw && !qpRaw) { lastErr = new Error('stats取得失敗'); continue; }
    return buildPlayer(cfgItem, summary, compRaw, qpRaw);
  }
  throw lastErr || new Error('取得失敗');
}
function buildPlayer(cfgItem, summary, compRaw, qpRaw) {
  const compStats = compRaw && compRaw.general ? compRaw : null;
  const qpStats = qpRaw && qpRaw.general ? qpRaw : null;
  // 全モード = quickplay + competitive(どちらか欠けたら片方で代用)
  const allStats = mergeStats([qpStats, compStats]);
  const compMerged = mergeStats([compStats]);
  const ranks = normalizeRanks(summary);

  // メインロール決定用: 全モードの各ロール試合数
  const allGames = {};
  for (const role of PLAYER_ORDER) allGames[role.toLowerCase()] = (allStats.roles[role.toLowerCase()] || {}).g || 0;

  const identity = {
    id: cfgItem.id,
    name: summary.username || cfgItem.search,
    tag: cfgItem.tag || '',
    endorse: summary.endorsement && summary.endorsement.level != null ? summary.endorsement.level : null,
    title: summary.title || null,
    avatar: summary.avatar || '',
    namecard: summary.namecard || '',
    role: cfgItem.role || pickMainRole(ranks, allGames),
    ranks,
  };
  const mainRank = ranks[identity.role];
  identity.rankTier = mainRank ? `${cap(mainRank.division)} ${mainRank.tier ?? ''}`.trim() : null;

  const comp = toPlayerStats(compMerged || { general: {}, roles: {}, heroes: {} });
  const all = toPlayerStats(allStats);
  return {
    comp: { ...identity, ...comp },
    all: { ...identity, ...all }
  };
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
console.log('== OW 身内ランキング: データ更新(2モード) ==');
const COMP_OUT = [], ALL_OUT = [];
for (const item of cfg.players) {
  const prev = PREV.find((p) => p.id === item.id);
  try {
    const both = await fetchPlayer(item);
    COMP_OUT.push(both.comp);
    ALL_OUT.push(both.all);
    const c = both.comp, a = both.all;
    console.log(`  ✓ ${item.search}: comp ${c.overall.matches}戦(WR${c.overall.wr}%) / all ${a.overall.matches}戦(WR${a.overall.wr}%) / メイン:${c.role} ${c.rankTier || ''}`);
  } catch (e) {
    console.error(`  ✗ ${item.search}: ${e.message}`);
    if (prev) {
      console.log('    → 前回データを維持');
      COMP_OUT.push(prev);
      ALL_OUT.push(prev);
    } else throw new Error(`更新失敗: ${item.search}`);
  }
  await sleep(400);
}
if (DRY) { console.log('(--dry: 書き込みなし)'); process.exit(0); }
writeFileSync(resolve(ROOT, 'players-data.js'), serialize(COMP_OUT, ALL_OUT), 'utf8');
console.log(`\n✓ players-data.js 更新完了 (${COMP_OUT.length}人 × 2モード)`);
