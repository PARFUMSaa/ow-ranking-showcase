'use strict';
/* =====================================================================
 * チームアナリスト用データ(ルールベース)
 *   - 相性は「タグ(役割・射程・機動力などの性質)× タグ」のルールで表現する。
 *   - 勝率データではなく、一般的なカウンター関係を整理した“目安”。
 *     数値(v)や理由(why)は自由に編集できる(ここを直せばサイトの分析結果が変わる)。
 *   - v の目安: 2.0=かなり有利 / 1.5=有利 / 1.0=やや有利 / 0.5=わずかに有利
 *               -1.0/-1.5/-2.0 は同じ意味で不利。
 * =================================================================== */

/* タグの日本語ラベル(画面の理由表示に使う) */
const AZ_TAG_LABEL = {
  hitscan: 'ヒットスキャン', projectile: '弾道', beam: 'ビーム', sniper: '狙撃',
  poke: '遠距離ポーク', dive: 'ダイブ', rush: '前押し', brawl: '近距離戦',
  flyer: '飛行', flanker: 'フランカー', mobile: '機動力', immobile: '機動力が低い',
  shield: 'バリア', barrierBreak: 'バリア破壊', cc: '行動阻害', antiDive: 'ダイブ受け',
  antiheal: '回復阻害', sustain: '自己回復', burst: '瞬間火力', aoe: '範囲攻撃',
  ultWipe: '複数キルウルト', cleanse: '状態異常解除', immortal: '無敵・蘇生',
  matrix: '飛来物を消す', deflect: '弾き', turret: '設置物', staticHeal: '設置回復',
  longHeal: '遠距離回復', shortHeal: '近距離回復', speed: '速度ブースト',
  wall: '壁・分断', boop: 'ノックバック', hack: 'ハック', pick: '単体キル'
};

/* 各ヒーローの性質タグ。迷ったら足す/消すだけで分析結果が変わる */
const AZ_HERO_TAGS = {
  /* --- Tank --- */
  dva:            ['matrix', 'dive', 'mobile', 'burst', 'ultWipe'],
  doomfist:       ['dive', 'mobile', 'cc', 'burst', 'brawl'],
  hazard:         ['dive', 'mobile', 'cc', 'wall', 'brawl'],
  'junker-queen': ['rush', 'brawl', 'sustain', 'antiheal', 'cc', 'speed'],
  mauga:          ['rush', 'brawl', 'sustain', 'barrierBreak', 'burst'],
  orisa:          ['poke', 'shield', 'cc', 'antiDive', 'sustain'],
  ramattra:       ['shield', 'poke', 'rush', 'brawl', 'cc'],
  reinhardt:      ['shield', 'rush', 'brawl', 'burst', 'ultWipe', 'cc'],
  roadhog:        ['sustain', 'pick', 'cc', 'burst', 'immobile'],
  sigma:          ['shield', 'poke', 'cc', 'aoe', 'ultWipe', 'matrix', 'immobile'],
  winston:        ['dive', 'mobile', 'shield', 'beam', 'brawl', 'ultWipe'],
  'wrecking-ball':['dive', 'mobile', 'cc', 'aoe', 'ultWipe', 'shield', 'boop'],
  zarya:          ['beam', 'brawl', 'shield', 'sustain', 'ultWipe', 'cleanse'],

  /* --- Damage --- */
  ashe:           ['hitscan', 'sniper', 'poke', 'burst', 'boop'],
  bastion:        ['hitscan', 'barrierBreak', 'burst', 'aoe', 'immobile', 'sustain'],
  cassidy:        ['hitscan', 'burst', 'cc', 'antiDive', 'poke'],
  echo:           ['flyer', 'projectile', 'dive', 'mobile', 'burst', 'ultWipe'],
  freja:          ['projectile', 'mobile', 'poke', 'burst', 'dive'],
  genji:          ['flanker', 'mobile', 'dive', 'deflect', 'burst', 'ultWipe'],
  hanzo:          ['projectile', 'sniper', 'pick', 'burst', 'barrierBreak'],
  junkrat:        ['projectile', 'barrierBreak', 'aoe', 'cc', 'antiDive', 'ultWipe', 'immobile'],
  mei:            ['beam', 'cc', 'wall', 'antiDive', 'sustain', 'immobile', 'ultWipe'],
  pharah:         ['flyer', 'projectile', 'aoe', 'boop', 'burst', 'mobile'],
  reaper:         ['flanker', 'brawl', 'burst', 'sustain', 'ultWipe', 'immobile'],
  sojourn:        ['hitscan', 'poke', 'burst', 'mobile', 'pick'],
  'soldier-76':   ['hitscan', 'poke', 'sustain', 'mobile', 'barrierBreak'],
  sombra:         ['flanker', 'mobile', 'hack', 'burst', 'pick'],
  symmetra:       ['beam', 'turret', 'barrierBreak', 'cc', 'immobile', 'aoe'],
  torbjorn:       ['projectile', 'turret', 'antiDive', 'barrierBreak', 'burst'],
  tracer:         ['flanker', 'mobile', 'dive', 'burst', 'pick'],
  venture:        ['dive', 'mobile', 'flanker', 'burst', 'cc'],
  widowmaker:     ['hitscan', 'sniper', 'pick', 'burst', 'immobile'],

  /* --- Support --- */
  ana:            ['hitscan', 'sniper', 'antiheal', 'cc', 'pick', 'longHeal', 'immobile'],
  baptiste:       ['hitscan', 'longHeal', 'sustain', 'immortal', 'aoe', 'immobile'],
  brigitte:       ['brawl', 'antiDive', 'shortHeal', 'shield', 'cc', 'sustain', 'boop'],
  illari:         ['hitscan', 'poke', 'staticHeal', 'longHeal', 'burst', 'mobile'],
  juno:           ['mobile', 'longHeal', 'speed', 'aoe', 'poke'],
  kiriko:         ['projectile', 'cleanse', 'shortHeal', 'mobile', 'burst', 'immortal'],
  lifeweaver:     ['longHeal', 'immortal', 'sustain', 'immobile'],
  lucio:          ['shortHeal', 'speed', 'boop', 'mobile', 'aoe', 'sustain'],
  mercy:          ['longHeal', 'immortal', 'mobile', 'flyer', 'sustain'],
  moira:          ['beam', 'shortHeal', 'sustain', 'mobile'],
  wuyang:         ['longHeal', 'aoe', 'sustain', 'mobile'],
  zenyatta:       ['projectile', 'poke', 'aoe', 'immobile', 'burst', 'sustain'],

  /* --- 新しいヒーロー(タグは暫定。AZ_TENTATIVE に載せると画面に注記が出る) --- */
  anran:          ['projectile', 'burst', 'mobile'],
  dmon:           ['brawl', 'sustain'],
  doctrine:       ['longHeal', 'sustain'],
  domina:         ['poke', 'shield'],
  emre:           ['hitscan', 'burst'],
  'jetpack-cat':  ['flyer', 'mobile', 'longHeal'],
  mizuki:         ['shortHeal', 'mobile'],
  shion:          ['flanker', 'mobile', 'burst'],
  sierra:         ['hitscan', 'mobile'],
  vendetta:       ['brawl', 'mobile', 'burst']
};

