---
name: research-parking
description: Use when the user invokes /research-parking with a Japanese municipality name (e.g.「/research-parking 千代田区」「中央区を調べて」「次は港区」). Searches the web for parking lots with disability discounts in that municipality, appends results to apps/web/data/discount-research.json, then marks the PLACE-DATA.md checkbox with [△]. NEVER reads from shogaisha-techo.com (規約により不可).
---

# research-parking

引数で渡された市区町村について、**障害者割引のある駐車場** を Web 調査し、結果を `apps/web/data/discount-research.json` に追記する。最後に `PLACE-DATA.md` の該当チェック項目を `[△]` に更新する。

## 入力

- 市区町村名 (例: `千代田区`、`新宿区`、`武蔵野市`)
- 1 回の実行で 1 自治体。複数渡された場合は順に処理。

## 絶対ルール

- **`shogaisha-techo.com` (障害者手帳で行こう) は読み込まない / 引用しない**。検索結果に出ても WebFetch せず、`source_url` にも入れない。規約上スクレイピング禁止。
- `source_url` は **一次情報のみ**: 自治体公式 (`*.lg.jp`)、施設公式、運営会社公式 (`tmpc.or.jp`, `s-park.jp`, `tokyo-park.or.jp` 等)。まとめサイト・ブログは原則 NG。
- 「完全無料」「一部無料」のいずれかに該当する施設のみ記録。**割引なし / 不明 / 要確認** の施設は記録しない (調査メモは会話内で報告)。
- 「最初の◯分無料」「◯時間まで無料」「半額」「◯割引」など、**完全無料でないものは `discount_scope: "partial"`**。
- 既存 `id` と重複させない。同じ施設が既にあれば**スキップ**し、その旨をユーザーに報告 (上書きはユーザー承認後)。

## ワークフロー

### 1. 事前確認

- `apps/web/data/discount-research.json` を読み、既存の `id` と `name` を把握。
- `PLACE-DATA.md` を読み、対象市区町村の JIS X 0402 5桁コード (例: 千代田区 = `13101`) を確認。チェックが `[~]` 以外なら `[~]` に更新してから調査開始。

### 2. Web 調査

複数クエリを **並列** で投げる (Tool calls in parallel):

- `<市区町村名> 駐車場 障害者割引`
- `<市区町村名> 区営駐車場 障害者 減免` / `<市区町村名> 市営駐車場 障害者 減免`
- `<市区町村名> 公共施設 駐車場 障害者手帳 無料`
- 主要施設を狙う追加クエリ (区役所/市役所、図書館、文化会館、公園、病院、ホール 等)

加えて、**運営会社横断の障害者割引リスト** を毎回必ずクロスチェックする (個別検索で漏れがちな施設を補える):

- **公益財団法人東京都道路整備保全公社 (TMPC) の都営駐車場** — 対象自治体に 1 つでもあれば必ず確認 (多くで「障害者手帳提示で 1 時間無料」が一次情報に明記)
  - 一覧: `https://www.tmpc.or.jp/04_parking/tokyo/` および周辺別ページ (例: `tokyo_station_area.html`)
  - 個別ページ URL パターン: `https://www.tmpc.or.jp/04_parking/tokyo/tp_<施設名ローマ字>.html`
  - 住所・台数が tmpc 個別ページに無い場合は s-park.jp の同名ページ (`https://www.s-park.jp/map/<id>`) で補完
- **ミライロID 対応施設リスト** — タイムズ等の民間運営駐車場で QR コードによる障害者割引が受けられる施設の一次情報
  - タイムズ: `https://mirairo-id.jp/place/times/`
  - 運営会社別ページ: `https://mirairo-id.jp/place/<operator>/` (例: `amano-parking` 等)
  - 全体一覧: `https://mirairo-id.jp/place/` (都道府県別ページあり: `https://mirairo-id.jp/place/<prefecture>-prefecture/`)
  - 個別駐車場の料金・台数は対応する運営会社の公式ページ (例: タイムズなら `times-info.net/.../park-detail-<id>/`) で補完
  - 施設の運営者(自治体/公社等)が別途プレスリリースを出している場合はそちらを `source_url` に優先

