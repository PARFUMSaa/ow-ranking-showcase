'use strict';

/* 生成データ: update.mjs が自動生成(手編集は上書き) ・ 元データ: OverFast API */
const LAST_UPDATED_ISO = "2026-10-16T12:12:12.080Z";
/* ライバル・プレイ(コンペティティブ)のみ */
const PLAYERS_COMP = [
  {
    "id": "hiyori",
    "pid": "71bf7e095199184f0373963307b032dafdea771631451a4bf458092eb1|fc2ba3f2117372f760ba9195a971d346",
    "name": "ひよりっつぁっん",
    "tag": "#3327",
    "endorse": 3,
    "title": "<3",
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3cc71b576b1acf459e9536d67996ee89e9169a3da8f15a862d4822c70c945ea7.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e1ad0e4fbed41fa30cbe653f3b24660aa92ec0cddef43008186349ff69739f56.png",
    "role": "Damage",
    "ranks": {
      "Tank": null,
      "Damage": {
        "division": "platinum",
        "tier": 5,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_PlatinumTier.694340e3a5b2031d4fac9eb1d8f52c6855d4c072.png"
      },
      "Support": null
    },
    "rankTier": "Platinum 5",
    "overall": {
      "matches": 12,
      "wins": 3,
      "losses": 9,
      "wr": 25,
      "kda": 2,
      "elim": 16.26,
      "deaths": 8.13,
      "dmg": 11585.37,
      "heal": 493.97,
      "time": 7011,
      "tot": {
        "e": 190,
        "a": 0,
        "dd": 95,
        "dm": 135375,
        "he": 5772
      }
    },
    "roles": {
      "Damage": {
        "g": 12,
        "w": 3,
        "l": 9,
        "time": 7011,
        "wr": 25,
        "kda": 2,
        "elim": 16.26,
        "deaths": 8.13,
        "dmg": 11585.37,
        "heal": 493.97
      }
    },
    "heroes": [
      {
        "slug": "soldier-76",
        "n": "Soldier: 76",
        "role": "Damage",
        "g": 4,
        "wr": 0,
        "kda": 2.19
      },
      {
        "slug": "cassidy",
        "n": "Cassidy",
        "role": "Damage",
        "g": 3,
        "wr": 66.67,
        "kda": 2.77
      },
      {
        "slug": "sierra",
        "n": "Sierra",
        "role": "Damage",
        "g": 2,
        "wr": 50,
        "kda": 1.79
      },
      {
        "slug": "ashe",
        "n": "Ashe",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 1.38
      },
      {
        "slug": "bastion",
        "n": "Bastion",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 1.64
      },
      {
        "slug": "reaper",
        "n": "Reaper",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 0.5
      }
    ],
    "bscore": {
      "ashe": {
        "finalScore": 41.17,
        "battleScore": 36.39,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 445,
          "wr": 0,
          "el10": 14.82,
          "de10": 10.78,
          "dm10": 7559,
          "he10": 0,
          "as10": 0,
          "wa": 33,
          "ca": 8
        }
      },
      "bastion": {
        "finalScore": 56.49,
        "battleScore": 36.91,
        "coeff": 1.33,
        "matchCoef": 0.92,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 672,
          "wr": 0,
          "el10": 16.08,
          "de10": 9.83,
          "dm10": 8501,
          "he10": 449,
          "as10": 0.89,
          "wa": 20,
          "ca": 2
        }
      },
      "cassidy": {
        "finalScore": 44.71,
        "battleScore": 39.52,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 3,
        "det": {
          "g": 3,
          "time": 1957,
          "wr": 50,
          "el10": 18.71,
          "de10": 6.75,
          "dm10": 9690,
          "he10": 0,
          "as10": 2.15,
          "wa": 38,
          "ca": 9
        }
      },
      "reaper": {
        "finalScore": 48.29,
        "battleScore": 31.55,
        "coeff": 1.33,
        "matchCoef": 0.92,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 450,
          "wr": 0,
          "el10": 5.33,
          "de10": 10.66,
          "dm10": 4388,
          "he10": 584,
          "as10": 0,
          "wa": 21,
          "ca": 7
        }
      },
      "sierra": {
        "finalScore": 44.26,
        "battleScore": 39.12,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 1067,
          "wr": 61,
          "el10": 14.06,
          "de10": 7.88,
          "dm10": 10006,
          "he10": 0,
          "as10": 1.13,
          "wa": 26,
          "ca": 13
        }
      },
      "soldier-76": {
        "finalScore": 41.06,
        "battleScore": 36.29,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 3,
        "det": {
          "g": 4,
          "time": 2353,
          "wr": 14,
          "el10": 17.85,
          "de10": 8.16,
          "dm10": 9361,
          "he10": 1232,
          "as10": 0.25,
          "wa": 35,
          "ca": 10
        }
      }
    },
    "recent": [
      {
        "d": "2026-09-17",
        "g": {},
        "m": 51,
        "w": 29,
        "l": 22,
        "t": 34838,
        "k": 2.29,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-09-18",
        "g": {},
        "m": 51,
        "w": 29,
        "l": 22,
        "t": 34838,
        "k": 2.29,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-09-19",
        "g": {},
        "m": 51,
        "w": 29,
        "l": 22,
        "t": 34838,
        "k": 2.29,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-09-20",
        "g": {},
        "m": 51,
        "w": 29,
        "l": 22,
        "t": 34838,
        "k": 2.29,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-09-21",
        "g": {},
        "m": 51,
        "w": 29,
        "l": 22,
        "t": 34838,
        "k": 2.29,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-09-22",
        "g": {},
        "m": 51,
        "w": 29,
        "l": 22,
        "t": 34838,
        "k": 2.29,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-09-23",
        "g": {},
        "m": 51,
        "w": 29,
        "l": 22,
        "t": 34838,
        "k": 2.29,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-09-24",
        "g": {},
        "m": 51,
        "w": 29,
        "l": 22,
        "t": 34838,
        "k": 2.29,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-09-25",
        "g": {},
        "m": 51,
        "w": 29,
        "l": 22,
        "t": 34838,
        "k": 2.29,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-09-26",
        "g": {},
        "m": 51,
        "w": 29,
        "l": 22,
        "t": 34838,
        "k": 2.29,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-09-27",
        "g": {},
        "m": 51,
        "w": 29,
        "l": 22,
        "t": 34838,
        "k": 2.29,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-09-28",
        "g": {},
        "m": 51,
        "w": 29,
        "l": 22,
        "t": 34838,
        "k": 2.29,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-09-29",
        "g": {},
        "m": 51,
        "w": 29,
        "l": 22,
        "t": 34838,
        "k": 2.29,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-09-30",
        "g": {},
        "m": 51,
        "w": 29,
        "l": 22,
        "t": 34838,
        "k": 2.29,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-10-01",
        "g": {},
        "m": 51,
        "w": 29,
        "l": 22,
        "t": 34838,
        "k": 2.29,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-10-02",
        "g": {},
        "m": 51,
        "w": 29,
        "l": 22,
        "t": 34838,
        "k": 2.29,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-10-03",
        "g": {},
        "m": 51,
        "w": 29,
        "l": 22,
        "t": 34838,
        "k": 2.29,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-10-04",
        "g": {},
        "m": 51,
        "w": 29,
        "l": 22,
        "t": 34838,
        "k": 2.29,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-10-05",
        "g": {},
        "m": 57,
        "w": 32,
        "l": 25,
        "t": 38693,
        "k": 2.27,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-10-06",
        "g": {},
        "m": 68,
        "w": 37,
        "l": 31,
        "t": 45905,
        "k": 2.15,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-10-07",
        "g": {},
        "m": 80,
        "w": 43,
        "l": 37,
        "t": 51447,
        "k": 2.15,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "platinum-4",
          "Support": null
        }
      },
      {
        "d": "2026-10-08",
        "g": {},
        "m": 8,
        "w": 4,
        "l": 4,
        "t": 4017,
        "k": 2.46,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "platinum-4",
          "Support": null
        }
      },
      {
        "d": "2026-10-09",
        "g": {},
        "m": 12,
        "w": 3,
        "l": 9,
        "t": 7011,
        "k": 2,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "platinum-5",
          "Support": null
        }
      },
      {
        "d": "2026-10-10",
        "g": {},
        "m": 12,
        "w": 3,
        "l": 9,
        "t": 7011,
        "k": 2,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "platinum-5",
          "Support": null
        }
      },
      {
        "d": "2026-10-11",
        "g": {},
        "m": 12,
        "w": 3,
        "l": 9,
        "t": 7011,
        "k": 2,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "platinum-5",
          "Support": null
        }
      },
      {
        "d": "2026-10-12",
        "g": {},
        "m": 12,
        "w": 3,
        "l": 9,
        "t": 7011,
        "k": 2,
        "tot": {
          "e": 190,
          "a": 0,
          "dd": 95,
          "dm": 135375,
          "he": 5772
        },
        "r": {
          "Tank": null,
          "Damage": "platinum-5",
          "Support": null
        }
      },
      {
        "d": "2026-10-13",
        "g": {},
        "m": 12,
        "w": 3,
        "l": 9,
        "t": 7011,
        "k": 2,
        "tot": {
          "e": 190,
          "a": 0,
          "dd": 95,
          "dm": 135375,
          "he": 5772
        },
        "r": {
          "Tank": null,
          "Damage": "platinum-5",
          "Support": null
        }
      },
      {
        "d": "2026-10-14",
        "g": {},
        "m": 12,
        "w": 3,
        "l": 9,
        "t": 7011,
        "k": 2,
        "tot": {
          "e": 190,
          "a": 0,
          "dd": 95,
          "dm": 135375,
          "he": 5772
        },
        "r": {
          "Tank": null,
          "Damage": "platinum-5",
          "Support": null
        }
      },
      {
        "d": "2026-10-15",
        "g": {},
        "m": 12,
        "w": 3,
        "l": 9,
        "t": 7011,
        "k": 2,
        "tot": {
          "e": 190,
          "a": 0,
          "dd": 95,
          "dm": 135375,
          "he": 5772
        },
        "r": {
          "Tank": null,
          "Damage": "platinum-5",
          "Support": null
        }
      },
      {
        "d": "2026-10-16",
        "g": {},
        "m": 12,
        "w": 3,
        "l": 9,
        "t": 7011,
        "k": 2,
        "tot": {
          "e": 190,
          "a": 0,
          "dd": 95,
          "dm": 135375,
          "he": 5772
        },
        "r": {
          "Tank": null,
          "Damage": "platinum-5",
          "Support": null
        }
      }
    ]
  },
  {
    "id": "voidglove",
    "pid": "71bf70095295184c2073960007b31fdafdddb9a6a594a1|0a08671b7adbc97eb1182bc68bdf60f7",
    "name": "ぼいどぐらぶ",
    "tag": "",
    "endorse": 3,
    "title": "UwU",
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1fa2392c8d0c6047457f038a881d59d3cade9a1ef6cfa8bb8e396100a3b97a8b.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4f57d4bae6d479b52d262975c730e1f763123975a3dc08395709d963ea7dd6b9.png",
    "role": "Support",
    "ranks": {
      "Tank": {
        "division": "gold",
        "tier": 3,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_GoldTier.8d40eab551020b46a84002019dd98714149ed5e2.png"
      },
      "Damage": {
        "division": "platinum",
        "tier": 5,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_PlatinumTier.694340e3a5b2031d4fac9eb1d8f52c6855d4c072.png"
      },
      "Support": {
        "division": "platinum",
        "tier": 4,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_PlatinumTier.694340e3a5b2031d4fac9eb1d8f52c6855d4c072.png"
      }
    },
    "rankTier": "Platinum 4",
    "overall": {
      "matches": 6,
      "wins": 6,
      "losses": 0,
      "wr": 100,
      "kda": 4.09,
      "elim": 21.3,
      "deaths": 5.21,
      "dmg": 9874.02,
      "heal": 22.99,
      "time": 3915,
      "tot": {
        "e": 139,
        "a": 0,
        "dd": 34,
        "dm": 64428,
        "he": 150
      }
    },
    "roles": {
      "Damage": {
        "g": 6,
        "w": 6,
        "l": 0,
        "time": 3915,
        "wr": 100,
        "kda": 4.09,
        "elim": 21.3,
        "deaths": 5.21,
        "dmg": 9874.02,
        "heal": 22.99
      }
    },
    "heroes": [
      {
        "slug": "cassidy",
        "n": "Cassidy",
        "role": "Damage",
        "g": 2,
        "wr": 100,
        "kda": 3.53
      },
      {
        "slug": "freja",
        "n": "Freja",
        "role": "Damage",
        "g": 1,
        "wr": 100,
        "kda": 3.33
      },
      {
        "slug": "sojourn",
        "n": "Sojourn",
        "role": "Damage",
        "g": 1,
        "wr": 100,
        "kda": 0
      },
      {
        "slug": "tracer",
        "n": "Tracer",
        "role": "Damage",
        "g": 1,
        "wr": 100,
        "kda": 3
      },
      {
        "slug": "vendetta",
        "n": "Vendetta",
        "role": "Damage",
        "g": 1,
        "wr": 100,
        "kda": 5.25
      }
    ],
    "bscore": {
      "cassidy": {
        "finalScore": 49.87,
        "battleScore": 44.08,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 1462,
          "wr": 100,
          "el10": 21.75,
          "de10": 6.16,
          "dm10": 8194,
          "he10": 0,
          "as10": 2.05,
          "wa": 41,
          "ca": 16
        }
      },
      "freja": {
        "finalScore": 48.68,
        "battleScore": 43.03,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 640,
          "wr": 100,
          "el10": 18.75,
          "de10": 5.62,
          "dm10": 8676,
          "he10": 0,
          "as10": 0,
          "wa": 28,
          "ca": 18
        }
      },
      "sojourn": {
        "finalScore": 41.14,
        "battleScore": 36.36,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 306,
          "wr": 100,
          "el10": 31.35,
          "de10": 0,
          "dm10": 9055,
          "he10": 0,
          "as10": 0,
          "wa": 25,
          "ca": 13
        }
      },
      "tracer": {
        "finalScore": 45.87,
        "battleScore": 40.55,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 435,
          "wr": 100,
          "el10": 16.56,
          "de10": 5.52,
          "dm10": 4821,
          "he10": 0,
          "as10": 0,
          "wa": 26,
          "ca": 9
        }
      },
      "vendetta": {
        "finalScore": 52.45,
        "battleScore": 46.36,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 502,
          "wr": 100,
          "el10": 25.08,
          "de10": 4.78,
          "dm10": 10176,
          "he10": 179,
          "as10": 1.19,
          "wa": 0,
          "ca": 0
        }
      }
    },
    "recent": [
      {
        "d": "2026-09-17",
        "g": {},
        "m": 135,
        "w": 72,
        "l": 63,
        "t": 87785,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": "gold-2",
          "Damage": "platinum-5",
          "Support": "platinum-3"
        }
      },
      {
        "d": "2026-09-18",
        "g": {},
        "m": 135,
        "w": 72,
        "l": 63,
        "t": 87785,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": "gold-2",
          "Damage": "platinum-5",
          "Support": "platinum-3"
        }
      },
      {
        "d": "2026-09-19",
        "g": {},
        "m": 135,
        "w": 72,
        "l": 63,
        "t": 87785,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": "gold-2",
          "Damage": "platinum-5",
          "Support": "platinum-3"
        }
      },
      {
        "d": "2026-09-20",
        "g": {},
        "m": 137,
        "w": 73,
        "l": 64,
        "t": 89331,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": "gold-1",
          "Damage": "platinum-5",
          "Support": "platinum-3"
        }
      },
      {
        "d": "2026-09-21",
        "g": {},
        "m": 142,
        "w": 76,
        "l": 66,
        "t": 90715,
        "k": 2.54,
        "tot": null,
        "r": {
          "Tank": "gold-1",
          "Damage": "platinum-5",
          "Support": "platinum-3"
        }
      },
      {
        "d": "2026-09-22",
        "g": {},
        "m": 142,
        "w": 76,
        "l": 66,
        "t": 90715,
        "k": 2.54,
        "tot": null,
        "r": {
          "Tank": "gold-1",
          "Damage": "platinum-5",
          "Support": "platinum-3"
        }
      },
      {
        "d": "2026-09-23",
        "g": {},
        "m": 142,
        "w": 76,
        "l": 66,
        "t": 90715,
        "k": 2.54,
        "tot": null,
        "r": {
          "Tank": "gold-1",
          "Damage": "platinum-5",
          "Support": "platinum-3"
        }
      },
      {
        "d": "2026-09-24",
        "g": {},
        "m": 142,
        "w": 76,
        "l": 66,
        "t": 90715,
        "k": 2.54,
        "tot": null,
        "r": {
          "Tank": "gold-1",
          "Damage": "platinum-5",
          "Support": "platinum-3"
        }
      },
      {
        "d": "2026-09-25",
        "g": {},
        "m": 144,
        "w": 76,
        "l": 68,
        "t": 92589,
        "k": 2.53,
        "tot": null,
        "r": {
          "Tank": "gold-1",
          "Damage": "platinum-5",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-09-26",
        "g": {},
        "m": 147,
        "w": 77,
        "l": 70,
        "t": 93592,
        "k": 2.53,
        "tot": null,
        "r": {
          "Tank": "gold-2",
          "Damage": "platinum-5",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-09-27",
        "g": {},
        "m": 149,
        "w": 79,
        "l": 70,
        "t": 94851,
        "k": 2.54,
        "tot": null,
        "r": {
          "Tank": "gold-2",
          "Damage": "platinum-5",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-09-28",
        "g": {},
        "m": 149,
        "w": 79,
        "l": 70,
        "t": 94851,
        "k": 2.54,
        "tot": null,
        "r": {
          "Tank": "gold-2",
          "Damage": "platinum-5",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-09-29",
        "g": {},
        "m": 149,
        "w": 79,
        "l": 70,
        "t": 94851,
        "k": 2.54,
        "tot": null,
        "r": {
          "Tank": "gold-2",
          "Damage": "platinum-5",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-09-30",
        "g": {},
        "m": 159,
        "w": 86,
        "l": 73,
        "t": 99993,
        "k": 2.58,
        "tot": null,
        "r": {
          "Tank": "gold-2",
          "Damage": "platinum-4",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-01",
        "g": {},
        "m": 159,
        "w": 86,
        "l": 73,
        "t": 99993,
        "k": 2.58,
        "tot": null,
        "r": {
          "Tank": "gold-2",
          "Damage": "platinum-4",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-02",
        "g": {},
        "m": 166,
        "w": 86,
        "l": 80,
        "t": 103192,
        "k": 2.56,
        "tot": null,
        "r": {
          "Tank": "gold-2",
          "Damage": "platinum-5",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-03",
        "g": {},
        "m": 170,
        "w": 86,
        "l": 84,
        "t": 105588,
        "k": 2.57,
        "tot": null,
        "r": {
          "Tank": "gold-2",
          "Damage": "platinum-5",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-04",
        "g": {},
        "m": 172,
        "w": 85,
        "l": 87,
        "t": 106596,
        "k": 2.56,
        "tot": null,
        "r": {
          "Tank": "gold-3",
          "Damage": "platinum-5",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-05",
        "g": {},
        "m": 174,
        "w": 87,
        "l": 87,
        "t": 107580,
        "k": 2.58,
        "tot": null,
        "r": {
          "Tank": "gold-3",
          "Damage": "platinum-5",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-06",
        "g": {},
        "m": 184,
        "w": 93,
        "l": 91,
        "t": 112281,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": "gold-3",
          "Damage": "gold-1",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-07",
        "g": {},
        "m": 186,
        "w": 94,
        "l": 92,
        "t": 114739,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": "gold-3",
          "Damage": "gold-1",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-08",
        "g": {},
        "m": 186,
        "w": 94,
        "l": 92,
        "t": 114739,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": "gold-3",
          "Damage": "gold-1",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-09",
        "g": {},
        "m": 186,
        "w": 94,
        "l": 92,
        "t": 114739,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": "gold-3",
          "Damage": "gold-1",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-10",
        "g": {},
        "m": 186,
        "w": 94,
        "l": 92,
        "t": 114739,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": "gold-3",
          "Damage": "gold-1",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-11",
        "g": {},
        "m": 186,
        "w": 94,
        "l": 92,
        "t": 114739,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": "gold-3",
          "Damage": "gold-1",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-12",
        "g": {},
        "m": 186,
        "w": 94,
        "l": 92,
        "t": 114739,
        "k": 2.55,
        "tot": {
          "e": 2580,
          "a": 414,
          "dd": 1174,
          "dm": 1499778,
          "he": 778685
        },
        "r": {
          "Tank": "gold-3",
          "Damage": "gold-1",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-13",
        "g": {},
        "m": 186,
        "w": 94,
        "l": 92,
        "t": 114739,
        "k": 2.55,
        "tot": {
          "e": 2580,
          "a": 414,
          "dd": 1174,
          "dm": 1499778,
          "he": 778685
        },
        "r": {
          "Tank": "gold-3",
          "Damage": "gold-1",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-14",
        "g": {},
        "m": 6,
        "w": 6,
        "l": 0,
        "t": 3915,
        "k": 4.09,
        "tot": {
          "e": 139,
          "a": 0,
          "dd": 34,
          "dm": 64428,
          "he": 150
        },
        "r": {
          "Tank": "gold-3",
          "Damage": "platinum-5",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-15",
        "g": {},
        "m": 6,
        "w": 6,
        "l": 0,
        "t": 3915,
        "k": 4.09,
        "tot": {
          "e": 139,
          "a": 0,
          "dd": 34,
          "dm": 64428,
          "he": 150
        },
        "r": {
          "Tank": "gold-3",
          "Damage": "platinum-5",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-16",
        "g": {},
        "m": 6,
        "w": 6,
        "l": 0,
        "t": 3915,
        "k": 4.09,
        "tot": {
          "e": 139,
          "a": 0,
          "dd": 34,
          "dm": 64428,
          "he": 150
        },
        "r": {
          "Tank": "gold-3",
          "Damage": "platinum-5",
          "Support": "platinum-4"
        }
      }
    ]
  },
  {
    "id": "maru",
    "pid": "71bf7209519a1c4b03bd24a4d001|37984cd41cd1e33a63f96d42d8022aa7",
    "name": "まる熊",
    "tag": "",
    "endorse": 2,
    "title": null,
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d639420de7519dd84f84d8297247d091d674567adadc39b869180809ec1c9bfb.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8849a4ba9d1c3d5dac2ef6bbdac4eefdc5b8a91b81d774ae7dbaa40f791abe69.png",
    "role": "Support",
    "ranks": {
      "Tank": {
        "division": "gold",
        "tier": 2,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_GoldTier.8d40eab551020b46a84002019dd98714149ed5e2.png"
      },
      "Damage": {
        "division": "gold",
        "tier": 1,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_GoldTier.8d40eab551020b46a84002019dd98714149ed5e2.png"
      },
      "Support": {
        "division": "platinum",
        "tier": 1,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_PlatinumTier.694340e3a5b2031d4fac9eb1d8f52c6855d4c072.png"
      }
    },
    "rankTier": "Platinum 1",
    "overall": {
      "matches": 18,
      "wins": 8,
      "losses": 10,
      "wr": 44.44,
      "kda": 2.87,
      "elim": 15.75,
      "deaths": 6.02,
      "dmg": 10703.11,
      "heal": 3496.93,
      "time": 11654,
      "tot": {
        "e": 306,
        "a": 30,
        "dd": 117,
        "dm": 207890,
        "he": 67922
      }
    },
    "roles": {
      "Tank": {
        "g": 11,
        "w": 6,
        "l": 5,
        "time": 7113,
        "wr": 54.55,
        "kda": 3.19,
        "elim": 17.46,
        "deaths": 6.16,
        "dmg": 12842.94,
        "heal": 719.11
      },
      "Damage": {
        "g": 2,
        "w": 1,
        "l": 1,
        "time": 755,
        "wr": 50,
        "kda": 3.33,
        "elim": 15.1,
        "deaths": 4.77,
        "dmg": 13987.55,
        "heal": 298.01
      },
      "Support": {
        "g": 5,
        "w": 1,
        "l": 4,
        "time": 3786,
        "wr": 20,
        "kda": 2.18,
        "elim": 12.68,
        "deaths": 6.02,
        "dmg": 6027.89,
        "heal": 9353.72
      }
    },
    "heroes": [
      {
        "slug": "reinhardt",
        "n": "Reinhardt",
        "role": "Tank",
        "g": 4,
        "wr": 50,
        "kda": 3.27
      },
      {
        "slug": "moira",
        "n": "Moira",
        "role": "Support",
        "g": 3,
        "wr": 33.33,
        "kda": 3.94
      },
      {
        "slug": "orisa",
        "n": "Orisa",
        "role": "Tank",
        "g": 2,
        "wr": 50,
        "kda": 4
      },
      {
        "slug": "winston",
        "n": "Winston",
        "role": "Tank",
        "g": 2,
        "wr": 100,
        "kda": 4.9
      },
      {
        "slug": "anran",
        "n": "Anran",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 1.33
      },
      {
        "slug": "doctrine",
        "n": "Doctrine",
        "role": "Support",
        "g": 1,
        "wr": 0,
        "kda": 0.86
      },
      {
        "slug": "hazard",
        "n": "Hazard",
        "role": "Tank",
        "g": 1,
        "wr": 100,
        "kda": 1.29
      },
      {
        "slug": "junkrat",
        "n": "Junkrat",
        "role": "Damage",
        "g": 1,
        "wr": 100,
        "kda": 0
      },
      {
        "slug": "mauga",
        "n": "Mauga",
        "role": "Tank",
        "g": 1,
        "wr": 0,
        "kda": 4
      },
      {
        "slug": "mizuki",
        "n": "Mizuki",
        "role": "Support",
        "g": 1,
        "wr": 0,
        "kda": 0.67
      },
      {
        "slug": "sigma",
        "n": "Sigma",
        "role": "Tank",
        "g": 1,
        "wr": 0,
        "kda": 1.38
      }
    ],
    "bscore": {
      "anran": {
        "finalScore": 50.52,
        "battleScore": 36.3,
        "coeff": 1.21,
        "matchCoef": 0.92,
        "gamesPlayed": 1,
        "rankIndex": 2,
        "det": {
          "g": 1,
          "time": 173,
          "wr": 0,
          "el10": 13.87,
          "de10": 10.4,
          "dm10": 7032,
          "he10": 815,
          "as10": 3.47,
          "wa": 43,
          "ca": 3
        }
      },
      "doctrine": {
        "finalScore": 45.38,
        "battleScore": 40.11,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 523,
          "wr": 0,
          "el10": 6.88,
          "de10": 8.03,
          "dm10": 2780,
          "he10": 10223,
          "as10": 14.9,
          "wa": 55,
          "ca": 0
        },
        "rankDelta": 3,
        "rankDeltaPower": 2
      },
      "hazard": {
        "finalScore": 39.01,
        "battleScore": 37.93,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 2,
        "det": {
          "g": 1,
          "time": 544,
          "wr": 63,
          "el10": 9.93,
          "de10": 7.73,
          "dm10": 8478,
          "he10": 1401,
          "as10": 4.41,
          "wa": 33,
          "ca": 8
        }
      },
      "junkrat": {
        "finalScore": 37.4,
        "battleScore": 36.36,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 2,
        "det": {
          "g": 1,
          "time": 245,
          "wr": 100,
          "el10": 17.14,
          "de10": 0,
          "dm10": 12008,
          "he10": 0,
          "as10": 2.45,
          "wa": 25,
          "ca": 0
        }
      },
      "mauga": {
        "finalScore": 57.4,
        "battleScore": 41.25,
        "coeff": 1.21,
        "matchCoef": 0.92,
        "gamesPlayed": 1,
        "rankIndex": 2,
        "det": {
          "g": 1,
          "time": 820,
          "wr": 51,
          "el10": 20.49,
          "de10": 6.59,
          "dm10": 10855,
          "he10": 1342,
          "as10": 8.05,
          "wa": 28,
          "ca": 12
        },
        "rankDelta": -1
      },
      "mizuki": {
        "finalScore": 39.56,
        "battleScore": 34.97,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 746,
          "wr": 0,
          "el10": 4.83,
          "de10": 7.24,
          "dm10": 3637,
          "he10": 10394,
          "as10": 5.63,
          "wa": 27,
          "ca": 6
        }
      },
      "moira": {
        "finalScore": 60.62,
        "battleScore": 42.83,
        "coeff": 1.33,
        "matchCoef": 0.92,
        "gamesPlayed": 3,
        "rankIndex": 3,
        "det": {
          "g": 3,
          "time": 2025,
          "wr": 27,
          "el10": 19.85,
          "de10": 5.04,
          "dm10": 6550,
          "he10": 9184,
          "as10": 17.78,
          "wa": 0,
          "ca": 0
        }
      },
      "orisa": {
        "finalScore": 43.32,
        "battleScore": 42.12,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 2,
        "det": {
          "g": 2,
          "time": 1334,
          "wr": 54,
          "el10": 20.23,
          "de10": 5.85,
          "dm10": 12092,
          "he10": 0,
          "as10": 3.15,
          "wa": 34,
          "ca": 11
        },
        "rankDelta": -1,
        "rankDeltaPower": -1
      },
      "reinhardt": {
        "finalScore": 41.97,
        "battleScore": 40.8,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 2,
        "det": {
          "g": 4,
          "time": 2202,
          "wr": 53,
          "el10": 16.62,
          "de10": 5.99,
          "dm10": 8917,
          "he10": 0,
          "as10": 3,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": -1,
        "rankDeltaPower": -1
      },
      "sigma": {
        "finalScore": 53.55,
        "battleScore": 34.06,
        "coeff": 1.21,
        "matchCoef": 0.92,
        "gamesPlayed": 1,
        "rankIndex": 2,
        "det": {
          "g": 1,
          "time": 554,
          "wr": 0,
          "el10": 11.92,
          "de10": 8.67,
          "dm10": 9437,
          "he10": 0,
          "as10": 0,
          "wa": 49,
          "ca": 0
        }
      },
      "winston": {
        "finalScore": 49.16,
        "battleScore": 47.8,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 2,
        "det": {
          "g": 2,
          "time": 1388,
          "wr": 87,
          "el10": 21.18,
          "de10": 4.32,
          "dm10": 8314,
          "he10": 2257,
          "as10": 5.19,
          "wa": 60,
          "ca": 0
        }
      }
    },
    "recent": [
      {
        "d": "2026-09-17",
        "g": {},
        "m": 183,
        "w": 101,
        "l": 82,
        "t": 122075,
        "k": 2.74,
        "tot": null,
        "r": {
          "Tank": "gold-1",
          "Damage": "gold-2",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-09-18",
        "g": {},
        "m": 184,
        "w": 102,
        "l": 82,
        "t": 122795,
        "k": 2.73,
        "tot": null,
        "r": {
          "Tank": "gold-1",
          "Damage": "gold-2",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-09-19",
        "g": {},
        "m": 184,
        "w": 102,
        "l": 82,
        "t": 122795,
        "k": 2.73,
        "tot": null,
        "r": {
          "Tank": "gold-1",
          "Damage": "gold-2",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-09-20",
        "g": {},
        "m": 184,
        "w": 102,
        "l": 82,
        "t": 122795,
        "k": 2.73,
        "tot": null,
        "r": {
          "Tank": "gold-1",
          "Damage": "gold-2",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-09-21",
        "g": {},
        "m": 184,
        "w": 102,
        "l": 82,
        "t": 122795,
        "k": 2.73,
        "tot": null,
        "r": {
          "Tank": "gold-1",
          "Damage": "gold-2",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-09-22",
        "g": {},
        "m": 184,
        "w": 102,
        "l": 82,
        "t": 122795,
        "k": 2.73,
        "tot": null,
        "r": {
          "Tank": "gold-1",
          "Damage": "gold-2",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-09-23",
        "g": {},
        "m": 184,
        "w": 102,
        "l": 82,
        "t": 122795,
        "k": 2.73,
        "tot": null,
        "r": {
          "Tank": "gold-1",
          "Damage": "gold-2",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-09-24",
        "g": {},
        "m": 184,
        "w": 102,
        "l": 82,
        "t": 122795,
        "k": 2.73,
        "tot": null,
        "r": {
          "Tank": "gold-1",
          "Damage": "gold-2",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-09-25",
        "g": {},
        "m": 187,
        "w": 105,
        "l": 82,
        "t": 125162,
        "k": 2.73,
        "tot": null,
        "r": {
          "Tank": "gold-1",
          "Damage": "gold-1",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-09-26",
        "g": {},
        "m": 187,
        "w": 105,
        "l": 82,
        "t": 125162,
        "k": 2.73,
        "tot": null,
        "r": {
          "Tank": "gold-1",
          "Damage": "gold-1",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-09-27",
        "g": {},
        "m": 192,
        "w": 110,
        "l": 82,
        "t": 127889,
        "k": 2.77,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "gold-1",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-09-28",
        "g": {},
        "m": 192,
        "w": 110,
        "l": 82,
        "t": 127889,
        "k": 2.77,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "gold-1",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-09-29",
        "g": {},
        "m": 192,
        "w": 110,
        "l": 82,
        "t": 127889,
        "k": 2.77,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "gold-1",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-09-30",
        "g": {},
        "m": 198,
        "w": 112,
        "l": 86,
        "t": 131988,
        "k": 2.76,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-10-01",
        "g": {},
        "m": 198,
        "w": 112,
        "l": 86,
        "t": 131988,
        "k": 2.76,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-10-02",
        "g": {},
        "m": 198,
        "w": 112,
        "l": 86,
        "t": 131988,
        "k": 2.76,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-10-03",
        "g": {},
        "m": 198,
        "w": 112,
        "l": 86,
        "t": 131988,
        "k": 2.76,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-10-04",
        "g": {},
        "m": 198,
        "w": 112,
        "l": 86,
        "t": 131988,
        "k": 2.76,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-10-05",
        "g": {},
        "m": 198,
        "w": 112,
        "l": 86,
        "t": 131988,
        "k": 2.76,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-10-06",
        "g": {},
        "m": 207,
        "w": 114,
        "l": 93,
        "t": 136688,
        "k": 2.76,
        "tot": null,
        "r": {
          "Tank": "gold-1",
          "Damage": "platinum-5",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-10-07",
        "g": {},
        "m": 218,
        "w": 118,
        "l": 100,
        "t": 143486,
        "k": 2.74,
        "tot": null,
        "r": {
          "Tank": "gold-2",
          "Damage": "gold-1",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-10-08",
        "g": {},
        "m": 218,
        "w": 118,
        "l": 100,
        "t": 143486,
        "k": 2.74,
        "tot": null,
        "r": {
          "Tank": "gold-2",
          "Damage": "gold-1",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-10-09",
        "g": {},
        "m": 5,
        "w": 0,
        "l": 5,
        "t": 2994,
        "k": 1.71,
        "tot": null,
        "r": {
          "Tank": "gold-2",
          "Damage": "gold-1",
          "Support": "platinum-1"
        }
      },
      {
        "d": "2026-10-10",
        "g": {},
        "m": 5,
        "w": 0,
        "l": 5,
        "t": 2994,
        "k": 1.71,
        "tot": null,
        "r": {
          "Tank": "gold-2",
          "Damage": "gold-1",
          "Support": "platinum-1"
        }
      },
      {
        "d": "2026-10-11",
        "g": {},
        "m": 9,
        "w": 2,
        "l": 7,
        "t": 4842,
        "k": 2.31,
        "tot": null,
        "r": {
          "Tank": "gold-2",
          "Damage": "gold-1",
          "Support": "platinum-1"
        }
      },
      {
        "d": "2026-10-12",
        "g": {},
        "m": 12,
        "w": 2,
        "l": 10,
        "t": 7045,
        "k": 2.08,
        "tot": {
          "e": 155,
          "a": 9,
          "dd": 79,
          "dm": 111092,
          "he": 61380
        },
        "r": {
          "Tank": "gold-3",
          "Damage": "gold-1",
          "Support": "platinum-1"
        }
      },
      {
        "d": "2026-10-13",
        "g": {},
        "m": 12,
        "w": 2,
        "l": 10,
        "t": 7045,
        "k": 2.08,
        "tot": {
          "e": 155,
          "a": 9,
          "dd": 79,
          "dm": 111092,
          "he": 61380
        },
        "r": {
          "Tank": "gold-3",
          "Damage": "gold-1",
          "Support": "platinum-1"
        }
      },
      {
        "d": "2026-10-14",
        "g": {
          "hazard": 1,
          "orisa": 1,
          "reinhardt": 2,
          "winston": 2
        },
        "m": 18,
        "w": 8,
        "l": 10,
        "t": 11654,
        "k": 2.87,
        "tot": {
          "e": 306,
          "a": 30,
          "dd": 117,
          "dm": 207890,
          "he": 67922
        },
        "r": {
          "Tank": "gold-2",
          "Damage": "gold-1",
          "Support": "platinum-1"
        }
      },
      {
        "d": "2026-10-15",
        "g": {},
        "m": 18,
        "w": 8,
        "l": 10,
        "t": 11654,
        "k": 2.87,
        "tot": {
          "e": 306,
          "a": 30,
          "dd": 117,
          "dm": 207890,
          "he": 67922
        },
        "r": {
          "Tank": "gold-2",
          "Damage": "gold-1",
          "Support": "platinum-1"
        }
      },
      {
        "d": "2026-10-16",
        "g": {},
        "m": 18,
        "w": 8,
        "l": 10,
        "t": 11654,
        "k": 2.87,
        "tot": {
          "e": 306,
          "a": 30,
          "dd": 117,
          "dm": 207890,
          "he": 67922
        },
        "r": {
          "Tank": "gold-2",
          "Damage": "gold-1",
          "Support": "platinum-1"
        }
      }
    ]
  },
  {
    "id": "makky",
    "pid": "df5fa781aa3cc8fcb0a42e|7151d64f9225de961a555336eb49b484",
    "name": "Makky",
    "tag": "",
    "endorse": 3,
    "title": ":3",
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5cc956f794f39ff8227634c56e1842f0df590bb5ed88a64c170ac4961a2ac2df.png",
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
        "division": "master",
        "tier": 5,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_MasterTier.d5994999a94e84aeff892ddc2df4019afe41bf59.png"
      }
    },
    "rankTier": "Master 5",
    "overall": {
      "matches": 99,
      "wins": 54,
      "losses": 45,
      "wr": 54.55,
      "kda": 2.77,
      "elim": 16.31,
      "deaths": 6.41,
      "dmg": 8727.36,
      "heal": 2564.17,
      "time": 62200,
      "tot": {
        "e": 1691,
        "a": 146,
        "dd": 664,
        "dm": 904736,
        "he": 265819
      }
    },
    "roles": {
      "Tank": {
        "g": 7,
        "w": 2,
        "l": 5,
        "time": 4725,
        "wr": 28.57,
        "kda": 3.25,
        "elim": 18.92,
        "deaths": 6.1,
        "dmg": 14421.84,
        "heal": 1785.14
      },
      "Damage": {
        "g": 63,
        "w": 33,
        "l": 30,
        "time": 39059,
        "wr": 52.38,
        "kda": 2.81,
        "elim": 18.37,
        "deaths": 6.53,
        "dmg": 9712.54,
        "heal": 146.01
      },
      "Support": {
        "g": 29,
        "w": 19,
        "l": 10,
        "time": 18416,
        "wr": 65.52,
        "kda": 2.54,
        "elim": 11.27,
        "deaths": 6.22,
        "dmg": 5176.82,
        "heal": 7892.79
      }
    },
    "heroes": [
      {
        "slug": "tracer",
        "n": "Tracer",
        "role": "Damage",
        "g": 16,
        "wr": 50,
        "kda": 3.08
      },
      {
        "slug": "ana",
        "n": "Ana",
        "role": "Support",
        "g": 15,
        "wr": 73.33,
        "kda": 2.56
      },
      {
        "slug": "sojourn",
        "n": "Sojourn",
        "role": "Damage",
        "g": 12,
        "wr": 58.33,
        "kda": 2.77
      },
      {
        "slug": "genji",
        "n": "Genji",
        "role": "Damage",
        "g": 11,
        "wr": 54.55,
        "kda": 2.39
      },
      {
        "slug": "cassidy",
        "n": "Cassidy",
        "role": "Damage",
        "g": 9,
        "wr": 55.56,
        "kda": 3.14
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
        "slug": "kiriko",
        "n": "Kiriko",
        "role": "Support",
        "g": 3,
        "wr": 66.67,
        "kda": 1.83
      },
      {
        "slug": "moira",
        "n": "Moira",
        "role": "Support",
        "g": 3,
        "wr": 33.33,
        "kda": 2.76
      },
      {
        "slug": "reaper",
        "n": "Reaper",
        "role": "Damage",
        "g": 3,
        "wr": 66.67,
        "kda": 2.81
      },
      {
        "slug": "wuyang",
        "n": "Wuyang",
        "role": "Support",
        "g": 3,
        "wr": 66.67,
        "kda": 2.81
      },
      {
        "slug": "brigitte",
        "n": "Brigitte",
        "role": "Support",
        "g": 2,
        "wr": 50,
        "kda": 2.08
      },
      {
        "slug": "echo",
        "n": "Echo",
        "role": "Damage",
        "g": 2,
        "wr": 50,
        "kda": 4.4
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
        "slug": "pharah",
        "n": "Pharah",
        "role": "Damage",
        "g": 2,
        "wr": 50,
        "kda": 2.14
      },
      {
        "slug": "ramattra",
        "n": "Ramattra",
        "role": "Tank",
        "g": 2,
        "wr": 0,
        "kda": 3.11
      },
      {
        "slug": "winston",
        "n": "Winston",
        "role": "Tank",
        "g": 2,
        "wr": 0,
        "kda": 2.5
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
        "slug": "doomfist",
        "n": "Doomfist",
        "role": "Tank",
        "g": 1,
        "wr": 100,
        "kda": 2.36
      },
      {
        "slug": "junker-queen",
        "n": "Junker Queen",
        "role": "Tank",
        "g": 1,
        "wr": 0,
        "kda": 2.33
      },
      {
        "slug": "shion",
        "n": "Shion",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 7.33
      },
      {
        "slug": "sigma",
        "n": "Sigma",
        "role": "Tank",
        "g": 1,
        "wr": 100,
        "kda": 23
      },
      {
        "slug": "sombra",
        "n": "Sombra",
        "role": "Support",
        "g": 1,
        "wr": 100,
        "kda": 5
      }
    ],
    "bscore": {
      "ana": {
        "finalScore": 77.4,
        "battleScore": 45.71,
        "coeff": 1.77,
        "matchCoef": 0.96,
        "gamesPlayed": 15,
        "rankIndex": 6,
        "det": {
          "g": 15,
          "time": 9394,
          "wr": 70,
          "el10": 10.03,
          "de10": 6.58,
          "dm10": 3789,
          "he10": 7632,
          "as10": 12.97,
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
        }
      },
      "brigitte": {
        "finalScore": 57.72,
        "battleScore": 38.33,
        "coeff": 1.77,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 6,
        "det": {
          "g": 2,
          "time": 1191,
          "wr": 60,
          "el10": 8.56,
          "de10": 6.05,
          "dm10": 3527,
          "he10": 8742,
          "as10": 12.59,
          "wa": 0,
          "ca": 0
        }
      },
      "cassidy": {
        "finalScore": 63.87,
        "battleScore": 43.5,
        "coeff": 1.61,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 5,
        "det": {
          "g": 9,
          "time": 6154,
          "wr": 55,
          "el10": 19.6,
          "de10": 6.24,
          "dm10": 10377,
          "he10": 67.53,
          "as10": 1.46,
          "wa": 52,
          "ca": 8
        },
        "rankDeltaPower": -2
      },
      "doomfist": {
        "finalScore": 54.94,
        "battleScore": 40.14,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 834,
          "wr": 65,
          "el10": 18.71,
          "de10": 7.92,
          "dm10": 11611,
          "he10": 1965,
          "as10": 2.88,
          "wa": 29,
          "ca": 12
        }
      },
      "echo": {
        "finalScore": 63.96,
        "battleScore": 46.72,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 5,
        "det": {
          "g": 2,
          "time": 1623,
          "wr": 46,
          "el10": 16.26,
          "de10": 3.7,
          "dm10": 8362,
          "he10": 0,
          "as10": 0.74,
          "wa": 28,
          "ca": 6
        },
        "rankDelta": 6,
        "rankDeltaPower": 6
      },
      "freja": {
        "finalScore": 55.38,
        "battleScore": 39.24,
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
        }
      },
      "genji": {
        "finalScore": 60.93,
        "battleScore": 40.73,
        "coeff": 1.61,
        "matchCoef": 0.93,
        "gamesPlayed": 11,
        "rankIndex": 5,
        "det": {
          "g": 11,
          "time": 6283,
          "wr": 56,
          "el10": 18.05,
          "de10": 7.54,
          "dm10": 7360,
          "he10": 282,
          "as10": 0,
          "wa": 31,
          "ca": 10
        },
        "rankDeltaPower": -1
      },
      "illari": {
        "finalScore": 61.96,
        "battleScore": 41.15,
        "coeff": 1.77,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 6,
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
        "rankDelta": -1
      },
      "junker-queen": {
        "finalScore": 52.43,
        "battleScore": 38.3,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 452,
          "wr": 0,
          "el10": 18.6,
          "de10": 7.97,
          "dm10": 13423,
          "he10": 5153,
          "as10": 7.97,
          "wa": 42,
          "ca": 10
        }
      },
      "kiriko": {
        "finalScore": 57.8,
        "battleScore": 38.39,
        "coeff": 1.77,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 6,
        "det": {
          "g": 3,
          "time": 2270,
          "wr": 64,
          "el10": 7.67,
          "de10": 6.34,
          "dm10": 3736,
          "he10": 9428,
          "as10": 20.62,
          "wa": 33,
          "ca": 12
        }
      },
      "moira": {
        "finalScore": 83.94,
        "battleScore": 41.2,
        "coeff": 1.77,
        "matchCoef": 0.92,
        "gamesPlayed": 3,
        "rankIndex": 6,
        "det": {
          "g": 3,
          "time": 1676,
          "wr": 48,
          "el10": 16.82,
          "de10": 6.08,
          "dm10": 5483,
          "he10": 9304,
          "as10": 14.67,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": 2,
        "rankDeltaPower": 1
      },
      "pharah": {
        "finalScore": 54.74,
        "battleScore": 39.99,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 5,
        "det": {
          "g": 2,
          "time": 1354,
          "wr": 64,
          "el10": 13.29,
          "de10": 6.2,
          "dm10": 8667,
          "he10": 0,
          "as10": 2.22,
          "wa": 39,
          "ca": 0
        }
      },
      "ramattra": {
        "finalScore": 70.89,
        "battleScore": 38.28,
        "coeff": 1.61,
        "matchCoef": 0.92,
        "gamesPlayed": 2,
        "rankIndex": 5,
        "det": {
          "g": 2,
          "time": 923,
          "wr": 0,
          "el10": 16.9,
          "de10": 5.85,
          "dm10": 13229,
          "he10": 656,
          "as10": 1.3,
          "wa": 26,
          "ca": 10
        }
      },
      "reaper": {
        "finalScore": 82.07,
        "battleScore": 44.31,
        "coeff": 1.61,
        "matchCoef": 0.92,
        "gamesPlayed": 3,
        "rankIndex": 5,
        "det": {
          "g": 3,
          "time": 1737,
          "wr": 52,
          "el10": 20.38,
          "de10": 7.25,
          "dm10": 7493,
          "he10": 1595,
          "as10": 0,
          "wa": 32,
          "ca": 11
        },
        "rankDelta": -2,
        "rankDeltaPower": -1
      },
      "shion": {
        "finalScore": 59.74,
        "battleScore": 43.64,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 570,
          "wr": 0,
          "el10": 23.16,
          "de10": 3.16,
          "dm10": 8037,
          "he10": 0,
          "as10": 0,
          "wa": 33,
          "ca": 9
        },
        "rankDelta": -1,
        "rankDeltaPower": -1
      },
      "sigma": {
        "finalScore": 87.99,
        "battleScore": 47.51,
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
        },
        "rankDelta": -1
      },
      "sojourn": {
        "finalScore": 63.86,
        "battleScore": 42.34,
        "coeff": 1.61,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 5,
        "det": {
          "g": 12,
          "time": 7420,
          "wr": 61,
          "el10": 18.6,
          "de10": 6.71,
          "dm10": 9238,
          "he10": 0,
          "as10": 0.08,
          "wa": 30,
          "ca": 9
        },
        "rankDeltaPower": -2
      },
      "sombra": {
        "finalScore": 61.82,
        "battleScore": 41.06,
        "coeff": 1.77,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 6,
        "det": {
          "g": 1,
          "time": 461,
          "wr": 42,
          "el10": 20.83,
          "de10": 5.21,
          "dm10": 8214,
          "he10": 582,
          "as10": 5.21,
          "wa": 35,
          "ca": 7
        },
        "rankDelta": -3,
        "rankDeltaPower": -2
      },
      "tracer": {
        "finalScore": 72.19,
        "battleScore": 46.62,
        "coeff": 1.61,
        "matchCoef": 0.96,
        "gamesPlayed": 16,
        "rankIndex": 5,
        "det": {
          "g": 16,
          "time": 9190,
          "wr": 52,
          "el10": 19.13,
          "de10": 6.2,
          "dm10": 6202,
          "he10": 45.43,
          "as10": 0.07,
          "wa": 34,
          "ca": 9
        },
        "rankDelta": -2
      },
      "winston": {
        "finalScore": 54.3,
        "battleScore": 39.66,
        "coeff": 1.61,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 5,
        "det": {
          "g": 2,
          "time": 1054,
          "wr": 0,
          "el10": 17.09,
          "de10": 6.83,
          "dm10": 10197,
          "he10": 2464,
          "as10": 3.42,
          "wa": 72,
          "ca": 0
        }
      },
      "wuyang": {
        "finalScore": 69.21,
        "battleScore": 45.96,
        "coeff": 1.77,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 6,
        "det": {
          "g": 3,
          "time": 1847,
          "wr": 68,
          "el10": 14.62,
          "de10": 5.2,
          "dm10": 6823,
          "he10": 8004,
          "as10": 18.19,
          "wa": 38,
          "ca": 0
        },
        "rankDelta": 3,
        "rankDeltaPower": 2
      }
    },
    "recent": [
      {
        "d": "2026-09-17",
        "g": {},
        "m": 70,
        "w": 35,
        "l": 35,
        "t": 45114,
        "k": 2.73,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "diamond-4"
        }
      },
      {
        "d": "2026-09-18",
        "g": {},
        "m": 70,
        "w": 35,
        "l": 35,
        "t": 45114,
        "k": 2.73,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "diamond-4"
        }
      },
      {
        "d": "2026-09-19",
        "g": {},
        "m": 70,
        "w": 35,
        "l": 35,
        "t": 45114,
        "k": 2.73,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "diamond-4"
        }
      },
      {
        "d": "2026-09-20",
        "g": {},
        "m": 70,
        "w": 35,
        "l": 35,
        "t": 45114,
        "k": 2.73,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "diamond-4"
        }
      },
      {
        "d": "2026-09-21",
        "g": {},
        "m": 70,
        "w": 35,
        "l": 35,
        "t": 45114,
        "k": 2.73,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "diamond-4"
        }
      },
      {
        "d": "2026-09-22",
        "g": {},
        "m": 70,
        "w": 35,
        "l": 35,
        "t": 45114,
        "k": 2.73,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "diamond-4"
        }
      },
      {
        "d": "2026-09-23",
        "g": {},
        "m": 70,
        "w": 35,
        "l": 35,
        "t": 45114,
        "k": 2.73,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "diamond-4"
        }
      },
      {
        "d": "2026-09-24",
        "g": {},
        "m": 70,
        "w": 35,
        "l": 35,
        "t": 45705,
        "k": 2.7,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "diamond-4"
        }
      },
      {
        "d": "2026-09-25",
        "g": {},
        "m": 70,
        "w": 35,
        "l": 35,
        "t": 45705,
        "k": 2.7,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "diamond-4"
        }
      },
      {
        "d": "2026-09-26",
        "g": {},
        "m": 70,
        "w": 35,
        "l": 35,
        "t": 45705,
        "k": 2.7,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "diamond-4"
        }
      },
      {
        "d": "2026-09-27",
        "g": {},
        "m": 96,
        "w": 53,
        "l": 43,
        "t": 60832,
        "k": 2.73,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-09-28",
        "g": {},
        "m": 96,
        "w": 53,
        "l": 43,
        "t": 60832,
        "k": 2.73,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-09-29",
        "g": {},
        "m": 96,
        "w": 53,
        "l": 43,
        "t": 60832,
        "k": 2.73,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-09-30",
        "g": {},
        "m": 96,
        "w": 53,
        "l": 43,
        "t": 60832,
        "k": 2.73,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-01",
        "g": {},
        "m": 96,
        "w": 53,
        "l": 43,
        "t": 60832,
        "k": 2.73,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-02",
        "g": {},
        "m": 96,
        "w": 53,
        "l": 43,
        "t": 60832,
        "k": 2.73,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-03",
        "g": {},
        "m": 96,
        "w": 53,
        "l": 43,
        "t": 60832,
        "k": 2.73,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-04",
        "g": {},
        "m": 96,
        "w": 53,
        "l": 43,
        "t": 60832,
        "k": 2.73,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-05",
        "g": {},
        "m": 96,
        "w": 53,
        "l": 43,
        "t": 60832,
        "k": 2.73,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-06",
        "g": {},
        "m": 96,
        "w": 53,
        "l": 43,
        "t": 60832,
        "k": 2.73,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-07",
        "g": {},
        "m": 99,
        "w": 54,
        "l": 45,
        "t": 62200,
        "k": 2.77,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-08",
        "g": {},
        "m": 99,
        "w": 54,
        "l": 45,
        "t": 62200,
        "k": 2.77,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-09",
        "g": {},
        "m": 99,
        "w": 54,
        "l": 45,
        "t": 62200,
        "k": 2.77,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-10",
        "g": {},
        "m": 99,
        "w": 54,
        "l": 45,
        "t": 62200,
        "k": 2.77,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-11",
        "g": {},
        "m": 99,
        "w": 54,
        "l": 45,
        "t": 62200,
        "k": 2.77,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-12",
        "g": {},
        "m": 99,
        "w": 54,
        "l": 45,
        "t": 62200,
        "k": 2.77,
        "tot": {
          "e": 1691,
          "a": 146,
          "dd": 664,
          "dm": 904736,
          "he": 265819
        },
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-13",
        "g": {},
        "m": 99,
        "w": 54,
        "l": 45,
        "t": 62200,
        "k": 2.77,
        "tot": {
          "e": 1691,
          "a": 146,
          "dd": 664,
          "dm": 904736,
          "he": 265819
        },
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-14",
        "g": {},
        "m": 99,
        "w": 54,
        "l": 45,
        "t": 62200,
        "k": 2.77,
        "tot": {
          "e": 1691,
          "a": 146,
          "dd": 664,
          "dm": 904736,
          "he": 265819
        },
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-15",
        "g": {},
        "m": 99,
        "w": 54,
        "l": 45,
        "t": 62200,
        "k": 2.77,
        "tot": {
          "e": 1691,
          "a": 146,
          "dd": 664,
          "dm": 904736,
          "he": 265819
        },
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-16",
        "g": {},
        "m": 99,
        "w": 54,
        "l": 45,
        "t": 62200,
        "k": 2.77,
        "tot": {
          "e": 1691,
          "a": 146,
          "dd": 664,
          "dm": 904736,
          "he": 265819
        },
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      }
    ]
  },
  {
    "id": "p5",
    "pid": "ff51a299a77489a1fcfd7ee8c902a10944|1135587ecccb4c908589fccfd617a51b",
    "name": "monsterlumix",
    "tag": "",
    "endorse": 3,
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
      "time": 11621,
      "tot": {
        "e": 358,
        "a": 37,
        "dd": 104,
        "dm": 183529,
        "he": 37597
      }
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
        "finalScore": 29.47,
        "battleScore": 34.67,
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
        "finalScore": 41.92,
        "battleScore": 36.46,
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
        "finalScore": 52.43,
        "battleScore": 35.36,
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
        "finalScore": 36.73,
        "battleScore": 39.28,
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
    },
    "recent": [
      {
        "d": "2026-09-17",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": null,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-18",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": null,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-19",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": null,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-20",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": null,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-21",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": null,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-22",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": null,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-23",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": null,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-24",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": null,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-25",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": null,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-26",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": null,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-27",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": null,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-28",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": null,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-29",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": null,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-30",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": null,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-01",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": null,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-02",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": null,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-03",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": null,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-04",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": null,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-05",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": null,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-06",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": null,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-07",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": null,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-08",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": null,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-09",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": null,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-10",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": null,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-11",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": null,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-12",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": {
          "e": 358,
          "a": 37,
          "dd": 104,
          "dm": 183529,
          "he": 37597
        },
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-13",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": {
          "e": 358,
          "a": 37,
          "dd": 104,
          "dm": 183529,
          "he": 37597
        },
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-14",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": {
          "e": 358,
          "a": 37,
          "dd": 104,
          "dm": 183529,
          "he": 37597
        },
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-15",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": {
          "e": 358,
          "a": 37,
          "dd": 104,
          "dm": 183529,
          "he": 37597
        },
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-16",
        "g": {},
        "m": 17,
        "w": 8,
        "l": 9,
        "t": 11621,
        "k": 3.8,
        "tot": {
          "e": 358,
          "a": 37,
          "dd": 104,
          "dm": 183529,
          "he": 37597
        },
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      }
    ]
  },
  {
    "id": "p6",
    "pid": "71bf70095182184f0d73951a07b23cdaffe87714138babe0e152|a2b9c2e5b32c51c94cb79749c9d6a226",
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
      "time": 6323,
      "tot": {
        "e": 183,
        "a": 46,
        "dd": 69,
        "dm": 98825,
        "he": 30312
      }
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
        "finalScore": 48.22,
        "battleScore": 42.62,
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
        "finalScore": 42.02,
        "battleScore": 37.14,
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
        "finalScore": 64.01,
        "battleScore": 47.23,
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
        "finalScore": 44.28,
        "battleScore": 39.14,
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
    },
    "recent": [
      {
        "d": "2026-09-17",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-09-18",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-09-19",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-09-20",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-09-21",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-09-22",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-09-23",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-09-24",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-09-25",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-09-26",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-09-27",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-09-28",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-09-29",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-09-30",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-01",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-02",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-03",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-04",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-05",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-06",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-07",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-08",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-09",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-10",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-11",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": null,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-12",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": {
          "e": 183,
          "a": 46,
          "dd": 69,
          "dm": 98825,
          "he": 30312
        },
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-13",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": {
          "e": 183,
          "a": 46,
          "dd": 69,
          "dm": 98825,
          "he": 30312
        },
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-14",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": {
          "e": 183,
          "a": 46,
          "dd": 69,
          "dm": 98825,
          "he": 30312
        },
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-15",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": {
          "e": 183,
          "a": 46,
          "dd": 69,
          "dm": 98825,
          "he": 30312
        },
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-16",
        "g": {},
        "m": 7,
        "w": 4,
        "l": 3,
        "t": 6323,
        "k": 3.32,
        "tot": {
          "e": 183,
          "a": 46,
          "dd": 69,
          "dm": 98825,
          "he": 30312
        },
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      }
    ]
  },
  {
    "id": "p7",
    "pid": "71bc46095182184c1dbd24a2d108|119124eab6231dd6a018190f27d1c6d1",
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
      "time": 0,
      "tot": {
        "e": 0,
        "a": 0,
        "dd": 0,
        "dm": 0,
        "he": 0
      }
    },
    "roles": {},
    "heroes": [],
    "bscore": {},
    "recent": [
      {
        "d": "2026-09-17",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-18",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-19",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-20",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-21",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-22",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-23",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-24",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-25",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-26",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-27",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-28",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-29",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-30",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-01",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-02",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-03",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-04",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-05",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-06",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-07",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-08",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-09",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-10",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-11",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-12",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": {
          "e": 0,
          "a": 0,
          "dd": 0,
          "dm": 0,
          "he": 0
        },
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-13",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": {
          "e": 0,
          "a": 0,
          "dd": 0,
          "dm": 0,
          "he": 0
        },
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-14",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": {
          "e": 0,
          "a": 0,
          "dd": 0,
          "dm": 0,
          "he": 0
        },
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-15",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": {
          "e": 0,
          "a": 0,
          "dd": 0,
          "dm": 0,
          "he": 0
        },
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-16",
        "g": {},
        "m": 0,
        "w": 0,
        "l": 0,
        "t": 0,
        "k": 0,
        "tot": {
          "e": 0,
          "a": 0,
          "dd": 0,
          "dm": 0,
          "he": 0
        },
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      }
    ]
  },
  {
    "id": "p8",
    "pid": "71bc770950a2184e0873941d07b23ddcc2e77c00368babe9ed5b|7a6bfeecad03bc198ea7f97517e765fb",
    "name": "センチネル後藤",
    "tag": "",
    "endorse": 2,
    "title": null,
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7d6e44a87fed392a39667dc8d80b492523725e87aa242e6d60863eab32efe13f.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4593e1d88c0bd3c5d933a1cd1857232f499be6ced5f269d5cc5cf2415e00b15e.png",
    "role": "Support",
    "ranks": {
      "Tank": null,
      "Damage": null,
      "Support": null
    },
    "rankTier": null,
    "overall": {
      "matches": 2,
      "wins": 1,
      "losses": 1,
      "wr": 50,
      "kda": 2.55,
      "elim": 17.26,
      "deaths": 6.77,
      "dmg": 9361.08,
      "heal": 643.32,
      "time": 1773,
      "tot": {
        "e": 51,
        "a": 0,
        "dd": 20,
        "dm": 27662,
        "he": 1901
      }
    },
    "roles": {
      "Damage": {
        "g": 2,
        "w": 1,
        "l": 1,
        "time": 1773,
        "wr": 50,
        "kda": 2.55,
        "elim": 17.26,
        "deaths": 6.77,
        "dmg": 9361.08,
        "heal": 643.32
      }
    },
    "heroes": [
      {
        "slug": "emre",
        "n": "Emre",
        "role": "Damage",
        "g": 2,
        "wr": 50,
        "kda": 2.55
      }
    ],
    "bscore": {
      "emre": {
        "finalScore": 34.09,
        "battleScore": 40.1,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 1773,
          "wr": 50,
          "el10": 17.26,
          "de10": 6.77,
          "dm10": 8162,
          "he10": 643,
          "as10": 0,
          "wa": 30,
          "ca": 13
        }
      }
    },
    "recent": [
      {
        "d": "2026-09-17",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-18",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-19",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-20",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-21",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-22",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-23",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-24",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-25",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-26",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-27",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-28",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-29",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-30",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-01",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-02",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-03",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-04",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-05",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-06",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-07",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-08",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-09",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-10",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-11",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-12",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": {
          "e": 51,
          "a": 0,
          "dd": 20,
          "dm": 27662,
          "he": 1901
        },
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-13",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": {
          "e": 51,
          "a": 0,
          "dd": 20,
          "dm": 27662,
          "he": 1901
        },
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-14",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": {
          "e": 51,
          "a": 0,
          "dd": 20,
          "dm": 27662,
          "he": 1901
        },
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-15",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": {
          "e": 51,
          "a": 0,
          "dd": 20,
          "dm": 27662,
          "he": 1901
        },
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-16",
        "g": {},
        "m": 2,
        "w": 1,
        "l": 1,
        "t": 1773,
        "k": 2.55,
        "tot": {
          "e": 51,
          "a": 0,
          "dd": 20,
          "dm": 27662,
          "he": 1901
        },
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      }
    ]
  },
  {
    "id": "p9",
    "pid": "df57b58ba07994e0b8a122a7d7|cd6cf51152735dd8913954bd8b4cd0e6",
    "name": "Miyasho",
    "tag": "",
    "endorse": 2,
    "title": null,
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b8bdee6c02c050577705584278c7304d7d9416c3aa1f2f6563843dfe9295fc3d.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/0e9da94d2a00882004bf2249d93d14f35020e078080de4ef33233f1e6c8fbbb8.png",
    "role": "Support",
    "ranks": {
      "Tank": null,
      "Damage": {
        "division": "silver",
        "tier": 5,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_SilverTier.305e60dca5e95356ced59825426844cc7cdb4948.png"
      },
      "Support": {
        "division": "silver",
        "tier": 2,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_SilverTier.305e60dca5e95356ced59825426844cc7cdb4948.png"
      }
    },
    "rankTier": "Silver 2",
    "overall": {
      "matches": 7,
      "wins": 1,
      "losses": 6,
      "wr": 14.29,
      "kda": 1.09,
      "elim": 9.48,
      "deaths": 8.93,
      "dmg": 7003.77,
      "heal": 5027.89,
      "time": 4302,
      "tot": {
        "e": 68,
        "a": 2,
        "dd": 64,
        "dm": 50217,
        "he": 36050
      }
    },
    "roles": {
      "Damage": {
        "g": 2,
        "w": 0,
        "l": 2,
        "time": 1161,
        "wr": 0,
        "kda": 1.16,
        "elim": 11.37,
        "deaths": 9.82,
        "dmg": 7271.32,
        "heal": 349.87
      },
      "Support": {
        "g": 5,
        "w": 1,
        "l": 4,
        "time": 3141,
        "wr": 20,
        "kda": 1.07,
        "elim": 8.79,
        "deaths": 8.6,
        "dmg": 6904.87,
        "heal": 6757.02
      }
    },
    "heroes": [
      {
        "slug": "doctrine",
        "n": "Doctrine",
        "role": "Support",
        "g": 2,
        "wr": 0,
        "kda": 0.78
      },
      {
        "slug": "echo",
        "n": "Echo",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 0
      },
      {
        "slug": "moira",
        "n": "Moira",
        "role": "Support",
        "g": 1,
        "wr": 0,
        "kda": 1.22
      },
      {
        "slug": "shion",
        "n": "Shion",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 1
      },
      {
        "slug": "sombra",
        "n": "Sombra",
        "role": "Support",
        "g": 1,
        "wr": 0,
        "kda": 0.89
      },
      {
        "slug": "wuyang",
        "n": "Wuyang",
        "role": "Support",
        "g": 1,
        "wr": 100,
        "kda": 1.47
      }
    ],
    "bscore": {
      "doctrine": {
        "finalScore": 29.46,
        "battleScore": 31.51,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 1,
        "det": {
          "g": 2,
          "time": 773,
          "wr": 0,
          "el10": 5.43,
          "de10": 6.99,
          "dm10": 2947,
          "he10": 8683,
          "as10": 7.76,
          "wa": 46,
          "ca": 0
        },
        "rankNew": true
      },
      "echo": {
        "finalScore": 28.24,
        "battleScore": 30.21,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 1,
        "det": {
          "g": 1,
          "time": 238,
          "wr": 0,
          "el10": 0,
          "de10": 15.15,
          "dm10": 4923,
          "he10": 0,
          "as10": 0,
          "wa": 16,
          "ca": 1
        },
        "rankNew": true
      },
      "moira": {
        "finalScore": 48.62,
        "battleScore": 34.53,
        "coeff": 1.1,
        "matchCoef": 0.92,
        "gamesPlayed": 1,
        "rankIndex": 1,
        "det": {
          "g": 1,
          "time": 625,
          "wr": 0,
          "el10": 10.56,
          "de10": 8.64,
          "dm10": 4884,
          "he10": 5588,
          "as10": 18.25,
          "wa": 0,
          "ca": 0
        },
        "rankNew": true
      },
      "shion": {
        "finalScore": 33.32,
        "battleScore": 35.64,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 1,
        "det": {
          "g": 1,
          "time": 581,
          "wr": 0,
          "el10": 8.26,
          "de10": 8.26,
          "dm10": 6524,
          "he10": 0,
          "as10": 1.03,
          "wa": 31,
          "ca": 14
        },
        "rankDeltaPower": -1
      },
      "sombra": {
        "finalScore": 32.02,
        "battleScore": 34.25,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 1,
        "det": {
          "g": 1,
          "time": 439,
          "wr": 0,
          "el10": 8.2,
          "de10": 12.3,
          "dm10": 3013,
          "he10": 6728,
          "as10": 12.3,
          "wa": 30,
          "ca": 4
        },
        "rankNew": true
      },
      "wuyang": {
        "finalScore": 33.12,
        "battleScore": 35.42,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 1,
        "det": {
          "g": 1,
          "time": 1126,
          "wr": 69,
          "el10": 11.72,
          "de10": 7.99,
          "dm10": 6985,
          "he10": 6118,
          "as10": 13.86,
          "wa": 35,
          "ca": 0
        },
        "rankNew": true
      }
    },
    "recent": [
      {
        "d": "2026-09-17",
        "g": {},
        "m": 39,
        "w": 18,
        "l": 21,
        "t": 25939,
        "k": 1.6,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-3"
        }
      },
      {
        "d": "2026-09-18",
        "g": {},
        "m": 39,
        "w": 18,
        "l": 21,
        "t": 25939,
        "k": 1.6,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-3"
        }
      },
      {
        "d": "2026-09-19",
        "g": {},
        "m": 39,
        "w": 18,
        "l": 21,
        "t": 25939,
        "k": 1.6,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-3"
        }
      },
      {
        "d": "2026-09-20",
        "g": {},
        "m": 39,
        "w": 18,
        "l": 21,
        "t": 25939,
        "k": 1.6,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-3"
        }
      },
      {
        "d": "2026-09-21",
        "g": {},
        "m": 39,
        "w": 18,
        "l": 21,
        "t": 25939,
        "k": 1.6,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-3"
        }
      },
      {
        "d": "2026-09-22",
        "g": {},
        "m": 39,
        "w": 18,
        "l": 21,
        "t": 25939,
        "k": 1.6,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-3"
        }
      },
      {
        "d": "2026-09-23",
        "g": {},
        "m": 39,
        "w": 18,
        "l": 21,
        "t": 25939,
        "k": 1.6,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-3"
        }
      },
      {
        "d": "2026-09-24",
        "g": {},
        "m": 39,
        "w": 18,
        "l": 21,
        "t": 25939,
        "k": 1.6,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-3"
        }
      },
      {
        "d": "2026-09-25",
        "g": {},
        "m": 46,
        "w": 22,
        "l": 24,
        "t": 31423,
        "k": 1.69,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-3"
        }
      },
      {
        "d": "2026-09-26",
        "g": {},
        "m": 49,
        "w": 25,
        "l": 24,
        "t": 32363,
        "k": 1.7,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-09-27",
        "g": {},
        "m": 53,
        "w": 29,
        "l": 24,
        "t": 35090,
        "k": 1.73,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-1"
        }
      },
      {
        "d": "2026-09-28",
        "g": {},
        "m": 53,
        "w": 29,
        "l": 24,
        "t": 35090,
        "k": 1.73,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-1"
        }
      },
      {
        "d": "2026-09-29",
        "g": {},
        "m": 61,
        "w": 30,
        "l": 31,
        "t": 39970,
        "k": 1.65,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "silver-4",
          "Support": "silver-1"
        }
      },
      {
        "d": "2026-09-30",
        "g": {},
        "m": 66,
        "w": 32,
        "l": 34,
        "t": 42618,
        "k": 1.65,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "silver-4",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-01",
        "g": {},
        "m": 66,
        "w": 32,
        "l": 34,
        "t": 42618,
        "k": 1.65,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "silver-4",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-02",
        "g": {},
        "m": 66,
        "w": 32,
        "l": 34,
        "t": 42618,
        "k": 1.65,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "silver-4",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-03",
        "g": {},
        "m": 71,
        "w": 35,
        "l": 36,
        "t": 46018,
        "k": 1.61,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-04",
        "g": {},
        "m": 71,
        "w": 35,
        "l": 36,
        "t": 46018,
        "k": 1.61,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-05",
        "g": {},
        "m": 71,
        "w": 35,
        "l": 36,
        "t": 46018,
        "k": 1.61,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-06",
        "g": {},
        "m": 71,
        "w": 35,
        "l": 36,
        "t": 46018,
        "k": 1.61,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-07",
        "g": {},
        "m": 71,
        "w": 35,
        "l": 36,
        "t": 46018,
        "k": 1.61,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-08",
        "g": {},
        "m": 71,
        "w": 35,
        "l": 36,
        "t": 46018,
        "k": 1.61,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-09",
        "g": {},
        "m": 71,
        "w": 35,
        "l": 36,
        "t": 46018,
        "k": 1.61,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-10",
        "g": {},
        "m": 71,
        "w": 35,
        "l": 36,
        "t": 46018,
        "k": 1.61,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-11",
        "g": {},
        "m": 71,
        "w": 35,
        "l": 36,
        "t": 46018,
        "k": 1.61,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-12",
        "g": {},
        "m": 71,
        "w": 35,
        "l": 36,
        "t": 46018,
        "k": 1.61,
        "tot": {
          "e": 910,
          "a": 46,
          "dd": 594,
          "dm": 455202,
          "he": 433444
        },
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-13",
        "g": {},
        "m": 71,
        "w": 35,
        "l": 36,
        "t": 46018,
        "k": 1.61,
        "tot": {
          "e": 910,
          "a": 46,
          "dd": 594,
          "dm": 455202,
          "he": 433444
        },
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-14",
        "g": {},
        "m": 71,
        "w": 35,
        "l": 36,
        "t": 46018,
        "k": 1.61,
        "tot": {
          "e": 910,
          "a": 46,
          "dd": 594,
          "dm": 455202,
          "he": 433444
        },
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-15",
        "g": {},
        "m": 71,
        "w": 35,
        "l": 36,
        "t": 46018,
        "k": 1.61,
        "tot": {
          "e": 910,
          "a": 46,
          "dd": 594,
          "dm": 455202,
          "he": 433444
        },
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-16",
        "g": {
          "doctrine": 2,
          "echo": 1,
          "moira": 1,
          "sombra": 1,
          "wuyang": 1
        },
        "m": 7,
        "w": 1,
        "l": 6,
        "t": 4302,
        "k": 1.09,
        "tot": {
          "e": 68,
          "a": 2,
          "dd": 64,
          "dm": 50217,
          "he": 36050
        },
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      }
    ]
  },
  {
    "id": "p10",
    "pid": "dc50bb8ba174d6fcbea623|78615f6a87b43682d09d448bafb3b022",
    "name": "Nnware",
    "tag": "",
    "endorse": 3,
    "title": "Talon Imperial",
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a28b07c1bc0019598da03e63c66837e29357caa2b7bc8bf38dbeba0b3bcba4b4.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/aface728ddc9d3c100f0d771e5bc706f22f37e78282bed1426869e295e142aee.png",
    "role": "Damage",
    "ranks": {
      "Tank": null,
      "Damage": {
        "division": "gold",
        "tier": 3,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_GoldTier.8d40eab551020b46a84002019dd98714149ed5e2.png"
      },
      "Support": {
        "division": "gold",
        "tier": 3,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_GoldTier.8d40eab551020b46a84002019dd98714149ed5e2.png"
      }
    },
    "rankTier": "Gold 3",
    "overall": {
      "matches": 7,
      "wins": 6,
      "losses": 1,
      "wr": 85.71,
      "kda": 2.41,
      "elim": 11.85,
      "deaths": 5.73,
      "dmg": 4966.89,
      "heal": 6245.91,
      "time": 4609,
      "tot": {
        "e": 91,
        "a": 15,
        "dd": 44,
        "dm": 38154,
        "he": 47979
      }
    },
    "roles": {
      "Damage": {
        "g": 1,
        "w": 1,
        "l": 0,
        "time": 747,
        "wr": 100,
        "kda": 4.14,
        "elim": 20.08,
        "deaths": 5.62,
        "dmg": 10379.12,
        "heal": 0
      },
      "Support": {
        "g": 6,
        "w": 5,
        "l": 1,
        "time": 3862,
        "wr": 83.33,
        "kda": 2.08,
        "elim": 10.25,
        "deaths": 5.75,
        "dmg": 3920.04,
        "heal": 7454.01
      }
    },
    "heroes": [
      {
        "slug": "wuyang",
        "n": "Wuyang",
        "role": "Support",
        "g": 3,
        "wr": 100,
        "kda": 2.42
      },
      {
        "slug": "ana",
        "n": "Ana",
        "role": "Support",
        "g": 1,
        "wr": 100,
        "kda": 1.4
      },
      {
        "slug": "doctrine",
        "n": "Doctrine",
        "role": "Support",
        "g": 1,
        "wr": 0,
        "kda": 0.44
      },
      {
        "slug": "junkrat",
        "n": "Junkrat",
        "role": "Damage",
        "g": 1,
        "wr": 100,
        "kda": 4.14
      },
      {
        "slug": "sombra",
        "n": "Sombra",
        "role": "Support",
        "g": 1,
        "wr": 100,
        "kda": 3
      }
    ],
    "bscore": {
      "ana": {
        "finalScore": 34.17,
        "battleScore": 33.23,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 2,
        "det": {
          "g": 1,
          "time": 592,
          "wr": 84,
          "el10": 4.05,
          "de10": 5.06,
          "dm10": 2119,
          "he10": 5575,
          "as10": 6.08,
          "wa": 46,
          "ca": 0
        },
        "rankDelta": 1,
        "rankDeltaPower": 1
      },
      "doctrine": {
        "finalScore": 33.23,
        "battleScore": 32.31,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 2,
        "det": {
          "g": 1,
          "time": 613,
          "wr": 0,
          "el10": 3.92,
          "de10": 8.81,
          "dm10": 2128,
          "he10": 7576,
          "as10": 4.9,
          "wa": 55,
          "ca": 0
        },
        "rankDelta": -1,
        "rankDeltaPower": -1
      },
      "junkrat": {
        "finalScore": 44.75,
        "battleScore": 43.51,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 2,
        "det": {
          "g": 1,
          "time": 747,
          "wr": 100,
          "el10": 20.08,
          "de10": 5.62,
          "dm10": 8249,
          "he10": 0,
          "as10": 3.21,
          "wa": 19,
          "ca": 0
        }
      },
      "sombra": {
        "finalScore": 44.25,
        "battleScore": 43.03,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 2,
        "det": {
          "g": 1,
          "time": 357,
          "wr": 100,
          "el10": 16.8,
          "de10": 8.4,
          "dm10": 3225,
          "he10": 6826,
          "as10": 20.17,
          "wa": 30,
          "ca": 7
        },
        "rankDelta": 1,
        "rankDeltaPower": 1
      },
      "wuyang": {
        "finalScore": 43.44,
        "battleScore": 42.23,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 2,
        "det": {
          "g": 3,
          "time": 1613,
          "wr": 100,
          "el10": 10.79,
          "de10": 4.46,
          "dm10": 3986,
          "he10": 7999,
          "as10": 16.74,
          "wa": 21,
          "ca": 0
        },
        "rankDelta": -1,
        "rankDeltaPower": -1
      }
    },
    "recent": [
      {
        "d": "2026-09-20",
        "g": {},
        "m": 56,
        "w": 29,
        "l": 27,
        "t": 36389,
        "k": 2.17,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-09-21",
        "g": {},
        "m": 56,
        "w": 29,
        "l": 27,
        "t": 36389,
        "k": 2.17,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-09-22",
        "g": {},
        "m": 56,
        "w": 29,
        "l": 27,
        "t": 36389,
        "k": 2.17,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-09-23",
        "g": {},
        "m": 56,
        "w": 29,
        "l": 27,
        "t": 36389,
        "k": 2.17,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-09-24",
        "g": {},
        "m": 56,
        "w": 29,
        "l": 27,
        "t": 36389,
        "k": 2.17,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-09-25",
        "g": {},
        "m": 56,
        "w": 29,
        "l": 27,
        "t": 36389,
        "k": 2.17,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-09-26",
        "g": {},
        "m": 56,
        "w": 29,
        "l": 27,
        "t": 36389,
        "k": 2.17,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-09-27",
        "g": {},
        "m": 57,
        "w": 30,
        "l": 27,
        "t": 37647,
        "k": 2.16,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-09-28",
        "g": {},
        "m": 57,
        "w": 30,
        "l": 27,
        "t": 37647,
        "k": 2.16,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-09-29",
        "g": {},
        "m": 57,
        "w": 30,
        "l": 27,
        "t": 37647,
        "k": 2.16,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-09-30",
        "g": {},
        "m": 57,
        "w": 30,
        "l": 27,
        "t": 37647,
        "k": 2.16,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-10-01",
        "g": {},
        "m": 57,
        "w": 30,
        "l": 27,
        "t": 37647,
        "k": 2.16,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-10-02",
        "g": {},
        "m": 57,
        "w": 30,
        "l": 27,
        "t": 37647,
        "k": 2.16,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-10-03",
        "g": {},
        "m": 63,
        "w": 34,
        "l": 29,
        "t": 40043,
        "k": 2.17,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-10-04",
        "g": {},
        "m": 63,
        "w": 34,
        "l": 29,
        "t": 40043,
        "k": 2.17,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-10-05",
        "g": {},
        "m": 63,
        "w": 34,
        "l": 29,
        "t": 40043,
        "k": 2.17,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-10-06",
        "g": {},
        "m": 63,
        "w": 34,
        "l": 29,
        "t": 40043,
        "k": 2.17,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-10-07",
        "g": {},
        "m": 71,
        "w": 37,
        "l": 34,
        "t": 45758,
        "k": 2.13,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-4"
        }
      },
      {
        "d": "2026-10-08",
        "g": {},
        "m": 71,
        "w": 37,
        "l": 34,
        "t": 45758,
        "k": 2.13,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-4"
        }
      },
      {
        "d": "2026-10-09",
        "g": {},
        "m": 71,
        "w": 37,
        "l": 34,
        "t": 45758,
        "k": 2.13,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-4"
        }
      },
      {
        "d": "2026-10-10",
        "g": {},
        "m": 71,
        "w": 37,
        "l": 34,
        "t": 45758,
        "k": 2.13,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-4"
        }
      },
      {
        "d": "2026-10-11",
        "g": {},
        "m": 71,
        "w": 37,
        "l": 34,
        "t": 45758,
        "k": 2.13,
        "tot": null,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-4"
        }
      },
      {
        "d": "2026-10-12",
        "g": {},
        "m": 71,
        "w": 37,
        "l": 34,
        "t": 45758,
        "k": 2.13,
        "tot": {
          "e": 1031,
          "a": 162,
          "dd": 560,
          "dm": 478322,
          "he": 334059
        },
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-4"
        }
      },
      {
        "d": "2026-10-13",
        "g": {},
        "m": 71,
        "w": 37,
        "l": 34,
        "t": 45758,
        "k": 2.13,
        "tot": {
          "e": 1031,
          "a": 162,
          "dd": 560,
          "dm": 478322,
          "he": 334059
        },
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-4"
        }
      },
      {
        "d": "2026-10-14",
        "g": {},
        "m": 7,
        "w": 6,
        "l": 1,
        "t": 4609,
        "k": 2.41,
        "tot": {
          "e": 91,
          "a": 15,
          "dd": 44,
          "dm": 38154,
          "he": 47979
        },
        "r": {
          "Tank": null,
          "Damage": "gold-3",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-10-15",
        "g": {},
        "m": 7,
        "w": 6,
        "l": 1,
        "t": 4609,
        "k": 2.41,
        "tot": {
          "e": 91,
          "a": 15,
          "dd": 44,
          "dm": 38154,
          "he": 47979
        },
        "r": {
          "Tank": null,
          "Damage": "gold-3",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-10-16",
        "g": {},
        "m": 7,
        "w": 6,
        "l": 1,
        "t": 4609,
        "k": 2.41,
        "tot": {
          "e": 91,
          "a": 15,
          "dd": 44,
          "dm": 38154,
          "he": 47979
        },
        "r": {
          "Tank": null,
          "Damage": "gold-3",
          "Support": "gold-3"
        }
      }
    ]
  },
  {
    "id": "p11",
    "pid": "c2779cbf815ed6febaa823|5c92c86a83e8c0634c7f082bbed0d680",
    "name": "PIPURO",
    "tag": "",
    "endorse": 3,
    "title": null,
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4a8e450033113f4314216a457fc7961a3740b41249692c6232b5589e74c5f534.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d7fe48012a3cf539649c1ec884399874eef1c3a761db698a09dc695a57f0f914.png",
    "role": "Support",
    "ranks": {
      "Tank": {
        "division": "bronze",
        "tier": 1,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_BronzeTier.f46bc3540601455a7768761396f9310d805052ad.png"
      },
      "Damage": {
        "division": "bronze",
        "tier": 1,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_BronzeTier.f46bc3540601455a7768761396f9310d805052ad.png"
      },
      "Support": {
        "division": "silver",
        "tier": 5,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_SilverTier.305e60dca5e95356ced59825426844cc7cdb4948.png"
      }
    },
    "rankTier": "Silver 5",
    "overall": {
      "matches": 11,
      "wins": 7,
      "losses": 4,
      "wr": 63.64,
      "kda": 3.07,
      "elim": 15.7,
      "deaths": 5.49,
      "dmg": 7726.34,
      "heal": 3953.88,
      "time": 6231,
      "tot": {
        "e": 163,
        "a": 12,
        "dd": 57,
        "dm": 80238,
        "he": 41061
      }
    },
    "roles": {
      "Tank": {
        "g": 4,
        "w": 2,
        "l": 2,
        "time": 2340,
        "wr": 50,
        "kda": 7,
        "elim": 22.31,
        "deaths": 3.33,
        "dmg": 12130.51,
        "heal": 1719.74
      },
      "Damage": {
        "g": 2,
        "w": 1,
        "l": 1,
        "time": 1207,
        "wr": 50,
        "kda": 1.5,
        "elim": 11.93,
        "deaths": 7.95,
        "dmg": 5720.13,
        "heal": 752.61
      },
      "Support": {
        "g": 5,
        "w": 4,
        "l": 1,
        "time": 2684,
        "wr": 80,
        "kda": 2.14,
        "elim": 11.62,
        "deaths": 6.26,
        "dmg": 4788.82,
        "heal": 7341.28
      }
    },
    "heroes": [
      {
        "slug": "winston",
        "n": "Winston",
        "role": "Tank",
        "g": 3,
        "wr": 33.33,
        "kda": 4.92
      },
      {
        "slug": "kiriko",
        "n": "Kiriko",
        "role": "Support",
        "g": 2,
        "wr": 50,
        "kda": 1.75
      },
      {
        "slug": "sombra",
        "n": "Sombra",
        "role": "Support",
        "g": 2,
        "wr": 100,
        "kda": 2.75
      },
      {
        "slug": "moira",
        "n": "Moira",
        "role": "Support",
        "g": 1,
        "wr": 100,
        "kda": 3.4
      },
      {
        "slug": "reaper",
        "n": "Reaper",
        "role": "Damage",
        "g": 1,
        "wr": 100,
        "kda": 2.33
      },
      {
        "slug": "sigma",
        "n": "Sigma",
        "role": "Tank",
        "g": 1,
        "wr": 100,
        "kda": 0
      },
      {
        "slug": "tracer",
        "n": "Tracer",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 0.43
      }
    ],
    "bscore": {
      "kiriko": {
        "finalScore": 35.23,
        "battleScore": 37.68,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 1,
        "det": {
          "g": 2,
          "time": 1085,
          "wr": 47,
          "el10": 9.4,
          "de10": 6.64,
          "dm10": 2622,
          "he10": 7038,
          "as10": 11.06,
          "wa": 28,
          "ca": 17
        }
      },
      "moira": {
        "finalScore": 54.06,
        "battleScore": 42.37,
        "coeff": 1.1,
        "matchCoef": 0.92,
        "gamesPlayed": 1,
        "rankIndex": 1,
        "det": {
          "g": 1,
          "time": 512,
          "wr": 100,
          "el10": 19.94,
          "de10": 5.86,
          "dm10": 6372,
          "he10": 9547,
          "as10": 3.52,
          "wa": 0,
          "ca": 0
        }
      },
      "reaper": {
        "finalScore": 47.83,
        "battleScore": 41.59,
        "coeff": 1,
        "matchCoef": 0.92,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 752,
          "wr": 100,
          "el10": 16.76,
          "de10": 7.18,
          "dm10": 5590,
          "he10": 1209,
          "as10": 0,
          "wa": 23,
          "ca": 13
        }
      },
      "sigma": {
        "finalScore": 52.01,
        "battleScore": 38.02,
        "coeff": 1,
        "matchCoef": 0.92,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 483,
          "wr": 100,
          "el10": 28.55,
          "de10": 0,
          "dm10": 16460,
          "he10": 0,
          "as10": 4.97,
          "wa": 48,
          "ca": 0
        }
      },
      "sombra": {
        "finalScore": 39.07,
        "battleScore": 41.78,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 1,
        "det": {
          "g": 2,
          "time": 967,
          "wr": 100,
          "el10": 11.16,
          "de10": 4.96,
          "dm10": 2947,
          "he10": 6977,
          "as10": 12.4,
          "wa": 24,
          "ca": 8
        }
      },
      "tracer": {
        "finalScore": 26.89,
        "battleScore": 31.63,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 455,
          "wr": 15,
          "el10": 3.96,
          "de10": 9.24,
          "dm10": 4094,
          "he10": 0,
          "as10": 0,
          "wa": 26,
          "ca": 11
        }
      },
      "winston": {
        "finalScore": 36.14,
        "battleScore": 42.52,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 0,
        "det": {
          "g": 3,
          "time": 1857,
          "wr": 33,
          "el10": 20.68,
          "de10": 4.2,
          "dm10": 7858,
          "he10": 2167,
          "as10": 3.55,
          "wa": 46,
          "ca": 0
        }
      }
    },
    "recent": [
      {
        "d": "2026-09-20",
        "g": {},
        "m": 112,
        "w": 58,
        "l": 54,
        "t": 73709,
        "k": 2.65,
        "tot": null,
        "r": {
          "Tank": "silver-5",
          "Damage": null,
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-09-21",
        "g": {},
        "m": 120,
        "w": 59,
        "l": 61,
        "t": 78791,
        "k": 2.67,
        "tot": null,
        "r": {
          "Tank": "bronze-1",
          "Damage": null,
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-09-22",
        "g": {},
        "m": 120,
        "w": 59,
        "l": 61,
        "t": 78791,
        "k": 2.67,
        "tot": null,
        "r": {
          "Tank": "bronze-1",
          "Damage": null,
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-09-23",
        "g": {},
        "m": 125,
        "w": 60,
        "l": 65,
        "t": 81820,
        "k": 2.65,
        "tot": null,
        "r": {
          "Tank": "bronze-1",
          "Damage": null,
          "Support": "bronze-1"
        }
      },
      {
        "d": "2026-09-24",
        "g": {},
        "m": 133,
        "w": 66,
        "l": 67,
        "t": 86018,
        "k": 2.72,
        "tot": null,
        "r": {
          "Tank": "bronze-1",
          "Damage": null,
          "Support": "bronze-1"
        }
      },
      {
        "d": "2026-09-25",
        "g": {},
        "m": 133,
        "w": 66,
        "l": 67,
        "t": 86018,
        "k": 2.72,
        "tot": null,
        "r": {
          "Tank": "bronze-1",
          "Damage": null,
          "Support": "bronze-1"
        }
      },
      {
        "d": "2026-09-26",
        "g": {},
        "m": 139,
        "w": 69,
        "l": 70,
        "t": 89909,
        "k": 2.77,
        "tot": null,
        "r": {
          "Tank": "bronze-1",
          "Damage": null,
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-09-27",
        "g": {},
        "m": 143,
        "w": 73,
        "l": 70,
        "t": 92991,
        "k": 2.81,
        "tot": null,
        "r": {
          "Tank": "bronze-1",
          "Damage": null,
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-09-28",
        "g": {},
        "m": 154,
        "w": 81,
        "l": 73,
        "t": 100158,
        "k": 2.83,
        "tot": null,
        "r": {
          "Tank": "bronze-1",
          "Damage": null,
          "Support": "silver-4"
        }
      },
      {
        "d": "2026-09-29",
        "g": {},
        "m": 159,
        "w": 82,
        "l": 77,
        "t": 103529,
        "k": 2.76,
        "tot": null,
        "r": {
          "Tank": "bronze-1",
          "Damage": null,
          "Support": "silver-4"
        }
      },
      {
        "d": "2026-09-30",
        "g": {},
        "m": 165,
        "w": 82,
        "l": 83,
        "t": 107764,
        "k": 2.75,
        "tot": null,
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-4"
        }
      },
      {
        "d": "2026-10-01",
        "g": {},
        "m": 170,
        "w": 83,
        "l": 87,
        "t": 110587,
        "k": 2.7,
        "tot": null,
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-02",
        "g": {},
        "m": 178,
        "w": 86,
        "l": 92,
        "t": 115239,
        "k": 2.75,
        "tot": null,
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-03",
        "g": {},
        "m": 180,
        "w": 87,
        "l": 93,
        "t": 116089,
        "k": 2.75,
        "tot": null,
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-04",
        "g": {},
        "m": 184,
        "w": 91,
        "l": 93,
        "t": 119389,
        "k": 2.76,
        "tot": null,
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-05",
        "g": {},
        "m": 184,
        "w": 91,
        "l": 93,
        "t": 119389,
        "k": 2.76,
        "tot": null,
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-06",
        "g": {},
        "m": 184,
        "w": 91,
        "l": 93,
        "t": 119389,
        "k": 2.76,
        "tot": null,
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-07",
        "g": {},
        "m": 184,
        "w": 91,
        "l": 93,
        "t": 119389,
        "k": 2.76,
        "tot": null,
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-08",
        "g": {},
        "m": 184,
        "w": 91,
        "l": 93,
        "t": 119389,
        "k": 2.76,
        "tot": null,
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-09",
        "g": {},
        "m": 184,
        "w": 91,
        "l": 93,
        "t": 119389,
        "k": 2.76,
        "tot": null,
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-10",
        "g": {},
        "m": 9,
        "w": 7,
        "l": 2,
        "t": 4702,
        "k": 2.86,
        "tot": null,
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-11",
        "g": {},
        "m": 9,
        "w": 7,
        "l": 2,
        "t": 4702,
        "k": 2.86,
        "tot": null,
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-12",
        "g": {},
        "m": 9,
        "w": 7,
        "l": 2,
        "t": 4702,
        "k": 2.86,
        "tot": {
          "e": 114,
          "a": 12,
          "dd": 44,
          "dm": 54894,
          "he": 35064
        },
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-13",
        "g": {},
        "m": 9,
        "w": 7,
        "l": 2,
        "t": 4702,
        "k": 2.86,
        "tot": {
          "e": 114,
          "a": 12,
          "dd": 44,
          "dm": 54894,
          "he": 35064
        },
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-14",
        "g": {},
        "m": 9,
        "w": 7,
        "l": 2,
        "t": 4702,
        "k": 2.86,
        "tot": {
          "e": 114,
          "a": 12,
          "dd": 44,
          "dm": 54894,
          "he": 35064
        },
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-15",
        "g": {
          "winston": 2
        },
        "m": 11,
        "w": 7,
        "l": 4,
        "t": 6231,
        "k": 3.07,
        "tot": {
          "e": 163,
          "a": 12,
          "dd": 57,
          "dm": 80238,
          "he": 41061
        },
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-16",
        "g": {},
        "m": 11,
        "w": 7,
        "l": 4,
        "t": 6231,
        "k": 3.07,
        "tot": {
          "e": 163,
          "a": 12,
          "dd": 57,
          "dm": 80238,
          "he": 41061
        },
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      }
    ]
  }
];
/* 全モード(クイック・プレイ + ライバル・プレイの合算) */
const PLAYERS_ALL = [
  {
    "id": "hiyori",
    "pid": "71bf7e095199184f0373963307b032dafdea771631451a4bf458092eb1|fc2ba3f2117372f760ba9195a971d346",
    "name": "ひよりっつぁっん",
    "tag": "#3327",
    "endorse": 3,
    "title": "<3",
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3cc71b576b1acf459e9536d67996ee89e9169a3da8f15a862d4822c70c945ea7.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e1ad0e4fbed41fa30cbe653f3b24660aa92ec0cddef43008186349ff69739f56.png",
    "role": "Damage",
    "ranks": {
      "Tank": null,
      "Damage": {
        "division": "platinum",
        "tier": 5,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_PlatinumTier.694340e3a5b2031d4fac9eb1d8f52c6855d4c072.png"
      },
      "Support": null
    },
    "rankTier": "Platinum 5",
    "overall": {
      "matches": 1208,
      "wins": 598,
      "losses": 610,
      "wr": 49.5,
      "kda": 2.35,
      "elim": 16.58,
      "deaths": 7.67,
      "dmg": 9777.63,
      "heal": 2160.24,
      "time": 611682,
      "tot": {
        "e": 16901,
        "a": 1464,
        "dd": 7819,
        "dm": 9968001,
        "he": 2202304
      }
    },
    "roles": {
      "Tank": {
        "g": 340,
        "w": 168,
        "l": 172,
        "time": 168350,
        "wr": 49.41,
        "kda": 2.98,
        "elim": 18.55,
        "deaths": 6.78,
        "dmg": 12048.04,
        "heal": 913.43
      },
      "Damage": {
        "g": 570,
        "w": 283,
        "l": 287,
        "time": 286423,
        "wr": 49.65,
        "kda": 2.17,
        "elim": 17.95,
        "deaths": 8.34,
        "dmg": 10871.78,
        "heal": 309.56
      },
      "Support": {
        "g": 298,
        "w": 147,
        "l": 151,
        "time": 156909,
        "wr": 49.33,
        "kda": 2.1,
        "elim": 11.96,
        "deaths": 7.4,
        "dmg": 5344.4,
        "heal": 6876.23
      }
    },
    "heroes": [
      {
        "slug": "soldier-76",
        "n": "Soldier: 76",
        "role": "Damage",
        "g": 80,
        "wr": 55,
        "kda": 2.56
      },
      {
        "slug": "tracer",
        "n": "Tracer",
        "role": "Damage",
        "g": 51,
        "wr": 54.9,
        "kda": 1.99
      },
      {
        "slug": "sojourn",
        "n": "Sojourn",
        "role": "Damage",
        "g": 49,
        "wr": 48.98,
        "kda": 2.33
      },
      {
        "slug": "cassidy",
        "n": "Cassidy",
        "role": "Damage",
        "g": 47,
        "wr": 44.68,
        "kda": 2.06
      },
      {
        "slug": "sigma",
        "n": "Sigma",
        "role": "Tank",
        "g": 46,
        "wr": 58.7,
        "kda": 4.32
      },
      {
        "slug": "ashe",
        "n": "Ashe",
        "role": "Damage",
        "g": 45,
        "wr": 42.22,
        "kda": 2.53
      },
      {
        "slug": "junker-queen",
        "n": "Junker Queen",
        "role": "Tank",
        "g": 44,
        "wr": 50,
        "kda": 2.84
      },
      {
        "slug": "pharah",
        "n": "Pharah",
        "role": "Damage",
        "g": 44,
        "wr": 50,
        "kda": 2.18
      },
      {
        "slug": "kiriko",
        "n": "Kiriko",
        "role": "Support",
        "g": 43,
        "wr": 48.84,
        "kda": 2
      },
      {
        "slug": "lucio",
        "n": "Lúcio",
        "role": "Support",
        "g": 36,
        "wr": 52.78,
        "kda": 2.25
      },
      {
        "slug": "zenyatta",
        "n": "Zenyatta",
        "role": "Support",
        "g": 36,
        "wr": 52.78,
        "kda": 2.45
      },
      {
        "slug": "mauga",
        "n": "Mauga",
        "role": "Tank",
        "g": 32,
        "wr": 46.88,
        "kda": 3.59
      },
      {
        "slug": "dva",
        "n": "D.Va",
        "role": "Tank",
        "g": 31,
        "wr": 51.61,
        "kda": 3.97
      },
      {
        "slug": "ramattra",
        "n": "Ramattra",
        "role": "Tank",
        "g": 31,
        "wr": 38.71,
        "kda": 3.49
      },
      {
        "slug": "zarya",
        "n": "Zarya",
        "role": "Tank",
        "g": 29,
        "wr": 41.38,
        "kda": 2.52
      },
      {
        "slug": "widowmaker",
        "n": "Widowmaker",
        "role": "Damage",
        "g": 28,
        "wr": 39.29,
        "kda": 1.98
      },
      {
        "slug": "ana",
        "n": "Ana",
        "role": "Support",
        "g": 27,
        "wr": 40.74,
        "kda": 2.35
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
        "slug": "emre",
        "n": "Emre",
        "role": "Damage",
        "g": 26,
        "wr": 46.15,
        "kda": 2.23
      },
      {
        "slug": "juno",
        "n": "Juno",
        "role": "Support",
        "g": 26,
        "wr": 50,
        "kda": 1.96
      },
      {
        "slug": "baptiste",
        "n": "Baptiste",
        "role": "Support",
        "g": 25,
        "wr": 64,
        "kda": 1.78
      },
      {
        "slug": "genji",
        "n": "Genji",
        "role": "Damage",
        "g": 24,
        "wr": 50,
        "kda": 1.34
      },
      {
        "slug": "shion",
        "n": "Shion",
        "role": "Damage",
        "g": 23,
        "wr": 73.91,
        "kda": 2.42
      },
      {
        "slug": "winston",
        "n": "Winston",
        "role": "Tank",
        "g": 23,
        "wr": 47.83,
        "kda": 2.2
      },
      {
        "slug": "bastion",
        "n": "Bastion",
        "role": "Damage",
        "g": 22,
        "wr": 50,
        "kda": 2.59
      },
      {
        "slug": "lifeweaver",
        "n": "Lifeweaver",
        "role": "Support",
        "g": 21,
        "wr": 38.1,
        "kda": 1.56
      },
      {
        "slug": "moira",
        "n": "Moira",
        "role": "Support",
        "g": 21,
        "wr": 38.1,
        "kda": 2.63
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
        "slug": "echo",
        "n": "Echo",
        "role": "Damage",
        "g": 19,
        "wr": 63.16,
        "kda": 2.27
      },
      {
        "slug": "orisa",
        "n": "Orisa",
        "role": "Tank",
        "g": 19,
        "wr": 52.63,
        "kda": 3.19
      },
      {
        "slug": "symmetra",
        "n": "Symmetra",
        "role": "Damage",
        "g": 19,
        "wr": 47.37,
        "kda": 2.17
      },
      {
        "slug": "sierra",
        "n": "Sierra",
        "role": "Damage",
        "g": 18,
        "wr": 55.56,
        "kda": 2.18
      },
      {
        "slug": "illari",
        "n": "Illari",
        "role": "Support",
        "g": 17,
        "wr": 47.06,
        "kda": 2.38
      },
      {
        "slug": "freja",
        "n": "Freja",
        "role": "Damage",
        "g": 13,
        "wr": 38.46,
        "kda": 1.3
      },
      {
        "slug": "reaper",
        "n": "Reaper",
        "role": "Damage",
        "g": 13,
        "wr": 30.77,
        "kda": 1.77
      },
      {
        "slug": "sombra",
        "n": "Sombra",
        "role": "Support",
        "g": 12,
        "wr": 58.33,
        "kda": 2.66
      },
      {
        "slug": "anran",
        "n": "Anran",
        "role": "Damage",
        "g": 11,
        "wr": 45.45,
        "kda": 1.86
      },
      {
        "slug": "roadhog",
        "n": "Roadhog",
        "role": "Tank",
        "g": 11,
        "wr": 45.45,
        "kda": 2.93
      },
      {
        "slug": "hanzo",
        "n": "Hanzo",
        "role": "Damage",
        "g": 9,
        "wr": 55.56,
        "kda": 1.56
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
        "slug": "torbjorn",
        "n": "Torbjörn",
        "role": "Damage",
        "g": 9,
        "wr": 22.22,
        "kda": 1.67
      },
      {
        "slug": "hazard",
        "n": "Hazard",
        "role": "Tank",
        "g": 8,
        "wr": 25,
        "kda": 2
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
        "slug": "mizuki",
        "n": "Mizuki",
        "role": "Support",
        "g": 8,
        "wr": 50,
        "kda": 1.65
      },
      {
        "slug": "domina",
        "n": "Domina",
        "role": "Tank",
        "g": 7,
        "wr": 100,
        "kda": 6.35
      },
      {
        "slug": "mei",
        "n": "Mei",
        "role": "Damage",
        "g": 7,
        "wr": 57.14,
        "kda": 3.09
      },
      {
        "slug": "dmon",
        "n": "D.Mon",
        "role": "Tank",
        "g": 4,
        "wr": 75,
        "kda": 1.88
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
        "slug": "venture",
        "n": "Venture",
        "role": "Damage",
        "g": 3,
        "wr": 66.67,
        "kda": 1.62
      },
      {
        "slug": "doctrine",
        "n": "Doctrine",
        "role": "Support",
        "g": 2,
        "wr": 0,
        "kda": 1.07
      },
      {
        "slug": "vendetta",
        "n": "Vendetta",
        "role": "Damage",
        "g": 2,
        "wr": 0,
        "kda": 0.88
      }
    ],
    "bscore": {
      "ashe": {
        "finalScore": 55.97,
        "battleScore": 40.02,
        "coeff": 1.33,
        "matchCoef": 1.05,
        "gamesPlayed": 45,
        "rankIndex": 3,
        "det": {
          "g": 45,
          "time": 21709,
          "wr": 42.044444444444444,
          "el10": 17.76311111111111,
          "de10": 7.025333333333333,
          "dm10": 9433.4,
          "he10": 0,
          "as10": 1.3004444444444445,
          "wa": 41.8,
          "ca": 17.77777777777778
        }
      },
      "bastion": {
        "finalScore": 61.77,
        "battleScore": 40.22,
        "coeff": 1.33,
        "matchCoef": 0.99,
        "gamesPlayed": 22,
        "rankIndex": 3,
        "det": {
          "g": 22,
          "time": 11564,
          "wr": 48.68181818181818,
          "el10": 19.764545454545456,
          "de10": 7.596363636363637,
          "dm10": 11191.863636363636,
          "he10": 94.27181818181818,
          "as10": 1.7777272727272726,
          "wa": 25.727272727272727,
          "ca": 2.9545454545454546
        }
      },
      "cassidy": {
        "finalScore": 56.45,
        "battleScore": 40.21,
        "coeff": 1.33,
        "matchCoef": 1.05,
        "gamesPlayed": 47,
        "rankIndex": 3,
        "det": {
          "g": 47,
          "time": 23875,
          "wr": 42.51063829787234,
          "el10": 17.39,
          "de10": 8.50063829787234,
          "dm10": 9516.808510638299,
          "he10": 35.742978723404256,
          "as10": 2.0563829787234043,
          "wa": 43.61702127659574,
          "ca": 14.617021276595745
        }
      },
      "reaper": {
        "finalScore": 57.14,
        "battleScore": 33.78,
        "coeff": 1.33,
        "matchCoef": 0.97,
        "gamesPlayed": 13,
        "rankIndex": 3,
        "det": {
          "g": 13,
          "time": 5609,
          "wr": 24.923076923076923,
          "el10": 16.29615384615385,
          "de10": 9.192307692307692,
          "dm10": 6774.153846153846,
          "he10": 1311.3846153846155,
          "as10": 0,
          "wa": 26.53846153846154,
          "ca": 9.76923076923077
        }
      },
      "sierra": {
        "finalScore": 57.62,
        "battleScore": 44.56,
        "coeff": 1.33,
        "matchCoef": 0.97,
        "gamesPlayed": 18,
        "rankIndex": 3,
        "det": {
          "g": 18,
          "time": 8594,
          "wr": 56.55555555555556,
          "el10": 18.637777777777778,
          "de10": 8.528888888888888,
          "dm10": 9056.666666666666,
          "he10": 123.55555555555556,
          "as10": 1.3966666666666667,
          "wa": 28.666666666666668,
          "ca": 10.333333333333334
        },
        "rankDelta": -1
      },
      "soldier-76": {
        "finalScore": 67,
        "battleScore": 45.73,
        "coeff": 1.33,
        "matchCoef": 1.1,
        "gamesPlayed": 80,
        "rankIndex": 3,
        "det": {
          "g": 80,
          "time": 41539,
          "wr": 55.8,
          "el10": 21.479000000000003,
          "de10": 8.369000000000002,
          "dm10": 10169.45,
          "he10": 1313.7,
          "as10": 1.3805,
          "wa": 35.95,
          "ca": 12.85
        }
      },
      "ana": {
        "finalScore": 35.33,
        "battleScore": 35.09,
        "coeff": 1,
        "matchCoef": 1.01,
        "gamesPlayed": 27,
        "rankIndex": 0,
        "det": {
          "g": 27,
          "time": 13851,
          "wr": 40,
          "el10": 10.61,
          "de10": 7.45,
          "dm10": 3959,
          "he10": 5682,
          "as10": 12,
          "wa": 36,
          "ca": 0
        }
      },
      "anran": {
        "finalScore": 58.7,
        "battleScore": 39.66,
        "coeff": 1.33,
        "matchCoef": 0.96,
        "gamesPlayed": 11,
        "rankIndex": 3,
        "det": {
          "g": 11,
          "time": 5921,
          "wr": 52,
          "el10": 18.24,
          "de10": 9.83,
          "dm10": 7375,
          "he10": 674,
          "as10": 0.81,
          "wa": 24,
          "ca": 9
        }
      },
      "baptiste": {
        "finalScore": 41.49,
        "battleScore": 41.49,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 25,
        "rankIndex": 0,
        "det": {
          "g": 25,
          "time": 12347,
          "wr": 63,
          "el10": 10.64,
          "de10": 6.9,
          "dm10": 4135,
          "he10": 7769,
          "as10": 11.86,
          "wa": 27,
          "ca": 12
        }
      },
      "brigitte": {
        "finalScore": 38.63,
        "battleScore": 39.39,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 0,
        "det": {
          "g": 20,
          "time": 9288,
          "wr": 53,
          "el10": 11.69,
          "de10": 9.63,
          "dm10": 3756,
          "he10": 7220,
          "as10": 16.41,
          "wa": 0,
          "ca": 0
        }
      },
      "dmon": {
        "finalScore": 33.2,
        "battleScore": 39.06,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 0,
        "det": {
          "g": 4,
          "time": 2275,
          "wr": 76,
          "el10": 12.4,
          "de10": 6.59,
          "dm10": 7218,
          "he10": 0.95,
          "as10": 2.64,
          "wa": 30,
          "ca": 0
        }
      },
      "doctrine": {
        "finalScore": 27.92,
        "battleScore": 32.85,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 1062,
          "wr": 0,
          "el10": 9.04,
          "de10": 8.47,
          "dm10": 4313,
          "he10": 7480,
          "as10": 14.12,
          "wa": 51,
          "ca": 0
        }
      },
      "domina": {
        "finalScore": 50.21,
        "battleScore": 56.43,
        "coeff": 1,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 0,
        "det": {
          "g": 7,
          "time": 3402,
          "wr": 100,
          "el10": 25.75,
          "de10": 4.06,
          "dm10": 11217,
          "he10": 2325,
          "as10": 2.82,
          "wa": 45,
          "ca": 8
        }
      },
      "doomfist": {
        "finalScore": 34.89,
        "battleScore": 34.78,
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
        }
      },
      "dva": {
        "finalScore": 44.97,
        "battleScore": 44.14,
        "coeff": 1,
        "matchCoef": 1.02,
        "gamesPlayed": 31,
        "rankIndex": 0,
        "det": {
          "g": 31,
          "time": 16394,
          "wr": 53,
          "el10": 21.37,
          "de10": 5.38,
          "dm10": 9286,
          "he10": 356,
          "as10": 6.44,
          "wa": 29,
          "ca": 10
        }
      },
      "echo": {
        "finalScore": 58.02,
        "battleScore": 44.65,
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
        "rankDelta": 1
      },
      "emre": {
        "finalScore": 53.29,
        "battleScore": 39.9,
        "coeff": 1.33,
        "matchCoef": 1,
        "gamesPlayed": 26,
        "rankIndex": 3,
        "det": {
          "g": 26,
          "time": 11497,
          "wr": 47,
          "el10": 18.37,
          "de10": 8.25,
          "dm10": 10098,
          "he10": 793,
          "as10": 0,
          "wa": 32,
          "ca": 17
        }
      },
      "freja": {
        "finalScore": 43.83,
        "battleScore": 34.91,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 3,
        "det": {
          "g": 13,
          "time": 5826,
          "wr": 39,
          "el10": 12.05,
          "de10": 9.27,
          "dm10": 7918,
          "he10": 39.89,
          "as10": 0.41,
          "wa": 25,
          "ca": 14
        }
      },
      "genji": {
        "finalScore": 45.91,
        "battleScore": 34.61,
        "coeff": 1.33,
        "matchCoef": 1,
        "gamesPlayed": 24,
        "rankIndex": 3,
        "det": {
          "g": 24,
          "time": 13391,
          "wr": 48,
          "el10": 12.28,
          "de10": 9.14,
          "dm10": 5797,
          "he10": 183,
          "as10": 0,
          "wa": 22,
          "ca": 11
        }
      },
      "hazard": {
        "finalScore": 31.62,
        "battleScore": 35.08,
        "coeff": 1,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 0,
        "det": {
          "g": 8,
          "time": 3393,
          "wr": 29,
          "el10": 16.62,
          "de10": 8.31,
          "dm10": 8573,
          "he10": 1174,
          "as10": 4.6,
          "wa": 27,
          "ca": 7
        }
      },
      "hanzo": {
        "finalScore": 50.63,
        "battleScore": 41.73,
        "coeff": 1.33,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 3,
        "det": {
          "g": 9,
          "time": 3975,
          "wr": 53,
          "el10": 13.89,
          "de10": 8.91,
          "dm10": 7640,
          "he10": 20.43,
          "as10": 4.53,
          "wa": 25,
          "ca": 13
        }
      },
      "illari": {
        "finalScore": 38.1,
        "battleScore": 39.42,
        "coeff": 1,
        "matchCoef": 0.97,
        "gamesPlayed": 17,
        "rankIndex": 0,
        "det": {
          "g": 17,
          "time": 9067,
          "wr": 48,
          "el10": 12.44,
          "de10": 5.76,
          "dm10": 4966,
          "he10": 7411,
          "as10": 7.35,
          "wa": 42,
          "ca": 15
        }
      },
      "junker-queen": {
        "finalScore": 44.4,
        "battleScore": 42.33,
        "coeff": 1,
        "matchCoef": 1.05,
        "gamesPlayed": 44,
        "rankIndex": 0,
        "det": {
          "g": 44,
          "time": 23763,
          "wr": 50,
          "el10": 18.73,
          "de10": 6.59,
          "dm10": 10709,
          "he10": 2591,
          "as10": 6.46,
          "wa": 34,
          "ca": 11
        }
      },
      "junkrat": {
        "finalScore": 51.69,
        "battleScore": 43.09,
        "coeff": 1.33,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 3,
        "det": {
          "g": 8,
          "time": 4265,
          "wr": 52,
          "el10": 16.04,
          "de10": 7.6,
          "dm10": 9187,
          "he10": 0,
          "as10": 3.66,
          "wa": 27,
          "ca": 0
        }
      },
      "juno": {
        "finalScore": 39.9,
        "battleScore": 39.77,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 26,
        "rankIndex": 0,
        "det": {
          "g": 26,
          "time": 14442,
          "wr": 50,
          "el10": 13,
          "de10": 6.65,
          "dm10": 4158,
          "he10": 7107,
          "as10": 12.34,
          "wa": 34,
          "ca": 8
        }
      },
      "kiriko": {
        "finalScore": 37.05,
        "battleScore": 35.38,
        "coeff": 1,
        "matchCoef": 1.05,
        "gamesPlayed": 43,
        "rankIndex": 0,
        "det": {
          "g": 43,
          "time": 23579,
          "wr": 49,
          "el10": 10.31,
          "de10": 7.05,
          "dm10": 3716,
          "he10": 6967,
          "as10": 13.51,
          "wa": 26,
          "ca": 13
        }
      },
      "lifeweaver": {
        "finalScore": 35.7,
        "battleScore": 36.24,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 21,
        "rankIndex": 0,
        "det": {
          "g": 21,
          "time": 12146,
          "wr": 37,
          "el10": 9.93,
          "de10": 6.42,
          "dm10": 3385,
          "he10": 7982,
          "as10": 10.03,
          "wa": 27,
          "ca": 12
        }
      },
      "lucio": {
        "finalScore": 41.21,
        "battleScore": 39.95,
        "coeff": 1,
        "matchCoef": 1.03,
        "gamesPlayed": 36,
        "rankIndex": 0,
        "det": {
          "g": 36,
          "time": 20124,
          "wr": 52,
          "el10": 11.72,
          "de10": 8.14,
          "dm10": 4317,
          "he10": 7366,
          "as10": 10.64,
          "wa": 24,
          "ca": 8
        }
      },
      "mauga": {
        "finalScore": 55.35,
        "battleScore": 43.42,
        "coeff": 1,
        "matchCoef": 1.01,
        "gamesPlayed": 32,
        "rankIndex": 0,
        "det": {
          "g": 32,
          "time": 15504,
          "wr": 46,
          "el10": 22.49,
          "de10": 8.17,
          "dm10": 11130,
          "he10": 1940,
          "as10": 8.98,
          "wa": 35,
          "ca": 13
        }
      },
      "mei": {
        "finalScore": 49.64,
        "battleScore": 41.91,
        "coeff": 1.33,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 3,
        "det": {
          "g": 7,
          "time": 3341,
          "wr": 58,
          "el10": 13.65,
          "de10": 6.29,
          "dm10": 6495,
          "he10": 1418,
          "as10": 5.75,
          "wa": 47,
          "ca": 0
        }
      },
      "mercy": {
        "finalScore": 30.89,
        "battleScore": 36.34,
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
        }
      },
      "mizuki": {
        "finalScore": 35.53,
        "battleScore": 39.41,
        "coeff": 1,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 0,
        "det": {
          "g": 8,
          "time": 4074,
          "wr": 50,
          "el10": 12.37,
          "de10": 7.51,
          "dm10": 4365,
          "he10": 9511,
          "as10": 12.96,
          "wa": 24,
          "ca": 10
        }
      },
      "moira": {
        "finalScore": 59.75,
        "battleScore": 38.44,
        "coeff": 1,
        "matchCoef": 0.99,
        "gamesPlayed": 21,
        "rankIndex": 0,
        "det": {
          "g": 21,
          "time": 11113,
          "wr": 39,
          "el10": 18.14,
          "de10": 6.91,
          "dm10": 5747,
          "he10": 8015,
          "as10": 13.71,
          "wa": 0,
          "ca": 0
        }
      },
      "orisa": {
        "finalScore": 40.62,
        "battleScore": 41.61,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 19,
        "rankIndex": 0,
        "det": {
          "g": 19,
          "time": 9375,
          "wr": 52,
          "el10": 17.98,
          "de10": 6.66,
          "dm10": 10374,
          "he10": 28.39,
          "as10": 3.26,
          "wa": 34,
          "ca": 9
        }
      },
      "pharah": {
        "finalScore": 56.41,
        "battleScore": 40.41,
        "coeff": 1.33,
        "matchCoef": 1.05,
        "gamesPlayed": 44,
        "rankIndex": 3,
        "det": {
          "g": 44,
          "time": 22857,
          "wr": 50,
          "el10": 19.19,
          "de10": 8.79,
          "dm10": 10407,
          "he10": 0,
          "as10": 3.91,
          "wa": 43,
          "ca": 0
        }
      },
      "ramattra": {
        "finalScore": 51.61,
        "battleScore": 42.32,
        "coeff": 1,
        "matchCoef": 1.01,
        "gamesPlayed": 31,
        "rankIndex": 0,
        "det": {
          "g": 31,
          "time": 15186,
          "wr": 41,
          "el10": 20.31,
          "de10": 6.6,
          "dm10": 11229,
          "he10": 418,
          "as10": 2.69,
          "wa": 28,
          "ca": 12
        }
      },
      "reinhardt": {
        "finalScore": 33.25,
        "battleScore": 36.47,
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
        "finalScore": 36.37,
        "battleScore": 39.16,
        "coeff": 1,
        "matchCoef": 0.93,
        "gamesPlayed": 11,
        "rankIndex": 0,
        "det": {
          "g": 11,
          "time": 5371,
          "wr": 49,
          "el10": 16.2,
          "de10": 6.48,
          "dm10": 8805,
          "he10": 5507,
          "as10": 2.9,
          "wa": 21,
          "ca": 11
        }
      },
      "shion": {
        "finalScore": 60.21,
        "battleScore": 45.57,
        "coeff": 1.33,
        "matchCoef": 0.99,
        "gamesPlayed": 23,
        "rankIndex": 3,
        "det": {
          "g": 23,
          "time": 10589,
          "wr": 72,
          "el10": 19.32,
          "de10": 7.99,
          "dm10": 8666,
          "he10": 49.9,
          "as10": 1.76,
          "wa": 34,
          "ca": 17
        }
      },
      "sigma": {
        "finalScore": 57.5,
        "battleScore": 46.2,
        "coeff": 1,
        "matchCoef": 1.03,
        "gamesPlayed": 46,
        "rankIndex": 0,
        "det": {
          "g": 46,
          "time": 22668,
          "wr": 59,
          "el10": 18.69,
          "de10": 4.92,
          "dm10": 11600,
          "he10": 0,
          "as10": 2.67,
          "wa": 46,
          "ca": 0
        }
      },
      "sojourn": {
        "finalScore": 60.57,
        "battleScore": 43,
        "coeff": 1.33,
        "matchCoef": 1.06,
        "gamesPlayed": 49,
        "rankIndex": 3,
        "det": {
          "g": 49,
          "time": 24894,
          "wr": 50,
          "el10": 19.28,
          "de10": 8.29,
          "dm10": 9897,
          "he10": 0,
          "as10": 1.3,
          "wa": 31,
          "ca": 11
        }
      },
      "sombra": {
        "finalScore": 36.46,
        "battleScore": 38.93,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 0,
        "det": {
          "g": 12,
          "time": 6383,
          "wr": 57,
          "el10": 16.17,
          "de10": 8.65,
          "dm10": 5490,
          "he10": 550,
          "as10": 7.52,
          "wa": 35,
          "ca": 10
        }
      },
      "symmetra": {
        "finalScore": 52.13,
        "battleScore": 40.12,
        "coeff": 1.33,
        "matchCoef": 0.98,
        "gamesPlayed": 19,
        "rankIndex": 3,
        "det": {
          "g": 19,
          "time": 10193,
          "wr": 49,
          "el10": 17.36,
          "de10": 8.01,
          "dm10": 8333,
          "he10": 134,
          "as10": 4.83,
          "wa": 37,
          "ca": 0
        }
      },
      "torbjorn": {
        "finalScore": 39.4,
        "battleScore": 32.47,
        "coeff": 1.33,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 3,
        "det": {
          "g": 9,
          "time": 3733,
          "wr": 25,
          "el10": 11.25,
          "de10": 6.75,
          "dm10": 8323,
          "he10": 0,
          "as10": 0,
          "wa": 21,
          "ca": 10
        }
      },
      "tracer": {
        "finalScore": 59.77,
        "battleScore": 42.29,
        "coeff": 1.33,
        "matchCoef": 1.06,
        "gamesPlayed": 51,
        "rankIndex": 3,
        "det": {
          "g": 51,
          "time": 26265,
          "wr": 55,
          "el10": 17.93,
          "de10": 9,
          "dm10": 7018,
          "he10": 5.12,
          "as10": 0.11,
          "wa": 32,
          "ca": 11
        }
      },
      "vendetta": {
        "finalScore": 39.05,
        "battleScore": 34.52,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 1543,
          "wr": 3,
          "el10": 11.66,
          "de10": 13.22,
          "dm10": 4393,
          "he10": 69.88,
          "as10": 2.72,
          "wa": 0,
          "ca": 0
        }
      },
      "venture": {
        "finalScore": 43.67,
        "battleScore": 38.6,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 3,
        "det": {
          "g": 3,
          "time": 1322,
          "wr": 76,
          "el10": 15.43,
          "de10": 9.53,
          "dm10": 8133,
          "he10": 0,
          "as10": 0.45,
          "wa": 47,
          "ca": 0
        }
      },
      "widowmaker": {
        "finalScore": 48.75,
        "battleScore": 36.27,
        "coeff": 1.33,
        "matchCoef": 1.01,
        "gamesPlayed": 28,
        "rankIndex": 3,
        "det": {
          "g": 28,
          "time": 13520,
          "wr": 39,
          "el10": 14.69,
          "de10": 7.46,
          "dm10": 6278,
          "he10": 0,
          "as10": 2.57,
          "wa": 35,
          "ca": 12
        }
      },
      "winston": {
        "finalScore": 36.49,
        "battleScore": 36.75,
        "coeff": 1,
        "matchCoef": 0.99,
        "gamesPlayed": 23,
        "rankIndex": 0,
        "det": {
          "g": 23,
          "time": 11240,
          "wr": 49,
          "el10": 16.23,
          "de10": 7.37,
          "dm10": 8157,
          "he10": 505,
          "as10": 2.99,
          "wa": 49,
          "ca": 0
        }
      },
      "wrecking-ball": {
        "finalScore": 39.86,
        "battleScore": 40.65,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 0,
        "det": {
          "g": 20,
          "time": 9494,
          "wr": 53,
          "el10": 15.61,
          "de10": 7.71,
          "dm10": 8254,
          "he10": 0,
          "as10": 2.65,
          "wa": 36,
          "ca": 11
        }
      },
      "zarya": {
        "finalScore": 49.11,
        "battleScore": 40.09,
        "coeff": 1,
        "matchCoef": 1.01,
        "gamesPlayed": 29,
        "rankIndex": 0,
        "det": {
          "g": 29,
          "time": 14258,
          "wr": 42,
          "el10": 16.96,
          "de10": 7.41,
          "dm10": 9608,
          "he10": 0,
          "as10": 3.96,
          "wa": 48,
          "ca": 0
        }
      },
      "zenyatta": {
        "finalScore": 39.12,
        "battleScore": 37.92,
        "coeff": 1,
        "matchCoef": 1.03,
        "gamesPlayed": 36,
        "rankIndex": 0,
        "det": {
          "g": 36,
          "time": 17199,
          "wr": 53,
          "el10": 12.94,
          "de10": 7.78,
          "dm10": 6223,
          "he10": 5915,
          "as10": 13.74,
          "wa": 24,
          "ca": 13
        }
      }
    },
    "bscoreAll": {
      "ashe": {
        "finalScore": 55.97,
        "battleScore": 40.02,
        "coeff": 1.33,
        "matchCoef": 1.05,
        "gamesPlayed": 45,
        "rankIndex": 3,
        "det": {
          "g": 45,
          "time": 21709,
          "wr": 42.044444444444444,
          "el10": 17.76311111111111,
          "de10": 7.025333333333333,
          "dm10": 9433.4,
          "he10": 0,
          "as10": 1.3004444444444445,
          "wa": 41.8,
          "ca": 17.77777777777778
        }
      },
      "bastion": {
        "finalScore": 61.77,
        "battleScore": 40.22,
        "coeff": 1.33,
        "matchCoef": 0.99,
        "gamesPlayed": 22,
        "rankIndex": 3,
        "det": {
          "g": 22,
          "time": 11564,
          "wr": 48.68181818181818,
          "el10": 19.764545454545456,
          "de10": 7.596363636363637,
          "dm10": 11191.863636363636,
          "he10": 94.27181818181818,
          "as10": 1.7777272727272726,
          "wa": 25.727272727272727,
          "ca": 2.9545454545454546
        }
      },
      "cassidy": {
        "finalScore": 56.45,
        "battleScore": 40.21,
        "coeff": 1.33,
        "matchCoef": 1.05,
        "gamesPlayed": 47,
        "rankIndex": 3,
        "det": {
          "g": 47,
          "time": 23875,
          "wr": 42.51063829787234,
          "el10": 17.39,
          "de10": 8.50063829787234,
          "dm10": 9516.808510638299,
          "he10": 35.742978723404256,
          "as10": 2.0563829787234043,
          "wa": 43.61702127659574,
          "ca": 14.617021276595745
        }
      },
      "reaper": {
        "finalScore": 57.14,
        "battleScore": 33.78,
        "coeff": 1.33,
        "matchCoef": 0.97,
        "gamesPlayed": 13,
        "rankIndex": 3,
        "det": {
          "g": 13,
          "time": 5609,
          "wr": 24.923076923076923,
          "el10": 16.29615384615385,
          "de10": 9.192307692307692,
          "dm10": 6774.153846153846,
          "he10": 1311.3846153846155,
          "as10": 0,
          "wa": 26.53846153846154,
          "ca": 9.76923076923077
        }
      },
      "sierra": {
        "finalScore": 57.62,
        "battleScore": 44.56,
        "coeff": 1.33,
        "matchCoef": 0.97,
        "gamesPlayed": 18,
        "rankIndex": 3,
        "det": {
          "g": 18,
          "time": 8594,
          "wr": 56.55555555555556,
          "el10": 18.637777777777778,
          "de10": 8.528888888888888,
          "dm10": 9056.666666666666,
          "he10": 123.55555555555556,
          "as10": 1.3966666666666667,
          "wa": 28.666666666666668,
          "ca": 10.333333333333334
        },
        "rankDelta": -1
      },
      "soldier-76": {
        "finalScore": 67,
        "battleScore": 45.73,
        "coeff": 1.33,
        "matchCoef": 1.1,
        "gamesPlayed": 80,
        "rankIndex": 3,
        "det": {
          "g": 80,
          "time": 41539,
          "wr": 55.8,
          "el10": 21.479000000000003,
          "de10": 8.369000000000002,
          "dm10": 10169.45,
          "he10": 1313.7,
          "as10": 1.3805,
          "wa": 35.95,
          "ca": 12.85
        }
      },
      "ana": {
        "finalScore": 35.33,
        "battleScore": 35.09,
        "coeff": 1,
        "matchCoef": 1.01,
        "gamesPlayed": 27,
        "rankIndex": 0,
        "det": {
          "g": 27,
          "time": 13851,
          "wr": 40,
          "el10": 10.61,
          "de10": 7.45,
          "dm10": 3959,
          "he10": 5682,
          "as10": 12,
          "wa": 36,
          "ca": 0
        }
      },
      "anran": {
        "finalScore": 58.7,
        "battleScore": 39.66,
        "coeff": 1.33,
        "matchCoef": 0.96,
        "gamesPlayed": 11,
        "rankIndex": 3,
        "det": {
          "g": 11,
          "time": 5921,
          "wr": 52,
          "el10": 18.24,
          "de10": 9.83,
          "dm10": 7375,
          "he10": 674,
          "as10": 0.81,
          "wa": 24,
          "ca": 9
        }
      },
      "baptiste": {
        "finalScore": 41.49,
        "battleScore": 41.49,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 25,
        "rankIndex": 0,
        "det": {
          "g": 25,
          "time": 12347,
          "wr": 63,
          "el10": 10.64,
          "de10": 6.9,
          "dm10": 4135,
          "he10": 7769,
          "as10": 11.86,
          "wa": 27,
          "ca": 12
        }
      },
      "brigitte": {
        "finalScore": 38.63,
        "battleScore": 39.39,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 0,
        "det": {
          "g": 20,
          "time": 9288,
          "wr": 53,
          "el10": 11.69,
          "de10": 9.63,
          "dm10": 3756,
          "he10": 7220,
          "as10": 16.41,
          "wa": 0,
          "ca": 0
        }
      },
      "dmon": {
        "finalScore": 33.2,
        "battleScore": 39.06,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 0,
        "det": {
          "g": 4,
          "time": 2275,
          "wr": 76,
          "el10": 12.4,
          "de10": 6.59,
          "dm10": 7218,
          "he10": 0.95,
          "as10": 2.64,
          "wa": 30,
          "ca": 0
        }
      },
      "doctrine": {
        "finalScore": 27.92,
        "battleScore": 32.85,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 1062,
          "wr": 0,
          "el10": 9.04,
          "de10": 8.47,
          "dm10": 4313,
          "he10": 7480,
          "as10": 14.12,
          "wa": 51,
          "ca": 0
        }
      },
      "domina": {
        "finalScore": 50.21,
        "battleScore": 56.43,
        "coeff": 1,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 0,
        "det": {
          "g": 7,
          "time": 3402,
          "wr": 100,
          "el10": 25.75,
          "de10": 4.06,
          "dm10": 11217,
          "he10": 2325,
          "as10": 2.82,
          "wa": 45,
          "ca": 8
        }
      },
      "doomfist": {
        "finalScore": 34.89,
        "battleScore": 34.78,
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
        }
      },
      "dva": {
        "finalScore": 44.97,
        "battleScore": 44.14,
        "coeff": 1,
        "matchCoef": 1.02,
        "gamesPlayed": 31,
        "rankIndex": 0,
        "det": {
          "g": 31,
          "time": 16394,
          "wr": 53,
          "el10": 21.37,
          "de10": 5.38,
          "dm10": 9286,
          "he10": 356,
          "as10": 6.44,
          "wa": 29,
          "ca": 10
        }
      },
      "echo": {
        "finalScore": 58.02,
        "battleScore": 44.65,
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
        "rankDelta": 1
      },
      "emre": {
        "finalScore": 53.29,
        "battleScore": 39.9,
        "coeff": 1.33,
        "matchCoef": 1,
        "gamesPlayed": 26,
        "rankIndex": 3,
        "det": {
          "g": 26,
          "time": 11497,
          "wr": 47,
          "el10": 18.37,
          "de10": 8.25,
          "dm10": 10098,
          "he10": 793,
          "as10": 0,
          "wa": 32,
          "ca": 17
        }
      },
      "freja": {
        "finalScore": 43.83,
        "battleScore": 34.91,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 3,
        "det": {
          "g": 13,
          "time": 5826,
          "wr": 39,
          "el10": 12.05,
          "de10": 9.27,
          "dm10": 7918,
          "he10": 39.89,
          "as10": 0.41,
          "wa": 25,
          "ca": 14
        }
      },
      "genji": {
        "finalScore": 45.91,
        "battleScore": 34.61,
        "coeff": 1.33,
        "matchCoef": 1,
        "gamesPlayed": 24,
        "rankIndex": 3,
        "det": {
          "g": 24,
          "time": 13391,
          "wr": 48,
          "el10": 12.28,
          "de10": 9.14,
          "dm10": 5797,
          "he10": 183,
          "as10": 0,
          "wa": 22,
          "ca": 11
        }
      },
      "hazard": {
        "finalScore": 31.62,
        "battleScore": 35.08,
        "coeff": 1,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 0,
        "det": {
          "g": 8,
          "time": 3393,
          "wr": 29,
          "el10": 16.62,
          "de10": 8.31,
          "dm10": 8573,
          "he10": 1174,
          "as10": 4.6,
          "wa": 27,
          "ca": 7
        }
      },
      "hanzo": {
        "finalScore": 50.63,
        "battleScore": 41.73,
        "coeff": 1.33,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 3,
        "det": {
          "g": 9,
          "time": 3975,
          "wr": 53,
          "el10": 13.89,
          "de10": 8.91,
          "dm10": 7640,
          "he10": 20.43,
          "as10": 4.53,
          "wa": 25,
          "ca": 13
        }
      },
      "illari": {
        "finalScore": 38.1,
        "battleScore": 39.42,
        "coeff": 1,
        "matchCoef": 0.97,
        "gamesPlayed": 17,
        "rankIndex": 0,
        "det": {
          "g": 17,
          "time": 9067,
          "wr": 48,
          "el10": 12.44,
          "de10": 5.76,
          "dm10": 4966,
          "he10": 7411,
          "as10": 7.35,
          "wa": 42,
          "ca": 15
        }
      },
      "junker-queen": {
        "finalScore": 44.4,
        "battleScore": 42.33,
        "coeff": 1,
        "matchCoef": 1.05,
        "gamesPlayed": 44,
        "rankIndex": 0,
        "det": {
          "g": 44,
          "time": 23763,
          "wr": 50,
          "el10": 18.73,
          "de10": 6.59,
          "dm10": 10709,
          "he10": 2591,
          "as10": 6.46,
          "wa": 34,
          "ca": 11
        }
      },
      "junkrat": {
        "finalScore": 51.69,
        "battleScore": 43.09,
        "coeff": 1.33,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 3,
        "det": {
          "g": 8,
          "time": 4265,
          "wr": 52,
          "el10": 16.04,
          "de10": 7.6,
          "dm10": 9187,
          "he10": 0,
          "as10": 3.66,
          "wa": 27,
          "ca": 0
        }
      },
      "juno": {
        "finalScore": 39.9,
        "battleScore": 39.77,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 26,
        "rankIndex": 0,
        "det": {
          "g": 26,
          "time": 14442,
          "wr": 50,
          "el10": 13,
          "de10": 6.65,
          "dm10": 4158,
          "he10": 7107,
          "as10": 12.34,
          "wa": 34,
          "ca": 8
        }
      },
      "kiriko": {
        "finalScore": 37.05,
        "battleScore": 35.38,
        "coeff": 1,
        "matchCoef": 1.05,
        "gamesPlayed": 43,
        "rankIndex": 0,
        "det": {
          "g": 43,
          "time": 23579,
          "wr": 49,
          "el10": 10.31,
          "de10": 7.05,
          "dm10": 3716,
          "he10": 6967,
          "as10": 13.51,
          "wa": 26,
          "ca": 13
        }
      },
      "lifeweaver": {
        "finalScore": 35.7,
        "battleScore": 36.24,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 21,
        "rankIndex": 0,
        "det": {
          "g": 21,
          "time": 12146,
          "wr": 37,
          "el10": 9.93,
          "de10": 6.42,
          "dm10": 3385,
          "he10": 7982,
          "as10": 10.03,
          "wa": 27,
          "ca": 12
        }
      },
      "lucio": {
        "finalScore": 41.21,
        "battleScore": 39.95,
        "coeff": 1,
        "matchCoef": 1.03,
        "gamesPlayed": 36,
        "rankIndex": 0,
        "det": {
          "g": 36,
          "time": 20124,
          "wr": 52,
          "el10": 11.72,
          "de10": 8.14,
          "dm10": 4317,
          "he10": 7366,
          "as10": 10.64,
          "wa": 24,
          "ca": 8
        }
      },
      "mauga": {
        "finalScore": 55.35,
        "battleScore": 43.42,
        "coeff": 1,
        "matchCoef": 1.01,
        "gamesPlayed": 32,
        "rankIndex": 0,
        "det": {
          "g": 32,
          "time": 15504,
          "wr": 46,
          "el10": 22.49,
          "de10": 8.17,
          "dm10": 11130,
          "he10": 1940,
          "as10": 8.98,
          "wa": 35,
          "ca": 13
        }
      },
      "mei": {
        "finalScore": 49.64,
        "battleScore": 41.91,
        "coeff": 1.33,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 3,
        "det": {
          "g": 7,
          "time": 3341,
          "wr": 58,
          "el10": 13.65,
          "de10": 6.29,
          "dm10": 6495,
          "he10": 1418,
          "as10": 5.75,
          "wa": 47,
          "ca": 0
        }
      },
      "mercy": {
        "finalScore": 30.89,
        "battleScore": 36.34,
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
        }
      },
      "mizuki": {
        "finalScore": 35.53,
        "battleScore": 39.41,
        "coeff": 1,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 0,
        "det": {
          "g": 8,
          "time": 4074,
          "wr": 50,
          "el10": 12.37,
          "de10": 7.51,
          "dm10": 4365,
          "he10": 9511,
          "as10": 12.96,
          "wa": 24,
          "ca": 10
        }
      },
      "moira": {
        "finalScore": 59.75,
        "battleScore": 38.44,
        "coeff": 1,
        "matchCoef": 0.99,
        "gamesPlayed": 21,
        "rankIndex": 0,
        "det": {
          "g": 21,
          "time": 11113,
          "wr": 39,
          "el10": 18.14,
          "de10": 6.91,
          "dm10": 5747,
          "he10": 8015,
          "as10": 13.71,
          "wa": 0,
          "ca": 0
        }
      },
      "orisa": {
        "finalScore": 40.62,
        "battleScore": 41.61,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 19,
        "rankIndex": 0,
        "det": {
          "g": 19,
          "time": 9375,
          "wr": 52,
          "el10": 17.98,
          "de10": 6.66,
          "dm10": 10374,
          "he10": 28.39,
          "as10": 3.26,
          "wa": 34,
          "ca": 9
        }
      },
      "pharah": {
        "finalScore": 56.41,
        "battleScore": 40.41,
        "coeff": 1.33,
        "matchCoef": 1.05,
        "gamesPlayed": 44,
        "rankIndex": 3,
        "det": {
          "g": 44,
          "time": 22857,
          "wr": 50,
          "el10": 19.19,
          "de10": 8.79,
          "dm10": 10407,
          "he10": 0,
          "as10": 3.91,
          "wa": 43,
          "ca": 0
        }
      },
      "ramattra": {
        "finalScore": 51.61,
        "battleScore": 42.32,
        "coeff": 1,
        "matchCoef": 1.01,
        "gamesPlayed": 31,
        "rankIndex": 0,
        "det": {
          "g": 31,
          "time": 15186,
          "wr": 41,
          "el10": 20.31,
          "de10": 6.6,
          "dm10": 11229,
          "he10": 418,
          "as10": 2.69,
          "wa": 28,
          "ca": 12
        }
      },
      "reinhardt": {
        "finalScore": 33.25,
        "battleScore": 36.47,
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
        "finalScore": 36.37,
        "battleScore": 39.16,
        "coeff": 1,
        "matchCoef": 0.93,
        "gamesPlayed": 11,
        "rankIndex": 0,
        "det": {
          "g": 11,
          "time": 5371,
          "wr": 49,
          "el10": 16.2,
          "de10": 6.48,
          "dm10": 8805,
          "he10": 5507,
          "as10": 2.9,
          "wa": 21,
          "ca": 11
        }
      },
      "shion": {
        "finalScore": 60.21,
        "battleScore": 45.57,
        "coeff": 1.33,
        "matchCoef": 0.99,
        "gamesPlayed": 23,
        "rankIndex": 3,
        "det": {
          "g": 23,
          "time": 10589,
          "wr": 72,
          "el10": 19.32,
          "de10": 7.99,
          "dm10": 8666,
          "he10": 49.9,
          "as10": 1.76,
          "wa": 34,
          "ca": 17
        }
      },
      "sigma": {
        "finalScore": 57.5,
        "battleScore": 46.2,
        "coeff": 1,
        "matchCoef": 1.03,
        "gamesPlayed": 46,
        "rankIndex": 0,
        "det": {
          "g": 46,
          "time": 22668,
          "wr": 59,
          "el10": 18.69,
          "de10": 4.92,
          "dm10": 11600,
          "he10": 0,
          "as10": 2.67,
          "wa": 46,
          "ca": 0
        }
      },
      "sojourn": {
        "finalScore": 60.57,
        "battleScore": 43,
        "coeff": 1.33,
        "matchCoef": 1.06,
        "gamesPlayed": 49,
        "rankIndex": 3,
        "det": {
          "g": 49,
          "time": 24894,
          "wr": 50,
          "el10": 19.28,
          "de10": 8.29,
          "dm10": 9897,
          "he10": 0,
          "as10": 1.3,
          "wa": 31,
          "ca": 11
        }
      },
      "sombra": {
        "finalScore": 36.46,
        "battleScore": 38.93,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 0,
        "det": {
          "g": 12,
          "time": 6383,
          "wr": 57,
          "el10": 16.17,
          "de10": 8.65,
          "dm10": 5490,
          "he10": 550,
          "as10": 7.52,
          "wa": 35,
          "ca": 10
        }
      },
      "symmetra": {
        "finalScore": 52.13,
        "battleScore": 40.12,
        "coeff": 1.33,
        "matchCoef": 0.98,
        "gamesPlayed": 19,
        "rankIndex": 3,
        "det": {
          "g": 19,
          "time": 10193,
          "wr": 49,
          "el10": 17.36,
          "de10": 8.01,
          "dm10": 8333,
          "he10": 134,
          "as10": 4.83,
          "wa": 37,
          "ca": 0
        }
      },
      "torbjorn": {
        "finalScore": 39.4,
        "battleScore": 32.47,
        "coeff": 1.33,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 3,
        "det": {
          "g": 9,
          "time": 3733,
          "wr": 25,
          "el10": 11.25,
          "de10": 6.75,
          "dm10": 8323,
          "he10": 0,
          "as10": 0,
          "wa": 21,
          "ca": 10
        }
      },
      "tracer": {
        "finalScore": 59.77,
        "battleScore": 42.29,
        "coeff": 1.33,
        "matchCoef": 1.06,
        "gamesPlayed": 51,
        "rankIndex": 3,
        "det": {
          "g": 51,
          "time": 26265,
          "wr": 55,
          "el10": 17.93,
          "de10": 9,
          "dm10": 7018,
          "he10": 5.12,
          "as10": 0.11,
          "wa": 32,
          "ca": 11
        }
      },
      "vendetta": {
        "finalScore": 39.05,
        "battleScore": 34.52,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 1543,
          "wr": 3,
          "el10": 11.66,
          "de10": 13.22,
          "dm10": 4393,
          "he10": 69.88,
          "as10": 2.72,
          "wa": 0,
          "ca": 0
        }
      },
      "venture": {
        "finalScore": 43.67,
        "battleScore": 38.6,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 3,
        "det": {
          "g": 3,
          "time": 1322,
          "wr": 76,
          "el10": 15.43,
          "de10": 9.53,
          "dm10": 8133,
          "he10": 0,
          "as10": 0.45,
          "wa": 47,
          "ca": 0
        }
      },
      "widowmaker": {
        "finalScore": 48.75,
        "battleScore": 36.27,
        "coeff": 1.33,
        "matchCoef": 1.01,
        "gamesPlayed": 28,
        "rankIndex": 3,
        "det": {
          "g": 28,
          "time": 13520,
          "wr": 39,
          "el10": 14.69,
          "de10": 7.46,
          "dm10": 6278,
          "he10": 0,
          "as10": 2.57,
          "wa": 35,
          "ca": 12
        }
      },
      "winston": {
        "finalScore": 36.49,
        "battleScore": 36.75,
        "coeff": 1,
        "matchCoef": 0.99,
        "gamesPlayed": 23,
        "rankIndex": 0,
        "det": {
          "g": 23,
          "time": 11240,
          "wr": 49,
          "el10": 16.23,
          "de10": 7.37,
          "dm10": 8157,
          "he10": 505,
          "as10": 2.99,
          "wa": 49,
          "ca": 0
        }
      },
      "wrecking-ball": {
        "finalScore": 39.86,
        "battleScore": 40.65,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 0,
        "det": {
          "g": 20,
          "time": 9494,
          "wr": 53,
          "el10": 15.61,
          "de10": 7.71,
          "dm10": 8254,
          "he10": 0,
          "as10": 2.65,
          "wa": 36,
          "ca": 11
        }
      },
      "zarya": {
        "finalScore": 49.11,
        "battleScore": 40.09,
        "coeff": 1,
        "matchCoef": 1.01,
        "gamesPlayed": 29,
        "rankIndex": 0,
        "det": {
          "g": 29,
          "time": 14258,
          "wr": 42,
          "el10": 16.96,
          "de10": 7.41,
          "dm10": 9608,
          "he10": 0,
          "as10": 3.96,
          "wa": 48,
          "ca": 0
        }
      },
      "zenyatta": {
        "finalScore": 39.12,
        "battleScore": 37.92,
        "coeff": 1,
        "matchCoef": 1.03,
        "gamesPlayed": 36,
        "rankIndex": 0,
        "det": {
          "g": 36,
          "time": 17199,
          "wr": 53,
          "el10": 12.94,
          "de10": 7.78,
          "dm10": 6223,
          "he10": 5915,
          "as10": 13.74,
          "wa": 24,
          "ca": 13
        }
      }
    },
    "recent": [
      {
        "d": "2026-09-17",
        "g": {},
        "m": 1091,
        "w": 538,
        "l": 553,
        "t": 558045,
        "k": 2.37,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-09-18",
        "g": {},
        "m": 1091,
        "w": 538,
        "l": 553,
        "t": 558045,
        "k": 2.37,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-09-19",
        "g": {},
        "m": 1106,
        "w": 548,
        "l": 558,
        "t": 565939,
        "k": 2.37,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-09-20",
        "g": {
          "ashe": 4,
          "bastion": 2,
          "cassidy": 1,
          "emre": 3,
          "shion": 4,
          "sojourn": 3,
          "soldier-76": 1,
          "tracer": 2,
          "baptiste": 1,
          "domina": 1,
          "dva": 1,
          "hanzo": 1,
          "illari": 1,
          "junker-queen": 5,
          "kiriko": 1,
          "lifeweaver": 1,
          "roadhog": 1,
          "sierra": 2,
          "symmetra": 2,
          "winston": 2,
          "zenyatta": 2
        },
        "m": 1120,
        "w": 560,
        "l": 560,
        "t": 572545,
        "k": 2.37,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-09-21",
        "g": {
          "soldier-76": 1,
          "baptiste": 1,
          "junker-queen": 1,
          "lifeweaver": 1,
          "mauga": 1,
          "mizuki": 1,
          "orisa": 1,
          "zenyatta": 2
        },
        "m": 1129,
        "w": 565,
        "l": 564,
        "t": 577005,
        "k": 2.36,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-09-22",
        "g": {},
        "m": 1129,
        "w": 565,
        "l": 564,
        "t": 577005,
        "k": 2.36,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-09-23",
        "g": {
          "ashe": 1,
          "cassidy": 1,
          "shion": 1,
          "sojourn": 2,
          "soldier-76": 1,
          "tracer": 1,
          "ana": 1,
          "kiriko": 1,
          "mizuki": 2,
          "sierra": 1,
          "venture": 1
        },
        "m": 1142,
        "w": 571,
        "l": 571,
        "t": 582807,
        "k": 2.36,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-09-24",
        "g": {
          "domina": 1,
          "kiriko": 1,
          "lifeweaver": 2,
          "mizuki": 1,
          "sombra": 1
        },
        "m": 1157,
        "w": 581,
        "l": 576,
        "t": 590704,
        "k": 2.36,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-09-25",
        "g": {
          "cassidy": 1,
          "orisa": 1,
          "ramattra": 1,
          "sigma": 1,
          "winston": 1,
          "zarya": 1
        },
        "m": 1163,
        "w": 582,
        "l": 581,
        "t": 593807,
        "k": 2.35,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-09-26",
        "g": {
          "ana": 2,
          "dmon": 1,
          "junker-queen": 1,
          "lifeweaver": 4,
          "moira": 1,
          "sigma": 1
        },
        "m": 1173,
        "w": 589,
        "l": 584,
        "t": 599906,
        "k": 2.36,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-09-27",
        "g": {
          "ashe": 1,
          "cassidy": 3,
          "juno": 1,
          "shion": 1,
          "sojourn": 1,
          "tracer": 1,
          "ana": 2,
          "kiriko": 1,
          "moira": 1,
          "sombra": 1,
          "zenyatta": 1
        },
        "m": 1187,
        "w": 593,
        "l": 594,
        "t": 607465,
        "k": 2.35,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-09-28",
        "g": {
          "ashe": 1,
          "cassidy": 2,
          "pharah": 1,
          "sojourn": 1,
          "anran": 1
        },
        "m": 1193,
        "w": 596,
        "l": 597,
        "t": 611078,
        "k": 2.35,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-09-29",
        "g": {},
        "m": 1197,
        "w": 598,
        "l": 599,
        "t": 613169,
        "k": 2.35,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-09-30",
        "g": {},
        "m": 1197,
        "w": 598,
        "l": 599,
        "t": 613169,
        "k": 2.35,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-10-01",
        "g": {},
        "m": 1197,
        "w": 598,
        "l": 599,
        "t": 613169,
        "k": 2.35,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-10-02",
        "g": {},
        "m": 1204,
        "w": 604,
        "l": 600,
        "t": 616821,
        "k": 2.35,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-10-03",
        "g": {},
        "m": 1204,
        "w": 604,
        "l": 600,
        "t": 616821,
        "k": 2.35,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-10-04",
        "g": {},
        "m": 1204,
        "w": 604,
        "l": 600,
        "t": 616821,
        "k": 2.35,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-10-05",
        "g": {},
        "m": 1211,
        "w": 608,
        "l": 603,
        "t": 621276,
        "k": 2.35,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-10-06",
        "g": {},
        "m": 1223,
        "w": 614,
        "l": 609,
        "t": 628982,
        "k": 2.34,
        "r": {
          "Tank": null,
          "Damage": "platinum-3",
          "Support": null
        }
      },
      {
        "d": "2026-10-07",
        "g": {},
        "m": 1246,
        "w": 621,
        "l": 625,
        "t": 640578,
        "k": 2.33,
        "r": {
          "Tank": null,
          "Damage": "platinum-4",
          "Support": null
        }
      },
      {
        "d": "2026-10-08",
        "g": {},
        "m": 1181,
        "w": 586,
        "l": 595,
        "t": 596505,
        "k": 2.35,
        "r": {
          "Tank": null,
          "Damage": "platinum-4",
          "Support": null
        }
      },
      {
        "d": "2026-10-09",
        "g": {},
        "m": 1195,
        "w": 589,
        "l": 606,
        "t": 603911,
        "k": 2.35,
        "r": {
          "Tank": null,
          "Damage": "platinum-5",
          "Support": null
        }
      },
      {
        "d": "2026-10-10",
        "g": {},
        "m": 1195,
        "w": 589,
        "l": 606,
        "t": 603911,
        "k": 2.35,
        "r": {
          "Tank": null,
          "Damage": "platinum-5",
          "Support": null
        }
      },
      {
        "d": "2026-10-11",
        "g": {},
        "m": 1195,
        "w": 589,
        "l": 606,
        "t": 603911,
        "k": 2.35,
        "r": {
          "Tank": null,
          "Damage": "platinum-5",
          "Support": null
        }
      },
      {
        "d": "2026-10-12",
        "g": {},
        "m": 1195,
        "w": 589,
        "l": 606,
        "t": 603911,
        "k": 2.35,
        "tot": {
          "e": 16684,
          "a": 1453,
          "dd": 7730,
          "dm": 9862323,
          "he": 2167683
        },
        "r": {
          "Tank": null,
          "Damage": "platinum-5",
          "Support": null
        }
      },
      {
        "d": "2026-10-13",
        "g": {},
        "m": 1195,
        "w": 589,
        "l": 606,
        "t": 603911,
        "k": 2.35,
        "tot": {
          "e": 16684,
          "a": 1453,
          "dd": 7730,
          "dm": 9862323,
          "he": 2167683
        },
        "r": {
          "Tank": null,
          "Damage": "platinum-5",
          "Support": null
        }
      },
      {
        "d": "2026-10-14",
        "g": {
          "baptiste": 1,
          "domina": 1,
          "dva": 1,
          "genji": 4,
          "moira": 1,
          "sombra": 1,
          "tracer": 2,
          "winston": 1,
          "zenyatta": 1
        },
        "m": 1208,
        "w": 598,
        "l": 610,
        "t": 611682,
        "k": 2.35,
        "tot": {
          "e": 16901,
          "a": 1464,
          "dd": 7819,
          "dm": 9968001,
          "he": 2202304
        },
        "r": {
          "Tank": null,
          "Damage": "platinum-5",
          "Support": null
        }
      },
      {
        "d": "2026-10-15",
        "g": {},
        "m": 1208,
        "w": 598,
        "l": 610,
        "t": 611682,
        "k": 2.35,
        "tot": {
          "e": 16901,
          "a": 1464,
          "dd": 7819,
          "dm": 9968001,
          "he": 2202304
        },
        "r": {
          "Tank": null,
          "Damage": "platinum-5",
          "Support": null
        }
      },
      {
        "d": "2026-10-16",
        "g": {},
        "m": 1208,
        "w": 598,
        "l": 610,
        "t": 611682,
        "k": 2.35,
        "tot": {
          "e": 16901,
          "a": 1464,
          "dd": 7819,
          "dm": 9968001,
          "he": 2202304
        },
        "r": {
          "Tank": null,
          "Damage": "platinum-5",
          "Support": null
        }
      }
    ]
  },
  {
    "id": "voidglove",
    "pid": "71bf70095295184c2073960007b31fdafdddb9a6a594a1|0a08671b7adbc97eb1182bc68bdf60f7",
    "name": "ぼいどぐらぶ",
    "tag": "",
    "endorse": 3,
    "title": "UwU",
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1fa2392c8d0c6047457f038a881d59d3cade9a1ef6cfa8bb8e396100a3b97a8b.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4f57d4bae6d479b52d262975c730e1f763123975a3dc08395709d963ea7dd6b9.png",
    "role": "Support",
    "ranks": {
      "Tank": {
        "division": "gold",
        "tier": 3,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_GoldTier.8d40eab551020b46a84002019dd98714149ed5e2.png"
      },
      "Damage": {
        "division": "platinum",
        "tier": 5,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_PlatinumTier.694340e3a5b2031d4fac9eb1d8f52c6855d4c072.png"
      },
      "Support": {
        "division": "platinum",
        "tier": 4,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_PlatinumTier.694340e3a5b2031d4fac9eb1d8f52c6855d4c072.png"
      }
    },
    "rankTier": "Platinum 4",
    "overall": {
      "matches": 1058,
      "wins": 561,
      "losses": 497,
      "wr": 53.02,
      "kda": 2.9,
      "elim": 16.14,
      "deaths": 6.11,
      "dmg": 8433.76,
      "heal": 2831.15,
      "time": 544348,
      "tot": {
        "e": 14639,
        "a": 1444,
        "dd": 5540,
        "dm": 7651501,
        "he": 2568555
      }
    },
    "roles": {
      "Tank": {
        "g": 156,
        "w": 81,
        "l": 75,
        "time": 84726,
        "wr": 51.92,
        "kda": 4.06,
        "elim": 20.49,
        "deaths": 5.39,
        "dmg": 12178.12,
        "heal": 1572.21
      },
      "Damage": {
        "g": 516,
        "w": 286,
        "l": 230,
        "time": 259201,
        "wr": 55.43,
        "kda": 2.66,
        "elim": 17.49,
        "deaths": 6.63,
        "dmg": 9490.85,
        "heal": 202.26
      },
      "Support": {
        "g": 386,
        "w": 194,
        "l": 192,
        "time": 200421,
        "wr": 50.26,
        "kda": 2.8,
        "elim": 12.55,
        "deaths": 5.73,
        "dmg": 5483.75,
        "heal": 6763.26
      }
    },
    "heroes": [
      {
        "slug": "ana",
        "n": "Ana",
        "role": "Support",
        "g": 151,
        "wr": 44.37,
        "kda": 3
      },
      {
        "slug": "genji",
        "n": "Genji",
        "role": "Damage",
        "g": 82,
        "wr": 51.22,
        "kda": 2.41
      },
      {
        "slug": "cassidy",
        "n": "Cassidy",
        "role": "Damage",
        "g": 78,
        "wr": 56.41,
        "kda": 2.55
      },
      {
        "slug": "sojourn",
        "n": "Sojourn",
        "role": "Damage",
        "g": 48,
        "wr": 58.33,
        "kda": 2.82
      },
      {
        "slug": "tracer",
        "n": "Tracer",
        "role": "Damage",
        "g": 48,
        "wr": 50,
        "kda": 2.52
      },
      {
        "slug": "kiriko",
        "n": "Kiriko",
        "role": "Support",
        "g": 46,
        "wr": 52.17,
        "kda": 1.98
      },
      {
        "slug": "wuyang",
        "n": "Wuyang",
        "role": "Support",
        "g": 40,
        "wr": 47.5,
        "kda": 2.09
      },
      {
        "slug": "doomfist",
        "n": "Doomfist",
        "role": "Tank",
        "g": 36,
        "wr": 44.44,
        "kda": 3.14
      },
      {
        "slug": "moira",
        "n": "Moira",
        "role": "Support",
        "g": 30,
        "wr": 46.67,
        "kda": 3.47
      },
      {
        "slug": "vendetta",
        "n": "Vendetta",
        "role": "Damage",
        "g": 30,
        "wr": 63.33,
        "kda": 2.6
      },
      {
        "slug": "shion",
        "n": "Shion",
        "role": "Damage",
        "g": 27,
        "wr": 59.26,
        "kda": 3.53
      },
      {
        "slug": "sierra",
        "n": "Sierra",
        "role": "Damage",
        "g": 25,
        "wr": 48,
        "kda": 2.58
      },
      {
        "slug": "jetpack-cat",
        "n": "Jetpack Cat",
        "role": "Support",
        "g": 20,
        "wr": 65,
        "kda": 3.84
      },
      {
        "slug": "roadhog",
        "n": "Roadhog",
        "role": "Tank",
        "g": 19,
        "wr": 57.89,
        "kda": 5.43
      },
      {
        "slug": "doctrine",
        "n": "Doctrine",
        "role": "Support",
        "g": 18,
        "wr": 66.67,
        "kda": 3.98
      },
      {
        "slug": "widowmaker",
        "n": "Widowmaker",
        "role": "Damage",
        "g": 18,
        "wr": 61.11,
        "kda": 2.01
      },
      {
        "slug": "ashe",
        "n": "Ashe",
        "role": "Damage",
        "g": 16,
        "wr": 68.75,
        "kda": 2.52
      },
      {
        "slug": "anran",
        "n": "Anran",
        "role": "Damage",
        "g": 15,
        "wr": 40,
        "kda": 2.25
      },
      {
        "slug": "dva",
        "n": "D.Va",
        "role": "Tank",
        "g": 15,
        "wr": 60,
        "kda": 5.25
      },
      {
        "slug": "freja",
        "n": "Freja",
        "role": "Damage",
        "g": 15,
        "wr": 60,
        "kda": 2.85
      },
      {
        "slug": "soldier-76",
        "n": "Soldier: 76",
        "role": "Damage",
        "g": 15,
        "wr": 53.33,
        "kda": 2.77
      },
      {
        "slug": "sombra",
        "n": "Sombra",
        "role": "Support",
        "g": 15,
        "wr": 46.67,
        "kda": 3.52
      },
      {
        "slug": "echo",
        "n": "Echo",
        "role": "Damage",
        "g": 13,
        "wr": 69.23,
        "kda": 3.03
      },
      {
        "slug": "mizuki",
        "n": "Mizuki",
        "role": "Support",
        "g": 13,
        "wr": 61.54,
        "kda": 1.98
      },
      {
        "slug": "reaper",
        "n": "Reaper",
        "role": "Damage",
        "g": 13,
        "wr": 76.92,
        "kda": 3.31
      },
      {
        "slug": "hazard",
        "n": "Hazard",
        "role": "Tank",
        "g": 12,
        "wr": 50,
        "kda": 3.52
      },
      {
        "slug": "orisa",
        "n": "Orisa",
        "role": "Tank",
        "g": 12,
        "wr": 33.33,
        "kda": 4.88
      },
      {
        "slug": "junkrat",
        "n": "Junkrat",
        "role": "Damage",
        "g": 11,
        "wr": 36.36,
        "kda": 2.82
      },
      {
        "slug": "reinhardt",
        "n": "Reinhardt",
        "role": "Tank",
        "g": 11,
        "wr": 54.55,
        "kda": 3.89
      },
      {
        "slug": "emre",
        "n": "Emre",
        "role": "Damage",
        "g": 10,
        "wr": 40,
        "kda": 2.58
      },
      {
        "slug": "hanzo",
        "n": "Hanzo",
        "role": "Damage",
        "g": 10,
        "wr": 40,
        "kda": 1.83
      },
      {
        "slug": "pharah",
        "n": "Pharah",
        "role": "Damage",
        "g": 10,
        "wr": 70,
        "kda": 3.18
      },
      {
        "slug": "bastion",
        "n": "Bastion",
        "role": "Damage",
        "g": 9,
        "wr": 44.44,
        "kda": 3.07
      },
      {
        "slug": "brigitte",
        "n": "Brigitte",
        "role": "Support",
        "g": 9,
        "wr": 77.78,
        "kda": 2.94
      },
      {
        "slug": "dmon",
        "n": "D.Mon",
        "role": "Tank",
        "g": 9,
        "wr": 77.78,
        "kda": 5.67
      },
      {
        "slug": "lifeweaver",
        "n": "Lifeweaver",
        "role": "Support",
        "g": 9,
        "wr": 33.33,
        "kda": 1.54
      },
      {
        "slug": "illari",
        "n": "Illari",
        "role": "Support",
        "g": 8,
        "wr": 75,
        "kda": 3.29
      },
      {
        "slug": "juno",
        "n": "Juno",
        "role": "Support",
        "g": 8,
        "wr": 62.5,
        "kda": 2.88
      },
      {
        "slug": "mei",
        "n": "Mei",
        "role": "Damage",
        "g": 8,
        "wr": 62.5,
        "kda": 4.53
      },
      {
        "slug": "sigma",
        "n": "Sigma",
        "role": "Tank",
        "g": 8,
        "wr": 50,
        "kda": 3.35
      },
      {
        "slug": "winston",
        "n": "Winston",
        "role": "Tank",
        "g": 8,
        "wr": 62.5,
        "kda": 3.66
      },
      {
        "slug": "mauga",
        "n": "Mauga",
        "role": "Tank",
        "g": 7,
        "wr": 57.14,
        "kda": 4.29
      },
      {
        "slug": "torbjorn",
        "n": "Torbjörn",
        "role": "Damage",
        "g": 7,
        "wr": 57.14,
        "kda": 3.4
      },
      {
        "slug": "zarya",
        "n": "Zarya",
        "role": "Tank",
        "g": 7,
        "wr": 28.57,
        "kda": 3.73
      },
      {
        "slug": "zenyatta",
        "n": "Zenyatta",
        "role": "Support",
        "g": 7,
        "wr": 28.57,
        "kda": 2.38
      },
      {
        "slug": "baptiste",
        "n": "Baptiste",
        "role": "Support",
        "g": 6,
        "wr": 50,
        "kda": 2.08
      },
      {
        "slug": "symmetra",
        "n": "Symmetra",
        "role": "Damage",
        "g": 6,
        "wr": 66.67,
        "kda": 2.44
      },
      {
        "slug": "lucio",
        "n": "Lúcio",
        "role": "Support",
        "g": 5,
        "wr": 80,
        "kda": 2.63
      },
      {
        "slug": "wrecking-ball",
        "n": "Wrecking Ball",
        "role": "Tank",
        "g": 5,
        "wr": 80,
        "kda": 4.89
      },
      {
        "slug": "domina",
        "n": "Domina",
        "role": "Tank",
        "g": 3,
        "wr": 66.67,
        "kda": 4.67
      },
      {
        "slug": "junker-queen",
        "n": "Junker Queen",
        "role": "Tank",
        "g": 2,
        "wr": 0,
        "kda": 3.08
      },
      {
        "slug": "ramattra",
        "n": "Ramattra",
        "role": "Tank",
        "g": 2,
        "wr": 50,
        "kda": 4.5
      },
      {
        "slug": "venture",
        "n": "Venture",
        "role": "Damage",
        "g": 2,
        "wr": 50,
        "kda": 1.53
      },
      {
        "slug": "mercy",
        "n": "Mercy",
        "role": "Support",
        "g": 1,
        "wr": 0,
        "kda": 0.27
      }
    ],
    "bscore": {
      "cassidy": {
        "finalScore": 64.83,
        "battleScore": 44.34,
        "coeff": 1.33,
        "matchCoef": 1.1,
        "gamesPlayed": 78,
        "rankIndex": 3,
        "det": {
          "g": 78,
          "time": 39348,
          "wr": 55.17948717948718,
          "el10": 18.164358974358972,
          "de10": 7.163589743589745,
          "dm10": 8807.846153846154,
          "he10": 44.64512820512821,
          "as10": 1.7771794871794873,
          "wa": 42.94871794871795,
          "ca": 12.102564102564102
        },
        "rankDelta": -1
      },
      "freja": {
        "finalScore": 57.56,
        "battleScore": 45.25,
        "coeff": 1.33,
        "matchCoef": 0.96,
        "gamesPlayed": 15,
        "rankIndex": 3,
        "det": {
          "g": 15,
          "time": 7468,
          "wr": 58,
          "el10": 19.20733333333333,
          "de10": 6.768,
          "dm10": 9336.8,
          "he10": 101.73333333333333,
          "as10": 0.49466666666666664,
          "wa": 26.133333333333333,
          "ca": 14.266666666666667
        }
      },
      "sojourn": {
        "finalScore": 58.44,
        "battleScore": 41.56,
        "coeff": 1.33,
        "matchCoef": 1.06,
        "gamesPlayed": 48,
        "rankIndex": 3,
        "det": {
          "g": 48,
          "time": 22647,
          "wr": 57.895833333333336,
          "el10": 18.983124999999998,
          "de10": 6.648541666666667,
          "dm10": 7916.229166666667,
          "he10": 0,
          "as10": 0.07833333333333334,
          "wa": 26.958333333333332,
          "ca": 11.041666666666666
        }
      },
      "tracer": {
        "finalScore": 59.83,
        "battleScore": 42.55,
        "coeff": 1.33,
        "matchCoef": 1.06,
        "gamesPlayed": 48,
        "rankIndex": 3,
        "det": {
          "g": 48,
          "time": 24694,
          "wr": 50.0625,
          "el10": 16.667708333333334,
          "de10": 6.606875,
          "dm10": 6097.833333333333,
          "he10": 60.35583333333333,
          "as10": 0,
          "wa": 32.854166666666664,
          "ca": 9.979166666666666
        }
      },
      "vendetta": {
        "finalScore": 60.13,
        "battleScore": 44.48,
        "coeff": 1.33,
        "matchCoef": 1.02,
        "gamesPlayed": 30,
        "rankIndex": 3,
        "det": {
          "g": 30,
          "time": 14944,
          "wr": 63.266666666666666,
          "el10": 18.990000000000002,
          "de10": 7.303,
          "dm10": 7154.2,
          "he10": 237,
          "as10": 1.4413333333333331,
          "wa": 0,
          "ca": 0
        }
      },
      "ana": {
        "finalScore": 60.07,
        "battleScore": 39.24,
        "coeff": 1.33,
        "matchCoef": 1.15,
        "gamesPlayed": 151,
        "rankIndex": 3,
        "det": {
          "g": 151,
          "time": 78168,
          "wr": 44,
          "el10": 10.85,
          "de10": 5.62,
          "dm10": 4305,
          "he10": 5941,
          "as10": 10.82,
          "wa": 51,
          "ca": 0
        }
      },
      "anran": {
        "finalScore": 59.14,
        "battleScore": 39.85,
        "coeff": 1.33,
        "matchCoef": 0.98,
        "gamesPlayed": 15,
        "rankIndex": 3,
        "det": {
          "g": 15,
          "time": 8309,
          "wr": 40,
          "el10": 17.84,
          "de10": 7.94,
          "dm10": 7044,
          "he10": 624,
          "as10": 0.36,
          "wa": 31,
          "ca": 10
        }
      },
      "ashe": {
        "finalScore": 55.56,
        "battleScore": 43.42,
        "coeff": 1.33,
        "matchCoef": 0.96,
        "gamesPlayed": 16,
        "rankIndex": 3,
        "det": {
          "g": 16,
          "time": 7810,
          "wr": 69,
          "el10": 14.52,
          "de10": 5.76,
          "dm10": 7968,
          "he10": 0,
          "as10": 1.69,
          "wa": 38,
          "ca": 20
        },
        "rankDeltaPower": -1
      },
      "baptiste": {
        "finalScore": 45.22,
        "battleScore": 38.76,
        "coeff": 1.33,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 3,
        "det": {
          "g": 6,
          "time": 3375,
          "wr": 48,
          "el10": 13.16,
          "de10": 6.76,
          "dm10": 4405,
          "he10": 6240,
          "as10": 8.89,
          "wa": 33,
          "ca": 14
        }
      },
      "bastion": {
        "finalScore": 63.53,
        "battleScore": 44.2,
        "coeff": 1.33,
        "matchCoef": 0.96,
        "gamesPlayed": 9,
        "rankIndex": 3,
        "det": {
          "g": 9,
          "time": 4979,
          "wr": 45,
          "el10": 20,
          "de10": 6.51,
          "dm10": 8855,
          "he10": 210,
          "as10": 1.69,
          "wa": 26,
          "ca": 4
        },
        "rankDelta": -1
      },
      "brigitte": {
        "finalScore": 55.43,
        "battleScore": 45.68,
        "coeff": 1.33,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 3,
        "det": {
          "g": 9,
          "time": 4955,
          "wr": 78,
          "el10": 16.47,
          "de10": 7.63,
          "dm10": 4887,
          "he10": 6760,
          "as10": 16.11,
          "wa": 0,
          "ca": 0
        },
        "rankDeltaPower": -1
      },
      "dmon": {
        "finalScore": 57.01,
        "battleScore": 51.69,
        "coeff": 1.21,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 2,
        "det": {
          "g": 9,
          "time": 5122,
          "wr": 78,
          "el10": 21.9,
          "de10": 3.87,
          "dm10": 10269,
          "he10": 301,
          "as10": 3.63,
          "wa": 32,
          "ca": 0
        }
      },
      "doctrine": {
        "finalScore": 62.52,
        "battleScore": 48.35,
        "coeff": 1.33,
        "matchCoef": 0.97,
        "gamesPlayed": 18,
        "rankIndex": 3,
        "det": {
          "g": 18,
          "time": 9966,
          "wr": 65,
          "el10": 14.63,
          "de10": 3.67,
          "dm10": 4852,
          "he10": 9374,
          "as10": 15.89,
          "wa": 46,
          "ca": 0
        }
      },
      "domina": {
        "finalScore": 50.91,
        "battleScore": 49.5,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 2,
        "det": {
          "g": 3,
          "time": 1864,
          "wr": 77,
          "el10": 22.54,
          "de10": 4.83,
          "dm10": 10691,
          "he10": 1339,
          "as10": 2.25,
          "wa": 54,
          "ca": 8
        }
      },
      "doomfist": {
        "finalScore": 56.06,
        "battleScore": 44.91,
        "coeff": 1.21,
        "matchCoef": 1.03,
        "gamesPlayed": 36,
        "rankIndex": 2,
        "det": {
          "g": 36,
          "time": 19961,
          "wr": 46,
          "el10": 20.29,
          "de10": 6.46,
          "dm10": 8135,
          "he10": 1714,
          "as10": 5.32,
          "wa": 28,
          "ca": 13
        }
      },
      "dva": {
        "finalScore": 57.45,
        "battleScore": 49.68,
        "coeff": 1.21,
        "matchCoef": 0.96,
        "gamesPlayed": 15,
        "rankIndex": 2,
        "det": {
          "g": 15,
          "time": 7839,
          "wr": 59,
          "el10": 22.5,
          "de10": 4.29,
          "dm10": 8754,
          "he10": 1591,
          "as10": 8.8,
          "wa": 26,
          "ca": 9
        }
      },
      "echo": {
        "finalScore": 55.71,
        "battleScore": 44.37,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 3,
        "det": {
          "g": 13,
          "time": 6181,
          "wr": 68,
          "el10": 19.12,
          "de10": 6.31,
          "dm10": 7364,
          "he10": 220,
          "as10": 0.19,
          "wa": 21,
          "ca": 9
        },
        "rankDelta": 3,
        "rankDeltaPower": 3
      },
      "emre": {
        "finalScore": 48.34,
        "battleScore": 39.44,
        "coeff": 1.33,
        "matchCoef": 0.92,
        "gamesPlayed": 10,
        "rankIndex": 3,
        "det": {
          "g": 10,
          "time": 4823,
          "wr": 41,
          "el10": 17.67,
          "de10": 6.84,
          "dm10": 8851,
          "he10": 638,
          "as10": 0,
          "wa": 33,
          "ca": 10
        }
      },
      "genji": {
        "finalScore": 59.23,
        "battleScore": 40.35,
        "coeff": 1.33,
        "matchCoef": 1.1,
        "gamesPlayed": 82,
        "rankIndex": 3,
        "det": {
          "g": 82,
          "time": 42313,
          "wr": 51,
          "el10": 15.71,
          "de10": 6.49,
          "dm10": 5993,
          "he10": 210,
          "as10": 0,
          "wa": 24,
          "ca": 11
        }
      },
      "hazard": {
        "finalScore": 51.4,
        "battleScore": 45.36,
        "coeff": 1.21,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 2,
        "det": {
          "g": 12,
          "time": 5489,
          "wr": 50,
          "el10": 18.47,
          "de10": 5.25,
          "dm10": 9826,
          "he10": 1754,
          "as10": 5.79,
          "wa": 32,
          "ca": 10
        }
      },
      "hanzo": {
        "finalScore": 46.45,
        "battleScore": 37.9,
        "coeff": 1.33,
        "matchCoef": 0.92,
        "gamesPlayed": 10,
        "rankIndex": 3,
        "det": {
          "g": 10,
          "time": 4528,
          "wr": 43,
          "el10": 11.66,
          "de10": 6.36,
          "dm10": 6885,
          "he10": 18.2,
          "as10": 2.65,
          "wa": 18,
          "ca": 12
        }
      },
      "illari": {
        "finalScore": 55.33,
        "battleScore": 46.12,
        "coeff": 1.33,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 3,
        "det": {
          "g": 8,
          "time": 3641,
          "wr": 71,
          "el10": 15.65,
          "de10": 5.6,
          "dm10": 5720,
          "he10": 7571,
          "as10": 10.22,
          "wa": 40,
          "ca": 13
        }
      },
      "jetpack-cat": {
        "finalScore": 58.15,
        "battleScore": 44.55,
        "coeff": 1.33,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 3,
        "det": {
          "g": 20,
          "time": 9168,
          "wr": 62,
          "el10": 16.62,
          "de10": 4.84,
          "dm10": 4167,
          "he10": 6121,
          "as10": 10.47,
          "wa": 27,
          "ca": 8
        }
      },
      "junker-queen": {
        "finalScore": 41.47,
        "battleScore": 40.32,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 2,
        "det": {
          "g": 2,
          "time": 1274,
          "wr": 13,
          "el10": 18.85,
          "de10": 6.12,
          "dm10": 10392,
          "he10": 2273,
          "as10": 3.77,
          "wa": 39,
          "ca": 13
        }
      },
      "junkrat": {
        "finalScore": 45.26,
        "battleScore": 36.61,
        "coeff": 1.33,
        "matchCoef": 0.93,
        "gamesPlayed": 11,
        "rankIndex": 3,
        "det": {
          "g": 11,
          "time": 5894,
          "wr": 33,
          "el10": 14.05,
          "de10": 5.6,
          "dm10": 7719,
          "he10": 0,
          "as10": 1.73,
          "wa": 18,
          "ca": 0
        }
      },
      "juno": {
        "finalScore": 53.27,
        "battleScore": 44.4,
        "coeff": 1.33,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 3,
        "det": {
          "g": 8,
          "time": 4628,
          "wr": 65,
          "el10": 12.7,
          "de10": 4.41,
          "dm10": 3687,
          "he10": 6875,
          "as10": 13.87,
          "wa": 36,
          "ca": 8
        },
        "rankDeltaPower": 1
      },
      "kiriko": {
        "finalScore": 56.7,
        "battleScore": 40.47,
        "coeff": 1.33,
        "matchCoef": 1.05,
        "gamesPlayed": 46,
        "rankIndex": 3,
        "det": {
          "g": 46,
          "time": 23802,
          "wr": 51,
          "el10": 8.85,
          "de10": 5.97,
          "dm10": 3175,
          "he10": 8820,
          "as10": 15.23,
          "wa": 27,
          "ca": 12
        }
      },
      "lifeweaver": {
        "finalScore": 44.38,
        "battleScore": 36.58,
        "coeff": 1.33,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 3,
        "det": {
          "g": 9,
          "time": 4204,
          "wr": 35,
          "el10": 7.99,
          "de10": 5.28,
          "dm10": 2375,
          "he10": 8687,
          "as10": 11.7,
          "wa": 28,
          "ca": 14
        }
      },
      "lucio": {
        "finalScore": 46.83,
        "battleScore": 40.88,
        "coeff": 1.33,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 3,
        "det": {
          "g": 5,
          "time": 2270,
          "wr": 76,
          "el10": 14.28,
          "de10": 7.93,
          "dm10": 3914,
          "he10": 4151,
          "as10": 10.84,
          "wa": 26,
          "ca": 9
        }
      },
      "mauga": {
        "finalScore": 57.91,
        "battleScore": 43.43,
        "coeff": 1.21,
        "matchCoef": 0.94,
        "gamesPlayed": 7,
        "rankIndex": 2,
        "det": {
          "g": 7,
          "time": 3334,
          "wr": 60,
          "el10": 20.7,
          "de10": 6.12,
          "dm10": 9464,
          "he10": 1243,
          "as10": 8.82,
          "wa": 31,
          "ca": 11
        }
      },
      "mei": {
        "finalScore": 53.87,
        "battleScore": 44.9,
        "coeff": 1.33,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 3,
        "det": {
          "g": 8,
          "time": 4513,
          "wr": 58,
          "el10": 20.34,
          "de10": 6.25,
          "dm10": 6407,
          "he10": 1228,
          "as10": 7.98,
          "wa": 46,
          "ca": 0
        }
      },
      "mercy": {
        "finalScore": 38.33,
        "battleScore": 33.88,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 726,
          "wr": 6,
          "el10": 0,
          "de10": 9.09,
          "dm10": 190,
          "he10": 6231,
          "as10": 6.61,
          "wa": 56,
          "ca": 33
        }
      },
      "mizuki": {
        "finalScore": 50.98,
        "battleScore": 40.6,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 3,
        "det": {
          "g": 13,
          "time": 6190,
          "wr": 61,
          "el10": 12.31,
          "de10": 6.2,
          "dm10": 4562,
          "he10": 7549,
          "as10": 9.4,
          "wa": 32,
          "ca": 13
        }
      },
      "moira": {
        "finalScore": 67.12,
        "battleScore": 43.35,
        "coeff": 1.33,
        "matchCoef": 1.01,
        "gamesPlayed": 30,
        "rankIndex": 3,
        "det": {
          "g": 30,
          "time": 17095,
          "wr": 46,
          "el10": 20.6,
          "de10": 5.93,
          "dm10": 6822,
          "he10": 7714,
          "as10": 14.32,
          "wa": 0,
          "ca": 0
        }
      },
      "orisa": {
        "finalScore": 50.21,
        "battleScore": 44.31,
        "coeff": 1.21,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 2,
        "det": {
          "g": 12,
          "time": 6942,
          "wr": 31,
          "el10": 21.78,
          "de10": 5.1,
          "dm10": 11747,
          "he10": 165,
          "as10": 3.11,
          "wa": 34,
          "ca": 11
        }
      },
      "pharah": {
        "finalScore": 58.81,
        "battleScore": 47.99,
        "coeff": 1.33,
        "matchCoef": 0.92,
        "gamesPlayed": 10,
        "rankIndex": 3,
        "det": {
          "g": 10,
          "time": 5858,
          "wr": 73,
          "el10": 21.82,
          "de10": 6.86,
          "dm10": 8859,
          "he10": 0,
          "as10": 5.12,
          "wa": 42,
          "ca": 0
        }
      },
      "ramattra": {
        "finalScore": 55.47,
        "battleScore": 46.08,
        "coeff": 1.21,
        "matchCoef": 0.92,
        "gamesPlayed": 2,
        "rankIndex": 2,
        "det": {
          "g": 2,
          "time": 1252,
          "wr": 61,
          "el10": 19.66,
          "de10": 4.79,
          "dm10": 10446,
          "he10": 454,
          "as10": 1.92,
          "wa": 25,
          "ca": 11
        },
        "rankDeltaPower": -1
      },
      "reaper": {
        "finalScore": 64.26,
        "battleScore": 48.08,
        "coeff": 1.33,
        "matchCoef": 0.97,
        "gamesPlayed": 13,
        "rankIndex": 3,
        "det": {
          "g": 13,
          "time": 6904,
          "wr": 75,
          "el10": 20.68,
          "de10": 6.26,
          "dm10": 7050,
          "he10": 1307,
          "as10": 0,
          "wa": 28,
          "ca": 13
        }
      },
      "reinhardt": {
        "finalScore": 50.26,
        "battleScore": 44.72,
        "coeff": 1.21,
        "matchCoef": 0.93,
        "gamesPlayed": 11,
        "rankIndex": 2,
        "det": {
          "g": 11,
          "time": 6139,
          "wr": 53,
          "el10": 21.3,
          "de10": 6.06,
          "dm10": 11084,
          "he10": 0,
          "as10": 2.25,
          "wa": 0,
          "ca": 0
        }
      },
      "roadhog": {
        "finalScore": 58.35,
        "battleScore": 49.4,
        "coeff": 1.21,
        "matchCoef": 0.98,
        "gamesPlayed": 19,
        "rankIndex": 2,
        "det": {
          "g": 19,
          "time": 9776,
          "wr": 58,
          "el10": 20.62,
          "de10": 4.6,
          "dm10": 8724,
          "he10": 5616,
          "as10": 5.22,
          "wa": 25,
          "ca": 16
        }
      },
      "shion": {
        "finalScore": 62.72,
        "battleScore": 46.81,
        "coeff": 1.33,
        "matchCoef": 1.01,
        "gamesPlayed": 27,
        "rankIndex": 3,
        "det": {
          "g": 27,
          "time": 12979,
          "wr": 60,
          "el10": 18.77,
          "de10": 5.32,
          "dm10": 7856,
          "he10": 125,
          "as10": 1.66,
          "wa": 32,
          "ca": 12
        }
      },
      "sigma": {
        "finalScore": 57.67,
        "battleScore": 41.51,
        "coeff": 1.21,
        "matchCoef": 0.95,
        "gamesPlayed": 8,
        "rankIndex": 2,
        "det": {
          "g": 8,
          "time": 4416,
          "wr": 47,
          "el10": 16.3,
          "de10": 5.43,
          "dm10": 11022,
          "he10": 0,
          "as10": 1.9,
          "wa": 46,
          "ca": 0
        }
      },
      "sierra": {
        "finalScore": 50.72,
        "battleScore": 38.11,
        "coeff": 1.33,
        "matchCoef": 1,
        "gamesPlayed": 25,
        "rankIndex": 3,
        "det": {
          "g": 25,
          "time": 11476,
          "wr": 50,
          "el10": 17.88,
          "de10": 7.11,
          "dm10": 8507,
          "he10": 36.5,
          "as10": 0.47,
          "wa": 25,
          "ca": 9
        }
      },
      "soldier-76": {
        "finalScore": 52.51,
        "battleScore": 41.27,
        "coeff": 1.33,
        "matchCoef": 0.96,
        "gamesPlayed": 15,
        "rankIndex": 3,
        "det": {
          "g": 15,
          "time": 7821,
          "wr": 55,
          "el10": 20.18,
          "de10": 7.29,
          "dm10": 9358,
          "he10": 1044,
          "as10": 0.77,
          "wa": 32,
          "ca": 12
        }
      },
      "sombra": {
        "finalScore": 53.03,
        "battleScore": 41.68,
        "coeff": 1.33,
        "matchCoef": 0.96,
        "gamesPlayed": 15,
        "rankIndex": 3,
        "det": {
          "g": 15,
          "time": 9023,
          "wr": 47,
          "el10": 15.63,
          "de10": 6.52,
          "dm10": 5612,
          "he10": 5030,
          "as10": 13.43,
          "wa": 33,
          "ca": 10
        }
      },
      "symmetra": {
        "finalScore": 47.26,
        "battleScore": 40.52,
        "coeff": 1.33,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 3,
        "det": {
          "g": 6,
          "time": 2648,
          "wr": 56,
          "el10": 13.82,
          "de10": 5.66,
          "dm10": 7062,
          "he10": 164,
          "as10": 4.3,
          "wa": 34,
          "ca": 0
        }
      },
      "torbjorn": {
        "finalScore": 52.45,
        "battleScore": 44.28,
        "coeff": 1.33,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 3,
        "det": {
          "g": 7,
          "time": 3890,
          "wr": 66,
          "el10": 15.73,
          "de10": 4.63,
          "dm10": 8119,
          "he10": 0,
          "as10": 1.08,
          "wa": 21,
          "ca": 12
        },
        "rankDelta": -1
      },
      "venture": {
        "finalScore": 43.91,
        "battleScore": 38.81,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 873,
          "wr": 41,
          "el10": 15.81,
          "de10": 10.31,
          "dm10": 5186,
          "he10": 52.73,
          "as10": 0,
          "wa": 49,
          "ca": 0
        }
      },
      "widowmaker": {
        "finalScore": 52.29,
        "battleScore": 40.43,
        "coeff": 1.33,
        "matchCoef": 0.97,
        "gamesPlayed": 18,
        "rankIndex": 3,
        "det": {
          "g": 18,
          "time": 7731,
          "wr": 60,
          "el10": 12.11,
          "de10": 6.05,
          "dm10": 5309,
          "he10": 0,
          "as10": 3.03,
          "wa": 34,
          "ca": 17
        }
      },
      "winston": {
        "finalScore": 50.16,
        "battleScore": 46,
        "coeff": 1.21,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 2,
        "det": {
          "g": 8,
          "time": 3951,
          "wr": 66,
          "el10": 19.44,
          "de10": 5.32,
          "dm10": 8616,
          "he10": 1597,
          "as10": 3.34,
          "wa": 59,
          "ca": 0
        }
      },
      "wrecking-ball": {
        "finalScore": 53.7,
        "battleScore": 51.57,
        "coeff": 1.21,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 2,
        "det": {
          "g": 5,
          "time": 2545,
          "wr": 78,
          "el10": 20.75,
          "de10": 4.24,
          "dm10": 6613,
          "he10": 1137,
          "as10": 2.83,
          "wa": 34,
          "ca": 14
        }
      },
      "wuyang": {
        "finalScore": 53.27,
        "battleScore": 38.46,
        "coeff": 1.33,
        "matchCoef": 1.04,
        "gamesPlayed": 40,
        "rankIndex": 3,
        "det": {
          "g": 40,
          "time": 20307,
          "wr": 48,
          "el10": 12.03,
          "de10": 5.76,
          "dm10": 5356,
          "he10": 6158,
          "as10": 14.39,
          "wa": 29,
          "ca": 0
        },
        "rankDeltaPower": -1
      },
      "zarya": {
        "finalScore": 53.26,
        "battleScore": 42.43,
        "coeff": 1.21,
        "matchCoef": 0.94,
        "gamesPlayed": 7,
        "rankIndex": 2,
        "det": {
          "g": 7,
          "time": 4822,
          "wr": 37,
          "el10": 19.91,
          "de10": 5.97,
          "dm10": 9631,
          "he10": 0,
          "as10": 4.85,
          "wa": 38,
          "ca": 0
        }
      },
      "zenyatta": {
        "finalScore": 42.11,
        "battleScore": 35.55,
        "coeff": 1.33,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 3,
        "det": {
          "g": 7,
          "time": 2903,
          "wr": 31,
          "el10": 12.61,
          "de10": 7.65,
          "dm10": 5935,
          "he10": 6284,
          "as10": 13.43,
          "wa": 23,
          "ca": 15
        }
      }
    },
    "bscoreAll": {
      "cassidy": {
        "finalScore": 64.83,
        "battleScore": 44.34,
        "coeff": 1.33,
        "matchCoef": 1.1,
        "gamesPlayed": 78,
        "rankIndex": 3,
        "det": {
          "g": 78,
          "time": 39348,
          "wr": 55.17948717948718,
          "el10": 18.164358974358972,
          "de10": 7.163589743589745,
          "dm10": 8807.846153846154,
          "he10": 44.64512820512821,
          "as10": 1.7771794871794873,
          "wa": 42.94871794871795,
          "ca": 12.102564102564102
        },
        "rankDelta": -1
      },
      "freja": {
        "finalScore": 57.56,
        "battleScore": 45.25,
        "coeff": 1.33,
        "matchCoef": 0.96,
        "gamesPlayed": 15,
        "rankIndex": 3,
        "det": {
          "g": 15,
          "time": 7468,
          "wr": 58,
          "el10": 19.20733333333333,
          "de10": 6.768,
          "dm10": 9336.8,
          "he10": 101.73333333333333,
          "as10": 0.49466666666666664,
          "wa": 26.133333333333333,
          "ca": 14.266666666666667
        }
      },
      "sojourn": {
        "finalScore": 58.44,
        "battleScore": 41.56,
        "coeff": 1.33,
        "matchCoef": 1.06,
        "gamesPlayed": 48,
        "rankIndex": 3,
        "det": {
          "g": 48,
          "time": 22647,
          "wr": 57.895833333333336,
          "el10": 18.983124999999998,
          "de10": 6.648541666666667,
          "dm10": 7916.229166666667,
          "he10": 0,
          "as10": 0.07833333333333334,
          "wa": 26.958333333333332,
          "ca": 11.041666666666666
        }
      },
      "tracer": {
        "finalScore": 59.83,
        "battleScore": 42.55,
        "coeff": 1.33,
        "matchCoef": 1.06,
        "gamesPlayed": 48,
        "rankIndex": 3,
        "det": {
          "g": 48,
          "time": 24694,
          "wr": 50.0625,
          "el10": 16.667708333333334,
          "de10": 6.606875,
          "dm10": 6097.833333333333,
          "he10": 60.35583333333333,
          "as10": 0,
          "wa": 32.854166666666664,
          "ca": 9.979166666666666
        }
      },
      "vendetta": {
        "finalScore": 60.13,
        "battleScore": 44.48,
        "coeff": 1.33,
        "matchCoef": 1.02,
        "gamesPlayed": 30,
        "rankIndex": 3,
        "det": {
          "g": 30,
          "time": 14944,
          "wr": 63.266666666666666,
          "el10": 18.990000000000002,
          "de10": 7.303,
          "dm10": 7154.2,
          "he10": 237,
          "as10": 1.4413333333333331,
          "wa": 0,
          "ca": 0
        }
      },
      "ana": {
        "finalScore": 60.07,
        "battleScore": 39.24,
        "coeff": 1.33,
        "matchCoef": 1.15,
        "gamesPlayed": 151,
        "rankIndex": 3,
        "det": {
          "g": 151,
          "time": 78168,
          "wr": 44,
          "el10": 10.85,
          "de10": 5.62,
          "dm10": 4305,
          "he10": 5941,
          "as10": 10.82,
          "wa": 51,
          "ca": 0
        }
      },
      "anran": {
        "finalScore": 59.14,
        "battleScore": 39.85,
        "coeff": 1.33,
        "matchCoef": 0.98,
        "gamesPlayed": 15,
        "rankIndex": 3,
        "det": {
          "g": 15,
          "time": 8309,
          "wr": 40,
          "el10": 17.84,
          "de10": 7.94,
          "dm10": 7044,
          "he10": 624,
          "as10": 0.36,
          "wa": 31,
          "ca": 10
        }
      },
      "ashe": {
        "finalScore": 55.56,
        "battleScore": 43.42,
        "coeff": 1.33,
        "matchCoef": 0.96,
        "gamesPlayed": 16,
        "rankIndex": 3,
        "det": {
          "g": 16,
          "time": 7810,
          "wr": 69,
          "el10": 14.52,
          "de10": 5.76,
          "dm10": 7968,
          "he10": 0,
          "as10": 1.69,
          "wa": 38,
          "ca": 20
        },
        "rankDeltaPower": -1
      },
      "baptiste": {
        "finalScore": 45.22,
        "battleScore": 38.76,
        "coeff": 1.33,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 3,
        "det": {
          "g": 6,
          "time": 3375,
          "wr": 48,
          "el10": 13.16,
          "de10": 6.76,
          "dm10": 4405,
          "he10": 6240,
          "as10": 8.89,
          "wa": 33,
          "ca": 14
        }
      },
      "bastion": {
        "finalScore": 63.53,
        "battleScore": 44.2,
        "coeff": 1.33,
        "matchCoef": 0.96,
        "gamesPlayed": 9,
        "rankIndex": 3,
        "det": {
          "g": 9,
          "time": 4979,
          "wr": 45,
          "el10": 20,
          "de10": 6.51,
          "dm10": 8855,
          "he10": 210,
          "as10": 1.69,
          "wa": 26,
          "ca": 4
        },
        "rankDelta": -1
      },
      "brigitte": {
        "finalScore": 55.43,
        "battleScore": 45.68,
        "coeff": 1.33,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 3,
        "det": {
          "g": 9,
          "time": 4955,
          "wr": 78,
          "el10": 16.47,
          "de10": 7.63,
          "dm10": 4887,
          "he10": 6760,
          "as10": 16.11,
          "wa": 0,
          "ca": 0
        },
        "rankDeltaPower": -1
      },
      "dmon": {
        "finalScore": 57.01,
        "battleScore": 51.69,
        "coeff": 1.21,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 2,
        "det": {
          "g": 9,
          "time": 5122,
          "wr": 78,
          "el10": 21.9,
          "de10": 3.87,
          "dm10": 10269,
          "he10": 301,
          "as10": 3.63,
          "wa": 32,
          "ca": 0
        }
      },
      "doctrine": {
        "finalScore": 62.52,
        "battleScore": 48.35,
        "coeff": 1.33,
        "matchCoef": 0.97,
        "gamesPlayed": 18,
        "rankIndex": 3,
        "det": {
          "g": 18,
          "time": 9966,
          "wr": 65,
          "el10": 14.63,
          "de10": 3.67,
          "dm10": 4852,
          "he10": 9374,
          "as10": 15.89,
          "wa": 46,
          "ca": 0
        }
      },
      "domina": {
        "finalScore": 50.91,
        "battleScore": 49.5,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 2,
        "det": {
          "g": 3,
          "time": 1864,
          "wr": 77,
          "el10": 22.54,
          "de10": 4.83,
          "dm10": 10691,
          "he10": 1339,
          "as10": 2.25,
          "wa": 54,
          "ca": 8
        }
      },
      "doomfist": {
        "finalScore": 56.06,
        "battleScore": 44.91,
        "coeff": 1.21,
        "matchCoef": 1.03,
        "gamesPlayed": 36,
        "rankIndex": 2,
        "det": {
          "g": 36,
          "time": 19961,
          "wr": 46,
          "el10": 20.29,
          "de10": 6.46,
          "dm10": 8135,
          "he10": 1714,
          "as10": 5.32,
          "wa": 28,
          "ca": 13
        }
      },
      "dva": {
        "finalScore": 57.45,
        "battleScore": 49.68,
        "coeff": 1.21,
        "matchCoef": 0.96,
        "gamesPlayed": 15,
        "rankIndex": 2,
        "det": {
          "g": 15,
          "time": 7839,
          "wr": 59,
          "el10": 22.5,
          "de10": 4.29,
          "dm10": 8754,
          "he10": 1591,
          "as10": 8.8,
          "wa": 26,
          "ca": 9
        }
      },
      "echo": {
        "finalScore": 55.71,
        "battleScore": 44.37,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 3,
        "det": {
          "g": 13,
          "time": 6181,
          "wr": 68,
          "el10": 19.12,
          "de10": 6.31,
          "dm10": 7364,
          "he10": 220,
          "as10": 0.19,
          "wa": 21,
          "ca": 9
        },
        "rankDelta": 3,
        "rankDeltaPower": 3
      },
      "emre": {
        "finalScore": 48.34,
        "battleScore": 39.44,
        "coeff": 1.33,
        "matchCoef": 0.92,
        "gamesPlayed": 10,
        "rankIndex": 3,
        "det": {
          "g": 10,
          "time": 4823,
          "wr": 41,
          "el10": 17.67,
          "de10": 6.84,
          "dm10": 8851,
          "he10": 638,
          "as10": 0,
          "wa": 33,
          "ca": 10
        }
      },
      "genji": {
        "finalScore": 59.23,
        "battleScore": 40.35,
        "coeff": 1.33,
        "matchCoef": 1.1,
        "gamesPlayed": 82,
        "rankIndex": 3,
        "det": {
          "g": 82,
          "time": 42313,
          "wr": 51,
          "el10": 15.71,
          "de10": 6.49,
          "dm10": 5993,
          "he10": 210,
          "as10": 0,
          "wa": 24,
          "ca": 11
        }
      },
      "hazard": {
        "finalScore": 51.4,
        "battleScore": 45.36,
        "coeff": 1.21,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 2,
        "det": {
          "g": 12,
          "time": 5489,
          "wr": 50,
          "el10": 18.47,
          "de10": 5.25,
          "dm10": 9826,
          "he10": 1754,
          "as10": 5.79,
          "wa": 32,
          "ca": 10
        }
      },
      "hanzo": {
        "finalScore": 46.45,
        "battleScore": 37.9,
        "coeff": 1.33,
        "matchCoef": 0.92,
        "gamesPlayed": 10,
        "rankIndex": 3,
        "det": {
          "g": 10,
          "time": 4528,
          "wr": 43,
          "el10": 11.66,
          "de10": 6.36,
          "dm10": 6885,
          "he10": 18.2,
          "as10": 2.65,
          "wa": 18,
          "ca": 12
        }
      },
      "illari": {
        "finalScore": 55.33,
        "battleScore": 46.12,
        "coeff": 1.33,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 3,
        "det": {
          "g": 8,
          "time": 3641,
          "wr": 71,
          "el10": 15.65,
          "de10": 5.6,
          "dm10": 5720,
          "he10": 7571,
          "as10": 10.22,
          "wa": 40,
          "ca": 13
        }
      },
      "jetpack-cat": {
        "finalScore": 58.15,
        "battleScore": 44.55,
        "coeff": 1.33,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 3,
        "det": {
          "g": 20,
          "time": 9168,
          "wr": 62,
          "el10": 16.62,
          "de10": 4.84,
          "dm10": 4167,
          "he10": 6121,
          "as10": 10.47,
          "wa": 27,
          "ca": 8
        }
      },
      "junker-queen": {
        "finalScore": 41.47,
        "battleScore": 40.32,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 2,
        "det": {
          "g": 2,
          "time": 1274,
          "wr": 13,
          "el10": 18.85,
          "de10": 6.12,
          "dm10": 10392,
          "he10": 2273,
          "as10": 3.77,
          "wa": 39,
          "ca": 13
        }
      },
      "junkrat": {
        "finalScore": 45.26,
        "battleScore": 36.61,
        "coeff": 1.33,
        "matchCoef": 0.93,
        "gamesPlayed": 11,
        "rankIndex": 3,
        "det": {
          "g": 11,
          "time": 5894,
          "wr": 33,
          "el10": 14.05,
          "de10": 5.6,
          "dm10": 7719,
          "he10": 0,
          "as10": 1.73,
          "wa": 18,
          "ca": 0
        }
      },
      "juno": {
        "finalScore": 53.27,
        "battleScore": 44.4,
        "coeff": 1.33,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 3,
        "det": {
          "g": 8,
          "time": 4628,
          "wr": 65,
          "el10": 12.7,
          "de10": 4.41,
          "dm10": 3687,
          "he10": 6875,
          "as10": 13.87,
          "wa": 36,
          "ca": 8
        },
        "rankDeltaPower": 1
      },
      "kiriko": {
        "finalScore": 56.7,
        "battleScore": 40.47,
        "coeff": 1.33,
        "matchCoef": 1.05,
        "gamesPlayed": 46,
        "rankIndex": 3,
        "det": {
          "g": 46,
          "time": 23802,
          "wr": 51,
          "el10": 8.85,
          "de10": 5.97,
          "dm10": 3175,
          "he10": 8820,
          "as10": 15.23,
          "wa": 27,
          "ca": 12
        }
      },
      "lifeweaver": {
        "finalScore": 44.38,
        "battleScore": 36.58,
        "coeff": 1.33,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 3,
        "det": {
          "g": 9,
          "time": 4204,
          "wr": 35,
          "el10": 7.99,
          "de10": 5.28,
          "dm10": 2375,
          "he10": 8687,
          "as10": 11.7,
          "wa": 28,
          "ca": 14
        }
      },
      "lucio": {
        "finalScore": 46.83,
        "battleScore": 40.88,
        "coeff": 1.33,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 3,
        "det": {
          "g": 5,
          "time": 2270,
          "wr": 76,
          "el10": 14.28,
          "de10": 7.93,
          "dm10": 3914,
          "he10": 4151,
          "as10": 10.84,
          "wa": 26,
          "ca": 9
        }
      },
      "mauga": {
        "finalScore": 57.91,
        "battleScore": 43.43,
        "coeff": 1.21,
        "matchCoef": 0.94,
        "gamesPlayed": 7,
        "rankIndex": 2,
        "det": {
          "g": 7,
          "time": 3334,
          "wr": 60,
          "el10": 20.7,
          "de10": 6.12,
          "dm10": 9464,
          "he10": 1243,
          "as10": 8.82,
          "wa": 31,
          "ca": 11
        }
      },
      "mei": {
        "finalScore": 53.87,
        "battleScore": 44.9,
        "coeff": 1.33,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 3,
        "det": {
          "g": 8,
          "time": 4513,
          "wr": 58,
          "el10": 20.34,
          "de10": 6.25,
          "dm10": 6407,
          "he10": 1228,
          "as10": 7.98,
          "wa": 46,
          "ca": 0
        }
      },
      "mercy": {
        "finalScore": 38.33,
        "battleScore": 33.88,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 3,
        "det": {
          "g": 1,
          "time": 726,
          "wr": 6,
          "el10": 0,
          "de10": 9.09,
          "dm10": 190,
          "he10": 6231,
          "as10": 6.61,
          "wa": 56,
          "ca": 33
        }
      },
      "mizuki": {
        "finalScore": 50.98,
        "battleScore": 40.6,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 3,
        "det": {
          "g": 13,
          "time": 6190,
          "wr": 61,
          "el10": 12.31,
          "de10": 6.2,
          "dm10": 4562,
          "he10": 7549,
          "as10": 9.4,
          "wa": 32,
          "ca": 13
        }
      },
      "moira": {
        "finalScore": 67.12,
        "battleScore": 43.35,
        "coeff": 1.33,
        "matchCoef": 1.01,
        "gamesPlayed": 30,
        "rankIndex": 3,
        "det": {
          "g": 30,
          "time": 17095,
          "wr": 46,
          "el10": 20.6,
          "de10": 5.93,
          "dm10": 6822,
          "he10": 7714,
          "as10": 14.32,
          "wa": 0,
          "ca": 0
        }
      },
      "orisa": {
        "finalScore": 50.21,
        "battleScore": 44.31,
        "coeff": 1.21,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 2,
        "det": {
          "g": 12,
          "time": 6942,
          "wr": 31,
          "el10": 21.78,
          "de10": 5.1,
          "dm10": 11747,
          "he10": 165,
          "as10": 3.11,
          "wa": 34,
          "ca": 11
        }
      },
      "pharah": {
        "finalScore": 58.81,
        "battleScore": 47.99,
        "coeff": 1.33,
        "matchCoef": 0.92,
        "gamesPlayed": 10,
        "rankIndex": 3,
        "det": {
          "g": 10,
          "time": 5858,
          "wr": 73,
          "el10": 21.82,
          "de10": 6.86,
          "dm10": 8859,
          "he10": 0,
          "as10": 5.12,
          "wa": 42,
          "ca": 0
        }
      },
      "ramattra": {
        "finalScore": 55.47,
        "battleScore": 46.08,
        "coeff": 1.21,
        "matchCoef": 0.92,
        "gamesPlayed": 2,
        "rankIndex": 2,
        "det": {
          "g": 2,
          "time": 1252,
          "wr": 61,
          "el10": 19.66,
          "de10": 4.79,
          "dm10": 10446,
          "he10": 454,
          "as10": 1.92,
          "wa": 25,
          "ca": 11
        },
        "rankDeltaPower": -1
      },
      "reaper": {
        "finalScore": 64.26,
        "battleScore": 48.08,
        "coeff": 1.33,
        "matchCoef": 0.97,
        "gamesPlayed": 13,
        "rankIndex": 3,
        "det": {
          "g": 13,
          "time": 6904,
          "wr": 75,
          "el10": 20.68,
          "de10": 6.26,
          "dm10": 7050,
          "he10": 1307,
          "as10": 0,
          "wa": 28,
          "ca": 13
        }
      },
      "reinhardt": {
        "finalScore": 50.26,
        "battleScore": 44.72,
        "coeff": 1.21,
        "matchCoef": 0.93,
        "gamesPlayed": 11,
        "rankIndex": 2,
        "det": {
          "g": 11,
          "time": 6139,
          "wr": 53,
          "el10": 21.3,
          "de10": 6.06,
          "dm10": 11084,
          "he10": 0,
          "as10": 2.25,
          "wa": 0,
          "ca": 0
        }
      },
      "roadhog": {
        "finalScore": 58.35,
        "battleScore": 49.4,
        "coeff": 1.21,
        "matchCoef": 0.98,
        "gamesPlayed": 19,
        "rankIndex": 2,
        "det": {
          "g": 19,
          "time": 9776,
          "wr": 58,
          "el10": 20.62,
          "de10": 4.6,
          "dm10": 8724,
          "he10": 5616,
          "as10": 5.22,
          "wa": 25,
          "ca": 16
        }
      },
      "shion": {
        "finalScore": 62.72,
        "battleScore": 46.81,
        "coeff": 1.33,
        "matchCoef": 1.01,
        "gamesPlayed": 27,
        "rankIndex": 3,
        "det": {
          "g": 27,
          "time": 12979,
          "wr": 60,
          "el10": 18.77,
          "de10": 5.32,
          "dm10": 7856,
          "he10": 125,
          "as10": 1.66,
          "wa": 32,
          "ca": 12
        }
      },
      "sigma": {
        "finalScore": 57.67,
        "battleScore": 41.51,
        "coeff": 1.21,
        "matchCoef": 0.95,
        "gamesPlayed": 8,
        "rankIndex": 2,
        "det": {
          "g": 8,
          "time": 4416,
          "wr": 47,
          "el10": 16.3,
          "de10": 5.43,
          "dm10": 11022,
          "he10": 0,
          "as10": 1.9,
          "wa": 46,
          "ca": 0
        }
      },
      "sierra": {
        "finalScore": 50.72,
        "battleScore": 38.11,
        "coeff": 1.33,
        "matchCoef": 1,
        "gamesPlayed": 25,
        "rankIndex": 3,
        "det": {
          "g": 25,
          "time": 11476,
          "wr": 50,
          "el10": 17.88,
          "de10": 7.11,
          "dm10": 8507,
          "he10": 36.5,
          "as10": 0.47,
          "wa": 25,
          "ca": 9
        }
      },
      "soldier-76": {
        "finalScore": 52.51,
        "battleScore": 41.27,
        "coeff": 1.33,
        "matchCoef": 0.96,
        "gamesPlayed": 15,
        "rankIndex": 3,
        "det": {
          "g": 15,
          "time": 7821,
          "wr": 55,
          "el10": 20.18,
          "de10": 7.29,
          "dm10": 9358,
          "he10": 1044,
          "as10": 0.77,
          "wa": 32,
          "ca": 12
        }
      },
      "sombra": {
        "finalScore": 53.03,
        "battleScore": 41.68,
        "coeff": 1.33,
        "matchCoef": 0.96,
        "gamesPlayed": 15,
        "rankIndex": 3,
        "det": {
          "g": 15,
          "time": 9023,
          "wr": 47,
          "el10": 15.63,
          "de10": 6.52,
          "dm10": 5612,
          "he10": 5030,
          "as10": 13.43,
          "wa": 33,
          "ca": 10
        }
      },
      "symmetra": {
        "finalScore": 47.26,
        "battleScore": 40.52,
        "coeff": 1.33,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 3,
        "det": {
          "g": 6,
          "time": 2648,
          "wr": 56,
          "el10": 13.82,
          "de10": 5.66,
          "dm10": 7062,
          "he10": 164,
          "as10": 4.3,
          "wa": 34,
          "ca": 0
        }
      },
      "torbjorn": {
        "finalScore": 52.45,
        "battleScore": 44.28,
        "coeff": 1.33,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 3,
        "det": {
          "g": 7,
          "time": 3890,
          "wr": 66,
          "el10": 15.73,
          "de10": 4.63,
          "dm10": 8119,
          "he10": 0,
          "as10": 1.08,
          "wa": 21,
          "ca": 12
        },
        "rankDelta": -1
      },
      "venture": {
        "finalScore": 43.91,
        "battleScore": 38.81,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 873,
          "wr": 41,
          "el10": 15.81,
          "de10": 10.31,
          "dm10": 5186,
          "he10": 52.73,
          "as10": 0,
          "wa": 49,
          "ca": 0
        }
      },
      "widowmaker": {
        "finalScore": 52.29,
        "battleScore": 40.43,
        "coeff": 1.33,
        "matchCoef": 0.97,
        "gamesPlayed": 18,
        "rankIndex": 3,
        "det": {
          "g": 18,
          "time": 7731,
          "wr": 60,
          "el10": 12.11,
          "de10": 6.05,
          "dm10": 5309,
          "he10": 0,
          "as10": 3.03,
          "wa": 34,
          "ca": 17
        }
      },
      "winston": {
        "finalScore": 50.16,
        "battleScore": 46,
        "coeff": 1.21,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 2,
        "det": {
          "g": 8,
          "time": 3951,
          "wr": 66,
          "el10": 19.44,
          "de10": 5.32,
          "dm10": 8616,
          "he10": 1597,
          "as10": 3.34,
          "wa": 59,
          "ca": 0
        }
      },
      "wrecking-ball": {
        "finalScore": 53.7,
        "battleScore": 51.57,
        "coeff": 1.21,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 2,
        "det": {
          "g": 5,
          "time": 2545,
          "wr": 78,
          "el10": 20.75,
          "de10": 4.24,
          "dm10": 6613,
          "he10": 1137,
          "as10": 2.83,
          "wa": 34,
          "ca": 14
        }
      },
      "wuyang": {
        "finalScore": 53.27,
        "battleScore": 38.46,
        "coeff": 1.33,
        "matchCoef": 1.04,
        "gamesPlayed": 40,
        "rankIndex": 3,
        "det": {
          "g": 40,
          "time": 20307,
          "wr": 48,
          "el10": 12.03,
          "de10": 5.76,
          "dm10": 5356,
          "he10": 6158,
          "as10": 14.39,
          "wa": 29,
          "ca": 0
        },
        "rankDeltaPower": -1
      },
      "zarya": {
        "finalScore": 53.26,
        "battleScore": 42.43,
        "coeff": 1.21,
        "matchCoef": 0.94,
        "gamesPlayed": 7,
        "rankIndex": 2,
        "det": {
          "g": 7,
          "time": 4822,
          "wr": 37,
          "el10": 19.91,
          "de10": 5.97,
          "dm10": 9631,
          "he10": 0,
          "as10": 4.85,
          "wa": 38,
          "ca": 0
        }
      },
      "zenyatta": {
        "finalScore": 42.11,
        "battleScore": 35.55,
        "coeff": 1.33,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 3,
        "det": {
          "g": 7,
          "time": 2903,
          "wr": 31,
          "el10": 12.61,
          "de10": 7.65,
          "dm10": 5935,
          "he10": 6284,
          "as10": 13.43,
          "wa": 23,
          "ca": 15
        }
      }
    },
    "recent": [
      {
        "d": "2026-09-17",
        "g": {},
        "m": 831,
        "w": 443,
        "l": 388,
        "t": 441476,
        "k": 2.75,
        "r": {
          "Tank": "gold-2",
          "Damage": "platinum-5",
          "Support": "platinum-3"
        }
      },
      {
        "d": "2026-09-18",
        "g": {},
        "m": 837,
        "w": 446,
        "l": 391,
        "t": 444605,
        "k": 2.75,
        "r": {
          "Tank": "gold-2",
          "Damage": "platinum-5",
          "Support": "platinum-3"
        }
      },
      {
        "d": "2026-09-19",
        "g": {},
        "m": 852,
        "w": 458,
        "l": 394,
        "t": 450681,
        "k": 2.77,
        "r": {
          "Tank": "gold-2",
          "Damage": "platinum-5",
          "Support": "platinum-3"
        }
      },
      {
        "d": "2026-09-20",
        "g": {
          "ana": 10,
          "ashe": 1,
          "bastion": 1,
          "brigitte": 1,
          "cassidy": 12,
          "doomfist": 1,
          "dva": 4,
          "echo": 3,
          "genji": 4,
          "illari": 1,
          "kiriko": 1,
          "lifeweaver": 1,
          "orisa": 1,
          "reinhardt": 4,
          "shion": 1,
          "sierra": 2,
          "sojourn": 2,
          "tracer": 9,
          "vendetta": 5,
          "wuyang": 1,
          "doctrine": 2,
          "domina": 1,
          "junker-queen": 1,
          "juno": 1,
          "lucio": 1,
          "pharah": 1,
          "roadhog": 2,
          "sigma": 1,
          "torbjorn": 2,
          "widowmaker": 4
        },
        "m": 871,
        "w": 471,
        "l": 400,
        "t": 460846,
        "k": 2.77,
        "r": {
          "Tank": "gold-1",
          "Damage": "platinum-5",
          "Support": "platinum-3"
        }
      },
      {
        "d": "2026-09-21",
        "g": {
          "ana": 4,
          "anran": 1,
          "brigitte": 1,
          "genji": 5,
          "illari": 1,
          "jetpack-cat": 2,
          "moira": 3,
          "pharah": 2,
          "shion": 2,
          "sojourn": 1,
          "tracer": 1,
          "wuyang": 2,
          "winston": 1
        },
        "m": 897,
        "w": 483,
        "l": 414,
        "t": 473171,
        "k": 2.77,
        "r": {
          "Tank": "gold-1",
          "Damage": "platinum-5",
          "Support": "platinum-3"
        }
      },
      {
        "d": "2026-09-22",
        "g": {
          "ana": 4,
          "bastion": 1,
          "cassidy": 2,
          "doomfist": 1,
          "dva": 2,
          "orisa": 1,
          "sojourn": 2,
          "wuyang": 1,
          "baptiste": 1,
          "roadhog": 2,
          "widowmaker": 1
        },
        "m": 915,
        "w": 490,
        "l": 425,
        "t": 481875,
        "k": 2.78,
        "r": {
          "Tank": "gold-1",
          "Damage": "platinum-5",
          "Support": "platinum-3"
        }
      },
      {
        "d": "2026-09-23",
        "g": {
          "ana": 2,
          "ashe": 1,
          "genji": 1,
          "orisa": 1,
          "soldier-76": 1,
          "roadhog": 1,
          "winston": 1
        },
        "m": 923,
        "w": 493,
        "l": 430,
        "t": 485386,
        "k": 2.78,
        "r": {
          "Tank": "gold-1",
          "Damage": "platinum-5",
          "Support": "platinum-3"
        }
      },
      {
        "d": "2026-09-24",
        "g": {
          "ana": 2,
          "cassidy": 3,
          "dmon": 2,
          "jetpack-cat": 1,
          "mauga": 1,
          "mizuki": 1,
          "moira": 1,
          "orisa": 2,
          "shion": 2,
          "sojourn": 1,
          "tracer": 1,
          "vendetta": 2,
          "wuyang": 1,
          "junkrat": 1,
          "roadhog": 2
        },
        "m": 946,
        "w": 501,
        "l": 445,
        "t": 500630,
        "k": 2.78,
        "r": {
          "Tank": "gold-1",
          "Damage": "platinum-5",
          "Support": "platinum-3"
        }
      },
      {
        "d": "2026-09-25",
        "g": {
          "ana": 8,
          "ashe": 1,
          "brigitte": 3,
          "cassidy": 1,
          "echo": 1,
          "genji": 1,
          "shion": 2,
          "sojourn": 5,
          "tracer": 1,
          "vendetta": 1,
          "wuyang": 2,
          "baptiste": 1,
          "sombra": 1
        },
        "m": 974,
        "w": 519,
        "l": 455,
        "t": 517007,
        "k": 2.78,
        "r": {
          "Tank": "gold-1",
          "Damage": "platinum-5",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-09-26",
        "g": {
          "anran": 2,
          "cassidy": 1,
          "doomfist": 1,
          "dva": 1,
          "genji": 1,
          "orisa": 2,
          "pharah": 1,
          "ramattra": 1,
          "reinhardt": 1,
          "roadhog": 1,
          "shion": 1,
          "sojourn": 1,
          "tracer": 1,
          "hazard": 4,
          "junkrat": 1,
          "mei": 1,
          "winston": 2,
          "wrecking-ball": 1
        },
        "m": 998,
        "w": 533,
        "l": 465,
        "t": 529185,
        "k": 2.8,
        "r": {
          "Tank": "gold-2",
          "Damage": "platinum-5",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-09-27",
        "g": {
          "ana": 2,
          "cassidy": 1,
          "genji": 1,
          "illari": 1,
          "mizuki": 1,
          "moira": 1,
          "orisa": 1,
          "symmetra": 1,
          "tracer": 5,
          "wuyang": 3,
          "hazard": 4,
          "hanzo": 1,
          "zarya": 1
        },
        "m": 1021,
        "w": 543,
        "l": 478,
        "t": 540036,
        "k": 2.8,
        "r": {
          "Tank": "gold-2",
          "Damage": "platinum-5",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-09-28",
        "g": {
          "ana": 4,
          "ashe": 1,
          "cassidy": 1,
          "freja": 1,
          "genji": 3,
          "kiriko": 1,
          "sojourn": 1,
          "soldier-76": 1,
          "tracer": 1,
          "wuyang": 6
        },
        "m": 1041,
        "w": 553,
        "l": 488,
        "t": 551103,
        "k": 2.8,
        "r": {
          "Tank": "gold-2",
          "Damage": "platinum-5",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-09-29",
        "g": {},
        "m": 1073,
        "w": 568,
        "l": 505,
        "t": 567393,
        "k": 2.8,
        "r": {
          "Tank": "gold-2",
          "Damage": "platinum-5",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-09-30",
        "g": {},
        "m": 1097,
        "w": 579,
        "l": 518,
        "t": 580022,
        "k": 2.8,
        "r": {
          "Tank": "gold-2",
          "Damage": "platinum-4",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-01",
        "g": {},
        "m": 1105,
        "w": 583,
        "l": 522,
        "t": 583401,
        "k": 2.8,
        "r": {
          "Tank": "gold-2",
          "Damage": "platinum-4",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-02",
        "g": {},
        "m": 1112,
        "w": 583,
        "l": 529,
        "t": 586600,
        "k": 2.79,
        "r": {
          "Tank": "gold-2",
          "Damage": "platinum-5",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-03",
        "g": {},
        "m": 1124,
        "w": 588,
        "l": 536,
        "t": 593165,
        "k": 2.8,
        "r": {
          "Tank": "gold-2",
          "Damage": "platinum-5",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-04",
        "g": {},
        "m": 1126,
        "w": 587,
        "l": 539,
        "t": 594173,
        "k": 2.8,
        "r": {
          "Tank": "gold-3",
          "Damage": "platinum-5",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-05",
        "g": {},
        "m": 1128,
        "w": 589,
        "l": 539,
        "t": 595157,
        "k": 2.8,
        "r": {
          "Tank": "gold-3",
          "Damage": "platinum-5",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-06",
        "g": {},
        "m": 1150,
        "w": 602,
        "l": 548,
        "t": 605610,
        "k": 2.79,
        "r": {
          "Tank": "gold-3",
          "Damage": "gold-1",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-07",
        "g": {},
        "m": 1152,
        "w": 603,
        "l": 549,
        "t": 608068,
        "k": 2.79,
        "r": {
          "Tank": "gold-3",
          "Damage": "gold-1",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-08",
        "g": {},
        "m": 1168,
        "w": 611,
        "l": 557,
        "t": 616913,
        "k": 2.81,
        "r": {
          "Tank": "gold-3",
          "Damage": "gold-1",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-09",
        "g": {},
        "m": 1168,
        "w": 611,
        "l": 557,
        "t": 616913,
        "k": 2.81,
        "r": {
          "Tank": "gold-3",
          "Damage": "gold-1",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-10",
        "g": {},
        "m": 1179,
        "w": 616,
        "l": 563,
        "t": 624220,
        "k": 2.81,
        "r": {
          "Tank": "gold-3",
          "Damage": "gold-1",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-11",
        "g": {},
        "m": 1194,
        "w": 626,
        "l": 568,
        "t": 631157,
        "k": 2.82,
        "r": {
          "Tank": "gold-3",
          "Damage": "gold-1",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-12",
        "g": {},
        "m": 1212,
        "w": 634,
        "l": 578,
        "t": 640310,
        "k": 2.83,
        "tot": {
          "e": 16622,
          "a": 1832,
          "dd": 6522,
          "dm": 8832649,
          "he": 3313016
        },
        "r": {
          "Tank": "gold-3",
          "Damage": "gold-1",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-13",
        "g": {},
        "m": 1212,
        "w": 634,
        "l": 578,
        "t": 640310,
        "k": 2.83,
        "tot": {
          "e": 16622,
          "a": 1832,
          "dd": 6522,
          "dm": 8832649,
          "he": 3313016
        },
        "r": {
          "Tank": "gold-3",
          "Damage": "gold-1",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-14",
        "g": {
          "doctrine": 1,
          "junkrat": 1,
          "sombra": 1,
          "widowmaker": 1
        },
        "m": 1046,
        "w": 554,
        "l": 492,
        "t": 537035,
        "k": 2.9,
        "tot": {
          "e": 14393,
          "a": 1431,
          "dd": 5461,
          "dm": 7496790,
          "he": 2559401
        },
        "r": {
          "Tank": "gold-3",
          "Damage": "platinum-5",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-15",
        "g": {},
        "m": 1046,
        "w": 554,
        "l": 492,
        "t": 537035,
        "k": 2.9,
        "tot": {
          "e": 14393,
          "a": 1431,
          "dd": 5461,
          "dm": 7496790,
          "he": 2559401
        },
        "r": {
          "Tank": "gold-3",
          "Damage": "platinum-5",
          "Support": "platinum-4"
        }
      },
      {
        "d": "2026-10-16",
        "g": {
          "cassidy": 1,
          "doomfist": 2,
          "dva": 1,
          "echo": 1,
          "genji": 1,
          "reinhardt": 4,
          "widowmaker": 1,
          "winston": 1
        },
        "m": 1058,
        "w": 561,
        "l": 497,
        "t": 544348,
        "k": 2.9,
        "tot": {
          "e": 14639,
          "a": 1444,
          "dd": 5540,
          "dm": 7651501,
          "he": 2568555
        },
        "r": {
          "Tank": "gold-3",
          "Damage": "platinum-5",
          "Support": "platinum-4"
        }
      }
    ]
  },
  {
    "id": "maru",
    "pid": "71bf7209519a1c4b03bd24a4d001|37984cd41cd1e33a63f96d42d8022aa7",
    "name": "まる熊",
    "tag": "",
    "endorse": 2,
    "title": null,
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d639420de7519dd84f84d8297247d091d674567adadc39b869180809ec1c9bfb.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8849a4ba9d1c3d5dac2ef6bbdac4eefdc5b8a91b81d774ae7dbaa40f791abe69.png",
    "role": "Support",
    "ranks": {
      "Tank": {
        "division": "gold",
        "tier": 2,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_GoldTier.8d40eab551020b46a84002019dd98714149ed5e2.png"
      },
      "Damage": {
        "division": "gold",
        "tier": 1,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_GoldTier.8d40eab551020b46a84002019dd98714149ed5e2.png"
      },
      "Support": {
        "division": "platinum",
        "tier": 1,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_PlatinumTier.694340e3a5b2031d4fac9eb1d8f52c6855d4c072.png"
      }
    },
    "rankTier": "Platinum 1",
    "overall": {
      "matches": 760,
      "wins": 383,
      "losses": 377,
      "wr": 50.39,
      "kda": 2.53,
      "elim": 14.86,
      "deaths": 6.48,
      "dmg": 8945.97,
      "heal": 3830.39,
      "time": 385557,
      "tot": {
        "e": 9551,
        "a": 986,
        "dd": 4163,
        "dm": 5748637,
        "he": 2461389
      }
    },
    "roles": {
      "Tank": {
        "g": 238,
        "w": 119,
        "l": 119,
        "time": 118477,
        "wr": 50,
        "kda": 3.15,
        "elim": 17.56,
        "deaths": 6.29,
        "dmg": 12106.98,
        "heal": 993.3
      },
      "Damage": {
        "g": 227,
        "w": 118,
        "l": 109,
        "time": 114376,
        "wr": 51.98,
        "kda": 2.1,
        "elim": 15.89,
        "deaths": 7.61,
        "dmg": 10375.65,
        "heal": 252.62
      },
      "Support": {
        "g": 295,
        "w": 146,
        "l": 149,
        "time": 152704,
        "wr": 49.49,
        "kda": 2.44,
        "elim": 12,
        "deaths": 5.78,
        "dmg": 5422.64,
        "heal": 8711.34
      }
    },
    "heroes": [
      {
        "slug": "reinhardt",
        "n": "Reinhardt",
        "role": "Tank",
        "g": 81,
        "wr": 54.32,
        "kda": 2.45
      },
      {
        "slug": "moira",
        "n": "Moira",
        "role": "Support",
        "g": 80,
        "wr": 63.75,
        "kda": 3.63
      },
      {
        "slug": "kiriko",
        "n": "Kiriko",
        "role": "Support",
        "g": 63,
        "wr": 36.51,
        "kda": 1.77
      },
      {
        "slug": "mizuki",
        "n": "Mizuki",
        "role": "Support",
        "g": 40,
        "wr": 57.5,
        "kda": 1.84
      },
      {
        "slug": "ana",
        "n": "Ana",
        "role": "Support",
        "g": 37,
        "wr": 35.14,
        "kda": 2.59
      },
      {
        "slug": "anran",
        "n": "Anran",
        "role": "Damage",
        "g": 36,
        "wr": 61.11,
        "kda": 2.49
      },
      {
        "slug": "mauga",
        "n": "Mauga",
        "role": "Tank",
        "g": 36,
        "wr": 61.11,
        "kda": 4.91
      },
      {
        "slug": "sierra",
        "n": "Sierra",
        "role": "Damage",
        "g": 30,
        "wr": 50,
        "kda": 2.26
      },
      {
        "slug": "lifeweaver",
        "n": "Lifeweaver",
        "role": "Support",
        "g": 29,
        "wr": 58.62,
        "kda": 2.22
      },
      {
        "slug": "orisa",
        "n": "Orisa",
        "role": "Tank",
        "g": 26,
        "wr": 50,
        "kda": 3.85
      },
      {
        "slug": "vendetta",
        "n": "Vendetta",
        "role": "Damage",
        "g": 22,
        "wr": 54.55,
        "kda": 1.94
      },
      {
        "slug": "cassidy",
        "n": "Cassidy",
        "role": "Damage",
        "g": 21,
        "wr": 47.62,
        "kda": 1.62
      },
      {
        "slug": "roadhog",
        "n": "Roadhog",
        "role": "Tank",
        "g": 20,
        "wr": 50,
        "kda": 3.98
      },
      {
        "slug": "bastion",
        "n": "Bastion",
        "role": "Damage",
        "g": 19,
        "wr": 47.37,
        "kda": 2.25
      },
      {
        "slug": "sigma",
        "n": "Sigma",
        "role": "Tank",
        "g": 18,
        "wr": 38.89,
        "kda": 2.95
      },
      {
        "slug": "zarya",
        "n": "Zarya",
        "role": "Tank",
        "g": 17,
        "wr": 41.18,
        "kda": 3.24
      },
      {
        "slug": "shion",
        "n": "Shion",
        "role": "Damage",
        "g": 16,
        "wr": 43.75,
        "kda": 1.85
      },
      {
        "slug": "freja",
        "n": "Freja",
        "role": "Damage",
        "g": 13,
        "wr": 38.46,
        "kda": 2.31
      },
      {
        "slug": "winston",
        "n": "Winston",
        "role": "Tank",
        "g": 11,
        "wr": 36.36,
        "kda": 2.38
      },
      {
        "slug": "ashe",
        "n": "Ashe",
        "role": "Damage",
        "g": 10,
        "wr": 40,
        "kda": 2.24
      },
      {
        "slug": "doctrine",
        "n": "Doctrine",
        "role": "Support",
        "g": 10,
        "wr": 70,
        "kda": 2.44
      },
      {
        "slug": "ramattra",
        "n": "Ramattra",
        "role": "Tank",
        "g": 10,
        "wr": 50,
        "kda": 3.39
      },
      {
        "slug": "junkrat",
        "n": "Junkrat",
        "role": "Damage",
        "g": 9,
        "wr": 55.56,
        "kda": 2.29
      },
      {
        "slug": "widowmaker",
        "n": "Widowmaker",
        "role": "Damage",
        "g": 9,
        "wr": 66.67,
        "kda": 2.38
      },
      {
        "slug": "dva",
        "n": "D.Va",
        "role": "Tank",
        "g": 8,
        "wr": 37.5,
        "kda": 3.15
      },
      {
        "slug": "pharah",
        "n": "Pharah",
        "role": "Damage",
        "g": 7,
        "wr": 57.14,
        "kda": 1.95
      },
      {
        "slug": "sojourn",
        "n": "Sojourn",
        "role": "Damage",
        "g": 7,
        "wr": 42.86,
        "kda": 2.12
      },
      {
        "slug": "soldier-76",
        "n": "Soldier: 76",
        "role": "Damage",
        "g": 7,
        "wr": 57.14,
        "kda": 1.98
      },
      {
        "slug": "hazard",
        "n": "Hazard",
        "role": "Tank",
        "g": 6,
        "wr": 50,
        "kda": 1.89
      },
      {
        "slug": "reaper",
        "n": "Reaper",
        "role": "Damage",
        "g": 6,
        "wr": 50,
        "kda": 1.66
      },
      {
        "slug": "sombra",
        "n": "Sombra",
        "role": "Support",
        "g": 6,
        "wr": 16.67,
        "kda": 4
      },
      {
        "slug": "wuyang",
        "n": "Wuyang",
        "role": "Support",
        "g": 6,
        "wr": 66.67,
        "kda": 2.16
      },
      {
        "slug": "zenyatta",
        "n": "Zenyatta",
        "role": "Support",
        "g": 6,
        "wr": 33.33,
        "kda": 2.07
      },
      {
        "slug": "illari",
        "n": "Illari",
        "role": "Support",
        "g": 5,
        "wr": 20,
        "kda": 0.91
      },
      {
        "slug": "juno",
        "n": "Juno",
        "role": "Support",
        "g": 5,
        "wr": 0,
        "kda": 1.16
      },
      {
        "slug": "dmon",
        "n": "D.Mon",
        "role": "Tank",
        "g": 4,
        "wr": 25,
        "kda": 2
      },
      {
        "slug": "echo",
        "n": "Echo",
        "role": "Damage",
        "g": 4,
        "wr": 50,
        "kda": 1.45
      },
      {
        "slug": "torbjorn",
        "n": "Torbjörn",
        "role": "Damage",
        "g": 4,
        "wr": 50,
        "kda": 1.83
      },
      {
        "slug": "baptiste",
        "n": "Baptiste",
        "role": "Support",
        "g": 3,
        "wr": 33.33,
        "kda": 2.19
      },
      {
        "slug": "jetpack-cat",
        "n": "Jetpack Cat",
        "role": "Support",
        "g": 3,
        "wr": 66.67,
        "kda": 2.63
      },
      {
        "slug": "symmetra",
        "n": "Symmetra",
        "role": "Damage",
        "g": 3,
        "wr": 100,
        "kda": 2.54
      },
      {
        "slug": "emre",
        "n": "Emre",
        "role": "Damage",
        "g": 2,
        "wr": 50,
        "kda": 1.53
      },
      {
        "slug": "mercy",
        "n": "Mercy",
        "role": "Support",
        "g": 2,
        "wr": 50,
        "kda": 0.86
      },
      {
        "slug": "doomfist",
        "n": "Doomfist",
        "role": "Tank",
        "g": 1,
        "wr": 0,
        "kda": 0.73
      },
      {
        "slug": "hanzo",
        "n": "Hanzo",
        "role": "Damage",
        "g": 1,
        "wr": 100,
        "kda": 1.4
      },
      {
        "slug": "tracer",
        "n": "Tracer",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 1
      }
    ],
    "bscore": {
      "anran": {
        "finalScore": 61.86,
        "battleScore": 47.08,
        "coeff": 1.21,
        "matchCoef": 1.02,
        "gamesPlayed": 36,
        "rankIndex": 2,
        "det": {
          "g": 36,
          "time": 17996,
          "wr": 60.27777777777778,
          "el10": 20.549166666666665,
          "de10": 8.338888888888887,
          "dm10": 8181.166666666667,
          "he10": 759.5833333333334,
          "as10": 1.1075,
          "wa": 30.36111111111111,
          "ca": 8.833333333333334
        }
      },
      "doctrine": {
        "finalScore": 56.82,
        "battleScore": 46.37,
        "coeff": 1.33,
        "matchCoef": 0.92,
        "gamesPlayed": 10,
        "rankIndex": 3,
        "det": {
          "g": 10,
          "time": 4904,
          "wr": 71.1,
          "el10": 12.270999999999999,
          "de10": 4.997,
          "dm10": 4014.8,
          "he10": 9377.9,
          "as10": 15.791,
          "wa": 54.1,
          "ca": 0
        }
      },
      "hazard": {
        "finalScore": 42.75,
        "battleScore": 40.31,
        "coeff": 1.21,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 2,
        "det": {
          "g": 6,
          "time": 2897,
          "wr": 39.666666666666664,
          "el10": 13.771666666666667,
          "de10": 7.238333333333332,
          "dm10": 8170.5,
          "he10": 1478.5,
          "as10": 5.201666666666667,
          "wa": 33,
          "ca": 8.833333333333334
        }
      },
      "junkrat": {
        "finalScore": 42.6,
        "battleScore": 38.62,
        "coeff": 1.21,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 2,
        "det": {
          "g": 9,
          "time": 3874,
          "wr": 53.77777777777778,
          "el10": 13.068888888888889,
          "de10": 6.026666666666667,
          "dm10": 8447.111111111111,
          "he10": 0,
          "as10": 1.7388888888888887,
          "wa": 20.555555555555557,
          "ca": 0
        }
      },
      "mauga": {
        "finalScore": 61.62,
        "battleScore": 47.19,
        "coeff": 1.21,
        "matchCoef": 1.02,
        "gamesPlayed": 36,
        "rankIndex": 2,
        "det": {
          "g": 36,
          "time": 17799,
          "wr": 61.69444444444444,
          "el10": 24.553888888888892,
          "de10": 6.055277777777778,
          "dm10": 11410.138888888889,
          "he10": 1493.6666666666667,
          "as10": 8.020833333333334,
          "wa": 30.916666666666668,
          "ca": 11.027777777777779
        }
      },
      "mizuki": {
        "finalScore": 59.43,
        "battleScore": 42.9,
        "coeff": 1.33,
        "matchCoef": 1.04,
        "gamesPlayed": 40,
        "rankIndex": 3,
        "det": {
          "g": 40,
          "time": 20711,
          "wr": 57.525,
          "el10": 11.46,
          "de10": 6.187,
          "dm10": 4792.375,
          "he10": 9571.1,
          "as10": 10.397749999999998,
          "wa": 34.8,
          "ca": 7.95
        }
      },
      "moira": {
        "finalScore": 70.8,
        "battleScore": 48.71,
        "coeff": 1.33,
        "matchCoef": 1.05,
        "gamesPlayed": 80,
        "rankIndex": 3,
        "det": {
          "g": 80,
          "time": 42258,
          "wr": 62.6125,
          "el10": 18.483249999999998,
          "de10": 5.09775,
          "dm10": 6540.375,
          "he10": 9301.425,
          "as10": 13.285124999999999,
          "wa": 0,
          "ca": 0
        }
      },
      "orisa": {
        "finalScore": 51.46,
        "battleScore": 42.38,
        "coeff": 1.21,
        "matchCoef": 1,
        "gamesPlayed": 26,
        "rankIndex": 2,
        "det": {
          "g": 26,
          "time": 13864,
          "wr": 49.38461538461539,
          "el10": 18.706923076923076,
          "de10": 5.794615384615384,
          "dm10": 10529.23076923077,
          "he10": 32.42769230769231,
          "as10": 3.602307692307692,
          "wa": 32.15384615384615,
          "ca": 10.076923076923077
        }
      },
      "reinhardt": {
        "finalScore": 55.43,
        "battleScore": 41.58,
        "coeff": 1.21,
        "matchCoef": 1.1,
        "gamesPlayed": 81,
        "rankIndex": 2,
        "det": {
          "g": 81,
          "time": 41406,
          "wr": 54.901234567901234,
          "el10": 15.764444444444445,
          "de10": 7.064197530864198,
          "dm10": 9764,
          "he10": 0,
          "as10": 1.517037037037037,
          "wa": 0,
          "ca": 0
        }
      },
      "sigma": {
        "finalScore": 55.75,
        "battleScore": 36.75,
        "coeff": 1.21,
        "matchCoef": 0.99,
        "gamesPlayed": 18,
        "rankIndex": 2,
        "det": {
          "g": 18,
          "time": 8144,
          "wr": 38.72222222222222,
          "el10": 13.28,
          "de10": 4.816666666666666,
          "dm10": 10824.388888888889,
          "he10": 0,
          "as10": 1.123888888888889,
          "wa": 44.27777777777778,
          "ca": 0
        }
      },
      "winston": {
        "finalScore": 43.49,
        "battleScore": 38.69,
        "coeff": 1.21,
        "matchCoef": 0.93,
        "gamesPlayed": 11,
        "rankIndex": 2,
        "det": {
          "g": 11,
          "time": 5267,
          "wr": 34.63636363636363,
          "el10": 15.117272727272727,
          "de10": 6.856363636363636,
          "dm10": 7246.272727272727,
          "he10": 1960,
          "as10": 3.0954545454545452,
          "wa": 56.72727272727273,
          "ca": 0
        }
      },
      "ana": {
        "finalScore": 51.03,
        "battleScore": 37.08,
        "coeff": 1.33,
        "matchCoef": 1.03,
        "gamesPlayed": 37,
        "rankIndex": 3,
        "det": {
          "g": 37,
          "time": 18884,
          "wr": 36,
          "el10": 10.23,
          "de10": 6.35,
          "dm10": 4248,
          "he10": 6642,
          "as10": 11.6,
          "wa": 53,
          "ca": 0
        }
      },
      "ashe": {
        "finalScore": 43.49,
        "battleScore": 39.04,
        "coeff": 1.21,
        "matchCoef": 0.92,
        "gamesPlayed": 10,
        "rankIndex": 2,
        "det": {
          "g": 10,
          "time": 5177,
          "wr": 44,
          "el10": 13.21,
          "de10": 5.91,
          "dm10": 8222,
          "he10": 0,
          "as10": 1.27,
          "wa": 41,
          "ca": 16
        }
      },
      "baptiste": {
        "finalScore": 45.86,
        "battleScore": 40.54,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 3,
        "det": {
          "g": 3,
          "time": 1508,
          "wr": 38,
          "el10": 13.53,
          "de10": 6.37,
          "dm10": 4606,
          "he10": 7458,
          "as10": 10.75,
          "wa": 30,
          "ca": 10
        }
      },
      "bastion": {
        "finalScore": 57.98,
        "battleScore": 39.14,
        "coeff": 1.21,
        "matchCoef": 0.99,
        "gamesPlayed": 19,
        "rankIndex": 2,
        "det": {
          "g": 19,
          "time": 10799,
          "wr": 49,
          "el10": 16.67,
          "de10": 7.39,
          "dm10": 9945,
          "he10": 93.38,
          "as10": 1.78,
          "wa": 25,
          "ca": 3
        }
      },
      "cassidy": {
        "finalScore": 45.2,
        "battleScore": 37.93,
        "coeff": 1.21,
        "matchCoef": 0.98,
        "gamesPlayed": 21,
        "rankIndex": 2,
        "det": {
          "g": 21,
          "time": 10464,
          "wr": 48,
          "el10": 13.25,
          "de10": 8.2,
          "dm10": 7817,
          "he10": 39.64,
          "as10": 1.61,
          "wa": 40,
          "ca": 9
        }
      },
      "dmon": {
        "finalScore": 39.9,
        "battleScore": 38.8,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 2,
        "det": {
          "g": 4,
          "time": 2462,
          "wr": 25,
          "el10": 12.67,
          "de10": 6.34,
          "dm10": 10485,
          "he10": 308,
          "as10": 4.39,
          "wa": 31,
          "ca": 0
        }
      },
      "doomfist": {
        "finalScore": 34.7,
        "battleScore": 33.74,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 2,
        "det": {
          "g": 1,
          "time": 581,
          "wr": 0,
          "el10": 8.26,
          "de10": 11.36,
          "dm10": 5923,
          "he10": 1811,
          "as10": 1.03,
          "wa": 28,
          "ca": 8
        }
      },
      "dva": {
        "finalScore": 46.03,
        "battleScore": 42.21,
        "coeff": 1.21,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 2,
        "det": {
          "g": 8,
          "time": 3801,
          "wr": 41,
          "el10": 16.73,
          "de10": 5.21,
          "dm10": 8599,
          "he10": 1643,
          "as10": 6.79,
          "wa": 25,
          "ca": 6
        }
      },
      "echo": {
        "finalScore": 38.25,
        "battleScore": 37.19,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 2,
        "det": {
          "g": 4,
          "time": 2013,
          "wr": 51,
          "el10": 12.52,
          "de10": 8.64,
          "dm10": 8694,
          "he10": 59.79,
          "as10": 0,
          "wa": 28,
          "ca": 6
        },
        "rankDelta": 1
      },
      "emre": {
        "finalScore": 36.75,
        "battleScore": 35.74,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 2,
        "det": {
          "g": 2,
          "time": 1131,
          "wr": 56,
          "el10": 13.79,
          "de10": 9.02,
          "dm10": 6273,
          "he10": 388,
          "as10": 0,
          "wa": 36,
          "ca": 7
        }
      },
      "freja": {
        "finalScore": 46.49,
        "battleScore": 40.73,
        "coeff": 1.21,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 2,
        "det": {
          "g": 13,
          "time": 6184,
          "wr": 37,
          "el10": 13.2,
          "de10": 5.72,
          "dm10": 8811,
          "he10": 211,
          "as10": 0.58,
          "wa": 25,
          "ca": 15
        }
      },
      "hanzo": {
        "finalScore": 36.96,
        "battleScore": 35.93,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 2,
        "det": {
          "g": 1,
          "time": 616,
          "wr": 72,
          "el10": 6.81,
          "de10": 4.87,
          "dm10": 6458,
          "he10": 0,
          "as10": 1.95,
          "wa": 24,
          "ca": 7
        }
      },
      "illari": {
        "finalScore": 37.05,
        "battleScore": 32.34,
        "coeff": 1.33,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 3,
        "det": {
          "g": 5,
          "time": 2950,
          "wr": 28,
          "el10": 6.1,
          "de10": 7.12,
          "dm10": 3065,
          "he10": 6497,
          "as10": 7.52,
          "wa": 33,
          "ca": 9
        }
      },
      "jetpack-cat": {
        "finalScore": 48.44,
        "battleScore": 42.81,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 3,
        "det": {
          "g": 3,
          "time": 1383,
          "wr": 71,
          "el10": 7.81,
          "de10": 3.47,
          "dm10": 2610,
          "he10": 7791,
          "as10": 13.02,
          "wa": 28,
          "ca": 8
        }
      },
      "juno": {
        "finalScore": 36.79,
        "battleScore": 32.11,
        "coeff": 1.33,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 3,
        "det": {
          "g": 5,
          "time": 2389,
          "wr": 1,
          "el10": 9.04,
          "de10": 7.79,
          "dm10": 4563,
          "he10": 5732,
          "as10": 9.8,
          "wa": 39,
          "ca": 7
        }
      },
      "kiriko": {
        "finalScore": 53.47,
        "battleScore": 37.2,
        "coeff": 1.33,
        "matchCoef": 1.08,
        "gamesPlayed": 63,
        "rankIndex": 3,
        "det": {
          "g": 63,
          "time": 32155,
          "wr": 37,
          "el10": 6.75,
          "de10": 6.27,
          "dm10": 2890,
          "he10": 9499,
          "as10": 16.85,
          "wa": 28,
          "ca": 14
        }
      },
      "lifeweaver": {
        "finalScore": 58.13,
        "battleScore": 43.12,
        "coeff": 1.33,
        "matchCoef": 1.01,
        "gamesPlayed": 29,
        "rankIndex": 3,
        "det": {
          "g": 29,
          "time": 14418,
          "wr": 60,
          "el10": 9.53,
          "de10": 4.37,
          "dm10": 2816,
          "he10": 8888,
          "as10": 12.94,
          "wa": 28,
          "ca": 8
        }
      },
      "mercy": {
        "finalScore": 38.69,
        "battleScore": 34.2,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 513,
          "wr": 63,
          "el10": 1.17,
          "de10": 8.18,
          "dm10": 319,
          "he10": 7059,
          "as10": 16.36,
          "wa": 0,
          "ca": 0
        }
      },
      "pharah": {
        "finalScore": 40.96,
        "battleScore": 38.05,
        "coeff": 1.21,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 2,
        "det": {
          "g": 7,
          "time": 3405,
          "wr": 62,
          "el10": 14.45,
          "de10": 7.4,
          "dm10": 9168,
          "he10": 0,
          "as10": 2.82,
          "wa": 39,
          "ca": 0
        }
      },
      "ramattra": {
        "finalScore": 56.61,
        "battleScore": 46.32,
        "coeff": 1.21,
        "matchCoef": 0.96,
        "gamesPlayed": 10,
        "rankIndex": 2,
        "det": {
          "g": 10,
          "time": 4948,
          "wr": 53,
          "el10": 21.46,
          "de10": 6.79,
          "dm10": 10131,
          "he10": 952,
          "as10": 1.94,
          "wa": 27,
          "ca": 10
        }
      },
      "reaper": {
        "finalScore": 57.32,
        "battleScore": 38.92,
        "coeff": 1.21,
        "matchCoef": 0.94,
        "gamesPlayed": 6,
        "rankIndex": 2,
        "det": {
          "g": 6,
          "time": 2794,
          "wr": 49,
          "el10": 14.6,
          "de10": 8.8,
          "dm10": 5376,
          "he10": 999,
          "as10": 0,
          "wa": 32,
          "ca": 12
        }
      },
      "roadhog": {
        "finalScore": 53.18,
        "battleScore": 44.82,
        "coeff": 1.21,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 2,
        "det": {
          "g": 20,
          "time": 9837,
          "wr": 48,
          "el10": 16.71,
          "de10": 4.94,
          "dm10": 7538,
          "he10": 6406,
          "as10": 3.84,
          "wa": 27,
          "ca": 16
        }
      },
      "shion": {
        "finalScore": 44.58,
        "battleScore": 38.33,
        "coeff": 1.21,
        "matchCoef": 0.96,
        "gamesPlayed": 16,
        "rankIndex": 2,
        "det": {
          "g": 16,
          "time": 8337,
          "wr": 41,
          "el10": 15.69,
          "de10": 8.49,
          "dm10": 8272,
          "he10": 125,
          "as10": 1.66,
          "wa": 30,
          "ca": 10
        }
      },
      "sierra": {
        "finalScore": 45.62,
        "battleScore": 37.12,
        "coeff": 1.21,
        "matchCoef": 1.02,
        "gamesPlayed": 30,
        "rankIndex": 2,
        "det": {
          "g": 30,
          "time": 14850,
          "wr": 51,
          "el10": 16.53,
          "de10": 7.31,
          "dm10": 9082,
          "he10": 0,
          "as10": 0.61,
          "wa": 25,
          "ca": 9
        },
        "rankDelta": -1
      },
      "sojourn": {
        "finalScore": 40.51,
        "battleScore": 37.62,
        "coeff": 1.21,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 2,
        "det": {
          "g": 7,
          "time": 3353,
          "wr": 42,
          "el10": 15.57,
          "de10": 7.34,
          "dm10": 8562,
          "he10": 0,
          "as10": 0,
          "wa": 30,
          "ca": 9
        }
      },
      "soldier-76": {
        "finalScore": 46.16,
        "battleScore": 42.87,
        "coeff": 1.21,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 2,
        "det": {
          "g": 7,
          "time": 3349,
          "wr": 55,
          "el10": 15.95,
          "de10": 7.88,
          "dm10": 8849,
          "he10": 1183,
          "as10": 2.15,
          "wa": 35,
          "ca": 8
        }
      },
      "sombra": {
        "finalScore": 47.92,
        "battleScore": 41.08,
        "coeff": 1.33,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 3,
        "det": {
          "g": 6,
          "time": 3842,
          "wr": 23,
          "el10": 16.24,
          "de10": 5.78,
          "dm10": 4441,
          "he10": 7140,
          "as10": 16.71,
          "wa": 29,
          "ca": 7
        }
      },
      "symmetra": {
        "finalScore": 47.76,
        "battleScore": 46.44,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 2,
        "det": {
          "g": 3,
          "time": 1210,
          "wr": 84,
          "el10": 16.37,
          "de10": 6.45,
          "dm10": 7050,
          "he10": 522,
          "as10": 5.46,
          "wa": 34,
          "ca": 0
        }
      },
      "torbjorn": {
        "finalScore": 38.37,
        "battleScore": 37.31,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 2,
        "det": {
          "g": 4,
          "time": 2002,
          "wr": 37,
          "el10": 13.18,
          "de10": 7.19,
          "dm10": 8117,
          "he10": 0,
          "as10": 0.6,
          "wa": 25,
          "ca": 8
        }
      },
      "tracer": {
        "finalScore": 33.84,
        "battleScore": 32.9,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 2,
        "det": {
          "g": 1,
          "time": 259,
          "wr": 0,
          "el10": 6.95,
          "de10": 6.95,
          "dm10": 3529,
          "he10": 0,
          "as10": 0,
          "wa": 33,
          "ca": 7
        }
      },
      "vendetta": {
        "finalScore": 49.43,
        "battleScore": 41.31,
        "coeff": 1.21,
        "matchCoef": 0.99,
        "gamesPlayed": 22,
        "rankIndex": 2,
        "det": {
          "g": 22,
          "time": 11745,
          "wr": 55,
          "el10": 16.5,
          "de10": 8.63,
          "dm10": 8292,
          "he10": 293,
          "as10": 1.74,
          "wa": 0,
          "ca": 0
        }
      },
      "widowmaker": {
        "finalScore": 48.11,
        "battleScore": 43.61,
        "coeff": 1.21,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 2,
        "det": {
          "g": 9,
          "time": 4481,
          "wr": 64,
          "el10": 14.33,
          "de10": 6.03,
          "dm10": 6947,
          "he10": 0,
          "as10": 2.81,
          "wa": 38,
          "ca": 12
        }
      },
      "wuyang": {
        "finalScore": 48.5,
        "battleScore": 41.57,
        "coeff": 1.33,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 3,
        "det": {
          "g": 6,
          "time": 3148,
          "wr": 63,
          "el10": 13.15,
          "de10": 6.1,
          "dm10": 4816,
          "he10": 7268,
          "as10": 15.82,
          "wa": 25,
          "ca": 0
        }
      },
      "zarya": {
        "finalScore": 52.21,
        "battleScore": 39.04,
        "coeff": 1.21,
        "matchCoef": 0.98,
        "gamesPlayed": 17,
        "rankIndex": 2,
        "det": {
          "g": 17,
          "time": 7125,
          "wr": 39,
          "el10": 18.1,
          "de10": 5.89,
          "dm10": 10918,
          "he10": 0,
          "as10": 1.35,
          "wa": 40,
          "ca": 0
        }
      },
      "zenyatta": {
        "finalScore": 40.81,
        "battleScore": 34.99,
        "coeff": 1.33,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 3,
        "det": {
          "g": 6,
          "time": 3016,
          "wr": 29,
          "el10": 9.75,
          "de10": 8.36,
          "dm10": 5112,
          "he10": 6891,
          "as10": 15.32,
          "wa": 22,
          "ca": 11
        }
      }
    },
    "bscoreAll": {
      "anran": {
        "finalScore": 61.86,
        "battleScore": 47.08,
        "coeff": 1.21,
        "matchCoef": 1.02,
        "gamesPlayed": 36,
        "rankIndex": 2,
        "det": {
          "g": 36,
          "time": 17996,
          "wr": 60.27777777777778,
          "el10": 20.549166666666665,
          "de10": 8.338888888888887,
          "dm10": 8181.166666666667,
          "he10": 759.5833333333334,
          "as10": 1.1075,
          "wa": 30.36111111111111,
          "ca": 8.833333333333334
        }
      },
      "doctrine": {
        "finalScore": 56.82,
        "battleScore": 46.37,
        "coeff": 1.33,
        "matchCoef": 0.92,
        "gamesPlayed": 10,
        "rankIndex": 3,
        "det": {
          "g": 10,
          "time": 4904,
          "wr": 71.1,
          "el10": 12.270999999999999,
          "de10": 4.997,
          "dm10": 4014.8,
          "he10": 9377.9,
          "as10": 15.791,
          "wa": 54.1,
          "ca": 0
        }
      },
      "hazard": {
        "finalScore": 42.75,
        "battleScore": 40.31,
        "coeff": 1.21,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 2,
        "det": {
          "g": 6,
          "time": 2897,
          "wr": 39.666666666666664,
          "el10": 13.771666666666667,
          "de10": 7.238333333333332,
          "dm10": 8170.5,
          "he10": 1478.5,
          "as10": 5.201666666666667,
          "wa": 33,
          "ca": 8.833333333333334
        }
      },
      "junkrat": {
        "finalScore": 42.6,
        "battleScore": 38.62,
        "coeff": 1.21,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 2,
        "det": {
          "g": 9,
          "time": 3874,
          "wr": 53.77777777777778,
          "el10": 13.068888888888889,
          "de10": 6.026666666666667,
          "dm10": 8447.111111111111,
          "he10": 0,
          "as10": 1.7388888888888887,
          "wa": 20.555555555555557,
          "ca": 0
        }
      },
      "mauga": {
        "finalScore": 61.62,
        "battleScore": 47.19,
        "coeff": 1.21,
        "matchCoef": 1.02,
        "gamesPlayed": 36,
        "rankIndex": 2,
        "det": {
          "g": 36,
          "time": 17799,
          "wr": 61.69444444444444,
          "el10": 24.553888888888892,
          "de10": 6.055277777777778,
          "dm10": 11410.138888888889,
          "he10": 1493.6666666666667,
          "as10": 8.020833333333334,
          "wa": 30.916666666666668,
          "ca": 11.027777777777779
        }
      },
      "mizuki": {
        "finalScore": 59.43,
        "battleScore": 42.9,
        "coeff": 1.33,
        "matchCoef": 1.04,
        "gamesPlayed": 40,
        "rankIndex": 3,
        "det": {
          "g": 40,
          "time": 20711,
          "wr": 57.525,
          "el10": 11.46,
          "de10": 6.187,
          "dm10": 4792.375,
          "he10": 9571.1,
          "as10": 10.397749999999998,
          "wa": 34.8,
          "ca": 7.95
        }
      },
      "moira": {
        "finalScore": 70.8,
        "battleScore": 48.71,
        "coeff": 1.33,
        "matchCoef": 1.05,
        "gamesPlayed": 80,
        "rankIndex": 3,
        "det": {
          "g": 80,
          "time": 42258,
          "wr": 62.6125,
          "el10": 18.483249999999998,
          "de10": 5.09775,
          "dm10": 6540.375,
          "he10": 9301.425,
          "as10": 13.285124999999999,
          "wa": 0,
          "ca": 0
        }
      },
      "orisa": {
        "finalScore": 51.46,
        "battleScore": 42.38,
        "coeff": 1.21,
        "matchCoef": 1,
        "gamesPlayed": 26,
        "rankIndex": 2,
        "det": {
          "g": 26,
          "time": 13864,
          "wr": 49.38461538461539,
          "el10": 18.706923076923076,
          "de10": 5.794615384615384,
          "dm10": 10529.23076923077,
          "he10": 32.42769230769231,
          "as10": 3.602307692307692,
          "wa": 32.15384615384615,
          "ca": 10.076923076923077
        }
      },
      "reinhardt": {
        "finalScore": 55.43,
        "battleScore": 41.58,
        "coeff": 1.21,
        "matchCoef": 1.1,
        "gamesPlayed": 81,
        "rankIndex": 2,
        "det": {
          "g": 81,
          "time": 41406,
          "wr": 54.901234567901234,
          "el10": 15.764444444444445,
          "de10": 7.064197530864198,
          "dm10": 9764,
          "he10": 0,
          "as10": 1.517037037037037,
          "wa": 0,
          "ca": 0
        }
      },
      "sigma": {
        "finalScore": 55.75,
        "battleScore": 36.75,
        "coeff": 1.21,
        "matchCoef": 0.99,
        "gamesPlayed": 18,
        "rankIndex": 2,
        "det": {
          "g": 18,
          "time": 8144,
          "wr": 38.72222222222222,
          "el10": 13.28,
          "de10": 4.816666666666666,
          "dm10": 10824.388888888889,
          "he10": 0,
          "as10": 1.123888888888889,
          "wa": 44.27777777777778,
          "ca": 0
        }
      },
      "winston": {
        "finalScore": 43.49,
        "battleScore": 38.69,
        "coeff": 1.21,
        "matchCoef": 0.93,
        "gamesPlayed": 11,
        "rankIndex": 2,
        "det": {
          "g": 11,
          "time": 5267,
          "wr": 34.63636363636363,
          "el10": 15.117272727272727,
          "de10": 6.856363636363636,
          "dm10": 7246.272727272727,
          "he10": 1960,
          "as10": 3.0954545454545452,
          "wa": 56.72727272727273,
          "ca": 0
        }
      },
      "ana": {
        "finalScore": 51.03,
        "battleScore": 37.08,
        "coeff": 1.33,
        "matchCoef": 1.03,
        "gamesPlayed": 37,
        "rankIndex": 3,
        "det": {
          "g": 37,
          "time": 18884,
          "wr": 36,
          "el10": 10.23,
          "de10": 6.35,
          "dm10": 4248,
          "he10": 6642,
          "as10": 11.6,
          "wa": 53,
          "ca": 0
        }
      },
      "ashe": {
        "finalScore": 43.49,
        "battleScore": 39.04,
        "coeff": 1.21,
        "matchCoef": 0.92,
        "gamesPlayed": 10,
        "rankIndex": 2,
        "det": {
          "g": 10,
          "time": 5177,
          "wr": 44,
          "el10": 13.21,
          "de10": 5.91,
          "dm10": 8222,
          "he10": 0,
          "as10": 1.27,
          "wa": 41,
          "ca": 16
        }
      },
      "baptiste": {
        "finalScore": 45.86,
        "battleScore": 40.54,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 3,
        "det": {
          "g": 3,
          "time": 1508,
          "wr": 38,
          "el10": 13.53,
          "de10": 6.37,
          "dm10": 4606,
          "he10": 7458,
          "as10": 10.75,
          "wa": 30,
          "ca": 10
        }
      },
      "bastion": {
        "finalScore": 57.98,
        "battleScore": 39.14,
        "coeff": 1.21,
        "matchCoef": 0.99,
        "gamesPlayed": 19,
        "rankIndex": 2,
        "det": {
          "g": 19,
          "time": 10799,
          "wr": 49,
          "el10": 16.67,
          "de10": 7.39,
          "dm10": 9945,
          "he10": 93.38,
          "as10": 1.78,
          "wa": 25,
          "ca": 3
        }
      },
      "cassidy": {
        "finalScore": 45.2,
        "battleScore": 37.93,
        "coeff": 1.21,
        "matchCoef": 0.98,
        "gamesPlayed": 21,
        "rankIndex": 2,
        "det": {
          "g": 21,
          "time": 10464,
          "wr": 48,
          "el10": 13.25,
          "de10": 8.2,
          "dm10": 7817,
          "he10": 39.64,
          "as10": 1.61,
          "wa": 40,
          "ca": 9
        }
      },
      "dmon": {
        "finalScore": 39.9,
        "battleScore": 38.8,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 2,
        "det": {
          "g": 4,
          "time": 2462,
          "wr": 25,
          "el10": 12.67,
          "de10": 6.34,
          "dm10": 10485,
          "he10": 308,
          "as10": 4.39,
          "wa": 31,
          "ca": 0
        }
      },
      "doomfist": {
        "finalScore": 34.7,
        "battleScore": 33.74,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 2,
        "det": {
          "g": 1,
          "time": 581,
          "wr": 0,
          "el10": 8.26,
          "de10": 11.36,
          "dm10": 5923,
          "he10": 1811,
          "as10": 1.03,
          "wa": 28,
          "ca": 8
        }
      },
      "dva": {
        "finalScore": 46.03,
        "battleScore": 42.21,
        "coeff": 1.21,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 2,
        "det": {
          "g": 8,
          "time": 3801,
          "wr": 41,
          "el10": 16.73,
          "de10": 5.21,
          "dm10": 8599,
          "he10": 1643,
          "as10": 6.79,
          "wa": 25,
          "ca": 6
        }
      },
      "echo": {
        "finalScore": 38.25,
        "battleScore": 37.19,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 2,
        "det": {
          "g": 4,
          "time": 2013,
          "wr": 51,
          "el10": 12.52,
          "de10": 8.64,
          "dm10": 8694,
          "he10": 59.79,
          "as10": 0,
          "wa": 28,
          "ca": 6
        },
        "rankDelta": 1
      },
      "emre": {
        "finalScore": 36.75,
        "battleScore": 35.74,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 2,
        "det": {
          "g": 2,
          "time": 1131,
          "wr": 56,
          "el10": 13.79,
          "de10": 9.02,
          "dm10": 6273,
          "he10": 388,
          "as10": 0,
          "wa": 36,
          "ca": 7
        }
      },
      "freja": {
        "finalScore": 46.49,
        "battleScore": 40.73,
        "coeff": 1.21,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 2,
        "det": {
          "g": 13,
          "time": 6184,
          "wr": 37,
          "el10": 13.2,
          "de10": 5.72,
          "dm10": 8811,
          "he10": 211,
          "as10": 0.58,
          "wa": 25,
          "ca": 15
        }
      },
      "hanzo": {
        "finalScore": 36.96,
        "battleScore": 35.93,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 2,
        "det": {
          "g": 1,
          "time": 616,
          "wr": 72,
          "el10": 6.81,
          "de10": 4.87,
          "dm10": 6458,
          "he10": 0,
          "as10": 1.95,
          "wa": 24,
          "ca": 7
        }
      },
      "illari": {
        "finalScore": 37.05,
        "battleScore": 32.34,
        "coeff": 1.33,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 3,
        "det": {
          "g": 5,
          "time": 2950,
          "wr": 28,
          "el10": 6.1,
          "de10": 7.12,
          "dm10": 3065,
          "he10": 6497,
          "as10": 7.52,
          "wa": 33,
          "ca": 9
        }
      },
      "jetpack-cat": {
        "finalScore": 48.44,
        "battleScore": 42.81,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 3,
        "det": {
          "g": 3,
          "time": 1383,
          "wr": 71,
          "el10": 7.81,
          "de10": 3.47,
          "dm10": 2610,
          "he10": 7791,
          "as10": 13.02,
          "wa": 28,
          "ca": 8
        }
      },
      "juno": {
        "finalScore": 36.79,
        "battleScore": 32.11,
        "coeff": 1.33,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 3,
        "det": {
          "g": 5,
          "time": 2389,
          "wr": 1,
          "el10": 9.04,
          "de10": 7.79,
          "dm10": 4563,
          "he10": 5732,
          "as10": 9.8,
          "wa": 39,
          "ca": 7
        }
      },
      "kiriko": {
        "finalScore": 53.47,
        "battleScore": 37.2,
        "coeff": 1.33,
        "matchCoef": 1.08,
        "gamesPlayed": 63,
        "rankIndex": 3,
        "det": {
          "g": 63,
          "time": 32155,
          "wr": 37,
          "el10": 6.75,
          "de10": 6.27,
          "dm10": 2890,
          "he10": 9499,
          "as10": 16.85,
          "wa": 28,
          "ca": 14
        }
      },
      "lifeweaver": {
        "finalScore": 58.13,
        "battleScore": 43.12,
        "coeff": 1.33,
        "matchCoef": 1.01,
        "gamesPlayed": 29,
        "rankIndex": 3,
        "det": {
          "g": 29,
          "time": 14418,
          "wr": 60,
          "el10": 9.53,
          "de10": 4.37,
          "dm10": 2816,
          "he10": 8888,
          "as10": 12.94,
          "wa": 28,
          "ca": 8
        }
      },
      "mercy": {
        "finalScore": 38.69,
        "battleScore": 34.2,
        "coeff": 1.33,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 3,
        "det": {
          "g": 2,
          "time": 513,
          "wr": 63,
          "el10": 1.17,
          "de10": 8.18,
          "dm10": 319,
          "he10": 7059,
          "as10": 16.36,
          "wa": 0,
          "ca": 0
        }
      },
      "pharah": {
        "finalScore": 40.96,
        "battleScore": 38.05,
        "coeff": 1.21,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 2,
        "det": {
          "g": 7,
          "time": 3405,
          "wr": 62,
          "el10": 14.45,
          "de10": 7.4,
          "dm10": 9168,
          "he10": 0,
          "as10": 2.82,
          "wa": 39,
          "ca": 0
        }
      },
      "ramattra": {
        "finalScore": 56.61,
        "battleScore": 46.32,
        "coeff": 1.21,
        "matchCoef": 0.96,
        "gamesPlayed": 10,
        "rankIndex": 2,
        "det": {
          "g": 10,
          "time": 4948,
          "wr": 53,
          "el10": 21.46,
          "de10": 6.79,
          "dm10": 10131,
          "he10": 952,
          "as10": 1.94,
          "wa": 27,
          "ca": 10
        }
      },
      "reaper": {
        "finalScore": 57.32,
        "battleScore": 38.92,
        "coeff": 1.21,
        "matchCoef": 0.94,
        "gamesPlayed": 6,
        "rankIndex": 2,
        "det": {
          "g": 6,
          "time": 2794,
          "wr": 49,
          "el10": 14.6,
          "de10": 8.8,
          "dm10": 5376,
          "he10": 999,
          "as10": 0,
          "wa": 32,
          "ca": 12
        }
      },
      "roadhog": {
        "finalScore": 53.18,
        "battleScore": 44.82,
        "coeff": 1.21,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 2,
        "det": {
          "g": 20,
          "time": 9837,
          "wr": 48,
          "el10": 16.71,
          "de10": 4.94,
          "dm10": 7538,
          "he10": 6406,
          "as10": 3.84,
          "wa": 27,
          "ca": 16
        }
      },
      "shion": {
        "finalScore": 44.58,
        "battleScore": 38.33,
        "coeff": 1.21,
        "matchCoef": 0.96,
        "gamesPlayed": 16,
        "rankIndex": 2,
        "det": {
          "g": 16,
          "time": 8337,
          "wr": 41,
          "el10": 15.69,
          "de10": 8.49,
          "dm10": 8272,
          "he10": 125,
          "as10": 1.66,
          "wa": 30,
          "ca": 10
        }
      },
      "sierra": {
        "finalScore": 45.62,
        "battleScore": 37.12,
        "coeff": 1.21,
        "matchCoef": 1.02,
        "gamesPlayed": 30,
        "rankIndex": 2,
        "det": {
          "g": 30,
          "time": 14850,
          "wr": 51,
          "el10": 16.53,
          "de10": 7.31,
          "dm10": 9082,
          "he10": 0,
          "as10": 0.61,
          "wa": 25,
          "ca": 9
        },
        "rankDelta": -1
      },
      "sojourn": {
        "finalScore": 40.51,
        "battleScore": 37.62,
        "coeff": 1.21,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 2,
        "det": {
          "g": 7,
          "time": 3353,
          "wr": 42,
          "el10": 15.57,
          "de10": 7.34,
          "dm10": 8562,
          "he10": 0,
          "as10": 0,
          "wa": 30,
          "ca": 9
        }
      },
      "soldier-76": {
        "finalScore": 46.16,
        "battleScore": 42.87,
        "coeff": 1.21,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 2,
        "det": {
          "g": 7,
          "time": 3349,
          "wr": 55,
          "el10": 15.95,
          "de10": 7.88,
          "dm10": 8849,
          "he10": 1183,
          "as10": 2.15,
          "wa": 35,
          "ca": 8
        }
      },
      "sombra": {
        "finalScore": 47.92,
        "battleScore": 41.08,
        "coeff": 1.33,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 3,
        "det": {
          "g": 6,
          "time": 3842,
          "wr": 23,
          "el10": 16.24,
          "de10": 5.78,
          "dm10": 4441,
          "he10": 7140,
          "as10": 16.71,
          "wa": 29,
          "ca": 7
        }
      },
      "symmetra": {
        "finalScore": 47.76,
        "battleScore": 46.44,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 2,
        "det": {
          "g": 3,
          "time": 1210,
          "wr": 84,
          "el10": 16.37,
          "de10": 6.45,
          "dm10": 7050,
          "he10": 522,
          "as10": 5.46,
          "wa": 34,
          "ca": 0
        }
      },
      "torbjorn": {
        "finalScore": 38.37,
        "battleScore": 37.31,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 2,
        "det": {
          "g": 4,
          "time": 2002,
          "wr": 37,
          "el10": 13.18,
          "de10": 7.19,
          "dm10": 8117,
          "he10": 0,
          "as10": 0.6,
          "wa": 25,
          "ca": 8
        }
      },
      "tracer": {
        "finalScore": 33.84,
        "battleScore": 32.9,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 2,
        "det": {
          "g": 1,
          "time": 259,
          "wr": 0,
          "el10": 6.95,
          "de10": 6.95,
          "dm10": 3529,
          "he10": 0,
          "as10": 0,
          "wa": 33,
          "ca": 7
        }
      },
      "vendetta": {
        "finalScore": 49.43,
        "battleScore": 41.31,
        "coeff": 1.21,
        "matchCoef": 0.99,
        "gamesPlayed": 22,
        "rankIndex": 2,
        "det": {
          "g": 22,
          "time": 11745,
          "wr": 55,
          "el10": 16.5,
          "de10": 8.63,
          "dm10": 8292,
          "he10": 293,
          "as10": 1.74,
          "wa": 0,
          "ca": 0
        }
      },
      "widowmaker": {
        "finalScore": 48.11,
        "battleScore": 43.61,
        "coeff": 1.21,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 2,
        "det": {
          "g": 9,
          "time": 4481,
          "wr": 64,
          "el10": 14.33,
          "de10": 6.03,
          "dm10": 6947,
          "he10": 0,
          "as10": 2.81,
          "wa": 38,
          "ca": 12
        }
      },
      "wuyang": {
        "finalScore": 48.5,
        "battleScore": 41.57,
        "coeff": 1.33,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 3,
        "det": {
          "g": 6,
          "time": 3148,
          "wr": 63,
          "el10": 13.15,
          "de10": 6.1,
          "dm10": 4816,
          "he10": 7268,
          "as10": 15.82,
          "wa": 25,
          "ca": 0
        }
      },
      "zarya": {
        "finalScore": 52.21,
        "battleScore": 39.04,
        "coeff": 1.21,
        "matchCoef": 0.98,
        "gamesPlayed": 17,
        "rankIndex": 2,
        "det": {
          "g": 17,
          "time": 7125,
          "wr": 39,
          "el10": 18.1,
          "de10": 5.89,
          "dm10": 10918,
          "he10": 0,
          "as10": 1.35,
          "wa": 40,
          "ca": 0
        }
      },
      "zenyatta": {
        "finalScore": 40.81,
        "battleScore": 34.99,
        "coeff": 1.33,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 3,
        "det": {
          "g": 6,
          "time": 3016,
          "wr": 29,
          "el10": 9.75,
          "de10": 8.36,
          "dm10": 5112,
          "he10": 6891,
          "as10": 15.32,
          "wa": 22,
          "ca": 11
        }
      }
    },
    "recent": [
      {
        "d": "2026-09-17",
        "g": {},
        "m": 645,
        "w": 331,
        "l": 314,
        "t": 350283,
        "k": 2.57,
        "r": {
          "Tank": "gold-1",
          "Damage": "gold-2",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-09-18",
        "g": {},
        "m": 655,
        "w": 338,
        "l": 317,
        "t": 354883,
        "k": 2.57,
        "r": {
          "Tank": "gold-1",
          "Damage": "gold-2",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-09-19",
        "g": {},
        "m": 659,
        "w": 342,
        "l": 317,
        "t": 357297,
        "k": 2.57,
        "r": {
          "Tank": "gold-1",
          "Damage": "gold-2",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-09-20",
        "g": {
          "ana": 4,
          "anran": 2,
          "ashe": 1,
          "freja": 1,
          "kiriko": 1,
          "mauga": 3,
          "mizuki": 2,
          "moira": 4,
          "reinhardt": 29,
          "roadhog": 2,
          "shion": 1,
          "sigma": 1,
          "soldier-76": 2,
          "winston": 3,
          "hanzo": 1,
          "jetpack-cat": 1,
          "lifeweaver": 1,
          "widowmaker": 2
        },
        "m": 676,
        "w": 356,
        "l": 320,
        "t": 365230,
        "k": 2.57,
        "r": {
          "Tank": "gold-1",
          "Damage": "gold-2",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-09-21",
        "g": {
          "ana": 3,
          "anran": 2,
          "bastion": 1,
          "mauga": 1,
          "orisa": 1,
          "reinhardt": 5,
          "roadhog": 1,
          "shion": 1,
          "sigma": 1,
          "torbjorn": 1,
          "dva": 1,
          "illari": 1,
          "lifeweaver": 1
        },
        "m": 696,
        "w": 364,
        "l": 332,
        "t": 375452,
        "k": 2.57,
        "r": {
          "Tank": "gold-1",
          "Damage": "gold-2",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-09-22",
        "g": {},
        "m": 696,
        "w": 364,
        "l": 332,
        "t": 375452,
        "k": 2.57,
        "r": {
          "Tank": "gold-1",
          "Damage": "gold-2",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-09-23",
        "g": {
          "anran": 2,
          "freja": 1,
          "mizuki": 1,
          "moira": 2,
          "reinhardt": 1,
          "lifeweaver": 1
        },
        "m": 704,
        "w": 367,
        "l": 337,
        "t": 379859,
        "k": 2.57,
        "r": {
          "Tank": "gold-1",
          "Damage": "gold-2",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-09-24",
        "g": {
          "anran": 2,
          "cassidy": 2,
          "mauga": 1,
          "orisa": 1,
          "reinhardt": 1
        },
        "m": 733,
        "w": 382,
        "l": 351,
        "t": 395857,
        "k": 2.56,
        "r": {
          "Tank": "gold-1",
          "Damage": "gold-2",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-09-25",
        "g": {
          "ana": 1,
          "anran": 3,
          "bastion": 1,
          "cassidy": 1,
          "freja": 1,
          "orisa": 1,
          "reinhardt": 3,
          "soldier-76": 1,
          "lifeweaver": 2
        },
        "m": 747,
        "w": 390,
        "l": 357,
        "t": 404799,
        "k": 2.56,
        "r": {
          "Tank": "gold-1",
          "Damage": "gold-1",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-09-26",
        "g": {
          "ana": 3,
          "anran": 1,
          "mauga": 1,
          "moira": 3,
          "reinhardt": 5
        },
        "m": 760,
        "w": 397,
        "l": 363,
        "t": 413023,
        "k": 2.57,
        "r": {
          "Tank": "gold-1",
          "Damage": "gold-1",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-09-27",
        "g": {
          "anran": 3,
          "dva": 2,
          "mauga": 1,
          "orisa": 1,
          "reinhardt": 4,
          "roadhog": 1,
          "sigma": 2,
          "winston": 2,
          "lifeweaver": 1
        },
        "m": 777,
        "w": 408,
        "l": 369,
        "t": 420671,
        "k": 2.59,
        "r": {
          "Tank": "platinum-5",
          "Damage": "gold-1",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-09-28",
        "g": {
          "ana": 1,
          "mauga": 1,
          "mizuki": 1,
          "orisa": 2,
          "ramattra": 1,
          "reinhardt": 1,
          "roadhog": 2,
          "winston": 1,
          "hazard": 1
        },
        "m": 788,
        "w": 412,
        "l": 376,
        "t": 425734,
        "k": 2.59,
        "r": {
          "Tank": "platinum-5",
          "Damage": "gold-1",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-09-29",
        "g": {},
        "m": 815,
        "w": 426,
        "l": 389,
        "t": 440327,
        "k": 2.6,
        "r": {
          "Tank": "platinum-5",
          "Damage": "gold-1",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-09-30",
        "g": {},
        "m": 838,
        "w": 436,
        "l": 402,
        "t": 451913,
        "k": 2.6,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-10-01",
        "g": {},
        "m": 838,
        "w": 436,
        "l": 402,
        "t": 451913,
        "k": 2.6,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-10-02",
        "g": {},
        "m": 838,
        "w": 436,
        "l": 402,
        "t": 451913,
        "k": 2.6,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-10-03",
        "g": {},
        "m": 838,
        "w": 436,
        "l": 402,
        "t": 451913,
        "k": 2.6,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-10-04",
        "g": {},
        "m": 838,
        "w": 436,
        "l": 402,
        "t": 451913,
        "k": 2.6,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-10-05",
        "g": {},
        "m": 838,
        "w": 436,
        "l": 402,
        "t": 451913,
        "k": 2.6,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-10-06",
        "g": {},
        "m": 853,
        "w": 441,
        "l": 412,
        "t": 460050,
        "k": 2.6,
        "r": {
          "Tank": "gold-1",
          "Damage": "platinum-5",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-10-07",
        "g": {},
        "m": 868,
        "w": 448,
        "l": 420,
        "t": 468654,
        "k": 2.6,
        "r": {
          "Tank": "gold-2",
          "Damage": "gold-1",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-10-08",
        "g": {},
        "m": 883,
        "w": 456,
        "l": 427,
        "t": 476124,
        "k": 2.6,
        "r": {
          "Tank": "gold-2",
          "Damage": "gold-1",
          "Support": "emerald-5"
        }
      },
      {
        "d": "2026-10-09",
        "g": {},
        "m": 675,
        "w": 337,
        "l": 338,
        "t": 337914,
        "k": 2.53,
        "r": {
          "Tank": "gold-2",
          "Damage": "gold-1",
          "Support": "platinum-1"
        }
      },
      {
        "d": "2026-10-10",
        "g": {},
        "m": 687,
        "w": 344,
        "l": 343,
        "t": 345221,
        "k": 2.52,
        "r": {
          "Tank": "gold-2",
          "Damage": "gold-1",
          "Support": "platinum-1"
        }
      },
      {
        "d": "2026-10-11",
        "g": {},
        "m": 702,
        "w": 354,
        "l": 348,
        "t": 353453,
        "k": 2.52,
        "r": {
          "Tank": "gold-2",
          "Damage": "gold-1",
          "Support": "platinum-1"
        }
      },
      {
        "d": "2026-10-12",
        "g": {},
        "m": 721,
        "w": 364,
        "l": 357,
        "t": 363325,
        "k": 2.51,
        "tot": {
          "e": 8968,
          "a": 872,
          "dd": 3926,
          "dm": 5421026,
          "he": 2324688
        },
        "r": {
          "Tank": "gold-3",
          "Damage": "gold-1",
          "Support": "platinum-1"
        }
      },
      {
        "d": "2026-10-13",
        "g": {},
        "m": 721,
        "w": 364,
        "l": 357,
        "t": 363325,
        "k": 2.51,
        "tot": {
          "e": 8968,
          "a": 872,
          "dd": 3926,
          "dm": 5421026,
          "he": 2324688
        },
        "r": {
          "Tank": "gold-3",
          "Damage": "gold-1",
          "Support": "platinum-1"
        }
      },
      {
        "d": "2026-10-14",
        "g": {
          "anran": 1,
          "doctrine": 1,
          "hazard": 1,
          "mizuki": 2,
          "moira": 1,
          "orisa": 3,
          "reinhardt": 5,
          "winston": 2,
          "ana": 4,
          "cassidy": 1,
          "doomfist": 1,
          "echo": 1,
          "juno": 1,
          "lifeweaver": 1,
          "vendetta": 1
        },
        "m": 747,
        "w": 381,
        "l": 366,
        "t": 377763,
        "k": 2.52,
        "tot": {
          "e": 9346,
          "a": 938,
          "dd": 4083,
          "dm": 5636636,
          "he": 2405571
        },
        "r": {
          "Tank": "gold-2",
          "Damage": "gold-1",
          "Support": "platinum-1"
        }
      },
      {
        "d": "2026-10-15",
        "g": {},
        "m": 747,
        "w": 381,
        "l": 366,
        "t": 377763,
        "k": 2.52,
        "tot": {
          "e": 9346,
          "a": 938,
          "dd": 4083,
          "dm": 5636636,
          "he": 2405571
        },
        "r": {
          "Tank": "gold-2",
          "Damage": "gold-1",
          "Support": "platinum-1"
        }
      },
      {
        "d": "2026-10-16",
        "g": {
          "orisa": 1,
          "ana": 1,
          "dva": 1,
          "sierra": 1,
          "sombra": 5,
          "vendetta": 4
        },
        "m": 760,
        "w": 383,
        "l": 377,
        "t": 385557,
        "k": 2.53,
        "tot": {
          "e": 9551,
          "a": 986,
          "dd": 4163,
          "dm": 5748637,
          "he": 2461389
        },
        "r": {
          "Tank": "gold-2",
          "Damage": "gold-1",
          "Support": "platinum-1"
        }
      }
    ]
  },
  {
    "id": "makky",
    "pid": "df5fa781aa3cc8fcb0a42e|7151d64f9225de961a555336eb49b484",
    "name": "Makky",
    "tag": "",
    "endorse": 3,
    "title": ":3",
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5cc956f794f39ff8227634c56e1842f0df590bb5ed88a64c170ac4961a2ac2df.png",
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
        "division": "master",
        "tier": 5,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_MasterTier.d5994999a94e84aeff892ddc2df4019afe41bf59.png"
      }
    },
    "rankTier": "Master 5",
    "overall": {
      "matches": 10249,
      "wins": 5347,
      "losses": 4902,
      "wr": 52.17,
      "kda": 3.21,
      "elim": 15.09,
      "deaths": 5.54,
      "dmg": 7804.38,
      "heal": 4217.32,
      "time": 5369766,
      "tot": {
        "e": 135026,
        "a": 24195,
        "dd": 49540,
        "dm": 69846136,
        "he": 37743348
      }
    },
    "roles": {
      "Tank": {
        "g": 1454,
        "w": 775,
        "l": 679,
        "time": 770539,
        "wr": 53.3,
        "kda": 3.94,
        "elim": 19.82,
        "deaths": 5.41,
        "dmg": 12173.96,
        "heal": 612.95
      },
      "Damage": {
        "g": 4016,
        "w": 2102,
        "l": 1914,
        "time": 2091786,
        "wr": 52.34,
        "kda": 2.92,
        "elim": 18.51,
        "deaths": 6.35,
        "dmg": 9983.07,
        "heal": 78.06
      },
      "Support": {
        "g": 4779,
        "w": 2470,
        "l": 2309,
        "time": 2507441,
        "wr": 51.68,
        "kda": 3.28,
        "elim": 10.78,
        "deaths": 4.89,
        "dmg": 4644.06,
        "heal": 8778.04
      }
    },
    "heroes": [
      {
        "slug": "ana",
        "n": "Ana",
        "role": "Support",
        "g": 2461,
        "wr": 53.11,
        "kda": 3.53
      },
      {
        "slug": "genji",
        "n": "Genji",
        "role": "Damage",
        "g": 1537,
        "wr": 55.24,
        "kda": 3.26
      },
      {
        "slug": "kiriko",
        "n": "Kiriko",
        "role": "Support",
        "g": 775,
        "wr": 49.94,
        "kda": 2.87
      },
      {
        "slug": "tracer",
        "n": "Tracer",
        "role": "Damage",
        "g": 527,
        "wr": 51.23,
        "kda": 2.85
      },
      {
        "slug": "sojourn",
        "n": "Sojourn",
        "role": "Damage",
        "g": 351,
        "wr": 49,
        "kda": 3.3
      },
      {
        "slug": "brigitte",
        "n": "Brigitte",
        "role": "Support",
        "g": 325,
        "wr": 49.54,
        "kda": 2.93
      },
      {
        "slug": "cassidy",
        "n": "Cassidy",
        "role": "Damage",
        "g": 310,
        "wr": 47.1,
        "kda": 2.6
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
        "slug": "lucio",
        "n": "Lúcio",
        "role": "Support",
        "g": 280,
        "wr": 51.43,
        "kda": 3.64
      },
      {
        "slug": "doomfist",
        "n": "Doomfist",
        "role": "Tank",
        "g": 273,
        "wr": 51.28,
        "kda": 2.91
      },
      {
        "slug": "sigma",
        "n": "Sigma",
        "role": "Tank",
        "g": 184,
        "wr": 57.61,
        "kda": 5.01
      },
      {
        "slug": "moira",
        "n": "Moira",
        "role": "Support",
        "g": 182,
        "wr": 57.14,
        "kda": 3.63
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
        "g": 155,
        "wr": 45.16,
        "kda": 2.01
      },
      {
        "slug": "pharah",
        "n": "Pharah",
        "role": "Damage",
        "g": 153,
        "wr": 52.94,
        "kda": 2.91
      },
      {
        "slug": "winston",
        "n": "Winston",
        "role": "Tank",
        "g": 152,
        "wr": 48.68,
        "kda": 3.86
      },
      {
        "slug": "baptiste",
        "n": "Baptiste",
        "role": "Support",
        "g": 150,
        "wr": 54.67,
        "kda": 2.52
      },
      {
        "slug": "zenyatta",
        "n": "Zenyatta",
        "role": "Support",
        "g": 135,
        "wr": 54.07,
        "kda": 3.82
      },
      {
        "slug": "orisa",
        "n": "Orisa",
        "role": "Tank",
        "g": 123,
        "wr": 52.03,
        "kda": 4.26
      },
      {
        "slug": "ramattra",
        "n": "Ramattra",
        "role": "Tank",
        "g": 114,
        "wr": 62.28,
        "kda": 4.75
      },
      {
        "slug": "juno",
        "n": "Juno",
        "role": "Support",
        "g": 111,
        "wr": 47.75,
        "kda": 2.99
      },
      {
        "slug": "echo",
        "n": "Echo",
        "role": "Damage",
        "g": 110,
        "wr": 54.55,
        "kda": 2.66
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
        "slug": "illari",
        "n": "Illari",
        "role": "Support",
        "g": 105,
        "wr": 52.38,
        "kda": 3.45
      },
      {
        "slug": "freja",
        "n": "Freja",
        "role": "Damage",
        "g": 101,
        "wr": 49.5,
        "kda": 3.08
      },
      {
        "slug": "zarya",
        "n": "Zarya",
        "role": "Tank",
        "g": 89,
        "wr": 50.56,
        "kda": 4.8
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
        "g": 83,
        "wr": 48.19,
        "kda": 5.37
      },
      {
        "slug": "wuyang",
        "n": "Wuyang",
        "role": "Support",
        "g": 82,
        "wr": 39.02,
        "kda": 2.64
      },
      {
        "slug": "junker-queen",
        "n": "Junker Queen",
        "role": "Tank",
        "g": 75,
        "wr": 65.33,
        "kda": 4.44
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
        "slug": "sombra",
        "n": "Sombra",
        "role": "Support",
        "g": 67,
        "wr": 43.28,
        "kda": 3.96
      },
      {
        "slug": "junkrat",
        "n": "Junkrat",
        "role": "Damage",
        "g": 66,
        "wr": 45.45,
        "kda": 2.37
      },
      {
        "slug": "reaper",
        "n": "Reaper",
        "role": "Damage",
        "g": 63,
        "wr": 55.56,
        "kda": 2.53
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
        "kda": 6.12
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
        "kda": 3.22
      },
      {
        "slug": "mizuki",
        "n": "Mizuki",
        "role": "Support",
        "g": 18,
        "wr": 33.33,
        "kda": 1.57
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
        "slug": "lifeweaver",
        "n": "Lifeweaver",
        "role": "Support",
        "g": 10,
        "wr": 50,
        "kda": 1.15
      },
      {
        "slug": "shion",
        "n": "Shion",
        "role": "Damage",
        "g": 10,
        "wr": 60,
        "kda": 3.06
      },
      {
        "slug": "jetpack-cat",
        "n": "Jetpack Cat",
        "role": "Support",
        "g": 6,
        "wr": 50,
        "kda": 2.39
      },
      {
        "slug": "anran",
        "n": "Anran",
        "role": "Damage",
        "g": 5,
        "wr": 80,
        "kda": 2.18
      },
      {
        "slug": "doctrine",
        "n": "Doctrine",
        "role": "Support",
        "g": 5,
        "wr": 40,
        "kda": 2.86
      },
      {
        "slug": "vendetta",
        "n": "Vendetta",
        "role": "Damage",
        "g": 5,
        "wr": 60,
        "kda": 1.71
      },
      {
        "slug": "dmon",
        "n": "D.Mon",
        "role": "Tank",
        "g": 1,
        "wr": 0,
        "kda": 0.33
      },
      {
        "slug": "domina",
        "n": "Domina",
        "role": "Tank",
        "g": 1,
        "wr": 0,
        "kda": 2
      }
    ],
    "bscore": {
      "ana": {
        "finalScore": 151.76,
        "battleScore": 42.54,
        "coeff": 1.77,
        "matchCoef": 2,
        "gamesPlayed": 2461,
        "rankIndex": 6,
        "det": {
          "g": 2461,
          "time": 1286690,
          "wr": 53.10361641609102,
          "el10": 9.314388459975621,
          "de10": 4.472921576594881,
          "dm10": 3336.77326290126,
          "he10": 8977.747257212515,
          "as10": 12.80103616416091,
          "wa": 39.13409183258838,
          "ca": 0
        }
      },
      "ashe": {
        "finalScore": 138.77,
        "battleScore": 44.91,
        "coeff": 1.61,
        "matchCoef": 1.68,
        "gamesPlayed": 305,
        "rankIndex": 5,
        "det": {
          "g": 305,
          "time": 150508,
          "wr": 52.868852459016395,
          "el10": 17.240918032786883,
          "de10": 6.19904918032787,
          "dm10": 9905.052459016393,
          "he10": 0,
          "as10": 2.634,
          "wa": 44.03934426229508,
          "ca": 10.99672131147541
        }
      },
      "brigitte": {
        "finalScore": 142.03,
        "battleScore": 42.69,
        "coeff": 1.77,
        "matchCoef": 1.71,
        "gamesPlayed": 325,
        "rankIndex": 6,
        "det": {
          "g": 325,
          "time": 175675,
          "wr": 50.06153846153846,
          "el10": 12.24716923076923,
          "de10": 5.861169230769231,
          "dm10": 4259.464615384615,
          "he10": 9231.966153846153,
          "as10": 16.028707692307695,
          "wa": 0,
          "ca": 0
        }
      },
      "cassidy": {
        "finalScore": 136.05,
        "battleScore": 42.53,
        "coeff": 1.61,
        "matchCoef": 1.69,
        "gamesPlayed": 310,
        "rankIndex": 5,
        "det": {
          "g": 310,
          "time": 163705,
          "wr": 47.23225806451613,
          "el10": 18.745548387096772,
          "de10": 7.220677419354838,
          "dm10": 9874.03870967742,
          "he10": 33.63351612903226,
          "as10": 1.4502903225806452,
          "wa": 49.08709677419355,
          "ca": 8.970967741935484
        }
      },
      "doomfist": {
        "finalScore": 131.99,
        "battleScore": 40.29,
        "coeff": 1.61,
        "matchCoef": 1.64,
        "gamesPlayed": 273,
        "rankIndex": 5,
        "det": {
          "g": 273,
          "time": 146589,
          "wr": 51.05128205128205,
          "el10": 19.18824175824176,
          "de10": 6.584908424908425,
          "dm10": 9451.93772893773,
          "he10": 427.65201465201466,
          "as10": 3.985934065934066,
          "wa": 26.01098901098901,
          "ca": 9.010989010989011
        }
      },
      "echo": {
        "finalScore": 126.46,
        "battleScore": 44.49,
        "coeff": 1.61,
        "matchCoef": 1.31,
        "gamesPlayed": 110,
        "rankIndex": 5,
        "det": {
          "g": 110,
          "time": 57347,
          "wr": 54.836363636363636,
          "el10": 18.03709090909091,
          "de10": 6.812363636363637,
          "dm10": 8984.472727272727,
          "he10": 135.4909090909091,
          "as10": 0.5829090909090908,
          "wa": 26.036363636363635,
          "ca": 8.945454545454545
        }
      },
      "freja": {
        "finalScore": 123.89,
        "battleScore": 42.79,
        "coeff": 1.61,
        "matchCoef": 1.28,
        "gamesPlayed": 101,
        "rankIndex": 5,
        "det": {
          "g": 101,
          "time": 52368,
          "wr": 49.524752475247524,
          "el10": 18.600693069306928,
          "de10": 6.021287128712871,
          "dm10": 10638.732673267326,
          "he10": 89.38178217821782,
          "as10": 0.4435643564356435,
          "wa": 24.88118811881188,
          "ca": 10.297029702970297
        }
      },
      "genji": {
        "finalScore": 149.94,
        "battleScore": 45.53,
        "coeff": 1.61,
        "matchCoef": 2,
        "gamesPlayed": 1537,
        "rankIndex": 5,
        "det": {
          "g": 1537,
          "time": 803931,
          "wr": 55.00715679895901,
          "el10": 19.559121665582303,
          "de10": 6.001093038386467,
          "dm10": 8255.544567338971,
          "he10": 66.30481457384515,
          "as10": 0.19856864020819778,
          "wa": 29.014313597918022,
          "ca": 10
        }
      },
      "illari": {
        "finalScore": 130.43,
        "battleScore": 44.83,
        "coeff": 1.77,
        "matchCoef": 1.3,
        "gamesPlayed": 105,
        "rankIndex": 6,
        "det": {
          "g": 105,
          "time": 53942,
          "wr": 52.01904761904762,
          "el10": 15.921333333333333,
          "de10": 5.042190476190476,
          "dm10": 7062.952380952381,
          "he10": 6986.27619047619,
          "as10": 5.691714285714285,
          "wa": 53.96190476190476,
          "ca": 11.057142857142857
        }
      },
      "junker-queen": {
        "finalScore": 127.65,
        "battleScore": 51.12,
        "coeff": 1.61,
        "matchCoef": 1.18,
        "gamesPlayed": 75,
        "rankIndex": 5,
        "det": {
          "g": 75,
          "time": 39806,
          "wr": 65.12,
          "el10": 24.224,
          "de10": 5.463866666666667,
          "dm10": 11778.226666666667,
          "he10": 2278.84,
          "as10": 7.526000000000001,
          "wa": 42,
          "ca": 8.026666666666667
        }
      },
      "kiriko": {
        "finalScore": 152.61,
        "battleScore": 43.07,
        "coeff": 1.77,
        "matchCoef": 2,
        "gamesPlayed": 775,
        "rankIndex": 6,
        "det": {
          "g": 775,
          "time": 407792,
          "wr": 50.0541935483871,
          "el10": 9.642335483870967,
          "de10": 4.925496774193548,
          "dm10": 3549.7238709677417,
          "he10": 9529.605161290323,
          "as10": 14.882296774193549,
          "wa": 32.00387096774193,
          "ca": 13.992258064516129
        }
      },
      "moira": {
        "finalScore": 151.23,
        "battleScore": 45.12,
        "coeff": 1.77,
        "matchCoef": 1.5,
        "gamesPlayed": 182,
        "rankIndex": 6,
        "det": {
          "g": 182,
          "time": 101949,
          "wr": 57.83516483516483,
          "el10": 19.337802197802198,
          "de10": 5.322692307692307,
          "dm10": 7251.3626373626375,
          "he10": 9020.747252747253,
          "as10": 12.16203296703297,
          "wa": 0,
          "ca": 0
        }
      },
      "pharah": {
        "finalScore": 129.96,
        "battleScore": 44.19,
        "coeff": 1.61,
        "matchCoef": 1.43,
        "gamesPlayed": 153,
        "rankIndex": 5,
        "det": {
          "g": 153,
          "time": 81384,
          "wr": 53.1437908496732,
          "el10": 20.040588235294116,
          "de10": 6.8711111111111105,
          "dm10": 10732.640522875818,
          "he10": 0,
          "as10": 4.559019607843138,
          "wa": 44.92156862745098,
          "ca": 0
        }
      },
      "ramattra": {
        "finalScore": 139.88,
        "battleScore": 46.46,
        "coeff": 1.61,
        "matchCoef": 1.33,
        "gamesPlayed": 114,
        "rankIndex": 5,
        "det": {
          "g": 114,
          "time": 58321,
          "wr": 61.89473684210526,
          "el10": 21.08526315789474,
          "de10": 4.916666666666668,
          "dm10": 10956.578947368422,
          "he10": 222.73684210526315,
          "as10": 2.2922807017543865,
          "wa": 24.035087719298247,
          "ca": 9.017543859649123
        }
      },
      "reaper": {
        "finalScore": 127.56,
        "battleScore": 43.12,
        "coeff": 1.61,
        "matchCoef": 1.11,
        "gamesPlayed": 63,
        "rankIndex": 5,
        "det": {
          "g": 63,
          "time": 34367,
          "wr": 54.857142857142854,
          "el10": 18.903809523809525,
          "de10": 7.469047619047619,
          "dm10": 7544.428571428572,
          "he10": 1343.5714285714287,
          "as10": 0.019047619047619046,
          "wa": 29.142857142857142,
          "ca": 10.047619047619047
        }
      },
      "shion": {
        "finalScore": 98.45,
        "battleScore": 43.72,
        "coeff": 1.61,
        "matchCoef": 0.45,
        "gamesPlayed": 10,
        "rankIndex": 5,
        "det": {
          "g": 10,
          "time": 5494,
          "wr": 56.7,
          "el10": 17.994000000000003,
          "de10": 5.904999999999999,
          "dm10": 8586.9,
          "he10": 61.056000000000004,
          "as10": 1.098,
          "wa": 36.6,
          "ca": 10.8
        }
      },
      "sigma": {
        "finalScore": 150.01,
        "battleScore": 48.6,
        "coeff": 1.61,
        "matchCoef": 1.5,
        "gamesPlayed": 184,
        "rankIndex": 5,
        "det": {
          "g": 184,
          "time": 96431,
          "wr": 57.233695652173914,
          "el10": 19.889728260869564,
          "de10": 4.481630434782609,
          "dm10": 12068.08695652174,
          "he10": 0,
          "as10": 2.5880978260869565,
          "wa": 54.01086956521739,
          "ca": 0
        }
      },
      "sojourn": {
        "finalScore": 137.4,
        "battleScore": 42.5,
        "coeff": 1.61,
        "matchCoef": 1.73,
        "gamesPlayed": 351,
        "rankIndex": 5,
        "det": {
          "g": 351,
          "time": 189274,
          "wr": 49.41025641025641,
          "el10": 19.546495726495724,
          "de10": 5.9276923076923085,
          "dm10": 10000.991452991453,
          "he10": 0,
          "as10": 0.6981196581196581,
          "wa": 28.068376068376068,
          "ca": 9
        }
      },
      "sombra": {
        "finalScore": 118.39,
        "battleScore": 37.87,
        "coeff": 1.77,
        "matchCoef": 1.14,
        "gamesPlayed": 67,
        "rankIndex": 6,
        "det": {
          "g": 67,
          "time": 35427,
          "wr": 42,
          "el10": 17.776268656716418,
          "de10": 5.938955223880597,
          "dm10": 6423.134328358209,
          "he10": 954.3582089552239,
          "as10": 6.973283582089552,
          "wa": 33.02985074626866,
          "ca": 7
        }
      },
      "tracer": {
        "finalScore": 143.58,
        "battleScore": 43.75,
        "coeff": 1.61,
        "matchCoef": 1.88,
        "gamesPlayed": 527,
        "rankIndex": 5,
        "det": {
          "g": 527,
          "time": 280921,
          "wr": 51.0303605313093,
          "el10": 18.12157495256167,
          "de10": 6.355142314990512,
          "dm10": 6807.055028462998,
          "he10": 16.573529411764707,
          "as10": 0.07,
          "wa": 34,
          "ca": 8.030360531309299
        }
      },
      "winston": {
        "finalScore": 128.56,
        "battleScore": 42.9,
        "coeff": 1.61,
        "matchCoef": 1.43,
        "gamesPlayed": 152,
        "rankIndex": 5,
        "det": {
          "g": 152,
          "time": 78829,
          "wr": 48.35526315789474,
          "el10": 19.517631578947366,
          "de10": 5.063552631578947,
          "dm10": 9551.605263157895,
          "he10": 542.6184210526316,
          "as10": 3.271973684210526,
          "wa": 62.13157894736842,
          "ca": 0
        }
      },
      "wuyang": {
        "finalScore": 120.6,
        "battleScore": 37.89,
        "coeff": 1.77,
        "matchCoef": 1.21,
        "gamesPlayed": 82,
        "rankIndex": 6,
        "det": {
          "g": 82,
          "time": 43286,
          "wr": 40.0609756097561,
          "el10": 13.63731707317073,
          "de10": 5.1710975609756105,
          "dm10": 6738.219512195122,
          "he10": 7482.792682926829,
          "as10": 9.702317073170734,
          "wa": 34.146341463414636,
          "ca": 0
        }
      },
      "anran": {
        "finalScore": 92.87,
        "battleScore": 38.2,
        "coeff": 1.61,
        "matchCoef": 0.25,
        "gamesPlayed": 5,
        "rankIndex": 5,
        "det": {
          "g": 5,
          "time": 2972,
          "wr": 77,
          "el10": 14.94,
          "de10": 6.86,
          "dm10": 6919,
          "he10": 337,
          "as10": 0,
          "wa": 26,
          "ca": 11
        }
      },
      "baptiste": {
        "finalScore": 134.89,
        "battleScore": 44.72,
        "coeff": 1.77,
        "matchCoef": 1.43,
        "gamesPlayed": 150,
        "rankIndex": 6,
        "det": {
          "g": 150,
          "time": 76028,
          "wr": 54,
          "el10": 11.54,
          "de10": 5.13,
          "dm10": 4708,
          "he10": 9830,
          "as10": 11.85,
          "wa": 34,
          "ca": 7
        }
      },
      "bastion": {
        "finalScore": 113.03,
        "battleScore": 36.24,
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
      "dmon": {
        "finalScore": 90,
        "battleScore": 31.87,
        "coeff": 1.61,
        "matchCoef": 0.25,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 258,
          "wr": 0,
          "el10": 2.32,
          "de10": 6.97,
          "dm10": 9931,
          "he10": 0,
          "as10": 0,
          "wa": 43,
          "ca": 0
        }
      },
      "doctrine": {
        "finalScore": 92.34,
        "battleScore": 40.78,
        "coeff": 1.77,
        "matchCoef": 0.25,
        "gamesPlayed": 5,
        "rankIndex": 6,
        "det": {
          "g": 5,
          "time": 2387,
          "wr": 40,
          "el10": 10.06,
          "de10": 3.52,
          "dm10": 5397,
          "he10": 8957,
          "as10": 10.56,
          "wa": 61,
          "ca": 0
        }
      },
      "domina": {
        "finalScore": 90.82,
        "battleScore": 36.38,
        "coeff": 1.61,
        "matchCoef": 0.25,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 544,
          "wr": 0,
          "el10": 13.23,
          "de10": 6.61,
          "dm10": 10088,
          "he10": 1314,
          "as10": 1.1,
          "wa": 38,
          "ca": 9
        }
      },
      "dva": {
        "finalScore": 124.21,
        "battleScore": 45.65,
        "coeff": 1.61,
        "matchCoef": 1.21,
        "gamesPlayed": 83,
        "rankIndex": 5,
        "det": {
          "g": 83,
          "time": 43001,
          "wr": 47,
          "el10": 22.31,
          "de10": 4.12,
          "dm10": 9557,
          "he10": 573,
          "as10": 7.77,
          "wa": 28,
          "ca": 9
        }
      },
      "emre": {
        "finalScore": 108.66,
        "battleScore": 47.14,
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
        "finalScore": 109.39,
        "battleScore": 42.42,
        "coeff": 1.61,
        "matchCoef": 0.82,
        "gamesPlayed": 28,
        "rankIndex": 5,
        "det": {
          "g": 28,
          "time": 14469,
          "wr": 47,
          "el10": 19.74,
          "de10": 5.1,
          "dm10": 11209,
          "he10": 543,
          "as10": 3.03,
          "wa": 32,
          "ca": 2
        }
      },
      "hanzo": {
        "finalScore": 123.82,
        "battleScore": 41.93,
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
        "finalScore": 93.02,
        "battleScore": 41.56,
        "coeff": 1.77,
        "matchCoef": 0.27,
        "gamesPlayed": 6,
        "rankIndex": 6,
        "det": {
          "g": 6,
          "time": 3209,
          "wr": 44,
          "el10": 12.34,
          "de10": 5.8,
          "dm10": 3034,
          "he10": 7753,
          "as10": 9.91,
          "wa": 33,
          "ca": 9
        }
      },
      "junkrat": {
        "finalScore": 115.38,
        "battleScore": 38.16,
        "coeff": 1.61,
        "matchCoef": 1.13,
        "gamesPlayed": 66,
        "rankIndex": 5,
        "det": {
          "g": 66,
          "time": 32265,
          "wr": 46,
          "el10": 14.08,
          "de10": 6.68,
          "dm10": 7862,
          "he10": 0,
          "as10": 1.73,
          "wa": 25,
          "ca": 0
        }
      },
      "juno": {
        "finalScore": 130.98,
        "battleScore": 44.67,
        "coeff": 1.77,
        "matchCoef": 1.32,
        "gamesPlayed": 111,
        "rankIndex": 6,
        "det": {
          "g": 111,
          "time": 55907,
          "wr": 48,
          "el10": 12.82,
          "de10": 4.28,
          "dm10": 4153,
          "he10": 10425,
          "as10": 10.94,
          "wa": 39,
          "ca": 0
        }
      },
      "lifeweaver": {
        "finalScore": 98.42,
        "battleScore": 39.67,
        "coeff": 1.77,
        "matchCoef": 0.45,
        "gamesPlayed": 10,
        "rankIndex": 6,
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
        "finalScore": 139.44,
        "battleScore": 42.1,
        "coeff": 1.77,
        "matchCoef": 1.65,
        "gamesPlayed": 280,
        "rankIndex": 6,
        "det": {
          "g": 280,
          "time": 151306,
          "wr": 51,
          "el10": 13.89,
          "de10": 5.91,
          "dm10": 5099,
          "he10": 6825,
          "as10": 11.19,
          "wa": 27,
          "ca": 8
        }
      },
      "mauga": {
        "finalScore": 129.88,
        "battleScore": 52.77,
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
        }
      },
      "mei": {
        "finalScore": 104.96,
        "battleScore": 41,
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
        "finalScore": 115.84,
        "battleScore": 35.04,
        "coeff": 1.77,
        "matchCoef": 1.14,
        "gamesPlayed": 67,
        "rankIndex": 6,
        "det": {
          "g": 67,
          "time": 31904,
          "wr": 40,
          "el10": 1.94,
          "de10": 5.96,
          "dm10": 372,
          "he10": 9662,
          "as10": 16.23,
          "wa": 25,
          "ca": 8
        }
      },
      "mizuki": {
        "finalScore": 103.93,
        "battleScore": 37.47,
        "coeff": 1.77,
        "matchCoef": 0.66,
        "gamesPlayed": 18,
        "rankIndex": 6,
        "det": {
          "g": 18,
          "time": 9584,
          "wr": 34,
          "el10": 11.64,
          "de10": 7.26,
          "dm10": 5725,
          "he10": 9166,
          "as10": 10.58,
          "wa": 37,
          "ca": 8
        }
      },
      "orisa": {
        "finalScore": 128.22,
        "battleScore": 44.97,
        "coeff": 1.61,
        "matchCoef": 1.36,
        "gamesPlayed": 123,
        "rankIndex": 5,
        "det": {
          "g": 123,
          "time": 67321,
          "wr": 52,
          "el10": 20.31,
          "de10": 5.7,
          "dm10": 12058,
          "he10": 42,
          "as10": 3.97,
          "wa": 34,
          "ca": 8
        }
      },
      "reinhardt": {
        "finalScore": 129.54,
        "battleScore": 43.36,
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
        }
      },
      "roadhog": {
        "finalScore": 115.87,
        "battleScore": 43.81,
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
        }
      },
      "soldier-76": {
        "finalScore": 100.06,
        "battleScore": 33.1,
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
      "symmetra": {
        "finalScore": 118.53,
        "battleScore": 41.25,
        "coeff": 1.61,
        "matchCoef": 1.15,
        "gamesPlayed": 70,
        "rankIndex": 5,
        "det": {
          "g": 70,
          "time": 35166,
          "wr": 59,
          "el10": 17.03,
          "de10": 6.59,
          "dm10": 7794,
          "he10": 129,
          "as10": 2.82,
          "wa": 36,
          "ca": 0
        }
      },
      "torbjorn": {
        "finalScore": 108.19,
        "battleScore": 45.18,
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
        "finalScore": 91.26,
        "battleScore": 38.88,
        "coeff": 1.61,
        "matchCoef": 0.25,
        "gamesPlayed": 5,
        "rankIndex": 5,
        "det": {
          "g": 5,
          "time": 2732,
          "wr": 54,
          "el10": 14.72,
          "de10": 7.91,
          "dm10": 7394,
          "he10": 123,
          "as10": 1.54,
          "wa": 0,
          "ca": 0
        }
      },
      "venture": {
        "finalScore": 111.12,
        "battleScore": 46.88,
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
        "finalScore": 123.48,
        "battleScore": 37.8,
        "coeff": 1.61,
        "matchCoef": 1.44,
        "gamesPlayed": 155,
        "rankIndex": 5,
        "det": {
          "g": 155,
          "time": 75282,
          "wr": 45,
          "el10": 14.19,
          "de10": 7.05,
          "dm10": 5564,
          "he10": 0,
          "as10": 2.14,
          "wa": 38,
          "ca": 13
        }
      },
      "wrecking-ball": {
        "finalScore": 119.42,
        "battleScore": 39.9,
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
      "zarya": {
        "finalScore": 135.87,
        "battleScore": 46.22,
        "coeff": 1.61,
        "matchCoef": 1.24,
        "gamesPlayed": 89,
        "rankIndex": 5,
        "det": {
          "g": 89,
          "time": 46729,
          "wr": 51,
          "el10": 20.44,
          "de10": 4.65,
          "dm10": 11554,
          "he10": 0,
          "as10": 4.97,
          "wa": 41,
          "ca": 0
        }
      },
      "zenyatta": {
        "finalScore": 130.19,
        "battleScore": 41.69,
        "coeff": 1.77,
        "matchCoef": 1.39,
        "gamesPlayed": 135,
        "rankIndex": 6,
        "det": {
          "g": 135,
          "time": 67709,
          "wr": 54,
          "el10": 14.28,
          "de10": 5.81,
          "dm10": 6063,
          "he10": 6533,
          "as10": 15.28,
          "wa": 25,
          "ca": 10
        }
      }
    },
    "bscoreAll": {
      "ana": {
        "finalScore": 151.76,
        "battleScore": 42.54,
        "coeff": 1.77,
        "matchCoef": 2,
        "gamesPlayed": 2461,
        "rankIndex": 6,
        "det": {
          "g": 2461,
          "time": 1286690,
          "wr": 53.10361641609102,
          "el10": 9.314388459975621,
          "de10": 4.472921576594881,
          "dm10": 3336.77326290126,
          "he10": 8977.747257212515,
          "as10": 12.80103616416091,
          "wa": 39.13409183258838,
          "ca": 0
        }
      },
      "ashe": {
        "finalScore": 138.77,
        "battleScore": 44.91,
        "coeff": 1.61,
        "matchCoef": 1.68,
        "gamesPlayed": 305,
        "rankIndex": 5,
        "det": {
          "g": 305,
          "time": 150508,
          "wr": 52.868852459016395,
          "el10": 17.240918032786883,
          "de10": 6.19904918032787,
          "dm10": 9905.052459016393,
          "he10": 0,
          "as10": 2.634,
          "wa": 44.03934426229508,
          "ca": 10.99672131147541
        }
      },
      "brigitte": {
        "finalScore": 142.03,
        "battleScore": 42.69,
        "coeff": 1.77,
        "matchCoef": 1.71,
        "gamesPlayed": 325,
        "rankIndex": 6,
        "det": {
          "g": 325,
          "time": 175675,
          "wr": 50.06153846153846,
          "el10": 12.24716923076923,
          "de10": 5.861169230769231,
          "dm10": 4259.464615384615,
          "he10": 9231.966153846153,
          "as10": 16.028707692307695,
          "wa": 0,
          "ca": 0
        }
      },
      "cassidy": {
        "finalScore": 136.05,
        "battleScore": 42.53,
        "coeff": 1.61,
        "matchCoef": 1.69,
        "gamesPlayed": 310,
        "rankIndex": 5,
        "det": {
          "g": 310,
          "time": 163705,
          "wr": 47.23225806451613,
          "el10": 18.745548387096772,
          "de10": 7.220677419354838,
          "dm10": 9874.03870967742,
          "he10": 33.63351612903226,
          "as10": 1.4502903225806452,
          "wa": 49.08709677419355,
          "ca": 8.970967741935484
        }
      },
      "doomfist": {
        "finalScore": 131.99,
        "battleScore": 40.29,
        "coeff": 1.61,
        "matchCoef": 1.64,
        "gamesPlayed": 273,
        "rankIndex": 5,
        "det": {
          "g": 273,
          "time": 146589,
          "wr": 51.05128205128205,
          "el10": 19.18824175824176,
          "de10": 6.584908424908425,
          "dm10": 9451.93772893773,
          "he10": 427.65201465201466,
          "as10": 3.985934065934066,
          "wa": 26.01098901098901,
          "ca": 9.010989010989011
        }
      },
      "echo": {
        "finalScore": 126.46,
        "battleScore": 44.49,
        "coeff": 1.61,
        "matchCoef": 1.31,
        "gamesPlayed": 110,
        "rankIndex": 5,
        "det": {
          "g": 110,
          "time": 57347,
          "wr": 54.836363636363636,
          "el10": 18.03709090909091,
          "de10": 6.812363636363637,
          "dm10": 8984.472727272727,
          "he10": 135.4909090909091,
          "as10": 0.5829090909090908,
          "wa": 26.036363636363635,
          "ca": 8.945454545454545
        }
      },
      "freja": {
        "finalScore": 123.89,
        "battleScore": 42.79,
        "coeff": 1.61,
        "matchCoef": 1.28,
        "gamesPlayed": 101,
        "rankIndex": 5,
        "det": {
          "g": 101,
          "time": 52368,
          "wr": 49.524752475247524,
          "el10": 18.600693069306928,
          "de10": 6.021287128712871,
          "dm10": 10638.732673267326,
          "he10": 89.38178217821782,
          "as10": 0.4435643564356435,
          "wa": 24.88118811881188,
          "ca": 10.297029702970297
        }
      },
      "genji": {
        "finalScore": 149.94,
        "battleScore": 45.53,
        "coeff": 1.61,
        "matchCoef": 2,
        "gamesPlayed": 1537,
        "rankIndex": 5,
        "det": {
          "g": 1537,
          "time": 803931,
          "wr": 55.00715679895901,
          "el10": 19.559121665582303,
          "de10": 6.001093038386467,
          "dm10": 8255.544567338971,
          "he10": 66.30481457384515,
          "as10": 0.19856864020819778,
          "wa": 29.014313597918022,
          "ca": 10
        }
      },
      "illari": {
        "finalScore": 130.43,
        "battleScore": 44.83,
        "coeff": 1.77,
        "matchCoef": 1.3,
        "gamesPlayed": 105,
        "rankIndex": 6,
        "det": {
          "g": 105,
          "time": 53942,
          "wr": 52.01904761904762,
          "el10": 15.921333333333333,
          "de10": 5.042190476190476,
          "dm10": 7062.952380952381,
          "he10": 6986.27619047619,
          "as10": 5.691714285714285,
          "wa": 53.96190476190476,
          "ca": 11.057142857142857
        }
      },
      "junker-queen": {
        "finalScore": 127.65,
        "battleScore": 51.12,
        "coeff": 1.61,
        "matchCoef": 1.18,
        "gamesPlayed": 75,
        "rankIndex": 5,
        "det": {
          "g": 75,
          "time": 39806,
          "wr": 65.12,
          "el10": 24.224,
          "de10": 5.463866666666667,
          "dm10": 11778.226666666667,
          "he10": 2278.84,
          "as10": 7.526000000000001,
          "wa": 42,
          "ca": 8.026666666666667
        }
      },
      "kiriko": {
        "finalScore": 152.61,
        "battleScore": 43.07,
        "coeff": 1.77,
        "matchCoef": 2,
        "gamesPlayed": 775,
        "rankIndex": 6,
        "det": {
          "g": 775,
          "time": 407792,
          "wr": 50.0541935483871,
          "el10": 9.642335483870967,
          "de10": 4.925496774193548,
          "dm10": 3549.7238709677417,
          "he10": 9529.605161290323,
          "as10": 14.882296774193549,
          "wa": 32.00387096774193,
          "ca": 13.992258064516129
        }
      },
      "moira": {
        "finalScore": 151.23,
        "battleScore": 45.12,
        "coeff": 1.77,
        "matchCoef": 1.5,
        "gamesPlayed": 182,
        "rankIndex": 6,
        "det": {
          "g": 182,
          "time": 101949,
          "wr": 57.83516483516483,
          "el10": 19.337802197802198,
          "de10": 5.322692307692307,
          "dm10": 7251.3626373626375,
          "he10": 9020.747252747253,
          "as10": 12.16203296703297,
          "wa": 0,
          "ca": 0
        }
      },
      "pharah": {
        "finalScore": 129.96,
        "battleScore": 44.19,
        "coeff": 1.61,
        "matchCoef": 1.43,
        "gamesPlayed": 153,
        "rankIndex": 5,
        "det": {
          "g": 153,
          "time": 81384,
          "wr": 53.1437908496732,
          "el10": 20.040588235294116,
          "de10": 6.8711111111111105,
          "dm10": 10732.640522875818,
          "he10": 0,
          "as10": 4.559019607843138,
          "wa": 44.92156862745098,
          "ca": 0
        }
      },
      "ramattra": {
        "finalScore": 139.88,
        "battleScore": 46.46,
        "coeff": 1.61,
        "matchCoef": 1.33,
        "gamesPlayed": 114,
        "rankIndex": 5,
        "det": {
          "g": 114,
          "time": 58321,
          "wr": 61.89473684210526,
          "el10": 21.08526315789474,
          "de10": 4.916666666666668,
          "dm10": 10956.578947368422,
          "he10": 222.73684210526315,
          "as10": 2.2922807017543865,
          "wa": 24.035087719298247,
          "ca": 9.017543859649123
        }
      },
      "reaper": {
        "finalScore": 127.56,
        "battleScore": 43.12,
        "coeff": 1.61,
        "matchCoef": 1.11,
        "gamesPlayed": 63,
        "rankIndex": 5,
        "det": {
          "g": 63,
          "time": 34367,
          "wr": 54.857142857142854,
          "el10": 18.903809523809525,
          "de10": 7.469047619047619,
          "dm10": 7544.428571428572,
          "he10": 1343.5714285714287,
          "as10": 0.019047619047619046,
          "wa": 29.142857142857142,
          "ca": 10.047619047619047
        }
      },
      "shion": {
        "finalScore": 98.45,
        "battleScore": 43.72,
        "coeff": 1.61,
        "matchCoef": 0.45,
        "gamesPlayed": 10,
        "rankIndex": 5,
        "det": {
          "g": 10,
          "time": 5494,
          "wr": 56.7,
          "el10": 17.994000000000003,
          "de10": 5.904999999999999,
          "dm10": 8586.9,
          "he10": 61.056000000000004,
          "as10": 1.098,
          "wa": 36.6,
          "ca": 10.8
        }
      },
      "sigma": {
        "finalScore": 150.01,
        "battleScore": 48.6,
        "coeff": 1.61,
        "matchCoef": 1.5,
        "gamesPlayed": 184,
        "rankIndex": 5,
        "det": {
          "g": 184,
          "time": 96431,
          "wr": 57.233695652173914,
          "el10": 19.889728260869564,
          "de10": 4.481630434782609,
          "dm10": 12068.08695652174,
          "he10": 0,
          "as10": 2.5880978260869565,
          "wa": 54.01086956521739,
          "ca": 0
        }
      },
      "sojourn": {
        "finalScore": 137.4,
        "battleScore": 42.5,
        "coeff": 1.61,
        "matchCoef": 1.73,
        "gamesPlayed": 351,
        "rankIndex": 5,
        "det": {
          "g": 351,
          "time": 189274,
          "wr": 49.41025641025641,
          "el10": 19.546495726495724,
          "de10": 5.9276923076923085,
          "dm10": 10000.991452991453,
          "he10": 0,
          "as10": 0.6981196581196581,
          "wa": 28.068376068376068,
          "ca": 9
        }
      },
      "sombra": {
        "finalScore": 118.39,
        "battleScore": 37.87,
        "coeff": 1.77,
        "matchCoef": 1.14,
        "gamesPlayed": 67,
        "rankIndex": 6,
        "det": {
          "g": 67,
          "time": 35427,
          "wr": 42,
          "el10": 17.776268656716418,
          "de10": 5.938955223880597,
          "dm10": 6423.134328358209,
          "he10": 954.3582089552239,
          "as10": 6.973283582089552,
          "wa": 33.02985074626866,
          "ca": 7
        }
      },
      "tracer": {
        "finalScore": 143.58,
        "battleScore": 43.75,
        "coeff": 1.61,
        "matchCoef": 1.88,
        "gamesPlayed": 527,
        "rankIndex": 5,
        "det": {
          "g": 527,
          "time": 280921,
          "wr": 51.0303605313093,
          "el10": 18.12157495256167,
          "de10": 6.355142314990512,
          "dm10": 6807.055028462998,
          "he10": 16.573529411764707,
          "as10": 0.07,
          "wa": 34,
          "ca": 8.030360531309299
        }
      },
      "winston": {
        "finalScore": 128.56,
        "battleScore": 42.9,
        "coeff": 1.61,
        "matchCoef": 1.43,
        "gamesPlayed": 152,
        "rankIndex": 5,
        "det": {
          "g": 152,
          "time": 78829,
          "wr": 48.35526315789474,
          "el10": 19.517631578947366,
          "de10": 5.063552631578947,
          "dm10": 9551.605263157895,
          "he10": 542.6184210526316,
          "as10": 3.271973684210526,
          "wa": 62.13157894736842,
          "ca": 0
        }
      },
      "wuyang": {
        "finalScore": 120.6,
        "battleScore": 37.89,
        "coeff": 1.77,
        "matchCoef": 1.21,
        "gamesPlayed": 82,
        "rankIndex": 6,
        "det": {
          "g": 82,
          "time": 43286,
          "wr": 40.0609756097561,
          "el10": 13.63731707317073,
          "de10": 5.1710975609756105,
          "dm10": 6738.219512195122,
          "he10": 7482.792682926829,
          "as10": 9.702317073170734,
          "wa": 34.146341463414636,
          "ca": 0
        }
      },
      "anran": {
        "finalScore": 92.87,
        "battleScore": 38.2,
        "coeff": 1.61,
        "matchCoef": 0.25,
        "gamesPlayed": 5,
        "rankIndex": 5,
        "det": {
          "g": 5,
          "time": 2972,
          "wr": 77,
          "el10": 14.94,
          "de10": 6.86,
          "dm10": 6919,
          "he10": 337,
          "as10": 0,
          "wa": 26,
          "ca": 11
        }
      },
      "baptiste": {
        "finalScore": 134.89,
        "battleScore": 44.72,
        "coeff": 1.77,
        "matchCoef": 1.43,
        "gamesPlayed": 150,
        "rankIndex": 6,
        "det": {
          "g": 150,
          "time": 76028,
          "wr": 54,
          "el10": 11.54,
          "de10": 5.13,
          "dm10": 4708,
          "he10": 9830,
          "as10": 11.85,
          "wa": 34,
          "ca": 7
        }
      },
      "bastion": {
        "finalScore": 113.03,
        "battleScore": 36.24,
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
      "dmon": {
        "finalScore": 90,
        "battleScore": 31.87,
        "coeff": 1.61,
        "matchCoef": 0.25,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 258,
          "wr": 0,
          "el10": 2.32,
          "de10": 6.97,
          "dm10": 9931,
          "he10": 0,
          "as10": 0,
          "wa": 43,
          "ca": 0
        }
      },
      "doctrine": {
        "finalScore": 92.34,
        "battleScore": 40.78,
        "coeff": 1.77,
        "matchCoef": 0.25,
        "gamesPlayed": 5,
        "rankIndex": 6,
        "det": {
          "g": 5,
          "time": 2387,
          "wr": 40,
          "el10": 10.06,
          "de10": 3.52,
          "dm10": 5397,
          "he10": 8957,
          "as10": 10.56,
          "wa": 61,
          "ca": 0
        }
      },
      "domina": {
        "finalScore": 90.82,
        "battleScore": 36.38,
        "coeff": 1.61,
        "matchCoef": 0.25,
        "gamesPlayed": 1,
        "rankIndex": 5,
        "det": {
          "g": 1,
          "time": 544,
          "wr": 0,
          "el10": 13.23,
          "de10": 6.61,
          "dm10": 10088,
          "he10": 1314,
          "as10": 1.1,
          "wa": 38,
          "ca": 9
        }
      },
      "dva": {
        "finalScore": 124.21,
        "battleScore": 45.65,
        "coeff": 1.61,
        "matchCoef": 1.21,
        "gamesPlayed": 83,
        "rankIndex": 5,
        "det": {
          "g": 83,
          "time": 43001,
          "wr": 47,
          "el10": 22.31,
          "de10": 4.12,
          "dm10": 9557,
          "he10": 573,
          "as10": 7.77,
          "wa": 28,
          "ca": 9
        }
      },
      "emre": {
        "finalScore": 108.66,
        "battleScore": 47.14,
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
        "finalScore": 109.39,
        "battleScore": 42.42,
        "coeff": 1.61,
        "matchCoef": 0.82,
        "gamesPlayed": 28,
        "rankIndex": 5,
        "det": {
          "g": 28,
          "time": 14469,
          "wr": 47,
          "el10": 19.74,
          "de10": 5.1,
          "dm10": 11209,
          "he10": 543,
          "as10": 3.03,
          "wa": 32,
          "ca": 2
        }
      },
      "hanzo": {
        "finalScore": 123.82,
        "battleScore": 41.93,
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
        "finalScore": 93.02,
        "battleScore": 41.56,
        "coeff": 1.77,
        "matchCoef": 0.27,
        "gamesPlayed": 6,
        "rankIndex": 6,
        "det": {
          "g": 6,
          "time": 3209,
          "wr": 44,
          "el10": 12.34,
          "de10": 5.8,
          "dm10": 3034,
          "he10": 7753,
          "as10": 9.91,
          "wa": 33,
          "ca": 9
        }
      },
      "junkrat": {
        "finalScore": 115.38,
        "battleScore": 38.16,
        "coeff": 1.61,
        "matchCoef": 1.13,
        "gamesPlayed": 66,
        "rankIndex": 5,
        "det": {
          "g": 66,
          "time": 32265,
          "wr": 46,
          "el10": 14.08,
          "de10": 6.68,
          "dm10": 7862,
          "he10": 0,
          "as10": 1.73,
          "wa": 25,
          "ca": 0
        }
      },
      "juno": {
        "finalScore": 130.98,
        "battleScore": 44.67,
        "coeff": 1.77,
        "matchCoef": 1.32,
        "gamesPlayed": 111,
        "rankIndex": 6,
        "det": {
          "g": 111,
          "time": 55907,
          "wr": 48,
          "el10": 12.82,
          "de10": 4.28,
          "dm10": 4153,
          "he10": 10425,
          "as10": 10.94,
          "wa": 39,
          "ca": 0
        }
      },
      "lifeweaver": {
        "finalScore": 98.42,
        "battleScore": 39.67,
        "coeff": 1.77,
        "matchCoef": 0.45,
        "gamesPlayed": 10,
        "rankIndex": 6,
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
        "finalScore": 139.44,
        "battleScore": 42.1,
        "coeff": 1.77,
        "matchCoef": 1.65,
        "gamesPlayed": 280,
        "rankIndex": 6,
        "det": {
          "g": 280,
          "time": 151306,
          "wr": 51,
          "el10": 13.89,
          "de10": 5.91,
          "dm10": 5099,
          "he10": 6825,
          "as10": 11.19,
          "wa": 27,
          "ca": 8
        }
      },
      "mauga": {
        "finalScore": 129.88,
        "battleScore": 52.77,
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
        }
      },
      "mei": {
        "finalScore": 104.96,
        "battleScore": 41,
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
        "finalScore": 115.84,
        "battleScore": 35.04,
        "coeff": 1.77,
        "matchCoef": 1.14,
        "gamesPlayed": 67,
        "rankIndex": 6,
        "det": {
          "g": 67,
          "time": 31904,
          "wr": 40,
          "el10": 1.94,
          "de10": 5.96,
          "dm10": 372,
          "he10": 9662,
          "as10": 16.23,
          "wa": 25,
          "ca": 8
        }
      },
      "mizuki": {
        "finalScore": 103.93,
        "battleScore": 37.47,
        "coeff": 1.77,
        "matchCoef": 0.66,
        "gamesPlayed": 18,
        "rankIndex": 6,
        "det": {
          "g": 18,
          "time": 9584,
          "wr": 34,
          "el10": 11.64,
          "de10": 7.26,
          "dm10": 5725,
          "he10": 9166,
          "as10": 10.58,
          "wa": 37,
          "ca": 8
        }
      },
      "orisa": {
        "finalScore": 128.22,
        "battleScore": 44.97,
        "coeff": 1.61,
        "matchCoef": 1.36,
        "gamesPlayed": 123,
        "rankIndex": 5,
        "det": {
          "g": 123,
          "time": 67321,
          "wr": 52,
          "el10": 20.31,
          "de10": 5.7,
          "dm10": 12058,
          "he10": 42,
          "as10": 3.97,
          "wa": 34,
          "ca": 8
        }
      },
      "reinhardt": {
        "finalScore": 129.54,
        "battleScore": 43.36,
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
        }
      },
      "roadhog": {
        "finalScore": 115.87,
        "battleScore": 43.81,
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
        }
      },
      "soldier-76": {
        "finalScore": 100.06,
        "battleScore": 33.1,
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
      "symmetra": {
        "finalScore": 118.53,
        "battleScore": 41.25,
        "coeff": 1.61,
        "matchCoef": 1.15,
        "gamesPlayed": 70,
        "rankIndex": 5,
        "det": {
          "g": 70,
          "time": 35166,
          "wr": 59,
          "el10": 17.03,
          "de10": 6.59,
          "dm10": 7794,
          "he10": 129,
          "as10": 2.82,
          "wa": 36,
          "ca": 0
        }
      },
      "torbjorn": {
        "finalScore": 108.19,
        "battleScore": 45.18,
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
        "finalScore": 91.26,
        "battleScore": 38.88,
        "coeff": 1.61,
        "matchCoef": 0.25,
        "gamesPlayed": 5,
        "rankIndex": 5,
        "det": {
          "g": 5,
          "time": 2732,
          "wr": 54,
          "el10": 14.72,
          "de10": 7.91,
          "dm10": 7394,
          "he10": 123,
          "as10": 1.54,
          "wa": 0,
          "ca": 0
        }
      },
      "venture": {
        "finalScore": 111.12,
        "battleScore": 46.88,
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
        "finalScore": 123.48,
        "battleScore": 37.8,
        "coeff": 1.61,
        "matchCoef": 1.44,
        "gamesPlayed": 155,
        "rankIndex": 5,
        "det": {
          "g": 155,
          "time": 75282,
          "wr": 45,
          "el10": 14.19,
          "de10": 7.05,
          "dm10": 5564,
          "he10": 0,
          "as10": 2.14,
          "wa": 38,
          "ca": 13
        }
      },
      "wrecking-ball": {
        "finalScore": 119.42,
        "battleScore": 39.9,
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
      "zarya": {
        "finalScore": 135.87,
        "battleScore": 46.22,
        "coeff": 1.61,
        "matchCoef": 1.24,
        "gamesPlayed": 89,
        "rankIndex": 5,
        "det": {
          "g": 89,
          "time": 46729,
          "wr": 51,
          "el10": 20.44,
          "de10": 4.65,
          "dm10": 11554,
          "he10": 0,
          "as10": 4.97,
          "wa": 41,
          "ca": 0
        }
      },
      "zenyatta": {
        "finalScore": 130.19,
        "battleScore": 41.69,
        "coeff": 1.77,
        "matchCoef": 1.39,
        "gamesPlayed": 135,
        "rankIndex": 6,
        "det": {
          "g": 135,
          "time": 67709,
          "wr": 54,
          "el10": 14.28,
          "de10": 5.81,
          "dm10": 6063,
          "he10": 6533,
          "as10": 15.28,
          "wa": 25,
          "ca": 10
        }
      }
    },
    "recent": [
      {
        "d": "2026-09-17",
        "g": {},
        "m": 10048,
        "w": 5237,
        "l": 4811,
        "t": 5260133,
        "k": 3.21,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "diamond-4"
        }
      },
      {
        "d": "2026-09-18",
        "g": {},
        "m": 10067,
        "w": 5246,
        "l": 4821,
        "t": 5269671,
        "k": 3.21,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "diamond-4"
        }
      },
      {
        "d": "2026-09-19",
        "g": {},
        "m": 10067,
        "w": 5246,
        "l": 4821,
        "t": 5269671,
        "k": 3.21,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "diamond-4"
        }
      },
      {
        "d": "2026-09-20",
        "g": {
          "ana": 6,
          "cassidy": 12,
          "doomfist": 1,
          "freja": 1,
          "genji": 6,
          "illari": 5,
          "junker-queen": 1,
          "pharah": 2,
          "ramattra": 1,
          "sojourn": 3,
          "tracer": 4,
          "winston": 4,
          "baptiste": 1,
          "brigitte": 1,
          "doctrine": 3,
          "junkrat": 1,
          "lucio": 1,
          "mizuki": 1,
          "shion": 2,
          "wuyang": 4
        },
        "m": 10067,
        "w": 5246,
        "l": 4821,
        "t": 5269671,
        "k": 3.21,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "diamond-4"
        }
      },
      {
        "d": "2026-09-21",
        "g": {},
        "m": 10067,
        "w": 5246,
        "l": 4821,
        "t": 5269671,
        "k": 3.21,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "diamond-4"
        }
      },
      {
        "d": "2026-09-22",
        "g": {},
        "m": 10067,
        "w": 5246,
        "l": 4821,
        "t": 5269671,
        "k": 3.21,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "diamond-4"
        }
      },
      {
        "d": "2026-09-23",
        "g": {},
        "m": 10067,
        "w": 5246,
        "l": 4821,
        "t": 5269671,
        "k": 3.21,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "diamond-4"
        }
      },
      {
        "d": "2026-09-24",
        "g": {
          "ana": 9,
          "cassidy": 8,
          "illari": 1,
          "tracer": 6,
          "lucio": 1,
          "shion": 3,
          "wuyang": 1
        },
        "m": 10096,
        "w": 5259,
        "l": 4837,
        "t": 5287892,
        "k": 3.21,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "diamond-4"
        }
      },
      {
        "d": "2026-09-25",
        "g": {
          "ana": 3,
          "cassidy": 1,
          "illari": 1,
          "ramattra": 1,
          "sigma": 1,
          "tracer": 1,
          "dva": 1,
          "shion": 1,
          "wuyang": 4
        },
        "m": 10110,
        "w": 5268,
        "l": 4842,
        "t": 5294066,
        "k": 3.21,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "diamond-4"
        }
      },
      {
        "d": "2026-09-26",
        "g": {
          "cassidy": 1,
          "vendetta": 1
        },
        "m": 10112,
        "w": 5270,
        "l": 4842,
        "t": 5295500,
        "k": 3.21,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "diamond-4"
        }
      },
      {
        "d": "2026-09-27",
        "g": {
          "ana": 14,
          "brigitte": 2,
          "kiriko": 1,
          "reaper": 2,
          "sojourn": 1,
          "sombra": 1,
          "tracer": 3,
          "wuyang": 3,
          "vendetta": 1
        },
        "m": 10140,
        "w": 5290,
        "l": 4850,
        "t": 5311641,
        "k": 3.21,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-09-28",
        "g": {
          "ana": 3,
          "genji": 3,
          "sojourn": 2,
          "tracer": 2,
          "wuyang": 1,
          "jetpack-cat": 2,
          "vendetta": 2
        },
        "m": 10155,
        "w": 5300,
        "l": 4855,
        "t": 5319168,
        "k": 3.21,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-09-29",
        "g": {},
        "m": 10155,
        "w": 5300,
        "l": 4855,
        "t": 5319168,
        "k": 3.21,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-09-30",
        "g": {},
        "m": 10155,
        "w": 5300,
        "l": 4855,
        "t": 5319168,
        "k": 3.21,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-01",
        "g": {},
        "m": 10155,
        "w": 5300,
        "l": 4855,
        "t": 5319168,
        "k": 3.21,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-02",
        "g": {},
        "m": 10155,
        "w": 5300,
        "l": 4855,
        "t": 5319168,
        "k": 3.21,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-03",
        "g": {},
        "m": 10155,
        "w": 5300,
        "l": 4855,
        "t": 5319168,
        "k": 3.21,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-04",
        "g": {},
        "m": 10155,
        "w": 5300,
        "l": 4855,
        "t": 5319168,
        "k": 3.21,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-05",
        "g": {},
        "m": 10155,
        "w": 5300,
        "l": 4855,
        "t": 5319168,
        "k": 3.21,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-06",
        "g": {},
        "m": 10177,
        "w": 5317,
        "l": 4860,
        "t": 5330058,
        "k": 3.21,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-07",
        "g": {},
        "m": 10191,
        "w": 5322,
        "l": 4869,
        "t": 5337252,
        "k": 3.21,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-08",
        "g": {},
        "m": 10200,
        "w": 5322,
        "l": 4878,
        "t": 5342063,
        "k": 3.21,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-09",
        "g": {},
        "m": 10200,
        "w": 5322,
        "l": 4878,
        "t": 5342063,
        "k": 3.21,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-10",
        "g": {},
        "m": 10218,
        "w": 5329,
        "l": 4889,
        "t": 5352286,
        "k": 3.21,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-11",
        "g": {},
        "m": 10229,
        "w": 5337,
        "l": 4892,
        "t": 5359036,
        "k": 3.21,
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-12",
        "g": {},
        "m": 10229,
        "w": 5337,
        "l": 4892,
        "t": 5359036,
        "k": 3.21,
        "tot": {
          "e": 134685,
          "a": 24126,
          "dd": 49468,
          "dm": 69682805,
          "he": 37632102
        },
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-13",
        "g": {
          "ana": 1,
          "cassidy": 2,
          "kiriko": 1,
          "sombra": 1,
          "doctrine": 1,
          "jetpack-cat": 1
        },
        "m": 10236,
        "w": 5341,
        "l": 4895,
        "t": 5363150,
        "k": 3.21,
        "tot": {
          "e": 134804,
          "a": 24147,
          "dd": 49497,
          "dm": 69734829,
          "he": 37678056
        },
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-14",
        "g": {
          "junker-queen": 1,
          "sigma": 1,
          "winston": 1,
          "orisa": 1,
          "zarya": 1
        },
        "m": 10241,
        "w": 5345,
        "l": 4896,
        "t": 5365797,
        "k": 3.21,
        "tot": {
          "e": 134944,
          "a": 24157,
          "dd": 49508,
          "dm": 69805912,
          "he": 37685351
        },
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-15",
        "g": {
          "ana": 3,
          "kiriko": 1,
          "sombra": 2,
          "doctrine": 1,
          "zenyatta": 1
        },
        "m": 10249,
        "w": 5347,
        "l": 4902,
        "t": 5369766,
        "k": 3.21,
        "tot": {
          "e": 135026,
          "a": 24195,
          "dd": 49540,
          "dm": 69846136,
          "he": 37743348
        },
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      },
      {
        "d": "2026-10-16",
        "g": {},
        "m": 10249,
        "w": 5347,
        "l": 4902,
        "t": 5369766,
        "k": 3.21,
        "tot": {
          "e": 135026,
          "a": 24195,
          "dd": 49540,
          "dm": 69846136,
          "he": 37743348
        },
        "r": {
          "Tank": null,
          "Damage": "diamond-5",
          "Support": "master-5"
        }
      }
    ]
  },
  {
    "id": "p5",
    "pid": "ff51a299a77489a1fcfd7ee8c902a10944|1135587ecccb4c908589fccfd617a51b",
    "name": "monsterlumix",
    "tag": "",
    "endorse": 3,
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
      "matches": 999,
      "wins": 513,
      "losses": 486,
      "wr": 51.35,
      "kda": 2.32,
      "elim": 13.98,
      "deaths": 6.87,
      "dmg": 8093.67,
      "heal": 3154.7,
      "time": 491738,
      "tot": {
        "e": 11455,
        "a": 1597,
        "dd": 5627,
        "dm": 6633276,
        "he": 2585479
      }
    },
    "roles": {
      "Tank": {
        "g": 274,
        "w": 132,
        "l": 142,
        "time": 137428,
        "wr": 48.18,
        "kda": 2.81,
        "elim": 17.14,
        "deaths": 6.54,
        "dmg": 10731.28,
        "heal": 1386.63
      },
      "Damage": {
        "g": 336,
        "w": 178,
        "l": 158,
        "time": 163337,
        "wr": 52.98,
        "kda": 1.92,
        "elim": 15.34,
        "deaths": 8.2,
        "dmg": 10052.73,
        "heal": 329.63
      },
      "Support": {
        "g": 389,
        "w": 203,
        "l": 186,
        "time": 190973,
        "wr": 52.19,
        "kda": 2.41,
        "elim": 10.53,
        "deaths": 5.96,
        "dmg": 4520.03,
        "heal": 6843.3
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
        "slug": "reaper",
        "n": "Reaper",
        "role": "Damage",
        "g": 29,
        "wr": 44.83,
        "kda": 1.86
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
        "kda": 3.31
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
        "slug": "sombra",
        "n": "Sombra",
        "role": "Support",
        "g": 26,
        "wr": 57.69,
        "kda": 4.18
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
        "slug": "bastion",
        "n": "Bastion",
        "role": "Damage",
        "g": 24,
        "wr": 58.33,
        "kda": 2.23
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
        "slug": "soldier-76",
        "n": "Soldier: 76",
        "role": "Damage",
        "g": 22,
        "wr": 50,
        "kda": 2.05
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
        "slug": "orisa",
        "n": "Orisa",
        "role": "Tank",
        "g": 20,
        "wr": 40,
        "kda": 2.86
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
        "slug": "hanzo",
        "n": "Hanzo",
        "role": "Damage",
        "g": 13,
        "wr": 76.92,
        "kda": 1.97
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
        "slug": "echo",
        "n": "Echo",
        "role": "Damage",
        "g": 12,
        "wr": 41.67,
        "kda": 1.71
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
        "slug": "sierra",
        "n": "Sierra",
        "role": "Damage",
        "g": 9,
        "wr": 44.44,
        "kda": 2.45
      },
      {
        "slug": "vendetta",
        "n": "Vendetta",
        "role": "Damage",
        "g": 9,
        "wr": 55.56,
        "kda": 1.15
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
        "slug": "doctrine",
        "n": "Doctrine",
        "role": "Support",
        "g": 2,
        "wr": 50,
        "kda": 1.8
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
        "finalScore": 44.67,
        "battleScore": 39.62,
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
        }
      },
      "doomfist": {
        "finalScore": 50.83,
        "battleScore": 41.39,
        "coeff": 1.1,
        "matchCoef": 1.12,
        "gamesPlayed": 96,
        "rankIndex": 1,
        "det": {
          "g": 96,
          "time": 49382,
          "wr": 53.729166666666664,
          "el10": 17.825416666666666,
          "de10": 6.9521875,
          "dm10": 7912.416666666667,
          "he10": 1502.5520833333333,
          "as10": 4.333541666666666,
          "wa": 21.947916666666668,
          "ca": 10
        }
      },
      "mauga": {
        "finalScore": 54.57,
        "battleScore": 40.3,
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
        }
      },
      "reaper": {
        "finalScore": 55.33,
        "battleScore": 38.76,
        "coeff": 1,
        "matchCoef": 1.01,
        "gamesPlayed": 29,
        "rankIndex": 0,
        "det": {
          "g": 29,
          "time": 14363,
          "wr": 45.13793103448276,
          "el10": 15.903793103448276,
          "de10": 8.508275862068967,
          "dm10": 5767.896551724138,
          "he10": 1155.9310344827586,
          "as10": 0.04655172413793104,
          "wa": 27.448275862068964,
          "ca": 8.931034482758621
        },
        "rankDelta": -1
      },
      "reinhardt": {
        "finalScore": 44.97,
        "battleScore": 41.88,
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
        "finalScore": 58.67,
        "battleScore": 45.19,
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
        }
      },
      "winston": {
        "finalScore": 41.25,
        "battleScore": 37.02,
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
        }
      },
      "anran": {
        "finalScore": 53.13,
        "battleScore": 38.98,
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
        "rankDelta": -1
      },
      "ashe": {
        "finalScore": 38.15,
        "battleScore": 39.08,
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
        }
      },
      "baptiste": {
        "finalScore": 33.4,
        "battleScore": 35.16,
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
        "finalScore": 56.2,
        "battleScore": 43.84,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 24,
        "rankIndex": 0,
        "det": {
          "g": 24,
          "time": 12065,
          "wr": 58,
          "el10": 17.06,
          "de10": 7.66,
          "dm10": 9671,
          "he10": 182,
          "as10": 1.84,
          "wa": 26,
          "ca": 2
        }
      },
      "brigitte": {
        "finalScore": 37.88,
        "battleScore": 37.88,
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
        "finalScore": 39.15,
        "battleScore": 38.04,
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
        }
      },
      "dmon": {
        "finalScore": 38.35,
        "battleScore": 41.02,
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
      "doctrine": {
        "finalScore": 33.16,
        "battleScore": 39.01,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 1183,
          "wr": 52,
          "el10": 9.13,
          "de10": 5.07,
          "dm10": 3806,
          "he10": 8091,
          "as10": 16.23,
          "wa": 47,
          "ca": 0
        },
        "rankDelta": 1,
        "rankDeltaPower": 1
      },
      "domina": {
        "finalScore": 42.3,
        "battleScore": 44.67,
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
        }
      },
      "dva": {
        "finalScore": 37.2,
        "battleScore": 38.59,
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
        }
      },
      "echo": {
        "finalScore": 36.42,
        "battleScore": 38.89,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 0,
        "det": {
          "g": 12,
          "time": 6016,
          "wr": 44,
          "el10": 15.66,
          "de10": 9.18,
          "dm10": 7236,
          "he10": 214,
          "as10": 0.4,
          "wa": 24,
          "ca": 10
        },
        "rankDelta": 3,
        "rankDeltaPower": 1
      },
      "emre": {
        "finalScore": 32.39,
        "battleScore": 34.59,
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
        }
      },
      "freja": {
        "finalScore": 32.54,
        "battleScore": 37.81,
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
        }
      },
      "genji": {
        "finalScore": 39.93,
        "battleScore": 39.93,
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
        }
      },
      "hazard": {
        "finalScore": 37.83,
        "battleScore": 39.95,
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
        "finalScore": 40.53,
        "battleScore": 42.96,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 0,
        "det": {
          "g": 13,
          "time": 5424,
          "wr": 75,
          "el10": 13.05,
          "de10": 6.64,
          "dm10": 7068,
          "he10": 0,
          "as10": 3.65,
          "wa": 21,
          "ca": 7
        }
      },
      "illari": {
        "finalScore": 38.63,
        "battleScore": 42.86,
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
        }
      },
      "jetpack-cat": {
        "finalScore": 34.82,
        "battleScore": 38.63,
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
        "rankDelta": -1
      },
      "junker-queen": {
        "finalScore": 36.69,
        "battleScore": 38.05,
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
        }
      },
      "junkrat": {
        "finalScore": 45.69,
        "battleScore": 47.02,
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
        }
      },
      "juno": {
        "finalScore": 37.27,
        "battleScore": 40.48,
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
        }
      },
      "kiriko": {
        "finalScore": 34.39,
        "battleScore": 34.28,
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
        }
      },
      "lifeweaver": {
        "finalScore": 42.37,
        "battleScore": 38.78,
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
        "rankDelta": -1
      },
      "lucio": {
        "finalScore": 41.01,
        "battleScore": 42.91,
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
        }
      },
      "mei": {
        "finalScore": 39.3,
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
        }
      },
      "mercy": {
        "finalScore": 30.05,
        "battleScore": 34.29,
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
        "finalScore": 35.1,
        "battleScore": 40.05,
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
        "rankDelta": 1,
        "rankDeltaPower": 1
      },
      "moira": {
        "finalScore": 61.99,
        "battleScore": 44.03,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 28,
        "rankIndex": 0,
        "det": {
          "g": 28,
          "time": 14211,
          "wr": 59,
          "el10": 19.84,
          "de10": 6,
          "dm10": 5828,
          "he10": 7809,
          "as10": 12.37,
          "wa": 0,
          "ca": 0
        }
      },
      "orisa": {
        "finalScore": 39.58,
        "battleScore": 36.69,
        "coeff": 1.1,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 1,
        "det": {
          "g": 20,
          "time": 10202,
          "wr": 41,
          "el10": 17.11,
          "de10": 6.88,
          "dm10": 10621,
          "he10": 0,
          "as10": 2.88,
          "wa": 32,
          "ca": 10
        }
      },
      "pharah": {
        "finalScore": 32.67,
        "battleScore": 35.84,
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
        }
      },
      "ramattra": {
        "finalScore": 49.08,
        "battleScore": 34.6,
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
        }
      },
      "roadhog": {
        "finalScore": 47.45,
        "battleScore": 43.29,
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
        }
      },
      "shion": {
        "finalScore": 36.94,
        "battleScore": 39.44,
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
        }
      },
      "sierra": {
        "finalScore": 35.89,
        "battleScore": 39.38,
        "coeff": 1,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 0,
        "det": {
          "g": 9,
          "time": 5204,
          "wr": 50,
          "el10": 18.1,
          "de10": 7.38,
          "dm10": 9140,
          "he10": 0,
          "as10": 1.15,
          "wa": 26,
          "ca": 8
        }
      },
      "sojourn": {
        "finalScore": 33.08,
        "battleScore": 37.18,
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
        "rankDeltaPower": -1
      },
      "soldier-76": {
        "finalScore": 37.7,
        "battleScore": 38.12,
        "coeff": 1,
        "matchCoef": 0.99,
        "gamesPlayed": 22,
        "rankIndex": 0,
        "det": {
          "g": 22,
          "time": 10029,
          "wr": 51,
          "el10": 15.67,
          "de10": 7.66,
          "dm10": 7400,
          "he10": 1166,
          "as10": 1.02,
          "wa": 27,
          "ca": 8
        }
      },
      "sombra": {
        "finalScore": 43.39,
        "battleScore": 43.24,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 26,
        "rankIndex": 0,
        "det": {
          "g": 26,
          "time": 13126,
          "wr": 59,
          "el10": 17.14,
          "de10": 5.94,
          "dm10": 5430,
          "he10": 2651,
          "as10": 12.16,
          "wa": 30,
          "ca": 8
        }
      },
      "symmetra": {
        "finalScore": 38.99,
        "battleScore": 45.3,
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
        }
      },
      "torbjorn": {
        "finalScore": 41.44,
        "battleScore": 44.25,
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
        "finalScore": 32.15,
        "battleScore": 34.34,
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
        }
      },
      "vendetta": {
        "finalScore": 36.28,
        "battleScore": 39.8,
        "coeff": 1,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 0,
        "det": {
          "g": 9,
          "time": 4553,
          "wr": 61,
          "el10": 14.1,
          "de10": 12.25,
          "dm10": 6538,
          "he10": 151,
          "as10": 2.5,
          "wa": 0,
          "ca": 0
        },
        "rankDeltaPower": -1
      },
      "venture": {
        "finalScore": 39.17,
        "battleScore": 41.52,
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
        }
      },
      "widowmaker": {
        "finalScore": 32.47,
        "battleScore": 38.2,
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
        }
      },
      "wrecking-ball": {
        "finalScore": 38.5,
        "battleScore": 38.83,
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
        "finalScore": 35.08,
        "battleScore": 40.03,
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
        "rankDelta": -1,
        "rankDeltaPower": -1
      },
      "zarya": {
        "finalScore": 47.44,
        "battleScore": 35.92,
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
        "finalScore": 43.49,
        "battleScore": 43.21,
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
        }
      }
    },
    "bscoreAll": {
      "ana": {
        "finalScore": 44.67,
        "battleScore": 39.62,
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
        }
      },
      "doomfist": {
        "finalScore": 50.83,
        "battleScore": 41.39,
        "coeff": 1.1,
        "matchCoef": 1.12,
        "gamesPlayed": 96,
        "rankIndex": 1,
        "det": {
          "g": 96,
          "time": 49382,
          "wr": 53.729166666666664,
          "el10": 17.825416666666666,
          "de10": 6.9521875,
          "dm10": 7912.416666666667,
          "he10": 1502.5520833333333,
          "as10": 4.333541666666666,
          "wa": 21.947916666666668,
          "ca": 10
        }
      },
      "mauga": {
        "finalScore": 54.57,
        "battleScore": 40.3,
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
        }
      },
      "reaper": {
        "finalScore": 55.33,
        "battleScore": 38.76,
        "coeff": 1,
        "matchCoef": 1.01,
        "gamesPlayed": 29,
        "rankIndex": 0,
        "det": {
          "g": 29,
          "time": 14363,
          "wr": 45.13793103448276,
          "el10": 15.903793103448276,
          "de10": 8.508275862068967,
          "dm10": 5767.896551724138,
          "he10": 1155.9310344827586,
          "as10": 0.04655172413793104,
          "wa": 27.448275862068964,
          "ca": 8.931034482758621
        },
        "rankDelta": -1
      },
      "reinhardt": {
        "finalScore": 44.97,
        "battleScore": 41.88,
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
        "finalScore": 58.67,
        "battleScore": 45.19,
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
        }
      },
      "winston": {
        "finalScore": 41.25,
        "battleScore": 37.02,
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
        }
      },
      "anran": {
        "finalScore": 53.13,
        "battleScore": 38.98,
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
        "rankDelta": -1
      },
      "ashe": {
        "finalScore": 38.15,
        "battleScore": 39.08,
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
        }
      },
      "baptiste": {
        "finalScore": 33.4,
        "battleScore": 35.16,
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
        "finalScore": 56.2,
        "battleScore": 43.84,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 24,
        "rankIndex": 0,
        "det": {
          "g": 24,
          "time": 12065,
          "wr": 58,
          "el10": 17.06,
          "de10": 7.66,
          "dm10": 9671,
          "he10": 182,
          "as10": 1.84,
          "wa": 26,
          "ca": 2
        }
      },
      "brigitte": {
        "finalScore": 37.88,
        "battleScore": 37.88,
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
        "finalScore": 39.15,
        "battleScore": 38.04,
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
        }
      },
      "dmon": {
        "finalScore": 38.35,
        "battleScore": 41.02,
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
      "doctrine": {
        "finalScore": 33.16,
        "battleScore": 39.01,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 1183,
          "wr": 52,
          "el10": 9.13,
          "de10": 5.07,
          "dm10": 3806,
          "he10": 8091,
          "as10": 16.23,
          "wa": 47,
          "ca": 0
        },
        "rankDelta": 1,
        "rankDeltaPower": 1
      },
      "domina": {
        "finalScore": 42.3,
        "battleScore": 44.67,
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
        }
      },
      "dva": {
        "finalScore": 37.2,
        "battleScore": 38.59,
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
        }
      },
      "echo": {
        "finalScore": 36.42,
        "battleScore": 38.89,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 0,
        "det": {
          "g": 12,
          "time": 6016,
          "wr": 44,
          "el10": 15.66,
          "de10": 9.18,
          "dm10": 7236,
          "he10": 214,
          "as10": 0.4,
          "wa": 24,
          "ca": 10
        },
        "rankDelta": 3,
        "rankDeltaPower": 1
      },
      "emre": {
        "finalScore": 32.39,
        "battleScore": 34.59,
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
        }
      },
      "freja": {
        "finalScore": 32.54,
        "battleScore": 37.81,
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
        }
      },
      "genji": {
        "finalScore": 39.93,
        "battleScore": 39.93,
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
        }
      },
      "hazard": {
        "finalScore": 37.83,
        "battleScore": 39.95,
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
        "finalScore": 40.53,
        "battleScore": 42.96,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 0,
        "det": {
          "g": 13,
          "time": 5424,
          "wr": 75,
          "el10": 13.05,
          "de10": 6.64,
          "dm10": 7068,
          "he10": 0,
          "as10": 3.65,
          "wa": 21,
          "ca": 7
        }
      },
      "illari": {
        "finalScore": 38.63,
        "battleScore": 42.86,
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
        }
      },
      "jetpack-cat": {
        "finalScore": 34.82,
        "battleScore": 38.63,
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
        "rankDelta": -1
      },
      "junker-queen": {
        "finalScore": 36.69,
        "battleScore": 38.05,
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
        }
      },
      "junkrat": {
        "finalScore": 45.69,
        "battleScore": 47.02,
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
        }
      },
      "juno": {
        "finalScore": 37.27,
        "battleScore": 40.48,
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
        }
      },
      "kiriko": {
        "finalScore": 34.39,
        "battleScore": 34.28,
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
        }
      },
      "lifeweaver": {
        "finalScore": 42.37,
        "battleScore": 38.78,
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
        "rankDelta": -1
      },
      "lucio": {
        "finalScore": 41.01,
        "battleScore": 42.91,
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
        }
      },
      "mei": {
        "finalScore": 39.3,
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
        }
      },
      "mercy": {
        "finalScore": 30.05,
        "battleScore": 34.29,
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
        "finalScore": 35.1,
        "battleScore": 40.05,
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
        "rankDelta": 1,
        "rankDeltaPower": 1
      },
      "moira": {
        "finalScore": 61.99,
        "battleScore": 44.03,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 28,
        "rankIndex": 0,
        "det": {
          "g": 28,
          "time": 14211,
          "wr": 59,
          "el10": 19.84,
          "de10": 6,
          "dm10": 5828,
          "he10": 7809,
          "as10": 12.37,
          "wa": 0,
          "ca": 0
        }
      },
      "orisa": {
        "finalScore": 39.58,
        "battleScore": 36.69,
        "coeff": 1.1,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 1,
        "det": {
          "g": 20,
          "time": 10202,
          "wr": 41,
          "el10": 17.11,
          "de10": 6.88,
          "dm10": 10621,
          "he10": 0,
          "as10": 2.88,
          "wa": 32,
          "ca": 10
        }
      },
      "pharah": {
        "finalScore": 32.67,
        "battleScore": 35.84,
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
        }
      },
      "ramattra": {
        "finalScore": 49.08,
        "battleScore": 34.6,
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
        }
      },
      "roadhog": {
        "finalScore": 47.45,
        "battleScore": 43.29,
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
        }
      },
      "shion": {
        "finalScore": 36.94,
        "battleScore": 39.44,
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
        }
      },
      "sierra": {
        "finalScore": 35.89,
        "battleScore": 39.38,
        "coeff": 1,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 0,
        "det": {
          "g": 9,
          "time": 5204,
          "wr": 50,
          "el10": 18.1,
          "de10": 7.38,
          "dm10": 9140,
          "he10": 0,
          "as10": 1.15,
          "wa": 26,
          "ca": 8
        }
      },
      "sojourn": {
        "finalScore": 33.08,
        "battleScore": 37.18,
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
        "rankDeltaPower": -1
      },
      "soldier-76": {
        "finalScore": 37.7,
        "battleScore": 38.12,
        "coeff": 1,
        "matchCoef": 0.99,
        "gamesPlayed": 22,
        "rankIndex": 0,
        "det": {
          "g": 22,
          "time": 10029,
          "wr": 51,
          "el10": 15.67,
          "de10": 7.66,
          "dm10": 7400,
          "he10": 1166,
          "as10": 1.02,
          "wa": 27,
          "ca": 8
        }
      },
      "sombra": {
        "finalScore": 43.39,
        "battleScore": 43.24,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 26,
        "rankIndex": 0,
        "det": {
          "g": 26,
          "time": 13126,
          "wr": 59,
          "el10": 17.14,
          "de10": 5.94,
          "dm10": 5430,
          "he10": 2651,
          "as10": 12.16,
          "wa": 30,
          "ca": 8
        }
      },
      "symmetra": {
        "finalScore": 38.99,
        "battleScore": 45.3,
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
        }
      },
      "torbjorn": {
        "finalScore": 41.44,
        "battleScore": 44.25,
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
        "finalScore": 32.15,
        "battleScore": 34.34,
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
        }
      },
      "vendetta": {
        "finalScore": 36.28,
        "battleScore": 39.8,
        "coeff": 1,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 0,
        "det": {
          "g": 9,
          "time": 4553,
          "wr": 61,
          "el10": 14.1,
          "de10": 12.25,
          "dm10": 6538,
          "he10": 151,
          "as10": 2.5,
          "wa": 0,
          "ca": 0
        },
        "rankDeltaPower": -1
      },
      "venture": {
        "finalScore": 39.17,
        "battleScore": 41.52,
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
        }
      },
      "widowmaker": {
        "finalScore": 32.47,
        "battleScore": 38.2,
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
        }
      },
      "wrecking-ball": {
        "finalScore": 38.5,
        "battleScore": 38.83,
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
        "finalScore": 35.08,
        "battleScore": 40.03,
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
        "rankDelta": -1,
        "rankDeltaPower": -1
      },
      "zarya": {
        "finalScore": 47.44,
        "battleScore": 35.92,
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
        "finalScore": 43.49,
        "battleScore": 43.21,
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
        }
      }
    },
    "recent": [
      {
        "d": "2026-09-17",
        "g": {},
        "m": 978,
        "w": 503,
        "l": 475,
        "t": 480312,
        "k": 2.3,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-18",
        "g": {},
        "m": 978,
        "w": 503,
        "l": 475,
        "t": 480312,
        "k": 2.3,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-19",
        "g": {},
        "m": 978,
        "w": 503,
        "l": 475,
        "t": 480312,
        "k": 2.3,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-20",
        "g": {},
        "m": 978,
        "w": 503,
        "l": 475,
        "t": 480312,
        "k": 2.3,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-21",
        "g": {},
        "m": 978,
        "w": 503,
        "l": 475,
        "t": 480312,
        "k": 2.3,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-22",
        "g": {},
        "m": 978,
        "w": 503,
        "l": 475,
        "t": 480312,
        "k": 2.3,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-23",
        "g": {
          "reaper": 3,
          "bastion": 1,
          "orisa": 1
        },
        "m": 983,
        "w": 504,
        "l": 479,
        "t": 482849,
        "k": 2.29,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-24",
        "g": {},
        "m": 983,
        "w": 504,
        "l": 479,
        "t": 482849,
        "k": 2.29,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-25",
        "g": {},
        "m": 983,
        "w": 504,
        "l": 479,
        "t": 482849,
        "k": 2.29,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-26",
        "g": {},
        "m": 983,
        "w": 504,
        "l": 479,
        "t": 482849,
        "k": 2.29,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-27",
        "g": {},
        "m": 983,
        "w": 504,
        "l": 479,
        "t": 482849,
        "k": 2.29,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-28",
        "g": {},
        "m": 983,
        "w": 504,
        "l": 479,
        "t": 482849,
        "k": 2.29,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-29",
        "g": {},
        "m": 983,
        "w": 504,
        "l": 479,
        "t": 482849,
        "k": 2.29,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-30",
        "g": {},
        "m": 983,
        "w": 504,
        "l": 479,
        "t": 482849,
        "k": 2.29,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-01",
        "g": {},
        "m": 983,
        "w": 504,
        "l": 479,
        "t": 482849,
        "k": 2.29,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-02",
        "g": {},
        "m": 983,
        "w": 504,
        "l": 479,
        "t": 482849,
        "k": 2.29,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-03",
        "g": {},
        "m": 983,
        "w": 504,
        "l": 479,
        "t": 482849,
        "k": 2.29,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-04",
        "g": {},
        "m": 983,
        "w": 504,
        "l": 479,
        "t": 482849,
        "k": 2.29,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-05",
        "g": {},
        "m": 983,
        "w": 504,
        "l": 479,
        "t": 482849,
        "k": 2.29,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-06",
        "g": {},
        "m": 987,
        "w": 507,
        "l": 480,
        "t": 485166,
        "k": 2.3,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-07",
        "g": {},
        "m": 988,
        "w": 508,
        "l": 480,
        "t": 485622,
        "k": 2.3,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-08",
        "g": {},
        "m": 994,
        "w": 513,
        "l": 481,
        "t": 489078,
        "k": 2.32,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-09",
        "g": {},
        "m": 999,
        "w": 513,
        "l": 486,
        "t": 491738,
        "k": 2.32,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-10",
        "g": {},
        "m": 999,
        "w": 513,
        "l": 486,
        "t": 491738,
        "k": 2.32,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-11",
        "g": {},
        "m": 999,
        "w": 513,
        "l": 486,
        "t": 491738,
        "k": 2.32,
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-12",
        "g": {},
        "m": 999,
        "w": 513,
        "l": 486,
        "t": 491738,
        "k": 2.32,
        "tot": {
          "e": 11455,
          "a": 1597,
          "dd": 5627,
          "dm": 6633276,
          "he": 2585479
        },
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-13",
        "g": {},
        "m": 999,
        "w": 513,
        "l": 486,
        "t": 491738,
        "k": 2.32,
        "tot": {
          "e": 11455,
          "a": 1597,
          "dd": 5627,
          "dm": 6633276,
          "he": 2585479
        },
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-14",
        "g": {},
        "m": 999,
        "w": 513,
        "l": 486,
        "t": 491738,
        "k": 2.32,
        "tot": {
          "e": 11455,
          "a": 1597,
          "dd": 5627,
          "dm": 6633276,
          "he": 2585479
        },
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-15",
        "g": {},
        "m": 999,
        "w": 513,
        "l": 486,
        "t": 491738,
        "k": 2.32,
        "tot": {
          "e": 11455,
          "a": 1597,
          "dd": 5627,
          "dm": 6633276,
          "he": 2585479
        },
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-16",
        "g": {},
        "m": 999,
        "w": 513,
        "l": 486,
        "t": 491738,
        "k": 2.32,
        "tot": {
          "e": 11455,
          "a": 1597,
          "dd": 5627,
          "dm": 6633276,
          "he": 2585479
        },
        "r": {
          "Tank": "silver-2",
          "Damage": null,
          "Support": null
        }
      }
    ]
  },
  {
    "id": "p6",
    "pid": "71bf70095182184f0d73951a07b23cdaffe87714138babe0e152|a2b9c2e5b32c51c94cb79749c9d6a226",
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
      "matches": 804,
      "wins": 381,
      "losses": 423,
      "wr": 47.39,
      "kda": 2.06,
      "elim": 14.41,
      "deaths": 7.86,
      "dmg": 9013.85,
      "heal": 2760.03,
      "time": 412202,
      "tot": {
        "e": 9897,
        "a": 1229,
        "dd": 5401,
        "dm": 6192544,
        "he": 1896150
      }
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
        "g": 288,
        "w": 136,
        "l": 152,
        "time": 142773,
        "wr": 47.22,
        "kda": 1.6,
        "elim": 14.29,
        "deaths": 9.16,
        "dmg": 10205.27,
        "heal": 224.73
      },
      "Support": {
        "g": 248,
        "w": 129,
        "l": 119,
        "time": 133852,
        "wr": 52.02,
        "kda": 2.28,
        "elim": 12.84,
        "deaths": 7.23,
        "dmg": 5474.48,
        "heal": 7650.54
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
        "g": 82,
        "wr": 56.1,
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
        "g": 24,
        "wr": 37.5,
        "kda": 1.7
      },
      {
        "slug": "pharah",
        "n": "Pharah",
        "role": "Damage",
        "g": 24,
        "wr": 54.17,
        "kda": 1.48
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
        "wr": 38.46,
        "kda": 1.65
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
        "wr": 50,
        "kda": 2.75
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
        "g": 9,
        "wr": 33.33,
        "kda": 1.9
      },
      {
        "slug": "freja",
        "n": "Freja",
        "role": "Damage",
        "g": 8,
        "wr": 37.5,
        "kda": 1.42
      },
      {
        "slug": "sojourn",
        "n": "Sojourn",
        "role": "Damage",
        "g": 7,
        "wr": 42.86,
        "kda": 1.34
      },
      {
        "slug": "sombra",
        "n": "Sombra",
        "role": "Support",
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
        "slug": "anran",
        "n": "Anran",
        "role": "Damage",
        "g": 5,
        "wr": 60,
        "kda": 1.69
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
        "kda": 0.75
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
        "finalScore": 59.48,
        "battleScore": 40.52,
        "coeff": 1.33,
        "matchCoef": 1.1,
        "gamesPlayed": 82,
        "rankIndex": 3,
        "det": {
          "g": 82,
          "time": 44228,
          "wr": 56.36585365853659,
          "el10": 10.84390243902439,
          "de10": 7.107317073170731,
          "dm10": 3756.829268292683,
          "he10": 6074.756097560976,
          "as10": 12.04878048780488,
          "wa": 42.34146341463415,
          "ca": 0
        }
      },
      "echo": {
        "finalScore": 43.33,
        "battleScore": 34.51,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 3,
        "det": {
          "g": 13,
          "time": 6850,
          "wr": 39.69230769230769,
          "el10": 14.147692307692308,
          "de10": 8.56,
          "dm10": 7774.153846153846,
          "he10": 15.553846153846155,
          "as10": 0.6000000000000001,
          "wa": 19.46153846153846,
          "ca": 9.76923076923077
        },
        "rankDelta": 1,
        "rankDeltaPower": 1
      },
      "sigma": {
        "finalScore": 62.37,
        "battleScore": 41.98,
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
        }
      },
      "soldier-76": {
        "finalScore": 46.61,
        "battleScore": 38.41,
        "coeff": 1.33,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 3,
        "det": {
          "g": 9,
          "time": 4887,
          "wr": 35.55555555555556,
          "el10": 16.985555555555557,
          "de10": 9.008888888888889,
          "dm10": 9869.333333333334,
          "he10": 1321,
          "as10": 1.511111111111111,
          "wa": 30.444444444444443,
          "ca": 9.88888888888889
        }
      },
      "anran": {
        "finalScore": 59.8,
        "battleScore": 43.07,
        "coeff": 1.33,
        "matchCoef": 0.93,
        "gamesPlayed": 5,
        "rankIndex": 3,
        "det": {
          "g": 5,
          "time": 2463,
          "wr": 71,
          "el10": 18.51,
          "de10": 10.96,
          "dm10": 7980,
          "he10": 709,
          "as10": 0.49,
          "wa": 31,
          "ca": 11
        },
        "rankDelta": -1
      },
      "ashe": {
        "finalScore": 49.7,
        "battleScore": 37.48,
        "coeff": 1.33,
        "matchCoef": 1,
        "gamesPlayed": 24,
        "rankIndex": 3,
        "det": {
          "g": 24,
          "time": 11144,
          "wr": 40,
          "el10": 13.84,
          "de10": 7.97,
          "dm10": 8933,
          "he10": 0,
          "as10": 1.72,
          "wa": 41,
          "ca": 11
        }
      },
      "baptiste": {
        "finalScore": 49.77,
        "battleScore": 39.93,
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
        "finalScore": 54.23,
        "battleScore": 30.73,
        "coeff": 1.33,
        "matchCoef": 0.99,
        "gamesPlayed": 19,
        "rankIndex": 3,
        "det": {
          "g": 19,
          "time": 9532,
          "wr": 27,
          "el10": 15.61,
          "de10": 10.2,
          "dm10": 9477,
          "he10": 31,
          "as10": 2.2,
          "wa": 24,
          "ca": 2
        }
      },
      "brigitte": {
        "finalScore": 36.44,
        "battleScore": 31.81,
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
        "finalScore": 32.92,
        "battleScore": 28.74,
        "coeff": 1.33,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 3,
        "det": {
          "g": 5,
          "time": 2789,
          "wr": 16,
          "el10": 8.61,
          "de10": 11.4,
          "dm10": 6414,
          "he10": 0,
          "as10": 0.86,
          "wa": 36,
          "ca": 5
        }
      },
      "dmon": {
        "finalScore": 50.4,
        "battleScore": 44.55,
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
        }
      },
      "domina": {
        "finalScore": 46.55,
        "battleScore": 41.14,
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
        "finalScore": 55.23,
        "battleScore": 40.97,
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
        "finalScore": 38.76,
        "battleScore": 30.29,
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
        }
      },
      "freja": {
        "finalScore": 43.23,
        "battleScore": 36.03,
        "coeff": 1.33,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 3,
        "det": {
          "g": 8,
          "time": 4143,
          "wr": 29,
          "el10": 13.32,
          "de10": 9.41,
          "dm10": 7350,
          "he10": 8.24,
          "as10": 0.43,
          "wa": 29,
          "ca": 1
        },
        "rankDeltaPower": -1
      },
      "genji": {
        "finalScore": 58.47,
        "battleScore": 41.06,
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
        }
      },
      "hazard": {
        "finalScore": 35.37,
        "battleScore": 31.26,
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
        "finalScore": 44.91,
        "battleScore": 36.32,
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
        }
      },
      "illari": {
        "finalScore": 38.85,
        "battleScore": 34.34,
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
        "finalScore": 51.51,
        "battleScore": 45.53,
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
        "finalScore": 52.67,
        "battleScore": 37.87,
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
        "finalScore": 48.85,
        "battleScore": 37.43,
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
        }
      },
      "juno": {
        "finalScore": 42.69,
        "battleScore": 37.73,
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
        }
      },
      "kiriko": {
        "finalScore": 46.3,
        "battleScore": 39.69,
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
        }
      },
      "lucio": {
        "finalScore": 50.81,
        "battleScore": 39.29,
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
        "finalScore": 56.47,
        "battleScore": 37.16,
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
        }
      },
      "mei": {
        "finalScore": 45.02,
        "battleScore": 35.86,
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
        "finalScore": 49.46,
        "battleScore": 40,
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
        }
      },
      "mizuki": {
        "finalScore": 43.53,
        "battleScore": 38.47,
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
        }
      },
      "moira": {
        "finalScore": 65.76,
        "battleScore": 38.85,
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
        "finalScore": 47,
        "battleScore": 34.67,
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
        }
      },
      "pharah": {
        "finalScore": 50.59,
        "battleScore": 38.14,
        "coeff": 1.33,
        "matchCoef": 1,
        "gamesPlayed": 24,
        "rankIndex": 3,
        "det": {
          "g": 24,
          "time": 11971,
          "wr": 55,
          "el10": 14.54,
          "de10": 9.82,
          "dm10": 8390,
          "he10": 0,
          "as10": 1.25,
          "wa": 47,
          "ca": 0
        }
      },
      "ramattra": {
        "finalScore": 54.01,
        "battleScore": 35.27,
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
        }
      },
      "reaper": {
        "finalScore": 59.32,
        "battleScore": 38.31,
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
        "finalScore": 45.34,
        "battleScore": 35.24,
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
        "finalScore": 34.75,
        "battleScore": 30.71,
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
        "finalScore": 48.06,
        "battleScore": 42.48,
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
        "finalScore": 41.21,
        "battleScore": 36.42,
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
        }
      },
      "sojourn": {
        "finalScore": 45.41,
        "battleScore": 38.34,
        "coeff": 1.33,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 3,
        "det": {
          "g": 7,
          "time": 3654,
          "wr": 37,
          "el10": 13.46,
          "de10": 10.02,
          "dm10": 8422,
          "he10": 0,
          "as10": 2.13,
          "wa": 29,
          "ca": 6
        }
      },
      "sombra": {
        "finalScore": 40.26,
        "battleScore": 33.99,
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
        }
      },
      "symmetra": {
        "finalScore": 42.26,
        "battleScore": 37.35,
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
        }
      },
      "torbjorn": {
        "finalScore": 42.47,
        "battleScore": 37.54,
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
        }
      },
      "tracer": {
        "finalScore": 47.5,
        "battleScore": 36.09,
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
        "finalScore": 55.46,
        "battleScore": 41.26,
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
        }
      },
      "winston": {
        "finalScore": 43.47,
        "battleScore": 35.15,
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
        }
      },
      "wrecking-ball": {
        "finalScore": 37.25,
        "battleScore": 32.92,
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
        "finalScore": 48.76,
        "battleScore": 43.1,
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
        "finalScore": 54.2,
        "battleScore": 38.69,
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
        }
      },
      "zenyatta": {
        "finalScore": 48.29,
        "battleScore": 38.74,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 3,
        "det": {
          "g": 12,
          "time": 5683,
          "wr": 55,
          "el10": 11.3,
          "de10": 7.6,
          "dm10": 5179,
          "he10": 6688,
          "as10": 15.52,
          "wa": 23,
          "ca": 11
        }
      }
    },
    "bscoreAll": {
      "ana": {
        "finalScore": 59.48,
        "battleScore": 40.52,
        "coeff": 1.33,
        "matchCoef": 1.1,
        "gamesPlayed": 82,
        "rankIndex": 3,
        "det": {
          "g": 82,
          "time": 44228,
          "wr": 56.36585365853659,
          "el10": 10.84390243902439,
          "de10": 7.107317073170731,
          "dm10": 3756.829268292683,
          "he10": 6074.756097560976,
          "as10": 12.04878048780488,
          "wa": 42.34146341463415,
          "ca": 0
        }
      },
      "echo": {
        "finalScore": 43.33,
        "battleScore": 34.51,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 3,
        "det": {
          "g": 13,
          "time": 6850,
          "wr": 39.69230769230769,
          "el10": 14.147692307692308,
          "de10": 8.56,
          "dm10": 7774.153846153846,
          "he10": 15.553846153846155,
          "as10": 0.6000000000000001,
          "wa": 19.46153846153846,
          "ca": 9.76923076923077
        },
        "rankDelta": 1,
        "rankDeltaPower": 1
      },
      "sigma": {
        "finalScore": 62.37,
        "battleScore": 41.98,
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
        }
      },
      "soldier-76": {
        "finalScore": 46.61,
        "battleScore": 38.41,
        "coeff": 1.33,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 3,
        "det": {
          "g": 9,
          "time": 4887,
          "wr": 35.55555555555556,
          "el10": 16.985555555555557,
          "de10": 9.008888888888889,
          "dm10": 9869.333333333334,
          "he10": 1321,
          "as10": 1.511111111111111,
          "wa": 30.444444444444443,
          "ca": 9.88888888888889
        }
      },
      "anran": {
        "finalScore": 59.8,
        "battleScore": 43.07,
        "coeff": 1.33,
        "matchCoef": 0.93,
        "gamesPlayed": 5,
        "rankIndex": 3,
        "det": {
          "g": 5,
          "time": 2463,
          "wr": 71,
          "el10": 18.51,
          "de10": 10.96,
          "dm10": 7980,
          "he10": 709,
          "as10": 0.49,
          "wa": 31,
          "ca": 11
        },
        "rankDelta": -1
      },
      "ashe": {
        "finalScore": 49.7,
        "battleScore": 37.48,
        "coeff": 1.33,
        "matchCoef": 1,
        "gamesPlayed": 24,
        "rankIndex": 3,
        "det": {
          "g": 24,
          "time": 11144,
          "wr": 40,
          "el10": 13.84,
          "de10": 7.97,
          "dm10": 8933,
          "he10": 0,
          "as10": 1.72,
          "wa": 41,
          "ca": 11
        }
      },
      "baptiste": {
        "finalScore": 49.77,
        "battleScore": 39.93,
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
        "finalScore": 54.23,
        "battleScore": 30.73,
        "coeff": 1.33,
        "matchCoef": 0.99,
        "gamesPlayed": 19,
        "rankIndex": 3,
        "det": {
          "g": 19,
          "time": 9532,
          "wr": 27,
          "el10": 15.61,
          "de10": 10.2,
          "dm10": 9477,
          "he10": 31,
          "as10": 2.2,
          "wa": 24,
          "ca": 2
        }
      },
      "brigitte": {
        "finalScore": 36.44,
        "battleScore": 31.81,
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
        "finalScore": 32.92,
        "battleScore": 28.74,
        "coeff": 1.33,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 3,
        "det": {
          "g": 5,
          "time": 2789,
          "wr": 16,
          "el10": 8.61,
          "de10": 11.4,
          "dm10": 6414,
          "he10": 0,
          "as10": 0.86,
          "wa": 36,
          "ca": 5
        }
      },
      "dmon": {
        "finalScore": 50.4,
        "battleScore": 44.55,
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
        }
      },
      "domina": {
        "finalScore": 46.55,
        "battleScore": 41.14,
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
        "finalScore": 55.23,
        "battleScore": 40.97,
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
        "finalScore": 38.76,
        "battleScore": 30.29,
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
        }
      },
      "freja": {
        "finalScore": 43.23,
        "battleScore": 36.03,
        "coeff": 1.33,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 3,
        "det": {
          "g": 8,
          "time": 4143,
          "wr": 29,
          "el10": 13.32,
          "de10": 9.41,
          "dm10": 7350,
          "he10": 8.24,
          "as10": 0.43,
          "wa": 29,
          "ca": 1
        },
        "rankDeltaPower": -1
      },
      "genji": {
        "finalScore": 58.47,
        "battleScore": 41.06,
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
        }
      },
      "hazard": {
        "finalScore": 35.37,
        "battleScore": 31.26,
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
        "finalScore": 44.91,
        "battleScore": 36.32,
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
        }
      },
      "illari": {
        "finalScore": 38.85,
        "battleScore": 34.34,
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
        "finalScore": 51.51,
        "battleScore": 45.53,
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
        "finalScore": 52.67,
        "battleScore": 37.87,
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
        "finalScore": 48.85,
        "battleScore": 37.43,
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
        }
      },
      "juno": {
        "finalScore": 42.69,
        "battleScore": 37.73,
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
        }
      },
      "kiriko": {
        "finalScore": 46.3,
        "battleScore": 39.69,
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
        }
      },
      "lucio": {
        "finalScore": 50.81,
        "battleScore": 39.29,
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
        "finalScore": 56.47,
        "battleScore": 37.16,
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
        }
      },
      "mei": {
        "finalScore": 45.02,
        "battleScore": 35.86,
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
        "finalScore": 49.46,
        "battleScore": 40,
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
        }
      },
      "mizuki": {
        "finalScore": 43.53,
        "battleScore": 38.47,
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
        }
      },
      "moira": {
        "finalScore": 65.76,
        "battleScore": 38.85,
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
        "finalScore": 47,
        "battleScore": 34.67,
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
        }
      },
      "pharah": {
        "finalScore": 50.59,
        "battleScore": 38.14,
        "coeff": 1.33,
        "matchCoef": 1,
        "gamesPlayed": 24,
        "rankIndex": 3,
        "det": {
          "g": 24,
          "time": 11971,
          "wr": 55,
          "el10": 14.54,
          "de10": 9.82,
          "dm10": 8390,
          "he10": 0,
          "as10": 1.25,
          "wa": 47,
          "ca": 0
        }
      },
      "ramattra": {
        "finalScore": 54.01,
        "battleScore": 35.27,
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
        }
      },
      "reaper": {
        "finalScore": 59.32,
        "battleScore": 38.31,
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
        "finalScore": 45.34,
        "battleScore": 35.24,
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
        "finalScore": 34.75,
        "battleScore": 30.71,
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
        "finalScore": 48.06,
        "battleScore": 42.48,
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
        "finalScore": 41.21,
        "battleScore": 36.42,
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
        }
      },
      "sojourn": {
        "finalScore": 45.41,
        "battleScore": 38.34,
        "coeff": 1.33,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 3,
        "det": {
          "g": 7,
          "time": 3654,
          "wr": 37,
          "el10": 13.46,
          "de10": 10.02,
          "dm10": 8422,
          "he10": 0,
          "as10": 2.13,
          "wa": 29,
          "ca": 6
        }
      },
      "sombra": {
        "finalScore": 40.26,
        "battleScore": 33.99,
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
        }
      },
      "symmetra": {
        "finalScore": 42.26,
        "battleScore": 37.35,
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
        }
      },
      "torbjorn": {
        "finalScore": 42.47,
        "battleScore": 37.54,
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
        }
      },
      "tracer": {
        "finalScore": 47.5,
        "battleScore": 36.09,
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
        "finalScore": 55.46,
        "battleScore": 41.26,
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
        }
      },
      "winston": {
        "finalScore": 43.47,
        "battleScore": 35.15,
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
        }
      },
      "wrecking-ball": {
        "finalScore": 37.25,
        "battleScore": 32.92,
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
        "finalScore": 48.76,
        "battleScore": 43.1,
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
        "finalScore": 54.2,
        "battleScore": 38.69,
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
        }
      },
      "zenyatta": {
        "finalScore": 48.29,
        "battleScore": 38.74,
        "coeff": 1.33,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 3,
        "det": {
          "g": 12,
          "time": 5683,
          "wr": 55,
          "el10": 11.3,
          "de10": 7.6,
          "dm10": 5179,
          "he10": 6688,
          "as10": 15.52,
          "wa": 23,
          "ca": 11
        }
      }
    },
    "recent": [
      {
        "d": "2026-09-17",
        "g": {},
        "m": 799,
        "w": 379,
        "l": 420,
        "t": 409418,
        "k": 2.06,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-09-18",
        "g": {},
        "m": 799,
        "w": 379,
        "l": 420,
        "t": 409418,
        "k": 2.06,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-09-19",
        "g": {},
        "m": 800,
        "w": 379,
        "l": 421,
        "t": 410033,
        "k": 2.06,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-09-20",
        "g": {
          "ashe": 1
        },
        "m": 800,
        "w": 379,
        "l": 421,
        "t": 410033,
        "k": 2.06,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-09-21",
        "g": {},
        "m": 800,
        "w": 379,
        "l": 421,
        "t": 410033,
        "k": 2.06,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-09-22",
        "g": {},
        "m": 800,
        "w": 379,
        "l": 421,
        "t": 410033,
        "k": 2.06,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-09-23",
        "g": {},
        "m": 800,
        "w": 379,
        "l": 421,
        "t": 410033,
        "k": 2.06,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-09-24",
        "g": {},
        "m": 800,
        "w": 379,
        "l": 421,
        "t": 410033,
        "k": 2.06,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-09-25",
        "g": {
          "ana": 1,
          "freja": 1,
          "pharah": 1,
          "sojourn": 1
        },
        "m": 804,
        "w": 381,
        "l": 423,
        "t": 412202,
        "k": 2.06,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-09-26",
        "g": {},
        "m": 804,
        "w": 381,
        "l": 423,
        "t": 412202,
        "k": 2.06,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-09-27",
        "g": {},
        "m": 804,
        "w": 381,
        "l": 423,
        "t": 412202,
        "k": 2.06,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-09-28",
        "g": {},
        "m": 804,
        "w": 381,
        "l": 423,
        "t": 412202,
        "k": 2.06,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-09-29",
        "g": {},
        "m": 804,
        "w": 381,
        "l": 423,
        "t": 412202,
        "k": 2.06,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-09-30",
        "g": {},
        "m": 804,
        "w": 381,
        "l": 423,
        "t": 412202,
        "k": 2.06,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-01",
        "g": {},
        "m": 804,
        "w": 381,
        "l": 423,
        "t": 412202,
        "k": 2.06,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-02",
        "g": {},
        "m": 804,
        "w": 381,
        "l": 423,
        "t": 412202,
        "k": 2.06,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-03",
        "g": {},
        "m": 804,
        "w": 381,
        "l": 423,
        "t": 412202,
        "k": 2.06,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-04",
        "g": {},
        "m": 804,
        "w": 381,
        "l": 423,
        "t": 412202,
        "k": 2.06,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-05",
        "g": {},
        "m": 804,
        "w": 381,
        "l": 423,
        "t": 412202,
        "k": 2.06,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-06",
        "g": {},
        "m": 804,
        "w": 381,
        "l": 423,
        "t": 412202,
        "k": 2.06,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-07",
        "g": {},
        "m": 804,
        "w": 381,
        "l": 423,
        "t": 412202,
        "k": 2.06,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-08",
        "g": {},
        "m": 804,
        "w": 381,
        "l": 423,
        "t": 412202,
        "k": 2.06,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-09",
        "g": {},
        "m": 804,
        "w": 381,
        "l": 423,
        "t": 412202,
        "k": 2.06,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-10",
        "g": {},
        "m": 804,
        "w": 381,
        "l": 423,
        "t": 412202,
        "k": 2.06,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-11",
        "g": {},
        "m": 804,
        "w": 381,
        "l": 423,
        "t": 412202,
        "k": 2.06,
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-12",
        "g": {},
        "m": 804,
        "w": 381,
        "l": 423,
        "t": 412202,
        "k": 2.06,
        "tot": {
          "e": 9897,
          "a": 1229,
          "dd": 5401,
          "dm": 6192544,
          "he": 1896150
        },
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-13",
        "g": {},
        "m": 804,
        "w": 381,
        "l": 423,
        "t": 412202,
        "k": 2.06,
        "tot": {
          "e": 9897,
          "a": 1229,
          "dd": 5401,
          "dm": 6192544,
          "he": 1896150
        },
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-14",
        "g": {},
        "m": 804,
        "w": 381,
        "l": 423,
        "t": 412202,
        "k": 2.06,
        "tot": {
          "e": 9897,
          "a": 1229,
          "dd": 5401,
          "dm": 6192544,
          "he": 1896150
        },
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-15",
        "g": {},
        "m": 804,
        "w": 381,
        "l": 423,
        "t": 412202,
        "k": 2.06,
        "tot": {
          "e": 9897,
          "a": 1229,
          "dd": 5401,
          "dm": 6192544,
          "he": 1896150
        },
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      },
      {
        "d": "2026-10-16",
        "g": {},
        "m": 804,
        "w": 381,
        "l": 423,
        "t": 412202,
        "k": 2.06,
        "tot": {
          "e": 9897,
          "a": 1229,
          "dd": 5401,
          "dm": 6192544,
          "he": 1896150
        },
        "r": {
          "Tank": "platinum-5",
          "Damage": "platinum-5",
          "Support": "platinum-5"
        }
      }
    ]
  },
  {
    "id": "p7",
    "pid": "71bc46095182184c1dbd24a2d108|119124eab6231dd6a018190f27d1c6d1",
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
      "matches": 360,
      "wins": 162,
      "losses": 198,
      "wr": 45,
      "kda": 1.87,
      "elim": 12.25,
      "deaths": 7.43,
      "dmg": 6990.53,
      "heal": 2575.46,
      "time": 177853,
      "tot": {
        "e": 3630,
        "a": 488,
        "dd": 2203,
        "dm": 2072145,
        "he": 763421
      }
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
        "time": 65107,
        "wr": 42.65,
        "kda": 1.91,
        "elim": 15.44,
        "deaths": 8.14,
        "dmg": 9148.34,
        "heal": 488.86
      },
      "Support": {
        "g": 126,
        "w": 66,
        "l": 60,
        "time": 64768,
        "wr": 52.38,
        "kda": 1.51,
        "elim": 7.43,
        "deaths": 7.26,
        "dmg": 3133.25,
        "heal": 6145.67
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
        "slug": "ana",
        "n": "Ana",
        "role": "Support",
        "g": 41,
        "wr": 53.66,
        "kda": 2.33
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
        "g": 15,
        "wr": 26.67,
        "kda": 1.16
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
        "slug": "moira",
        "n": "Moira",
        "role": "Support",
        "g": 8,
        "wr": 75,
        "kda": 2.41
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
        "slug": "doctrine",
        "n": "Doctrine",
        "role": "Support",
        "g": 6,
        "wr": 83.33,
        "kda": 2
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
        "kda": 0.98
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
        "slug": "brigitte",
        "n": "Brigitte",
        "role": "Support",
        "g": 2,
        "wr": 50,
        "kda": 1.12
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
        "finalScore": 38.48,
        "battleScore": 36.9,
        "coeff": 1,
        "matchCoef": 1.04,
        "gamesPlayed": 41,
        "rankIndex": 0,
        "det": {
          "g": 41,
          "time": 19817,
          "wr": 53,
          "el10": 8.72,
          "de10": 6.54,
          "dm10": 3252,
          "he10": 4727,
          "as10": 12.05,
          "wa": 39,
          "ca": 0
        }
      },
      "anran": {
        "finalScore": 49.86,
        "battleScore": 34.23,
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
        }
      },
      "ashe": {
        "finalScore": 30.34,
        "battleScore": 35.69,
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
        "finalScore": 26.88,
        "battleScore": 31.62,
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
        "finalScore": 51.69,
        "battleScore": 36.61,
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
        }
      },
      "brigitte": {
        "finalScore": 30.31,
        "battleScore": 35.66,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 821,
          "wr": 50,
          "el10": 9.5,
          "de10": 12.43,
          "dm10": 3054,
          "he10": 4980,
          "as10": 16.08,
          "wa": 0,
          "ca": 0
        }
      },
      "cassidy": {
        "finalScore": 36.1,
        "battleScore": 36.22,
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
      "doctrine": {
        "finalScore": 36.26,
        "battleScore": 41.38,
        "coeff": 1,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 0,
        "det": {
          "g": 6,
          "time": 3232,
          "wr": 85,
          "el10": 11.51,
          "de10": 5.76,
          "dm10": 3279,
          "he10": 7453,
          "as10": 16.9,
          "wa": 45,
          "ca": 0
        }
      },
      "domina": {
        "finalScore": 31.54,
        "battleScore": 34.99,
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
        "finalScore": 38,
        "battleScore": 35.79,
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
        "finalScore": 30.36,
        "battleScore": 35.72,
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
        }
      },
      "freja": {
        "finalScore": 32.88,
        "battleScore": 38.2,
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
        "finalScore": 24.15,
        "battleScore": 28.41,
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
        "finalScore": 25.45,
        "battleScore": 29.95,
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
        "finalScore": 24.32,
        "battleScore": 28.61,
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
        "finalScore": 30.49,
        "battleScore": 35.87,
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
        }
      },
      "juno": {
        "finalScore": 31.34,
        "battleScore": 36.87,
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
        }
      },
      "kiriko": {
        "finalScore": 35.13,
        "battleScore": 35.67,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 21,
        "rankIndex": 0,
        "det": {
          "g": 21,
          "time": 11858,
          "wr": 67,
          "el10": 6.07,
          "de10": 7.49,
          "dm10": 2122,
          "he10": 6007,
          "as10": 15.69,
          "wa": 19,
          "ca": 11
        }
      },
      "lifeweaver": {
        "finalScore": 28.44,
        "battleScore": 29.75,
        "coeff": 1,
        "matchCoef": 0.96,
        "gamesPlayed": 15,
        "rankIndex": 0,
        "det": {
          "g": 15,
          "time": 7409,
          "wr": 27,
          "el10": 6.72,
          "de10": 6.4,
          "dm10": 1475,
          "he10": 7654,
          "as10": 12.71,
          "wa": 21,
          "ca": 10
        }
      },
      "mauga": {
        "finalScore": 51.76,
        "battleScore": 37.13,
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
        }
      },
      "mei": {
        "finalScore": 35.88,
        "battleScore": 42.22,
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
        "finalScore": 33.72,
        "battleScore": 34.38,
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
        }
      },
      "mizuki": {
        "finalScore": 28.84,
        "battleScore": 33.51,
        "coeff": 1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2975,
          "wr": 39,
          "el10": 8.07,
          "de10": 8.27,
          "dm10": 3131,
          "he10": 8479,
          "as10": 11.7,
          "wa": 20,
          "ca": 12
        }
      },
      "moira": {
        "finalScore": 59.69,
        "battleScore": 39.96,
        "coeff": 1,
        "matchCoef": 0.95,
        "gamesPlayed": 8,
        "rankIndex": 0,
        "det": {
          "g": 8,
          "time": 4511,
          "wr": 73,
          "el10": 16.36,
          "de10": 6.78,
          "dm10": 4159,
          "he10": 6342,
          "as10": 11.84,
          "wa": 0,
          "ca": 0
        }
      },
      "orisa": {
        "finalScore": 28.28,
        "battleScore": 32.85,
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
        "finalScore": 44.61,
        "battleScore": 28.27,
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
        "finalScore": 52.26,
        "battleScore": 32.83,
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
        }
      },
      "reinhardt": {
        "finalScore": 30.72,
        "battleScore": 36.14,
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
        "finalScore": 23.97,
        "battleScore": 28.19,
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
        "finalScore": 33.05,
        "battleScore": 38.4,
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
        }
      },
      "sigma": {
        "finalScore": 50.37,
        "battleScore": 35.7,
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
        }
      },
      "sojourn": {
        "finalScore": 32.7,
        "battleScore": 35.87,
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
        }
      },
      "soldier-76": {
        "finalScore": 41.94,
        "battleScore": 40.86,
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
        }
      },
      "symmetra": {
        "finalScore": 27.49,
        "battleScore": 32.34,
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
        "finalScore": 31.26,
        "battleScore": 34.29,
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
        "finalScore": 28.87,
        "battleScore": 33.54,
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
        "finalScore": 30.54,
        "battleScore": 35.93,
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
        "finalScore": 29.55,
        "battleScore": 34.76,
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
        }
      },
      "winston": {
        "finalScore": 30.42,
        "battleScore": 35.34,
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
        }
      },
      "zarya": {
        "finalScore": 42.2,
        "battleScore": 29.08,
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
        }
      },
      "zenyatta": {
        "finalScore": 25.54,
        "battleScore": 30.04,
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
        "finalScore": 38.48,
        "battleScore": 36.9,
        "coeff": 1,
        "matchCoef": 1.04,
        "gamesPlayed": 41,
        "rankIndex": 0,
        "det": {
          "g": 41,
          "time": 19817,
          "wr": 53,
          "el10": 8.72,
          "de10": 6.54,
          "dm10": 3252,
          "he10": 4727,
          "as10": 12.05,
          "wa": 39,
          "ca": 0
        }
      },
      "anran": {
        "finalScore": 49.86,
        "battleScore": 34.23,
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
        }
      },
      "ashe": {
        "finalScore": 30.34,
        "battleScore": 35.69,
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
        "finalScore": 26.88,
        "battleScore": 31.62,
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
        "finalScore": 51.69,
        "battleScore": 36.61,
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
        }
      },
      "brigitte": {
        "finalScore": 30.31,
        "battleScore": 35.66,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 821,
          "wr": 50,
          "el10": 9.5,
          "de10": 12.43,
          "dm10": 3054,
          "he10": 4980,
          "as10": 16.08,
          "wa": 0,
          "ca": 0
        }
      },
      "cassidy": {
        "finalScore": 36.1,
        "battleScore": 36.22,
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
      "doctrine": {
        "finalScore": 36.26,
        "battleScore": 41.38,
        "coeff": 1,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 0,
        "det": {
          "g": 6,
          "time": 3232,
          "wr": 85,
          "el10": 11.51,
          "de10": 5.76,
          "dm10": 3279,
          "he10": 7453,
          "as10": 16.9,
          "wa": 45,
          "ca": 0
        }
      },
      "domina": {
        "finalScore": 31.54,
        "battleScore": 34.99,
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
        "finalScore": 38,
        "battleScore": 35.79,
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
        "finalScore": 30.36,
        "battleScore": 35.72,
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
        }
      },
      "freja": {
        "finalScore": 32.88,
        "battleScore": 38.2,
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
        "finalScore": 24.15,
        "battleScore": 28.41,
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
        "finalScore": 25.45,
        "battleScore": 29.95,
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
        "finalScore": 24.32,
        "battleScore": 28.61,
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
        "finalScore": 30.49,
        "battleScore": 35.87,
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
        }
      },
      "juno": {
        "finalScore": 31.34,
        "battleScore": 36.87,
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
        }
      },
      "kiriko": {
        "finalScore": 35.13,
        "battleScore": 35.67,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 21,
        "rankIndex": 0,
        "det": {
          "g": 21,
          "time": 11858,
          "wr": 67,
          "el10": 6.07,
          "de10": 7.49,
          "dm10": 2122,
          "he10": 6007,
          "as10": 15.69,
          "wa": 19,
          "ca": 11
        }
      },
      "lifeweaver": {
        "finalScore": 28.44,
        "battleScore": 29.75,
        "coeff": 1,
        "matchCoef": 0.96,
        "gamesPlayed": 15,
        "rankIndex": 0,
        "det": {
          "g": 15,
          "time": 7409,
          "wr": 27,
          "el10": 6.72,
          "de10": 6.4,
          "dm10": 1475,
          "he10": 7654,
          "as10": 12.71,
          "wa": 21,
          "ca": 10
        }
      },
      "mauga": {
        "finalScore": 51.76,
        "battleScore": 37.13,
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
        }
      },
      "mei": {
        "finalScore": 35.88,
        "battleScore": 42.22,
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
        "finalScore": 33.72,
        "battleScore": 34.38,
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
        }
      },
      "mizuki": {
        "finalScore": 28.84,
        "battleScore": 33.51,
        "coeff": 1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2975,
          "wr": 39,
          "el10": 8.07,
          "de10": 8.27,
          "dm10": 3131,
          "he10": 8479,
          "as10": 11.7,
          "wa": 20,
          "ca": 12
        }
      },
      "moira": {
        "finalScore": 59.69,
        "battleScore": 39.96,
        "coeff": 1,
        "matchCoef": 0.95,
        "gamesPlayed": 8,
        "rankIndex": 0,
        "det": {
          "g": 8,
          "time": 4511,
          "wr": 73,
          "el10": 16.36,
          "de10": 6.78,
          "dm10": 4159,
          "he10": 6342,
          "as10": 11.84,
          "wa": 0,
          "ca": 0
        }
      },
      "orisa": {
        "finalScore": 28.28,
        "battleScore": 32.85,
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
        "finalScore": 44.61,
        "battleScore": 28.27,
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
        "finalScore": 52.26,
        "battleScore": 32.83,
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
        }
      },
      "reinhardt": {
        "finalScore": 30.72,
        "battleScore": 36.14,
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
        "finalScore": 23.97,
        "battleScore": 28.19,
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
        "finalScore": 33.05,
        "battleScore": 38.4,
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
        }
      },
      "sigma": {
        "finalScore": 50.37,
        "battleScore": 35.7,
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
        }
      },
      "sojourn": {
        "finalScore": 32.7,
        "battleScore": 35.87,
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
        }
      },
      "soldier-76": {
        "finalScore": 41.94,
        "battleScore": 40.86,
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
        }
      },
      "symmetra": {
        "finalScore": 27.49,
        "battleScore": 32.34,
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
        "finalScore": 31.26,
        "battleScore": 34.29,
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
        "finalScore": 28.87,
        "battleScore": 33.54,
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
        "finalScore": 30.54,
        "battleScore": 35.93,
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
        "finalScore": 29.55,
        "battleScore": 34.76,
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
        }
      },
      "winston": {
        "finalScore": 30.42,
        "battleScore": 35.34,
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
        }
      },
      "zarya": {
        "finalScore": 42.2,
        "battleScore": 29.08,
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
        }
      },
      "zenyatta": {
        "finalScore": 25.54,
        "battleScore": 30.04,
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
    "recent": [
      {
        "d": "2026-09-17",
        "g": {},
        "m": 350,
        "w": 158,
        "l": 192,
        "t": 172961,
        "k": 1.87,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-18",
        "g": {},
        "m": 350,
        "w": 158,
        "l": 192,
        "t": 172961,
        "k": 1.87,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-19",
        "g": {},
        "m": 350,
        "w": 158,
        "l": 192,
        "t": 172961,
        "k": 1.87,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-20",
        "g": {
          "ana": 4,
          "doctrine": 6,
          "lifeweaver": 1,
          "moira": 3
        },
        "m": 350,
        "w": 158,
        "l": 192,
        "t": 172961,
        "k": 1.87,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-21",
        "g": {},
        "m": 350,
        "w": 158,
        "l": 192,
        "t": 172961,
        "k": 1.87,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-22",
        "g": {},
        "m": 350,
        "w": 158,
        "l": 192,
        "t": 172961,
        "k": 1.87,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-23",
        "g": {},
        "m": 350,
        "w": 158,
        "l": 192,
        "t": 172961,
        "k": 1.87,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-24",
        "g": {},
        "m": 350,
        "w": 158,
        "l": 192,
        "t": 172961,
        "k": 1.87,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-25",
        "g": {},
        "m": 350,
        "w": 158,
        "l": 192,
        "t": 172961,
        "k": 1.87,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-26",
        "g": {},
        "m": 350,
        "w": 158,
        "l": 192,
        "t": 172961,
        "k": 1.87,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-27",
        "g": {},
        "m": 350,
        "w": 158,
        "l": 192,
        "t": 172961,
        "k": 1.87,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-28",
        "g": {},
        "m": 350,
        "w": 158,
        "l": 192,
        "t": 172961,
        "k": 1.87,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-29",
        "g": {},
        "m": 350,
        "w": 158,
        "l": 192,
        "t": 172961,
        "k": 1.87,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-30",
        "g": {},
        "m": 350,
        "w": 158,
        "l": 192,
        "t": 172961,
        "k": 1.87,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-01",
        "g": {},
        "m": 350,
        "w": 158,
        "l": 192,
        "t": 172961,
        "k": 1.87,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-02",
        "g": {},
        "m": 350,
        "w": 158,
        "l": 192,
        "t": 172961,
        "k": 1.87,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-03",
        "g": {},
        "m": 350,
        "w": 158,
        "l": 192,
        "t": 172961,
        "k": 1.87,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-04",
        "g": {},
        "m": 350,
        "w": 158,
        "l": 192,
        "t": 172961,
        "k": 1.87,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-05",
        "g": {},
        "m": 350,
        "w": 158,
        "l": 192,
        "t": 172961,
        "k": 1.87,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-06",
        "g": {},
        "m": 350,
        "w": 158,
        "l": 192,
        "t": 172961,
        "k": 1.87,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-07",
        "g": {},
        "m": 350,
        "w": 159,
        "l": 191,
        "t": 172961,
        "k": 1.87,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-08",
        "g": {},
        "m": 360,
        "w": 162,
        "l": 198,
        "t": 177853,
        "k": 1.87,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-09",
        "g": {},
        "m": 360,
        "w": 162,
        "l": 198,
        "t": 177853,
        "k": 1.87,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-10",
        "g": {},
        "m": 360,
        "w": 162,
        "l": 198,
        "t": 177853,
        "k": 1.87,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-11",
        "g": {},
        "m": 360,
        "w": 162,
        "l": 198,
        "t": 177853,
        "k": 1.87,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-12",
        "g": {},
        "m": 360,
        "w": 162,
        "l": 198,
        "t": 177853,
        "k": 1.87,
        "tot": {
          "e": 3630,
          "a": 488,
          "dd": 2203,
          "dm": 2072145,
          "he": 763421
        },
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-13",
        "g": {},
        "m": 360,
        "w": 162,
        "l": 198,
        "t": 177853,
        "k": 1.87,
        "tot": {
          "e": 3630,
          "a": 488,
          "dd": 2203,
          "dm": 2072145,
          "he": 763421
        },
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-14",
        "g": {},
        "m": 360,
        "w": 162,
        "l": 198,
        "t": 177853,
        "k": 1.87,
        "tot": {
          "e": 3630,
          "a": 488,
          "dd": 2203,
          "dm": 2072145,
          "he": 763421
        },
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-15",
        "g": {},
        "m": 360,
        "w": 162,
        "l": 198,
        "t": 177853,
        "k": 1.87,
        "tot": {
          "e": 3630,
          "a": 488,
          "dd": 2203,
          "dm": 2072145,
          "he": 763421
        },
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-16",
        "g": {},
        "m": 360,
        "w": 162,
        "l": 198,
        "t": 177853,
        "k": 1.87,
        "tot": {
          "e": 3630,
          "a": 488,
          "dd": 2203,
          "dm": 2072145,
          "he": 763421
        },
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      }
    ]
  },
  {
    "id": "p8",
    "pid": "71bc770950a2184e0873941d07b23ddcc2e77c00368babe9ed5b|7a6bfeecad03bc198ea7f97517e765fb",
    "name": "センチネル後藤",
    "tag": "",
    "endorse": 2,
    "title": null,
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7d6e44a87fed392a39667dc8d80b492523725e87aa242e6d60863eab32efe13f.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4593e1d88c0bd3c5d933a1cd1857232f499be6ced5f269d5cc5cf2415e00b15e.png",
    "role": "Support",
    "ranks": {
      "Tank": null,
      "Damage": null,
      "Support": null
    },
    "rankTier": null,
    "overall": {
      "matches": 167,
      "wins": 66,
      "losses": 101,
      "wr": 39.52,
      "kda": 1.4,
      "elim": 9.26,
      "deaths": 7.35,
      "dmg": 4894.19,
      "heal": 4192.04,
      "time": 82059,
      "tot": {
        "e": 1267,
        "a": 140,
        "dd": 1005,
        "dm": 669354,
        "he": 573324
      }
    },
    "roles": {
      "Damage": {
        "g": 83,
        "w": 33,
        "l": 50,
        "time": 39994,
        "wr": 39.76,
        "kda": 1.47,
        "elim": 12.08,
        "deaths": 8.22,
        "dmg": 7076.08,
        "heal": 356.69
      },
      "Support": {
        "g": 84,
        "w": 33,
        "l": 51,
        "time": 42065,
        "wr": 39.29,
        "kda": 1.32,
        "elim": 6.59,
        "deaths": 6.52,
        "dmg": 2819.72,
        "heal": 7838.55
      }
    },
    "heroes": [
      {
        "slug": "kiriko",
        "n": "Kiriko",
        "role": "Support",
        "g": 79,
        "wr": 36.71,
        "kda": 1.32
      },
      {
        "slug": "cassidy",
        "n": "Cassidy",
        "role": "Damage",
        "g": 34,
        "wr": 32.35,
        "kda": 1.17
      },
      {
        "slug": "emre",
        "n": "Emre",
        "role": "Damage",
        "g": 29,
        "wr": 44.83,
        "kda": 2.01
      },
      {
        "slug": "reaper",
        "n": "Reaper",
        "role": "Damage",
        "g": 7,
        "wr": 57.14,
        "kda": 1.21
      },
      {
        "slug": "widowmaker",
        "n": "Widowmaker",
        "role": "Damage",
        "g": 6,
        "wr": 16.67,
        "kda": 1
      },
      {
        "slug": "moira",
        "n": "Moira",
        "role": "Support",
        "g": 4,
        "wr": 75,
        "kda": 1.36
      },
      {
        "slug": "soldier-76",
        "n": "Soldier: 76",
        "role": "Damage",
        "g": 4,
        "wr": 50,
        "kda": 0.81
      },
      {
        "slug": "sojourn",
        "n": "Sojourn",
        "role": "Damage",
        "g": 3,
        "wr": 66.67,
        "kda": 2.11
      },
      {
        "slug": "ana",
        "n": "Ana",
        "role": "Support",
        "g": 1,
        "wr": 100,
        "kda": 2
      }
    ],
    "bscore": {
      "emre": {
        "finalScore": 37.19,
        "battleScore": 36.72,
        "coeff": 1,
        "matchCoef": 1.01,
        "gamesPlayed": 29,
        "rankIndex": 0,
        "det": {
          "g": 29,
          "time": 15824,
          "wr": 45.3448275862069,
          "el10": 14.783448275862067,
          "de10": 7.468275862068965,
          "dm10": 7469.310344827586,
          "he10": 657.8965517241379,
          "as10": 0,
          "wa": 29.06896551724138,
          "ca": 13
        }
      },
      "ana": {
        "finalScore": 33.41,
        "battleScore": 39.3,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 424,
          "wr": 100,
          "el10": 7.08,
          "de10": 4.25,
          "dm10": 2293,
          "he10": 4408,
          "as10": 14.17,
          "wa": 47,
          "ca": 0
        }
      },
      "cassidy": {
        "finalScore": 29.42,
        "battleScore": 28.66,
        "coeff": 1,
        "matchCoef": 1.03,
        "gamesPlayed": 34,
        "rankIndex": 0,
        "det": {
          "g": 34,
          "time": 15284,
          "wr": 34,
          "el10": 10.29,
          "de10": 8.79,
          "dm10": 5084,
          "he10": 17.7,
          "as10": 0.39,
          "wa": 35,
          "ca": 17
        }
      },
      "kiriko": {
        "finalScore": 33.66,
        "battleScore": 30.61,
        "coeff": 1,
        "matchCoef": 1.1,
        "gamesPlayed": 79,
        "rankIndex": 0,
        "det": {
          "g": 79,
          "time": 39574,
          "wr": 37,
          "el10": 6.4,
          "de10": 6.46,
          "dm10": 2192,
          "he10": 7909,
          "as10": 13.15,
          "wa": 23,
          "ca": 14
        }
      },
      "moira": {
        "finalScore": 58.8,
        "battleScore": 38.63,
        "coeff": 1,
        "matchCoef": 0.92,
        "gamesPlayed": 4,
        "rankIndex": 0,
        "det": {
          "g": 4,
          "time": 1876,
          "wr": 73,
          "el10": 10.87,
          "de10": 7.99,
          "dm10": 3297,
          "he10": 7710,
          "as10": 13.75,
          "wa": 0,
          "ca": 0
        }
      },
      "reaper": {
        "finalScore": 53.26,
        "battleScore": 35.59,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 7,
        "rankIndex": 0,
        "det": {
          "g": 7,
          "time": 2928,
          "wr": 55,
          "el10": 11.68,
          "de10": 9.63,
          "dm10": 4447,
          "he10": 652,
          "as10": 0,
          "wa": 29,
          "ca": 11
        }
      },
      "sojourn": {
        "finalScore": 32.82,
        "battleScore": 38.61,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 0,
        "det": {
          "g": 3,
          "time": 1311,
          "wr": 76,
          "el10": 17.39,
          "de10": 8.24,
          "dm10": 5914,
          "he10": 0,
          "as10": 0,
          "wa": 27,
          "ca": 9
        }
      },
      "soldier-76": {
        "finalScore": 25.67,
        "battleScore": 30.19,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 0,
        "det": {
          "g": 4,
          "time": 1846,
          "wr": 50,
          "el10": 7.15,
          "de10": 8.78,
          "dm10": 4633,
          "he10": 909,
          "as10": 0.33,
          "wa": 25,
          "ca": 12
        }
      },
      "widowmaker": {
        "finalScore": 28.15,
        "battleScore": 32.12,
        "coeff": 1,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 0,
        "det": {
          "g": 6,
          "time": 2626,
          "wr": 20,
          "el10": 7.54,
          "de10": 7.54,
          "dm10": 4742,
          "he10": 0,
          "as10": 3.88,
          "wa": 33,
          "ca": 11
        }
      }
    },
    "bscoreAll": {
      "emre": {
        "finalScore": 37.19,
        "battleScore": 36.72,
        "coeff": 1,
        "matchCoef": 1.01,
        "gamesPlayed": 29,
        "rankIndex": 0,
        "det": {
          "g": 29,
          "time": 15824,
          "wr": 45.3448275862069,
          "el10": 14.783448275862067,
          "de10": 7.468275862068965,
          "dm10": 7469.310344827586,
          "he10": 657.8965517241379,
          "as10": 0,
          "wa": 29.06896551724138,
          "ca": 13
        }
      },
      "ana": {
        "finalScore": 33.41,
        "battleScore": 39.3,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 424,
          "wr": 100,
          "el10": 7.08,
          "de10": 4.25,
          "dm10": 2293,
          "he10": 4408,
          "as10": 14.17,
          "wa": 47,
          "ca": 0
        }
      },
      "cassidy": {
        "finalScore": 29.42,
        "battleScore": 28.66,
        "coeff": 1,
        "matchCoef": 1.03,
        "gamesPlayed": 34,
        "rankIndex": 0,
        "det": {
          "g": 34,
          "time": 15284,
          "wr": 34,
          "el10": 10.29,
          "de10": 8.79,
          "dm10": 5084,
          "he10": 17.7,
          "as10": 0.39,
          "wa": 35,
          "ca": 17
        }
      },
      "kiriko": {
        "finalScore": 33.66,
        "battleScore": 30.61,
        "coeff": 1,
        "matchCoef": 1.1,
        "gamesPlayed": 79,
        "rankIndex": 0,
        "det": {
          "g": 79,
          "time": 39574,
          "wr": 37,
          "el10": 6.4,
          "de10": 6.46,
          "dm10": 2192,
          "he10": 7909,
          "as10": 13.15,
          "wa": 23,
          "ca": 14
        }
      },
      "moira": {
        "finalScore": 58.8,
        "battleScore": 38.63,
        "coeff": 1,
        "matchCoef": 0.92,
        "gamesPlayed": 4,
        "rankIndex": 0,
        "det": {
          "g": 4,
          "time": 1876,
          "wr": 73,
          "el10": 10.87,
          "de10": 7.99,
          "dm10": 3297,
          "he10": 7710,
          "as10": 13.75,
          "wa": 0,
          "ca": 0
        }
      },
      "reaper": {
        "finalScore": 53.26,
        "battleScore": 35.59,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 7,
        "rankIndex": 0,
        "det": {
          "g": 7,
          "time": 2928,
          "wr": 55,
          "el10": 11.68,
          "de10": 9.63,
          "dm10": 4447,
          "he10": 652,
          "as10": 0,
          "wa": 29,
          "ca": 11
        }
      },
      "sojourn": {
        "finalScore": 32.82,
        "battleScore": 38.61,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 0,
        "det": {
          "g": 3,
          "time": 1311,
          "wr": 76,
          "el10": 17.39,
          "de10": 8.24,
          "dm10": 5914,
          "he10": 0,
          "as10": 0,
          "wa": 27,
          "ca": 9
        }
      },
      "soldier-76": {
        "finalScore": 25.67,
        "battleScore": 30.19,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 0,
        "det": {
          "g": 4,
          "time": 1846,
          "wr": 50,
          "el10": 7.15,
          "de10": 8.78,
          "dm10": 4633,
          "he10": 909,
          "as10": 0.33,
          "wa": 25,
          "ca": 12
        }
      },
      "widowmaker": {
        "finalScore": 28.15,
        "battleScore": 32.12,
        "coeff": 1,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 0,
        "det": {
          "g": 6,
          "time": 2626,
          "wr": 20,
          "el10": 7.54,
          "de10": 7.54,
          "dm10": 4742,
          "he10": 0,
          "as10": 3.88,
          "wa": 33,
          "ca": 11
        }
      }
    },
    "recent": [
      {
        "d": "2026-09-17",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-18",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-19",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-20",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-21",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-22",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-23",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-24",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-25",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-26",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-27",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-28",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-29",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-09-30",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-01",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-02",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-03",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-04",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-05",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-06",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-07",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-08",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-09",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-10",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-11",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-12",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "tot": {
          "e": 1267,
          "a": 140,
          "dd": 1005,
          "dm": 669354,
          "he": 573324
        },
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-13",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "tot": {
          "e": 1267,
          "a": 140,
          "dd": 1005,
          "dm": 669354,
          "he": 573324
        },
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-14",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "tot": {
          "e": 1267,
          "a": 140,
          "dd": 1005,
          "dm": 669354,
          "he": 573324
        },
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-15",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "tot": {
          "e": 1267,
          "a": 140,
          "dd": 1005,
          "dm": 669354,
          "he": 573324
        },
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      },
      {
        "d": "2026-10-16",
        "g": {},
        "m": 167,
        "w": 66,
        "l": 101,
        "t": 82059,
        "k": 1.4,
        "tot": {
          "e": 1267,
          "a": 140,
          "dd": 1005,
          "dm": 669354,
          "he": 573324
        },
        "r": {
          "Tank": null,
          "Damage": null,
          "Support": null
        }
      }
    ]
  },
  {
    "id": "p9",
    "pid": "df57b58ba07994e0b8a122a7d7|cd6cf51152735dd8913954bd8b4cd0e6",
    "name": "Miyasho",
    "tag": "",
    "endorse": 2,
    "title": null,
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b8bdee6c02c050577705584278c7304d7d9416c3aa1f2f6563843dfe9295fc3d.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/0e9da94d2a00882004bf2249d93d14f35020e078080de4ef33233f1e6c8fbbb8.png",
    "role": "Support",
    "ranks": {
      "Tank": null,
      "Damage": {
        "division": "silver",
        "tier": 5,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_SilverTier.305e60dca5e95356ced59825426844cc7cdb4948.png"
      },
      "Support": {
        "division": "silver",
        "tier": 2,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_SilverTier.305e60dca5e95356ced59825426844cc7cdb4948.png"
      }
    },
    "rankTier": "Silver 2",
    "overall": {
      "matches": 244,
      "wins": 99,
      "losses": 145,
      "wr": 40.57,
      "kda": 1.48,
      "elim": 10.14,
      "deaths": 7.48,
      "dmg": 5937.96,
      "heal": 4122.9,
      "time": 124614,
      "tot": {
        "e": 2107,
        "a": 195,
        "dd": 1553,
        "dm": 1233255,
        "he": 856285
      }
    },
    "roles": {
      "Tank": {
        "g": 9,
        "w": 6,
        "l": 3,
        "time": 3964,
        "wr": 66.67,
        "kda": 4,
        "elim": 18.77,
        "deaths": 5.3,
        "dmg": 11345.96,
        "heal": 356.46
      },
      "Damage": {
        "g": 103,
        "w": 43,
        "l": 60,
        "time": 54622,
        "wr": 41.75,
        "kda": 1.38,
        "elim": 11.83,
        "deaths": 8.58,
        "dmg": 7674.84,
        "heal": 365.09
      },
      "Support": {
        "g": 132,
        "w": 50,
        "l": 82,
        "time": 66028,
        "wr": 37.88,
        "kda": 1.47,
        "elim": 8.23,
        "deaths": 6.7,
        "dmg": 4176.45,
        "heal": 7457.68
      }
    },
    "heroes": [
      {
        "slug": "kiriko",
        "n": "Kiriko",
        "role": "Support",
        "g": 42,
        "wr": 45.24,
        "kda": 1.05
      },
      {
        "slug": "moira",
        "n": "Moira",
        "role": "Support",
        "g": 35,
        "wr": 37.14,
        "kda": 2.09
      },
      {
        "slug": "anran",
        "n": "Anran",
        "role": "Damage",
        "g": 17,
        "wr": 41.18,
        "kda": 1.22
      },
      {
        "slug": "pharah",
        "n": "Pharah",
        "role": "Damage",
        "g": 17,
        "wr": 47.06,
        "kda": 1.35
      },
      {
        "slug": "sombra",
        "n": "Sombra",
        "role": "Support",
        "g": 16,
        "wr": 31.25,
        "kda": 1.88
      },
      {
        "slug": "emre",
        "n": "Emre",
        "role": "Damage",
        "g": 15,
        "wr": 33.33,
        "kda": 1.41
      },
      {
        "slug": "doctrine",
        "n": "Doctrine",
        "role": "Support",
        "g": 11,
        "wr": 27.27,
        "kda": 1.31
      },
      {
        "slug": "mizuki",
        "n": "Mizuki",
        "role": "Support",
        "g": 10,
        "wr": 20,
        "kda": 0.73
      },
      {
        "slug": "reaper",
        "n": "Reaper",
        "role": "Damage",
        "g": 10,
        "wr": 60,
        "kda": 2.16
      },
      {
        "slug": "bastion",
        "n": "Bastion",
        "role": "Damage",
        "g": 8,
        "wr": 25,
        "kda": 1.55
      },
      {
        "slug": "shion",
        "n": "Shion",
        "role": "Damage",
        "g": 8,
        "wr": 25,
        "kda": 1.4
      },
      {
        "slug": "zenyatta",
        "n": "Zenyatta",
        "role": "Support",
        "g": 7,
        "wr": 71.43,
        "kda": 3.35
      },
      {
        "slug": "soldier-76",
        "n": "Soldier: 76",
        "role": "Damage",
        "g": 6,
        "wr": 33.33,
        "kda": 1.17
      },
      {
        "slug": "cassidy",
        "n": "Cassidy",
        "role": "Damage",
        "g": 5,
        "wr": 40,
        "kda": 1.57
      },
      {
        "slug": "mauga",
        "n": "Mauga",
        "role": "Tank",
        "g": 5,
        "wr": 60,
        "kda": 2.91
      },
      {
        "slug": "sierra",
        "n": "Sierra",
        "role": "Damage",
        "g": 5,
        "wr": 80,
        "kda": 1.72
      },
      {
        "slug": "ana",
        "n": "Ana",
        "role": "Support",
        "g": 4,
        "wr": 25,
        "kda": 1.3
      },
      {
        "slug": "echo",
        "n": "Echo",
        "role": "Damage",
        "g": 4,
        "wr": 50,
        "kda": 1.38
      },
      {
        "slug": "torbjorn",
        "n": "Torbjörn",
        "role": "Damage",
        "g": 3,
        "wr": 66.67,
        "kda": 1.26
      },
      {
        "slug": "wuyang",
        "n": "Wuyang",
        "role": "Support",
        "g": 3,
        "wr": 66.67,
        "kda": 1.29
      },
      {
        "slug": "junkrat",
        "n": "Junkrat",
        "role": "Damage",
        "g": 2,
        "wr": 50,
        "kda": 0.54
      },
      {
        "slug": "orisa",
        "n": "Orisa",
        "role": "Tank",
        "g": 2,
        "wr": 50,
        "kda": 3.67
      },
      {
        "slug": "brigitte",
        "n": "Brigitte",
        "role": "Support",
        "g": 1,
        "wr": 0,
        "kda": 0.18
      },
      {
        "slug": "dva",
        "n": "D.Va",
        "role": "Tank",
        "g": 1,
        "wr": 100,
        "kda": 11.5
      },
      {
        "slug": "freja",
        "n": "Freja",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 0.3
      },
      {
        "slug": "hazard",
        "n": "Hazard",
        "role": "Tank",
        "g": 1,
        "wr": 100,
        "kda": 0
      },
      {
        "slug": "jetpack-cat",
        "n": "Jetpack Cat",
        "role": "Support",
        "g": 1,
        "wr": 0,
        "kda": 0.14
      },
      {
        "slug": "juno",
        "n": "Juno",
        "role": "Support",
        "g": 1,
        "wr": 0,
        "kda": 0.2
      },
      {
        "slug": "lifeweaver",
        "n": "Lifeweaver",
        "role": "Support",
        "g": 1,
        "wr": 0,
        "kda": 0.13
      },
      {
        "slug": "symmetra",
        "n": "Symmetra",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 0.86
      },
      {
        "slug": "tracer",
        "n": "Tracer",
        "role": "Damage",
        "g": 1,
        "wr": 0,
        "kda": 0.43
      }
    ],
    "bscore": {
      "doctrine": {
        "finalScore": 33.6,
        "battleScore": 32.88,
        "coeff": 1.1,
        "matchCoef": 0.93,
        "gamesPlayed": 11,
        "rankIndex": 1,
        "det": {
          "g": 11,
          "time": 6372,
          "wr": 27,
          "el10": 8.179090909090908,
          "de10": 6.441818181818181,
          "dm10": 3239.090909090909,
          "he10": 8440,
          "as10": 14.47727272727273,
          "wa": 48.45454545454545,
          "ca": 0
        },
        "rankDelta": -4,
        "rankDeltaPower": -2
      },
      "echo": {
        "finalScore": 33.57,
        "battleScore": 35.9,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 1,
        "det": {
          "g": 4,
          "time": 1871,
          "wr": 48,
          "el10": 9.9225,
          "de10": 9.299999999999999,
          "dm10": 6360.75,
          "he10": 91.5,
          "as10": 0.27749999999999997,
          "wa": 22.75,
          "ca": 5.5
        },
        "rankDelta": -5,
        "rankDeltaPower": -8
      },
      "moira": {
        "finalScore": 60.16,
        "battleScore": 35.19,
        "coeff": 1.1,
        "matchCoef": 1.01,
        "gamesPlayed": 35,
        "rankIndex": 1,
        "det": {
          "g": 35,
          "time": 17449,
          "wr": 36.91428571428571,
          "el10": 12.007428571428573,
          "de10": 5.716,
          "dm10": 3764.9142857142856,
          "he10": 8686.857142857143,
          "as10": 11.984285714285715,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": -2
      },
      "shion": {
        "finalScore": 32.56,
        "battleScore": 32.84,
        "coeff": 1.1,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 1,
        "det": {
          "g": 8,
          "time": 4063,
          "wr": 26.25,
          "el10": 12.495000000000001,
          "de10": 8.8725,
          "dm10": 5825.75,
          "he10": 19.18,
          "as10": 1.4849999999999999,
          "wa": 31.875,
          "ca": 10.5
        }
      },
      "sombra": {
        "finalScore": 37.15,
        "battleScore": 35.13,
        "coeff": 1.1,
        "matchCoef": 0.96,
        "gamesPlayed": 16,
        "rankIndex": 1,
        "det": {
          "g": 16,
          "time": 7981,
          "wr": 31.875,
          "el10": 10.28125,
          "de10": 7.40625,
          "dm10": 3613.9375,
          "he10": 6376.4375,
          "as10": 14.568750000000001,
          "wa": 29.0625,
          "ca": 7.75
        },
        "rankDelta": -5
      },
      "wuyang": {
        "finalScore": 34.06,
        "battleScore": 36.43,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 1,
        "det": {
          "g": 3,
          "time": 2179,
          "wr": 59,
          "el10": 9.226666666666667,
          "de10": 7.603333333333334,
          "dm10": 4414.333333333333,
          "he10": 6012,
          "as10": 16.013333333333332,
          "wa": 25,
          "ca": 0
        },
        "rankDelta": 4,
        "rankDeltaPower": 4
      },
      "ana": {
        "finalScore": 25.42,
        "battleScore": 27.19,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 1,
        "det": {
          "g": 4,
          "time": 1852,
          "wr": 25,
          "el10": 5.83,
          "de10": 7.45,
          "dm10": 2829,
          "he10": 2842,
          "as10": 7.13,
          "wa": 37,
          "ca": 0
        }
      },
      "anran": {
        "finalScore": 52.82,
        "battleScore": 35.14,
        "coeff": 1.1,
        "matchCoef": 0.98,
        "gamesPlayed": 17,
        "rankIndex": 1,
        "det": {
          "g": 17,
          "time": 8904,
          "wr": 42,
          "el10": 11.93,
          "de10": 9.77,
          "dm10": 5412,
          "he10": 526,
          "as10": 0.47,
          "wa": 29,
          "ca": 8
        },
        "rankDelta": 1
      },
      "bastion": {
        "finalScore": 54.01,
        "battleScore": 38.29,
        "coeff": 1.1,
        "matchCoef": 0.95,
        "gamesPlayed": 8,
        "rankIndex": 1,
        "det": {
          "g": 8,
          "time": 4274,
          "wr": 25,
          "el10": 13.05,
          "de10": 8.42,
          "dm10": 8392,
          "he10": 144,
          "as10": 1.82,
          "wa": 28,
          "ca": 3
        },
        "rankDelta": 1
      },
      "brigitte": {
        "finalScore": 27.35,
        "battleScore": 29.25,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 1,
        "det": {
          "g": 1,
          "time": 609,
          "wr": 0,
          "el10": 0.98,
          "de10": 10.83,
          "dm10": 1214,
          "he10": 4563,
          "as10": 5.91,
          "wa": 0,
          "ca": 0
        }
      },
      "cassidy": {
        "finalScore": 33.48,
        "battleScore": 35.36,
        "coeff": 1.1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 1,
        "det": {
          "g": 5,
          "time": 2888,
          "wr": 45,
          "el10": 11.43,
          "de10": 7.27,
          "dm10": 5572,
          "he10": 29.71,
          "as10": 1.04,
          "wa": 42,
          "ca": 9
        },
        "rankDelta": 1,
        "rankDeltaPower": -1
      },
      "dva": {
        "finalScore": 42.35,
        "battleScore": 49.82,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 424,
          "wr": 100,
          "el10": 32.57,
          "de10": 2.83,
          "dm10": 5068,
          "he10": 315,
          "as10": 14.16,
          "wa": 30,
          "ca": 7
        }
      },
      "emre": {
        "finalScore": 34.83,
        "battleScore": 33.13,
        "coeff": 1.1,
        "matchCoef": 0.96,
        "gamesPlayed": 15,
        "rankIndex": 1,
        "det": {
          "g": 15,
          "time": 6765,
          "wr": 33,
          "el10": 12.59,
          "de10": 8.96,
          "dm10": 6732,
          "he10": 605,
          "as10": 0,
          "wa": 31,
          "ca": 11
        },
        "rankDelta": 1,
        "rankDeltaPower": 2
      },
      "freja": {
        "finalScore": 26.7,
        "battleScore": 28.55,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 1,
        "det": {
          "g": 1,
          "time": 551,
          "wr": 0,
          "el10": 3.27,
          "de10": 10.88,
          "dm10": 3395,
          "he10": 0,
          "as10": 0,
          "wa": 23,
          "ca": 10
        }
      },
      "hazard": {
        "finalScore": 31.09,
        "battleScore": 36.57,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 214,
          "wr": 100,
          "el10": 55.99,
          "de10": 0,
          "dm10": 6945,
          "he10": 112,
          "as10": 11.2,
          "wa": 22,
          "ca": 2
        },
        "rankDelta": 1
      },
      "jetpack-cat": {
        "finalScore": 25.44,
        "battleScore": 27.21,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 1,
        "det": {
          "g": 1,
          "time": 408,
          "wr": 0,
          "el10": 1.47,
          "de10": 10.3,
          "dm10": 1952,
          "he10": 4463,
          "as10": 1.47,
          "wa": 25,
          "ca": 7
        }
      },
      "junkrat": {
        "finalScore": 28.33,
        "battleScore": 30.3,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 1,
        "det": {
          "g": 2,
          "time": 649,
          "wr": 41,
          "el10": 6.47,
          "de10": 12.02,
          "dm10": 5591,
          "he10": 0,
          "as10": 0,
          "wa": 11,
          "ca": 0
        }
      },
      "juno": {
        "finalScore": 28.71,
        "battleScore": 30.71,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 1,
        "det": {
          "g": 1,
          "time": 292,
          "wr": 0,
          "el10": 2.05,
          "de10": 10.26,
          "dm10": 2286,
          "he10": 5452,
          "as10": 2.05,
          "wa": 42,
          "ca": 2
        }
      },
      "kiriko": {
        "finalScore": 36.66,
        "battleScore": 31.9,
        "coeff": 1.1,
        "matchCoef": 1.04,
        "gamesPlayed": 42,
        "rankIndex": 1,
        "det": {
          "g": 42,
          "time": 19982,
          "wr": 44,
          "el10": 4.59,
          "de10": 6.22,
          "dm10": 2094,
          "he10": 7834,
          "as10": 12.67,
          "wa": 26,
          "ca": 10
        },
        "rankDeltaPower": 1
      },
      "lifeweaver": {
        "finalScore": 26.86,
        "battleScore": 28.73,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 1,
        "det": {
          "g": 1,
          "time": 381,
          "wr": 0,
          "el10": 1.57,
          "de10": 12.59,
          "dm10": 907,
          "he10": 6380,
          "as10": 0,
          "wa": 29,
          "ca": 13
        }
      },
      "mauga": {
        "finalScore": 49.62,
        "battleScore": 33.31,
        "coeff": 1,
        "matchCoef": 0.93,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2097,
          "wr": 46,
          "el10": 15.17,
          "de10": 6.3,
          "dm10": 7104,
          "he10": 501,
          "as10": 4.29,
          "wa": 29,
          "ca": 9
        }
      },
      "mizuki": {
        "finalScore": 26.74,
        "battleScore": 26.41,
        "coeff": 1.1,
        "matchCoef": 0.92,
        "gamesPlayed": 10,
        "rankIndex": 1,
        "det": {
          "g": 10,
          "time": 5094,
          "wr": 19,
          "el10": 6.48,
          "de10": 8.83,
          "dm10": 2894,
          "he10": 6699,
          "as10": 6.95,
          "wa": 23,
          "ca": 8
        }
      },
      "orisa": {
        "finalScore": 35.38,
        "battleScore": 41.63,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 1116,
          "wr": 73,
          "el10": 15.05,
          "de10": 4.84,
          "dm10": 7467,
          "he10": 184,
          "as10": 2.69,
          "wa": 28,
          "ca": 7
        },
        "rankDelta": 1,
        "rankDeltaPower": 1
      },
      "pharah": {
        "finalScore": 35.78,
        "battleScore": 33.65,
        "coeff": 1.1,
        "matchCoef": 0.97,
        "gamesPlayed": 17,
        "rankIndex": 1,
        "det": {
          "g": 17,
          "time": 8417,
          "wr": 45,
          "el10": 10.98,
          "de10": 8.13,
          "dm10": 6353,
          "he10": 0,
          "as10": 3.14,
          "wa": 37,
          "ca": 0
        },
        "rankDelta": 1,
        "rankDeltaPower": 1
      },
      "reaper": {
        "finalScore": 55.81,
        "battleScore": 38.12,
        "coeff": 1.1,
        "matchCoef": 0.96,
        "gamesPlayed": 10,
        "rankIndex": 1,
        "det": {
          "g": 10,
          "time": 5621,
          "wr": 58,
          "el10": 13.24,
          "de10": 6.3,
          "dm10": 5339,
          "he10": 990,
          "as10": 0,
          "wa": 27,
          "ca": 12
        },
        "rankDelta": 1
      },
      "sierra": {
        "finalScore": 41.5,
        "battleScore": 43.83,
        "coeff": 1.1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 1,
        "det": {
          "g": 5,
          "time": 3154,
          "wr": 72,
          "el10": 14.08,
          "de10": 8.18,
          "dm10": 7865,
          "he10": 106,
          "as10": 1.33,
          "wa": 32,
          "ca": 8
        }
      },
      "soldier-76": {
        "finalScore": 33.94,
        "battleScore": 35.2,
        "coeff": 1.1,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 1,
        "det": {
          "g": 6,
          "time": 3523,
          "wr": 30,
          "el10": 11.92,
          "de10": 10.22,
          "dm10": 7138,
          "he10": 1045,
          "as10": 1.19,
          "wa": 37,
          "ca": 10
        },
        "rankDelta": 2,
        "rankDeltaPower": 1
      },
      "symmetra": {
        "finalScore": 29.77,
        "battleScore": 31.84,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 1,
        "det": {
          "g": 1,
          "time": 500,
          "wr": 0,
          "el10": 7.2,
          "de10": 8.4,
          "dm10": 3105,
          "he10": 357,
          "as10": 3.6,
          "wa": 16,
          "ca": 0
        }
      },
      "torbjorn": {
        "finalScore": 37.02,
        "battleScore": 39.6,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 1,
        "det": {
          "g": 3,
          "time": 1987,
          "wr": 63,
          "el10": 10.27,
          "de10": 8.15,
          "dm10": 6154,
          "he10": 0,
          "as10": 0.3,
          "wa": 30,
          "ca": 5
        },
        "rankDelta": 1,
        "rankDeltaPower": 1
      },
      "tracer": {
        "finalScore": 32.23,
        "battleScore": 34.47,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 1,
        "det": {
          "g": 1,
          "time": 520,
          "wr": 0,
          "el10": 3.46,
          "de10": 8.08,
          "dm10": 3491,
          "he10": 31.83,
          "as10": 0,
          "wa": 38,
          "ca": 4
        },
        "rankDelta": 1
      },
      "zenyatta": {
        "finalScore": 43.13,
        "battleScore": 44.06,
        "coeff": 1.1,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 1,
        "det": {
          "g": 7,
          "time": 3092,
          "wr": 72,
          "el10": 12.22,
          "de10": 6.6,
          "dm10": 3833,
          "he10": 5383,
          "as10": 21.73,
          "wa": 25,
          "ca": 10
        }
      }
    },
    "bscoreAll": {
      "doctrine": {
        "finalScore": 33.6,
        "battleScore": 32.88,
        "coeff": 1.1,
        "matchCoef": 0.93,
        "gamesPlayed": 11,
        "rankIndex": 1,
        "det": {
          "g": 11,
          "time": 6372,
          "wr": 27,
          "el10": 8.179090909090908,
          "de10": 6.441818181818181,
          "dm10": 3239.090909090909,
          "he10": 8440,
          "as10": 14.47727272727273,
          "wa": 48.45454545454545,
          "ca": 0
        },
        "rankDelta": -4,
        "rankDeltaPower": -2
      },
      "echo": {
        "finalScore": 33.57,
        "battleScore": 35.9,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 1,
        "det": {
          "g": 4,
          "time": 1871,
          "wr": 48,
          "el10": 9.9225,
          "de10": 9.299999999999999,
          "dm10": 6360.75,
          "he10": 91.5,
          "as10": 0.27749999999999997,
          "wa": 22.75,
          "ca": 5.5
        },
        "rankDelta": -5,
        "rankDeltaPower": -8
      },
      "moira": {
        "finalScore": 60.16,
        "battleScore": 35.19,
        "coeff": 1.1,
        "matchCoef": 1.01,
        "gamesPlayed": 35,
        "rankIndex": 1,
        "det": {
          "g": 35,
          "time": 17449,
          "wr": 36.91428571428571,
          "el10": 12.007428571428573,
          "de10": 5.716,
          "dm10": 3764.9142857142856,
          "he10": 8686.857142857143,
          "as10": 11.984285714285715,
          "wa": 0,
          "ca": 0
        },
        "rankDelta": -2
      },
      "shion": {
        "finalScore": 32.56,
        "battleScore": 32.84,
        "coeff": 1.1,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 1,
        "det": {
          "g": 8,
          "time": 4063,
          "wr": 26.25,
          "el10": 12.495000000000001,
          "de10": 8.8725,
          "dm10": 5825.75,
          "he10": 19.18,
          "as10": 1.4849999999999999,
          "wa": 31.875,
          "ca": 10.5
        }
      },
      "sombra": {
        "finalScore": 37.15,
        "battleScore": 35.13,
        "coeff": 1.1,
        "matchCoef": 0.96,
        "gamesPlayed": 16,
        "rankIndex": 1,
        "det": {
          "g": 16,
          "time": 7981,
          "wr": 31.875,
          "el10": 10.28125,
          "de10": 7.40625,
          "dm10": 3613.9375,
          "he10": 6376.4375,
          "as10": 14.568750000000001,
          "wa": 29.0625,
          "ca": 7.75
        },
        "rankDelta": -5
      },
      "wuyang": {
        "finalScore": 34.06,
        "battleScore": 36.43,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 1,
        "det": {
          "g": 3,
          "time": 2179,
          "wr": 59,
          "el10": 9.226666666666667,
          "de10": 7.603333333333334,
          "dm10": 4414.333333333333,
          "he10": 6012,
          "as10": 16.013333333333332,
          "wa": 25,
          "ca": 0
        },
        "rankDelta": 4,
        "rankDeltaPower": 4
      },
      "ana": {
        "finalScore": 25.42,
        "battleScore": 27.19,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 1,
        "det": {
          "g": 4,
          "time": 1852,
          "wr": 25,
          "el10": 5.83,
          "de10": 7.45,
          "dm10": 2829,
          "he10": 2842,
          "as10": 7.13,
          "wa": 37,
          "ca": 0
        }
      },
      "anran": {
        "finalScore": 52.82,
        "battleScore": 35.14,
        "coeff": 1.1,
        "matchCoef": 0.98,
        "gamesPlayed": 17,
        "rankIndex": 1,
        "det": {
          "g": 17,
          "time": 8904,
          "wr": 42,
          "el10": 11.93,
          "de10": 9.77,
          "dm10": 5412,
          "he10": 526,
          "as10": 0.47,
          "wa": 29,
          "ca": 8
        },
        "rankDelta": 1
      },
      "bastion": {
        "finalScore": 54.01,
        "battleScore": 38.29,
        "coeff": 1.1,
        "matchCoef": 0.95,
        "gamesPlayed": 8,
        "rankIndex": 1,
        "det": {
          "g": 8,
          "time": 4274,
          "wr": 25,
          "el10": 13.05,
          "de10": 8.42,
          "dm10": 8392,
          "he10": 144,
          "as10": 1.82,
          "wa": 28,
          "ca": 3
        },
        "rankDelta": 1
      },
      "brigitte": {
        "finalScore": 27.35,
        "battleScore": 29.25,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 1,
        "det": {
          "g": 1,
          "time": 609,
          "wr": 0,
          "el10": 0.98,
          "de10": 10.83,
          "dm10": 1214,
          "he10": 4563,
          "as10": 5.91,
          "wa": 0,
          "ca": 0
        }
      },
      "cassidy": {
        "finalScore": 33.48,
        "battleScore": 35.36,
        "coeff": 1.1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 1,
        "det": {
          "g": 5,
          "time": 2888,
          "wr": 45,
          "el10": 11.43,
          "de10": 7.27,
          "dm10": 5572,
          "he10": 29.71,
          "as10": 1.04,
          "wa": 42,
          "ca": 9
        },
        "rankDelta": 1,
        "rankDeltaPower": -1
      },
      "dva": {
        "finalScore": 42.35,
        "battleScore": 49.82,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 424,
          "wr": 100,
          "el10": 32.57,
          "de10": 2.83,
          "dm10": 5068,
          "he10": 315,
          "as10": 14.16,
          "wa": 30,
          "ca": 7
        }
      },
      "emre": {
        "finalScore": 34.83,
        "battleScore": 33.13,
        "coeff": 1.1,
        "matchCoef": 0.96,
        "gamesPlayed": 15,
        "rankIndex": 1,
        "det": {
          "g": 15,
          "time": 6765,
          "wr": 33,
          "el10": 12.59,
          "de10": 8.96,
          "dm10": 6732,
          "he10": 605,
          "as10": 0,
          "wa": 31,
          "ca": 11
        },
        "rankDelta": 1,
        "rankDeltaPower": 2
      },
      "freja": {
        "finalScore": 26.7,
        "battleScore": 28.55,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 1,
        "det": {
          "g": 1,
          "time": 551,
          "wr": 0,
          "el10": 3.27,
          "de10": 10.88,
          "dm10": 3395,
          "he10": 0,
          "as10": 0,
          "wa": 23,
          "ca": 10
        }
      },
      "hazard": {
        "finalScore": 31.09,
        "battleScore": 36.57,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 214,
          "wr": 100,
          "el10": 55.99,
          "de10": 0,
          "dm10": 6945,
          "he10": 112,
          "as10": 11.2,
          "wa": 22,
          "ca": 2
        },
        "rankDelta": 1
      },
      "jetpack-cat": {
        "finalScore": 25.44,
        "battleScore": 27.21,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 1,
        "det": {
          "g": 1,
          "time": 408,
          "wr": 0,
          "el10": 1.47,
          "de10": 10.3,
          "dm10": 1952,
          "he10": 4463,
          "as10": 1.47,
          "wa": 25,
          "ca": 7
        }
      },
      "junkrat": {
        "finalScore": 28.33,
        "battleScore": 30.3,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 1,
        "det": {
          "g": 2,
          "time": 649,
          "wr": 41,
          "el10": 6.47,
          "de10": 12.02,
          "dm10": 5591,
          "he10": 0,
          "as10": 0,
          "wa": 11,
          "ca": 0
        }
      },
      "juno": {
        "finalScore": 28.71,
        "battleScore": 30.71,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 1,
        "det": {
          "g": 1,
          "time": 292,
          "wr": 0,
          "el10": 2.05,
          "de10": 10.26,
          "dm10": 2286,
          "he10": 5452,
          "as10": 2.05,
          "wa": 42,
          "ca": 2
        }
      },
      "kiriko": {
        "finalScore": 36.66,
        "battleScore": 31.9,
        "coeff": 1.1,
        "matchCoef": 1.04,
        "gamesPlayed": 42,
        "rankIndex": 1,
        "det": {
          "g": 42,
          "time": 19982,
          "wr": 44,
          "el10": 4.59,
          "de10": 6.22,
          "dm10": 2094,
          "he10": 7834,
          "as10": 12.67,
          "wa": 26,
          "ca": 10
        },
        "rankDeltaPower": 1
      },
      "lifeweaver": {
        "finalScore": 26.86,
        "battleScore": 28.73,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 1,
        "det": {
          "g": 1,
          "time": 381,
          "wr": 0,
          "el10": 1.57,
          "de10": 12.59,
          "dm10": 907,
          "he10": 6380,
          "as10": 0,
          "wa": 29,
          "ca": 13
        }
      },
      "mauga": {
        "finalScore": 49.62,
        "battleScore": 33.31,
        "coeff": 1,
        "matchCoef": 0.93,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2097,
          "wr": 46,
          "el10": 15.17,
          "de10": 6.3,
          "dm10": 7104,
          "he10": 501,
          "as10": 4.29,
          "wa": 29,
          "ca": 9
        }
      },
      "mizuki": {
        "finalScore": 26.74,
        "battleScore": 26.41,
        "coeff": 1.1,
        "matchCoef": 0.92,
        "gamesPlayed": 10,
        "rankIndex": 1,
        "det": {
          "g": 10,
          "time": 5094,
          "wr": 19,
          "el10": 6.48,
          "de10": 8.83,
          "dm10": 2894,
          "he10": 6699,
          "as10": 6.95,
          "wa": 23,
          "ca": 8
        }
      },
      "orisa": {
        "finalScore": 35.38,
        "battleScore": 41.63,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 1116,
          "wr": 73,
          "el10": 15.05,
          "de10": 4.84,
          "dm10": 7467,
          "he10": 184,
          "as10": 2.69,
          "wa": 28,
          "ca": 7
        },
        "rankDelta": 1,
        "rankDeltaPower": 1
      },
      "pharah": {
        "finalScore": 35.78,
        "battleScore": 33.65,
        "coeff": 1.1,
        "matchCoef": 0.97,
        "gamesPlayed": 17,
        "rankIndex": 1,
        "det": {
          "g": 17,
          "time": 8417,
          "wr": 45,
          "el10": 10.98,
          "de10": 8.13,
          "dm10": 6353,
          "he10": 0,
          "as10": 3.14,
          "wa": 37,
          "ca": 0
        },
        "rankDelta": 1,
        "rankDeltaPower": 1
      },
      "reaper": {
        "finalScore": 55.81,
        "battleScore": 38.12,
        "coeff": 1.1,
        "matchCoef": 0.96,
        "gamesPlayed": 10,
        "rankIndex": 1,
        "det": {
          "g": 10,
          "time": 5621,
          "wr": 58,
          "el10": 13.24,
          "de10": 6.3,
          "dm10": 5339,
          "he10": 990,
          "as10": 0,
          "wa": 27,
          "ca": 12
        },
        "rankDelta": 1
      },
      "sierra": {
        "finalScore": 41.5,
        "battleScore": 43.83,
        "coeff": 1.1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 1,
        "det": {
          "g": 5,
          "time": 3154,
          "wr": 72,
          "el10": 14.08,
          "de10": 8.18,
          "dm10": 7865,
          "he10": 106,
          "as10": 1.33,
          "wa": 32,
          "ca": 8
        }
      },
      "soldier-76": {
        "finalScore": 33.94,
        "battleScore": 35.2,
        "coeff": 1.1,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 1,
        "det": {
          "g": 6,
          "time": 3523,
          "wr": 30,
          "el10": 11.92,
          "de10": 10.22,
          "dm10": 7138,
          "he10": 1045,
          "as10": 1.19,
          "wa": 37,
          "ca": 10
        },
        "rankDelta": 2,
        "rankDeltaPower": 1
      },
      "symmetra": {
        "finalScore": 29.77,
        "battleScore": 31.84,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 1,
        "det": {
          "g": 1,
          "time": 500,
          "wr": 0,
          "el10": 7.2,
          "de10": 8.4,
          "dm10": 3105,
          "he10": 357,
          "as10": 3.6,
          "wa": 16,
          "ca": 0
        }
      },
      "torbjorn": {
        "finalScore": 37.02,
        "battleScore": 39.6,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 1,
        "det": {
          "g": 3,
          "time": 1987,
          "wr": 63,
          "el10": 10.27,
          "de10": 8.15,
          "dm10": 6154,
          "he10": 0,
          "as10": 0.3,
          "wa": 30,
          "ca": 5
        },
        "rankDelta": 1,
        "rankDeltaPower": 1
      },
      "tracer": {
        "finalScore": 32.23,
        "battleScore": 34.47,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 1,
        "det": {
          "g": 1,
          "time": 520,
          "wr": 0,
          "el10": 3.46,
          "de10": 8.08,
          "dm10": 3491,
          "he10": 31.83,
          "as10": 0,
          "wa": 38,
          "ca": 4
        },
        "rankDelta": 1
      },
      "zenyatta": {
        "finalScore": 43.13,
        "battleScore": 44.06,
        "coeff": 1.1,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 1,
        "det": {
          "g": 7,
          "time": 3092,
          "wr": 72,
          "el10": 12.22,
          "de10": 6.6,
          "dm10": 3833,
          "he10": 5383,
          "as10": 21.73,
          "wa": 25,
          "ca": 10
        }
      }
    },
    "recent": [
      {
        "d": "2026-09-17",
        "g": {},
        "m": 162,
        "w": 71,
        "l": 91,
        "t": 84225,
        "k": 1.53,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-3"
        }
      },
      {
        "d": "2026-09-18",
        "g": {},
        "m": 162,
        "w": 71,
        "l": 91,
        "t": 84225,
        "k": 1.53,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-3"
        }
      },
      {
        "d": "2026-09-19",
        "g": {},
        "m": 162,
        "w": 71,
        "l": 91,
        "t": 84225,
        "k": 1.53,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-3"
        }
      },
      {
        "d": "2026-09-20",
        "g": {},
        "m": 162,
        "w": 71,
        "l": 91,
        "t": 84225,
        "k": 1.53,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-3"
        }
      },
      {
        "d": "2026-09-21",
        "g": {},
        "m": 162,
        "w": 71,
        "l": 91,
        "t": 84225,
        "k": 1.53,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-3"
        }
      },
      {
        "d": "2026-09-22",
        "g": {},
        "m": 162,
        "w": 71,
        "l": 91,
        "t": 84225,
        "k": 1.53,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-3"
        }
      },
      {
        "d": "2026-09-23",
        "g": {},
        "m": 162,
        "w": 71,
        "l": 91,
        "t": 84225,
        "k": 1.53,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-3"
        }
      },
      {
        "d": "2026-09-24",
        "g": {
          "anran": 1,
          "bastion": 1,
          "emre": 1,
          "pharah": 1,
          "soldier-76": 1,
          "zenyatta": 1,
          "cassidy": 1
        },
        "m": 169,
        "w": 75,
        "l": 94,
        "t": 87253,
        "k": 1.53,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-3"
        }
      },
      {
        "d": "2026-09-25",
        "g": {
          "mizuki": 2,
          "moira": 7,
          "ana": 1,
          "brigitte": 1,
          "freja": 1,
          "junkrat": 1,
          "lifeweaver": 1,
          "wuyang": 1
        },
        "m": 184,
        "w": 80,
        "l": 104,
        "t": 97221,
        "k": 1.49,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-3"
        }
      },
      {
        "d": "2026-09-26",
        "g": {
          "anran": 3,
          "kiriko": 4,
          "moira": 2,
          "shion": 2,
          "sierra": 1,
          "soldier-76": 1,
          "zenyatta": 1,
          "cassidy": 2,
          "jetpack-cat": 1,
          "torbjorn": 1
        },
        "m": 202,
        "w": 90,
        "l": 112,
        "t": 106385,
        "k": 1.49,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-09-27",
        "g": {
          "anran": 2,
          "baptiste": 1,
          "bastion": 2,
          "kiriko": 3,
          "mizuki": 2,
          "moira": 5,
          "pharah": 1,
          "soldier-76": 2,
          "zenyatta": 1,
          "tracer": 1
        },
        "m": 222,
        "w": 98,
        "l": 124,
        "t": 117023,
        "k": 1.5,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-1"
        }
      },
      {
        "d": "2026-09-28",
        "g": {
          "anran": 1,
          "bastion": 1,
          "mizuki": 1,
          "moira": 2,
          "reaper": 2
        },
        "m": 229,
        "w": 101,
        "l": 128,
        "t": 120699,
        "k": 1.52,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-1"
        }
      },
      {
        "d": "2026-09-29",
        "g": {},
        "m": 237,
        "w": 102,
        "l": 135,
        "t": 125579,
        "k": 1.5,
        "r": {
          "Tank": null,
          "Damage": "silver-4",
          "Support": "silver-1"
        }
      },
      {
        "d": "2026-09-30",
        "g": {},
        "m": 256,
        "w": 110,
        "l": 146,
        "t": 135234,
        "k": 1.49,
        "r": {
          "Tank": null,
          "Damage": "silver-4",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-01",
        "g": {},
        "m": 256,
        "w": 110,
        "l": 146,
        "t": 135234,
        "k": 1.49,
        "r": {
          "Tank": null,
          "Damage": "silver-4",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-02",
        "g": {},
        "m": 256,
        "w": 110,
        "l": 146,
        "t": 135234,
        "k": 1.49,
        "r": {
          "Tank": null,
          "Damage": "silver-4",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-03",
        "g": {},
        "m": 261,
        "w": 113,
        "l": 148,
        "t": 138634,
        "k": 1.48,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-04",
        "g": {},
        "m": 261,
        "w": 113,
        "l": 148,
        "t": 138634,
        "k": 1.48,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-05",
        "g": {},
        "m": 261,
        "w": 113,
        "l": 148,
        "t": 138634,
        "k": 1.48,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-06",
        "g": {},
        "m": 261,
        "w": 113,
        "l": 148,
        "t": 138634,
        "k": 1.48,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-07",
        "g": {},
        "m": 261,
        "w": 113,
        "l": 148,
        "t": 138634,
        "k": 1.48,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-08",
        "g": {},
        "m": 261,
        "w": 113,
        "l": 148,
        "t": 138634,
        "k": 1.48,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-09",
        "g": {},
        "m": 268,
        "w": 113,
        "l": 155,
        "t": 142079,
        "k": 1.47,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-10",
        "g": {},
        "m": 280,
        "w": 121,
        "l": 159,
        "t": 149388,
        "k": 1.48,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-11",
        "g": {},
        "m": 280,
        "w": 121,
        "l": 159,
        "t": 149388,
        "k": 1.48,
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-12",
        "g": {},
        "m": 296,
        "w": 127,
        "l": 169,
        "t": 158539,
        "k": 1.53,
        "tot": {
          "e": 2798,
          "a": 236,
          "dd": 1987,
          "dm": 1558954,
          "he": 1197305
        },
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-13",
        "g": {},
        "m": 296,
        "w": 127,
        "l": 169,
        "t": 158539,
        "k": 1.53,
        "tot": {
          "e": 2798,
          "a": 236,
          "dd": 1987,
          "dm": 1558954,
          "he": 1197305
        },
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-14",
        "g": {},
        "m": 296,
        "w": 127,
        "l": 169,
        "t": 158539,
        "k": 1.53,
        "tot": {
          "e": 2798,
          "a": 236,
          "dd": 1987,
          "dm": 1558954,
          "he": 1197305
        },
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-15",
        "g": {},
        "m": 226,
        "w": 92,
        "l": 134,
        "t": 113404,
        "k": 1.49,
        "tot": {
          "e": 1910,
          "a": 190,
          "dd": 1405,
          "dm": 1115734,
          "he": 764538
        },
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      },
      {
        "d": "2026-10-16",
        "g": {
          "doctrine": 6,
          "echo": 4,
          "reaper": 1,
          "sierra": 1,
          "sombra": 3,
          "torbjorn": 1,
          "moira": 1,
          "wuyang": 1
        },
        "m": 244,
        "w": 99,
        "l": 145,
        "t": 124614,
        "k": 1.48,
        "tot": {
          "e": 2107,
          "a": 195,
          "dd": 1553,
          "dm": 1233255,
          "he": 856285
        },
        "r": {
          "Tank": null,
          "Damage": "silver-5",
          "Support": "silver-2"
        }
      }
    ]
  },
  {
    "id": "p10",
    "pid": "dc50bb8ba174d6fcbea623|78615f6a87b43682d09d448bafb3b022",
    "name": "Nnware",
    "tag": "",
    "endorse": 3,
    "title": "Talon Imperial",
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a28b07c1bc0019598da03e63c66837e29357caa2b7bc8bf38dbeba0b3bcba4b4.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/aface728ddc9d3c100f0d771e5bc706f22f37e78282bed1426869e295e142aee.png",
    "role": "Damage",
    "ranks": {
      "Tank": null,
      "Damage": {
        "division": "gold",
        "tier": 3,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_GoldTier.8d40eab551020b46a84002019dd98714149ed5e2.png"
      },
      "Support": {
        "division": "gold",
        "tier": 3,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_GoldTier.8d40eab551020b46a84002019dd98714149ed5e2.png"
      }
    },
    "rankTier": "Gold 3",
    "overall": {
      "matches": 1961,
      "wins": 960,
      "losses": 1001,
      "wr": 48.95,
      "kda": 2.04,
      "elim": 12.44,
      "deaths": 7.02,
      "dmg": 6827.35,
      "heal": 3997.8,
      "time": 980740,
      "tot": {
        "e": 20341,
        "a": 3117,
        "dd": 11475,
        "dm": 11159762,
        "he": 6534676
      }
    },
    "roles": {
      "Tank": {
        "g": 190,
        "w": 90,
        "l": 100,
        "time": 96563,
        "wr": 47.37,
        "kda": 3.02,
        "elim": 15.81,
        "deaths": 5.84,
        "dmg": 10929.64,
        "heal": 1231.45
      },
      "Damage": {
        "g": 805,
        "w": 395,
        "l": 410,
        "time": 398231,
        "wr": 49.07,
        "kda": 1.88,
        "elim": 14.24,
        "deaths": 7.96,
        "dmg": 9162.41,
        "heal": 151.67
      },
      "Support": {
        "g": 966,
        "w": 475,
        "l": 491,
        "time": 485946,
        "wr": 49.17,
        "kda": 2.03,
        "elim": 10.3,
        "deaths": 6.49,
        "dmg": 4098.61,
        "heal": 7699.4
      }
    },
    "heroes": [
      {
        "slug": "kiriko",
        "n": "Kiriko",
        "role": "Support",
        "g": 250,
        "wr": 45.2,
        "kda": 1.83
      },
      {
        "slug": "junkrat",
        "n": "Junkrat",
        "role": "Damage",
        "g": 233,
        "wr": 55.36,
        "kda": 2.26
      },
      {
        "slug": "ana",
        "n": "Ana",
        "role": "Support",
        "g": 182,
        "wr": 51.65,
        "kda": 2.46
      },
      {
        "slug": "hanzo",
        "n": "Hanzo",
        "role": "Damage",
        "g": 125,
        "wr": 48,
        "kda": 1.83
      },
      {
        "slug": "moira",
        "n": "Moira",
        "role": "Support",
        "g": 62,
        "wr": 46.77,
        "kda": 2.55
      },
      {
        "slug": "lucio",
        "n": "Lúcio",
        "role": "Support",
        "g": 61,
        "wr": 52.46,
        "kda": 1.88
      },
      {
        "slug": "mizuki",
        "n": "Mizuki",
        "role": "Support",
        "g": 61,
        "wr": 54.1,
        "kda": 1.9
      },
      {
        "slug": "lifeweaver",
        "n": "Lifeweaver",
        "role": "Support",
        "g": 58,
        "wr": 46.55,
        "kda": 1.64
      },
      {
        "slug": "baptiste",
        "n": "Baptiste",
        "role": "Support",
        "g": 57,
        "wr": 50.88,
        "kda": 1.33
      },
      {
        "slug": "wuyang",
        "n": "Wuyang",
        "role": "Support",
        "g": 53,
        "wr": 45.28,
        "kda": 1.79
      },
      {
        "slug": "cassidy",
        "n": "Cassidy",
        "role": "Damage",
        "g": 50,
        "wr": 40,
        "kda": 1.61
      },
      {
        "slug": "juno",
        "n": "Juno",
        "role": "Support",
        "g": 42,
        "wr": 42.86,
        "kda": 1.7
      },
      {
        "slug": "echo",
        "n": "Echo",
        "role": "Damage",
        "g": 40,
        "wr": 40,
        "kda": 1.26
      },
      {
        "slug": "freja",
        "n": "Freja",
        "role": "Damage",
        "g": 39,
        "wr": 51.28,
        "kda": 1.86
      },
      {
        "slug": "soldier-76",
        "n": "Soldier: 76",
        "role": "Damage",
        "g": 37,
        "wr": 48.65,
        "kda": 1.8
      },
      {
        "slug": "tracer",
        "n": "Tracer",
        "role": "Damage",
        "g": 37,
        "wr": 54.05,
        "kda": 1.99
      },
      {
        "slug": "ashe",
        "n": "Ashe",
        "role": "Damage",
        "g": 33,
        "wr": 45.45,
        "kda": 1.7
      },
      {
        "slug": "sombra",
        "n": "Sombra",
        "role": "Support",
        "g": 32,
        "wr": 53.13,
        "kda": 2.84
      },
      {
        "slug": "illari",
        "n": "Illari",
        "role": "Support",
        "g": 27,
        "wr": 77.78,
        "kda": 2.66
      },
      {
        "slug": "bastion",
        "n": "Bastion",
        "role": "Damage",
        "g": 26,
        "wr": 38.46,
        "kda": 1.85
      },
      {
        "slug": "zenyatta",
        "n": "Zenyatta",
        "role": "Support",
        "g": 26,
        "wr": 65.38,
        "kda": 2.88
      },
      {
        "slug": "brigitte",
        "n": "Brigitte",
        "role": "Support",
        "g": 23,
        "wr": 34.78,
        "kda": 1.49
      },
      {
        "slug": "genji",
        "n": "Genji",
        "role": "Damage",
        "g": 23,
        "wr": 43.48,
        "kda": 1.33
      },
      {
        "slug": "reaper",
        "n": "Reaper",
        "role": "Damage",
        "g": 23,
        "wr": 43.48,
        "kda": 1.73
      },
      {
        "slug": "sigma",
        "n": "Sigma",
        "role": "Tank",
        "g": 23,
        "wr": 65.22,
        "kda": 3.35
      },
      {
        "slug": "reinhardt",
        "n": "Reinhardt",
        "role": "Tank",
        "g": 22,
        "wr": 54.55,
        "kda": 3.42
      },
      {
        "slug": "junker-queen",
        "n": "Junker Queen",
        "role": "Tank",
        "g": 21,
        "wr": 52.38,
        "kda": 2.99
      },
      {
        "slug": "jetpack-cat",
        "n": "Jetpack Cat",
        "role": "Support",
        "g": 20,
        "wr": 50,
        "kda": 2.43
      },
      {
        "slug": "roadhog",
        "n": "Roadhog",
        "role": "Tank",
        "g": 20,
        "wr": 50,
        "kda": 3.48
      },
      {
        "slug": "zarya",
        "n": "Zarya",
        "role": "Tank",
        "g": 20,
        "wr": 35,
        "kda": 3.52
      },
      {
        "slug": "emre",
        "n": "Emre",
        "role": "Damage",
        "g": 19,
        "wr": 52.63,
        "kda": 2.28
      },
      {
        "slug": "pharah",
        "n": "Pharah",
        "role": "Damage",
        "g": 18,
        "wr": 38.89,
        "kda": 1.74
      },
      {
        "slug": "widowmaker",
        "n": "Widowmaker",
        "role": "Damage",
        "g": 18,
        "wr": 38.89,
        "kda": 1.39
      },
      {
        "slug": "mauga",
        "n": "Mauga",
        "role": "Tank",
        "g": 17,
        "wr": 35.29,
        "kda": 3.22
      },
      {
        "slug": "sojourn",
        "n": "Sojourn",
        "role": "Damage",
        "g": 17,
        "wr": 47.06,
        "kda": 1.62
      },
      {
        "slug": "torbjorn",
        "n": "Torbjörn",
        "role": "Damage",
        "g": 13,
        "wr": 46.15,
        "kda": 1.35
      },
      {
        "slug": "dmon",
        "n": "D.Mon",
        "role": "Tank",
        "g": 12,
        "wr": 50,
        "kda": 3.87
      },
      {
        "slug": "symmetra",
        "n": "Symmetra",
        "role": "Damage",
        "g": 12,
        "wr": 41.67,
        "kda": 2
      },
      {
        "slug": "doomfist",
        "n": "Doomfist",
        "role": "Tank",
        "g": 11,
        "wr": 27.27,
        "kda": 1.82
      },
      {
        "slug": "anran",
        "n": "Anran",
        "role": "Damage",
        "g": 10,
        "wr": 60,
        "kda": 1.77
      },
      {
        "slug": "vendetta",
        "n": "Vendetta",
        "role": "Damage",
        "g": 10,
        "wr": 70,
        "kda": 1.53
      },
      {
        "slug": "orisa",
        "n": "Orisa",
        "role": "Tank",
        "g": 9,
        "wr": 33.33,
        "kda": 1.83
      },
      {
        "slug": "winston",
        "n": "Winston",
        "role": "Tank",
        "g": 9,
        "wr": 55.56,
        "kda": 3.12
      },
      {
        "slug": "sierra",
        "n": "Sierra",
        "role": "Damage",
        "g": 8,
        "wr": 37.5,
        "kda": 1.64
      },
      {
        "slug": "domina",
        "n": "Domina",
        "role": "Tank",
        "g": 7,
        "wr": 57.14,
        "kda": 3.17
      },
      {
        "slug": "hazard",
        "n": "Hazard",
        "role": "Tank",
        "g": 7,
        "wr": 57.14,
        "kda": 2.53
      },
      {
        "slug": "mei",
        "n": "Mei",
        "role": "Damage",
        "g": 7,
        "wr": 57.14,
        "kda": 3.04
      },
      {
        "slug": "doctrine",
        "n": "Doctrine",
        "role": "Support",
        "g": 6,
        "wr": 33.33,
        "kda": 1.47
      },
      {
        "slug": "dva",
        "n": "D.Va",
        "role": "Tank",
        "g": 6,
        "wr": 16.67,
        "kda": 2.48
      },
      {
        "slug": "mercy",
        "n": "Mercy",
        "role": "Support",
        "g": 6,
        "wr": 16.67,
        "kda": 0.51
      },
      {
        "slug": "ramattra",
        "n": "Ramattra",
        "role": "Tank",
        "g": 5,
        "wr": 40,
        "kda": 2.06
      },
      {
        "slug": "venture",
        "n": "Venture",
        "role": "Damage",
        "g": 5,
        "wr": 60,
        "kda": 1.68
      },
      {
        "slug": "shion",
        "n": "Shion",
        "role": "Damage",
        "g": 2,
        "wr": 50,
        "kda": 1.58
      },
      {
        "slug": "wrecking-ball",
        "n": "Wrecking Ball",
        "role": "Tank",
        "g": 1,
        "wr": 100,
        "kda": 0
      }
    ],
    "bscore": {
      "ana": {
        "finalScore": 55.02,
        "battleScore": 39.54,
        "coeff": 1.21,
        "matchCoef": 1.15,
        "gamesPlayed": 182,
        "rankIndex": 2,
        "det": {
          "g": 182,
          "time": 90994,
          "wr": 51.18131868131868,
          "el10": 9.042417582417583,
          "de10": 6.02467032967033,
          "dm10": 3153.285714285714,
          "he10": 5874.346153846154,
          "as10": 10.953076923076923,
          "wa": 51.967032967032964,
          "ca": 0
        }
      },
      "doctrine": {
        "finalScore": 39.41,
        "battleScore": 37.16,
        "coeff": 1.21,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 2,
        "det": {
          "g": 6,
          "time": 3198,
          "wr": 31.666666666666668,
          "el10": 8.97,
          "de10": 5.918333333333333,
          "dm10": 3037.1666666666665,
          "he10": 9171,
          "as10": 13.191666666666668,
          "wa": 54.166666666666664,
          "ca": 0
        }
      },
      "junkrat": {
        "finalScore": 58.2,
        "battleScore": 41.83,
        "coeff": 1.21,
        "matchCoef": 1.15,
        "gamesPlayed": 233,
        "rankIndex": 2,
        "det": {
          "g": 233,
          "time": 119019,
          "wr": 55.1931330472103,
          "el10": 14.862489270386266,
          "de10": 7.541716738197424,
          "dm10": 7908.467811158798,
          "he10": 0,
          "as10": 2.1545493562231757,
          "wa": 24.974248927038627,
          "ca": 0
        }
      },
      "sombra": {
        "finalScore": 48.05,
        "battleScore": 38.88,
        "coeff": 1.21,
        "matchCoef": 1.02,
        "gamesPlayed": 32,
        "rankIndex": 2,
        "det": {
          "g": 32,
          "time": 15293,
          "wr": 52.53125,
          "el10": 16.2090625,
          "de10": 8.196562499999999,
          "dm10": 4655.84375,
          "he10": 1482.375,
          "as10": 9.6978125,
          "wa": 32.90625,
          "ca": 7.96875
        }
      },
      "wuyang": {
        "finalScore": 46.54,
        "battleScore": 36.11,
        "coeff": 1.21,
        "matchCoef": 1.07,
        "gamesPlayed": 53,
        "rankIndex": 2,
        "det": {
          "g": 53,
          "time": 25906,
          "wr": 44.339622641509436,
          "el10": 10.790000000000001,
          "de10": 6.05433962264151,
          "dm10": 3884.1132075471696,
          "he10": 7149,
          "as10": 13.994716981132076,
          "wa": 22.88679245283019,
          "ca": 0
        },
        "rankDelta": -3
      },
      "anran": {
        "finalScore": 56.57,
        "battleScore": 39.8,
        "coeff": 1.21,
        "matchCoef": 0.96,
        "gamesPlayed": 10,
        "rankIndex": 2,
        "det": {
          "g": 10,
          "time": 5055,
          "wr": 59,
          "el10": 17.45,
          "de10": 9.85,
          "dm10": 6401,
          "he10": 393,
          "as10": 0.12,
          "wa": 31,
          "ca": 8
        }
      },
      "ashe": {
        "finalScore": 44.87,
        "battleScore": 36.21,
        "coeff": 1.21,
        "matchCoef": 1.02,
        "gamesPlayed": 33,
        "rankIndex": 2,
        "det": {
          "g": 33,
          "time": 15022,
          "wr": 46,
          "el10": 11.9,
          "de10": 6.99,
          "dm10": 6737,
          "he10": 0,
          "as10": 0.88,
          "wa": 39,
          "ca": 16
        },
        "rankDelta": 1
      },
      "baptiste": {
        "finalScore": 51.43,
        "battleScore": 39.67,
        "coeff": 1.21,
        "matchCoef": 1.07,
        "gamesPlayed": 57,
        "rankIndex": 2,
        "det": {
          "g": 57,
          "time": 28640,
          "wr": 51,
          "el10": 7.67,
          "de10": 6.28,
          "dm10": 2397,
          "he10": 9014,
          "as10": 11.08,
          "wa": 30,
          "ca": 11
        }
      },
      "bastion": {
        "finalScore": 56.24,
        "battleScore": 36.17,
        "coeff": 1.21,
        "matchCoef": 1,
        "gamesPlayed": 26,
        "rankIndex": 2,
        "det": {
          "g": 26,
          "time": 12216,
          "wr": 37,
          "el10": 15.28,
          "de10": 8.25,
          "dm10": 8591,
          "he10": 150,
          "as10": 1.87,
          "wa": 25,
          "ca": 2
        },
        "rankDelta": 1
      },
      "brigitte": {
        "finalScore": 39.63,
        "battleScore": 32.99,
        "coeff": 1.21,
        "matchCoef": 0.99,
        "gamesPlayed": 23,
        "rankIndex": 2,
        "det": {
          "g": 23,
          "time": 11901,
          "wr": 36,
          "el10": 8.67,
          "de10": 8.57,
          "dm10": 2895,
          "he10": 5540,
          "as10": 12.4,
          "wa": 0,
          "ca": 0
        }
      },
      "cassidy": {
        "finalScore": 45.65,
        "battleScore": 35.6,
        "coeff": 1.21,
        "matchCoef": 1.06,
        "gamesPlayed": 50,
        "rankIndex": 2,
        "det": {
          "g": 50,
          "time": 24571,
          "wr": 39,
          "el10": 13.21,
          "de10": 8.18,
          "dm10": 6929,
          "he10": 33.72,
          "as10": 1.59,
          "wa": 41,
          "ca": 10
        }
      },
      "dmon": {
        "finalScore": 40.19,
        "battleScore": 42.91,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 0,
        "det": {
          "g": 12,
          "time": 6793,
          "wr": 51,
          "el10": 15.37,
          "de10": 3.97,
          "dm10": 8030,
          "he10": 237,
          "as10": 2.83,
          "wa": 28,
          "ca": 0
        }
      },
      "domina": {
        "finalScore": 38.32,
        "battleScore": 43.07,
        "coeff": 1,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 0,
        "det": {
          "g": 7,
          "time": 3370,
          "wr": 58,
          "el10": 16.38,
          "de10": 5.16,
          "dm10": 9359,
          "he10": 1348,
          "as10": 2.49,
          "wa": 41,
          "ca": 9
        }
      },
      "doomfist": {
        "finalScore": 32.02,
        "battleScore": 34.47,
        "coeff": 1,
        "matchCoef": 0.93,
        "gamesPlayed": 11,
        "rankIndex": 0,
        "det": {
          "g": 11,
          "time": 5350,
          "wr": 26,
          "el10": 13.91,
          "de10": 7.63,
          "dm10": 6125,
          "he10": 1285,
          "as10": 3.48,
          "wa": 25,
          "ca": 10
        }
      },
      "dva": {
        "finalScore": 30.7,
        "battleScore": 35.02,
        "coeff": 1,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 0,
        "det": {
          "g": 6,
          "time": 3431,
          "wr": 23,
          "el10": 12.59,
          "de10": 5.07,
          "dm10": 5563,
          "he10": 1183,
          "as10": 4.55,
          "wa": 21,
          "ca": 9
        }
      },
      "echo": {
        "finalScore": 41.35,
        "battleScore": 32.84,
        "coeff": 1.21,
        "matchCoef": 1.04,
        "gamesPlayed": 40,
        "rankIndex": 2,
        "det": {
          "g": 40,
          "time": 18833,
          "wr": 39,
          "el10": 12.07,
          "de10": 9.56,
          "dm10": 5995,
          "he10": 40.77,
          "as10": 0.13,
          "wa": 26,
          "ca": 8
        }
      },
      "emre": {
        "finalScore": 51.39,
        "battleScore": 43.5,
        "coeff": 1.21,
        "matchCoef": 0.98,
        "gamesPlayed": 19,
        "rankIndex": 2,
        "det": {
          "g": 19,
          "time": 9335,
          "wr": 52,
          "el10": 14.65,
          "de10": 6.43,
          "dm10": 8241,
          "he10": 761,
          "as10": 0.06,
          "wa": 31,
          "ca": 14
        }
      },
      "freja": {
        "finalScore": 49.62,
        "battleScore": 39.49,
        "coeff": 1.21,
        "matchCoef": 1.04,
        "gamesPlayed": 39,
        "rankIndex": 2,
        "det": {
          "g": 39,
          "time": 19063,
          "wr": 51,
          "el10": 14.67,
          "de10": 7.87,
          "dm10": 7381,
          "he10": 25.53,
          "as10": 0.41,
          "wa": 27,
          "ca": 5
        }
      },
      "genji": {
        "finalScore": 44.69,
        "battleScore": 37.2,
        "coeff": 1.21,
        "matchCoef": 0.99,
        "gamesPlayed": 23,
        "rankIndex": 2,
        "det": {
          "g": 23,
          "time": 11635,
          "wr": 44,
          "el10": 11.6,
          "de10": 8.72,
          "dm10": 4755,
          "he10": 167,
          "as10": 0.15,
          "wa": 26,
          "ca": 10
        }
      },
      "hazard": {
        "finalScore": 36.13,
        "battleScore": 40.6,
        "coeff": 1,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 0,
        "det": {
          "g": 7,
          "time": 4064,
          "wr": 64,
          "el10": 14.17,
          "de10": 5.61,
          "dm10": 7044,
          "he10": 1247,
          "as10": 4.43,
          "wa": 26,
          "ca": 7
        }
      },
      "hanzo": {
        "finalScore": 58.22,
        "battleScore": 42.23,
        "coeff": 1.21,
        "matchCoef": 1.14,
        "gamesPlayed": 125,
        "rankIndex": 2,
        "det": {
          "g": 125,
          "time": 60628,
          "wr": 48,
          "el10": 14.31,
          "de10": 7.81,
          "dm10": 7283,
          "he10": 32.15,
          "as10": 4.72,
          "wa": 21,
          "ca": 12
        }
      },
      "illari": {
        "finalScore": 56.94,
        "battleScore": 46.75,
        "coeff": 1.21,
        "matchCoef": 1.01,
        "gamesPlayed": 27,
        "rankIndex": 2,
        "det": {
          "g": 27,
          "time": 12912,
          "wr": 78,
          "el10": 11.38,
          "de10": 4.79,
          "dm10": 3858,
          "he10": 8049,
          "as10": 7.53,
          "wa": 37,
          "ca": 15
        }
      },
      "jetpack-cat": {
        "finalScore": 47.52,
        "battleScore": 40.05,
        "coeff": 1.21,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 2,
        "det": {
          "g": 20,
          "time": 10399,
          "wr": 50,
          "el10": 14.6,
          "de10": 6.87,
          "dm10": 3493,
          "he10": 6025,
          "as10": 7.5,
          "wa": 32,
          "ca": 6
        }
      },
      "junker-queen": {
        "finalScore": 42.87,
        "battleScore": 43.53,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 21,
        "rankIndex": 0,
        "det": {
          "g": 21,
          "time": 10750,
          "wr": 54,
          "el10": 16.69,
          "de10": 5.58,
          "dm10": 8000,
          "he10": 2179,
          "as10": 9.15,
          "wa": 37,
          "ca": 14
        }
      },
      "juno": {
        "finalScore": 47.53,
        "battleScore": 37.59,
        "coeff": 1.21,
        "matchCoef": 1.04,
        "gamesPlayed": 42,
        "rankIndex": 2,
        "det": {
          "g": 42,
          "time": 21502,
          "wr": 43,
          "el10": 11.36,
          "de10": 6.67,
          "dm10": 2730,
          "he10": 7724,
          "as10": 8.23,
          "wa": 38,
          "ca": 3
        }
      },
      "kiriko": {
        "finalScore": 52.92,
        "battleScore": 38.03,
        "coeff": 1.21,
        "matchCoef": 1.15,
        "gamesPlayed": 250,
        "rankIndex": 2,
        "det": {
          "g": 250,
          "time": 125015,
          "wr": 45,
          "el10": 8.24,
          "de10": 6.32,
          "dm10": 2649,
          "he10": 9002,
          "as10": 14.56,
          "wa": 28,
          "ca": 13
        }
      },
      "lifeweaver": {
        "finalScore": 50.63,
        "battleScore": 39,
        "coeff": 1.21,
        "matchCoef": 1.07,
        "gamesPlayed": 58,
        "rankIndex": 2,
        "det": {
          "g": 58,
          "time": 28721,
          "wr": 47,
          "el10": 8.04,
          "de10": 4.99,
          "dm10": 1847,
          "he10": 9875,
          "as10": 11.57,
          "wa": 26,
          "ca": 9
        }
      },
      "lucio": {
        "finalScore": 51.64,
        "battleScore": 39.62,
        "coeff": 1.21,
        "matchCoef": 1.08,
        "gamesPlayed": 61,
        "rankIndex": 2,
        "det": {
          "g": 61,
          "time": 31414,
          "wr": 52,
          "el10": 10.85,
          "de10": 8.14,
          "dm10": 3292,
          "he10": 8046,
          "as10": 9.59,
          "wa": 25,
          "ca": 8
        }
      },
      "mauga": {
        "finalScore": 51.28,
        "battleScore": 35.33,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 17,
        "rankIndex": 0,
        "det": {
          "g": 17,
          "time": 9056,
          "wr": 37,
          "el10": 16.37,
          "de10": 6.76,
          "dm10": 9673,
          "he10": 1199,
          "as10": 8.08,
          "wa": 27,
          "ca": 11
        }
      },
      "mei": {
        "finalScore": 42.28,
        "battleScore": 39.27,
        "coeff": 1.21,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 2,
        "det": {
          "g": 7,
          "time": 4557,
          "wr": 53,
          "el10": 14.75,
          "de10": 7.24,
          "dm10": 6001,
          "he10": 1203,
          "as10": 7.24,
          "wa": 46,
          "ca": 0
        }
      },
      "mercy": {
        "finalScore": 32.43,
        "battleScore": 30.58,
        "coeff": 1.21,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 2,
        "det": {
          "g": 6,
          "time": 2692,
          "wr": 18,
          "el10": 0.67,
          "de10": 8.25,
          "dm10": 146,
          "he10": 8054,
          "as10": 9.81,
          "wa": 25,
          "ca": 14
        }
      },
      "mizuki": {
        "finalScore": 56.46,
        "battleScore": 43.32,
        "coeff": 1.21,
        "matchCoef": 1.08,
        "gamesPlayed": 61,
        "rankIndex": 2,
        "det": {
          "g": 61,
          "time": 31648,
          "wr": 55,
          "el10": 12.66,
          "de10": 6.67,
          "dm10": 4203,
          "he10": 9134,
          "as10": 16.23,
          "wa": 28,
          "ca": 10
        }
      },
      "moira": {
        "finalScore": 64.04,
        "battleScore": 39.59,
        "coeff": 1.21,
        "matchCoef": 1.04,
        "gamesPlayed": 62,
        "rankIndex": 2,
        "det": {
          "g": 62,
          "time": 31534,
          "wr": 47,
          "el10": 18.04,
          "de10": 7.12,
          "dm10": 5341,
          "he10": 7981,
          "as10": 12.73,
          "wa": 0,
          "ca": 0
        }
      },
      "orisa": {
        "finalScore": 30.61,
        "battleScore": 33.58,
        "coeff": 1,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 0,
        "det": {
          "g": 9,
          "time": 4020,
          "wr": 33,
          "el10": 11.94,
          "de10": 7.76,
          "dm10": 10730,
          "he10": 51.23,
          "as10": 2.24,
          "wa": 34,
          "ca": 8
        }
      },
      "pharah": {
        "finalScore": 43,
        "battleScore": 36.58,
        "coeff": 1.21,
        "matchCoef": 0.97,
        "gamesPlayed": 18,
        "rankIndex": 2,
        "det": {
          "g": 18,
          "time": 8298,
          "wr": 36,
          "el10": 15.47,
          "de10": 8.89,
          "dm10": 7560,
          "he10": 0,
          "as10": 3.33,
          "wa": 45,
          "ca": 0
        }
      },
      "ramattra": {
        "finalScore": 47.4,
        "battleScore": 35.84,
        "coeff": 1,
        "matchCoef": 0.93,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2711,
          "wr": 35,
          "el10": 12.62,
          "de10": 7.08,
          "dm10": 8121,
          "he10": 79.02,
          "as10": 1.99,
          "wa": 25,
          "ca": 10
        }
      },
      "reaper": {
        "finalScore": 59.04,
        "battleScore": 40.34,
        "coeff": 1.21,
        "matchCoef": 1,
        "gamesPlayed": 23,
        "rankIndex": 2,
        "det": {
          "g": 23,
          "time": 12547,
          "wr": 45,
          "el10": 14.59,
          "de10": 8.42,
          "dm10": 5170,
          "he10": 920,
          "as10": 0.1,
          "wa": 30,
          "ca": 11
        }
      },
      "reinhardt": {
        "finalScore": 42.42,
        "battleScore": 42.9,
        "coeff": 1,
        "matchCoef": 0.99,
        "gamesPlayed": 22,
        "rankIndex": 0,
        "det": {
          "g": 22,
          "time": 10481,
          "wr": 53,
          "el10": 15.4,
          "de10": 5.04,
          "dm10": 8672,
          "he10": 0,
          "as10": 1.83,
          "wa": 0,
          "ca": 0
        }
      },
      "roadhog": {
        "finalScore": 41.45,
        "battleScore": 42.27,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 0,
        "det": {
          "g": 20,
          "time": 10379,
          "wr": 50,
          "el10": 15.43,
          "de10": 5.67,
          "dm10": 7203,
          "he10": 4964,
          "as10": 4.45,
          "wa": 27,
          "ca": 15
        }
      },
      "shion": {
        "finalScore": 36.02,
        "battleScore": 35.03,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 2,
        "det": {
          "g": 2,
          "time": 802,
          "wr": 35,
          "el10": 14.21,
          "de10": 8.98,
          "dm10": 5697,
          "he10": 33.66,
          "as10": 0.75,
          "wa": 30,
          "ca": 12
        }
      },
      "sigma": {
        "finalScore": 56.44,
        "battleScore": 45.41,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 23,
        "rankIndex": 0,
        "det": {
          "g": 23,
          "time": 10384,
          "wr": 65,
          "el10": 17.05,
          "de10": 5.78,
          "dm10": 9870,
          "he10": 0,
          "as10": 2.31,
          "wa": 48,
          "ca": 0
        }
      },
      "sierra": {
        "finalScore": 39.6,
        "battleScore": 36.31,
        "coeff": 1.21,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 2,
        "det": {
          "g": 8,
          "time": 3972,
          "wr": 37,
          "el10": 13.6,
          "de10": 8.31,
          "dm10": 8886,
          "he10": 0,
          "as10": 1.36,
          "wa": 28,
          "ca": 7
        },
        "rankDelta": 1
      },
      "sojourn": {
        "finalScore": 42.63,
        "battleScore": 36.44,
        "coeff": 1.21,
        "matchCoef": 0.97,
        "gamesPlayed": 17,
        "rankIndex": 2,
        "det": {
          "g": 17,
          "time": 8143,
          "wr": 47,
          "el10": 13.34,
          "de10": 8.25,
          "dm10": 6607,
          "he10": 0,
          "as10": 0.52,
          "wa": 27,
          "ca": 9
        }
      },
      "soldier-76": {
        "finalScore": 48.97,
        "battleScore": 39.15,
        "coeff": 1.21,
        "matchCoef": 1.03,
        "gamesPlayed": 37,
        "rankIndex": 2,
        "det": {
          "g": 37,
          "time": 18434,
          "wr": 48,
          "el10": 16.21,
          "de10": 8.98,
          "dm10": 7830,
          "he10": 1335,
          "as10": 1.53,
          "wa": 30,
          "ca": 9
        }
      },
      "symmetra": {
        "finalScore": 43,
        "battleScore": 37.95,
        "coeff": 1.21,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 2,
        "det": {
          "g": 12,
          "time": 5495,
          "wr": 40,
          "el10": 14.63,
          "de10": 7.32,
          "dm10": 5817,
          "he10": 126,
          "as10": 5.24,
          "wa": 34,
          "ca": 0
        }
      },
      "torbjorn": {
        "finalScore": 42.1,
        "battleScore": 36.88,
        "coeff": 1.21,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 2,
        "det": {
          "g": 13,
          "time": 5979,
          "wr": 48,
          "el10": 11.64,
          "de10": 8.63,
          "dm10": 7668,
          "he10": 0,
          "as10": 0.5,
          "wa": 26,
          "ca": 10
        }
      },
      "tracer": {
        "finalScore": 51.39,
        "battleScore": 41.08,
        "coeff": 1.21,
        "matchCoef": 1.03,
        "gamesPlayed": 37,
        "rankIndex": 2,
        "det": {
          "g": 37,
          "time": 18786,
          "wr": 55,
          "el10": 14.66,
          "de10": 7.38,
          "dm10": 4808,
          "he10": 46.45,
          "as10": 0,
          "wa": 31,
          "ca": 10
        }
      },
      "vendetta": {
        "finalScore": 45.04,
        "battleScore": 40.43,
        "coeff": 1.21,
        "matchCoef": 0.92,
        "gamesPlayed": 10,
        "rankIndex": 2,
        "det": {
          "g": 10,
          "time": 4902,
          "wr": 65,
          "el10": 13.71,
          "de10": 8.93,
          "dm10": 5432,
          "he10": 39,
          "as10": 2.69,
          "wa": 0,
          "ca": 0
        }
      },
      "venture": {
        "finalScore": 41.88,
        "battleScore": 40.21,
        "coeff": 1.21,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 2,
        "det": {
          "g": 5,
          "time": 2670,
          "wr": 60,
          "el10": 14.38,
          "de10": 8.54,
          "dm10": 5535,
          "he10": 28.51,
          "as10": 1.12,
          "wa": 45,
          "ca": 0
        }
      },
      "widowmaker": {
        "finalScore": 42.32,
        "battleScore": 36,
        "coeff": 1.21,
        "matchCoef": 0.97,
        "gamesPlayed": 18,
        "rankIndex": 2,
        "det": {
          "g": 18,
          "time": 8269,
          "wr": 39,
          "el10": 11.54,
          "de10": 8.27,
          "dm10": 5162,
          "he10": 0,
          "as10": 2.98,
          "wa": 37,
          "ca": 14
        }
      },
      "winston": {
        "finalScore": 40.85,
        "battleScore": 44.81,
        "coeff": 1,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 0,
        "det": {
          "g": 9,
          "time": 5133,
          "wr": 55,
          "el10": 18.94,
          "de10": 6.08,
          "dm10": 6651,
          "he10": 1987,
          "as10": 5.14,
          "wa": 43,
          "ca": 0
        }
      },
      "wrecking-ball": {
        "finalScore": 26.66,
        "battleScore": 31.36,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 419,
          "wr": 47,
          "el10": 0,
          "de10": 10.03,
          "dm10": 3084,
          "he10": 809,
          "as10": 0,
          "wa": 28,
          "ca": 8
        }
      },
      "zarya": {
        "finalScore": 48.32,
        "battleScore": 39.18,
        "coeff": 1,
        "matchCoef": 0.99,
        "gamesPlayed": 20,
        "rankIndex": 0,
        "det": {
          "g": 20,
          "time": 10222,
          "wr": 34,
          "el10": 18.25,
          "de10": 5.87,
          "dm10": 8406,
          "he10": 0,
          "as10": 4.75,
          "wa": 39,
          "ca": 0
        }
      },
      "zenyatta": {
        "finalScore": 52.2,
        "battleScore": 43,
        "coeff": 1.21,
        "matchCoef": 1,
        "gamesPlayed": 26,
        "rankIndex": 2,
        "det": {
          "g": 26,
          "time": 13490,
          "wr": 64,
          "el10": 13.08,
          "de10": 6.94,
          "dm10": 4769,
          "he10": 6232,
          "as10": 15.83,
          "wa": 26,
          "ca": 12
        }
      }
    },
    "bscoreAll": {
      "ana": {
        "finalScore": 55.02,
        "battleScore": 39.54,
        "coeff": 1.21,
        "matchCoef": 1.15,
        "gamesPlayed": 182,
        "rankIndex": 2,
        "det": {
          "g": 182,
          "time": 90994,
          "wr": 51.18131868131868,
          "el10": 9.042417582417583,
          "de10": 6.02467032967033,
          "dm10": 3153.285714285714,
          "he10": 5874.346153846154,
          "as10": 10.953076923076923,
          "wa": 51.967032967032964,
          "ca": 0
        }
      },
      "doctrine": {
        "finalScore": 39.41,
        "battleScore": 37.16,
        "coeff": 1.21,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 2,
        "det": {
          "g": 6,
          "time": 3198,
          "wr": 31.666666666666668,
          "el10": 8.97,
          "de10": 5.918333333333333,
          "dm10": 3037.1666666666665,
          "he10": 9171,
          "as10": 13.191666666666668,
          "wa": 54.166666666666664,
          "ca": 0
        }
      },
      "junkrat": {
        "finalScore": 58.2,
        "battleScore": 41.83,
        "coeff": 1.21,
        "matchCoef": 1.15,
        "gamesPlayed": 233,
        "rankIndex": 2,
        "det": {
          "g": 233,
          "time": 119019,
          "wr": 55.1931330472103,
          "el10": 14.862489270386266,
          "de10": 7.541716738197424,
          "dm10": 7908.467811158798,
          "he10": 0,
          "as10": 2.1545493562231757,
          "wa": 24.974248927038627,
          "ca": 0
        }
      },
      "sombra": {
        "finalScore": 48.05,
        "battleScore": 38.88,
        "coeff": 1.21,
        "matchCoef": 1.02,
        "gamesPlayed": 32,
        "rankIndex": 2,
        "det": {
          "g": 32,
          "time": 15293,
          "wr": 52.53125,
          "el10": 16.2090625,
          "de10": 8.196562499999999,
          "dm10": 4655.84375,
          "he10": 1482.375,
          "as10": 9.6978125,
          "wa": 32.90625,
          "ca": 7.96875
        }
      },
      "wuyang": {
        "finalScore": 46.54,
        "battleScore": 36.11,
        "coeff": 1.21,
        "matchCoef": 1.07,
        "gamesPlayed": 53,
        "rankIndex": 2,
        "det": {
          "g": 53,
          "time": 25906,
          "wr": 44.339622641509436,
          "el10": 10.790000000000001,
          "de10": 6.05433962264151,
          "dm10": 3884.1132075471696,
          "he10": 7149,
          "as10": 13.994716981132076,
          "wa": 22.88679245283019,
          "ca": 0
        },
        "rankDelta": -3
      },
      "anran": {
        "finalScore": 56.57,
        "battleScore": 39.8,
        "coeff": 1.21,
        "matchCoef": 0.96,
        "gamesPlayed": 10,
        "rankIndex": 2,
        "det": {
          "g": 10,
          "time": 5055,
          "wr": 59,
          "el10": 17.45,
          "de10": 9.85,
          "dm10": 6401,
          "he10": 393,
          "as10": 0.12,
          "wa": 31,
          "ca": 8
        }
      },
      "ashe": {
        "finalScore": 44.87,
        "battleScore": 36.21,
        "coeff": 1.21,
        "matchCoef": 1.02,
        "gamesPlayed": 33,
        "rankIndex": 2,
        "det": {
          "g": 33,
          "time": 15022,
          "wr": 46,
          "el10": 11.9,
          "de10": 6.99,
          "dm10": 6737,
          "he10": 0,
          "as10": 0.88,
          "wa": 39,
          "ca": 16
        },
        "rankDelta": 1
      },
      "baptiste": {
        "finalScore": 51.43,
        "battleScore": 39.67,
        "coeff": 1.21,
        "matchCoef": 1.07,
        "gamesPlayed": 57,
        "rankIndex": 2,
        "det": {
          "g": 57,
          "time": 28640,
          "wr": 51,
          "el10": 7.67,
          "de10": 6.28,
          "dm10": 2397,
          "he10": 9014,
          "as10": 11.08,
          "wa": 30,
          "ca": 11
        }
      },
      "bastion": {
        "finalScore": 56.24,
        "battleScore": 36.17,
        "coeff": 1.21,
        "matchCoef": 1,
        "gamesPlayed": 26,
        "rankIndex": 2,
        "det": {
          "g": 26,
          "time": 12216,
          "wr": 37,
          "el10": 15.28,
          "de10": 8.25,
          "dm10": 8591,
          "he10": 150,
          "as10": 1.87,
          "wa": 25,
          "ca": 2
        },
        "rankDelta": 1
      },
      "brigitte": {
        "finalScore": 39.63,
        "battleScore": 32.99,
        "coeff": 1.21,
        "matchCoef": 0.99,
        "gamesPlayed": 23,
        "rankIndex": 2,
        "det": {
          "g": 23,
          "time": 11901,
          "wr": 36,
          "el10": 8.67,
          "de10": 8.57,
          "dm10": 2895,
          "he10": 5540,
          "as10": 12.4,
          "wa": 0,
          "ca": 0
        }
      },
      "cassidy": {
        "finalScore": 45.65,
        "battleScore": 35.6,
        "coeff": 1.21,
        "matchCoef": 1.06,
        "gamesPlayed": 50,
        "rankIndex": 2,
        "det": {
          "g": 50,
          "time": 24571,
          "wr": 39,
          "el10": 13.21,
          "de10": 8.18,
          "dm10": 6929,
          "he10": 33.72,
          "as10": 1.59,
          "wa": 41,
          "ca": 10
        }
      },
      "dmon": {
        "finalScore": 40.19,
        "battleScore": 42.91,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 0,
        "det": {
          "g": 12,
          "time": 6793,
          "wr": 51,
          "el10": 15.37,
          "de10": 3.97,
          "dm10": 8030,
          "he10": 237,
          "as10": 2.83,
          "wa": 28,
          "ca": 0
        }
      },
      "domina": {
        "finalScore": 38.32,
        "battleScore": 43.07,
        "coeff": 1,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 0,
        "det": {
          "g": 7,
          "time": 3370,
          "wr": 58,
          "el10": 16.38,
          "de10": 5.16,
          "dm10": 9359,
          "he10": 1348,
          "as10": 2.49,
          "wa": 41,
          "ca": 9
        }
      },
      "doomfist": {
        "finalScore": 32.02,
        "battleScore": 34.47,
        "coeff": 1,
        "matchCoef": 0.93,
        "gamesPlayed": 11,
        "rankIndex": 0,
        "det": {
          "g": 11,
          "time": 5350,
          "wr": 26,
          "el10": 13.91,
          "de10": 7.63,
          "dm10": 6125,
          "he10": 1285,
          "as10": 3.48,
          "wa": 25,
          "ca": 10
        }
      },
      "dva": {
        "finalScore": 30.7,
        "battleScore": 35.02,
        "coeff": 1,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 0,
        "det": {
          "g": 6,
          "time": 3431,
          "wr": 23,
          "el10": 12.59,
          "de10": 5.07,
          "dm10": 5563,
          "he10": 1183,
          "as10": 4.55,
          "wa": 21,
          "ca": 9
        }
      },
      "echo": {
        "finalScore": 41.35,
        "battleScore": 32.84,
        "coeff": 1.21,
        "matchCoef": 1.04,
        "gamesPlayed": 40,
        "rankIndex": 2,
        "det": {
          "g": 40,
          "time": 18833,
          "wr": 39,
          "el10": 12.07,
          "de10": 9.56,
          "dm10": 5995,
          "he10": 40.77,
          "as10": 0.13,
          "wa": 26,
          "ca": 8
        }
      },
      "emre": {
        "finalScore": 51.39,
        "battleScore": 43.5,
        "coeff": 1.21,
        "matchCoef": 0.98,
        "gamesPlayed": 19,
        "rankIndex": 2,
        "det": {
          "g": 19,
          "time": 9335,
          "wr": 52,
          "el10": 14.65,
          "de10": 6.43,
          "dm10": 8241,
          "he10": 761,
          "as10": 0.06,
          "wa": 31,
          "ca": 14
        }
      },
      "freja": {
        "finalScore": 49.62,
        "battleScore": 39.49,
        "coeff": 1.21,
        "matchCoef": 1.04,
        "gamesPlayed": 39,
        "rankIndex": 2,
        "det": {
          "g": 39,
          "time": 19063,
          "wr": 51,
          "el10": 14.67,
          "de10": 7.87,
          "dm10": 7381,
          "he10": 25.53,
          "as10": 0.41,
          "wa": 27,
          "ca": 5
        }
      },
      "genji": {
        "finalScore": 44.69,
        "battleScore": 37.2,
        "coeff": 1.21,
        "matchCoef": 0.99,
        "gamesPlayed": 23,
        "rankIndex": 2,
        "det": {
          "g": 23,
          "time": 11635,
          "wr": 44,
          "el10": 11.6,
          "de10": 8.72,
          "dm10": 4755,
          "he10": 167,
          "as10": 0.15,
          "wa": 26,
          "ca": 10
        }
      },
      "hazard": {
        "finalScore": 36.13,
        "battleScore": 40.6,
        "coeff": 1,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 0,
        "det": {
          "g": 7,
          "time": 4064,
          "wr": 64,
          "el10": 14.17,
          "de10": 5.61,
          "dm10": 7044,
          "he10": 1247,
          "as10": 4.43,
          "wa": 26,
          "ca": 7
        }
      },
      "hanzo": {
        "finalScore": 58.22,
        "battleScore": 42.23,
        "coeff": 1.21,
        "matchCoef": 1.14,
        "gamesPlayed": 125,
        "rankIndex": 2,
        "det": {
          "g": 125,
          "time": 60628,
          "wr": 48,
          "el10": 14.31,
          "de10": 7.81,
          "dm10": 7283,
          "he10": 32.15,
          "as10": 4.72,
          "wa": 21,
          "ca": 12
        }
      },
      "illari": {
        "finalScore": 56.94,
        "battleScore": 46.75,
        "coeff": 1.21,
        "matchCoef": 1.01,
        "gamesPlayed": 27,
        "rankIndex": 2,
        "det": {
          "g": 27,
          "time": 12912,
          "wr": 78,
          "el10": 11.38,
          "de10": 4.79,
          "dm10": 3858,
          "he10": 8049,
          "as10": 7.53,
          "wa": 37,
          "ca": 15
        }
      },
      "jetpack-cat": {
        "finalScore": 47.52,
        "battleScore": 40.05,
        "coeff": 1.21,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 2,
        "det": {
          "g": 20,
          "time": 10399,
          "wr": 50,
          "el10": 14.6,
          "de10": 6.87,
          "dm10": 3493,
          "he10": 6025,
          "as10": 7.5,
          "wa": 32,
          "ca": 6
        }
      },
      "junker-queen": {
        "finalScore": 42.87,
        "battleScore": 43.53,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 21,
        "rankIndex": 0,
        "det": {
          "g": 21,
          "time": 10750,
          "wr": 54,
          "el10": 16.69,
          "de10": 5.58,
          "dm10": 8000,
          "he10": 2179,
          "as10": 9.15,
          "wa": 37,
          "ca": 14
        }
      },
      "juno": {
        "finalScore": 47.53,
        "battleScore": 37.59,
        "coeff": 1.21,
        "matchCoef": 1.04,
        "gamesPlayed": 42,
        "rankIndex": 2,
        "det": {
          "g": 42,
          "time": 21502,
          "wr": 43,
          "el10": 11.36,
          "de10": 6.67,
          "dm10": 2730,
          "he10": 7724,
          "as10": 8.23,
          "wa": 38,
          "ca": 3
        }
      },
      "kiriko": {
        "finalScore": 52.92,
        "battleScore": 38.03,
        "coeff": 1.21,
        "matchCoef": 1.15,
        "gamesPlayed": 250,
        "rankIndex": 2,
        "det": {
          "g": 250,
          "time": 125015,
          "wr": 45,
          "el10": 8.24,
          "de10": 6.32,
          "dm10": 2649,
          "he10": 9002,
          "as10": 14.56,
          "wa": 28,
          "ca": 13
        }
      },
      "lifeweaver": {
        "finalScore": 50.63,
        "battleScore": 39,
        "coeff": 1.21,
        "matchCoef": 1.07,
        "gamesPlayed": 58,
        "rankIndex": 2,
        "det": {
          "g": 58,
          "time": 28721,
          "wr": 47,
          "el10": 8.04,
          "de10": 4.99,
          "dm10": 1847,
          "he10": 9875,
          "as10": 11.57,
          "wa": 26,
          "ca": 9
        }
      },
      "lucio": {
        "finalScore": 51.64,
        "battleScore": 39.62,
        "coeff": 1.21,
        "matchCoef": 1.08,
        "gamesPlayed": 61,
        "rankIndex": 2,
        "det": {
          "g": 61,
          "time": 31414,
          "wr": 52,
          "el10": 10.85,
          "de10": 8.14,
          "dm10": 3292,
          "he10": 8046,
          "as10": 9.59,
          "wa": 25,
          "ca": 8
        }
      },
      "mauga": {
        "finalScore": 51.28,
        "battleScore": 35.33,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 17,
        "rankIndex": 0,
        "det": {
          "g": 17,
          "time": 9056,
          "wr": 37,
          "el10": 16.37,
          "de10": 6.76,
          "dm10": 9673,
          "he10": 1199,
          "as10": 8.08,
          "wa": 27,
          "ca": 11
        }
      },
      "mei": {
        "finalScore": 42.28,
        "battleScore": 39.27,
        "coeff": 1.21,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 2,
        "det": {
          "g": 7,
          "time": 4557,
          "wr": 53,
          "el10": 14.75,
          "de10": 7.24,
          "dm10": 6001,
          "he10": 1203,
          "as10": 7.24,
          "wa": 46,
          "ca": 0
        }
      },
      "mercy": {
        "finalScore": 32.43,
        "battleScore": 30.58,
        "coeff": 1.21,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 2,
        "det": {
          "g": 6,
          "time": 2692,
          "wr": 18,
          "el10": 0.67,
          "de10": 8.25,
          "dm10": 146,
          "he10": 8054,
          "as10": 9.81,
          "wa": 25,
          "ca": 14
        }
      },
      "mizuki": {
        "finalScore": 56.46,
        "battleScore": 43.32,
        "coeff": 1.21,
        "matchCoef": 1.08,
        "gamesPlayed": 61,
        "rankIndex": 2,
        "det": {
          "g": 61,
          "time": 31648,
          "wr": 55,
          "el10": 12.66,
          "de10": 6.67,
          "dm10": 4203,
          "he10": 9134,
          "as10": 16.23,
          "wa": 28,
          "ca": 10
        }
      },
      "moira": {
        "finalScore": 64.04,
        "battleScore": 39.59,
        "coeff": 1.21,
        "matchCoef": 1.04,
        "gamesPlayed": 62,
        "rankIndex": 2,
        "det": {
          "g": 62,
          "time": 31534,
          "wr": 47,
          "el10": 18.04,
          "de10": 7.12,
          "dm10": 5341,
          "he10": 7981,
          "as10": 12.73,
          "wa": 0,
          "ca": 0
        }
      },
      "orisa": {
        "finalScore": 30.61,
        "battleScore": 33.58,
        "coeff": 1,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 0,
        "det": {
          "g": 9,
          "time": 4020,
          "wr": 33,
          "el10": 11.94,
          "de10": 7.76,
          "dm10": 10730,
          "he10": 51.23,
          "as10": 2.24,
          "wa": 34,
          "ca": 8
        }
      },
      "pharah": {
        "finalScore": 43,
        "battleScore": 36.58,
        "coeff": 1.21,
        "matchCoef": 0.97,
        "gamesPlayed": 18,
        "rankIndex": 2,
        "det": {
          "g": 18,
          "time": 8298,
          "wr": 36,
          "el10": 15.47,
          "de10": 8.89,
          "dm10": 7560,
          "he10": 0,
          "as10": 3.33,
          "wa": 45,
          "ca": 0
        }
      },
      "ramattra": {
        "finalScore": 47.4,
        "battleScore": 35.84,
        "coeff": 1,
        "matchCoef": 0.93,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2711,
          "wr": 35,
          "el10": 12.62,
          "de10": 7.08,
          "dm10": 8121,
          "he10": 79.02,
          "as10": 1.99,
          "wa": 25,
          "ca": 10
        }
      },
      "reaper": {
        "finalScore": 59.04,
        "battleScore": 40.34,
        "coeff": 1.21,
        "matchCoef": 1,
        "gamesPlayed": 23,
        "rankIndex": 2,
        "det": {
          "g": 23,
          "time": 12547,
          "wr": 45,
          "el10": 14.59,
          "de10": 8.42,
          "dm10": 5170,
          "he10": 920,
          "as10": 0.1,
          "wa": 30,
          "ca": 11
        }
      },
      "reinhardt": {
        "finalScore": 42.42,
        "battleScore": 42.9,
        "coeff": 1,
        "matchCoef": 0.99,
        "gamesPlayed": 22,
        "rankIndex": 0,
        "det": {
          "g": 22,
          "time": 10481,
          "wr": 53,
          "el10": 15.4,
          "de10": 5.04,
          "dm10": 8672,
          "he10": 0,
          "as10": 1.83,
          "wa": 0,
          "ca": 0
        }
      },
      "roadhog": {
        "finalScore": 41.45,
        "battleScore": 42.27,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 0,
        "det": {
          "g": 20,
          "time": 10379,
          "wr": 50,
          "el10": 15.43,
          "de10": 5.67,
          "dm10": 7203,
          "he10": 4964,
          "as10": 4.45,
          "wa": 27,
          "ca": 15
        }
      },
      "shion": {
        "finalScore": 36.02,
        "battleScore": 35.03,
        "coeff": 1.21,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 2,
        "det": {
          "g": 2,
          "time": 802,
          "wr": 35,
          "el10": 14.21,
          "de10": 8.98,
          "dm10": 5697,
          "he10": 33.66,
          "as10": 0.75,
          "wa": 30,
          "ca": 12
        }
      },
      "sigma": {
        "finalScore": 56.44,
        "battleScore": 45.41,
        "coeff": 1,
        "matchCoef": 1,
        "gamesPlayed": 23,
        "rankIndex": 0,
        "det": {
          "g": 23,
          "time": 10384,
          "wr": 65,
          "el10": 17.05,
          "de10": 5.78,
          "dm10": 9870,
          "he10": 0,
          "as10": 2.31,
          "wa": 48,
          "ca": 0
        }
      },
      "sierra": {
        "finalScore": 39.6,
        "battleScore": 36.31,
        "coeff": 1.21,
        "matchCoef": 0.9,
        "gamesPlayed": 8,
        "rankIndex": 2,
        "det": {
          "g": 8,
          "time": 3972,
          "wr": 37,
          "el10": 13.6,
          "de10": 8.31,
          "dm10": 8886,
          "he10": 0,
          "as10": 1.36,
          "wa": 28,
          "ca": 7
        },
        "rankDelta": 1
      },
      "sojourn": {
        "finalScore": 42.63,
        "battleScore": 36.44,
        "coeff": 1.21,
        "matchCoef": 0.97,
        "gamesPlayed": 17,
        "rankIndex": 2,
        "det": {
          "g": 17,
          "time": 8143,
          "wr": 47,
          "el10": 13.34,
          "de10": 8.25,
          "dm10": 6607,
          "he10": 0,
          "as10": 0.52,
          "wa": 27,
          "ca": 9
        }
      },
      "soldier-76": {
        "finalScore": 48.97,
        "battleScore": 39.15,
        "coeff": 1.21,
        "matchCoef": 1.03,
        "gamesPlayed": 37,
        "rankIndex": 2,
        "det": {
          "g": 37,
          "time": 18434,
          "wr": 48,
          "el10": 16.21,
          "de10": 8.98,
          "dm10": 7830,
          "he10": 1335,
          "as10": 1.53,
          "wa": 30,
          "ca": 9
        }
      },
      "symmetra": {
        "finalScore": 43,
        "battleScore": 37.95,
        "coeff": 1.21,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 2,
        "det": {
          "g": 12,
          "time": 5495,
          "wr": 40,
          "el10": 14.63,
          "de10": 7.32,
          "dm10": 5817,
          "he10": 126,
          "as10": 5.24,
          "wa": 34,
          "ca": 0
        }
      },
      "torbjorn": {
        "finalScore": 42.1,
        "battleScore": 36.88,
        "coeff": 1.21,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 2,
        "det": {
          "g": 13,
          "time": 5979,
          "wr": 48,
          "el10": 11.64,
          "de10": 8.63,
          "dm10": 7668,
          "he10": 0,
          "as10": 0.5,
          "wa": 26,
          "ca": 10
        }
      },
      "tracer": {
        "finalScore": 51.39,
        "battleScore": 41.08,
        "coeff": 1.21,
        "matchCoef": 1.03,
        "gamesPlayed": 37,
        "rankIndex": 2,
        "det": {
          "g": 37,
          "time": 18786,
          "wr": 55,
          "el10": 14.66,
          "de10": 7.38,
          "dm10": 4808,
          "he10": 46.45,
          "as10": 0,
          "wa": 31,
          "ca": 10
        }
      },
      "vendetta": {
        "finalScore": 45.04,
        "battleScore": 40.43,
        "coeff": 1.21,
        "matchCoef": 0.92,
        "gamesPlayed": 10,
        "rankIndex": 2,
        "det": {
          "g": 10,
          "time": 4902,
          "wr": 65,
          "el10": 13.71,
          "de10": 8.93,
          "dm10": 5432,
          "he10": 39,
          "as10": 2.69,
          "wa": 0,
          "ca": 0
        }
      },
      "venture": {
        "finalScore": 41.88,
        "battleScore": 40.21,
        "coeff": 1.21,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 2,
        "det": {
          "g": 5,
          "time": 2670,
          "wr": 60,
          "el10": 14.38,
          "de10": 8.54,
          "dm10": 5535,
          "he10": 28.51,
          "as10": 1.12,
          "wa": 45,
          "ca": 0
        }
      },
      "widowmaker": {
        "finalScore": 42.32,
        "battleScore": 36,
        "coeff": 1.21,
        "matchCoef": 0.97,
        "gamesPlayed": 18,
        "rankIndex": 2,
        "det": {
          "g": 18,
          "time": 8269,
          "wr": 39,
          "el10": 11.54,
          "de10": 8.27,
          "dm10": 5162,
          "he10": 0,
          "as10": 2.98,
          "wa": 37,
          "ca": 14
        }
      },
      "winston": {
        "finalScore": 40.85,
        "battleScore": 44.81,
        "coeff": 1,
        "matchCoef": 0.91,
        "gamesPlayed": 9,
        "rankIndex": 0,
        "det": {
          "g": 9,
          "time": 5133,
          "wr": 55,
          "el10": 18.94,
          "de10": 6.08,
          "dm10": 6651,
          "he10": 1987,
          "as10": 5.14,
          "wa": 43,
          "ca": 0
        }
      },
      "wrecking-ball": {
        "finalScore": 26.66,
        "battleScore": 31.36,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 419,
          "wr": 47,
          "el10": 0,
          "de10": 10.03,
          "dm10": 3084,
          "he10": 809,
          "as10": 0,
          "wa": 28,
          "ca": 8
        }
      },
      "zarya": {
        "finalScore": 48.32,
        "battleScore": 39.18,
        "coeff": 1,
        "matchCoef": 0.99,
        "gamesPlayed": 20,
        "rankIndex": 0,
        "det": {
          "g": 20,
          "time": 10222,
          "wr": 34,
          "el10": 18.25,
          "de10": 5.87,
          "dm10": 8406,
          "he10": 0,
          "as10": 4.75,
          "wa": 39,
          "ca": 0
        }
      },
      "zenyatta": {
        "finalScore": 52.2,
        "battleScore": 43,
        "coeff": 1.21,
        "matchCoef": 1,
        "gamesPlayed": 26,
        "rankIndex": 2,
        "det": {
          "g": 26,
          "time": 13490,
          "wr": 64,
          "el10": 13.08,
          "de10": 6.94,
          "dm10": 4769,
          "he10": 6232,
          "as10": 15.83,
          "wa": 26,
          "ca": 12
        }
      }
    },
    "recent": [
      {
        "d": "2026-09-20",
        "g": {},
        "m": 1739,
        "w": 848,
        "l": 891,
        "t": 868726,
        "k": 2.01,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-09-21",
        "g": {
          "brigitte": 1,
          "junkrat": 2,
          "kiriko": 1,
          "baptiste": 1,
          "echo": 1,
          "hanzo": 1
        },
        "m": 1746,
        "w": 850,
        "l": 896,
        "t": 873250,
        "k": 2.01,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-09-22",
        "g": {
          "ana": 1,
          "brigitte": 1,
          "jetpack-cat": 1,
          "junkrat": 1,
          "kiriko": 4,
          "lifeweaver": 1,
          "moira": 3,
          "sombra": 2,
          "symmetra": 1,
          "zenyatta": 1,
          "ashe": 2,
          "echo": 1,
          "illari": 1
        },
        "m": 1766,
        "w": 861,
        "l": 905,
        "t": 881956,
        "k": 2.02,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-09-23",
        "g": {
          "ana": 1,
          "soldier-76": 1,
          "baptiste": 2,
          "dva": 1,
          "hazard": 1,
          "orisa": 1,
          "roadhog": 1,
          "sierra": 1,
          "winston": 1,
          "zarya": 2
        },
        "m": 1778,
        "w": 864,
        "l": 914,
        "t": 888946,
        "k": 2.02,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-09-24",
        "g": {
          "kiriko": 1,
          "tracer": 1,
          "baptiste": 1,
          "junker-queen": 1,
          "juno": 1,
          "mauga": 1,
          "sigma": 1
        },
        "m": 1785,
        "w": 864,
        "l": 921,
        "t": 894008,
        "k": 2.02,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-09-25",
        "g": {
          "junkrat": 3,
          "lifeweaver": 1,
          "sombra": 1,
          "symmetra": 1,
          "zenyatta": 1,
          "baptiste": 1,
          "wuyang": 1
        },
        "m": 1794,
        "w": 867,
        "l": 927,
        "t": 900555,
        "k": 2.01,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-09-26",
        "g": {
          "ana": 4,
          "junkrat": 2,
          "kiriko": 2,
          "mizuki": 2,
          "pharah": 1,
          "ashe": 1,
          "orisa": 1,
          "wuyang": 1
        },
        "m": 1808,
        "w": 874,
        "l": 934,
        "t": 908296,
        "k": 2.01,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-09-27",
        "g": {
          "ana": 4,
          "bastion": 1,
          "brigitte": 1,
          "freja": 1,
          "junkrat": 2,
          "kiriko": 3,
          "lifeweaver": 1,
          "sojourn": 1,
          "vendetta": 1,
          "ashe": 1,
          "baptiste": 1,
          "doomfist": 1,
          "hanzo": 1,
          "lucio": 1,
          "sigma": 1
        },
        "m": 1829,
        "w": 885,
        "l": 944,
        "t": 919219,
        "k": 2.01,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-09-28",
        "g": {
          "ana": 1,
          "cassidy": 1,
          "junkrat": 1,
          "kiriko": 1,
          "ashe": 1,
          "echo": 1,
          "emre": 1,
          "juno": 1,
          "lucio": 1
        },
        "m": 1838,
        "w": 891,
        "l": 947,
        "t": 923608,
        "k": 2.01,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-09-29",
        "g": {},
        "m": 1855,
        "w": 897,
        "l": 958,
        "t": 933408,
        "k": 2.01,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-09-30",
        "g": {},
        "m": 1860,
        "w": 900,
        "l": 960,
        "t": 936159,
        "k": 2.01,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-10-01",
        "g": {},
        "m": 1870,
        "w": 904,
        "l": 966,
        "t": 941148,
        "k": 2.01,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-10-02",
        "g": {},
        "m": 1870,
        "w": 904,
        "l": 966,
        "t": 941148,
        "k": 2.01,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-10-03",
        "g": {},
        "m": 1886,
        "w": 915,
        "l": 971,
        "t": 947714,
        "k": 2.01,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-10-04",
        "g": {},
        "m": 1886,
        "w": 915,
        "l": 971,
        "t": 947714,
        "k": 2.01,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-10-05",
        "g": {},
        "m": 1886,
        "w": 915,
        "l": 971,
        "t": 947714,
        "k": 2.01,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-10-06",
        "g": {},
        "m": 1895,
        "w": 919,
        "l": 976,
        "t": 953467,
        "k": 2.01,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-10-07",
        "g": {},
        "m": 1907,
        "w": 925,
        "l": 982,
        "t": 960989,
        "k": 2.01,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-4"
        }
      },
      {
        "d": "2026-10-08",
        "g": {},
        "m": 1927,
        "w": 940,
        "l": 987,
        "t": 970664,
        "k": 2.03,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-4"
        }
      },
      {
        "d": "2026-10-09",
        "g": {},
        "m": 1927,
        "w": 940,
        "l": 987,
        "t": 970664,
        "k": 2.03,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-4"
        }
      },
      {
        "d": "2026-10-10",
        "g": {},
        "m": 1943,
        "w": 947,
        "l": 996,
        "t": 979481,
        "k": 2.03,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-4"
        }
      },
      {
        "d": "2026-10-11",
        "g": {},
        "m": 1967,
        "w": 962,
        "l": 1005,
        "t": 990515,
        "k": 2.04,
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-4"
        }
      },
      {
        "d": "2026-10-12",
        "g": {},
        "m": 1985,
        "w": 970,
        "l": 1015,
        "t": 1000739,
        "k": 2.04,
        "tot": {
          "e": 20825,
          "a": 3184,
          "dd": 11745,
          "dm": 11339068,
          "he": 6719946
        },
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-4"
        }
      },
      {
        "d": "2026-10-13",
        "g": {
          "junkrat": 1,
          "sombra": 1
        },
        "m": 1987,
        "w": 972,
        "l": 1015,
        "t": 1001856,
        "k": 2.05,
        "tot": {
          "e": 20851,
          "a": 3191,
          "dd": 11755,
          "dm": 11352253,
          "he": 6725400
        },
        "r": {
          "Tank": null,
          "Damage": "gold-4",
          "Support": "gold-4"
        }
      },
      {
        "d": "2026-10-14",
        "g": {
          "doctrine": 1,
          "wuyang": 5,
          "echo": 1,
          "roadhog": 1
        },
        "m": 1936,
        "w": 949,
        "l": 987,
        "t": 967599,
        "k": 2.04,
        "tot": {
          "e": 20062,
          "a": 3067,
          "dd": 11319,
          "dm": 10993586,
          "he": 6481761
        },
        "r": {
          "Tank": null,
          "Damage": "gold-3",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-10-15",
        "g": {
          "ana": 1,
          "doctrine": 1,
          "junkrat": 4,
          "tracer": 1
        },
        "m": 1943,
        "w": 951,
        "l": 992,
        "t": 972307,
        "k": 2.04,
        "tot": {
          "e": 20144,
          "a": 3080,
          "dd": 11374,
          "dm": 11051181,
          "he": 6501648
        },
        "r": {
          "Tank": null,
          "Damage": "gold-3",
          "Support": "gold-3"
        }
      },
      {
        "d": "2026-10-16",
        "g": {
          "ana": 2,
          "junkrat": 3,
          "sombra": 1,
          "wuyang": 1,
          "ashe": 1,
          "brigitte": 1,
          "cassidy": 2,
          "hanzo": 1,
          "jetpack-cat": 1,
          "mauga": 1,
          "moira": 1,
          "orisa": 1,
          "widowmaker": 1,
          "zarya": 1
        },
        "m": 1961,
        "w": 960,
        "l": 1001,
        "t": 980740,
        "k": 2.04,
        "tot": {
          "e": 20341,
          "a": 3117,
          "dd": 11475,
          "dm": 11159762,
          "he": 6534676
        },
        "r": {
          "Tank": null,
          "Damage": "gold-3",
          "Support": "gold-3"
        }
      }
    ]
  },
  {
    "id": "p11",
    "pid": "c2779cbf815ed6febaa823|5c92c86a83e8c0634c7f082bbed0d680",
    "name": "PIPURO",
    "tag": "",
    "endorse": 3,
    "title": null,
    "avatar": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4a8e450033113f4314216a457fc7961a3740b41249692c6232b5589e74c5f534.png",
    "namecard": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d7fe48012a3cf539649c1ec884399874eef1c3a761db698a09dc695a57f0f914.png",
    "role": "Support",
    "ranks": {
      "Tank": {
        "division": "bronze",
        "tier": 1,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_BronzeTier.f46bc3540601455a7768761396f9310d805052ad.png"
      },
      "Damage": {
        "division": "bronze",
        "tier": 1,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_BronzeTier.f46bc3540601455a7768761396f9310d805052ad.png"
      },
      "Support": {
        "division": "silver",
        "tier": 5,
        "icon": "https://static.playoverwatch.com/images/pages/career/icons/rank/Rank_SilverTier.305e60dca5e95356ced59825426844cc7cdb4948.png"
      }
    },
    "rankTier": "Silver 5",
    "overall": {
      "matches": 1044,
      "wins": 538,
      "losses": 506,
      "wr": 51.53,
      "kda": 2.44,
      "elim": 13.03,
      "deaths": 5.79,
      "dmg": 7064.58,
      "heal": 3764.24,
      "time": 521980,
      "tot": {
        "e": 11339,
        "a": 947,
        "dd": 5038,
        "dm": 6145949,
        "he": 3274761
      }
    },
    "roles": {
      "Tank": {
        "g": 300,
        "w": 154,
        "l": 146,
        "time": 152882,
        "wr": 51.33,
        "kda": 3.44,
        "elim": 16.86,
        "deaths": 5.21,
        "dmg": 10871.44,
        "heal": 1165.91
      },
      "Damage": {
        "g": 279,
        "w": 138,
        "l": 141,
        "time": 136442,
        "wr": 49.46,
        "kda": 2.23,
        "elim": 14.45,
        "deaths": 6.48,
        "dmg": 7961.63,
        "heal": 541.15
      },
      "Support": {
        "g": 465,
        "w": 246,
        "l": 219,
        "time": 232656,
        "wr": 52.9,
        "kda": 1.98,
        "elim": 9.69,
        "deaths": 5.77,
        "dmg": 4036.95,
        "heal": 7361.83
      }
    },
    "heroes": [
      {
        "slug": "kiriko",
        "n": "Kiriko",
        "role": "Support",
        "g": 178,
        "wr": 47.75,
        "kda": 1.77
      },
      {
        "slug": "winston",
        "n": "Winston",
        "role": "Tank",
        "g": 150,
        "wr": 56,
        "kda": 3.76
      },
      {
        "slug": "juno",
        "n": "Juno",
        "role": "Support",
        "g": 135,
        "wr": 46.67,
        "kda": 1.95
      },
      {
        "slug": "reaper",
        "n": "Reaper",
        "role": "Damage",
        "g": 71,
        "wr": 59.15,
        "kda": 2.65
      },
      {
        "slug": "sigma",
        "n": "Sigma",
        "role": "Tank",
        "g": 71,
        "wr": 47.89,
        "kda": 3.33
      },
      {
        "slug": "soldier-76",
        "n": "Soldier: 76",
        "role": "Damage",
        "g": 57,
        "wr": 49.12,
        "kda": 2.25
      },
      {
        "slug": "ana",
        "n": "Ana",
        "role": "Support",
        "g": 47,
        "wr": 63.83,
        "kda": 2.4
      },
      {
        "slug": "orisa",
        "n": "Orisa",
        "role": "Tank",
        "g": 46,
        "wr": 45.65,
        "kda": 3.66
      },
      {
        "slug": "cassidy",
        "n": "Cassidy",
        "role": "Damage",
        "g": 44,
        "wr": 31.82,
        "kda": 1.86
      },
      {
        "slug": "bastion",
        "n": "Bastion",
        "role": "Damage",
        "g": 33,
        "wr": 42.42,
        "kda": 2.32
      },
      {
        "slug": "moira",
        "n": "Moira",
        "role": "Support",
        "g": 27,
        "wr": 66.67,
        "kda": 2.98
      },
      {
        "slug": "emre",
        "n": "Emre",
        "role": "Damage",
        "g": 21,
        "wr": 61.9,
        "kda": 2.47
      },
      {
        "slug": "tracer",
        "n": "Tracer",
        "role": "Damage",
        "g": 20,
        "wr": 55,
        "kda": 2.39
      },
      {
        "slug": "lifeweaver",
        "n": "Lifeweaver",
        "role": "Support",
        "g": 19,
        "wr": 68.42,
        "kda": 1.8
      },
      {
        "slug": "mizuki",
        "n": "Mizuki",
        "role": "Support",
        "g": 13,
        "wr": 61.54,
        "kda": 1.6
      },
      {
        "slug": "baptiste",
        "n": "Baptiste",
        "role": "Support",
        "g": 12,
        "wr": 50,
        "kda": 1.41
      },
      {
        "slug": "zenyatta",
        "n": "Zenyatta",
        "role": "Support",
        "g": 11,
        "wr": 72.73,
        "kda": 3.6
      },
      {
        "slug": "mauga",
        "n": "Mauga",
        "role": "Tank",
        "g": 7,
        "wr": 42.86,
        "kda": 2.71
      },
      {
        "slug": "roadhog",
        "n": "Roadhog",
        "role": "Tank",
        "g": 7,
        "wr": 71.43,
        "kda": 3.38
      },
      {
        "slug": "torbjorn",
        "n": "Torbjörn",
        "role": "Damage",
        "g": 7,
        "wr": 57.14,
        "kda": 2.73
      },
      {
        "slug": "doctrine",
        "n": "Doctrine",
        "role": "Support",
        "g": 6,
        "wr": 50,
        "kda": 1.68
      },
      {
        "slug": "symmetra",
        "n": "Symmetra",
        "role": "Damage",
        "g": 6,
        "wr": 100,
        "kda": 2.65
      },
      {
        "slug": "dmon",
        "n": "D.Mon",
        "role": "Tank",
        "g": 5,
        "wr": 40,
        "kda": 1.61
      },
      {
        "slug": "jetpack-cat",
        "n": "Jetpack Cat",
        "role": "Support",
        "g": 5,
        "wr": 20,
        "kda": 2.33
      },
      {
        "slug": "shion",
        "n": "Shion",
        "role": "Damage",
        "g": 5,
        "wr": 40,
        "kda": 0.74
      },
      {
        "slug": "wuyang",
        "n": "Wuyang",
        "role": "Support",
        "g": 5,
        "wr": 100,
        "kda": 1.71
      },
      {
        "slug": "ashe",
        "n": "Ashe",
        "role": "Damage",
        "g": 4,
        "wr": 0,
        "kda": 0.64
      },
      {
        "slug": "reinhardt",
        "n": "Reinhardt",
        "role": "Tank",
        "g": 4,
        "wr": 50,
        "kda": 1.48
      },
      {
        "slug": "sojourn",
        "n": "Sojourn",
        "role": "Damage",
        "g": 4,
        "wr": 25,
        "kda": 2.29
      },
      {
        "slug": "sombra",
        "n": "Sombra",
        "role": "Support",
        "g": 3,
        "wr": 100,
        "kda": 2.93
      },
      {
        "slug": "zarya",
        "n": "Zarya",
        "role": "Tank",
        "g": 3,
        "wr": 66.67,
        "kda": 3
      },
      {
        "slug": "genji",
        "n": "Genji",
        "role": "Damage",
        "g": 2,
        "wr": 50,
        "kda": 1.27
      },
      {
        "slug": "hazard",
        "n": "Hazard",
        "role": "Tank",
        "g": 2,
        "wr": 50,
        "kda": 1.62
      },
      {
        "slug": "junkrat",
        "n": "Junkrat",
        "role": "Damage",
        "g": 2,
        "wr": 0,
        "kda": 1.25
      },
      {
        "slug": "mei",
        "n": "Mei",
        "role": "Damage",
        "g": 2,
        "wr": 50,
        "kda": 1
      },
      {
        "slug": "mercy",
        "n": "Mercy",
        "role": "Support",
        "g": 2,
        "wr": 50,
        "kda": 0.92
      },
      {
        "slug": "ramattra",
        "n": "Ramattra",
        "role": "Tank",
        "g": 2,
        "wr": 0,
        "kda": 1.27
      },
      {
        "slug": "domina",
        "n": "Domina",
        "role": "Tank",
        "g": 1,
        "wr": 0,
        "kda": 1.5
      },
      {
        "slug": "doomfist",
        "n": "Doomfist",
        "role": "Tank",
        "g": 1,
        "wr": 0,
        "kda": 1.67
      },
      {
        "slug": "dva",
        "n": "D.Va",
        "role": "Tank",
        "g": 1,
        "wr": 0,
        "kda": 1.8
      },
      {
        "slug": "hanzo",
        "n": "Hanzo",
        "role": "Damage",
        "g": 1,
        "wr": 100,
        "kda": 5
      },
      {
        "slug": "illari",
        "n": "Illari",
        "role": "Support",
        "g": 1,
        "wr": 100,
        "kda": 0.22
      },
      {
        "slug": "lucio",
        "n": "Lúcio",
        "role": "Support",
        "g": 1,
        "wr": 100,
        "kda": 0
      }
    ],
    "bscore": {
      "kiriko": {
        "finalScore": 46.35,
        "battleScore": 36.64,
        "coeff": 1.1,
        "matchCoef": 1.15,
        "gamesPlayed": 178,
        "rankIndex": 1,
        "det": {
          "g": 178,
          "time": 88044,
          "wr": 47.98876404494382,
          "el10": 7.600449438202246,
          "de10": 5.769887640449438,
          "dm10": 2733.7303370786517,
          "he10": 8215.61797752809,
          "as10": 14.105393258426968,
          "wa": 26.02247191011236,
          "ca": 15.02247191011236
        }
      },
      "moira": {
        "finalScore": 62.81,
        "battleScore": 42.08,
        "coeff": 1.1,
        "matchCoef": 1,
        "gamesPlayed": 27,
        "rankIndex": 1,
        "det": {
          "g": 27,
          "time": 15140,
          "wr": 65.33333333333333,
          "el10": 16.656296296296297,
          "de10": 5.590370370370372,
          "dm10": 5061.407407407408,
          "he10": 7526.7037037037035,
          "as10": 10.877037037037038,
          "wa": 0,
          "ca": 0
        }
      },
      "reaper": {
        "finalScore": 57.66,
        "battleScore": 43.11,
        "coeff": 1,
        "matchCoef": 1.05,
        "gamesPlayed": 71,
        "rankIndex": 0,
        "det": {
          "g": 71,
          "time": 32887,
          "wr": 59.57746478873239,
          "el10": 16.4543661971831,
          "de10": 6.213802816901408,
          "dm10": 5916.338028169014,
          "he10": 902.3802816901408,
          "as10": 0.03943661971830986,
          "wa": 27.929577464788732,
          "ca": 11.028169014084508
        }
      },
      "sigma": {
        "finalScore": 54.26,
        "battleScore": 39.03,
        "coeff": 1,
        "matchCoef": 1.05,
        "gamesPlayed": 71,
        "rankIndex": 0,
        "det": {
          "g": 71,
          "time": 33588,
          "wr": 47.74647887323944,
          "el10": 14.549999999999999,
          "de10": 4.86056338028169,
          "dm10": 9826.760563380281,
          "he10": 0,
          "as10": 1.6967605633802816,
          "wa": 44.056338028169016,
          "ca": 0
        }
      },
      "sombra": {
        "finalScore": 40.23,
        "battleScore": 43.02,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 1,
        "det": {
          "g": 3,
          "time": 1551,
          "wr": 100,
          "el10": 13.266666666666666,
          "de10": 5.706666666666667,
          "dm10": 3221.6666666666665,
          "he10": 6997,
          "as10": 14.780000000000001,
          "wa": 24.666666666666668,
          "ca": 7.666666666666667
        }
      },
      "tracer": {
        "finalScore": 41.67,
        "battleScore": 42.49,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 0,
        "det": {
          "g": 20,
          "time": 10612,
          "wr": 56.8,
          "el10": 15.0655,
          "de10": 6.351999999999999,
          "dm10": 4881.55,
          "he10": 57.513,
          "as10": 0,
          "wa": 28.85,
          "ca": 9.1
        }
      },
      "winston": {
        "finalScore": 53.07,
        "battleScore": 46.15,
        "coeff": 1,
        "matchCoef": 1.15,
        "gamesPlayed": 150,
        "rankIndex": 0,
        "det": {
          "g": 150,
          "time": 78149,
          "wr": 55.54,
          "el10": 18.475,
          "de10": 4.9154,
          "dm10": 7910.92,
          "he10": 1956.3,
          "as10": 3.795,
          "wa": 47.96,
          "ca": 0
        }
      },
      "ana": {
        "finalScore": 48.34,
        "battleScore": 41.67,
        "coeff": 1.1,
        "matchCoef": 1.05,
        "gamesPlayed": 47,
        "rankIndex": 1,
        "det": {
          "g": 47,
          "time": 22112,
          "wr": 63,
          "el10": 8.09,
          "de10": 5.45,
          "dm10": 2814,
          "he10": 5204,
          "as10": 10.91,
          "wa": 55,
          "ca": 0
        }
      },
      "ashe": {
        "finalScore": 23.6,
        "battleScore": 27.76,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 0,
        "det": {
          "g": 4,
          "time": 1890,
          "wr": 5,
          "el10": 5.08,
          "de10": 7.94,
          "dm10": 4976,
          "he10": 0,
          "as10": 0,
          "wa": 36,
          "ca": 13
        }
      },
      "baptiste": {
        "finalScore": 34.74,
        "battleScore": 33.73,
        "coeff": 1.1,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 1,
        "det": {
          "g": 12,
          "time": 5698,
          "wr": 50,
          "el10": 9.58,
          "de10": 6.95,
          "dm10": 3495,
          "he10": 6064,
          "as10": 6.32,
          "wa": 27,
          "ca": 9
        }
      },
      "bastion": {
        "finalScore": 51.53,
        "battleScore": 35.4,
        "coeff": 1,
        "matchCoef": 1.01,
        "gamesPlayed": 33,
        "rankIndex": 0,
        "det": {
          "g": 33,
          "time": 16121,
          "wr": 41,
          "el10": 15.52,
          "de10": 6.7,
          "dm10": 7835,
          "he10": 152,
          "as10": 0.48,
          "wa": 25,
          "ca": 2
        }
      },
      "cassidy": {
        "finalScore": 34.8,
        "battleScore": 33.18,
        "coeff": 1,
        "matchCoef": 1.05,
        "gamesPlayed": 44,
        "rankIndex": 0,
        "det": {
          "g": 44,
          "time": 22014,
          "wr": 32,
          "el10": 13.36,
          "de10": 7.17,
          "dm10": 6786,
          "he10": 57.2,
          "as10": 0.76,
          "wa": 39,
          "ca": 11
        }
      },
      "dmon": {
        "finalScore": 29.07,
        "battleScore": 33.78,
        "coeff": 1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2329,
          "wr": 25,
          "el10": 11.59,
          "de10": 7.21,
          "dm10": 6367,
          "he10": 121,
          "as10": 2.06,
          "wa": 32,
          "ca": 0
        }
      },
      "doctrine": {
        "finalScore": 33.28,
        "battleScore": 34.51,
        "coeff": 1.1,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 1,
        "det": {
          "g": 6,
          "time": 3162,
          "wr": 45,
          "el10": 11.77,
          "de10": 6.64,
          "dm10": 3896,
          "he10": 6439,
          "as10": 10.44,
          "wa": 52,
          "ca": 0
        }
      },
      "domina": {
        "finalScore": 29.43,
        "battleScore": 34.62,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 793,
          "wr": 44,
          "el10": 11.34,
          "de10": 7.56,
          "dm10": 7881,
          "he10": 1378,
          "as10": 0,
          "wa": 36,
          "ca": 10
        }
      },
      "doomfist": {
        "finalScore": 31.83,
        "battleScore": 37.44,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 675,
          "wr": 0,
          "el10": 13.34,
          "de10": 8,
          "dm10": 6315,
          "he10": 1537,
          "as10": 1.78,
          "wa": 31,
          "ca": 5
        }
      },
      "dva": {
        "finalScore": 30.54,
        "battleScore": 35.93,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 804,
          "wr": 0,
          "el10": 13.44,
          "de10": 7.47,
          "dm10": 4999,
          "he10": 851,
          "as10": 5.97,
          "wa": 24,
          "ca": 8
        }
      },
      "emre": {
        "finalScore": 39.25,
        "battleScore": 39.85,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 21,
        "rankIndex": 0,
        "det": {
          "g": 21,
          "time": 9502,
          "wr": 62,
          "el10": 15.72,
          "de10": 6.38,
          "dm10": 7330,
          "he10": 477,
          "as10": 0,
          "wa": 29,
          "ca": 11
        }
      },
      "genji": {
        "finalScore": 31.48,
        "battleScore": 37.03,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 915,
          "wr": 76,
          "el10": 9.18,
          "de10": 7.21,
          "dm10": 5657,
          "he10": 154,
          "as10": 0,
          "wa": 25,
          "ca": 13
        }
      },
      "hazard": {
        "finalScore": 31.34,
        "battleScore": 36.87,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 912,
          "wr": 34,
          "el10": 13.81,
          "de10": 8.55,
          "dm10": 7854,
          "he10": 1836,
          "as10": 2.63,
          "wa": 26,
          "ca": 11
        }
      },
      "hanzo": {
        "finalScore": 37.3,
        "battleScore": 43.88,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 246,
          "wr": 100,
          "el10": 12.19,
          "de10": 2.44,
          "dm10": 3676,
          "he10": 0,
          "as10": 2.44,
          "wa": 18,
          "ca": 6
        }
      },
      "illari": {
        "finalScore": 30.52,
        "battleScore": 32.65,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 1,
        "det": {
          "g": 1,
          "time": 673,
          "wr": 69,
          "el10": 1.78,
          "de10": 8.02,
          "dm10": 3085,
          "he10": 8178,
          "as10": 3.56,
          "wa": 32,
          "ca": 8
        }
      },
      "jetpack-cat": {
        "finalScore": 36.89,
        "battleScore": 38.97,
        "coeff": 1.1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 1,
        "det": {
          "g": 5,
          "time": 2439,
          "wr": 22,
          "el10": 9.59,
          "de10": 5.17,
          "dm10": 2868,
          "he10": 7928,
          "as10": 10.58,
          "wa": 34,
          "ca": 7
        }
      },
      "junkrat": {
        "finalScore": 28.09,
        "battleScore": 33.04,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 808,
          "wr": 8,
          "el10": 6.69,
          "de10": 5.94,
          "dm10": 5772,
          "he10": 0,
          "as10": 0.74,
          "wa": 22,
          "ca": 0
        }
      },
      "juno": {
        "finalScore": 48.36,
        "battleScore": 38.36,
        "coeff": 1.1,
        "matchCoef": 1.15,
        "gamesPlayed": 135,
        "rankIndex": 1,
        "det": {
          "g": 135,
          "time": 69276,
          "wr": 47,
          "el10": 11.25,
          "de10": 5.78,
          "dm10": 3265,
          "he10": 7163,
          "as10": 8.66,
          "wa": 37,
          "ca": 7
        }
      },
      "lifeweaver": {
        "finalScore": 44.52,
        "battleScore": 41.46,
        "coeff": 1.1,
        "matchCoef": 0.98,
        "gamesPlayed": 19,
        "rankIndex": 1,
        "det": {
          "g": 19,
          "time": 9076,
          "wr": 67,
          "el10": 8.26,
          "de10": 4.63,
          "dm10": 2127,
          "he10": 8987,
          "as10": 11.83,
          "wa": 25,
          "ca": 12
        }
      },
      "lucio": {
        "finalScore": 25.43,
        "battleScore": 27.19,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 1,
        "det": {
          "g": 1,
          "time": 379,
          "wr": 37,
          "el10": 0,
          "de10": 7.91,
          "dm10": 2042,
          "he10": 4831,
          "as10": 1.58,
          "wa": 15,
          "ca": 16
        }
      },
      "mauga": {
        "finalScore": 51.17,
        "battleScore": 36.48,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 7,
        "rankIndex": 0,
        "det": {
          "g": 7,
          "time": 3488,
          "wr": 41,
          "el10": 16.86,
          "de10": 7.74,
          "dm10": 9147,
          "he10": 1258,
          "as10": 6.02,
          "wa": 30,
          "ca": 7
        }
      },
      "mei": {
        "finalScore": 28.14,
        "battleScore": 33.11,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 1005,
          "wr": 57,
          "el10": 6.57,
          "de10": 7.76,
          "dm10": 4653,
          "he10": 1342,
          "as10": 1.19,
          "wa": 43,
          "ca": 0
        }
      },
      "mercy": {
        "finalScore": 29.94,
        "battleScore": 32.03,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 1,
        "det": {
          "g": 2,
          "time": 1024,
          "wr": 51,
          "el10": 1.17,
          "de10": 7.03,
          "dm10": 307,
          "he10": 5997,
          "as10": 9.96,
          "wa": 16,
          "ca": 22
        }
      },
      "mizuki": {
        "finalScore": 38.48,
        "battleScore": 37.08,
        "coeff": 1.1,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 1,
        "det": {
          "g": 13,
          "time": 6219,
          "wr": 61,
          "el10": 10.03,
          "de10": 6.27,
          "dm10": 3982,
          "he10": 6470,
          "as10": 8.78,
          "wa": 28,
          "ca": 11
        }
      },
      "orisa": {
        "finalScore": 41.48,
        "battleScore": 39.4,
        "coeff": 1,
        "matchCoef": 1.05,
        "gamesPlayed": 46,
        "rankIndex": 0,
        "det": {
          "g": 46,
          "time": 24088,
          "wr": 47,
          "el10": 17.24,
          "de10": 5.58,
          "dm10": 10219,
          "he10": 5.08,
          "as10": 3.24,
          "wa": 32,
          "ca": 10
        }
      },
      "ramattra": {
        "finalScore": 45.97,
        "battleScore": 32.81,
        "coeff": 1,
        "matchCoef": 0.92,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 886,
          "wr": 19,
          "el10": 9.49,
          "de10": 7.45,
          "dm10": 8676,
          "he10": 243,
          "as10": 0,
          "wa": 26,
          "ca": 8
        }
      },
      "reinhardt": {
        "finalScore": 31.08,
        "battleScore": 36.57,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 0,
        "det": {
          "g": 4,
          "time": 1983,
          "wr": 63,
          "el10": 9.08,
          "de10": 6.36,
          "dm10": 7083,
          "he10": 0,
          "as10": 0.3,
          "wa": 0,
          "ca": 0
        }
      },
      "roadhog": {
        "finalScore": 37.01,
        "battleScore": 41.59,
        "coeff": 1,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 0,
        "det": {
          "g": 7,
          "time": 3770,
          "wr": 65,
          "el10": 14.8,
          "de10": 5.41,
          "dm10": 6093,
          "he10": 4194,
          "as10": 3.5,
          "wa": 23,
          "ca": 13
        }
      },
      "shion": {
        "finalScore": 25.57,
        "battleScore": 29.71,
        "coeff": 1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 3030,
          "wr": 35,
          "el10": 6.93,
          "de10": 9.31,
          "dm10": 3762,
          "he10": 21.54,
          "as10": 0.99,
          "wa": 25,
          "ca": 7
        }
      },
      "sojourn": {
        "finalScore": 32.44,
        "battleScore": 38.16,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 0,
        "det": {
          "g": 4,
          "time": 1785,
          "wr": 21,
          "el10": 18.49,
          "de10": 8.07,
          "dm10": 9688,
          "he10": 0,
          "as10": 0,
          "wa": 29,
          "ca": 10
        }
      },
      "soldier-76": {
        "finalScore": 38.77,
        "battleScore": 36.19,
        "coeff": 1,
        "matchCoef": 1.07,
        "gamesPlayed": 57,
        "rankIndex": 0,
        "det": {
          "g": 57,
          "time": 28256,
          "wr": 48,
          "el10": 13.55,
          "de10": 6.01,
          "dm10": 6584,
          "he10": 1172,
          "as10": 0.62,
          "wa": 27,
          "ca": 10
        }
      },
      "symmetra": {
        "finalScore": 37.83,
        "battleScore": 43.17,
        "coeff": 1,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 0,
        "det": {
          "g": 6,
          "time": 3376,
          "wr": 95,
          "el10": 14.57,
          "de10": 5.51,
          "dm10": 5427,
          "he10": 138,
          "as10": 2.84,
          "wa": 31,
          "ca": 0
        }
      },
      "torbjorn": {
        "finalScore": 35.23,
        "battleScore": 39.6,
        "coeff": 1,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 0,
        "det": {
          "g": 7,
          "time": 3287,
          "wr": 62,
          "el10": 12.96,
          "de10": 4.75,
          "dm10": 6485,
          "he10": 0,
          "as10": 0.18,
          "wa": 18,
          "ca": 7
        }
      },
      "wuyang": {
        "finalScore": 39.16,
        "battleScore": 41.37,
        "coeff": 1.1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 1,
        "det": {
          "g": 5,
          "time": 2118,
          "wr": 91,
          "el10": 10.2,
          "de10": 5.95,
          "dm10": 4692,
          "he10": 5485,
          "as10": 16.43,
          "wa": 28,
          "ca": 0
        }
      },
      "zarya": {
        "finalScore": 45.95,
        "battleScore": 37.12,
        "coeff": 1,
        "matchCoef": 0.92,
        "gamesPlayed": 3,
        "rankIndex": 0,
        "det": {
          "g": 3,
          "time": 1417,
          "wr": 52,
          "el10": 13.55,
          "de10": 4.66,
          "dm10": 8085,
          "he10": 0,
          "as10": 0.85,
          "wa": 28,
          "ca": 0
        }
      },
      "zenyatta": {
        "finalScore": 43.95,
        "battleScore": 43.01,
        "coeff": 1.1,
        "matchCoef": 0.93,
        "gamesPlayed": 11,
        "rankIndex": 1,
        "det": {
          "g": 11,
          "time": 5625,
          "wr": 72,
          "el10": 13.87,
          "de10": 6.19,
          "dm10": 5115,
          "he10": 5678,
          "as10": 15.79,
          "wa": 26,
          "ca": 14
        }
      }
    },
    "bscoreAll": {
      "kiriko": {
        "finalScore": 46.35,
        "battleScore": 36.64,
        "coeff": 1.1,
        "matchCoef": 1.15,
        "gamesPlayed": 178,
        "rankIndex": 1,
        "det": {
          "g": 178,
          "time": 88044,
          "wr": 47.98876404494382,
          "el10": 7.600449438202246,
          "de10": 5.769887640449438,
          "dm10": 2733.7303370786517,
          "he10": 8215.61797752809,
          "as10": 14.105393258426968,
          "wa": 26.02247191011236,
          "ca": 15.02247191011236
        }
      },
      "moira": {
        "finalScore": 62.81,
        "battleScore": 42.08,
        "coeff": 1.1,
        "matchCoef": 1,
        "gamesPlayed": 27,
        "rankIndex": 1,
        "det": {
          "g": 27,
          "time": 15140,
          "wr": 65.33333333333333,
          "el10": 16.656296296296297,
          "de10": 5.590370370370372,
          "dm10": 5061.407407407408,
          "he10": 7526.7037037037035,
          "as10": 10.877037037037038,
          "wa": 0,
          "ca": 0
        }
      },
      "reaper": {
        "finalScore": 57.66,
        "battleScore": 43.11,
        "coeff": 1,
        "matchCoef": 1.05,
        "gamesPlayed": 71,
        "rankIndex": 0,
        "det": {
          "g": 71,
          "time": 32887,
          "wr": 59.57746478873239,
          "el10": 16.4543661971831,
          "de10": 6.213802816901408,
          "dm10": 5916.338028169014,
          "he10": 902.3802816901408,
          "as10": 0.03943661971830986,
          "wa": 27.929577464788732,
          "ca": 11.028169014084508
        }
      },
      "sigma": {
        "finalScore": 54.26,
        "battleScore": 39.03,
        "coeff": 1,
        "matchCoef": 1.05,
        "gamesPlayed": 71,
        "rankIndex": 0,
        "det": {
          "g": 71,
          "time": 33588,
          "wr": 47.74647887323944,
          "el10": 14.549999999999999,
          "de10": 4.86056338028169,
          "dm10": 9826.760563380281,
          "he10": 0,
          "as10": 1.6967605633802816,
          "wa": 44.056338028169016,
          "ca": 0
        }
      },
      "sombra": {
        "finalScore": 40.23,
        "battleScore": 43.02,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 3,
        "rankIndex": 1,
        "det": {
          "g": 3,
          "time": 1551,
          "wr": 100,
          "el10": 13.266666666666666,
          "de10": 5.706666666666667,
          "dm10": 3221.6666666666665,
          "he10": 6997,
          "as10": 14.780000000000001,
          "wa": 24.666666666666668,
          "ca": 7.666666666666667
        }
      },
      "tracer": {
        "finalScore": 41.67,
        "battleScore": 42.49,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 20,
        "rankIndex": 0,
        "det": {
          "g": 20,
          "time": 10612,
          "wr": 56.8,
          "el10": 15.0655,
          "de10": 6.351999999999999,
          "dm10": 4881.55,
          "he10": 57.513,
          "as10": 0,
          "wa": 28.85,
          "ca": 9.1
        }
      },
      "winston": {
        "finalScore": 53.07,
        "battleScore": 46.15,
        "coeff": 1,
        "matchCoef": 1.15,
        "gamesPlayed": 150,
        "rankIndex": 0,
        "det": {
          "g": 150,
          "time": 78149,
          "wr": 55.54,
          "el10": 18.475,
          "de10": 4.9154,
          "dm10": 7910.92,
          "he10": 1956.3,
          "as10": 3.795,
          "wa": 47.96,
          "ca": 0
        }
      },
      "ana": {
        "finalScore": 48.34,
        "battleScore": 41.67,
        "coeff": 1.1,
        "matchCoef": 1.05,
        "gamesPlayed": 47,
        "rankIndex": 1,
        "det": {
          "g": 47,
          "time": 22112,
          "wr": 63,
          "el10": 8.09,
          "de10": 5.45,
          "dm10": 2814,
          "he10": 5204,
          "as10": 10.91,
          "wa": 55,
          "ca": 0
        }
      },
      "ashe": {
        "finalScore": 23.6,
        "battleScore": 27.76,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 0,
        "det": {
          "g": 4,
          "time": 1890,
          "wr": 5,
          "el10": 5.08,
          "de10": 7.94,
          "dm10": 4976,
          "he10": 0,
          "as10": 0,
          "wa": 36,
          "ca": 13
        }
      },
      "baptiste": {
        "finalScore": 34.74,
        "battleScore": 33.73,
        "coeff": 1.1,
        "matchCoef": 0.94,
        "gamesPlayed": 12,
        "rankIndex": 1,
        "det": {
          "g": 12,
          "time": 5698,
          "wr": 50,
          "el10": 9.58,
          "de10": 6.95,
          "dm10": 3495,
          "he10": 6064,
          "as10": 6.32,
          "wa": 27,
          "ca": 9
        }
      },
      "bastion": {
        "finalScore": 51.53,
        "battleScore": 35.4,
        "coeff": 1,
        "matchCoef": 1.01,
        "gamesPlayed": 33,
        "rankIndex": 0,
        "det": {
          "g": 33,
          "time": 16121,
          "wr": 41,
          "el10": 15.52,
          "de10": 6.7,
          "dm10": 7835,
          "he10": 152,
          "as10": 0.48,
          "wa": 25,
          "ca": 2
        }
      },
      "cassidy": {
        "finalScore": 34.8,
        "battleScore": 33.18,
        "coeff": 1,
        "matchCoef": 1.05,
        "gamesPlayed": 44,
        "rankIndex": 0,
        "det": {
          "g": 44,
          "time": 22014,
          "wr": 32,
          "el10": 13.36,
          "de10": 7.17,
          "dm10": 6786,
          "he10": 57.2,
          "as10": 0.76,
          "wa": 39,
          "ca": 11
        }
      },
      "dmon": {
        "finalScore": 29.07,
        "battleScore": 33.78,
        "coeff": 1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 2329,
          "wr": 25,
          "el10": 11.59,
          "de10": 7.21,
          "dm10": 6367,
          "he10": 121,
          "as10": 2.06,
          "wa": 32,
          "ca": 0
        }
      },
      "doctrine": {
        "finalScore": 33.28,
        "battleScore": 34.51,
        "coeff": 1.1,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 1,
        "det": {
          "g": 6,
          "time": 3162,
          "wr": 45,
          "el10": 11.77,
          "de10": 6.64,
          "dm10": 3896,
          "he10": 6439,
          "as10": 10.44,
          "wa": 52,
          "ca": 0
        }
      },
      "domina": {
        "finalScore": 29.43,
        "battleScore": 34.62,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 793,
          "wr": 44,
          "el10": 11.34,
          "de10": 7.56,
          "dm10": 7881,
          "he10": 1378,
          "as10": 0,
          "wa": 36,
          "ca": 10
        }
      },
      "doomfist": {
        "finalScore": 31.83,
        "battleScore": 37.44,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 675,
          "wr": 0,
          "el10": 13.34,
          "de10": 8,
          "dm10": 6315,
          "he10": 1537,
          "as10": 1.78,
          "wa": 31,
          "ca": 5
        }
      },
      "dva": {
        "finalScore": 30.54,
        "battleScore": 35.93,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 804,
          "wr": 0,
          "el10": 13.44,
          "de10": 7.47,
          "dm10": 4999,
          "he10": 851,
          "as10": 5.97,
          "wa": 24,
          "ca": 8
        }
      },
      "emre": {
        "finalScore": 39.25,
        "battleScore": 39.85,
        "coeff": 1,
        "matchCoef": 0.98,
        "gamesPlayed": 21,
        "rankIndex": 0,
        "det": {
          "g": 21,
          "time": 9502,
          "wr": 62,
          "el10": 15.72,
          "de10": 6.38,
          "dm10": 7330,
          "he10": 477,
          "as10": 0,
          "wa": 29,
          "ca": 11
        }
      },
      "genji": {
        "finalScore": 31.48,
        "battleScore": 37.03,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 915,
          "wr": 76,
          "el10": 9.18,
          "de10": 7.21,
          "dm10": 5657,
          "he10": 154,
          "as10": 0,
          "wa": 25,
          "ca": 13
        }
      },
      "hazard": {
        "finalScore": 31.34,
        "battleScore": 36.87,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 912,
          "wr": 34,
          "el10": 13.81,
          "de10": 8.55,
          "dm10": 7854,
          "he10": 1836,
          "as10": 2.63,
          "wa": 26,
          "ca": 11
        }
      },
      "hanzo": {
        "finalScore": 37.3,
        "battleScore": 43.88,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 0,
        "det": {
          "g": 1,
          "time": 246,
          "wr": 100,
          "el10": 12.19,
          "de10": 2.44,
          "dm10": 3676,
          "he10": 0,
          "as10": 2.44,
          "wa": 18,
          "ca": 6
        }
      },
      "illari": {
        "finalScore": 30.52,
        "battleScore": 32.65,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 1,
        "det": {
          "g": 1,
          "time": 673,
          "wr": 69,
          "el10": 1.78,
          "de10": 8.02,
          "dm10": 3085,
          "he10": 8178,
          "as10": 3.56,
          "wa": 32,
          "ca": 8
        }
      },
      "jetpack-cat": {
        "finalScore": 36.89,
        "battleScore": 38.97,
        "coeff": 1.1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 1,
        "det": {
          "g": 5,
          "time": 2439,
          "wr": 22,
          "el10": 9.59,
          "de10": 5.17,
          "dm10": 2868,
          "he10": 7928,
          "as10": 10.58,
          "wa": 34,
          "ca": 7
        }
      },
      "junkrat": {
        "finalScore": 28.09,
        "battleScore": 33.04,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 808,
          "wr": 8,
          "el10": 6.69,
          "de10": 5.94,
          "dm10": 5772,
          "he10": 0,
          "as10": 0.74,
          "wa": 22,
          "ca": 0
        }
      },
      "juno": {
        "finalScore": 48.36,
        "battleScore": 38.36,
        "coeff": 1.1,
        "matchCoef": 1.15,
        "gamesPlayed": 135,
        "rankIndex": 1,
        "det": {
          "g": 135,
          "time": 69276,
          "wr": 47,
          "el10": 11.25,
          "de10": 5.78,
          "dm10": 3265,
          "he10": 7163,
          "as10": 8.66,
          "wa": 37,
          "ca": 7
        }
      },
      "lifeweaver": {
        "finalScore": 44.52,
        "battleScore": 41.46,
        "coeff": 1.1,
        "matchCoef": 0.98,
        "gamesPlayed": 19,
        "rankIndex": 1,
        "det": {
          "g": 19,
          "time": 9076,
          "wr": 67,
          "el10": 8.26,
          "de10": 4.63,
          "dm10": 2127,
          "he10": 8987,
          "as10": 11.83,
          "wa": 25,
          "ca": 12
        }
      },
      "lucio": {
        "finalScore": 25.43,
        "battleScore": 27.19,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 1,
        "rankIndex": 1,
        "det": {
          "g": 1,
          "time": 379,
          "wr": 37,
          "el10": 0,
          "de10": 7.91,
          "dm10": 2042,
          "he10": 4831,
          "as10": 1.58,
          "wa": 15,
          "ca": 16
        }
      },
      "mauga": {
        "finalScore": 51.17,
        "battleScore": 36.48,
        "coeff": 1,
        "matchCoef": 0.94,
        "gamesPlayed": 7,
        "rankIndex": 0,
        "det": {
          "g": 7,
          "time": 3488,
          "wr": 41,
          "el10": 16.86,
          "de10": 7.74,
          "dm10": 9147,
          "he10": 1258,
          "as10": 6.02,
          "wa": 30,
          "ca": 7
        }
      },
      "mei": {
        "finalScore": 28.14,
        "battleScore": 33.11,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 1005,
          "wr": 57,
          "el10": 6.57,
          "de10": 7.76,
          "dm10": 4653,
          "he10": 1342,
          "as10": 1.19,
          "wa": 43,
          "ca": 0
        }
      },
      "mercy": {
        "finalScore": 29.94,
        "battleScore": 32.03,
        "coeff": 1.1,
        "matchCoef": 0.85,
        "gamesPlayed": 2,
        "rankIndex": 1,
        "det": {
          "g": 2,
          "time": 1024,
          "wr": 51,
          "el10": 1.17,
          "de10": 7.03,
          "dm10": 307,
          "he10": 5997,
          "as10": 9.96,
          "wa": 16,
          "ca": 22
        }
      },
      "mizuki": {
        "finalScore": 38.48,
        "battleScore": 37.08,
        "coeff": 1.1,
        "matchCoef": 0.94,
        "gamesPlayed": 13,
        "rankIndex": 1,
        "det": {
          "g": 13,
          "time": 6219,
          "wr": 61,
          "el10": 10.03,
          "de10": 6.27,
          "dm10": 3982,
          "he10": 6470,
          "as10": 8.78,
          "wa": 28,
          "ca": 11
        }
      },
      "orisa": {
        "finalScore": 41.48,
        "battleScore": 39.4,
        "coeff": 1,
        "matchCoef": 1.05,
        "gamesPlayed": 46,
        "rankIndex": 0,
        "det": {
          "g": 46,
          "time": 24088,
          "wr": 47,
          "el10": 17.24,
          "de10": 5.58,
          "dm10": 10219,
          "he10": 5.08,
          "as10": 3.24,
          "wa": 32,
          "ca": 10
        }
      },
      "ramattra": {
        "finalScore": 45.97,
        "battleScore": 32.81,
        "coeff": 1,
        "matchCoef": 0.92,
        "gamesPlayed": 2,
        "rankIndex": 0,
        "det": {
          "g": 2,
          "time": 886,
          "wr": 19,
          "el10": 9.49,
          "de10": 7.45,
          "dm10": 8676,
          "he10": 243,
          "as10": 0,
          "wa": 26,
          "ca": 8
        }
      },
      "reinhardt": {
        "finalScore": 31.08,
        "battleScore": 36.57,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 0,
        "det": {
          "g": 4,
          "time": 1983,
          "wr": 63,
          "el10": 9.08,
          "de10": 6.36,
          "dm10": 7083,
          "he10": 0,
          "as10": 0.3,
          "wa": 0,
          "ca": 0
        }
      },
      "roadhog": {
        "finalScore": 37.01,
        "battleScore": 41.59,
        "coeff": 1,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 0,
        "det": {
          "g": 7,
          "time": 3770,
          "wr": 65,
          "el10": 14.8,
          "de10": 5.41,
          "dm10": 6093,
          "he10": 4194,
          "as10": 3.5,
          "wa": 23,
          "ca": 13
        }
      },
      "shion": {
        "finalScore": 25.57,
        "battleScore": 29.71,
        "coeff": 1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 0,
        "det": {
          "g": 5,
          "time": 3030,
          "wr": 35,
          "el10": 6.93,
          "de10": 9.31,
          "dm10": 3762,
          "he10": 21.54,
          "as10": 0.99,
          "wa": 25,
          "ca": 7
        }
      },
      "sojourn": {
        "finalScore": 32.44,
        "battleScore": 38.16,
        "coeff": 1,
        "matchCoef": 0.85,
        "gamesPlayed": 4,
        "rankIndex": 0,
        "det": {
          "g": 4,
          "time": 1785,
          "wr": 21,
          "el10": 18.49,
          "de10": 8.07,
          "dm10": 9688,
          "he10": 0,
          "as10": 0,
          "wa": 29,
          "ca": 10
        }
      },
      "soldier-76": {
        "finalScore": 38.77,
        "battleScore": 36.19,
        "coeff": 1,
        "matchCoef": 1.07,
        "gamesPlayed": 57,
        "rankIndex": 0,
        "det": {
          "g": 57,
          "time": 28256,
          "wr": 48,
          "el10": 13.55,
          "de10": 6.01,
          "dm10": 6584,
          "he10": 1172,
          "as10": 0.62,
          "wa": 27,
          "ca": 10
        }
      },
      "symmetra": {
        "finalScore": 37.83,
        "battleScore": 43.17,
        "coeff": 1,
        "matchCoef": 0.88,
        "gamesPlayed": 6,
        "rankIndex": 0,
        "det": {
          "g": 6,
          "time": 3376,
          "wr": 95,
          "el10": 14.57,
          "de10": 5.51,
          "dm10": 5427,
          "he10": 138,
          "as10": 2.84,
          "wa": 31,
          "ca": 0
        }
      },
      "torbjorn": {
        "finalScore": 35.23,
        "battleScore": 39.6,
        "coeff": 1,
        "matchCoef": 0.89,
        "gamesPlayed": 7,
        "rankIndex": 0,
        "det": {
          "g": 7,
          "time": 3287,
          "wr": 62,
          "el10": 12.96,
          "de10": 4.75,
          "dm10": 6485,
          "he10": 0,
          "as10": 0.18,
          "wa": 18,
          "ca": 7
        }
      },
      "wuyang": {
        "finalScore": 39.16,
        "battleScore": 41.37,
        "coeff": 1.1,
        "matchCoef": 0.86,
        "gamesPlayed": 5,
        "rankIndex": 1,
        "det": {
          "g": 5,
          "time": 2118,
          "wr": 91,
          "el10": 10.2,
          "de10": 5.95,
          "dm10": 4692,
          "he10": 5485,
          "as10": 16.43,
          "wa": 28,
          "ca": 0
        }
      },
      "zarya": {
        "finalScore": 45.95,
        "battleScore": 37.12,
        "coeff": 1,
        "matchCoef": 0.92,
        "gamesPlayed": 3,
        "rankIndex": 0,
        "det": {
          "g": 3,
          "time": 1417,
          "wr": 52,
          "el10": 13.55,
          "de10": 4.66,
          "dm10": 8085,
          "he10": 0,
          "as10": 0.85,
          "wa": 28,
          "ca": 0
        }
      },
      "zenyatta": {
        "finalScore": 43.95,
        "battleScore": 43.01,
        "coeff": 1.1,
        "matchCoef": 0.93,
        "gamesPlayed": 11,
        "rankIndex": 1,
        "det": {
          "g": 11,
          "time": 5625,
          "wr": 72,
          "el10": 13.87,
          "de10": 6.19,
          "dm10": 5115,
          "he10": 5678,
          "as10": 15.79,
          "wa": 26,
          "ca": 14
        }
      }
    },
    "recent": [
      {
        "d": "2026-09-20",
        "g": {},
        "m": 897,
        "w": 450,
        "l": 447,
        "t": 461425,
        "k": 2.37,
        "r": {
          "Tank": "silver-5",
          "Damage": null,
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-09-21",
        "g": {
          "kiriko": 3,
          "sigma": 4,
          "winston": 7
        },
        "m": 922,
        "w": 460,
        "l": 462,
        "t": 475727,
        "k": 2.39,
        "r": {
          "Tank": "bronze-1",
          "Damage": null,
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-09-22",
        "g": {
          "reaper": 1,
          "sigma": 1,
          "winston": 1,
          "baptiste": 1
        },
        "m": 926,
        "w": 463,
        "l": 463,
        "t": 477742,
        "k": 2.4,
        "r": {
          "Tank": "bronze-1",
          "Damage": null,
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-09-23",
        "g": {
          "kiriko": 5
        },
        "m": 931,
        "w": 464,
        "l": 467,
        "t": 480771,
        "k": 2.4,
        "r": {
          "Tank": "bronze-1",
          "Damage": null,
          "Support": "bronze-1"
        }
      },
      {
        "d": "2026-09-24",
        "g": {
          "ana": 2,
          "bastion": 1,
          "cassidy": 2,
          "emre": 1,
          "juno": 1,
          "kiriko": 1,
          "orisa": 2,
          "reaper": 1,
          "sigma": 9,
          "winston": 9,
          "baptiste": 2,
          "genji": 1,
          "junkrat": 1,
          "mizuki": 1,
          "shion": 1,
          "symmetra": 1
        },
        "m": 967,
        "w": 479,
        "l": 488,
        "t": 498361,
        "k": 2.41,
        "r": {
          "Tank": "bronze-1",
          "Damage": null,
          "Support": "bronze-1"
        }
      },
      {
        "d": "2026-09-25",
        "g": {
          "ana": 6,
          "cassidy": 1,
          "kiriko": 5,
          "moira": 1,
          "orisa": 1,
          "sigma": 4,
          "winston": 4,
          "baptiste": 1,
          "hazard": 1,
          "mauga": 1,
          "mizuki": 1,
          "roadhog": 2
        },
        "m": 995,
        "w": 499,
        "l": 496,
        "t": 511255,
        "k": 2.44,
        "r": {
          "Tank": "bronze-1",
          "Damage": null,
          "Support": "bronze-1"
        }
      },
      {
        "d": "2026-09-26",
        "g": {
          "ana": 2,
          "cassidy": 1,
          "kiriko": 4,
          "orisa": 2,
          "reaper": 1,
          "sigma": 2,
          "winston": 2,
          "roadhog": 1
        },
        "m": 1010,
        "w": 506,
        "l": 504,
        "t": 520035,
        "k": 2.45,
        "r": {
          "Tank": "bronze-1",
          "Damage": null,
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-09-27",
        "g": {
          "kiriko": 4,
          "orisa": 1,
          "sigma": 1,
          "winston": 5,
          "lifeweaver": 1,
          "soldier-76": 2,
          "tracer": 1
        },
        "m": 1025,
        "w": 519,
        "l": 506,
        "t": 529953,
        "k": 2.47,
        "r": {
          "Tank": "bronze-1",
          "Damage": null,
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-09-28",
        "g": {
          "ana": 1,
          "kiriko": 7,
          "moira": 1,
          "sigma": 1,
          "winston": 2,
          "baptiste": 1
        },
        "m": 1038,
        "w": 527,
        "l": 511,
        "t": 539714,
        "k": 2.48,
        "r": {
          "Tank": "bronze-1",
          "Damage": null,
          "Support": "silver-4"
        }
      },
      {
        "d": "2026-09-29",
        "g": {},
        "m": 1061,
        "w": 534,
        "l": 527,
        "t": 551094,
        "k": 2.45,
        "r": {
          "Tank": "bronze-1",
          "Damage": null,
          "Support": "silver-4"
        }
      },
      {
        "d": "2026-09-30",
        "g": {},
        "m": 1070,
        "w": 537,
        "l": 533,
        "t": 557011,
        "k": 2.45,
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-4"
        }
      },
      {
        "d": "2026-10-01",
        "g": {},
        "m": 1077,
        "w": 539,
        "l": 538,
        "t": 561082,
        "k": 2.44,
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-02",
        "g": {},
        "m": 1108,
        "w": 561,
        "l": 547,
        "t": 576068,
        "k": 2.47,
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-03",
        "g": {},
        "m": 1119,
        "w": 567,
        "l": 552,
        "t": 581089,
        "k": 2.48,
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-04",
        "g": {},
        "m": 1142,
        "w": 584,
        "l": 558,
        "t": 595309,
        "k": 2.48,
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-05",
        "g": {},
        "m": 1144,
        "w": 585,
        "l": 559,
        "t": 596597,
        "k": 2.49,
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-06",
        "g": {},
        "m": 1148,
        "w": 588,
        "l": 560,
        "t": 598601,
        "k": 2.49,
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-07",
        "g": {},
        "m": 1148,
        "w": 588,
        "l": 560,
        "t": 598601,
        "k": 2.49,
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-08",
        "g": {},
        "m": 1171,
        "w": 604,
        "l": 567,
        "t": 610946,
        "k": 2.5,
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-09",
        "g": {},
        "m": 1185,
        "w": 611,
        "l": 574,
        "t": 618874,
        "k": 2.5,
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-10",
        "g": {},
        "m": 1010,
        "w": 527,
        "l": 483,
        "t": 504187,
        "k": 2.45,
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-11",
        "g": {},
        "m": 1010,
        "w": 527,
        "l": 483,
        "t": 504187,
        "k": 2.45,
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-12",
        "g": {},
        "m": 1018,
        "w": 530,
        "l": 488,
        "t": 507958,
        "k": 2.45,
        "tot": {
          "e": 11022,
          "a": 930,
          "dd": 4883,
          "dm": 5983695,
          "he": 3229493
        },
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-13",
        "g": {
          "tracer": 2,
          "bastion": 1,
          "sigma": 3,
          "winston": 1,
          "doctrine": 1,
          "ramattra": 1,
          "reinhardt": 1,
          "roadhog": 1
        },
        "m": 1029,
        "w": 533,
        "l": 496,
        "t": 513572,
        "k": 2.44,
        "tot": {
          "e": 11144,
          "a": 934,
          "dd": 4953,
          "dm": 6057610,
          "he": 3239989
        },
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-14",
        "g": {
          "sigma": 1,
          "winston": 2,
          "cassidy": 2,
          "kiriko": 1,
          "tracer": 3
        },
        "m": 1038,
        "w": 536,
        "l": 502,
        "t": 517722,
        "k": 2.43,
        "tot": {
          "e": 11229,
          "a": 937,
          "dd": 4998,
          "dm": 6102514,
          "he": 3244645
        },
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-15",
        "g": {
          "kiriko": 1,
          "tracer": 1,
          "winston": 2,
          "jetpack-cat": 1,
          "lifeweaver": 1
        },
        "m": 1044,
        "w": 538,
        "l": 506,
        "t": 521980,
        "k": 2.44,
        "tot": {
          "e": 11339,
          "a": 947,
          "dd": 5038,
          "dm": 6145949,
          "he": 3274761
        },
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      },
      {
        "d": "2026-10-16",
        "g": {},
        "m": 1044,
        "w": 538,
        "l": 506,
        "t": 521980,
        "k": 2.44,
        "tot": {
          "e": 11339,
          "a": 947,
          "dd": 5038,
          "dm": 6145949,
          "he": 3274761
        },
        "r": {
          "Tank": "bronze-1",
          "Damage": "bronze-1",
          "Support": "silver-5"
        }
      }
    ]
  }
];
