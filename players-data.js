'use strict';

/* 生成データ: update.mjs が自動生成(手編集は上書き) ・ 元データ: OverFast API */
const LAST_UPDATED_ISO = "2026-09-11T06:56:06.421Z";
/* ライバル・プレイ(コンペティティブ)のみ */
const PLAYERS_COMP = [
  {
    "id": "hiyori",
    "name": "ひよりっつぁっん",
    "tag": "#3327",
    "endorse": 2,
    "title": "Doppelganger",
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/18489e7f5907f779b7be96e5ce455360889a8f1a75da09dcf17ef374020ff841.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e1ad0e4fbed41fa30cbe653f3b24660aa92ec0cddef43008186349ff69739f56.png",
    "role": "Damage",
    "ranks": {
      "Tank": null,
      "Damage": {
        "division": "platinum",
        "tier": 3,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_PlatinumTier.694340e3a5b2031d4fac9eb1d8f52c6855d4c072.png"
      },
      "Support": null
    },
    "rankTier": "Platinum 3",
    "overall": {
      "matches": 51,
      "wins": 29,
      "losses": 22,
      "wr": 56.86,
      "kda": 2.29,
      "elim": 19.22,
      "deaths": 8.39,
      "dmg": 11299.9,
      "heal": 886.03,
      "time": 34838
    },
    "roles": {
      "Damage": {
        "g": 50,
        "w": 28,
        "l": 22,
        "time": 34120,
        "wr": 56,
        "kda": 2.27,
        "elim": 19.13,
        "deaths": 8.44,
        "dmg": 11432.76,
        "heal": 697.81
      },
      "Support": {
        "g": 1,
        "w": 1,
        "l": 0,
        "time": 718,
        "wr": 100,
        "kda": 4,
        "elim": 23.4,
        "deaths": 5.85,
        "dmg": 4986.35,
        "heal": 9830.64
      }
    },
    "heroes": [
      {
        "slug": "soldier-76",
        "n": "Soldier: 76",
        "role": "Damage",
        "g": 30,
        "wr": 56.67,
        "kda": 2.39
      },
      {
        "slug": "shion",
        "n": "Shion",
        "role": "Damage",
        "g": 6,
        "wr": 50,
        "kda": 2.5
      },
      {
        "slug": "cassidy",
        "n": "Cassidy",
        "role": "Damage",
        "g": 5,
        "wr": 80,
        "kda": 2.06
      },
      {
        "slug": "ashe",
        "n": "Ashe",
        "role": "Damage",
        "g": 2,
        "wr": 0,
        "kda": 1.8
      },
      {
        "slug": "bastion",
        "n": "Bastion",
        "role": "Damage",
        "g": 2,
        "wr": 50,
        "kda": 2.74
      },
      {
        "slug": "emre",
        "n": "Emre",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 1
      },
      {
        "slug": "freja",
        "n": "Freja",
        "role": "Damage",
        "g": 1,
        "wr": 100,
        "kda": 1.63
      },
      {
        "slug": "juno",
        "n": "Juno",
        "role": "Support",
        "g": 1,
        "wr": 100,
        "kda": 4
      },
      {
        "slug": "pharah",
        "n": "Pharah",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 1.65
      },
      {
        "slug": "sojourn",
        "n": "Sojourn",
        "role": "Damage",
        "g": 1,
        "wr": 100,
        "kda": 7.67
      },
      {
        "slug": "tracer",
        "n": "Tracer",
        "role": "Damage",
        "g": 1,
        "wr": 100,
        "kda": 1.5
      }
    ],
    "bscore": {
      "ashe": {
        "finalScore": 40.84,
        "battleScore": 36.1,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 836,
          "wr": 0,
          "el10": 12.91,
          "de10": 7.17,
          "dm10": 7503,
          "he10": 0,
          "as10": 0.72,
          "wa": 35,
          "ca": 26
        },
        "rankDelta": 3
      },
      "bastion": {
        "finalScore": 60.58,
        "battleScore": 39.58,
        "coeff": 1.33,
        "matchCoef": 0.92,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 1722,
          "wr": 32,
          "el10": 21.96,
          "de10": 8.02,
          "dm10": 11954,
          "he10": 116,
          "as10": 3.14,
          "wa": 25,
          "ca": 3
        }
      },
      "cassidy": {
        "finalScore": 48.22,
        "battleScore": 42.09,
        "coeff": 1.33,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 3,
        "det": {
          "g": 5,
          "time": 3598,
          "wr": 84,
          "el10": 16.84,
          "de10": 8.17,
          "dm10": 9108,
          "he10": 0,
          "as10": 2,
          "wa": 44,
          "ca": 11
        }
      },
      "emre": {
        "finalScore": 40.32,
        "battleScore": 35.64,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 816,
          "wr": 0,
          "el10": 11.03,
          "de10": 11.03,
          "dm10": 9574,
          "he10": 491,
          "as10": 0,
          "wa": 32,
          "ca": 17
        },
        "rankDelta": -1
      },
      "freja": {
        "finalScore": 40.65,
        "battleScore": 35.93,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 479,
          "wr": 100,
          "el10": 16.3,
          "de10": 10.03,
          "dm10": 6165,
          "he10": 69.15,
          "as10": 0,
          "wa": 17,
          "ca": 21
        },
        "rankDelta": -2
      },
      "juno": {
        "finalScore": 37.71,
        "battleScore": 44.36,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 718,
          "wr": 100,
          "el10": 23.4,
          "de10": 5.85,
          "dm10": 4986,
          "he10": 9830,
          "as10": 20.06,
          "wa": 36,
          "ca": 11
        }
      },
      "pharah": {
        "finalScore": 43.02,
        "battleScore": 38.03,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 1113,
          "wr": 40,
          "el10": 17.79,
          "de10": 10.78,
          "dm10": 8778,
          "he10": 0,
          "as10": 0.54,
          "wa": 49,
          "ca": 0
        }
      },
      "shion": {
        "finalScore": 47.45,
        "battleScore": 40.67,
        "coeff": 1.33,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 3,
        "det": {
          "g": 6,
          "time": 3651,
          "wr": 56,
          "el10": 19.72,
          "de10": 7.89,
          "dm10": 7634,
          "he10": 50.74,
          "as10": 2.3,
          "wa": 33,
          "ca": 17
        }
      },
      "sojourn": {
        "finalScore": 56.07,
        "battleScore": 49.56,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 507,
          "wr": 100,
          "el10": 27.24,
          "de10": 3.55,
          "dm10": 10102,
          "he10": 0,
          "as10": 2.37,
          "wa": 27,
          "ca": 12
        }
      },
      "soldier-76": {
        "finalScore": 58.94,
        "battleScore": 43.59,
        "coeff": 1.33,
        "matchCoef": 1.02,
        "gamesPlayed": 30,
        "rankIndex": 3,
        "det": {
          "g": 30,
          "time": 20193,
          "wr": 58,
          "el10": 20.2,
          "de10": 8.47,
          "dm10": 10008,
          "he10": 1118,
          "as10": 0.92,
          "wa": 38,
          "ca": 13
        }
      },
      "tracer": {
        "finalScore": 40.73,
        "battleScore": 36,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 544,
          "wr": 75,
          "el10": 13.23,
          "de10": 8.82,
          "dm10": 5563,
          "he10": 0,
          "as10": 0,
          "wa": 34,
          "ca": 12
        }
      }
    }
  },
  {
    "id": "voidglove",
    "name": "ぼいどぐらぶ",
    "tag": "",
    "endorse": 3,
    "title": "Café Cutie",
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7daa20c3503d9754bed64a948dd5532ae128ed9b04dde0d61e76e6683cecd28d.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/293db3a1b56e50fb5531a64980fa86812516fa9ef86acef925bfffb138bf0724.png",
    "role": "Support",
    "ranks": {
      "Tank": {
        "division": "gold",
        "tier": 2,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_GoldTier.8d40eab551020b46a84002019dd98714149ed5e2.png"
      },
      "Damage": {
        "division": "platinum",
        "tier": 4,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_PlatinumTier.694340e3a5b2031d4fac9eb1d8f52c6855d4c072.png"
      },
      "Support": {
        "division": "platinum",
        "tier": 3,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_PlatinumTier.694340e3a5b2031d4fac9eb1d8f52c6855d4c072.png"
      }
    },
    "rankTier": "Platinum 3",
    "overall": {
      "matches": 107,
      "wins": 62,
      "losses": 45,
      "wr": 57.94,
      "kda": 2.66,
      "elim": 13.11,
      "deaths": 5.91,
      "dmg": 6801.17,
      "heal": 5044.91,
      "time": 68985
    },
    "roles": {
      "Tank": {
        "g": 14,
        "w": 9,
        "l": 5,
        "time": 9663,
        "wr": 64.29,
        "kda": 5.17,
        "elim": 21.92,
        "deaths": 4.66,
        "dmg": 11708.66,
        "heal": 1332.26
      },
      "Damage": {
        "g": 28,
        "w": 13,
        "l": 15,
        "time": 18322,
        "wr": 46.43,
        "kda": 1.77,
        "elim": 13.59,
        "deaths": 7.7,
        "dmg": 8033.52,
        "heal": 210.53
      },
      "Support": {
        "g": 65,
        "w": 40,
        "l": 25,
        "time": 41000,
        "wr": 61.54,
        "kda": 2.72,
        "elim": 10.81,
        "deaths": 5.41,
        "dmg": 5093.85,
        "heal": 8080.29
      }
    },
    "heroes": [
      {
        "slug": "ana",
        "n": "Ana",
        "role": "Support",
        "g": 28,
        "wr": 64.29,
        "kda": 3.31
      },
      {
        "slug": "kiriko",
        "n": "Kiriko",
        "role": "Support",
        "g": 19,
        "wr": 52.63,
        "kda": 2.24
      },
      {
        "slug": "cassidy",
        "n": "Cassidy",
        "role": "Damage",
        "g": 10,
        "wr": 70,
        "kda": 2.09
      },
      {
        "slug": "doomfist",
        "n": "Doomfist",
        "role": "Tank",
        "g": 7,
        "wr": 71.43,
        "kda": 5.61
      },
      {
        "slug": "wuyang",
        "n": "Wuyang",
        "role": "Support",
        "g": 6,
        "wr": 83.33,
        "kda": 2.35
      },
      {
        "slug": "freja",
        "n": "Freja",
        "role": "Damage",
        "g": 4,
        "wr": 50,
        "kda": 2.55
      },
      {
        "slug": "genji",
        "n": "Genji",
        "role": "Damage",
        "g": 3,
        "wr": 33.33,
        "kda": 1.59
      },
      {
        "slug": "illari",
        "n": "Illari",
        "role": "Support",
        "g": 3,
        "wr": 33.33,
        "kda": 1.53
      },
      {
        "slug": "mauga",
        "n": "Mauga",
        "role": "Tank",
        "g": 3,
        "wr": 66.67,
        "kda": 9.31
      },
      {
        "slug": "moira",
        "n": "Moira",
        "role": "Support",
        "g": 3,
        "wr": 66.67,
        "kda": 5.12
      },
      {
        "slug": "orisa",
        "n": "Orisa",
        "role": "Tank",
        "g": 3,
        "wr": 33.33,
        "kda": 3.58
      },
      {
        "slug": "tracer",
        "n": "Tracer",
        "role": "Damage",
        "g": 3,
        "wr": 33.33,
        "kda": 1.35
      },
      {
        "slug": "anran",
        "n": "Anran",
        "role": "Damage",
        "g": 2,
        "wr": 50,
        "kda": 1.47
      },
      {
        "slug": "brigitte",
        "n": "Brigitte",
        "role": "Support",
        "g": 2,
        "wr": 50,
        "kda": 1.67
      },
      {
        "slug": "mizuki",
        "n": "Mizuki",
        "role": "Support",
        "g": 2,
        "wr": 100,
        "kda": 1.88
      },
      {
        "slug": "sojourn",
        "n": "Sojourn",
        "role": "Damage",
        "g": 2,
        "wr": 0,
        "kda": 0.91
      },
      {
        "slug": "dmon",
        "n": "D.Mon",
        "role": "Tank",
        "g": 1,
        "wr": 100,
        "kda": 4
      },
      {
        "slug": "echo",
        "n": "Echo",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 1.43
      },
      {
        "slug": "jetpack-cat",
        "n": "Jetpack Cat",
        "role": "Support",
        "g": 1,
        "wr": 0,
        "kda": 2.1
      },
      {
        "slug": "reaper",
        "n": "Reaper",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 2.29
      },
      {
        "slug": "sierra",
        "n": "Sierra",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 0.89
      },
      {
        "slug": "soldier-76",
        "n": "Soldier: 76",
        "role": "Damage",
        "g": 1,
        "wr": 100,
        "kda": 4.4
      },
      {
        "slug": "zenyatta",
        "n": "Zenyatta",
        "role": "Support",
        "g": 1,
        "wr": 100,
        "kda": 1.5
      }
    ],
    "bscore": {
      "ana": {
        "finalScore": 56.46,
        "battleScore": 42.01,
        "coeff": 1.33,
        "matchCoef": 1.01,
        "gamesPlayed": 28,
        "rankIndex": 3,
        "det": {
          "g": 28,
          "time": 17246,
          "wr": 63,
          "el10": 10.79,
          "de10": 5.08,
          "dm10": 3860,
          "he10": 6578,
          "as10": 12.18,
          "wa": 52,
          "ca": 0
        }
      },
      "anran": {
        "finalScore": 57.14,
        "battleScore": 37.33,
        "coeff": 1.33,
        "matchCoef": 0.92,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 1068,
          "wr": 38,
          "el10": 12.36,
          "de10": 8.43,
          "dm10": 5361,
          "he10": 703,
          "as10": 0.56,
          "wa": 21,
          "ca": 14
        }
      },
      "brigitte": {
        "finalScore": 43.48,
        "battleScore": 38.43,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 907,
          "wr": 72,
          "el10": 9.26,
          "de10": 7.94,
          "dm10": 4131,
          "he10": 7220,
          "as10": 13.9,
          "wa": 0,
          "ca": 0
        }
      },
      "cassidy": {
        "finalScore": 49.36,
        "battleScore": 40.28,
        "coeff": 1.33,
        "matchCoef": 0.92,
        "gamesPlayed": 10,
        "rankIndex": 3,
        "det": {
          "g": 10,
          "time": 6269,
          "wr": 70,
          "el10": 15.98,
          "de10": 7.66,
          "dm10": 7700,
          "he10": 19.32,
          "as10": 1.72,
          "wa": 39,
          "ca": 12
        }
      },
      "dmon": {
        "finalScore": 45.63,
        "battleScore": 44.36,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 2,
        "det": {
          "g": 1,
          "time": 1233,
          "wr": 100,
          "el10": 19.47,
          "de10": 4.87,
          "dm10": 10494,
          "he10": 0,
          "as10": 2.92,
          "wa": 34,
          "ca": 0
        },
        "rankDelta": -1
      },
      "doomfist": {
        "finalScore": 50.71,
        "battleScore": 47.1,
        "coeff": 1.21,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 2,
        "det": {
          "g": 7,
          "time": 4026,
          "wr": 67,
          "el10": 23.4,
          "de10": 4.17,
          "dm10": 8142,
          "he10": 1785,
          "as10": 5.22,
          "wa": 27,
          "ca": 10
        },
        "rankDelta": 1
      },
      "echo": {
        "finalScore": 40.84,
        "battleScore": 36.1,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 487,
          "wr": 39,
          "el10": 12.31,
          "de10": 8.62,
          "dm10": 6633,
          "he10": 61.56,
          "as10": 0,
          "wa": 23,
          "ca": 12
        },
        "rankDelta": 1
      },
      "freja": {
        "finalScore": 46.77,
        "battleScore": 41.34,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 3,
        "det": {
          "g": 4,
          "time": 2502,
          "wr": 41,
          "el10": 13.43,
          "de10": 5.28,
          "dm10": 9136,
          "he10": 226,
          "as10": 0.48,
          "wa": 22,
          "ca": 19
        }
      },
      "genji": {
        "finalScore": 39.39,
        "battleScore": 34.81,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 3,
        "det": {
          "g": 3,
          "time": 2068,
          "wr": 40,
          "el10": 13.35,
          "de10": 8.42,
          "dm10": 5156,
          "he10": 267,
          "as10": 0,
          "wa": 25,
          "ca": 14
        },
        "rankDelta": -6
      },
      "illari": {
        "finalScore": 41.28,
        "battleScore": 36.49,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 3,
        "det": {
          "g": 3,
          "time": 1185,
          "wr": 33,
          "el10": 10.13,
          "de10": 7.6,
          "dm10": 5051,
          "he10": 8026,
          "as10": 7.6,
          "wa": 39,
          "ca": 17
        }
      },
      "jetpack-cat": {
        "finalScore": 41.67,
        "battleScore": 36.84,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 866,
          "wr": 0,
          "el10": 11.08,
          "de10": 6.93,
          "dm10": 2153,
          "he10": 7746,
          "as10": 13.16,
          "wa": 32,
          "ca": 7
        },
        "rankDelta": 2
      },
      "kiriko": {
        "finalScore": 50.52,
        "battleScore": 38.88,
        "coeff": 1.33,
        "matchCoef": 0.98,
        "gamesPlayed": 19,
        "rankIndex": 3,
        "det": {
          "g": 19,
          "time": 12358,
          "wr": 51,
          "el10": 8.45,
          "de10": 5.44,
          "dm10": 2736,
          "he10": 10377,
          "as10": 16.99,
          "wa": 28,
          "ca": 12
        },
        "rankDelta": -1
      },
      "mauga": {
        "finalScore": 63.77,
        "battleScore": 45.83,
        "coeff": 1.21,
        "matchCoef": 0.92,
        "gamesPlayed": 3,
        "rankIndex": 2,
        "det": {
          "g": 3,
          "time": 2044,
          "wr": 62,
          "el10": 29.06,
          "de10": 3.82,
          "dm10": 13739,
          "he10": 1533,
          "as10": 9.39,
          "wa": 34,
          "ca": 10
        }
      },
      "mizuki": {
        "finalScore": 45.72,
        "battleScore": 40.41,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 1695,
          "wr": 83,
          "el10": 11.33,
          "de10": 6.02,
          "dm10": 4876,
          "he10": 9135,
          "as10": 12.04,
          "wa": 32,
          "ca": 14
        },
        "rankDelta": 1
      },
      "moira": {
        "finalScore": 69.96,
        "battleScore": 45.71,
        "coeff": 1.33,
        "matchCoef": 0.92,
        "gamesPlayed": 3,
        "rankIndex": 3,
        "det": {
          "g": 3,
          "time": 2321,
          "wr": 50,
          "el10": 22.49,
          "de10": 4.39,
          "dm10": 8079,
          "he10": 9230,
          "as10": 15.77,
          "wa": 0,
          "ca": 0
        }
      },
      "orisa": {
        "finalScore": 38.27,
        "battleScore": 37.21,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 2,
        "det": {
          "g": 3,
          "time": 1265,
          "wr": 0,
          "el10": 16.12,
          "de10": 5.69,
          "dm10": 10731,
          "he10": 238,
          "as10": 4.27,
          "wa": 35,
          "ca": 14
        }
      },
      "reaper": {
        "finalScore": 54.43,
        "battleScore": 37.17,
        "coeff": 1.33,
        "matchCoef": 0.92,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 578,
          "wr": 12,
          "el10": 16.61,
          "de10": 7.27,
          "dm10": 4608,
          "he10": 1156,
          "as10": 0,
          "wa": 23,
          "ca": 13
        },
        "rankDelta": -1
      },
      "sierra": {
        "finalScore": 40.07,
        "battleScore": 35.41,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 511,
          "wr": 0,
          "el10": 9.39,
          "de10": 10.56,
          "dm10": 6430,
          "he10": 0,
          "as10": 2.35,
          "wa": 20,
          "ca": 9
        },
        "rankDelta": 1
      },
      "sojourn": {
        "finalScore": 36.09,
        "battleScore": 31.9,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 1440,
          "wr": 18,
          "el10": 8.33,
          "de10": 9.16,
          "dm10": 5776,
          "he10": 0,
          "as10": 0,
          "wa": 23,
          "ca": 12
        }
      },
      "soldier-76": {
        "finalScore": 54.45,
        "battleScore": 48.12,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 612,
          "wr": 100,
          "el10": 21.58,
          "de10": 4.91,
          "dm10": 8961,
          "he10": 1725,
          "as10": 0.98,
          "wa": 32,
          "ca": 10
        },
        "rankDelta": 1
      },
      "tracer": {
        "finalScore": 40.4,
        "battleScore": 35.71,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 3,
        "det": {
          "g": 3,
          "time": 1665,
          "wr": 38,
          "el10": 11.17,
          "de10": 8.29,
          "dm10": 4199,
          "he10": 69.18,
          "as10": 0,
          "wa": 30,
          "ca": 10
        },
        "rankDelta": 1
      },
      "wuyang": {
        "finalScore": 49.86,
        "battleScore": 42.74,
        "coeff": 1.33,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 3,
        "det": {
          "g": 6,
          "time": 3926,
          "wr": 77,
          "el10": 12.23,
          "de10": 5.2,
          "dm10": 5844,
          "he10": 6739,
          "as10": 14.98,
          "wa": 32,
          "ca": 0
        }
      },
      "zenyatta": {
        "finalScore": 41.89,
        "battleScore": 37.03,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 452,
          "wr": 51,
          "el10": 7.97,
          "de10": 7.97,
          "dm10": 5594,
          "he10": 6974,
          "as10": 14.61,
          "wa": 25,
          "ca": 17
        },
        "rankDelta": 1
      }
    }
  },
  {
    "id": "maru",
    "name": "まる熊",
    "tag": "",
    "endorse": 3,
    "title": null,
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1cd47ddb9fdb23e20c3d869454d08db86a2e814e002cb19e80177d60923fbfaa.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5ed13bc3671c304b8d1e2de8fd882cb246f529c4f3aac0825a829e1b3256ae14.png",
    "role": "Damage",
    "ranks": {
      "Tank": null,
      "Damage": {
        "division": "diamond",
        "tier": 5,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_DiamondTier.bc8c5d6005f916c62c51728087aeb26f4facaa9b.png"
      },
      "Support": {
        "division": "emerald",
        "tier": 3,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_EmeraldTier.d82e76cb2deeac6d1f4d4cf4d8914517d903eeeb.png"
      }
    },
    "rankTier": "Diamond 5",
    "overall": {
      "matches": 32,
      "wins": 16,
      "losses": 16,
      "wr": 50,
      "kda": 2.76,
      "elim": 17.7,
      "deaths": 6.72,
      "dmg": 10091.6,
      "heal": 2081.51,
      "time": 22134
    },
    "roles": {
      "Damage": {
        "g": 23,
        "w": 11,
        "l": 12,
        "time": 16964,
        "wr": 47.83,
        "kda": 2.78,
        "elim": 19.56,
        "deaths": 7.04,
        "dmg": 10976.81,
        "heal": 213.38
      },
      "Support": {
        "g": 9,
        "w": 5,
        "l": 4,
        "time": 5170,
        "wr": 55.56,
        "kda": 2.69,
        "elim": 11.61,
        "deaths": 5.69,
        "dmg": 7187,
        "heal": 8211.3
      }
    },
    "heroes": [
      {
        "slug": "genji",
        "n": "Genji",
        "role": "Damage",
        "g": 8,
        "wr": 62.5,
        "kda": 3.1
      },
      {
        "slug": "cassidy",
        "n": "Cassidy",
        "role": "Damage",
        "g": 3,
        "wr": 0,
        "kda": 1.53
      },
      {
        "slug": "mizuki",
        "n": "Mizuki",
        "role": "Support",
        "g": 3,
        "wr": 33.33,
        "kda": 2.11
      },
      {
        "slug": "sierra",
        "n": "Sierra",
        "role": "Damage",
        "g": 3,
        "wr": 33.33,
        "kda": 3.28
      },
      {
        "slug": "sojourn",
        "n": "Sojourn",
        "role": "Damage",
        "g": 3,
        "wr": 0,
        "kda": 2.23
      },
      {
        "slug": "kiriko",
        "n": "Kiriko",
        "role": "Support",
        "g": 2,
        "wr": 50,
        "kda": 1.5
      },
      {
        "slug": "torbjorn",
        "n": "Torbjörn",
        "role": "Damage",
        "g": 2,
        "wr": 100,
        "kda": 3.36
      },
      {
        "slug": "ana",
        "n": "Ana",
        "role": "Support",
        "g": 1,
        "wr": 0,
        "kda": 2.33
      },
      {
        "slug": "brigitte",
        "n": "Brigitte",
        "role": "Support",
        "g": 1,
        "wr": 100,
        "kda": 5.67
      },
      {
        "slug": "emre",
        "n": "Emre",
        "role": "Damage",
        "g": 1,
        "wr": 100,
        "kda": 3.19
      },
      {
        "slug": "hanzo",
        "n": "Hanzo",
        "role": "Damage",
        "g": 1,
        "wr": 100,
        "kda": 15
      },
      {
        "slug": "moira",
        "n": "Moira",
        "role": "Support",
        "g": 1,
        "wr": 100,
        "kda": 2.44
      },
      {
        "slug": "shion",
        "n": "Shion",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 1.56
      },
      {
        "slug": "soldier-76",
        "n": "Soldier: 76",
        "role": "Damage",
        "g": 1,
        "wr": 100,
        "kda": 2
      },
      {
        "slug": "zenyatta",
        "n": "Zenyatta",
        "role": "Support",
        "g": 1,
        "wr": 100,
        "kda": 3.62
      }
    ],
    "bscore": {
      "ana": {
        "finalScore": 48.26,
        "battleScore": 38.78,
        "coeff": 1.46,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 4,
        "det": {
          "g": 1,
          "time": 737,
          "wr": 50,
          "el10": 4.88,
          "de10": 4.88,
          "dm10": 2621,
          "he10": 9528,
          "as10": 12.21,
          "wa": 54,
          "ca": 0
        }
      },
      "brigitte": {
        "finalScore": 56.87,
        "battleScore": 45.7,
        "coeff": 1.46,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 4,
        "det": {
          "g": 1,
          "time": 474,
          "wr": 100,
          "el10": 17.74,
          "de10": 3.8,
          "dm10": 5685,
          "he10": 9195,
          "as10": 15.2,
          "wa": 0,
          "ca": 0
        },
        "rankNew": true
      },
      "cassidy": {
        "finalScore": 46.23,
        "battleScore": 33.77,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 5,
        "det": {
          "g": 3,
          "time": 1933,
          "wr": 14,
          "el10": 14.28,
          "de10": 9.31,
          "dm10": 8642,
          "he10": 0,
          "as10": 0.62,
          "wa": 44,
          "ca": 11
        },
        "rankDelta": 9
      },
      "emre": {
        "finalScore": 58.47,
        "battleScore": 42.71,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 1614,
          "wr": 99,
          "el10": 18.96,
          "de10": 5.95,
          "dm10": 11886,
          "he10": 1034,
          "as10": 0,
          "wa": 33,
          "ca": 9
        },
        "rankNew": true
      },
      "genji": {
        "finalScore": 63.97,
        "battleScore": 44.07,
        "coeff": 1.61,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 5,
        "det": {
          "g": 8,
          "time": 5951,
          "wr": 66,
          "el10": 22.49,
          "de10": 7.26,
          "dm10": 8488,
          "he10": 178,
          "as10": 0.1,
          "wa": 26,
          "ca": 11
        },
        "rankNew": true
      },
      "hanzo": {
        "finalScore": 63.47,
        "battleScore": 46.36,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 306,
          "wr": 100,
          "el10": 29.39,
          "de10": 1.96,
          "dm10": 9816,
          "he10": 24.45,
          "as10": 9.8,
          "wa": 26,
          "ca": 13
        },
        "rankNew": true
      },
      "kiriko": {
        "finalScore": 44.84,
        "battleScore": 36.03,
        "coeff": 1.46,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 4,
        "det": {
          "g": 2,
          "time": 933,
          "wr": 50,
          "el10": 4.5,
          "de10": 5.14,
          "dm10": 3602,
          "he10": 9577,
          "as10": 13.5,
          "wa": 31,
          "ca": 21
        },
        "rankDelta": -2
      },
      "mizuki": {
        "finalScore": 47.52,
        "battleScore": 38.18,
        "coeff": 1.46,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 4,
        "det": {
          "g": 3,
          "time": 870,
          "wr": 35,
          "el10": 13.11,
          "de10": 6.21,
          "dm10": 5061,
          "he10": 8571,
          "as10": 9.66,
          "wa": 37,
          "ca": 6
        },
        "rankDelta": -6
      },
      "moira": {
        "finalScore": 66.96,
        "battleScore": 39.77,
        "coeff": 1.46,
        "matchCoef": 0.92,
        "gamesPlayed": 1,
        "rankIndex": 4,
        "det": {
          "g": 1,
          "time": 766,
          "wr": 100,
          "el10": 17.24,
          "de10": 7.05,
          "dm10": 6230,
          "he10": 7523,
          "as10": 5.48,
          "wa": 0,
          "ca": 0
        }
      },
      "shion": {
        "finalScore": 50.3,
        "battleScore": 36.75,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 628,
          "wr": 0,
          "el10": 13.37,
          "de10": 8.6,
          "dm10": 8599,
          "he10": 0,
          "as10": 2.87,
          "wa": 38,
          "ca": 9
        }
      },
      "sierra": {
        "finalScore": 54.9,
        "battleScore": 40.11,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 5,
        "det": {
          "g": 3,
          "time": 1970,
          "wr": 29,
          "el10": 24.97,
          "de10": 7.61,
          "dm10": 8622,
          "he10": 0,
          "as10": 1.83,
          "wa": 25,
          "ca": 9
        },
        "rankDelta": 4
      },
      "sojourn": {
        "finalScore": 48.4,
        "battleScore": 35.36,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 5,
        "det": {
          "g": 3,
          "time": 1905,
          "wr": 0,
          "el10": 15.43,
          "de10": 6.93,
          "dm10": 8722,
          "he10": 0,
          "as10": 0,
          "wa": 28,
          "ca": 10
        },
        "rankNew": true
      },
      "soldier-76": {
        "finalScore": 52.55,
        "battleScore": 38.39,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 859,
          "wr": 99,
          "el10": 12.58,
          "de10": 6.29,
          "dm10": 9779,
          "he10": 1033,
          "as10": 0,
          "wa": 39,
          "ca": 7
        },
        "rankDelta": 6
      },
      "torbjorn": {
        "finalScore": 60.53,
        "battleScore": 44.21,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 5,
        "det": {
          "g": 2,
          "time": 1668,
          "wr": 100,
          "el10": 16.91,
          "de10": 5.04,
          "dm10": 11179,
          "he10": 0,
          "as10": 0.72,
          "wa": 26,
          "ca": 11
        },
        "rankDelta": 15
      },
      "zenyatta": {
        "finalScore": 50.07,
        "battleScore": 40.23,
        "coeff": 1.46,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 4,
        "det": {
          "g": 1,
          "time": 1229,
          "wr": 67,
          "el10": 15.14,
          "de10": 6.35,
          "dm10": 8155,
          "he10": 6621,
          "as10": 11.72,
          "wa": 38,
          "ca": 15
        },
        "rankNew": true
      }
    }
  },
  {
    "id": "makky",
    "name": "Makky",
    "tag": "",
    "endorse": 3,
    "title": ":3",
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/53f1a2e4a71661e9686ee4f9fa99b2056d73bb4b4a7a5e4d3ed424e57cd93c2f.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4f57d4bae6d479b52d262975c730e1f763123975a3dc08395709d963ea7dd6b9.png",
    "role": "Support",
    "ranks": {
      "Tank": null,
      "Damage": {
        "division": "diamond",
        "tier": 5,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_DiamondTier.bc8c5d6005f916c62c51728087aeb26f4facaa9b.png"
      },
      "Support": {
        "division": "diamond",
        "tier": 4,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_DiamondTier.bc8c5d6005f916c62c51728087aeb26f4facaa9b.png"
      }
    },
    "rankTier": "Diamond 4",
    "overall": {
      "matches": 60,
      "wins": 33,
      "losses": 27,
      "wr": 55,
      "kda": 2.79,
      "elim": 16.98,
      "deaths": 6.32,
      "dmg": 9136.98,
      "heal": 1643.22,
      "time": 37096
    },
    "roles": {
      "Tank": {
        "g": 2,
        "w": 1,
        "l": 1,
        "time": 1141,
        "wr": 50,
        "kda": 5.57,
        "elim": 18.93,
        "deaths": 3.68,
        "dmg": 15204.03,
        "heal": 261.88
      },
      "Damage": {
        "g": 49,
        "w": 28,
        "l": 21,
        "time": 29157,
        "wr": 57.14,
        "kda": 2.86,
        "elim": 18.25,
        "deaths": 6.42,
        "dmg": 9831.05,
        "heal": 123.68
      },
      "Support": {
        "g": 9,
        "w": 4,
        "l": 5,
        "time": 6798,
        "wr": 44.44,
        "kda": 2.21,
        "elim": 11.21,
        "deaths": 6.35,
        "dmg": 5141.75,
        "heal": 8392.5
      }
    },
    "heroes": [
      {
        "slug": "sojourn",
        "n": "Sojourn",
        "role": "Damage",
        "g": 11,
        "wr": 63.64,
        "kda": 2.89
      },
      {
        "slug": "tracer",
        "n": "Tracer",
        "role": "Damage",
        "g": 11,
        "wr": 54.55,
        "kda": 2.86
      },
      {
        "slug": "genji",
        "n": "Genji",
        "role": "Damage",
        "g": 9,
        "wr": 66.67,
        "kda": 2.73
      },
      {
        "slug": "cassidy",
        "n": "Cassidy",
        "role": "Damage",
        "g": 6,
        "wr": 50,
        "kda": 3.16
      },
      {
        "slug": "freja",
        "n": "Freja",
        "role": "Damage",
        "g": 6,
        "wr": 50,
        "kda": 2.57
      },
      {
        "slug": "moira",
        "n": "Moira",
        "role": "Support",
        "g": 3,
        "wr": 66.67,
        "kda": 2.88
      },
      {
        "slug": "ana",
        "n": "Ana",
        "role": "Support",
        "g": 2,
        "wr": 0,
        "kda": 1.7
      },
      {
        "slug": "echo",
        "n": "Echo",
        "role": "Damage",
        "g": 2,
        "wr": 50,
        "kda": 4.33
      },
      {
        "slug": "illari",
        "n": "Illari",
        "role": "Support",
        "g": 2,
        "wr": 50,
        "kda": 3.45
      },
      {
        "slug": "kiriko",
        "n": "Kiriko",
        "role": "Support",
        "g": 2,
        "wr": 50,
        "kda": 1.39
      },
      {
        "slug": "pharah",
        "n": "Pharah",
        "role": "Damage",
        "g": 2,
        "wr": 50,
        "kda": 2.42
      },
      {
        "slug": "ashe",
        "n": "Ashe",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 2.64
      },
      {
        "slug": "ramattra",
        "n": "Ramattra",
        "role": "Tank",
        "g": 1,
        "wr": 0,
        "kda": 3.2
      },
      {
        "slug": "reaper",
        "n": "Reaper",
        "role": "Damage",
        "g": 1,
        "wr": 100,
        "kda": 1.91
      },
      {
        "slug": "sigma",
        "n": "Sigma",
        "role": "Tank",
        "g": 1,
        "wr": 100,
        "kda": 23
      }
    ],
    "bscore": {
      "ana": {
        "finalScore": 48.82,
        "battleScore": 35.66,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 5,
        "det": {
          "g": 2,
          "time": 1747,
          "wr": 19,
          "el10": 8.24,
          "de10": 7.9,
          "dm10": 3012,
          "he10": 7386,
          "as10": 8.93,
          "wa": 61,
          "ca": 0
        },
        "rankDelta": -1
      },
      "ashe": {
        "finalScore": 53.75,
        "battleScore": 39.26,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 737,
          "wr": 13,
          "el10": 23.6,
          "de10": 8.95,
          "dm10": 11137,
          "he10": 0,
          "as10": 0.81,
          "wa": 56,
          "ca": 10
        },
        "rankDelta": -3
      },
      "cassidy": {
        "finalScore": 63.37,
        "battleScore": 44.89,
        "coeff": 1.61,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 5,
        "det": {
          "g": 6,
          "time": 3768,
          "wr": 45,
          "el10": 18.63,
          "de10": 5.89,
          "dm10": 10299,
          "he10": 110,
          "as10": 1.75,
          "wa": 52,
          "ca": 6
        },
        "rankDelta": -1
      },
      "echo": {
        "finalScore": 62,
        "battleScore": 45.29,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 5,
        "det": {
          "g": 2,
          "time": 1459,
          "wr": 39,
          "el10": 16.04,
          "de10": 3.7,
          "dm10": 7939,
          "he10": 0,
          "as10": 0.82,
          "wa": 28,
          "ca": 6
        },
        "rankDelta": -1
      },
      "freja": {
        "finalScore": 57.72,
        "battleScore": 40.89,
        "coeff": 1.61,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 5,
        "det": {
          "g": 6,
          "time": 3580,
          "wr": 42,
          "el10": 15.92,
          "de10": 6.2,
          "dm10": 9447,
          "he10": 48.56,
          "as10": 0.5,
          "wa": 23,
          "ca": 15
        },
        "rankDelta": 1
      },
      "genji": {
        "finalScore": 64.72,
        "battleScore": 44.09,
        "coeff": 1.61,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 5,
        "det": {
          "g": 9,
          "time": 4624,
          "wr": 62,
          "el10": 19.47,
          "de10": 7.14,
          "dm10": 7695,
          "he10": 336,
          "as10": 0,
          "wa": 32,
          "ca": 9
        },
        "rankDelta": 2
      },
      "illari": {
        "finalScore": 56.33,
        "battleScore": 41.15,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 5,
        "det": {
          "g": 2,
          "time": 1421,
          "wr": 53,
          "el10": 13.93,
          "de10": 4.64,
          "dm10": 6288,
          "he10": 7258,
          "as10": 8.87,
          "wa": 52,
          "ca": 14
        },
        "rankDelta": 1
      },
      "kiriko": {
        "finalScore": 50.41,
        "battleScore": 36.82,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 5,
        "det": {
          "g": 2,
          "time": 1525,
          "wr": 48,
          "el10": 6.29,
          "de10": 7.08,
          "dm10": 3959,
          "he10": 9331,
          "as10": 20.45,
          "wa": 32,
          "ca": 15
        },
        "rankDelta": 1
      },
      "moira": {
        "finalScore": 76.9,
        "battleScore": 41.52,
        "coeff": 1.61,
        "matchCoef": 0.92,
        "gamesPlayed": 3,
        "rankIndex": 5,
        "det": {
          "g": 3,
          "time": 1623,
          "wr": 50,
          "el10": 17.01,
          "de10": 5.92,
          "dm10": 5587,
          "he10": 9410,
          "as10": 14.79,
          "wa": 0,
          "ca": 0
        }
      },
      "pharah": {
        "finalScore": 55.08,
        "battleScore": 40.23,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 5,
        "det": {
          "g": 2,
          "time": 1177,
          "wr": 58,
          "el10": 14.78,
          "de10": 6.12,
          "dm10": 8328,
          "he10": 0,
          "as10": 2.55,
          "wa": 41,
          "ca": 0
        },
        "rankDelta": 1
      },
      "ramattra": {
        "finalScore": 73.41,
        "battleScore": 39.64,
        "coeff": 1.61,
        "matchCoef": 0.92,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 573,
          "wr": 0,
          "el10": 15.69,
          "de10": 5.23,
          "dm10": 10860,
          "he10": 468,
          "as10": 1.05,
          "wa": 29,
          "ca": 9
        }
      },
      "reaper": {
        "finalScore": 79.94,
        "battleScore": 43.16,
        "coeff": 1.61,
        "matchCoef": 0.92,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 672,
          "wr": 59,
          "el10": 18.74,
          "de10": 9.82,
          "dm10": 7059,
          "he10": 1540,
          "as10": 0,
          "wa": 33,
          "ca": 11
        }
      },
      "sigma": {
        "finalScore": 85.9,
        "battleScore": 46.38,
        "coeff": 1.61,
        "matchCoef": 0.92,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 536,
          "wr": 100,
          "el10": 23.5,
          "de10": 1.12,
          "dm10": 15927,
          "he10": 0,
          "as10": 2.24,
          "wa": 56,
          "ca": 0
        }
      },
      "sojourn": {
        "finalScore": 65.45,
        "battleScore": 43.75,
        "coeff": 1.61,
        "matchCoef": 0.93,
        "gamesPlayed": 11,
        "rankIndex": 5,
        "det": {
          "g": 11,
          "time": 6797,
          "wr": 64,
          "el10": 18.89,
          "de10": 6.53,
          "dm10": 9302,
          "he10": 0,
          "as10": 0.09,
          "wa": 30,
          "ca": 9
        }
      },
      "tracer": {
        "finalScore": 67.35,
        "battleScore": 45.02,
        "coeff": 1.61,
        "matchCoef": 0.93,
        "gamesPlayed": 11,
        "rankIndex": 5,
        "det": {
          "g": 11,
          "time": 6099,
          "wr": 53,
          "el10": 17.71,
          "de10": 6.2,
          "dm10": 6075,
          "he10": 60.26,
          "as10": 0.1,
          "wa": 34,
          "ca": 9
        }
      }
    }
  },
  {
    "id": "p5",
    "name": "monsterlumix",
    "tag": "",
    "endorse": 2,
    "title": null,
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/bd0a417698c574610490db6300f42f8b555b8e870b9bfda47618039b942c97a3.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1c02788d773574ad639a4330d5e6751cec68b6fecbcd4255abc33fc55fe16c7c.png",
    "role": "Tank",
    "ranks": {
      "Tank": {
        "division": "silver",
        "tier": 2,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_SilverTier.305e60dca5e95356ced59825426844cc7cdb4948.png"
      },
      "Damage": null,
      "Support": null
    },
    "rankTier": "Silver 2",
    "overall": {
      "matches": 17,
      "wins": 8,
      "losses": 9,
      "wr": 47.06,
      "kda": 3.8,
      "elim": 18.48,
      "deaths": 5.37,
      "dmg": 9475.72,
      "heal": 1941.16,
      "time": 11621
    },
    "roles": {
      "Tank": {
        "g": 13,
        "w": 7,
        "l": 6,
        "time": 9173,
        "wr": 53.85,
        "kda": 4.82,
        "elim": 20.87,
        "deaths": 4.64,
        "dmg": 10753.17,
        "heal": 1412.65
      },
      "Damage": {
        "g": 2,
        "w": 1,
        "l": 1,
        "time": 1211,
        "wr": 50,
        "kda": 1.25,
        "elim": 12.39,
        "deaths": 9.91,
        "dmg": 6130.8,
        "heal": 912.14
      },
      "Support": {
        "g": 2,
        "w": 0,
        "l": 2,
        "time": 1237,
        "wr": 0,
        "kda": 2.15,
        "elim": 6.79,
        "deaths": 6.31,
        "dmg": 3277.45,
        "heal": 6867.74
      }
    },
    "heroes": [
      {
        "slug": "doomfist",
        "n": "Doomfist",
        "role": "Tank",
        "g": 5,
        "wr": 60,
        "kda": 5.87
      },
      {
        "slug": "sigma",
        "n": "Sigma",
        "role": "Tank",
        "g": 3,
        "wr": 0,
        "kda": 3.17
      },
      {
        "slug": "winston",
        "n": "Winston",
        "role": "Tank",
        "g": 3,
        "wr": 66.67,
        "kda": 3.5
      },
      {
        "slug": "ana",
        "n": "Ana",
        "role": "Support",
        "g": 2,
        "wr": 0,
        "kda": 2.15
      },
      {
        "slug": "reaper",
        "n": "Reaper",
        "role": "Damage",
        "g": 2,
        "wr": 50,
        "kda": 1.32
      },
      {
        "slug": "mauga",
        "n": "Mauga",
        "role": "Tank",
        "g": 1,
        "wr": 100,
        "kda": 15.5
      },
      {
        "slug": "reinhardt",
        "n": "Reinhardt",
        "role": "Tank",
        "g": 1,
        "wr": 100,
        "kda": 6
      }
    ],
    "bscore": {
      "ana": {
        "finalScore": 28.03,
        "battleScore": 32.97,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 1237,
          "wr": 0,
          "el10": 6.79,
          "de10": 6.31,
          "dm10": 2742,
          "he10": 6870,
          "as10": 9.22,
          "wa": 50,
          "ca": 0
        }
      },
      "doomfist": {
        "finalScore": 44.21,
        "battleScore": 46.7,
        "coeff": 1.1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 1,
        "det": {
          "g": 5,
          "time": 3385,
          "wr": 67,
          "el10": 23.93,
          "de10": 4.08,
          "dm10": 8466,
          "he10": 2186,
          "as10": 5.49,
          "wa": 21,
          "ca": 10
        }
      },
      "mauga": {
        "finalScore": 58.65,
        "battleScore": 46.36,
        "coeff": 1.1,
        "matchCoef": 0.92,
        "gamesPlayed": 1,
        "rankIndex": 1,
        "det": {
          "g": 1,
          "time": 443,
          "wr": 100,
          "el10": 31.15,
          "de10": 2.71,
          "dm10": 9475,
          "he10": 1534,
          "as10": 16.25,
          "wa": 27,
          "ca": 10
        }
      },
      "reaper": {
        "finalScore": 42.43,
        "battleScore": 34.75,
        "coeff": 1,
        "matchCoef": 0.92,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 1143,
          "wr": 47,
          "el10": 13.12,
          "de10": 9.97,
          "dm10": 4889,
          "he10": 966,
          "as10": 0,
          "wa": 20,
          "ca": 8
        }
      },
      "reinhardt": {
        "finalScore": 43.35,
        "battleScore": 46.36,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 1,
        "det": {
          "g": 1,
          "time": 1141,
          "wr": 100,
          "el10": 20.5,
          "de10": 3.68,
          "dm10": 9968,
          "he10": 0,
          "as10": 1.58,
          "wa": 0,
          "ca": 0
        }
      },
      "sigma": {
        "finalScore": 52.94,
        "battleScore": 34.82,
        "coeff": 1.1,
        "matchCoef": 0.92,
        "gamesPlayed": 3,
        "rankIndex": 1,
        "det": {
          "g": 3,
          "time": 1362,
          "wr": 0,
          "el10": 13.66,
          "de10": 5.29,
          "dm10": 10792,
          "he10": 0,
          "as10": 3.08,
          "wa": 48,
          "ca": 0
        }
      },
      "winston": {
        "finalScore": 38.75,
        "battleScore": 41.45,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 1,
        "det": {
          "g": 3,
          "time": 1819,
          "wr": 42,
          "el10": 18.47,
          "de10": 5.28,
          "dm10": 7176,
          "he10": 1668,
          "as10": 5.28,
          "wa": 41,
          "ca": 0
        }
      }
    }
  },
  {
    "id": "p6",
    "name": "ぼんやりリッチ",
    "tag": "",
    "endorse": 3,
    "title": "Stargazer",
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8f3d55a5407cfcfa76d6201b08467ce5ac40a414fc4d075a6f485026c7d5fcd4.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/512ec98857af02508a014fa0e2baafa19daf5c56a8f5ab6f42b39be0e907a4f4.png",
    "role": "Tank",
    "ranks": {
      "Tank": {
        "division": "platinum",
        "tier": 5,
        "icon": "",
        "assumed": true
      },
      "Damage": {
        "division": "platinum",
        "tier": 5,
        "icon": "",
        "assumed": true
      },
      "Support": {
        "division": "platinum",
        "tier": 5,
        "icon": "",
        "assumed": true
      }
    },
    "rankTier": "Platinum 5",
    "overall": {
      "matches": 7,
      "wins": 4,
      "losses": 3,
      "wr": 57.14,
      "kda": 3.32,
      "elim": 17.37,
      "deaths": 6.55,
      "dmg": 9377.67,
      "heal": 2876.36,
      "time": 6323
    },
    "roles": {
      "Tank": {
        "g": 1,
        "w": 1,
        "l": 0,
        "time": 1726,
        "wr": 100,
        "kda": 7.7,
        "elim": 24.68,
        "deaths": 3.48,
        "dmg": 12369.18,
        "heal": 554.11
      },
      "Damage": {
        "g": 2,
        "w": 0,
        "l": 2,
        "time": 1374,
        "wr": 0,
        "kda": 1.52,
        "elim": 13.97,
        "deaths": 9.17,
        "dmg": 13056.33,
        "heal": 629.69
      },
      "Support": {
        "g": 4,
        "w": 3,
        "l": 1,
        "time": 3223,
        "wr": 75,
        "kda": 3.16,
        "elim": 14.89,
        "deaths": 7.07,
        "dmg": 6207.38,
        "heal": 5077.75
      }
    },
    "heroes": [
      {
        "slug": "ana",
        "n": "Ana",
        "role": "Support",
        "g": 4,
        "wr": 75,
        "kda": 3.58
      },
      {
        "slug": "echo",
        "n": "Echo",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 1.6
      },
      {
        "slug": "sigma",
        "n": "Sigma",
        "role": "Tank",
        "g": 1,
        "wr": 100,
        "kda": 14.33
      },
      {
        "slug": "soldier-76",
        "n": "Soldier: 76",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 2.75
      }
    ],
    "bscore": {
      "ana": {
        "finalScore": 47.86,
        "battleScore": 42.3,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 3,
        "det": {
          "g": 4,
          "time": 2875,
          "wr": 83,
          "el10": 14.82,
          "de10": 6.47,
          "dm10": 4982,
          "he10": 5095,
          "as10": 13.78,
          "wa": 49,
          "ca": 0
        }
      },
      "echo": {
        "finalScore": 40.86,
        "battleScore": 36.12,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 401,
          "wr": 0,
          "el10": 11.96,
          "de10": 7.48,
          "dm10": 8976,
          "he10": 0,
          "as10": 0,
          "wa": 25,
          "ca": 7
        }
      },
      "sigma": {
        "finalScore": 64.94,
        "battleScore": 48.23,
        "coeff": 1.33,
        "matchCoef": 0.92,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 828,
          "wr": 100,
          "el10": 26.82,
          "de10": 2.17,
          "dm10": 12363,
          "he10": 0,
          "as10": 4.35,
          "wa": 48,
          "ca": 0
        }
      },
      "soldier-76": {
        "finalScore": 40.84,
        "battleScore": 36.1,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 663,
          "wr": 0,
          "el10": 19.91,
          "de10": 7.24,
          "dm10": 10496,
          "he10": 1305,
          "as10": 0,
          "wa": 26,
          "ca": 9
        }
      }
    }
  },
  {
    "id": "p7",
    "name": "りんご",
    "tag": "",
    "endorse": 2,
    "title": null,
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ac18099185620d9a1c5ceb2e2825cca6f113947b0907a52687c4ae8712727d02.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d3e25e2fbcb52cb41a74d7f7434cf3db435fb10e8f027c9d6efb10adcd84b880.png",
    "role": "Damage",
    "ranks": {
      "Tank": null,
      "Damage": null,
      "Support": null
    },
    "rankTier": null,
    "overall": {
      "matches": 0,
      "wins": 0,
      "losses": 0,
      "wr": 0,
      "kda": 0,
      "elim": 0,
      "deaths": 0,
      "dmg": 0,
      "heal": 0,
      "time": 0
    },
    "roles": {},
    "heroes": [],
    "bscore": {}
  }
];
/* 全モード(クイック・プレイ + ライバル・プレイの合算) */
const PLAYERS_ALL = [
  {
    "id": "hiyori",
    "name": "ひよりっつぁっん",
    "tag": "#3327",
    "endorse": 2,
    "title": "Doppelganger",
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/18489e7f5907f779b7be96e5ce455360889a8f1a75da09dcf17ef374020ff841.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e1ad0e4fbed41fa30cbe653f3b24660aa92ec0cddef43008186349ff69739f56.png",
    "role": "Damage",
    "ranks": {
      "Tank": null,
      "Damage": {
        "division": "platinum",
        "tier": 3,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_PlatinumTier.694340e3a5b2031d4fac9eb1d8f52c6855d4c072.png"
      },
      "Support": null
    },
    "rankTier": "Platinum 3",
    "overall": {
      "matches": 1043,
      "wins": 511,
      "losses": 532,
      "wr": 48.99,
      "kda": 2.36,
      "elim": 16.73,
      "deaths": 7.7,
      "dmg": 9855.38,
      "heal": 1985.35,
      "time": 532035
    },
    "roles": {
      "Tank": {
        "g": 301,
        "w": 143,
        "l": 158,
        "time": 148152,
        "wr": 47.51,
        "kda": 2.99,
        "elim": 18.5,
        "deaths": 6.8,
        "dmg": 11840.52,
        "heal": 711.02
      },
      "Damage": {
        "g": 504,
        "w": 255,
        "l": 249,
        "time": 259894,
        "wr": 50.6,
        "kda": 2.19,
        "elim": 18.07,
        "deaths": 8.38,
        "dmg": 10916.68,
        "heal": 351.92
      },
      "Support": {
        "g": 238,
        "w": 113,
        "l": 125,
        "time": 123989,
        "wr": 47.48,
        "kda": 2.08,
        "elim": 11.83,
        "deaths": 7.35,
        "dmg": 5258.79,
        "heal": 6931.85
      }
    },
    "heroes": [
      {
        "slug": "soldier-76",
        "n": "Soldier: 76",
        "role": "Damage",
        "g": 95,
        "wr": 56.84,
        "kda": 2.49
      },
      {
        "slug": "pharah",
        "n": "Pharah",
        "role": "Damage",
        "g": 44,
        "wr": 47.73,
        "kda": 2.16
      },
      {
        "slug": "sigma",
        "n": "Sigma",
        "role": "Tank",
        "g": 44,
        "wr": 59.09,
        "kda": 4.46
      },
      {
        "slug": "tracer",
        "n": "Tracer",
        "role": "Damage",
        "g": 44,
        "wr": 54.55,
        "kda": 1.96
      },
      {
        "slug": "sojourn",
        "n": "Sojourn",
        "role": "Damage",
        "g": 43,
        "wr": 46.51,
        "kda": 2.25
      },
      {
        "slug": "kiriko",
        "n": "Kiriko",
        "role": "Support",
        "g": 39,
        "wr": 46.15,
        "kda": 1.89
      },
      {
        "slug": "ashe",
        "n": "Ashe",
        "role": "Damage",
        "g": 36,
        "wr": 44.44,
        "kda": 2.74
      },
      {
        "slug": "lucio",
        "n": "Lúcio",
        "role": "Support",
        "g": 32,
        "wr": 50,
        "kda": 2.24
      },
      {
        "slug": "mauga",
        "n": "Mauga",
        "role": "Tank",
        "g": 31,
        "wr": 45.16,
        "kda": 3.63
      },
      {
        "slug": "ramattra",
        "n": "Ramattra",
        "role": "Tank",
        "g": 30,
        "wr": 40,
        "kda": 3.56
      },
      {
        "slug": "dva",
        "n": "D.Va",
        "role": "Tank",
        "g": 29,
        "wr": 55.17,
        "kda": 4.2
      },
      {
        "slug": "widowmaker",
        "n": "Widowmaker",
        "role": "Damage",
        "g": 28,
        "wr": 42.86,
        "kda": 1.96
      },
      {
        "slug": "zarya",
        "n": "Zarya",
        "role": "Tank",
        "g": 28,
        "wr": 39.29,
        "kda": 2.5
      },
      {
        "slug": "zenyatta",
        "n": "Zenyatta",
        "role": "Support",
        "g": 28,
        "wr": 50,
        "kda": 2.6
      },
      {
        "slug": "cassidy",
        "n": "Cassidy",
        "role": "Damage",
        "g": 26,
        "wr": 42.31,
        "kda": 1.84
      },
      {
        "slug": "doomfist",
        "n": "Doomfist",
        "role": "Tank",
        "g": 26,
        "wr": 42.31,
        "kda": 1.91
      },
      {
        "slug": "junker-queen",
        "n": "Junker Queen",
        "role": "Tank",
        "g": 25,
        "wr": 40,
        "kda": 2.81
      },
      {
        "slug": "juno",
        "n": "Juno",
        "role": "Support",
        "g": 23,
        "wr": 52.17,
        "kda": 2.08
      },
      {
        "slug": "shion",
        "n": "Shion",
        "role": "Damage",
        "g": 23,
        "wr": 60.87,
        "kda": 2.43
      },
      {
        "slug": "baptiste",
        "n": "Baptiste",
        "role": "Support",
        "g": 22,
        "wr": 63.64,
        "kda": 1.78
      },
      {
        "slug": "ana",
        "n": "Ana",
        "role": "Support",
        "g": 20,
        "wr": 40,
        "kda": 2.32
      },
      {
        "slug": "brigitte",
        "n": "Brigitte",
        "role": "Support",
        "g": 20,
        "wr": 55,
        "kda": 1.79
      },
      {
        "slug": "wrecking-ball",
        "n": "Wrecking Ball",
        "role": "Tank",
        "g": 20,
        "wr": 55,
        "kda": 2.02
      },
      {
        "slug": "bastion",
        "n": "Bastion",
        "role": "Damage",
        "g": 19,
        "wr": 52.63,
        "kda": 2.78
      },
      {
        "slug": "echo",
        "n": "Echo",
        "role": "Damage",
        "g": 19,
        "wr": 63.16,
        "kda": 2.27
      },
      {
        "slug": "winston",
        "n": "Winston",
        "role": "Tank",
        "g": 19,
        "wr": 42.11,
        "kda": 1.98
      },
      {
        "slug": "genji",
        "n": "Genji",
        "role": "Damage",
        "g": 18,
        "wr": 50,
        "kda": 1.25
      },
      {
        "slug": "moira",
        "n": "Moira",
        "role": "Support",
        "g": 18,
        "wr": 38.89,
        "kda": 2.62
      },
      {
        "slug": "orisa",
        "n": "Orisa",
        "role": "Tank",
        "g": 17,
        "wr": 52.94,
        "kda": 3.4
      },
      {
        "slug": "symmetra",
        "n": "Symmetra",
        "role": "Damage",
        "g": 17,
        "wr": 47.06,
        "kda": 2.19
      },
      {
        "slug": "emre",
        "n": "Emre",
        "role": "Damage",
        "g": 15,
        "wr": 40,
        "kda": 1.7
      },
      {
        "slug": "illari",
        "n": "Illari",
        "role": "Support",
        "g": 15,
        "wr": 46.67,
        "kda": 2.29
      },
      {
        "slug": "lifeweaver",
        "n": "Lifeweaver",
        "role": "Support",
        "g": 13,
        "wr": 15.38,
        "kda": 1.64
      },
      {
        "slug": "freja",
        "n": "Freja",
        "role": "Damage",
        "g": 11,
        "wr": 54.55,
        "kda": 1.38
      },
      {
        "slug": "reaper",
        "n": "Reaper",
        "role": "Damage",
        "g": 11,
        "wr": 27.27,
        "kda": 1.97
      },
      {
        "slug": "roadhog",
        "n": "Roadhog",
        "role": "Tank",
        "g": 10,
        "wr": 40,
        "kda": 2.93
      },
      {
        "slug": "reinhardt",
        "n": "Reinhardt",
        "role": "Tank",
        "g": 9,
        "wr": 44.44,
        "kda": 1.4
      },
      {
        "slug": "sombra",
        "n": "Sombra",
        "role": "Damage",
        "g": 9,
        "wr": 55.56,
        "kda": 2.57
      },
      {
        "slug": "torbjorn",
        "n": "Torbjörn",
        "role": "Damage",
        "g": 9,
        "wr": 22.22,
        "kda": 1.68
      },
      {
        "slug": "junkrat",
        "n": "Junkrat",
        "role": "Damage",
        "g": 8,
        "wr": 50,
        "kda": 2.59
      },
      {
        "slug": "hanzo",
        "n": "Hanzo",
        "role": "Damage",
        "g": 7,
        "wr": 42.86,
        "kda": 1.46
      },
      {
        "slug": "mei",
        "n": "Mei",
        "role": "Damage",
        "g": 7,
        "wr": 57.14,
        "kda": 3.18
      },
      {
        "slug": "sierra",
        "n": "Sierra",
        "role": "Damage",
        "g": 7,
        "wr": 57.14,
        "kda": 1.75
      },
      {
        "slug": "anran",
        "n": "Anran",
        "role": "Damage",
        "g": 6,
        "wr": 83.33,
        "kda": 1.64
      },
      {
        "slug": "hazard",
        "n": "Hazard",
        "role": "Tank",
        "g": 6,
        "wr": 16.67,
        "kda": 1.51
      },
      {
        "slug": "domina",
        "n": "Domina",
        "role": "Tank",
        "g": 4,
        "wr": 100,
        "kda": 7.33
      },
      {
        "slug": "mercy",
        "n": "Mercy",
        "role": "Support",
        "g": 4,
        "wr": 50,
        "kda": 0.76
      },
      {
        "slug": "mizuki",
        "n": "Mizuki",
        "role": "Support",
        "g": 4,
        "wr": 50,
        "kda": 1.88
      },
      {
        "slug": "dmon",
        "n": "D.Mon",
        "role": "Tank",
        "g": 3,
        "wr": 66.67,
        "kda": 1.4
      },
      {
        "slug": "venture",
        "n": "Venture",
        "role": "Damage",
        "g": 2,
        "wr": 100,
        "kda": 1.93
      }
    ],
    "bscore": {
      "ashe": {
        "finalScore": 54.29,
        "battleScore": 39.54,
        "coeff": 1.33,
        "matchCoef": 1.03,
        "gamesPlayed": 36,
        "rankIndex": 3,
        "det": {
          "g": 36,
          "time": 16764,
          "wr": 43.44444444444444,
          "el10": 18.47277777777778,
          "de10": 6.763888888888889,
          "dm10": 9398.5,
          "he10": 0,
          "as10": 1.5322222222222222,
          "wa": 41.611111111111114,
          "ca": 18.444444444444443
        },
        "rankDelta": 1
      },
      "bastion": {
        "finalScore": 67.63,
        "battleScore": 42.19,
        "coeff": 1.33,
        "matchCoef": 0.99,
        "gamesPlayed": 19,
        "rankIndex": 3,
        "det": {
          "g": 19,
          "time": 11035,
          "wr": 51.68421052631579,
          "el10": 20.644736842105264,
          "de10": 7.411578947368421,
          "dm10": 11607.736842105263,
          "he10": 42.62263157894737,
          "as10": 2.0036842105263157,
          "wa": 26.789473684210527,
          "ca": 3
        },
        "rankDelta": 1
      },
      "cassidy": {
        "finalScore": 51.15,
        "battleScore": 38.3,
        "coeff": 1.33,
        "matchCoef": 1,
        "gamesPlayed": 26,
        "rankIndex": 3,
        "det": {
          "g": 26,
          "time": 14390,
          "wr": 42.80769230769231,
          "el10": 16.436153846153847,
          "de10": 9.026153846153846,
          "dm10": 8978.76923076923,
          "he10": 44.269615384615385,
          "as10": 1.7738461538461539,
          "wa": 43.19230769230769,
          "ca": 14.23076923076923
        }
      },
      "emre": {
        "finalScore": 46.89,
        "battleScore": 36.86,
        "coeff": 1.33,
        "matchCoef": 0.96,
        "gamesPlayed": 15,
        "rankIndex": 3,
        "det": {
          "g": 15,
          "time": 6467,
          "wr": 42.93333333333333,
          "el10": 15.603333333333332,
          "de10": 8.864666666666666,
          "dm10": 9716.8,
          "he10": 808.3333333333334,
          "as10": 0,
          "wa": 32.93333333333333,
          "ca": 14.2
        }
      },
      "freja": {
        "finalScore": 44.26,
        "battleScore": 35.8,
        "coeff": 1.33,
        "matchCoef": 0.93,
        "gamesPlayed": 11,
        "rankIndex": 3,
        "det": {
          "g": 11,
          "time": 4718,
          "wr": 50.90909090909091,
          "el10": 12.418181818181818,
          "de10": 9.020909090909091,
          "dm10": 7920.454545454545,
          "he10": 56.122727272727275,
          "as10": 0.2545454545454546,
          "wa": 25.181818181818183,
          "ca": 14.636363636363637
        },
        "rankDelta": 1
      },
      "juno": {
        "finalScore": 39.99,
        "battleScore": 40.28,
        "coeff": 1,
        "matchCoef": 0.99,
        "gamesPlayed": 23,
        "rankIndex": 0,
        "det": {
          "g": 23,
          "time": 12891,
          "wr": 51.21739130434783,
          "el10": 13.605217391304347,
          "de10": 6.615217391304348,
          "dm10": 4289.652173913043,
          "he10": 7296.173913043478,
          "as10": 12.092173913043478,
          "wa": 33.130434782608695,
          "ca": 8.130434782608695
        },
        "rankDelta": 2
      },
      "pharah": {
        "finalScore": 54.28,
        "battleScore": 38.88,
        "coeff": 1.33,
        "matchCoef": 1.05,
        "gamesPlayed": 44,
        "rankIndex": 3,
        "det": {
          "g": 44,
          "time": 23325,
          "wr": 48.79545454545455,
          "el10": 19.197272727272725,
          "de10": 8.825454545454544,
          "dm10": 10340.65909090909,
          "he10": 0,
          "as10": 3.8920454545454546,
          "wa": 42.15909090909091,
          "ca": 0
        },
        "rankDelta": 1
      },
      "shion": {
        "finalScore": 55.91,
        "battleScore": 42.31,
        "coeff": 1.33,
        "matchCoef": 0.99,
        "gamesPlayed": 23,
        "rankIndex": 3,
        "det": {
          "g": 23,
          "time": 11532,
          "wr": 64.1304347826087,
          "el10": 19.609130434782607,
          "de10": 8.082173913043478,
          "dm10": 8323.608695652174,
          "he10": 53.84434782608696,
          "as10": 2.0043478260869563,
          "wa": 33.73913043478261,
          "ca": 17
        },
        "rankDelta": 1
      },
      "sojourn": {
        "finalScore": 57.8,
        "battleScore": 41.48,
        "coeff": 1.33,
        "matchCoef": 1.05,
        "gamesPlayed": 43,
        "rankIndex": 3,
        "det": {
          "g": 43,
          "time": 21879,
          "wr": 47.25581395348837,
          "el10": 18.507906976744188,
          "de10": 8.22860465116279,
          "dm10": 10021.906976744185,
          "he10": 0,
          "as10": 1.5397674418604652,
          "wa": 31.88372093023256,
          "ca": 11.023255813953488
        },
        "rankDelta": -1
      },
      "soldier-76": {
        "finalScore": 65.33,
        "battleScore": 44,
        "coeff": 1.33,
        "matchCoef": 1.12,
        "gamesPlayed": 95,
        "rankIndex": 3,
        "det": {
          "g": 95,
          "time": 53503,
          "wr": 56.63157894736842,
          "el10": 21.219473684210527,
          "de10": 8.476842105263158,
          "dm10": 10205.736842105263,
          "he10": 1250.7368421052631,
          "as10": 1.3168421052631578,
          "wa": 36.63157894736842,
          "ca": 12.31578947368421
        },
        "rankDelta": -1
      },
      "tracer": {
        "finalScore": 58.06,
        "battleScore": 41.58,
        "coeff": 1.33,
        "matchCoef": 1.05,
        "gamesPlayed": 44,
        "rankIndex": 3,
        "det": {
          "g": 44,
          "time": 22640,
          "wr": 53.5,
          "el10": 18.106590909090908,
          "de10": 9.220681818181818,
          "dm10": 7184.295454545455,
          "he10": 2.540909090909091,
          "as10": 0.10750000000000001,
          "wa": 33.02272727272727,
          "ca": 11.022727272727273
        },
        "rankDelta": -1
      },
      "ana": {
        "finalScore": 32.57,
        "battleScore": 33.21,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 0,
        "det": {
          "g": 20,
          "time": 10453,
          "wr": 43,
          "el10": 10.91,
          "de10": 7.4,
          "dm10": 4077,
          "he10": 5358,
          "as10": 11.19,
          "wa": 33,
          "ca": 0
        },
        "rankDelta": -1
      },
      "anran": {
        "finalScore": 59.26,
        "battleScore": 42.13,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 6,
        "rankIndex": 3,
        "det": {
          "g": 6,
          "time": 2763,
          "wr": 75,
          "el10": 16.72,
          "de10": 9.99,
          "dm10": 7346,
          "he10": 544,
          "as10": 1.09,
          "wa": 24,
          "ca": 10
        },
        "rankDelta": 3
      },
      "baptiste": {
        "finalScore": 39.7,
        "battleScore": 40.14,
        "coeff": 1,
        "matchCoef": 0.99,
        "gamesPlayed": 22,
        "rankIndex": 0,
        "det": {
          "g": 22,
          "time": 10956,
          "wr": 61,
          "el10": 10.68,
          "de10": 7.01,
          "dm10": 4236,
          "he10": 7608,
          "as10": 12.1,
          "wa": 26,
          "ca": 12
        },
        "rankDelta": -1
      },
      "brigitte": {
        "finalScore": 37.02,
        "battleScore": 37.74,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 0,
        "det": {
          "g": 20,
          "time": 9213,
          "wr": 53,
          "el10": 11.72,
          "de10": 9.64,
          "dm10": 3767,
          "he10": 7239,
          "as10": 16.35,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": -2
      },
      "dmon": {
        "finalScore": 30.73,
        "battleScore": 36.16,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 0,
        "det": {
          "g": 3,
          "time": 1714,
          "wr": 74,
          "el10": 9.8,
          "de10": 7,
          "dm10": 7364,
          "he10": 0,
          "as10": 2.1,
          "wa": 31,
          "ca": 0
        },
        "rankDelta": 1
      },
      "domina": {
        "finalScore": 45.92,
        "battleScore": 54.02,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 0,
        "det": {
          "g": 4,
          "time": 1761,
          "wr": 100,
          "el10": 29.98,
          "de10": 4.09,
          "dm10": 11361,
          "he10": 1977,
          "as10": 3.07,
          "wa": 47,
          "ca": 7
        },
        "rankDelta": 2
      },
      "doomfist": {
        "finalScore": 34.46,
        "battleScore": 34.35,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 26,
        "rankIndex": 0,
        "det": {
          "g": 26,
          "time": 11718,
          "wr": 44,
          "el10": 16.44,
          "de10": 8.6,
          "dm10": 8440,
          "he10": 216,
          "as10": 3.58,
          "wa": 25,
          "ca": 9
        },
        "rankDelta": 1
      },
      "dva": {
        "finalScore": 45.67,
        "battleScore": 45.09,
        "coeff": 1,
        "matchCoef": 1.01,
        "gamesPlayed": 29,
        "rankIndex": 0,
        "det": {
          "g": 29,
          "time": 15594,
          "wr": 56,
          "el10": 21.66,
          "de10": 5.16,
          "dm10": 9271,
          "he10": 320,
          "as10": 6.5,
          "wa": 29,
          "ca": 11
        },
        "rankDelta": -2
      },
      "echo": {
        "finalScore": 55.44,
        "battleScore": 42.67,
        "coeff": 1.33,
        "matchCoef": 0.98,
        "gamesPlayed": 19,
        "rankIndex": 3,
        "det": {
          "g": 19,
          "time": 10334,
          "wr": 66,
          "el10": 18.99,
          "de10": 8.36,
          "dm10": 9223,
          "he10": 95.01,
          "as10": 0.29,
          "wa": 30,
          "ca": 9
        },
        "rankDelta": -2
      },
      "genji": {
        "finalScore": 42.62,
        "battleScore": 32.96,
        "coeff": 1.33,
        "matchCoef": 0.97,
        "gamesPlayed": 18,
        "rankIndex": 3,
        "det": {
          "g": 18,
          "time": 9799,
          "wr": 47,
          "el10": 11.82,
          "de10": 9.43,
          "dm10": 5608,
          "he10": 112,
          "as10": 0,
          "wa": 22,
          "ca": 11
        }
      },
      "hazard": {
        "finalScore": 26.91,
        "battleScore": 30.7,
        "coeff": 1,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 0,
        "det": {
          "g": 6,
          "time": 2330,
          "wr": 4,
          "el10": 13.65,
          "de10": 9.01,
          "dm10": 8752,
          "he10": 1119,
          "as10": 3.35,
          "wa": 25,
          "ca": 5
        }
      },
      "hanzo": {
        "finalScore": 43.57,
        "battleScore": 36.79,
        "coeff": 1.33,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 3,
        "det": {
          "g": 7,
          "time": 2765,
          "wr": 45,
          "el10": 13.02,
          "de10": 8.9,
          "dm10": 6774,
          "he10": 0,
          "as10": 3.69,
          "wa": 24,
          "ca": 16
        },
        "rankDelta": -1
      },
      "illari": {
        "finalScore": 35.47,
        "battleScore": 37.12,
        "coeff": 1,
        "matchCoef": 0.96,
        "gamesPlayed": 15,
        "rankIndex": 0,
        "det": {
          "g": 15,
          "time": 8138,
          "wr": 48,
          "el10": 12.31,
          "de10": 5.9,
          "dm10": 4776,
          "he10": 7190,
          "as10": 6.93,
          "wa": 41,
          "ca": 14
        },
        "rankDelta": -1
      },
      "junker-queen": {
        "finalScore": 38.64,
        "battleScore": 38.64,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 25,
        "rankIndex": 0,
        "det": {
          "g": 25,
          "time": 13154,
          "wr": 40,
          "el10": 18.06,
          "de10": 6.43,
          "dm10": 10110,
          "he10": 2111,
          "as10": 5.61,
          "wa": 32,
          "ca": 11
        },
        "rankDelta": 1
      },
      "junkrat": {
        "finalScore": 49.76,
        "battleScore": 41.48,
        "coeff": 1.33,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 3,
        "det": {
          "g": 8,
          "time": 4263,
          "wr": 52,
          "el10": 16.05,
          "de10": 7.6,
          "dm10": 9191,
          "he10": 0,
          "as10": 3.66,
          "wa": 27,
          "ca": 0
        },
        "rankDelta": -4
      },
      "kiriko": {
        "finalScore": 35.09,
        "battleScore": 33.79,
        "coeff": 1,
        "matchCoef": 1.04,
        "gamesPlayed": 39,
        "rankIndex": 0,
        "det": {
          "g": 39,
          "time": 20967,
          "wr": 45,
          "el10": 10.16,
          "de10": 7.24,
          "dm10": 3724,
          "he10": 6636,
          "as10": 12.36,
          "wa": 26,
          "ca": 13
        },
        "rankDelta": 1
      },
      "lifeweaver": {
        "finalScore": 30.46,
        "battleScore": 32.29,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 0,
        "det": {
          "g": 13,
          "time": 7868,
          "wr": 21,
          "el10": 10.91,
          "de10": 6.63,
          "dm10": 3724,
          "he10": 7202,
          "as10": 9.08,
          "wa": 27,
          "ca": 11
        },
        "rankDelta": 1
      },
      "lucio": {
        "finalScore": 37.21,
        "battleScore": 36.43,
        "coeff": 1,
        "matchCoef": 1.02,
        "gamesPlayed": 32,
        "rankIndex": 0,
        "det": {
          "g": 32,
          "time": 17318,
          "wr": 50,
          "el10": 11.5,
          "de10": 7.97,
          "dm10": 4276,
          "he10": 7120,
          "as10": 10.26,
          "wa": 24,
          "ca": 9
        }
      },
      "mauga": {
        "finalScore": 52.91,
        "battleScore": 40.84,
        "coeff": 1,
        "matchCoef": 1.01,
        "gamesPlayed": 31,
        "rankIndex": 0,
        "det": {
          "g": 31,
          "time": 15168,
          "wr": 45,
          "el10": 22.71,
          "de10": 8.15,
          "dm10": 11075,
          "he10": 1942,
          "as10": 9.06,
          "wa": 35,
          "ca": 13
        },
        "rankDelta": -2
      },
      "mei": {
        "finalScore": 49.21,
        "battleScore": 41.55,
        "coeff": 1.33,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 3,
        "det": {
          "g": 7,
          "time": 3315,
          "wr": 57,
          "el10": 13.76,
          "de10": 6.15,
          "dm10": 6515,
          "he10": 1429,
          "as10": 5.79,
          "wa": 47,
          "ca": 0
        },
        "rankDelta": 1
      },
      "mercy": {
        "finalScore": 29.69,
        "battleScore": 34.93,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 0,
        "det": {
          "g": 4,
          "time": 2107,
          "wr": 46,
          "el10": 1.14,
          "de10": 9.4,
          "dm10": 241,
          "he10": 7833,
          "as10": 13.95,
          "wa": 22,
          "ca": 8
        },
        "rankDelta": -2
      },
      "mizuki": {
        "finalScore": 33.07,
        "battleScore": 38.91,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 0,
        "det": {
          "g": 4,
          "time": 1557,
          "wr": 57,
          "el10": 12.33,
          "de10": 6.55,
          "dm10": 3138,
          "he10": 8028,
          "as10": 16.96,
          "wa": 18,
          "ca": 10
        },
        "rankDelta": 1
      },
      "moira": {
        "finalScore": 57.4,
        "battleScore": 37.84,
        "coeff": 1,
        "matchCoef": 0.99,
        "gamesPlayed": 18,
        "rankIndex": 0,
        "det": {
          "g": 18,
          "time": 8872,
          "wr": 40,
          "el10": 17.72,
          "de10": 6.76,
          "dm10": 5489,
          "he10": 7987,
          "as10": 13.32,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": -4
      },
      "orisa": {
        "finalScore": 40.11,
        "battleScore": 41.49,
        "coeff": 1,
        "matchCoef": 0.97,
        "gamesPlayed": 17,
        "rankIndex": 0,
        "det": {
          "g": 17,
          "time": 8693,
          "wr": 54,
          "el10": 18.57,
          "de10": 6.49,
          "dm10": 10416,
          "he10": 30.62,
          "as10": 3.52,
          "wa": 33,
          "ca": 9
        }
      },
      "ramattra": {
        "finalScore": 52.43,
        "battleScore": 43.45,
        "coeff": 1,
        "matchCoef": 1.01,
        "gamesPlayed": 30,
        "rankIndex": 0,
        "det": {
          "g": 30,
          "time": 14559,
          "wr": 42,
          "el10": 20.69,
          "de10": 6.59,
          "dm10": 11285,
          "he10": 398,
          "as10": 2.76,
          "wa": 28,
          "ca": 12
        },
        "rankDelta": 3
      },
      "reaper": {
        "finalScore": 58.07,
        "battleScore": 34.75,
        "coeff": 1.33,
        "matchCoef": 0.96,
        "gamesPlayed": 11,
        "rankIndex": 3,
        "det": {
          "g": 11,
          "time": 4864,
          "wr": 29,
          "el10": 18.01,
          "de10": 9,
          "dm10": 7009,
          "he10": 1368,
          "as10": 0,
          "wa": 26,
          "ca": 10
        },
        "rankDelta": 5
      },
      "reinhardt": {
        "finalScore": 33.44,
        "battleScore": 36.68,
        "coeff": 1,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 0,
        "det": {
          "g": 9,
          "time": 4309,
          "wr": 44,
          "el10": 12.39,
          "de10": 9.75,
          "dm10": 6637,
          "he10": 0,
          "as10": 1.39,
          "wa": 0,
          "ca": 0
        }
      },
      "roadhog": {
        "finalScore": 35.63,
        "battleScore": 38.7,
        "coeff": 1,
        "matchCoef": 0.92,
        "gamesPlayed": 10,
        "rankIndex": 0,
        "det": {
          "g": 10,
          "time": 5009,
          "wr": 45,
          "el10": 16.05,
          "de10": 6.47,
          "dm10": 8797,
          "he10": 5366,
          "as10": 2.99,
          "wa": 21,
          "ca": 11
        },
        "rankDelta": 1
      },
      "sigma": {
        "finalScore": 57.18,
        "battleScore": 45.91,
        "coeff": 1,
        "matchCoef": 1.02,
        "gamesPlayed": 44,
        "rankIndex": 0,
        "det": {
          "g": 44,
          "time": 21579,
          "wr": 60,
          "el10": 18.88,
          "de10": 4.81,
          "dm10": 11613,
          "he10": 0,
          "as10": 2.64,
          "wa": 46,
          "ca": 0
        },
        "rankDelta": -1
      },
      "sierra": {
        "finalScore": 50.1,
        "battleScore": 42.3,
        "coeff": 1.33,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 3,
        "det": {
          "g": 7,
          "time": 3425,
          "wr": 57,
          "el10": 15.59,
          "de10": 8.76,
          "dm10": 8164,
          "he10": 176,
          "as10": 1.05,
          "wa": 29,
          "ca": 10
        },
        "rankDelta": -1
      },
      "sombra": {
        "finalScore": 47.81,
        "battleScore": 39.41,
        "coeff": 1.33,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 3,
        "det": {
          "g": 9,
          "time": 4494,
          "wr": 54,
          "el10": 16.56,
          "de10": 9.08,
          "dm10": 5679,
          "he10": 177,
          "as10": 6.94,
          "wa": 36,
          "ca": 8
        },
        "rankDelta": -1
      },
      "symmetra": {
        "finalScore": 52.47,
        "battleScore": 40.78,
        "coeff": 1.33,
        "matchCoef": 0.97,
        "gamesPlayed": 17,
        "rankIndex": 3,
        "det": {
          "g": 17,
          "time": 9173,
          "wr": 49,
          "el10": 17.92,
          "de10": 7.98,
          "dm10": 8522,
          "he10": 137,
          "as10": 5.1,
          "wa": 37,
          "ca": 0
        }
      },
      "torbjorn": {
        "finalScore": 38.19,
        "battleScore": 31.47,
        "coeff": 1.33,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 3,
        "det": {
          "g": 9,
          "time": 3661,
          "wr": 23,
          "el10": 11.31,
          "de10": 6.72,
          "dm10": 8325,
          "he10": 0,
          "as10": 0,
          "wa": 21,
          "ca": 11
        },
        "rankDelta": -3
      },
      "venture": {
        "finalScore": 45.81,
        "battleScore": 40.49,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 1050,
          "wr": 97,
          "el10": 16.57,
          "de10": 8.57,
          "dm10": 8987,
          "he10": 0,
          "as10": 0.57,
          "wa": 49,
          "ca": 0
        }
      },
      "widowmaker": {
        "finalScore": 50.33,
        "battleScore": 37.45,
        "coeff": 1.33,
        "matchCoef": 1.01,
        "gamesPlayed": 28,
        "rankIndex": 3,
        "det": {
          "g": 28,
          "time": 13023,
          "wr": 41,
          "el10": 14.61,
          "de10": 7.46,
          "dm10": 6291,
          "he10": 0,
          "as10": 2.35,
          "wa": 36,
          "ca": 12
        },
        "rankDelta": 2
      },
      "winston": {
        "finalScore": 33.94,
        "battleScore": 34.77,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 19,
        "rankIndex": 0,
        "det": {
          "g": 19,
          "time": 9357,
          "wr": 43,
          "el10": 15.26,
          "de10": 7.69,
          "dm10": 7951,
          "he10": 168,
          "as10": 3.01,
          "wa": 46,
          "ca": 0
        },
        "rankDelta": -2
      },
      "wrecking-ball": {
        "finalScore": 39.42,
        "battleScore": 40.2,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 0,
        "det": {
          "g": 20,
          "time": 9483,
          "wr": 53,
          "el10": 15.57,
          "de10": 7.72,
          "dm10": 8259,
          "he10": 0,
          "as10": 2.59,
          "wa": 36,
          "ca": 11
        },
        "rankDelta": 1
      },
      "zarya": {
        "finalScore": 47.77,
        "battleScore": 38.82,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 28,
        "rankIndex": 0,
        "det": {
          "g": 28,
          "time": 13724,
          "wr": 39,
          "el10": 17.01,
          "de10": 7.48,
          "dm10": 9648,
          "he10": 0,
          "as10": 3.98,
          "wa": 49,
          "ca": 0
        }
      },
      "zenyatta": {
        "finalScore": 37.53,
        "battleScore": 37.16,
        "coeff": 1,
        "matchCoef": 1.01,
        "gamesPlayed": 28,
        "rankIndex": 0,
        "det": {
          "g": 28,
          "time": 13522,
          "wr": 50,
          "el10": 12.87,
          "de10": 7.5,
          "dm10": 6289,
          "he10": 5991,
          "as10": 14.15,
          "wa": 24,
          "ca": 14
        },
        "rankDelta": 2
      }
    },
    "bscoreAll": {
      "ashe": {
        "finalScore": 54.29,
        "battleScore": 39.54,
        "coeff": 1.33,
        "matchCoef": 1.03,
        "gamesPlayed": 36,
        "rankIndex": 3,
        "det": {
          "g": 36,
          "time": 16764,
          "wr": 43.44444444444444,
          "el10": 18.47277777777778,
          "de10": 6.763888888888889,
          "dm10": 9398.5,
          "he10": 0,
          "as10": 1.5322222222222222,
          "wa": 41.611111111111114,
          "ca": 18.444444444444443
        },
        "rankDelta": 1
      },
      "bastion": {
        "finalScore": 67.63,
        "battleScore": 42.19,
        "coeff": 1.33,
        "matchCoef": 0.99,
        "gamesPlayed": 19,
        "rankIndex": 3,
        "det": {
          "g": 19,
          "time": 11035,
          "wr": 51.68421052631579,
          "el10": 20.644736842105264,
          "de10": 7.411578947368421,
          "dm10": 11607.736842105263,
          "he10": 42.62263157894737,
          "as10": 2.0036842105263157,
          "wa": 26.789473684210527,
          "ca": 3
        },
        "rankDelta": 1
      },
      "cassidy": {
        "finalScore": 51.15,
        "battleScore": 38.3,
        "coeff": 1.33,
        "matchCoef": 1,
        "gamesPlayed": 26,
        "rankIndex": 3,
        "det": {
          "g": 26,
          "time": 14390,
          "wr": 42.80769230769231,
          "el10": 16.436153846153847,
          "de10": 9.026153846153846,
          "dm10": 8978.76923076923,
          "he10": 44.269615384615385,
          "as10": 1.7738461538461539,
          "wa": 43.19230769230769,
          "ca": 14.23076923076923
        }
      },
      "emre": {
        "finalScore": 46.89,
        "battleScore": 36.86,
        "coeff": 1.33,
        "matchCoef": 0.96,
        "gamesPlayed": 15,
        "rankIndex": 3,
        "det": {
          "g": 15,
          "time": 6467,
          "wr": 42.93333333333333,
          "el10": 15.603333333333332,
          "de10": 8.864666666666666,
          "dm10": 9716.8,
          "he10": 808.3333333333334,
          "as10": 0,
          "wa": 32.93333333333333,
          "ca": 14.2
        }
      },
      "freja": {
        "finalScore": 44.26,
        "battleScore": 35.8,
        "coeff": 1.33,
        "matchCoef": 0.93,
        "gamesPlayed": 11,
        "rankIndex": 3,
        "det": {
          "g": 11,
          "time": 4718,
          "wr": 50.90909090909091,
          "el10": 12.418181818181818,
          "de10": 9.020909090909091,
          "dm10": 7920.454545454545,
          "he10": 56.122727272727275,
          "as10": 0.2545454545454546,
          "wa": 25.181818181818183,
          "ca": 14.636363636363637
        },
        "rankDelta": 1
      },
      "juno": {
        "finalScore": 39.99,
        "battleScore": 40.28,
        "coeff": 1,
        "matchCoef": 0.99,
        "gamesPlayed": 23,
        "rankIndex": 0,
        "det": {
          "g": 23,
          "time": 12891,
          "wr": 51.21739130434783,
          "el10": 13.605217391304347,
          "de10": 6.615217391304348,
          "dm10": 4289.652173913043,
          "he10": 7296.173913043478,
          "as10": 12.092173913043478,
          "wa": 33.130434782608695,
          "ca": 8.130434782608695
        },
        "rankDelta": 2
      },
      "pharah": {
        "finalScore": 54.28,
        "battleScore": 38.88,
        "coeff": 1.33,
        "matchCoef": 1.05,
        "gamesPlayed": 44,
        "rankIndex": 3,
        "det": {
          "g": 44,
          "time": 23325,
          "wr": 48.79545454545455,
          "el10": 19.197272727272725,
          "de10": 8.825454545454544,
          "dm10": 10340.65909090909,
          "he10": 0,
          "as10": 3.8920454545454546,
          "wa": 42.15909090909091,
          "ca": 0
        },
        "rankDelta": 1
      },
      "shion": {
        "finalScore": 55.91,
        "battleScore": 42.31,
        "coeff": 1.33,
        "matchCoef": 0.99,
        "gamesPlayed": 23,
        "rankIndex": 3,
        "det": {
          "g": 23,
          "time": 11532,
          "wr": 64.1304347826087,
          "el10": 19.609130434782607,
          "de10": 8.082173913043478,
          "dm10": 8323.608695652174,
          "he10": 53.84434782608696,
          "as10": 2.0043478260869563,
          "wa": 33.73913043478261,
          "ca": 17
        },
        "rankDelta": 1
      },
      "sojourn": {
        "finalScore": 57.8,
        "battleScore": 41.48,
        "coeff": 1.33,
        "matchCoef": 1.05,
        "gamesPlayed": 43,
        "rankIndex": 3,
        "det": {
          "g": 43,
          "time": 21879,
          "wr": 47.25581395348837,
          "el10": 18.507906976744188,
          "de10": 8.22860465116279,
          "dm10": 10021.906976744185,
          "he10": 0,
          "as10": 1.5397674418604652,
          "wa": 31.88372093023256,
          "ca": 11.023255813953488
        },
        "rankDelta": -1
      },
      "soldier-76": {
        "finalScore": 65.33,
        "battleScore": 44,
        "coeff": 1.33,
        "matchCoef": 1.12,
        "gamesPlayed": 95,
        "rankIndex": 3,
        "det": {
          "g": 95,
          "time": 53503,
          "wr": 56.63157894736842,
          "el10": 21.219473684210527,
          "de10": 8.476842105263158,
          "dm10": 10205.736842105263,
          "he10": 1250.7368421052631,
          "as10": 1.3168421052631578,
          "wa": 36.63157894736842,
          "ca": 12.31578947368421
        },
        "rankDelta": -1
      },
      "tracer": {
        "finalScore": 58.06,
        "battleScore": 41.58,
        "coeff": 1.33,
        "matchCoef": 1.05,
        "gamesPlayed": 44,
        "rankIndex": 3,
        "det": {
          "g": 44,
          "time": 22640,
          "wr": 53.5,
          "el10": 18.106590909090908,
          "de10": 9.220681818181818,
          "dm10": 7184.295454545455,
          "he10": 2.540909090909091,
          "as10": 0.10750000000000001,
          "wa": 33.02272727272727,
          "ca": 11.022727272727273
        },
        "rankDelta": -1
      },
      "ana": {
        "finalScore": 32.57,
        "battleScore": 33.21,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 0,
        "det": {
          "g": 20,
          "time": 10453,
          "wr": 43,
          "el10": 10.91,
          "de10": 7.4,
          "dm10": 4077,
          "he10": 5358,
          "as10": 11.19,
          "wa": 33,
          "ca": 0
        },
        "rankDelta": -1
      },
      "anran": {
        "finalScore": 59.26,
        "battleScore": 42.13,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 6,
        "rankIndex": 3,
        "det": {
          "g": 6,
          "time": 2763,
          "wr": 75,
          "el10": 16.72,
          "de10": 9.99,
          "dm10": 7346,
          "he10": 544,
          "as10": 1.09,
          "wa": 24,
          "ca": 10
        },
        "rankDelta": 3
      },
      "baptiste": {
        "finalScore": 39.7,
        "battleScore": 40.14,
        "coeff": 1,
        "matchCoef": 0.99,
        "gamesPlayed": 22,
        "rankIndex": 0,
        "det": {
          "g": 22,
          "time": 10956,
          "wr": 61,
          "el10": 10.68,
          "de10": 7.01,
          "dm10": 4236,
          "he10": 7608,
          "as10": 12.1,
          "wa": 26,
          "ca": 12
        },
        "rankDelta": -1
      },
      "brigitte": {
        "finalScore": 37.02,
        "battleScore": 37.74,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 0,
        "det": {
          "g": 20,
          "time": 9213,
          "wr": 53,
          "el10": 11.72,
          "de10": 9.64,
          "dm10": 3767,
          "he10": 7239,
          "as10": 16.35,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": -2
      },
      "dmon": {
        "finalScore": 30.73,
        "battleScore": 36.16,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 0,
        "det": {
          "g": 3,
          "time": 1714,
          "wr": 74,
          "el10": 9.8,
          "de10": 7,
          "dm10": 7364,
          "he10": 0,
          "as10": 2.1,
          "wa": 31,
          "ca": 0
        },
        "rankDelta": 1
      },
      "domina": {
        "finalScore": 45.92,
        "battleScore": 54.02,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 0,
        "det": {
          "g": 4,
          "time": 1761,
          "wr": 100,
          "el10": 29.98,
          "de10": 4.09,
          "dm10": 11361,
          "he10": 1977,
          "as10": 3.07,
          "wa": 47,
          "ca": 7
        },
        "rankDelta": 2
      },
      "doomfist": {
        "finalScore": 34.46,
        "battleScore": 34.35,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 26,
        "rankIndex": 0,
        "det": {
          "g": 26,
          "time": 11718,
          "wr": 44,
          "el10": 16.44,
          "de10": 8.6,
          "dm10": 8440,
          "he10": 216,
          "as10": 3.58,
          "wa": 25,
          "ca": 9
        },
        "rankDelta": 1
      },
      "dva": {
        "finalScore": 45.67,
        "battleScore": 45.09,
        "coeff": 1,
        "matchCoef": 1.01,
        "gamesPlayed": 29,
        "rankIndex": 0,
        "det": {
          "g": 29,
          "time": 15594,
          "wr": 56,
          "el10": 21.66,
          "de10": 5.16,
          "dm10": 9271,
          "he10": 320,
          "as10": 6.5,
          "wa": 29,
          "ca": 11
        },
        "rankDelta": -2
      },
      "echo": {
        "finalScore": 55.44,
        "battleScore": 42.67,
        "coeff": 1.33,
        "matchCoef": 0.98,
        "gamesPlayed": 19,
        "rankIndex": 3,
        "det": {
          "g": 19,
          "time": 10334,
          "wr": 66,
          "el10": 18.99,
          "de10": 8.36,
          "dm10": 9223,
          "he10": 95.01,
          "as10": 0.29,
          "wa": 30,
          "ca": 9
        },
        "rankDelta": -2
      },
      "genji": {
        "finalScore": 42.62,
        "battleScore": 32.96,
        "coeff": 1.33,
        "matchCoef": 0.97,
        "gamesPlayed": 18,
        "rankIndex": 3,
        "det": {
          "g": 18,
          "time": 9799,
          "wr": 47,
          "el10": 11.82,
          "de10": 9.43,
          "dm10": 5608,
          "he10": 112,
          "as10": 0,
          "wa": 22,
          "ca": 11
        }
      },
      "hazard": {
        "finalScore": 26.91,
        "battleScore": 30.7,
        "coeff": 1,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 0,
        "det": {
          "g": 6,
          "time": 2330,
          "wr": 4,
          "el10": 13.65,
          "de10": 9.01,
          "dm10": 8752,
          "he10": 1119,
          "as10": 3.35,
          "wa": 25,
          "ca": 5
        }
      },
      "hanzo": {
        "finalScore": 43.57,
        "battleScore": 36.79,
        "coeff": 1.33,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 3,
        "det": {
          "g": 7,
          "time": 2765,
          "wr": 45,
          "el10": 13.02,
          "de10": 8.9,
          "dm10": 6774,
          "he10": 0,
          "as10": 3.69,
          "wa": 24,
          "ca": 16
        },
        "rankDelta": -1
      },
      "illari": {
        "finalScore": 35.47,
        "battleScore": 37.12,
        "coeff": 1,
        "matchCoef": 0.96,
        "gamesPlayed": 15,
        "rankIndex": 0,
        "det": {
          "g": 15,
          "time": 8138,
          "wr": 48,
          "el10": 12.31,
          "de10": 5.9,
          "dm10": 4776,
          "he10": 7190,
          "as10": 6.93,
          "wa": 41,
          "ca": 14
        },
        "rankDelta": -1
      },
      "junker-queen": {
        "finalScore": 38.64,
        "battleScore": 38.64,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 25,
        "rankIndex": 0,
        "det": {
          "g": 25,
          "time": 13154,
          "wr": 40,
          "el10": 18.06,
          "de10": 6.43,
          "dm10": 10110,
          "he10": 2111,
          "as10": 5.61,
          "wa": 32,
          "ca": 11
        },
        "rankDelta": 1
      },
      "junkrat": {
        "finalScore": 49.76,
        "battleScore": 41.48,
        "coeff": 1.33,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 3,
        "det": {
          "g": 8,
          "time": 4263,
          "wr": 52,
          "el10": 16.05,
          "de10": 7.6,
          "dm10": 9191,
          "he10": 0,
          "as10": 3.66,
          "wa": 27,
          "ca": 0
        },
        "rankDelta": -4
      },
      "kiriko": {
        "finalScore": 35.09,
        "battleScore": 33.79,
        "coeff": 1,
        "matchCoef": 1.04,
        "gamesPlayed": 39,
        "rankIndex": 0,
        "det": {
          "g": 39,
          "time": 20967,
          "wr": 45,
          "el10": 10.16,
          "de10": 7.24,
          "dm10": 3724,
          "he10": 6636,
          "as10": 12.36,
          "wa": 26,
          "ca": 13
        },
        "rankDelta": 1
      },
      "lifeweaver": {
        "finalScore": 30.46,
        "battleScore": 32.29,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 0,
        "det": {
          "g": 13,
          "time": 7868,
          "wr": 21,
          "el10": 10.91,
          "de10": 6.63,
          "dm10": 3724,
          "he10": 7202,
          "as10": 9.08,
          "wa": 27,
          "ca": 11
        },
        "rankDelta": 1
      },
      "lucio": {
        "finalScore": 37.21,
        "battleScore": 36.43,
        "coeff": 1,
        "matchCoef": 1.02,
        "gamesPlayed": 32,
        "rankIndex": 0,
        "det": {
          "g": 32,
          "time": 17318,
          "wr": 50,
          "el10": 11.5,
          "de10": 7.97,
          "dm10": 4276,
          "he10": 7120,
          "as10": 10.26,
          "wa": 24,
          "ca": 9
        }
      },
      "mauga": {
        "finalScore": 52.91,
        "battleScore": 40.84,
        "coeff": 1,
        "matchCoef": 1.01,
        "gamesPlayed": 31,
        "rankIndex": 0,
        "det": {
          "g": 31,
          "time": 15168,
          "wr": 45,
          "el10": 22.71,
          "de10": 8.15,
          "dm10": 11075,
          "he10": 1942,
          "as10": 9.06,
          "wa": 35,
          "ca": 13
        },
        "rankDelta": -2
      },
      "mei": {
        "finalScore": 49.21,
        "battleScore": 41.55,
        "coeff": 1.33,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 3,
        "det": {
          "g": 7,
          "time": 3315,
          "wr": 57,
          "el10": 13.76,
          "de10": 6.15,
          "dm10": 6515,
          "he10": 1429,
          "as10": 5.79,
          "wa": 47,
          "ca": 0
        },
        "rankDelta": 1
      },
      "mercy": {
        "finalScore": 29.69,
        "battleScore": 34.93,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 0,
        "det": {
          "g": 4,
          "time": 2107,
          "wr": 46,
          "el10": 1.14,
          "de10": 9.4,
          "dm10": 241,
          "he10": 7833,
          "as10": 13.95,
          "wa": 22,
          "ca": 8
        },
        "rankDelta": -2
      },
      "mizuki": {
        "finalScore": 33.07,
        "battleScore": 38.91,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 0,
        "det": {
          "g": 4,
          "time": 1557,
          "wr": 57,
          "el10": 12.33,
          "de10": 6.55,
          "dm10": 3138,
          "he10": 8028,
          "as10": 16.96,
          "wa": 18,
          "ca": 10
        },
        "rankDelta": 1
      },
      "moira": {
        "finalScore": 57.4,
        "battleScore": 37.84,
        "coeff": 1,
        "matchCoef": 0.99,
        "gamesPlayed": 18,
        "rankIndex": 0,
        "det": {
          "g": 18,
          "time": 8872,
          "wr": 40,
          "el10": 17.72,
          "de10": 6.76,
          "dm10": 5489,
          "he10": 7987,
          "as10": 13.32,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": -4
      },
      "orisa": {
        "finalScore": 40.11,
        "battleScore": 41.49,
        "coeff": 1,
        "matchCoef": 0.97,
        "gamesPlayed": 17,
        "rankIndex": 0,
        "det": {
          "g": 17,
          "time": 8693,
          "wr": 54,
          "el10": 18.57,
          "de10": 6.49,
          "dm10": 10416,
          "he10": 30.62,
          "as10": 3.52,
          "wa": 33,
          "ca": 9
        }
      },
      "ramattra": {
        "finalScore": 52.43,
        "battleScore": 43.45,
        "coeff": 1,
        "matchCoef": 1.01,
        "gamesPlayed": 30,
        "rankIndex": 0,
        "det": {
          "g": 30,
          "time": 14559,
          "wr": 42,
          "el10": 20.69,
          "de10": 6.59,
          "dm10": 11285,
          "he10": 398,
          "as10": 2.76,
          "wa": 28,
          "ca": 12
        },
        "rankDelta": 3
      },
      "reaper": {
        "finalScore": 58.07,
        "battleScore": 34.75,
        "coeff": 1.33,
        "matchCoef": 0.96,
        "gamesPlayed": 11,
        "rankIndex": 3,
        "det": {
          "g": 11,
          "time": 4864,
          "wr": 29,
          "el10": 18.01,
          "de10": 9,
          "dm10": 7009,
          "he10": 1368,
          "as10": 0,
          "wa": 26,
          "ca": 10
        },
        "rankDelta": 5
      },
      "reinhardt": {
        "finalScore": 33.44,
        "battleScore": 36.68,
        "coeff": 1,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 0,
        "det": {
          "g": 9,
          "time": 4309,
          "wr": 44,
          "el10": 12.39,
          "de10": 9.75,
          "dm10": 6637,
          "he10": 0,
          "as10": 1.39,
          "wa": 0,
          "ca": 0
        }
      },
      "roadhog": {
        "finalScore": 35.63,
        "battleScore": 38.7,
        "coeff": 1,
        "matchCoef": 0.92,
        "gamesPlayed": 10,
        "rankIndex": 0,
        "det": {
          "g": 10,
          "time": 5009,
          "wr": 45,
          "el10": 16.05,
          "de10": 6.47,
          "dm10": 8797,
          "he10": 5366,
          "as10": 2.99,
          "wa": 21,
          "ca": 11
        },
        "rankDelta": 1
      },
      "sigma": {
        "finalScore": 57.18,
        "battleScore": 45.91,
        "coeff": 1,
        "matchCoef": 1.02,
        "gamesPlayed": 44,
        "rankIndex": 0,
        "det": {
          "g": 44,
          "time": 21579,
          "wr": 60,
          "el10": 18.88,
          "de10": 4.81,
          "dm10": 11613,
          "he10": 0,
          "as10": 2.64,
          "wa": 46,
          "ca": 0
        },
        "rankDelta": -1
      },
      "sierra": {
        "finalScore": 50.1,
        "battleScore": 42.3,
        "coeff": 1.33,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 3,
        "det": {
          "g": 7,
          "time": 3425,
          "wr": 57,
          "el10": 15.59,
          "de10": 8.76,
          "dm10": 8164,
          "he10": 176,
          "as10": 1.05,
          "wa": 29,
          "ca": 10
        },
        "rankDelta": -1
      },
      "sombra": {
        "finalScore": 47.81,
        "battleScore": 39.41,
        "coeff": 1.33,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 3,
        "det": {
          "g": 9,
          "time": 4494,
          "wr": 54,
          "el10": 16.56,
          "de10": 9.08,
          "dm10": 5679,
          "he10": 177,
          "as10": 6.94,
          "wa": 36,
          "ca": 8
        },
        "rankDelta": -1
      },
      "symmetra": {
        "finalScore": 52.47,
        "battleScore": 40.78,
        "coeff": 1.33,
        "matchCoef": 0.97,
        "gamesPlayed": 17,
        "rankIndex": 3,
        "det": {
          "g": 17,
          "time": 9173,
          "wr": 49,
          "el10": 17.92,
          "de10": 7.98,
          "dm10": 8522,
          "he10": 137,
          "as10": 5.1,
          "wa": 37,
          "ca": 0
        }
      },
      "torbjorn": {
        "finalScore": 38.19,
        "battleScore": 31.47,
        "coeff": 1.33,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 3,
        "det": {
          "g": 9,
          "time": 3661,
          "wr": 23,
          "el10": 11.31,
          "de10": 6.72,
          "dm10": 8325,
          "he10": 0,
          "as10": 0,
          "wa": 21,
          "ca": 11
        },
        "rankDelta": -3
      },
      "venture": {
        "finalScore": 45.81,
        "battleScore": 40.49,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 1050,
          "wr": 97,
          "el10": 16.57,
          "de10": 8.57,
          "dm10": 8987,
          "he10": 0,
          "as10": 0.57,
          "wa": 49,
          "ca": 0
        }
      },
      "widowmaker": {
        "finalScore": 50.33,
        "battleScore": 37.45,
        "coeff": 1.33,
        "matchCoef": 1.01,
        "gamesPlayed": 28,
        "rankIndex": 3,
        "det": {
          "g": 28,
          "time": 13023,
          "wr": 41,
          "el10": 14.61,
          "de10": 7.46,
          "dm10": 6291,
          "he10": 0,
          "as10": 2.35,
          "wa": 36,
          "ca": 12
        },
        "rankDelta": 2
      },
      "winston": {
        "finalScore": 33.94,
        "battleScore": 34.77,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 19,
        "rankIndex": 0,
        "det": {
          "g": 19,
          "time": 9357,
          "wr": 43,
          "el10": 15.26,
          "de10": 7.69,
          "dm10": 7951,
          "he10": 168,
          "as10": 3.01,
          "wa": 46,
          "ca": 0
        },
        "rankDelta": -2
      },
      "wrecking-ball": {
        "finalScore": 39.42,
        "battleScore": 40.2,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 0,
        "det": {
          "g": 20,
          "time": 9483,
          "wr": 53,
          "el10": 15.57,
          "de10": 7.72,
          "dm10": 8259,
          "he10": 0,
          "as10": 2.59,
          "wa": 36,
          "ca": 11
        },
        "rankDelta": 1
      },
      "zarya": {
        "finalScore": 47.77,
        "battleScore": 38.82,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 28,
        "rankIndex": 0,
        "det": {
          "g": 28,
          "time": 13724,
          "wr": 39,
          "el10": 17.01,
          "de10": 7.48,
          "dm10": 9648,
          "he10": 0,
          "as10": 3.98,
          "wa": 49,
          "ca": 0
        }
      },
      "zenyatta": {
        "finalScore": 37.53,
        "battleScore": 37.16,
        "coeff": 1,
        "matchCoef": 1.01,
        "gamesPlayed": 28,
        "rankIndex": 0,
        "det": {
          "g": 28,
          "time": 13522,
          "wr": 50,
          "el10": 12.87,
          "de10": 7.5,
          "dm10": 6289,
          "he10": 5991,
          "as10": 14.15,
          "wa": 24,
          "ca": 14
        },
        "rankDelta": 2
      }
    }
  },
  {
    "id": "voidglove",
    "name": "ぼいどぐらぶ",
    "tag": "",
    "endorse": 3,
    "title": "Café Cutie",
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7daa20c3503d9754bed64a948dd5532ae128ed9b04dde0d61e76e6683cecd28d.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/293db3a1b56e50fb5531a64980fa86812516fa9ef86acef925bfffb138bf0724.png",
    "role": "Support",
    "ranks": {
      "Tank": {
        "division": "gold",
        "tier": 2,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_GoldTier.8d40eab551020b46a84002019dd98714149ed5e2.png"
      },
      "Damage": {
        "division": "platinum",
        "tier": 4,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_PlatinumTier.694340e3a5b2031d4fac9eb1d8f52c6855d4c072.png"
      },
      "Support": {
        "division": "platinum",
        "tier": 3,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_PlatinumTier.694340e3a5b2031d4fac9eb1d8f52c6855d4c072.png"
      }
    },
    "rankTier": "Platinum 3",
    "overall": {
      "matches": 737,
      "wins": 386,
      "losses": 351,
      "wr": 52.37,
      "kda": 2.78,
      "elim": 15.45,
      "deaths": 6.24,
      "dmg": 7940.6,
      "heal": 3251.66,
      "time": 389914
    },
    "roles": {
      "Tank": {
        "g": 93,
        "w": 50,
        "l": 43,
        "time": 52559,
        "wr": 53.76,
        "kda": 4.03,
        "elim": 20.31,
        "deaths": 5.42,
        "dmg": 11360.23,
        "heal": 1468.4
      },
      "Damage": {
        "g": 338,
        "w": 182,
        "l": 156,
        "time": 172789,
        "wr": 53.85,
        "kda": 2.53,
        "elim": 17.23,
        "deaths": 6.92,
        "dmg": 9402.23,
        "heal": 242.44
      },
      "Support": {
        "g": 306,
        "w": 154,
        "l": 152,
        "time": 164566,
        "wr": 50.33,
        "kda": 2.7,
        "elim": 12.04,
        "deaths": 5.78,
        "dmg": 5313.79,
        "heal": 6980.78
      }
    },
    "heroes": [
      {
        "slug": "ana",
        "n": "Ana",
        "role": "Support",
        "g": 134,
        "wr": 44.78,
        "kda": 2.97
      },
      {
        "slug": "kiriko",
        "n": "Kiriko",
        "role": "Support",
        "g": 60,
        "wr": 51.67,
        "kda": 2.1
      },
      {
        "slug": "cassidy",
        "n": "Cassidy",
        "role": "Damage",
        "g": 56,
        "wr": 60.71,
        "kda": 2.44
      },
      {
        "slug": "genji",
        "n": "Genji",
        "role": "Damage",
        "g": 42,
        "wr": 52.38,
        "kda": 2.2
      },
      {
        "slug": "doomfist",
        "n": "Doomfist",
        "role": "Tank",
        "g": 36,
        "wr": 50,
        "kda": 3.42
      },
      {
        "slug": "sojourn",
        "n": "Sojourn",
        "role": "Damage",
        "g": 33,
        "wr": 51.52,
        "kda": 2.49
      },
      {
        "slug": "moira",
        "n": "Moira",
        "role": "Support",
        "g": 27,
        "wr": 51.85,
        "kda": 3.62
      },
      {
        "slug": "wuyang",
        "n": "Wuyang",
        "role": "Support",
        "g": 25,
        "wr": 56,
        "kda": 1.95
      },
      {
        "slug": "tracer",
        "n": "Tracer",
        "role": "Damage",
        "g": 21,
        "wr": 47.62,
        "kda": 2.41
      },
      {
        "slug": "sierra",
        "n": "Sierra",
        "role": "Damage",
        "g": 20,
        "wr": 35,
        "kda": 2.11
      },
      {
        "slug": "freja",
        "n": "Freja",
        "role": "Damage",
        "g": 17,
        "wr": 58.82,
        "kda": 2.98
      },
      {
        "slug": "shion",
        "n": "Shion",
        "role": "Damage",
        "g": 17,
        "wr": 52.94,
        "kda": 3.02
      },
      {
        "slug": "anran",
        "n": "Anran",
        "role": "Damage",
        "g": 15,
        "wr": 33.33,
        "kda": 1.95
      },
      {
        "slug": "jetpack-cat",
        "n": "Jetpack Cat",
        "role": "Support",
        "g": 15,
        "wr": 60,
        "kda": 4.02
      },
      {
        "slug": "soldier-76",
        "n": "Soldier: 76",
        "role": "Damage",
        "g": 14,
        "wr": 64.29,
        "kda": 2.99
      },
      {
        "slug": "mizuki",
        "n": "Mizuki",
        "role": "Support",
        "g": 13,
        "wr": 61.54,
        "kda": 2.1
      },
      {
        "slug": "reaper",
        "n": "Reaper",
        "role": "Damage",
        "g": 13,
        "wr": 69.23,
        "kda": 3.4
      },
      {
        "slug": "vendetta",
        "n": "Vendetta",
        "role": "Damage",
        "g": 12,
        "wr": 41.67,
        "kda": 2.5
      },
      {
        "slug": "widowmaker",
        "n": "Widowmaker",
        "role": "Damage",
        "g": 10,
        "wr": 50,
        "kda": 1.79
      },
      {
        "slug": "echo",
        "n": "Echo",
        "role": "Damage",
        "g": 9,
        "wr": 66.67,
        "kda": 3.48
      },
      {
        "slug": "mauga",
        "n": "Mauga",
        "role": "Tank",
        "g": 9,
        "wr": 66.67,
        "kda": 5.95
      },
      {
        "slug": "ashe",
        "n": "Ashe",
        "role": "Damage",
        "g": 8,
        "wr": 75,
        "kda": 2.18
      },
      {
        "slug": "illari",
        "n": "Illari",
        "role": "Support",
        "g": 8,
        "wr": 62.5,
        "kda": 3.06
      },
      {
        "slug": "orisa",
        "n": "Orisa",
        "role": "Tank",
        "g": 8,
        "wr": 37.5,
        "kda": 4.02
      },
      {
        "slug": "roadhog",
        "n": "Roadhog",
        "role": "Tank",
        "g": 8,
        "wr": 62.5,
        "kda": 4.74
      },
      {
        "slug": "bastion",
        "n": "Bastion",
        "role": "Damage",
        "g": 7,
        "wr": 57.14,
        "kda": 3.69
      },
      {
        "slug": "dmon",
        "n": "D.Mon",
        "role": "Tank",
        "g": 7,
        "wr": 85.71,
        "kda": 5.68
      },
      {
        "slug": "emre",
        "n": "Emre",
        "role": "Damage",
        "g": 7,
        "wr": 42.86,
        "kda": 2.74
      },
      {
        "slug": "hanzo",
        "n": "Hanzo",
        "role": "Damage",
        "g": 7,
        "wr": 57.14,
        "kda": 1.5
      },
      {
        "slug": "mei",
        "n": "Mei",
        "role": "Damage",
        "g": 7,
        "wr": 71.43,
        "kda": 4.57
      },
      {
        "slug": "pharah",
        "n": "Pharah",
        "role": "Damage",
        "g": 6,
        "wr": 66.67,
        "kda": 2.6
      },
      {
        "slug": "sigma",
        "n": "Sigma",
        "role": "Tank",
        "g": 6,
        "wr": 33.33,
        "kda": 3.3
      },
      {
        "slug": "zarya",
        "n": "Zarya",
        "role": "Tank",
        "g": 6,
        "wr": 50,
        "kda": 3.7
      },
      {
        "slug": "zenyatta",
        "n": "Zenyatta",
        "role": "Support",
        "g": 6,
        "wr": 50,
        "kda": 2.26
      },
      {
        "slug": "brigitte",
        "n": "Brigitte",
        "role": "Support",
        "g": 5,
        "wr": 60,
        "kda": 2.97
      },
      {
        "slug": "symmetra",
        "n": "Symmetra",
        "role": "Damage",
        "g": 5,
        "wr": 60,
        "kda": 2.52
      },
      {
        "slug": "baptiste",
        "n": "Baptiste",
        "role": "Support",
        "g": 4,
        "wr": 50,
        "kda": 1.7
      },
      {
        "slug": "dva",
        "n": "D.Va",
        "role": "Tank",
        "g": 4,
        "wr": 50,
        "kda": 3.71
      },
      {
        "slug": "junkrat",
        "n": "Junkrat",
        "role": "Damage",
        "g": 4,
        "wr": 25,
        "kda": 2.4
      },
      {
        "slug": "lifeweaver",
        "n": "Lifeweaver",
        "role": "Support",
        "g": 4,
        "wr": 50,
        "kda": 1.4
      },
      {
        "slug": "sombra",
        "n": "Sombra",
        "role": "Damage",
        "g": 4,
        "wr": 25,
        "kda": 2.54
      },
      {
        "slug": "torbjorn",
        "n": "Torbjörn",
        "role": "Damage",
        "g": 3,
        "wr": 100,
        "kda": 2.77
      },
      {
        "slug": "domina",
        "n": "Domina",
        "role": "Tank",
        "g": 2,
        "wr": 50,
        "kda": 4.36
      },
      {
        "slug": "hazard",
        "n": "Hazard",
        "role": "Tank",
        "g": 2,
        "wr": 50,
        "kda": 3.67
      },
      {
        "slug": "juno",
        "n": "Juno",
        "role": "Support",
        "g": 2,
        "wr": 50,
        "kda": 2.07
      },
      {
        "slug": "lucio",
        "n": "Lúcio",
        "role": "Support",
        "g": 2,
        "wr": 100,
        "kda": 3.91
      },
      {
        "slug": "ramattra",
        "n": "Ramattra",
        "role": "Tank",
        "g": 2,
        "wr": 50,
        "kda": 4.36
      },
      {
        "slug": "winston",
        "n": "Winston",
        "role": "Tank",
        "g": 2,
        "wr": 50,
        "kda": 4.6
      },
      {
        "slug": "mercy",
        "n": "Mercy",
        "role": "Support",
        "g": 1,
        "wr": 0,
        "kda": 0.25
      },
      {
        "slug": "reinhardt",
        "n": "Reinhardt",
        "role": "Tank",
        "g": 1,
        "wr": 100,
        "kda": 4
      },
      {
        "slug": "venture",
        "n": "Venture",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 0.91
      }
    ],
    "bscore": {
      "ana": {
        "finalScore": 57.9,
        "battleScore": 37.98,
        "coeff": 1.33,
        "matchCoef": 1.15,
        "gamesPlayed": 134,
        "rankIndex": 3,
        "det": {
          "g": 134,
          "time": 71678,
          "wr": 44.80597014925373,
          "el10": 10.710895522388057,
          "de10": 5.5783582089552235,
          "dm10": 4316.432835820896,
          "he10": 5955.44776119403,
          "as10": 10.803582089552238,
          "wa": 51.208955223880594,
          "ca": 0
        },
        "rankDelta": -1
      },
      "anran": {
        "finalScore": 57.53,
        "battleScore": 37.91,
        "coeff": 1.33,
        "matchCoef": 0.98,
        "gamesPlayed": 15,
        "rankIndex": 3,
        "det": {
          "g": 15,
          "time": 7732,
          "wr": 32.8,
          "el10": 15.930666666666667,
          "de10": 8.144,
          "dm10": 6650.6,
          "he10": 630.2,
          "as10": 0.3086666666666667,
          "wa": 29.666666666666668,
          "ca": 10.533333333333333
        },
        "rankDelta": 2
      },
      "brigitte": {
        "finalScore": 45.36,
        "battleScore": 39.6,
        "coeff": 1.33,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 3,
        "det": {
          "g": 5,
          "time": 2501,
          "wr": 63.6,
          "el10": 15.223999999999998,
          "de10": 7.2379999999999995,
          "dm10": 4962.6,
          "he10": 6557,
          "as10": 15.945999999999998,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": -1
      },
      "cassidy": {
        "finalScore": 63.48,
        "battleScore": 44.58,
        "coeff": 1.33,
        "matchCoef": 1.07,
        "gamesPlayed": 56,
        "rankIndex": 3,
        "det": {
          "g": 56,
          "time": 28781,
          "wr": 60.964285714285715,
          "el10": 17.499642857142856,
          "de10": 7.126071428571428,
          "dm10": 8432.714285714286,
          "he10": 52.09499999999999,
          "as10": 1.843214285714286,
          "wa": 41.464285714285715,
          "ca": 12
        }
      },
      "dmon": {
        "finalScore": 55.71,
        "battleScore": 51.75,
        "coeff": 1.21,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 2,
        "det": {
          "g": 7,
          "time": 4348,
          "wr": 84.57142857142857,
          "el10": 22.427142857142858,
          "de10": 3.6700000000000004,
          "dm10": 9789.42857142857,
          "he10": 240,
          "as10": 3.391428571428572,
          "wa": 33.142857142857146,
          "ca": 0
        },
        "rankDelta": 3
      },
      "doomfist": {
        "finalScore": 57.36,
        "battleScore": 45.96,
        "coeff": 1.21,
        "matchCoef": 1.03,
        "gamesPlayed": 36,
        "rankIndex": 2,
        "det": {
          "g": 36,
          "time": 19547,
          "wr": 50.083333333333336,
          "el10": 20.77388888888889,
          "de10": 6.1033333333333335,
          "dm10": 8208.861111111111,
          "he10": 1753.5833333333333,
          "as10": 5.252222222222222,
          "wa": 27.805555555555557,
          "ca": 11.61111111111111
        },
        "rankDelta": -2
      },
      "echo": {
        "finalScore": 53.51,
        "battleScore": 44.1,
        "coeff": 1.33,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 3,
        "det": {
          "g": 9,
          "time": 4468,
          "wr": 69.22222222222223,
          "el10": 20.523333333333333,
          "de10": 5.917777777777777,
          "dm10": 7295.222222222223,
          "he10": 272.61777777777775,
          "as10": 0.13333333333333333,
          "wa": 21.22222222222222,
          "ca": 8.444444444444445
        },
        "rankDelta": -1
      },
      "freja": {
        "finalScore": 56.09,
        "battleScore": 43.6,
        "coeff": 1.33,
        "matchCoef": 0.97,
        "gamesPlayed": 17,
        "rankIndex": 3,
        "det": {
          "g": 17,
          "time": 8793,
          "wr": 54,
          "el10": 18.400588235294116,
          "de10": 6.128823529411765,
          "dm10": 9510.70588235294,
          "he10": 144.1764705882353,
          "as10": 0.5488235294117646,
          "wa": 25.058823529411764,
          "ca": 15.176470588235293
        },
        "rankDelta": -3
      },
      "genji": {
        "finalScore": 55.37,
        "battleScore": 39.81,
        "coeff": 1.33,
        "matchCoef": 1.04,
        "gamesPlayed": 42,
        "rankIndex": 3,
        "det": {
          "g": 42,
          "time": 21501,
          "wr": 53,
          "el10": 15.402142857142858,
          "de10": 6.934285714285714,
          "dm10": 5717.785714285715,
          "he10": 174.14285714285714,
          "as10": 0,
          "wa": 24.071428571428573,
          "ca": 12.142857142857142
        },
        "rankDelta": -3
      },
      "illari": {
        "finalScore": 53.46,
        "battleScore": 44.56,
        "coeff": 1.33,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 3,
        "det": {
          "g": 8,
          "time": 3570,
          "wr": 64.25,
          "el10": 14.4925,
          "de10": 5.68125,
          "dm10": 5497.875,
          "he10": 7742.25,
          "as10": 9.45625,
          "wa": 39,
          "ca": 15.125
        },
        "rankDelta": -4
      },
      "jetpack-cat": {
        "finalScore": 56.88,
        "battleScore": 44.71,
        "coeff": 1.33,
        "matchCoef": 0.96,
        "gamesPlayed": 15,
        "rankIndex": 3,
        "det": {
          "g": 15,
          "time": 7505,
          "wr": 60.666666666666664,
          "el10": 18.705333333333332,
          "de10": 4.932666666666667,
          "dm10": 4789.666666666667,
          "he10": 5661.866666666667,
          "as10": 9.818666666666667,
          "wa": 26.4,
          "ca": 7.933333333333334
        },
        "rankDelta": 3
      },
      "kiriko": {
        "finalScore": 58.88,
        "battleScore": 41.12,
        "coeff": 1.33,
        "matchCoef": 1.08,
        "gamesPlayed": 60,
        "rankIndex": 3,
        "det": {
          "g": 60,
          "time": 33473,
          "wr": 51.68333333333333,
          "el10": 8.866833333333334,
          "de10": 5.822666666666667,
          "dm10": 3040.0833333333335,
          "he10": 9246.083333333334,
          "as10": 15.732666666666665,
          "wa": 28,
          "ca": 12
        },
        "rankDelta": 2
      },
      "mauga": {
        "finalScore": 60.46,
        "battleScore": 45.54,
        "coeff": 1.21,
        "matchCoef": 0.96,
        "gamesPlayed": 9,
        "rankIndex": 2,
        "det": {
          "g": 9,
          "time": 5088,
          "wr": 59.333333333333336,
          "el10": 23.486666666666665,
          "de10": 5.213333333333334,
          "dm10": 10912.333333333334,
          "he10": 1317.6666666666667,
          "as10": 9.176666666666668,
          "wa": 32,
          "ca": 10.666666666666666
        }
      },
      "mizuki": {
        "finalScore": 50.34,
        "battleScore": 40.09,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 3,
        "det": {
          "g": 13,
          "time": 6980,
          "wr": 62.69230769230769,
          "el10": 12.404615384615385,
          "de10": 5.825384615384615,
          "dm10": 4663.615384615385,
          "he10": 7716,
          "as10": 10.11076923076923,
          "wa": 32,
          "ca": 12.307692307692308
        },
        "rankDelta": 6
      },
      "moira": {
        "finalScore": 66.78,
        "battleScore": 43.95,
        "coeff": 1.33,
        "matchCoef": 1,
        "gamesPlayed": 27,
        "rankIndex": 3,
        "det": {
          "g": 27,
          "time": 16143,
          "wr": 49.111111111111114,
          "el10": 20.79222222222222,
          "de10": 5.812222222222221,
          "dm10": 6826.555555555556,
          "he10": 7812.222222222223,
          "as10": 14.525555555555556,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": -1
      },
      "orisa": {
        "finalScore": 44.58,
        "battleScore": 40.87,
        "coeff": 1.21,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 2,
        "det": {
          "g": 8,
          "time": 4700,
          "wr": 25,
          "el10": 18.27,
          "de10": 5.40875,
          "dm10": 10960.375,
          "he10": 162.375,
          "as10": 3.1325,
          "wa": 33.75,
          "ca": 11.5
        },
        "rankDelta": -1
      },
      "reaper": {
        "finalScore": 63.39,
        "battleScore": 46.32,
        "coeff": 1.33,
        "matchCoef": 0.97,
        "gamesPlayed": 13,
        "rankIndex": 3,
        "det": {
          "g": 13,
          "time": 6889,
          "wr": 71.07692307692308,
          "el10": 20.763846153846153,
          "de10": 6.088461538461538,
          "dm10": 6961.846153846154,
          "he10": 1314.7692307692307,
          "as10": 0,
          "wa": 27.615384615384617,
          "ca": 13
        }
      },
      "sierra": {
        "finalScore": 44.99,
        "battleScore": 34.46,
        "coeff": 1.33,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 3,
        "det": {
          "g": 20,
          "time": 9276,
          "wr": 37.05,
          "el10": 16.723999999999997,
          "de10": 7.881,
          "dm10": 8037.4,
          "he10": 40.85,
          "as10": 0.2505,
          "wa": 24.75,
          "ca": 7.1
        },
        "rankDelta": -1
      },
      "sojourn": {
        "finalScore": 53.27,
        "battleScore": 39.09,
        "coeff": 1.33,
        "matchCoef": 1.02,
        "gamesPlayed": 33,
        "rankIndex": 3,
        "det": {
          "g": 33,
          "time": 16186,
          "wr": 51.81818181818182,
          "el10": 18.12787878787879,
          "de10": 7.093333333333333,
          "dm10": 7562.727272727273,
          "he10": 0,
          "as10": 0.11272727272727272,
          "wa": 26.757575757575758,
          "ca": 10.121212121212121
        },
        "rankDelta": -1
      },
      "soldier-76": {
        "finalScore": 52.74,
        "battleScore": 41.72,
        "coeff": 1.33,
        "matchCoef": 0.95,
        "gamesPlayed": 14,
        "rankIndex": 3,
        "det": {
          "g": 14,
          "time": 7404,
          "wr": 65.64285714285714,
          "el10": 21.06,
          "de10": 7.073571428571428,
          "dm10": 9351,
          "he10": 1063.857142857143,
          "as10": 0.812857142857143,
          "wa": 32,
          "ca": 11.857142857142858
        },
        "rankDelta": 3
      },
      "tracer": {
        "finalScore": 55.47,
        "battleScore": 42.31,
        "coeff": 1.33,
        "matchCoef": 0.98,
        "gamesPlayed": 21,
        "rankIndex": 3,
        "det": {
          "g": 21,
          "time": 11172,
          "wr": 50,
          "el10": 16.475714285714286,
          "de10": 6.807142857142857,
          "dm10": 6068.428571428572,
          "he10": 59.55428571428572,
          "as10": 0,
          "wa": 31.714285714285715,
          "ca": 9.142857142857142
        },
        "rankDelta": -3
      },
      "wuyang": {
        "finalScore": 51.89,
        "battleScore": 38.99,
        "coeff": 1.33,
        "matchCoef": 1,
        "gamesPlayed": 25,
        "rankIndex": 3,
        "det": {
          "g": 25,
          "time": 13263,
          "wr": 56.48,
          "el10": 11.774000000000001,
          "de10": 6.1348,
          "dm10": 5106.04,
          "he10": 6121.88,
          "as10": 14.828,
          "wa": 29.72,
          "ca": 0
        },
        "rankDelta": -3
      },
      "zenyatta": {
        "finalScore": 44.55,
        "battleScore": 38.19,
        "coeff": 1.33,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 3,
        "det": {
          "g": 6,
          "time": 2492,
          "wr": 43.5,
          "el10": 12.603333333333332,
          "de10": 8.186666666666667,
          "dm10": 5914,
          "he10": 6419.833333333333,
          "as10": 16.16,
          "wa": 25,
          "ca": 14.5
        },
        "rankDelta": -3
      },
      "ashe": {
        "finalScore": 48.38,
        "battleScore": 40.32,
        "coeff": 1.33,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 3,
        "det": {
          "g": 8,
          "time": 3904,
          "wr": 72,
          "el10": 13.06,
          "de10": 6.3,
          "dm10": 6802,
          "he10": 0,
          "as10": 2.31,
          "wa": 36,
          "ca": 19
        },
        "rankDelta": -2
      },
      "baptiste": {
        "finalScore": 41.04,
        "battleScore": 36.27,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 3,
        "det": {
          "g": 4,
          "time": 2104,
          "wr": 40,
          "el10": 12.55,
          "de10": 7.41,
          "dm10": 4515,
          "he10": 5497,
          "as10": 6.27,
          "wa": 33,
          "ca": 14
        },
        "rankDelta": -1
      },
      "bastion": {
        "finalScore": 68.49,
        "battleScore": 46.01,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 7,
        "rankIndex": 3,
        "det": {
          "g": 7,
          "time": 3624,
          "wr": 59,
          "el10": 22.02,
          "de10": 5.96,
          "dm10": 9106,
          "he10": 186,
          "as10": 1.99,
          "wa": 25,
          "ca": 4
        },
        "rankDelta": 1
      },
      "domina": {
        "finalScore": 49.37,
        "battleScore": 48,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 2,
        "det": {
          "g": 2,
          "time": 1214,
          "wr": 62,
          "el10": 21.75,
          "de10": 4.45,
          "dm10": 10686,
          "he10": 1329,
          "as10": 2.47,
          "wa": 52,
          "ca": 9
        },
        "rankDelta": -1
      },
      "dva": {
        "finalScore": 45.66,
        "battleScore": 44.39,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 2,
        "det": {
          "g": 4,
          "time": 2259,
          "wr": 54,
          "el10": 16.74,
          "de10": 4.25,
          "dm10": 7483,
          "he10": 1552,
          "as10": 8.23,
          "wa": 24,
          "ca": 9
        },
        "rankDelta": -1
      },
      "emre": {
        "finalScore": 46.57,
        "battleScore": 39.32,
        "coeff": 1.33,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 3,
        "det": {
          "g": 7,
          "time": 3480,
          "wr": 48,
          "el10": 18.45,
          "de10": 6.72,
          "dm10": 8513,
          "he10": 684,
          "as10": 0,
          "wa": 32,
          "ca": 9
        },
        "rankDelta": -2
      },
      "hazard": {
        "finalScore": 48.69,
        "battleScore": 47.34,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 2,
        "det": {
          "g": 2,
          "time": 670,
          "wr": 68,
          "el10": 19.7,
          "de10": 5.37,
          "dm10": 9192,
          "he10": 1490,
          "as10": 6.27,
          "wa": 30,
          "ca": 11
        }
      },
      "hanzo": {
        "finalScore": 42.18,
        "battleScore": 35.61,
        "coeff": 1.33,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 3,
        "det": {
          "g": 7,
          "time": 3054,
          "wr": 49,
          "el10": 10.02,
          "de10": 6.68,
          "dm10": 6530,
          "he10": 0,
          "as10": 1.77,
          "wa": 18,
          "ca": 11
        },
        "rankDelta": -2
      },
      "junkrat": {
        "finalScore": 39.39,
        "battleScore": 34.82,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 3,
        "det": {
          "g": 4,
          "time": 1969,
          "wr": 32,
          "el10": 13.41,
          "de10": 6.1,
          "dm10": 7446,
          "he10": 0,
          "as10": 1.22,
          "wa": 18,
          "ca": 0
        },
        "rankDelta": -1
      },
      "juno": {
        "finalScore": 44.97,
        "battleScore": 39.75,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 1367,
          "wr": 61,
          "el10": 13.61,
          "de10": 6.58,
          "dm10": 3937,
          "he10": 4519,
          "as10": 12.73,
          "wa": 35,
          "ca": 8
        },
        "rankDelta": 1
      },
      "lifeweaver": {
        "finalScore": 41.11,
        "battleScore": 36.34,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 3,
        "det": {
          "g": 4,
          "time": 1902,
          "wr": 39,
          "el10": 8.52,
          "de10": 6.31,
          "dm10": 2015,
          "he10": 8004,
          "as10": 12.3,
          "wa": 26,
          "ca": 10
        },
        "rankDelta": -1
      },
      "lucio": {
        "finalScore": 46.21,
        "battleScore": 40.85,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 1009,
          "wr": 97,
          "el10": 16.05,
          "de10": 6.54,
          "dm10": 4025,
          "he10": 4627,
          "as10": 14.27,
          "wa": 25,
          "ca": 9
        },
        "rankNew": true
      },
      "mei": {
        "finalScore": 53.52,
        "battleScore": 45.19,
        "coeff": 1.33,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 3,
        "det": {
          "g": 7,
          "time": 4042,
          "wr": 65,
          "el10": 20.34,
          "de10": 6.23,
          "dm10": 6180,
          "he10": 1098,
          "as10": 8.16,
          "wa": 45,
          "ca": 0
        },
        "rankDelta": 3
      },
      "mercy": {
        "finalScore": 30.67,
        "battleScore": 27.11,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 535,
          "wr": 9,
          "el10": 0,
          "de10": 8.98,
          "dm10": 0,
          "he10": 5487,
          "as10": 7.86,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": -1
      },
      "pharah": {
        "finalScore": 50.44,
        "battleScore": 43.23,
        "coeff": 1.33,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 3,
        "det": {
          "g": 6,
          "time": 3542,
          "wr": 67,
          "el10": 20.67,
          "de10": 7.79,
          "dm10": 8424,
          "he10": 0,
          "as10": 3.56,
          "wa": 43,
          "ca": 0
        }
      },
      "ramattra": {
        "finalScore": 57.07,
        "battleScore": 48.34,
        "coeff": 1.21,
        "matchCoef": 0.92,
        "gamesPlayed": 2,
        "rankIndex": 2,
        "det": {
          "g": 2,
          "time": 1179,
          "wr": 67,
          "el10": 20.86,
          "de10": 4.58,
          "dm10": 10456,
          "he10": 482,
          "as10": 2.03,
          "wa": 24,
          "ca": 10
        },
        "rankDelta": 9
      },
      "reinhardt": {
        "finalScore": 42.7,
        "battleScore": 41.51,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 2,
        "det": {
          "g": 1,
          "time": 297,
          "wr": 44,
          "el10": 16.18,
          "de10": 4.05,
          "dm10": 6673,
          "he10": 0,
          "as10": 0,
          "wa": 0,
          "ca": 0
        }
      },
      "roadhog": {
        "finalScore": 52.61,
        "battleScore": 48.24,
        "coeff": 1.21,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 2,
        "det": {
          "g": 8,
          "time": 4096,
          "wr": 68,
          "el10": 19.19,
          "de10": 4.54,
          "dm10": 8446,
          "he10": 5754,
          "as10": 4.39,
          "wa": 25,
          "ca": 14
        },
        "rankDelta": -1
      },
      "shion": {
        "finalScore": 54.81,
        "battleScore": 42.6,
        "coeff": 1.33,
        "matchCoef": 0.97,
        "gamesPlayed": 17,
        "rankIndex": 3,
        "det": {
          "g": 17,
          "time": 8199,
          "wr": 52,
          "el10": 18.59,
          "de10": 5.93,
          "dm10": 7577,
          "he10": 118,
          "as10": 2.05,
          "wa": 31,
          "ca": 10
        },
        "rankDelta": -2
      },
      "sigma": {
        "finalScore": 55.93,
        "battleScore": 39.29,
        "coeff": 1.21,
        "matchCoef": 0.94,
        "gamesPlayed": 6,
        "rankIndex": 2,
        "det": {
          "g": 6,
          "time": 2836,
          "wr": 35,
          "el10": 16.71,
          "de10": 5.71,
          "dm10": 10034,
          "he10": 0,
          "as10": 2.12,
          "wa": 44,
          "ca": 0
        },
        "rankDelta": -2
      },
      "sombra": {
        "finalScore": 45.19,
        "battleScore": 39.94,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 3,
        "det": {
          "g": 4,
          "time": 2534,
          "wr": 27,
          "el10": 16.34,
          "de10": 8.29,
          "dm10": 5519,
          "he10": 364,
          "as10": 5.92,
          "wa": 39,
          "ca": 10
        },
        "rankDelta": -4
      },
      "symmetra": {
        "finalScore": 46.46,
        "battleScore": 40.56,
        "coeff": 1.33,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 3,
        "det": {
          "g": 5,
          "time": 2394,
          "wr": 59,
          "el10": 14.54,
          "de10": 5.51,
          "dm10": 6776,
          "he10": 166,
          "as10": 4.51,
          "wa": 33,
          "ca": 0
        },
        "rankDelta": 3
      },
      "torbjorn": {
        "finalScore": 50.54,
        "battleScore": 44.67,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 3,
        "det": {
          "g": 3,
          "time": 1303,
          "wr": 87,
          "el10": 15.19,
          "de10": 4.14,
          "dm10": 8176,
          "he10": 0,
          "as10": 0.92,
          "wa": 22,
          "ca": 9
        }
      },
      "vendetta": {
        "finalScore": 52.45,
        "battleScore": 42.08,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 3,
        "det": {
          "g": 12,
          "time": 6139,
          "wr": 44,
          "el10": 19.06,
          "de10": 7.53,
          "dm10": 6584,
          "he10": 228,
          "as10": 1.56,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": 2
      },
      "venture": {
        "finalScore": 40.94,
        "battleScore": 36.19,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 578,
          "wr": 17,
          "el10": 10.39,
          "de10": 11.43,
          "dm10": 4877,
          "he10": 27.74,
          "as10": 0,
          "wa": 46,
          "ca": 0
        },
        "rankDelta": -1
      },
      "widowmaker": {
        "finalScore": 48.15,
        "battleScore": 39.29,
        "coeff": 1.33,
        "matchCoef": 0.92,
        "gamesPlayed": 10,
        "rankIndex": 3,
        "det": {
          "g": 10,
          "time": 4703,
          "wr": 56,
          "el10": 12.12,
          "de10": 6.76,
          "dm10": 5162,
          "he10": 0,
          "as10": 2.93,
          "wa": 34,
          "ca": 12
        }
      },
      "winston": {
        "finalScore": 50.16,
        "battleScore": 48.77,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 2,
        "det": {
          "g": 2,
          "time": 1124,
          "wr": 76,
          "el10": 24.02,
          "de10": 5.34,
          "dm10": 7748,
          "he10": 1691,
          "as10": 4.8,
          "wa": 56,
          "ca": 0
        },
        "rankDelta": -1
      },
      "zarya": {
        "finalScore": 52.3,
        "battleScore": 42.18,
        "coeff": 1.21,
        "matchCoef": 0.94,
        "gamesPlayed": 6,
        "rankIndex": 2,
        "det": {
          "g": 6,
          "time": 4014,
          "wr": 45,
          "el10": 20.03,
          "de10": 5.98,
          "dm10": 9734,
          "he10": 0,
          "as10": 4.19,
          "wa": 36,
          "ca": 0
        },
        "rankDelta": -1
      }
    },
    "bscoreAll": {
      "ana": {
        "finalScore": 57.9,
        "battleScore": 37.98,
        "coeff": 1.33,
        "matchCoef": 1.15,
        "gamesPlayed": 134,
        "rankIndex": 3,
        "det": {
          "g": 134,
          "time": 71678,
          "wr": 44.80597014925373,
          "el10": 10.710895522388057,
          "de10": 5.5783582089552235,
          "dm10": 4316.432835820896,
          "he10": 5955.44776119403,
          "as10": 10.803582089552238,
          "wa": 51.208955223880594,
          "ca": 0
        },
        "rankDelta": -1
      },
      "anran": {
        "finalScore": 57.53,
        "battleScore": 37.91,
        "coeff": 1.33,
        "matchCoef": 0.98,
        "gamesPlayed": 15,
        "rankIndex": 3,
        "det": {
          "g": 15,
          "time": 7732,
          "wr": 32.8,
          "el10": 15.930666666666667,
          "de10": 8.144,
          "dm10": 6650.6,
          "he10": 630.2,
          "as10": 0.3086666666666667,
          "wa": 29.666666666666668,
          "ca": 10.533333333333333
        },
        "rankDelta": 2
      },
      "brigitte": {
        "finalScore": 45.36,
        "battleScore": 39.6,
        "coeff": 1.33,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 3,
        "det": {
          "g": 5,
          "time": 2501,
          "wr": 63.6,
          "el10": 15.223999999999998,
          "de10": 7.2379999999999995,
          "dm10": 4962.6,
          "he10": 6557,
          "as10": 15.945999999999998,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": -1
      },
      "cassidy": {
        "finalScore": 63.48,
        "battleScore": 44.58,
        "coeff": 1.33,
        "matchCoef": 1.07,
        "gamesPlayed": 56,
        "rankIndex": 3,
        "det": {
          "g": 56,
          "time": 28781,
          "wr": 60.964285714285715,
          "el10": 17.499642857142856,
          "de10": 7.126071428571428,
          "dm10": 8432.714285714286,
          "he10": 52.09499999999999,
          "as10": 1.843214285714286,
          "wa": 41.464285714285715,
          "ca": 12
        }
      },
      "dmon": {
        "finalScore": 55.71,
        "battleScore": 51.75,
        "coeff": 1.21,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 2,
        "det": {
          "g": 7,
          "time": 4348,
          "wr": 84.57142857142857,
          "el10": 22.427142857142858,
          "de10": 3.6700000000000004,
          "dm10": 9789.42857142857,
          "he10": 240,
          "as10": 3.391428571428572,
          "wa": 33.142857142857146,
          "ca": 0
        },
        "rankDelta": 3
      },
      "doomfist": {
        "finalScore": 57.36,
        "battleScore": 45.96,
        "coeff": 1.21,
        "matchCoef": 1.03,
        "gamesPlayed": 36,
        "rankIndex": 2,
        "det": {
          "g": 36,
          "time": 19547,
          "wr": 50.083333333333336,
          "el10": 20.77388888888889,
          "de10": 6.1033333333333335,
          "dm10": 8208.861111111111,
          "he10": 1753.5833333333333,
          "as10": 5.252222222222222,
          "wa": 27.805555555555557,
          "ca": 11.61111111111111
        },
        "rankDelta": -2
      },
      "echo": {
        "finalScore": 53.51,
        "battleScore": 44.1,
        "coeff": 1.33,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 3,
        "det": {
          "g": 9,
          "time": 4468,
          "wr": 69.22222222222223,
          "el10": 20.523333333333333,
          "de10": 5.917777777777777,
          "dm10": 7295.222222222223,
          "he10": 272.61777777777775,
          "as10": 0.13333333333333333,
          "wa": 21.22222222222222,
          "ca": 8.444444444444445
        },
        "rankDelta": -1
      },
      "freja": {
        "finalScore": 56.09,
        "battleScore": 43.6,
        "coeff": 1.33,
        "matchCoef": 0.97,
        "gamesPlayed": 17,
        "rankIndex": 3,
        "det": {
          "g": 17,
          "time": 8793,
          "wr": 54,
          "el10": 18.400588235294116,
          "de10": 6.128823529411765,
          "dm10": 9510.70588235294,
          "he10": 144.1764705882353,
          "as10": 0.5488235294117646,
          "wa": 25.058823529411764,
          "ca": 15.176470588235293
        },
        "rankDelta": -3
      },
      "genji": {
        "finalScore": 55.37,
        "battleScore": 39.81,
        "coeff": 1.33,
        "matchCoef": 1.04,
        "gamesPlayed": 42,
        "rankIndex": 3,
        "det": {
          "g": 42,
          "time": 21501,
          "wr": 53,
          "el10": 15.402142857142858,
          "de10": 6.934285714285714,
          "dm10": 5717.785714285715,
          "he10": 174.14285714285714,
          "as10": 0,
          "wa": 24.071428571428573,
          "ca": 12.142857142857142
        },
        "rankDelta": -3
      },
      "illari": {
        "finalScore": 53.46,
        "battleScore": 44.56,
        "coeff": 1.33,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 3,
        "det": {
          "g": 8,
          "time": 3570,
          "wr": 64.25,
          "el10": 14.4925,
          "de10": 5.68125,
          "dm10": 5497.875,
          "he10": 7742.25,
          "as10": 9.45625,
          "wa": 39,
          "ca": 15.125
        },
        "rankDelta": -4
      },
      "jetpack-cat": {
        "finalScore": 56.88,
        "battleScore": 44.71,
        "coeff": 1.33,
        "matchCoef": 0.96,
        "gamesPlayed": 15,
        "rankIndex": 3,
        "det": {
          "g": 15,
          "time": 7505,
          "wr": 60.666666666666664,
          "el10": 18.705333333333332,
          "de10": 4.932666666666667,
          "dm10": 4789.666666666667,
          "he10": 5661.866666666667,
          "as10": 9.818666666666667,
          "wa": 26.4,
          "ca": 7.933333333333334
        },
        "rankDelta": 3
      },
      "kiriko": {
        "finalScore": 58.88,
        "battleScore": 41.12,
        "coeff": 1.33,
        "matchCoef": 1.08,
        "gamesPlayed": 60,
        "rankIndex": 3,
        "det": {
          "g": 60,
          "time": 33473,
          "wr": 51.68333333333333,
          "el10": 8.866833333333334,
          "de10": 5.822666666666667,
          "dm10": 3040.0833333333335,
          "he10": 9246.083333333334,
          "as10": 15.732666666666665,
          "wa": 28,
          "ca": 12
        },
        "rankDelta": 2
      },
      "mauga": {
        "finalScore": 60.46,
        "battleScore": 45.54,
        "coeff": 1.21,
        "matchCoef": 0.96,
        "gamesPlayed": 9,
        "rankIndex": 2,
        "det": {
          "g": 9,
          "time": 5088,
          "wr": 59.333333333333336,
          "el10": 23.486666666666665,
          "de10": 5.213333333333334,
          "dm10": 10912.333333333334,
          "he10": 1317.6666666666667,
          "as10": 9.176666666666668,
          "wa": 32,
          "ca": 10.666666666666666
        }
      },
      "mizuki": {
        "finalScore": 50.34,
        "battleScore": 40.09,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 3,
        "det": {
          "g": 13,
          "time": 6980,
          "wr": 62.69230769230769,
          "el10": 12.404615384615385,
          "de10": 5.825384615384615,
          "dm10": 4663.615384615385,
          "he10": 7716,
          "as10": 10.11076923076923,
          "wa": 32,
          "ca": 12.307692307692308
        },
        "rankDelta": 6
      },
      "moira": {
        "finalScore": 66.78,
        "battleScore": 43.95,
        "coeff": 1.33,
        "matchCoef": 1,
        "gamesPlayed": 27,
        "rankIndex": 3,
        "det": {
          "g": 27,
          "time": 16143,
          "wr": 49.111111111111114,
          "el10": 20.79222222222222,
          "de10": 5.812222222222221,
          "dm10": 6826.555555555556,
          "he10": 7812.222222222223,
          "as10": 14.525555555555556,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": -1
      },
      "orisa": {
        "finalScore": 44.58,
        "battleScore": 40.87,
        "coeff": 1.21,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 2,
        "det": {
          "g": 8,
          "time": 4700,
          "wr": 25,
          "el10": 18.27,
          "de10": 5.40875,
          "dm10": 10960.375,
          "he10": 162.375,
          "as10": 3.1325,
          "wa": 33.75,
          "ca": 11.5
        },
        "rankDelta": -1
      },
      "reaper": {
        "finalScore": 63.39,
        "battleScore": 46.32,
        "coeff": 1.33,
        "matchCoef": 0.97,
        "gamesPlayed": 13,
        "rankIndex": 3,
        "det": {
          "g": 13,
          "time": 6889,
          "wr": 71.07692307692308,
          "el10": 20.763846153846153,
          "de10": 6.088461538461538,
          "dm10": 6961.846153846154,
          "he10": 1314.7692307692307,
          "as10": 0,
          "wa": 27.615384615384617,
          "ca": 13
        }
      },
      "sierra": {
        "finalScore": 44.99,
        "battleScore": 34.46,
        "coeff": 1.33,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 3,
        "det": {
          "g": 20,
          "time": 9276,
          "wr": 37.05,
          "el10": 16.723999999999997,
          "de10": 7.881,
          "dm10": 8037.4,
          "he10": 40.85,
          "as10": 0.2505,
          "wa": 24.75,
          "ca": 7.1
        },
        "rankDelta": -1
      },
      "sojourn": {
        "finalScore": 53.27,
        "battleScore": 39.09,
        "coeff": 1.33,
        "matchCoef": 1.02,
        "gamesPlayed": 33,
        "rankIndex": 3,
        "det": {
          "g": 33,
          "time": 16186,
          "wr": 51.81818181818182,
          "el10": 18.12787878787879,
          "de10": 7.093333333333333,
          "dm10": 7562.727272727273,
          "he10": 0,
          "as10": 0.11272727272727272,
          "wa": 26.757575757575758,
          "ca": 10.121212121212121
        },
        "rankDelta": -1
      },
      "soldier-76": {
        "finalScore": 52.74,
        "battleScore": 41.72,
        "coeff": 1.33,
        "matchCoef": 0.95,
        "gamesPlayed": 14,
        "rankIndex": 3,
        "det": {
          "g": 14,
          "time": 7404,
          "wr": 65.64285714285714,
          "el10": 21.06,
          "de10": 7.073571428571428,
          "dm10": 9351,
          "he10": 1063.857142857143,
          "as10": 0.812857142857143,
          "wa": 32,
          "ca": 11.857142857142858
        },
        "rankDelta": 3
      },
      "tracer": {
        "finalScore": 55.47,
        "battleScore": 42.31,
        "coeff": 1.33,
        "matchCoef": 0.98,
        "gamesPlayed": 21,
        "rankIndex": 3,
        "det": {
          "g": 21,
          "time": 11172,
          "wr": 50,
          "el10": 16.475714285714286,
          "de10": 6.807142857142857,
          "dm10": 6068.428571428572,
          "he10": 59.55428571428572,
          "as10": 0,
          "wa": 31.714285714285715,
          "ca": 9.142857142857142
        },
        "rankDelta": -3
      },
      "wuyang": {
        "finalScore": 51.89,
        "battleScore": 38.99,
        "coeff": 1.33,
        "matchCoef": 1,
        "gamesPlayed": 25,
        "rankIndex": 3,
        "det": {
          "g": 25,
          "time": 13263,
          "wr": 56.48,
          "el10": 11.774000000000001,
          "de10": 6.1348,
          "dm10": 5106.04,
          "he10": 6121.88,
          "as10": 14.828,
          "wa": 29.72,
          "ca": 0
        },
        "rankDelta": -3
      },
      "zenyatta": {
        "finalScore": 44.55,
        "battleScore": 38.19,
        "coeff": 1.33,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 3,
        "det": {
          "g": 6,
          "time": 2492,
          "wr": 43.5,
          "el10": 12.603333333333332,
          "de10": 8.186666666666667,
          "dm10": 5914,
          "he10": 6419.833333333333,
          "as10": 16.16,
          "wa": 25,
          "ca": 14.5
        },
        "rankDelta": -3
      },
      "ashe": {
        "finalScore": 48.38,
        "battleScore": 40.32,
        "coeff": 1.33,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 3,
        "det": {
          "g": 8,
          "time": 3904,
          "wr": 72,
          "el10": 13.06,
          "de10": 6.3,
          "dm10": 6802,
          "he10": 0,
          "as10": 2.31,
          "wa": 36,
          "ca": 19
        },
        "rankDelta": -2
      },
      "baptiste": {
        "finalScore": 41.04,
        "battleScore": 36.27,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 3,
        "det": {
          "g": 4,
          "time": 2104,
          "wr": 40,
          "el10": 12.55,
          "de10": 7.41,
          "dm10": 4515,
          "he10": 5497,
          "as10": 6.27,
          "wa": 33,
          "ca": 14
        },
        "rankDelta": -1
      },
      "bastion": {
        "finalScore": 68.49,
        "battleScore": 46.01,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 7,
        "rankIndex": 3,
        "det": {
          "g": 7,
          "time": 3624,
          "wr": 59,
          "el10": 22.02,
          "de10": 5.96,
          "dm10": 9106,
          "he10": 186,
          "as10": 1.99,
          "wa": 25,
          "ca": 4
        },
        "rankDelta": 1
      },
      "domina": {
        "finalScore": 49.37,
        "battleScore": 48,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 2,
        "det": {
          "g": 2,
          "time": 1214,
          "wr": 62,
          "el10": 21.75,
          "de10": 4.45,
          "dm10": 10686,
          "he10": 1329,
          "as10": 2.47,
          "wa": 52,
          "ca": 9
        },
        "rankDelta": -1
      },
      "dva": {
        "finalScore": 45.66,
        "battleScore": 44.39,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 2,
        "det": {
          "g": 4,
          "time": 2259,
          "wr": 54,
          "el10": 16.74,
          "de10": 4.25,
          "dm10": 7483,
          "he10": 1552,
          "as10": 8.23,
          "wa": 24,
          "ca": 9
        },
        "rankDelta": -1
      },
      "emre": {
        "finalScore": 46.57,
        "battleScore": 39.32,
        "coeff": 1.33,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 3,
        "det": {
          "g": 7,
          "time": 3480,
          "wr": 48,
          "el10": 18.45,
          "de10": 6.72,
          "dm10": 8513,
          "he10": 684,
          "as10": 0,
          "wa": 32,
          "ca": 9
        },
        "rankDelta": -2
      },
      "hazard": {
        "finalScore": 48.69,
        "battleScore": 47.34,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 2,
        "det": {
          "g": 2,
          "time": 670,
          "wr": 68,
          "el10": 19.7,
          "de10": 5.37,
          "dm10": 9192,
          "he10": 1490,
          "as10": 6.27,
          "wa": 30,
          "ca": 11
        }
      },
      "hanzo": {
        "finalScore": 42.18,
        "battleScore": 35.61,
        "coeff": 1.33,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 3,
        "det": {
          "g": 7,
          "time": 3054,
          "wr": 49,
          "el10": 10.02,
          "de10": 6.68,
          "dm10": 6530,
          "he10": 0,
          "as10": 1.77,
          "wa": 18,
          "ca": 11
        },
        "rankDelta": -2
      },
      "junkrat": {
        "finalScore": 39.39,
        "battleScore": 34.82,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 3,
        "det": {
          "g": 4,
          "time": 1969,
          "wr": 32,
          "el10": 13.41,
          "de10": 6.1,
          "dm10": 7446,
          "he10": 0,
          "as10": 1.22,
          "wa": 18,
          "ca": 0
        },
        "rankDelta": -1
      },
      "juno": {
        "finalScore": 44.97,
        "battleScore": 39.75,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 1367,
          "wr": 61,
          "el10": 13.61,
          "de10": 6.58,
          "dm10": 3937,
          "he10": 4519,
          "as10": 12.73,
          "wa": 35,
          "ca": 8
        },
        "rankDelta": 1
      },
      "lifeweaver": {
        "finalScore": 41.11,
        "battleScore": 36.34,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 3,
        "det": {
          "g": 4,
          "time": 1902,
          "wr": 39,
          "el10": 8.52,
          "de10": 6.31,
          "dm10": 2015,
          "he10": 8004,
          "as10": 12.3,
          "wa": 26,
          "ca": 10
        },
        "rankDelta": -1
      },
      "lucio": {
        "finalScore": 46.21,
        "battleScore": 40.85,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 1009,
          "wr": 97,
          "el10": 16.05,
          "de10": 6.54,
          "dm10": 4025,
          "he10": 4627,
          "as10": 14.27,
          "wa": 25,
          "ca": 9
        },
        "rankNew": true
      },
      "mei": {
        "finalScore": 53.52,
        "battleScore": 45.19,
        "coeff": 1.33,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 3,
        "det": {
          "g": 7,
          "time": 4042,
          "wr": 65,
          "el10": 20.34,
          "de10": 6.23,
          "dm10": 6180,
          "he10": 1098,
          "as10": 8.16,
          "wa": 45,
          "ca": 0
        },
        "rankDelta": 3
      },
      "mercy": {
        "finalScore": 30.67,
        "battleScore": 27.11,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 535,
          "wr": 9,
          "el10": 0,
          "de10": 8.98,
          "dm10": 0,
          "he10": 5487,
          "as10": 7.86,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": -1
      },
      "pharah": {
        "finalScore": 50.44,
        "battleScore": 43.23,
        "coeff": 1.33,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 3,
        "det": {
          "g": 6,
          "time": 3542,
          "wr": 67,
          "el10": 20.67,
          "de10": 7.79,
          "dm10": 8424,
          "he10": 0,
          "as10": 3.56,
          "wa": 43,
          "ca": 0
        }
      },
      "ramattra": {
        "finalScore": 57.07,
        "battleScore": 48.34,
        "coeff": 1.21,
        "matchCoef": 0.92,
        "gamesPlayed": 2,
        "rankIndex": 2,
        "det": {
          "g": 2,
          "time": 1179,
          "wr": 67,
          "el10": 20.86,
          "de10": 4.58,
          "dm10": 10456,
          "he10": 482,
          "as10": 2.03,
          "wa": 24,
          "ca": 10
        },
        "rankDelta": 9
      },
      "reinhardt": {
        "finalScore": 42.7,
        "battleScore": 41.51,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 2,
        "det": {
          "g": 1,
          "time": 297,
          "wr": 44,
          "el10": 16.18,
          "de10": 4.05,
          "dm10": 6673,
          "he10": 0,
          "as10": 0,
          "wa": 0,
          "ca": 0
        }
      },
      "roadhog": {
        "finalScore": 52.61,
        "battleScore": 48.24,
        "coeff": 1.21,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 2,
        "det": {
          "g": 8,
          "time": 4096,
          "wr": 68,
          "el10": 19.19,
          "de10": 4.54,
          "dm10": 8446,
          "he10": 5754,
          "as10": 4.39,
          "wa": 25,
          "ca": 14
        },
        "rankDelta": -1
      },
      "shion": {
        "finalScore": 54.81,
        "battleScore": 42.6,
        "coeff": 1.33,
        "matchCoef": 0.97,
        "gamesPlayed": 17,
        "rankIndex": 3,
        "det": {
          "g": 17,
          "time": 8199,
          "wr": 52,
          "el10": 18.59,
          "de10": 5.93,
          "dm10": 7577,
          "he10": 118,
          "as10": 2.05,
          "wa": 31,
          "ca": 10
        },
        "rankDelta": -2
      },
      "sigma": {
        "finalScore": 55.93,
        "battleScore": 39.29,
        "coeff": 1.21,
        "matchCoef": 0.94,
        "gamesPlayed": 6,
        "rankIndex": 2,
        "det": {
          "g": 6,
          "time": 2836,
          "wr": 35,
          "el10": 16.71,
          "de10": 5.71,
          "dm10": 10034,
          "he10": 0,
          "as10": 2.12,
          "wa": 44,
          "ca": 0
        },
        "rankDelta": -2
      },
      "sombra": {
        "finalScore": 45.19,
        "battleScore": 39.94,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 3,
        "det": {
          "g": 4,
          "time": 2534,
          "wr": 27,
          "el10": 16.34,
          "de10": 8.29,
          "dm10": 5519,
          "he10": 364,
          "as10": 5.92,
          "wa": 39,
          "ca": 10
        },
        "rankDelta": -4
      },
      "symmetra": {
        "finalScore": 46.46,
        "battleScore": 40.56,
        "coeff": 1.33,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 3,
        "det": {
          "g": 5,
          "time": 2394,
          "wr": 59,
          "el10": 14.54,
          "de10": 5.51,
          "dm10": 6776,
          "he10": 166,
          "as10": 4.51,
          "wa": 33,
          "ca": 0
        },
        "rankDelta": 3
      },
      "torbjorn": {
        "finalScore": 50.54,
        "battleScore": 44.67,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 3,
        "det": {
          "g": 3,
          "time": 1303,
          "wr": 87,
          "el10": 15.19,
          "de10": 4.14,
          "dm10": 8176,
          "he10": 0,
          "as10": 0.92,
          "wa": 22,
          "ca": 9
        }
      },
      "vendetta": {
        "finalScore": 52.45,
        "battleScore": 42.08,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 3,
        "det": {
          "g": 12,
          "time": 6139,
          "wr": 44,
          "el10": 19.06,
          "de10": 7.53,
          "dm10": 6584,
          "he10": 228,
          "as10": 1.56,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": 2
      },
      "venture": {
        "finalScore": 40.94,
        "battleScore": 36.19,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 578,
          "wr": 17,
          "el10": 10.39,
          "de10": 11.43,
          "dm10": 4877,
          "he10": 27.74,
          "as10": 0,
          "wa": 46,
          "ca": 0
        },
        "rankDelta": -1
      },
      "widowmaker": {
        "finalScore": 48.15,
        "battleScore": 39.29,
        "coeff": 1.33,
        "matchCoef": 0.92,
        "gamesPlayed": 10,
        "rankIndex": 3,
        "det": {
          "g": 10,
          "time": 4703,
          "wr": 56,
          "el10": 12.12,
          "de10": 6.76,
          "dm10": 5162,
          "he10": 0,
          "as10": 2.93,
          "wa": 34,
          "ca": 12
        }
      },
      "winston": {
        "finalScore": 50.16,
        "battleScore": 48.77,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 2,
        "det": {
          "g": 2,
          "time": 1124,
          "wr": 76,
          "el10": 24.02,
          "de10": 5.34,
          "dm10": 7748,
          "he10": 1691,
          "as10": 4.8,
          "wa": 56,
          "ca": 0
        },
        "rankDelta": -1
      },
      "zarya": {
        "finalScore": 52.3,
        "battleScore": 42.18,
        "coeff": 1.21,
        "matchCoef": 0.94,
        "gamesPlayed": 6,
        "rankIndex": 2,
        "det": {
          "g": 6,
          "time": 4014,
          "wr": 45,
          "el10": 20.03,
          "de10": 5.98,
          "dm10": 9734,
          "he10": 0,
          "as10": 4.19,
          "wa": 36,
          "ca": 0
        },
        "rankDelta": -1
      }
    }
  },
  {
    "id": "maru",
    "name": "まる熊",
    "tag": "",
    "endorse": 3,
    "title": null,
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1cd47ddb9fdb23e20c3d869454d08db86a2e814e002cb19e80177d60923fbfaa.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5ed13bc3671c304b8d1e2de8fd882cb246f529c4f3aac0825a829e1b3256ae14.png",
    "role": "Damage",
    "ranks": {
      "Tank": null,
      "Damage": {
        "division": "diamond",
        "tier": 5,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_DiamondTier.bc8c5d6005f916c62c51728087aeb26f4facaa9b.png"
      },
      "Support": {
        "division": "emerald",
        "tier": 3,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_EmeraldTier.d82e76cb2deeac6d1f4d4cf4d8914517d903eeeb.png"
      }
    },
    "rankTier": "Diamond 5",
    "overall": {
      "matches": 207,
      "wins": 122,
      "losses": 85,
      "wr": 58.94,
      "kda": 3.68,
      "elim": 19.54,
      "deaths": 5.83,
      "dmg": 10678.54,
      "heal": 2867.63,
      "time": 107128
    },
    "roles": {
      "Tank": {
        "g": 37,
        "w": 25,
        "l": 12,
        "time": 18420,
        "wr": 67.57,
        "kda": 5.17,
        "elim": 24.4,
        "deaths": 5.24,
        "dmg": 14004.95,
        "heal": 1378.57
      },
      "Damage": {
        "g": 109,
        "w": 65,
        "l": 44,
        "time": 58205,
        "wr": 59.63,
        "kda": 3.26,
        "elim": 20.73,
        "deaths": 6.43,
        "dmg": 12448.65,
        "heal": 241.52
      },
      "Support": {
        "g": 61,
        "w": 32,
        "l": 29,
        "time": 30503,
        "wr": 52.46,
        "kda": 3.77,
        "elim": 14.32,
        "deaths": 5.04,
        "dmg": 5292.13,
        "heal": 8777.9
      }
    },
    "heroes": [
      {
        "slug": "genji",
        "n": "Genji",
        "role": "Damage",
        "g": 22,
        "wr": 68.18,
        "kda": 3.25
      },
      {
        "slug": "ana",
        "n": "Ana",
        "role": "Support",
        "g": 14,
        "wr": 35.71,
        "kda": 3.19
      },
      {
        "slug": "soldier-76",
        "n": "Soldier: 76",
        "role": "Damage",
        "g": 13,
        "wr": 76.92,
        "kda": 4.88
      },
      {
        "slug": "mercy",
        "n": "Mercy",
        "role": "Support",
        "g": 10,
        "wr": 50,
        "kda": 2.95
      },
      {
        "slug": "sojourn",
        "n": "Sojourn",
        "role": "Damage",
        "g": 10,
        "wr": 50,
        "kda": 3.75
      },
      {
        "slug": "cassidy",
        "n": "Cassidy",
        "role": "Damage",
        "g": 9,
        "wr": 33.33,
        "kda": 2.27
      },
      {
        "slug": "hanzo",
        "n": "Hanzo",
        "role": "Damage",
        "g": 8,
        "wr": 50,
        "kda": 4.86
      },
      {
        "slug": "echo",
        "n": "Echo",
        "role": "Damage",
        "g": 6,
        "wr": 50,
        "kda": 2.9
      },
      {
        "slug": "lucio",
        "n": "Lúcio",
        "role": "Support",
        "g": 6,
        "wr": 66.67,
        "kda": 10.91
      },
      {
        "slug": "torbjorn",
        "n": "Torbjörn",
        "role": "Damage",
        "g": 6,
        "wr": 83.33,
        "kda": 3.36
      },
      {
        "slug": "zarya",
        "n": "Zarya",
        "role": "Tank",
        "g": 6,
        "wr": 66.67,
        "kda": 5.4
      },
      {
        "slug": "doomfist",
        "n": "Doomfist",
        "role": "Tank",
        "g": 5,
        "wr": 80,
        "kda": 3.64
      },
      {
        "slug": "junkrat",
        "n": "Junkrat",
        "role": "Damage",
        "g": 5,
        "wr": 80,
        "kda": 5.19
      },
      {
        "slug": "kiriko",
        "n": "Kiriko",
        "role": "Support",
        "g": 5,
        "wr": 40,
        "kda": 2
      },
      {
        "slug": "moira",
        "n": "Moira",
        "role": "Support",
        "g": 5,
        "wr": 80,
        "kda": 5.22
      },
      {
        "slug": "roadhog",
        "n": "Roadhog",
        "role": "Tank",
        "g": 5,
        "wr": 40,
        "kda": 4.83
      },
      {
        "slug": "sigma",
        "n": "Sigma",
        "role": "Tank",
        "g": 5,
        "wr": 60,
        "kda": 6.53
      },
      {
        "slug": "baptiste",
        "n": "Baptiste",
        "role": "Support",
        "g": 4,
        "wr": 75,
        "kda": 4.67
      },
      {
        "slug": "lifeweaver",
        "n": "Lifeweaver",
        "role": "Support",
        "g": 4,
        "wr": 50,
        "kda": 2.08
      },
      {
        "slug": "mauga",
        "n": "Mauga",
        "role": "Tank",
        "g": 4,
        "wr": 75,
        "kda": 4.8
      },
      {
        "slug": "pharah",
        "n": "Pharah",
        "role": "Damage",
        "g": 4,
        "wr": 50,
        "kda": 3.16
      },
      {
        "slug": "reinhardt",
        "n": "Reinhardt",
        "role": "Tank",
        "g": 4,
        "wr": 75,
        "kda": 4.87
      },
      {
        "slug": "zenyatta",
        "n": "Zenyatta",
        "role": "Support",
        "g": 4,
        "wr": 50,
        "kda": 3.7
      },
      {
        "slug": "ashe",
        "n": "Ashe",
        "role": "Damage",
        "g": 3,
        "wr": 100,
        "kda": 5.38
      },
      {
        "slug": "bastion",
        "n": "Bastion",
        "role": "Damage",
        "g": 3,
        "wr": 66.67,
        "kda": 5.64
      },
      {
        "slug": "juno",
        "n": "Juno",
        "role": "Support",
        "g": 3,
        "wr": 66.67,
        "kda": 4.8
      },
      {
        "slug": "mizuki",
        "n": "Mizuki",
        "role": "Support",
        "g": 3,
        "wr": 33.33,
        "kda": 2.11
      },
      {
        "slug": "sierra",
        "n": "Sierra",
        "role": "Damage",
        "g": 3,
        "wr": 33.33,
        "kda": 3.28
      },
      {
        "slug": "brigitte",
        "n": "Brigitte",
        "role": "Support",
        "g": 2,
        "wr": 100,
        "kda": 5.14
      },
      {
        "slug": "freja",
        "n": "Freja",
        "role": "Damage",
        "g": 2,
        "wr": 0,
        "kda": 2
      },
      {
        "slug": "junker-queen",
        "n": "Junker Queen",
        "role": "Tank",
        "g": 2,
        "wr": 50,
        "kda": 5.64
      },
      {
        "slug": "orisa",
        "n": "Orisa",
        "role": "Tank",
        "g": 2,
        "wr": 100,
        "kda": 8
      },
      {
        "slug": "reaper",
        "n": "Reaper",
        "role": "Damage",
        "g": 2,
        "wr": 50,
        "kda": 3.56
      },
      {
        "slug": "sombra",
        "n": "Sombra",
        "role": "Damage",
        "g": 2,
        "wr": 50,
        "kda": 3.2
      },
      {
        "slug": "symmetra",
        "n": "Symmetra",
        "role": "Damage",
        "g": 2,
        "wr": 100,
        "kda": 2.75
      },
      {
        "slug": "vendetta",
        "n": "Vendetta",
        "role": "Damage",
        "g": 2,
        "wr": 50,
        "kda": 0.68
      },
      {
        "slug": "venture",
        "n": "Venture",
        "role": "Damage",
        "g": 2,
        "wr": 50,
        "kda": 2.05
      },
      {
        "slug": "dva",
        "n": "D.Va",
        "role": "Tank",
        "g": 1,
        "wr": 100,
        "kda": 24
      },
      {
        "slug": "illari",
        "n": "Illari",
        "role": "Support",
        "g": 1,
        "wr": 0,
        "kda": 3.29
      },
      {
        "slug": "mei",
        "n": "Mei",
        "role": "Damage",
        "g": 1,
        "wr": 100,
        "kda": 2.43
      },
      {
        "slug": "ramattra",
        "n": "Ramattra",
        "role": "Tank",
        "g": 1,
        "wr": 0,
        "kda": 1.6
      },
      {
        "slug": "tracer",
        "n": "Tracer",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 1.67
      },
      {
        "slug": "widowmaker",
        "n": "Widowmaker",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 0.38
      },
      {
        "slug": "winston",
        "n": "Winston",
        "role": "Tank",
        "g": 1,
        "wr": 100,
        "kda": 3
      },
      {
        "slug": "wrecking-ball",
        "n": "Wrecking Ball",
        "role": "Tank",
        "g": 1,
        "wr": 100,
        "kda": 18
      },
      {
        "slug": "emre",
        "n": "Emre",
        "role": "Damage",
        "g": 1,
        "wr": 100,
        "kda": 3.19
      },
      {
        "slug": "shion",
        "n": "Shion",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 1.56
      }
    ],
    "bscore": {
      "ana": {
        "finalScore": 50.54,
        "battleScore": 36.34,
        "coeff": 1.46,
        "matchCoef": 0.95,
        "gamesPlayed": 14,
        "rankIndex": 4,
        "det": {
          "g": 14,
          "time": 8028,
          "wr": 38.857142857142854,
          "el10": 10.813571428571427,
          "de10": 5.464999999999999,
          "dm10": 3254.285714285714,
          "he10": 9177,
          "as10": 11.18857142857143,
          "wa": 19.642857142857142,
          "ca": 0
        },
        "rankDelta": -11
      },
      "brigitte": {
        "finalScore": 60.03,
        "battleScore": 48.23,
        "coeff": 1.46,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 4,
        "det": {
          "g": 2,
          "time": 856,
          "wr": 100,
          "el10": 19.875,
          "de10": 5.045,
          "dm10": 5602,
          "he10": 9435,
          "as10": 16.244999999999997,
          "wa": 0,
          "ca": 0
        },
        "rankNew": true
      },
      "cassidy": {
        "finalScore": 51.49,
        "battleScore": 35.07,
        "coeff": 1.61,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 5,
        "det": {
          "g": 9,
          "time": 4779,
          "wr": 30,
          "el10": 17.406666666666666,
          "de10": 7.316666666666666,
          "dm10": 9532.666666666666,
          "he10": 0,
          "as10": 0.6266666666666667,
          "wa": 42,
          "ca": 7.666666666666667
        },
        "rankDelta": -4
      },
      "emre": {
        "finalScore": 62.6,
        "battleScore": 45.73,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 1614,
          "wr": 99,
          "el10": 18.96,
          "de10": 5.95,
          "dm10": 11886,
          "he10": 1034,
          "as10": 0,
          "wa": 33,
          "ca": 9
        },
        "rankDelta": 22
      },
      "genji": {
        "finalScore": 74.96,
        "battleScore": 47.07,
        "coeff": 1.61,
        "matchCoef": 0.99,
        "gamesPlayed": 22,
        "rankIndex": 5,
        "det": {
          "g": 22,
          "time": 13420,
          "wr": 67.9090909090909,
          "el10": 23.005454545454544,
          "de10": 7.037272727272727,
          "dm10": 9571.727272727272,
          "he10": 86.10272727272728,
          "as10": 0.13818181818181818,
          "wa": 26.636363636363637,
          "ca": 11.636363636363637
        },
        "rankNew": true
      },
      "hanzo": {
        "finalScore": 73.9,
        "battleScore": 50.91,
        "coeff": 1.61,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 5,
        "det": {
          "g": 8,
          "time": 3377,
          "wr": 55.375,
          "el10": 18.54875,
          "de10": 3.6662500000000002,
          "dm10": 10704.125,
          "he10": 3.05625,
          "as10": 6.186249999999999,
          "wa": 30.375,
          "ca": 13.875
        },
        "rankNew": true
      },
      "kiriko": {
        "finalScore": 46.97,
        "battleScore": 37.28,
        "coeff": 1.46,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 4,
        "det": {
          "g": 5,
          "time": 2388,
          "wr": 39.8,
          "el10": 7.242,
          "de10": 5.272,
          "dm10": 3515.6,
          "he10": 8996.8,
          "as10": 10.35,
          "wa": 31.6,
          "ca": 18.6
        },
        "rankDelta": -29
      },
      "mizuki": {
        "finalScore": 46.95,
        "battleScore": 37.73,
        "coeff": 1.46,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 4,
        "det": {
          "g": 3,
          "time": 870,
          "wr": 35,
          "el10": 13.11,
          "de10": 6.21,
          "dm10": 5061,
          "he10": 8571,
          "as10": 9.66,
          "wa": 37,
          "ca": 6
        },
        "rankDelta": -34
      },
      "moira": {
        "finalScore": 69.22,
        "battleScore": 47.17,
        "coeff": 1.46,
        "matchCoef": 0.93,
        "gamesPlayed": 5,
        "rankIndex": 4,
        "det": {
          "g": 5,
          "time": 3193,
          "wr": 80.8,
          "el10": 26.984,
          "de10": 4.970000000000001,
          "dm10": 8806,
          "he10": 8439,
          "as10": 8.608,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": -6
      },
      "shion": {
        "finalScore": 51.91,
        "battleScore": 37.92,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 628,
          "wr": 0,
          "el10": 13.37,
          "de10": 8.6,
          "dm10": 8599,
          "he10": 0,
          "as10": 2.87,
          "wa": 38,
          "ca": 9
        },
        "rankDelta": -8
      },
      "sierra": {
        "finalScore": 57.34,
        "battleScore": 41.89,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 5,
        "det": {
          "g": 3,
          "time": 1970,
          "wr": 29,
          "el10": 24.97,
          "de10": 7.61,
          "dm10": 8622,
          "he10": 0,
          "as10": 1.83,
          "wa": 25,
          "ca": 9
        },
        "rankDelta": -4
      },
      "sojourn": {
        "finalScore": 64.87,
        "battleScore": 43.75,
        "coeff": 1.61,
        "matchCoef": 0.92,
        "gamesPlayed": 10,
        "rankIndex": 5,
        "det": {
          "g": 10,
          "time": 5517,
          "wr": 49.7,
          "el10": 22.073,
          "de10": 5.684,
          "dm10": 10432.1,
          "he10": 0,
          "as10": 1.05,
          "wa": 28.7,
          "ca": 11.4
        },
        "rankDelta": 22
      },
      "soldier-76": {
        "finalScore": 80.97,
        "battleScore": 53.29,
        "coeff": 1.61,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 5,
        "det": {
          "g": 13,
          "time": 5496,
          "wr": 72.23076923076923,
          "el10": 23.29692307692308,
          "de10": 4.425384615384615,
          "dm10": 11598.384615384615,
          "he10": 1385.6153846153845,
          "as10": 2.1507692307692308,
          "wa": 37.15384615384615,
          "ca": 6.076923076923077
        },
        "rankDelta": 18
      },
      "torbjorn": {
        "finalScore": 66.85,
        "battleScore": 47.36,
        "coeff": 1.61,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 5,
        "det": {
          "g": 6,
          "time": 3417,
          "wr": 76.66666666666667,
          "el10": 20.276666666666667,
          "de10": 6.026666666666666,
          "dm10": 12580.333333333334,
          "he10": 0,
          "as10": 0.4666666666666666,
          "wa": 33.333333333333336,
          "ca": 11.666666666666666
        },
        "rankDelta": 29
      },
      "zenyatta": {
        "finalScore": 52.04,
        "battleScore": 41.82,
        "coeff": 1.46,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 4,
        "det": {
          "g": 4,
          "time": 2577,
          "wr": 36.25,
          "el10": 15.47,
          "de10": 6.26,
          "dm10": 6757.75,
          "he10": 7536.75,
          "as10": 12.275,
          "wa": 35.75,
          "ca": 13.5
        },
        "rankDelta": -7
      },
      "ashe": {
        "finalScore": 70.81,
        "battleScore": 51.73,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 5,
        "det": {
          "g": 3,
          "time": 1679,
          "wr": 100,
          "el10": 25.01,
          "de10": 4.65,
          "dm10": 10938,
          "he10": 0,
          "as10": 3.57,
          "wa": 41,
          "ca": 18
        },
        "rankDelta": 24
      },
      "baptiste": {
        "finalScore": 63.09,
        "battleScore": 50.69,
        "coeff": 1.46,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 4,
        "det": {
          "g": 4,
          "time": 2215,
          "wr": 83,
          "el10": 18.15,
          "de10": 4.06,
          "dm10": 5907,
          "he10": 9925,
          "as10": 14.35,
          "wa": 32,
          "ca": 11
        },
        "rankDelta": 1
      },
      "bastion": {
        "finalScore": 72.92,
        "battleScore": 47.28,
        "coeff": 1.61,
        "matchCoef": 0.92,
        "gamesPlayed": 3,
        "rankIndex": 5,
        "det": {
          "g": 3,
          "time": 1714,
          "wr": 84,
          "el10": 26.96,
          "de10": 4.55,
          "dm10": 12592,
          "he10": 0,
          "as10": 3.5,
          "wa": 23,
          "ca": 4
        },
        "rankDelta": 3
      },
      "doomfist": {
        "finalScore": 39.56,
        "battleScore": 45.96,
        "coeff": 1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2335,
          "wr": 73,
          "el10": 23.39,
          "de10": 6.42,
          "dm10": 12341,
          "he10": 0,
          "as10": 6.68,
          "wa": 33,
          "ca": 11
        },
        "rankNew": true
      },
      "dva": {
        "finalScore": 43.1,
        "battleScore": 50.71,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 323,
          "wr": 100,
          "el10": 44.52,
          "de10": 1.86,
          "dm10": 14422,
          "he10": 0,
          "as10": 16.7,
          "wa": 31,
          "ca": 6
        },
        "rankDelta": -26
      },
      "echo": {
        "finalScore": 61.48,
        "battleScore": 43.55,
        "coeff": 1.61,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 5,
        "det": {
          "g": 6,
          "time": 3029,
          "wr": 49,
          "el10": 22.38,
          "de10": 7.72,
          "dm10": 10281,
          "he10": 215,
          "as10": 0.59,
          "wa": 29,
          "ca": 11
        },
        "rankDelta": 22
      },
      "freja": {
        "finalScore": 55.31,
        "battleScore": 40.4,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 5,
        "det": {
          "g": 2,
          "time": 1007,
          "wr": 0,
          "el10": 15.48,
          "de10": 7.74,
          "dm10": 8019,
          "he10": 263,
          "as10": 0.6,
          "wa": 26,
          "ca": 0
        },
        "rankDelta": 5
      },
      "illari": {
        "finalScore": 51.98,
        "battleScore": 41.77,
        "coeff": 1.46,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 4,
        "det": {
          "g": 1,
          "time": 665,
          "wr": 23,
          "el10": 16.25,
          "de10": 6.32,
          "dm10": 6297,
          "he10": 8976,
          "as10": 9.03,
          "wa": 45,
          "ca": 6
        },
        "rankDelta": 3
      },
      "junker-queen": {
        "finalScore": 39.6,
        "battleScore": 46.59,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 1389,
          "wr": 69,
          "el10": 26.79,
          "de10": 4.75,
          "dm10": 10633,
          "he10": 1950,
          "as10": 7.78,
          "wa": 34,
          "ca": 14
        },
        "rankNew": true
      },
      "junkrat": {
        "finalScore": 69.34,
        "battleScore": 50.03,
        "coeff": 1.61,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 5,
        "det": {
          "g": 5,
          "time": 1957,
          "wr": 77,
          "el10": 21.46,
          "de10": 4.91,
          "dm10": 12813,
          "he10": 0,
          "as10": 3.99,
          "wa": 28,
          "ca": 0
        },
        "rankDelta": 28
      },
      "juno": {
        "finalScore": 56.37,
        "battleScore": 45.3,
        "coeff": 1.46,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 4,
        "det": {
          "g": 3,
          "time": 1293,
          "wr": 67,
          "el10": 21.81,
          "de10": 4.18,
          "dm10": 4485,
          "he10": 8536,
          "as10": 12.07,
          "wa": 19,
          "ca": 0
        },
        "rankDelta": 3
      },
      "lifeweaver": {
        "finalScore": 46.95,
        "battleScore": 37.73,
        "coeff": 1.46,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 4,
        "det": {
          "g": 4,
          "time": 1794,
          "wr": 45,
          "el10": 8.36,
          "de10": 4.01,
          "dm10": 1754,
          "he10": 8926,
          "as10": 12.71,
          "wa": 21,
          "ca": 12
        },
        "rankDelta": -29
      },
      "lucio": {
        "finalScore": 64.17,
        "battleScore": 50,
        "coeff": 1.46,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 4,
        "det": {
          "g": 6,
          "time": 1988,
          "wr": 72,
          "el10": 24.45,
          "de10": 3.32,
          "dm10": 5609,
          "he10": 7092,
          "as10": 19.01,
          "wa": 27,
          "ca": 10
        },
        "rankNew": true
      },
      "mauga": {
        "finalScore": 55.15,
        "battleScore": 48.45,
        "coeff": 1,
        "matchCoef": 0.92,
        "gamesPlayed": 4,
        "rankIndex": 0,
        "det": {
          "g": 4,
          "time": 1851,
          "wr": 81,
          "el10": 24.31,
          "de10": 6.48,
          "dm10": 13727,
          "he10": 2603,
          "as10": 9.4,
          "wa": 39,
          "ca": 14
        },
        "rankDelta": -21
      },
      "mei": {
        "finalScore": 52.17,
        "battleScore": 38.11,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 662,
          "wr": 100,
          "el10": 11.78,
          "de10": 6.34,
          "dm10": 9549,
          "he10": 1248,
          "as10": 3.62,
          "wa": 47,
          "ca": 0
        },
        "rankNew": true
      },
      "mercy": {
        "finalScore": 59.68,
        "battleScore": 44.28,
        "coeff": 1.46,
        "matchCoef": 0.92,
        "gamesPlayed": 10,
        "rankIndex": 4,
        "det": {
          "g": 10,
          "time": 4475,
          "wr": 56,
          "el10": 8.45,
          "de10": 4.96,
          "dm10": 1765,
          "he10": 9309,
          "as10": 16.49,
          "wa": 34,
          "ca": 18
        },
        "rankDelta": 7
      },
      "orisa": {
        "finalScore": 41.46,
        "battleScore": 48.77,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 1178,
          "wr": 79,
          "el10": 29.54,
          "de10": 4.58,
          "dm10": 13792,
          "he10": 0,
          "as10": 7.13,
          "wa": 32,
          "ca": 14
        },
        "rankDelta": -11
      },
      "pharah": {
        "finalScore": 57.8,
        "battleScore": 42.23,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 5,
        "det": {
          "g": 4,
          "time": 1847,
          "wr": 51,
          "el10": 23.71,
          "de10": 8.12,
          "dm10": 11285,
          "he10": 0,
          "as10": 1.95,
          "wa": 49,
          "ca": 0
        },
        "rankDelta": 15
      },
      "ramattra": {
        "finalScore": 46.33,
        "battleScore": 33.29,
        "coeff": 1,
        "matchCoef": 0.92,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 464,
          "wr": 19,
          "el10": 10.36,
          "de10": 6.47,
          "dm10": 10267,
          "he10": 0,
          "as10": 0,
          "wa": 27,
          "ca": 19
        },
        "rankDelta": -27
      },
      "reaper": {
        "finalScore": 64.96,
        "battleScore": 43.48,
        "coeff": 1.61,
        "matchCoef": 0.92,
        "gamesPlayed": 2,
        "rankIndex": 5,
        "det": {
          "g": 2,
          "time": 840,
          "wr": 34,
          "el10": 22.86,
          "de10": 6.43,
          "dm10": 9915,
          "he10": 1661,
          "as10": 0,
          "wa": 29,
          "ca": 14
        },
        "rankDelta": 1
      },
      "reinhardt": {
        "finalScore": 40.12,
        "battleScore": 47.2,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 0,
        "det": {
          "g": 4,
          "time": 2444,
          "wr": 67,
          "el10": 25.04,
          "de10": 5.65,
          "dm10": 11747,
          "he10": 0,
          "as10": 2.45,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": -18
      },
      "roadhog": {
        "finalScore": 40.16,
        "battleScore": 46.66,
        "coeff": 1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2718,
          "wr": 43,
          "el10": 20.75,
          "de10": 5.3,
          "dm10": 11792,
          "he10": 6573,
          "as10": 4.86,
          "wa": 25,
          "ca": 17
        },
        "rankDelta": -26
      },
      "sigma": {
        "finalScore": 56.47,
        "battleScore": 49.06,
        "coeff": 1,
        "matchCoef": 0.93,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2470,
          "wr": 64,
          "el10": 24.29,
          "de10": 4.13,
          "dm10": 11511,
          "he10": 0,
          "as10": 2.67,
          "wa": 58,
          "ca": 0
        },
        "rankDelta": -15
      },
      "sombra": {
        "finalScore": 54.88,
        "battleScore": 40.09,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 5,
        "det": {
          "g": 2,
          "time": 933,
          "wr": 39,
          "el10": 17.36,
          "de10": 6.43,
          "dm10": 7600,
          "he10": 373,
          "as10": 3.21,
          "wa": 40,
          "ca": 9
        },
        "rankDelta": 14
      },
      "symmetra": {
        "finalScore": 58.95,
        "battleScore": 43.07,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 5,
        "det": {
          "g": 2,
          "time": 914,
          "wr": 84,
          "el10": 14.44,
          "de10": 5.25,
          "dm10": 8029,
          "he10": 77.91,
          "as10": 4.59,
          "wa": 38,
          "ca": 0
        },
        "rankDelta": 1
      },
      "tracer": {
        "finalScore": 51.23,
        "battleScore": 37.43,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 451,
          "wr": 0,
          "el10": 13.3,
          "de10": 7.98,
          "dm10": 8044,
          "he10": 0,
          "as10": 0,
          "wa": 39,
          "ca": 10
        },
        "rankDelta": 7
      },
      "vendetta": {
        "finalScore": 47.15,
        "battleScore": 34.44,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 5,
        "det": {
          "g": 2,
          "time": 982,
          "wr": 50,
          "el10": 7.94,
          "de10": 11.6,
          "dm10": 4682,
          "he10": 66.84,
          "as10": 1.22,
          "wa": 0,
          "ca": 0
        },
        "rankNew": true
      },
      "venture": {
        "finalScore": 56.12,
        "battleScore": 40.99,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 5,
        "det": {
          "g": 2,
          "time": 1408,
          "wr": 50,
          "el10": 17.47,
          "de10": 8.52,
          "dm10": 9978,
          "he10": 0,
          "as10": 3.84,
          "wa": 56,
          "ca": 0
        },
        "rankNew": true
      },
      "widowmaker": {
        "finalScore": 43.13,
        "battleScore": 31.5,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 434,
          "wr": 0,
          "el10": 4.14,
          "de10": 11.05,
          "dm10": 4159,
          "he10": 0,
          "as10": 1.38,
          "wa": 32,
          "ca": 10
        },
        "rankDelta": -12
      },
      "winston": {
        "finalScore": 38.05,
        "battleScore": 44.77,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 479,
          "wr": 95,
          "el10": 18.77,
          "de10": 6.26,
          "dm10": 12259,
          "he10": 0,
          "as10": 5.01,
          "wa": 57,
          "ca": 0
        },
        "rankDelta": -7
      },
      "wrecking-ball": {
        "finalScore": 39.16,
        "battleScore": 46.07,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 360,
          "wr": 99,
          "el10": 29.99,
          "de10": 1.67,
          "dm10": 8216,
          "he10": 0,
          "as10": 5,
          "wa": 33,
          "ca": 12
        },
        "rankNew": true
      },
      "zarya": {
        "finalScore": 51.11,
        "battleScore": 48.56,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 6,
        "rankIndex": 0,
        "det": {
          "g": 6,
          "time": 2409,
          "wr": 63,
          "el10": 25.41,
          "de10": 4.98,
          "dm10": 12211,
          "he10": 0,
          "as10": 4.23,
          "wa": 48,
          "ca": 0
        },
        "rankDelta": -20
      }
    },
    "bscoreAll": {
      "ana": {
        "finalScore": 50.54,
        "battleScore": 36.34,
        "coeff": 1.46,
        "matchCoef": 0.95,
        "gamesPlayed": 14,
        "rankIndex": 4,
        "det": {
          "g": 14,
          "time": 8028,
          "wr": 38.857142857142854,
          "el10": 10.813571428571427,
          "de10": 5.464999999999999,
          "dm10": 3254.285714285714,
          "he10": 9177,
          "as10": 11.18857142857143,
          "wa": 19.642857142857142,
          "ca": 0
        },
        "rankDelta": -11
      },
      "brigitte": {
        "finalScore": 60.03,
        "battleScore": 48.23,
        "coeff": 1.46,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 4,
        "det": {
          "g": 2,
          "time": 856,
          "wr": 100,
          "el10": 19.875,
          "de10": 5.045,
          "dm10": 5602,
          "he10": 9435,
          "as10": 16.244999999999997,
          "wa": 0,
          "ca": 0
        },
        "rankNew": true
      },
      "cassidy": {
        "finalScore": 51.49,
        "battleScore": 35.07,
        "coeff": 1.61,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 5,
        "det": {
          "g": 9,
          "time": 4779,
          "wr": 30,
          "el10": 17.406666666666666,
          "de10": 7.316666666666666,
          "dm10": 9532.666666666666,
          "he10": 0,
          "as10": 0.6266666666666667,
          "wa": 42,
          "ca": 7.666666666666667
        },
        "rankDelta": -4
      },
      "emre": {
        "finalScore": 62.6,
        "battleScore": 45.73,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 1614,
          "wr": 99,
          "el10": 18.96,
          "de10": 5.95,
          "dm10": 11886,
          "he10": 1034,
          "as10": 0,
          "wa": 33,
          "ca": 9
        },
        "rankDelta": 22
      },
      "genji": {
        "finalScore": 74.96,
        "battleScore": 47.07,
        "coeff": 1.61,
        "matchCoef": 0.99,
        "gamesPlayed": 22,
        "rankIndex": 5,
        "det": {
          "g": 22,
          "time": 13420,
          "wr": 67.9090909090909,
          "el10": 23.005454545454544,
          "de10": 7.037272727272727,
          "dm10": 9571.727272727272,
          "he10": 86.10272727272728,
          "as10": 0.13818181818181818,
          "wa": 26.636363636363637,
          "ca": 11.636363636363637
        },
        "rankNew": true
      },
      "hanzo": {
        "finalScore": 73.9,
        "battleScore": 50.91,
        "coeff": 1.61,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 5,
        "det": {
          "g": 8,
          "time": 3377,
          "wr": 55.375,
          "el10": 18.54875,
          "de10": 3.6662500000000002,
          "dm10": 10704.125,
          "he10": 3.05625,
          "as10": 6.186249999999999,
          "wa": 30.375,
          "ca": 13.875
        },
        "rankNew": true
      },
      "kiriko": {
        "finalScore": 46.97,
        "battleScore": 37.28,
        "coeff": 1.46,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 4,
        "det": {
          "g": 5,
          "time": 2388,
          "wr": 39.8,
          "el10": 7.242,
          "de10": 5.272,
          "dm10": 3515.6,
          "he10": 8996.8,
          "as10": 10.35,
          "wa": 31.6,
          "ca": 18.6
        },
        "rankDelta": -29
      },
      "mizuki": {
        "finalScore": 46.95,
        "battleScore": 37.73,
        "coeff": 1.46,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 4,
        "det": {
          "g": 3,
          "time": 870,
          "wr": 35,
          "el10": 13.11,
          "de10": 6.21,
          "dm10": 5061,
          "he10": 8571,
          "as10": 9.66,
          "wa": 37,
          "ca": 6
        },
        "rankDelta": -34
      },
      "moira": {
        "finalScore": 69.22,
        "battleScore": 47.17,
        "coeff": 1.46,
        "matchCoef": 0.93,
        "gamesPlayed": 5,
        "rankIndex": 4,
        "det": {
          "g": 5,
          "time": 3193,
          "wr": 80.8,
          "el10": 26.984,
          "de10": 4.970000000000001,
          "dm10": 8806,
          "he10": 8439,
          "as10": 8.608,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": -6
      },
      "shion": {
        "finalScore": 51.91,
        "battleScore": 37.92,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 628,
          "wr": 0,
          "el10": 13.37,
          "de10": 8.6,
          "dm10": 8599,
          "he10": 0,
          "as10": 2.87,
          "wa": 38,
          "ca": 9
        },
        "rankDelta": -8
      },
      "sierra": {
        "finalScore": 57.34,
        "battleScore": 41.89,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 5,
        "det": {
          "g": 3,
          "time": 1970,
          "wr": 29,
          "el10": 24.97,
          "de10": 7.61,
          "dm10": 8622,
          "he10": 0,
          "as10": 1.83,
          "wa": 25,
          "ca": 9
        },
        "rankDelta": -4
      },
      "sojourn": {
        "finalScore": 64.87,
        "battleScore": 43.75,
        "coeff": 1.61,
        "matchCoef": 0.92,
        "gamesPlayed": 10,
        "rankIndex": 5,
        "det": {
          "g": 10,
          "time": 5517,
          "wr": 49.7,
          "el10": 22.073,
          "de10": 5.684,
          "dm10": 10432.1,
          "he10": 0,
          "as10": 1.05,
          "wa": 28.7,
          "ca": 11.4
        },
        "rankDelta": 22
      },
      "soldier-76": {
        "finalScore": 80.97,
        "battleScore": 53.29,
        "coeff": 1.61,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 5,
        "det": {
          "g": 13,
          "time": 5496,
          "wr": 72.23076923076923,
          "el10": 23.29692307692308,
          "de10": 4.425384615384615,
          "dm10": 11598.384615384615,
          "he10": 1385.6153846153845,
          "as10": 2.1507692307692308,
          "wa": 37.15384615384615,
          "ca": 6.076923076923077
        },
        "rankDelta": 18
      },
      "torbjorn": {
        "finalScore": 66.85,
        "battleScore": 47.36,
        "coeff": 1.61,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 5,
        "det": {
          "g": 6,
          "time": 3417,
          "wr": 76.66666666666667,
          "el10": 20.276666666666667,
          "de10": 6.026666666666666,
          "dm10": 12580.333333333334,
          "he10": 0,
          "as10": 0.4666666666666666,
          "wa": 33.333333333333336,
          "ca": 11.666666666666666
        },
        "rankDelta": 29
      },
      "zenyatta": {
        "finalScore": 52.04,
        "battleScore": 41.82,
        "coeff": 1.46,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 4,
        "det": {
          "g": 4,
          "time": 2577,
          "wr": 36.25,
          "el10": 15.47,
          "de10": 6.26,
          "dm10": 6757.75,
          "he10": 7536.75,
          "as10": 12.275,
          "wa": 35.75,
          "ca": 13.5
        },
        "rankDelta": -7
      },
      "ashe": {
        "finalScore": 70.81,
        "battleScore": 51.73,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 5,
        "det": {
          "g": 3,
          "time": 1679,
          "wr": 100,
          "el10": 25.01,
          "de10": 4.65,
          "dm10": 10938,
          "he10": 0,
          "as10": 3.57,
          "wa": 41,
          "ca": 18
        },
        "rankDelta": 24
      },
      "baptiste": {
        "finalScore": 63.09,
        "battleScore": 50.69,
        "coeff": 1.46,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 4,
        "det": {
          "g": 4,
          "time": 2215,
          "wr": 83,
          "el10": 18.15,
          "de10": 4.06,
          "dm10": 5907,
          "he10": 9925,
          "as10": 14.35,
          "wa": 32,
          "ca": 11
        },
        "rankDelta": 1
      },
      "bastion": {
        "finalScore": 72.92,
        "battleScore": 47.28,
        "coeff": 1.61,
        "matchCoef": 0.92,
        "gamesPlayed": 3,
        "rankIndex": 5,
        "det": {
          "g": 3,
          "time": 1714,
          "wr": 84,
          "el10": 26.96,
          "de10": 4.55,
          "dm10": 12592,
          "he10": 0,
          "as10": 3.5,
          "wa": 23,
          "ca": 4
        },
        "rankDelta": 3
      },
      "doomfist": {
        "finalScore": 39.56,
        "battleScore": 45.96,
        "coeff": 1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2335,
          "wr": 73,
          "el10": 23.39,
          "de10": 6.42,
          "dm10": 12341,
          "he10": 0,
          "as10": 6.68,
          "wa": 33,
          "ca": 11
        },
        "rankNew": true
      },
      "dva": {
        "finalScore": 43.1,
        "battleScore": 50.71,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 323,
          "wr": 100,
          "el10": 44.52,
          "de10": 1.86,
          "dm10": 14422,
          "he10": 0,
          "as10": 16.7,
          "wa": 31,
          "ca": 6
        },
        "rankDelta": -26
      },
      "echo": {
        "finalScore": 61.48,
        "battleScore": 43.55,
        "coeff": 1.61,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 5,
        "det": {
          "g": 6,
          "time": 3029,
          "wr": 49,
          "el10": 22.38,
          "de10": 7.72,
          "dm10": 10281,
          "he10": 215,
          "as10": 0.59,
          "wa": 29,
          "ca": 11
        },
        "rankDelta": 22
      },
      "freja": {
        "finalScore": 55.31,
        "battleScore": 40.4,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 5,
        "det": {
          "g": 2,
          "time": 1007,
          "wr": 0,
          "el10": 15.48,
          "de10": 7.74,
          "dm10": 8019,
          "he10": 263,
          "as10": 0.6,
          "wa": 26,
          "ca": 0
        },
        "rankDelta": 5
      },
      "illari": {
        "finalScore": 51.98,
        "battleScore": 41.77,
        "coeff": 1.46,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 4,
        "det": {
          "g": 1,
          "time": 665,
          "wr": 23,
          "el10": 16.25,
          "de10": 6.32,
          "dm10": 6297,
          "he10": 8976,
          "as10": 9.03,
          "wa": 45,
          "ca": 6
        },
        "rankDelta": 3
      },
      "junker-queen": {
        "finalScore": 39.6,
        "battleScore": 46.59,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 1389,
          "wr": 69,
          "el10": 26.79,
          "de10": 4.75,
          "dm10": 10633,
          "he10": 1950,
          "as10": 7.78,
          "wa": 34,
          "ca": 14
        },
        "rankNew": true
      },
      "junkrat": {
        "finalScore": 69.34,
        "battleScore": 50.03,
        "coeff": 1.61,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 5,
        "det": {
          "g": 5,
          "time": 1957,
          "wr": 77,
          "el10": 21.46,
          "de10": 4.91,
          "dm10": 12813,
          "he10": 0,
          "as10": 3.99,
          "wa": 28,
          "ca": 0
        },
        "rankDelta": 28
      },
      "juno": {
        "finalScore": 56.37,
        "battleScore": 45.3,
        "coeff": 1.46,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 4,
        "det": {
          "g": 3,
          "time": 1293,
          "wr": 67,
          "el10": 21.81,
          "de10": 4.18,
          "dm10": 4485,
          "he10": 8536,
          "as10": 12.07,
          "wa": 19,
          "ca": 0
        },
        "rankDelta": 3
      },
      "lifeweaver": {
        "finalScore": 46.95,
        "battleScore": 37.73,
        "coeff": 1.46,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 4,
        "det": {
          "g": 4,
          "time": 1794,
          "wr": 45,
          "el10": 8.36,
          "de10": 4.01,
          "dm10": 1754,
          "he10": 8926,
          "as10": 12.71,
          "wa": 21,
          "ca": 12
        },
        "rankDelta": -29
      },
      "lucio": {
        "finalScore": 64.17,
        "battleScore": 50,
        "coeff": 1.46,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 4,
        "det": {
          "g": 6,
          "time": 1988,
          "wr": 72,
          "el10": 24.45,
          "de10": 3.32,
          "dm10": 5609,
          "he10": 7092,
          "as10": 19.01,
          "wa": 27,
          "ca": 10
        },
        "rankNew": true
      },
      "mauga": {
        "finalScore": 55.15,
        "battleScore": 48.45,
        "coeff": 1,
        "matchCoef": 0.92,
        "gamesPlayed": 4,
        "rankIndex": 0,
        "det": {
          "g": 4,
          "time": 1851,
          "wr": 81,
          "el10": 24.31,
          "de10": 6.48,
          "dm10": 13727,
          "he10": 2603,
          "as10": 9.4,
          "wa": 39,
          "ca": 14
        },
        "rankDelta": -21
      },
      "mei": {
        "finalScore": 52.17,
        "battleScore": 38.11,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 662,
          "wr": 100,
          "el10": 11.78,
          "de10": 6.34,
          "dm10": 9549,
          "he10": 1248,
          "as10": 3.62,
          "wa": 47,
          "ca": 0
        },
        "rankNew": true
      },
      "mercy": {
        "finalScore": 59.68,
        "battleScore": 44.28,
        "coeff": 1.46,
        "matchCoef": 0.92,
        "gamesPlayed": 10,
        "rankIndex": 4,
        "det": {
          "g": 10,
          "time": 4475,
          "wr": 56,
          "el10": 8.45,
          "de10": 4.96,
          "dm10": 1765,
          "he10": 9309,
          "as10": 16.49,
          "wa": 34,
          "ca": 18
        },
        "rankDelta": 7
      },
      "orisa": {
        "finalScore": 41.46,
        "battleScore": 48.77,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 1178,
          "wr": 79,
          "el10": 29.54,
          "de10": 4.58,
          "dm10": 13792,
          "he10": 0,
          "as10": 7.13,
          "wa": 32,
          "ca": 14
        },
        "rankDelta": -11
      },
      "pharah": {
        "finalScore": 57.8,
        "battleScore": 42.23,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 5,
        "det": {
          "g": 4,
          "time": 1847,
          "wr": 51,
          "el10": 23.71,
          "de10": 8.12,
          "dm10": 11285,
          "he10": 0,
          "as10": 1.95,
          "wa": 49,
          "ca": 0
        },
        "rankDelta": 15
      },
      "ramattra": {
        "finalScore": 46.33,
        "battleScore": 33.29,
        "coeff": 1,
        "matchCoef": 0.92,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 464,
          "wr": 19,
          "el10": 10.36,
          "de10": 6.47,
          "dm10": 10267,
          "he10": 0,
          "as10": 0,
          "wa": 27,
          "ca": 19
        },
        "rankDelta": -27
      },
      "reaper": {
        "finalScore": 64.96,
        "battleScore": 43.48,
        "coeff": 1.61,
        "matchCoef": 0.92,
        "gamesPlayed": 2,
        "rankIndex": 5,
        "det": {
          "g": 2,
          "time": 840,
          "wr": 34,
          "el10": 22.86,
          "de10": 6.43,
          "dm10": 9915,
          "he10": 1661,
          "as10": 0,
          "wa": 29,
          "ca": 14
        },
        "rankDelta": 1
      },
      "reinhardt": {
        "finalScore": 40.12,
        "battleScore": 47.2,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 0,
        "det": {
          "g": 4,
          "time": 2444,
          "wr": 67,
          "el10": 25.04,
          "de10": 5.65,
          "dm10": 11747,
          "he10": 0,
          "as10": 2.45,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": -18
      },
      "roadhog": {
        "finalScore": 40.16,
        "battleScore": 46.66,
        "coeff": 1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2718,
          "wr": 43,
          "el10": 20.75,
          "de10": 5.3,
          "dm10": 11792,
          "he10": 6573,
          "as10": 4.86,
          "wa": 25,
          "ca": 17
        },
        "rankDelta": -26
      },
      "sigma": {
        "finalScore": 56.47,
        "battleScore": 49.06,
        "coeff": 1,
        "matchCoef": 0.93,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2470,
          "wr": 64,
          "el10": 24.29,
          "de10": 4.13,
          "dm10": 11511,
          "he10": 0,
          "as10": 2.67,
          "wa": 58,
          "ca": 0
        },
        "rankDelta": -15
      },
      "sombra": {
        "finalScore": 54.88,
        "battleScore": 40.09,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 5,
        "det": {
          "g": 2,
          "time": 933,
          "wr": 39,
          "el10": 17.36,
          "de10": 6.43,
          "dm10": 7600,
          "he10": 373,
          "as10": 3.21,
          "wa": 40,
          "ca": 9
        },
        "rankDelta": 14
      },
      "symmetra": {
        "finalScore": 58.95,
        "battleScore": 43.07,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 5,
        "det": {
          "g": 2,
          "time": 914,
          "wr": 84,
          "el10": 14.44,
          "de10": 5.25,
          "dm10": 8029,
          "he10": 77.91,
          "as10": 4.59,
          "wa": 38,
          "ca": 0
        },
        "rankDelta": 1
      },
      "tracer": {
        "finalScore": 51.23,
        "battleScore": 37.43,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 451,
          "wr": 0,
          "el10": 13.3,
          "de10": 7.98,
          "dm10": 8044,
          "he10": 0,
          "as10": 0,
          "wa": 39,
          "ca": 10
        },
        "rankDelta": 7
      },
      "vendetta": {
        "finalScore": 47.15,
        "battleScore": 34.44,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 5,
        "det": {
          "g": 2,
          "time": 982,
          "wr": 50,
          "el10": 7.94,
          "de10": 11.6,
          "dm10": 4682,
          "he10": 66.84,
          "as10": 1.22,
          "wa": 0,
          "ca": 0
        },
        "rankNew": true
      },
      "venture": {
        "finalScore": 56.12,
        "battleScore": 40.99,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 5,
        "det": {
          "g": 2,
          "time": 1408,
          "wr": 50,
          "el10": 17.47,
          "de10": 8.52,
          "dm10": 9978,
          "he10": 0,
          "as10": 3.84,
          "wa": 56,
          "ca": 0
        },
        "rankNew": true
      },
      "widowmaker": {
        "finalScore": 43.13,
        "battleScore": 31.5,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 434,
          "wr": 0,
          "el10": 4.14,
          "de10": 11.05,
          "dm10": 4159,
          "he10": 0,
          "as10": 1.38,
          "wa": 32,
          "ca": 10
        },
        "rankDelta": -12
      },
      "winston": {
        "finalScore": 38.05,
        "battleScore": 44.77,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 479,
          "wr": 95,
          "el10": 18.77,
          "de10": 6.26,
          "dm10": 12259,
          "he10": 0,
          "as10": 5.01,
          "wa": 57,
          "ca": 0
        },
        "rankDelta": -7
      },
      "wrecking-ball": {
        "finalScore": 39.16,
        "battleScore": 46.07,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 360,
          "wr": 99,
          "el10": 29.99,
          "de10": 1.67,
          "dm10": 8216,
          "he10": 0,
          "as10": 5,
          "wa": 33,
          "ca": 12
        },
        "rankNew": true
      },
      "zarya": {
        "finalScore": 51.11,
        "battleScore": 48.56,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 6,
        "rankIndex": 0,
        "det": {
          "g": 6,
          "time": 2409,
          "wr": 63,
          "el10": 25.41,
          "de10": 4.98,
          "dm10": 12211,
          "he10": 0,
          "as10": 4.23,
          "wa": 48,
          "ca": 0
        },
        "rankDelta": -20
      }
    }
  },
  {
    "id": "makky",
    "name": "Makky",
    "tag": "",
    "endorse": 3,
    "title": ":3",
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/53f1a2e4a71661e9686ee4f9fa99b2056d73bb4b4a7a5e4d3ed424e57cd93c2f.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4f57d4bae6d479b52d262975c730e1f763123975a3dc08395709d963ea7dd6b9.png",
    "role": "Support",
    "ranks": {
      "Tank": null,
      "Damage": {
        "division": "diamond",
        "tier": 5,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_DiamondTier.bc8c5d6005f916c62c51728087aeb26f4facaa9b.png"
      },
      "Support": {
        "division": "diamond",
        "tier": 4,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_DiamondTier.bc8c5d6005f916c62c51728087aeb26f4facaa9b.png"
      }
    },
    "rankTier": "Diamond 4",
    "overall": {
      "matches": 10007,
      "wins": 5212,
      "losses": 4795,
      "wr": 52.08,
      "kda": 3.21,
      "elim": 15.04,
      "deaths": 5.53,
      "dmg": 7781.59,
      "heal": 4224,
      "time": 5236270
    },
    "roles": {
      "Tank": {
        "g": 1433,
        "w": 763,
        "l": 670,
        "time": 759981,
        "wr": 53.24,
        "kda": 3.92,
        "elim": 19.76,
        "deaths": 5.42,
        "dmg": 12138.37,
        "heal": 592.62
      },
      "Damage": {
        "g": 3969,
        "w": 2067,
        "l": 1902,
        "time": 2062724,
        "wr": 52.08,
        "kda": 2.93,
        "elim": 18.47,
        "deaths": 6.34,
        "dmg": 9934.31,
        "heal": 77.99
      },
      "Support": {
        "g": 4605,
        "w": 2382,
        "l": 2223,
        "time": 2413565,
        "wr": 51.73,
        "kda": 3.27,
        "elim": 10.62,
        "deaths": 4.87,
        "dmg": 4569.92,
        "heal": 8910.78
      }
    },
    "heroes": [
      {
        "slug": "ana",
        "n": "Ana",
        "role": "Support",
        "g": 2405,
        "wr": 52.85,
        "kda": 3.51
      },
      {
        "slug": "genji",
        "n": "Genji",
        "role": "Damage",
        "g": 1518,
        "wr": 55.2,
        "kda": 3.26
      },
      {
        "slug": "kiriko",
        "n": "Kiriko",
        "role": "Support",
        "g": 769,
        "wr": 49.93,
        "kda": 2.88
      },
      {
        "slug": "tracer",
        "n": "Tracer",
        "role": "Damage",
        "g": 501,
        "wr": 51.1,
        "kda": 2.81
      },
      {
        "slug": "sojourn",
        "n": "Sojourn",
        "role": "Damage",
        "g": 345,
        "wr": 48.99,
        "kda": 3.3
      },
      {
        "slug": "brigitte",
        "n": "Brigitte",
        "role": "Support",
        "g": 321,
        "wr": 49.84,
        "kda": 2.94
      },
      {
        "slug": "ashe",
        "n": "Ashe",
        "role": "Damage",
        "g": 305,
        "wr": 52.46,
        "kda": 2.78
      },
      {
        "slug": "cassidy",
        "n": "Cassidy",
        "role": "Damage",
        "g": 278,
        "wr": 45.32,
        "kda": 2.58
      },
      {
        "slug": "lucio",
        "n": "Lúcio",
        "role": "Support",
        "g": 278,
        "wr": 51.44,
        "kda": 3.63
      },
      {
        "slug": "doomfist",
        "n": "Doomfist",
        "role": "Tank",
        "g": 272,
        "wr": 51.1,
        "kda": 2.92
      },
      {
        "slug": "sigma",
        "n": "Sigma",
        "role": "Tank",
        "g": 182,
        "wr": 57.14,
        "kda": 4.98
      },
      {
        "slug": "moira",
        "n": "Moira",
        "role": "Support",
        "g": 180,
        "wr": 58.33,
        "kda": 3.61
      },
      {
        "slug": "reinhardt",
        "n": "Reinhardt",
        "role": "Tank",
        "g": 159,
        "wr": 56.6,
        "kda": 3.23
      },
      {
        "slug": "widowmaker",
        "n": "Widowmaker",
        "role": "Damage",
        "g": 154,
        "wr": 44.81,
        "kda": 2.02
      },
      {
        "slug": "baptiste",
        "n": "Baptiste",
        "role": "Support",
        "g": 149,
        "wr": 54.36,
        "kda": 2.51
      },
      {
        "slug": "pharah",
        "n": "Pharah",
        "role": "Damage",
        "g": 149,
        "wr": 53.02,
        "kda": 2.92
      },
      {
        "slug": "winston",
        "n": "Winston",
        "role": "Tank",
        "g": 142,
        "wr": 48.59,
        "kda": 3.76
      },
      {
        "slug": "zenyatta",
        "n": "Zenyatta",
        "role": "Support",
        "g": 133,
        "wr": 53.38,
        "kda": 3.81
      },
      {
        "slug": "orisa",
        "n": "Orisa",
        "role": "Tank",
        "g": 122,
        "wr": 52.46,
        "kda": 4.22
      },
      {
        "slug": "ramattra",
        "n": "Ramattra",
        "role": "Tank",
        "g": 112,
        "wr": 62.5,
        "kda": 4.75
      },
      {
        "slug": "juno",
        "n": "Juno",
        "role": "Support",
        "g": 111,
        "wr": 47.75,
        "kda": 2.97
      },
      {
        "slug": "echo",
        "n": "Echo",
        "role": "Damage",
        "g": 110,
        "wr": 54.55,
        "kda": 2.64
      },
      {
        "slug": "hanzo",
        "n": "Hanzo",
        "role": "Damage",
        "g": 108,
        "wr": 48.15,
        "kda": 2.19
      },
      {
        "slug": "freja",
        "n": "Freja",
        "role": "Damage",
        "g": 100,
        "wr": 50,
        "kda": 3.07
      },
      {
        "slug": "illari",
        "n": "Illari",
        "role": "Support",
        "g": 97,
        "wr": 52.58,
        "kda": 3.46
      },
      {
        "slug": "zarya",
        "n": "Zarya",
        "role": "Tank",
        "g": 88,
        "wr": 50,
        "kda": 4.74
      },
      {
        "slug": "wrecking-ball",
        "n": "Wrecking Ball",
        "role": "Tank",
        "g": 85,
        "wr": 42.35,
        "kda": 2.72
      },
      {
        "slug": "dva",
        "n": "D.Va",
        "role": "Tank",
        "g": 82,
        "wr": 47.56,
        "kda": 5.45
      },
      {
        "slug": "junker-queen",
        "n": "Junker Queen",
        "role": "Tank",
        "g": 73,
        "wr": 65.75,
        "kda": 4.43
      },
      {
        "slug": "symmetra",
        "n": "Symmetra",
        "role": "Damage",
        "g": 70,
        "wr": 60,
        "kda": 2.59
      },
      {
        "slug": "mercy",
        "n": "Mercy",
        "role": "Support",
        "g": 67,
        "wr": 40.3,
        "kda": 1.03
      },
      {
        "slug": "wuyang",
        "n": "Wuyang",
        "role": "Support",
        "g": 66,
        "wr": 36.36,
        "kda": 2.56
      },
      {
        "slug": "junkrat",
        "n": "Junkrat",
        "role": "Damage",
        "g": 65,
        "wr": 46.15,
        "kda": 2.37
      },
      {
        "slug": "reaper",
        "n": "Reaper",
        "role": "Damage",
        "g": 61,
        "wr": 55.74,
        "kda": 2.5
      },
      {
        "slug": "sombra",
        "n": "Sombra",
        "role": "Damage",
        "g": 60,
        "wr": 45,
        "kda": 3.87
      },
      {
        "slug": "roadhog",
        "n": "Roadhog",
        "role": "Tank",
        "g": 46,
        "wr": 45.65,
        "kda": 4.65
      },
      {
        "slug": "mauga",
        "n": "Mauga",
        "role": "Tank",
        "g": 41,
        "wr": 63.41,
        "kda": 6.08
      },
      {
        "slug": "bastion",
        "n": "Bastion",
        "role": "Damage",
        "g": 33,
        "wr": 51.52,
        "kda": 1.98
      },
      {
        "slug": "hazard",
        "n": "Hazard",
        "role": "Tank",
        "g": 28,
        "wr": 46.43,
        "kda": 3.87
      },
      {
        "slug": "venture",
        "n": "Venture",
        "role": "Damage",
        "g": 26,
        "wr": 65.38,
        "kda": 2.78
      },
      {
        "slug": "torbjorn",
        "n": "Torbjörn",
        "role": "Damage",
        "g": 22,
        "wr": 59.09,
        "kda": 2.65
      },
      {
        "slug": "emre",
        "n": "Emre",
        "role": "Damage",
        "g": 21,
        "wr": 47.62,
        "kda": 3.74
      },
      {
        "slug": "mei",
        "n": "Mei",
        "role": "Damage",
        "g": 20,
        "wr": 45,
        "kda": 3.27
      },
      {
        "slug": "soldier-76",
        "n": "Soldier: 76",
        "role": "Damage",
        "g": 18,
        "wr": 33.33,
        "kda": 1.14
      },
      {
        "slug": "mizuki",
        "n": "Mizuki",
        "role": "Support",
        "g": 17,
        "wr": 35.29,
        "kda": 1.57
      },
      {
        "slug": "lifeweaver",
        "n": "Lifeweaver",
        "role": "Support",
        "g": 10,
        "wr": 50,
        "kda": 1.15
      },
      {
        "slug": "anran",
        "n": "Anran",
        "role": "Damage",
        "g": 4,
        "wr": 75,
        "kda": 2.29
      },
      {
        "slug": "jetpack-cat",
        "n": "Jetpack Cat",
        "role": "Support",
        "g": 2,
        "wr": 50,
        "kda": 2
      },
      {
        "slug": "domina",
        "n": "Domina",
        "role": "Tank",
        "g": 1,
        "wr": 0,
        "kda": 1.25
      },
      {
        "slug": "vendetta",
        "n": "Vendetta",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 1.3
      }
    ],
    "bscore": {
      "ana": {
        "finalScore": 141.93,
        "battleScore": 43.09,
        "coeff": 1.61,
        "matchCoef": 2,
        "gamesPlayed": 2405,
        "rankIndex": 5,
        "det": {
          "g": 2405,
          "time": 1255641,
          "wr": 52.97172557172557,
          "el10": 9.249160083160083,
          "de10": 4.462860706860706,
          "dm10": 3302.758004158004,
          "he10": 8999.656964656964,
          "as10": 12.78679002079002,
          "wa": 38.01912681912682,
          "ca": 0
        }
      },
      "ashe": {
        "finalScore": 132.83,
        "battleScore": 43.08,
        "coeff": 1.61,
        "matchCoef": 1.68,
        "gamesPlayed": 305,
        "rankIndex": 5,
        "det": {
          "g": 305,
          "time": 150234,
          "wr": 52.868852459016395,
          "el10": 17.23095081967213,
          "de10": 6.19904918032787,
          "dm10": 9900.068852459017,
          "he10": 0,
          "as10": 2.634,
          "wa": 45.03606557377049,
          "ca": 10.99672131147541
        }
      },
      "cassidy": {
        "finalScore": 129.28,
        "battleScore": 40.72,
        "coeff": 1.61,
        "matchCoef": 1.65,
        "gamesPlayed": 278,
        "rankIndex": 5,
        "det": {
          "g": 278,
          "time": 144557,
          "wr": 45,
          "el10": 18.67892086330935,
          "de10": 7.240215827338129,
          "dm10": 9828.381294964029,
          "he10": 14.878273381294964,
          "as10": 1.4466906474820145,
          "wa": 49.064748201438846,
          "ca": 8.93525179856115
        }
      },
      "echo": {
        "finalScore": 121.67,
        "battleScore": 42.37,
        "coeff": 1.61,
        "matchCoef": 1.31,
        "gamesPlayed": 110,
        "rankIndex": 5,
        "det": {
          "g": 110,
          "time": 56829,
          "wr": 53.72727272727273,
          "el10": 18.013454545454547,
          "de10": 6.832,
          "dm10": 8972.854545454546,
          "he10": 135.4909090909091,
          "as10": 0.5745454545454545,
          "wa": 26.036363636363635,
          "ca": 8.945454545454545
        },
        "rankDelta": -1
      },
      "freja": {
        "finalScore": 120.04,
        "battleScore": 41.59,
        "coeff": 1.61,
        "matchCoef": 1.28,
        "gamesPlayed": 100,
        "rankIndex": 5,
        "det": {
          "g": 100,
          "time": 51962,
          "wr": 49.52,
          "el10": 18.5896,
          "de10": 6.040200000000001,
          "dm10": 10637.04,
          "he10": 90.07980000000002,
          "as10": 0.45300000000000007,
          "wa": 24.88,
          "ca": 10.3
        }
      },
      "genji": {
        "finalScore": 144.13,
        "battleScore": 44.75,
        "coeff": 1.61,
        "matchCoef": 2,
        "gamesPlayed": 1518,
        "rankIndex": 5,
        "det": {
          "g": 1518,
          "time": 793143,
          "wr": 55.041501976284586,
          "el10": 19.549525691699603,
          "de10": 5.996818181818182,
          "dm10": 8247.703557312252,
          "he10": 60.851047430830036,
          "as10": 0.19881422924901188,
          "wa": 29.01778656126482,
          "ca": 9.994071146245059
        }
      },
      "illari": {
        "finalScore": 121.39,
        "battleScore": 43.55,
        "coeff": 1.61,
        "matchCoef": 1.27,
        "gamesPlayed": 97,
        "rankIndex": 5,
        "det": {
          "g": 97,
          "time": 49815,
          "wr": 53,
          "el10": 15.849587628865978,
          "de10": 4.97298969072165,
          "dm10": 6971.6082474226805,
          "he10": 7073.876288659794,
          "as10": 5.530309278350516,
          "wa": 53.95876288659794,
          "ca": 11.061855670103093
        },
        "rankDelta": -1
      },
      "kiriko": {
        "finalScore": 140.06,
        "battleScore": 41.69,
        "coeff": 1.61,
        "matchCoef": 2,
        "gamesPlayed": 769,
        "rankIndex": 5,
        "det": {
          "g": 769,
          "time": 404136,
          "wr": 49.99479843953186,
          "el10": 9.651235370611184,
          "de10": 4.905669700910273,
          "dm10": 3544.0819245773732,
          "he10": 9519.508452535762,
          "as10": 14.904460338101432,
          "wa": 32,
          "ca": 14.00260078023407
        }
      },
      "moira": {
        "finalScore": 141.11,
        "battleScore": 45.53,
        "coeff": 1.61,
        "matchCoef": 1.49,
        "gamesPlayed": 180,
        "rankIndex": 5,
        "det": {
          "g": 180,
          "time": 100406,
          "wr": 57.86666666666667,
          "el10": 19.33066666666667,
          "de10": 5.3595,
          "dm10": 7226.216666666666,
          "he10": 8995.033333333333,
          "as10": 12.085833333333332,
          "wa": 0,
          "ca": 0
        }
      },
      "pharah": {
        "finalScore": 125.78,
        "battleScore": 43.45,
        "coeff": 1.61,
        "matchCoef": 1.42,
        "gamesPlayed": 149,
        "rankIndex": 5,
        "det": {
          "g": 149,
          "time": 78919,
          "wr": 53.06711409395973,
          "el10": 20.068053691275168,
          "de10": 6.869798657718121,
          "dm10": 10745.114093959732,
          "he10": 0,
          "as10": 4.651409395973154,
          "wa": 44.946308724832214,
          "ca": 0
        },
        "rankDelta": -2
      },
      "ramattra": {
        "finalScore": 136.05,
        "battleScore": 46.82,
        "coeff": 1.61,
        "matchCoef": 1.32,
        "gamesPlayed": 112,
        "rankIndex": 5,
        "det": {
          "g": 112,
          "time": 57731,
          "wr": 62.4375,
          "el10": 21.091339285714287,
          "de10": 4.912857142857143,
          "dm10": 10877.839285714286,
          "he10": 215.27678571428572,
          "as10": 2.2888392857142854,
          "wa": 24.044642857142858,
          "ca": 9
        }
      },
      "reaper": {
        "finalScore": 124.02,
        "battleScore": 42.99,
        "coeff": 1.61,
        "matchCoef": 1.1,
        "gamesPlayed": 61,
        "rankIndex": 5,
        "det": {
          "g": 61,
          "time": 33302,
          "wr": 55.0655737704918,
          "el10": 18.828524590163934,
          "de10": 7.518360655737705,
          "dm10": 7539,
          "he10": 1334.4262295081967,
          "as10": 0.019672131147540982,
          "wa": 29.065573770491802,
          "ca": 10.01639344262295
        },
        "rankDelta": 1
      },
      "sigma": {
        "finalScore": 143.34,
        "battleScore": 47.21,
        "coeff": 1.61,
        "matchCoef": 1.5,
        "gamesPlayed": 182,
        "rankIndex": 5,
        "det": {
          "g": 182,
          "time": 95179,
          "wr": 57.23626373626374,
          "el10": 19.86010989010989,
          "de10": 4.501318681318681,
          "dm10": 12035.5,
          "he10": 0,
          "as10": 2.588076923076923,
          "wa": 54.010989010989015,
          "ca": 0
        }
      },
      "sojourn": {
        "finalScore": 132.55,
        "battleScore": 41.73,
        "coeff": 1.61,
        "matchCoef": 1.73,
        "gamesPlayed": 345,
        "rankIndex": 5,
        "det": {
          "g": 345,
          "time": 185678,
          "wr": 48.51014492753623,
          "el10": 19.54831884057971,
          "de10": 5.9200869565217396,
          "dm10": 10007.756521739131,
          "he10": 0,
          "as10": 0.7095942028985507,
          "wa": 28.06376811594203,
          "ca": 9
        }
      },
      "tracer": {
        "finalScore": 138.36,
        "battleScore": 43.41,
        "coeff": 1.61,
        "matchCoef": 1.86,
        "gamesPlayed": 501,
        "rankIndex": 5,
        "det": {
          "g": 501,
          "time": 266725,
          "wr": 51.0439121756487,
          "el10": 18.003413173652696,
          "de10": 6.395608782435129,
          "dm10": 6819.2914171656685,
          "he10": 15.954610778443115,
          "as10": 0.07065868263473055,
          "wa": 34,
          "ca": 8.021956087824352
        }
      },
      "anran": {
        "finalScore": 92.6,
        "battleScore": 38.27,
        "coeff": 1.61,
        "matchCoef": 0.25,
        "gamesPlayed": 4,
        "rankIndex": 5,
        "det": {
          "g": 4,
          "time": 2610,
          "wr": 73,
          "el10": 14.71,
          "de10": 6.44,
          "dm10": 6850,
          "he10": 346,
          "as10": 0,
          "wa": 25,
          "ca": 12
        }
      },
      "baptiste": {
        "finalScore": 125.98,
        "battleScore": 43.66,
        "coeff": 1.61,
        "matchCoef": 1.42,
        "gamesPlayed": 149,
        "rankIndex": 5,
        "det": {
          "g": 149,
          "time": 75887,
          "wr": 54,
          "el10": 11.54,
          "de10": 5.13,
          "dm10": 4703,
          "he10": 9825,
          "as10": 11.84,
          "wa": 34,
          "ca": 7
        }
      },
      "bastion": {
        "finalScore": 111.82,
        "battleScore": 37.14,
        "coeff": 1.61,
        "matchCoef": 0.88,
        "gamesPlayed": 33,
        "rankIndex": 5,
        "det": {
          "g": 33,
          "time": 16429,
          "wr": 52,
          "el10": 15.78,
          "de10": 7.96,
          "dm10": 8336,
          "he10": 48.02,
          "as10": 1.24,
          "wa": 25,
          "ca": 1
        }
      },
      "brigitte": {
        "finalScore": 130.68,
        "battleScore": 40.71,
        "coeff": 1.61,
        "matchCoef": 1.7,
        "gamesPlayed": 321,
        "rankIndex": 5,
        "det": {
          "g": 321,
          "time": 173601,
          "wr": 50,
          "el10": 12.26,
          "de10": 5.87,
          "dm10": 4260,
          "he10": 9235,
          "as10": 16.08,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": -1
      },
      "domina": {
        "finalScore": 90.14,
        "battleScore": 33.04,
        "coeff": 1.61,
        "matchCoef": 0.25,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 343,
          "wr": 0,
          "el10": 8.75,
          "de10": 7,
          "dm10": 10499,
          "he10": 1370,
          "as10": 0,
          "wa": 36,
          "ca": 6
        }
      },
      "doomfist": {
        "finalScore": 127.85,
        "battleScore": 39.61,
        "coeff": 1.61,
        "matchCoef": 1.64,
        "gamesPlayed": 272,
        "rankIndex": 5,
        "det": {
          "g": 272,
          "time": 145720,
          "wr": 51,
          "el10": 19.19,
          "de10": 6.58,
          "dm10": 9445,
          "he10": 422,
          "as10": 3.99,
          "wa": 26,
          "ca": 9
        }
      },
      "dva": {
        "finalScore": 120.97,
        "battleScore": 45.2,
        "coeff": 1.61,
        "matchCoef": 1.21,
        "gamesPlayed": 82,
        "rankIndex": 5,
        "det": {
          "g": 82,
          "time": 42831,
          "wr": 47,
          "el10": 22.36,
          "de10": 4.1,
          "dm10": 9566,
          "he10": 569,
          "as10": 7.8,
          "wa": 28,
          "ca": 9
        },
        "rankDelta": -1
      },
      "emre": {
        "finalScore": 106.14,
        "battleScore": 45.06,
        "coeff": 1.61,
        "matchCoef": 0.72,
        "gamesPlayed": 21,
        "rankIndex": 5,
        "det": {
          "g": 21,
          "time": 9319,
          "wr": 49,
          "el10": 17.58,
          "de10": 4.7,
          "dm10": 10976,
          "he10": 882,
          "as10": 0,
          "wa": 41,
          "ca": 11
        }
      },
      "hazard": {
        "finalScore": 108.4,
        "battleScore": 43.52,
        "coeff": 1.61,
        "matchCoef": 0.82,
        "gamesPlayed": 28,
        "rankIndex": 5,
        "det": {
          "g": 28,
          "time": 14441,
          "wr": 48,
          "el10": 19.78,
          "de10": 5.11,
          "dm10": 11221,
          "he10": 541,
          "as10": 3.03,
          "wa": 32,
          "ca": 2
        }
      },
      "hanzo": {
        "finalScore": 120.3,
        "battleScore": 41,
        "coeff": 1.61,
        "matchCoef": 1.31,
        "gamesPlayed": 108,
        "rankIndex": 5,
        "det": {
          "g": 108,
          "time": 54440,
          "wr": 49,
          "el10": 15.22,
          "de10": 6.97,
          "dm10": 7478,
          "he10": 0.95,
          "as10": 4.04,
          "wa": 33,
          "ca": 10
        }
      },
      "jetpack-cat": {
        "finalScore": 91.17,
        "battleScore": 39.28,
        "coeff": 1.61,
        "matchCoef": 0.25,
        "gamesPlayed": 2,
        "rankIndex": 5,
        "det": {
          "g": 2,
          "time": 949,
          "wr": 28,
          "el10": 12.01,
          "de10": 6.95,
          "dm10": 2611,
          "he10": 7674,
          "as10": 7.58,
          "wa": 31,
          "ca": 11
        }
      },
      "junker-queen": {
        "finalScore": 125.21,
        "battleScore": 52.3,
        "coeff": 1.61,
        "matchCoef": 1.17,
        "gamesPlayed": 73,
        "rankIndex": 5,
        "det": {
          "g": 73,
          "time": 38862,
          "wr": 66,
          "el10": 24.21,
          "de10": 5.47,
          "dm10": 11734,
          "he10": 2230,
          "as10": 7.5,
          "wa": 42,
          "ca": 8
        },
        "rankDelta": 3
      },
      "junkrat": {
        "finalScore": 112.17,
        "battleScore": 36.8,
        "coeff": 1.61,
        "matchCoef": 1.13,
        "gamesPlayed": 65,
        "rankIndex": 5,
        "det": {
          "g": 65,
          "time": 32232,
          "wr": 46,
          "el10": 14.09,
          "de10": 6.68,
          "dm10": 7864,
          "he10": 0,
          "as10": 1.73,
          "wa": 25,
          "ca": 0
        }
      },
      "juno": {
        "finalScore": 122.86,
        "battleScore": 43.62,
        "coeff": 1.61,
        "matchCoef": 1.32,
        "gamesPlayed": 111,
        "rankIndex": 5,
        "det": {
          "g": 111,
          "time": 55595,
          "wr": 48,
          "el10": 12.77,
          "de10": 4.3,
          "dm10": 4150,
          "he10": 10440,
          "as10": 10.87,
          "wa": 39,
          "ca": 0
        }
      },
      "lifeweaver": {
        "finalScore": 96.48,
        "battleScore": 39.54,
        "coeff": 1.61,
        "matchCoef": 0.45,
        "gamesPlayed": 10,
        "rankIndex": 5,
        "det": {
          "g": 10,
          "time": 4490,
          "wr": 46,
          "el10": 4.01,
          "de10": 3.47,
          "dm10": 1574,
          "he10": 11289,
          "as10": 12.56,
          "wa": 29,
          "ca": 11
        }
      },
      "lucio": {
        "finalScore": 129.71,
        "battleScore": 41.11,
        "coeff": 1.61,
        "matchCoef": 1.65,
        "gamesPlayed": 278,
        "rankIndex": 5,
        "det": {
          "g": 278,
          "time": 150557,
          "wr": 51,
          "el10": 13.9,
          "de10": 5.92,
          "dm10": 5099,
          "he10": 6831,
          "as10": 11.19,
          "wa": 27,
          "ca": 8
        }
      },
      "mauga": {
        "finalScore": 124.95,
        "battleScore": 50.59,
        "coeff": 1.61,
        "matchCoef": 0.96,
        "gamesPlayed": 41,
        "rankIndex": 5,
        "det": {
          "g": 41,
          "time": 22594,
          "wr": 62,
          "el10": 24.17,
          "de10": 5.34,
          "dm10": 13531,
          "he10": 2126,
          "as10": 10.17,
          "wa": 36,
          "ca": 9
        },
        "rankDelta": -1
      },
      "mei": {
        "finalScore": 103.34,
        "battleScore": 40.17,
        "coeff": 1.61,
        "matchCoef": 0.7,
        "gamesPlayed": 20,
        "rankIndex": 5,
        "det": {
          "g": 20,
          "time": 9808,
          "wr": 46,
          "el10": 16.03,
          "de10": 6.24,
          "dm10": 7838,
          "he10": 1407,
          "as10": 4.59,
          "wa": 48,
          "ca": 0
        }
      },
      "mercy": {
        "finalScore": 110.69,
        "battleScore": 34.5,
        "coeff": 1.61,
        "matchCoef": 1.14,
        "gamesPlayed": 67,
        "rankIndex": 5,
        "det": {
          "g": 67,
          "time": 31903,
          "wr": 40,
          "el10": 1.94,
          "de10": 5.96,
          "dm10": 372,
          "he10": 9663,
          "as10": 16.23,
          "wa": 25,
          "ca": 8
        }
      },
      "mizuki": {
        "finalScore": 100.53,
        "battleScore": 37.25,
        "coeff": 1.61,
        "matchCoef": 0.64,
        "gamesPlayed": 17,
        "rankIndex": 5,
        "det": {
          "g": 17,
          "time": 8881,
          "wr": 36,
          "el10": 11.48,
          "de10": 7.3,
          "dm10": 5526,
          "he10": 9029,
          "as10": 10.47,
          "wa": 36,
          "ca": 8
        }
      },
      "orisa": {
        "finalScore": 123.78,
        "battleScore": 43.54,
        "coeff": 1.61,
        "matchCoef": 1.35,
        "gamesPlayed": 122,
        "rankIndex": 5,
        "det": {
          "g": 122,
          "time": 66739,
          "wr": 53,
          "el10": 20.17,
          "de10": 5.71,
          "dm10": 12029,
          "he10": 42.36,
          "as10": 3.95,
          "wa": 34,
          "ca": 7
        },
        "rankDelta": -2
      },
      "reinhardt": {
        "finalScore": 126.26,
        "battleScore": 43.24,
        "coeff": 1.61,
        "matchCoef": 1.45,
        "gamesPlayed": 159,
        "rankIndex": 5,
        "det": {
          "g": 159,
          "time": 83740,
          "wr": 57,
          "el10": 17.68,
          "de10": 5.96,
          "dm10": 8723,
          "he10": 0,
          "as10": 1.63,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": 2
      },
      "roadhog": {
        "finalScore": 113.91,
        "battleScore": 44,
        "coeff": 1.61,
        "matchCoef": 1,
        "gamesPlayed": 46,
        "rankIndex": 5,
        "det": {
          "g": 46,
          "time": 25718,
          "wr": 45,
          "el10": 18.24,
          "de10": 4.76,
          "dm10": 9212,
          "he10": 6597,
          "as10": 3.94,
          "wa": 25,
          "ca": 11
        },
        "rankDelta": 1
      },
      "soldier-76": {
        "finalScore": 98.68,
        "battleScore": 31.89,
        "coeff": 1.61,
        "matchCoef": 0.66,
        "gamesPlayed": 18,
        "rankIndex": 5,
        "det": {
          "g": 18,
          "time": 9028,
          "wr": 35,
          "el10": 10.5,
          "de10": 9.24,
          "dm10": 6406,
          "he10": 1316,
          "as10": 1.13,
          "wa": 29,
          "ca": 7
        }
      },
      "sombra": {
        "finalScore": 113.45,
        "battleScore": 39.54,
        "coeff": 1.61,
        "matchCoef": 1.1,
        "gamesPlayed": 60,
        "rankIndex": 5,
        "det": {
          "g": 60,
          "time": 31579,
          "wr": 45,
          "el10": 17.67,
          "de10": 6.08,
          "dm10": 6400,
          "he10": 289,
          "as10": 5.72,
          "wa": 33,
          "ca": 7
        },
        "rankDelta": -1
      },
      "symmetra": {
        "finalScore": 116.02,
        "battleScore": 40.98,
        "coeff": 1.61,
        "matchCoef": 1.15,
        "gamesPlayed": 70,
        "rankIndex": 5,
        "det": {
          "g": 70,
          "time": 35155,
          "wr": 60,
          "el10": 17.03,
          "de10": 6.59,
          "dm10": 7796,
          "he10": 130,
          "as10": 2.82,
          "wa": 36,
          "ca": 0
        }
      },
      "torbjorn": {
        "finalScore": 106.04,
        "battleScore": 43.83,
        "coeff": 1.61,
        "matchCoef": 0.73,
        "gamesPlayed": 22,
        "rankIndex": 5,
        "det": {
          "g": 22,
          "time": 10283,
          "wr": 56,
          "el10": 15.46,
          "de10": 5.84,
          "dm10": 8694,
          "he10": 0,
          "as10": 1.23,
          "wa": 27,
          "ca": 8
        }
      },
      "vendetta": {
        "finalScore": 90,
        "battleScore": 32.2,
        "coeff": 1.61,
        "matchCoef": 0.25,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 757,
          "wr": 0,
          "el10": 10.3,
          "de10": 7.92,
          "dm10": 6417,
          "he10": 0,
          "as10": 0,
          "wa": 0,
          "ca": 0
        }
      },
      "venture": {
        "finalScore": 108.89,
        "battleScore": 45.9,
        "coeff": 1.61,
        "matchCoef": 0.79,
        "gamesPlayed": 26,
        "rankIndex": 5,
        "det": {
          "g": 26,
          "time": 14123,
          "wr": 68,
          "el10": 19.71,
          "de10": 7.09,
          "dm10": 8788,
          "he10": 0,
          "as10": 1.83,
          "wa": 56,
          "ca": 0
        }
      },
      "widowmaker": {
        "finalScore": 122.02,
        "battleScore": 39.15,
        "coeff": 1.61,
        "matchCoef": 1.44,
        "gamesPlayed": 154,
        "rankIndex": 5,
        "det": {
          "g": 154,
          "time": 74977,
          "wr": 45,
          "el10": 14.2,
          "de10": 7.04,
          "dm10": 5568,
          "he10": 0,
          "as10": 2.11,
          "wa": 38,
          "ca": 13
        },
        "rankDelta": 3
      },
      "winston": {
        "finalScore": 124.38,
        "battleScore": 42.49,
        "coeff": 1.61,
        "matchCoef": 1.41,
        "gamesPlayed": 142,
        "rankIndex": 5,
        "det": {
          "g": 142,
          "time": 74338,
          "wr": 49,
          "el10": 19.19,
          "de10": 5.1,
          "dm10": 9422,
          "he10": 386,
          "as10": 3.16,
          "wa": 61,
          "ca": 0
        },
        "rankDelta": -1
      },
      "wrecking-ball": {
        "finalScore": 117.99,
        "battleScore": 41.05,
        "coeff": 1.61,
        "matchCoef": 1.22,
        "gamesPlayed": 85,
        "rankIndex": 5,
        "det": {
          "g": 85,
          "time": 45263,
          "wr": 43,
          "el10": 15.87,
          "de10": 5.83,
          "dm10": 7484,
          "he10": 174,
          "as10": 3.75,
          "wa": 34,
          "ca": 10
        }
      },
      "wuyang": {
        "finalScore": 111.44,
        "battleScore": 35.65,
        "coeff": 1.61,
        "matchCoef": 1.13,
        "gamesPlayed": 66,
        "rankIndex": 5,
        "det": {
          "g": 66,
          "time": 34183,
          "wr": 35,
          "el10": 12.92,
          "de10": 5.06,
          "dm10": 6612,
          "he10": 7634,
          "as10": 8.06,
          "wa": 33,
          "ca": 0
        }
      },
      "zarya": {
        "finalScore": 130.94,
        "battleScore": 45.14,
        "coeff": 1.61,
        "matchCoef": 1.23,
        "gamesPlayed": 88,
        "rankIndex": 5,
        "det": {
          "g": 88,
          "time": 46450,
          "wr": 50,
          "el10": 20.29,
          "de10": 4.68,
          "dm10": 11537,
          "he10": 0,
          "as10": 4.92,
          "wa": 41,
          "ca": 0
        },
        "rankDelta": 1
      },
      "zenyatta": {
        "finalScore": 122.26,
        "battleScore": 40.9,
        "coeff": 1.61,
        "matchCoef": 1.38,
        "gamesPlayed": 133,
        "rankIndex": 5,
        "det": {
          "g": 133,
          "time": 67039,
          "wr": 53,
          "el10": 14.26,
          "de10": 5.84,
          "dm10": 6048,
          "he10": 6505,
          "as10": 15.27,
          "wa": 25,
          "ca": 10
        }
      }
    },
    "bscoreAll": {
      "ana": {
        "finalScore": 141.93,
        "battleScore": 43.09,
        "coeff": 1.61,
        "matchCoef": 2,
        "gamesPlayed": 2405,
        "rankIndex": 5,
        "det": {
          "g": 2405,
          "time": 1255641,
          "wr": 52.97172557172557,
          "el10": 9.249160083160083,
          "de10": 4.462860706860706,
          "dm10": 3302.758004158004,
          "he10": 8999.656964656964,
          "as10": 12.78679002079002,
          "wa": 38.01912681912682,
          "ca": 0
        }
      },
      "ashe": {
        "finalScore": 132.83,
        "battleScore": 43.08,
        "coeff": 1.61,
        "matchCoef": 1.68,
        "gamesPlayed": 305,
        "rankIndex": 5,
        "det": {
          "g": 305,
          "time": 150234,
          "wr": 52.868852459016395,
          "el10": 17.23095081967213,
          "de10": 6.19904918032787,
          "dm10": 9900.068852459017,
          "he10": 0,
          "as10": 2.634,
          "wa": 45.03606557377049,
          "ca": 10.99672131147541
        }
      },
      "cassidy": {
        "finalScore": 129.28,
        "battleScore": 40.72,
        "coeff": 1.61,
        "matchCoef": 1.65,
        "gamesPlayed": 278,
        "rankIndex": 5,
        "det": {
          "g": 278,
          "time": 144557,
          "wr": 45,
          "el10": 18.67892086330935,
          "de10": 7.240215827338129,
          "dm10": 9828.381294964029,
          "he10": 14.878273381294964,
          "as10": 1.4466906474820145,
          "wa": 49.064748201438846,
          "ca": 8.93525179856115
        }
      },
      "echo": {
        "finalScore": 121.67,
        "battleScore": 42.37,
        "coeff": 1.61,
        "matchCoef": 1.31,
        "gamesPlayed": 110,
        "rankIndex": 5,
        "det": {
          "g": 110,
          "time": 56829,
          "wr": 53.72727272727273,
          "el10": 18.013454545454547,
          "de10": 6.832,
          "dm10": 8972.854545454546,
          "he10": 135.4909090909091,
          "as10": 0.5745454545454545,
          "wa": 26.036363636363635,
          "ca": 8.945454545454545
        },
        "rankDelta": -1
      },
      "freja": {
        "finalScore": 120.04,
        "battleScore": 41.59,
        "coeff": 1.61,
        "matchCoef": 1.28,
        "gamesPlayed": 100,
        "rankIndex": 5,
        "det": {
          "g": 100,
          "time": 51962,
          "wr": 49.52,
          "el10": 18.5896,
          "de10": 6.040200000000001,
          "dm10": 10637.04,
          "he10": 90.07980000000002,
          "as10": 0.45300000000000007,
          "wa": 24.88,
          "ca": 10.3
        }
      },
      "genji": {
        "finalScore": 144.13,
        "battleScore": 44.75,
        "coeff": 1.61,
        "matchCoef": 2,
        "gamesPlayed": 1518,
        "rankIndex": 5,
        "det": {
          "g": 1518,
          "time": 793143,
          "wr": 55.041501976284586,
          "el10": 19.549525691699603,
          "de10": 5.996818181818182,
          "dm10": 8247.703557312252,
          "he10": 60.851047430830036,
          "as10": 0.19881422924901188,
          "wa": 29.01778656126482,
          "ca": 9.994071146245059
        }
      },
      "illari": {
        "finalScore": 121.39,
        "battleScore": 43.55,
        "coeff": 1.61,
        "matchCoef": 1.27,
        "gamesPlayed": 97,
        "rankIndex": 5,
        "det": {
          "g": 97,
          "time": 49815,
          "wr": 53,
          "el10": 15.849587628865978,
          "de10": 4.97298969072165,
          "dm10": 6971.6082474226805,
          "he10": 7073.876288659794,
          "as10": 5.530309278350516,
          "wa": 53.95876288659794,
          "ca": 11.061855670103093
        },
        "rankDelta": -1
      },
      "kiriko": {
        "finalScore": 140.06,
        "battleScore": 41.69,
        "coeff": 1.61,
        "matchCoef": 2,
        "gamesPlayed": 769,
        "rankIndex": 5,
        "det": {
          "g": 769,
          "time": 404136,
          "wr": 49.99479843953186,
          "el10": 9.651235370611184,
          "de10": 4.905669700910273,
          "dm10": 3544.0819245773732,
          "he10": 9519.508452535762,
          "as10": 14.904460338101432,
          "wa": 32,
          "ca": 14.00260078023407
        }
      },
      "moira": {
        "finalScore": 141.11,
        "battleScore": 45.53,
        "coeff": 1.61,
        "matchCoef": 1.49,
        "gamesPlayed": 180,
        "rankIndex": 5,
        "det": {
          "g": 180,
          "time": 100406,
          "wr": 57.86666666666667,
          "el10": 19.33066666666667,
          "de10": 5.3595,
          "dm10": 7226.216666666666,
          "he10": 8995.033333333333,
          "as10": 12.085833333333332,
          "wa": 0,
          "ca": 0
        }
      },
      "pharah": {
        "finalScore": 125.78,
        "battleScore": 43.45,
        "coeff": 1.61,
        "matchCoef": 1.42,
        "gamesPlayed": 149,
        "rankIndex": 5,
        "det": {
          "g": 149,
          "time": 78919,
          "wr": 53.06711409395973,
          "el10": 20.068053691275168,
          "de10": 6.869798657718121,
          "dm10": 10745.114093959732,
          "he10": 0,
          "as10": 4.651409395973154,
          "wa": 44.946308724832214,
          "ca": 0
        },
        "rankDelta": -2
      },
      "ramattra": {
        "finalScore": 136.05,
        "battleScore": 46.82,
        "coeff": 1.61,
        "matchCoef": 1.32,
        "gamesPlayed": 112,
        "rankIndex": 5,
        "det": {
          "g": 112,
          "time": 57731,
          "wr": 62.4375,
          "el10": 21.091339285714287,
          "de10": 4.912857142857143,
          "dm10": 10877.839285714286,
          "he10": 215.27678571428572,
          "as10": 2.2888392857142854,
          "wa": 24.044642857142858,
          "ca": 9
        }
      },
      "reaper": {
        "finalScore": 124.02,
        "battleScore": 42.99,
        "coeff": 1.61,
        "matchCoef": 1.1,
        "gamesPlayed": 61,
        "rankIndex": 5,
        "det": {
          "g": 61,
          "time": 33302,
          "wr": 55.0655737704918,
          "el10": 18.828524590163934,
          "de10": 7.518360655737705,
          "dm10": 7539,
          "he10": 1334.4262295081967,
          "as10": 0.019672131147540982,
          "wa": 29.065573770491802,
          "ca": 10.01639344262295
        },
        "rankDelta": 1
      },
      "sigma": {
        "finalScore": 143.34,
        "battleScore": 47.21,
        "coeff": 1.61,
        "matchCoef": 1.5,
        "gamesPlayed": 182,
        "rankIndex": 5,
        "det": {
          "g": 182,
          "time": 95179,
          "wr": 57.23626373626374,
          "el10": 19.86010989010989,
          "de10": 4.501318681318681,
          "dm10": 12035.5,
          "he10": 0,
          "as10": 2.588076923076923,
          "wa": 54.010989010989015,
          "ca": 0
        }
      },
      "sojourn": {
        "finalScore": 132.55,
        "battleScore": 41.73,
        "coeff": 1.61,
        "matchCoef": 1.73,
        "gamesPlayed": 345,
        "rankIndex": 5,
        "det": {
          "g": 345,
          "time": 185678,
          "wr": 48.51014492753623,
          "el10": 19.54831884057971,
          "de10": 5.9200869565217396,
          "dm10": 10007.756521739131,
          "he10": 0,
          "as10": 0.7095942028985507,
          "wa": 28.06376811594203,
          "ca": 9
        }
      },
      "tracer": {
        "finalScore": 138.36,
        "battleScore": 43.41,
        "coeff": 1.61,
        "matchCoef": 1.86,
        "gamesPlayed": 501,
        "rankIndex": 5,
        "det": {
          "g": 501,
          "time": 266725,
          "wr": 51.0439121756487,
          "el10": 18.003413173652696,
          "de10": 6.395608782435129,
          "dm10": 6819.2914171656685,
          "he10": 15.954610778443115,
          "as10": 0.07065868263473055,
          "wa": 34,
          "ca": 8.021956087824352
        }
      },
      "anran": {
        "finalScore": 92.6,
        "battleScore": 38.27,
        "coeff": 1.61,
        "matchCoef": 0.25,
        "gamesPlayed": 4,
        "rankIndex": 5,
        "det": {
          "g": 4,
          "time": 2610,
          "wr": 73,
          "el10": 14.71,
          "de10": 6.44,
          "dm10": 6850,
          "he10": 346,
          "as10": 0,
          "wa": 25,
          "ca": 12
        }
      },
      "baptiste": {
        "finalScore": 125.98,
        "battleScore": 43.66,
        "coeff": 1.61,
        "matchCoef": 1.42,
        "gamesPlayed": 149,
        "rankIndex": 5,
        "det": {
          "g": 149,
          "time": 75887,
          "wr": 54,
          "el10": 11.54,
          "de10": 5.13,
          "dm10": 4703,
          "he10": 9825,
          "as10": 11.84,
          "wa": 34,
          "ca": 7
        }
      },
      "bastion": {
        "finalScore": 111.82,
        "battleScore": 37.14,
        "coeff": 1.61,
        "matchCoef": 0.88,
        "gamesPlayed": 33,
        "rankIndex": 5,
        "det": {
          "g": 33,
          "time": 16429,
          "wr": 52,
          "el10": 15.78,
          "de10": 7.96,
          "dm10": 8336,
          "he10": 48.02,
          "as10": 1.24,
          "wa": 25,
          "ca": 1
        }
      },
      "brigitte": {
        "finalScore": 130.68,
        "battleScore": 40.71,
        "coeff": 1.61,
        "matchCoef": 1.7,
        "gamesPlayed": 321,
        "rankIndex": 5,
        "det": {
          "g": 321,
          "time": 173601,
          "wr": 50,
          "el10": 12.26,
          "de10": 5.87,
          "dm10": 4260,
          "he10": 9235,
          "as10": 16.08,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": -1
      },
      "domina": {
        "finalScore": 90.14,
        "battleScore": 33.04,
        "coeff": 1.61,
        "matchCoef": 0.25,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 343,
          "wr": 0,
          "el10": 8.75,
          "de10": 7,
          "dm10": 10499,
          "he10": 1370,
          "as10": 0,
          "wa": 36,
          "ca": 6
        }
      },
      "doomfist": {
        "finalScore": 127.85,
        "battleScore": 39.61,
        "coeff": 1.61,
        "matchCoef": 1.64,
        "gamesPlayed": 272,
        "rankIndex": 5,
        "det": {
          "g": 272,
          "time": 145720,
          "wr": 51,
          "el10": 19.19,
          "de10": 6.58,
          "dm10": 9445,
          "he10": 422,
          "as10": 3.99,
          "wa": 26,
          "ca": 9
        }
      },
      "dva": {
        "finalScore": 120.97,
        "battleScore": 45.2,
        "coeff": 1.61,
        "matchCoef": 1.21,
        "gamesPlayed": 82,
        "rankIndex": 5,
        "det": {
          "g": 82,
          "time": 42831,
          "wr": 47,
          "el10": 22.36,
          "de10": 4.1,
          "dm10": 9566,
          "he10": 569,
          "as10": 7.8,
          "wa": 28,
          "ca": 9
        },
        "rankDelta": -1
      },
      "emre": {
        "finalScore": 106.14,
        "battleScore": 45.06,
        "coeff": 1.61,
        "matchCoef": 0.72,
        "gamesPlayed": 21,
        "rankIndex": 5,
        "det": {
          "g": 21,
          "time": 9319,
          "wr": 49,
          "el10": 17.58,
          "de10": 4.7,
          "dm10": 10976,
          "he10": 882,
          "as10": 0,
          "wa": 41,
          "ca": 11
        }
      },
      "hazard": {
        "finalScore": 108.4,
        "battleScore": 43.52,
        "coeff": 1.61,
        "matchCoef": 0.82,
        "gamesPlayed": 28,
        "rankIndex": 5,
        "det": {
          "g": 28,
          "time": 14441,
          "wr": 48,
          "el10": 19.78,
          "de10": 5.11,
          "dm10": 11221,
          "he10": 541,
          "as10": 3.03,
          "wa": 32,
          "ca": 2
        }
      },
      "hanzo": {
        "finalScore": 120.3,
        "battleScore": 41,
        "coeff": 1.61,
        "matchCoef": 1.31,
        "gamesPlayed": 108,
        "rankIndex": 5,
        "det": {
          "g": 108,
          "time": 54440,
          "wr": 49,
          "el10": 15.22,
          "de10": 6.97,
          "dm10": 7478,
          "he10": 0.95,
          "as10": 4.04,
          "wa": 33,
          "ca": 10
        }
      },
      "jetpack-cat": {
        "finalScore": 91.17,
        "battleScore": 39.28,
        "coeff": 1.61,
        "matchCoef": 0.25,
        "gamesPlayed": 2,
        "rankIndex": 5,
        "det": {
          "g": 2,
          "time": 949,
          "wr": 28,
          "el10": 12.01,
          "de10": 6.95,
          "dm10": 2611,
          "he10": 7674,
          "as10": 7.58,
          "wa": 31,
          "ca": 11
        }
      },
      "junker-queen": {
        "finalScore": 125.21,
        "battleScore": 52.3,
        "coeff": 1.61,
        "matchCoef": 1.17,
        "gamesPlayed": 73,
        "rankIndex": 5,
        "det": {
          "g": 73,
          "time": 38862,
          "wr": 66,
          "el10": 24.21,
          "de10": 5.47,
          "dm10": 11734,
          "he10": 2230,
          "as10": 7.5,
          "wa": 42,
          "ca": 8
        },
        "rankDelta": 3
      },
      "junkrat": {
        "finalScore": 112.17,
        "battleScore": 36.8,
        "coeff": 1.61,
        "matchCoef": 1.13,
        "gamesPlayed": 65,
        "rankIndex": 5,
        "det": {
          "g": 65,
          "time": 32232,
          "wr": 46,
          "el10": 14.09,
          "de10": 6.68,
          "dm10": 7864,
          "he10": 0,
          "as10": 1.73,
          "wa": 25,
          "ca": 0
        }
      },
      "juno": {
        "finalScore": 122.86,
        "battleScore": 43.62,
        "coeff": 1.61,
        "matchCoef": 1.32,
        "gamesPlayed": 111,
        "rankIndex": 5,
        "det": {
          "g": 111,
          "time": 55595,
          "wr": 48,
          "el10": 12.77,
          "de10": 4.3,
          "dm10": 4150,
          "he10": 10440,
          "as10": 10.87,
          "wa": 39,
          "ca": 0
        }
      },
      "lifeweaver": {
        "finalScore": 96.48,
        "battleScore": 39.54,
        "coeff": 1.61,
        "matchCoef": 0.45,
        "gamesPlayed": 10,
        "rankIndex": 5,
        "det": {
          "g": 10,
          "time": 4490,
          "wr": 46,
          "el10": 4.01,
          "de10": 3.47,
          "dm10": 1574,
          "he10": 11289,
          "as10": 12.56,
          "wa": 29,
          "ca": 11
        }
      },
      "lucio": {
        "finalScore": 129.71,
        "battleScore": 41.11,
        "coeff": 1.61,
        "matchCoef": 1.65,
        "gamesPlayed": 278,
        "rankIndex": 5,
        "det": {
          "g": 278,
          "time": 150557,
          "wr": 51,
          "el10": 13.9,
          "de10": 5.92,
          "dm10": 5099,
          "he10": 6831,
          "as10": 11.19,
          "wa": 27,
          "ca": 8
        }
      },
      "mauga": {
        "finalScore": 124.95,
        "battleScore": 50.59,
        "coeff": 1.61,
        "matchCoef": 0.96,
        "gamesPlayed": 41,
        "rankIndex": 5,
        "det": {
          "g": 41,
          "time": 22594,
          "wr": 62,
          "el10": 24.17,
          "de10": 5.34,
          "dm10": 13531,
          "he10": 2126,
          "as10": 10.17,
          "wa": 36,
          "ca": 9
        },
        "rankDelta": -1
      },
      "mei": {
        "finalScore": 103.34,
        "battleScore": 40.17,
        "coeff": 1.61,
        "matchCoef": 0.7,
        "gamesPlayed": 20,
        "rankIndex": 5,
        "det": {
          "g": 20,
          "time": 9808,
          "wr": 46,
          "el10": 16.03,
          "de10": 6.24,
          "dm10": 7838,
          "he10": 1407,
          "as10": 4.59,
          "wa": 48,
          "ca": 0
        }
      },
      "mercy": {
        "finalScore": 110.69,
        "battleScore": 34.5,
        "coeff": 1.61,
        "matchCoef": 1.14,
        "gamesPlayed": 67,
        "rankIndex": 5,
        "det": {
          "g": 67,
          "time": 31903,
          "wr": 40,
          "el10": 1.94,
          "de10": 5.96,
          "dm10": 372,
          "he10": 9663,
          "as10": 16.23,
          "wa": 25,
          "ca": 8
        }
      },
      "mizuki": {
        "finalScore": 100.53,
        "battleScore": 37.25,
        "coeff": 1.61,
        "matchCoef": 0.64,
        "gamesPlayed": 17,
        "rankIndex": 5,
        "det": {
          "g": 17,
          "time": 8881,
          "wr": 36,
          "el10": 11.48,
          "de10": 7.3,
          "dm10": 5526,
          "he10": 9029,
          "as10": 10.47,
          "wa": 36,
          "ca": 8
        }
      },
      "orisa": {
        "finalScore": 123.78,
        "battleScore": 43.54,
        "coeff": 1.61,
        "matchCoef": 1.35,
        "gamesPlayed": 122,
        "rankIndex": 5,
        "det": {
          "g": 122,
          "time": 66739,
          "wr": 53,
          "el10": 20.17,
          "de10": 5.71,
          "dm10": 12029,
          "he10": 42.36,
          "as10": 3.95,
          "wa": 34,
          "ca": 7
        },
        "rankDelta": -2
      },
      "reinhardt": {
        "finalScore": 126.26,
        "battleScore": 43.24,
        "coeff": 1.61,
        "matchCoef": 1.45,
        "gamesPlayed": 159,
        "rankIndex": 5,
        "det": {
          "g": 159,
          "time": 83740,
          "wr": 57,
          "el10": 17.68,
          "de10": 5.96,
          "dm10": 8723,
          "he10": 0,
          "as10": 1.63,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": 2
      },
      "roadhog": {
        "finalScore": 113.91,
        "battleScore": 44,
        "coeff": 1.61,
        "matchCoef": 1,
        "gamesPlayed": 46,
        "rankIndex": 5,
        "det": {
          "g": 46,
          "time": 25718,
          "wr": 45,
          "el10": 18.24,
          "de10": 4.76,
          "dm10": 9212,
          "he10": 6597,
          "as10": 3.94,
          "wa": 25,
          "ca": 11
        },
        "rankDelta": 1
      },
      "soldier-76": {
        "finalScore": 98.68,
        "battleScore": 31.89,
        "coeff": 1.61,
        "matchCoef": 0.66,
        "gamesPlayed": 18,
        "rankIndex": 5,
        "det": {
          "g": 18,
          "time": 9028,
          "wr": 35,
          "el10": 10.5,
          "de10": 9.24,
          "dm10": 6406,
          "he10": 1316,
          "as10": 1.13,
          "wa": 29,
          "ca": 7
        }
      },
      "sombra": {
        "finalScore": 113.45,
        "battleScore": 39.54,
        "coeff": 1.61,
        "matchCoef": 1.1,
        "gamesPlayed": 60,
        "rankIndex": 5,
        "det": {
          "g": 60,
          "time": 31579,
          "wr": 45,
          "el10": 17.67,
          "de10": 6.08,
          "dm10": 6400,
          "he10": 289,
          "as10": 5.72,
          "wa": 33,
          "ca": 7
        },
        "rankDelta": -1
      },
      "symmetra": {
        "finalScore": 116.02,
        "battleScore": 40.98,
        "coeff": 1.61,
        "matchCoef": 1.15,
        "gamesPlayed": 70,
        "rankIndex": 5,
        "det": {
          "g": 70,
          "time": 35155,
          "wr": 60,
          "el10": 17.03,
          "de10": 6.59,
          "dm10": 7796,
          "he10": 130,
          "as10": 2.82,
          "wa": 36,
          "ca": 0
        }
      },
      "torbjorn": {
        "finalScore": 106.04,
        "battleScore": 43.83,
        "coeff": 1.61,
        "matchCoef": 0.73,
        "gamesPlayed": 22,
        "rankIndex": 5,
        "det": {
          "g": 22,
          "time": 10283,
          "wr": 56,
          "el10": 15.46,
          "de10": 5.84,
          "dm10": 8694,
          "he10": 0,
          "as10": 1.23,
          "wa": 27,
          "ca": 8
        }
      },
      "vendetta": {
        "finalScore": 90,
        "battleScore": 32.2,
        "coeff": 1.61,
        "matchCoef": 0.25,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 757,
          "wr": 0,
          "el10": 10.3,
          "de10": 7.92,
          "dm10": 6417,
          "he10": 0,
          "as10": 0,
          "wa": 0,
          "ca": 0
        }
      },
      "venture": {
        "finalScore": 108.89,
        "battleScore": 45.9,
        "coeff": 1.61,
        "matchCoef": 0.79,
        "gamesPlayed": 26,
        "rankIndex": 5,
        "det": {
          "g": 26,
          "time": 14123,
          "wr": 68,
          "el10": 19.71,
          "de10": 7.09,
          "dm10": 8788,
          "he10": 0,
          "as10": 1.83,
          "wa": 56,
          "ca": 0
        }
      },
      "widowmaker": {
        "finalScore": 122.02,
        "battleScore": 39.15,
        "coeff": 1.61,
        "matchCoef": 1.44,
        "gamesPlayed": 154,
        "rankIndex": 5,
        "det": {
          "g": 154,
          "time": 74977,
          "wr": 45,
          "el10": 14.2,
          "de10": 7.04,
          "dm10": 5568,
          "he10": 0,
          "as10": 2.11,
          "wa": 38,
          "ca": 13
        },
        "rankDelta": 3
      },
      "winston": {
        "finalScore": 124.38,
        "battleScore": 42.49,
        "coeff": 1.61,
        "matchCoef": 1.41,
        "gamesPlayed": 142,
        "rankIndex": 5,
        "det": {
          "g": 142,
          "time": 74338,
          "wr": 49,
          "el10": 19.19,
          "de10": 5.1,
          "dm10": 9422,
          "he10": 386,
          "as10": 3.16,
          "wa": 61,
          "ca": 0
        },
        "rankDelta": -1
      },
      "wrecking-ball": {
        "finalScore": 117.99,
        "battleScore": 41.05,
        "coeff": 1.61,
        "matchCoef": 1.22,
        "gamesPlayed": 85,
        "rankIndex": 5,
        "det": {
          "g": 85,
          "time": 45263,
          "wr": 43,
          "el10": 15.87,
          "de10": 5.83,
          "dm10": 7484,
          "he10": 174,
          "as10": 3.75,
          "wa": 34,
          "ca": 10
        }
      },
      "wuyang": {
        "finalScore": 111.44,
        "battleScore": 35.65,
        "coeff": 1.61,
        "matchCoef": 1.13,
        "gamesPlayed": 66,
        "rankIndex": 5,
        "det": {
          "g": 66,
          "time": 34183,
          "wr": 35,
          "el10": 12.92,
          "de10": 5.06,
          "dm10": 6612,
          "he10": 7634,
          "as10": 8.06,
          "wa": 33,
          "ca": 0
        }
      },
      "zarya": {
        "finalScore": 130.94,
        "battleScore": 45.14,
        "coeff": 1.61,
        "matchCoef": 1.23,
        "gamesPlayed": 88,
        "rankIndex": 5,
        "det": {
          "g": 88,
          "time": 46450,
          "wr": 50,
          "el10": 20.29,
          "de10": 4.68,
          "dm10": 11537,
          "he10": 0,
          "as10": 4.92,
          "wa": 41,
          "ca": 0
        },
        "rankDelta": 1
      },
      "zenyatta": {
        "finalScore": 122.26,
        "battleScore": 40.9,
        "coeff": 1.61,
        "matchCoef": 1.38,
        "gamesPlayed": 133,
        "rankIndex": 5,
        "det": {
          "g": 133,
          "time": 67039,
          "wr": 53,
          "el10": 14.26,
          "de10": 5.84,
          "dm10": 6048,
          "he10": 6505,
          "as10": 15.27,
          "wa": 25,
          "ca": 10
        }
      }
    }
  },
  {
    "id": "p5",
    "name": "monsterlumix",
    "tag": "",
    "endorse": 2,
    "title": null,
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/bd0a417698c574610490db6300f42f8b555b8e870b9bfda47618039b942c97a3.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1c02788d773574ad639a4330d5e6751cec68b6fecbcd4255abc33fc55fe16c7c.png",
    "role": "Tank",
    "ranks": {
      "Tank": {
        "division": "silver",
        "tier": 2,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_SilverTier.305e60dca5e95356ced59825426844cc7cdb4948.png"
      },
      "Damage": null,
      "Support": null
    },
    "rankTier": "Silver 2",
    "overall": {
      "matches": 976,
      "wins": 503,
      "losses": 473,
      "wr": 51.54,
      "kda": 2.3,
      "elim": 13.92,
      "deaths": 6.89,
      "dmg": 8089.97,
      "heal": 3132.62,
      "time": 479154
    },
    "roles": {
      "Tank": {
        "g": 273,
        "w": 131,
        "l": 142,
        "time": 136613,
        "wr": 47.99,
        "kda": 2.8,
        "elim": 17.12,
        "deaths": 6.56,
        "dmg": 10674.37,
        "heal": 1394.71
      },
      "Damage": {
        "g": 342,
        "w": 185,
        "l": 157,
        "time": 166434,
        "wr": 54.09,
        "kda": 1.99,
        "elim": 15.46,
        "deaths": 8.13,
        "dmg": 9902.02,
        "heal": 313.12
      },
      "Support": {
        "g": 361,
        "w": 187,
        "l": 174,
        "time": 176107,
        "wr": 51.8,
        "kda": 2.27,
        "elim": 9.99,
        "deaths": 5.97,
        "dmg": 4372.63,
        "heal": 7145.41
      }
    },
    "heroes": [
      {
        "slug": "ana",
        "n": "Ana",
        "role": "Support",
        "g": 109,
        "wr": 51.38,
        "kda": 2.86
      },
      {
        "slug": "doomfist",
        "n": "Doomfist",
        "role": "Tank",
        "g": 96,
        "wr": 54.17,
        "kda": 2.6
      },
      {
        "slug": "lifeweaver",
        "n": "Lifeweaver",
        "role": "Support",
        "g": 73,
        "wr": 50.68,
        "kda": 1.36
      },
      {
        "slug": "cassidy",
        "n": "Cassidy",
        "role": "Damage",
        "g": 35,
        "wr": 45.71,
        "kda": 1.73
      },
      {
        "slug": "winston",
        "n": "Winston",
        "role": "Tank",
        "g": 29,
        "wr": 44.83,
        "kda": 2.52
      },
      {
        "slug": "moira",
        "n": "Moira",
        "role": "Support",
        "g": 28,
        "wr": 57.14,
        "kda": 3.22
      },
      {
        "slug": "zenyatta",
        "n": "Zenyatta",
        "role": "Support",
        "g": 27,
        "wr": 59.26,
        "kda": 2.83
      },
      {
        "slug": "kiriko",
        "n": "Kiriko",
        "role": "Support",
        "g": 26,
        "wr": 42.31,
        "kda": 1.58
      },
      {
        "slug": "sigma",
        "n": "Sigma",
        "role": "Tank",
        "g": 26,
        "wr": 50,
        "kda": 4.45
      },
      {
        "slug": "brigitte",
        "n": "Brigitte",
        "role": "Support",
        "g": 25,
        "wr": 48,
        "kda": 1.74
      },
      {
        "slug": "genji",
        "n": "Genji",
        "role": "Damage",
        "g": 25,
        "wr": 56,
        "kda": 1.6
      },
      {
        "slug": "reaper",
        "n": "Reaper",
        "role": "Damage",
        "g": 25,
        "wr": 52,
        "kda": 1.95
      },
      {
        "slug": "roadhog",
        "n": "Roadhog",
        "role": "Tank",
        "g": 24,
        "wr": 50,
        "kda": 3.82
      },
      {
        "slug": "bastion",
        "n": "Bastion",
        "role": "Damage",
        "g": 23,
        "wr": 60.87,
        "kda": 2.25
      },
      {
        "slug": "anran",
        "n": "Anran",
        "role": "Damage",
        "g": 21,
        "wr": 52.38,
        "kda": 1.7
      },
      {
        "slug": "soldier-76",
        "n": "Soldier: 76",
        "role": "Damage",
        "g": 21,
        "wr": 52.38,
        "kda": 2.07
      },
      {
        "slug": "ashe",
        "n": "Ashe",
        "role": "Damage",
        "g": 19,
        "wr": 42.11,
        "kda": 2.07
      },
      {
        "slug": "orisa",
        "n": "Orisa",
        "role": "Tank",
        "g": 19,
        "wr": 36.84,
        "kda": 2.7
      },
      {
        "slug": "reinhardt",
        "n": "Reinhardt",
        "role": "Tank",
        "g": 19,
        "wr": 52.63,
        "kda": 2.54
      },
      {
        "slug": "junkrat",
        "n": "Junkrat",
        "role": "Damage",
        "g": 18,
        "wr": 66.67,
        "kda": 2.9
      },
      {
        "slug": "sombra",
        "n": "Sombra",
        "role": "Damage",
        "g": 16,
        "wr": 56.25,
        "kda": 3.42
      },
      {
        "slug": "lucio",
        "n": "Lúcio",
        "role": "Support",
        "g": 15,
        "wr": 66.67,
        "kda": 2.13
      },
      {
        "slug": "baptiste",
        "n": "Baptiste",
        "role": "Support",
        "g": 14,
        "wr": 35.71,
        "kda": 1.48
      },
      {
        "slug": "ramattra",
        "n": "Ramattra",
        "role": "Tank",
        "g": 14,
        "wr": 21.43,
        "kda": 2.68
      },
      {
        "slug": "venture",
        "n": "Venture",
        "role": "Damage",
        "g": 13,
        "wr": 61.54,
        "kda": 1.87
      },
      {
        "slug": "emre",
        "n": "Emre",
        "role": "Damage",
        "g": 12,
        "wr": 41.67,
        "kda": 1.57
      },
      {
        "slug": "hanzo",
        "n": "Hanzo",
        "role": "Damage",
        "g": 12,
        "wr": 83.33,
        "kda": 2.11
      },
      {
        "slug": "mei",
        "n": "Mei",
        "role": "Damage",
        "g": 12,
        "wr": 66.67,
        "kda": 3.13
      },
      {
        "slug": "shion",
        "n": "Shion",
        "role": "Damage",
        "g": 12,
        "wr": 50,
        "kda": 1.84
      },
      {
        "slug": "torbjorn",
        "n": "Torbjörn",
        "role": "Damage",
        "g": 12,
        "wr": 66.67,
        "kda": 2.91
      },
      {
        "slug": "tracer",
        "n": "Tracer",
        "role": "Damage",
        "g": 12,
        "wr": 50,
        "kda": 1.37
      },
      {
        "slug": "echo",
        "n": "Echo",
        "role": "Damage",
        "g": 11,
        "wr": 36.36,
        "kda": 1.57
      },
      {
        "slug": "juno",
        "n": "Juno",
        "role": "Support",
        "g": 10,
        "wr": 60,
        "kda": 2.26
      },
      {
        "slug": "pharah",
        "n": "Pharah",
        "role": "Damage",
        "g": 9,
        "wr": 44.44,
        "kda": 1.65
      },
      {
        "slug": "vendetta",
        "n": "Vendetta",
        "role": "Damage",
        "g": 9,
        "wr": 66.67,
        "kda": 1.18
      },
      {
        "slug": "illari",
        "n": "Illari",
        "role": "Support",
        "g": 8,
        "wr": 50,
        "kda": 2.81
      },
      {
        "slug": "jetpack-cat",
        "n": "Jetpack Cat",
        "role": "Support",
        "g": 8,
        "wr": 50,
        "kda": 2.09
      },
      {
        "slug": "mauga",
        "n": "Mauga",
        "role": "Tank",
        "g": 8,
        "wr": 25,
        "kda": 3.71
      },
      {
        "slug": "wrecking-ball",
        "n": "Wrecking Ball",
        "role": "Tank",
        "g": 8,
        "wr": 50,
        "kda": 2.04
      },
      {
        "slug": "sierra",
        "n": "Sierra",
        "role": "Damage",
        "g": 7,
        "wr": 28.57,
        "kda": 2.53
      },
      {
        "slug": "sojourn",
        "n": "Sojourn",
        "role": "Damage",
        "g": 7,
        "wr": 57.14,
        "kda": 1.78
      },
      {
        "slug": "dva",
        "n": "D.Va",
        "role": "Tank",
        "g": 6,
        "wr": 50,
        "kda": 2.23
      },
      {
        "slug": "junker-queen",
        "n": "Junker Queen",
        "role": "Tank",
        "g": 6,
        "wr": 33.33,
        "kda": 2.09
      },
      {
        "slug": "mercy",
        "n": "Mercy",
        "role": "Support",
        "g": 6,
        "wr": 50,
        "kda": 0.77
      },
      {
        "slug": "mizuki",
        "n": "Mizuki",
        "role": "Support",
        "g": 6,
        "wr": 50,
        "kda": 1.82
      },
      {
        "slug": "wuyang",
        "n": "Wuyang",
        "role": "Support",
        "g": 6,
        "wr": 66.67,
        "kda": 2.12
      },
      {
        "slug": "zarya",
        "n": "Zarya",
        "role": "Tank",
        "g": 6,
        "wr": 33.33,
        "kda": 1.94
      },
      {
        "slug": "domina",
        "n": "Domina",
        "role": "Tank",
        "g": 5,
        "wr": 80,
        "kda": 4.4
      },
      {
        "slug": "freja",
        "n": "Freja",
        "role": "Damage",
        "g": 5,
        "wr": 60,
        "kda": 1.41
      },
      {
        "slug": "hazard",
        "n": "Hazard",
        "role": "Tank",
        "g": 5,
        "wr": 60,
        "kda": 2.5
      },
      {
        "slug": "symmetra",
        "n": "Symmetra",
        "role": "Damage",
        "g": 5,
        "wr": 60,
        "kda": 2.87
      },
      {
        "slug": "dmon",
        "n": "D.Mon",
        "role": "Tank",
        "g": 2,
        "wr": 50,
        "kda": 3.33
      },
      {
        "slug": "widowmaker",
        "n": "Widowmaker",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 2
      }
    ],
    "bscore": {
      "ana": {
        "finalScore": 44.82,
        "battleScore": 39.76,
        "coeff": 1,
        "matchCoef": 1.13,
        "gamesPlayed": 109,
        "rankIndex": 0,
        "det": {
          "g": 109,
          "time": 54489,
          "wr": 52.027522935779814,
          "el10": 10.608623853211009,
          "de10": 6.0449541284403665,
          "dm10": 3841.4495412844035,
          "he10": 5278.743119266055,
          "as10": 11.880275229357798,
          "wa": 45.091743119266056,
          "ca": 0
        },
        "rankDelta": 1
      },
      "doomfist": {
        "finalScore": 50.27,
        "battleScore": 40.93,
        "coeff": 1.1,
        "matchCoef": 1.12,
        "gamesPlayed": 96,
        "rankIndex": 1,
        "det": {
          "g": 96,
          "time": 49342,
          "wr": 53.729166666666664,
          "el10": 17.844375000000003,
          "de10": 6.942708333333333,
          "dm10": 7913.364583333333,
          "he10": 1503.5,
          "as10": 4.333541666666666,
          "wa": 21.947916666666668,
          "ca": 10
        }
      },
      "mauga": {
        "finalScore": 52.07,
        "battleScore": 38.2,
        "coeff": 1.1,
        "matchCoef": 0.95,
        "gamesPlayed": 8,
        "rankIndex": 1,
        "det": {
          "g": 8,
          "time": 3816,
          "wr": 24.75,
          "el10": 21.79625,
          "de10": 7.49625,
          "dm10": 9619.375,
          "he10": 1869.125,
          "as10": 9.04,
          "wa": 29.625,
          "ca": 9.125
        },
        "rankDelta": -1
      },
      "reaper": {
        "finalScore": 56.92,
        "battleScore": 41.3,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 25,
        "rankIndex": 0,
        "det": {
          "g": 25,
          "time": 12484,
          "wr": 52.52,
          "el10": 16.524,
          "de10": 8.4428,
          "dm10": 5845.8,
          "he10": 1182.2,
          "as10": 0.046000000000000006,
          "wa": 27.36,
          "ca": 8.92
        }
      },
      "reinhardt": {
        "finalScore": 45.33,
        "battleScore": 42.21,
        "coeff": 1.1,
        "matchCoef": 0.98,
        "gamesPlayed": 19,
        "rankIndex": 1,
        "det": {
          "g": 19,
          "time": 9933,
          "wr": 53.578947368421055,
          "el10": 15.43157894736842,
          "de10": 7.43157894736842,
          "dm10": 8768.631578947368,
          "he10": 0,
          "as10": 2.6031578947368423,
          "wa": 0,
          "ca": 0
        }
      },
      "sigma": {
        "finalScore": 58.03,
        "battleScore": 44.18,
        "coeff": 1.1,
        "matchCoef": 1,
        "gamesPlayed": 26,
        "rankIndex": 1,
        "det": {
          "g": 26,
          "time": 11636,
          "wr": 48.65384615384615,
          "el10": 17.54346153846154,
          "de10": 4.591153846153846,
          "dm10": 11531.538461538461,
          "he10": 0,
          "as10": 2.9384615384615382,
          "wa": 48.88461538461539,
          "ca": 0
        },
        "rankDelta": -1
      },
      "winston": {
        "finalScore": 41.85,
        "battleScore": 37.56,
        "coeff": 1.1,
        "matchCoef": 1.01,
        "gamesPlayed": 29,
        "rankIndex": 1,
        "det": {
          "g": 29,
          "time": 14084,
          "wr": 40.206896551724135,
          "el10": 15.681724137931035,
          "de10": 6.293103448275862,
          "dm10": 7748.896551724138,
          "he10": 1589.103448275862,
          "as10": 3.397241379310345,
          "wa": 41,
          "ca": 0
        },
        "rankDelta": -2
      },
      "anran": {
        "finalScore": 52.49,
        "battleScore": 40.11,
        "coeff": 1,
        "matchCoef": 0.99,
        "gamesPlayed": 21,
        "rankIndex": 0,
        "det": {
          "g": 21,
          "time": 11331,
          "wr": 53,
          "el10": 15.94,
          "de10": 9.37,
          "dm10": 6767,
          "he10": 624,
          "as10": 0,
          "wa": 29,
          "ca": 11
        },
        "rankDelta": 1
      },
      "ashe": {
        "finalScore": 37.02,
        "battleScore": 37.92,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 19,
        "rankIndex": 0,
        "det": {
          "g": 19,
          "time": 8335,
          "wr": 45,
          "el10": 15.04,
          "de10": 7.27,
          "dm10": 7354,
          "he10": 0,
          "as10": 3.38,
          "wa": 35,
          "ca": 11
        },
        "rankDelta": -4
      },
      "baptiste": {
        "finalScore": 33.11,
        "battleScore": 34.86,
        "coeff": 1,
        "matchCoef": 0.95,
        "gamesPlayed": 14,
        "rankIndex": 0,
        "det": {
          "g": 14,
          "time": 5927,
          "wr": 40,
          "el10": 8.2,
          "de10": 6.38,
          "dm10": 3436,
          "he10": 7710,
          "as10": 9.72,
          "wa": 27,
          "ca": 8
        }
      },
      "bastion": {
        "finalScore": 63.21,
        "battleScore": 43.47,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 23,
        "rankIndex": 0,
        "det": {
          "g": 23,
          "time": 11646,
          "wr": 60,
          "el10": 17.05,
          "de10": 7.57,
          "dm10": 9622,
          "he10": 166,
          "as10": 1.75,
          "wa": 26,
          "ca": 2
        },
        "rankDelta": 2
      },
      "brigitte": {
        "finalScore": 36.39,
        "battleScore": 36.39,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 25,
        "rankIndex": 0,
        "det": {
          "g": 25,
          "time": 11996,
          "wr": 47,
          "el10": 9.8,
          "de10": 8.1,
          "dm10": 3687,
          "he10": 6649,
          "as10": 15.35,
          "wa": 0,
          "ca": 0
        }
      },
      "cassidy": {
        "finalScore": 38.9,
        "battleScore": 37.8,
        "coeff": 1,
        "matchCoef": 1.03,
        "gamesPlayed": 35,
        "rankIndex": 0,
        "det": {
          "g": 35,
          "time": 17601,
          "wr": 46,
          "el10": 14.25,
          "de10": 8.25,
          "dm10": 7081,
          "he10": 11.62,
          "as10": 2.05,
          "wa": 38,
          "ca": 7
        },
        "rankDelta": 1
      },
      "dmon": {
        "finalScore": 38.44,
        "battleScore": 41.11,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 1,
        "det": {
          "g": 2,
          "time": 1335,
          "wr": 41,
          "el10": 17.97,
          "de10": 5.39,
          "dm10": 8453,
          "he10": 188,
          "as10": 3.15,
          "wa": 21,
          "ca": 0
        }
      },
      "domina": {
        "finalScore": 42.17,
        "battleScore": 44.54,
        "coeff": 1.1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 1,
        "det": {
          "g": 5,
          "time": 2052,
          "wr": 79,
          "el10": 19.3,
          "de10": 4.39,
          "dm10": 8214,
          "he10": 992,
          "as10": 1.46,
          "wa": 35,
          "ca": 15
        },
        "rankDelta": 1
      },
      "dva": {
        "finalScore": 37.09,
        "battleScore": 38.47,
        "coeff": 1.1,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 1,
        "det": {
          "g": 6,
          "time": 2846,
          "wr": 44,
          "el10": 14.55,
          "de10": 6.53,
          "dm10": 7071,
          "he10": 1357,
          "as10": 6.53,
          "wa": 23,
          "ca": 8
        },
        "rankDelta": 1
      },
      "echo": {
        "finalScore": 33.99,
        "battleScore": 36.59,
        "coeff": 1,
        "matchCoef": 0.93,
        "gamesPlayed": 11,
        "rankIndex": 0,
        "det": {
          "g": 11,
          "time": 5516,
          "wr": 39,
          "el10": 14.68,
          "de10": 9.35,
          "dm10": 7229,
          "he10": 213,
          "as10": 0.44,
          "wa": 25,
          "ca": 11
        },
        "rankDelta": -1
      },
      "emre": {
        "finalScore": 31.18,
        "battleScore": 33.29,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 0,
        "det": {
          "g": 12,
          "time": 5240,
          "wr": 42,
          "el10": 13.51,
          "de10": 8.59,
          "dm10": 7787,
          "he10": 618,
          "as10": 0,
          "wa": 27,
          "ca": 10
        },
        "rankDelta": -3
      },
      "freja": {
        "finalScore": 31.88,
        "battleScore": 37.04,
        "coeff": 1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2447,
          "wr": 57,
          "el10": 11.03,
          "de10": 7.85,
          "dm10": 8276,
          "he10": 62.6,
          "as10": 0,
          "wa": 29,
          "ca": 5
        },
        "rankDelta": 2
      },
      "genji": {
        "finalScore": 40,
        "battleScore": 40,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 25,
        "rankIndex": 0,
        "det": {
          "g": 25,
          "time": 12277,
          "wr": 56,
          "el10": 13.49,
          "de10": 8.45,
          "dm10": 5304,
          "he10": 157,
          "as10": 0.1,
          "wa": 25,
          "ca": 9
        },
        "rankDelta": 1
      },
      "hazard": {
        "finalScore": 38.58,
        "battleScore": 40.75,
        "coeff": 1.1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 1,
        "det": {
          "g": 5,
          "time": 2102,
          "wr": 46,
          "el10": 15.7,
          "de10": 6.28,
          "dm10": 9532,
          "he10": 1299,
          "as10": 2.85,
          "wa": 30,
          "ca": 7
        }
      },
      "hanzo": {
        "finalScore": 40.87,
        "battleScore": 43.64,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 0,
        "det": {
          "g": 12,
          "time": 5073,
          "wr": 82,
          "el10": 13.72,
          "de10": 6.51,
          "dm10": 7315,
          "he10": 0,
          "as10": 3.9,
          "wa": 21,
          "ca": 7
        }
      },
      "illari": {
        "finalScore": 37.4,
        "battleScore": 41.5,
        "coeff": 1,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 0,
        "det": {
          "g": 8,
          "time": 3766,
          "wr": 58,
          "el10": 12.75,
          "de10": 5.1,
          "dm10": 5134,
          "he10": 7872,
          "as10": 9.24,
          "wa": 38,
          "ca": 12
        },
        "rankDelta": -8
      },
      "jetpack-cat": {
        "finalScore": 35.08,
        "battleScore": 38.92,
        "coeff": 1,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 0,
        "det": {
          "g": 8,
          "time": 3768,
          "wr": 50,
          "el10": 11.78,
          "de10": 7.17,
          "dm10": 3337,
          "he10": 6059,
          "as10": 8.12,
          "wa": 31,
          "ca": 7
        },
        "rankDelta": 1
      },
      "junker-queen": {
        "finalScore": 37.61,
        "battleScore": 39.01,
        "coeff": 1.1,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 1,
        "det": {
          "g": 6,
          "time": 3826,
          "wr": 42,
          "el10": 15.37,
          "de10": 7.37,
          "dm10": 8079,
          "he10": 2370,
          "as10": 7.84,
          "wa": 29,
          "ca": 8
        },
        "rankDelta": -1
      },
      "junkrat": {
        "finalScore": 44.04,
        "battleScore": 45.33,
        "coeff": 1,
        "matchCoef": 0.97,
        "gamesPlayed": 18,
        "rankIndex": 0,
        "det": {
          "g": 18,
          "time": 7546,
          "wr": 65,
          "el10": 16.38,
          "de10": 6.68,
          "dm10": 10489,
          "he10": 0,
          "as10": 3.02,
          "wa": 30,
          "ca": 0
        },
        "rankDelta": -1
      },
      "juno": {
        "finalScore": 37.09,
        "battleScore": 40.29,
        "coeff": 1,
        "matchCoef": 0.92,
        "gamesPlayed": 10,
        "rankIndex": 0,
        "det": {
          "g": 10,
          "time": 5299,
          "wr": 56,
          "el10": 12,
          "de10": 5.32,
          "dm10": 3517,
          "he10": 7092,
          "as10": 9.74,
          "wa": 33,
          "ca": 4
        },
        "rankDelta": 1
      },
      "kiriko": {
        "finalScore": 34.44,
        "battleScore": 34.33,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 26,
        "rankIndex": 0,
        "det": {
          "g": 26,
          "time": 14616,
          "wr": 41,
          "el10": 5.75,
          "de10": 5.54,
          "dm10": 2225,
          "he10": 7759,
          "as10": 14.41,
          "wa": 27,
          "ca": 12
        },
        "rankDelta": 2
      },
      "lifeweaver": {
        "finalScore": 43.26,
        "battleScore": 39.59,
        "coeff": 1,
        "matchCoef": 1.09,
        "gamesPlayed": 73,
        "rankIndex": 0,
        "det": {
          "g": 73,
          "time": 34589,
          "wr": 50,
          "el10": 5.26,
          "de10": 4.25,
          "dm10": 1438,
          "he10": 9482,
          "as10": 14.26,
          "wa": 27,
          "ca": 12
        },
        "rankDelta": 2
      },
      "lucio": {
        "finalScore": 39.72,
        "battleScore": 41.56,
        "coeff": 1,
        "matchCoef": 0.96,
        "gamesPlayed": 15,
        "rankIndex": 0,
        "det": {
          "g": 15,
          "time": 7644,
          "wr": 65,
          "el10": 12.48,
          "de10": 7.77,
          "dm10": 3136,
          "he10": 8561,
          "as10": 9.34,
          "wa": 26,
          "ca": 8
        },
        "rankDelta": 1
      },
      "mei": {
        "finalScore": 39.31,
        "battleScore": 41.97,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 0,
        "det": {
          "g": 12,
          "time": 6121,
          "wr": 65,
          "el10": 17.15,
          "de10": 7.45,
          "dm10": 6490,
          "he10": 1248,
          "as10": 6.18,
          "wa": 47,
          "ca": 0
        },
        "rankDelta": 1
      },
      "mercy": {
        "finalScore": 29.46,
        "battleScore": 33.62,
        "coeff": 1,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 0,
        "det": {
          "g": 6,
          "time": 2394,
          "wr": 44,
          "el10": 0.75,
          "de10": 9.77,
          "dm10": 127,
          "he10": 6448,
          "as10": 14.79,
          "wa": 18,
          "ca": 4
        }
      },
      "mizuki": {
        "finalScore": 35.66,
        "battleScore": 40.69,
        "coeff": 1,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 0,
        "det": {
          "g": 6,
          "time": 2921,
          "wr": 48,
          "el10": 12.74,
          "de10": 6.98,
          "dm10": 4813,
          "he10": 9054,
          "as10": 15.61,
          "wa": 26,
          "ca": 6
        },
        "rankDelta": 2
      },
      "moira": {
        "finalScore": 60.42,
        "battleScore": 43.97,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 28,
        "rankIndex": 0,
        "det": {
          "g": 28,
          "time": 13654,
          "wr": 58,
          "el10": 19.51,
          "de10": 6.06,
          "dm10": 5805,
          "he10": 7823,
          "as10": 12.22,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": -1
      },
      "orisa": {
        "finalScore": 38.4,
        "battleScore": 35.75,
        "coeff": 1.1,
        "matchCoef": 0.98,
        "gamesPlayed": 19,
        "rankIndex": 1,
        "det": {
          "g": 19,
          "time": 9427,
          "wr": 38,
          "el10": 16.74,
          "de10": 7.13,
          "dm10": 10451,
          "he10": 0,
          "as10": 2.86,
          "wa": 32,
          "ca": 10
        },
        "rankDelta": 3
      },
      "pharah": {
        "finalScore": 31.8,
        "battleScore": 34.88,
        "coeff": 1,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 0,
        "det": {
          "g": 9,
          "time": 4742,
          "wr": 41,
          "el10": 15.06,
          "de10": 9.11,
          "dm10": 7824,
          "he10": 0,
          "as10": 2.4,
          "wa": 42,
          "ca": 0
        },
        "rankDelta": -1
      },
      "ramattra": {
        "finalScore": 49.71,
        "battleScore": 35.37,
        "coeff": 1.1,
        "matchCoef": 0.97,
        "gamesPlayed": 14,
        "rankIndex": 1,
        "det": {
          "g": 14,
          "time": 7056,
          "wr": 22,
          "el10": 15.22,
          "de10": 6.72,
          "dm10": 9991,
          "he10": 272,
          "as10": 2.04,
          "wa": 25,
          "ca": 12
        },
        "rankDelta": 1
      },
      "roadhog": {
        "finalScore": 47.53,
        "battleScore": 43.36,
        "coeff": 1.1,
        "matchCoef": 1,
        "gamesPlayed": 24,
        "rankIndex": 1,
        "det": {
          "g": 24,
          "time": 10747,
          "wr": 52,
          "el10": 18.54,
          "de10": 5.75,
          "dm10": 7396,
          "he10": 5933,
          "as10": 3.68,
          "wa": 21,
          "ca": 15
        },
        "rankDelta": -1
      },
      "shion": {
        "finalScore": 35.61,
        "battleScore": 38.02,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 0,
        "det": {
          "g": 12,
          "time": 5451,
          "wr": 51,
          "el10": 15.19,
          "de10": 8.25,
          "dm10": 6822,
          "he10": 70.71,
          "as10": 2.97,
          "wa": 25,
          "ca": 13
        },
        "rankDelta": -1
      },
      "sierra": {
        "finalScore": 33.85,
        "battleScore": 38.04,
        "coeff": 1,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 0,
        "det": {
          "g": 7,
          "time": 3731,
          "wr": 35,
          "el10": 19.14,
          "de10": 7.56,
          "dm10": 9272,
          "he10": 0,
          "as10": 0.64,
          "wa": 27,
          "ca": 8
        },
        "rankDelta": -1
      },
      "sojourn": {
        "finalScore": 32.79,
        "battleScore": 36.85,
        "coeff": 1,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 0,
        "det": {
          "g": 7,
          "time": 3043,
          "wr": 47,
          "el10": 14.39,
          "de10": 8.08,
          "dm10": 8479,
          "he10": 0,
          "as10": 0.79,
          "wa": 25,
          "ca": 10
        },
        "rankDelta": -1
      },
      "soldier-76": {
        "finalScore": 36.2,
        "battleScore": 36.75,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 21,
        "rankIndex": 0,
        "det": {
          "g": 21,
          "time": 9559,
          "wr": 53,
          "el10": 15.57,
          "de10": 7.53,
          "dm10": 7374,
          "he10": 1156,
          "as10": 1.07,
          "wa": 27,
          "ca": 8
        }
      },
      "sombra": {
        "finalScore": 40,
        "battleScore": 41.61,
        "coeff": 1,
        "matchCoef": 0.96,
        "gamesPlayed": 16,
        "rankIndex": 0,
        "det": {
          "g": 16,
          "time": 8271,
          "wr": 58,
          "el10": 17.19,
          "de10": 6.96,
          "dm10": 5867,
          "he10": 138,
          "as10": 6.6,
          "wa": 33,
          "ca": 8
        },
        "rankDelta": -1
      },
      "symmetra": {
        "finalScore": 39.08,
        "battleScore": 45.41,
        "coeff": 1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2170,
          "wr": 66,
          "el10": 18.25,
          "de10": 6.36,
          "dm10": 7763,
          "he10": 305,
          "as10": 5.81,
          "wa": 36,
          "ca": 0
        },
        "rankDelta": 6
      },
      "torbjorn": {
        "finalScore": 40.55,
        "battleScore": 43.3,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 0,
        "det": {
          "g": 12,
          "time": 5543,
          "wr": 67,
          "el10": 18.29,
          "de10": 6.17,
          "dm10": 9511,
          "he10": 0,
          "as10": 0.76,
          "wa": 22,
          "ca": 7
        }
      },
      "tracer": {
        "finalScore": 32.2,
        "battleScore": 34.38,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 0,
        "det": {
          "g": 12,
          "time": 6285,
          "wr": 46,
          "el10": 12.41,
          "de10": 9.07,
          "dm10": 4352,
          "he10": 20.6,
          "as10": 0,
          "wa": 25,
          "ca": 8
        },
        "rankDelta": -1
      },
      "vendetta": {
        "finalScore": 37.92,
        "battleScore": 41.6,
        "coeff": 1,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 0,
        "det": {
          "g": 9,
          "time": 4471,
          "wr": 62,
          "el10": 14.36,
          "de10": 12.21,
          "dm10": 6552,
          "he10": 153,
          "as10": 2.55,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": 3
      },
      "venture": {
        "finalScore": 38.84,
        "battleScore": 41.17,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 0,
        "det": {
          "g": 13,
          "time": 6845,
          "wr": 59,
          "el10": 17,
          "de10": 9.12,
          "dm10": 6723,
          "he10": 0,
          "as10": 1.49,
          "wa": 48,
          "ca": 0
        },
        "rankDelta": -4
      },
      "widowmaker": {
        "finalScore": 32.88,
        "battleScore": 38.68,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 638,
          "wr": 0,
          "el10": 15.06,
          "de10": 7.53,
          "dm10": 8306,
          "he10": 0,
          "as10": 6.59,
          "wa": 33,
          "ca": 8
        },
        "rankDelta": 4
      },
      "wrecking-ball": {
        "finalScore": 38.52,
        "battleScore": 38.85,
        "coeff": 1.1,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 1,
        "det": {
          "g": 8,
          "time": 4357,
          "wr": 50,
          "el10": 15.42,
          "de10": 7.57,
          "dm10": 6998,
          "he10": 172,
          "as10": 3.72,
          "wa": 31,
          "ca": 12
        }
      },
      "wuyang": {
        "finalScore": 34.68,
        "battleScore": 39.57,
        "coeff": 1,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 0,
        "det": {
          "g": 6,
          "time": 2553,
          "wr": 72,
          "el10": 12.93,
          "de10": 6.11,
          "dm10": 5127,
          "he10": 7248,
          "as10": 10.11,
          "wa": 27,
          "ca": 0
        },
        "rankDelta": -2
      },
      "zarya": {
        "finalScore": 46.49,
        "battleScore": 35.36,
        "coeff": 1.1,
        "matchCoef": 0.94,
        "gamesPlayed": 6,
        "rankIndex": 1,
        "det": {
          "g": 6,
          "time": 3031,
          "wr": 32,
          "el10": 12.87,
          "de10": 7.13,
          "dm10": 8191,
          "he10": 0,
          "as10": 3.96,
          "wa": 36,
          "ca": 0
        }
      },
      "zenyatta": {
        "finalScore": 43.14,
        "battleScore": 42.86,
        "coeff": 1,
        "matchCoef": 1.01,
        "gamesPlayed": 27,
        "rankIndex": 0,
        "det": {
          "g": 27,
          "time": 12491,
          "wr": 61,
          "el10": 12.83,
          "de10": 6.68,
          "dm10": 5947,
          "he10": 6469,
          "as10": 16.52,
          "wa": 26,
          "ca": 13
        },
        "rankDelta": -1
      }
    },
    "bscoreAll": {
      "ana": {
        "finalScore": 44.82,
        "battleScore": 39.76,
        "coeff": 1,
        "matchCoef": 1.13,
        "gamesPlayed": 109,
        "rankIndex": 0,
        "det": {
          "g": 109,
          "time": 54489,
          "wr": 52.027522935779814,
          "el10": 10.608623853211009,
          "de10": 6.0449541284403665,
          "dm10": 3841.4495412844035,
          "he10": 5278.743119266055,
          "as10": 11.880275229357798,
          "wa": 45.091743119266056,
          "ca": 0
        },
        "rankDelta": 1
      },
      "doomfist": {
        "finalScore": 50.27,
        "battleScore": 40.93,
        "coeff": 1.1,
        "matchCoef": 1.12,
        "gamesPlayed": 96,
        "rankIndex": 1,
        "det": {
          "g": 96,
          "time": 49342,
          "wr": 53.729166666666664,
          "el10": 17.844375000000003,
          "de10": 6.942708333333333,
          "dm10": 7913.364583333333,
          "he10": 1503.5,
          "as10": 4.333541666666666,
          "wa": 21.947916666666668,
          "ca": 10
        }
      },
      "mauga": {
        "finalScore": 52.07,
        "battleScore": 38.2,
        "coeff": 1.1,
        "matchCoef": 0.95,
        "gamesPlayed": 8,
        "rankIndex": 1,
        "det": {
          "g": 8,
          "time": 3816,
          "wr": 24.75,
          "el10": 21.79625,
          "de10": 7.49625,
          "dm10": 9619.375,
          "he10": 1869.125,
          "as10": 9.04,
          "wa": 29.625,
          "ca": 9.125
        },
        "rankDelta": -1
      },
      "reaper": {
        "finalScore": 56.92,
        "battleScore": 41.3,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 25,
        "rankIndex": 0,
        "det": {
          "g": 25,
          "time": 12484,
          "wr": 52.52,
          "el10": 16.524,
          "de10": 8.4428,
          "dm10": 5845.8,
          "he10": 1182.2,
          "as10": 0.046000000000000006,
          "wa": 27.36,
          "ca": 8.92
        }
      },
      "reinhardt": {
        "finalScore": 45.33,
        "battleScore": 42.21,
        "coeff": 1.1,
        "matchCoef": 0.98,
        "gamesPlayed": 19,
        "rankIndex": 1,
        "det": {
          "g": 19,
          "time": 9933,
          "wr": 53.578947368421055,
          "el10": 15.43157894736842,
          "de10": 7.43157894736842,
          "dm10": 8768.631578947368,
          "he10": 0,
          "as10": 2.6031578947368423,
          "wa": 0,
          "ca": 0
        }
      },
      "sigma": {
        "finalScore": 58.03,
        "battleScore": 44.18,
        "coeff": 1.1,
        "matchCoef": 1,
        "gamesPlayed": 26,
        "rankIndex": 1,
        "det": {
          "g": 26,
          "time": 11636,
          "wr": 48.65384615384615,
          "el10": 17.54346153846154,
          "de10": 4.591153846153846,
          "dm10": 11531.538461538461,
          "he10": 0,
          "as10": 2.9384615384615382,
          "wa": 48.88461538461539,
          "ca": 0
        },
        "rankDelta": -1
      },
      "winston": {
        "finalScore": 41.85,
        "battleScore": 37.56,
        "coeff": 1.1,
        "matchCoef": 1.01,
        "gamesPlayed": 29,
        "rankIndex": 1,
        "det": {
          "g": 29,
          "time": 14084,
          "wr": 40.206896551724135,
          "el10": 15.681724137931035,
          "de10": 6.293103448275862,
          "dm10": 7748.896551724138,
          "he10": 1589.103448275862,
          "as10": 3.397241379310345,
          "wa": 41,
          "ca": 0
        },
        "rankDelta": -2
      },
      "anran": {
        "finalScore": 52.49,
        "battleScore": 40.11,
        "coeff": 1,
        "matchCoef": 0.99,
        "gamesPlayed": 21,
        "rankIndex": 0,
        "det": {
          "g": 21,
          "time": 11331,
          "wr": 53,
          "el10": 15.94,
          "de10": 9.37,
          "dm10": 6767,
          "he10": 624,
          "as10": 0,
          "wa": 29,
          "ca": 11
        },
        "rankDelta": 1
      },
      "ashe": {
        "finalScore": 37.02,
        "battleScore": 37.92,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 19,
        "rankIndex": 0,
        "det": {
          "g": 19,
          "time": 8335,
          "wr": 45,
          "el10": 15.04,
          "de10": 7.27,
          "dm10": 7354,
          "he10": 0,
          "as10": 3.38,
          "wa": 35,
          "ca": 11
        },
        "rankDelta": -4
      },
      "baptiste": {
        "finalScore": 33.11,
        "battleScore": 34.86,
        "coeff": 1,
        "matchCoef": 0.95,
        "gamesPlayed": 14,
        "rankIndex": 0,
        "det": {
          "g": 14,
          "time": 5927,
          "wr": 40,
          "el10": 8.2,
          "de10": 6.38,
          "dm10": 3436,
          "he10": 7710,
          "as10": 9.72,
          "wa": 27,
          "ca": 8
        }
      },
      "bastion": {
        "finalScore": 63.21,
        "battleScore": 43.47,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 23,
        "rankIndex": 0,
        "det": {
          "g": 23,
          "time": 11646,
          "wr": 60,
          "el10": 17.05,
          "de10": 7.57,
          "dm10": 9622,
          "he10": 166,
          "as10": 1.75,
          "wa": 26,
          "ca": 2
        },
        "rankDelta": 2
      },
      "brigitte": {
        "finalScore": 36.39,
        "battleScore": 36.39,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 25,
        "rankIndex": 0,
        "det": {
          "g": 25,
          "time": 11996,
          "wr": 47,
          "el10": 9.8,
          "de10": 8.1,
          "dm10": 3687,
          "he10": 6649,
          "as10": 15.35,
          "wa": 0,
          "ca": 0
        }
      },
      "cassidy": {
        "finalScore": 38.9,
        "battleScore": 37.8,
        "coeff": 1,
        "matchCoef": 1.03,
        "gamesPlayed": 35,
        "rankIndex": 0,
        "det": {
          "g": 35,
          "time": 17601,
          "wr": 46,
          "el10": 14.25,
          "de10": 8.25,
          "dm10": 7081,
          "he10": 11.62,
          "as10": 2.05,
          "wa": 38,
          "ca": 7
        },
        "rankDelta": 1
      },
      "dmon": {
        "finalScore": 38.44,
        "battleScore": 41.11,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 1,
        "det": {
          "g": 2,
          "time": 1335,
          "wr": 41,
          "el10": 17.97,
          "de10": 5.39,
          "dm10": 8453,
          "he10": 188,
          "as10": 3.15,
          "wa": 21,
          "ca": 0
        }
      },
      "domina": {
        "finalScore": 42.17,
        "battleScore": 44.54,
        "coeff": 1.1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 1,
        "det": {
          "g": 5,
          "time": 2052,
          "wr": 79,
          "el10": 19.3,
          "de10": 4.39,
          "dm10": 8214,
          "he10": 992,
          "as10": 1.46,
          "wa": 35,
          "ca": 15
        },
        "rankDelta": 1
      },
      "dva": {
        "finalScore": 37.09,
        "battleScore": 38.47,
        "coeff": 1.1,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 1,
        "det": {
          "g": 6,
          "time": 2846,
          "wr": 44,
          "el10": 14.55,
          "de10": 6.53,
          "dm10": 7071,
          "he10": 1357,
          "as10": 6.53,
          "wa": 23,
          "ca": 8
        },
        "rankDelta": 1
      },
      "echo": {
        "finalScore": 33.99,
        "battleScore": 36.59,
        "coeff": 1,
        "matchCoef": 0.93,
        "gamesPlayed": 11,
        "rankIndex": 0,
        "det": {
          "g": 11,
          "time": 5516,
          "wr": 39,
          "el10": 14.68,
          "de10": 9.35,
          "dm10": 7229,
          "he10": 213,
          "as10": 0.44,
          "wa": 25,
          "ca": 11
        },
        "rankDelta": -1
      },
      "emre": {
        "finalScore": 31.18,
        "battleScore": 33.29,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 0,
        "det": {
          "g": 12,
          "time": 5240,
          "wr": 42,
          "el10": 13.51,
          "de10": 8.59,
          "dm10": 7787,
          "he10": 618,
          "as10": 0,
          "wa": 27,
          "ca": 10
        },
        "rankDelta": -3
      },
      "freja": {
        "finalScore": 31.88,
        "battleScore": 37.04,
        "coeff": 1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2447,
          "wr": 57,
          "el10": 11.03,
          "de10": 7.85,
          "dm10": 8276,
          "he10": 62.6,
          "as10": 0,
          "wa": 29,
          "ca": 5
        },
        "rankDelta": 2
      },
      "genji": {
        "finalScore": 40,
        "battleScore": 40,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 25,
        "rankIndex": 0,
        "det": {
          "g": 25,
          "time": 12277,
          "wr": 56,
          "el10": 13.49,
          "de10": 8.45,
          "dm10": 5304,
          "he10": 157,
          "as10": 0.1,
          "wa": 25,
          "ca": 9
        },
        "rankDelta": 1
      },
      "hazard": {
        "finalScore": 38.58,
        "battleScore": 40.75,
        "coeff": 1.1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 1,
        "det": {
          "g": 5,
          "time": 2102,
          "wr": 46,
          "el10": 15.7,
          "de10": 6.28,
          "dm10": 9532,
          "he10": 1299,
          "as10": 2.85,
          "wa": 30,
          "ca": 7
        }
      },
      "hanzo": {
        "finalScore": 40.87,
        "battleScore": 43.64,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 0,
        "det": {
          "g": 12,
          "time": 5073,
          "wr": 82,
          "el10": 13.72,
          "de10": 6.51,
          "dm10": 7315,
          "he10": 0,
          "as10": 3.9,
          "wa": 21,
          "ca": 7
        }
      },
      "illari": {
        "finalScore": 37.4,
        "battleScore": 41.5,
        "coeff": 1,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 0,
        "det": {
          "g": 8,
          "time": 3766,
          "wr": 58,
          "el10": 12.75,
          "de10": 5.1,
          "dm10": 5134,
          "he10": 7872,
          "as10": 9.24,
          "wa": 38,
          "ca": 12
        },
        "rankDelta": -8
      },
      "jetpack-cat": {
        "finalScore": 35.08,
        "battleScore": 38.92,
        "coeff": 1,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 0,
        "det": {
          "g": 8,
          "time": 3768,
          "wr": 50,
          "el10": 11.78,
          "de10": 7.17,
          "dm10": 3337,
          "he10": 6059,
          "as10": 8.12,
          "wa": 31,
          "ca": 7
        },
        "rankDelta": 1
      },
      "junker-queen": {
        "finalScore": 37.61,
        "battleScore": 39.01,
        "coeff": 1.1,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 1,
        "det": {
          "g": 6,
          "time": 3826,
          "wr": 42,
          "el10": 15.37,
          "de10": 7.37,
          "dm10": 8079,
          "he10": 2370,
          "as10": 7.84,
          "wa": 29,
          "ca": 8
        },
        "rankDelta": -1
      },
      "junkrat": {
        "finalScore": 44.04,
        "battleScore": 45.33,
        "coeff": 1,
        "matchCoef": 0.97,
        "gamesPlayed": 18,
        "rankIndex": 0,
        "det": {
          "g": 18,
          "time": 7546,
          "wr": 65,
          "el10": 16.38,
          "de10": 6.68,
          "dm10": 10489,
          "he10": 0,
          "as10": 3.02,
          "wa": 30,
          "ca": 0
        },
        "rankDelta": -1
      },
      "juno": {
        "finalScore": 37.09,
        "battleScore": 40.29,
        "coeff": 1,
        "matchCoef": 0.92,
        "gamesPlayed": 10,
        "rankIndex": 0,
        "det": {
          "g": 10,
          "time": 5299,
          "wr": 56,
          "el10": 12,
          "de10": 5.32,
          "dm10": 3517,
          "he10": 7092,
          "as10": 9.74,
          "wa": 33,
          "ca": 4
        },
        "rankDelta": 1
      },
      "kiriko": {
        "finalScore": 34.44,
        "battleScore": 34.33,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 26,
        "rankIndex": 0,
        "det": {
          "g": 26,
          "time": 14616,
          "wr": 41,
          "el10": 5.75,
          "de10": 5.54,
          "dm10": 2225,
          "he10": 7759,
          "as10": 14.41,
          "wa": 27,
          "ca": 12
        },
        "rankDelta": 2
      },
      "lifeweaver": {
        "finalScore": 43.26,
        "battleScore": 39.59,
        "coeff": 1,
        "matchCoef": 1.09,
        "gamesPlayed": 73,
        "rankIndex": 0,
        "det": {
          "g": 73,
          "time": 34589,
          "wr": 50,
          "el10": 5.26,
          "de10": 4.25,
          "dm10": 1438,
          "he10": 9482,
          "as10": 14.26,
          "wa": 27,
          "ca": 12
        },
        "rankDelta": 2
      },
      "lucio": {
        "finalScore": 39.72,
        "battleScore": 41.56,
        "coeff": 1,
        "matchCoef": 0.96,
        "gamesPlayed": 15,
        "rankIndex": 0,
        "det": {
          "g": 15,
          "time": 7644,
          "wr": 65,
          "el10": 12.48,
          "de10": 7.77,
          "dm10": 3136,
          "he10": 8561,
          "as10": 9.34,
          "wa": 26,
          "ca": 8
        },
        "rankDelta": 1
      },
      "mei": {
        "finalScore": 39.31,
        "battleScore": 41.97,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 0,
        "det": {
          "g": 12,
          "time": 6121,
          "wr": 65,
          "el10": 17.15,
          "de10": 7.45,
          "dm10": 6490,
          "he10": 1248,
          "as10": 6.18,
          "wa": 47,
          "ca": 0
        },
        "rankDelta": 1
      },
      "mercy": {
        "finalScore": 29.46,
        "battleScore": 33.62,
        "coeff": 1,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 0,
        "det": {
          "g": 6,
          "time": 2394,
          "wr": 44,
          "el10": 0.75,
          "de10": 9.77,
          "dm10": 127,
          "he10": 6448,
          "as10": 14.79,
          "wa": 18,
          "ca": 4
        }
      },
      "mizuki": {
        "finalScore": 35.66,
        "battleScore": 40.69,
        "coeff": 1,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 0,
        "det": {
          "g": 6,
          "time": 2921,
          "wr": 48,
          "el10": 12.74,
          "de10": 6.98,
          "dm10": 4813,
          "he10": 9054,
          "as10": 15.61,
          "wa": 26,
          "ca": 6
        },
        "rankDelta": 2
      },
      "moira": {
        "finalScore": 60.42,
        "battleScore": 43.97,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 28,
        "rankIndex": 0,
        "det": {
          "g": 28,
          "time": 13654,
          "wr": 58,
          "el10": 19.51,
          "de10": 6.06,
          "dm10": 5805,
          "he10": 7823,
          "as10": 12.22,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": -1
      },
      "orisa": {
        "finalScore": 38.4,
        "battleScore": 35.75,
        "coeff": 1.1,
        "matchCoef": 0.98,
        "gamesPlayed": 19,
        "rankIndex": 1,
        "det": {
          "g": 19,
          "time": 9427,
          "wr": 38,
          "el10": 16.74,
          "de10": 7.13,
          "dm10": 10451,
          "he10": 0,
          "as10": 2.86,
          "wa": 32,
          "ca": 10
        },
        "rankDelta": 3
      },
      "pharah": {
        "finalScore": 31.8,
        "battleScore": 34.88,
        "coeff": 1,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 0,
        "det": {
          "g": 9,
          "time": 4742,
          "wr": 41,
          "el10": 15.06,
          "de10": 9.11,
          "dm10": 7824,
          "he10": 0,
          "as10": 2.4,
          "wa": 42,
          "ca": 0
        },
        "rankDelta": -1
      },
      "ramattra": {
        "finalScore": 49.71,
        "battleScore": 35.37,
        "coeff": 1.1,
        "matchCoef": 0.97,
        "gamesPlayed": 14,
        "rankIndex": 1,
        "det": {
          "g": 14,
          "time": 7056,
          "wr": 22,
          "el10": 15.22,
          "de10": 6.72,
          "dm10": 9991,
          "he10": 272,
          "as10": 2.04,
          "wa": 25,
          "ca": 12
        },
        "rankDelta": 1
      },
      "roadhog": {
        "finalScore": 47.53,
        "battleScore": 43.36,
        "coeff": 1.1,
        "matchCoef": 1,
        "gamesPlayed": 24,
        "rankIndex": 1,
        "det": {
          "g": 24,
          "time": 10747,
          "wr": 52,
          "el10": 18.54,
          "de10": 5.75,
          "dm10": 7396,
          "he10": 5933,
          "as10": 3.68,
          "wa": 21,
          "ca": 15
        },
        "rankDelta": -1
      },
      "shion": {
        "finalScore": 35.61,
        "battleScore": 38.02,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 0,
        "det": {
          "g": 12,
          "time": 5451,
          "wr": 51,
          "el10": 15.19,
          "de10": 8.25,
          "dm10": 6822,
          "he10": 70.71,
          "as10": 2.97,
          "wa": 25,
          "ca": 13
        },
        "rankDelta": -1
      },
      "sierra": {
        "finalScore": 33.85,
        "battleScore": 38.04,
        "coeff": 1,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 0,
        "det": {
          "g": 7,
          "time": 3731,
          "wr": 35,
          "el10": 19.14,
          "de10": 7.56,
          "dm10": 9272,
          "he10": 0,
          "as10": 0.64,
          "wa": 27,
          "ca": 8
        },
        "rankDelta": -1
      },
      "sojourn": {
        "finalScore": 32.79,
        "battleScore": 36.85,
        "coeff": 1,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 0,
        "det": {
          "g": 7,
          "time": 3043,
          "wr": 47,
          "el10": 14.39,
          "de10": 8.08,
          "dm10": 8479,
          "he10": 0,
          "as10": 0.79,
          "wa": 25,
          "ca": 10
        },
        "rankDelta": -1
      },
      "soldier-76": {
        "finalScore": 36.2,
        "battleScore": 36.75,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 21,
        "rankIndex": 0,
        "det": {
          "g": 21,
          "time": 9559,
          "wr": 53,
          "el10": 15.57,
          "de10": 7.53,
          "dm10": 7374,
          "he10": 1156,
          "as10": 1.07,
          "wa": 27,
          "ca": 8
        }
      },
      "sombra": {
        "finalScore": 40,
        "battleScore": 41.61,
        "coeff": 1,
        "matchCoef": 0.96,
        "gamesPlayed": 16,
        "rankIndex": 0,
        "det": {
          "g": 16,
          "time": 8271,
          "wr": 58,
          "el10": 17.19,
          "de10": 6.96,
          "dm10": 5867,
          "he10": 138,
          "as10": 6.6,
          "wa": 33,
          "ca": 8
        },
        "rankDelta": -1
      },
      "symmetra": {
        "finalScore": 39.08,
        "battleScore": 45.41,
        "coeff": 1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2170,
          "wr": 66,
          "el10": 18.25,
          "de10": 6.36,
          "dm10": 7763,
          "he10": 305,
          "as10": 5.81,
          "wa": 36,
          "ca": 0
        },
        "rankDelta": 6
      },
      "torbjorn": {
        "finalScore": 40.55,
        "battleScore": 43.3,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 0,
        "det": {
          "g": 12,
          "time": 5543,
          "wr": 67,
          "el10": 18.29,
          "de10": 6.17,
          "dm10": 9511,
          "he10": 0,
          "as10": 0.76,
          "wa": 22,
          "ca": 7
        }
      },
      "tracer": {
        "finalScore": 32.2,
        "battleScore": 34.38,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 0,
        "det": {
          "g": 12,
          "time": 6285,
          "wr": 46,
          "el10": 12.41,
          "de10": 9.07,
          "dm10": 4352,
          "he10": 20.6,
          "as10": 0,
          "wa": 25,
          "ca": 8
        },
        "rankDelta": -1
      },
      "vendetta": {
        "finalScore": 37.92,
        "battleScore": 41.6,
        "coeff": 1,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 0,
        "det": {
          "g": 9,
          "time": 4471,
          "wr": 62,
          "el10": 14.36,
          "de10": 12.21,
          "dm10": 6552,
          "he10": 153,
          "as10": 2.55,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": 3
      },
      "venture": {
        "finalScore": 38.84,
        "battleScore": 41.17,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 0,
        "det": {
          "g": 13,
          "time": 6845,
          "wr": 59,
          "el10": 17,
          "de10": 9.12,
          "dm10": 6723,
          "he10": 0,
          "as10": 1.49,
          "wa": 48,
          "ca": 0
        },
        "rankDelta": -4
      },
      "widowmaker": {
        "finalScore": 32.88,
        "battleScore": 38.68,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 638,
          "wr": 0,
          "el10": 15.06,
          "de10": 7.53,
          "dm10": 8306,
          "he10": 0,
          "as10": 6.59,
          "wa": 33,
          "ca": 8
        },
        "rankDelta": 4
      },
      "wrecking-ball": {
        "finalScore": 38.52,
        "battleScore": 38.85,
        "coeff": 1.1,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 1,
        "det": {
          "g": 8,
          "time": 4357,
          "wr": 50,
          "el10": 15.42,
          "de10": 7.57,
          "dm10": 6998,
          "he10": 172,
          "as10": 3.72,
          "wa": 31,
          "ca": 12
        }
      },
      "wuyang": {
        "finalScore": 34.68,
        "battleScore": 39.57,
        "coeff": 1,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 0,
        "det": {
          "g": 6,
          "time": 2553,
          "wr": 72,
          "el10": 12.93,
          "de10": 6.11,
          "dm10": 5127,
          "he10": 7248,
          "as10": 10.11,
          "wa": 27,
          "ca": 0
        },
        "rankDelta": -2
      },
      "zarya": {
        "finalScore": 46.49,
        "battleScore": 35.36,
        "coeff": 1.1,
        "matchCoef": 0.94,
        "gamesPlayed": 6,
        "rankIndex": 1,
        "det": {
          "g": 6,
          "time": 3031,
          "wr": 32,
          "el10": 12.87,
          "de10": 7.13,
          "dm10": 8191,
          "he10": 0,
          "as10": 3.96,
          "wa": 36,
          "ca": 0
        }
      },
      "zenyatta": {
        "finalScore": 43.14,
        "battleScore": 42.86,
        "coeff": 1,
        "matchCoef": 1.01,
        "gamesPlayed": 27,
        "rankIndex": 0,
        "det": {
          "g": 27,
          "time": 12491,
          "wr": 61,
          "el10": 12.83,
          "de10": 6.68,
          "dm10": 5947,
          "he10": 6469,
          "as10": 16.52,
          "wa": 26,
          "ca": 13
        },
        "rankDelta": -1
      }
    }
  },
  {
    "id": "p6",
    "name": "ぼんやりリッチ",
    "tag": "",
    "endorse": 3,
    "title": "Stargazer",
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8f3d55a5407cfcfa76d6201b08467ce5ac40a414fc4d075a6f485026c7d5fcd4.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/512ec98857af02508a014fa0e2baafa19daf5c56a8f5ab6f42b39be0e907a4f4.png",
    "role": "Tank",
    "ranks": {
      "Tank": {
        "division": "platinum",
        "tier": 5,
        "icon": "",
        "assumed": true
      },
      "Damage": {
        "division": "platinum",
        "tier": 5,
        "icon": "",
        "assumed": true
      },
      "Support": {
        "division": "platinum",
        "tier": 5,
        "icon": "",
        "assumed": true
      }
    },
    "rankTier": "Platinum 5",
    "overall": {
      "matches": 797,
      "wins": 379,
      "losses": 418,
      "wr": 47.55,
      "kda": 2.06,
      "elim": 14.39,
      "deaths": 7.86,
      "dmg": 9002.21,
      "heal": 2771.69,
      "time": 408155
    },
    "roles": {
      "Tank": {
        "g": 268,
        "w": 116,
        "l": 152,
        "time": 135577,
        "wr": 43.28,
        "kda": 2.46,
        "elim": 16.07,
        "deaths": 7.12,
        "dmg": 11253.52,
        "heal": 601.61
      },
      "Damage": {
        "g": 290,
        "w": 138,
        "l": 152,
        "time": 142716,
        "wr": 47.59,
        "kda": 1.61,
        "elim": 14.31,
        "deaths": 9.22,
        "dmg": 10124.56,
        "heal": 219.39
      },
      "Support": {
        "g": 239,
        "w": 125,
        "l": 114,
        "time": 129862,
        "wr": 52.3,
        "kda": 2.28,
        "elim": 12.73,
        "deaths": 7.14,
        "dmg": 5418.37,
        "heal": 7842.18
      }
    },
    "heroes": [
      {
        "slug": "moira",
        "n": "Moira",
        "role": "Support",
        "g": 85,
        "wr": 44.71,
        "kda": 2.56
      },
      {
        "slug": "ana",
        "n": "Ana",
        "role": "Support",
        "g": 80,
        "wr": 56.25,
        "kda": 2.51
      },
      {
        "slug": "genji",
        "n": "Genji",
        "role": "Damage",
        "g": 56,
        "wr": 58.93,
        "kda": 1.66
      },
      {
        "slug": "sigma",
        "n": "Sigma",
        "role": "Tank",
        "g": 46,
        "wr": 52.17,
        "kda": 3.84
      },
      {
        "slug": "ramattra",
        "n": "Ramattra",
        "role": "Tank",
        "g": 43,
        "wr": 34.88,
        "kda": 2.93
      },
      {
        "slug": "junker-queen",
        "n": "Junker Queen",
        "role": "Tank",
        "g": 42,
        "wr": 50,
        "kda": 2.02
      },
      {
        "slug": "orisa",
        "n": "Orisa",
        "role": "Tank",
        "g": 31,
        "wr": 35.48,
        "kda": 2.36
      },
      {
        "slug": "doomfist",
        "n": "Doomfist",
        "role": "Tank",
        "g": 29,
        "wr": 51.72,
        "kda": 2.52
      },
      {
        "slug": "vendetta",
        "n": "Vendetta",
        "role": "Damage",
        "g": 28,
        "wr": 67.86,
        "kda": 1.53
      },
      {
        "slug": "ashe",
        "n": "Ashe",
        "role": "Damage",
        "g": 23,
        "wr": 39.13,
        "kda": 1.66
      },
      {
        "slug": "pharah",
        "n": "Pharah",
        "role": "Damage",
        "g": 23,
        "wr": 52.17,
        "kda": 1.43
      },
      {
        "slug": "tracer",
        "n": "Tracer",
        "role": "Damage",
        "g": 22,
        "wr": 40.91,
        "kda": 1.41
      },
      {
        "slug": "junkrat",
        "n": "Junkrat",
        "role": "Damage",
        "g": 20,
        "wr": 45,
        "kda": 1.75
      },
      {
        "slug": "bastion",
        "n": "Bastion",
        "role": "Damage",
        "g": 19,
        "wr": 26.32,
        "kda": 1.5
      },
      {
        "slug": "lucio",
        "n": "Lúcio",
        "role": "Support",
        "g": 18,
        "wr": 55.56,
        "kda": 1.79
      },
      {
        "slug": "reinhardt",
        "n": "Reinhardt",
        "role": "Tank",
        "g": 17,
        "wr": 47.06,
        "kda": 1.33
      },
      {
        "slug": "dva",
        "n": "D.Va",
        "role": "Tank",
        "g": 16,
        "wr": 18.75,
        "kda": 2.39
      },
      {
        "slug": "zarya",
        "n": "Zarya",
        "role": "Tank",
        "g": 15,
        "wr": 40,
        "kda": 2.6
      },
      {
        "slug": "echo",
        "n": "Echo",
        "role": "Damage",
        "g": 13,
        "wr": 46.15,
        "kda": 1.69
      },
      {
        "slug": "mei",
        "n": "Mei",
        "role": "Damage",
        "g": 13,
        "wr": 38.46,
        "kda": 2.24
      },
      {
        "slug": "baptiste",
        "n": "Baptiste",
        "role": "Support",
        "g": 12,
        "wr": 66.67,
        "kda": 1.84
      },
      {
        "slug": "reaper",
        "n": "Reaper",
        "role": "Damage",
        "g": 12,
        "wr": 41.67,
        "kda": 2.16
      },
      {
        "slug": "zenyatta",
        "n": "Zenyatta",
        "role": "Support",
        "g": 12,
        "wr": 58.33,
        "kda": 2.62
      },
      {
        "slug": "hanzo",
        "n": "Hanzo",
        "role": "Damage",
        "g": 11,
        "wr": 54.55,
        "kda": 1.07
      },
      {
        "slug": "mercy",
        "n": "Mercy",
        "role": "Support",
        "g": 11,
        "wr": 63.64,
        "kda": 0.93
      },
      {
        "slug": "winston",
        "n": "Winston",
        "role": "Tank",
        "g": 11,
        "wr": 45.45,
        "kda": 1.98
      },
      {
        "slug": "soldier-76",
        "n": "Soldier: 76",
        "role": "Damage",
        "g": 8,
        "wr": 37.5,
        "kda": 1.77
      },
      {
        "slug": "freja",
        "n": "Freja",
        "role": "Damage",
        "g": 7,
        "wr": 28.57,
        "kda": 1.44
      },
      {
        "slug": "sombra",
        "n": "Sombra",
        "role": "Damage",
        "g": 7,
        "wr": 57.14,
        "kda": 2.16
      },
      {
        "slug": "kiriko",
        "n": "Kiriko",
        "role": "Support",
        "g": 6,
        "wr": 50,
        "kda": 1.65
      },
      {
        "slug": "mauga",
        "n": "Mauga",
        "role": "Tank",
        "g": 6,
        "wr": 50,
        "kda": 2.94
      },
      {
        "slug": "sojourn",
        "n": "Sojourn",
        "role": "Damage",
        "g": 6,
        "wr": 33.33,
        "kda": 1.26
      },
      {
        "slug": "anran",
        "n": "Anran",
        "role": "Damage",
        "g": 5,
        "wr": 60,
        "kda": 1.8
      },
      {
        "slug": "brigitte",
        "n": "Brigitte",
        "role": "Support",
        "g": 5,
        "wr": 20,
        "kda": 0.63
      },
      {
        "slug": "cassidy",
        "n": "Cassidy",
        "role": "Damage",
        "g": 5,
        "wr": 20,
        "kda": 0.7
      },
      {
        "slug": "hazard",
        "n": "Hazard",
        "role": "Tank",
        "g": 4,
        "wr": 25,
        "kda": 1.3
      },
      {
        "slug": "torbjorn",
        "n": "Torbjörn",
        "role": "Damage",
        "g": 4,
        "wr": 50,
        "kda": 1.73
      },
      {
        "slug": "dmon",
        "n": "D.Mon",
        "role": "Tank",
        "g": 3,
        "wr": 66.67,
        "kda": 4.23
      },
      {
        "slug": "illari",
        "n": "Illari",
        "role": "Support",
        "g": 3,
        "wr": 66.67,
        "kda": 1.86
      },
      {
        "slug": "mizuki",
        "n": "Mizuki",
        "role": "Support",
        "g": 3,
        "wr": 66.67,
        "kda": 1.85
      },
      {
        "slug": "shion",
        "n": "Shion",
        "role": "Damage",
        "g": 3,
        "wr": 66.67,
        "kda": 2.39
      },
      {
        "slug": "symmetra",
        "n": "Symmetra",
        "role": "Damage",
        "g": 3,
        "wr": 0,
        "kda": 1.63
      },
      {
        "slug": "roadhog",
        "n": "Roadhog",
        "role": "Tank",
        "g": 2,
        "wr": 0,
        "kda": 0.82
      },
      {
        "slug": "sierra",
        "n": "Sierra",
        "role": "Damage",
        "g": 2,
        "wr": 50,
        "kda": 1.64
      },
      {
        "slug": "wrecking-ball",
        "n": "Wrecking Ball",
        "role": "Tank",
        "g": 2,
        "wr": 50,
        "kda": 0.25
      },
      {
        "slug": "wuyang",
        "n": "Wuyang",
        "role": "Support",
        "g": 2,
        "wr": 50,
        "kda": 1.38
      },
      {
        "slug": "domina",
        "n": "Domina",
        "role": "Tank",
        "g": 1,
        "wr": 100,
        "kda": 3
      },
      {
        "slug": "jetpack-cat",
        "n": "Jetpack Cat",
        "role": "Support",
        "g": 1,
        "wr": 100,
        "kda": 4.67
      },
      {
        "slug": "juno",
        "n": "Juno",
        "role": "Support",
        "g": 1,
        "wr": 0,
        "kda": 2.29
      }
    ],
    "bscore": {
      "ana": {
        "finalScore": 59.79,
        "battleScore": 40.81,
        "coeff": 1.33,
        "matchCoef": 1.1,
        "gamesPlayed": 80,
        "rankIndex": 3,
        "det": {
          "g": 80,
          "time": 43649,
          "wr": 56.4,
          "el10": 10.8015,
          "de10": 7.0875,
          "dm10": 3747,
          "he10": 6095.35,
          "as10": 12.013,
          "wa": 42.35,
          "ca": 0
        },
        "rankDelta": -1
      },
      "echo": {
        "finalScore": 42.49,
        "battleScore": 33.84,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 3,
        "det": {
          "g": 13,
          "time": 6592,
          "wr": 42.46153846153846,
          "el10": 14.24923076923077,
          "de10": 8.449230769230768,
          "dm10": 7718.7692307692305,
          "he10": 16.200000000000003,
          "as10": 0.6276923076923077,
          "wa": 19.46153846153846,
          "ca": 9.76923076923077
        },
        "rankDelta": -1
      },
      "sigma": {
        "finalScore": 62.06,
        "battleScore": 41.36,
        "coeff": 1.33,
        "matchCoef": 1.03,
        "gamesPlayed": 46,
        "rankIndex": 3,
        "det": {
          "g": 46,
          "time": 24138,
          "wr": 51.08695652173913,
          "el10": 16.42108695652174,
          "de10": 4.909130434782608,
          "dm10": 10119.847826086956,
          "he10": 0,
          "as10": 2.1293478260869567,
          "wa": 46.04347826086956,
          "ca": 0
        },
        "rankDelta": -1
      },
      "soldier-76": {
        "finalScore": 44.54,
        "battleScore": 37.12,
        "coeff": 1.33,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 3,
        "det": {
          "g": 8,
          "time": 4296,
          "wr": 39.375,
          "el10": 15.928749999999999,
          "de10": 9.13875,
          "dm10": 9510.75,
          "he10": 1324.25,
          "as10": 1.5925,
          "wa": 29.5,
          "ca": 9.875
        },
        "rankDelta": -1
      },
      "anran": {
        "finalScore": 60.5,
        "battleScore": 44.38,
        "coeff": 1.33,
        "matchCoef": 0.93,
        "gamesPlayed": 5,
        "rankIndex": 3,
        "det": {
          "g": 5,
          "time": 2313,
          "wr": 71,
          "el10": 19.2,
          "de10": 10.64,
          "dm10": 8031,
          "he10": 716,
          "as10": 0.52,
          "wa": 31,
          "ca": 11
        },
        "rankDelta": -1
      },
      "ashe": {
        "finalScore": 47.55,
        "battleScore": 35.98,
        "coeff": 1.33,
        "matchCoef": 0.99,
        "gamesPlayed": 23,
        "rankIndex": 3,
        "det": {
          "g": 23,
          "time": 10529,
          "wr": 41,
          "el10": 13.79,
          "de10": 8.09,
          "dm10": 8617,
          "he10": 0,
          "as10": 1.77,
          "wa": 41,
          "ca": 11
        },
        "rankDelta": -2
      },
      "baptiste": {
        "finalScore": 49.34,
        "battleScore": 39.59,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 3,
        "det": {
          "g": 12,
          "time": 5509,
          "wr": 64,
          "el10": 10.89,
          "de10": 6.97,
          "dm10": 3411,
          "he10": 6887,
          "as10": 12.42,
          "wa": 26,
          "ca": 7
        }
      },
      "bastion": {
        "finalScore": 62.61,
        "battleScore": 31.68,
        "coeff": 1.33,
        "matchCoef": 0.99,
        "gamesPlayed": 19,
        "rankIndex": 3,
        "det": {
          "g": 19,
          "time": 9480,
          "wr": 28,
          "el10": 15.63,
          "de10": 10.19,
          "dm10": 9467,
          "he10": 31.17,
          "as10": 2.22,
          "wa": 24,
          "ca": 2
        },
        "rankDelta": 6
      },
      "brigitte": {
        "finalScore": 35.55,
        "battleScore": 31.03,
        "coeff": 1.33,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 3,
        "det": {
          "g": 5,
          "time": 2445,
          "wr": 27,
          "el10": 5.15,
          "de10": 11.29,
          "dm10": 3253,
          "he10": 7245,
          "as10": 9.57,
          "wa": 0,
          "ca": 0
        }
      },
      "cassidy": {
        "finalScore": 32.07,
        "battleScore": 28,
        "coeff": 1.33,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 3,
        "det": {
          "g": 5,
          "time": 2369,
          "wr": 16,
          "el10": 8.36,
          "de10": 11.9,
          "dm10": 6262,
          "he10": 0,
          "as10": 1.01,
          "wa": 36,
          "ca": 5
        }
      },
      "dmon": {
        "finalScore": 49.39,
        "battleScore": 43.65,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 3,
        "det": {
          "g": 3,
          "time": 1652,
          "wr": 57,
          "el10": 17.07,
          "de10": 4.72,
          "dm10": 10871,
          "he10": 333,
          "as10": 2.18,
          "wa": 33,
          "ca": 0
        },
        "rankDelta": 3
      },
      "domina": {
        "finalScore": 46.94,
        "battleScore": 41.49,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 285,
          "wr": 100,
          "el10": 18.94,
          "de10": 6.31,
          "dm10": 7546,
          "he10": 1656,
          "as10": 0,
          "wa": 29,
          "ca": 12
        }
      },
      "doomfist": {
        "finalScore": 54.76,
        "battleScore": 40.62,
        "coeff": 1.33,
        "matchCoef": 1.01,
        "gamesPlayed": 29,
        "rankIndex": 3,
        "det": {
          "g": 29,
          "time": 14847,
          "wr": 53,
          "el10": 17.98,
          "de10": 7.07,
          "dm10": 9383,
          "he10": 1033,
          "as10": 4.4,
          "wa": 25,
          "ca": 8
        }
      },
      "dva": {
        "finalScore": 38.89,
        "battleScore": 30.39,
        "coeff": 1.33,
        "matchCoef": 0.96,
        "gamesPlayed": 16,
        "rankIndex": 3,
        "det": {
          "g": 16,
          "time": 7684,
          "wr": 19,
          "el10": 16.08,
          "de10": 7.26,
          "dm10": 8424,
          "he10": 159,
          "as10": 5.08,
          "wa": 23,
          "ca": 8
        },
        "rankDelta": 1
      },
      "freja": {
        "finalScore": 41.93,
        "battleScore": 35.4,
        "coeff": 1.33,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 3,
        "det": {
          "g": 7,
          "time": 3989,
          "wr": 26,
          "el10": 13.39,
          "de10": 9.33,
          "dm10": 7490,
          "he10": 8.56,
          "as10": 0.45,
          "wa": 29,
          "ca": 1
        },
        "rankDelta": 3
      },
      "genji": {
        "finalScore": 58.21,
        "battleScore": 40.88,
        "coeff": 1.33,
        "matchCoef": 1.07,
        "gamesPlayed": 56,
        "rankIndex": 3,
        "det": {
          "g": 56,
          "time": 26940,
          "wr": 59,
          "el10": 14.34,
          "de10": 8.62,
          "dm10": 6977,
          "he10": 62.9,
          "as10": 0.2,
          "wa": 28,
          "ca": 9
        },
        "rankDelta": -2
      },
      "hazard": {
        "finalScore": 35.03,
        "battleScore": 30.97,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 3,
        "det": {
          "g": 4,
          "time": 1818,
          "wr": 23,
          "el10": 12.87,
          "de10": 9.9,
          "dm10": 7999,
          "he10": 94.53,
          "as10": 2.31,
          "wa": 26,
          "ca": 0
        }
      },
      "hanzo": {
        "finalScore": 47.07,
        "battleScore": 38.07,
        "coeff": 1.33,
        "matchCoef": 0.93,
        "gamesPlayed": 11,
        "rankIndex": 3,
        "det": {
          "g": 11,
          "time": 4879,
          "wr": 49,
          "el10": 11.07,
          "de10": 10.33,
          "dm10": 7535,
          "he10": 6.16,
          "as10": 2.21,
          "wa": 25,
          "ca": 7
        },
        "rankDelta": 2
      },
      "illari": {
        "finalScore": 37.64,
        "battleScore": 33.27,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 3,
        "det": {
          "g": 3,
          "time": 1618,
          "wr": 50,
          "el10": 10.39,
          "de10": 7.79,
          "dm10": 4219,
          "he10": 5483,
          "as10": 7.42,
          "wa": 35,
          "ca": 11
        },
        "rankDelta": -1
      },
      "jetpack-cat": {
        "finalScore": 52.51,
        "battleScore": 46.41,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 828,
          "wr": 74,
          "el10": 8.7,
          "de10": 2.18,
          "dm10": 2391,
          "he10": 7150,
          "as10": 9.43,
          "wa": 30,
          "ca": 10
        }
      },
      "junker-queen": {
        "finalScore": 54.03,
        "battleScore": 38.85,
        "coeff": 1.33,
        "matchCoef": 1.04,
        "gamesPlayed": 42,
        "rankIndex": 3,
        "det": {
          "g": 42,
          "time": 19931,
          "wr": 50,
          "el10": 15.47,
          "de10": 7.65,
          "dm10": 8710,
          "he10": 2341,
          "as10": 5.6,
          "wa": 31,
          "ca": 5
        }
      },
      "junkrat": {
        "finalScore": 46.96,
        "battleScore": 35.98,
        "coeff": 1.33,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 3,
        "det": {
          "g": 20,
          "time": 9215,
          "wr": 43,
          "el10": 12.76,
          "de10": 8.66,
          "dm10": 8176,
          "he10": 0,
          "as10": 2.41,
          "wa": 25,
          "ca": 0
        },
        "rankDelta": -2
      },
      "juno": {
        "finalScore": 42.29,
        "battleScore": 37.38,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 644,
          "wr": 57,
          "el10": 14.92,
          "de10": 6.53,
          "dm10": 4481,
          "he10": 6254,
          "as10": 7.46,
          "wa": 36,
          "ca": 5
        },
        "rankDelta": 2
      },
      "kiriko": {
        "finalScore": 45.42,
        "battleScore": 38.94,
        "coeff": 1.33,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 3,
        "det": {
          "g": 6,
          "time": 3424,
          "wr": 50,
          "el10": 7.01,
          "de10": 5.96,
          "dm10": 2611,
          "he10": 9570,
          "as10": 16.3,
          "wa": 29,
          "ca": 10
        },
        "rankDelta": 3
      },
      "lucio": {
        "finalScore": 48.17,
        "battleScore": 37.25,
        "coeff": 1.33,
        "matchCoef": 0.97,
        "gamesPlayed": 18,
        "rankIndex": 3,
        "det": {
          "g": 18,
          "time": 10429,
          "wr": 56,
          "el10": 11.74,
          "de10": 9.32,
          "dm10": 3953,
          "he10": 8779,
          "as10": 9.78,
          "wa": 25,
          "ca": 8
        }
      },
      "mauga": {
        "finalScore": 54,
        "battleScore": 34.32,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 6,
        "rankIndex": 3,
        "det": {
          "g": 6,
          "time": 2572,
          "wr": 44,
          "el10": 17.03,
          "de10": 7.47,
          "dm10": 10214,
          "he10": 1522,
          "as10": 6.53,
          "wa": 28,
          "ca": 9
        },
        "rankDelta": -3
      },
      "mei": {
        "finalScore": 44.45,
        "battleScore": 35.4,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 3,
        "det": {
          "g": 13,
          "time": 6285,
          "wr": 40,
          "el10": 13.46,
          "de10": 8.31,
          "dm10": 6614,
          "he10": 1293,
          "as10": 5.16,
          "wa": 45,
          "ca": 0
        }
      },
      "mercy": {
        "finalScore": 48.28,
        "battleScore": 39.05,
        "coeff": 1.33,
        "matchCoef": 0.93,
        "gamesPlayed": 11,
        "rankIndex": 3,
        "det": {
          "g": 11,
          "time": 5342,
          "wr": 62,
          "el10": 1.35,
          "de10": 6.4,
          "dm10": 128,
          "he10": 11099,
          "as10": 15.61,
          "wa": 21,
          "ca": 23
        },
        "rankDelta": -1
      },
      "mizuki": {
        "finalScore": 43.35,
        "battleScore": 38.31,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 3,
        "det": {
          "g": 3,
          "time": 1317,
          "wr": 43,
          "el10": 10.94,
          "de10": 5.92,
          "dm10": 5867,
          "he10": 8585,
          "as10": 6.38,
          "wa": 36,
          "ca": 11
        },
        "rankDelta": 2
      },
      "moira": {
        "finalScore": 65.14,
        "battleScore": 39.21,
        "coeff": 1.33,
        "matchCoef": 1.05,
        "gamesPlayed": 85,
        "rankIndex": 3,
        "det": {
          "g": 85,
          "time": 48387,
          "wr": 45,
          "el10": 17.22,
          "de10": 6.68,
          "dm10": 6389,
          "he10": 9127,
          "as10": 12.15,
          "wa": 0,
          "ca": 0
        }
      },
      "orisa": {
        "finalScore": 45.88,
        "battleScore": 33.84,
        "coeff": 1.33,
        "matchCoef": 1.02,
        "gamesPlayed": 31,
        "rankIndex": 3,
        "det": {
          "g": 31,
          "time": 15364,
          "wr": 36,
          "el10": 14.41,
          "de10": 7.54,
          "dm10": 10001,
          "he10": 17.26,
          "as10": 3.44,
          "wa": 32,
          "ca": 5
        },
        "rankDelta": 1
      },
      "pharah": {
        "finalScore": 48.85,
        "battleScore": 36.97,
        "coeff": 1.33,
        "matchCoef": 0.99,
        "gamesPlayed": 23,
        "rankIndex": 3,
        "det": {
          "g": 23,
          "time": 11580,
          "wr": 54,
          "el10": 14.25,
          "de10": 9.95,
          "dm10": 8338,
          "he10": 0,
          "as10": 1.3,
          "wa": 46,
          "ca": 0
        },
        "rankDelta": -2
      },
      "ramattra": {
        "finalScore": 54.78,
        "battleScore": 35.88,
        "coeff": 1.33,
        "matchCoef": 1.02,
        "gamesPlayed": 43,
        "rankIndex": 3,
        "det": {
          "g": 43,
          "time": 21562,
          "wr": 34,
          "el10": 18.12,
          "de10": 6.96,
          "dm10": 9963,
          "he10": 258,
          "as10": 2.39,
          "wa": 22,
          "ca": 10
        },
        "rankDelta": 4
      },
      "reaper": {
        "finalScore": 59.42,
        "battleScore": 37.64,
        "coeff": 1.33,
        "matchCoef": 0.97,
        "gamesPlayed": 12,
        "rankIndex": 3,
        "det": {
          "g": 12,
          "time": 6333,
          "wr": 43,
          "el10": 16.96,
          "de10": 7.86,
          "dm10": 7126,
          "he10": 1479,
          "as10": 0,
          "wa": 27,
          "ca": 9
        }
      },
      "reinhardt": {
        "finalScore": 45.42,
        "battleScore": 35.31,
        "coeff": 1.33,
        "matchCoef": 0.97,
        "gamesPlayed": 17,
        "rankIndex": 3,
        "det": {
          "g": 17,
          "time": 9340,
          "wr": 47,
          "el10": 12.78,
          "de10": 10.28,
          "dm10": 7032,
          "he10": 0,
          "as10": 0.84,
          "wa": 0,
          "ca": 0
        }
      },
      "roadhog": {
        "finalScore": 35.26,
        "battleScore": 31.17,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 833,
          "wr": 15,
          "el10": 7.92,
          "de10": 12.24,
          "dm10": 6125,
          "he10": 4272,
          "as10": 2.16,
          "wa": 20,
          "ca": 7
        }
      },
      "shion": {
        "finalScore": 45.94,
        "battleScore": 40.6,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 3,
        "det": {
          "g": 3,
          "time": 1484,
          "wr": 51,
          "el10": 17.38,
          "de10": 7.28,
          "dm10": 8580,
          "he10": 149,
          "as10": 2.83,
          "wa": 28,
          "ca": 11
        }
      },
      "sierra": {
        "finalScore": 40.72,
        "battleScore": 35.99,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 1042,
          "wr": 49,
          "el10": 13.24,
          "de10": 8.06,
          "dm10": 7538,
          "he10": 0,
          "as10": 1.73,
          "wa": 22,
          "ca": 8
        },
        "rankDelta": -1
      },
      "sojourn": {
        "finalScore": 41.85,
        "battleScore": 35.87,
        "coeff": 1.33,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 3,
        "det": {
          "g": 6,
          "time": 3174,
          "wr": 26,
          "el10": 12.85,
          "de10": 10.21,
          "dm10": 8464,
          "he10": 0,
          "as10": 2.46,
          "wa": 30,
          "ca": 5
        },
        "rankDelta": 1
      },
      "sombra": {
        "finalScore": 41.2,
        "battleScore": 34.79,
        "coeff": 1.33,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 3,
        "det": {
          "g": 7,
          "time": 3054,
          "wr": 52,
          "el10": 17.29,
          "de10": 11,
          "dm10": 6257,
          "he10": 27.23,
          "as10": 6.48,
          "wa": 28,
          "ca": 8
        },
        "rankDelta": -4
      },
      "symmetra": {
        "finalScore": 41.6,
        "battleScore": 36.77,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 3,
        "det": {
          "g": 3,
          "time": 1890,
          "wr": 11,
          "el10": 15.55,
          "de10": 9.52,
          "dm10": 6946,
          "he10": 432,
          "as10": 5.4,
          "wa": 32,
          "ca": 0
        },
        "rankDelta": 2
      },
      "torbjorn": {
        "finalScore": 41.62,
        "battleScore": 36.79,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 3,
        "det": {
          "g": 4,
          "time": 2298,
          "wr": 45,
          "el10": 16.71,
          "de10": 9.66,
          "dm10": 8457,
          "he10": 0,
          "as10": 0.26,
          "wa": 24,
          "ca": 10
        },
        "rankDelta": -4
      },
      "tracer": {
        "finalScore": 46.97,
        "battleScore": 35.68,
        "coeff": 1.33,
        "matchCoef": 0.99,
        "gamesPlayed": 22,
        "rankIndex": 3,
        "det": {
          "g": 22,
          "time": 10226,
          "wr": 41,
          "el10": 13.5,
          "de10": 9.56,
          "dm10": 6161,
          "he10": 10.15,
          "as10": 0.06,
          "wa": 32,
          "ca": 8
        }
      },
      "vendetta": {
        "finalScore": 58,
        "battleScore": 43.15,
        "coeff": 1.33,
        "matchCoef": 1.01,
        "gamesPlayed": 28,
        "rankIndex": 3,
        "det": {
          "g": 28,
          "time": 14345,
          "wr": 67,
          "el10": 14.81,
          "de10": 9.7,
          "dm10": 7528,
          "he10": 215,
          "as10": 1.67,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": -1
      },
      "winston": {
        "finalScore": 44.55,
        "battleScore": 36.03,
        "coeff": 1.33,
        "matchCoef": 0.93,
        "gamesPlayed": 11,
        "rankIndex": 3,
        "det": {
          "g": 11,
          "time": 5928,
          "wr": 48,
          "el10": 15.99,
          "de10": 8.1,
          "dm10": 8346,
          "he10": 473,
          "as10": 3.14,
          "wa": 45,
          "ca": 0
        },
        "rankDelta": -3
      },
      "wrecking-ball": {
        "finalScore": 37.2,
        "battleScore": 32.88,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 689,
          "wr": 49,
          "el10": 3.48,
          "de10": 13.93,
          "dm10": 7150,
          "he10": 120,
          "as10": 0,
          "wa": 33,
          "ca": 5
        }
      },
      "wuyang": {
        "finalScore": 47.99,
        "battleScore": 42.42,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 563,
          "wr": 64,
          "el10": 11.72,
          "de10": 8.52,
          "dm10": 5069,
          "he10": 9152,
          "as10": 15.98,
          "wa": 38,
          "ca": 0
        },
        "rankDelta": 1
      },
      "zarya": {
        "finalScore": 53.09,
        "battleScore": 37.99,
        "coeff": 1.33,
        "matchCoef": 0.98,
        "gamesPlayed": 15,
        "rankIndex": 3,
        "det": {
          "g": 15,
          "time": 8036,
          "wr": 40,
          "el10": 15.38,
          "de10": 6.64,
          "dm10": 7821,
          "he10": 0,
          "as10": 3.88,
          "wa": 44,
          "ca": 0
        },
        "rankDelta": -1
      },
      "zenyatta": {
        "finalScore": 47.75,
        "battleScore": 38.31,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 3,
        "det": {
          "g": 12,
          "time": 5326,
          "wr": 57,
          "el10": 11.15,
          "de10": 7.77,
          "dm10": 5067,
          "he10": 6587,
          "as10": 15.32,
          "wa": 23,
          "ca": 11
        },
        "rankDelta": 1
      }
    },
    "bscoreAll": {
      "ana": {
        "finalScore": 59.79,
        "battleScore": 40.81,
        "coeff": 1.33,
        "matchCoef": 1.1,
        "gamesPlayed": 80,
        "rankIndex": 3,
        "det": {
          "g": 80,
          "time": 43649,
          "wr": 56.4,
          "el10": 10.8015,
          "de10": 7.0875,
          "dm10": 3747,
          "he10": 6095.35,
          "as10": 12.013,
          "wa": 42.35,
          "ca": 0
        },
        "rankDelta": -1
      },
      "echo": {
        "finalScore": 42.49,
        "battleScore": 33.84,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 3,
        "det": {
          "g": 13,
          "time": 6592,
          "wr": 42.46153846153846,
          "el10": 14.24923076923077,
          "de10": 8.449230769230768,
          "dm10": 7718.7692307692305,
          "he10": 16.200000000000003,
          "as10": 0.6276923076923077,
          "wa": 19.46153846153846,
          "ca": 9.76923076923077
        },
        "rankDelta": -1
      },
      "sigma": {
        "finalScore": 62.06,
        "battleScore": 41.36,
        "coeff": 1.33,
        "matchCoef": 1.03,
        "gamesPlayed": 46,
        "rankIndex": 3,
        "det": {
          "g": 46,
          "time": 24138,
          "wr": 51.08695652173913,
          "el10": 16.42108695652174,
          "de10": 4.909130434782608,
          "dm10": 10119.847826086956,
          "he10": 0,
          "as10": 2.1293478260869567,
          "wa": 46.04347826086956,
          "ca": 0
        },
        "rankDelta": -1
      },
      "soldier-76": {
        "finalScore": 44.54,
        "battleScore": 37.12,
        "coeff": 1.33,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 3,
        "det": {
          "g": 8,
          "time": 4296,
          "wr": 39.375,
          "el10": 15.928749999999999,
          "de10": 9.13875,
          "dm10": 9510.75,
          "he10": 1324.25,
          "as10": 1.5925,
          "wa": 29.5,
          "ca": 9.875
        },
        "rankDelta": -1
      },
      "anran": {
        "finalScore": 60.5,
        "battleScore": 44.38,
        "coeff": 1.33,
        "matchCoef": 0.93,
        "gamesPlayed": 5,
        "rankIndex": 3,
        "det": {
          "g": 5,
          "time": 2313,
          "wr": 71,
          "el10": 19.2,
          "de10": 10.64,
          "dm10": 8031,
          "he10": 716,
          "as10": 0.52,
          "wa": 31,
          "ca": 11
        },
        "rankDelta": -1
      },
      "ashe": {
        "finalScore": 47.55,
        "battleScore": 35.98,
        "coeff": 1.33,
        "matchCoef": 0.99,
        "gamesPlayed": 23,
        "rankIndex": 3,
        "det": {
          "g": 23,
          "time": 10529,
          "wr": 41,
          "el10": 13.79,
          "de10": 8.09,
          "dm10": 8617,
          "he10": 0,
          "as10": 1.77,
          "wa": 41,
          "ca": 11
        },
        "rankDelta": -2
      },
      "baptiste": {
        "finalScore": 49.34,
        "battleScore": 39.59,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 3,
        "det": {
          "g": 12,
          "time": 5509,
          "wr": 64,
          "el10": 10.89,
          "de10": 6.97,
          "dm10": 3411,
          "he10": 6887,
          "as10": 12.42,
          "wa": 26,
          "ca": 7
        }
      },
      "bastion": {
        "finalScore": 62.61,
        "battleScore": 31.68,
        "coeff": 1.33,
        "matchCoef": 0.99,
        "gamesPlayed": 19,
        "rankIndex": 3,
        "det": {
          "g": 19,
          "time": 9480,
          "wr": 28,
          "el10": 15.63,
          "de10": 10.19,
          "dm10": 9467,
          "he10": 31.17,
          "as10": 2.22,
          "wa": 24,
          "ca": 2
        },
        "rankDelta": 6
      },
      "brigitte": {
        "finalScore": 35.55,
        "battleScore": 31.03,
        "coeff": 1.33,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 3,
        "det": {
          "g": 5,
          "time": 2445,
          "wr": 27,
          "el10": 5.15,
          "de10": 11.29,
          "dm10": 3253,
          "he10": 7245,
          "as10": 9.57,
          "wa": 0,
          "ca": 0
        }
      },
      "cassidy": {
        "finalScore": 32.07,
        "battleScore": 28,
        "coeff": 1.33,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 3,
        "det": {
          "g": 5,
          "time": 2369,
          "wr": 16,
          "el10": 8.36,
          "de10": 11.9,
          "dm10": 6262,
          "he10": 0,
          "as10": 1.01,
          "wa": 36,
          "ca": 5
        }
      },
      "dmon": {
        "finalScore": 49.39,
        "battleScore": 43.65,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 3,
        "det": {
          "g": 3,
          "time": 1652,
          "wr": 57,
          "el10": 17.07,
          "de10": 4.72,
          "dm10": 10871,
          "he10": 333,
          "as10": 2.18,
          "wa": 33,
          "ca": 0
        },
        "rankDelta": 3
      },
      "domina": {
        "finalScore": 46.94,
        "battleScore": 41.49,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 285,
          "wr": 100,
          "el10": 18.94,
          "de10": 6.31,
          "dm10": 7546,
          "he10": 1656,
          "as10": 0,
          "wa": 29,
          "ca": 12
        }
      },
      "doomfist": {
        "finalScore": 54.76,
        "battleScore": 40.62,
        "coeff": 1.33,
        "matchCoef": 1.01,
        "gamesPlayed": 29,
        "rankIndex": 3,
        "det": {
          "g": 29,
          "time": 14847,
          "wr": 53,
          "el10": 17.98,
          "de10": 7.07,
          "dm10": 9383,
          "he10": 1033,
          "as10": 4.4,
          "wa": 25,
          "ca": 8
        }
      },
      "dva": {
        "finalScore": 38.89,
        "battleScore": 30.39,
        "coeff": 1.33,
        "matchCoef": 0.96,
        "gamesPlayed": 16,
        "rankIndex": 3,
        "det": {
          "g": 16,
          "time": 7684,
          "wr": 19,
          "el10": 16.08,
          "de10": 7.26,
          "dm10": 8424,
          "he10": 159,
          "as10": 5.08,
          "wa": 23,
          "ca": 8
        },
        "rankDelta": 1
      },
      "freja": {
        "finalScore": 41.93,
        "battleScore": 35.4,
        "coeff": 1.33,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 3,
        "det": {
          "g": 7,
          "time": 3989,
          "wr": 26,
          "el10": 13.39,
          "de10": 9.33,
          "dm10": 7490,
          "he10": 8.56,
          "as10": 0.45,
          "wa": 29,
          "ca": 1
        },
        "rankDelta": 3
      },
      "genji": {
        "finalScore": 58.21,
        "battleScore": 40.88,
        "coeff": 1.33,
        "matchCoef": 1.07,
        "gamesPlayed": 56,
        "rankIndex": 3,
        "det": {
          "g": 56,
          "time": 26940,
          "wr": 59,
          "el10": 14.34,
          "de10": 8.62,
          "dm10": 6977,
          "he10": 62.9,
          "as10": 0.2,
          "wa": 28,
          "ca": 9
        },
        "rankDelta": -2
      },
      "hazard": {
        "finalScore": 35.03,
        "battleScore": 30.97,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 3,
        "det": {
          "g": 4,
          "time": 1818,
          "wr": 23,
          "el10": 12.87,
          "de10": 9.9,
          "dm10": 7999,
          "he10": 94.53,
          "as10": 2.31,
          "wa": 26,
          "ca": 0
        }
      },
      "hanzo": {
        "finalScore": 47.07,
        "battleScore": 38.07,
        "coeff": 1.33,
        "matchCoef": 0.93,
        "gamesPlayed": 11,
        "rankIndex": 3,
        "det": {
          "g": 11,
          "time": 4879,
          "wr": 49,
          "el10": 11.07,
          "de10": 10.33,
          "dm10": 7535,
          "he10": 6.16,
          "as10": 2.21,
          "wa": 25,
          "ca": 7
        },
        "rankDelta": 2
      },
      "illari": {
        "finalScore": 37.64,
        "battleScore": 33.27,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 3,
        "det": {
          "g": 3,
          "time": 1618,
          "wr": 50,
          "el10": 10.39,
          "de10": 7.79,
          "dm10": 4219,
          "he10": 5483,
          "as10": 7.42,
          "wa": 35,
          "ca": 11
        },
        "rankDelta": -1
      },
      "jetpack-cat": {
        "finalScore": 52.51,
        "battleScore": 46.41,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 828,
          "wr": 74,
          "el10": 8.7,
          "de10": 2.18,
          "dm10": 2391,
          "he10": 7150,
          "as10": 9.43,
          "wa": 30,
          "ca": 10
        }
      },
      "junker-queen": {
        "finalScore": 54.03,
        "battleScore": 38.85,
        "coeff": 1.33,
        "matchCoef": 1.04,
        "gamesPlayed": 42,
        "rankIndex": 3,
        "det": {
          "g": 42,
          "time": 19931,
          "wr": 50,
          "el10": 15.47,
          "de10": 7.65,
          "dm10": 8710,
          "he10": 2341,
          "as10": 5.6,
          "wa": 31,
          "ca": 5
        }
      },
      "junkrat": {
        "finalScore": 46.96,
        "battleScore": 35.98,
        "coeff": 1.33,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 3,
        "det": {
          "g": 20,
          "time": 9215,
          "wr": 43,
          "el10": 12.76,
          "de10": 8.66,
          "dm10": 8176,
          "he10": 0,
          "as10": 2.41,
          "wa": 25,
          "ca": 0
        },
        "rankDelta": -2
      },
      "juno": {
        "finalScore": 42.29,
        "battleScore": 37.38,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 644,
          "wr": 57,
          "el10": 14.92,
          "de10": 6.53,
          "dm10": 4481,
          "he10": 6254,
          "as10": 7.46,
          "wa": 36,
          "ca": 5
        },
        "rankDelta": 2
      },
      "kiriko": {
        "finalScore": 45.42,
        "battleScore": 38.94,
        "coeff": 1.33,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 3,
        "det": {
          "g": 6,
          "time": 3424,
          "wr": 50,
          "el10": 7.01,
          "de10": 5.96,
          "dm10": 2611,
          "he10": 9570,
          "as10": 16.3,
          "wa": 29,
          "ca": 10
        },
        "rankDelta": 3
      },
      "lucio": {
        "finalScore": 48.17,
        "battleScore": 37.25,
        "coeff": 1.33,
        "matchCoef": 0.97,
        "gamesPlayed": 18,
        "rankIndex": 3,
        "det": {
          "g": 18,
          "time": 10429,
          "wr": 56,
          "el10": 11.74,
          "de10": 9.32,
          "dm10": 3953,
          "he10": 8779,
          "as10": 9.78,
          "wa": 25,
          "ca": 8
        }
      },
      "mauga": {
        "finalScore": 54,
        "battleScore": 34.32,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 6,
        "rankIndex": 3,
        "det": {
          "g": 6,
          "time": 2572,
          "wr": 44,
          "el10": 17.03,
          "de10": 7.47,
          "dm10": 10214,
          "he10": 1522,
          "as10": 6.53,
          "wa": 28,
          "ca": 9
        },
        "rankDelta": -3
      },
      "mei": {
        "finalScore": 44.45,
        "battleScore": 35.4,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 3,
        "det": {
          "g": 13,
          "time": 6285,
          "wr": 40,
          "el10": 13.46,
          "de10": 8.31,
          "dm10": 6614,
          "he10": 1293,
          "as10": 5.16,
          "wa": 45,
          "ca": 0
        }
      },
      "mercy": {
        "finalScore": 48.28,
        "battleScore": 39.05,
        "coeff": 1.33,
        "matchCoef": 0.93,
        "gamesPlayed": 11,
        "rankIndex": 3,
        "det": {
          "g": 11,
          "time": 5342,
          "wr": 62,
          "el10": 1.35,
          "de10": 6.4,
          "dm10": 128,
          "he10": 11099,
          "as10": 15.61,
          "wa": 21,
          "ca": 23
        },
        "rankDelta": -1
      },
      "mizuki": {
        "finalScore": 43.35,
        "battleScore": 38.31,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 3,
        "det": {
          "g": 3,
          "time": 1317,
          "wr": 43,
          "el10": 10.94,
          "de10": 5.92,
          "dm10": 5867,
          "he10": 8585,
          "as10": 6.38,
          "wa": 36,
          "ca": 11
        },
        "rankDelta": 2
      },
      "moira": {
        "finalScore": 65.14,
        "battleScore": 39.21,
        "coeff": 1.33,
        "matchCoef": 1.05,
        "gamesPlayed": 85,
        "rankIndex": 3,
        "det": {
          "g": 85,
          "time": 48387,
          "wr": 45,
          "el10": 17.22,
          "de10": 6.68,
          "dm10": 6389,
          "he10": 9127,
          "as10": 12.15,
          "wa": 0,
          "ca": 0
        }
      },
      "orisa": {
        "finalScore": 45.88,
        "battleScore": 33.84,
        "coeff": 1.33,
        "matchCoef": 1.02,
        "gamesPlayed": 31,
        "rankIndex": 3,
        "det": {
          "g": 31,
          "time": 15364,
          "wr": 36,
          "el10": 14.41,
          "de10": 7.54,
          "dm10": 10001,
          "he10": 17.26,
          "as10": 3.44,
          "wa": 32,
          "ca": 5
        },
        "rankDelta": 1
      },
      "pharah": {
        "finalScore": 48.85,
        "battleScore": 36.97,
        "coeff": 1.33,
        "matchCoef": 0.99,
        "gamesPlayed": 23,
        "rankIndex": 3,
        "det": {
          "g": 23,
          "time": 11580,
          "wr": 54,
          "el10": 14.25,
          "de10": 9.95,
          "dm10": 8338,
          "he10": 0,
          "as10": 1.3,
          "wa": 46,
          "ca": 0
        },
        "rankDelta": -2
      },
      "ramattra": {
        "finalScore": 54.78,
        "battleScore": 35.88,
        "coeff": 1.33,
        "matchCoef": 1.02,
        "gamesPlayed": 43,
        "rankIndex": 3,
        "det": {
          "g": 43,
          "time": 21562,
          "wr": 34,
          "el10": 18.12,
          "de10": 6.96,
          "dm10": 9963,
          "he10": 258,
          "as10": 2.39,
          "wa": 22,
          "ca": 10
        },
        "rankDelta": 4
      },
      "reaper": {
        "finalScore": 59.42,
        "battleScore": 37.64,
        "coeff": 1.33,
        "matchCoef": 0.97,
        "gamesPlayed": 12,
        "rankIndex": 3,
        "det": {
          "g": 12,
          "time": 6333,
          "wr": 43,
          "el10": 16.96,
          "de10": 7.86,
          "dm10": 7126,
          "he10": 1479,
          "as10": 0,
          "wa": 27,
          "ca": 9
        }
      },
      "reinhardt": {
        "finalScore": 45.42,
        "battleScore": 35.31,
        "coeff": 1.33,
        "matchCoef": 0.97,
        "gamesPlayed": 17,
        "rankIndex": 3,
        "det": {
          "g": 17,
          "time": 9340,
          "wr": 47,
          "el10": 12.78,
          "de10": 10.28,
          "dm10": 7032,
          "he10": 0,
          "as10": 0.84,
          "wa": 0,
          "ca": 0
        }
      },
      "roadhog": {
        "finalScore": 35.26,
        "battleScore": 31.17,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 833,
          "wr": 15,
          "el10": 7.92,
          "de10": 12.24,
          "dm10": 6125,
          "he10": 4272,
          "as10": 2.16,
          "wa": 20,
          "ca": 7
        }
      },
      "shion": {
        "finalScore": 45.94,
        "battleScore": 40.6,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 3,
        "det": {
          "g": 3,
          "time": 1484,
          "wr": 51,
          "el10": 17.38,
          "de10": 7.28,
          "dm10": 8580,
          "he10": 149,
          "as10": 2.83,
          "wa": 28,
          "ca": 11
        }
      },
      "sierra": {
        "finalScore": 40.72,
        "battleScore": 35.99,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 1042,
          "wr": 49,
          "el10": 13.24,
          "de10": 8.06,
          "dm10": 7538,
          "he10": 0,
          "as10": 1.73,
          "wa": 22,
          "ca": 8
        },
        "rankDelta": -1
      },
      "sojourn": {
        "finalScore": 41.85,
        "battleScore": 35.87,
        "coeff": 1.33,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 3,
        "det": {
          "g": 6,
          "time": 3174,
          "wr": 26,
          "el10": 12.85,
          "de10": 10.21,
          "dm10": 8464,
          "he10": 0,
          "as10": 2.46,
          "wa": 30,
          "ca": 5
        },
        "rankDelta": 1
      },
      "sombra": {
        "finalScore": 41.2,
        "battleScore": 34.79,
        "coeff": 1.33,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 3,
        "det": {
          "g": 7,
          "time": 3054,
          "wr": 52,
          "el10": 17.29,
          "de10": 11,
          "dm10": 6257,
          "he10": 27.23,
          "as10": 6.48,
          "wa": 28,
          "ca": 8
        },
        "rankDelta": -4
      },
      "symmetra": {
        "finalScore": 41.6,
        "battleScore": 36.77,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 3,
        "det": {
          "g": 3,
          "time": 1890,
          "wr": 11,
          "el10": 15.55,
          "de10": 9.52,
          "dm10": 6946,
          "he10": 432,
          "as10": 5.4,
          "wa": 32,
          "ca": 0
        },
        "rankDelta": 2
      },
      "torbjorn": {
        "finalScore": 41.62,
        "battleScore": 36.79,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 3,
        "det": {
          "g": 4,
          "time": 2298,
          "wr": 45,
          "el10": 16.71,
          "de10": 9.66,
          "dm10": 8457,
          "he10": 0,
          "as10": 0.26,
          "wa": 24,
          "ca": 10
        },
        "rankDelta": -4
      },
      "tracer": {
        "finalScore": 46.97,
        "battleScore": 35.68,
        "coeff": 1.33,
        "matchCoef": 0.99,
        "gamesPlayed": 22,
        "rankIndex": 3,
        "det": {
          "g": 22,
          "time": 10226,
          "wr": 41,
          "el10": 13.5,
          "de10": 9.56,
          "dm10": 6161,
          "he10": 10.15,
          "as10": 0.06,
          "wa": 32,
          "ca": 8
        }
      },
      "vendetta": {
        "finalScore": 58,
        "battleScore": 43.15,
        "coeff": 1.33,
        "matchCoef": 1.01,
        "gamesPlayed": 28,
        "rankIndex": 3,
        "det": {
          "g": 28,
          "time": 14345,
          "wr": 67,
          "el10": 14.81,
          "de10": 9.7,
          "dm10": 7528,
          "he10": 215,
          "as10": 1.67,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": -1
      },
      "winston": {
        "finalScore": 44.55,
        "battleScore": 36.03,
        "coeff": 1.33,
        "matchCoef": 0.93,
        "gamesPlayed": 11,
        "rankIndex": 3,
        "det": {
          "g": 11,
          "time": 5928,
          "wr": 48,
          "el10": 15.99,
          "de10": 8.1,
          "dm10": 8346,
          "he10": 473,
          "as10": 3.14,
          "wa": 45,
          "ca": 0
        },
        "rankDelta": -3
      },
      "wrecking-ball": {
        "finalScore": 37.2,
        "battleScore": 32.88,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 689,
          "wr": 49,
          "el10": 3.48,
          "de10": 13.93,
          "dm10": 7150,
          "he10": 120,
          "as10": 0,
          "wa": 33,
          "ca": 5
        }
      },
      "wuyang": {
        "finalScore": 47.99,
        "battleScore": 42.42,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 563,
          "wr": 64,
          "el10": 11.72,
          "de10": 8.52,
          "dm10": 5069,
          "he10": 9152,
          "as10": 15.98,
          "wa": 38,
          "ca": 0
        },
        "rankDelta": 1
      },
      "zarya": {
        "finalScore": 53.09,
        "battleScore": 37.99,
        "coeff": 1.33,
        "matchCoef": 0.98,
        "gamesPlayed": 15,
        "rankIndex": 3,
        "det": {
          "g": 15,
          "time": 8036,
          "wr": 40,
          "el10": 15.38,
          "de10": 6.64,
          "dm10": 7821,
          "he10": 0,
          "as10": 3.88,
          "wa": 44,
          "ca": 0
        },
        "rankDelta": -1
      },
      "zenyatta": {
        "finalScore": 47.75,
        "battleScore": 38.31,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 3,
        "det": {
          "g": 12,
          "time": 5326,
          "wr": 57,
          "el10": 11.15,
          "de10": 7.77,
          "dm10": 5067,
          "he10": 6587,
          "as10": 15.32,
          "wa": 23,
          "ca": 11
        },
        "rankDelta": 1
      }
    }
  },
  {
    "id": "p7",
    "name": "りんご",
    "tag": "",
    "endorse": 2,
    "title": null,
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ac18099185620d9a1c5ceb2e2825cca6f113947b0907a52687c4ae8712727d02.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d3e25e2fbcb52cb41a74d7f7434cf3db435fb10e8f027c9d6efb10adcd84b880.png",
    "role": "Damage",
    "ranks": {
      "Tank": null,
      "Damage": null,
      "Support": null
    },
    "rankTier": null,
    "overall": {
      "matches": 336,
      "wins": 148,
      "losses": 188,
      "wr": 44.05,
      "kda": 1.85,
      "elim": 12.32,
      "deaths": 7.49,
      "dmg": 7186.72,
      "heal": 2341.66,
      "time": 166142
    },
    "roles": {
      "Tank": {
        "g": 98,
        "w": 38,
        "l": 60,
        "time": 47978,
        "wr": 38.78,
        "kda": 2.32,
        "elim": 14.42,
        "deaths": 6.7,
        "dmg": 9269.49,
        "heal": 587.38
      },
      "Damage": {
        "g": 136,
        "w": 58,
        "l": 78,
        "time": 65232,
        "wr": 42.65,
        "kda": 1.91,
        "elim": 15.42,
        "deaths": 8.16,
        "dmg": 9133.29,
        "heal": 492.52
      },
      "Support": {
        "g": 102,
        "w": 52,
        "l": 50,
        "time": 52932,
        "wr": 50.98,
        "kda": 1.38,
        "elim": 6.6,
        "deaths": 7.39,
        "dmg": 2899.98,
        "heal": 6210.58
      }
    },
    "heroes": [
      {
        "slug": "dva",
        "n": "D.Va",
        "role": "Tank",
        "g": 51,
        "wr": 47.06,
        "kda": 2.72
      },
      {
        "slug": "soldier-76",
        "n": "Soldier: 76",
        "role": "Damage",
        "g": 34,
        "wr": 47.06,
        "kda": 2.37
      },
      {
        "slug": "ana",
        "n": "Ana",
        "role": "Support",
        "g": 29,
        "wr": 51.72,
        "kda": 2.14
      },
      {
        "slug": "cassidy",
        "n": "Cassidy",
        "role": "Damage",
        "g": 24,
        "wr": 29.17,
        "kda": 1.52
      },
      {
        "slug": "kiriko",
        "n": "Kiriko",
        "role": "Support",
        "g": 21,
        "wr": 66.67,
        "kda": 1.27
      },
      {
        "slug": "mercy",
        "n": "Mercy",
        "role": "Support",
        "g": 20,
        "wr": 45,
        "kda": 0.57
      },
      {
        "slug": "bastion",
        "n": "Bastion",
        "role": "Damage",
        "g": 18,
        "wr": 44.44,
        "kda": 2.47
      },
      {
        "slug": "lifeweaver",
        "n": "Lifeweaver",
        "role": "Support",
        "g": 13,
        "wr": 30.77,
        "kda": 1.24
      },
      {
        "slug": "mauga",
        "n": "Mauga",
        "role": "Tank",
        "g": 11,
        "wr": 45.45,
        "kda": 2.89
      },
      {
        "slug": "ramattra",
        "n": "Ramattra",
        "role": "Tank",
        "g": 10,
        "wr": 10,
        "kda": 1.61
      },
      {
        "slug": "sojourn",
        "n": "Sojourn",
        "role": "Damage",
        "g": 9,
        "wr": 33.33,
        "kda": 2.33
      },
      {
        "slug": "tracer",
        "n": "Tracer",
        "role": "Damage",
        "g": 9,
        "wr": 55.56,
        "kda": 1.35
      },
      {
        "slug": "domina",
        "n": "Domina",
        "role": "Tank",
        "g": 8,
        "wr": 25,
        "kda": 1.98
      },
      {
        "slug": "reaper",
        "n": "Reaper",
        "role": "Damage",
        "g": 7,
        "wr": 42.86,
        "kda": 1.85
      },
      {
        "slug": "freja",
        "n": "Freja",
        "role": "Damage",
        "g": 5,
        "wr": 60,
        "kda": 2.1
      },
      {
        "slug": "mizuki",
        "n": "Mizuki",
        "role": "Support",
        "g": 5,
        "wr": 40,
        "kda": 1
      },
      {
        "slug": "moira",
        "n": "Moira",
        "role": "Support",
        "g": 5,
        "wr": 80,
        "kda": 2.42
      },
      {
        "slug": "orisa",
        "n": "Orisa",
        "role": "Tank",
        "g": 5,
        "wr": 20,
        "kda": 1.72
      },
      {
        "slug": "shion",
        "n": "Shion",
        "role": "Damage",
        "g": 5,
        "wr": 40,
        "kda": 2.17
      },
      {
        "slug": "vendetta",
        "n": "Vendetta",
        "role": "Damage",
        "g": 5,
        "wr": 40,
        "kda": 1.24
      },
      {
        "slug": "winston",
        "n": "Winston",
        "role": "Tank",
        "g": 5,
        "wr": 40,
        "kda": 1.36
      },
      {
        "slug": "anran",
        "n": "Anran",
        "role": "Damage",
        "g": 4,
        "wr": 75,
        "kda": 1.21
      },
      {
        "slug": "ashe",
        "n": "Ashe",
        "role": "Damage",
        "g": 3,
        "wr": 33.33,
        "kda": 1.86
      },
      {
        "slug": "hanzo",
        "n": "Hanzo",
        "role": "Damage",
        "g": 3,
        "wr": 0,
        "kda": 0.63
      },
      {
        "slug": "junkrat",
        "n": "Junkrat",
        "role": "Damage",
        "g": 3,
        "wr": 33.33,
        "kda": 2.09
      },
      {
        "slug": "juno",
        "n": "Juno",
        "role": "Support",
        "g": 3,
        "wr": 33.33,
        "kda": 2.75
      },
      {
        "slug": "sigma",
        "n": "Sigma",
        "role": "Tank",
        "g": 3,
        "wr": 66.67,
        "kda": 3.1
      },
      {
        "slug": "jetpack-cat",
        "n": "Jetpack Cat",
        "role": "Support",
        "g": 2,
        "wr": 50,
        "kda": 0.77
      },
      {
        "slug": "mei",
        "n": "Mei",
        "role": "Damage",
        "g": 2,
        "wr": 100,
        "kda": 3.7
      },
      {
        "slug": "venture",
        "n": "Venture",
        "role": "Damage",
        "g": 2,
        "wr": 100,
        "kda": 1.35
      },
      {
        "slug": "zarya",
        "n": "Zarya",
        "role": "Tank",
        "g": 2,
        "wr": 0,
        "kda": 0.44
      },
      {
        "slug": "zenyatta",
        "n": "Zenyatta",
        "role": "Support",
        "g": 2,
        "wr": 50,
        "kda": 1.33
      },
      {
        "slug": "baptiste",
        "n": "Baptiste",
        "role": "Support",
        "g": 1,
        "wr": 0,
        "kda": 0.86
      },
      {
        "slug": "brigitte",
        "n": "Brigitte",
        "role": "Support",
        "g": 1,
        "wr": 100,
        "kda": 3
      },
      {
        "slug": "emre",
        "n": "Emre",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 1
      },
      {
        "slug": "junker-queen",
        "n": "Junker Queen",
        "role": "Tank",
        "g": 1,
        "wr": 0,
        "kda": 0.6
      },
      {
        "slug": "reinhardt",
        "n": "Reinhardt",
        "role": "Tank",
        "g": 1,
        "wr": 100,
        "kda": 1.4
      },
      {
        "slug": "roadhog",
        "n": "Roadhog",
        "role": "Tank",
        "g": 1,
        "wr": 0,
        "kda": 1.25
      },
      {
        "slug": "symmetra",
        "n": "Symmetra",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 1
      },
      {
        "slug": "widowmaker",
        "n": "Widowmaker",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 0.83
      }
    ],
    "bscore": {
      "ana": {
        "finalScore": 36.42,
        "battleScore": 35.96,
        "coeff": 1,
        "matchCoef": 1.01,
        "gamesPlayed": 29,
        "rankIndex": 0,
        "det": {
          "g": 29,
          "time": 14186,
          "wr": 50,
          "el10": 8.16,
          "de10": 6.94,
          "dm10": 3119,
          "he10": 4658,
          "as10": 11.89,
          "wa": 39,
          "ca": 0
        }
      },
      "anran": {
        "finalScore": 48.5,
        "battleScore": 35.02,
        "coeff": 1,
        "matchCoef": 0.92,
        "gamesPlayed": 4,
        "rankIndex": 0,
        "det": {
          "g": 4,
          "time": 1917,
          "wr": 75,
          "el10": 10.64,
          "de10": 8.77,
          "dm10": 4683,
          "he10": 342,
          "as10": 0,
          "wa": 24,
          "ca": 13
        },
        "rankDelta": 1
      },
      "ashe": {
        "finalScore": 29.34,
        "battleScore": 34.51,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 0,
        "det": {
          "g": 3,
          "time": 1552,
          "wr": 33,
          "el10": 15.07,
          "de10": 8.12,
          "dm10": 6746,
          "he10": 0,
          "as10": 0.39,
          "wa": 37,
          "ca": 15
        }
      },
      "baptiste": {
        "finalScore": 26.85,
        "battleScore": 31.59,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 830,
          "wr": 0,
          "el10": 8.67,
          "de10": 10.12,
          "dm10": 2390,
          "he10": 5916,
          "as10": 13.01,
          "wa": 15,
          "ca": 12
        }
      },
      "bastion": {
        "finalScore": 60.92,
        "battleScore": 37.54,
        "coeff": 1,
        "matchCoef": 0.99,
        "gamesPlayed": 18,
        "rankIndex": 0,
        "det": {
          "g": 18,
          "time": 8519,
          "wr": 44,
          "el10": 16.2,
          "de10": 6.55,
          "dm10": 8578,
          "he10": 121,
          "as10": 0.7,
          "wa": 25,
          "ca": 3
        },
        "rankDelta": 1
      },
      "brigitte": {
        "finalScore": 34.1,
        "battleScore": 40.12,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 341,
          "wr": 100,
          "el10": 12.33,
          "de10": 7.04,
          "dm10": 2291,
          "he10": 5379,
          "as10": 28.18,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": 1
      },
      "cassidy": {
        "finalScore": 34.81,
        "battleScore": 34.94,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 24,
        "rankIndex": 0,
        "det": {
          "g": 24,
          "time": 11024,
          "wr": 27,
          "el10": 13.39,
          "de10": 8.82,
          "dm10": 6741,
          "he10": 154,
          "as10": 1.69,
          "wa": 38,
          "ca": 8
        }
      },
      "domina": {
        "finalScore": 31.84,
        "battleScore": 35.33,
        "coeff": 1,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 0,
        "det": {
          "g": 8,
          "time": 3920,
          "wr": 32,
          "el10": 13.32,
          "de10": 6.74,
          "dm10": 6788,
          "he10": 1705,
          "as10": 1.07,
          "wa": 30,
          "ca": 10
        }
      },
      "dva": {
        "finalScore": 38.42,
        "battleScore": 36.18,
        "coeff": 1,
        "matchCoef": 1.06,
        "gamesPlayed": 51,
        "rankIndex": 0,
        "det": {
          "g": 51,
          "time": 25151,
          "wr": 46,
          "el10": 15.96,
          "de10": 5.87,
          "dm10": 6148,
          "he10": 342,
          "as10": 5.37,
          "wa": 20,
          "ca": 9
        }
      },
      "emre": {
        "finalScore": 29.5,
        "battleScore": 34.71,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 223,
          "wr": 0,
          "el10": 13.45,
          "de10": 13.45,
          "dm10": 8441,
          "he10": 767,
          "as10": 0,
          "wa": 33,
          "ca": 11
        },
        "rankDelta": -2
      },
      "freja": {
        "finalScore": 32.22,
        "battleScore": 37.44,
        "coeff": 1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 1973,
          "wr": 65,
          "el10": 12.77,
          "de10": 6.08,
          "dm10": 6910,
          "he10": 0,
          "as10": 0.3,
          "wa": 25,
          "ca": 5
        }
      },
      "hanzo": {
        "finalScore": 24.16,
        "battleScore": 28.42,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 0,
        "det": {
          "g": 3,
          "time": 1083,
          "wr": 3,
          "el10": 5.54,
          "de10": 8.87,
          "dm10": 4667,
          "he10": 0,
          "as10": 0,
          "wa": 18,
          "ca": 14
        }
      },
      "jetpack-cat": {
        "finalScore": 24.69,
        "battleScore": 29.04,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 735,
          "wr": 17,
          "el10": 5.71,
          "de10": 10.61,
          "dm10": 1474,
          "he10": 5938,
          "as10": 4.89,
          "wa": 24,
          "ca": 9
        }
      },
      "junker-queen": {
        "finalScore": 24.88,
        "battleScore": 29.27,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 306,
          "wr": 0,
          "el10": 5.88,
          "de10": 9.8,
          "dm10": 6885,
          "he10": 1435,
          "as10": 0,
          "wa": 33,
          "ca": 15
        }
      },
      "junkrat": {
        "finalScore": 29.28,
        "battleScore": 34.45,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 0,
        "det": {
          "g": 3,
          "time": 1611,
          "wr": 33,
          "el10": 16.02,
          "de10": 8.57,
          "dm10": 6859,
          "he10": 0,
          "as10": 1.86,
          "wa": 18,
          "ca": 0
        },
        "rankDelta": -3
      },
      "juno": {
        "finalScore": 32.63,
        "battleScore": 38.39,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 0,
        "det": {
          "g": 3,
          "time": 1275,
          "wr": 31,
          "el10": 15.53,
          "de10": 5.65,
          "dm10": 3061,
          "he10": 5168,
          "as10": 13.65,
          "wa": 30,
          "ca": 4
        },
        "rankDelta": 4
      },
      "kiriko": {
        "finalScore": 35.59,
        "battleScore": 36.13,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 21,
        "rankIndex": 0,
        "det": {
          "g": 21,
          "time": 11655,
          "wr": 67,
          "el10": 5.97,
          "de10": 7.46,
          "dm10": 2129,
          "he10": 5986,
          "as10": 15.75,
          "wa": 19,
          "ca": 11
        }
      },
      "lifeweaver": {
        "finalScore": 29.64,
        "battleScore": 31.42,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 0,
        "det": {
          "g": 13,
          "time": 6822,
          "wr": 30,
          "el10": 7.04,
          "de10": 6.24,
          "dm10": 1522,
          "he10": 7686,
          "as10": 12.84,
          "wa": 21,
          "ca": 10
        },
        "rankDelta": 3
      },
      "mauga": {
        "finalScore": 48.46,
        "battleScore": 35.74,
        "coeff": 1,
        "matchCoef": 0.96,
        "gamesPlayed": 11,
        "rankIndex": 0,
        "det": {
          "g": 11,
          "time": 5772,
          "wr": 44,
          "el10": 18.5,
          "de10": 8.73,
          "dm10": 9524,
          "he10": 1277,
          "as10": 9.98,
          "wa": 25,
          "ca": 13
        },
        "rankDelta": -3
      },
      "mei": {
        "finalScore": 35.91,
        "battleScore": 42.24,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 943,
          "wr": 100,
          "el10": 17.17,
          "de10": 6.36,
          "dm10": 5383,
          "he10": 1426,
          "as10": 6.36,
          "wa": 35,
          "ca": 0
        }
      },
      "mercy": {
        "finalScore": 33.12,
        "battleScore": 33.77,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 0,
        "det": {
          "g": 20,
          "time": 10074,
          "wr": 46,
          "el10": 0.54,
          "de10": 8.52,
          "dm10": 59.5,
          "he10": 7197,
          "as10": 15.55,
          "wa": 17,
          "ca": 11
        },
        "rankDelta": -1
      },
      "mizuki": {
        "finalScore": 29.19,
        "battleScore": 33.92,
        "coeff": 1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2934,
          "wr": 38,
          "el10": 8.18,
          "de10": 8.18,
          "dm10": 3144,
          "he10": 8561,
          "as10": 11.86,
          "wa": 20,
          "ca": 12
        }
      },
      "moira": {
        "finalScore": 57.22,
        "battleScore": 39.67,
        "coeff": 1,
        "matchCoef": 0.93,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2974,
          "wr": 76,
          "el10": 15.13,
          "de10": 6.25,
          "dm10": 4073,
          "he10": 6521,
          "as10": 10.29,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": -1
      },
      "orisa": {
        "finalScore": 28.03,
        "battleScore": 32.57,
        "coeff": 1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2613,
          "wr": 19,
          "el10": 11.02,
          "de10": 8.27,
          "dm10": 7793,
          "he10": 170,
          "as10": 3.21,
          "wa": 25,
          "ca": 11
        }
      },
      "ramattra": {
        "finalScore": 45.07,
        "battleScore": 29.05,
        "coeff": 1,
        "matchCoef": 0.96,
        "gamesPlayed": 10,
        "rankIndex": 0,
        "det": {
          "g": 10,
          "time": 4296,
          "wr": 14,
          "el10": 9.78,
          "de10": 6.84,
          "dm10": 6614,
          "he10": 220,
          "as10": 1.26,
          "wa": 19,
          "ca": 8
        }
      },
      "reaper": {
        "finalScore": 52.96,
        "battleScore": 31.66,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 7,
        "rankIndex": 0,
        "det": {
          "g": 7,
          "time": 3807,
          "wr": 34,
          "el10": 18.13,
          "de10": 9.77,
          "dm10": 5211,
          "he10": 1036,
          "as10": 0,
          "wa": 22,
          "ca": 10
        },
        "rankDelta": 1
      },
      "reinhardt": {
        "finalScore": 31.34,
        "battleScore": 36.87,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 668,
          "wr": 83,
          "el10": 5.39,
          "de10": 4.49,
          "dm10": 3123,
          "he10": 0,
          "as10": 0.9,
          "wa": 0,
          "ca": 0
        }
      },
      "roadhog": {
        "finalScore": 24.48,
        "battleScore": 28.8,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 633,
          "wr": 0,
          "el10": 8.54,
          "de10": 7.59,
          "dm10": 4295,
          "he10": 2561,
          "as10": 0.95,
          "wa": 16,
          "ca": 7
        }
      },
      "shion": {
        "finalScore": 31.64,
        "battleScore": 36.76,
        "coeff": 1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2271,
          "wr": 40,
          "el10": 17.17,
          "de10": 7.93,
          "dm10": 6215,
          "he10": 82.6,
          "as10": 1.59,
          "wa": 27,
          "ca": 14
        },
        "rankDelta": 1
      },
      "sigma": {
        "finalScore": 50.06,
        "battleScore": 36.08,
        "coeff": 1,
        "matchCoef": 0.92,
        "gamesPlayed": 3,
        "rankIndex": 0,
        "det": {
          "g": 3,
          "time": 1559,
          "wr": 62,
          "el10": 11.16,
          "de10": 3.85,
          "dm10": 6019,
          "he10": 0,
          "as10": 0.77,
          "wa": 34,
          "ca": 0
        },
        "rankDelta": 1
      },
      "sojourn": {
        "finalScore": 32.45,
        "battleScore": 35.6,
        "coeff": 1,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 0,
        "det": {
          "g": 9,
          "time": 4829,
          "wr": 35,
          "el10": 19.13,
          "de10": 8.2,
          "dm10": 7150,
          "he10": 0,
          "as10": 0,
          "wa": 25,
          "ca": 9
        },
        "rankDelta": -1
      },
      "soldier-76": {
        "finalScore": 40.91,
        "battleScore": 39.85,
        "coeff": 1,
        "matchCoef": 1.03,
        "gamesPlayed": 34,
        "rankIndex": 0,
        "det": {
          "g": 34,
          "time": 16452,
          "wr": 47,
          "el10": 17.69,
          "de10": 7.48,
          "dm10": 8130,
          "he10": 1368,
          "as10": 1.71,
          "wa": 29,
          "ca": 10
        },
        "rankDelta": -1
      },
      "symmetra": {
        "finalScore": 26.74,
        "battleScore": 31.45,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 120,
          "wr": 0,
          "el10": 9.98,
          "de10": 9.98,
          "dm10": 3312,
          "he10": 18.36,
          "as10": 4.99,
          "wa": 31,
          "ca": 0
        }
      },
      "tracer": {
        "finalScore": 31.23,
        "battleScore": 34.26,
        "coeff": 1,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 0,
        "det": {
          "g": 9,
          "time": 4563,
          "wr": 55,
          "el10": 13.28,
          "de10": 9.86,
          "dm10": 4041,
          "he10": 0,
          "as10": 0,
          "wa": 24,
          "ca": 7
        }
      },
      "vendetta": {
        "finalScore": 30.69,
        "battleScore": 35.66,
        "coeff": 1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2307,
          "wr": 41,
          "el10": 11.96,
          "de10": 9.62,
          "dm10": 5813,
          "he10": 124,
          "as10": 1.3,
          "wa": 0,
          "ca": 0
        }
      },
      "venture": {
        "finalScore": 30.95,
        "battleScore": 36.41,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 1250,
          "wr": 100,
          "el10": 11.04,
          "de10": 8.16,
          "dm10": 4445,
          "he10": 0,
          "as10": 0.48,
          "wa": 26,
          "ca": 0
        }
      },
      "widowmaker": {
        "finalScore": 30.13,
        "battleScore": 35.45,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 369,
          "wr": 6,
          "el10": 8.14,
          "de10": 9.76,
          "dm10": 3997,
          "he10": 0,
          "as10": 0,
          "wa": 42,
          "ca": 7
        },
        "rankDelta": 2
      },
      "winston": {
        "finalScore": 31.38,
        "battleScore": 36.46,
        "coeff": 1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2302,
          "wr": 43,
          "el10": 12.77,
          "de10": 9.38,
          "dm10": 4673,
          "he10": 816,
          "as10": 3.65,
          "wa": 47,
          "ca": 0
        },
        "rankDelta": -4
      },
      "zarya": {
        "finalScore": 41.09,
        "battleScore": 28.15,
        "coeff": 1,
        "matchCoef": 0.92,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 594,
          "wr": 0,
          "el10": 4.04,
          "de10": 9.09,
          "dm10": 4525,
          "he10": 0,
          "as10": 0,
          "wa": 32,
          "ca": 0
        },
        "rankDelta": 1
      },
      "zenyatta": {
        "finalScore": 26.6,
        "battleScore": 31.3,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 947,
          "wr": 17,
          "el10": 6.33,
          "de10": 7.6,
          "dm10": 3494,
          "he10": 5352,
          "as10": 16.47,
          "wa": 12,
          "ca": 6
        }
      }
    },
    "bscoreAll": {
      "ana": {
        "finalScore": 36.42,
        "battleScore": 35.96,
        "coeff": 1,
        "matchCoef": 1.01,
        "gamesPlayed": 29,
        "rankIndex": 0,
        "det": {
          "g": 29,
          "time": 14186,
          "wr": 50,
          "el10": 8.16,
          "de10": 6.94,
          "dm10": 3119,
          "he10": 4658,
          "as10": 11.89,
          "wa": 39,
          "ca": 0
        }
      },
      "anran": {
        "finalScore": 48.5,
        "battleScore": 35.02,
        "coeff": 1,
        "matchCoef": 0.92,
        "gamesPlayed": 4,
        "rankIndex": 0,
        "det": {
          "g": 4,
          "time": 1917,
          "wr": 75,
          "el10": 10.64,
          "de10": 8.77,
          "dm10": 4683,
          "he10": 342,
          "as10": 0,
          "wa": 24,
          "ca": 13
        },
        "rankDelta": 1
      },
      "ashe": {
        "finalScore": 29.34,
        "battleScore": 34.51,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 0,
        "det": {
          "g": 3,
          "time": 1552,
          "wr": 33,
          "el10": 15.07,
          "de10": 8.12,
          "dm10": 6746,
          "he10": 0,
          "as10": 0.39,
          "wa": 37,
          "ca": 15
        }
      },
      "baptiste": {
        "finalScore": 26.85,
        "battleScore": 31.59,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 830,
          "wr": 0,
          "el10": 8.67,
          "de10": 10.12,
          "dm10": 2390,
          "he10": 5916,
          "as10": 13.01,
          "wa": 15,
          "ca": 12
        }
      },
      "bastion": {
        "finalScore": 60.92,
        "battleScore": 37.54,
        "coeff": 1,
        "matchCoef": 0.99,
        "gamesPlayed": 18,
        "rankIndex": 0,
        "det": {
          "g": 18,
          "time": 8519,
          "wr": 44,
          "el10": 16.2,
          "de10": 6.55,
          "dm10": 8578,
          "he10": 121,
          "as10": 0.7,
          "wa": 25,
          "ca": 3
        },
        "rankDelta": 1
      },
      "brigitte": {
        "finalScore": 34.1,
        "battleScore": 40.12,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 341,
          "wr": 100,
          "el10": 12.33,
          "de10": 7.04,
          "dm10": 2291,
          "he10": 5379,
          "as10": 28.18,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": 1
      },
      "cassidy": {
        "finalScore": 34.81,
        "battleScore": 34.94,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 24,
        "rankIndex": 0,
        "det": {
          "g": 24,
          "time": 11024,
          "wr": 27,
          "el10": 13.39,
          "de10": 8.82,
          "dm10": 6741,
          "he10": 154,
          "as10": 1.69,
          "wa": 38,
          "ca": 8
        }
      },
      "domina": {
        "finalScore": 31.84,
        "battleScore": 35.33,
        "coeff": 1,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 0,
        "det": {
          "g": 8,
          "time": 3920,
          "wr": 32,
          "el10": 13.32,
          "de10": 6.74,
          "dm10": 6788,
          "he10": 1705,
          "as10": 1.07,
          "wa": 30,
          "ca": 10
        }
      },
      "dva": {
        "finalScore": 38.42,
        "battleScore": 36.18,
        "coeff": 1,
        "matchCoef": 1.06,
        "gamesPlayed": 51,
        "rankIndex": 0,
        "det": {
          "g": 51,
          "time": 25151,
          "wr": 46,
          "el10": 15.96,
          "de10": 5.87,
          "dm10": 6148,
          "he10": 342,
          "as10": 5.37,
          "wa": 20,
          "ca": 9
        }
      },
      "emre": {
        "finalScore": 29.5,
        "battleScore": 34.71,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 223,
          "wr": 0,
          "el10": 13.45,
          "de10": 13.45,
          "dm10": 8441,
          "he10": 767,
          "as10": 0,
          "wa": 33,
          "ca": 11
        },
        "rankDelta": -2
      },
      "freja": {
        "finalScore": 32.22,
        "battleScore": 37.44,
        "coeff": 1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 1973,
          "wr": 65,
          "el10": 12.77,
          "de10": 6.08,
          "dm10": 6910,
          "he10": 0,
          "as10": 0.3,
          "wa": 25,
          "ca": 5
        }
      },
      "hanzo": {
        "finalScore": 24.16,
        "battleScore": 28.42,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 0,
        "det": {
          "g": 3,
          "time": 1083,
          "wr": 3,
          "el10": 5.54,
          "de10": 8.87,
          "dm10": 4667,
          "he10": 0,
          "as10": 0,
          "wa": 18,
          "ca": 14
        }
      },
      "jetpack-cat": {
        "finalScore": 24.69,
        "battleScore": 29.04,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 735,
          "wr": 17,
          "el10": 5.71,
          "de10": 10.61,
          "dm10": 1474,
          "he10": 5938,
          "as10": 4.89,
          "wa": 24,
          "ca": 9
        }
      },
      "junker-queen": {
        "finalScore": 24.88,
        "battleScore": 29.27,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 306,
          "wr": 0,
          "el10": 5.88,
          "de10": 9.8,
          "dm10": 6885,
          "he10": 1435,
          "as10": 0,
          "wa": 33,
          "ca": 15
        }
      },
      "junkrat": {
        "finalScore": 29.28,
        "battleScore": 34.45,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 0,
        "det": {
          "g": 3,
          "time": 1611,
          "wr": 33,
          "el10": 16.02,
          "de10": 8.57,
          "dm10": 6859,
          "he10": 0,
          "as10": 1.86,
          "wa": 18,
          "ca": 0
        },
        "rankDelta": -3
      },
      "juno": {
        "finalScore": 32.63,
        "battleScore": 38.39,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 0,
        "det": {
          "g": 3,
          "time": 1275,
          "wr": 31,
          "el10": 15.53,
          "de10": 5.65,
          "dm10": 3061,
          "he10": 5168,
          "as10": 13.65,
          "wa": 30,
          "ca": 4
        },
        "rankDelta": 4
      },
      "kiriko": {
        "finalScore": 35.59,
        "battleScore": 36.13,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 21,
        "rankIndex": 0,
        "det": {
          "g": 21,
          "time": 11655,
          "wr": 67,
          "el10": 5.97,
          "de10": 7.46,
          "dm10": 2129,
          "he10": 5986,
          "as10": 15.75,
          "wa": 19,
          "ca": 11
        }
      },
      "lifeweaver": {
        "finalScore": 29.64,
        "battleScore": 31.42,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 0,
        "det": {
          "g": 13,
          "time": 6822,
          "wr": 30,
          "el10": 7.04,
          "de10": 6.24,
          "dm10": 1522,
          "he10": 7686,
          "as10": 12.84,
          "wa": 21,
          "ca": 10
        },
        "rankDelta": 3
      },
      "mauga": {
        "finalScore": 48.46,
        "battleScore": 35.74,
        "coeff": 1,
        "matchCoef": 0.96,
        "gamesPlayed": 11,
        "rankIndex": 0,
        "det": {
          "g": 11,
          "time": 5772,
          "wr": 44,
          "el10": 18.5,
          "de10": 8.73,
          "dm10": 9524,
          "he10": 1277,
          "as10": 9.98,
          "wa": 25,
          "ca": 13
        },
        "rankDelta": -3
      },
      "mei": {
        "finalScore": 35.91,
        "battleScore": 42.24,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 943,
          "wr": 100,
          "el10": 17.17,
          "de10": 6.36,
          "dm10": 5383,
          "he10": 1426,
          "as10": 6.36,
          "wa": 35,
          "ca": 0
        }
      },
      "mercy": {
        "finalScore": 33.12,
        "battleScore": 33.77,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 0,
        "det": {
          "g": 20,
          "time": 10074,
          "wr": 46,
          "el10": 0.54,
          "de10": 8.52,
          "dm10": 59.5,
          "he10": 7197,
          "as10": 15.55,
          "wa": 17,
          "ca": 11
        },
        "rankDelta": -1
      },
      "mizuki": {
        "finalScore": 29.19,
        "battleScore": 33.92,
        "coeff": 1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2934,
          "wr": 38,
          "el10": 8.18,
          "de10": 8.18,
          "dm10": 3144,
          "he10": 8561,
          "as10": 11.86,
          "wa": 20,
          "ca": 12
        }
      },
      "moira": {
        "finalScore": 57.22,
        "battleScore": 39.67,
        "coeff": 1,
        "matchCoef": 0.93,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2974,
          "wr": 76,
          "el10": 15.13,
          "de10": 6.25,
          "dm10": 4073,
          "he10": 6521,
          "as10": 10.29,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": -1
      },
      "orisa": {
        "finalScore": 28.03,
        "battleScore": 32.57,
        "coeff": 1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2613,
          "wr": 19,
          "el10": 11.02,
          "de10": 8.27,
          "dm10": 7793,
          "he10": 170,
          "as10": 3.21,
          "wa": 25,
          "ca": 11
        }
      },
      "ramattra": {
        "finalScore": 45.07,
        "battleScore": 29.05,
        "coeff": 1,
        "matchCoef": 0.96,
        "gamesPlayed": 10,
        "rankIndex": 0,
        "det": {
          "g": 10,
          "time": 4296,
          "wr": 14,
          "el10": 9.78,
          "de10": 6.84,
          "dm10": 6614,
          "he10": 220,
          "as10": 1.26,
          "wa": 19,
          "ca": 8
        }
      },
      "reaper": {
        "finalScore": 52.96,
        "battleScore": 31.66,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 7,
        "rankIndex": 0,
        "det": {
          "g": 7,
          "time": 3807,
          "wr": 34,
          "el10": 18.13,
          "de10": 9.77,
          "dm10": 5211,
          "he10": 1036,
          "as10": 0,
          "wa": 22,
          "ca": 10
        },
        "rankDelta": 1
      },
      "reinhardt": {
        "finalScore": 31.34,
        "battleScore": 36.87,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 668,
          "wr": 83,
          "el10": 5.39,
          "de10": 4.49,
          "dm10": 3123,
          "he10": 0,
          "as10": 0.9,
          "wa": 0,
          "ca": 0
        }
      },
      "roadhog": {
        "finalScore": 24.48,
        "battleScore": 28.8,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 633,
          "wr": 0,
          "el10": 8.54,
          "de10": 7.59,
          "dm10": 4295,
          "he10": 2561,
          "as10": 0.95,
          "wa": 16,
          "ca": 7
        }
      },
      "shion": {
        "finalScore": 31.64,
        "battleScore": 36.76,
        "coeff": 1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2271,
          "wr": 40,
          "el10": 17.17,
          "de10": 7.93,
          "dm10": 6215,
          "he10": 82.6,
          "as10": 1.59,
          "wa": 27,
          "ca": 14
        },
        "rankDelta": 1
      },
      "sigma": {
        "finalScore": 50.06,
        "battleScore": 36.08,
        "coeff": 1,
        "matchCoef": 0.92,
        "gamesPlayed": 3,
        "rankIndex": 0,
        "det": {
          "g": 3,
          "time": 1559,
          "wr": 62,
          "el10": 11.16,
          "de10": 3.85,
          "dm10": 6019,
          "he10": 0,
          "as10": 0.77,
          "wa": 34,
          "ca": 0
        },
        "rankDelta": 1
      },
      "sojourn": {
        "finalScore": 32.45,
        "battleScore": 35.6,
        "coeff": 1,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 0,
        "det": {
          "g": 9,
          "time": 4829,
          "wr": 35,
          "el10": 19.13,
          "de10": 8.2,
          "dm10": 7150,
          "he10": 0,
          "as10": 0,
          "wa": 25,
          "ca": 9
        },
        "rankDelta": -1
      },
      "soldier-76": {
        "finalScore": 40.91,
        "battleScore": 39.85,
        "coeff": 1,
        "matchCoef": 1.03,
        "gamesPlayed": 34,
        "rankIndex": 0,
        "det": {
          "g": 34,
          "time": 16452,
          "wr": 47,
          "el10": 17.69,
          "de10": 7.48,
          "dm10": 8130,
          "he10": 1368,
          "as10": 1.71,
          "wa": 29,
          "ca": 10
        },
        "rankDelta": -1
      },
      "symmetra": {
        "finalScore": 26.74,
        "battleScore": 31.45,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 120,
          "wr": 0,
          "el10": 9.98,
          "de10": 9.98,
          "dm10": 3312,
          "he10": 18.36,
          "as10": 4.99,
          "wa": 31,
          "ca": 0
        }
      },
      "tracer": {
        "finalScore": 31.23,
        "battleScore": 34.26,
        "coeff": 1,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 0,
        "det": {
          "g": 9,
          "time": 4563,
          "wr": 55,
          "el10": 13.28,
          "de10": 9.86,
          "dm10": 4041,
          "he10": 0,
          "as10": 0,
          "wa": 24,
          "ca": 7
        }
      },
      "vendetta": {
        "finalScore": 30.69,
        "battleScore": 35.66,
        "coeff": 1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2307,
          "wr": 41,
          "el10": 11.96,
          "de10": 9.62,
          "dm10": 5813,
          "he10": 124,
          "as10": 1.3,
          "wa": 0,
          "ca": 0
        }
      },
      "venture": {
        "finalScore": 30.95,
        "battleScore": 36.41,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 1250,
          "wr": 100,
          "el10": 11.04,
          "de10": 8.16,
          "dm10": 4445,
          "he10": 0,
          "as10": 0.48,
          "wa": 26,
          "ca": 0
        }
      },
      "widowmaker": {
        "finalScore": 30.13,
        "battleScore": 35.45,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 369,
          "wr": 6,
          "el10": 8.14,
          "de10": 9.76,
          "dm10": 3997,
          "he10": 0,
          "as10": 0,
          "wa": 42,
          "ca": 7
        },
        "rankDelta": 2
      },
      "winston": {
        "finalScore": 31.38,
        "battleScore": 36.46,
        "coeff": 1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2302,
          "wr": 43,
          "el10": 12.77,
          "de10": 9.38,
          "dm10": 4673,
          "he10": 816,
          "as10": 3.65,
          "wa": 47,
          "ca": 0
        },
        "rankDelta": -4
      },
      "zarya": {
        "finalScore": 41.09,
        "battleScore": 28.15,
        "coeff": 1,
        "matchCoef": 0.92,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 594,
          "wr": 0,
          "el10": 4.04,
          "de10": 9.09,
          "dm10": 4525,
          "he10": 0,
          "as10": 0,
          "wa": 32,
          "ca": 0
        },
        "rankDelta": 1
      },
      "zenyatta": {
        "finalScore": 26.6,
        "battleScore": 31.3,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 947,
          "wr": 17,
          "el10": 6.33,
          "de10": 7.6,
          "dm10": 3494,
          "he10": 5352,
          "as10": 16.47,
          "wa": 12,
          "ca": 6
        }
      }
    }
  }
];
