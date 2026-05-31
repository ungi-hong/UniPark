# UniPark — 障がい者割引のある駐車場を探せるマップアプリ

> 東京の「障がい者割引のある駐車場」を、現在地から地図で・地域階層リストから探せるモバイル Web アプリ。データが読み取り専用・小規模なため別 API サーバを立てず、**Next.js (App Router + Route Handlers) で完結する構成**。pnpm workspaces のモノレポで、API 契約 (OpenAPI/TS 型) を共有の真実の源として持つ。

> 🚧 **開発ステータス: MVP 実装済み(2026年5月開始 / 進行中)**
> 要件定義・アーキテクチャ・データモデル・API 契約・フェーズ分けを先に固めた上で実装。フロントエンドと Next Route Handlers によるデータ供給まで動作する。当初は Go バックエンド分離を設計したが、本データ特性では過剰と判断し Next 完結へ方針転換した(Go バックエンドは将来の拡張オプションとして設計を保持)。詳細は末尾の「開発ステータス」を参照。

---

## 一言で

車椅子ユーザーや障がい者手帳を持つ人が外出先で困りやすい「割引が使える駐車場・車椅子区画のある駐車場がどこにあるか分からない」という課題に対して、**現在地周辺の地図表示**と**都道府県→市区町村→駐車場の階層リスト**の2系統で目的の駐車場にたどり着けるようにしたアプリ。

---

## 解決したい課題

障がい者割引のある駐車場や、十分な幅・スロープのある車椅子区画の情報は、各施設サイトに散在していて横断的に探せない。外出先でその場で「いま近くに使える駐車場はあるか」を調べる手段が乏しい。

UniPark は、

- **現在地から半径 N m の割引駐車場を地図ピンで一覧**(地図移動に追従して再検索)
- ピンタップで簡易情報シート(名称 / 住所 / 車椅子区画数)→ 詳細へ
- **詳細ページで割引条件・対象手帳・車椅子区画の幅 / 屋根 / スロープ有無まで掲載**
- 情報の鮮度が命なので **「最終更新日」「情報源 URL」を必ず表示**

を提供し、外出前・外出先のどちらでも使えるようにする(PWA でホーム画面追加・オフライン閲覧可)。

---

## 主な機能 (MVP)

| 機能 | 状態 |
|---|---|
| マップ画面: 現在地取得 + 周辺駐車場のピン表示 | ✅ 実装済 |
| 地図移動に追従した範囲(bounds)再検索 + 現在地ボタン | ✅ 実装済 |
| ピンタップ → 簡易情報シート → 詳細導線 | ✅ 実装済 |
| 階層リスト: 都道府県 → 市区町村(件数バッジ) → 駐車場 | ✅ 実装済 |
| 詳細ページ: 場所名 / 周辺地図 / 住所 / 割引情報 / 車椅子区画 / 最終更新日 | ✅ 実装済 |
| PWA: manifest + アイコン + Service Worker(オフライン詳細キャッシュ) | ✅ 実装済 |
| Query API 5本(都道府県 / 市区町村 / 近傍 / 市区町村別 / 詳細) | ✅ Next Route Handlers で実装済(OpenAPI 契約準拠) |
| データ整備: 東京都全62自治体・276件を一次情報ベースで収集 + 実座標付与 | ✅ 実装済 |
| 検索 / フィルタ・誤情報報告・管理画面 | ⬜ Phase 2〜3 |

---

## アーキテクチャ

pnpm workspaces のモノレポ。アプリ本体は `apps/web` の Next.js 一本に集約し、API 仕様は `packages/api-types` の OpenAPI スキーマを**単一の真実の源**として、フロント (api-client) と Next Route Handlers の双方で共有する。

```
[Mobile PWA]
   │ HTTPS
   v
[Next.js apps/web]
   ├─ App Router (client) ── react-map-gl / maplibre-gl ── MapTiler ベクタータイル
   │      │ fetch /api/v1/** (OpenAPI 契約 / TanStack Query)
   │      v
   └─ Route Handlers (app/api/v1/**)
          │
          v
   [lib/data/repository]  ← 静的データ (lib/data/parking-lots.ts)
                             生成元: discount-research.json (一次情報)
```