/* タグが暫定(実装が新しく情報が薄い)ヒーロー: 画面上で注記する */
const AZ_TENTATIVE = ['anran', 'dmon', 'doctrine', 'domina', 'emre', 'jetpack-cat', 'mizuki', 'shion', 'sierra', 'vendetta'];

/* タグ相性: 自分のタグ a が 相手のタグ b に対して有利(+) / 不利(−) */
const AZ_COUNTER_TAG = [
  /* 射程・当てやすさ */
  { a: 'hitscan', b: 'flyer', v: 2.5, why: '飛行に当てやすい(飛行対策の軸)' },
  { a: 'sniper', b: 'flyer', v: 2.0, why: '飛行を狙い撃てる' },
  { a: 'flyer', b: 'brawl', v: 1.5, why: '近距離構成に一方的に撃てる' },
  { a: 'flyer', b: 'shortHeal', v: 1.0, why: '近距離ヒーラーに触れられない' },
  { a: 'brawl', b: 'flyer', v: -1.5, why: '飛行に手が届かない' },
  { a: 'aoe', b: 'flyer', v: -1.0, why: '範囲攻撃が飛行に当たりにくい' },
  { a: 'poke', b: 'rush', v: 1.5, why: '距離を保ったまま削れる' },
  { a: 'poke', b: 'brawl', v: 1.5, why: '近距離構成を近づく前に削れる' },
  { a: 'rush', b: 'poke', v: 1.5, why: '射線に一気に詰められる' },
  { a: 'rush', b: 'sniper', v: 1.0, why: '狙撃体勢に詰められる' },
  { a: 'sustain', b: 'poke', v: 1.0, why: '削りに耐えて前へ出られる' },
  { a: 'poke', b: 'dive', v: -1.0, why: '飛び込まれると脆い' },
  { a: 'immobile', b: 'dive', v: -1.5, why: '飛び込みに逃げられない' },
  { a: 'immobile', b: 'flanker', v: -1.5, why: '側面から狙われて逃げられない' },
  { a: 'immobile', b: 'sniper', v: -1.0, why: '射線から動けない' },
  { a: 'immobile', b: 'pick', v: -1.0, why: '単体キルを狙われやすい' },

  /* ダイブ / フランカー と その受け */
  { a: 'dive', b: 'sniper', v: 2.0, why: '狙撃体勢に一気に詰められる' },
  { a: 'dive', b: 'poke', v: 1.5, why: '遠距離構成の体勢を崩せる' },
  { a: 'dive', b: 'immobile', v: 1.5, why: '動けない相手を狙える' },
  { a: 'dive', b: 'longHeal', v: 1.0, why: '回復役に直接届く' },
  { a: 'dive', b: 'antiDive', v: -1.5, why: 'ダイブ受けが厚い' },
  { a: 'flanker', b: 'sniper', v: 1.5, why: '狙撃を側面から潰せる' },
  { a: 'flanker', b: 'longHeal', v: 1.0, why: '後衛の回復役を直接狙える' },
  { a: 'flanker', b: 'antiDive', v: -1.5, why: 'フランカー対策が刺さる' },
  { a: 'antiDive', b: 'flanker', v: 1.5, why: 'フランカーを受け止められる' },
  { a: 'antiDive', b: 'dive', v: 1.5, why: '飛び込みを返り討ちにできる' },
  { a: 'turret', b: 'flanker', v: 1.0, why: '設置物がフランカーを牽制する' },
  { a: 'turret', b: 'dive', v: 1.0, why: '飛び込みに設置物が刺さる' },
  { a: 'mobile', b: 'cc', v: -1.0, why: '行動阻害で止められる' },

  /* 行動阻害・回復阻害(※「機動力」は該当ヒーローが多いので弱めに。特定ヒーロー相手はAZ_COUNTER_PAIRで強く) */
  { a: 'cc', b: 'mobile', v: 0.75, why: '機動力の高い相手を止められる' },
  { a: 'cc', b: 'dive', v: 1.5, why: '飛び込みを止められる' },
  { a: 'antiheal', b: 'sustain', v: 2.0, why: '自己回復を無効化できる' },
  { a: 'antiheal', b: 'shortHeal', v: 1.5, why: '近距離ヒーラーの回復を止められる' },
  { a: 'sustain', b: 'antiheal', v: -2.0, why: '回復を止められて弱い' },
  { a: 'shortHeal', b: 'antiheal', v: -1.5, why: '回復阻害に弱い' },
  { a: 'cleanse', b: 'cc', v: 1.5, why: '行動阻害を無効化できる' },
  { a: 'cleanse', b: 'antiheal', v: 1.5, why: '回復阻害を消せる' },
  { a: 'cleanse', b: 'ultWipe', v: 1.0, why: '範囲ウルトの起点を消せる' },

  /* 弾・バリア */
  { a: 'beam', b: 'matrix', v: 1.5, why: 'ビームは飛来物を消す能力を無視できる' },
  { a: 'beam', b: 'deflect', v: 1.5, why: 'ビームは弾かれない' },
  { a: 'matrix', b: 'projectile', v: 1.5, why: '弾道攻撃を消せる' },
  { a: 'matrix', b: 'burst', v: 1.0, why: 'キルにつながる弾を消せる' },
  { a: 'deflect', b: 'projectile', v: 1.5, why: '弾道攻撃を跳ね返せる' },
  { a: 'deflect', b: 'hitscan', v: 1.0, why: '単発ヒットスキャンを弾ける' },
  { a: 'projectile', b: 'matrix', v: -1.5, why: '弾を消される' },
  { a: 'projectile', b: 'deflect', v: -1.5, why: '弾を跳ね返される' },
  { a: 'burst', b: 'matrix', v: -1.0, why: '決定打を消される' },
  { a: 'barrierBreak', b: 'shield', v: 1.5, why: 'バリアを割って前に出られる' },
  { a: 'shield', b: 'barrierBreak', v: -1.5, why: 'バリアを割られて弱い' },
  { a: 'wall', b: 'dive', v: 1.0, why: '壁で飛び込みを分断できる' },
  { a: 'wall', b: 'mobile', v: 1.0, why: '壁で機動力の高い相手を止められる' },
  { a: 'hack', b: 'mobile', v: 1.0, why: 'ハックで機動力とアビリティを止められる' },
  { a: 'hack', b: 'dive', v: 1.5, why: 'ハックで飛び込みを無力化できる' },
  { a: 'hack', b: 'ultWipe', v: 1.5, why: 'EMPでウルトの起点を止められる' },

  /* 決定力・耐久 */
  { a: 'immortal', b: 'burst', v: 1.5, why: '無敵・蘇生で瞬間火力を無効化できる' },
  { a: 'immortal', b: 'pick', v: 1.5, why: '単体キルを無効化できる' },
  { a: 'burst', b: 'immortal', v: -1.5, why: '無敵・蘇生で決定打を無効化される' },
  { a: 'pick', b: 'immortal', v: -1.5, why: '単体キルを無効化される' },
  { a: 'cc', b: 'cleanse', v: -1.0, why: 'クレンズで行動阻害を消される' },
  { a: 'antiheal', b: 'cleanse', v: -1.0, why: 'クレンズで回復阻害を消される' },
  { a: 'hitscan', b: 'deflect', v: -0.5, why: '弾かれることがある' },
  { a: 'sniper', b: 'rush', v: -1.0, why: '詰められて射線を取れない' },
  { a: 'pick', b: 'longHeal', v: 1.0, why: '回復役を単体で仕留められる' },
  { a: 'aoe', b: 'staticHeal', v: 1.0, why: '設置回復をまとめて壊せる' },
  { a: 'ultWipe', b: 'sustain', v: 1.0, why: '範囲ウルトで自己回復ごと倒せる' },
  { a: 'ultWipe', b: 'cleanse', v: -1.0, why: 'ウルトの起点を消される' },
  { a: 'sniper', b: 'dive', v: -1.5, why: '飛び込みに弱い' },
  { a: 'sniper', b: 'flanker', v: -1.5, why: '側面から狙われると弱い' },
  { a: 'shortHeal', b: 'sniper', v: -1.0, why: '射線から狙われやすい' },
  { a: 'longHeal', b: 'flanker', v: -1.0, why: 'フランカーに狙われやすい' }
];

