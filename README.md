# UniPark

障がい者割引のある駐車場を、地図と地域リストから探せるモバイル Web アプリ。

車椅子ユーザーや障がい者手帳を持つ人が「いま近くに割引が使える駐車場はあるか」をその場で調べられるようにする。割引情報の誤りは利用者の不利益に直結するため、全データに情報源 URL と最終更新日を持たせ、詳細ページに必ず表示する。

データは自治体・施設・運営会社の公式サイト(一次情報)から市区町村単位で収集している。現在は東京都全域と神奈川県の一部をカバーし、全国へ拡大中(進行状況は [PLACE-DATA.md](./PLACE-DATA.md))。

## 構成

pnpm workspaces のモノレポ。データが読み取り専用・小規模なため別 API サーバは立てず、Next.js だけで完結する。

- `apps/web` — Next.js 16 (App Router)。フロントエンドと API (Route Handlers) の両方
- `packages/api-types` — OpenAPI スキーマと生成した TS 型。フロントと API が共有する契約

地図は MapLibre GL + MapTiler。PWA 対応(ホーム画面追加・オフラインで直近閲覧した詳細ページを表示)。

設計の経緯・詳細は [PORTFOLIO.md](./PORTFOLIO.md) を参照。

## 開発

```sh
pnpm install
pnpm dev        # http://localhost:3000
```

`apps/web/.env.local` に MapTiler の API キーが必要:

```
NEXT_PUBLIC_MAPTILER_KEY=<your key>
```

## データ更新の流れ

1. `apps/web/data/discount-research.json` に調査結果を追記(市区町村単位)
2. `node apps/web/scripts/build-parking-mock.mjs` で `lib/data/parking-lots.ts` と `lib/data/regions.ts` を再生成(住所→座標は国土地理院 API。既存分の座標は再利用される)

main への push で discount-research.json が変わっていれば、CI が再生成とコミットを自動で行う。

## テスト

```sh
pnpm test
```