データは読み取り専用で件数も小規模(東京都276件)。書き込み・認証・DB が不要なため、独立した API サーバは立てず Next.js の Route Handlers が JSON を返す。検索ロジック(近傍の Haversine・市区町村フィルタ・ページング)は `lib/data/repository.ts` に一本化し、Route Handlers とテスト用 MSW の双方が同じ結果を返す。

### データパイプライン

施設データは「収集 → 構造化 → ジオコーディング → 静的データ生成」の一方向フローで作る。

```
一次情報 (自治体公式 / 施設公式 / 運営会社公式)
   │ 市区町村単位で調査・二重確認
   v
discount-research.json (276件 / 全62自治体)
   │ build-parking-mock.mjs
   │   ・国土地理院ジオコーディング API で住所→実座標
   │   ・discount_scope/rate → OpenAPI の DiscountType にマッピング
   v
lib/data/parking-lots.ts (ParkingLotDetail[])
```

### 設計上のこだわり

- **「規模に合った構成」を選ぶ判断**: 読み取り専用・静的データに対して別バックエンド + DB はオーバーエンジニアリングと判断し、Next 完結に倒した。一方で API 契約 (OpenAPI/型) は維持し、将来バックエンドを切り出す際の差し替え口を残している。
- **契約駆動の疎結合**: フロントの `api-client` と Route Handler は OpenAPI から生成した TS 型を介してのみ繋がる。`/api/v1` という URL 契約を保つことで、内部実装(静的データ / 将来の外部 API)を入れ替えてもフロントは無改修。
- **情報の信頼性を UX に組み込む**: データモデルに `source_url` / `updated_at` を持たせ、詳細ページに「最終更新日」「情報源」を必ず表示(後述)。

### 将来の拡張オプション(設計済み・未着手)

書き込み(利用者からの誤情報報告・修正の取り込み)、複数クライアント供給、大規模な地理検索が必要になった段階で、`packages/api-types` の契約を据え置いたまま Route Handlers を外部バックエンドへ差し替えられるように設計してある。その想定構成:

- **Go バックエンド (DDD レイヤード + CQRS 軽量版)**: `domain` を DB も HTTP も知らない純粋レイヤーにし、依存方向を `presentation → application → domain ← infrastructure` に固定。Write は集約経由でドメインロジックを通し、Read は ReadStore からマテビューを直接 SELECT。
- **PostgreSQL 16 + PostGIS**: 位置を `GEOGRAPHY(POINT, 4326)` で持ち `ST_DWithin` + `ST_Distance` で半径内検索、Read 用マテビューに GIST インデックス。
- **CLI = 管理機能の土台**: データ投入を `cobra` CLI で実装し、それが呼ぶ `application/command` を管理画面でも HTTP 経由で再利用。

→ MVP では採用しないが、スケール要件が出た時に「契約は変えずに実装だけ載せ替える」ための設計。

---

## 技術的な工夫

### 1. OpenAPI 契約を中心に据えた疎結合 + フロント先行開発

`openapi.yaml` を真実の源として `openapi-typescript` で TS 型を自動生成し、フロントと Route Handler の両方がこの型で繋がる構成。実装初期はバックエンド完成を待たずに進めるため **MSW (Mock Service Worker) で API 仕様どおりのモックをブラウザに立てて** UI を先行実装し、データ供給の本体ができた段階で **MSW をテスト専用に降格し、同じ契約のまま Next Route Handlers に切り替えた**。型ずれは生成 TS 型で防ぐ。

→ 「契約を中心に据える」ことで、モック → 実装 → (将来) 外部 API という実装の載せ替えをフロント無改修で行える。

### 2. 地図移動に追従する近傍検索

`react-map-gl` + `maplibre-gl`(MapTiler のベクタータイル)で地図を描画し、地図の表示範囲(bounds)が変わるたびに周辺検索を再実行。Geolocation API で現在地に飛ぶボタンも実装。タイル提供者非依存の構成で、MapTiler から他プロバイダや自前 OSM への切り替えも想定。

### 3. 依存の薄い手書き PWA