/* ヒーロー単位の明確な相性(a が b に対して有利なら正) */
const AZ_COUNTER_PAIR = [
  /* ソンブラ: ハックで機動力・アビリティを止める */
  { a: 'sombra', b: 'doomfist', v: 2.0, why: 'ハックで機動力を止められる' },
  { a: 'sombra', b: 'wrecking-ball', v: 2.0, why: 'ハックで機動力を止められる' },
  { a: 'sombra', b: 'genji', v: 1.5, why: 'ハックでブレードを止められる' },
  { a: 'sombra', b: 'tracer', v: 1.5, why: 'ハックで機動力を止められる' },
  { a: 'sombra', b: 'pharah', v: 1.5, why: 'ハックで飛行を落とせる' },
  { a: 'sombra', b: 'sigma', v: 1.0, why: 'ハックでグラスプ/シールドを封じられる' },
  /* アナ: アンチヒールとスリープ */
  { a: 'ana', b: 'roadhog', v: 2.0, why: 'アンチヒールとスリープが刺さる' },
  { a: 'ana', b: 'mauga', v: 1.5, why: 'アンチヒールで自己回復を止められる' },
  { a: 'ana', b: 'reaper', v: 1.5, why: 'アンチヒールでライフスティールを無効化' },
  { a: 'ana', b: 'moira', v: 1.0, why: 'アンチヒールで回復を止められる' },
  { a: 'ana', b: 'mercy', v: 1.0, why: '回復阻害で蘇生体勢を崩せる' },
  /* ザリア: ビームでマトリックス/弾きを無視 */
  { a: 'zarya', b: 'dva', v: 2.0, why: 'ビームはマトリックスを貫通する' },
  { a: 'zarya', b: 'genji', v: 1.5, why: 'ビームは弾かれない' },
  { a: 'zarya', b: 'sigma', v: 1.0, why: 'ビームはグラスプで消せない' },
  /* ウィンストン: ダイブで後衛と機動力に強い */
  { a: 'winston', b: 'genji', v: 1.5, why: '範囲ビームで機動力の高い相手を追える' },
  { a: 'winston', b: 'widowmaker', v: 2.0, why: '狙撃に一気に詰められる' },
  { a: 'winston', b: 'hanzo', v: 1.5, why: '狙撃に詰められる' },
  { a: 'winston', b: 'zenyatta', v: 2.0, why: '動けない後衛を直接狙える' },
  { a: 'winston', b: 'ana', v: 1.5, why: '後衛の回復役を狙える' },
  /* D.Va: 飛来物を消す */
  { a: 'dva', b: 'pharah', v: 1.5, why: 'ロケットをマトリックスで消せる' },
  { a: 'dva', b: 'junkrat', v: 1.5, why: 'グレネードを消せる' },
  { a: 'dva', b: 'bastion', v: 1.5, why: '弾を消して無力化できる' },
  { a: 'dva', b: 'hanzo', v: 1.0, why: '矢を消せる' },
  { a: 'dva', b: 'reaper', v: 1.0, why: '至近距離の弾を消せる' },
  /* ファラ: 近距離・射線の低い構成に一方的 */
  { a: 'pharah', b: 'reaper', v: 2.0, why: '近距離構成に一方的に撃てる' },
  { a: 'pharah', b: 'junkrat', v: 1.5, why: '弾道が届かない相手に一方的' },
  { a: 'pharah', b: 'mei', v: 1.5, why: '近距離の相手に触れさせない' },
  { a: 'pharah', b: 'symmetra', v: 2.0, why: '設置型の相手に一方的' },
  { a: 'pharah', b: 'torbjorn', v: 1.5, why: 'タレットごと処理できる' },
  { a: 'pharah', b: 'brigitte', v: 1.5, why: '近距離サポートに触れさせない' },
  { a: 'pharah', b: 'reinhardt', v: 1.5, why: '近距離タンクを一方的に削れる' },
  /* ヒットスキャン: 飛行に強い */
  { a: 'cassidy', b: 'tracer', v: 1.5, why: 'フラッシュバン+高火力で止められる' },
  { a: 'cassidy', b: 'genji', v: 1.5, why: '行動阻害と高火力で抑えられる' },
  { a: 'cassidy', b: 'pharah', v: 1.5, why: 'ヒットスキャンで飛行に当たる' },
  { a: 'cassidy', b: 'echo', v: 1.5, why: 'ヒットスキャンで飛行に当たる' },
  { a: 'soldier-76', b: 'pharah', v: 1.5, why: 'ヒットスキャンで飛行に当たる' },
  { a: 'soldier-76', b: 'echo', v: 1.5, why: 'ヒットスキャンで飛行に当たる' },
  { a: 'ashe', b: 'pharah', v: 1.5, why: 'ヒットスキャンで飛行に当たる' },
  { a: 'ashe', b: 'echo', v: 1.5, why: 'ヒットスキャンで飛行に当たる' },
  /* ウィドウ: 射線で動けない相手を仕留める */
  { a: 'widowmaker', b: 'pharah', v: 1.5, why: '飛行を狙い撃てる' },
  { a: 'widowmaker', b: 'mercy', v: 1.5, why: '回復役を射線で仕留められる' },
  { a: 'widowmaker', b: 'zenyatta', v: 1.5, why: '動けない後衛を仕留められる' },
  { a: 'widowmaker', b: 'bastion', v: 1.5, why: '固定砲台を射線で処理できる' },
  { a: 'widowmaker', b: 'ana', v: 1.0, why: '回復役を射線で狙える' },
  /* フランカー: 後衛を狙う */
  { a: 'genji', b: 'widowmaker', v: 1.5, why: '狙撃を側面から潰せる' },
  { a: 'genji', b: 'bastion', v: 1.5, why: '弾きで反撃しつつ詰められる' },
  { a: 'genji', b: 'zenyatta', v: 1.5, why: '動けない後衛を刈り取れる' },
  { a: 'genji', b: 'ana', v: 1.5, why: '後衛の回復役を狙える' },
  { a: 'genji', b: 'torbjorn', v: 1.0, why: 'タレットを処理してから詰められる' },
  { a: 'tracer', b: 'widowmaker', v: 1.5, why: '狙撃の裏に回れる' },
  { a: 'tracer', b: 'zenyatta', v: 1.5, why: '動けない後衛を狩れる' },
  { a: 'tracer', b: 'ana', v: 1.5, why: '後衛の回復役を狩れる' },
  { a: 'tracer', b: 'mercy', v: 1.5, why: '回復役を追い回せる' },
  { a: 'reaper', b: 'winston', v: 1.5, why: '大柄な相手に至近距離で高火力' },
  { a: 'reaper', b: 'roadhog', v: 1.0, why: '大柄な相手に火力を出しやすい' },
  { a: 'doomfist', b: 'zenyatta', v: 2.0, why: '動けない後衛を直接狙える' },
  { a: 'doomfist', b: 'ana', v: 1.5, why: '後衛の回復役を狙える' },
  { a: 'doomfist', b: 'widowmaker', v: 1.5, why: '狙撃に飛び込める' },
  { a: 'wrecking-ball', b: 'zenyatta', v: 1.5, why: '動けない後衛を狙える' },
  { a: 'wrecking-ball', b: 'widowmaker', v: 1.5, why: '狙撃に飛び込める' },
  /* ダイブ受け・フランカー対策 */
  { a: 'brigitte', b: 'tracer', v: 2.0, why: '接近を返り討ちにできる' },
  { a: 'brigitte', b: 'genji', v: 2.0, why: '接近を返り討ちにできる' },
  { a: 'brigitte', b: 'reaper', v: 1.5, why: '近距離戦で押し返せる' },
  { a: 'brigitte', b: 'winston', v: 1.5, why: '飛び込みを受け止められる' },
  { a: 'brigitte', b: 'dva', v: 1.5, why: '飛び込みを受け止められる' },
  { a: 'brigitte', b: 'sombra', v: 1.5, why: '接近してくる相手を弾ける' },
  { a: 'brigitte', b: 'doomfist', v: 1.5, why: '飛び込みを止められる' },
  { a: 'brigitte', b: 'wrecking-ball', v: 1.5, why: '飛び込みを止められる' },
  { a: 'moira', b: 'genji', v: 1.5, why: 'エイム不要のビームとフェードで対応できる' },
  { a: 'moira', b: 'sombra', v: 1.5, why: 'フェードで逃げつつビームで追える' },
  { a: 'moira', b: 'tracer', v: 1.0, why: 'ビームとフェードで対応できる' },
  { a: 'moira', b: 'winston', v: 1.0, why: '自己回復で粘れる' },
  { a: 'mei', b: 'dva', v: 1.5, why: '壁と凍結で飛び込みを封じられる' },
  { a: 'mei', b: 'genji', v: 1.0, why: '凍結で機動力を止められる' },
  { a: 'mei', b: 'tracer', v: 1.0, why: '凍結で機動力を止められる' },
  { a: 'mei', b: 'winston', v: 1.0, why: '壁で分断できる' },
  { a: 'torbjorn', b: 'tracer', v: 1.5, why: 'タレットがフランカーを牽制する' },
  { a: 'torbjorn', b: 'genji', v: 1.0, why: 'タレットが接近を嫌がる' },
  { a: 'symmetra', b: 'dva', v: 1.0, why: 'ビームはマトリックスを無視できる' },
  { a: 'symmetra', b: 'genji', v: 1.0, why: 'ビームは弾かれない' },
  /* クレンズ・無敵で無効化 */
  { a: 'kiriko', b: 'ana', v: 1.5, why: '鈴でアンチヒールとスリープを消せる' },
  { a: 'kiriko', b: 'junker-queen', v: 1.0, why: '鈴で出血を消せる' },
  { a: 'kiriko', b: 'mei', v: 1.0, why: '鈴で凍結を消せる' },
  { a: 'kiriko', b: 'reinhardt', v: 1.0, why: '鈴でダウンを防げる' },
  /* タンク同士の分かりやすい有利 */
  { a: 'orisa', b: 'roadhog', v: 1.5, why: 'フォーティファイでフックを無効化できる' },
  { a: 'orisa', b: 'doomfist', v: 1.5, why: 'ジャベリンで飛び込みを止められる' },
  { a: 'bastion', b: 'reinhardt', v: 1.5, why: 'バリアを溶かせる' },
  { a: 'bastion', b: 'winston', v: 1.5, why: '近距離で高火力を叩き込める' },
  { a: 'bastion', b: 'roadhog', v: 1.0, why: '大柄な相手に高火力' },
  { a: 'mauga', b: 'roadhog', v: 1.5, why: '自己回復と高火力で押し切れる' },
  { a: 'mauga', b: 'winston', v: 1.5, why: '近距離で焼き切れる' },
  { a: 'roadhog', b: 'zenyatta', v: 1.5, why: 'フックで動けない後衛を仕留められる' },
  { a: 'roadhog', b: 'bastion', v: 1.5, why: 'フックで固定砲台を崩せる' },
  { a: 'roadhog', b: 'widowmaker', v: 1.0, why: 'フックで狙撃を引き寄せられる' },
  { a: 'junkrat', b: 'reinhardt', v: 1.0, why: 'バリア破壊と罠が刺さる' },
  { a: 'zenyatta', b: 'roadhog', v: 1.0, why: '不和のオーブで大柄な相手を削れる' },
  { a: 'zenyatta', b: 'winston', v: 1.0, why: '不和のオーブで飛び込みを返り討ちにできる' }
];

