'use strict';
/* V6 ヒーローパワースコア計算(実データ構造: heroData = [{category, stats:[{key,value}]}]) */

const BAYESIAN_FACTOR = 10;
const GLOBAL_AVG_WINRATE = 50;
const RANK_VALUE = { bronze: 0, silver: 5, gold: 10, platinum: 15, emerald: 20, diamond: 25, master: 30, grandmaster: 34 };
const MAX_RANK_VALUE = 38;

export function getStat(heroData, category, key) {
  if (!Array.isArray(heroData)) return 0;
  const cat = heroData.find((c) => c && c.category === category);
  if (!cat || !Array.isArray(cat.stats)) return 0;
  const s = cat.stats.find((x) => x && x.key === key);
  return s ? Number(s.value) || 0 : 0;
}
const getCombat = (hd, k) => getStat(hd, 'combat', k);
const getGame = (hd, k) => getStat(hd, 'game', k);
const getHero = (hd, k) => getStat(hd, 'hero_specific', k);
const getAvg = (hd, k) => getStat(hd, 'average', k);
const max1 = (v) => Math.max(v, 1);

function getAdjustedWinrate(winrate, games) {
  return (winrate * games + GLOBAL_AVG_WINRATE * BAYESIAN_FACTOR) / (games + BAYESIAN_FACTOR);
}
function getTierBonus(tier) { return tier ? Math.max(0, 5 - tier) : 0; }
function getRankNumeric(division, tier) { return (RANK_VALUE[division] || 0) + getTierBonus(tier); }
function getRankScore(division, tier) { return Math.min(getRankNumeric(division, tier) / MAX_RANK_VALUE * 10, 10); }
function getReliability(games) { return Math.min(1.0, 0.6 + games / 125); }

const normHero = (h) => String(h || '').toLowerCase().replace(/[^a-z0-9]/g, '');