`@ducanh2912/next-pwa` は更新停止で Next.js 16 非対応、`@serwist/next` は Turbopack 環境で設定が重い——という調査の上で、Next.js 16 公式ガイド準拠の **手書き Service Worker(約 50 行)+ `app/manifest.ts`** を採用。network-first で詳細ページ HTML と API JSON をキャッシュし、オフラインでも直近閲覧した駐車場を表示できる。依存を増やさず MVP 要件を満たす判断。

### 4. 情報の信頼性を UX に組み込む

障がい者割引情報の誤りは利用者の不利益に直結するため、データモデルに `source_url` / `updated_at` を持たせ、詳細ページに「最終更新日」「情報源」を必ず表示する設計。収集も市区町村単位で一次情報を二重確認し、料金の差異や休止施設は注記して反映している。Phase 2 で誤情報報告フォームを追加予定。

---

## 技術スタック

| 層 | 技術 |
|---|---|
| モノレポ | pnpm workspaces (`apps/web` + `packages/api-types`) |
| フロント | Next.js 16 (App Router / Turbopack) + React 19 + TypeScript 5 |
| スタイル | Tailwind CSS v4 + shadcn/ui |
| マップ | react-map-gl + maplibre-gl + MapTiler |
| サーバ状態 | TanStack Query v5 |
| API | Next.js Route Handlers (`app/api/v1`)。MSW はテスト用に保持 |
| データ | 静的 TS データ (`lib/data`) + 国土地理院ジオコーディングで実座標付与 |
| PWA | 手書き Service Worker + `app/manifest.ts` |
| API 契約 | OpenAPI + openapi-typescript(TS 型を生成しフロント/Route Handler で共有) |
| インフラ(予定) | Vercel (web のみで完結) |
| 将来の拡張オプション | Go + chi + pgx/v5 + sqlc + cobra / DDD レイヤード + CQRS / PostgreSQL 16 + PostGIS |

---

## 開発ステータス

> **2026年5月開始**。「いきなりコードを書き始める」のではなく、**要件・設計・リスク・段階計画を先に文書化してから実装に入る**進め方を取っている。

### 設計フェーズの成果物(完成)

実装に先立って、以下を文書として固め切った。

- **要件定義書**(`PLAN.md`)— 機能要件を ID 付きで一覧化し、優先度(必須 / 任意)とフェーズ(MVP / Phase 2〜4)を割り当て。「仮定して進める項目」を明示
- **アーキテクチャ設計** — 各構成案のトレードオフを検討。MVP は Next 完結とし、スケール時の Go + DDD/CQRS 分離案も設計図として保持
- **データモデル設計** — `ParkingLotDetail` を中心に、割引種別(free / cap_hours / percentage 等)・車椅子区画・情報源/更新日を定義
- **API 契約**(OpenAPI スキーマ)— Query 系 5 エンドポイントを定義し、TS 型を自動生成
- **リスク・トレードオフ分析** — 「割引情報の誤りは深刻」「別バックエンドは MVP に過剰では」等を洗い出し緩和策を対応づけ
- **フェーズ分割と TODO** — Phase 0〜4 のタスクをチェックリスト化

### 実装フェーズ(進行中)

- ✅ モノレポ基盤・OpenAPI 型生成パイプライン
- ✅ フロントエンド MVP 一式(マップ / 階層リスト 3 ページ / 詳細ページ / PWA)
- ✅ 東京都全62自治体・276件の駐車場データを一次情報ベースで収集・構造化 + 実座標付与
- ✅ **Next Route Handlers によるデータ供給(MSW はテスト専用に降格)** — Next.js で完結
- 🔜 自動テスト・CI/CD・検索 / フィルタ・本格 a11y(Phase 2)
- 🔜 誤情報報告フォーム・管理画面(Phase 2〜3)
- ⏸ Go バックエンド + PostgreSQL/PostGIS への分離 — スケール要件が出た場合の拡張オプション(契約据え置きで載せ替え可能に設計済み)

→ 見てほしいのは、**要件・設計・リスク・段階計画を先に文書化し、規模に合わせて構成を選び直しながら実装を進めている**という開発プロセスそのもの。

---

## スクリーンショット / デモ

> (後日追加予定)

<!--
画像はここに貼る。例:
![マップ画面](./docs/screenshots/map.png)
![詳細ページ](./docs/screenshots/detail.png)
デモ URL:
-->