/* 味方同士の相性(タグ, 対称) */
const AZ_SYNERGY_TAG = [
  { a: 'dive', b: 'dive', v: 1.5, why: '同じタイミングで飛び込める' },
  { a: 'dive', b: 'mobile', v: 1.0, why: '機動力の高い味方と合わせやすい' },
  { a: 'dive', b: 'flanker', v: 1.0, why: '一緒に後衛へ入れる' },
  { a: 'rush', b: 'speed', v: 1.5, why: '速度ブーストで一気に詰められる' },
  { a: 'rush', b: 'rush', v: 1.0, why: '同じテンポで押し込める' },
  { a: 'rush', b: 'brawl', v: 1.0, why: '近距離戦で噛み合う' },
  { a: 'brawl', b: 'shortHeal', v: 1.0, why: '近距離で回復を受けながら戦える' },
  { a: 'brawl', b: 'speed', v: 1.0, why: '前へ出る速度を補える' },
  { a: 'brawl', b: 'sustain', v: 1.0, why: '前で粘れる' },
  { a: 'poke', b: 'poke', v: 1.5, why: '同じ射線から一斉に削れる' },
  { a: 'poke', b: 'shield', v: 1.0, why: '盾の後ろから安全に撃てる' },
  { a: 'poke', b: 'longHeal', v: 1.0, why: '遠距離から回復を届けられる' },
  { a: 'sniper', b: 'shield', v: 0.5, why: '盾の後ろから狙える' },
  { a: 'hitscan', b: 'poke', v: 0.5, why: '同じ射線を共有できる' },
  { a: 'shield', b: 'rush', v: 1.0, why: '盾で前押しを支えられる' },
  { a: 'shield', b: 'brawl', v: 1.0, why: '盾で近距離戦を支えられる' },
  { a: 'antiheal', b: 'burst', v: 1.0, why: '回復を止めてキルにつなげられる' },
  { a: 'cc', b: 'burst', v: 1.0, why: '行動阻害からキルにつなげられる' },
  { a: 'cc', b: 'ultWipe', v: 1.5, why: '拘束してウルトを重ねられる' },
  { a: 'cc', b: 'aoe', v: 1.0, why: '固めたところに範囲攻撃を重ねられる' },
  { a: 'ultWipe', b: 'aoe', v: 1.0, why: '範囲ウルト同士が重なる' },
  { a: 'matrix', b: 'poke', v: 0.5, why: '撃ち合いの被弾を消せる' },
  { a: 'immortal', b: 'poke', v: 1.0, why: '無敵・蘇生で押し切れる' },
  { a: 'hack', b: 'burst', v: 1.0, why: 'ハックからキルにつなげられる' },
  { a: 'wall', b: 'aoe', v: 1.0, why: '分断したところに範囲攻撃を重ねられる' },
  { a: 'pick', b: 'cc', v: 1.0, why: '拘束から単体キルを狙える' },
  { a: 'turret', b: 'staticHeal', v: 0.5, why: '設置物で足場を作れる' },
  { a: 'antiDive', b: 'longHeal', v: 1.0, why: '後衛を守りながら回復できる' },
  { a: 'flyer', b: 'flyer', v: 1.0, why: '空中戦で数を作れる' },
  { a: 'flyer', b: 'longHeal', v: 1.0, why: '空中でも回復を受けられる' },
  { a: 'beam', b: 'rush', v: 0.5, why: '前押しの盾役を支えられる' }
];