function calcHeroSpecific(slug, hd, role) {
  let s = 0;
  const games = max1(getGame(hd, 'games_played'));
  const h = (k) => getHero(hd, k);
  switch (slug) {
    case 'dva': case 'd.va':
      s += Math.min(h('self_destruct_kills') / games / 2 * 4, 4);
      s += Math.min(h('damage_blocked') / 1000, 3);
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 50 * 2, 2); break;
    case 'doomfist':
      s += Math.min(h('ability_damage_done') / 1000, 4);
      s += Math.min(getAvg(hd, 'ability_kills_avg_per_10_min') / 5 * 3, 3);
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 40 * 2, 2); break;
    case 'junkerqueen': case 'junker-queen':
      s += Math.min(h('quick_melee_kills') / 2, 3);
      s += Math.min(h('wound_kills') / 2, 3);
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 40 * 3, 3); break;
    case 'orisa':
      s += Math.min(h('terra_surge_kills') / games / 3 * 4, 4);
      s += Math.min(h('energy_javelin_accuracy') / 50 * 3, 3);
      s += Math.min(h('javelin_spin_kills') / 2, 2); break;
    case 'ramattra':
      s += Math.min(h('annihilation_kills') / 2, 3);
      s += Math.min(h('damage_blocked') / 1000, 3);
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 45 * 3, 3); break;
    case 'reinhardt':
      s += Math.min(h('charge_kills') / games / 3 * 4, 4);
      s += Math.min(h('damage_blocked') / 1000, 3);
      s += Math.min(h('fire_strike_kills') / 3, 2); break;
    case 'roadhog':
      s += Math.min(h('chain_hook_accuracy') / 50 * 4, 4);
      s += Math.min(h('chain_hook_kills') / games / 5 * 3, 3);
      s += Math.min(h('whole_hog_kills') / 2, 2); break;
    case 'sigma':
      s += Math.min(h('accretion_kills') / 2, 3);
      s += Math.min(h('damage_blocked') / 1000, 3);
      s += Math.min(h('damage_absorbed') / 500, 3); break;
    case 'winston':
      s += Math.min(h('players_knocked_back') / 10, 3);
      s += Math.min(h('damage_blocked') / 1000, 3);
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 40 * 3, 3); break;
    case 'wreckingball': case 'wrecking-ball': case 'wrecking_ball':
      s += Math.min(h('grappling_claw_kills') / 3, 3);
      s += Math.min(h('piledriver_kills') / 3, 3);
      s += Math.min(h('damage_blocked') / 1000, 3); break;
    case 'zarya':
      s += Math.min(h('average_energy') / 50 * 4, 4);
      s += Math.min(h('damage_blocked') / 1000, 3);
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 45 * 2, 2); break;
    case 'ashe':
      s += Math.min(h('dynamite_kills') / 3, 3);
      s += Math.min(h('scoped_accuracy') / 50 * 3, 3);
      s += Math.min(h('bob_kills') / 3, 3); break;
    case 'bastion':
      s += Math.min(h('recon_kills') / 3, 3);
      s += Math.min(h('tactical_grenade_kills') / 3, 3);
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 45 * 3, 3); break;
    case 'cassidy':
      s += Math.min(h('flashbang_kills') / games / 4 * 3, 3);
      s += Math.min(h('deadeye_kills') / games / 2 * 3, 3);
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 50 * 3, 3); break;
    case 'echo':
      s += Math.min(h('duplicate_kills') / 3, 3);
      s += Math.min(h('sticky_bombs_kills') / 3, 3);
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 45 * 3, 3); break;
    case 'genji':
      s += Math.min(h('dragonblade_kills') / games / 3 * 4, 4);
      s += Math.min(h('damage_reflected') / 1000, 3);
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 40 * 2, 2); break;
    case 'hanzo':
      s += Math.min(h('storm_arrows_kills') / games / 4 * 3, 3);
      s += Math.min(h('dragonstrike_kills') / games / 2 * 3, 3);
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 35 * 3, 3); break;
    case 'junkrat':
      s += Math.min(h('rip_tire_kills') / games / 3 * 3, 3);
      s += Math.min(h('direct_hit_accuracy') / 30 * 3, 3);
      s += Math.min(h('concussion_mine_kills') / games / 5 * 3, 3); break;
    case 'mei':
      s += Math.min(h('enemies_frozen') / 5, 3);
      s += Math.min(h('blizzard_kills') / 3, 3);
      s += Math.min(h('damage_blocked') / 1000, 3); break;
    case 'pharah':
      s += Math.min(h('rocket_direct_hits') / 10, 3);
      s += Math.min(h('barrage_kills') / 3, 3);
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 45 * 3, 3); break;
    case 'reaper':
      s += Math.min(h('self_healing') / 500, 3);
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 40 * 3, 3);
      s += Math.min(getCombat(hd, 'critical_hit_accuracy') / 8 * 3, 3); break;
    case 'sojourn':
      s += Math.min(h('railgun_kills') / 5, 3);
      s += Math.min(h('overclock_kills') / 3, 3);
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 45 * 3, 3); break;
    case 'soldier76': case 'soldier-76': case 'soldier_76':
      s += Math.min(h('biotic_field_healing_done') / 500, 3);
      s += Math.min(h('tactical_visor_kills') / 3, 3);
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 45 * 3, 3); break;
    case 'sombra':
      s += Math.min(h('enemies_hacked') / 10, 3);
      s += Math.min(h('emp_kills') / 3, 3);
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 40 * 3, 3); break;
    case 'symmetra':
      s += Math.min(h('sentry_turret_kills') / 5, 3);
      s += Math.min(h('players_teleported') / 5, 3);
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 50 * 3, 3); break;
    case 'torbjorn': case 'torbjörn':
      s += Math.min(h('turret_kills') / 5, 3);
      s += Math.min(h('molten_core_kills') / 3, 3);
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 40 * 3, 3); break;
    case 'tracer':
      s += Math.min(h('pulse_bomb_attach_rate') / 70 * 4, 4);
      s += Math.min(h('pulse_bombs_attached') / games / 3 * 3, 3);
      s += Math.min(h('low_health_recalls') / 5, 2); break;
    case 'venture':
      s += Math.min(h('drill_dash_kills') / 3, 3);
      s += Math.min(h('tectonic_shock_kills') / 2, 3);
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 40 * 3, 3); break;
    case 'widowmaker':
      s += Math.min(h('scoped_accuracy') / 50 * 5, 5);
      s += Math.min(h('long_range_final_blows') / games / 3 * 2, 2);
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 45 * 2, 2); break;
    case 'ana':
      s += Math.min(h('sleep_dart_accuracy') / 50 * 4, 4);
      s += Math.min(h('scoped_accuracy') / 60 * 3, 3);
      s += Math.min(h('enemies_slept') / games / 5 * 2, 2); break;
    case 'baptiste':
      s += Math.min(h('amplification_matrix_assists') / 5, 3);
      s += Math.min(h('regenerative_burst_healing') / 500, 3);
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 40 * 3, 3); break;
    case 'brigitte':
      s += Math.min(h('inspire_uptime_percentage') / 50 * 3, 3);
      s += Math.min(h('armor_provided') / 500, 3);
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 40 * 3, 3); break;
    case 'illari':
      s += Math.min(h('healing_sentry_kills') / 3, 3);
      s += Math.min(h('captive_sun_kills') / 2, 3);
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 45 * 3, 3); break;
    case 'juno': case 'junokitty':
      s += Math.min(h('orbital_ray_kills') / 3, 3);
      s += Math.min(h('pulsar_torpedo_lock-ons') / 10, 3);
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 45 * 3, 3); break;
    case 'kiriko':
      s += Math.min(h('kitsune_rush_assists') / 5, 3);
      s += Math.min(h('protection_suzu_assists') / 5, 3);
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 45 * 3, 3); break;
    case 'lifeweaver':
      s += Math.min(h('life_grip_cleanses') / 5, 3);
      s += Math.min(h('petal_platform_uses') / 5, 3);
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 40 * 3, 3); break;
    case 'lucio':
      s += Math.min(h('sound_barriers_provided') / games / 10 * 4, 4);
      s += Math.min(h('players_knocked_back') / 10, 3);
      s += Math.min(h('self_healing') / 500, 2); break;
    case 'mercy':
      s += Math.min(h('players_resurrected') / games / 3 * 4, 4);
      s += Math.min(h('damage_boosted') / 500, 3);
      s += Math.min(h('blaster_kills') / 3, 2); break;
    case 'moira':
      s += Math.min(h('coalescence_kills') / 3, 3);
      s += Math.min(h('coalescence_healing') / 500, 3);
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 40 * 3, 3); break;
    case 'zenyatta':
      s += Math.min(h('charged_volley_accuracy') / 35 * 4, 4);
      s += Math.min(h('transcendence_healing') / 500, 3);
      s += Math.min(h('damage_amplified') / 500, 2); break;
    default:
      s += Math.min(getCombat(hd, 'weapon_accuracy') / 50 * 5, 5);
      s += Math.min(getCombat(hd, 'critical_hit_accuracy') / 10 * 4, 4);
  }
  return Math.min(s, 9);
}

