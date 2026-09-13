# データ自動更新ガイド

ページのプレイヤーデータ(`players-data.js`)を **OverFast API から自動取得**して更新する仕組みです。

## ファイル構成

```
ow-ranking-showcase/
├── index.html            … ページ本体(データは外部読み込み)
├── heroes-meta.js        … 静的:ヒーローslugのロール/名前/画像(編集不要)
├── players-data.js       … 生成物:プレイヤーデータ(update.mjs が自動生成)
├── players.json          … ★対象プレイヤーの設定(編集するのはここ)
├── update.mjs            … 取得&生成スクリプト(Node 18+ / 依存なし)
├── package.json
└── .github/workflows/update-data.yml … 毎日自動実行(GitHub Actions)
```

## プレイヤーを追加/変更する方法

`players.json` を編集するだけです(名前検索で自動解決するのでタグ不要)。

```json
{
  "players": [
    { "id": "hiyori",    "search": "ひよりっつぁっん", "tag": "#3327" },
    { "id": "voidglove", "search": "ぼいどぐらぶ" },
    { "id": "maru",      "search": "まる熊" },
    { "id": "newguy",    "search": "プレイヤー名" }
  ]
}
```

- `id` … ページ内識別子(半角英数・一意)。並び順 = ランキングの初期順位に影響
- `search` … OverFast検索に使う名前
- `tag` … 任意。表に `#XXXX` を表示したい場合
- `playerId` … 任意(**推奨**)。OverFast の player_id(`xxxx|yyyy` 形式)を固定します
- 追加後はローカルで `npm run update` を実行(またはGitHub Actionsの手動実行)

### ⚠ 同名アカウントの取り違えに注意(重要)

OverFast の名前検索は**同名の別アカウントを複数返すことがあります**(例: 「まる熊」は2件)。
過去に、日次更新で別人のアカウント(試合数が極端に少ない方)を拾ってしまう事故が起きたため、
現在は次の二重対策を入れています。

1. `players.json` に **`playerId` を固定**(同名でも必ずそのアカウントを使う)
2. `update.mjs` は、検索結果が複数ある場合に**前回使った `playerId` を最優先**する
   (固定していないプレイヤーでも、一度正しく解決できていれば以降は取り違えない)

`playerId` は OverFast の `https://overfast-api.tekrop.fr/players?name=名前` で確認できます。
**`%7C` ではなく `|` の生のまま**を `players.json` に書いてください(スクリプト側でURLエンコードします)。

## 手動で更新する(ローカル)

```bash
cd ow-ranking-showcase
node update.mjs        # もしくは npm run update
node update.mjs --dry  # 書き込まず結果だけ確認
```

## 毎日自動更新にする(GitHub Actions)

前提: **公開しているページが置かれているGitHubリポジトリ**に、以下のファイルを push してください。
(リポジトリのルートに `index.html` がある想定です)

```bash
# 例(あなたのリポジトリのフォルダで)
git add index.html heroes-meta.js players-data.js players.json update.mjs package.json .github
git commit -m "add data auto-update"
git push
```

push 後、GitHub の **Actions** タブを開くと `update-data` が登録されています。
- 毎日 02:15 UTC(日本時間 11:15)に自動実行
- データに変化があれば `players-data.js` をコミット&push
- GitHub Pages / Cloudflare(git連携)なら push で自動的に再デプロイ
- 手動実行したいとき: Actions > update-data > **Run workflow**

※ リポジトリが無い場合は先に GitHub で新規リポジトリを作成し、
  公開ページをそのリポジトリに移してから上記を実行してください。

## 注意

- 元データは OverFast API(非公式)のコンペティティブ(competitive)成績です
- 現在の値は **APIが返すその時点のデータ** に合わせて更新されます
  (以前手貼りしていたスナップショットと合計試合数などが変わる場合があります)
- 実行しすぎると API に負荷をかけるため、自動実行は1日1回までを推奨
- 更新に失敗した場合は、前回のデータを維持します(ログで確認可能)

## 新ヒーローが追加されたとき(自動追随)

- `update.mjs` は実行のたびに OverFast の `/heroes`(ヒーロー一覧)を確認し、
  `heroes-meta.js` に**無いヒーローがあれば自動で追記**します(ロール・表示名・アイコンURL)。
  → 新キャラ実装後は、いつもの更新を回すだけでサイトに正しく表示されます(手作業なし)
- 追記された場合は実行ログに `＋ 新ヒーローを heroes-meta.js に追記: <slug>(<名前> / <ロール>)` と出ます
- 逆に、OverFast の一覧にまだ無いヒーローを誰かがプレイしていた場合は
  `⚠ heroes-meta.js に無いヒーロー: …` と警告が出ます(その場合の表示は 名前=slug・ロール未設定)。
  OverFast 側の更新を待ってから再実行してください
- 例: 2026年10月実装予定の新サポート「Doctrine」は、実装＆OverFast反映後に自動で入ります

## 最近練習しているキャラ(更新差分から推定)

- OverFast には「最近の試合」情報が無いため、`update.mjs` が**毎回の更新でヒーロー別の試合数の増加分**を記録し、
  直近 **7回分(≒1週間)** を `recent` としてプレイヤーデータに保持します
- サイト側はその合計から「試合数の増加が大きいヒーロー」を上位4件表示します
  (プレイヤー詳細カードと、上部のプレイヤー要約の両方)
- 増えたヒーローだけを記録するのでファイルは軽いまま。同日に複数回実行した場合は同じ日の記録を上書きします
- **別アカウントへの切り替え**(1回の更新で試合数が異常に増減)を検知した回は比較から除外します
  (まる熊の同名アカウント事故のような偽の「練習」を防ぐため)
- 新規追加したプレイヤーは、次回の更新から履歴が付きます

## ヒーロー順位の変動バッジ(▲ / ▼ / ★)

- `update.mjs` は更新時に、**生成前の `players-data.js`(前回のランキング)と比べて**
  プレイヤーごとのヒーロー順位(Power Rating 降順)が何位上がった/下がったかを計算し、
  各ヒーローへ `rankDelta`(正=順位アップ)/ `rankNew`(前回無かったヒーロー)として書き込みます
- サイト側(Hero Breakdown)では、ヒーローアイコンの左に **▲1(アップ) / ▼2(ダウン) / ★(新登場)** の
  記号+数字だけのバッジとして表示します(文字は使いません。意味はツールチップで確認できます)
- 前回データが無い初回実行時は比較できないため、バッジは表示されません