/* 味方同士の相性(ヒーロー単位, 対称) */
const AZ_SYNERGY_PAIR = [
  { a: 'ana', b: 'genji', v: 1.5, why: 'ナノブースト+ブレードが強力' },
  { a: 'ana', b: 'reinhardt', v: 1.0, why: 'ナノブーストで前押しが通る' },
  { a: 'ana', b: 'winston', v: 0.5, why: 'ナノブーストで飛び込みが通る' },
  { a: 'zarya', b: 'genji', v: 1.5, why: 'バリア+ブレードが強力' },
  { a: 'zarya', b: 'reaper', v: 1.5, why: 'バリア+デスブロッサムが強力' },
  { a: 'zarya', b: 'pharah', v: 1.0, why: 'バリア+バレージで押し切れる' },
  { a: 'zarya', b: 'hanzo', v: 1.0, why: 'グラビトン+龍撃剣が重なる' },
  { a: 'sombra', b: 'genji', v: 1.0, why: 'EMP+ブレードが重なる' },
  { a: 'sombra', b: 'tracer', v: 1.0, why: 'ハックから集中攻撃できる' },
  { a: 'sombra', b: 'dva', v: 1.0, why: 'EMP+自爆が重なる' },
  { a: 'sombra', b: 'reaper', v: 1.0, why: 'EMP+デスブロッサムが重なる' },
  { a: 'mei', b: 'junkrat', v: 1.0, why: '壁で閉じ込めて範囲攻撃を重ねられる' },
  { a: 'mei', b: 'reaper', v: 1.0, why: '凍結から近距離火力を重ねられる' },
  { a: 'reinhardt', b: 'lucio', v: 1.5, why: '速度ブーストで一気に詰められる' },
  { a: 'reinhardt', b: 'brigitte', v: 1.5, why: '前押しを回復と装甲で支えられる' },
  { a: 'reinhardt', b: 'kiriko', v: 1.0, why: '鈴でダウンや阻害を消せる' },
  { a: 'lucio', b: 'brigitte', v: 1.0, why: '前押しの速度と回復を両立できる' },
  { a: 'mercy', b: 'pharah', v: 1.5, why: '飛行を維持したまま支援できる' },
  { a: 'mercy', b: 'echo', v: 1.0, why: '飛行を維持したまま支援できる' },
  { a: 'mercy', b: 'ashe', v: 1.0, why: 'ダメージブーストで射線を通せる' },
  { a: 'mercy', b: 'widowmaker', v: 1.0, why: 'ダメージブーストで射線が強くなる' },
  { a: 'winston', b: 'genji', v: 1.0, why: 'ダイブのテンポが揃う' },
  { a: 'winston', b: 'tracer', v: 1.0, why: 'ダイブのテンポが揃う' },
  { a: 'winston', b: 'dva', v: 1.0, why: 'ダブルダイブで後衛を潰せる' },
  { a: 'doomfist', b: 'sombra', v: 1.0, why: 'ハックから飛び込める' },
  { a: 'doomfist', b: 'tracer', v: 1.0, why: 'ダイブのテンポが揃う' },
  { a: 'orisa', b: 'torbjorn', v: 1.0, why: '据え置きで守り切れる' },
  { a: 'orisa', b: 'baptiste', v: 1.0, why: '無敵フィールドで粘れる' },
  { a: 'bastion', b: 'baptiste', v: 1.0, why: '無敵フィールドで砲台を維持できる' },
  { a: 'mauga', b: 'lucio', v: 1.0, why: '速度で前押しを支えられる' }
];