検索結果から **一次情報の URL** を選び、WebFetch で詳細を取得。`shogaisha-techo.com` の URL は WebFetch しない。

### 3. 抽出する項目

各施設について以下を埋める。不明値は `null` (文字列は `""` ではなく `null`):

| キー | 型 | 例 / メモ |
|---|---|---|
| `id` | string | `{municipality_code}-{連番3桁}`。既存最大 + 1 |
| `municipality_code` | string | JIS X 0402 5桁 (例 `"13101"`) |
| `municipality` | string | `"千代田区"` |
| `name` | string | 施設名 (駐車場名まで含める) |
| `address` | string | 「東京都〜」を含むフル住所 |
| `capacity` | number \| null | 総台数 |
| `capacity_accessible` | number \| null | 身障者用区画数 |
| `normal_rate` | string | 通常料金 (例 `"30分250円"`) |
| `discount_rate` | string | 障害者割引値段 (例 `"無料"` / `"1時間無料"` / `"半額"`) |
| `discount_scope` | `"full"` \| `"partial"` | 完全無料 / 一部無料 |
| `discount_conditions` | string | 条件・提示方法 (手帳種別、対象者範囲、申請場所など) |
| `source_url` | string | 一次情報 URL |
| `verified_at` | string | 調査日 ISO 8601 date (`YYYY-MM-DD`、システムの `currentDate` を使う) |

### 4. JSON 追記

- `apps/web/data/discount-research.json` を Edit で末尾に追加。配列の `]` 直前にカンマ + 新規オブジェクトを挿入。
- インデントは半角スペース 2、既存スタイルに合わせる。
- ファイル末尾は LF 1 つ。

### 5. PLACE-DATA.md の更新

- 該当市区町村の行を **`[△]`** に書き換える。
- 1 件も見つからなかった場合は `[~]` を残し、ユーザーに「該当なし」を報告 (`[ ]` には戻さない)。
- **`[○]` / `[✓]` には絶対に書き換えない** — それは「ユーザーが二重確認した後」のステータス。

### 6. 報告

ユーザーへの最終出力 (簡潔に):

1. 追加件数 (full / partial の内訳)
2. 各施設の 1 行サマリ (`name` + `discount_rate` + `source_url`)
3. 重複・スキップ・該当なしの施設
4. 「PLACE-DATA.md を `[△]` に更新しました」
5. 「`[○]` に上げる際はご自身でも公式情報を再確認してください」と促す

## 判別: full vs partial

| 表現 | scope |
|---|---|
| 「無料」「全額免除」「無償」 | `full` |
| 「最初の◯時間無料」「◯時間まで無料」 | `partial` |
| 「半額」「◯割引」「◯円割引」 | `partial` |
| 「来庁者は窓口処理で無料」(条件付きだが料金は 0) | `full` (条件は `discount_conditions` に記載) |
| 「窓口開庁時間中は無料」 | `full` (時間帯は条件、料金は 0) |
| 「身障者専用スペースのみ、料金記載なし」 | **記録しない** (要確認の旨を会話内で報告) |

迷ったらユーザーに確認するか、`discount_conditions` に原文を残して `partial` 寄せ。

## 失敗時

- 該当市区町村のコードが PLACE-DATA.md に無い → ユーザーに確認 (新規追加して良いか)。
- 公式情報が見つからず一次情報ゼロ → `[~]` のまま残し、「該当なし(調査済)」と報告。

## やってはいけないこと

- `shogaisha-techo.com` への WebFetch / 内容の引用 / `source_url` への記載。
- `discount-research.json` の既存エントリの**勝手な書き換え** (誤り発見時もまずユーザーに報告)。
- `PLACE-DATA.md` を `[○]` `[✓]` `[★]` に上げる (ユーザー専権)。
- TaskCreate などで作業を細切れに追跡する (この調査は 1 ターンで完結する流れ作業)。