export function computePowerScore(heroData, heroName, role, playerRank) {
  const games = getGame(heroData, 'games_played') || 0;
  const winrate = getGame(heroData, 'win_percentage') || 0;
  const elims = getCombat(heroData, 'eliminations');
  const deaths = getCombat(heroData, 'deaths');
  const kda = elims / Math.max(deaths, 1);
  const avgElim = elims / max1(games);
  const avgDeaths = deaths / max1(games);
  const avgDamage = getCombat(heroData, 'hero_damage_done') / max1(games);
  const avgHealing = getCombat(heroData, 'healing_done') / max1(games);
  const avgAssists = getStat(heroData, 'assists', 'assists') / max1(games);
  const adjWr = getAdjustedWinrate(winrate, games);

  const winScore = Math.max(0, Math.min((adjWr - 35) / 50 * 18, 18));
  const kdaScore = Math.max(0, (Math.min(kda, 6) - 0.5) / 5.5 * 18);

  let deathBase, deathMax;
  if (role === 'tank' || role === 'support') { deathBase = 7; deathMax = 4; }
  else { deathBase = 9; deathMax = 5; }
  const deathScore = Math.max(0, Math.min((deathBase - Math.min(avgDeaths, deathBase)) / (deathBase - deathMax) * 12, 12));

  let elimBase, elimMax;
  if (role === 'support') { elimBase = 5; elimMax = 18; }
  else if (role === 'tank') { elimBase = 12; elimMax = 28; }
  else { elimBase = 15; elimMax = 35; }
  const elimScore = Math.max(0, Math.min((avgElim - elimBase) / (elimMax - elimBase) * 10, 10));

  let actionScore = 0;
  if (role === 'support') {
    actionScore = Math.min(Math.min(avgHealing / 1000, 5) + Math.min(avgDamage / 3000, 3) + Math.min(avgAssists / 3, 2), 10);
  } else if (role === 'tank') {
    actionScore = Math.min(Math.min(avgDamage / 1000, 7) + Math.min(Math.max(avgElim - 15, 0) / 10 * 3, 3), 10);
  } else {
    actionScore = Math.min(Math.min(avgDamage / 1000, 8) + Math.min(Math.max(avgElim - 18, 0) / 12 * 2, 2), 10);
  }

  const weaponAcc = getCombat(heroData, 'weapon_accuracy') || 0;
  const critAcc = getCombat(heroData, 'critical_hit_accuracy') || 0;
  let weaponScore = 0, critScore = 0;
  if (role === 'damage') { weaponScore = Math.min(weaponAcc / 50 * 7, 7); critScore = Math.min(critAcc / 12 * 3, 3); }
  else if (role === 'tank') { weaponScore = Math.min(weaponAcc / 45 * 7, 7); critScore = Math.min(critAcc / 10 * 3, 3); }
  else { weaponScore = Math.min(weaponAcc / 40 * 6, 6); critScore = Math.min(critAcc / 8 * 4, 4); }
  const accuracyScore = Math.min(weaponScore + critScore, 10);

  const gs = max1(games);
  const soloKills = getCombat(heroData, 'solo_kills');
  const fireTime = getCombat(heroData, 'time_spent_on_fire');
  const cards = getStat(heroData, 'match_awards', 'cards');
  const multikills = getCombat(heroData, 'multikills');
  const carryScore = Math.min(Math.min(soloKills / gs / 2 * 3, 3) + Math.min(fireTime / gs / 80 * 3, 3) + Math.min((cards + multikills * 1.5) / gs * 2, 2), 8);

  const objKills = getCombat(heroData, 'objective_kills');
  const objTime = getCombat(heroData, 'objective_time');
  const objectiveScore = Math.min(Math.min(objKills / gs / 5 * 3, 3) + Math.min(objTime / gs / 60 * 2, 2), 5);

  const heroSpecific = Math.min(calcHeroSpecific(normHero(heroName), heroData, role), 9);
  const baseTotal = winScore + kdaScore + deathScore + elimScore + actionScore + accuracyScore + carryScore + objectiveScore + heroSpecific;

  let rankNumeric = 0, rankScore = 0;
  if (playerRank && playerRank.division) {
    rankNumeric = getRankNumeric(playerRank.division, playerRank.tier);
    rankScore = getRankScore(playerRank.division, playerRank.tier);
  }
  const rescaled = (baseTotal + rankScore) / 110 * 100;
  const reliability = getReliability(games);
  const tieBreaker = (games / 10000) + (adjWr / 10000) + (Math.min(kda, 6) / 10000) + (avgElim / 100000) + (rankNumeric / 100000) + (accuracyScore / 100000);
  const finalScore = rescaled * reliability + tieBreaker;

  return {
    winScore: r2(winScore), kdaScore: r2(kdaScore), deathScore: r2(deathScore), elimScore: r2(elimScore),
    actionScore: r2(actionScore), accuracyScore: r2(accuracyScore), carryScore: r2(carryScore),
    objectiveScore: r2(objectiveScore), heroSpecificScore: r2(heroSpecific),
    baseTotal: r2(baseTotal), rankScore: r2(rankScore), rankNumeric,
    rescaledScore: r2(rescaled), reliability: r2(reliability),
    finalScore: r2(finalScore), isLowReliability: reliability < 0.8, gamesPlayed: games,
    adjWr: r2(adjWr), kda: r2(kda), tier: scoreTier(finalScore)
  };
}
function r2(x) { return Math.round(x * 100) / 100; }
/* 詳細statsの要約(表示用) */
export function detailOf(hd) {
  return {
    g: getGame(hd, 'games_played'),
    time: getGame(hd, 'time_played'),
    wr: getGame(hd, 'win_percentage'),
    el10: getAvg(hd, 'eliminations_avg_per_10_min'),
    de10: getAvg(hd, 'deaths_avg_per_10_min'),
    dm10: getAvg(hd, 'hero_damage_done_avg_per_10_min'),
    he10: getAvg(hd, 'healing_done_avg_per_10_min'),
    as10: getAvg(hd, 'assists_avg_per_10_min'),
    wa: getStat(hd, 'combat', 'weapon_accuracy'),
    ca: getStat(hd, 'combat', 'critical_hit_accuracy')
  };
}
export function scoreTier(powerScore) {
  if (powerScore >= 80) return { t: 'S', c: 'purple', l: 'Sランク' };
  if (powerScore >= 70) return { t: 'A', c: 'blue-purple', l: 'Aランク' };
  if (powerScore >= 60) return { t: 'B', c: 'blue', l: 'Bランク' };
  if (powerScore >= 50) return { t: 'C', c: 'green', l: 'Cランク' };
  if (powerScore >= 40) return { t: 'D', c: 'yellow', l: 'Dランク' };
  return { t: 'E', c: 'red', l: 'Eランク' };
}