/* 相手構成の読み(タグの枚数で判定) */
const AZ_COMP_RULES = [
  { tag: 'flyer', min: 2, text: '飛行が{n}枚。ヒットスキャン/狙撃を用意したい', need: ['hitscan', 'sniper'] },
  { tag: 'flyer', min: 1, text: '飛行が{n}枚。近距離だけの構成だと触れない', need: ['hitscan', 'sniper'] },
  { tag: 'shield', min: 2, text: 'バリアが{n}枚。バリア破壊(ジャンクラット/バスティオン等)が有効', need: ['barrierBreak'] },
  { tag: 'sustain', min: 2, text: '自己回復が{n}枚。アンチヒール(アナ/ジャンカー・クイーン)が刺さる', need: ['antiheal'] },
  { tag: 'dive', min: 2, text: 'ダイブが{n}枚。アンチダイブ(ブリギッテ/トールビョルン/メイ)を厚くしたい', need: ['antiDive'] },
  { tag: 'sniper', min: 2, text: '狙撃が{n}枚。射線を切る/一気に詰める構成が有効', need: ['dive', 'rush'] },
  { tag: 'flanker', min: 2, text: 'フランカーが{n}枚。後衛を守るCCとアンチダイブが欲しい', need: ['cc', 'antiDive'] },
  { tag: 'immobile', min: 2, text: '機動力が低い相手が{n}枚。ダイブ/フランカーで狙いやすい', need: ['dive', 'flanker'] },
  { tag: 'ultWipe', min: 3, text: '範囲ウルトが{n}枚。分散とクレンズ(キリコ)で被害を減らしたい', need: ['cleanse'] },
  { tag: 'staticHeal', min: 1, text: '設置回復がある。遠距離から壊せるポークが有効', need: ['poke', 'aoe'] },
  { tag: 'matrix', min: 1, text: '飛来物を消す能力(D.Va/シグマ)がある。ビームや近距離が通りやすい', need: ['beam', 'brawl'] },
  { tag: 'turret', min: 1, text: '設置物がある。射線を通す前に処理したい', need: ['poke', 'aoe'] },
  { tag: 'poke', min: 3, text: '遠距離ポークが{n}枚。遮蔽を取って詰める構成(ダイブ/前押し)が有効', need: ['dive', 'rush'] },
  { tag: 'brawl', min: 3, text: '近距離戦が{n}枚。距離を保てるポークと飛行が有効', need: ['poke', 'flyer'] },
  { tag: 'cc', min: 3, text: '行動阻害が{n}枚。クレンズ(キリコ)や機動力で回避したい', need: ['cleanse', 'mobile'] }
];

/* 自分の役割ごとの「欲しいタグ」(スコアに少し加点) */
const AZ_ROLE_WANT = {
  Tank: { shield: 0.5, dive: 0.5, cc: 0.5, sustain: 0.5 },
  Damage: { burst: 0.5, pick: 0.5, barrierBreak: 0.5 },
  Support: { longHeal: 0.5, shortHeal: 0.5, cleanse: 0.5, antiheal: 0.5, speed: 0.5 }
};

/* タグごとの「立ち回り」説明文(ピックの説明に使う)。自由に書き換えてOK */
const AZ_TAG_USE = {
  hitscan: '中距離で撃ち合いながら、飛行や小さい相手にも確実に当てていく',
  projectile: '遮蔽を使いながら弾を当て、接近戦では一気に畳みかける',
  beam: '飛来物を消す能力を無視できるので、正面から押し込む',
  sniper: '射線を確保して、撃ち合いが始まる前に1枚落とす',
  poke: '遠距離から削り、相手が詰めてくる前にキルを作る',
  dive: '後衛(回復役)に飛び込んで、相手が集まる前に1人ずつ落とす',
  rush: 'スピードに乗って一気に距離を詰め、前で戦う',
  brawl: '接近して高火力を押し付ける(射線の長い相手には遮蔽を使う)',
  flyer: '上空から一方的に撃ち、近距離しかない相手に触らせない',
  flanker: '裏に回って後衛を狙い、逃げ道を先に塞ぐ',
  mobile: '機動力で射線を変え、狙われ続けない位置を取る',
  immobile: '遮蔽や設置物の近くで戦い、飛び込みには早めに下がる',
  shield: '盾で味方の射線と前進を支える',
  barrierBreak: '敵の盾を最優先で割り、味方が通れる道を作る',
  cc: '相手の飛び込みやウルトの起点を拘束で止める',
  antiDive: '後衛の近くに立ち、飛び込んできた相手を返り討ちにする',
  antiheal: '回復を止めてからキルを狙う(ヒーラーを抱えた相手に有効)',
  sustain: '自分で回復しながら前で粘り、相手の消耗を待つ',
  burst: '一気にキルまで持っていく(無敵・蘇生持ちには先に吐かせる)',
  aoe: '固まっている敵と設置物にまとめて当てる',
  ultWipe: '相手が固まったタイミングでウルトを合わせて複数キルを狙う',
  cleanse: '味方が拘束・回復阻害を受けた瞬間に消してあげる',
  immortal: '味方の決定機に無敵・蘇生を合わせて押し切る',
  matrix: '相手の弾道ウルトや決定打を吸って味方を守る',
  deflect: '弾道攻撃を跳ね返し、接近戦では弾きながら詰める',
  turret: '設置物でフランカーの通り道と後衛を守る',
  staticHeal: '設置回復を壊されない位置に置き、拠点を維持する',
  longHeal: '射線の通る位置から回復を届け、前の味方を落とさない',
  shortHeal: '前で味方と一緒に動き、接近戦の回復を担う',
  speed: 'スピードで前押しと離脱を支える',
  wall: '壁で敵を分断し、数の有利を作る',
  boop: '落下地点や狭い通路で突き落とす',
  hack: '飛び込みやウルトの起点をハックで止め、先に仕掛ける',
  pick: '先に1枚落として数的有利を作る(逃げ道を切ってから)'
};
