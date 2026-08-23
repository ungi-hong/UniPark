import type { components } from "@unipark/api-types";

type ParkingLotDetail = components["schemas"]["ParkingLotDetail"];

// 自動生成ファイル — 手で編集しないこと。
// 生成元: apps/web/data/discount-research.json
// 生成スクリプト: apps/web/scripts/build-parking-mock.mjs
// 緯度経度は国土地理院ジオコーディング API による住所→座標変換 (一部は市区町村名でフォールバック)。
// 件数: 1018

export const parkingLots: ParkingLotDetail[] = [
  {
    "id": "13101-001",
    "name": "千代田区役所 来庁者用駐車場",
    "address": "東京都千代田区九段南1-2-1",
    "latitude": 35.693947,
    "longitude": 139.75354,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13101",
    "cityName": "千代田区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者・65歳以上が図書館等を利用するため来庁時、窓口で駐車券を提示して割引処理"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分250円(最初30分無料)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.chiyoda.lg.jp/koho/kuse/gaiyo/chushajo-riyo.html",
    "updatedAt": "2026-05-27T00:00:00Z"
  },
  {
    "id": "13101-002",
    "name": "神田まちかど図書館 駐車場(神田さくら館)",
    "address": "東京都千代田区神田司町2-16",
    "latitude": 35.693047,
    "longitude": 139.768494,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13101",
    "cityName": "千代田区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳の提示"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 施設利用者 30分100円 / 一般 30分200円\n障害者割引: 無料\n総台数: 15台",
    "sourceUrl": "https://www.library.chiyoda.tokyo.jp/kanda/",
    "updatedAt": "2026-05-27T00:00:00Z"
  },
  {
    "id": "13101-003",
    "name": "東京しごとセンター 駐車場",
    "address": "東京都千代田区飯田橋3-10-3",
    "latitude": 35.700005,
    "longitude": 139.749588,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13101",
    "cityName": "千代田区",
    "accessibleSpaceTotal": 2,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 1,
      "conditions": "障害者向け 1時間無料(身障者用2台あり)"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 20分300円 / 当日最大2,200円(8:00-22:00)、夜間留置500円\n障害者割引: 1時間無料\n総台数: 55台",
    "sourceUrl": "https://www.s-park.jp/map/84",
    "updatedAt": "2026-05-27T00:00:00Z"
  },
  {
    "id": "13102-001",
    "name": "浜離宮恩賜庭園 大手門駐車スペース",
    "address": "東京都中央区浜離宮庭園1-1",
    "latitude": 35.66013,
    "longitude": 139.763519,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13102",
    "cityName": "中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者・車椅子利用者の車両、および車高の高い車両(観光バス等)に限り利用可。大手門入口で職員に申告し駐車許可書を受領。サービスセンター03-3541-0200"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 一般車両は利用不可(近隣の有料駐車場を案内)\n障害者割引: 無料",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/hama-rikyu/faq/index.html",
    "updatedAt": "2026-05-27T00:00:00Z"
  },
  {
    "id": "13102-002",
    "name": "東京都日本橋駐車場",
    "address": "東京都中央区日本橋2-12-12先(昭和通り地下道路内)",
    "latitude": 35.679916,
    "longitude": 139.774933,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13102",
    "cityName": "中央区",
    "accessibleSpaceTotal": 3,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 1,
      "conditions": "身体障害者手帳・愛の手帳・療育手帳・精神障害者保健福祉手帳のいずれかを管理室へ提示。低公害車割引と併用不可"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 30分200円(30分未満無料) / 12時間最大2,400円\n障害者割引: 1時間無料\n総台数: 190台",
    "sourceUrl": "https://www.tmpc.or.jp/04_parking/tokyo/tp_nihonbashi.html",
    "updatedAt": "2026-05-28T00:00:00Z"
  },
  {
    "id": "13102-003",
    "name": "東京都八重洲駐車場",
    "address": "東京都中央区京橋1-10-1先",
    "latitude": 35.678669,
    "longitude": 139.772644,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13102",
    "cityName": "中央区",
    "accessibleSpaceTotal": 3,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 1,
      "conditions": "身体障害者手帳・愛の手帳・療育手帳・精神障害者保健福祉手帳のいずれかと駐車券を管理室へ提示。低公害車割引と併用不可"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 8:00-20:00 30分250円 / 20:00-8:00 60分250円 / 30分未満無料 / 12時間最大3,000円\n障害者割引: 1時間無料\n総台数: 265台",
    "sourceUrl": "https://www.tmpc.or.jp/04_parking/tokyo/tp_yaesu.html",
    "updatedAt": "2026-05-28T00:00:00Z"
  },
  {
    "id": "13102-004",
    "name": "東京都宝町駐車場",
    "address": "東京都中央区京橋1-13-1先(昭和通り地下道路内)",
    "latitude": 35.677784,
    "longitude": 139.772614,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13102",
    "cityName": "中央区",
    "accessibleSpaceTotal": 3,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 1,
      "conditions": "身体障害者手帳・愛の手帳・療育手帳・精神障害者保健福祉手帳のいずれかを管理室へ提示。低公害車割引と併用不可"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 30分200円(30分未満無料) / 12時間最大2,400円\n障害者割引: 1時間無料\n総台数: 190台",
    "sourceUrl": "https://www.tmpc.or.jp/04_parking/tokyo/tp_takaracho.html",
    "updatedAt": "2026-05-28T00:00:00Z"
  },
  {
    "id": "13102-005",
    "name": "東京都新京橋駐車場",
    "address": "東京都中央区銀座1-19-15先",
    "latitude": 35.673557,
    "longitude": 139.77095,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13102",
    "cityName": "中央区",
    "accessibleSpaceTotal": 3,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 1,
      "conditions": "身体障害者手帳・愛の手帳・療育手帳・精神障害者保健福祉手帳のいずれかを管理室へ提示。低公害車割引と併用不可"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 30分200円(30分未満無料) / 12時間最大2,400円\n障害者割引: 1時間無料\n総台数: 220台",
    "sourceUrl": "https://www.tmpc.or.jp/04_parking/tokyo/tp_shinkyobashi.html",
    "updatedAt": "2026-05-28T00:00:00Z"
  },
  {
    "id": "13102-006",
    "name": "東京都東銀座駐車場",
    "address": "東京都中央区銀座7-14-16",
    "latitude": 35.667595,
    "longitude": 139.764984,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13102",
    "cityName": "中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 1,
      "conditions": "身体障害者手帳・愛の手帳・療育手帳・精神障害者保健福祉手帳のいずれかと駐車券を管理室へ提示。※令和6年7月18日から大規模修繕のため閉場中(再開予定 令和8年10月1日)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分250円(30分未満無料) / 12時間最大2,400円\n障害者割引: 1時間無料",
    "sourceUrl": "https://www.tmpc.or.jp/04_parking/tokyo/tp_higashiginza.html",
    "updatedAt": "2026-05-28T00:00:00Z"
  },
  {
    "id": "13102-007",
    "name": "ヤエチカパーキング 東駐車場",
    "address": "東京都中央区八重洲2-1 八重洲地下街中1号",
    "latitude": 35.679859,
    "longitude": 139.769608,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13102",
    "cityName": "中央区",
    "accessibleSpaceTotal": 4,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 0.5,
      "conditions": "身体障害者手帳のみ対象。事務所または管理室で手帳を提示し割引券を受領"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 10分130円/20分250円/30分380円 / 12-24時間9,000円\n障害者割引: 30分無料\n総台数: 230台",
    "sourceUrl": "https://parking.yaechika.com/",
    "updatedAt": "2026-05-28T00:00:00Z"
  },
  {
    "id": "13102-008",
    "name": "ヤエチカパーキング 西駐車場",
    "address": "東京都中央区八重洲2-1 八重洲地下街中1号",
    "latitude": 35.679859,
    "longitude": 139.769608,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13102",
    "cityName": "中央区",
    "accessibleSpaceTotal": 3,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 0.5,
      "conditions": "身体障害者手帳のみ対象。事務所または管理室で手帳を提示し割引券を受領"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 10分130円/20分250円/30分380円 / 12-24時間9,000円\n障害者割引: 30分無料\n総台数: 292台",
    "sourceUrl": "https://parking.yaechika.com/",
    "updatedAt": "2026-05-28T00:00:00Z"
  },
  {
    "id": "13102-009",
    "name": "タイムズ晴海ふ頭公園",
    "address": "東京都中央区晴海5-8",
    "latitude": 35.648861,
    "longitude": 139.770554,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13102",
    "cityName": "中央区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・療育手帳・精神障害者保健福祉手帳の本人または同乗者が対象(専用区画以外でも適用)。出庫時に精算機のインターフォンで申告。ミライロID対応"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 60分500円(入場後30分無料) / 平日最大1,500円 / 土日祝は最大料金なし\n障害者割引: 無料\n総台数: 37台",
    "sourceUrl": "https://www.tptc.co.jp/park/02_01/news/detail/1389",
    "updatedAt": "2026-05-28T00:00:00Z"
  },
  {
    "id": "13103-001",
    "name": "麻布十番公共駐車場",
    "address": "東京都港区麻布十番1-4-10",
    "latitude": 35.657043,
    "longitude": 139.734848,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13103",
    "cityName": "港区",
    "accessibleSpaceTotal": 2,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳・特定医療費(指定難病)受給者証・都医療券・障害者支援区分認定通知書(区分1以上)等を駐車前に係員へ提示。時間利用が2時間まで免除"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 8:00-22:00 30分200円 / 22:00-8:00 60分100円 / 1日最大2,200円(機械式)\n障害者割引: 2時間無料\n総台数: 347台",
    "sourceUrl": "https://www.city.minato.tokyo.jp/koutsuuanzen/kankyo-machi/kotsu/chushajo/azabujuban.html",
    "updatedAt": "2026-05-28T00:00:00Z"
  },
  {
    "id": "13103-002",
    "name": "品川駅港南口公共駐車場",
    "address": "東京都港区港南2-14-17(港南ふれあい広場地下)",
    "latitude": 35.628925,
    "longitude": 139.741486,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13103",
    "cityName": "港区",
    "accessibleSpaceTotal": 2,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳・特定医療費(指定難病)受給者証・都医療券・障害者支援区分認定通知書(区分1以上)等を駐車前に管理室係員へ提示。時間利用が2時間まで免除"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 8:00-22:00 30分250円 / 22:00-8:00 30分100円 / 1日最大2,700円\n障害者割引: 2時間無料\n総台数: 137台",
    "sourceUrl": "https://www.city.minato.tokyo.jp/koutsuuanzen/kankyo-machi/kotsu/chushajo/shinagawa.html",
    "updatedAt": "2026-05-28T00:00:00Z"
  },
  {
    "id": "13103-003",
    "name": "みなとパーク芝浦駐車場",
    "address": "東京都港区芝浦1-16-1",
    "latitude": 35.646198,
    "longitude": 139.751663,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13103",
    "cityName": "港区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "障害者の乗車する車両は最初の3時間まで無料(施設利用者は2時間まで無料)。利用施設の窓口で駐車券の無料措置認証を受ける必要あり"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 7:00-23:00 30分250円 / 23:00-7:00 60分100円 / 当日最大2,500円\n障害者割引: 3時間無料\n総台数: 189台",
    "sourceUrl": "https://www.city.minato.tokyo.jp/shiba-koushisetsu/minatoparkshibaura.html",
    "updatedAt": "2026-05-28T00:00:00Z"
  },
  {
    "id": "13103-004",
    "name": "シンボルプロムナード公園駐車場 A棟",
    "address": "東京都港区台場1-8-1",
    "latitude": 35.62701,
    "longitude": 139.77211,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13103",
    "cityName": "港区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳/療育手帳・精神障害者保健福祉手帳の本人または同乗者が対象。手帳原本を管理室で提示し利用料金免除。問合せ: 東京テレポートセンター 03-5500-5672"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 最初1時間400円 / 以降30分200円(24時間営業)\n障害者割引: 無料\n総台数: 119台",
    "sourceUrl": "https://www.tptc.co.jp/park/01_04/qa",
    "updatedAt": "2026-05-28T00:00:00Z"
  },
  {
    "id": "13103-005",
    "name": "シンボルプロムナード公園駐車場 B棟",
    "address": "東京都港区台場2-5-1",
    "latitude": 35.625854,
    "longitude": 139.772629,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13103",
    "cityName": "港区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳/療育手帳・精神障害者保健福祉手帳の本人または同乗者が対象。手帳原本を管理室で提示し利用料金免除。問合せ: 東京テレポートセンター 03-5500-5672"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 最初1時間400円 / 以降30分200円(24時間営業)\n障害者割引: 無料\n総台数: 115台",
    "sourceUrl": "https://www.tptc.co.jp/park/01_04/qa",
    "updatedAt": "2026-05-28T00:00:00Z"
  },
  {
    "id": "13103-006",
    "name": "赤坂公共駐車場",
    "address": "東京都港区元赤坂1-2-1先",
    "latitude": 35.677792,
    "longitude": 139.735291,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13103",
    "cityName": "港区",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "障害者手帳の提示で時間貸料金が5割引(IPOS届出データ)。現地で要再確認(s-park.jp等の最新料金とは差異あり)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分300円 / 夜間(1:30-6:30)最大1,400円\n障害者割引: 5割引\n総台数: 66台",
    "sourceUrl": "https://search.ipos-land.jp/p/detailp.aspx?id=IP2100092",
    "updatedAt": "2026-05-28T00:00:00Z"
  },
  {
    "id": "13103-007",
    "name": "新橋駅東口公共駐車場(京急しんちか駐車場)",
    "address": "東京都港区新橋2丁目東口地下街1号",
    "latitude": 35.666859,
    "longitude": 139.757095,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13103",
    "cityName": "港区",
    "accessibleSpaceTotal": 1,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 0.5,
      "conditions": "障害者手帳の提示で30分無料(IPOS届出データ)。現地で要再確認(Times-info掲載の現行料金とは差異あり)"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 8:00-21:00 30分310円 / 21:00-8:00 60分310円 / 日祝最大2,400円(8:00-21:00)\n障害者割引: 30分無料\n総台数: 196台",
    "sourceUrl": "https://search.ipos-land.jp/p/detailp.aspx?id=NI1388A00",
    "updatedAt": "2026-05-28T00:00:00Z"
  },
  {
    "id": "13104-001",
    "name": "東京都庁第一本庁舎駐車場",
    "address": "東京都新宿区西新宿2-8-4",
    "latitude": 35.689629,
    "longitude": 139.691772,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13104",
    "cityName": "新宿区",
    "accessibleSpaceTotal": 5,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳(愛の手帳)・精神障害者保健福祉手帳のいずれか。運転手本人または同乗者が手帳所持の場合に限り、料金支払窓口で手帳を提示し無料"
    },
    "accessibleSpaces": [
      {
        "count": 5
      }
    ],
    "notes": "通常料金: 月-金 8:30-22:00 / 最初1時間 30分150円 / 以降30分250円 / 当日上限2,000円\n障害者割引: 無料\n総台数: 67台",
    "sourceUrl": "https://www.zaimu.metro.tokyo.lg.jp/tochousha/goannai/shisetsu",
    "updatedAt": "2026-05-28T00:00:00Z"
  },
  {
    "id": "13104-002",
    "name": "東京都庁第二本庁舎駐車場",
    "address": "東京都新宿区西新宿2-9",
    "latitude": 35.68808,
    "longitude": 139.692139,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13104",
    "cityName": "新宿区",
    "accessibleSpaceTotal": 6,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳(愛の手帳)・精神障害者保健福祉手帳のいずれか。運転手本人または同乗者が手帳所持の場合に限り、料金支払窓口で手帳を提示し無料"
    },
    "accessibleSpaces": [
      {
        "count": 6
      }
    ],
    "notes": "通常料金: 月-金 8:30-22:00 / 最初1時間 30分150円 / 以降30分250円 / 当日上限2,000円\n障害者割引: 無料\n総台数: 70台",
    "sourceUrl": "https://www.zaimu.metro.tokyo.lg.jp/tochousha/goannai/shisetsu",
    "updatedAt": "2026-05-28T00:00:00Z"
  },
  {
    "id": "13104-003",
    "name": "TOKYO PUBLIC 西新宿第四駐車場",
    "address": "東京都新宿区西新宿2-4(副都心街路10号線高架下)",
    "latitude": 35.688148,
    "longitude": 139.693329,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13104",
    "cityName": "新宿区",
    "accessibleSpaceTotal": 1,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 1,
      "conditions": "障害者手帳の提示で1時間無料(オートフォン対応)。TMPC公社駐車場の標準制度に準拠(身体障害者手帳・愛の手帳・療育手帳・精神障害者保健福祉手帳)"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 昼間(7:00-23:00)10分100円 / 夜間(23:00-7:00)1時間100円 / 昼間上限2,000円・夜間上限600円(繰返し)\n障害者割引: 1時間無料\n総台数: 122台",
    "sourceUrl": "https://www.s-park.jp/map/34623",
    "updatedAt": "2026-05-28T00:00:00Z"
  },
  {
    "id": "13104-004",
    "name": "新宿御苑大木戸駐車場",
    "address": "東京都新宿区内藤町11",
    "latitude": 35.688934,
    "longitude": 139.705597,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13104",
    "cityName": "新宿区",
    "accessibleSpaceTotal": 5,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳(身体障害者手帳・療育手帳・精神障害者保健福祉手帳)またはミライロID提示で、運転者または同乗者が手帳所持の場合、入園時の駐車料金が無料。大木戸門券売所スタッフに駐車券と手帳を提示。新宿御苑開園時間中のみ適用"
    },
    "accessibleSpaces": [
      {
        "count": 5
      }
    ],
    "notes": "通常料金: 120分まで600円 / 以後30分200円 / 当日上限2,900円(大型車5台あり)\n障害者割引: 無料\n総台数: 200台",
    "sourceUrl": "https://fng.or.jp/shinjuku/access/parking/",
    "updatedAt": "2026-05-28T00:00:00Z"
  },
  {
    "id": "13104-005",
    "name": "新宿サブナード駐車場",
    "address": "東京都新宿区歌舞伎町1-2-2",
    "latitude": 35.693451,
    "longitude": 139.703705,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13104",
    "cityName": "新宿区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 0.5,
      "conditions": "身体障害者手帳のみ対象(愛の手帳・精神障害者保健福祉手帳は対象外)。駐車場管理事務所に駐車券と手帳を提示。問合せ: 03-3356-7561"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分370円(税込) / 平日入庫限定 4時間料金で12時間まで2,960円 / 二輪 30分180円・全日1,440円\n障害者割引: 30分無料\n総台数: 400台",
    "sourceUrl": "https://www.subnade.co.jp/about/parking/",
    "updatedAt": "2026-05-28T00:00:00Z"
  },
  {
    "id": "13104-006",
    "name": "新宿区立 新宿スポーツセンター 駐車場",
    "address": "東京都新宿区大久保3-5-1",
    "latitude": 35.704666,
    "longitude": 139.704605,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13104",
    "cityName": "新宿区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳またはミライロID提示で駐車料金無料(区内・区外問わず)。障害等級制限なし。介助者は原則1名まで無料。利用時に受付窓口で提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 60分300円 / 以後30分150円\n障害者割引: 無料\n総台数: 17台",
    "sourceUrl": "https://www.city.shinjuku.lg.jp/kusei/community01_002079.html",
    "updatedAt": "2026-05-28T00:00:00Z"
  },
  {
    "id": "13104-007",
    "name": "新宿区立 新宿コズミックスポーツセンター 駐車場",
    "address": "東京都新宿区大久保3-1-2",
    "latitude": 35.704975,
    "longitude": 139.707657,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13104",
    "cityName": "新宿区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳またはミライロID提示で駐車料金免除(区内・区外問わず)。施設利用が前提。利用時に受付窓口で提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分まで無料 / 以後30分100円(現金のみ) / 22:15以降出庫不可 / 施設利用者限定\n障害者割引: 無料",
    "sourceUrl": "https://www.city.shinjuku.lg.jp/kusei/community01_002079.html",
    "updatedAt": "2026-05-28T00:00:00Z"
  },
  {
    "id": "13105-001",
    "name": "文京シビックセンター駐車場",
    "address": "東京都文京区春日1-16-21",
    "latitude": 35.708336,
    "longitude": 139.752411,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13105",
    "cityName": "文京区",
    "accessibleSpaceTotal": 6,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳・ミライロIDのいずれかを所持する方が乗車している場合が対象。出庫前に地下1階の駐車場管理室で手帳を提示し減額申請手続きを行う"
    },
    "accessibleSpaces": [
      {
        "count": 6
      }
    ],
    "notes": "通常料金: 30分ごとに250円\n障害者割引: 5割減額\n総台数: 130台",
    "sourceUrl": "https://www.city.bunkyo.lg.jp/b040/p006603.html",
    "updatedAt": "2026-05-29T00:00:00Z"
  },
  {
    "id": "13105-002",
    "name": "東京都立駒込病院 駐車場",
    "address": "東京都文京区本駒込3-18-22",
    "latitude": 35.729939,
    "longitude": 139.757309,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13105",
    "cityName": "文京区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳・小児慢性疾患児医療券のいずれかを所持する患者および付添者、生活保護受給者が駐車料金免除の対象。駐車券と各手帳を面会受付(8:00-20:45)または防災センター(20:45-翌8:00)に提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 一般 1時間600円(患者等は割引パンチで割引)\n障害者割引: 無料\n総台数: 242台",
    "sourceUrl": "https://www.tmhp.jp/komagome/about/facility/facility.html",
    "updatedAt": "2026-05-29T00:00:00Z"
  },
  {
    "id": "13105-003",
    "name": "東京科学大学病院(旧 東京医科歯科大学病院) 駐車場",
    "address": "東京都文京区湯島1-5-45",
    "latitude": 35.701828,
    "longitude": 139.765274,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13105",
    "cityName": "文京区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 12,
      "conditions": "身体障害者手帳所持者は入庫から12時間まで無料、以降30分ごと100円(上限なし)。駐車券の認証が必要"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 外来患者 20分ごと100円・24時間最大2,000円 / 面会等 20分ごと200円・24時間最大3,000円\n障害者割引: 12時間無料",
    "sourceUrl": "https://www.tmd.ac.jp/medhospital/about/acc.html",
    "updatedAt": "2026-05-29T00:00:00Z"
  },
  {
    "id": "13105-004",
    "name": "順天堂大学医学部附属順天堂医院 駐車場",
    "address": "東京都文京区本郷3-1-3",
    "latitude": 35.701878,
    "longitude": 139.762177,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13105",
    "cityName": "文京区",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳のいずれかを所持する方は時間貸料金が半額(20分100円相当)。提示方法は公式サイトに明記なし(利用時に窓口で要確認)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 20分ごとに200円\n障害者割引: 半額",
    "sourceUrl": "https://hosp.juntendo.ac.jp/access.html",
    "updatedAt": "2026-05-29T00:00:00Z"
  },
  {
    "id": "13105-005",
    "name": "目白台運動公園 駐車場",
    "address": "東京都文京区目白台1-19・20",
    "latitude": 35.715462,
    "longitude": 139.720734,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13105",
    "cityName": "文京区",
    "accessibleSpaceTotal": 2,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳のいずれかの交付を受けている方が乗車している場合、駐車場使用料を5割減額。出庫前にパークセンターへ手帳を提示し減額申請。文京区『障害者福祉のてびき』(令和7年)に記載"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 普通車料金は公式に明示なし(パークセンター 03-3941-6153 へ要確認) / 営業 5-8月7:30-18:30・9-4月7:30-17:00\n障害者割引: 5割減額\n総台数: 19台",
    "sourceUrl": "https://www.city.bunkyo.lg.jp/documents/3299/r7syogaisyahukusinotebiki_shusei.pdf",
    "updatedAt": "2026-05-29T00:00:00Z"
  },
  {
    "id": "13106-001",
    "name": "上野恩賜公園第一駐車場",
    "address": "東京都台東区上野公園6",
    "latitude": 35.715694,
    "longitude": 139.777435,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13106",
    "cityName": "台東区",
    "accessibleSpaceTotal": 6,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "東京都が定める駐車料金免除者(身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者等)が運転または同乗する車両が対象。出庫前に管理室で手帳と駐車券を提示。障害者専用6台あり"
    },
    "accessibleSpaces": [
      {
        "count": 6
      }
    ],
    "notes": "通常料金: 普通車 1時間まで1,000円・以後30分ごと500円(公式掲載はバス専用中心のため普通車料金は現地要確認) / 営業 8:30-17:30(入庫16:30まで)\n障害者割引: 無料",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/ueno/index.html",
    "updatedAt": "2026-05-29T00:00:00Z"
  },
  {
    "id": "13107-001",
    "name": "墨田区役所 地下駐車場",
    "address": "東京都墨田区吾妻橋1-23-20",
    "latitude": 35.710602,
    "longitude": 139.801895,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13107",
    "cityName": "墨田区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳・愛の手帳等の交付を受けている方の使用は使用料免除。入口係員に手帳を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 平日は来庁手続きの窓口認証で無料(認証なしは有料) / 休日30分250円 / 全60台(平置12・機械式48)\n障害者割引: 無料\n総台数: 60台",
    "sourceUrl": "https://www.city.sumida.lg.jp/sisetu_info/kuyakusyo/car.html",
    "updatedAt": "2026-05-29T00:00:00Z"
  },
  {
    "id": "13107-002",
    "name": "ひがしんアリーナ(墨田区総合体育館) 駐車場",
    "address": "東京都墨田区錦糸4-15-1",
    "latitude": 35.698021,
    "longitude": 139.815079,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13107",
    "cityName": "墨田区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳・愛の手帳等を2階総合受付に提示で駐車場利用料金免除(施設休館日を除く)。付添(介助)者1名も対象。墨田区公式『デジタル障害者手帳利用可能施設一覧』にも駐車場利用料金免除と明記"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分ごと 平日100円・土日祝200円(個人利用は2時間まで無料)\n障害者割引: 無料\n総台数: 100台",
    "sourceUrl": "https://www.sumidacity-gym.com/access/",
    "updatedAt": "2026-05-29T00:00:00Z"
  },
  {
    "id": "13107-003",
    "name": "両国屋内プール 地下駐車場",
    "address": "東京都墨田区横網1-8-1",
    "latitude": 35.698643,
    "longitude": 139.796173,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13107",
    "cityName": "墨田区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療養手帳・精神障害者保健福祉手帳・愛の手帳を提示で駐車場利用料金免除(居住地不問)。入口ガードマンにプール利用と伝える"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分につき250円(国際ファッションセンター地下駐車場と共通入口)\n障害者割引: 無料\n総台数: 24台",
    "sourceUrl": "https://www.city.sumida.lg.jp/sisetu_info/sports/ryougoku/index.html",
    "updatedAt": "2026-05-29T00:00:00Z"
  },
  {
    "id": "13107-004",
    "name": "すみだスポーツ健康センター 駐車場",
    "address": "東京都墨田区東墨田1-6-1",
    "latitude": 35.715469,
    "longitude": 139.830536,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13107",
    "cityName": "墨田区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療養手帳・精神障害者保健福祉手帳・愛の手帳の本人が対象で駐車場利用料金免除。介助者1名まで施設利用料無料。墨田区公式『デジタル障害者手帳利用可能施設一覧』に駐車場利用料金免除と明記"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 公式サイトに料金記載なし(施設へ要問合せ 03-5247-7755)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.sumida.lg.jp/kenko_fukushi/syougai/tetyou_soudan/sumida_mirairoid.files/sumida_mirairo.pdf",
    "updatedAt": "2026-05-29T00:00:00Z"
  },
  {
    "id": "13107-005",
    "name": "フクシ・エンタープライズ墨田フィールド(墨田区総合運動場) 駐車場",
    "address": "東京都墨田区堤通2-11-1",
    "latitude": 35.738197,
    "longitude": 139.816605,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13107",
    "cityName": "墨田区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療養手帳・精神障害者保健福祉手帳・愛の手帳の本人が対象で駐車場利用料金免除。墨田区公式『デジタル障害者手帳利用可能施設一覧』に駐車場利用料金免除と明記"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 公式サイトに料金記載なし(施設へ要問合せ 03-3611-9070)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.sumida.lg.jp/kenko_fukushi/syougai/tetyou_soudan/sumida_mirairoid.files/sumida_mirairo.pdf",
    "updatedAt": "2026-05-29T00:00:00Z"
  },
  {
    "id": "13107-006",
    "name": "すみだ生涯学習センター(ユートリヤ) 駐車場",
    "address": "東京都墨田区東向島2-38-7",
    "latitude": 35.721107,
    "longitude": 139.818771,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13107",
    "cityName": "墨田区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・戦傷病者手帳・精神障害者保健福祉手帳・療育手帳・愛の手帳の本人および介助者(1名まで)が駐車料金無料。減免を受ける際は事前に施設管理者へ声掛けし、出場前に手帳等を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 公式サイトに料金記載なし(施設へ要問合せ 03-5247-2001)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.sumida.lg.jp/kenko_fukushi/syougai/tetyou_soudan/sumida_mirairoid.files/sumida_mirairo.pdf",
    "updatedAt": "2026-05-29T00:00:00Z"
  },
  {
    "id": "13107-007",
    "name": "隅田公園自動車駐車場",
    "address": "東京都墨田区向島5-6(旧 屋内プール体育館跡地)",
    "latitude": 35.719501,
    "longitude": 139.809586,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13107",
    "cityName": "墨田区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の本人が自動車駐車場使用料無料。墨田区公式『デジタル障害者手帳利用可能施設一覧』に明記"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 公式に料金記載なし(指定管理者が定める) / 利用時間 7:30-18:30\n障害者割引: 無料",
    "sourceUrl": "https://www.city.sumida.lg.jp/kenko_fukushi/syougai/tetyou_soudan/sumida_mirairoid.files/sumida_mirairo.pdf",
    "updatedAt": "2026-05-29T00:00:00Z"
  },
  {
    "id": "13107-008",
    "name": "ひきふね図書館(立体)駐車場",
    "address": "東京都墨田区京島1-36-5",
    "latitude": 35.716995,
    "longitude": 139.818939,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13107",
    "cityName": "墨田区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の本人および付添1名は駐車料金免除。立体駐車場のため駐車台数3台。1階駐車スペース内のインターホンで職員に申告"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 30分以内無料 / 超過は最初の30分を除き30分ごと150円 / 全3台(ハイルーフ用2・バリアフリー用1)\n障害者割引: 無料\n総台数: 3台",
    "sourceUrl": "https://www.city.sumida.lg.jp/faq/sisetu_info/library/1719.html",
    "updatedAt": "2026-05-29T00:00:00Z"
  },
  {
    "id": "13108-001",
    "name": "江東区役所駐車場(タイムズ江東区役所第1・第2)",
    "address": "東京都江東区東陽4-11-28",
    "latitude": 35.672993,
    "longitude": 139.81636,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13108",
    "cityName": "江東区",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳・愛の手帳・精神障害者保健福祉手帳等の所持者と同伴の介護者は開庁時・閉庁時とも駐車料金免除。開庁時は用務先で駐車券にスタンプ後1階管理室へ提示、閉庁時は出口精算機のオートフォンでコールセンターに連絡しカメラに手帳を提示"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 一律30分220円(来庁手続きで1時間無料) / 第1駐車場39台(身障者用3)・第2駐車場20台\n障害者割引: 無料\n総台数: 59台",
    "sourceUrl": "https://www.city.koto.lg.jp/051101/chushajo.html",
    "updatedAt": "2026-05-29T00:00:00Z"
  },
  {
    "id": "13108-002",
    "name": "江東区総合区民センター駐車場",
    "address": "東京都江東区大島4-5-1",
    "latitude": 35.688911,
    "longitude": 139.826523,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13108",
    "cityName": "江東区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳等の所持者は料金精算機横のオートフォンでタイムズコンタクトセンター(0120-77-8924)に連絡し、カメラに手帳を提示すると無料で出庫可(介護者を含む)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初30分無料 / 以降20分100円 / 24時間営業(東側の第2駐車場は営業中止)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.koto.lg.jp/060305/kuminsentayuuryou.html",
    "updatedAt": "2026-05-29T00:00:00Z"
  },
  {
    "id": "13108-003",
    "name": "江東区文化センター駐車場",
    "address": "東京都江東区東陽4-11-3",
    "latitude": 35.672184,
    "longitude": 139.818527,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13108",
    "cityName": "江東区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳を提示した方は駐車料金無料。収容台数に限りあり"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1台20分につき100円(最初30分無料) / 利用8:30-22:00 / 高さ制限2.5m\n障害者割引: 無料\n総台数: 23台",
    "sourceUrl": "https://www.kcf.or.jp/koto/access/",
    "updatedAt": "2026-05-29T00:00:00Z"
  },
  {
    "id": "13108-004",
    "name": "ティアラこうとう(江東公会堂) 駐車場",
    "address": "東京都江東区住吉2-28-36",
    "latitude": 35.689022,
    "longitude": 139.819382,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13108",
    "cityName": "江東区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳・愛の手帳の所持者は駐車料金無料。帰りに駐車券と手帳を駐車場係員(警備員)へ提示。身障者専用2台"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 1台20分につき100円(最初30分無料) / 利用8:30-22:00 / 機械式68台・平置12台(機械式は全長4.7m・全幅1.75m・全高1.55m・1,500kg以下)\n障害者割引: 無料\n総台数: 80台",
    "sourceUrl": "https://www.kcf.or.jp/tiara/access/",
    "updatedAt": "2026-05-29T00:00:00Z"
  },
  {
    "id": "13108-005",
    "name": "木場公園 第一駐車場",
    "address": "東京都江東区木場4-1-1",
    "latitude": 35.672569,
    "longitude": 139.806534,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13108",
    "cityName": "江東区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者とその付添者が対象。駐車場係員に手帳を提示(団体は使用料免除申請書)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1時間400円・以後30分ごと200円・12時間最大1,600円\n障害者割引: 無料\n総台数: 104台",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/kiba/index.html",
    "updatedAt": "2026-05-29T00:00:00Z"
  },
  {
    "id": "13108-006",
    "name": "木場公園 第二駐車場",
    "address": "東京都江東区平野4-6-1",
    "latitude": 35.676365,
    "longitude": 139.807114,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13108",
    "cityName": "江東区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者とその付添者が対象。駐車場係員に手帳を提示(団体は使用料免除申請書)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1時間400円・以後30分ごと200円・12時間最大1,600円\n障害者割引: 無料\n総台数: 30台",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/kiba/index.html",
    "updatedAt": "2026-05-29T00:00:00Z"
  },
  {
    "id": "13108-007",
    "name": "夢の島公園 第一駐車場(南)",
    "address": "東京都江東区夢の島",
    "latitude": 35.651131,
    "longitude": 139.822372,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13108",
    "cityName": "江東区",
    "accessibleSpaceTotal": 7,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者とその付添者が対象。駐車場係員に手帳を提示(団体は使用料免除申請書)"
    },
    "accessibleSpaces": [
      {
        "count": 7
      }
    ],
    "notes": "通常料金: 普通車1時間400円・以後30分ごと200円・12時間最大1,600円\n障害者割引: 無料\n総台数: 123台",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/yumenoshima/index.html",
    "updatedAt": "2026-05-29T00:00:00Z"
  },
  {
    "id": "13108-008",
    "name": "夢の島公園 第二駐車場(北)",
    "address": "東京都江東区夢の島2-1",
    "latitude": 35.650826,
    "longitude": 139.825943,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13108",
    "cityName": "江東区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者とその付添者が対象。駐車場係員に手帳を提示(団体は使用料免除申請書)"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 普通車1時間400円・以後30分ごと200円・12時間最大1,600円\n障害者割引: 無料\n総台数: 20台",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/yumenoshima/index.html",
    "updatedAt": "2026-05-29T00:00:00Z"
  },
  {
    "id": "13108-009",
    "name": "深川スポーツセンター 駐車場",
    "address": "東京都江東区越中島1-2-18",
    "latitude": 35.670124,
    "longitude": 139.791473,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13108",
    "cityName": "江東区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者は駐車場利用料金が区内外問わず全額免除。受付窓口で手帳を提示(運営:江東区健康スポーツ公社)。江東区『障害者福祉のてびき』記載"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 民間委託(料金は公式に明示なし、施設へ要確認) / 駐車場25台\n障害者割引: 無料\n総台数: 25台",
    "sourceUrl": "https://www.city.koto.lg.jp/222010/fukushi/shogaisha/shikumi/documents/18kokyoryokin.pdf",
    "updatedAt": "2026-05-29T00:00:00Z"
  },
  {
    "id": "13108-010",
    "name": "有明スポーツセンター 駐車場",
    "address": "東京都江東区有明2-3-5",
    "latitude": 35.634483,
    "longitude": 139.784256,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13108",
    "cityName": "江東区",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者は駐車場利用料金が区内外問わず全額免除。受付窓口で手帳を提示(運営:江東区健康スポーツ公社)。江東区『障害者福祉のてびき』記載"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 民間委託(料金は公式に明示なし、施設へ要確認) / 駐車場110台\n障害者割引: 無料\n総台数: 110台",
    "sourceUrl": "https://www.city.koto.lg.jp/222010/fukushi/shogaisha/shikumi/documents/18kokyoryokin.pdf",
    "updatedAt": "2026-05-29T00:00:00Z"
  },
  {
    "id": "13108-011",
    "name": "深川北スポーツセンター 駐車場",
    "address": "東京都江東区平野3-2-20",
    "latitude": 35.676205,
    "longitude": 139.804825,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13108",
    "cityName": "江東区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者は駐車場利用料金が区内外問わず全額免除。受付窓口で手帳を提示(運営:江東区健康スポーツ公社)。江東区『障害者福祉のてびき』記載"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 最初30分無料 / 以降20分ごと100円 / 駐車場16台\n障害者割引: 無料\n総台数: 16台",
    "sourceUrl": "https://www.city.koto.lg.jp/222010/fukushi/shogaisha/shikumi/documents/18kokyoryokin.pdf",
    "updatedAt": "2026-05-29T00:00:00Z"
  },
  {
    "id": "13108-012",
    "name": "江東区スポーツ会館 駐車場",
    "address": "東京都江東区北砂1-2-9",
    "latitude": 35.684093,
    "longitude": 139.821762,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13108",
    "cityName": "江東区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者は駐車場利用料金が区内外問わず全額免除。受付窓口で手帳を提示(運営:江東区健康スポーツ公社)。江東区『障害者福祉のてびき』記載"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 民間委託(料金は公式に明示なし、施設へ要確認) / 駐車場35台 ※令和7年10月時点で改修休館中(令和8年3月末まで予定)。現況要確認\n障害者割引: 無料\n総台数: 35台",
    "sourceUrl": "https://www.city.koto.lg.jp/222010/fukushi/shogaisha/shikumi/documents/18kokyoryokin.pdf",
    "updatedAt": "2026-05-29T00:00:00Z"
  },
  {
    "id": "13109-001",
    "name": "きゅりあん(品川区立総合区民会館) 駐車場",
    "address": "東京都品川区東大井5-18-1",
    "latitude": 35.606583,
    "longitude": 139.735687,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13109",
    "cityName": "品川区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・精神障害者保健福祉手帳・愛の手帳(療育手帳)所持者は駐車料金免除。精算前にきゅりあん2階受付または地下1階防災センターに申し出。障害者専用スペースは入庫時に係員へ申告"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 全日30分220円 / 当日1日最大1,700円(24時まで) / 利用8:30-23:00 / 高さ制限2.05m\n障害者割引: 無料\n総台数: 203台",
    "sourceUrl": "https://www.shinagawa-culture.or.jp/curian/access.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13109-002",
    "name": "潮風公園 第一駐車場(北)",
    "address": "東京都品川区東八潮1-4-1",
    "latitude": 35.626068,
    "longitude": 139.76915,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13109",
    "cityName": "品川区",
    "accessibleSpaceTotal": 5,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の所持者は駐車料金免除。出庫時に精算機のインターフォンで申し出。問合せ:東京臨海副都心グループ公園センター03-5500-0385"
    },
    "accessibleSpaces": [
      {
        "count": 5
      }
    ],
    "notes": "通常料金: 普通車1時間400円・以後30分ごと200円・12時間最大1,600円 / 24時間営業\n障害者割引: 無料\n総台数: 134台",
    "sourceUrl": "https://www.tptc.co.jp/park/01_03/access",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13109-003",
    "name": "潮風公園 第二駐車場(南)",
    "address": "東京都品川区東八潮1-4-1",
    "latitude": 35.626068,
    "longitude": 139.76915,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13109",
    "cityName": "品川区",
    "accessibleSpaceTotal": 5,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の所持者は駐車料金免除。出庫時に精算機のインターフォンで申し出。問合せ:東京臨海副都心グループ公園センター03-5500-0385"
    },
    "accessibleSpaces": [
      {
        "count": 5
      }
    ],
    "notes": "通常料金: 普通車1時間400円・以後30分ごと200円・12時間最大1,600円 / 24時間営業\n障害者割引: 無料\n総台数: 84台",
    "sourceUrl": "https://www.tptc.co.jp/park/01_03/access",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13109-004",
    "name": "大井ふ頭中央海浜公園スポーツの森 駐車場",
    "address": "東京都品川区八潮4-1-19",
    "latitude": 35.5947,
    "longitude": 139.751205,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13109",
    "cityName": "品川区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳提示で駐車料金割引(都立海上公園 障がい者手帳割引制度、2026年5月26日案内)。第一駐車場ゲート脇係員またはスポーツセンター03-3790-2378で申告。割引内容の細目は要確認"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00-24:00 30分220円 / 24時間最大1,300円(18:00-9:00は最大600円)\n障害者割引: 無料\n総台数: 290台",
    "sourceUrl": "https://tokyo-south-seaside-parks.com/oi-park/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13110-001",
    "name": "目黒区総合庁舎 中庭駐車場",
    "address": "東京都目黒区上目黒2-19-15",
    "latitude": 35.640465,
    "longitude": 139.6987,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13110",
    "cityName": "目黒区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の所持者は無料。出口精算機横のオートフォンでタイムズコールセンター(0120-77-8924)に連絡し、精算機横のカメラに手帳を掲示して割引処理。運営:タイムズ24"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 平日8:00-18:00 12分400円 / 平日18:00-8:00 12分400円(時間内最大800円) / 土日祝8:00-18:00 12分400円(時間内最大2,000円)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.meguro.tokyo.jp/soumu/shisetsu/koukyoushisetsu/tyusyajo_yuryoka.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13110-002",
    "name": "目黒区民センター 駐車場",
    "address": "東京都目黒区目黒2-4-36",
    "latitude": 35.635323,
    "longitude": 139.707764,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13110",
    "cityName": "目黒区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の所持者は施設付帯駐車場を無料利用可。利用施設の窓口で手帳を提示し申し出。中央体育館・美術館・図書館等を含む複合施設の駐車場"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 20分ごと300円(令和7年4月改定)\n障害者割引: 無料\n総台数: 34台",
    "sourceUrl": "https://www.city.meguro.tokyo.jp/shisankeiei/kusei/keikaku/parking_fee_kaitei.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13110-003",
    "name": "碑文谷体育館 駐車場",
    "address": "東京都目黒区碑文谷6-12-43",
    "latitude": 35.627617,
    "longitude": 139.682449,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13110",
    "cityName": "目黒区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の所持者は施設付帯駐車場を無料利用可。利用施設の窓口で手帳を提示し申し出"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分ごと200円(令和7年4月改定)\n障害者割引: 無料\n総台数: 28台",
    "sourceUrl": "https://www.city.meguro.tokyo.jp/shisankeiei/kusei/keikaku/parking_fee_kaitei.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13110-004",
    "name": "めぐろ区民キャンパス(八雲) 駐車場",
    "address": "東京都目黒区八雲1-1-1",
    "latitude": 35.622326,
    "longitude": 139.673553,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13110",
    "cityName": "目黒区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の所持者は施設付帯駐車場を無料利用可。利用施設の窓口で手帳を提示し申し出。パーシモンホール・八雲中央図書館等の複合施設"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分ごと200円(令和7年4月改定)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.meguro.tokyo.jp/shisankeiei/kusei/keikaku/parking_fee_kaitei.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13110-005",
    "name": "中目黒スクエア 駐車場",
    "address": "東京都目黒区上目黒2-10-13",
    "latitude": 35.641552,
    "longitude": 139.698853,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13110",
    "cityName": "目黒区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の所持者は施設付帯駐車場を無料利用可。利用施設の窓口で手帳を提示し申し出。※令和8年5月時点で当駐車場は休止中(利用不可)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 20分ごと300円(令和7年4月改定)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.meguro.tokyo.jp/shisankeiei/kusei/keikaku/parking_fee_kaitei.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13110-006",
    "name": "田道ふれあい館 駐車場",
    "address": "東京都目黒区目黒1-25-26",
    "latitude": 35.636791,
    "longitude": 139.70787,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13110",
    "cityName": "目黒区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の所持者は施設付帯駐車場を無料利用可。利用施設の窓口で手帳を提示し申し出"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 20分ごと300円(令和7年4月改定)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.meguro.tokyo.jp/shisankeiei/kusei/keikaku/parking_fee_kaitei.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13111-001",
    "name": "大田区役所本庁舎 駐車場",
    "address": "東京都大田区蒲田5-13-14",
    "latitude": 35.561337,
    "longitude": 139.716293,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13111",
    "cityName": "大田区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・療育手帳・精神障害者保健福祉手帳の所持者は時間制限なく無料。用件先の窓口で手帳を提示し無料券の交付を受ける"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 全日8:15-21:45 30分250円(区役所来庁者は1時間まで無料)\n障害者割引: 無料\n総台数: 66台",
    "sourceUrl": "https://www.s-park.jp/map/1087",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13111-002",
    "name": "大田区営アロマ地下駐車場(大田区民ホール・アプリコ)",
    "address": "東京都大田区蒲田5-37-4",
    "latitude": 35.560673,
    "longitude": 139.718063,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13111",
    "cityName": "大田区",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・精神障害者保健福祉手帳・愛の手帳・療育手帳の所持者は5割引。料金精算前に駐車場管理室(03-5703-5553)へ申し出"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 7:00-23:00 30分ごと200円(4時間半まで) / 24時間最大1,800円\n障害者割引: 5割引\n総台数: 297台",
    "sourceUrl": "https://www.city.ota.tokyo.jp/shisetsu/aprico/aroma_p.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13112-001",
    "name": "世田谷公園 駐車場",
    "address": "東京都世田谷区池尻1-5-27",
    "latitude": 35.643364,
    "longitude": 139.680664,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13112",
    "cityName": "世田谷区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(東京都療育手帳)・精神障害者保健福祉手帳・特定医療費(指定難病)受給者証のいずれかを運転者または同乗者が所持で無料。出庫時に管理会社あての機械へ手帳を提示(コピー可)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 区立公園の有料駐車場(料金は公園公式で要確認)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.setagaya.lg.jp/02075/4869.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13112-002",
    "name": "羽根木公園 駐車場",
    "address": "東京都世田谷区代田4-38-52",
    "latitude": 35.66008,
    "longitude": 139.65509,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13112",
    "cityName": "世田谷区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(東京都療育手帳)・精神障害者保健福祉手帳・特定医療費(指定難病)受給者証のいずれかを運転者または同乗者が所持で無料。出庫時に管理会社あての機械へ手帳を提示(コピー可)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 区立公園の有料駐車場(料金は公園公式で要確認)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.setagaya.lg.jp/02075/4869.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13112-003",
    "name": "二子玉川公園 駐車場",
    "address": "東京都世田谷区玉川1-16-1",
    "latitude": 35.608452,
    "longitude": 139.632568,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13112",
    "cityName": "世田谷区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(東京都療育手帳)・精神障害者保健福祉手帳・特定医療費(指定難病)受給者証のいずれかを運転者または同乗者が所持で無料。出庫時に管理会社あての機械へ手帳を提示(コピー可)。TOKYO PUBLIC運営"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分200円(令和7年10月改定) / 旧:最初60分300円・以降20分100円\n障害者割引: 無料\n総台数: 23台",
    "sourceUrl": "https://www.city.setagaya.lg.jp/02075/4869.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13112-004",
    "name": "玉川野毛町公園 駐車場",
    "address": "東京都世田谷区野毛1-25-1",
    "latitude": 35.605839,
    "longitude": 139.641632,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13112",
    "cityName": "世田谷区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(東京都療育手帳)・精神障害者保健福祉手帳・特定医療費(指定難病)受給者証のいずれかを運転者または同乗者が所持で無料。窓口で手帳を提示(コピー可)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 区立公園の有料駐車場(料金は公園公式で要確認)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.setagaya.lg.jp/02075/4869.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13112-005",
    "name": "次大夫堀公園 駐車場",
    "address": "東京都世田谷区喜多見5-27-14",
    "latitude": 35.629379,
    "longitude": 139.599152,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13112",
    "cityName": "世田谷区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(東京都療育手帳)・精神障害者保健福祉手帳・特定医療費(指定難病)受給者証のいずれかを運転者または同乗者が所持で無料。窓口で手帳を提示(コピー可)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 区立公園の有料駐車場(料金は公園公式で要確認)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.setagaya.lg.jp/02075/4869.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13112-006",
    "name": "多摩川緑地広場 駐車場",
    "address": "東京都世田谷区(多摩川河川敷 緑地広場)",
    "latitude": 35.64595,
    "longitude": 139.653183,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13112",
    "cityName": "世田谷区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(東京都療育手帳)・精神障害者保健福祉手帳・特定医療費(指定難病)受給者証のいずれかを運転者または同乗者が所持で無料。窓口で手帳を提示(コピー可)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 有料駐車場(料金は世田谷区で要確認)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.setagaya.lg.jp/02075/4869.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13113-001",
    "name": "宮下公園駐車場(RAYARD MIYASHITA PARK)",
    "address": "東京都渋谷区渋谷1-26-5",
    "latitude": 35.661621,
    "longitude": 139.702072,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13113",
    "cityName": "渋谷区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "身体障害者手帳・愛の手帳・療育手帳・精神障害者保健福祉手帳(写真付き)のいずれかを入場時に提示で3時間まで無料"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分350円 / 24時間最大2,500円\n障害者割引: 3時間無料",
    "sourceUrl": "https://www.city.shibuya.tokyo.jp/shisetsu/churinjo/parking/parking.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13113-002",
    "name": "渋谷区役所前公共地下駐車場",
    "address": "東京都渋谷区宇田川町1-1",
    "latitude": 35.663475,
    "longitude": 139.697189,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13113",
    "cityName": "渋谷区",
    "accessibleSpaceTotal": 3,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "障害者手帳(写真付き)等の提示で入庫後3時間まで無料(1日1回限り)、以降通常料金。管理事務所(03-5458-8801)に提示。運営公式サイトに基づき訂正(以前はIPOS届出データで『当日無料/full』としていたが、運営公式で3時間無料の一部割引と確認)"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 平日8:00-24:00 30分300円 / 土日祝8:00-24:00 30分350円 / 全日0:00-8:00 30分200円 / 平日最大2,900円(12時間ごと)\n障害者割引: 3時間無料\n総台数: 650台",
    "sourceUrl": "https://www.shibuya-parking.jp/about/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13113-003",
    "name": "代々木公園 駐車場",
    "address": "東京都渋谷区代々木神園町2-1",
    "latitude": 35.66917,
    "longitude": 139.70166,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13113",
    "cityName": "渋谷区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者とその付添者が対象。駐車場窓口で手帳を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1時間400円・以後30分ごと200円・当日最大料金あり\n障害者割引: 無料",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/yoyogi/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13114-001",
    "name": "中野区役所駐車場(タイムズ中野区役所)",
    "address": "東京都中野区中野4-11-19(中野区役所地下)",
    "latitude": 35.709118,
    "longitude": 139.662613,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13114",
    "cityName": "中野区",
    "accessibleSpaceTotal": 2,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "障害者手帳・愛の手帳・精神障害者保健福祉手帳の所持者は区役所への用務に関わらず2時間割引(無料)。同伴の介護者も対象。出口精算機または事前精算機右側のオートフォンで連絡し、精算機横のカメラに手帳を提示。運営:タイムズ24"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 乗用車30分500円 / 最大料金:全日17:00-8:00 800円・土日祝8:00-17:00 1,800円\n障害者割引: 2時間無料\n総台数: 53台",
    "sourceUrl": "https://www.city.tokyo-nakano.lg.jp/shisetsu/kuyakusho/kuyakusho/kuyakusyocyusyajyo.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13115-001",
    "name": "和田堀公園 駐車場",
    "address": "東京都杉並区大宮2-22-3",
    "latitude": 35.685802,
    "longitude": 139.639633,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13115",
    "cityName": "杉並区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者とその付添者が対象。駐車場窓口で手帳を提示(杉並区も都立公園駐車場入場料免除を案内)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1時間400円・以後30分ごと200円(都立公園駐車場)\n障害者割引: 無料",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/wadabori/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13117-001",
    "name": "北区立中央公園駐車場",
    "address": "東京都北区十条台1-2-1",
    "latitude": 35.75351,
    "longitude": 139.728439,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13117",
    "cityName": "北区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・愛の手帳・精神障害者保健福祉手帳の所持者は無料。精算時に精算機のカメラ部分へ手帳を提示。中央公園文化センター併設"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 30分150円 / 24時間最大1,200円 / 30分以内無料 / 営業4-9月5:45-22:30・10-3月6:45-22:30\n障害者割引: 無料\n総台数: 36台",
    "sourceUrl": "https://www.s-park.jp/map/504349",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13117-002",
    "name": "飛鳥山公園駐車場",
    "address": "東京都北区王子1-1-3",
    "latitude": 35.749355,
    "longitude": 139.738647,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13117",
    "cityName": "北区",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳または愛の手帳・精神保健福祉手帳の所持者は駐車料金免除。問合せ03-5980-9210"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 普通車30分150円 / 大型車30分600円 / 24時間営業(実証実験中)\n障害者割引: 無料\n総台数: 19台",
    "sourceUrl": "https://www.city.kita.lg.jp/parks/list/1009531.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13117-003",
    "name": "荒川岩淵関緑地駐車場",
    "address": "東京都北区志茂(荒川河川敷)",
    "latitude": 35.776325,
    "longitude": 139.729614,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13117",
    "cityName": "北区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳または愛の手帳・精神保健福祉手帳の所持者は駐車料金免除。問合せ03-3903-1383"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1回500円(大型車不可) / 土日祝のみ営業 4-9月5:45-18:15・10-3月6:45-17:15\n障害者割引: 無料\n総台数: 38台",
    "sourceUrl": "https://www.city.kita.lg.jp/parks/list/1009531.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13117-004",
    "name": "荒川赤羽緑地駐車場",
    "address": "東京都北区岩淵町(荒川河川敷)",
    "latitude": 35.785446,
    "longitude": 139.723343,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13117",
    "cityName": "北区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳または愛の手帳・精神保健福祉手帳の所持者は駐車料金免除。問合せ03-3903-1383"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1回500円 / 大型車2,000円 / 土日祝のみ営業 4-9月5:45-18:15・10-3月6:45-17:15\n障害者割引: 無料\n総台数: 198台",
    "sourceUrl": "https://www.city.kita.lg.jp/parks/list/1009531.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13117-005",
    "name": "北とぴあ(ほくとぴあ) 駐車場",
    "address": "東京都北区王子1-11-1",
    "latitude": 35.754681,
    "longitude": 139.736511,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13117",
    "cityName": "北区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "区立施設駐車場使用料の減免対象。身体障害者手帳・療育手帳・精神障害者保健福祉手帳の本人が無料(ミライロID対応)。提示方法は施設窓口で要確認"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 有料(料金は施設で要確認)\n障害者割引: 無料",
    "sourceUrl": "https://mirairo-id.jp/place/tokyo-kita-ku/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13117-006",
    "name": "北区役所構内駐車場",
    "address": "東京都北区王子本町1-15-22",
    "latitude": 35.753197,
    "longitude": 139.734283,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13117",
    "cityName": "北区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "区立施設駐車場使用料の減免対象。身体障害者手帳・療育手帳・精神障害者保健福祉手帳の本人が無料(ミライロID対応)。提示方法は窓口で要確認"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 有料(料金は区役所で要確認)\n障害者割引: 無料",
    "sourceUrl": "https://mirairo-id.jp/place/tokyo-kita-ku/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13118-001",
    "name": "ゆいの森あらかわ 駐車場",
    "address": "東京都荒川区荒川2-50-1",
    "latitude": 35.739521,
    "longitude": 139.784164,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13118",
    "cityName": "荒川区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳・被爆者健康手帳・難病に関わる医療券/受給者証の所持者は全額免除。手帳等を提示。駐車台数が少ないため公共交通機関の利用を推奨"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初30分無料 / 以降30分ごと200円\n障害者割引: 無料\n総台数: 12台",
    "sourceUrl": "https://www.yuinomori.city.arakawa.tokyo.jp/info?pid=1881",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13118-002",
    "name": "荒川総合スポーツセンター 駐車場",
    "address": "東京都荒川区南千住6-45-5",
    "latitude": 35.736137,
    "longitude": 139.790924,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13118",
    "cityName": "荒川区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳/愛の手帳・精神障害者保健福祉手帳・被爆者健康手帳の所持者および難病患者と各介助者は無料(施設利用者の送迎等で30分以内も無料)。手帳を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間300円 / 1日上限1,000円 / 利用7:30-23:00(4-10月の日祝は6:30-23:00)\n障害者割引: 無料\n総台数: 57台",
    "sourceUrl": "https://www.city.arakawa.tokyo.jp/a017/sport/shisetsuriyou/s-centerriyou.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13118-003",
    "name": "都立汐入公園 第一駐車場",
    "address": "東京都荒川区南千住8-13-1",
    "latitude": 35.736542,
    "longitude": 139.808655,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13118",
    "cityName": "荒川区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者とその付添者が対象。駐車場窓口で手帳を提示(ミライロID QRコード対応)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1時間400円・以後30分ごと200円(都立公園駐車場)\n障害者割引: 無料",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/shioiri/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13118-004",
    "name": "都立汐入公園 第二駐車場",
    "address": "東京都荒川区南千住8-13-1",
    "latitude": 35.736542,
    "longitude": 139.808655,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13118",
    "cityName": "荒川区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者とその付添者が対象。駐車場窓口で手帳を提示(ミライロID QRコード対応)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1時間400円・以後30分ごと200円(都立公園駐車場)\n障害者割引: 無料",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/shioiri/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13119-001",
    "name": "板橋区役所 南館地下駐車場",
    "address": "東京都板橋区板橋2-66-1",
    "latitude": 35.750694,
    "longitude": 139.709503,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13119",
    "cityName": "板橋区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がい者手帳・愛の手帳・精神障がい者保健福祉手帳(ミライロID含む)の所持者が乗車する車両は区役所窓口の開庁時間中の利用料金が免除。駐車場入口で手帳を提示"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 20分ごと200円\n障害者割引: 無料\n総台数: 35台",
    "sourceUrl": "https://www.city.itabashi.tokyo.jp/kusei/chosha/1043016/1043099/1042901.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13119-002",
    "name": "赤塚公園 駐車場",
    "address": "東京都板橋区高島平3-1",
    "latitude": 35.785572,
    "longitude": 139.655762,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13119",
    "cityName": "板橋区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者とその付添者が対象。駐車場窓口で手帳を提示(ミライロID対応)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1時間400円・以後30分ごと200円(都立公園駐車場)\n障害者割引: 無料",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/akatsuka/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13120-001",
    "name": "練馬区役所 来庁者用駐車場(本庁舎地下1・2階)",
    "address": "東京都練馬区豊玉北6-12-1",
    "latitude": 35.73571,
    "longitude": 139.651672,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13120",
    "cityName": "練馬区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳等の所持者(介助者を含む)は利用料金が無料。地上出口精算所で係員に駐車券とともに手帳等を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 施設利用:最初30分100円・以降15分ごと100円 / 申請手続き等:2時間まで無料・以降15分ごと100円(認証スタンプ必要)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.nerima.tokyo.jp/shisetsu/ku/ku/chushajo.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13120-002",
    "name": "光が丘公園 駐車場",
    "address": "東京都練馬区光が丘4-1-1",
    "latitude": 35.76881,
    "longitude": 139.630585,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13120",
    "cityName": "練馬区",
    "accessibleSpaceTotal": 5,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の所持者とその介護者が対象。駐車場窓口で手帳を提示(練馬区も都立公園駐車場利用料の減免を案内)"
    },
    "accessibleSpaces": [
      {
        "count": 5
      }
    ],
    "notes": "通常料金: 普通車1時間400円・以後30分ごと200円(都立公園駐車場)\n障害者割引: 無料\n総台数: 251台",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/hikarigaoka/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13120-003",
    "name": "石神井公園 駐車場",
    "address": "東京都練馬区石神井台1-26-1",
    "latitude": 35.738823,
    "longitude": 139.596802,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13120",
    "cityName": "練馬区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の所持者とその介護者が対象。駐車場窓口で手帳を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1時間400円・以後30分ごと200円(都立公園駐車場)\n障害者割引: 無料",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/shakujii/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13120-004",
    "name": "大泉中央公園 駐車場",
    "address": "東京都練馬区大泉学園町9-4-3",
    "latitude": 35.775444,
    "longitude": 139.597321,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13120",
    "cityName": "練馬区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の所持者とその介護者が対象。駐車場窓口で手帳を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1時間200円・以後30分ごと100円・12時間最大800円(都立公園駐車場)\n障害者割引: 無料",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/oizumi-chuo/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13121-001",
    "name": "足立区役所 駐車場",
    "address": "東京都足立区中央本町1-17-1",
    "latitude": 35.775124,
    "longitude": 139.805023,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13121",
    "cityName": "足立区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳を所有する方が乗車している場合は無料(ミライロID対応)。出庫時に精算機の呼び出しボタンを押して係員に申告"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分まで100円(以降30分ごと) / 利用 平日8:00-22:00・休日8:30-22:00\n障害者割引: 無料\n総台数: 187台",
    "sourceUrl": "https://www.city.adachi.tokyo.jp/chosha/shisetsu/kuyakusho/001.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13121-002",
    "name": "舎人公園 駐車場(第一・第二・第三)",
    "address": "東京都足立区舎人公園1-1",
    "latitude": 35.798332,
    "longitude": 139.768463,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13121",
    "cityName": "足立区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者とその付添者が対象。駐車場窓口で手帳を提示(ミライロID対応、第一〜第三駐車場とも)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1時間300円・以後20分ごと100円・24時間最大1,200円(都立公園駐車場)\n障害者割引: 無料",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/toneri/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13121-003",
    "name": "東綾瀬公園 駐車場",
    "address": "東京都足立区東綾瀬3-4",
    "latitude": 35.770046,
    "longitude": 139.833344,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13121",
    "cityName": "足立区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者とその付添者が対象。駐車場窓口で手帳を提示(ミライロID対応)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1時間300円・以後20分ごと100円・最大1,200円(都立公園駐車場)\n障害者割引: 無料",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/higashi-ayase/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13121-004",
    "name": "中川公園 駐車場",
    "address": "東京都足立区中川5-4",
    "latitude": 35.77422,
    "longitude": 139.853043,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13121",
    "cityName": "足立区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者とその付添者が対象。駐車場窓口で手帳を提示(ミライロID対応)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1時間400円・以後30分ごと200円(都立公園駐車場)\n障害者割引: 無料",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/nakagawa/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13122-001",
    "name": "新小岩公園 駐車場",
    "address": "東京都葛飾区西新小岩1-1-3",
    "latitude": 35.715809,
    "longitude": 139.854111,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13122",
    "cityName": "葛飾区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳または療育手帳・精神障害者保健福祉手帳のいずれかを所持する方が運転または同乗する車両は免除。精算前に精算機のインターホンで連絡し車室番号と手帳を申告"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 最初30分無料 / 以降30分ごと100円\n障害者割引: 無料\n総台数: 11台",
    "sourceUrl": "https://www.city.katsushika.lg.jp/institution/1000096/1006898.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13122-002",
    "name": "奥戸総合スポーツセンター 駐車場",
    "address": "東京都葛飾区奥戸7-17-1",
    "latitude": 35.736671,
    "longitude": 139.861893,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13122",
    "cityName": "葛飾区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳・療育手帳を所持する方は受付に手帳を提示し申請すると駐車料金が無料(受給者証・ミライロIDは対象外)。体育館・温水プール館が対象"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 有料(料金は施設で要確認)\n障害者割引: 無料",
    "sourceUrl": "https://spo.katsushika-web.net/barrier-free/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13122-003",
    "name": "水元総合スポーツセンター体育館 駐車場",
    "address": "東京都葛飾区東水元(水元スポーツセンター公園内)",
    "latitude": 35.777122,
    "longitude": 139.868835,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13122",
    "cityName": "葛飾区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳・療育手帳を所持する方は受付に手帳を提示し申請すると駐車料金が無料(受給者証・ミライロIDは対象外)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 有料(料金は施設で要確認)\n障害者割引: 無料",
    "sourceUrl": "https://spo.katsushika-web.net/barrier-free/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13122-004",
    "name": "水元公園 駐車場(第一・第二・第三)",
    "address": "東京都葛飾区水元公園3-2",
    "latitude": 35.790569,
    "longitude": 139.871552,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13122",
    "cityName": "葛飾区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者とその付添者が対象。駐車場窓口で手帳を提示(ミライロID対応、第一〜第三駐車場とも)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1時間300円・以後20分ごと100円・12時間最大1,200円(都立公園駐車場)\n障害者割引: 無料",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/mizumoto/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13122-005",
    "name": "葛飾区役所 駐車場",
    "address": "東京都葛飾区立石5-13-1",
    "latitude": 35.743164,
    "longitude": 139.84729,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13122",
    "cityName": "葛飾区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳または療育手帳・精神障害者保健福祉手帳のいずれかを所持する方が運転または同乗する車両は駐車料金免除。精算前に精算機のインターホンで車室番号と手帳を申告。※2巡目調査では区公式の駐車場案内ページに障害者専用免除の明記を確認できず(来庁者は全員30分無料)。利用前に要確認"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 有料(料金は区役所で要確認)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.katsushika.lg.jp/kenkou/1000053/1002246/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13123-001",
    "name": "東部交通公園 駐車場",
    "address": "東京都江戸川区西小松川町3-1",
    "latitude": 35.696301,
    "longitude": 139.861786,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13123",
    "cityName": "江戸川区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳を所持する方が運転または同乗する車両は免除。手帳と駐車券を東部交通公園管理事務所(03-3670-5455)へ提示し帰園時に係員が精算機操作"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車:最初1時間200円・以降100円/時間・12時間最大1,000円 / 大型車:最初1時間600円・以降300円/時間\n障害者割引: 無料",
    "sourceUrl": "https://www.city.edogawa.tokyo.jp/e066/kenko/fukushikaigo/shogaisha/waribiki/sonota/kuritsuchushajo.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13123-002",
    "name": "総合レクリエーション公園 駐車場",
    "address": "東京都江戸川区(総合レクリエーション公園)",
    "latitude": 35.706738,
    "longitude": 139.868057,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13123",
    "cityName": "江戸川区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳を所持する方が運転または同乗する車両は免除。手帳を提示し係員に申告"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 区立公園の有料駐車場(料金は公園で要確認)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.edogawa.tokyo.jp/e066/kenko/fukushikaigo/shogaisha/waribiki/sonota/kuritsuchushajo.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13123-003",
    "name": "葛西臨海公園 駐車場",
    "address": "東京都江戸川区臨海町6-2-1",
    "latitude": 35.640774,
    "longitude": 139.855331,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13123",
    "cityName": "江戸川区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳のいずれかを駐車場で提示で無料(ミライロID対応)。問合せ:東京都公園協会03-3232-3138"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1時間400円・以後30分ごと200円・平日12時間最大1,600円(土日祝最大なし)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.edogawa.tokyo.jp/e041/kenko/fukushikaigo/shogaisha/waribiki/sonota/toritsumuryo.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13123-004",
    "name": "篠崎公園 駐車場(第一・第二)",
    "address": "東京都江戸川区上篠崎1-25-1",
    "latitude": 35.714901,
    "longitude": 139.897964,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13123",
    "cityName": "江戸川区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳のいずれかを駐車場で提示で無料(ミライロID対応)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1時間300円・以後20分ごと100円・当日最大1,200円(都立公園駐車場)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.edogawa.tokyo.jp/e041/kenko/fukushikaigo/shogaisha/waribiki/sonota/toritsumuryo.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13123-005",
    "name": "宇喜田公園 駐車場(第一・第二)",
    "address": "東京都江戸川区北葛西3-2-1",
    "latitude": 35.671516,
    "longitude": 139.858459,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13123",
    "cityName": "江戸川区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳のいずれかを駐車場で提示で無料(ミライロID対応)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1時間300円・以後20分ごと100円・12時間最大1,200円(都立公園駐車場)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.edogawa.tokyo.jp/e041/kenko/fukushikaigo/shogaisha/waribiki/sonota/toritsumuryo.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13123-006",
    "name": "大島小松川公園 駐車場",
    "address": "東京都江戸川区小松川1-7",
    "latitude": 35.691643,
    "longitude": 139.848969,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13123",
    "cityName": "江戸川区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳のいずれかを駐車場で提示で無料(ミライロID対応)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1時間400円・以後30分ごと200円(都立公園駐車場)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.edogawa.tokyo.jp/e041/kenko/fukushikaigo/shogaisha/waribiki/sonota/toritsumuryo.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13201-001",
    "name": "市営八王子駅北口地下駐車場",
    "address": "東京都八王子市旭町1先(八王子駅北口地下)",
    "latitude": 35.655796,
    "longitude": 139.336212,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13201",
    "cityName": "八王子市",
    "accessibleSpaceTotal": 8,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の交付を受けた方が運転または同乗する車両は上限2時間まで免除。精算前に駐車券と手帳を提示"
    },
    "accessibleSpaces": [
      {
        "count": 8
      }
    ],
    "notes": "通常料金: 15分ごと100円(0:00-7:00は30分ごと100円)\n障害者割引: 2時間無料\n総台数: 429台",
    "sourceUrl": "https://www.city.hachioji.tokyo.jp/kurashi/welfare/005/007/001/p004213.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13201-002",
    "name": "市営旭町駐車場",
    "address": "東京都八王子市旭町10先",
    "latitude": 35.657051,
    "longitude": 139.339706,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13201",
    "cityName": "八王子市",
    "accessibleSpaceTotal": 2,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の交付を受けた方が運転または同乗する車両は上限2時間まで免除。精算前に駐車券と手帳を提示"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 15分ごと100円(0:00-7:00は30分ごと100円)\n障害者割引: 2時間無料\n総台数: 150台",
    "sourceUrl": "https://www.city.hachioji.tokyo.jp/kurashi/welfare/005/007/001/p004213.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13201-003",
    "name": "市営南大沢駐車場",
    "address": "東京都八王子市南大沢2-27",
    "latitude": 35.611881,
    "longitude": 139.379471,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13201",
    "cityName": "八王子市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の交付を受けた方が運転または同乗する車両は上限2時間まで免除。精算前に駐車券と手帳を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分ごと120円(8:00-22:30) / 夜間駐車1,140円(22:30-8:00)\n障害者割引: 2時間無料",
    "sourceUrl": "https://www.city.hachioji.tokyo.jp/kurashi/welfare/005/007/001/p004213.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13201-004",
    "name": "いちょうホール(八王子市芸術文化会館) 駐車場",
    "address": "東京都八王子市本町24-1",
    "latitude": 35.662102,
    "longitude": 139.332779,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13201",
    "cityName": "八王子市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の交付を受けた方が運転または同乗する車両は上限2時間まで免除。事務所で駐車券と手帳を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 20分100円(1日最大900円) / 地下23台・第1 32台・第2 36台\n障害者割引: 2時間無料",
    "sourceUrl": "https://www.hachiojibunka.or.jp/icho/facility/parking/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13201-005",
    "name": "高尾山麓駐車場",
    "address": "東京都八王子市高尾町2479",
    "latitude": 35.628479,
    "longitude": 139.265259,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13201",
    "cityName": "八王子市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の交付を受けた方が運転または同乗する車両は上限3時間まで免除。精算前に駐車券と手帳を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 昼間8:00-17:00 30分200円 / 夜間17:00-8:00 60分200円 / 最大 平日800円・土日祝および5月11月2,000円(12時間)(2026年5月1日改定)\n障害者割引: 3時間無料",
    "sourceUrl": "https://www.city.hachioji.tokyo.jp/kurashi/welfare/005/007/001/p004213.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13202-001",
    "name": "立川市営 北口第一駐車場",
    "address": "東京都立川市曙町2-36-2",
    "latitude": 35.701874,
    "longitude": 139.414169,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13202",
    "cityName": "立川市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳・戦傷病者手帳のいずれかを所持する方が運転または同乗で2時間まで無料。日中は出庫時に管理人へ声掛け、夜間はオートフォンで連絡しカメラに手帳を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:30-22:30 30分ごと250円 / 22:30-8:30 30分ごと150円\n障害者割引: 2時間無料\n総台数: 216台",
    "sourceUrl": "https://www.city.tachikawa.lg.jp/kurashi/kotsu/1001932/1001963/1001966.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13202-002",
    "name": "国営昭和記念公園 立川口駐車場",
    "address": "東京都立川市緑町3173",
    "latitude": 35.707981,
    "longitude": 139.397079,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13202",
    "cityName": "立川市",
    "accessibleSpaceTotal": 20,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれか(ミライロID含む)を提示で本人および付添人1名まで駐車料無料"
    },
    "accessibleSpaces": [
      {
        "count": 20
      }
    ],
    "notes": "通常料金: 普通車1日900円(年間パスポート提示800円) / 原付・自動二輪260円 / 大型車2,500円\n障害者割引: 無料",
    "sourceUrl": "https://www.showakinen-koen.jp/park-information/barrier-free/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13202-003",
    "name": "国営昭和記念公園 西立川口駐車場",
    "address": "東京都立川市緑町(西立川口)",
    "latitude": 35.707447,
    "longitude": 139.404404,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13202",
    "cityName": "立川市",
    "accessibleSpaceTotal": 6,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれか(ミライロID含む)を提示で本人および付添人1名まで駐車料無料"
    },
    "accessibleSpaces": [
      {
        "count": 6
      }
    ],
    "notes": "通常料金: 普通車1日900円(年間パスポート提示800円) / 原付・自動二輪260円 / 大型車2,500円\n障害者割引: 無料",
    "sourceUrl": "https://www.showakinen-koen.jp/park-information/barrier-free/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13202-004",
    "name": "国営昭和記念公園 砂川口駐車場",
    "address": "東京都立川市緑町(砂川口)",
    "latitude": 35.707447,
    "longitude": 139.404404,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13202",
    "cityName": "立川市",
    "accessibleSpaceTotal": 6,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれか(ミライロID含む)を提示で本人および付添人1名まで駐車料無料"
    },
    "accessibleSpaces": [
      {
        "count": 6
      }
    ],
    "notes": "通常料金: 普通車1日900円(年間パスポート提示800円) / 原付・自動二輪260円 / 大型車2,500円\n障害者割引: 無料",
    "sourceUrl": "https://www.showakinen-koen.jp/park-information/barrier-free/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13203-001",
    "name": "武蔵野市民文化会館 駐車場",
    "address": "東京都武蔵野市中町3-9-11",
    "latitude": 35.711914,
    "longitude": 139.565796,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13203",
    "cityName": "武蔵野市",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "運転者または同乗者が障害者手帳を提示すると駐車料金免除。障害者専用3台"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 1時間200円(地階リフト式・約40台・利用8:30-21:45)\n障害者割引: 無料\n総台数: 71台",
    "sourceUrl": "https://www.musashino.or.jp/bunka/1002094/1001497.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13203-002",
    "name": "武蔵野中央公園 駐車場",
    "address": "東京都武蔵野市八幡町2-4-22",
    "latitude": 35.718575,
    "longitude": 139.556,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13203",
    "cityName": "武蔵野市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者とその付添者が対象。駐車場窓口で手帳を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1時間400円・以後30分ごと200円(都立公園駐車場)\n障害者割引: 無料",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/musashino-chuo/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13106-002",
    "name": "台東リバーサイドスポーツセンター 駐車場",
    "address": "東京都台東区今戸1-1-10",
    "latitude": 35.717751,
    "longitude": 139.804153,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13106",
    "cityName": "台東区",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・愛の手帳・精神障害者保健福祉手帳のいずれかの所持者が乗車する自動車が対象。台東区内に住所または勤務先を有する者に限る(台東区体育施設条例施行規則第10条の2に基づく使用料免除)"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 最初30分無料 / 以降30分ごと100円(上限なし)\n障害者割引: 無料\n総台数: 51台",
    "sourceUrl": "https://www1.g-reiki.net/taito/reiki_honbun/g107RG00000339.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13111-003",
    "name": "城南島海浜公園 駐車場(第1・第2)",
    "address": "東京都大田区城南島1丁目",
    "latitude": 35.577702,
    "longitude": 139.770279,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13111",
    "cityName": "大田区",
    "accessibleSpaceTotal": 8,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者は全額免除。駐車券と手帳を駐車場係員または公園管理事務所受付窓口に提示。2026年4月より管理が海上公園南部みらいパートナーズへ移管"
    },
    "accessibleSpaces": [
      {
        "count": 8
      }
    ],
    "notes": "通常料金: 最初1時間300円・以後30分100円(土日祝は最初1時間200円・以後30分100円)\n障害者割引: 無料\n総台数: 267台",
    "sourceUrl": "https://www.s-park.jp/map/28806",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13113-004",
    "name": "東京都立広尾病院 駐車場",
    "address": "東京都渋谷区恵比寿2-34-10",
    "latitude": 35.647503,
    "longitude": 139.722046,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13113",
    "cityName": "渋谷区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳または愛の手帳を提示で本人および付添者の駐車料金無料。工事に伴い第二駐車場の一部が2026年2月より閉鎖中"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 患者・付添 3時間まで100円 / 以降1時間ごと100円\n障害者割引: 無料",
    "sourceUrl": "https://www.tmhp.jp/hiroo/about/innai/shisetsu.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13113-005",
    "name": "日本赤十字社医療センター 駐車場",
    "address": "東京都渋谷区広尾4-1-22",
    "latitude": 35.656685,
    "longitude": 139.718201,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13113",
    "cityName": "渋谷区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳を所持し当センターを利用する方は駐車料金無料(テナントのみの利用は対象外)。受付で手帳を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分700円 / 1日最大4,800円\n障害者割引: 無料\n総台数: 359台",
    "sourceUrl": "https://www.med.jrc.or.jp/visit/tabid/751/Default.aspx",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13114-002",
    "name": "東京警察病院 駐車場",
    "address": "東京都中野区中野2-10-23",
    "latitude": 35.705029,
    "longitude": 139.670425,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13114",
    "cityName": "中野区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳の提示で無料(外来受診・送迎(乗車のみ)・病院呼び出し・待機指示を受けた場合が対象。お見舞い・荷物搬送は割引対象外)。院内で駐車券の認証手続きが必要"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分200円\n障害者割引: 無料\n総台数: 84台",
    "sourceUrl": "https://www.keisatsubyoin.or.jp/access/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13115-002",
    "name": "高円寺地域区民センター(セシオン杉並) 駐車場",
    "address": "東京都杉並区梅里1-22-32",
    "latitude": 35.696636,
    "longitude": 139.654297,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13115",
    "cityName": "杉並区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳のいずれかを提示で駐車料金無料。介助者の同乗可。窓口で提示"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 15分100円\n障害者割引: 無料",
    "sourceUrl": "https://www.city.suginami.tokyo.jp/s024/shisetsu/13877.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13115-003",
    "name": "高井戸地域区民センター(高井戸市民センター) 駐車場",
    "address": "東京都杉並区高井戸東3-7-5",
    "latitude": 35.683449,
    "longitude": 139.615952,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13115",
    "cityName": "杉並区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳のいずれかを提示で駐車料金無料。窓口で提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 15分100円\n障害者割引: 無料",
    "sourceUrl": "https://www.city.suginami.tokyo.jp/s025/shisetsu/13876.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13115-004",
    "name": "阿佐谷地域区民センター 駐車場",
    "address": "東京都杉並区阿佐谷北1-1-1",
    "latitude": 35.705551,
    "longitude": 139.640991,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13115",
    "cityName": "杉並区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳のいずれかを提示で駐車料金無料。窓口で提示"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 15分100円\n障害者割引: 無料\n総台数: 11台",
    "sourceUrl": "https://www.city.suginami.tokyo.jp/s023/shisetsu/13881.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13115-005",
    "name": "荻窪病院 駐車場",
    "address": "東京都杉並区今川3-1-24",
    "latitude": 35.714733,
    "longitude": 139.607941,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13115",
    "cityName": "杉並区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳を所持する患者は駐車料金無料。院内受付で駐車券の割引認証手続きが必要"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間440円(平日7:00-21:00)\n障害者割引: 無料",
    "sourceUrl": "https://www.ogikubo-hospital.or.jp/aboutus/equipment/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13115-006",
    "name": "杉並区役所 駐車場",
    "address": "東京都杉並区阿佐谷南1-15-1",
    "latitude": 35.699203,
    "longitude": 139.636505,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13115",
    "cityName": "杉並区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "身体障害者手帳・療育手帳(愛の手帳)・精神障害者保健福祉手帳のいずれかを提示で最初の2時間まで無料。他の割引との重複不可"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初1時間 30分150円 / 以降30分200円\n障害者割引: 2時間無料",
    "sourceUrl": "https://www.city.suginami.tokyo.jp/kuyakushoannai/569.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13204-001",
    "name": "井の頭恩賜公園 駐車場(第一・第二)",
    "address": "東京都三鷹市井の頭4-1先(井の頭恩賜公園、一部武蔵野市御殿山)",
    "latitude": 35.700344,
    "longitude": 139.577789,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13204",
    "cityName": "三鷹市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳・精神障害者保健福祉手帳または療育手帳を管理所に提示で無料"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1時間まで400円・以後30分ごと200円・入庫後12時間最大1,600円\n障害者割引: 無料",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/inokashira/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13205-001",
    "name": "青梅市役所 駐車場",
    "address": "東京都青梅市東青梅1-11-1",
    "latitude": 35.788086,
    "longitude": 139.275269,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13205",
    "cityName": "青梅市",
    "accessibleSpaceTotal": 8,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳もしくは療育手帳・精神障害者保健福祉手帳の交付を受けた方(同乗する車の運転者を含む)は無料(要認証)。市役所1階総合案内(夜間・休日は宿直室)・福祉センター・健康センター・東青梅センタービル分室で認証"
    },
    "accessibleSpaces": [
      {
        "count": 8
      }
    ],
    "notes": "通常料金: 1時間100円(開庁日8:00-17:30・木曜は20:00まで、入場から1時間まで無料)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.ome.tokyo.jp/soshiki/6/497.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13206-001",
    "name": "府中の森芸術劇場 駐車場",
    "address": "東京都府中市浅間町1-2",
    "latitude": 35.673431,
    "longitude": 139.492874,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13206",
    "cityName": "府中市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳・愛の手帳・療育手帳・精神障がい者保健福祉手帳のいずれかを所持で駐車料金免除(返金)。入口精算機で一度精算後、レシートと手帳を1階管理事務室の窓口へ提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1回300円(利用8:30-22:00)\n障害者割引: 無料\n総台数: 190台",
    "sourceUrl": "https://www.fuchu-cpf.or.jp/theater/1000160/1000166.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13206-002",
    "name": "府中の森公園 駐車場",
    "address": "東京都府中市浅間町1-3-1",
    "latitude": 35.67701,
    "longitude": 139.492386,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13206",
    "cityName": "府中市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者とその付添者が対象。駐車場窓口で手帳を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1時間400円・以後30分ごと200円(都立公園駐車場)\n障害者割引: 無料",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/fuchunomori/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13206-003",
    "name": "武蔵野の森公園 駐車場",
    "address": "東京都府中市朝日町3-5-2",
    "latitude": 35.678181,
    "longitude": 139.524384,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13206",
    "cityName": "府中市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者とその付添者が対象。駐車場窓口で手帳を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1時間300円・以後20分ごと100円・12時間最大1,200円(都立公園駐車場)\n障害者割引: 無料",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/musashino-no-mori/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13207-001",
    "name": "アキシマエンシス 駐車場",
    "address": "東京都昭島市つつじが丘3-3-15",
    "latitude": 35.711323,
    "longitude": 139.368759,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13207",
    "cityName": "昭島市",
    "accessibleSpaceTotal": 3,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "障害者手帳等を所持する方は3時間以降の料金が半額。帰りに総合案内で手続き"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 30分まで無料 / 30分-3時間100円 / 以降1時間ごと100円(施設利用者は3時間まで無料) / 入庫8:30-22:00\n障害者割引: 3時間以降半額\n総台数: 60台",
    "sourceUrl": "https://www.akishimaensis.jp/access/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13208-001",
    "name": "神代植物公園 駐車場",
    "address": "東京都調布市深大寺元町5-31-10",
    "latitude": 35.670731,
    "longitude": 139.549225,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13208",
    "cityName": "調布市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者とその付添者が対象。駐車場窓口で手帳を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1時間300円・以後20分ごと100円・12時間最大1,200円(都立公園駐車場)\n障害者割引: 無料",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/jindai/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13208-002",
    "name": "野川公園 駐車場",
    "address": "東京都三鷹市大沢6-4-1先(野川公園、調布市・小金井市にまたがる)",
    "latitude": 35.679752,
    "longitude": 139.525803,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13208",
    "cityName": "調布市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者とその付添者が対象。駐車場窓口で手帳を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1時間300円・以後20分ごと100円・12時間最大1,200円(都立公園駐車場)\n障害者割引: 無料",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/nogawa/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13209-001",
    "name": "薬師池公園 駐車場(北・東第一・東第二・西園)",
    "address": "東京都町田市本町田3270",
    "latitude": 35.570858,
    "longitude": 139.445938,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13209",
    "cityName": "町田市",
    "accessibleSpaceTotal": 11,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "普通自動車を利用し身体障害者手帳・愛の手帳・精神障害者保健福祉手帳を所持する方は駐車料金免除。園内警備室・リス園入口受付・西園インフォメーション棟受付で手帳を提示し減免処理後に出庫"
    },
    "accessibleSpaces": [
      {
        "count": 11
      }
    ],
    "notes": "通常料金: 有料(料金は公園で要確認)\n障害者割引: 無料\n総台数: 457台",
    "sourceUrl": "https://machida-shikisainomori.com/2019/04/11/%E9%A7%90%E8%BB%8A%E3%83%BB%E9%A7%90%E8%BC%AA%E5%A0%B4/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13209-002",
    "name": "町田市立野津田公園 駐車場",
    "address": "東京都町田市野津田町2035",
    "latitude": 35.592484,
    "longitude": 139.438889,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13209",
    "cityName": "町田市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "普通自動車を利用し障がい者手帳を所持する方は駐車料金免除。入場時と退場時に手帳を提示(コピー不可)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 平日:全車種無料 / 土日祝(大型イベント除く):1時間無料・1時間30分まで100円・以降30分ごと50円・1日最大800円\n障害者割引: 無料",
    "sourceUrl": "https://www.nozuta-park.com/parking.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13210-001",
    "name": "小金井公園 駐車場(第一・第二)",
    "address": "東京都小金井市関野町1-13-1",
    "latitude": 35.716434,
    "longitude": 139.521393,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13210",
    "cityName": "小金井市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者とその付添者が対象。駐車場窓口で手帳を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1時間300円・以後20分ごと100円・平日12時間最大1,200円(土日祝最大なし)(第一は小金井市・第二は武蔵野市桜堤)\n障害者割引: 無料",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/koganei/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13210-002",
    "name": "武蔵野公園 駐車場",
    "address": "東京都小金井市(武蔵野公園、府中市にまたがる)",
    "latitude": 35.699444,
    "longitude": 139.503052,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13210",
    "cityName": "小金井市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者とその付添者が対象。駐車場窓口で手帳を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1時間400円・以後30分ごと200円(都立公園駐車場)\n障害者割引: 無料",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/musashino/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13211-001",
    "name": "小平市中央公園 駐車場(市民総合体育館前)",
    "address": "東京都小平市津田町1-1",
    "latitude": 35.723438,
    "longitude": 139.462296,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13211",
    "cityName": "小平市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳をお持ちの方などは料金が半額。市民総合体育館利用時は精算前に体育館窓口で手帳を提示(介護者1名も割引対象)。問合せ:こだいらパークコネクトグループ080-4092-7824"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 入庫から30分無料 / 以降30分ごと100円 / 24時間最大600円(令和7年9月有料化)\n障害者割引: 半額",
    "sourceUrl": "https://www.city.kodaira.tokyo.jp/kurashi/120/120316.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13212-001",
    "name": "日野市民の森ふれあいホール 駐車場",
    "address": "東京都日野市日野本町6-1-3",
    "latitude": 35.681778,
    "longitude": 139.402344,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13212",
    "cityName": "日野市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳所持者は駐車料金全額免除。手帳を持参のうえ受付へ"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間ごと100円(最初の15分間無料) / 1日最大800円\n障害者割引: 無料",
    "sourceUrl": "https://hinofureai.com/access/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13110-007",
    "name": "目黒区立中央体育館 駐車場",
    "address": "東京都目黒区目黒本町5-22-8",
    "latitude": 35.618473,
    "longitude": 139.699081,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13110",
    "cityName": "目黒区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の所持者は施設窓口で申し出ることで無料(令和7年4月の施設付帯駐車場料金改定後も継続)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分ごと200円(令和7年4月改定)\n障害者割引: 無料\n総台数: 15台",
    "sourceUrl": "https://www.city.meguro.tokyo.jp/shisankeiei/kusei/keikaku/parking_fee_kaitei.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13112-007",
    "name": "世田谷区立大蔵運動公園 総合運動場 駐車場",
    "address": "東京都世田谷区大蔵4-6-1",
    "latitude": 35.628792,
    "longitude": 139.61441,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13112",
    "cityName": "世田谷区",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(これに準ずるものを含む)の所持者は無料。駐車場警備員へ手帳を提示"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 20分100円\n障害者割引: 無料\n総台数: 119台",
    "sourceUrl": "https://www.se-sports.or.jp/facility/sougou/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13112-008",
    "name": "世田谷区立千歳温水プール 駐車場",
    "address": "東京都世田谷区船橋7-9-1",
    "latitude": 35.65802,
    "longitude": 139.618393,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13112",
    "cityName": "世田谷区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(これに準ずるものを含む)の所持者は無料。1階受付へ手帳を提示"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 20分100円\n障害者割引: 無料\n総台数: 31台",
    "sourceUrl": "https://www.se-sports.or.jp/facility/chitose/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13112-009",
    "name": "砧公園 駐車場",
    "address": "東京都世田谷区砧公園1-1",
    "latitude": 35.631836,
    "longitude": 139.621231,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13112",
    "cityName": "世田谷区",
    "accessibleSpaceTotal": 6,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の提示で障害者および付添者(原則1名)が無料。団体利用は使用料免除申請書が必要"
    },
    "accessibleSpaces": [
      {
        "count": 6
      }
    ],
    "notes": "通常料金: 1時間400円・以後30分ごと200円・12時間最大1,600円\n障害者割引: 無料\n総台数: 235台",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/kinuta/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13112-010",
    "name": "駒沢オリンピック公園 第一駐車場",
    "address": "東京都世田谷区駒沢公園1-1",
    "latitude": 35.626083,
    "longitude": 139.657501,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13112",
    "cityName": "世田谷区",
    "accessibleSpaceTotal": 6,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳の所持者は無料。精算前に陸上競技場内サービスセンターへ申し出て駐車券と手帳を提示"
    },
    "accessibleSpaces": [
      {
        "count": 6
      }
    ],
    "notes": "通常料金: 1時間400円・以後30分ごと200円・12時間最大1,600円\n障害者割引: 無料\n総台数: 181台",
    "sourceUrl": "https://www.tef.or.jp/kopgp/parking.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13112-011",
    "name": "駒沢オリンピック公園 第二駐車場",
    "address": "東京都世田谷区駒沢公園1-1",
    "latitude": 35.626083,
    "longitude": 139.657501,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13112",
    "cityName": "世田谷区",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳の所持者は無料。精算前に現地警備員へ申し出て駐車券と手帳を提示"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 1時間400円・以後30分ごと200円・12時間最大1,600円\n障害者割引: 無料\n総台数: 41台",
    "sourceUrl": "https://www.tef.or.jp/kopgp/parking.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13118-005",
    "name": "あらかわ遊園 地下駐車場",
    "address": "東京都荒川区西尾久6-35-11",
    "latitude": 35.753117,
    "longitude": 139.75766,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13118",
    "cityName": "荒川区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳3級以上または第一種・愛の手帳3度以上・精神障害者保健福祉手帳の所持者が本人運転で利用する場合は無料。出庫前に地下駐車場管理事務所で手帳と運転免許証を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 平日30分100円(1日最大500円) / 土日祝1時間300円\n障害者割引: 無料\n総台数: 114台",
    "sourceUrl": "https://www.city.arakawa.tokyo.jp/a030/shougaisha/shien/bunka.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13213-001",
    "name": "TAC東村山スポーツセンター 駐車場(第1・第2)",
    "address": "東京都東村山市久米川町3-30-5",
    "latitude": 35.761127,
    "longitude": 139.479584,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13213",
    "cityName": "東村山市",
    "accessibleSpaceTotal": 5,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "スポーツセンターを利用する障害のある方は無料。受付で障害者手帳またはミライロIDを提示。第1駐車場71台(障害者用5台)・第2駐車場26台"
    },
    "accessibleSpaces": [
      {
        "count": 5
      }
    ],
    "notes": "通常料金: 一般60分400円 / センター利用者:第1 180分200円・第2 180分100円(以降60分100円、30分以内無料)\n障害者割引: 無料\n総台数: 97台",
    "sourceUrl": "https://www.higashimurayama-sportscenter.jp/access/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13213-002",
    "name": "東村山中央公園 駐車場",
    "address": "東京都東村山市富士見町5-4-67",
    "latitude": 35.748219,
    "longitude": 139.456573,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13213",
    "cityName": "東村山市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "当駐車場は全利用者が無料(約10台)。障害者専用の割引制度ではないが、障害者も無料で利用可。問合せ:東村山中央公園サービスセンター042-392-7322"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 無料(全利用者無料・約10台)\n障害者割引: 無料",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/higashimurayama-chuo/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13214-001",
    "name": "武蔵国分寺公園 駐車場",
    "address": "東京都国分寺市泉町2-1-1",
    "latitude": 35.696468,
    "longitude": 139.473358,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13214",
    "cityName": "国分寺市",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者とその付添者が対象。駐車場窓口で手帳を提示"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 普通車1時間400円・以後30分ごと200円(都立公園駐車場)\n障害者割引: 無料\n総台数: 22台",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/musashikokubunji/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13215-001",
    "name": "国立市役所 有料時間貸駐車場",
    "address": "東京都国立市富士見台2-47-1",
    "latitude": 35.684376,
    "longitude": 139.441513,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13215",
    "cityName": "国立市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・療育手帳・精神障害者保健福祉手帳・介護保険被保険者証等の所持者は利用時間無料(市役所のほか市民芸術小ホール・市民総合体育館・谷保第三公園等の周辺公共施設利用時も対象)。手帳等を提示。運営:三井のリパーク"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00-22:00 25分200円 / 22:00-8:00 60分100円 / 24時間最大800円\n障害者割引: 無料",
    "sourceUrl": "https://www.city.kunitachi.tokyo.jp/soshiki/Dept02/Div01/Sec01/gyomu/shisetsu/0221/1480403453874.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13218-001",
    "name": "福生市営 福生駅西口駐車場",
    "address": "東京都福生市本町92-1",
    "latitude": 35.740902,
    "longitude": 139.325958,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13218",
    "cityName": "福生市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳・戦傷病者手帳のいずれかを所持で2時間まで無料。出庫の際に手帳を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 9:00-24:00 30分ごと100円 / 0:00-9:00 1時間ごと100円 / 24時間以内最大700円\n障害者割引: 2時間無料\n総台数: 23台",
    "sourceUrl": "https://www.city.fussa.tokyo.jp/map/chushajo/1001690.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13218-002",
    "name": "福生地域体育館 駐車場",
    "address": "東京都福生市武蔵野台1-8-7",
    "latitude": 35.746082,
    "longitude": 139.334122,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13218",
    "cityName": "福生市",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳を所持する方は駐車料金無料。受付で手帳を提示"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 有料(料金は施設で要確認) / 第1 10台・第2 8台・第3 29台\n障害者割引: 無料\n総台数: 47台",
    "sourceUrl": "https://fussa-fussa.com/facility/?facility=facility_parking",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13219-001",
    "name": "狛江駅北口地下駐車場(ちかちゅー)",
    "address": "東京都狛江市元和泉1-2-1",
    "latitude": 35.633244,
    "longitude": 139.577957,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13219",
    "cityName": "狛江市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "障害者手帳を所持する方が運転または同乗する車両は2時間まで無料。出庫時に手帳を提示。エコルマホール(狛江市民ホール)の最寄り駐車場"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 15分100円 / 5時間以上一律2,000円 / 利用7:00-26:00\n障害者割引: 2時間無料\n総台数: 191台",
    "sourceUrl": "https://www.city.komae.tokyo.jp/index.cfm/41,0,312,3252,html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13221-001",
    "name": "清瀬市役所 有料駐車場",
    "address": "東京都清瀬市中里5-842",
    "latitude": 35.785568,
    "longitude": 139.52655,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13221",
    "cityName": "清瀬市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳など確認可能な証書を提示した障がい者は利用時間無料(完全免除)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 60分200円 / 入庫後24時間以内 最大500円(来庁者は1時間無料、手続きに1時間以上要する場合は所要時間まで無料)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.kiyose.lg.jp/shisetsu/sisetuosirase/1010238.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13222-001",
    "name": "東久留米市役所 庁舎付属駐車場",
    "address": "東京都東久留米市本町3-3-1",
    "latitude": 35.758629,
    "longitude": 139.529709,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13222",
    "cityName": "東久留米市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳もしくは療育手帳・精神障害者保健福祉手帳の交付を受けた者が運転する車両(当該障害者が同乗する場合を含む)には無料券を発行(庁舎付属駐車場管理運営要綱)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 有料(料金は市役所で要確認)\n障害者割引: 無料",
    "sourceUrl": "https://www2.city.higashikurume.lg.jp/reiki_int/reiki_honbun/g146RG00000606.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13224-001",
    "name": "パルテノン多摩 東西駐車場",
    "address": "東京都多摩市落合2-35",
    "latitude": 35.621365,
    "longitude": 139.425766,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13224",
    "cityName": "多摩市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 4,
      "conditions": "身体障害者手帳・精神障害者保健福祉手帳・療育手帳(愛の手帳)・特定医療費(指定難病)受給者証・小児慢性特定疾病医療受給者証・東京都難病患者等医療券のいずれかを所持で4時間分の駐車割引券を発行。パルテノン多摩2階総合案内に駐車券とともに提示(発行9:00-22:00)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初1時間300円・以後30分ごと150円\n障害者割引: 4時間無料\n総台数: 166台",
    "sourceUrl": "https://www.parthenon.or.jp/access/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13225-001",
    "name": "稲城中央公園 駐車場(総合体育館西・南・総合グラウンド北・野球場)",
    "address": "東京都稲城市長峰1-1",
    "latitude": 35.631828,
    "longitude": 139.486252,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13225",
    "cityName": "稲城市",
    "accessibleSpaceTotal": 8,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳またはミライロIDの提示で駐車料金免除。精算機のインターホンまたはコールセンター(0120-77-8924)で手続き(事前に緑と環境課または総合体育館1階グリーンコミュニティルームでの手続きも可)"
    },
    "accessibleSpaces": [
      {
        "count": 8
      }
    ],
    "notes": "通常料金: 1時間未満無料 / 1時間以上2時間以内200円 / 24時間最大1,200円\n障害者割引: 無料\n総台数: 279台",
    "sourceUrl": "https://www.city.inagi.tokyo.jp/kankyo/midori/1005312/1005332.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13225-002",
    "name": "稲城市役所 駐車場",
    "address": "東京都稲城市東長沼2111",
    "latitude": 35.638123,
    "longitude": 139.504288,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13225",
    "cityName": "稲城市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・精神障害者保健福祉手帳・療育手帳のある方は駐車料金免除(付き添いの方が運転する場合も対象)。総合案内窓口・財産管理課(夜間休日は当直員室)で手続き"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間未満無料 / 1〜2時間以内200円 / 2時間超過は200円+1時間ごと100円 / 24時間最大1,200円\n障害者割引: 無料",
    "sourceUrl": "https://www.city.inagi.tokyo.jp/shisetsu/shiyakusho/1004836/1004837.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13103-008",
    "name": "お台場海浜公園 北口駐車場",
    "address": "東京都港区台場1-4",
    "latitude": 35.626984,
    "longitude": 139.770584,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13103",
    "cityName": "港区",
    "accessibleSpaceTotal": 5,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者が乗車する車両は全額免除。出庫時に手帳原本を出口係員へ提示"
    },
    "accessibleSpaces": [
      {
        "count": 5
      }
    ],
    "notes": "通常料金: 最初1時間400円・以降30分200円・24時間最大2,000円\n障害者割引: 無料\n総台数: 244台",
    "sourceUrl": "https://www.tptc.co.jp/park/01_02/access",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13103-009",
    "name": "お台場海浜公園 中央駐車場",
    "address": "東京都港区台場1-4",
    "latitude": 35.626984,
    "longitude": 139.770584,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13103",
    "cityName": "港区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者が乗車する車両は全額免除。出庫時に手帳原本を出口係員へ提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初1時間400円・以降30分200円\n障害者割引: 無料\n総台数: 101台",
    "sourceUrl": "https://www.tptc.co.jp/park/01_02/access",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13104-008",
    "name": "新宿区立四谷スポーツスクエア 駐車場(コモレ四谷)",
    "address": "東京都新宿区四谷1-6-4",
    "latitude": 35.687668,
    "longitude": 139.72905,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13104",
    "cityName": "新宿区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳のいずれかを提示で駐車料金免除。詳細は四谷スポーツスクエア窓口へ要確認"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分300円 / 最大 平日2,500円・日祝1,500円\n障害者割引: 無料",
    "sourceUrl": "https://yotsuya-sports-square.jp/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13107-009",
    "name": "東京都江戸東京博物館 身障者優先駐車場",
    "address": "東京都墨田区横網1-4-1",
    "latitude": 35.696342,
    "longitude": 139.793961,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13107",
    "cityName": "墨田区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳・被爆者健康手帳の所持者は駐車料金無料。手帳を提示(事前連絡推奨)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通乗用車 1時間1,000円・以降30分500円\n障害者割引: 無料",
    "sourceUrl": "https://www.edo-tokyo-museum.or.jp/information/access/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13107-010",
    "name": "東京都立墨東病院 駐車場",
    "address": "東京都墨田区江東橋4-23-15",
    "latitude": 35.694927,
    "longitude": 139.817917,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13107",
    "cityName": "墨田区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳を所持する患者および付添者は駐車料金無料。手帳を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 患者・付添 3時間まで100円・以後1時間ごと100円\n障害者割引: 無料\n総台数: 189台",
    "sourceUrl": "https://www.tmhp.jp/bokutoh/access.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13107-011",
    "name": "TOKYO PUBLIC 錦糸町パークタワー 駐車場",
    "address": "東京都墨田区江東橋2-19-1",
    "latitude": 35.696175,
    "longitude": 139.812912,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13107",
    "cityName": "墨田区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 1,
      "conditions": "障害者手帳の提示で1時間無料(TMPC公社駐車場の標準制度)。精算時にオートフォン対応、不明な場合は管理室へ申し出"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00-23:00 30分200円 / 23:00-8:00 30分100円\n障害者割引: 1時間無料\n総台数: 289台",
    "sourceUrl": "https://www.tmpc.or.jp/04_parking/result.html?pdid2=220&cmid=0",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13227-001",
    "name": "羽村市動物公園(ヒノトントンZOO) 駐車場",
    "address": "東京都羽村市羽4122",
    "latitude": 35.767899,
    "longitude": 139.330292,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13227",
    "cityName": "羽村市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳・療育手帳・精神障がい者保健福祉手帳の交付を受けた方および付添いの方は駐車料金無料。駐車券を持参し係員に申し出"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通・準中型車300円 / 大型・中型車1,000円(平日無料) / 8:30-17:00(冬季16:30まで)\n障害者割引: 無料",
    "sourceUrl": "https://hamurazoo.jp/access/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13229-001",
    "name": "西東京市庁舎(田無庁舎) 駐車場",
    "address": "東京都西東京市南町5-6-13",
    "latitude": 35.726341,
    "longitude": 139.53801,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13229",
    "cityName": "西東京市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害のある方が運転または同乗し障害福祉関係の手帳やミライロID等を提示した場合は用件終了まで無料。別途無料の障害者用駐車場が庁舎敷地内にあり、警備員に申し出"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 有料(来庁者は用件終了まで無料)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.nishitokyo.lg.jp/siseizyoho/syokai/29cyuusyzyou.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13108-013",
    "name": "辰巳の森海浜公園 第一駐車場",
    "address": "東京都江東区辰巳2-1-35",
    "latitude": 35.648281,
    "longitude": 139.81633,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13108",
    "cityName": "江東区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者は全額免除。精算前に管理事務所または東京辰巳アイスアリーナ受付でサービス券の交付を受ける"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間200円(当日最大1,200円)\n障害者割引: 無料\n総台数: 95台",
    "sourceUrl": "https://www.tptc.co.jp/park/03_01/access",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13108-014",
    "name": "辰巳の森海浜公園 第二駐車場",
    "address": "東京都江東区辰巳2-1-35",
    "latitude": 35.648281,
    "longitude": 139.81633,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13108",
    "cityName": "江東区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者は全額免除。精算前に管理事務所または東京アクアティクスセンター受付でサービス券の交付(17時まで)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間200円(当日最大1,200円)\n障害者割引: 無料\n総台数: 166台",
    "sourceUrl": "https://www.tptc.co.jp/park/03_01/access",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13108-015",
    "name": "有明テニスの森公園 駐車場",
    "address": "東京都江東区有明2-2-22",
    "latitude": 35.636097,
    "longitude": 139.787003,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13108",
    "cityName": "江東区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(都発行)・療育手帳(道府県発行)の所持者はクラブハウス受付に駐車券と手帳を提示で無料。精神障害者保健福祉手帳は対象外"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初1時間300円・以降30分ごと100円\n障害者割引: 無料",
    "sourceUrl": "https://www.tptc.co.jp/park/02_03/access",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13108-016",
    "name": "有明親水海浜公園 駐車場",
    "address": "東京都江東区有明1丁目",
    "latitude": 35.640907,
    "longitude": 139.789581,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13108",
    "cityName": "江東区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者は全額免除。出庫時に精算機のインターホンで申し出"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 30分ごと300円(平日最大2,400円・土日祝最大なし)\n障害者割引: 無料\n総台数: 31台",
    "sourceUrl": "https://www.tptc.co.jp/park/02_07/access",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13108-017",
    "name": "若洲海浜公園・若洲ゴルフリンクス 駐車場",
    "address": "東京都江東区若洲3-1-2",
    "latitude": 35.614788,
    "longitude": 139.834015,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13108",
    "cityName": "江東区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者は若洲ゴルフリンクスクラブハウス窓口に手帳原本を持参で全額免除"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 入場後1時間400円(入場20分無料)・以降1時間100円・当日最大1,000円\n障害者割引: 無料\n総台数: 322台",
    "sourceUrl": "https://www.tptc.co.jp/park/03_07/access",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13108-018",
    "name": "東京都現代美術館(MOT) 駐車場",
    "address": "東京都江東区三好4-1-1",
    "latitude": 35.679321,
    "longitude": 139.80687,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13108",
    "cityName": "江東区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳(種別不問)または減免承認書の提示で無料"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間300円・以降30分ごと150円(現金のみ)\n障害者割引: 無料\n総台数: 90台",
    "sourceUrl": "https://www.mot-art-museum.jp/guide/museum-info/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13108-019",
    "name": "古石場文化センター 駐車場",
    "address": "東京都江東区古石場2-13-2",
    "latitude": 35.666531,
    "longitude": 139.799423,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13108",
    "cityName": "江東区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳(身体障害者手帳・療育手帳・愛の手帳・精神障害者保健福祉手帳)の提示で無料。江東区文化センター条例施行規則第9条による免除"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 20分100円(最初30分無料)\n障害者割引: 無料\n総台数: 11台",
    "sourceUrl": "https://www.kcf.or.jp/furuishiba/outline/service/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13108-020",
    "name": "森下文化センター 駐車場",
    "address": "東京都江東区森下3-12-17",
    "latitude": 35.685516,
    "longitude": 139.802155,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13108",
    "cityName": "江東区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳(身体障害者手帳・療育手帳・愛の手帳・精神障害者保健福祉手帳)の提示で無料。江東区文化センター条例施行規則第9条による免除"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 20分100円(最初30分無料)\n障害者割引: 無料\n総台数: 19台",
    "sourceUrl": "https://www.kcf.or.jp/morishita/outline/service/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13108-021",
    "name": "砂町文化センター 駐車場",
    "address": "東京都江東区北砂5-1-7",
    "latitude": 35.680622,
    "longitude": 139.831345,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13108",
    "cityName": "江東区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳(身体障害者手帳・療育手帳・愛の手帳・精神障害者保健福祉手帳)の提示で無料。江東区文化センター条例施行規則第9条による免除"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 20分100円(最初30分無料)\n障害者割引: 無料\n総台数: 16台",
    "sourceUrl": "https://www.kcf.or.jp/sunamachi/outline/service/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13108-022",
    "name": "東大島文化センター 駐車場",
    "address": "東京都江東区大島8-33-9",
    "latitude": 35.690067,
    "longitude": 139.842102,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13108",
    "cityName": "江東区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳(身体障害者手帳・療育手帳・愛の手帳・精神障害者保健福祉手帳)の提示で無料。江東区文化センター条例施行規則第9条による免除"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 20分100円(最初30分無料)\n障害者割引: 無料\n総台数: 14台",
    "sourceUrl": "https://www.kcf.or.jp/higashiojima/outline/service/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13108-023",
    "name": "豊洲文化センター 駐車場(豊洲シビックセンター)",
    "address": "東京都江東区豊洲2-2-18",
    "latitude": 35.653988,
    "longitude": 139.795425,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13108",
    "cityName": "江東区",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳を提示し文化センターを利用する場合は無料。帰りに駐車券と手帳を8階事務室に提示"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 20分100円(最初30分無料)\n障害者割引: 無料",
    "sourceUrl": "https://www.kcf.or.jp/toyosu/outline/service/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13108-024",
    "name": "豊洲ぐるりパーク 駐車場",
    "address": "東京都江東区豊洲6-5地先",
    "latitude": 35.643154,
    "longitude": 139.780136,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13108",
    "cityName": "江東区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "江東区内在住者に限り、身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の提示で全額免除。区外在住者は対象外"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 1時間400円\n障害者割引: 無料\n総台数: 38台",
    "sourceUrl": "https://toyosugururi.jp/access/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13117-007",
    "name": "滝野川体育館 駐車場",
    "address": "東京都北区西ケ原2-2-10",
    "latitude": 35.746223,
    "longitude": 139.744629,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13117",
    "cityName": "北区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・愛の手帳・精神障害者保健福祉手帳の所持者が乗車している場合、手帳提示で使用料免除"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 30分150円(1日上限1,200円)\n障害者割引: 無料\n総台数: 40台",
    "sourceUrl": "https://www.city.kita.lg.jp/culture-tourism-sports/sports/1010385/1010387/1010416/1010420/1010421.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13117-008",
    "name": "桐ケ丘体育館 駐車場",
    "address": "東京都北区桐ケ丘2-3-1",
    "latitude": 35.781372,
    "longitude": 139.712372,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13117",
    "cityName": "北区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・愛の手帳・精神障害者保健福祉手帳の所持者が乗車している場合、手帳提示で使用料免除"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 30分150円(1日上限1,200円)\n障害者割引: 無料\n総台数: 19台",
    "sourceUrl": "https://www.city.kita.lg.jp/culture-tourism-sports/sports/1010385/1010387/1010416/1010420/1010422.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13117-009",
    "name": "赤羽体育館 駐車場",
    "address": "東京都北区赤羽西1-6-1",
    "latitude": 35.777416,
    "longitude": 139.719742,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13117",
    "cityName": "北区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・愛の手帳・精神障害者保健福祉手帳の所持者が乗車している場合、手帳提示で使用料免除"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 30分150円(1日上限1,200円)\n障害者割引: 無料\n総台数: 43台",
    "sourceUrl": "https://www.city.kita.lg.jp/culture-tourism-sports/sports/1010385/1010387/1010416/1010420/1010423.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13117-010",
    "name": "元気ぷらざ 駐車場",
    "address": "東京都北区志茂1-2-22",
    "latitude": 35.775719,
    "longitude": 139.73085,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13117",
    "cityName": "北区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・愛の手帳・精神障害者保健福祉手帳の所持者が乗車している場合、手帳原本提示で使用料免除(精算後の対応不可)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分200円(2025年4月1日改定)\n障害者割引: 無料\n総台数: 19台",
    "sourceUrl": "https://genkiplaza.tokyo.jp/access.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13117-011",
    "name": "浮間公園 駐車場(都立)",
    "address": "東京都北区浮間2-40-1",
    "latitude": 35.794502,
    "longitude": 139.698013,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13117",
    "cityName": "北区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者は窓口に手帳提示で無料"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 1時間400円・以後30分ごと200円・12時間最大1,600円\n障害者割引: 無料\n総台数: 35台",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/ukima/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13119-003",
    "name": "東京都板橋四ツ又駐車場",
    "address": "東京都板橋区板橋2丁目地先道路下",
    "latitude": 35.748165,
    "longitude": 139.71109,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13119",
    "cityName": "板橋区",
    "accessibleSpaceTotal": 4,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 1,
      "conditions": "身体障害者手帳・愛の手帳・療育手帳・精神障害者保健福祉手帳のいずれかを管理室へ提示で最初の1時間無料"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 30分180円(30分未満無料) / 1日最大1,800円\n障害者割引: 1時間無料\n総台数: 200台",
    "sourceUrl": "https://www.tmpc.or.jp/04_parking/tokyo/tp_yotsumata.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13119-004",
    "name": "板橋区立小豆沢体育館 駐車場",
    "address": "東京都板橋区小豆沢3-1-1",
    "latitude": 35.778168,
    "longitude": 139.698853,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13119",
    "cityName": "板橋区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "心身障がい者の方は駐車料金免除。障害者手帳を駐車券と一緒に受付に提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 20分100円(施設利用者は最初40分無料)\n障害者割引: 無料\n総台数: 29台",
    "sourceUrl": "https://www.city.itabashi.tokyo.jp/bunka/1005245/ryokin/1005279.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13119-005",
    "name": "板橋区立赤塚体育館 駐車場",
    "address": "東京都板橋区赤塚5-6-1",
    "latitude": 35.778076,
    "longitude": 139.641449,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13119",
    "cityName": "板橋区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "心身障がい者の方は駐車料金免除。障害者手帳を駐車券と一緒に受付に提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 20分100円(施設利用者は最初40分無料)\n障害者割引: 無料\n総台数: 38台",
    "sourceUrl": "https://www.city.itabashi.tokyo.jp/bunka/1005245/ryokin/1005279.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13119-006",
    "name": "板橋区立植村記念加賀スポーツセンター 駐車場",
    "address": "東京都板橋区加賀1-10-5",
    "latitude": 35.753315,
    "longitude": 139.715729,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13119",
    "cityName": "板橋区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "心身障がい者の方は駐車料金免除。障害者手帳を駐車券と一緒に受付に提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 20分100円(施設利用者は最初40分無料) / 24時間\n障害者割引: 無料\n総台数: 28台",
    "sourceUrl": "https://www.city.itabashi.tokyo.jp/bunka/1005245/ryokin/1005279.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13119-007",
    "name": "板橋区立上板橋体育館 駐車場",
    "address": "東京都板橋区桜川1-3-1",
    "latitude": 35.757236,
    "longitude": 139.675232,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13119",
    "cityName": "板橋区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "心身障がい者の方は駐車料金免除。障害者手帳を駐車券と一緒に受付に提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 20分100円(施設利用者は最初40分無料)\n障害者割引: 無料\n総台数: 17台",
    "sourceUrl": "https://www.city.itabashi.tokyo.jp/bunka/1005245/ryokin/1005279.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13119-008",
    "name": "板橋区立高島平温水プール 駐車場(熱帯環境植物館共用)",
    "address": "東京都板橋区高島平8-28-1",
    "latitude": 35.791294,
    "longitude": 139.664703,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13119",
    "cityName": "板橋区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "心身障がい者の方は駐車料金免除。障害者手帳・愛の手帳を受付に提示(熱帯環境植物館利用者も同駐車場を使用可)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 20分100円(施設利用者は最初40分無料) / 24時間\n障害者割引: 無料\n総台数: 19台",
    "sourceUrl": "https://www.city.itabashi.tokyo.jp/bunka/1005245/ryokin/1005279.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13119-009",
    "name": "荒川河川敷駐車場 新河岸水再生センター前",
    "address": "東京都板橋区新河岸(荒川河川敷)",
    "latitude": 35.796089,
    "longitude": 139.66748,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13119",
    "cityName": "板橋区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "心身障がい者の方は駐車料金免除。駐車場係員に障害者手帳を提示"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 1回500円 / 土日祝のみ営業(年末年始除く)\n障害者割引: 無料\n総台数: 396台",
    "sourceUrl": "https://www.city.itabashi.tokyo.jp/bunka/1005245/ryokin/1005279.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13119-010",
    "name": "荒川河川敷駐車場 荒川戸田橋下",
    "address": "東京都板橋区舟渡(荒川戸田橋下河川敷)",
    "latitude": 35.790218,
    "longitude": 139.688599,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13119",
    "cityName": "板橋区",
    "accessibleSpaceTotal": 6,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "心身障がい者の方は駐車料金免除。駐車場係員に障害者手帳を提示"
    },
    "accessibleSpaces": [
      {
        "count": 6
      }
    ],
    "notes": "通常料金: 1回500円 / 土日祝のみ営業(年末年始除く)\n障害者割引: 無料\n総台数: 340台",
    "sourceUrl": "https://www.city.itabashi.tokyo.jp/bunka/1005245/ryokin/1005279.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13119-011",
    "name": "東京都立豊島病院 駐車場",
    "address": "東京都板橋区栄町33-1",
    "latitude": 35.752899,
    "longitude": 139.700607,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13119",
    "cityName": "板橋区",
    "accessibleSpaceTotal": 10,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳・医療券等を所持する方は無料。障害者用駐車スペースは屋外2台・地下2階8台"
    },
    "accessibleSpaces": [
      {
        "count": 10
      }
    ],
    "notes": "通常料金: 1時間400円 / 外来患者・付添 3時間まで100円・以降1時間100円\n障害者割引: 無料\n総台数: 162台",
    "sourceUrl": "https://www.tmhp.jp/toshima/about/introduction.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13120-005",
    "name": "TOKYO PUBLIC 練馬中央陸橋ユニバーサルデザイン駐車場",
    "address": "東京都練馬区高松2-6(環状八号線・練馬中央陸橋下)",
    "latitude": 35.74593,
    "longitude": 139.630035,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13120",
    "cityName": "練馬区",
    "accessibleSpaceTotal": 1,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 1,
      "conditions": "障害者手帳(身体障害者手帳・愛の手帳・療育手帳・精神障害者保健福祉手帳)の提示で1時間無料。オートフォン対応(TMPC公社駐車場の標準制度)"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 8:00-22:00 20分100円 / 22:00-8:00 60分100円 / 24時間最大1,300円(繰返し) / 30分未満無料\n障害者割引: 1時間無料\n総台数: 11台",
    "sourceUrl": "https://www.s-park.jp/map/14522/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13120-006",
    "name": "光が丘区民センター 駐車場",
    "address": "東京都練馬区光が丘2-9-6",
    "latitude": 35.75914,
    "longitude": 139.630356,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13120",
    "cityName": "練馬区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者・知的障害者・精神障害者もしくは要介護者(要介護認定者)またはその介助者は、障害者手帳または介護保険被保険者証の提示で利用料免除(光が丘区民センター駐車場利用要綱第7条第5項)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 行政目的利用 2時間まで無料(認証後)・以降30分100円 / その他 30分100円\n障害者割引: 無料\n総台数: 17台",
    "sourceUrl": "https://www.city.nerima.tokyo.jp/shisetsu/ku/hikarigaoka.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13120-007",
    "name": "練馬区立総合体育館 駐車場",
    "address": "東京都練馬区豊玉北6-14-1",
    "latitude": 35.73661,
    "longitude": 139.650955,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13120",
    "cityName": "練馬区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳のいずれかの所持者または要介護認定者は駐車場使用料免除。施設窓口で手帳等を提示"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 最初1時間200円・以後30分100円\n障害者割引: 無料\n総台数: 133台",
    "sourceUrl": "https://www.tokyo-parasports-navi.metro.tokyo.lg.jp/facilities/1052",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13120-008",
    "name": "光が丘体育館 駐車場",
    "address": "東京都練馬区光が丘7-2-10",
    "latitude": 35.755501,
    "longitude": 139.625946,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13120",
    "cityName": "練馬区",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳のいずれかの所持者または要介護認定者は駐車場使用料免除。施設窓口で手帳等を提示"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 最初1時間200円・以後30分100円\n障害者割引: 無料\n総台数: 18台",
    "sourceUrl": "https://www.tokyo-parasports-navi.metro.tokyo.lg.jp/facilities/1057",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13120-009",
    "name": "平和台体育館 駐車場",
    "address": "東京都練馬区平和台3-4-3",
    "latitude": 35.755947,
    "longitude": 139.662689,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13120",
    "cityName": "練馬区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳のいずれかの所持者または要介護認定者は駐車場使用料免除。施設窓口で手帳等を提示"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 最初1時間200円・以後30分100円\n障害者割引: 無料\n総台数: 15台",
    "sourceUrl": "https://www.tokyo-parasports-navi.metro.tokyo.lg.jp/facilities/1055",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13120-010",
    "name": "大泉学園町体育館 駐車場",
    "address": "東京都練馬区大泉学園町2-29-1",
    "latitude": 35.75626,
    "longitude": 139.582947,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13120",
    "cityName": "練馬区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳のいずれかの所持者または要介護認定者は駐車場使用料免除。施設窓口で手帳等を提示"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 最初1時間200円・以後30分100円\n障害者割引: 無料\n総台数: 25台",
    "sourceUrl": "https://www.tokyo-parasports-navi.metro.tokyo.lg.jp/facilities/1056",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13120-011",
    "name": "中村南スポーツ交流センター 駐車場",
    "address": "東京都練馬区中村南1-3-1",
    "latitude": 35.727535,
    "longitude": 139.649704,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13120",
    "cityName": "練馬区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳のいずれかの所持者または要介護認定者は駐車場使用料免除。施設窓口で手帳等を提示"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 最初1時間200円・以後30分100円\n障害者割引: 無料\n総台数: 30台",
    "sourceUrl": "https://www.tokyo-parasports-navi.metro.tokyo.lg.jp/facilities/1058",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13120-012",
    "name": "三原台温水プール 駐車場",
    "address": "東京都練馬区三原台3-38-7",
    "latitude": 35.753525,
    "longitude": 139.600601,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13120",
    "cityName": "練馬区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳のいずれかの所持者または要介護認定者は駐車場使用料免除。施設窓口で手帳等を提示"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 最初1時間200円・以後30分100円\n障害者割引: 無料\n総台数: 12台",
    "sourceUrl": "https://www.tokyo-parasports-navi.metro.tokyo.lg.jp/facilities/1059",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13121-005",
    "name": "ギャラクシティ(こども未来創造館・西新井文化ホール) 駐車場",
    "address": "東京都足立区栗原1-3-1",
    "latitude": 35.779896,
    "longitude": 139.79071,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13121",
    "cityName": "足立区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の所持者が乗車する車両は免除。手帳原本またはミライロIDを1階総合受付または地下2階受付で提示(コピー・撮影画像不可)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分ごと100円\n障害者割引: 無料\n総台数: 41台",
    "sourceUrl": "https://www.galaxcity.jp/about/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13121-006",
    "name": "足立区生涯学習センター(学びピア21) 駐車場",
    "address": "東京都足立区千住5-13-5",
    "latitude": 35.756485,
    "longitude": 139.802155,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13121",
    "cityName": "足立区",
    "accessibleSpaceTotal": 6,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の所持者が乗車する車両は免除。4階受付へ申し出(ミライロID対応)"
    },
    "accessibleSpaces": [
      {
        "count": 6
      }
    ],
    "notes": "通常料金: 30分ごと100円 / 当日最大1,700円(8:00-22:00)\n障害者割引: 無料\n総台数: 56台",
    "sourceUrl": "https://www.adachi-shogakucenter.net/access/access02.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13121-007",
    "name": "東京武道館 駐車場",
    "address": "東京都足立区綾瀬3-20-1",
    "latitude": 35.765015,
    "longitude": 139.825058,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13121",
    "cityName": "足立区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がい者手帳等(身体障害者手帳・愛の手帳・精神障害者保健福祉手帳等)を所持する方は無料。入館時に正面玄関総合受付またはトレーニングルーム受付で利用券を提示し割引券を受領"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 60分110円(3時間まで)・以降30分110円\n障害者割引: 無料\n総台数: 70台",
    "sourceUrl": "https://tbudoukan.jp/access/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13121-008",
    "name": "足立区都市農業公園 駐車場",
    "address": "東京都足立区鹿浜2-44-1",
    "latitude": 35.781986,
    "longitude": 139.744034,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13121",
    "cityName": "足立区",
    "accessibleSpaceTotal": 5,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者は免除。出庫前に管理事務所で手帳原本と駐車票を提示(コピー・画像不可)"
    },
    "accessibleSpaces": [
      {
        "count": 5
      }
    ],
    "notes": "通常料金: 普通車30分100円・当日最大900円 / 大型車30分200円・当日最大1,800円\n障害者割引: 無料\n総台数: 161台",
    "sourceUrl": "https://toshino.ces-net.jp/access.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13121-009",
    "name": "TOKYO PUBLIC 生物園第一駐車場",
    "address": "東京都足立区保木間2-22",
    "latitude": 35.793839,
    "longitude": 139.80806,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13121",
    "cityName": "足立区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳(身体障害者手帳・愛の手帳・精神障害者保健福祉手帳等)の所持者は全額無料。退場時に出口精算機の受話器でセンターに連絡しカメラに手帳を提示"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 8:00-22:00 30分100円・最大600円 / 22:00-8:00 60分100円・最大300円\n障害者割引: 無料\n総台数: 19台",
    "sourceUrl": "https://www.tmpc.or.jp/04_parking/result.html?catid=3&cmid=739",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13121-010",
    "name": "TOKYO PUBLIC 生物園第二駐車場",
    "address": "東京都足立区保木間2-6-9",
    "latitude": 35.793346,
    "longitude": 139.804184,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13121",
    "cityName": "足立区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳(身体障害者手帳・愛の手帳・精神障害者保健福祉手帳等)の所持者は全額無料。退場時に出口精算機の受話器でセンターに連絡しカメラに手帳を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00-22:00 30分100円・最大600円 / 22:00-8:00 60分100円・最大300円\n障害者割引: 無料\n総台数: 10台",
    "sourceUrl": "https://www.tmpc.or.jp/04_parking/result.html?catid=3&cmid=739",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13121-011",
    "name": "梅田地域学習センター 駐車場",
    "address": "東京都足立区梅田7-33-1",
    "latitude": 35.770351,
    "longitude": 139.798492,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13121",
    "cityName": "足立区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳・愛の手帳・精神障がい者福祉手帳の所持者が乗車している場合は免除。1階受付へ申し出(ミライロID対応)"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 30分ごと100円(最初30分無料)\n障害者割引: 無料\n総台数: 8台",
    "sourceUrl": "https://adachi-umedacenter.tokyo/access/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13122-006",
    "name": "柴又公園 駐車広場",
    "address": "東京都葛飾区柴又7(江戸川河川敷南側)",
    "latitude": 35.759289,
    "longitude": 139.879654,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13122",
    "cityName": "葛飾区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳のいずれかを所持する方が運転または同乗する車両は免除。手帳を提示し申告"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1回500円・バス1回2,000円(回数制)\n障害者割引: 無料\n総台数: 199台",
    "sourceUrl": "https://www.city.katsushika.lg.jp/institution/1000096/1006896.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13122-007",
    "name": "テクノプラザかつしか 駐車場",
    "address": "東京都葛飾区青戸7-2-1",
    "latitude": 35.752228,
    "longitude": 139.852051,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13122",
    "cityName": "葛飾区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳を所持する方は無料。帰りに駐車券と障害者手帳を1階受付カウンターに提示(身体障害者手帳・愛の手帳が明示。精神障害者保健福祉手帳の対象可否は施設要確認)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初30分無料・以降30分ごと100円\n障害者割引: 無料\n総台数: 42台",
    "sourceUrl": "https://techno-plaza.jp/faq/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13122-008",
    "name": "葛飾にいじゅくみらい公園 駐車場(北・南)",
    "address": "東京都葛飾区新宿6丁目",
    "latitude": 35.771839,
    "longitude": 139.861145,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13122",
    "cityName": "葛飾区",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・療育手帳・精神障害者保健福祉手帳のいずれかを所持する方が乗車している場合は免除。公園管理棟で8:00-21:00(第3水曜除く)に駐車券と手帳を提示"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 最初30分無料・以降30分ごと100円(現金または交通系IC)\n障害者割引: 無料\n総台数: 81台",
    "sourceUrl": "https://www.city.katsushika.lg.jp/institution/1000096/1006886.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13123-007",
    "name": "江戸川区スポーツセンター 駐車場(第1・第2・第3)",
    "address": "東京都江戸川区西葛西4-2-20",
    "latitude": 35.667393,
    "longitude": 139.862289,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13123",
    "cityName": "江戸川区",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳・愛の手帳・精神障害者保健福祉手帳の提示により施設利用者に限り免除。第1〜第3駐車場とも同条件。第3に障害者専用3台(土曜は全区画が障害者専用)"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 最初1時間200円・以降1時間100円\n障害者割引: 無料\n総台数: 81台",
    "sourceUrl": "https://www.edogawa-spocen.com/access/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13123-008",
    "name": "江戸川区総合体育館 駐車場",
    "address": "東京都江戸川区松本1-35-1",
    "latitude": 35.717583,
    "longitude": 139.876465,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13123",
    "cityName": "江戸川区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の提示により施設利用者に限り免除。介助が必要な障害者1名につき介助者2名分も免除"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 最初1時間200円・以後1時間ごと100円\n障害者割引: 無料\n総台数: 96台",
    "sourceUrl": "https://www.edogawa-sotai.com/personaluse",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13123-009",
    "name": "グリーンパレス(江戸川区民センター) 駐車場",
    "address": "東京都江戸川区松島1-38-1",
    "latitude": 35.705681,
    "longitude": 139.866028,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13123",
    "cityName": "江戸川区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳(身体障害者手帳・愛の手帳・精神障害者保健福祉手帳)の提示により施設利用者に限り免除(江戸川区区民施設利用料金の減免制度)"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 最初1時間200円・以降1時間100円\n障害者割引: 無料\n総台数: 86台",
    "sourceUrl": "https://www.s-park.jp/map/9632",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13123-010",
    "name": "江戸川区総合文化センター 駐車場",
    "address": "東京都江戸川区中央4-14-1",
    "latitude": 35.710968,
    "longitude": 139.867538,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13123",
    "cityName": "江戸川区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳(身体障害者手帳・愛の手帳・精神障害者保健福祉手帳)の提示により施設利用者に限り免除(江戸川区区民施設利用料金の減免制度)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初1時間200円・以降1時間100円\n障害者割引: 無料\n総台数: 247台",
    "sourceUrl": "https://www.s-park.jp/map/9628",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13123-011",
    "name": "タワーホール船堀 駐車場",
    "address": "東京都江戸川区船堀4-1-1",
    "latitude": 35.684433,
    "longitude": 139.864273,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13123",
    "cityName": "江戸川区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳(身体障害者手帳・愛の手帳・精神障害者保健福祉手帳)の提示により免除(江戸川区区民施設利用料金の減免制度)。地下1階74台・地下2階87台"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初1時間200円・以後1時間100円 / 利用8:30-22:00\n障害者割引: 無料\n総台数: 161台",
    "sourceUrl": "https://www.city.edogawa.tokyo.jp/e041/kenko/fukushikaigo/shogaisha/waribiki/sonota/shisetsu.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13123-012",
    "name": "小岩アーバンプラザ 駐車場",
    "address": "東京都江戸川区北小岩1-17-1",
    "latitude": 35.735847,
    "longitude": 139.891937,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13123",
    "cityName": "江戸川区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳のいずれかを所持する施設利用者が駐車券と手帳を1階受付へ提示で免除"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初1時間200円・以降1時間100円\n障害者割引: 無料\n総台数: 48台",
    "sourceUrl": "https://www.city.edogawa.tokyo.jp/e035/kuseijoho/gaiyo/shisetsuguide/bunya/bunkachiiki/c_koiwa_urban/guide.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13201-006",
    "name": "エスフォルタアリーナ八王子(八王子市総合体育館) 駐車場",
    "address": "東京都八王子市狭間町1453-1",
    "latitude": 35.63541,
    "longitude": 139.284073,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13201",
    "cityName": "八王子市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳を所持する方は受付に手帳と駐車券を提示で使用料金が免除"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 施設利用者 30分まで無料・3時間30分以内100円・1日最大500円 / 施設利用外 30分無料・以降20分ごと100円(上限なし)\n障害者割引: 無料",
    "sourceUrl": "https://www.hachioji.esforta.jp/usage-fee/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13204-002",
    "name": "武蔵野の森公園 第二駐車場",
    "address": "東京都三鷹市大沢5-7-2",
    "latitude": 35.669868,
    "longitude": 139.535278,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13204",
    "cityName": "三鷹市",
    "accessibleSpaceTotal": 5,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳を管理所に提示で無料。係員対応10:00-16:00(時間外は公園サービスセンター0422-32-4682へ)"
    },
    "accessibleSpaces": [
      {
        "count": 5
      }
    ],
    "notes": "通常料金: 普通車1時間まで300円・以後20分ごと100円・入庫後12時間最大1,200円\n障害者割引: 無料\n総台数: 138台",
    "sourceUrl": "https://www.tokyo-park.or.jp/park/musashino-no-mori/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13202-005",
    "name": "立川市営 緑川第五駐車場",
    "address": "東京都立川市曙町3-19-22",
    "latitude": 35.70042,
    "longitude": 139.422119,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13202",
    "cityName": "立川市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳・戦傷病者手帳のいずれかの所持者が運転または同乗の場合、駐車後2時間まで無料。出庫時に精算機横のオートフォンで連絡しカメラに手帳を提示(24時間対応)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00-22:00 30分100円 / 22:00-8:00 60分100円 / 24時間最大1,100円(繰返し)\n障害者割引: 2時間無料",
    "sourceUrl": "https://www.city.tachikawa.lg.jp/kurashi/kotsu/1001932/1001963/1001967.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13202-006",
    "name": "立川市営 緑川第六駐車場",
    "address": "東京都立川市曙町3-17-34",
    "latitude": 35.699867,
    "longitude": 139.424805,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13202",
    "cityName": "立川市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳・戦傷病者手帳のいずれかの所持者が運転または同乗の場合、駐車後2時間まで無料。出庫時に精算機横のオートフォンで連絡しカメラに手帳を提示(24時間対応)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00-22:00 30分100円 / 22:00-8:00 60分100円 / 24時間最大1,100円(繰返し)\n障害者割引: 2時間無料",
    "sourceUrl": "https://www.city.tachikawa.lg.jp/kotsutaisaku/kurashi/kotsu/chushajo/tachikawashi/midorikawaroku.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13202-007",
    "name": "立川市子ども未来センター 駐車場",
    "address": "東京都立川市錦町3-2",
    "latitude": 35.693886,
    "longitude": 139.419327,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13202",
    "cityName": "立川市",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "施設を利用した障害者手帳所持者は2階総合受付で駐車券と手帳を提示すると用務所要時間分の駐車料金が無料(当日・開館時間内のみ)。施設北側に障害者専用1台。たましんRISURUホール利用者も対象"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 7:00-21:00 20分100円 / 21:00-7:00 120分100円 / 24時間最大1,500円\n障害者割引: 用務時間分無料",
    "sourceUrl": "https://t-mirai.com/access/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13203-003",
    "name": "武蔵野公会堂 駐車場",
    "address": "東京都武蔵野市吉祥寺南町1-6-22",
    "latitude": 35.701683,
    "longitude": 139.579514,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13203",
    "cityName": "武蔵野市",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "運転者または同乗者が障害者手帳を提示すると駐車料金免除。障害者専用1台(事前申し出で専用枠以外も対応)。施設利用時間内のみ"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 1時間400円\n障害者割引: 無料\n総台数: 16台",
    "sourceUrl": "https://www.musashino.or.jp/koukaido/1002844/1004617.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13203-004",
    "name": "井の頭恩賜公園 第一駐車場",
    "address": "東京都武蔵野市御殿山1-19",
    "latitude": 35.69944,
    "longitude": 139.572311,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13203",
    "cityName": "武蔵野市",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "都立公園の駐車料金免除制度。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の所持者およびその付添者は利用料金免除。出庫時に係員またはインターフォン経由コールセンターへ手帳を提示"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 最初1時間400円・以後30分ごと200円・12時間最大1,600円(24時間営業)\n障害者割引: 無料\n総台数: 60台",
    "sourceUrl": "https://www.s-park.jp/map/991",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13205-002",
    "name": "住友金属鉱山アリーナ青梅(青梅市総合体育館) 駐車場",
    "address": "東京都青梅市河辺町4-16-1",
    "latitude": 35.780708,
    "longitude": 139.2845,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13205",
    "cityName": "青梅市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がい者(当該障がい者が同乗する自動車の運転者を含む)が使用するときは使用料免除。障がい者手帳等を窓口または精算機カメラに提示。手帳種別は施設要確認(0428-24-7721)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 体育館使用者 30分以上4時間以内100円・以降1時間ごと100円 / その他 30分以上1時間以内100円・以降1時間ごと100円\n障害者割引: 無料\n総台数: 80台",
    "sourceUrl": "https://www.omesports.net/facility/gymnasium",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13205-003",
    "name": "釜の淵公園 大柳駐車場",
    "address": "東京都青梅市大柳町1392",
    "latitude": 35.784538,
    "longitude": 139.253265,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13205",
    "cityName": "青梅市",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳もしくは療育手帳・精神障害者保健福祉手帳の交付を受けた方は無料。手続きは現地精算機(0120-951-365)で確認"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 1時間100円(入庫 3-9月6:00-20:00・10-2月8:00-18:00、出庫24時間可)\n障害者割引: 無料\n総台数: 50台",
    "sourceUrl": "https://www.s-park.jp/map/50389",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13206-004",
    "name": "多摩総合医療センター 駐車場",
    "address": "東京都府中市武蔵台2-8-29",
    "latitude": 35.692005,
    "longitude": 139.461517,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13206",
    "cityName": "府中市",
    "accessibleSpaceTotal": 41,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害をお持ちの方は駐車料金無料。帰院時に本館1階外来駐車券受付カウンターで駐車券の認証を受ける(受診前認証も可)。対象手帳種別は施設要確認"
    },
    "accessibleSpaces": [
      {
        "count": 41
      }
    ],
    "notes": "通常料金: 患者・付添者 1回100円(日をまたぐ毎に100円追加) / 一般 10分300円\n障害者割引: 無料\n総台数: 768台",
    "sourceUrl": "https://www.tmhp.jp/tama/access.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13206-005",
    "name": "府中市生涯学習センター 駐車場",
    "address": "東京都府中市浅間町1-7",
    "latitude": 35.678925,
    "longitude": 139.496475,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13206",
    "cityName": "府中市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がい者手帳等を持参の方は駐車料金免除。受付に申し出て証明書の確認を受ける"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間100円(1回上限500円) / 30分未満無料\n障害者割引: 無料\n総台数: 101台",
    "sourceUrl": "http://fuchu.shogaigakushu.jp/guide",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13207-002",
    "name": "FOSTERホール(昭島市民会館)・公民館 駐車場",
    "address": "東京都昭島市つつじが丘3-7-7",
    "latitude": 35.713005,
    "longitude": 139.366425,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13207",
    "cityName": "昭島市",
    "accessibleSpaceTotal": 4,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "障害者手帳所持者は料金が半額。帰りに公民館内の事務室で手続き(昭島市の使用料減免条例に基づき2分の1相当額を減免)"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 30分まで無料 / 30分超3時間まで100円 / 以降1時間ごと100円 / 利用8:30-22:30\n障害者割引: 半額\n総台数: 171台",
    "sourceUrl": "https://www.city.akishima.lg.jp/reiki/reiki_honbun/g131RG00000322.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13207-003",
    "name": "昭島市総合スポーツセンター 駐車場",
    "address": "東京都昭島市東町5-13-1",
    "latitude": 35.703926,
    "longitude": 139.385193,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13207",
    "cityName": "昭島市",
    "accessibleSpaceTotal": 2,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "障害者手帳等を所持する方は使用料が半額。総合受付に手帳を提示し駐車券に認証を受ける"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 30分まで無料 / 30分超3時間まで100円 / 以降1時間ごと100円 / 利用9:00-22:00\n障害者割引: 半額(50円)\n総台数: 36台",
    "sourceUrl": "https://www.city.akishima.lg.jp/s125/010/020/070/010/20141007210654.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13208-003",
    "name": "調布市文化会館たづくり 駐車場",
    "address": "東京都調布市小島町2-33-1",
    "latitude": 35.65147,
    "longitude": 139.541443,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13208",
    "cityName": "調布市",
    "accessibleSpaceTotal": 4,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳または東京都愛の手帳(歩行が困難な方)とその付添者、および高齢者介護車両は駐車場利用料免除。1階インフォメーションで手帳を提示。精神障害者保健福祉手帳は対象外"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 30分100円 / 利用8:30-22:00\n障害者割引: 無料\n総台数: 130台",
    "sourceUrl": "https://www.chofu-culture-community.org/faq/facilities",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13208-004",
    "name": "調布市国領駅南口市営駐車場(ココスクエアパーキング)",
    "address": "東京都調布市国領町3-1-38",
    "latitude": 35.649574,
    "longitude": 139.558685,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13208",
    "cityName": "調布市",
    "accessibleSpaceTotal": 3,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 1,
      "conditions": "使用者または同乗者が身体障害者手帳・愛の手帳・精神障害者保健福祉手帳のいずれかを所持する場合、入庫後1時間の普通使用料を減免。初回は駐車場3階管理室(9:00-21:00)で申請"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 30分150円 / 夜間最大1,000円(20:00-翌9:00) / 24時間営業\n障害者割引: 1時間無料\n総台数: 327台",
    "sourceUrl": "https://www.city.chofu.lg.jp/080070/p050030.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13208-005",
    "name": "味の素スタジアム 駐車場(本体下・北側)",
    "address": "東京都調布市西町376-3",
    "latitude": 35.66367,
    "longitude": 139.5289,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13208",
    "cityName": "調布市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳(愛の手帳)・精神障害者保健福祉手帳のいずれかを所持する運転者本人または同乗者は駐車料金無料。サブエントランス1(防災センター)で手帳と駐車券を提示。イベント時は主催者に要確認"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間500円・以降20分ごと200円 / Jリーグ等大型イベント開催時は一般利用不可\n障害者割引: 無料\n総台数: 740台",
    "sourceUrl": "https://www.ajinomotostadium.com/access/car.php",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13208-006",
    "name": "京王アリーナTOKYO(旧 武蔵野の森総合スポーツプラザ) 駐車場",
    "address": "東京都調布市西町290-11",
    "latitude": 35.666344,
    "longitude": 139.52269,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13208",
    "cityName": "調布市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳またはミライロID(デジタル障害者手帳)の提示で無料。ジム・プール利用者は受付、その他利用者は1階中央監視室で手帳と駐車券を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間500円・以降20分ごと200円 / 高さ制限2.1m / 大規模イベント時は利用不可の場合あり\n障害者割引: 無料\n総台数: 134台",
    "sourceUrl": "https://keio-arena.tokyo/facility/parking.php",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13209-003",
    "name": "町田市立総合体育館 駐車場(第一・第二)",
    "address": "東京都町田市南成瀬5-12",
    "latitude": 35.536121,
    "longitude": 139.479172,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13209",
    "cityName": "町田市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の所持者は駐車料金免除。受付へ申し出"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分以内無料 / 30分超2時間以内100円 / 以降30分ごと50円 / 1日最大800円\n障害者割引: 無料\n総台数: 272台",
    "sourceUrl": "https://www.city.machida.tokyo.jp/bunka/sport/sport/sport07.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13209-004",
    "name": "サン町田旭体育館 駐車場",
    "address": "東京都町田市旭町3-20-60",
    "latitude": 35.556194,
    "longitude": 139.446854,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13209",
    "cityName": "町田市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳所持者は駐車料金免除。出庫前に駐車券と手帳を受付で提示し無料処理"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間以内無料 / 1時間30分まで100円 / 以降30分ごと50円 / 1日最大800円\n障害者割引: 無料\n総台数: 143台",
    "sourceUrl": "https://www.city.machida.tokyo.jp/bunka/sport/sport/sport08.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13209-005",
    "name": "町田市立室内プール 駐車場",
    "address": "東京都町田市図師町199-1",
    "latitude": 35.586166,
    "longitude": 139.412659,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13209",
    "cityName": "町田市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の所持者は駐車料金免除。受付へ申し出"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分以内無料 / 30分超2時間30分以内100円 / 以降30分ごと50円 / 1日最大800円\n障害者割引: 無料",
    "sourceUrl": "https://www.city.machida.tokyo.jp/bunka/sport/sport/sport04.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13209-006",
    "name": "芹ヶ谷公園 第1駐車場",
    "address": "東京都町田市原町田5-16",
    "latitude": 35.546329,
    "longitude": 139.452759,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13209",
    "cityName": "町田市",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳所持者は駐車料金免除。出庫ゲート精算機のインターホンで申告し確認後ゲート開放"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 1時間以内無料 / 1時間30分まで100円 / 以降30分ごと50円 / 1日最大800円\n障害者割引: 無料\n総台数: 28台",
    "sourceUrl": "https://www.city.machida.tokyo.jp/bunka/park/shisetu/serigaya/park02.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13209-007",
    "name": "忠生スポーツ公園 駐車場",
    "address": "東京都町田市下小山田町3337-1",
    "latitude": 35.597073,
    "longitude": 139.414536,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13209",
    "cityName": "町田市",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳所持者は駐車料金免除。出庫ゲート精算機のインターホンで申告し確認後ゲート開放"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 1時間以内無料 / 1時間30分まで100円 / 以降30分ごと50円 / 1日最大800円\n障害者割引: 無料\n総台数: 35台",
    "sourceUrl": "https://www.city.machida.tokyo.jp/bunka/park/shisetu/tadaosports/tadaosports.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13209-008",
    "name": "忠生公園 駐車場",
    "address": "東京都町田市忠生1-3-1",
    "latitude": 35.572964,
    "longitude": 139.422241,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13209",
    "cityName": "町田市",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳所持者は駐車料金免除。利用時に手帳を提示"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 土日祝のみ有料 1時間以内無料・1時間30分まで100円・以降30分ごと50円・1日最大800円(平日無料)\n障害者割引: 無料\n総台数: 47台",
    "sourceUrl": "https://www.city.machida.tokyo.jp/bunka/park/shisetu/tadao/park05.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13209-009",
    "name": "小野路公園 駐車場",
    "address": "東京都町田市小野路町2023-1",
    "latitude": 35.598087,
    "longitude": 139.454239,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13209",
    "cityName": "町田市",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "普通自動車利用で障害者手帳所持者は駐車料金免除。利用時に手帳を提示"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 土日祝・大会開催日のみ有料 1時間以内無料・1時間30分まで100円・以降30分ごと50円・1日最大800円(平日無料)\n障害者割引: 無料\n総台数: 125台",
    "sourceUrl": "https://www.city.machida.tokyo.jp/bunka/park/shisetu/onoji/onojikouenn.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13212-002",
    "name": "日野市立東部会館 駐車場",
    "address": "東京都日野市東平山3-14-19",
    "latitude": 35.654221,
    "longitude": 139.375778,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13212",
    "cityName": "日野市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の所持者およびその介護者は手帳の提示で駐車料金免除"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 会館利用者 1時間以内100円・以降1時間ごと100円 / 一般 1時間以内300円・以降1時間ごと300円 / 利用8:30-22:00\n障害者割引: 無料",
    "sourceUrl": "https://www.city.hino.lg.jp/shisetsu/bunka/shukai/1000974.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13212-003",
    "name": "日野市民の森スポーツ公園 市民陸上競技場 駐車場",
    "address": "東京都日野市日野本町6-1-1",
    "latitude": 35.681778,
    "longitude": 139.402344,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13212",
    "cityName": "日野市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の所持者は無料。陸上競技場管理棟または市民の森ふれあいホール受付に駐車券と手帳を提示(本人同行が必要・施設休館時は適用外)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間ごと100円(入庫後15分以内無料)\n障害者割引: 無料\n総台数: 40台",
    "sourceUrl": "https://www.city.hino.lg.jp/shisetsu/sports/1001014.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13212-004",
    "name": "フクシ・エンタープライズ南平アリーナ(南平体育館) 駐車場",
    "address": "東京都日野市南平6-18-1",
    "latitude": 35.656734,
    "longitude": 139.391953,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13212",
    "cityName": "日野市",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の所持者は施設利用料および駐車場料金が免除。障害等級制限なし・市内外問わず・介護者も対象。受付で手帳を提示"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 有料(料金は公式に非掲載・施設042-591-1541へ要確認)\n障害者割引: 無料\n総台数: 63台",
    "sourceUrl": "https://www.city.hino.lg.jp/shisetsu/sports/pool/1000992.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13212-005",
    "name": "多摩動物公園 障害者専用駐車場(正門前・モノレール駅舎下)",
    "address": "東京都日野市程久保7-1-1",
    "latitude": 35.649563,
    "longitude": 139.402328,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13212",
    "cityName": "日野市",
    "accessibleSpaceTotal": 9,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の所持者は障害者専用駐車場(正門前3台・モノレール駅舎下6台)を無料で利用可。入場時に警備員へ手帳を提示。台数に限りあり"
    },
    "accessibleSpaces": [
      {
        "count": 9
      }
    ],
    "notes": "通常料金: 一般駐車場(京王ストア運営) 平日1時間200円・土日祝1時間400円\n障害者割引: 無料\n総台数: 9台",
    "sourceUrl": "https://www.daredemo-tokyo.metro.tokyo.lg.jp/facility/park/60096/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13212-006",
    "name": "日野市立病院 駐車場",
    "address": "東京都日野市多摩平4-3-1",
    "latitude": 35.66647,
    "longitude": 139.378754,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13212",
    "cityName": "日野市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳または愛の手帳の所持者は駐車料金免除。詳細条件は病院042-581-2677に要確認"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 入場30分以内無料 / 2時間まで200円 / 以降1時間ごと100円(上限なし)\n障害者割引: 無料\n総台数: 247台",
    "sourceUrl": "https://hospital.city.hino.tokyo.jp/access/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13218-003",
    "name": "公立福生病院 駐車場",
    "address": "東京都福生市加美平1-6-1",
    "latitude": 35.747074,
    "longitude": 139.326569,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13218",
    "cityName": "福生市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳を所持する方は駐車料金無料。立体駐車場(高さ2.1m・幅1.85m・長さ5.0m・重量2.0t超は利用不可)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 外来患者・付添 4時間まで100円・以降1時間ごと100円 / 見舞 1時間まで100円・以降1時間ごと100円 / その他 1時間まで200円・以降1時間ごと100円\n障害者割引: 無料\n総台数: 225台",
    "sourceUrl": "https://www.fussahp.jp/about/access.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13219-002",
    "name": "タイムズ狛江市役所(市庁舎駐車場)",
    "address": "東京都狛江市和泉本町1-1-5",
    "latitude": 35.634491,
    "longitude": 139.577927,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13219",
    "cityName": "狛江市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がいがある方が運転または同乗している場合は利用時間が無料。用務先の窓口に手帳等を提示。運営:タイムズ24"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00-21:00 30分220円・最大1,600円 / 21:00-8:00 60分110円・最大300円\n障害者割引: 無料\n総台数: 39台",
    "sourceUrl": "https://www.city.komae.tokyo.jp/index.cfm/41,28295,308,1974,html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13221-002",
    "name": "クレア市営駐車場",
    "address": "東京都清瀬市元町1-4",
    "latitude": 35.773247,
    "longitude": 139.520493,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13221",
    "cityName": "清瀬市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 1,
      "conditions": "清瀬市在住・在勤・在学で身体障害者手帳・愛の手帳・精神障害者保健福祉手帳のいずれかを所持する者が運転または同乗の場合、出庫時に手帳を提示し1時間までの全額を免除"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 7:00-24:00 最初60分300円・以降30分150円 / 24:00-7:00 60分100円 / 24時間最大900円(繰返し)\n障害者割引: 1時間無料\n総台数: 209台",
    "sourceUrl": "https://www.city.kiyose.lg.jp/kurashi/sumaidourokoutuu/tyuurintyuusya/1003950.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13221-003",
    "name": "清瀬金山緑地公園 駐車場",
    "address": "東京都清瀬市中里4-650",
    "latitude": 35.786186,
    "longitude": 139.516663,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13221",
    "cityName": "清瀬市",
    "accessibleSpaceTotal": 1,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 1.5,
      "conditions": "清瀬市在住・在勤・在学で身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかを所持する者および同乗者が対象。出口ゲートのインターフォンでコンタクトセンターに連絡しカメラに手帳を提示、市在住等の確認後に減免"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 最初10分無料 / 10分-1時間500円 / 以降1時間ごと500円 / 平日最大1,500円・土日祝最大3,000円\n障害者割引: 1時間30分無料\n総台数: 28台",
    "sourceUrl": "https://www.city.kiyose.lg.jp/bunkasportskankou/shinaimidokoro/mizu/1002711.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13221-004",
    "name": "複十字病院 駐車場",
    "address": "東京都清瀬市松山3-9-20",
    "latitude": 35.768162,
    "longitude": 139.514236,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13221",
    "cityName": "清瀬市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者手帳を所持する患者は受付で手帳を提示すれば駐車料金無料(外来患者対象・入院患者は利用不可)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 外来患者・健診 1時間100円・1日最大200円 / 見舞・その他 1時間200円 / 入庫15分無料\n障害者割引: 無料\n総台数: 128台",
    "sourceUrl": "https://www.fukujuji.org/outline/access/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13222-002",
    "name": "六仙公園 駐車場",
    "address": "東京都東久留米市六仙4-4-1",
    "latitude": 35.758015,
    "longitude": 139.529892,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13222",
    "cityName": "東久留米市",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・療育手帳・精神障害者保健福祉手帳の所持者は利用料金免除。管理所(小金井公園駐車場042-384-2093)で手帳を提示して免除申請"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 最初1時間300円・以降20分ごと100円・入庫後12時間最大1,200円(繰返し・24時間営業)\n障害者割引: 無料\n総台数: 20台",
    "sourceUrl": "https://www.s-park.jp/map/509974",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13224-002",
    "name": "多摩市立温水プール アクアブルー多摩 駐車場",
    "address": "東京都多摩市南野3-15-2",
    "latitude": 35.612259,
    "longitude": 139.414017,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13224",
    "cityName": "多摩市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がい者手帳所持者またはその付き添いの方が運転する車は駐車料金無料。出庫時にプール受付で駐車券と手帳を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 4時間まで300円 / 以降1時間ごと100円\n障害者割引: 無料\n総台数: 306台",
    "sourceUrl": "https://www.tama-pool.org/informations/fee/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13224-003",
    "name": "多摩東公園 駐車場",
    "address": "東京都多摩市諏訪4-9",
    "latitude": 35.625046,
    "longitude": 139.460327,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13224",
    "cityName": "多摩市",
    "accessibleSpaceTotal": 4,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳の提示により駐車料金免除。出場時に精算機のインターホンでサービスセンターへ連絡。対象手帳種別は窓口要確認"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 入庫後30分無料 / 以降1時間ごと100円 / 6:00-20:00最大700円・20:00-6:00最大300円\n障害者割引: 無料\n総台数: 136台",
    "sourceUrl": "https://www.city.tama.lg.jp/kurashi/kouen/riyou/1013287.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13224-004",
    "name": "市営永山複合施設駐車場(ベルブ永山)",
    "address": "東京都多摩市永山1-5",
    "latitude": 35.628471,
    "longitude": 139.448685,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13224",
    "cityName": "多摩市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "conditions": "身体障害者手帳・精神障害者保健福祉手帳・療育手帳(愛の手帳)所持者は、ベルブ永山内公共施設(公民館・図書館・消費生活センター等)を利用している時間帯の駐車料金が無料認証。利用施設の窓口で手帳を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分ごと120円\n障害者割引: 施設利用時間帯無料\n総台数: 42台",
    "sourceUrl": "https://www.city.tama.lg.jp/kenkofukushi/katsudo/kouminkan/annai/1003181.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13224-005",
    "name": "多摩市立健康センター 駐車場",
    "address": "東京都多摩市関戸4-19-5",
    "latitude": 35.648975,
    "longitude": 139.449585,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13224",
    "cityName": "多摩市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "障害者手帳・難病の医療受給者証等の所持者またはその付き添いは利用時間から3時間分が減免。利用窓口で認証を受けて出庫"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 平日8:00-17:00 30分200円ほか時間帯別 / 当日最大1,300円(夜間別) / 土日祝別料金\n障害者割引: 3時間分減免\n総台数: 24台",
    "sourceUrl": "https://www.city.tama.lg.jp/map/iryo/1002738.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13225-003",
    "name": "稲城市立病院 駐車場",
    "address": "東京都稲城市大丸1171",
    "latitude": 35.641563,
    "longitude": 139.481995,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13225",
    "cityName": "稲城市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・精神障害者保健福祉手帳・療育手帳の所持者は駐車料金無料(ミライロID対応)。立体駐車場高さ制限2.1m"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初30分無料 / 診療患者 5時間30分まで200円・以降1時間ごと100円 / その他 1時間30分まで200円・以降1時間ごと100円 / 24時間最大1,200円\n障害者割引: 無料",
    "sourceUrl": "https://www.hospital.inagi.tokyo.jp/about/parking",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13225-004",
    "name": "城山公園 中央図書館駐車場",
    "address": "東京都稲城市向陽台4-6",
    "latitude": 35.645573,
    "longitude": 139.488434,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13225",
    "cityName": "稲城市",
    "accessibleSpaceTotal": 4,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳またはミライロID提示で駐車料金免除。精算機のインターホンまたはコールセンター(0120-77-8924)で手続き"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 1時間未満無料 / 1〜2時間以内200円 / 2時間超過は200円+1時間ごと100円 / 24時間最大1,200円 / 8:00-21:00\n障害者割引: 無料\n総台数: 57台",
    "sourceUrl": "https://www.city.inagi.tokyo.jp/kankyo/midori/1005312/1005332.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13225-005",
    "name": "城山公園 テニスコート駐車場",
    "address": "東京都稲城市向陽台4-6",
    "latitude": 35.645573,
    "longitude": 139.488434,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13225",
    "cityName": "稲城市",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳またはミライロID提示で駐車料金免除。精算機のインターホンまたはコールセンター(0120-77-8924)で手続き"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 1時間未満無料 / 1〜2時間以内200円 / 2時間超過は200円+1時間ごと100円 / 24時間最大1,200円 / 24時間営業\n障害者割引: 無料\n総台数: 10台",
    "sourceUrl": "https://www.city.inagi.tokyo.jp/kankyo/midori/1005312/1005332.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13225-006",
    "name": "若葉台公園 駐車場(第1〜第3)",
    "address": "東京都稲城市若葉台1-19-1",
    "latitude": 35.627773,
    "longitude": 139.474457,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13225",
    "cityName": "稲城市",
    "accessibleSpaceTotal": 4,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳またはミライロID提示で駐車料金免除。精算機のインターホンまたはコールセンター(0120-77-8924)で手続き"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 1時間未満無料 / 1〜2時間以内200円 / 2時間超過は200円+1時間ごと100円 / 24時間最大1,200円\n障害者割引: 無料\n総台数: 86台",
    "sourceUrl": "https://www.city.inagi.tokyo.jp/kankyo/midori/1005312/1005332.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13225-007",
    "name": "大丸公園 駐車場",
    "address": "東京都稲城市大丸251",
    "latitude": 35.64687,
    "longitude": 139.498566,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13225",
    "cityName": "稲城市",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳またはミライロID提示で駐車料金免除。精算機のインターホンまたはコールセンター(0120-77-8924)で手続き"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 1時間未満無料 / 1〜2時間以内200円 / 2時間超過は200円+1時間ごと100円 / 24時間最大1,200円 / 24時間営業\n障害者割引: 無料\n総台数: 41台",
    "sourceUrl": "https://www.city.inagi.tokyo.jp/kankyo/midori/1005312/1005332.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13225-008",
    "name": "稲城北緑地 駐車場",
    "address": "東京都稲城市東長沼2996",
    "latitude": 35.634766,
    "longitude": 139.504257,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13225",
    "cityName": "稲城市",
    "accessibleSpaceTotal": 6,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳またはミライロID提示で駐車料金免除。精算機のインターホンまたはコールセンター(0120-77-8924)で手続き"
    },
    "accessibleSpaces": [
      {
        "count": 6
      }
    ],
    "notes": "通常料金: 1時間未満無料 / 1〜2時間以内200円 / 2時間超過は200円+1時間ごと100円 / 24時間最大1,200円 / 5:00-20:00\n障害者割引: 無料\n総台数: 87台",
    "sourceUrl": "https://www.city.inagi.tokyo.jp/kankyo/midori/1005312/1005332.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13225-009",
    "name": "上谷戸親水公園 駐車場(第1・第2)",
    "address": "東京都稲城市若葉台1-2-21",
    "latitude": 35.627934,
    "longitude": 139.476059,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13225",
    "cityName": "稲城市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳またはミライロID提示で駐車料金免除。精算機のインターホンまたはコールセンター(0120-77-8924)で手続き"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間未満無料 / 1〜2時間以内200円 / 2時間超過は200円+1時間ごと100円 / 24時間最大1,200円 / 5:00-22:30\n障害者割引: 無料\n総台数: 20台",
    "sourceUrl": "https://www.city.inagi.tokyo.jp/kankyo/midori/1005312/1005332.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13116-001",
    "name": "東京芸術劇場 駐車場",
    "address": "東京都豊島区西池袋1-8-1",
    "latitude": 35.728905,
    "longitude": 139.707977,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13116",
    "cityName": "豊島区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の本人または同乗者は当日に限り無料(ミライロID対応)。B2Fに優先2台。割引手順は03-5391-2111へ"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 30分310円 / 当日最大2,500円 / 営業7:00-24:00(入場23:30まで) / 高さ2.1m\n障害者割引: 無料\n総台数: 100台",
    "sourceUrl": "https://www.geigeki.jp/accessibility/barrierfree/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13116-002",
    "name": "東京都立大塚病院 駐車場",
    "address": "東京都豊島区南大塚2-8-1",
    "latitude": 35.724743,
    "longitude": 139.73204,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13116",
    "cityName": "豊島区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がい者手帳を所持する方は駐車料金無料。駐車券を院内に持参し割引処理を受ける"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 一般 12分330円 / 患者・付添 3時間100円・以降1時間100円 / 見舞 1時間100円・以降1時間200円\n障害者割引: 無料",
    "sourceUrl": "https://www.tmhp.jp/ohtsuka/about/floorguide.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13220-001",
    "name": "東大和病院 駐車場",
    "address": "東京都東大和市南街1-13-12",
    "latitude": 35.74131,
    "longitude": 139.431793,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13220",
    "cityName": "東大和市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳等を職員に提示し割引券を受け取り防災センターに提出"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 外来患者 5時間まで300円・以降1時間ごと200円 / 家族・一般 1時間300円 / 入院患者 24時間500円\n障害者割引: 無料\n総台数: 278台",
    "sourceUrl": "https://www.yamatokai.or.jp/higasiyamato/access/tab/parking.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13220-002",
    "name": "東大和ケアセンター 駐車場",
    "address": "東京都東大和市南街1-13-1",
    "latitude": 35.74131,
    "longitude": 139.431793,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13220",
    "cityName": "東大和市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳等を提示(精算時に手続きが必要)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間300円\n障害者割引: 無料\n総台数: 278台",
    "sourceUrl": "https://www.yamatokai.or.jp/carecenter/access/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13223-001",
    "name": "武蔵村山病院 第1駐車場",
    "address": "東京都武蔵村山市榎1-1-5",
    "latitude": 35.746552,
    "longitude": 139.385162,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13223",
    "cityName": "武蔵村山市",
    "accessibleSpaceTotal": 6,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳を受付窓口で駐車券と同時に提示で無料"
    },
    "accessibleSpaces": [
      {
        "count": 6
      }
    ],
    "notes": "通常料金: 外来 入庫20分以内無料・5時間以内200円・5時間超過後は1時間ごと200円\n障害者割引: 無料",
    "sourceUrl": "https://www.yamatokai.or.jp/musasimurayama/public/20251220/index.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13228-001",
    "name": "公立阿伎留医療センター 駐車場",
    "address": "東京都あきる野市引田78-1",
    "latitude": 35.732136,
    "longitude": 139.271896,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13228",
    "cityName": "あきる野市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害のある方は障害者手帳等を提示で駐車場使用料免除"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 外来患者 30分無料・3時間まで100円・以降1時間ごと100円\n障害者割引: 無料\n総台数: 177台",
    "sourceUrl": "https://www.akiru-med.jp/outline/access/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13229-002",
    "name": "西東京市営アスタ駐車場",
    "address": "東京都西東京市田無町2-1-1",
    "latitude": 35.728073,
    "longitude": 139.539764,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13229",
    "cityName": "西東京市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳またはミライロIDの提示で最大2時間免除。出庫時にB2F駐車場管理室で免除申請書を記入し駐車券・手帳を料金所に提出(西東京市駐車場条例)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 9:00-23:00 30分ごと200円 / 23:00-9:00 1回1,000円(入庫22:00まで)\n障害者割引: 2時間無料\n総台数: 295台",
    "sourceUrl": "https://www.city.nishitokyo.lg.jp/kurasi/kotu/shiei-chushajo/mennjo.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13229-003",
    "name": "西東京市役所保谷庁舎 第1駐車場",
    "address": "東京都西東京市中町1-4",
    "latitude": 35.740803,
    "longitude": 139.557098,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13229",
    "cityName": "西東京市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害のある方が運転または同乗し障害福祉関係の手帳(身体・愛の手帳・精神)またはミライロID提示で用件終了まで無料。警備員に申し出。保谷こもれびホール利用者も使用可"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00-22:00 30分200円 / 22:00-8:00 60分100円 / 24時間最大1,200円\n障害者割引: 無料\n総台数: 54台",
    "sourceUrl": "https://www.city.nishitokyo.lg.jp/siseizyoho/syokai/29cyuusyzyou.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13229-004",
    "name": "西東京市役所保谷庁舎 第2駐車場",
    "address": "東京都西東京市泉町5-12",
    "latitude": 35.742798,
    "longitude": 139.558167,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13229",
    "cityName": "西東京市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害のある方が運転または同乗し障害福祉関係の手帳(身体・愛の手帳・精神)またはミライロID提示で用件終了まで無料。警備員に申し出"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00-22:00 30分200円 / 22:00-8:00 60分100円 / 24時間最大1,200円\n障害者割引: 無料\n総台数: 33台",
    "sourceUrl": "https://www.city.nishitokyo.lg.jp/siseizyoho/syokai/29cyuusyzyou.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13229-005",
    "name": "西東京市役所保谷庁舎 第3駐車場",
    "address": "東京都西東京市中町2-1",
    "latitude": 35.742554,
    "longitude": 139.559494,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13229",
    "cityName": "西東京市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害のある方が運転または同乗し障害福祉関係の手帳(身体・愛の手帳・精神)またはミライロID提示で用件終了まで無料。フラップ式。警備員に申し出"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00-22:00 30分200円 / 22:00-8:00 60分100円 / 24時間最大1,000円\n障害者割引: 無料\n総台数: 18台",
    "sourceUrl": "https://www.city.nishitokyo.lg.jp/siseizyoho/syokai/29cyuusyzyou.html",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13229-006",
    "name": "西東京いこいの森公園 駐車場",
    "address": "東京都西東京市緑町3-2-5",
    "latitude": 35.740849,
    "longitude": 139.54213,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13229",
    "cityName": "西東京市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の交付を受けた方(運転者または同乗者)は無料。出庫前にパークセンター(042-467-2391)で手帳原本を提示し減免処理"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 9:00-19:00 2時間まで360円 / 以降1時間ごと180円\n障害者割引: 無料\n総台数: 22台",
    "sourceUrl": "https://nishitokyo-parks.jp/ikoinomori",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "13229-007",
    "name": "多摩六都科学館 駐車場",
    "address": "東京都西東京市芝久保町5-10-64",
    "latitude": 35.734745,
    "longitude": 139.522202,
    "prefectureCode": "13",
    "prefectureName": "東京都",
    "cityCode": "13229",
    "cityName": "西東京市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳またはミライロID提示で駐車料金免除。インフォメーションで駐車券と手帳を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 入庫後30分無料 / 以降30分ごと100円 / 1日最大700円(現金のみ)\n障害者割引: 無料\n総台数: 170台",
    "sourceUrl": "https://www.tamarokuto.or.jp/access/",
    "updatedAt": "2026-05-31T00:00:00Z"
  },
  {
    "id": "14101-001",
    "name": "鶴見区総合庁舎駐車場(鶴見区役所駐車場)",
    "address": "神奈川県横浜市鶴見区鶴見中央三丁目20番1号",
    "latitude": 35.508606,
    "longitude": 139.681915,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14101",
    "cityName": "横浜市鶴見区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害のある人及びその介護者が対象。身体障害者手帳、愛の手帳(療育手帳)、精神障害者保健福祉手帳のいずれかを提示することで駐車料金が全額免除(利用時間無料)。平面駐車場に身体障害者用区画1台あり。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 150円/30分(月〜金8時〜18時、第2・第4土曜開庁日8時〜12時30分)\n障害者割引: 無料(利用時間無料)\n総台数: 55台",
    "sourceUrl": "https://www.city.yokohama.lg.jp/tsurumi/madoguchi-shisetsu/kuyakusho/annai/shisetsu/kuyakusyotyuusyajou.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14101-002",
    "name": "三ツ池公園駐車場(正門駐車場・北門駐車場)",
    "address": "神奈川県横浜市鶴見区三ツ池公園1-1",
    "latitude": 35.522442,
    "longitude": 139.661118,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14101",
    "cityName": "横浜市鶴見区",
    "accessibleSpaceTotal": 4,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害(児)者、知的障害(児)者、精神障害(児)者が対象(障害者1名につき普通車1台)。出庫時に発券機の受話器で管理者を呼び出しカメラ越しに身体障害者手帳・精神障害者保健福祉手帳・療育手帳のいずれかを提示するか、パークセンターで手続き。ミライロID提示も可。出庫後の申請は不可。正門駐車場・北門駐車場それぞれに身障者用区画2台ずつ(計4台)。"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 普通車510円/1日(繁忙期3/16〜4/15、4/29〜5/5は830円)\n障害者割引: 無料(駐車料金全額免除)\n総台数: 156台",
    "sourceUrl": "https://kanagawa-park.or.jp/mitsuike/baria.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14101-003",
    "name": "横浜市鶴見スポーツセンター駐車場",
    "address": "神奈川県横浜市鶴見区元宮2-5-1",
    "latitude": 35.519749,
    "longitude": 139.677505,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14101",
    "cityName": "横浜市鶴見区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害のある方が対象。帰りに受付窓口で障害者手帳を提示(マイナポータル連携済のミライロID等アプリ提示でも可)。障害者用区画2台確保(区画サイズ縦560cm×横230cm)。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 2時間300円、以降30分ごとに50円\n障害者割引: 無料(駐車料金全額免除)\n総台数: 23台",
    "sourceUrl": "https://yokohama-sport.jp/tsurumi-sc-ysa/handicapped",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14102-001",
    "name": "神奈川区役所駐車場",
    "address": "神奈川県横浜市神奈川区広台太田町3番地8",
    "latitude": 35.47683,
    "longitude": 139.62944,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14102",
    "cityName": "横浜市神奈川区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "区役所・消防署・県税事務所の利用者のうち障害のある方及びその介護者の方が対象(介護者のみの利用は対象外)。身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の提示、またはミライロIDの提示(マイナポータル連携時)で減免。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00~18:00 30分200円、17:30~8:00 1,000円(一泊料金)\n障害者割引: 所要時間無料\n総台数: 32台",
    "sourceUrl": "https://www.city.yokohama.lg.jp/kanagawa/madoguchi-shisetsu/kuyakusho/annai/access-parking.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14102-002",
    "name": "横浜市ポートサイド地下駐車場",
    "address": "神奈川県横浜市神奈川区栄町92",
    "latitude": 35.46991,
    "longitude": 139.630966,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14102",
    "cityName": "横浜市神奈川区",
    "accessibleSpaceTotal": 2,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳所持者が乗車していれば運転・同乗問わず対象。事前申請不要、精算前に駐車券と手帳を管理室へ提示(定期購入時も提示)。等級により減免率が異なる。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 平日8:00~20:00 30分300円・20:00~8:00 60分100円(平日最大1,500円、土日祝最大2,000円)\n障害者割引: 1~4級等:3時間まで無料・以降50%引き(定期券50%引き)/5~6級等:全時間50%引き(定期券30%引き)\n総台数: 200台",
    "sourceUrl": "https://www.city.yokohama.lg.jp/kurashi/machizukuri-kankyo/doro/anzenshisetsu/riyoannai/chika/20251117095005466.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14102-003",
    "name": "三ツ沢公園第1駐車場",
    "address": "神奈川県横浜市神奈川区三ツ沢西町3-1",
    "latitude": 35.470428,
    "longitude": 139.602768,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14102",
    "cityName": "横浜市神奈川区",
    "accessibleSpaceTotal": 2,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 8,
      "conditions": "療養・健康増進目的で公園を利用する障害者手帳(身体障害者手帳・愛の手帳・精神障害者保健福祉手帳)所持者が対象。運転・同乗問わず。受付時間内(9:00~17:00)は管理事務所へ手帳原本と駐車券を提示、時間外は出庫ゲートのインターホンでコールセンターに連絡し手帳所有を申告。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 2時間300円、以降30分100円\n障害者割引: 8時間まで無料(8時間超過分は通常料金)\n総台数: 88台",
    "sourceUrl": "https://www.hama-midorinokyokai.or.jp/park/parking/mitsuzawa/mituzawa1/",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14102-004",
    "name": "三ツ沢公園第2駐車場",
    "address": "神奈川県横浜市神奈川区三ツ沢西町3-1",
    "latitude": 35.470428,
    "longitude": 139.602768,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14102",
    "cityName": "横浜市神奈川区",
    "accessibleSpaceTotal": 4,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 8,
      "conditions": "療養・健康増進目的で公園を利用する障害者手帳(身体障害者手帳・愛の手帳・精神障害者保健福祉手帳)所持者が対象。運転・同乗問わず。受付時間内(9:00~17:00)は管理事務所へ手帳原本と駐車券を提示、時間外は出庫ゲートのインターホンでコールセンターに連絡し手帳所有を申告。"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 2時間300円、以降30分100円\n障害者割引: 8時間まで無料(8時間超過分は通常料金)\n総台数: 241台",
    "sourceUrl": "https://www.hama-midorinokyokai.or.jp/park/parking/mitsuzawa/mituzawa2/",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14102-005",
    "name": "三ツ沢公園第3駐車場",
    "address": "神奈川県横浜市神奈川区三ツ沢西町3-1",
    "latitude": 35.470428,
    "longitude": 139.602768,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14102",
    "cityName": "横浜市神奈川区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 8,
      "conditions": "療養・健康増進目的で公園を利用する障害者手帳(身体障害者手帳・愛の手帳・精神障害者保健福祉手帳)所持者が対象。運転・同乗問わず。受付時間内(9:00~17:00)は管理事務所へ手帳原本と駐車券を提示、時間外は出庫ゲートのインターホンでコールセンターに連絡し手帳所有を申告。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 2時間300円、以降30分100円\n障害者割引: 8時間まで無料(8時間超過分は通常料金)\n総台数: 112台",
    "sourceUrl": "https://www.hama-midorinokyokai.or.jp/park/parking/mitsuzawa/mituzawa3/",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14102-006",
    "name": "三ツ沢公園臨時駐車場",
    "address": "神奈川県横浜市神奈川区三ツ沢西町3-1",
    "latitude": 35.470428,
    "longitude": 139.602768,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14102",
    "cityName": "横浜市神奈川区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 8,
      "conditions": "療養・健康増進目的で公園を利用する障害者手帳(身体障害者手帳・愛の手帳・精神障害者保健福祉手帳)所持者が対象。混雑時のみ営業する臨時駐車場。運転・同乗問わず。受付時間内は管理事務所へ手帳原本と駐車券を提示、時間外は出庫ゲートのインターホンでコールセンターに連絡し手帳所有を申告。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1日1回1,300円\n障害者割引: 8時間まで無料(8時間超過分は通常料金)\n総台数: 153台",
    "sourceUrl": "https://www.hama-midorinokyokai.or.jp/park/parking/mitsuzawa/mituzawarinji/",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14103-001",
    "name": "横浜市西区区役所駐車場",
    "address": "神奈川県横浜市西区中央一丁目5番10号",
    "latitude": 35.453632,
    "longitude": 139.616882,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14103",
    "cityName": "横浜市西区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害のある方及びその介護者が対象(身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の提示、または障害者手帳アプリ「ミライロID」とマイナポータルを連携している場合はミライロIDの提示で代替可。介護者のみの利用は対象外)。区役所窓口で駐車券の減免処理が必要で、処理しない場合は料金が発生する。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 30分250円(8:00〜22:00)/60分100円(22:00〜翌8:00)、土曜・日曜・祝日は当日最大料金1,200円(24時切替)\n障害者割引: 無料(来庁に必要な所要時間分)\n総台数: 9台",
    "sourceUrl": "https://www.city.yokohama.lg.jp/nishi/madoguchi-shisetsu/kuyakusho/annai/access-parking.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14103-002",
    "name": "横浜美術館駐車場",
    "address": "神奈川県横浜市西区みなとみらい3-4-1",
    "latitude": 35.457115,
    "longitude": 139.63063,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14103",
    "cityName": "横浜市西区",
    "accessibleSpaceTotal": 5,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 1.5,
      "conditions": "身体障害者手帳、療育手帳(愛の手帳)、精神障害者保健福祉手帳、被爆者手帳、戦傷病者手帳、公害医療手帳(公害認定証)、特定医療費(指定難病)受給者証、自立支援医療受給者証、障害福祉サービス受給者証のいずれかを提示。総合案内、券売所、美術図書室、西口受付で申し出る。"
    },
    "accessibleSpaces": [
      {
        "count": 5
      }
    ],
    "notes": "通常料金: 最初の90分500円、90分以降30分ごとに250円\n障害者割引: 最初の90分無料\n総台数: 157台",
    "sourceUrl": "https://yokohama.art.museum/visit/access/",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14103-003",
    "name": "みなとみらい公共駐車場(パシフィコ横浜駐車場)",
    "address": "神奈川県横浜市西区みなとみらい1-1-1",
    "latitude": 35.459438,
    "longitude": 139.636246,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14103",
    "cityName": "横浜市西区",
    "accessibleSpaceTotal": 11,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳等の提示で駐車料金が半額になる。精算機に駐車券を挿入する前に中央防災センター(展示ホールB1F、TEL 045-221-2127)へ連絡が必要。月極・定期料金及び自動二輪駐車場利用料金は対象外、他割引との併用不可。"
    },
    "accessibleSpaces": [
      {
        "count": 11
      }
    ],
    "notes": "通常料金: 0:00〜24:00 30分300円・1時間600円、最大料金は平日(特定日を除く)7:00〜24:00で1,800円、土日祝・特定日7:00〜24:00で2,400円\n障害者割引: 駐車料金半額\n総台数: 1015台",
    "sourceUrl": "https://yokohama-parking-guidesystem.jp/result/3/48",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14103-004",
    "name": "ノース駐車場(パシフィコ横浜)",
    "address": "神奈川県横浜市西区みなとみらい1-1-2",
    "latitude": 35.459438,
    "longitude": 139.636246,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14103",
    "cityName": "横浜市西区",
    "accessibleSpaceTotal": 2,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳等の提示で駐車料金が半額になる。精算機に駐車券を挿入する前にノース中央管理室(TEL 045-211-4387)へ連絡が必要。他割引との併用不可。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 0:00〜24:00 30分300円・1時間600円、最大料金は平日(特定日を除く)7:00〜24:00で1,800円、土日祝・特定日7:00〜24:00で2,400円\n障害者割引: 駐車料金半額\n総台数: 152台",
    "sourceUrl": "https://yokohama-parking-guidesystem.jp/result/3/49",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14103-005",
    "name": "臨港パーク駐車場(パシフィコ横浜)",
    "address": "神奈川県横浜市西区みなとみらい1丁目",
    "latitude": 35.460369,
    "longitude": 139.635635,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14103",
    "cityName": "横浜市西区",
    "accessibleSpaceTotal": 1,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 1,
      "conditions": "身体障害者手帳等の提示で駐車料金が1時間無料になる。精算機に駐車券を挿入する前に臨港パーク駐車場管理事務所(TEL 045-221-2175、8:00〜21:00)へ連絡が必要。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 30分250円、平日(特定日を除く)8:00〜21:00の最大料金1,100円\n障害者割引: 1時間無料\n総台数: 90台",
    "sourceUrl": "https://yokohama-parking-guidesystem.jp/result/3/50",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14104-001",
    "name": "横浜市中区役所駐車場",
    "address": "神奈川県横浜市中区日本大通35番地",
    "latitude": 35.444958,
    "longitude": 139.641998,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14104",
    "cityName": "横浜市中区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害のある方及びその介護者が対象。身体障害者手帳、愛の手帳(療育手帳)、精神障害者保健福祉手帳を提示(ミライロIDとマイナポータル連携時はミライロID提示で代替可)。介護者のみの利用は対象外。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 30分300円(18:00~8:30の間の最大料金1,000円)\n障害者割引: 無料(所要時間無料)\n総台数: 7台",
    "sourceUrl": "https://www.city.yokohama.lg.jp/naka/madoguchi-shisetsu/kuyakusho/annai/access-parking.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14104-002",
    "name": "横浜市庁舎駐車場",
    "address": "神奈川県横浜市中区本町6丁目50番地の10",
    "latitude": 35.450195,
    "longitude": 139.634903,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14104",
    "cityName": "横浜市中区",
    "accessibleSpaceTotal": 5,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "手続・相談等のため来庁した障害者及びその介護者が対象。身体障害者手帳、愛の手帳、精神障害者保健福祉手帳を利用窓口で提示。車高2.3mを超える福祉車両の場合は警備員案内により1階車寄せに臨時駐車可。"
    },
    "accessibleSpaces": [
      {
        "count": 5
      }
    ],
    "notes": "通常料金: 平日8:00~24:00 30分300円、0:00~8:00 60分100円、土日祝1日最大2,300円\n障害者割引: 無料(利用時間無料)\n総台数: 179台",
    "sourceUrl": "https://www.city.yokohama.lg.jp/city-info/yokohamashi/shichosha/park.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14104-003",
    "name": "横浜市営馬車道地下駐車場",
    "address": "神奈川県横浜市中区本町六丁目",
    "latitude": 35.450417,
    "longitude": 139.634552,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14104",
    "cityName": "横浜市中区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "対象は身体障害者手帳、愛の手帳(療育手帳)、精神障害者保健福祉手帳の保持者(運転・同乗問わず)。事前申請不要、精算前に駐車券及び手帳を管理室へ提示。定期購入時も提示要。最大料金への割引適用なし。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 08:00-20:00 30分340円、20:00-08:00 60分100円、24時間最大2,000円\n障害者割引: グループA(身体障害者手帳1~4級等):3時間まで無料・超過分50%引・定期券50%引/グループB(身体障害者手帳5~6級等):時間問わず50%引・定期券30%引\n総台数: 200台",
    "sourceUrl": "https://www.city.yokohama.lg.jp/kurashi/machizukuri-kankyo/doro/anzenshisetsu/riyoannai/chika/bashamichi.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14104-004",
    "name": "横浜市営日本大通り地下駐車場",
    "address": "神奈川県横浜市中区日本大通9",
    "latitude": 35.446644,
    "longitude": 139.641769,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14104",
    "cityName": "横浜市中区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "対象は身体障害者手帳、愛の手帳(療育手帳)、精神障害者保健福祉手帳の保持者(運転・同乗問わず)。事前申請不要、精算前に駐車券及び手帳を管理室へ提示。最大料金への割引適用なし。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 07:00-23:00 15分400円、23:00-07:00 30分300円\n障害者割引: グループA:3時間まで無料・超過分50%引・定期券50%引/グループB:時間問わず50%引・定期券30%引",
    "sourceUrl": "https://www.city.yokohama.lg.jp/kurashi/machizukuri-kankyo/doro/anzenshisetsu/riyoannai/chika/nihon.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14104-005",
    "name": "横浜市営伊勢佐木長者町地下駐車場",
    "address": "神奈川県横浜市中区長者町5-50",
    "latitude": 35.441059,
    "longitude": 139.631943,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14104",
    "cityName": "横浜市中区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "対象は身体障害者手帳、愛の手帳(療育手帳)、精神障害者保健福祉手帳の保持者(運転・同乗問わず)。事前申請不要、精算前に駐車券及び手帳を管理室へ提示。最大料金への割引適用なし。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分200円、24時間最大1,200円\n障害者割引: グループA:3時間まで無料・超過分50%引・定期券50%引/グループB:時間問わず50%引・定期券30%引\n総台数: 198台",
    "sourceUrl": "https://www.city.yokohama.lg.jp/kurashi/machizukuri-kankyo/doro/anzenshisetsu/riyoannai/chika/isezaki.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14104-006",
    "name": "横浜市営福富町西公園地下駐車場",
    "address": "神奈川県横浜市中区福富町西通2番地先",
    "latitude": 35.446384,
    "longitude": 139.631241,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14104",
    "cityName": "横浜市中区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "対象は身体障害者手帳、愛の手帳(療育手帳)、精神障害者保健福祉手帳の保持者(運転・同乗問わず)。事前申請不要、精算前に駐車券及び手帳を管理室へ提示。最大料金への割引適用なし。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分200円、24時間最大1,000円\n障害者割引: グループA:3時間まで無料・超過分50%引・定期券50%引/グループB:時間問わず50%引・定期券30%引\n総台数: 184台",
    "sourceUrl": "https://www.city.yokohama.lg.jp/kurashi/machizukuri-kankyo/doro/anzenshisetsu/riyoannai/chika/fukutomi.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14104-007",
    "name": "横浜市営山下町地下駐車場",
    "address": "神奈川県横浜市中区山下町60",
    "latitude": 35.444057,
    "longitude": 139.648651,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14104",
    "cityName": "横浜市中区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "対象は身体障害者手帳、愛の手帳(療育手帳)、精神障害者保健福祉手帳の保持者(運転・同乗問わず)。事前申請不要、精算前に駐車券及び手帳を管理室へ提示。最大料金への割引適用なし。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 夜間18:00-08:00最大800円、土日祝当日最大(24時切替)1,800円、平日最大料金なし\n障害者割引: グループA:3時間まで無料・超過分50%引・定期券50%引/グループB:時間問わず50%引・定期券30%引",
    "sourceUrl": "https://www.city.yokohama.lg.jp/kurashi/machizukuri-kankyo/doro/anzenshisetsu/riyoannai/chika/yamasita.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14104-008",
    "name": "横浜市技能文化会館駐車場",
    "address": "神奈川県横浜市中区万代町2丁目4番地7",
    "latitude": 35.441891,
    "longitude": 139.635071,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14104",
    "cityName": "横浜市中区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "横浜市技能文化会館利用者に限る。入庫後、1階受付に障がい者手帳を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分200円、一日最大1,200円\n障害者割引: 無料",
    "sourceUrl": "https://gibun.jp/gibun/access/parking.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14104-009",
    "name": "横浜港大さん橋国際客船ターミナル駐車場",
    "address": "神奈川県横浜市中区海岸通1-1-4",
    "latitude": 35.448357,
    "longitude": 139.644119,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14104",
    "cityName": "横浜市中区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "身体障害者手帳、療育手帳、特定医療費(指定難病)受給者証等の保持者(本人または介護者)対象。駐車券・運転免許証・手帳等を2階インフォメーションまたは1階防災センターへ提示。3時間超過分は通常料金。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間まで500円、以降30分ごとに250円、24時間最大(平日)1,500円・(土休日)2,000円\n障害者割引: 3時間まで無料\n総台数: 400台",
    "sourceUrl": "https://osanbashi.jp/access/parking",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14104-010",
    "name": "山下公園駐車場",
    "address": "神奈川県横浜市中区山下町279",
    "latitude": 35.444874,
    "longitude": 139.653641,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14104",
    "cityName": "横浜市中区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 6,
      "conditions": "障害者手帳保有者が療養・健康増進目的で公園を使用する場合が対象(運転・同乗問わず)。営業時間内は管理事務所で手帳原本と駐車券を提示、時間外は出庫ゲートのインターホンでコールセンター対応。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 平日30分300円、土日祝30分400円、当日最大(0時~24時)2,400円\n障害者割引: 6時間まで無料\n総台数: 222台",
    "sourceUrl": "https://www.hama-midorinokyokai.or.jp/park/parking/genmen.php",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14104-011",
    "name": "根岸森林公園第1駐車場",
    "address": "神奈川県横浜市中区根岸台",
    "latitude": 35.422935,
    "longitude": 139.638306,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14104",
    "cityName": "横浜市中区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳保有者が療養・健康増進目的で公園を使用する場合が対象(運転・同乗問わず)。営業時間内は管理事務所で手帳原本と駐車券を提示、時間外は出庫ゲートのインターホンでコールセンター対応。時間制限の記載なし。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 平日2時間300円(以降20分毎50円)、土休日2時間400円(以降30分毎100円)\n障害者割引: 無料\n総台数: 100台",
    "sourceUrl": "https://www.hama-midorinokyokai.or.jp/park/parking/genmen.php",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14104-012",
    "name": "港の見える丘公園駐車場",
    "address": "神奈川県横浜市中区山手町254-10",
    "latitude": 35.438961,
    "longitude": 139.653717,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14104",
    "cityName": "横浜市中区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳保有者が療養・健康増進目的で公園を使用する場合が対象(運転・同乗問わず)。出庫ゲートのインターホンでコールセンターに連絡し遠隔操作でゲート解放(Bグループ)。時間制限の記載なし。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 平日30分250円、土日祝・12/29~1/3 30分300円\n障害者割引: 無料\n総台数: 17台",
    "sourceUrl": "https://www.hama-midorinokyokai.or.jp/park/parking/genmen.php",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14104-013",
    "name": "本牧市民・臨海公園駐車場",
    "address": "神奈川県横浜市中区本牧三之谷59",
    "latitude": 35.412724,
    "longitude": 139.661316,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14104",
    "cityName": "横浜市中区",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、横浜市愛の手帳、精神障害者保健福祉手帳の保持者が対象。営業時間内(9:15~21:00)は管理事務所またはレストハウスで手帳提示、時間外は精算機のインターホンでサポートセンターへ連絡。団体利用は本牧市民公園管理センターへの事前手続きが必要。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 最初の1時間200円、以降30分100円\n障害者割引: 全額減免(無料)\n総台数: 272台",
    "sourceUrl": "https://shimin-rinkai.jp/54.html/",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14105-001",
    "name": "南区総合庁舎駐車場(南区役所駐車場)",
    "address": "神奈川県横浜市南区浦舟町2丁目33番地",
    "latitude": 35.434521,
    "longitude": 139.627686,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14105",
    "cityName": "横浜市南区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、愛の手帳(療育手帳)、精神障害者保健福祉手帳の提示で所要時間無料。事前申請不要、出庫精算前に駐車券と手帳を管理室へ提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00-22:00 30分250円、22:00-8:00 60分100円(土日祝当日最大800円)\n障害者割引: 無料(所要時間無料)\n総台数: 132台",
    "sourceUrl": "https://www.city.yokohama.lg.jp/minami/madoguchi-shisetsu/kuyakusho/annai/access-parking.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14105-002",
    "name": "横浜市立大学附属市民総合医療センター駐車場",
    "address": "神奈川県横浜市南区浦舟町4丁目57番地",
    "latitude": 35.433781,
    "longitude": 139.624664,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14105",
    "cityName": "横浜市南区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳、愛の手帳(療育手帳)を持つ患者本人が対象。外来受診時は清算前にロビー係員へ確認書類を提示。本人が来場できない場合は領収書等で受診確認の上で免除対応。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分まで無料、3時間まで患者500円(患者以外は1時間500円)、3時間超1時間300円、1日最大1,700円\n障害者割引: 受診当日の駐車料金全額免除\n総台数: 378台",
    "sourceUrl": "https://www.yokohama-cu.ac.jp/urahp/summary/access/parking.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14105-003",
    "name": "横浜市南スポーツセンター駐車場",
    "address": "神奈川県横浜市南区大岡1丁目14-1",
    "latitude": 35.423775,
    "longitude": 139.605225,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14105",
    "cityName": "横浜市南区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "知的障害の判定を受けている方、身体障害者手帳及び精神障害者保健福祉手帳をお持ちの方が対象。帰館時に受付窓口で手帳を提示することで駐車料金全額免除。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 利用時間8:30-21:10、2時間300円、以降30分毎50円加算\n障害者割引: 無料(全額免除)",
    "sourceUrl": "https://www.yokohama-minamisc.jp/barrier-free",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14106-001",
    "name": "保土ケ谷区役所駐車場(本館・別館)",
    "address": "神奈川県横浜市保土ケ谷区川辺町2番地9",
    "latitude": 35.46064,
    "longitude": 139.595428,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14106",
    "cityName": "横浜市保土ケ谷区",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳を提示することで駐車料金が無料。運転・同乗は問わない。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 本館(8:00-18:00)30分250円/夜間(18:00-翌8:00)60分100円・夜間最大500円、別館(8:00-22:00)30分250円/22:00以降60分100円・当日最大800円\n障害者割引: 無料\n総台数: 44台",
    "sourceUrl": "https://www.city.yokohama.lg.jp/hodogaya/madoguchi-shisetsu/kuyakusho/annai/access-parking.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14106-002",
    "name": "神奈川県立保土ケ谷公園駐車場(A・B)",
    "address": "神奈川県横浜市保土ケ谷区花見台4-2",
    "latitude": 35.452229,
    "longitude": 139.581009,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14106",
    "cityName": "横浜市保土ケ谷区",
    "accessibleSpaceTotal": 7,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・精神障害者保健福祉手帳・療育手帳の提示で障害者1名につき普通車1台の駐車料金が全額免除。出庫時に精算機のインターホンで管理センターを呼び出し、手帳をカメラに提示。事後の減免処理は不可。"
    },
    "accessibleSpaces": [
      {
        "count": 7
      }
    ],
    "notes": "通常料金: 普通車 1時間まで220円、以降30分ごと110円、上限1,020円\n障害者割引: 無料\n総台数: 787台",
    "sourceUrl": "https://www.kanagawa-park.or.jp/hodogaya/handicapped.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14106-003",
    "name": "陣ケ下渓谷公園駐車場",
    "address": "神奈川県横浜市保土ケ谷区川島町1514",
    "latitude": 35.467537,
    "longitude": 139.564011,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14106",
    "cityName": "横浜市保土ケ谷区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "療養・健康増進目的での公園利用時、障害者手帳(身体障害者手帳・精神障害者保健福祉手帳・療育手帳)提示で駐車料金免除。出庫時に精算機のインターホンでコールセンターを呼び出し手帳所有を伝える。事後の処理は不可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00-22:00 30分100円、22:00-翌8:00 60分100円、駐車後24時間最大1,300円\n障害者割引: 無料\n総台数: 20台",
    "sourceUrl": "https://www.hama-midorinokyokai.or.jp/park/parking/genmen.php",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14106-004",
    "name": "横浜市保土ケ谷スポーツセンター駐車場",
    "address": "神奈川県横浜市保土ケ谷区神戸町129-2",
    "latitude": 35.454346,
    "longitude": 139.595169,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14106",
    "cityName": "横浜市保土ケ谷区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・精神障害者保健福祉手帳所持者、知的障害の判定を受けている方は駐車場料金全額免除。事前に受付にて手帳を提示。介助者以外の同伴者の駐車料金は対象外。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 400円/2時間、以降30分ごと100円加算\n障害者割引: 無料\n総台数: 49台",
    "sourceUrl": "https://hodogaya-sports.com/wcag/use/",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14107-001",
    "name": "磯子区総合庁舎駐車場(磯子区役所・磯子公会堂・磯子図書館共用)",
    "address": "神奈川県横浜市磯子区磯子三丁目5番1号",
    "latitude": 35.402821,
    "longitude": 139.618546,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14107",
    "cityName": "横浜市磯子区",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の提示者及びその介護者が対象。区役所・磯子公会堂・磯子図書館の利用者に限定。ミライロID(マイナポータル連携済アプリ)可。窓口混雑等により60分を超えた分は有料。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 30分250円(8:00〜22:00)、60分100円(22:00〜翌8:00)、土日祝は最大料金1,500円(平日は最大料金なし)\n障害者割引: 所要時間分無料\n総台数: 137台",
    "sourceUrl": "https://www.city.yokohama.lg.jp/isogo/madoguchi-shisetsu/kuyakusho/annai/access-parking.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14107-002",
    "name": "横浜市磯子スポーツセンター駐車場",
    "address": "神奈川県横浜市磯子区杉田五丁目32番25号",
    "latitude": 35.38327,
    "longitude": 139.621933,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14107",
    "cityName": "横浜市磯子区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "帰り際に障害者手帳(ミライロID等マイナポータル連携済デジタル手帳可)を受付窓口に提示することで駐車料金を全額免除。専用駐車場1台あり。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 2時間300円、以降20分ごとに50円\n障害者割引: 全額免除(無料)\n総台数: 8台",
    "sourceUrl": "https://yokohama-sport.jp/isogo-sc-ysa/handicapped/",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14108-001",
    "name": "金沢区役所駐車場(金沢区総合庁舎駐車場)",
    "address": "神奈川県横浜市金沢区泥亀二丁目9番1号",
    "latitude": 35.337433,
    "longitude": 139.624435,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14108",
    "cityName": "横浜市金沢区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳所持者及びその介護者が対象(運転・同乗問わず)。手帳を駐車場管理室等へ提示。指定管理者タイムズ24(問合せ:タイムズコンタクトセンター0120-77-8924)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分200円(8:00-22:00)、60分100円(22:00-8:00)、土日祝は当日最大800円\n障害者割引: 所要時間無料\n総台数: 74台",
    "sourceUrl": "https://www.city.yokohama.lg.jp/kanazawa/madoguchi-shisetsu/kuyakusho/annai/access-parking.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14108-002",
    "name": "海の公園 柴口駐車場(E駐車場)",
    "address": "神奈川県横浜市金沢区海の公園10",
    "latitude": 35.340237,
    "longitude": 139.636703,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14108",
    "cityName": "横浜市金沢区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳(愛の手帳)・精神障害者保健福祉手帳所持者が対象(運転・同乗問わず、療養・健康増進目的の利用)。受付時間9:00-17:00は公園管理事務所で手帳原本及び駐車券を提示、時間外は出庫ゲートのインターホンでコールセンターへ連絡。管理:公益財団法人横浜市緑の協会。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間310円、駐車後12時間最大1,550円(12時間以降は1時間310円)\n障害者割引: 無料\n総台数: 1064台",
    "sourceUrl": "https://www.hama-midorinokyokai.or.jp/park/parking/uminokoen/umishibaE/",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14108-003",
    "name": "海の公園 磯浜駐車場(F駐車場)",
    "address": "神奈川県横浜市金沢区海の公園10",
    "latitude": 35.340237,
    "longitude": 139.636703,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14108",
    "cityName": "横浜市金沢区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳(愛の手帳)・精神障害者保健福祉手帳所持者が対象(運転・同乗問わず)。受付時間内は管理事務所で手帳原本及び駐車券を提示、時間外はインターホンでコールセンターへ連絡。管理:公益財団法人横浜市緑の協会。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間310円、駐車後12時間最大1,550円(12時間以降は1時間310円)\n障害者割引: 無料\n総台数: 362台",
    "sourceUrl": "https://www.hama-midorinokyokai.or.jp/park/parking/uminokoen/umiisohamaF/",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14108-004",
    "name": "野島公園 第1駐車場",
    "address": "神奈川県横浜市金沢区野島町24",
    "latitude": 35.325848,
    "longitude": 139.635849,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14108",
    "cityName": "横浜市金沢区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳(愛の手帳)・精神障害者保健福祉手帳所持者が対象(運転・同乗問わず)。管理事務所で手帳原本及び駐車券を提示(受付時間外はインターホンでコールセンターへ連絡)。管理:公益財団法人横浜市緑の協会。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間200円、以降30分100円\n障害者割引: 無料\n総台数: 104台",
    "sourceUrl": "https://www.hama-midorinokyokai.or.jp/park/parking/nojima/nojima1/",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14108-005",
    "name": "野島公園 第2駐車場",
    "address": "神奈川県横浜市金沢区乙舳町80",
    "latitude": 35.328857,
    "longitude": 139.632126,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14108",
    "cityName": "横浜市金沢区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳(愛の手帳)・精神障害者保健福祉手帳所持者が対象(運転・同乗問わず)。管理事務所で手帳原本及び駐車券を提示(受付時間外はインターホンでコールセンターへ連絡)。管理:公益財団法人横浜市緑の協会。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間200円、以降30分100円\n障害者割引: 無料\n総台数: 52台",
    "sourceUrl": "https://www.hama-midorinokyokai.or.jp/park/parking/nojima/niojima2/",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14108-006",
    "name": "小柴自然公園駐車場",
    "address": "神奈川県横浜市金沢区長浜116-2",
    "latitude": 35.354843,
    "longitude": 139.636597,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14108",
    "cityName": "横浜市金沢区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳(愛の手帳)・精神障害者保健福祉手帳所持者が対象(運転・同乗問わず)。出庫ゲートの精算機インターホンでコールセンターへ連絡して減免処理。管理:公益財団法人横浜市緑の協会。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間200円、以降30分100円\n障害者割引: 無料\n総台数: 103台",
    "sourceUrl": "https://www.hama-midorinokyokai.or.jp/park/parking/koshiba/koshiba/",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14108-007",
    "name": "横浜市立金沢動物園 正面口駐車場(金沢自然公園)",
    "address": "神奈川県横浜市金沢区釜利谷東5-15-1",
    "latitude": 35.350033,
    "longitude": 139.605927,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14108",
    "cityName": "横浜市金沢区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳(身体障害者手帳・療育手帳・精神障害者保健福祉手帳)提示で減免。正面口駐車場は入庫時にスタッフへ声掛けの上、手帳提示。減免申出は利用当日のみ。身障者用駐車スペースあり。管理:公益財団法人横浜市緑の協会。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1回600円\n障害者割引: 無料\n総台数: 450台",
    "sourceUrl": "https://www.hama-midorinokyokai.or.jp/zoo/kanazawa/faq.php",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14108-008",
    "name": "横浜市立金沢動物園 高速側駐車場(金沢自然公園)",
    "address": "神奈川県横浜市金沢区釜利谷東5-15-1",
    "latitude": 35.350033,
    "longitude": 139.605927,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14108",
    "cityName": "横浜市金沢区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳(身体障害者手帳・療育手帳・精神障害者保健福祉手帳)提示で減免。高速側駐車場は入口精算機に備付けの緊急電話で申し出て減免処理。減免申出は利用当日のみ。駐車場一番奥(動物園入口寄り)に身障者用スペースあり。管理:公益財団法人横浜市緑の協会。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1回600円\n障害者割引: 無料\n総台数: 750台",
    "sourceUrl": "https://www.hama-midorinokyokai.or.jp/zoo/kanazawa/faq.php",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14109-001",
    "name": "横浜市港北区総合庁舎駐車場",
    "address": "神奈川県横浜市港北区大豆戸町26番地1",
    "latitude": 35.518993,
    "longitude": 139.633163,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14109",
    "cityName": "横浜市港北区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の提示で駐車料金無料(所要時間無料)。障害者手帳アプリ「ミライロID」の提示でも可。低公害車利用者は車検証提示で対象。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 8:00~22:00 30分250円、22:00~8:00 60分100円、土日祝当日最大1,200円\n障害者割引: 無料\n総台数: 60台",
    "sourceUrl": "https://www.city.yokohama.lg.jp/kohoku/madoguchi-shisetsu/kuyakusho/annai/access-parking.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14109-002",
    "name": "新横浜公園第1駐車場",
    "address": "神奈川県横浜市港北区小机町3300",
    "latitude": 35.51012,
    "longitude": 139.606674,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14109",
    "cityName": "横浜市港北区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳保持者及びその介護者1名が対象。精算前に入場時の駐車券と手帳(スマートフォンアプリ「ミライロID」の提示可)を管理事務所等の受付に提示すると無料出庫券と交換。特別支援学校バス等は団体申請書の事前提出が必要。レストラン横のタイムズ日産スタジアム駐車場及びイベント主催者受付分は対象外。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 7:00~22:00 120分400円(以降30分毎100円)\n障害者割引: 全額免除\n総台数: 427台",
    "sourceUrl": "https://www.nissan-stadium.jp/access/img/genmen202404.pdf",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14109-003",
    "name": "新横浜公園第2駐車場",
    "address": "神奈川県横浜市港北区小机町3300",
    "latitude": 35.51012,
    "longitude": 139.606674,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14109",
    "cityName": "横浜市港北区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳保持者及びその介護者1名が対象。精算前に入場時の駐車券と手帳(ミライロID可)を管理事務所等の受付に提示すると無料出庫券と交換。特別支援学校バス等は団体申請書の事前提出が必要。レストラン横のタイムズ日産スタジアム駐車場及びイベント主催者受付分は対象外。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 7:00~22:00 120分400円(以降30分毎100円)\n障害者割引: 全額免除\n総台数: 100台",
    "sourceUrl": "https://www.nissan-stadium.jp/access/img/genmen202404.pdf",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14109-004",
    "name": "新横浜公園第3駐車場",
    "address": "神奈川県横浜市港北区小机町3300",
    "latitude": 35.51012,
    "longitude": 139.606674,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14109",
    "cityName": "横浜市港北区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳保持者及びその介護者1名が対象。精算前に入場時の駐車券と手帳(ミライロID可)を管理事務所等の受付に提示すると無料出庫券と交換。特別支援学校バス等は団体申請書の事前提出が必要。レストラン横のタイムズ日産スタジアム駐車場及びイベント主催者受付分は対象外。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 7:30~22:00 120分400円(以降30分毎100円)\n障害者割引: 全額免除\n総台数: 136台",
    "sourceUrl": "https://www.nissan-stadium.jp/access/img/genmen202404.pdf",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14110-001",
    "name": "戸塚区総合庁舎駐車場(戸塚区役所・戸塚区民文化センターさくらプラザ共用)",
    "address": "神奈川県横浜市戸塚区戸塚町16番地17",
    "latitude": 35.400028,
    "longitude": 139.532776,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14110",
    "cityName": "横浜市戸塚区",
    "accessibleSpaceTotal": 9,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害のある方及びその介護者の方が対象(介護者のみの利用は対象外)。身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の提示が必要。障害者手帳アプリ「ミライロID」とマイナポータルを連携している場合はミライロIDの提示で手帳提示に代替可。区役所窓口またはさくらプラザ4階受付で提示。"
    },
    "accessibleSpaces": [
      {
        "count": 9
      }
    ],
    "notes": "通常料金: 30分220円(7:00〜22:30)、60分100円(22:30〜7:00)、土日祝日当日最大1,800円\n障害者割引: 無料(利用時間分の駐車料金を減免)\n総台数: 100台",
    "sourceUrl": "https://www.city.yokohama.lg.jp/totsuka/madoguchi-shisetsu/kuyakusho/annai/access-parking.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14110-002",
    "name": "横浜市戸塚スポーツセンター駐車場",
    "address": "神奈川県横浜市戸塚区上倉田町477番地",
    "latitude": 35.397713,
    "longitude": 139.535583,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14110",
    "cityName": "横浜市戸塚区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳の提示(マイナポータル連携済のミライロIDアプリ提示でも可)で駐車料金を全額免除。お帰りの際に受付窓口へ手帳を提示。専用区画1台(縦479cm×横253cm)確保。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 2時間300円、以降30分ごとに50円\n障害者割引: 無料(全額免除)\n総台数: 27台",
    "sourceUrl": "https://yokohama-sport.jp/totsuka-sc-ysa/access/",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14111-001",
    "name": "港南区役所駐車場",
    "address": "神奈川県横浜市港南区港南四丁目2番10号",
    "latitude": 35.401218,
    "longitude": 139.593277,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14111",
    "cityName": "横浜市港南区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "区役所・公会堂利用者のうち障害のある方及びその介護者が対象。身体障害者手帳、愛の手帳(療育手帳)、精神障害者保健福祉手帳のいずれかを提示(事前申請不要、入庫後精算前に駐車券と手帳を管理室へ提示)。ミライロIDとマイナポータルを連携している場合はミライロID提示で手帳提示に代替可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8時40分~22時:30分200円/22時~8時40分:60分100円\n障害者割引: 所要時間無料\n総台数: 52台",
    "sourceUrl": "https://www.city.yokohama.lg.jp/konan/madoguchi-shisetsu/kuyakusho/annai/access-parking.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14111-002",
    "name": "済生会横浜市南部病院駐車場",
    "address": "神奈川県横浜市港南区港南台三丁目2番10号",
    "latitude": 35.375286,
    "longitude": 139.579254,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14111",
    "cityName": "横浜市港南区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "当日受診の患者本人が対象(運転・同乗は問わない)。身体障がい者手帳、愛の手帳(療育手帳)、精神障がい者保健福祉手帳のいずれかを、駐車料金精算前に1階計算窓口(時間外は1階西玄関防災センター)へ手帳・駐車券・診察券とともに提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 外来患者:3時間まで400円(以降30分毎100円)\n障害者割引: 当日分無料\n総台数: 111台",
    "sourceUrl": "https://www.nanbu.saiseikai.or.jp/guide/floor-map/",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14112-001",
    "name": "旭区役所駐車場",
    "address": "神奈川県横浜市旭区鶴ケ峰一丁目4-12",
    "latitude": 35.474888,
    "longitude": 139.544846,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14112",
    "cityName": "横浜市旭区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の提示、またはミライロID/マイナポータル連携で代替可。運転者・同乗の介護者いずれも対象。精算前に駐車券とあわせて管理室へ提示。低公害車も同様に無料。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 平日8-22時 30分200円(第1)/30分150円(第2)、平日22-8時 60分100円、土日祝 当日最大900円(第1)/800円(第2)\n障害者割引: 利用時間無料\n総台数: 51台",
    "sourceUrl": "https://www.city.yokohama.lg.jp/asahi/madoguchi-shisetsu/kuyakusho/annai/access-parking.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14112-002",
    "name": "こども自然公園 第1駐車場",
    "address": "神奈川県横浜市旭区大池町65-1",
    "latitude": 35.452869,
    "longitude": 139.535431,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14112",
    "cityName": "横浜市旭区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の保持者が療養、健康増進の目的で公園を利用する場合が対象。運転・同乗いずれも可。管理事務所(受付9:00-17:00)で障害者手帳原本及び駐車券を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 2時間300円、以降20分ごとに50円\n障害者割引: 無料(療養・健康増進目的での公園利用時)\n総台数: 172台",
    "sourceUrl": "https://www.hama-midorinokyokai.or.jp/park/parking/genmen.php",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14112-003",
    "name": "横浜市旭スポーツセンター駐車場",
    "address": "神奈川県横浜市旭区川島町1983",
    "latitude": 35.464417,
    "longitude": 139.548447,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14112",
    "cityName": "横浜市旭区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "受付窓口で障害者手帳を提示(ミライロID・マイナポータル連携も可)。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 2時間300円、以降30分ごとに50円\n障害者割引: 全額免除\n総台数: 50台",
    "sourceUrl": "https://yokohama-sport.jp/asahi-sc-ysa/handicapped/",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14112-004",
    "name": "神奈川県立がんセンター駐車場",
    "address": "神奈川県横浜市旭区中尾二丁目3番2号",
    "latitude": 35.468315,
    "longitude": 139.524734,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14112",
    "cityName": "横浜市旭区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳等保持者は駐車料金が免除。診療日は病院1階総合案内、休診日は防災センターへ手帳を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 診療利用1回500円(30分無料)、その他の利用3時間まで500円(30分無料)、以後1時間ごとに100円\n障害者割引: 無料(障害者手帳提示で免除)",
    "sourceUrl": "https://kcch.kanagawa-pho.jp/general/koutsu.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14112-005",
    "name": "旭図書館駐車場",
    "address": "神奈川県横浜市旭区白根4-6-2",
    "latitude": 35.481087,
    "longitude": 139.54715,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14112",
    "cityName": "横浜市旭区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳の提示で無料駐車券の交付を受けられる。地区センター等周辺施設と共用の駐車場。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 入庫後30分無料、1時間まで100円、以降1時間ごとに100円\n障害者割引: 無料(無料駐車券交付)\n総台数: 39台",
    "sourceUrl": "https://www.city.yokohama.lg.jp/kurashi/kyodo-manabi/library/tshokan/asahi/access.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14113-001",
    "name": "横浜市緑区役所駐車場",
    "address": "神奈川県横浜市緑区寺山町118番地",
    "latitude": 35.511959,
    "longitude": 139.537979,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14113",
    "cityName": "横浜市緑区",
    "accessibleSpaceTotal": 4,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害のある方及びその介護者の方が、身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳を提示することで、区役所利用の所要時間分の駐車料金が無料。ただし窓口混雑等により60分を超えた場合、超過分は有料。"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 8時~22時:30分ごと200円、22時~8時:60分ごと100円、土日祝は最大800円(24時間、立体駐車場)\n障害者割引: 所要時間無料\n総台数: 79台",
    "sourceUrl": "https://www.city.yokohama.lg.jp/midori/madoguchi-shisetsu/kuyakusho/annai/access-parking.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14113-002",
    "name": "横浜市緑スポーツセンター駐車場",
    "address": "神奈川県横浜市緑区中山1-29-7",
    "latitude": 35.516659,
    "longitude": 139.536865,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14113",
    "cityName": "横浜市緑区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "受付窓口で障害者手帳(ミライロID・マイナポータル連携可)を提示。利用者本人および同伴介護者ともに駐車料金を全額免除。障害者用駐車区画1台分(縦500cm×横170cm)を確保。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "障害者割引: 駐車料金全額免除",
    "sourceUrl": "https://yokohama-sport.jp/midori-sc-ysa/handicapped/",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14113-003",
    "name": "四季の森公園駐車場",
    "address": "神奈川県横浜市緑区寺山町291",
    "latitude": 35.502064,
    "longitude": 139.53714,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14113",
    "cityName": "横浜市緑区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "入場時に身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかを提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 平日無料、土日祝(1月4日~12月28日)は普通車510円・二輪車80円(利用時間8:30~17:00、5/1~9/30は8:30~18:00)\n障害者割引: 駐車料金免除\n総台数: 165台",
    "sourceUrl": "https://www.kanagawa-park.or.jp/shikinomori/access.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14114-001",
    "name": "瀬谷区総合庁舎駐車場(瀬谷区役所駐車場)",
    "address": "神奈川県横浜市瀬谷区二ツ橋町190番地",
    "latitude": 35.466015,
    "longitude": 139.498642,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14114",
    "cityName": "横浜市瀬谷区",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害のある方及びその介護者の方が対象。身体障害者手帳・愛の手帳・精神障害者保健福祉手帳の提示が必要(手帳現物のほか、マイナポータル連携済みのミライロIDアプリの提示でも可)。区役所利用当日に限り所要時間分が無料。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 営業時間内(8:00~22:30) 30分150円、営業時間外 60分100円、休日最大料金800円\n障害者割引: 所要時間無料\n総台数: 100台",
    "sourceUrl": "https://www.city.yokohama.lg.jp/seya/madoguchi-shisetsu/kuyakusho/annai/access-parking.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14114-002",
    "name": "瀬谷本郷公園駐車場",
    "address": "神奈川県横浜市瀬谷区本郷一丁目70番2号",
    "latitude": 35.4744,
    "longitude": 139.472275,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14114",
    "cityName": "横浜市瀬谷区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、横浜市の愛の手帳(療育手帳)、精神障害者保健福祉手帳の交付を受けている方が対象。営業時間内(9:00~17:00)は管理事務所またはレストハウスで駐車券と手帳を提示、職員不在時は出庫時に精算機のインターホンでサポートセンターへ連絡。障害者団体としての利用は事前申請が必要(指定管理者:横浜植木株式会社 駐車場担当 045-262-7410)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 入出庫15分間無料、以降1時間200円、以後30分毎100円(営業時間5:00~23:00)\n障害者割引: 全額減免\n総台数: 100台",
    "sourceUrl": "https://seya-yokohamaueki.jp/access/",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14114-003",
    "name": "横浜市瀬谷スポーツセンター駐車場",
    "address": "神奈川県横浜市瀬谷区南台2-4-65",
    "latitude": 35.458008,
    "longitude": 139.486542,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14114",
    "cityName": "横浜市瀬谷区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "施設を利用された方に限り、帰り際に受付窓口で障害者手帳を提示(またはマイナポータル連携済みのミライロIDアプリ提示)することで駐車料金を全額免除。障害のある方向けの専用駐車区画(縦435cm×横250cm、斜線部幅120cm)を利用する場合は事前に受付へ申告が必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 2時間300円、以後30分毎50円\n障害者割引: 全額免除\n総台数: 47台",
    "sourceUrl": "https://yokohama-sport.jp/seya-sc-ysa/handicapped/",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14115-001",
    "name": "栄区庁舎駐車場(第1駐車場)",
    "address": "神奈川県横浜市栄区桂町303番地19",
    "latitude": 35.364349,
    "longitude": 139.553375,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14115",
    "cityName": "横浜市栄区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の提示により、区役所利用時は駐車の所要時間全て無料。介護者のみの利用(本人不同伴)は対象外。障害者手帳アプリ「ミライロID」を提示する場合は、あらかじめ「マイナポータル」と連携済みであることが必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分200円(8:00~22:00)、60分100円(22:00~8:00)\n障害者割引: 所要時間無料\n総台数: 58台",
    "sourceUrl": "https://www.city.yokohama.lg.jp/sakae/madoguchi-shisetsu/kuyakusho/annai/access-parking.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14115-002",
    "name": "栄区庁舎・公会堂スポーツセンター駐車場(第2駐車場)",
    "address": "神奈川県横浜市栄区桂町303番地19",
    "latitude": 35.364349,
    "longitude": 139.553375,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14115",
    "cityName": "横浜市栄区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・愛の手帳(療育手帳)・精神障害者保健福祉手帳の提示により、栄公会堂・栄スポーツセンター等の利用時は駐車の所要時間全て無料。介護者のみの利用(本人不同伴)は対象外。ミライロID提示の場合はマイナポータル連携済みであることが必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分200円(8:00~22:00)、土日祝当日最大料金900円\n障害者割引: 所要時間無料\n総台数: 47台",
    "sourceUrl": "https://www.city.yokohama.lg.jp/sakae/madoguchi-shisetsu/kuyakusho/annai/access-parking.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14115-003",
    "name": "本郷ふじやま公園駐車場",
    "address": "神奈川県横浜市栄区中野町56",
    "latitude": 35.364624,
    "longitude": 139.561996,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14115",
    "cityName": "横浜市栄区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳をお持ちの方が、療養・健康増進目的で公園を利用する場合に駐車料金が免除。手帳所持者が乗車していれば運転・同乗は問わない。出庫ゲート精算機のインターホンでコールセンターを呼び出し手帳所有を伝え、手帳原本を提示のうえ都度減免処理が必要(事後の処理は不可)。問合せ:公益財団法人横浜市緑の協会 管理課 駐車場担当 045-228-9431。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分100円、駐車後24時間最大900円(営業時間8時~19時)\n障害者割引: 無料(駐車料金免除)\n総台数: 30台",
    "sourceUrl": "https://www.hama-midorinokyokai.or.jp/park/parking/genmen.php",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14115-004",
    "name": "本郷台駅前県市等合同施設駐車場(あーすぷらざ・リリス)",
    "address": "神奈川県横浜市栄区小菅ケ谷1-2-1",
    "latitude": 35.367752,
    "longitude": 139.553055,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14115",
    "cityName": "横浜市栄区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がい者手帳をお持ちの方は駐車料金が無料。1階事務所受付、駐車場スタッフ、または2階総合受付にて障がい者手帳と駐車券を提示。2024年8月11日よりタイムズ24株式会社が運営管理(神奈川県立地球市民かながわプラザ〈あーすぷらざ〉・横浜市栄区民文化センター〈リリス〉共用の県市等合同施設駐車場)。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 普通車20分につき100円(4時間を超え当日中24時までは最大料金1,200円)、大型車30分につき400円\n障害者割引: 無料(駐車料金免除)\n総台数: 90台",
    "sourceUrl": "https://www.earthplaza.jp/ep/access/",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14116-001",
    "name": "泉区総合庁舎駐車場",
    "address": "神奈川県横浜市泉区和泉中央北五丁目1番1号",
    "latitude": 35.418259,
    "longitude": 139.488937,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14116",
    "cityName": "横浜市泉区",
    "accessibleSpaceTotal": 5,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、愛の手帳(療育手帳)、精神障害者保健福祉手帳のご提示により所要時間無料。ただし障害者本人が駐車場を使用した場合に適用され、「介護者」の方のみが使用された場合は含まない。事前申請不要、精算前に駐車券及び手帳を管理室へ提示。"
    },
    "accessibleSpaces": [
      {
        "count": 5
      }
    ],
    "notes": "通常料金: 平日8:00~22:30は30分200円、夜間(22:30~8:00)は60分100円。休日は最大800円(平日は最大料金なし)。\n障害者割引: 無料(所要時間全体)\n総台数: 96台",
    "sourceUrl": "https://www.city.yokohama.lg.jp/izumi/madoguchi-shisetsu/kuyakusho/parking.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14116-002",
    "name": "横浜市泉スポーツセンター駐車場",
    "address": "神奈川県横浜市泉区西が岡3-11",
    "latitude": 35.420452,
    "longitude": 139.514206,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14116",
    "cityName": "横浜市泉区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "帰館時に受付窓口にて障害者手帳(紙媒体)またはデジタル障害者手帳アプリ「ミライロID」、マイナポータル連携済アプリを提示することで駐車料金を全額免除。専用駐車区画(1台分)には三角コーンを設置、利用時は受付へ声かけ。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "障害者割引: 全額免除",
    "sourceUrl": "https://yokohama-sport.jp/izumi-sc-ysa/handicapped/",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14117-001",
    "name": "青葉区総合庁舎駐車場(第1駐車場・第2駐車場・地下駐車場)",
    "address": "神奈川県横浜市青葉区市ケ尾町31番地4",
    "latitude": 35.553493,
    "longitude": 139.536621,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14117",
    "cityName": "横浜市青葉区",
    "accessibleSpaceTotal": 5,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害のある方及びその介護者の方(身体障害者手帳、愛の手帳、精神障害者保健福祉手帳のご提示をお願いします)。障害者手帳アプリ「ミライロID」とマイナポータルを連携している場合はミライロIDの提示で手帳提示に代えることができる。介護者のみの利用の場合は対象外。"
    },
    "accessibleSpaces": [
      {
        "count": 5
      }
    ],
    "notes": "通常料金: 第1駐車場: 8時~22時 30分200円/22時~8時 60分100円、土日祝当日最大600円。第2駐車場: 8時~22時 30分200円/22時~8時 60分100円、平日当日最大900円、土日祝当日最大500円。\n障害者割引: 所要時間無料\n総台数: 178台",
    "sourceUrl": "https://www.city.yokohama.lg.jp/aoba/madoguchi-shisetsu/kuyakusho/annai/access-parking.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14118-001",
    "name": "都筑区総合庁舎駐車場(都筑区役所・都筑図書館・都筑公会堂)",
    "address": "神奈川県横浜市都筑区茅ケ崎中央32番1号",
    "latitude": 35.544849,
    "longitude": 139.570541,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14118",
    "cityName": "横浜市都筑区",
    "accessibleSpaceTotal": 5,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、愛の手帳(療育手帳)、精神障害者保健福祉手帳を持つ障害のある方及びその介護者が対象。駐車場利用窓口で手帳(またはミライロID等)を提示することで所要時間分無料。"
    },
    "accessibleSpaces": [
      {
        "count": 5
      }
    ],
    "notes": "通常料金: 日中料金(8:00～22:00)30分250円、夜間料金(22:00～8:00)60分100円、土日祝は当日最大料金1,100円\n障害者割引: 所要時間無料\n総台数: 162台",
    "sourceUrl": "https://www.city.yokohama.lg.jp/tsuzuki/madoguchi-shisetsu/kuyakusho/chushajo/",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14118-002",
    "name": "都筑中央公園駐車場",
    "address": "神奈川県横浜市都筑区茅ケ崎中央57-11",
    "latitude": 35.547421,
    "longitude": 139.572525,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14118",
    "cityName": "横浜市都筑区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、愛の手帳(療育手帳)、精神障害者保健福祉手帳所持者が療養・健康増進目的で公園を利用する場合、駐車料金が免除。運転・同乗いずれも対象。出庫ゲート精算機のインターホンでコールセンターに手帳所持を申告し、利用時に必ず減免処理が必要(事後精算不可)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00～22:00 30分100円、22:00～8:00 60分100円、駐車後24時間最大1,000円\n障害者割引: 無料(減免)\n総台数: 54台",
    "sourceUrl": "https://www.hama-midorinokyokai.or.jp/park/parking/tsudukichuo/tsudukichuo/",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14118-003",
    "name": "横浜市都筑スポーツセンター駐車場",
    "address": "神奈川県横浜市都筑区池辺町2973-1",
    "latitude": 35.526558,
    "longitude": 139.57634,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14118",
    "cityName": "横浜市都筑区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳(物理手帳のほか、ミライロIDとマイナポータルを連携済みの場合はミライロID提示でも可)を帰館時に受付窓口へ提示することで駐車料金全額免除。第一駐車場に専用区画1台(縦495cm×横245cm)を確保。介護者同伴の場合は介護者の利用料金も半額免除。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 2時間300円、以降30分ごとに50円加算(15分以内出庫は無料)\n障害者割引: 全額免除",
    "sourceUrl": "https://yokohama-sport.jp/tsuzuki-sc-ysa/handicapped/",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14131-001",
    "name": "川崎市役所本庁舎駐車場",
    "address": "神奈川県川崎市川崎区宮本町1番地",
    "latitude": 35.530712,
    "longitude": 139.703003,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14131",
    "cityName": "川崎市川崎区",
    "accessibleSpaceTotal": 4,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がいのある方が運転または同乗し、市役所本庁舎・南庁舎・北庁舎等の行政手続き窓口・会議室を利用する場合が対象(展望ロビー・カフェ利用は対象外)。利用終了時に施設窓口で障害者手帳・療育手帳等またはミライロIDを提示"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 市役所利用者(行政手続き・会議室利用):最初の1時間無料、以降30分400円。一般利用者:平日30分500円、土日祝8-18時最大1,200円・18-8時最大900円\n障害者割引: 所要時間無料(全額)\n総台数: 140台",
    "sourceUrl": "https://www.city.kawasaki.jp/230/page/0000055338.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14131-002",
    "name": "川崎マリエン駐車場",
    "address": "神奈川県川崎市川崎区東扇島38-1",
    "latitude": 35.497829,
    "longitude": 139.764069,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14131",
    "cityName": "川崎市川崎区",
    "accessibleSpaceTotal": 4,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳または精神障害者保健福祉手帳を提示"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 1時間未満無料、1〜3時間200円、3〜5時間400円、当日最大600円(普通車)。大型車は同時間帯400円/800円、最大1,200円\n障害者割引: 無料\n総台数: 253台",
    "sourceUrl": "https://kawasakiport.or.jp/outdoor/parking.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14131-003",
    "name": "富士見公園立体駐車場(富士通スタジアム川崎・かわQホール等共用)",
    "address": "神奈川県川崎市川崎区富士見1・2丁目他",
    "latitude": 35.531635,
    "longitude": 139.710922,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14131",
    "cityName": "川崎市川崎区",
    "accessibleSpaceTotal": 6,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、戦傷病者手帳、被爆者健康手帳、療育(愛護)手帳、精神障害者保健福祉手帳のいずれかを所持する利用者が対象。利用日8:00〜22:00に管理事務所受付にて手帳と駐車券を提示(事前申請不要)"
    },
    "accessibleSpaces": [
      {
        "count": 6
      }
    ],
    "notes": "通常料金: 20分100円、当日最大料金 平日1,200円/土日祝1,500円\n障害者割引: 無料(全額免除)\n総台数: 291台",
    "sourceUrl": "https://kawasaki-fujimi.com/info/2017/0424_01/",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14131-004",
    "name": "東扇島東公園駐車場",
    "address": "神奈川県川崎市川崎区東扇島38-1",
    "latitude": 35.497829,
    "longitude": 139.764069,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14131",
    "cityName": "川崎市川崎区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、戦傷病者手帳、被爆者健康手帳、療育手帳、精神障害者保健福祉手帳、公害医療手帳のいずれかの交付を受けている本人または付添の運転者が対象。精算機の専用電話でオペレーターを呼び出し手帳の種類を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車:3時間未満200円〜8時間以上800円。大型車:同時間帯400円〜1,600円\n障害者割引: 無料(全額免除)",
    "sourceUrl": "https://www.city.kawasaki.jp/580/page/0000001282.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14131-005",
    "name": "大師公園駐車場(タイムズ大師公園)",
    "address": "神奈川県川崎市川崎区大師公園1",
    "latitude": 35.53196,
    "longitude": 139.731735,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14131",
    "cityName": "川崎市川崎区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳提示。精算時に出口の専用電話でオペレーターの指示に従い手帳を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車:最初の1時間200円、以降30分100円、当日最大800円(24時まで)。大型車(マイクロバス):最初の1時間500円、以降30分250円\n障害者割引: 無料\n総台数: 60台",
    "sourceUrl": "https://daishi-park.com/access/",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14131-006",
    "name": "川崎市立川崎病院駐車場",
    "address": "神奈川県川崎市川崎区新川通12-1",
    "latitude": 35.526581,
    "longitude": 139.706238,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14131",
    "cityName": "川崎市川崎区",
    "accessibleSpaceTotal": 6,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳またはミライロID提示。精算前に会計窓口または総合案内で駐車券と手帳等を提示"
    },
    "accessibleSpaces": [
      {
        "count": 6
      }
    ],
    "notes": "通常料金: 診療:入庫後3時間200円、以降1時間100円、当日最大1,000円。面会:入庫後1時間300円、以降30分150円、当日最大1,000円\n障害者割引: 無料\n総台数: 130台",
    "sourceUrl": "https://www.city.kawasaki.jp/kawasaki_hospital/category/365-0-0-0-0-0-0-0-0-0.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14132-001",
    "name": "幸区役所駐車場(幸市民館・幸図書館・幸スポーツセンター・さいわい健康福祉プラザ・石川記念武道館 共用)",
    "address": "神奈川県川崎市幸区戸手本町1-11-1",
    "latitude": 35.544292,
    "longitude": 139.68692,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14132",
    "cityName": "川崎市幸区",
    "accessibleSpaceTotal": 4,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・戦傷病者手帳・療育手帳・精神障害者保健福祉手帳またはミライロIDを対象施設(幸区役所・幸市民館・幸図書館・幸スポーツセンター・さいわい健康福祉プラザ・石川記念武道館)の指定窓口で提示。手帳非所持の場合は本人氏名記載の障がいを確認できる書類+運転免許証等顔写真付き身分証明書の2点提示でも可。石川記念武道館利用者は幸スポーツセンター窓口で認証を受ける。"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 施設利用者:最初の1時間無料、以降30分100円(土日祝も同様)。一般利用者:平日8-18時60分300円/18-24時20分100円、土日祝8-24時20分100円、24-8時60分100円(全日共通)、土日祝当日最大料金1,000円\n障害者割引: 所要時間の全てが無料\n総台数: 75台",
    "sourceUrl": "https://www.city.kawasaki.jp/230/page/0000055382.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14133-001",
    "name": "中原区役所駐車場(タイムズセントア武蔵小杉)",
    "address": "神奈川県川崎市中原区小杉町三丁目1501番地",
    "latitude": 35.574684,
    "longitude": 139.657257,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14133",
    "cityName": "川崎市中原区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳等を1階庁舎案内(または区役所内の窓口)に提示。専用駐車スペース(2台)利用時は1階庁舎案内で手帳を提示し駐車許可証の交付を受ける必要あり。ミライロID対応。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 8時~24時 15分300円、24時~8時 60分100円(当日最大2,600円)\n障害者割引: 手続きに要した時間分無料(区役所利用者は最初の1時間無料、以降15分300円)\n総台数: 105台",
    "sourceUrl": "https://www.city.kawasaki.jp/nakahara/page/0000064647.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14133-002",
    "name": "とどろきアリーナ駐車場(等々力緑地・川崎とどろきパーク)",
    "address": "神奈川県川崎市中原区等々力1-3",
    "latitude": 35.586826,
    "longitude": 139.648911,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14133",
    "cityName": "川崎市中原区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳・戦傷病者手帳を各施設の受付窓口で提示。駐車券持参のうえ手続きが必要。ミライロID対応。問合せ:川崎とどろきパーク 044-711-2522"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 東駐車場:最初60分240円/以降30分毎120円、市民ミュージアム前:最初60分300円/以降30分毎150円、南駐車場:最初60分300円/以降30分毎150円\n障害者割引: 駐車料金免除(無料)\n総台数: 553台",
    "sourceUrl": "https://www.city.kawasaki.jp/shisei/category/288-6-1-0-0-0-0-0-0-0.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14134-001",
    "name": "高津区役所駐車場",
    "address": "神奈川県川崎市高津区下作延2丁目8番1号",
    "latitude": 35.59927,
    "longitude": 139.607651,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14134",
    "cityName": "川崎市高津区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がいのある方(運転者または同乗者)が用件を終えた際に、施設(高津区役所・みぞのくち市税事務所)の指定窓口で身体障害者手帳・療育手帳等を提示。手帳がない場合は障がいを確認できる書類(本人氏名記載)と顔写真付き身分証明書の2点提示で対応。1階平面(15台)・地下(22台)各1台ずつ思いやりスペースあり。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 施設利用者:最初の1時間無料、以降15分100円/一般利用者:平日8-18時60分500円、平日18-8時30分100円、土日祝8-18時20分100円、土日祝18-8時60分100円(最大1,500円)\n障害者割引: 所要時間全て無料\n総台数: 37台",
    "sourceUrl": "https://www.city.kawasaki.jp/230/page/0000055384.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14134-002",
    "name": "川崎市民プラザ駐車場(中央・西・東)",
    "address": "神奈川県川崎市高津区新作1丁目19番1号",
    "latitude": 35.584904,
    "longitude": 139.611023,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14134",
    "cityName": "川崎市高津区",
    "accessibleSpaceTotal": 4,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかを総合フロントまたはスポーツフロント前の有料駐車場コーナーで提示。中央駐車場(33台、障害者用2台含む)・西駐車場(67台、障害者用2台含む)・東駐車場(14台)。"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 施設利用で6時間まで無料、6時間超は30分ごとに100円(1日上限1,000円)。施設利用がない場合は最初から30分ごとに100円。\n障害者割引: 無料(時間制限なし)\n総台数: 114台",
    "sourceUrl": "https://www.kawasaki-shiminplaza.jp/faq/detail?id=257",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14134-003",
    "name": "川崎市高津スポーツセンター駐車場",
    "address": "神奈川県川崎市高津区二子3丁目15番1号",
    "latitude": 35.60334,
    "longitude": 139.622025,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14134",
    "cityName": "川崎市高津区",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳所持者が、施設利用前に受付で駐車券と手帳を提示。障害者専用駐車スペース3台。介護者・付添者も同伴時は無料(付添者自身が施設利用する場合は別途料金)。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 最初の1時間無料、1時間超2時間までは300円/1時間、2時間超は30分ごとに100円(1日上限1,000円)\n障害者割引: 無料\n総台数: 50台",
    "sourceUrl": "http://takaspo.life/shisetsuannai/pg690.html",
    "updatedAt": "2026-08-06T00:00:00Z"
  },
  {
    "id": "14135-001",
    "name": "多摩区役所駐車場",
    "address": "神奈川県川崎市多摩区登戸1775-1",
    "latitude": 35.619602,
    "longitude": 139.562103,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14135",
    "cityName": "川崎市多摩区",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がいのある方本人が運転するか、障がいのある方を同乗させて区役所等を利用する場合が対象。利用後、施設窓口で身体障害者手帳・療育手帳・精神障害者保健福祉手帳等を提示(各種手帳がない場合は氏名明記の障がい確認書類+顔写真付き身分証の2点でも可)。申し出がない場合は無料対象外。ミライロID(マイナポータル連携済)も手帳提示と同様に取り扱い。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 施設利用者：最初の1時間無料、以降30分ごと100円。一般利用者：平日8-18時60分300円、18-24時20分100円、24-8時60分100円(最大1,000円/日)、土日祝8-24時20分100円。営業時間8:00〜翌6:00\n障害者割引: 所要時間全て無料\n総台数: 109台",
    "sourceUrl": "https://www.city.kawasaki.jp/230/page/0000055386.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14135-002",
    "name": "生田緑地東口駐車場",
    "address": "神奈川県川崎市多摩区枡形7-1",
    "latitude": 35.610806,
    "longitude": 139.561996,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14135",
    "cityName": "川崎市多摩区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、戦傷病者手帳、被爆者健康手帳、療育手帳、精神障害者保健福祉手帳等の交付を受けた方が対象。個人利用は園内施設受付(東口ビジターセンター等)で手帳を提示し駐車サービス券を受け取る。団体利用は事前申請(ネットまたはFAX)が必要。マイナポータル連携済みのミライロID提示でも同様の取り扱い。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車：1時間300円、以降30分ごと150円(平日限定・普通車のみ当日24時まで最大1,000円)。大型車：1時間700円、以降30分ごと350円\n障害者割引: 駐車料金免除(無料)\n総台数: 140台",
    "sourceUrl": "https://www.ikutaryokuti.jp/access.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14135-003",
    "name": "生田緑地西口駐車場",
    "address": "神奈川県川崎市多摩区枡形6-26",
    "latitude": 35.610565,
    "longitude": 139.557922,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14135",
    "cityName": "川崎市多摩区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、戦傷病者手帳、被爆者健康手帳、療育手帳、精神障害者保健福祉手帳等の交付を受けた方が対象。個人利用は西口サテライト受付で手帳を提示し駐車サービス券を受け取る。団体利用は事前申請(ネットまたはFAX)が必要。マイナポータル連携済みのミライロID提示でも同様の取り扱い。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車：1時間300円、以降30分ごと150円(平日限定・普通車のみ当日24時まで最大1,000円)。西口は普通車専用(大型車不可)\n障害者割引: 駐車料金免除(無料)\n総台数: 52台",
    "sourceUrl": "https://www.ikutaryokuti.jp/access.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14135-004",
    "name": "稲田公園有料駐車場",
    "address": "神奈川県川崎市多摩区菅稲田堤2-9-1",
    "latitude": 35.63726,
    "longitude": 139.537811,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14135",
    "cityName": "川崎市多摩区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がいのある方本人、または障がいのある方のために運転する方で、公園利用のため駐車場を利用する場合に障害者手帳等の提示で駐車料金無料。駐車場設置のオートフォンで管理者に連絡が必要。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 入庫から2時間まで400円、以降30分ごとに50円加算。営業時間24時間(入庫は5:00〜22:00)\n障害者割引: 無料\n総台数: 32台",
    "sourceUrl": "https://www.city.kawasaki.jp/tama/page/0000063661.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14136-001",
    "name": "宮前区役所駐車場",
    "address": "神奈川県川崎市宮前区宮前平2-20-5",
    "latitude": 35.589382,
    "longitude": 139.579346,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14136",
    "cityName": "川崎市宮前区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳をお持ちの方が運転、または同乗している場合は所要時間すべて無料。宮前区役所・宮前市民館・宮前図書館・宮前消防署の利用者が対象で、窓口等で駐車券への認証措置を受ける必要がある。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 施設利用者：最初の1時間無料、以降30分100円。一般利用者：平日8:00〜21:00 60分400円・21:00〜8:00 60分100円/土日祝8:00〜21:00 20分100円・21:00〜8:00 60分100円(当日最大1000円)\n障害者割引: 無料(所要時間無料)\n総台数: 18台",
    "sourceUrl": "https://www.city.kawasaki.jp/230/page/0000055385.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14136-002",
    "name": "宮前市民館・宮前図書館駐車場",
    "address": "神奈川県川崎市宮前区宮前平2-20-4",
    "latitude": 35.589382,
    "longitude": 139.579346,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14136",
    "cityName": "川崎市宮前区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳をお持ちの方が運転、または同乗している場合は所要時間すべて無料。宮前区役所・宮前市民館・宮前図書館・宮前消防署の利用者が対象で、窓口等で駐車券への認証措置を受ける必要がある。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 施設利用者：最初の1時間無料、以降30分100円。一般利用者：平日8:00〜21:00 60分400円・21:00〜8:00 60分100円/土日祝8:00〜21:00 20分100円・21:00〜8:00 60分100円(当日最大1000円)\n障害者割引: 無料(所要時間無料)\n総台数: 38台",
    "sourceUrl": "https://www.city.kawasaki.jp/230/page/0000055385.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14136-003",
    "name": "宮前区役所第2駐車場",
    "address": "神奈川県川崎市宮前区宮前平2-19-9",
    "latitude": 35.588715,
    "longitude": 139.579193,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14136",
    "cityName": "川崎市宮前区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳をお持ちの方が運転、または同乗している場合は所要時間すべて無料。宮前区役所・宮前市民館・宮前図書館・宮前消防署の利用者が対象で、窓口等で駐車券への認証措置を受ける必要がある。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 施設利用者：最初の1時間無料、以降30分100円。一般利用者：平日8:00〜21:00 60分300円・21:00〜8:00 60分100円/土日祝8:00〜21:00 20分100円・21:00〜8:00 60分100円(当日最大1000円)\n障害者割引: 無料(所要時間無料)\n総台数: 42台",
    "sourceUrl": "https://www.city.kawasaki.jp/230/page/0000055385.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14136-004",
    "name": "県立東高根森林公園駐車場",
    "address": "神奈川県川崎市宮前区神木本町2-10-1",
    "latitude": 35.602196,
    "longitude": 139.586945,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14136",
    "cityName": "川崎市宮前区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者・知的障がい者・精神障がい者が公園施設を利用する場合、障害者手帳の提示により駐車料金が免除(有料となる土日祝も含めて免除)。北口障がい者駐車場の利用は事前申込が必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 平日：無料。土日祝(6/1〜10/31)：大型車880円・普通車600円。土日祝(11/1〜5/31)：大型車880円・普通車800円。二輪車は通年無料(利用時間8:30〜19:00)\n障害者割引: 無料(障害者手帳提示で駐車料金免除)\n総台数: 112台",
    "sourceUrl": "https://higashitakane.com/access/",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14137-001",
    "name": "麻生区役所駐車場",
    "address": "神奈川県川崎市麻生区万福寺1-5-1",
    "latitude": 35.604046,
    "longitude": 139.505768,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14137",
    "cityName": "川崎市麻生区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "麻生区役所・麻生市民館・麻生図書館・麻生休日急患診療所・しんゆり市税事務所を利用するために駐車場を利用する障がいのある方またはその方のために運転する方が対象。身体障害者手帳・戦傷病者手帳・療育手帳・精神障害者保健福祉手帳またはミライロIDを出庫時に窓口で提示し申し出ることで所要時間全てが無料。申出がない場合は対象外。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 施設利用者は最初の1時間無料、以降15分ごとに100円(平日)。一般利用者は平日8時〜18時30分ごとに400円、夜間(18時〜8時)60分100円。土日祝は最大料金1,500円。\n障害者割引: 無料(所要時間全て)\n総台数: 63台",
    "sourceUrl": "https://www.city.kawasaki.jp/230/page/0000055387.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14137-002",
    "name": "王禅寺ふるさと公園駐車場",
    "address": "神奈川県川崎市麻生区王禅寺528-1",
    "latitude": 35.58456,
    "longitude": 139.519073,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14137",
    "cityName": "川崎市麻生区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳等またはミライロIDの提示により個人利用は全額減免。団体の場合は事前に申請書の提出が必要。(等々力緑地、富士見公園北側、稲田公園、橘公園、多摩川緑地の各公園内有料駐車場と共通の減免制度)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1時間300円、超過30分ごとに50円(利用時間は季節により変動)\n障害者割引: 無料\n総台数: 63台",
    "sourceUrl": "https://www.city.kawasaki.jp/350/cmsfiles/contents/0000024/24545/shisetugennmennichirann.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14137-003",
    "name": "王禅寺余熱利用市民施設(ヨネッティー王禅寺)駐車場",
    "address": "神奈川県川崎市麻生区王禅寺1321",
    "latitude": 35.590809,
    "longitude": 139.525986,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14137",
    "cityName": "川崎市麻生区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳等の提示により個人利用の駐車場料金は全額免除。付添者の減免あり。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.city.kawasaki.jp/350/cmsfiles/contents/0000024/24545/shisetugennmennichirann.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14137-004",
    "name": "川崎市麻生スポーツセンター駐車場",
    "address": "神奈川県川崎市麻生区上麻生3-6-1",
    "latitude": 35.599705,
    "longitude": 139.505463,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14137",
    "cityName": "川崎市麻生区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・精神障害者保健福祉手帳・療育手帳等またはミライロIDを受付に提示し駐車登録することで、障がいのある方専用駐車場(1台分)の利用が無料。専用スペースが満車の場合は有料駐車スペースに駐車のうえ受付に申し出れば駐車料金免除。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "障害者割引: 無料\n総台数: 14台",
    "sourceUrl": "https://www.asao-sports.com/handicapped/",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14151-001",
    "name": "相模原市営橋本駅北口第1自動車駐車場",
    "address": "神奈川県相模原市緑区橋本6-2-4",
    "latitude": 35.596298,
    "longitude": 139.344482,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14151",
    "cityName": "相模原市緑区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "相模原市内在住で、身体障害者手帳(1級・2級)、療育手帳(A1・A2、または中軽度Bかつ身体障害者手帳3級以上に該当)、精神障害者保健福祉手帳(1級)のいずれかを所持する方が乗車する自動車が対象。事前に区の高齢・障害者相談課等の窓口で手帳等に「対象である旨」の表示を受けたうえで、駐車場出場時に精算機の呼び出しボタンで係員を呼び、表示済みの手帳等を提示(夜間無人時間帯はインターホンでカメラに提示)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分ごとに150円、駐車後24時間ごとの最大料金1,500円\n障害者割引: 基本料金の最初の2時間分が無料\n総台数: 737台",
    "sourceUrl": "https://www.city.sagamihara.kanagawa.jp/kosodate/fukushi/1026641/shogai/jidosha/1006482.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14151-002",
    "name": "相模原市営橋本駅北口第2自動車駐車場",
    "address": "神奈川県相模原市緑区橋本3-28",
    "latitude": 35.594326,
    "longitude": 139.346558,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14151",
    "cityName": "相模原市緑区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "相模原市内在住で、身体障害者手帳(1級・2級)、療育手帳(A1・A2、または中軽度Bかつ身体障害者手帳3級以上に該当)、精神障害者保健福祉手帳(1級)のいずれかを所持する方が乗車する自動車が対象。事前に区の高齢・障害者相談課等の窓口で手帳等に「対象である旨」の表示を受けたうえで、駐車場出場時に精算機の呼び出しボタンで係員を呼び、表示済みの手帳等を提示(夜間無人時間帯はインターホンでカメラに提示)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分ごとに150円、駐車後24時間ごとの最大料金1,500円\n障害者割引: 基本料金の最初の2時間分が無料\n総台数: 397台",
    "sourceUrl": "https://www.city.sagamihara.kanagawa.jp/kosodate/fukushi/1026641/shogai/jidosha/1006482.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14152-001",
    "name": "相模原駅自動車駐車場",
    "address": "神奈川県相模原市中央区相模原1-1-20",
    "latitude": 35.581825,
    "longitude": 139.368988,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14152",
    "cityName": "相模原市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "相模原市内在住で、身体障害者手帳1級・2級、最重度(A1)・重度(A2)の療育手帳、中度(B1)の療育手帳かつ身体障害者手帳3級、または精神障害者保健福祉手帳1級のいずれかに該当する人が乗車している自動車が対象。事前に中央高齢・障害者相談課の窓口(相模原市中央区富士見6-1-1 ウェルネスさがみはらA館1階)に障害者手帳等を持参し「対象である旨」の表示を受ける必要がある。利用時は駐車場出場時に精算機の呼び出しボタン等で係員を呼び、対象表示済みの手帳を提示する(障害のある人が同乗しない状態で出場する場合は、入場時に係員を呼び出す必要あり)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分ごとに150円、駐車後24時間ごとの最大料金1,500円\n障害者割引: 最初の2時間無料\n総台数: 220台",
    "sourceUrl": "https://www.city.sagamihara.kanagawa.jp/kosodate/fukushi/1026641/shogai/jidosha/1006482.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14153-001",
    "name": "相模大野立体駐車場(市営)",
    "address": "神奈川県相模原市南区相模大野4-4-2",
    "latitude": 35.53363,
    "longitude": 139.434601,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14153",
    "cityName": "相模原市南区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "相模原市内在住で、身体障害者手帳1~2級、療育手帳A1~A2(またはB1かつ身体障害者手帳3級)、精神障害者保健福祉手帳1級等の交付を受けている方が乗車している自動車が対象。事前に南高齢・障害者相談課(南区相模大野6-22-1 南保健福祉センター3階、TEL 042-701-7722)等の窓口で手帳等に対象である旨の表示を受けた上で、出場時に精算機の呼び出しボタン等で係員を呼び手帳等を提示(夜間無人時間帯はインターホンでコールセンターに連絡)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分150円(駐車後24時間最大料金1,500円)\n障害者割引: 駐車基本料金のうち最初の2時間分無料\n総台数: 786台",
    "sourceUrl": "https://www.city.sagamihara.kanagawa.jp/kosodate/fukushi/1026641/shogai/jidosha/1006482.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14153-002",
    "name": "小田急相模原駅自動車駐車場(市営)",
    "address": "神奈川県相模原市南区南台3-20-1 ラクアル・オダサガ内",
    "latitude": 35.514729,
    "longitude": 139.422043,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14153",
    "cityName": "相模原市南区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "相模原市内在住で、身体障害者手帳1~2級、療育手帳A1~A2(またはB1かつ身体障害者手帳3級)、精神障害者保健福祉手帳1級等の交付を受けている方が乗車している自動車が対象。事前に南高齢・障害者相談課(南区相模大野6-22-1 南保健福祉センター3階、TEL 042-701-7722)等の窓口で手帳等に対象である旨の表示を受けた上で、出場時に精算機の呼び出しボタン等で係員を呼び手帳等を提示(夜間無人時間帯はインターホンでコールセンターに連絡)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分150円(駐車後24時間最大料金1,500円)\n障害者割引: 駐車基本料金のうち最初の2時間分無料\n総台数: 128台",
    "sourceUrl": "https://www.city.sagamihara.kanagawa.jp/kosodate/fukushi/1026641/shogai/jidosha/1006482.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14153-003",
    "name": "相模原公園 駐車場(中央駐車場)",
    "address": "神奈川県相模原市南区下溝3277番地",
    "latitude": 35.531422,
    "longitude": 139.385513,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14153",
    "cityName": "相模原市南区",
    "accessibleSpaceTotal": 8,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳、療育手帳またはスマートフォンアプリ「ミライロID」をお持ちの方1名につき普通車1台が無料。駐車券と手帳またはミライロIDを公園管理事務所(8:30~17:00、休所日12/29~1/3)で提示するか、料金精算機のインターホンでコールセンターに連絡して無料処理。身障者用駐車枠8台分あり。"
    },
    "accessibleSpaces": [
      {
        "count": 8
      }
    ],
    "notes": "通常料金: 平日:2時間以内100円、3時間以上200円/土日祝:最大610円(大型車は別料金体系、二輪車は無料、西駐車場は常時無料)\n障害者割引: 無料(全額免除)\n総台数: 282台",
    "sourceUrl": "https://www.kanagawa-park.or.jp/sagamihara/handicapped.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-001",
    "name": "健康増進センター(すこやかん)駐車場",
    "address": "神奈川県横須賀市西逸見町1-38-11",
    "latitude": 35.284496,
    "longitude": 139.652008,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により、本人及び介助者1名まで駐車料金全額免除。詳細は施設へ問い合わせ(TEL 046-822-4411)。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.city.yokosuka.kanagawa.jp/2625/g_info/documents/260401_yokosukacityshisetsu.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-002",
    "name": "ウェルシティ市民プラザ駐車場",
    "address": "神奈川県横須賀市西逸見町1-38-11",
    "latitude": 35.284496,
    "longitude": 139.652008,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により、本人及び介助者1名まで駐車料金全額免除。詳細は施設へ問い合わせ(TEL 046-824-7561)。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.city.yokosuka.kanagawa.jp/2625/g_info/documents/260401_yokosukacityshisetsu.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-003",
    "name": "総合体育会館駐車場",
    "address": "神奈川県横須賀市不入斗町1-2",
    "latitude": 35.268318,
    "longitude": 139.663284,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により、本人及び介助者1名まで駐車料金全額免除。詳細は施設へ問い合わせ(TEL 046-826-2800)。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.city.yokosuka.kanagawa.jp/2625/g_info/documents/260401_yokosukacityshisetsu.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-004",
    "name": "北体育会館駐車場",
    "address": "神奈川県横須賀市夏島町2",
    "latitude": 35.318287,
    "longitude": 139.632019,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により、本人及び介助者1名まで駐車料金全額免除。詳細は施設へ問い合わせ(TEL 046-865-9333)。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.city.yokosuka.kanagawa.jp/2625/g_info/documents/260401_yokosukacityshisetsu.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-005",
    "name": "佐島の丘温水プール駐車場",
    "address": "神奈川県横須賀市佐島の丘1-1-1",
    "latitude": 35.229794,
    "longitude": 139.613785,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により、本人及び介助者1名まで駐車料金全額免除。詳細は施設へ問い合わせ(TEL 046-855-0911)。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.city.yokosuka.kanagawa.jp/2625/g_info/documents/260401_yokosukacityshisetsu.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-006",
    "name": "くりはま花の国駐車場",
    "address": "神奈川県横須賀市神明町1",
    "latitude": 35.224331,
    "longitude": 139.700729,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により、本人及び介助者1名まで駐車料金全額免除。詳細は施設へ問い合わせ(TEL 046-833-8282)。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.city.yokosuka.kanagawa.jp/2625/g_info/documents/260401_yokosukacityshisetsu.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-007",
    "name": "くりはま花の国プール(障害者温水訓練室)駐車場",
    "address": "神奈川県横須賀市神明町1821-12",
    "latitude": 35.217888,
    "longitude": 139.70871,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により、本人及び介助者1名まで駐車料金全額免除。詳細は施設へ問い合わせ(TEL 046-835-7754)。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.city.yokosuka.kanagawa.jp/2625/g_info/documents/260401_yokosukacityshisetsu.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-008",
    "name": "しょうぶ園駐車場",
    "address": "神奈川県横須賀市阿部倉18-1",
    "latitude": 35.25629,
    "longitude": 139.640228,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により、本人及び介助者1名まで駐車料金全額免除。詳細は施設へ問い合わせ(TEL 046-853-3688)。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.city.yokosuka.kanagawa.jp/2625/g_info/documents/260401_yokosukacityshisetsu.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-009",
    "name": "うみかぜ公園駐車場",
    "address": "神奈川県横須賀市平成町3-23",
    "latitude": 35.276543,
    "longitude": 139.683044,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により、本人及び介助者1名まで駐車料金全額免除。詳細は施設へ問い合わせ(TEL 046-822-4022)。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.city.yokosuka.kanagawa.jp/2625/g_info/documents/260401_yokosukacityshisetsu.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-010",
    "name": "海辺つり公園駐車場",
    "address": "神奈川県横須賀市平成町3-1",
    "latitude": 35.266479,
    "longitude": 139.690582,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により、本人及び介助者1名まで駐車料金全額免除。詳細は施設へ問い合わせ(TEL 046-822-4022)。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.city.yokosuka.kanagawa.jp/2625/g_info/documents/260401_yokosukacityshisetsu.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-011",
    "name": "夏島都市緑地駐車場",
    "address": "神奈川県横須賀市夏島町2-26",
    "latitude": 35.318287,
    "longitude": 139.632019,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により、本人及び介助者1名まで駐車料金全額免除。詳細は施設へ問い合わせ(TEL 080-2391-9779)。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.city.yokosuka.kanagawa.jp/2625/g_info/documents/260401_yokosukacityshisetsu.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-012",
    "name": "夏島グラウンド駐車場",
    "address": "神奈川県横須賀市浦郷町5-2931-71",
    "latitude": 35.312,
    "longitude": 139.637787,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により、本人及び介助者1名まで駐車料金全額免除。詳細は施設へ問い合わせ(TEL 080-2391-9779)。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.city.yokosuka.kanagawa.jp/2625/g_info/documents/260401_yokosukacityshisetsu.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-013",
    "name": "荒崎公園駐車場",
    "address": "神奈川県横須賀市長井6-5320-3",
    "latitude": 35.197918,
    "longitude": 139.607666,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により、本人及び介助者1名まで駐車料金全額免除。詳細は施設へ問い合わせ(TEL 046-857-2500)。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.city.yokosuka.kanagawa.jp/2625/g_info/documents/260401_yokosukacityshisetsu.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-014",
    "name": "三笠公園駐車場",
    "address": "神奈川県横須賀市稲岡町82-14",
    "latitude": 35.29361,
    "longitude": 139.665237,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・精神障害者保健福祉手帳・療育手帳の提示により駐車料金全額免除。ゲート清算機のインターホンで係員を呼び出し手帳を提示(TEL 046-824-6291)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初の1時間420円、以後30分毎に210円加算(2時間超は1時間毎に100円加算)\n障害者割引: 無料\n総台数: 33台",
    "sourceUrl": "https://www.city.yokosuka.kanagawa.jp/5560/sisetu/fc00000436.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-015",
    "name": "不入斗公園駐車場",
    "address": "神奈川県横須賀市不入斗町1-2-1",
    "latitude": 35.268318,
    "longitude": 139.663284,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により、本人及び介助者1名まで駐車料金全額免除。詳細は施設へ問い合わせ(TEL 046-823-9360)。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.city.yokosuka.kanagawa.jp/2625/g_info/documents/260401_yokosukacityshisetsu.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-016",
    "name": "大津公園駐車場",
    "address": "神奈川県横須賀市大津町5-4-1",
    "latitude": 35.258156,
    "longitude": 139.688644,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により、本人及び介助者1名まで駐車料金全額免除。詳細は施設へ問い合わせ(TEL 046-823-1550)。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.city.yokosuka.kanagawa.jp/2625/g_info/documents/260401_yokosukacityshisetsu.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-017",
    "name": "追浜公園駐車場",
    "address": "神奈川県横須賀市夏島町2-2",
    "latitude": 35.318287,
    "longitude": 139.632019,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により、本人及び介助者1名まで駐車料金全額免除。詳細は施設へ問い合わせ(TEL 046-865-3307)。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.city.yokosuka.kanagawa.jp/2625/g_info/documents/260401_yokosukacityshisetsu.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-018",
    "name": "はまゆう公園駐車場",
    "address": "神奈川県横須賀市不入斗町4-25",
    "latitude": 35.273754,
    "longitude": 139.663803,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により、本人及び介助者1名まで駐車料金全額免除。詳細は施設へ問い合わせ(TEL 046-826-2874)。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.city.yokosuka.kanagawa.jp/2625/g_info/documents/260401_yokosukacityshisetsu.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-019",
    "name": "佐原2丁目公園駐車場",
    "address": "神奈川県横須賀市佐原2-2-10",
    "latitude": 35.243771,
    "longitude": 139.68364,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により、本人及び介助者1名まで駐車料金全額免除。詳細は施設へ問い合わせ(TEL 046-833-5505)。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.city.yokosuka.kanagawa.jp/2625/g_info/documents/260401_yokosukacityshisetsu.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-020",
    "name": "光の丘公園駐車場",
    "address": "神奈川県横須賀市光の丘8-9",
    "latitude": 35.222916,
    "longitude": 139.672409,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により、本人及び介助者1名まで駐車料金全額免除。詳細は施設へ問い合わせ(TEL 046-849-9120)。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.city.yokosuka.kanagawa.jp/2625/g_info/documents/260401_yokosukacityshisetsu.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-021",
    "name": "西公園駐車場",
    "address": "神奈川県横須賀市武3-33-1",
    "latitude": 35.218193,
    "longitude": 139.646011,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により、本人及び介助者1名まで駐車料金全額免除。詳細は施設へ問い合わせ(TEL 046-857-6022)。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.city.yokosuka.kanagawa.jp/2625/g_info/documents/260401_yokosukacityshisetsu.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-022",
    "name": "湘南国際村西公園駐車場",
    "address": "神奈川県横須賀市湘南国際村1-2-5",
    "latitude": 35.253918,
    "longitude": 139.605972,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により、本人及び介助者1名まで駐車料金全額免除。詳細は施設へ問い合わせ(TEL 046-858-0779)。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.city.yokosuka.kanagawa.jp/2625/g_info/documents/260401_yokosukacityshisetsu.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-023",
    "name": "長井海の手公園(ソレイユの丘)駐車場",
    "address": "神奈川県横須賀市長井4",
    "latitude": 35.196491,
    "longitude": 139.614563,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により、本人及び介助者1名まで駐車料金全額免除。詳細は施設へ問い合わせ(TEL 046-857-2500)。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.city.yokosuka.kanagawa.jp/2625/g_info/documents/260401_yokosukacityshisetsu.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-024",
    "name": "ヴェルニー公園駐車場",
    "address": "神奈川県横須賀市汐入町1-1",
    "latitude": 35.28447,
    "longitude": 139.657227,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により、本人及び介助者1名まで駐車料金全額免除。詳細は施設へ問い合わせ(TEL 046-845-6660)。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.city.yokosuka.kanagawa.jp/2625/g_info/documents/260401_yokosukacityshisetsu.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-025",
    "name": "ヴェルクよこすか(勤労福祉会館)駐車場",
    "address": "神奈川県横須賀市日の出町1-5",
    "latitude": 35.280415,
    "longitude": 139.67424,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により、本人及び介助者1名まで駐車料金全額免除(施設利用料はトレーニング室のみ半額)。詳細は施設へ問い合わせ(TEL 046-822-0202)。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.city.yokosuka.kanagawa.jp/2625/g_info/documents/260401_yokosukacityshisetsu.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-026",
    "name": "横須賀市文化会館駐車場",
    "address": "神奈川県横須賀市深田台50",
    "latitude": 35.274662,
    "longitude": 139.67305,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 7,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の所持者は駐車料金無料。1階管理事務所で手帳と駐車券を提示(TEL 046-823-2950)。"
    },
    "accessibleSpaces": [
      {
        "count": 7
      }
    ],
    "notes": "通常料金: 30分まで無料、30分超~4時間400円、以降30分毎210円加算(夜間23:00~7:30は30分毎100円加算、19:00~7:30の最大料金1,000円)\n障害者割引: 無料\n総台数: 156台",
    "sourceUrl": "https://yokosuka-bunka.info/access_parking/",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-027",
    "name": "横須賀市自然・人文博物館駐車場",
    "address": "神奈川県横須賀市深田台95",
    "latitude": 35.274662,
    "longitude": 139.67305,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により、本人及び介助者1名まで駐車料金全額免除。詳細は施設へ問い合わせ(TEL 046-824-3688)。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.city.yokosuka.kanagawa.jp/2625/g_info/documents/260401_yokosukacityshisetsu.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14201-028",
    "name": "横須賀美術館駐車場",
    "address": "神奈川県横須賀市鴨居4-1",
    "latitude": 35.259796,
    "longitude": 139.738297,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14201",
    "cityName": "横須賀市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳(身体障害者手帳・療育手帳・精神障害者保健福祉手帳)をお持ちの方は駐車料金無料。詳細は美術館へ問い合わせ(TEL 046-822-4000 横須賀市コールセンター)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車320円(1時間まで)、以降160円/30分(1日上限1,600円)\n障害者割引: 無料\n総台数: 120台",
    "sourceUrl": "https://yokosuka-moa.jp/outline/access.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14203-001",
    "name": "平塚市役所駐車場",
    "address": "神奈川県平塚市浅間町9番1号",
    "latitude": 35.3354,
    "longitude": 139.349503,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14203",
    "cityName": "平塚市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳、指定難病医療受給者証、小児慢性特定疾病医療受給者証をお持ちの方(介護のため同乗する方を含む)が市役所本館・別館、消防署本署、中央図書館、博物館、美術館、青少年会館、教育会館、平塚税務署等を利用するために駐車した場合、駐車券とともに手帳等を用務先窓口で提示することで駐車料金を全額免除"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 施設利用者:入庫90分以内無料、以降30分毎100円(1日最大1,200円) / 非利用者:1時間以内300円(1日最大1,500円)\n障害者割引: 全額免除(無料)\n総台数: 188台",
    "sourceUrl": "https://www.city.hiratsuka.kanagawa.jp/shiyakusho/page27_00002.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14203-002",
    "name": "文化ゾーン第2駐車場",
    "address": "神奈川県平塚市浅間町12番41号",
    "latitude": 35.337769,
    "longitude": 139.349014,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14203",
    "cityName": "平塚市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳、指定難病医療受給者証、小児慢性特定疾病医療受給者証をお持ちの方(介護のため同乗する方を含む)が市役所本館・別館、消防署本署、中央図書館、博物館、美術館、青少年会館、教育会館、平塚税務署等を利用するために駐車した場合、駐車券とともに手帳等を用務先窓口で提示することで駐車料金を全額免除"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 施設利用者:入庫90分以内無料、以降30分毎100円(1日最大1,200円) / 非利用者:1時間以内300円(1日最大1,500円)\n障害者割引: 全額免除(無料)\n総台数: 59台",
    "sourceUrl": "https://www.city.hiratsuka.kanagawa.jp/shiyakusho/page27_00002.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14203-003",
    "name": "文化ゾーン第3駐車場",
    "address": "神奈川県平塚市西八幡一丁目3番3号",
    "latitude": 35.337746,
    "longitude": 139.348129,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14203",
    "cityName": "平塚市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳、指定難病医療受給者証、小児慢性特定疾病医療受給者証をお持ちの方(介護のため同乗する方を含む)が市役所本館・別館、消防署本署、中央図書館、博物館、美術館、青少年会館、教育会館、平塚税務署等を利用するために駐車した場合、駐車券とともに手帳等を用務先窓口で提示することで駐車料金を全額免除"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 施設利用者:入庫90分以内無料、以降30分毎100円(1日最大1,200円) / 非利用者:1時間以内300円(1日最大1,500円)\n障害者割引: 全額免除(無料)\n総台数: 67台",
    "sourceUrl": "https://www.city.hiratsuka.kanagawa.jp/shiyakusho/page27_00002.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14203-004",
    "name": "平塚市総合公園駐車場",
    "address": "神奈川県平塚市大原1番1号",
    "latitude": 35.340607,
    "longitude": 139.344925,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14203",
    "cityName": "平塚市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳を所持し自ら運転または当該手帳所持者を同乗させている場合、公園内各施設(管理事務所、総合体育館、野球場、競技場、レストハウス、ふれあい動物園、宿泊研修所)窓口で手帳提示のうえ割引認証を受けるか、施設受付時間外は出口精算機のオートフォンで手帳をカメラにかざして認証を受ける"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 2時間以内無料、2~3時間200円、3時間超過100円/時間(当日最大900円)※宿泊研修所を除く\n障害者割引: 半額(2~3時間100円、当日最大400円)\n総台数: 921台",
    "sourceUrl": "https://www.city.hiratsuka.kanagawa.jp/koen/page-c_00837.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14203-005",
    "name": "ひらつかシーテラス第一駐車場(東側)",
    "address": "神奈川県平塚市龍城ケ丘19-1",
    "latitude": 35.315536,
    "longitude": 139.347595,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14203",
    "cityName": "平塚市",
    "accessibleSpaceTotal": 1,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 12,
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳をお持ちの方。公園管理事務所営業時間内(8:30~17:15、年末年始除く)に公園管理棟で減免認証を受ける(営業時間外は精算機のインターホンで減免の旨を申告)"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 9月~6月:20分100円(最初の30分無料、1日最大900円) / 7月~8月:30分300円(1日最大1,800円)\n障害者割引: 入庫から12時間の範囲で無料\n総台数: 73台",
    "sourceUrl": "https://hiratsuka-seaterrace.com/access/",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14203-006",
    "name": "ひらつかシーテラス第二駐車場(西側)",
    "address": "神奈川県平塚市龍城ケ丘19-1",
    "latitude": 35.315536,
    "longitude": 139.347595,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14203",
    "cityName": "平塚市",
    "accessibleSpaceTotal": 2,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 12,
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳をお持ちの方。公園管理事務所営業時間内(8:30~17:15、年末年始除く)に公園管理棟で減免認証を受ける(営業時間外は精算機のインターホンで減免の旨を申告)"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 9月~6月:20分100円(最初の20分無料、最大料金なし) / 7月~8月:30分300円(最大料金なし)\n障害者割引: 入庫から12時間の範囲で無料\n総台数: 12台",
    "sourceUrl": "https://hiratsuka-seaterrace.com/access/",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14204-001",
    "name": "神奈川県立大船フラワーセンター 駐車場",
    "address": "神奈川県鎌倉市岡本1018",
    "latitude": 35.347687,
    "longitude": 139.520691,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14204",
    "cityName": "鎌倉市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳、戦傷病者手帳、療育手帳、精神障がい者保健福祉手帳、被爆者健康手帳をお持ちの方(本人)および付き添い1名は入園料・駐車料金が無料。手帳は原本を提示すること。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車200円/時間(以降30分ごとに100円加算)、大・中型車620円/時間(以降30分ごとに300円加算)\n障害者割引: 無料",
    "sourceUrl": "https://www.fcofuna-kanagawa.jp/info/",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14204-002",
    "name": "鎌倉体育館 駐車場",
    "address": "神奈川県鎌倉市由比ガ浜2-9-9",
    "latitude": 35.313919,
    "longitude": 139.548813,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14204",
    "cityName": "鎌倉市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "鎌倉市内に住所を有し、身体障がい者手帳・療育手帳・精神障がい者保健福祉手帳の交付を受けた者およびその介助者1人は、施設の個人利用時または駐車場利用時の料金が免除。手帳提示のほか障がい者手帳アプリ「MIRAIRO ID」の提示でも可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 入庫後30分以内無料、30分超~3時間以内300円、3時間超過後は1時間ごとに100円加算\n障害者割引: 無料\n総台数: 24台",
    "sourceUrl": "https://www.kamakura-sports.jp/kamakura_taiikukan/",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14204-003",
    "name": "大船体育館 駐車場",
    "address": "神奈川県鎌倉市台3-2-5",
    "latitude": 35.3466,
    "longitude": 139.531342,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14204",
    "cityName": "鎌倉市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "鎌倉市内に住所を有し、身体障がい者手帳・療育手帳・精神障がい者保健福祉手帳の交付を受けた者およびその介助者1人は、施設の個人利用時または駐車場利用時の料金が免除。手帳提示のほか障がい者手帳アプリ「MIRAIRO ID」の提示でも可。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.kamakura-sports.jp/ofuna_taiikukan/",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14205-001",
    "name": "江の島なぎさ駐車場",
    "address": "神奈川県藤沢市江の島1-2-1",
    "latitude": 35.301151,
    "longitude": 139.483063,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14205",
    "cityName": "藤沢市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "障がい者手帳(ミライロID可)を所持する本人が対象。精算前に出口精算機横の事務所へ駐車券と手帳等を持参のうえ申告。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間400円(当日最大料金・宿泊料金なし)\n障害者割引: 半額(10円未満切捨て)\n総台数: 327台",
    "sourceUrl": "https://www.s-n-p.jp/parking/p7enoshima/",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14205-002",
    "name": "片瀬海岸地下駐車場",
    "address": "神奈川県藤沢市片瀬海岸2-19",
    "latitude": 35.309505,
    "longitude": 139.480103,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14205",
    "cityName": "藤沢市",
    "accessibleSpaceTotal": 4,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "障がい者手帳所持者本人が対象。B1階駐車場管理事務所にて精算前に駐車券と手帳を提示。"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 30分210円(7・8月は30分260円)、当日最大1,710円(7・8月最大料金なし)\n障害者割引: 半額(10円未満切捨て)\n総台数: 200台",
    "sourceUrl": "https://www.s-n-p.jp/parking/p6katase/",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14205-003",
    "name": "湘南海岸公園 西部駐車場",
    "address": "神奈川県藤沢市鵠沼海岸1-17-24",
    "latitude": 35.315083,
    "longitude": 139.473785,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14205",
    "cityName": "藤沢市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "障がい者手帳所持者本人が対象。精算前に出口精算機横の事務所へ駐車券と手帳等を持参のうえ申告。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分210円(7・8月260円)、最大1,600円(7・8月3,000円)\n障害者割引: 半額(10円未満切捨て)\n総台数: 435台",
    "sourceUrl": "https://www.s-n-p.jp/parking/p3seibu/",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14205-004",
    "name": "湘南海岸公園 中部駐車場",
    "address": "神奈川県藤沢市片瀬海岸3-25-26",
    "latitude": 35.313042,
    "longitude": 139.476273,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14205",
    "cityName": "藤沢市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "障がい者手帳所持者本人が対象。精算前に出口精算機横の事務所へ駐車券と手帳等を持参のうえ申告(夜間は電話でコールセンター対応)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分210円(7・8月260円)、最大1,700円(7・8月3,000円)\n障害者割引: 半額(10円未満切捨て)\n総台数: 362台",
    "sourceUrl": "https://www.s-n-p.jp/parking/p4chubu/",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14205-005",
    "name": "湘南海岸公園 中部バス駐車場",
    "address": "神奈川県藤沢市片瀬海岸3-25-26",
    "latitude": 35.313042,
    "longitude": 139.476273,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14205",
    "cityName": "藤沢市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "障がい者手帳所持者本人が対象(普通自動車のみ)。精算前に出口精算機横の事務所へ駐車券と手帳等を持参のうえ申告。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車30分210円(7・8月260円)、大型車1時間1,050円(7・8月1,570円)\n障害者割引: 半額(10円未満切捨て、普通車のみ対象)",
    "sourceUrl": "https://www.s-n-p.jp/parking/p5chububus/",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14205-006",
    "name": "緑陰広場駐車場",
    "address": "神奈川県藤沢市鵠沼海岸1丁目地内",
    "latitude": 35.315491,
    "longitude": 139.473022,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14205",
    "cityName": "藤沢市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "障がい者手帳(ミライロID可)所持者が対象。通常料金支払後、領収証と手帳等を公園管理事務所窓口に提示し差額の返金を受ける方式。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1日単位2,100円〜1,100円(時期・時間帯により変動)\n障害者割引: 半額(100円未満切捨て)\n総台数: 58台",
    "sourceUrl": "https://www.s-n-p.jp/parking/p2ryokuin/",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14205-007",
    "name": "奥田公園駐車場",
    "address": "神奈川県藤沢市鵠沼東5-3",
    "latitude": 35.334106,
    "longitude": 139.490417,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14205",
    "cityName": "藤沢市",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "藤沢市民会館・南市民図書館・秩父宮記念体育館・藤沢市保健所/南保健センターの利用者が対象。身体障害者手帳、療育手帳、精神障害者保健福祉手帳、特定医療費(指定難病)医療受給者証、特定疾患医療受給者証、介護保険法第12条第3項の被保険者証のいずれかまたは障がい者手帳アプリの提示で認証を受け、駐車料金が免除。指定管理者:公益財団法人藤沢市まちづくり協会。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 最初の1時間400円、以後30分200円\n障害者割引: 無料(全額免除、ただし夜間利用の宿泊料金1,000円は対象外)\n総台数: 410台",
    "sourceUrl": "https://f-machikyo.or.jp/business/parking/",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14205-008",
    "name": "湘南港臨港道路付属駐車場",
    "address": "神奈川県藤沢市江の島1-12-2",
    "latitude": 35.299664,
    "longitude": 139.48317,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14205",
    "cityName": "藤沢市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "障がい者手帳等所持者本人が対象(神奈川県EV・FCV認定カードも対象)。ヨットハウスフロントで駐車券と手帳を提示しスタンプを受け、出口係員に手帳等を提示して確認を受ける。指定管理者:株式会社リビエラリゾート(湘南港・葉山港指定管理者、神奈川県管理施設)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1時間300円、大型車1時間620円、二輪車1時間150円\n障害者割引: 半額(10円未満切捨て)\n総台数: 325台",
    "sourceUrl": "https://www.riviera.co.jp/marina/enoshima/parking/index.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14205-009",
    "name": "市営湘南台駅地下自動車駐車場",
    "address": "神奈川県藤沢市湘南台1丁目43番13(地下2階)",
    "latitude": 35.397186,
    "longitude": 139.466293,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14205",
    "cityName": "藤沢市",
    "accessibleSpaceTotal": 2,
    "discountType": "unknown",
    "discount": {
      "type": "unknown",
      "conditions": "身体障がい者手帳、精神障がい者保健福祉手帳、療育手帳、難病の患者に対する医療受給者証のいずれかを所持する方が乗車する自動車が対象。出庫時に駐車場係員へ手帳等を提示。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 20分100円、最大料金(24時間)1,100円\n障害者割引: 60%減額\n総台数: 121台",
    "sourceUrl": "https://www.city.fujisawa.kanagawa.jp/shisetsu/annai/chushajo/002.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14206-001",
    "name": "小田原こどもの森公園わんぱくらんど駐車場",
    "address": "神奈川県小田原市久野4377-1",
    "latitude": 35.259594,
    "longitude": 139.126846,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14206",
    "cityName": "小田原市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳、療育手帳のいずれかを持つ方は駐車料金が全額免除。利用時は運転免許証等の公的証明書(住所・本人確認)の提示が必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1日1台 市民510円、市民以外1,010円\n障害者割引: 無料\n総台数: 300台",
    "sourceUrl": "https://www.city.odawara.kanagawa.jp/faq/p05893.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14206-002",
    "name": "小田原市立総合医療センター駐車場(南側有料駐車場)",
    "address": "神奈川県小田原市久野46番地",
    "latitude": 35.267757,
    "longitude": 139.151993,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14206",
    "cityName": "小田原市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳、療育手帳の交付を受けている方は駐車料金が全額免除。駐車票と手帳を1階総合受付に提示して手続きが必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 入庫後30分は無料。外来受診者は以降3時間まで200円、その後1時間毎に200円加算(1日上限1,000円)。お見舞い客は以降1時間毎200円。一般利用は以降1時間毎400円。\n障害者割引: 無料\n総台数: 128台",
    "sourceUrl": "https://www.city.odawara.kanagawa.jp/hospital/access/",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14206-003",
    "name": "小田原市観光交流センター駐車場(優先駐車スペース)",
    "address": "神奈川県小田原市本町一丁目7番50号",
    "latitude": 35.249054,
    "longitude": 139.157654,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14206",
    "cityName": "小田原市",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "観光交流センター東側の有料駐車場18台とは別に、障がいのある方などの優先駐車スペースが2台分あり無料(荷捌き用1台分も別途無料)。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "障害者割引: 無料\n総台数: 21台",
    "sourceUrl": "https://www.city.odawara.kanagawa.jp/global-image/units/593577/1-20230818121625_b64dee289f2af9.pdf",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14207-001",
    "name": "茅ヶ崎第2駐車場(市役所駐車場)",
    "address": "神奈川県茅ヶ崎市茅ヶ崎一丁目1番1号",
    "latitude": 35.333851,
    "longitude": 139.404266,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14207",
    "cityName": "茅ヶ崎市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳、医療受給者証(指定難病)、医療受給者証(小児慢性特定疾病)の交付を受けている人及び付添者が対象。駐車券を持参し、館内の減免機にて自身で処理(一般利用者は1時間無料、対象者は全時間無料)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8時~22時:30分100円(24時間最大1,000円)、22時~翌8時:60分100円\n障害者割引: 特に配慮が必要な方は全ての利用時間無料\n総台数: 79台",
    "sourceUrl": "https://www.city.chigasaki.kanagawa.jp/shisetsu_info/1002571/1015824.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14207-002",
    "name": "茅ヶ崎第3駐車場(総合体育館駐車場)",
    "address": "神奈川県茅ヶ崎市茅ヶ崎一丁目9番63号",
    "latitude": 35.334408,
    "longitude": 139.4039,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14207",
    "cityName": "茅ヶ崎市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳、医療受給者証(指定難病)、医療受給者証(小児慢性特定疾病)の交付を受けている人及び付添者が対象。駐車券を持参し、館内の減免機にて自身で処理(一般利用者は1時間無料、対象者は全時間無料)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8時~22時:30分100円(24時間最大900円)、22時~翌8時:60分100円\n障害者割引: 特に配慮が必要な方は全ての利用時間無料\n総台数: 72台",
    "sourceUrl": "https://www.city.chigasaki.kanagawa.jp/shisetsu_info/1002571/1015825.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14207-003",
    "name": "茅ヶ崎第4駐車場(市民文化会館駐車場)",
    "address": "神奈川県茅ヶ崎市茅ヶ崎一丁目11番1号",
    "latitude": 35.335075,
    "longitude": 139.404083,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14207",
    "cityName": "茅ヶ崎市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳、医療受給者証(指定難病)、医療受給者証(小児慢性特定疾病)の交付を受けている人及び付添者が対象。駐車券を持参し、館内の減免機にて自身で処理(一般利用者は1時間無料、対象者は全時間無料)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8時~22時:30分100円(24時間最大900円)、22時~翌8時:60分100円\n障害者割引: 特に配慮が必要な方は全ての利用時間無料\n総台数: 37台",
    "sourceUrl": "https://www.city.chigasaki.kanagawa.jp/shisetsu_info/1002571/1015826.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14207-004",
    "name": "神奈川県立茅ヶ崎里山公園 西駐車場",
    "address": "神奈川県茅ヶ崎市芹沢1030",
    "latitude": 35.375366,
    "longitude": 139.420929,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14207",
    "cityName": "茅ヶ崎市",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳(ミライロID可)の交付を受けている方が対象。来園時にパークセンターへ提示、または精算機のインターホンで申し出。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 平日:普通車200円/回、土日祝:普通車410円/回(大型車は610円/1,220円)\n障害者割引: 無料(全額免除)\n総台数: 260台",
    "sourceUrl": "https://www.kanagawa-park.or.jp/satoyama/access.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14207-005",
    "name": "柳島スポーツ公園駐車場(南側・北側)",
    "address": "神奈川県茅ヶ崎市柳島1300番地",
    "latitude": 35.32296,
    "longitude": 139.37706,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14207",
    "cityName": "茅ヶ崎市",
    "accessibleSpaceTotal": 8,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "conditions": "障害者手帳をお持ちの方は利用料金が減免。クラブハウス内公園管理室窓口(6時~22時)にて手帳を提示のうえ申し出。減免の具体的な金額・割合は公式サイト上に明記されていないため要確認。"
    },
    "accessibleSpaces": [
      {
        "count": 8
      }
    ],
    "notes": "通常料金: 60分200円(22:15~6:00は60分100円)、当日最大 平日600円・土日祝900円\n障害者割引: 利用料金減免(具体的な割引率・上限額は公式サイトに記載なし、要問い合わせ)\n総台数: 111台",
    "sourceUrl": "https://www.city.chigasaki.kanagawa.jp/shisetsu_info/s_sports/1028429.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14208-001",
    "name": "文化プラザ駐車場(逗子文化プラザホール地下駐車場)",
    "address": "神奈川県逗子市逗子4-2-10",
    "latitude": 35.295444,
    "longitude": 139.582352,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14208",
    "cityName": "逗子市",
    "accessibleSpaceTotal": 1,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "障害者手帳をお持ちの方は3時間まで無料(一般の施設利用者は1時間まで無料)。障がい者割引を受ける方は駐車券をカウンター(図書館またはホール窓口)へお持ちください。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 30分150円(上限なし)※逗子文化プラザ利用者は1時間まで無料\n障害者割引: 3時間まで無料\n総台数: 30台",
    "sourceUrl": "https://www.library.city.zushi.lg.jp/contents?pid=53",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14208-002",
    "name": "清水橋南駐車場",
    "address": "神奈川県逗子市逗子4-9-21",
    "latitude": 35.295181,
    "longitude": 139.581497,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14208",
    "cityName": "逗子市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "障害者手帳をお持ちの方は3時間まで無料(一般の施設(文化プラザ・図書館)利用者は1時間まで無料)。駐車券をカウンターへお持ちください。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 7時00分~21時00分 20分毎100円、24時間最大1,200円\n障害者割引: 3時間まで無料\n総台数: 54台",
    "sourceUrl": "https://www.library.city.zushi.lg.jp/contents?pid=53",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14210-001",
    "name": "下浦海岸第2駐車場",
    "address": "神奈川県三浦市南下浦町上宮田字芝原1096番12ほか",
    "latitude": 35.19202,
    "longitude": 139.65239,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14210",
    "cityName": "三浦市",
    "accessibleSpaceTotal": 2,
    "discountType": "unknown",
    "discount": {
      "type": "unknown",
      "conditions": "管理ブースで障害者手帳等を提示することで通常料金の50%割引が適用される。他の割引・優待との併用不可。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 7~8月:1時間400円/1~6月・9~12月平日:1回500円/土日祝:1時間300円(いずれも当日最大1,200円)\n障害者割引: 駐車場使用料50%割引\n総台数: 223台",
    "sourceUrl": "https://www.kdt-kousha.or.jp/parking-post/parking_shimourakaigan_2/",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14210-002",
    "name": "神奈川県立城ケ島公園第1駐車場",
    "address": "神奈川県三浦市三崎町城ケ島",
    "latitude": 35.133396,
    "longitude": 139.619797,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14210",
    "cityName": "三浦市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳(またはミライロID)の提示で駐車料金免除。入場時に係員へ手帳を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1回(ワンデーパス)500円、二輪車100円/日(令和6年4月1日改定、大型車不可)\n障害者割引: 無料",
    "sourceUrl": "https://www.pref.kanagawa.jp/docs/d2t/chiki/jyogashima1daypass.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14210-003",
    "name": "神奈川県立城ケ島公園第2駐車場",
    "address": "神奈川県三浦市三崎町城ケ島",
    "latitude": 35.133396,
    "longitude": 139.619797,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14210",
    "cityName": "三浦市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳(またはミライロID)の提示で駐車料金免除。出庫時に精算機のカメラへ手帳を提示、または時間外はインターフォンでコールセンター担当者へ提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1回(ワンデーパス)500円、二輪車100円/日、大型車1,000円/日(令和6年4月1日改定)\n障害者割引: 無料",
    "sourceUrl": "https://www.pref.kanagawa.jp/docs/d2t/chiki/jyogashima1daypass.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14211-001",
    "name": "秦野戸川公園 大倉駐車場",
    "address": "神奈川県秦野市堀山下1513",
    "latitude": 35.424973,
    "longitude": 139.168518,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14211",
    "cityName": "秦野市",
    "accessibleSpaceTotal": 4,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示で駐車料金を全額免除。駐車券とともに手帳(コピー不可)をパークセンターカウンターに提示するか、出庫時にゲートのガイダンスに従って提示。大型・中型車の場合は事前の減免申請が必要。"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 30分未満無料。以降、土日祝・夏季(7/21-8/31)・年末年始は30分毎に普通車200円加算(4時間超は上限800円)、平日は30分毎に普通車100円加算(4時間超は上限500円)\n障害者割引: 無料\n総台数: 150台",
    "sourceUrl": "https://www.kanagawa-park.or.jp/hadanotokawa/access.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14211-002",
    "name": "秦野戸川公園 水無川駐車場",
    "address": "神奈川県秦野市堀山下1513",
    "latitude": 35.424973,
    "longitude": 139.168518,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14211",
    "cityName": "秦野市",
    "accessibleSpaceTotal": 4,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示で駐車料金を全額免除。駐車券とともに手帳(コピー不可)をパークセンターカウンターに提示するか、出庫時にゲートのガイダンスに従って提示。大型・中型車の場合は事前の減免申請が必要。"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 30分未満無料。以降、土日祝・夏季(7/21-8/31)・年末年始は30分毎に普通車200円加算(4時間超は上限800円)、平日は30分毎に普通車100円加算(4時間超は上限500円)\n障害者割引: 無料\n総台数: 87台",
    "sourceUrl": "https://www.kanagawa-park.or.jp/hadanotokawa/access.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14211-003",
    "name": "秦野戸川公園 諏訪丸駐車場",
    "address": "神奈川県秦野市堀山下1513",
    "latitude": 35.424973,
    "longitude": 139.168518,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14211",
    "cityName": "秦野市",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示で駐車料金を全額免除。駐車券とともに手帳(コピー不可)をパークセンターカウンターに提示するか、出庫時にゲートのガイダンスに従って提示。大型・中型車の場合は事前の減免申請が必要。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 30分未満無料。以降、土日祝・夏季(7/21-8/31)・年末年始は30分毎に普通車200円加算(4時間超は上限800円)、平日は30分毎に普通車100円加算(4時間超は上限500円)\n障害者割引: 無料\n総台数: 97台",
    "sourceUrl": "https://www.kanagawa-park.or.jp/hadanotokawa/access.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14212-001",
    "name": "神奈川県立七沢森林公園駐車場",
    "address": "神奈川県厚木市七沢901-1",
    "latitude": 35.447639,
    "longitude": 139.300446,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14212",
    "cityName": "厚木市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害(児)者・知的障害(児)者・精神障害(児)者が公園施設を利用する場合、来園時に駐車場スタッフへ障害者手帳またはミライロIDを提示することで駐車料金が全額免除。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通530円/回・大型1,050円/回・二輪110円/回(有料期間:4月・5月・10月・11月の土日祝のみ。北口駐車場は通年無料)\n障害者割引: 無料\n総台数: 240台",
    "sourceUrl": "https://www.kanagawa-park.or.jp/nanasawa/access.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14213-001",
    "name": "大和市文化創造拠点シリウス駐車場",
    "address": "神奈川県大和市大和南一丁目8番1号",
    "latitude": 35.469677,
    "longitude": 139.465881,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14213",
    "cityName": "大和市",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳をお持ちの方及びその介護者は駐車場・駐輪場利用が無料。車高2.1mを超える福祉車両は事前に防災センター(046-259-8291)へ連絡。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 30分200円(1日上限1,000円)\n障害者割引: 無料\n総台数: 55台",
    "sourceUrl": "https://yamato-bunka.jp/access/",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14213-002",
    "name": "大和市立病院駐車場",
    "address": "神奈川県大和市深見西8-3-6",
    "latitude": 35.48666,
    "longitude": 139.457428,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14213",
    "cityName": "大和市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳、療育手帳の交付を受けている方は診療以外の目的での来院でも駐車料金が免除。会計時に駐車券を提示、または1階防災センターで手帳等を確認。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分まで無料、30分超~1時間200円、以降30分毎100円加算(1日上限1,000円)\n障害者割引: 無料",
    "sourceUrl": "https://www.yamatocity-mh.jp/about/traffic/parking/",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14213-003",
    "name": "大和ゆとりの森駐車場(F・マリノス 成城石井パーク)",
    "address": "神奈川県大和市福田4112",
    "latitude": 35.437775,
    "longitude": 139.451767,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14213",
    "cityName": "大和市",
    "accessibleSpaceTotal": 13,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がい者手帳をお持ちの方は駐車料金が免除。駐車券と手帳を持って仲良しプラザ窓口へ。東側駐車場(一般198台・身障者用5台)、南側駐車場(一般99台・身障者用3台)、南側第2駐車場(一般197台・身障者用5台)。"
    },
    "accessibleSpaces": [
      {
        "count": 13
      }
    ],
    "notes": "通常料金: 30分~1時間毎100円(1日上限600円)\n障害者割引: 無料\n総台数: 507台",
    "sourceUrl": "https://www.sakata-greenservice.co.jp/yutori/guide/parking/",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14215-001",
    "name": "海老名中央公園地下駐車場",
    "address": "神奈川県海老名市中央一丁目5番1号",
    "latitude": 35.452179,
    "longitude": 139.393051,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14215",
    "cityName": "海老名市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかを所持する者が運転または同乗する場合、精算時に手帳を提示。時間単価のみ半額で、最大料金には適用されない。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 7時~23時: 最初30分150円、以降30分ごとに100円(最大1,000円)/23時~7時: 60分ごとに100円(最大500円)/入庫後15分以内出庫は無料\n障害者割引: 時間単価の半額\n総台数: 198台",
    "sourceUrl": "https://www.city.ebina.kanagawa.jp/guide/kotsu/chushajo/1003644.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14215-002",
    "name": "えびな市民活動センター駐車場",
    "address": "神奈川県海老名市さつき町51番地の2",
    "latitude": 35.447823,
    "longitude": 139.380585,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14215",
    "cityName": "海老名市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・精神障害者手帳・療育手帳をお持ちの方及びその介護者は不徴収者。減免申請不要、施設窓口で手帳を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初の1時間無料、以降1時間ごとに200円(市民割引カード利用で100円)、入場日上限1,600円(カード利用時800円)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.ebina.kanagawa.jp/guide/kyodo/npo/1013489.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14215-003",
    "name": "海老名運動公園駐車場(西側・貫抜)",
    "address": "神奈川県海老名市社家4032番地の1",
    "latitude": 35.429985,
    "longitude": 139.377808,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14215",
    "cityName": "海老名市",
    "accessibleSpaceTotal": 8,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・精神障害者手帳・療育手帳をお持ちの方及びその介護者は不徴収者。減免申請不要、施設窓口で手帳を提示。"
    },
    "accessibleSpaces": [
      {
        "count": 8
      }
    ],
    "notes": "通常料金: 最初の1時間無料、以降1時間ごとに200円、1日上限1,400円\n障害者割引: 無料\n総台数: 607台",
    "sourceUrl": "https://www.city.ebina.kanagawa.jp/guide/bunka/sports/1013466.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14215-004",
    "name": "北部公園駐車場",
    "address": "神奈川県海老名市上今泉6-14-1",
    "latitude": 35.465725,
    "longitude": 139.409119,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14215",
    "cityName": "海老名市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・精神障害者手帳・療育手帳をお持ちの方及びその介護者は不徴収者。減免申請不要、施設窓口で手帳を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初の1時間無料、以降1時間ごとに200円、1日上限1,400円\n障害者割引: 無料",
    "sourceUrl": "https://www.city.ebina.kanagawa.jp/guide/bunka/sports/1013466.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14215-005",
    "name": "中野公園駐車場(第1・第2)",
    "address": "神奈川県海老名市中野一丁目2314番2",
    "latitude": 35.41291,
    "longitude": 139.373383,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14215",
    "cityName": "海老名市",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・精神障害者手帳・療育手帳をお持ちの方及びその介護者は不徴収者。減免申請不要、施設窓口で手帳を提示。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 8:30~17:30開放。最初の1時間無料、以降1時間ごとに200円、1日上限1,400円\n障害者割引: 無料\n総台数: 136台",
    "sourceUrl": "https://www.city.ebina.kanagawa.jp/guide/bunka/sports/1013466.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14215-006",
    "name": "海老名市文化会館・中央図書館・総合福祉会館共用駐車場",
    "address": "神奈川県海老名市めぐみ町6番1号",
    "latitude": 35.452042,
    "longitude": 139.386597,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14215",
    "cityName": "海老名市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がい者手帳(身体障がい者手帳・精神障がい者手帳・療育手帳)をお持ちの方及びその介護者は利用施設窓口で手帳提示により無料券を交付。減免申請不要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初の1時間無料、以降1時間ごとに200円、入場日上限2,000円\n障害者割引: 無料(窓口で無料券を発行)\n総台数: 365台",
    "sourceUrl": "https://www.city.ebina.kanagawa.jp/guide/bunka/bunka/1013493.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14215-007",
    "name": "海老名市立中央図書館 障がい者等専用駐車場",
    "address": "神奈川県海老名市めぐみ町6番1号",
    "latitude": 35.452042,
    "longitude": 139.386597,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14215",
    "cityName": "海老名市",
    "accessibleSpaceTotal": 7,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がい者手帳(身体障がい者手帳・精神障がい者手帳・療育手帳)をお持ちの方及びその介護者が対象。図書館1階窓口で手帳を提示。満車の場合は文化会館・福祉会館共用駐車場(最初の1時間無料)を利用。"
    },
    "accessibleSpaces": [
      {
        "count": 7
      }
    ],
    "notes": "障害者割引: 無料\n総台数: 7台",
    "sourceUrl": "https://ebina.city-library.jp/news/entry-5332.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14216-001",
    "name": "スカイアリーナ座間(市民体育館)駐車場",
    "address": "神奈川県座間市相武台1-47-1",
    "latitude": 35.496349,
    "longitude": 139.403137,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14216",
    "cityName": "座間市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "座間市内に在住・在勤・在学する障がい者本人および介助者が対象。駐車券と障害者手帳等をスカイアリーナ座間1階受付、またはスカイグリーンパーク管理棟の係員に提示することで駐車場料金が半額減免される。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 入庫後30分無料、30分超~120分まで200円、以降60分ごとに100円、最大料金600円(当日24時まで)\n障害者割引: 半額\n総台数: 136台",
    "sourceUrl": "https://www.city.zama.kanagawa.jp/bunkasports/sports/shisetsu/1003267.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14218-001",
    "name": "綾瀬スポーツ公園駐車場",
    "address": "神奈川県綾瀬市本蓼川345",
    "latitude": 35.435692,
    "longitude": 139.448441,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14218",
    "cityName": "綾瀬市",
    "accessibleSpaceTotal": 9,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がい者手帳(身体障害者手帳等)をお持ちの方およびその介護者が駐車場を利用するとき、駐車料金が免除される。駐車券と手帳を持って綾瀬スポーツ公園レストハウス窓口へ持参するか、出口精算機のウェブカメラに手帳をかざして提示する。"
    },
    "accessibleSpaces": [
      {
        "count": 9
      }
    ],
    "notes": "通常料金: 入庫後30分まで無料、以降入庫後60分まで100円、以降60分ごとに100円、入庫当日最大600円(大型車は1回・日1500円、事前予約制)\n障害者割引: 無料(駐車料金免除)\n総台数: 475台",
    "sourceUrl": "https://www.city.ayase.kanagawa.jp/soshiki/midorikoenka/koen/1/5787.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14301-001",
    "name": "神奈川県立葉山公園駐車場",
    "address": "神奈川県三浦郡葉山町下山口1443-1",
    "latitude": 35.258633,
    "longitude": 139.593628,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14301",
    "cityName": "葉山町",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳をお持ちの方(ミライロIDの利用も可)。公園係員に手帳を提示のうえ、QRコードの発券手続きを行うことで駐車料金が全額免除される。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 季節・曜日により変動。10月～4月:平日30分未満無料/30分~1時間100円/以降50円毎30分、土日祝30分未満無料/30分~1時間400円/以降200円毎30分。5月~9月:平日30分未満無料/30分~1時間400円/以降200円毎30分、土日祝30分未満無料/30分~1時間800円/以降400円毎30分。12/29~1/3は休日料金適用。\n障害者割引: 無料(全額免除)\n総台数: 113台",
    "sourceUrl": "https://www.hayama-park.com/access/index.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14301-002",
    "name": "長者ヶ崎駐車場",
    "address": "神奈川県三浦郡葉山町下山口字白石2049番5ほか",
    "latitude": 35.258633,
    "longitude": 139.593628,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14301",
    "cityName": "葉山町",
    "accessibleSpaceTotal": 2,
    "discountType": "unknown",
    "discount": {
      "type": "unknown",
      "conditions": "身体障害者手帳の提示により駐車場使用料が50%割引となる。他の割引との併用不可。管理ブースで手帳を提示。運営は神奈川県道路公社。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 季節・曜日により変動。7~8月平日:1,600円/回(13時以降800円)、7~8月土日祝:2,200円/回(13時以降1,100円)、1~3月・11~12月/4~6月・9~10月の土日祝:400円/時間(当日最大1,600円)、平日開放時間中は無料。\n障害者割引: 駐車場使用料50%割引\n総台数: 130台",
    "sourceUrl": "https://www.kdt-kousha.or.jp/parking-post/parking_chojagasaki/",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14341-001",
    "name": "大磯港臨港道路付属第一駐車場",
    "address": "神奈川県中郡大磯町大磯1398-18",
    "latitude": 35.306038,
    "longitude": 139.315933,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14341",
    "cityName": "大磯町",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳または療育手帳の所持者が乗車する車両が対象。減免処理は港湾管理事務所または第1駐車場詰所で行う(原則開所時間のみ対応)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通自動車 310円/時間(1日上限1,040円)、大型自動車 630円/時間(1日上限2,090円)、原付・自動二輪車 160円/時間(1日上限520円)\n障害者割引: 5割減額\n総台数: 114台",
    "sourceUrl": "https://www.town.oiso.kanagawa.jp/soshiki/sangyokankoubu/sangyo/tanto/oisoko/1358496911892.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14341-002",
    "name": "大磯港臨港道路付属第二駐車場",
    "address": "神奈川県中郡大磯町大磯1398-18",
    "latitude": 35.306038,
    "longitude": 139.315933,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14341",
    "cityName": "大磯町",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳または療育手帳の所持者が乗車する車両が対象。減免処理は港湾管理事務所または第1駐車場詰所で行う(原則開所時間のみ対応)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通自動車 310円/時間(1日上限1,040円)、大型自動車 630円/時間(1日上限2,090円)、原付・自動二輪車 160円/時間(1日上限520円)\n障害者割引: 5割減額\n総台数: 239台",
    "sourceUrl": "https://www.town.oiso.kanagawa.jp/soshiki/sangyokankoubu/sangyo/tanto/oisoko/1358496911892.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14341-003",
    "name": "旧吉田茂邸地区駐車場(県立大磯城山公園)",
    "address": "神奈川県中郡大磯町国府本郷551-1",
    "latitude": 35.305794,
    "longitude": 139.290771,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14341",
    "cityName": "大磯町",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳またはミライロIDの提示が対象。公園管理事務所または旧吉田茂邸地区管理休憩棟に手帳(またはミライロID)と駐車券を提示して減免処理。営業時間9:00~17:00(閉門)。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 土日祝日: 普通車1時間300円、中型車以上1200円。平日は無料。(普通車23台、中型車以上2台、身障者用1台)\n障害者割引: 無料(土日祝日の有料時間帯も減免)\n総台数: 26台",
    "sourceUrl": "https://www.kanagawa-park.or.jp/ooisojoyama/qa.html",
    "updatedAt": "2026-08-07T00:00:00Z"
  },
  {
    "id": "14342-001",
    "name": "ラディアン駐車場(二宮町生涯学習センター)",
    "address": "神奈川県中郡二宮町二宮1240-10",
    "latitude": 35.300343,
    "longitude": 139.25293,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14342",
    "cityName": "二宮町",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳(2023年10月1日から精神障害者保健福祉手帳の交付を受けている方も対象拡大)の交付を受けている方及びその介護者が対象。ラディアン受付窓口で手帳等を提示すると駐車料金が無料になる。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分100円(ラディアン開館時間内に館内の認証機を通すと最初の1時間分無料)\n障害者割引: 無料\n総台数: 72台",
    "sourceUrl": "https://www.town.ninomiya.kanagawa.jp/0000001080.html",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "14382-001",
    "name": "大涌谷駐車場",
    "address": "神奈川県足柄下郡箱根町仙石原1251-1",
    "latitude": 35.247826,
    "longitude": 139.019028,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14382",
    "cityName": "箱根町",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳、療育手帳、またはミライロIDの提示で普通車の駐車料金が無料。運転・同乗いずれでも対象。入庫後、駐車場管理事務所または大涌谷インフォメーションセンターにて駐車券と手帳を提示し減免手続きが必要(営業時間9:00-16:00)。管理: 神奈川県道路公社。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 平日: 最初2時間500円、以降30分毎200円加算、最大1,300円/休日: 最初30分500円、2時間まで1,000円、以降30分毎400円加算、最大2,600円\n障害者割引: 無料\n総台数: 147台",
    "sourceUrl": "https://www.kanagawa-park.or.jp/owakudani/parking/index.html",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "14382-002",
    "name": "神奈川県立恩賜箱根公園駐車場",
    "address": "神奈川県足柄下郡箱根町元箱根171",
    "latitude": 35.194187,
    "longitude": 139.026962,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14382",
    "cityName": "箱根町",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳、またはミライロIDの提示で駐車料金が全額免除(手帳・ミライロID保有者1名につき普通車1台)。駐車場出口横の係員詰所にて駐車券と手帳(またはミライロID)を提示し減免処理(対応時間9:00-16:00)。出庫後の減免処理・返金は不可。管理: 神奈川県道路公社。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 普通車: 平日500円/回、休日1,000円/回(大型車2,000円/回、二輪車無料)\n障害者割引: 無料\n総台数: 84台",
    "sourceUrl": "https://www.kanagawa-park.or.jp/onsisite/handicapped.html",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "14401-001",
    "name": "神奈川県立あいかわ公園 南駐車場",
    "address": "神奈川県愛甲郡愛川町半原5423",
    "latitude": 35.539577,
    "longitude": 139.257156,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14401",
    "cityName": "愛川町",
    "accessibleSpaceTotal": 12,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "有料日に駐車場入場時に身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれか(コピー不可)またはスマートフォンアプリ「ミライロID」の提示で普通車の駐車料金を無料。障がい者施設・障がい者団体が公園を利用する場合は全額免除。大型・中型車は事前に減免申請が必要。"
    },
    "accessibleSpaces": [
      {
        "count": 12
      }
    ],
    "notes": "通常料金: 普通車500円、大型・中型1,500円、二輪車100円(土・日・祝日、ゴールデンウィーク・夏休み・春休み等の有料日のみ。平日は無料)\n障害者割引: 無料\n総台数: 468台",
    "sourceUrl": "http://www.aikawa-park.jp/publics/index/4/",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "14401-002",
    "name": "神奈川県立あいかわ公園 北駐車場",
    "address": "神奈川県愛甲郡愛川町半原5423",
    "latitude": 35.539577,
    "longitude": 139.257156,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14401",
    "cityName": "愛川町",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "有料日に駐車場入場時に身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれか(コピー不可)またはスマートフォンアプリ「ミライロID」の提示で普通車の駐車料金を無料。障がい者施設・障がい者団体が公園を利用する場合は全額免除。大型・中型車は事前に減免申請が必要。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 普通車500円、大型・中型1,500円、二輪車100円(土・日・祝日、ゴールデンウィーク・夏休み・春休み等の有料日のみ。平日は無料。平日は大型・中型専用として30台分利用可)\n障害者割引: 無料\n総台数: 283台",
    "sourceUrl": "http://www.aikawa-park.jp/publics/index/4/",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "14402-001",
    "name": "宮ヶ瀬湖畔エリア 小中沢駐車場",
    "address": "神奈川県愛甲郡清川村宮ヶ瀬字春ノ木丸1676-3",
    "latitude": 35.500069,
    "longitude": 139.214569,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14402",
    "cityName": "清川村",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "大型車以外で障がい者である旨の証明ができる方は無料。現地にて障害者手帳等の証明書を提示(申請不要)。大型車は事前の駐車場料金減免申請が必要。イベント開催期間中(桜まつり・ふるさとまつり・クリスマスみんなのつどい)は減免措置なし。管理:公益財団法人宮ヶ瀬ダム周辺振興財団(TEL 046-288-3600)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車:平日無料/土日祝・GW 30分無料・2時間未満300円・2時間以上500円、大型車:常時1,500円(平日は無料表記あり)\n障害者割引: 無料(大型車以外)\n総台数: 344台",
    "sourceUrl": "https://www.miyagase.or.jp/publics/index/20/",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "14402-002",
    "name": "宮ヶ瀬湖畔エリア 水の郷駐車場",
    "address": "神奈川県愛甲郡清川村宮ケ瀬940-5",
    "latitude": 35.500069,
    "longitude": 139.214569,
    "prefectureCode": "14",
    "prefectureName": "神奈川県",
    "cityCode": "14402",
    "cityName": "清川村",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "大型車以外で村民・障がい者である旨の証明ができる方は無料。個人は現地にて障害者手帳等の証明書を提示(申請不要)。団体は利用日の3週間前までに駐車場料金減免申請書の提出が必要。大型車は事前の減免申請が必要。イベント開催期間中(桜まつり・ふるさとまつり・クリスマスみんなのつどい)は減免措置なし。管理:宮ヶ瀬水の郷観光協同組合(TEL 046-288-2888)、減免申請窓口:清川村村づくり観光課(TEL 046-288-3864)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車:平日無料/土日祝・GW 30分無料・2時間未満300円・2時間以上500円、大型車:常時1,500円、二輪車:平日無料・土日祝100円\n障害者割引: 無料(大型車以外)\n総台数: 247台",
    "sourceUrl": "https://www.town.kiyokawa.kanagawa.jp/soshiki/sangyokanko/miyagase/275.html",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11102-001",
    "name": "プラザノース駐車場(さいたま市北区役所・北図書館)",
    "address": "埼玉県さいたま市北区宮原町1丁目852番地1",
    "latitude": 35.931389,
    "longitude": 139.620361,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11102",
    "cityName": "さいたま市北区",
    "accessibleSpaceTotal": 6,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳等の障害者手帳をお持ちの方が対象。身障者用駐車区画(6台分、駐車場入場ゲートを入って2つめのエリア角)を利用、または満車時は一般区画利用後に窓口へ申し出。"
    },
    "accessibleSpaces": [
      {
        "count": 6
      }
    ],
    "notes": "通常料金: 最初の2時間無料、以降30分ごとに110円加算\n障害者割引: 身障者用駐車区画は無料\n総台数: 183台",
    "sourceUrl": "https://www.city.saitama.lg.jp/faq/001/007/001/p110835.html",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11102-002",
    "name": "さいたま市大宮盆栽美術館駐車場",
    "address": "埼玉県さいたま市北区土呂町2丁目24番地3",
    "latitude": 35.928982,
    "longitude": 139.633408,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11102",
    "cityName": "さいたま市北区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳をお持ちの方が対象。障害者用駐車区画2台分を無料で利用可能。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 一般車39台は2時間まで無料、大型バス3台は880円\n障害者割引: 障害者用駐車区画(2台)は無料\n総台数: 42台",
    "sourceUrl": "https://www.city.saitama.lg.jp/faq/001/004/002/p110848.html",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11103-001",
    "name": "大宮区役所駐車場",
    "address": "埼玉県さいたま市大宮区吉敷町一丁目124番地1",
    "latitude": 35.901691,
    "longitude": 139.630554,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11103",
    "cityName": "さいたま市大宮区",
    "accessibleSpaceTotal": 4,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳を各窓口で提示すると駐車料金の減免(無料)手続きを実施。区役所・大宮図書館等利用者は一般も60分無料。"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 100円／20分\n障害者割引: 無料\n総台数: 89台",
    "sourceUrl": "https://www.city.saitama.lg.jp/omiya/001/003/003/p021647.html",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11103-002",
    "name": "大宮公園東駐車場",
    "address": "埼玉県さいたま市大宮区高鼻町四丁目(大宮公園内)",
    "latitude": 35.918793,
    "longitude": 139.63179,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11103",
    "cityName": "さいたま市大宮区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がい者手帳を出口モニターに提示すると無料。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間まで200円、以降30分ごとに100円\n障害者割引: 無料\n総台数: 238台",
    "sourceUrl": "https://www.pref.saitama.lg.jp/omiya-park/oshirase/h30/parking-yuryouka.html",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11103-003",
    "name": "大宮公園西駐車場",
    "address": "埼玉県さいたま市大宮区高鼻町四丁目(大宮公園内)",
    "latitude": 35.918793,
    "longitude": 139.63179,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11103",
    "cityName": "さいたま市大宮区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がい者手帳を出口モニターに提示すると無料。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間まで200円、以降30分ごとに100円\n障害者割引: 無料\n総台数: 40台",
    "sourceUrl": "https://www.pref.saitama.lg.jp/omiya-park/oshirase/h30/parking-yuryouka.html",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11103-004",
    "name": "大宮ソニックシティ地下駐車場",
    "address": "埼玉県さいたま市大宮区桜木町一丁目7番5号",
    "latitude": 35.905506,
    "longitude": 139.619995,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11103",
    "cityName": "さいたま市大宮区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳を提示し、ビル2階総合案内等で事前に3時間無料券を受け取る必要あり。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 20分／200円(最大料金2,000円/24時間)\n障害者割引: 3時間無料\n総台数: 140台",
    "sourceUrl": "https://www.sonic-city.or.jp/access.html",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11103-005",
    "name": "JACK大宮自動車駐車場",
    "address": "埼玉県さいたま市大宮区錦町682-2",
    "latitude": 35.904289,
    "longitude": 139.624069,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11103",
    "cityName": "さいたま市大宮区",
    "accessibleSpaceTotal": 2,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかを精算前に駐車場係員へ提示。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 100円/15分(入庫後24時間最大料金2,500円)\n障害者割引: 半額\n総台数: 110台",
    "sourceUrl": "https://www.saitama-toshiseibi.or.jp/parking-jack/",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11105-001",
    "name": "北与野駅北口地下駐車場",
    "address": "埼玉県さいたま市中央区上落合2-3-10",
    "latitude": 35.891033,
    "longitude": 139.62793,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11105",
    "cityName": "さいたま市中央区",
    "accessibleSpaceTotal": 4,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかを精算前に係員へ提示。10円未満切捨て。"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 30分150円(夜間22時~翌8時は1,500円)\n障害者割引: 半額\n総台数: 156台",
    "sourceUrl": "https://www.city.saitama.lg.jp/001/010/018/002/001/p056813.html",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11105-002",
    "name": "埼玉県立小児医療センター駐車場",
    "address": "埼玉県さいたま市中央区新都心1番地2",
    "latitude": 35.891815,
    "longitude": 139.632233,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11105",
    "cityName": "さいたま市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳1~3級、療育手帳A・B、精神障害者保健福祉手帳1級の所持者対象。精算前に窓口等での割引処理が必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 面会:1出庫300円、外来等:1出庫100円(機械式駐車場)\n障害者割引: 無料\n総台数: 320台",
    "sourceUrl": "https://www.saitama-pho.jp/scm-c/kotsu/kotsuannai.html",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11105-003",
    "name": "彩の国さいたま芸術劇場駐車場",
    "address": "埼玉県さいたま市中央区上峰3-15-1",
    "latitude": 35.87603,
    "longitude": 139.621567,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11105",
    "cityName": "さいたま市中央区",
    "accessibleSpaceTotal": 4,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかを1階総合インフォメーションに提示すると無料サービス券が交付される。埼玉県条例(公の施設の使用料及び利用料金の減免に関する条例施行規則)に基づく。"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 最初の1時間無料、以降1時間350円(1日上限1,300円)\n障害者割引: 無料\n総台数: 155台",
    "sourceUrl": "https://www.saf.or.jp/arthall/access/",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11105-004",
    "name": "けやきひろば駐車場",
    "address": "埼玉県さいたま市中央区新都心10番地",
    "latitude": 35.892948,
    "longitude": 139.631271,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11105",
    "cityName": "さいたま市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 24,
      "conditions": "GMOアリーナさいたま(旧さいたまスーパーアリーナ)またはけやきひろば来場者対象。身体障害者手帳・療育手帳・精神障害者保健福祉手帳(いずれもミライロID可)、障害福祉サービス受給者証、特定医療費(指定難病)受給者証、特定疾患医療受給者証、被爆者健康手帳、戦傷病者手帳、介護保険被保険者証(要介護・要支援認定)のいずれかを駐車場管理室に提示。同乗者による手続きも可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初の1時間400円、以降30分ごとに200円(当日最大2,200円、0時~7時は最大料金適用外)\n障害者割引: 入庫時間より24時間まで無料",
    "sourceUrl": "https://www.saitama-arena.co.jp/faq/",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11106-001",
    "name": "プラザウエスト駐車場(桜区役所駐車場)",
    "address": "埼玉県さいたま市桜区道場4丁目3番1号",
    "latitude": 35.85675,
    "longitude": 139.610306,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11106",
    "cityName": "さいたま市桜区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳(身体障害者手帳・療育手帳・精神障害者保健福祉手帳)またはスマートフォンアプリ「ミライロID」を施設窓口・駐車場管理窓口で提示。さいたま市の「市立施設使用料等の減免」制度により、プラザウエストは施設使用料が半額になる一方、駐車場使用料は無料(令和8年4月1日現在の市公式リストで「プラザウエスト駐車場」が使用料無料施設として明記)。桜区役所とプラザウエストは同一建物・同一駐車場を共用。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 3時間まで無料。以後、超過時間30分ごとに110円(消費税込)\n障害者割引: 無料\n総台数: 404台",
    "sourceUrl": "https://www.city.saitama.lg.jp/002/003/004/003/001/p005696_d/fil/13_12syou-koukyouryoukin.pdf",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11107-001",
    "name": "浦和駅東口駐車場",
    "address": "埼玉県さいたま市浦和区東高砂町11-1",
    "latitude": 35.857906,
    "longitude": 139.65863,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11107",
    "cityName": "さいたま市浦和区",
    "accessibleSpaceTotal": 18,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "精算前に必ず管理室等で障害者手帳をご提示ください。提示により駐車料金が半額になります。"
    },
    "accessibleSpaces": [
      {
        "count": 18
      }
    ],
    "notes": "通常料金: 30分200円(夜間22時~翌8時は最大2,000円)\n障害者割引: 半額\n総台数: 849台",
    "sourceUrl": "https://www.city.saitama.lg.jp/001/010/018/002/001/p056816.html",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11107-002",
    "name": "浦和パーキングセンター自動車駐車場",
    "address": "埼玉県さいたま市浦和区仲町1-9-1",
    "latitude": 35.860588,
    "longitude": 139.655609,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11107",
    "cityName": "さいたま市浦和区",
    "accessibleSpaceTotal": 2,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "精算前に障害者手帳をご提示いただくと、駐車料金が半額になります。運営: 一般財団法人さいたま市都市整備公社。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 最初の1時間400円、以降30分毎200円(0-6時は1時間200円、当日最大1,500円)\n障害者割引: 半額\n総台数: 425台",
    "sourceUrl": "https://www.saitama-toshiseibi.or.jp/urawa-parking/",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11107-003",
    "name": "浦和中央パーキング",
    "address": "埼玉県さいたま市浦和区高砂1-2-1-11",
    "latitude": 35.856964,
    "longitude": 139.657883,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11107",
    "cityName": "さいたま市浦和区",
    "accessibleSpaceTotal": 2,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "精算前に駐車場係員に障害者手帳を提示すると駐車料金が半額になります。運営: 一般財団法人さいたま市都市整備公社。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 30分200円(昼間6-24時)、30分100円(夜間24-6時)\n障害者割引: 半額\n総台数: 134台",
    "sourceUrl": "https://www.saitama-toshiseibi.or.jp/parking-urawa-central/",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11107-004",
    "name": "埼玉会館駐車場",
    "address": "埼玉県さいたま市浦和区高砂3-1-4",
    "latitude": 35.857227,
    "longitude": 139.652298,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11107",
    "cityName": "さいたま市浦和区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳をお持ちの方は、入庫時にご本人がご提示いただくと駐車料金が免除されます。利用時間9:00~21:30。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 1時間350円(上限料金設定なし)\n障害者割引: 免除(無料)\n総台数: 39台",
    "sourceUrl": "https://www.saf.or.jp/saitama/access/",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11108-001",
    "name": "さいたま市南区役所駐車場(サウスピア地階含む)",
    "address": "埼玉県さいたま市南区別所七丁目20番1号",
    "latitude": 35.845428,
    "longitude": 139.645584,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11108",
    "cityName": "さいたま市南区",
    "accessibleSpaceTotal": 4,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかを持参し、区役所各窓口で駐車券を提示すると減免(無料)手続きが可能。障害者用区画は駐車場棟2台・サウスピア地階2台(福祉車両対応、高さ制限2.8m)。区役所利用者は緑色の駐車券により1時間まで無料。"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 30分ごとに100円\n障害者割引: 無料(減免)\n総台数: 59台",
    "sourceUrl": "https://www.city.saitama.lg.jp/minami/001/002/010/p022843.html",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11108-002",
    "name": "武蔵浦和駅東駐車場",
    "address": "埼玉県さいたま市南区別所7-2-1",
    "latitude": 35.847588,
    "longitude": 139.64859,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11108",
    "cityName": "さいたま市南区",
    "accessibleSpaceTotal": 2,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "精算前にオートホンで指定管理者(タイムズ24)のコールセンターへ連絡する必要あり。営業時間7時~24時(1月1日休業)。障害者手帳の提示が条件と見られるが、ページ上に手帳種別の明記はなし。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 100円/30分(夜間22時~翌8時は1,200円)\n障害者割引: 駐車料金半額\n総台数: 92台",
    "sourceUrl": "https://www.city.saitama.lg.jp/001/010/018/002/001/p056815.html",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11108-003",
    "name": "さいたま市文化センター駐車場",
    "address": "埼玉県さいたま市南区根岸1-7-1",
    "latitude": 35.843861,
    "longitude": 139.664429,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11108",
    "cityName": "さいたま市南区",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "障害者手帳をお持ちの方は駐車場の使用料金が2分の1に減額。あわせて施設使用料も2分の1に減額される障害者減免制度あり(利用申請時に手帳提示が必要)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間まで無料、以降最初の30分220円、以降30分ごとに110円加算\n障害者割引: 駐車場使用料半額\n総台数: 137台",
    "sourceUrl": "https://www.city.saitama.lg.jp/008/003/001/bunkasenta.html",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11109-001",
    "name": "美園コミュニティセンター駐車場",
    "address": "埼玉県さいたま市緑区美園4-19-1",
    "latitude": 35.895203,
    "longitude": 139.726944,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11109",
    "cityName": "さいたま市緑区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により、駐車場及び自転車等駐車場の使用料が無料(さいたま市障害者の利用に係る公の施設使用料等減免条例に基づく)。なお同施設の会議室等の施設使用料は2分の1減額(10円未満切捨て)であり、駐車場のみ全額免除となる点に注意。手続きは利用申請時・駐車場出庫時に窓口で手帳等を提示。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料\n総台数: 53台",
    "sourceUrl": "https://www.city.saitama.lg.jp/002/003/004/003/003/p084969.html",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11109-002",
    "name": "プラザイースト駐車場",
    "address": "埼玉県さいたま市緑区中尾1440-8",
    "latitude": 35.871799,
    "longitude": 139.68541,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11109",
    "cityName": "さいたま市緑区",
    "accessibleSpaceTotal": 3,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により、駐車場使用料が2分の1に減額(10円未満切捨て)。さいたま市障害者の利用に係る公の施設使用料等減免条例に基づく。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 最初の2時間以内無料、2時間超~2時間30分以内100円、以降30分ごとに100円加算(消費税別、10円未満切捨て)\n障害者割引: 半額(通常料金の2分の1)\n総台数: 123台",
    "sourceUrl": "https://www.city.saitama.lg.jp/008/003/001/praza_east.html",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11110-001",
    "name": "岩槻駅東口公共駐車場(市営岩槻駅東口公共駐車場)",
    "address": "埼玉県さいたま市岩槻区本町3-2-5",
    "latitude": 35.950104,
    "longitude": 139.693756,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11110",
    "cityName": "さいたま市岩槻区",
    "accessibleSpaceTotal": 5,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "精算前に精算機の係員呼出ボタンを押し、障害者手帳(身体障害者手帳・療育手帳・精神障害者保健福祉手帳)を提示。本人及び同伴の方1名が対象。さいたま市障害者の利用に係る公の施設使用料等減免制度の対象施設。"
    },
    "accessibleSpaces": [
      {
        "count": 5
      }
    ],
    "notes": "通常料金: 30分100円(夜間22時~翌8時は1,000円)\n障害者割引: 半額\n総台数: 348台",
    "sourceUrl": "https://www.city.saitama.lg.jp/001/010/018/002/001/p056814.html",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11201-001",
    "name": "ウェスタ川越駐車場",
    "address": "埼玉県川越市新宿町1-17-17",
    "latitude": 35.903923,
    "longitude": 139.479935,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11201",
    "cityName": "川越市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳、障害福祉サービス受給者証、特定医療費(指定難病)受給者証、特定疾患医療受給者証、被爆者健康手帳、戦傷病者手帳、介護保険被保険者証(要介護・要支援認定者)のいずれかを持参し、出庫前(料金精算前)に1F総合案内で駐車券の無料処理を受ける必要がある。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間200円(入場後1時間まで無料)\n障害者割引: 無料",
    "sourceUrl": "https://www.westa-kawagoe.jp/access/",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11201-002",
    "name": "ホットスタッフ川越パーク(川越水上公園)駐車場",
    "address": "埼玉県川越市池辺880",
    "latitude": 35.91217,
    "longitude": 139.449539,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11201",
    "cityName": "川越市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳・療育手帳・精神障害者保健福祉手帳をお持ちの方は駐車料金無料。入口ロータリー横の身体障がい者専用駐車場を利用可能。プール場内の総合案内所で手帳を提示(事前の入場チケット購入不要)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 夏季プール営業期間中: 普通車1,000円、大型車2,000円(車両ナンバー読取り方式・キャッシュレス決済)。プール期間以外は無料。\n障害者割引: 無料\n総台数: 2530台",
    "sourceUrl": "https://www.parks.or.jp/kawagoesuijo/guide/008/008313.html",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11203-001",
    "name": "川口駅東口地下公共駐車場",
    "address": "埼玉県川口市川口1-1-1",
    "latitude": 35.801834,
    "longitude": 139.718155,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11203",
    "cityName": "川口市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳・ミライロID・障害福祉サービス受給者証・指定難病医療受給者証等を出口ゲートで精算前に係員に提示。一時利用のみ対象。事前精算機では割引不可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 10分毎100円(平日上限1日2,200円、土日祝上限1日3,000円)\n障害者割引: 半額\n総台数: 248台",
    "sourceUrl": "https://www.city.kawaguchi.lg.jp/soshiki/01050/010/4/4958.html",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11203-002",
    "name": "川口駅西口地下公共駐車場",
    "address": "埼玉県川口市川口3-1-2",
    "latitude": 35.800964,
    "longitude": 139.716476,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11203",
    "cityName": "川口市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳・ミライロID等を出口ゲートで精算前に係員に提示。一時利用のみ対象。事前精算機では割引不可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 10分毎100円(平日上限1日2,200円、土日祝上限1日3,000円、営業時間外1,200円)\n障害者割引: 半額\n総台数: 151台",
    "sourceUrl": "https://www.city.kawaguchi.lg.jp/soshiki/01050/010/4/4956.html",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11203-003",
    "name": "川口総合文化センター・リリア駐車場",
    "address": "埼玉県川口市川口3-1-1",
    "latitude": 35.800964,
    "longitude": 139.716476,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11203",
    "cityName": "川口市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "駐車場係員に駐車券を提示し障害者手帳を呈示すると法令及び市条例に基づき半額減免。自動精算機使用時や手帳提示なしの場合は対象外。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分300円(平日上限1日2,200円、土日祝上限1日3,000円、営業時間外1,200円)\n障害者割引: 半額\n総台数: 154台",
    "sourceUrl": "https://www.lilia.or.jp/access",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11203-004",
    "name": "川口市立医療センター駐車場",
    "address": "埼玉県川口市西新井宿180",
    "latitude": 35.843933,
    "longitude": 139.730652,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11203",
    "cityName": "川口市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳・障害福祉サービス受給者証/通所受給者証・指定難病医療受給者証/県単独難病医療受給者証・特定疾患医療受給者証・指定難病登録者証のいずれかを持つ本人、および付き添い介護者(障害者1人につき1人)が対象。駐車券と手帳等を1階総合受付3番計算窓口へ提示。入院時は対象外。令和7年4月1日以降適用の改定内容。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 4時間まで200円(以降1時間毎に100円)\n障害者割引: 無料\n総台数: 600台",
    "sourceUrl": "https://kawaguchi-mmc.org/hospital/floormap/",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11203-005",
    "name": "SKIPシティ地下駐車場",
    "address": "埼玉県川口市上青木3-12-18",
    "latitude": 35.827053,
    "longitude": 139.719635,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11203",
    "cityName": "川口市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳等(ミライロID可)をお持ちの方が対象。駐車券と手帳をA1棟(産業技術総合センター側)はB1F駐車場管理室、A2棟(彩の国ビジュアルプラザ側)は1F防災センターへ提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間200円(4時間超~24時間以内は1,000円、以降200円/時間加算)\n障害者割引: 24時間まで無料\n総台数: 170台",
    "sourceUrl": "https://www.skipcity.jp/visit/access/",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11206-001",
    "name": "古代蓮の里 駐車場",
    "address": "埼玉県行田市大字小針2375番地1",
    "latitude": 36.131184,
    "longitude": 139.499176,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11206",
    "cityName": "行田市",
    "accessibleSpaceTotal": 4,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がい者手帳を係員に提示した場合、有料期間中の駐車料金が免除となる。南側駐車場に身障者用4台分のスペースあり。"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 普通車1日500円、中型・大型自動車1,500円(花蓮開花時期・6月中旬~8月中旬のみ有料。それ以外の期間は無料)\n障害者割引: 無料\n総台数: 490台",
    "sourceUrl": "https://www.ikiiki-zaidan.or.jp/kodaihasu/facility/riyoannai.html",
    "updatedAt": "2026-08-08T00:00:00Z"
  },
  {
    "id": "11208-001",
    "name": "所沢市民文化センター ミューズ 駐車場",
    "address": "埼玉県所沢市並木一丁目9番地の1",
    "latitude": 35.800167,
    "longitude": 139.473694,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11208",
    "cityName": "所沢市",
    "accessibleSpaceTotal": 7,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳の提示により無料で利用可能(手帳の種類の明記なし、身体障害者用駐車スペースは地上2台・地下5台)。"
    },
    "accessibleSpaces": [
      {
        "count": 7
      }
    ],
    "notes": "通常料金: 1回500円(30分以内の利用はレシート提出により返金)\n障害者割引: 無料\n総台数: 230台",
    "sourceUrl": "https://www.muse-tokorozawa.or.jp/facility/parking.php",
    "updatedAt": "2026-08-09T00:00:00Z"
  },
  {
    "id": "11208-002",
    "name": "所沢航空記念公園 駐車場(南・東・北駐車場)",
    "address": "埼玉県所沢市並木1-13",
    "latitude": 35.798306,
    "longitude": 139.469131,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11208",
    "cityName": "所沢市",
    "accessibleSpaceTotal": 11,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がい者手帳等をお持ちの方は、管理事務所へ手帳と駐車券を持参し手続きを行うことで無料になる。記念館横駐車場は令和7年9月1日~令和9年3月末まで工事のため閉鎖中。"
    },
    "accessibleSpaces": [
      {
        "count": 11
      }
    ],
    "notes": "通常料金: 2時間まで無料、以降1時間ごとに100円(大型車は30分ごとに500円)\n障害者割引: 無料(手続きが必要)\n総台数: 580台",
    "sourceUrl": "https://www.parks.or.jp/tokorozawa-kokuu/faq/001/001599.html",
    "updatedAt": "2026-08-09T00:00:00Z"
  },
  {
    "id": "11214-001",
    "name": "粕壁二丁目自動車駐車場",
    "address": "埼玉県春日部市粕壁二丁目6088番地1",
    "latitude": 35.982803,
    "longitude": 139.75238,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11214",
    "cityName": "春日部市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳またはミライロIDを提示する障がい者本人、障がい者を扶養する人、または障がい者に付き添う介護者(手帳所持者1人につき介護者1人に限る)が対象。必ず使用前に春日部市役所本庁舎3階くらしの安全課窓口で「自動車駐車場使用料免除申請受付票」に記入して申請する必要があり、使用後の申請は不可。団体利用は対象外。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 入庫後30分以内無料、以後30分ごと100円\n障害者割引: 無料(全額免除)",
    "sourceUrl": "https://www.city.kasukabe.lg.jp/soshikikarasagasu/kotsubohanka/gyomuannai/1/24995.html",
    "updatedAt": "2026-08-09T00:00:00Z"
  },
  {
    "id": "11214-002",
    "name": "武里駅西口自動車駐車場",
    "address": "埼玉県春日部市大場398番地1",
    "latitude": 35.950001,
    "longitude": 139.769974,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11214",
    "cityName": "春日部市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳またはミライロIDを提示する障がい者本人、障がい者を扶養する人、または障がい者に付き添う介護者(手帳所持者1人につき介護者1人に限る)が対象。必ず使用前に春日部市役所本庁舎3階くらしの安全課窓口で「自動車駐車場使用料免除申請受付票」に記入して申請する必要があり、使用後の申請は不可。団体利用は対象外。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 入庫後30分以内無料、以後30分ごと100円\n障害者割引: 無料(全額免除)",
    "sourceUrl": "https://www.city.kasukabe.lg.jp/soshikikarasagasu/kotsubohanka/gyomuannai/1/24995.html",
    "updatedAt": "2026-08-09T00:00:00Z"
  },
  {
    "id": "11215-001",
    "name": "狭山市駅西口駐車場",
    "address": "埼玉県狭山市入間川一丁目23番5号",
    "latitude": 35.853531,
    "longitude": 139.411774,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11215",
    "cityName": "狭山市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "障害者手帳をお持ちの方は一時利用料金が半額。出庫時に自動精算機に駐車券を挿入し、受話器を取って係員を呼び出し、障害者手帳をカメラにかざすことで適用。障害者用回数券は11枚550円・120枚6,000円で窓口購入可能。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 20分100円(最大料金24時間1,500円、2025年10月1日改定)\n障害者割引: 半額\n総台数: 87台",
    "sourceUrl": "https://times-info.net/campaign/sayama/",
    "updatedAt": "2026-08-09T00:00:00Z"
  },
  {
    "id": "11217-001",
    "name": "鴻巣市鴻巣駅東口第1・第2駐車場",
    "address": "埼玉県鴻巣市本町1丁目1-1-2(エルミ鴻巣)",
    "latitude": 36.058846,
    "longitude": 139.510056,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11217",
    "cityName": "鴻巣市",
    "accessibleSpaceTotal": 17,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 4,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳(またはデジタル障害者手帳ミライロID)を所持する本人の乗車(運転または同乗)が必須。エルミこうのすアネックス内の対象公共施設(鴻巣市立中央図書館、市民活動センター、パスポートセンター、市民サービスコーナー、就労支援センター、障がい者就労支援センター、映画館内多目的ホール)の利用者が対象。対象施設窓口で手帳提示のうえサービス認証機での手続きが必要(1日1回のみ適用)。本人同伴であれば保護者による申請も可。制度開始日:令和8年4月1日(2026年4月1日)。"
    },
    "accessibleSpaces": [
      {
        "count": 17
      }
    ],
    "notes": "通常料金: 最初の1時間無料、以降30分ごとに100円加算(夜間20時~8時は上限600円)\n障害者割引: 入庫時刻から4時間分の駐車料金無料(通常の1時間無料に加え3時間分を減免)\n総台数: 795台",
    "sourceUrl": "https://www.city.kounosu.saitama.jp/page/39940.html",
    "updatedAt": "2026-08-09T00:00:00Z"
  },
  {
    "id": "11221-001",
    "name": "草加市立病院駐車場",
    "address": "埼玉県草加市草加2丁目21番1号",
    "latitude": 35.83548,
    "longitude": 139.796295,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11221",
    "cityName": "草加市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳をお持ちの患者さんは、会計窓口に手帳をご提示することで駐車料金が全額免除となる(公式サイトFAQより原文)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 患者:駐車券認証で4時間まで100円(以降1時間ごとに100円加算)。一般来院者:1時間100円(以降1時間ごとに100円加算)。\n障害者割引: 身体障害者手帳・療育手帳・精神障害者保健福祉手帳をお持ちの患者は駐車料金が全額免除",
    "sourceUrl": "https://www.soka-city-hospital.jp/qa.html",
    "updatedAt": "2026-08-09T00:00:00Z"
  },
  {
    "id": "11221-002",
    "name": "ハーモネスタワー有料駐車場(草加市立中央図書館利用者向け)",
    "address": "埼玉県草加市松原一丁目1番9号",
    "latitude": 35.844284,
    "longitude": 139.79805,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11221",
    "cityName": "草加市",
    "accessibleSpaceTotal": 3,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "下肢等に障がいがあり身体障害者手帳の交付を受けている方が草加市立中央図書館を利用する場合、図書館カウンターで障害者手帳を提示すると、ハーモネスタワー有料駐車場の無料駐車券(最大3時間まで)が交付される。障がい者用駐車区画は3台分設置。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 250円(最初の60分)、以降120円(30分ごと)\n障害者割引: 身体障害者手帳保持者(下肢等に障がいがある方)が図書館利用時、最大3時間まで無料駐車券を交付",
    "sourceUrl": "https://www.lib.city.soka.saitama.jp/facility/chuo_lib/",
    "updatedAt": "2026-08-09T00:00:00Z"
  },
  {
    "id": "11222-001",
    "name": "越谷市越谷駅東口駐車場",
    "address": "埼玉県越谷市弥生町16番3号",
    "latitude": 35.888966,
    "longitude": 139.786575,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11222",
    "cityName": "越谷市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳、または越谷市障害者等の施設使用料減額団体登録証をお持ちの方が対象。精算前に係員に提示すると一時駐車料金が半額になる。定期利用は対象外。ミライロID提示可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 入庫後30分まで無料。昼間(8時~20時)30分ごとに100円、当日最大1,000円。夜間(20時~8時)60分ごとに100円、当日最大500円(普通自動車等403台・二輪自動車等6台、計409台)\n障害者割引: 一時駐車料金が半額\n総台数: 409台",
    "sourceUrl": "https://www.city.koshigaya.saitama.jp/kurashi_shisei/kurashi/sumai/saikaihatsu/tyuusyajou-open.html",
    "updatedAt": "2026-08-09T00:00:00Z"
  },
  {
    "id": "11222-002",
    "name": "越谷市中央市民会館駐車場",
    "address": "埼玉県越谷市越ヶ谷四丁目1番1号",
    "latitude": 35.889099,
    "longitude": 139.791641,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11222",
    "cityName": "越谷市",
    "accessibleSpaceTotal": 2,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳をお持ちの方が対象。施設利用の申込み時に本人が障害者手帳を提示(ミライロID可)。介護者は介護している旨を申し出る。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 1台につき1時間以内は無料。1時間を超えた場合は30分(30分に満たないときは30分とする)ごとに100円(障がい者駐車場2台、思いやり駐車場1台、一般駐車場88台、合計91台)\n障害者割引: 使用料の半額を減額\n総台数: 91台",
    "sourceUrl": "https://www.city.koshigaya.saitama.jp/kurashi_shisei/fukushi/syogaisien/joseigenmen/genmen.html",
    "updatedAt": "2026-08-09T00:00:00Z"
  },
  {
    "id": "11222-003",
    "name": "越谷市立病院駐車場",
    "address": "埼玉県越谷市東越谷十丁目32番地",
    "latitude": 35.899837,
    "longitude": 139.803177,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11222",
    "cityName": "越谷市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳をお持ちの方が対象。病院への受診・見舞いでの利用に限り、発生した駐車料金が半額になる。手帳提示またはミライロID可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 外来受診者は無料(会計窓口で駐車券に無料チェック)。その他の利用者は1時間まで無料、以降30分超過ごとに100円加算(敷地内駐車場153台、敷地外駐車場67台、計220台)\n障害者割引: 使用料の半額を減額(病院への受診・見舞いでの利用に限る)\n総台数: 220台",
    "sourceUrl": "https://www.city.koshigaya.saitama.jp/kurashi_shisei/fukushi/syogaisien/joseigenmen/genmen.html",
    "updatedAt": "2026-08-09T00:00:00Z"
  },
  {
    "id": "11224-001",
    "name": "彩湖・道満グリーンパーク駐車場",
    "address": "埼玉県戸田市大字重瀬745",
    "latitude": 35.825771,
    "longitude": 139.629181,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11224",
    "cityName": "戸田市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳(身体障害者手帳・療育手帳・精神障害者保健福祉手帳等)を所持する者が乗車する自動車が利用する場合、駐車料金を全額免除。管理事務所で事前に申請するか、駐車場係員に申し出る必要あり。料金精算後の返金は不可。運営は公益財団法人戸田市水と緑の公社。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 土曜・日曜・祝日・振替休日料金:2時間以下200円(最初の15分無料)、2〜3時間300円、3〜4時間400円、4〜5時間500円、5〜6時間700円、6〜7時間900円、7〜8時間1,100円、8時間超(1日最大)1,200円。平日は半額、最初の1時間無料。準中型車以上(車両総重量3.5t以上または最大積載量2t以上)は2,100円/回。\n障害者割引: 無料(駐車料金全額免除)",
    "sourceUrl": "https://www.toda-kousha.com/park/saikodoman/",
    "updatedAt": "2026-08-09T00:00:00Z"
  },
  {
    "id": "11227-001",
    "name": "TMGあさか医療センター 駐車場",
    "address": "埼玉県朝霞市溝沼1340-1",
    "latitude": 35.810886,
    "longitude": 139.593857,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11227",
    "cityName": "朝霞市",
    "accessibleSpaceTotal": 9,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳(身体障害者手帳等)をお持ちの方は駐車料金無料。来院時に総合受付で手帳を提示。精算後30分以内に出庫"
    },
    "accessibleSpaces": [
      {
        "count": 9
      }
    ],
    "notes": "通常料金: 入庫から30分まで無料、30分~5時間まで200円、5時間以降30分ごとに100円、24時間最大2,000円(第1駐車場264台・身障者用8台/第2駐車場22台・身障者用1台)\n障害者割引: 無料\n総台数: 286台",
    "sourceUrl": "https://www.asakadai-hp.jp/guide/access/",
    "updatedAt": "2026-08-09T00:00:00Z"
  },
  {
    "id": "11229-001",
    "name": "和光市役所駐車場(和光市民文化センター サンアゼリア共有)",
    "address": "埼玉県和光市広沢1番5号",
    "latitude": 35.779507,
    "longitude": 139.604248,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11229",
    "cityName": "和光市",
    "accessibleSpaceTotal": 6,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳(知的障害者)・精神障害者保健福祉手帳のいずれかを所持する方が運転または同乗する自動車が対象。市役所及び周辺公共施設(児童センター等)利用時に限る。窓口で障害者手帳または障害者手帳アプリ(ミライロID等)を提示。"
    },
    "accessibleSpaces": [
      {
        "count": 6
      }
    ],
    "notes": "通常料金: 1時間まで無料、以降30分ごとに100円(当日24時までの最大料金1,500円)\n障害者割引: 無料\n総台数: 250台",
    "sourceUrl": "https://www.city.wako.lg.jp/shisei/city/1006196/1006205.html",
    "updatedAt": "2026-08-09T00:00:00Z"
  },
  {
    "id": "11229-002",
    "name": "埼玉県営和光樹林公園 北駐車場・南駐車場",
    "address": "埼玉県和光市広沢三番地内",
    "latitude": 35.777462,
    "longitude": 139.600662,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11229",
    "cityName": "和光市",
    "accessibleSpaceTotal": 4,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳(愛の手帳)・精神障害保健福祉手帳のいずれかの所持者は駐車料金免除。入口インターホン・カメラによる遠隔操作で手帳確認(聴覚障害者にも対応)。"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 200円/1時間(以降30分ごとに100円)、利用時間6:00〜19:00\n障害者割引: 無料\n総台数: 182台",
    "sourceUrl": "https://www.seibu-green.co.jp/wako-jurin/facility.html",
    "updatedAt": "2026-08-09T00:00:00Z"
  },
  {
    "id": "11229-003",
    "name": "埼玉県営和光樹林公園 中央駐車場(和光市総合体育館共用)",
    "address": "埼玉県和光市広沢三番地内",
    "latitude": 35.777462,
    "longitude": 139.600662,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11229",
    "cityName": "和光市",
    "accessibleSpaceTotal": 10,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳(愛の手帳)・精神障害保健福祉手帳のいずれかの所持者は駐車料金免除。入口インターホン・カメラによる遠隔操作で手帳確認(聴覚障害者にも対応)。和光市総合体育館利用者も共用。"
    },
    "accessibleSpaces": [
      {
        "count": 10
      }
    ],
    "notes": "通常料金: 200円/1時間(以降30分ごとに100円)、利用時間8:00〜23:30\n障害者割引: 無料\n総台数: 157台",
    "sourceUrl": "https://www.seibu-green.co.jp/wako-jurin/facility.html",
    "updatedAt": "2026-08-09T00:00:00Z"
  },
  {
    "id": "11229-004",
    "name": "和光市広沢複合施設「わぴあ」駐車場",
    "address": "埼玉県和光市広沢1番5-54号",
    "latitude": 35.779507,
    "longitude": 139.604248,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11229",
    "cityName": "和光市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳をお持ちの方は各施設利用時に手帳提示で駐車料金無料(施設フロント前のチェッカーに駐車券を通す)。ただしわぴあルーム・和カフェのみの利用は対象外。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 100円/30分(1日最大1,500円。深夜1時を過ぎると翌日料金)\n障害者割引: 無料\n総台数: 272台",
    "sourceUrl": "https://wapia.jp/access/",
    "updatedAt": "2026-08-09T00:00:00Z"
  },
  {
    "id": "11230-001",
    "name": "新座市役所駐車場",
    "address": "埼玉県新座市野火止1-1-1",
    "latitude": 35.79324,
    "longitude": 139.56575,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11230",
    "cityName": "新座市",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・戦傷病者手帳・療育手帳・精神障害者保健福祉手帳の交付を受けている方が運転または同乗している場合、来庁先窓口で駐車券を提示し割引処理を受けることで駐車料金が無料になる。令和元年8月1日よりコインパーキング方式。問合せ:管財契約課管財係048-477-3152"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 8:00~22:00は最初の30分無料、以降30分ごとに100円。22:00~翌8:00は同料金体系で最大500円\n障害者割引: 無料\n総台数: 127台",
    "sourceUrl": "https://www.city.niiza.lg.jp/soshiki/4/koin-parking.html",
    "updatedAt": "2026-08-10T00:00:00Z"
  },
  {
    "id": "11230-002",
    "name": "新座市民会館・中央図書館第1・第2駐車場",
    "address": "埼玉県新座市野火止1-1-2",
    "latitude": 35.79324,
    "longitude": 139.56575,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11230",
    "cityName": "新座市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・戦傷病者手帳・療育手帳・精神障害者保健福祉手帳の交付を受けている方が運転または同乗している場合、市民会館または図書館の窓口で駐車券を提示し割引処理を受けることで駐車料金が無料になる。第1駐車場32台・第2駐車場36台。問合せ:管財契約課管財係048-477-3152"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00~22:00は最初の30分無料、以降30分ごとに100円。22:00~翌8:00は同料金体系で最大500円\n障害者割引: 無料\n総台数: 68台",
    "sourceUrl": "https://www.city.niiza.lg.jp/soshiki/4/koin-parking.html",
    "updatedAt": "2026-08-10T00:00:00Z"
  },
  {
    "id": "11237-001",
    "name": "埼玉県営みさと公園駐車場(第1・第2駐車場)",
    "address": "埼玉県三郷市高州3丁目362",
    "latitude": 35.784378,
    "longitude": 139.873703,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11237",
    "cityName": "三郷市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、愛の手帳(療育手帳)、精神障害者保健福祉手帳のいずれかをお持ちの方が対象。駐車料金を全額免除。手続きは午前8時30分から午後5時30分の間はみさと公園管理事務所窓口で実施、午後5時30分から午前8時30分の間は第2駐車場のみインターホンとカメラによる遠隔操作で対応。聴覚障がいのある方も利用可能。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車200円/1時間(以降30分ごとに100円加算)。第1駐車場は大型車1,000円/2時間(以降30分500円)\n障害者割引: 無料\n総台数: 304台",
    "sourceUrl": "https://www.seibu-la.co.jp/misato-yoshikawa/facility/misato.html",
    "updatedAt": "2026-08-10T00:00:00Z"
  },
  {
    "id": "11238-001",
    "name": "蓮田市営第1駐車場",
    "address": "埼玉県蓮田市東6-1-8",
    "latitude": 35.97924,
    "longitude": 139.652557,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11238",
    "cityName": "蓮田市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "中央公民館を利用した方で、身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかをお持ちの方が対象。減免を受ける場合は申請が必要(中央公民館窓口、TEL 048-769-2002)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 入庫〜20分無料、20分超1時間まで200円、1時間超は30分ごとに100円、当日最大700円\n障害者割引: 2時間まで無料\n総台数: 73台",
    "sourceUrl": "https://www.city.hasuda.saitama.jp/kominkan/hasudadaiichityuusyajyou.html",
    "updatedAt": "2026-08-10T00:00:00Z"
  },
  {
    "id": "11238-002",
    "name": "蓮田病院 駐車場",
    "address": "埼玉県蓮田市根金1662-1",
    "latitude": 36.019505,
    "longitude": 139.638824,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11238",
    "cityName": "蓮田市",
    "accessibleSpaceTotal": 7,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳を1階正面受付に提示すると駐車料金が無料になる(駐車券を正面受付に提示し割引処理を受ける)。"
    },
    "accessibleSpaces": [
      {
        "count": 7
      }
    ],
    "notes": "通常料金: 外来受診の方:最初の30分無料、10時間まで200円(割引処理適用の場合)、以後60分ごとに100円\n障害者割引: 無料\n総台数: 250台",
    "sourceUrl": "https://www.hasuda-hp.or.jp/gairaiannai/",
    "updatedAt": "2026-08-10T00:00:00Z"
  },
  {
    "id": "11240-001",
    "name": "県営権現堂公園駐車場(幸手権現堂桜堤)",
    "address": "埼玉県幸手市内国府間887-3",
    "latitude": 36.091702,
    "longitude": 139.723419,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11240",
    "cityName": "幸手市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかの所持者。埼玉県都市公園条例に基づき、県営公園(権現堂公園を含む)の駐車場使用料は障害者手帳またはミライロIDの提示により免除される。桜まつり期間中の有料時のみ実質的に適用対象(通常期間は元々無料)。詳細窓口:権現堂公園管理事務所(0480-53-8787)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 桜まつり期間中のみ有料(普通車1,000円/回)。それ以外の期間は無料\n障害者割引: 無料(使用料免除)",
    "sourceUrl": "https://www.pref.saitama.lg.jp/a0604/genmen.html",
    "updatedAt": "2026-08-10T00:00:00Z"
  },
  {
    "id": "11242-001",
    "name": "巾着田駐車場(曼珠沙華の里「巾着田」)",
    "address": "埼玉県日高市大字高麗本郷125-2",
    "latitude": 35.884254,
    "longitude": 139.310928,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11242",
    "cityName": "日高市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がいのある方は駐車場利用が無料。管理事務所へ立ち寄り手続きが必要(手帳種別・提示方法の詳細記載なし、要問合せ:巾着田管理事務所 042-982-0268)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車500円/日、二輪車100円/日、バス3,000円/日\n障害者割引: 無料",
    "sourceUrl": "https://kinchakuda.com/faq/",
    "updatedAt": "2026-08-10T00:00:00Z"
  },
  {
    "id": "11326-001",
    "name": "埼玉医科大学病院 駐車場(A駐車場・B駐車場・C駐車場・第1ビル前駐車場)",
    "address": "埼玉県入間郡毛呂山町毛呂本郷38",
    "latitude": 35.936001,
    "longitude": 139.304062,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11326",
    "cityName": "毛呂山町",
    "accessibleSpaceTotal": 32,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳(身体障害者手帳等)の交付を受けている方は、出庫時に駐車券を手帳と一緒に割引処理窓口(第1ビル駐車場管理室 8:00〜17:00、本館1F警備センター 17:00〜8:00)に提出することで駐車料金が無料になる。入院患者の駐車利用は不可。A駐車場・第1ビル前駐車場は身障者専用スペース。"
    },
    "accessibleSpaces": [
      {
        "count": 32
      }
    ],
    "notes": "通常料金: B駐車場・C駐車場: 入庫〜1時間未満無料、1〜8時間300円、以降30分毎150円加算。第1ビル前駐車場: 平日・土曜1時間毎550円、日曜・祝日1日最大550円。\n障害者割引: 無料(駐車券の割引処理が必要)\n総台数: 484台",
    "sourceUrl": "https://www.saitama-med.ac.jp/hospital/access.html",
    "updatedAt": "2026-08-10T00:00:00Z"
  },
  {
    "id": "11341-001",
    "name": "国営武蔵丘陵森林公園 駐車場(南口・中央口・西口・北口)",
    "address": "埼玉県比企郡滑川町山田1920",
    "latitude": 36.092148,
    "longitude": 139.373993,
    "prefectureCode": "11",
    "prefectureName": "埼玉県",
    "cityCode": "11341",
    "cityName": "滑川町",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳を提示することで、本人及び介助者1名の入園料及び駐車料金が無料になる。南口・中央口・西口・北口の各駐車場で適用される。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車650円、大型1,650円、原付・自動二輪250円\n障害者割引: 無料",
    "sourceUrl": "https://mitte-x-img.istsw.jp/shinrin-koen-x/file/hana-ikimono/shinrinkoen_guidemap2102.pdf",
    "updatedAt": "2026-08-10T00:00:00Z"
  },
  {
    "id": "12101-001",
    "name": "千葉市栄町立体駐車場",
    "address": "千葉県千葉市中央区栄町3-8",
    "latitude": 35.614491,
    "longitude": 140.120758,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12101",
    "cityName": "千葉市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳(ミライロID可)の原本を出庫時に提示することで利用料が免除。時間制利用のみ対象(月契約制は不可)。運営はアマノマネジメントサービス株式会社。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 20分100円(税込)。最大料金:入庫から12時間まで1,000円/24時間まで1,500円\n障害者割引: 無料(全額免除)\n総台数: 200台",
    "sourceUrl": "https://chiba-sakae-parking.info/disability-discount/",
    "updatedAt": "2026-08-11T00:00:00Z"
  },
  {
    "id": "12101-002",
    "name": "青葉の森公園駐車場(北口)",
    "address": "千葉県千葉市中央区青葉町977-1",
    "latitude": 35.597885,
    "longitude": 140.138885,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12101",
    "cityName": "千葉市中央区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳(コピー不可、ミライロID可)を、発券された駐車券とともに公園センター・県立中央博物館等の窓口へ提示。本人または介護者の車に同乗して利用する場合が対象。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 普通車:4時間まで300円、4時間超~8時間まで600円、以降1時間ごと100円増(大型車:1日2,400円)\n障害者割引: 無料\n総台数: 120台",
    "sourceUrl": "https://www.cue-net.or.jp/kouen/aoba/annai/parking.html",
    "updatedAt": "2026-08-11T00:00:00Z"
  },
  {
    "id": "12101-003",
    "name": "青葉の森公園駐車場(南口)",
    "address": "千葉県千葉市中央区青葉町977-1",
    "latitude": 35.597885,
    "longitude": 140.138885,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12101",
    "cityName": "千葉市中央区",
    "accessibleSpaceTotal": 5,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳(コピー不可、ミライロID可)を、発券された駐車券とともにスポーツプラザ・つくしんぼの家等の窓口へ提示。本人または介護者の車に同乗して利用する場合が対象。"
    },
    "accessibleSpaces": [
      {
        "count": 5
      }
    ],
    "notes": "通常料金: 普通車:4時間まで300円、4時間超~8時間まで600円、以降1時間ごと100円増(大型車:1日2,400円)\n障害者割引: 無料\n総台数: 309台",
    "sourceUrl": "https://www.cue-net.or.jp/kouen/aoba/annai/parking.html",
    "updatedAt": "2026-08-11T00:00:00Z"
  },
  {
    "id": "12101-004",
    "name": "青葉の森公園駐車場(西口)",
    "address": "千葉県千葉市中央区青葉町977-1",
    "latitude": 35.597885,
    "longitude": 140.138885,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12101",
    "cityName": "千葉市中央区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳(コピー不可、ミライロID可)を、発券された駐車券とともに公園センター・緑の相談所等の窓口へ提示。本人または介護者の車に同乗して利用する場合が対象。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 普通車:4時間まで300円、4時間超~8時間まで600円、以降1時間ごと100円増(大型車:1日2,400円)\n障害者割引: 無料\n総台数: 144台",
    "sourceUrl": "https://www.cue-net.or.jp/kouen/aoba/annai/parking.html",
    "updatedAt": "2026-08-11T00:00:00Z"
  },
  {
    "id": "12101-005",
    "name": "千葉市役所本庁舎駐車場(市民駐車場)",
    "address": "千葉県千葉市中央区千葉港1-1",
    "latitude": 35.608322,
    "longitude": 140.106003,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12101",
    "cityName": "千葉市中央区",
    "accessibleSpaceTotal": 10,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示(ミライロID可)。退場時に指定の手順に従い提示することで無料。運営はタイムズ24(株)。"
    },
    "accessibleSpaces": [
      {
        "count": 10
      }
    ],
    "notes": "通常料金: 平日8時~18時:基本300円/30分(入庫30分無料、最大1,500円)。平日18時~8時・土日祝夜間:100円/60分(最大500円)。土日祝8時~18時:200円/60分(最大600円)\n障害者割引: 無料\n総台数: 294台",
    "sourceUrl": "https://www.city.chiba.jp/faq/zaiseikyoku/shisan/shinchosha/59.html",
    "updatedAt": "2026-08-11T00:00:00Z"
  },
  {
    "id": "12101-006",
    "name": "千葉市中央図書館・生涯学習センター駐車場",
    "address": "千葉県千葉市中央区弁天3丁目7番7号",
    "latitude": 35.617867,
    "longitude": 140.11412,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12101",
    "cityName": "千葉市中央区",
    "accessibleSpaceTotal": 6,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・精神障害者保健福祉手帳・療育手帳(ミライロID可)の交付を受けている方は、精算機で精算処理をする前に生涯学習センター1階「総合案内」へ申し出て手帳を提示することで駐車料金が免除。第1駐車場に障害者用スペース6台分あり。"
    },
    "accessibleSpaces": [
      {
        "count": 6
      }
    ],
    "notes": "通常料金: 入庫から2時間まで無料。以降20分ごとに100円\n障害者割引: 無料(全額免除)\n総台数: 138台",
    "sourceUrl": "https://www.library.city.chiba.jp/faq/facilities.html",
    "updatedAt": "2026-08-11T00:00:00Z"
  },
  {
    "id": "12102-001",
    "name": "花島公園駐車場",
    "address": "千葉県千葉市花見川区花島町308番地",
    "latitude": 35.682953,
    "longitude": 140.097153,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12102",
    "cityName": "千葉市花見川区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "本人または介護者が運転する場合、身体障害者手帳・精神障害者保健福祉手帳・療育手帳のいずれか(原本、コピー不可)を提示。平日8:30~16:30は出口精算機横のインターホンで申請しカメラに手帳をかざす、平日16:30以降・土日祝は出口脇の詰所で手続き。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 4時間まで200円、4時間超1日400円(普通車)\n障害者割引: 無料\n総台数: 210台",
    "sourceUrl": "https://hanashima-park.com/pages/34/",
    "updatedAt": "2026-08-11T00:00:00Z"
  },
  {
    "id": "12104-001",
    "name": "千葉市動物公園 駐車場",
    "address": "千葉県千葉市若葉区源町280番地",
    "latitude": 35.644882,
    "longitude": 140.127136,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12104",
    "cityName": "千葉市若葉区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・精神障害者保健福祉手帳・療育手帳(またはミライロID)の提示により、乗車している普通乗用車の駐車場使用料が免除。入園料も同様に免除。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車800円/回\n障害者割引: 無料",
    "sourceUrl": "https://www.city.chiba.jp/zoo/guide/index.html",
    "updatedAt": "2026-08-11T00:00:00Z"
  },
  {
    "id": "12104-002",
    "name": "泉自然公園 駐車場",
    "address": "千葉県千葉市若葉区野呂町108",
    "latitude": 35.578934,
    "longitude": 140.226883,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12104",
    "cityName": "千葉市若葉区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳(身体障害者手帳・療育手帳・精神障害者保健福祉手帳)またはミライロIDの提示により駐車料金が免除。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車400円/回\n障害者割引: 無料",
    "sourceUrl": "https://www.city.chiba.jp/toshi/koenryokuchi/kanri/wakaba/izumitop.html",
    "updatedAt": "2026-08-11T00:00:00Z"
  },
  {
    "id": "12105-001",
    "name": "千葉市 昭和の森 駐車場(第1・第2・第3駐車場)",
    "address": "千葉県千葉市緑区土気町34",
    "latitude": 35.524296,
    "longitude": 140.283813,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12105",
    "cityName": "千葉市緑区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳(ミライロID可)を提示。千葉市都市公園条例第21条に基づく減免。出口の精算機インターホンでコールセンターに手帳をカメラで提示し、確認後ゲートバーが上がり無料で出庫(駐車券は機械に入れない)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車 1時間100円(1日最大400円)/バス(第1駐車場のみ利用可)終日1,600円\n障害者割引: 無料\n総台数: 826台",
    "sourceUrl": "https://www.showano-mori.jp/guide_page/118",
    "updatedAt": "2026-08-11T00:00:00Z"
  },
  {
    "id": "12106-001",
    "name": "幕張メッセ駐車場",
    "address": "千葉県千葉市美浜区豊砂3-1",
    "latitude": 35.652084,
    "longitude": 140.029022,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12106",
    "cityName": "千葉市美浜区",
    "accessibleSpaceTotal": 51,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳またはミライロIDを提示すると駐車料金が無料。手帳所持者本人が乗車していることが条件。出庫時に係員へ手帳またはミライロIDを提示(予約不可)。"
    },
    "accessibleSpaces": [
      {
        "count": 51
      }
    ],
    "notes": "通常料金: 普通・準中型車1,000円/1日1回(大型・中型車4,100円、自動二輪車200円)\n障害者割引: 無料\n総台数: 5000台",
    "sourceUrl": "https://www.m-messe.co.jp/access/access_car",
    "updatedAt": "2026-08-11T00:00:00Z"
  },
  {
    "id": "12106-002",
    "name": "幕張新都心地下第一駐車場(県営)",
    "address": "千葉県千葉市美浜区中瀬2-2",
    "latitude": 35.649796,
    "longitude": 140.036377,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12106",
    "cityName": "千葉市美浜区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・戦傷病者手帳・療育手帳・精神障害者保健福祉手帳のいずれかを保有する方が使用する自動車が対象(1名につき1台まで)。時間貸し利用のみが対象で定期券利用は対象外。精算前に管理室または精算機のコールセンターへ手帳を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 20分100円(1日最大料金1,000円)\n障害者割引: 無料\n総台数: 280台",
    "sourceUrl": "https://www.pref.chiba.lg.jp/kigyou/kensetsu/shintoshin/parking.html",
    "updatedAt": "2026-08-11T00:00:00Z"
  },
  {
    "id": "12106-003",
    "name": "幕張新都心地下第二駐車場(県営)",
    "address": "千葉県千葉市美浜区中瀬1-113",
    "latitude": 35.652084,
    "longitude": 140.040665,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12106",
    "cityName": "千葉市美浜区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・戦傷病者手帳・療育手帳・精神障害者保健福祉手帳のいずれかを保有する方が使用する自動車が対象(1名につき1台まで)。時間貸し利用のみが対象で定期券利用は対象外。精算前に管理室または精算機のコールセンターへ手帳を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 20分100円(1日最大料金1,000円)\n障害者割引: 無料\n総台数: 459台",
    "sourceUrl": "https://www.pref.chiba.lg.jp/kigyou/kensetsu/shintoshin/parking.html",
    "updatedAt": "2026-08-11T00:00:00Z"
  },
  {
    "id": "12106-004",
    "name": "稲毛海浜公園第1駐車場",
    "address": "千葉県千葉市美浜区高浜7-2-2",
    "latitude": 35.62006,
    "longitude": 140.059479,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12106",
    "cityName": "千葉市美浜区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により利用料金免除。small planet Café、稲毛記念館、BOTANICA MUSEUMのいずれかで減免券を受け取り、出庫時に提示(各施設の営業時間内のみ対応)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車:3時間まで400円、以降30分ごとに100円(24時間最大1,000円)※夏季期間は1回1,000円\n障害者割引: 無料",
    "sourceUrl": "https://sunsetbeachpark.jp/access/",
    "updatedAt": "2026-08-11T00:00:00Z"
  },
  {
    "id": "12106-005",
    "name": "稲毛海浜公園第2駐車場",
    "address": "千葉県千葉市美浜区高浜7-2-2",
    "latitude": 35.62006,
    "longitude": 140.059479,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12106",
    "cityName": "千葉市美浜区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により利用料金免除。small planet Café または稲毛記念館で減免券を受け取り、出庫時に提示(各施設の営業時間内のみ対応)。第2駐車場は身障者用駐車スペースが第1駐車場より多く用意されている。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車:3時間まで400円、以降30分ごとに100円(24時間最大1,000円)※夏季期間は1回1,000円\n障害者割引: 無料",
    "sourceUrl": "https://sunsetbeachpark.jp/access/",
    "updatedAt": "2026-08-11T00:00:00Z"
  },
  {
    "id": "12106-006",
    "name": "千葉県立幕張海浜公園駐車場(A・B・Cブロック)",
    "address": "千葉県千葉市美浜区ひび野2-116",
    "latitude": 35.643024,
    "longitude": 140.039276,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12106",
    "cityName": "千葉市美浜区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がいのある方は駐車料金が無料。無料出庫の方法は各駐車場(A・Bブロック平面、Cブロック立体)の発券機・精算機の掲示物を参照。Cブロックには障がい者用区画1台を含む(A・Bブロックの障がい者用区画数は不明)。大型車・バイクは入庫不可。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 8時間以内600円、以後1時間ごとに100円加算\n障害者割引: 無料\n総台数: 201台",
    "sourceUrl": "https://www.seibu-la.co.jp/makuhari/access.html",
    "updatedAt": "2026-08-11T00:00:00Z"
  },
  {
    "id": "12203-001",
    "name": "市川市文化会館駐車場",
    "address": "千葉県市川市大和田1-1-5",
    "latitude": 35.717266,
    "longitude": 139.922256,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12203",
    "cityName": "市川市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳(身体障害者手帳・療育手帳・精神障害者保健福祉手帳等)所持者は駐車場を無料で利用可能。利用には事前に市川市文化会館(TEL 047-379-5111)への電話予約が必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分100円(最大料金なし)\n障害者割引: 無料",
    "sourceUrl": "https://www.tekona.net/bunkakaikan/facilities/service/",
    "updatedAt": "2026-08-11T00:00:00Z"
  },
  {
    "id": "12203-002",
    "name": "行徳文化ホールI&I駐車場",
    "address": "千葉県市川市末広1-1-48",
    "latitude": 35.686951,
    "longitude": 139.917526,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12203",
    "cityName": "市川市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳所持者は駐車場を無料で利用可能。利用には事前に行徳文化ホールI&I(TEL 047-701-3011)への電話予約が必要。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.tekona.net/gyotoku/facilities/service/",
    "updatedAt": "2026-08-11T00:00:00Z"
  },
  {
    "id": "12204-001",
    "name": "船橋市本町駐車場",
    "address": "千葉県船橋市本町2-1-1(船橋スクエア21地下)",
    "latitude": 35.698036,
    "longitude": 139.985718,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12204",
    "cityName": "船橋市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 1,
      "conditions": "身体障害者手帳・療育手帳(知的障害者)・精神障害者保健福祉手帳・戦傷病者手帳・被爆者健康手帳のいずれかの交付を受けている方が対象。手帳またはミライロID(障害者手帳アプリ)の画面を管理人に提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分ごとに170円(最大料金 当日1回1,700円)\n障害者割引: 駐車開始時刻から1時間無料\n総台数: 104台",
    "sourceUrl": "https://www.city.funabashi.lg.jp/shisetsu/parking1/0001/0003/0002/p042627.html",
    "updatedAt": "2026-08-11T00:00:00Z"
  },
  {
    "id": "12204-002",
    "name": "船橋駅南口地下駐車場",
    "address": "千葉県船橋市湊町2-10-25",
    "latitude": 35.694916,
    "longitude": 139.982101,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12204",
    "cityName": "船橋市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 1,
      "conditions": "身体障害者手帳・療育手帳(知的障害)・精神障害者保健福祉手帳・戦傷病者手帳・被爆者健康手帳のいずれかの交付を受けている方が対象。手帳・証明書またはミライロIDの画面を管理人に提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分170円\n障害者割引: 駐車開始時刻から1時間無料\n総台数: 55台",
    "sourceUrl": "https://www.city.funabashi.lg.jp/shisetsu/parking1/0001/0002/0002/p013185.html",
    "updatedAt": "2026-08-11T00:00:00Z"
  },
  {
    "id": "12204-003",
    "name": "船橋アリーナ(船橋市総合体育館)駐車場",
    "address": "千葉県船橋市習志野台7-5-1",
    "latitude": 35.729637,
    "longitude": 140.052017,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12204",
    "cityName": "船橋市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "船橋市内在住・在勤・在学で、身体障がい者手帳・療育手帳・精神障がい者保健福祉手帳のいずれかを所持する方が対象。手帳またはミライロIDを提示し、総合案内で「駐車場利用許可書」の交付を受ける。介護者の免除については施設へ事前連絡が必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1日1回300円(30分以内出庫は無料、大型車1,000円)\n障害者割引: 無料\n総台数: 458台",
    "sourceUrl": "https://www.funabashi-arena.com/map/",
    "updatedAt": "2026-08-11T00:00:00Z"
  },
  {
    "id": "12204-004",
    "name": "ふなばしアンデルセン公園 駐車場",
    "address": "千葉県船橋市金堀町525番",
    "latitude": 35.75853,
    "longitude": 140.058273,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12204",
    "cityName": "船橋市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかを所持する方が対象。本人および介護者1名の入園料と駐車料金が無料。手帳またはミライロIDの提示が必要(各種受給者証の提示では無料の対象外)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車500円(大型車2,000円、要予約)\n障害者割引: 無料",
    "sourceUrl": "https://www.park-funabashi.or.jp/and/guide.html",
    "updatedAt": "2026-08-11T00:00:00Z"
  },
  {
    "id": "12207-001",
    "name": "松戸市立総合医療センター駐車場(第1・第2・第3駐車場)",
    "address": "千葉県松戸市千駄堀993番地の1",
    "latitude": 35.801975,
    "longitude": 139.932526,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12207",
    "cityName": "松戸市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳等を提示された方は駐車料金無料(第1・第2・第3駐車場共通)。8時~13時はタイムズ割引スタッフ、13時~20時は総合案内、20時~翌8時は時間外受付にて手続き。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 外来患者:入庫後12時間まで100円、以降60分毎200円(最初の30分無料)/一般(お見舞い等):入庫後60分毎200円(最初の30分無料、第2・第3駐車場は当日最大500円)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.matsudo.chiba.jp/hospital/access/parking.html",
    "updatedAt": "2026-08-11T00:00:00Z"
  },
  {
    "id": "12211-001",
    "name": "成田国際空港駐車場(P1・P2・P5)",
    "address": "千葉県成田市古込字古込1-1",
    "latitude": 35.772411,
    "longitude": 140.389862,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12211",
    "cityName": "成田市",
    "accessibleSpaceTotal": 0,
    "discountType": "unknown",
    "discount": {
      "type": "unknown",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳、戦傷病者手帳、被爆者健康手帳、特定疾患医療受給者証、特定医療費(指定難病)受給者証、小児慢性特定疾病医療受給者証等の提示が必要(営業用車両を除く)。対象はP1・P5(第1ターミナル前)、P2(第2ターミナル前)の一般駐車場。事前精算機のインターホンを押し、係員の指示に従いカメラに手帳を提示・本人確認後、精算機に駐車券を挿入すると半額表示で精算開始。P3利用時は事前精算機がないため第1駐車場管理事務所(0120-03-2253)へ事前連絡が必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 24時間ごとに P1・P2は2,100円〜10,500円(120時間まで、以降24時間毎に1,000円加算)、P5は1,570円〜7,850円(120時間まで)\n障害者割引: 駐車料金50%割引",
    "sourceUrl": "https://www.narita-airport.jp/ja/service/ud/private-parking/",
    "updatedAt": "2026-08-12T00:00:00Z"
  },
  {
    "id": "12212-001",
    "name": "東邦大学医療センター佐倉病院 B駐車場(身障者専用)",
    "address": "千葉県佐倉市下志津564-1",
    "latitude": 35.717945,
    "longitude": 140.169464,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12212",
    "cityName": "佐倉市",
    "accessibleSpaceTotal": 14,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者専用駐車場(B駐車場、車椅子使用者・身体障害者向け)。障害者手帳を防災センターに提示することで駐車料金が無料になる。24時間入出庫可。"
    },
    "accessibleSpaces": [
      {
        "count": 14
      }
    ],
    "notes": "通常料金: 300円(12時間まで)、1,000円(24時間まで)、以降24時間ごとに1,000円\n障害者割引: 無料\n総台数: 14台",
    "sourceUrl": "https://www.sakura.med.toho-u.ac.jp/kotu/index.html",
    "updatedAt": "2026-08-12T00:00:00Z"
  },
  {
    "id": "12213-001",
    "name": "東金文化会館 身障者用駐車場",
    "address": "千葉県東金市八坂台1丁目2107番地3",
    "latitude": 35.569077,
    "longitude": 140.363785,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12213",
    "cityName": "東金市",
    "accessibleSpaceTotal": 7,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "バーミヤン側入口にある身障者用駐車場(7台)を利用する際、適正利用のため身体障害者手帳またはミライロID等の提示が必要。事前予約可。一般駐車場(450台、建物裏手)も無料だが満車の場合は東金駅周辺の時間貸駐車場の利用が案内される。"
    },
    "accessibleSpaces": [
      {
        "count": 7
      }
    ],
    "notes": "通常料金: 無料(一般駐車場450台・身障者用駐車場7台とも無料)\n障害者割引: 無料\n総台数: 457台",
    "sourceUrl": "https://tobunspo.or.jp/access/",
    "updatedAt": "2026-08-12T00:00:00Z"
  },
  {
    "id": "12215-001",
    "name": "地方独立行政法人 総合病院国保旭中央病院 駐車場(第1駐車場・第2駐車場)",
    "address": "千葉県旭市イの1326番地",
    "latitude": 35.723259,
    "longitude": 140.66864,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12215",
    "cityName": "旭市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳の提示により駐車料金が無料。防災センターにて身体障害者手帳および駐車券を提示のうえ、無料駐車券を受け取る。ただし入院患者は適用外で通常料金となる。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初の4時間まで100円、以降1時間毎100円\n障害者割引: 無料",
    "sourceUrl": "https://www.hospital.asahi.chiba.jp/access/car/chiba.html",
    "updatedAt": "2026-08-12T00:00:00Z"
  },
  {
    "id": "12217-001",
    "name": "千葉県立柏の葉公園 駐車場(第1・第2駐車場)",
    "address": "千葉県柏市柏の葉4-1",
    "latitude": 35.896393,
    "longitude": 139.937592,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12217",
    "cityName": "柏市",
    "accessibleSpaceTotal": 13,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の交付を受けている方(または同乗の付添者)が、各手帳(コピー不可)と駐車券を持参し、公園センター内サービスカウンター、コミュニティ体育館、日本庭園内松柏亭、庭球場クラブハウスのいずれかで手続きすることで駐車料金が免除される"
    },
    "accessibleSpaces": [
      {
        "count": 13
      }
    ],
    "notes": "通常料金: 普通車:4時間以内300円、4時間超~8時間以内600円、8時間超は1時間ごとに100円加算/中型・大型車:1日1回2,400円\n障害者割引: 免除(無料)\n総台数: 849台",
    "sourceUrl": "https://www.cue-net.or.jp/kouen/kasiwa/access/index.html",
    "updatedAt": "2026-08-12T00:00:00Z"
  },
  {
    "id": "12218-001",
    "name": "かつうら海中公園立体駐車場",
    "address": "千葉県勝浦市吉尾123",
    "latitude": 35.138664,
    "longitude": 140.283295,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12218",
    "cityName": "勝浦市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身障者手帳を駐車場係員に提示(利用時間8:30~21:00)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車 2時間まで200円(以後1時間ごとに100円)/大型車 2時間まで600円(以後1時間ごとに300円)\n障害者割引: 全額免除(無料)\n総台数: 167台",
    "sourceUrl": "https://www.city.katsuura.lg.jp/page/1691.html",
    "updatedAt": "2026-08-12T00:00:00Z"
  },
  {
    "id": "12219-001",
    "name": "サンプラザ市原駐車場",
    "address": "千葉県市原市五井中央西1丁目1番地25",
    "latitude": 35.512093,
    "longitude": 140.088486,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12219",
    "cityName": "市原市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳等、官公庁発行の証明書・手帳をご提示ください。問い合わせ:0436-24-1151"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 立体駐車場30分100円(4時間以上連続駐車で一律800円)、平面駐車場30分100円(一律料金設定なし)\n障害者割引: 無料(駐車料金免除)",
    "sourceUrl": "http://sunplaza-ichihara.com/access/",
    "updatedAt": "2026-08-12T00:00:00Z"
  },
  {
    "id": "12221-001",
    "name": "県立八千代広域公園駐車場",
    "address": "千葉県八千代市大和田新田312-5",
    "latitude": 35.722275,
    "longitude": 140.09935,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12221",
    "cityName": "八千代市",
    "accessibleSpaceTotal": 6,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者・知的障害者・精神障害者とその介護者が対象。駐車券と障害者手帳を「八千代市総合グラウンド」「オーエンス八千代市民ギャラリー事務室」「TRC八千代中央図書館インフォメーション」のいずれかに提示することで無料。利用時間は毎日8:00~22:00(12/29~1/3を除く)。"
    },
    "accessibleSpaces": [
      {
        "count": 6
      }
    ],
    "notes": "通常料金: 入庫後1時間以内無料、1時間超~4時間以内300円、4時間超~8時間以内600円、8時間超過分は1時間ごとに100円加算\n障害者割引: 無料\n総台数: 381台",
    "sourceUrl": "https://www.city.yachiyo.lg.jp/soshiki/46/4060.html",
    "updatedAt": "2026-08-12T00:00:00Z"
  },
  {
    "id": "12222-001",
    "name": "アビスタ駐車場(我孫子市生涯学習センター)",
    "address": "千葉県我孫子市若松26番地の4",
    "latitude": 35.866405,
    "longitude": 140.014816,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12222",
    "cityName": "我孫子市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳またはこれに準ずる書類、精神障害者保健福祉手帳の所持者本人が利用する場合、駐車料金が全額免除。アビスタ1階総合受付で手帳またはミライロIDアプリを提示(開館時間外は駐車場精算機の直通電話で連絡)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初の1時間無料、以降1時間ごとに100円(入庫から24時間最大500円、夜間20時~8時最大300円)\n障害者割引: 無料(全額免除)\n総台数: 120台",
    "sourceUrl": "https://www.city.abiko.chiba.jp/event/shisetsu/abista.html",
    "updatedAt": "2026-08-12T00:00:00Z"
  },
  {
    "id": "12225-001",
    "name": "君津バスターミナル駐車場",
    "address": "千葉県君津市三直733番地",
    "latitude": 35.324715,
    "longitude": 139.939926,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12225",
    "cityName": "君津市",
    "accessibleSpaceTotal": 7,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の交付を受けている者が運転または同乗する自動車が対象。通常駐車料金・定期駐車料金を2分の1(10円未満切捨て)に減額。通常駐車は管理人駐在時間内に管理棟で手帳と駐車券を提示、定期駐車は申込時に手帳を提示。"
    },
    "accessibleSpaces": [
      {
        "count": 7
      }
    ],
    "notes": "通常料金: 1時間まで無料、以降1日1台1回520円(定期利用料金あり)\n障害者割引: 半額\n総台数: 375台",
    "sourceUrl": "https://www.city.kimitsu.lg.jp/soshiki/28/702.html",
    "updatedAt": "2026-08-12T00:00:00Z"
  },
  {
    "id": "12227-001",
    "name": "浦安市運動公園駐車場(第1・第2駐車場)",
    "address": "千葉県浦安市舞浜2番地27",
    "latitude": 35.62756,
    "longitude": 139.88739,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12227",
    "cityName": "浦安市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の交付を受けている方が運転または同乗する場合が対象。市民スポーツ課・みどり公園課・環境衛生課・障がい福祉課に「浦安市運動公園外3施設駐車場利用料金に関する届出書」を提出すると届出月の翌々月から自動割引適用。もしくは利用当日に手帳を提示して精算時に割引適用も可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 入庫後30分無料、以降60分ごと100円(3時間30分超は平日7時〜19時20分100円/土日祝20分100円、19時〜7時60分100円)、最大600円(施設利用者)\n障害者割引: 半額(最大300円)\n総台数: 636台",
    "sourceUrl": "https://www.urayasu-zaidan.or.jp/undo/1002146/1003708.html",
    "updatedAt": "2026-08-12T00:00:00Z"
  },
  {
    "id": "12227-002",
    "name": "浦安ドッグラン駐車場(浦安市運動公園隣)",
    "address": "千葉県浦安市舞浜2-27",
    "latitude": 35.640255,
    "longitude": 139.885254,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12227",
    "cityName": "浦安市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の交付を受けている方が運転または同乗する場合が対象。運動公園外3施設と同一の届出書提出、または当日手帳提示で割引適用。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 入庫後30分無料、以降60分ごと100円\n障害者割引: 半額\n総台数: 20台",
    "sourceUrl": "https://www.city.urayasu.lg.jp/shisetsu/sonota/1032392.html",
    "updatedAt": "2026-08-12T00:00:00Z"
  },
  {
    "id": "12227-003",
    "name": "浦安市総合公園駐車場",
    "address": "千葉県浦安市明海七丁目2番",
    "latitude": 35.635902,
    "longitude": 139.928879,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12227",
    "cityName": "浦安市",
    "accessibleSpaceTotal": 4,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の交付を受けている方が運転または同乗する場合が対象。届出書の事前提出(翌々月から自動適用)または当日手帳提示のいずれか。"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 入庫後30分無料、以降全日60分ごと100円、最大料金 昼間(8時〜22時)600円・夜間(22時〜8時)600円\n障害者割引: 半額(通常60分ごと50円、最大300円)\n総台数: 251台",
    "sourceUrl": "https://www.city.urayasu.lg.jp/shisetsu/kouen/1005625.html",
    "updatedAt": "2026-08-12T00:00:00Z"
  },
  {
    "id": "12227-004",
    "name": "高洲海浜公園駐車場",
    "address": "千葉県浦安市高洲九丁目2番",
    "latitude": 35.631897,
    "longitude": 139.920792,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12227",
    "cityName": "浦安市",
    "accessibleSpaceTotal": 2,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の交付を受けている方が運転または同乗する場合が対象。届出書の事前提出(翌々月から自動適用)または当日手帳提示のいずれか。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 入庫後30分無料、以降全日60分ごと100円、最大料金 昼間(8時〜22時)600円・夜間(22時〜8時)600円\n障害者割引: 半額(通常60分ごと50円、最大300円)\n総台数: 152台",
    "sourceUrl": "https://www.city.urayasu.lg.jp/shisetsu/kouen/1005634.html",
    "updatedAt": "2026-08-12T00:00:00Z"
  },
  {
    "id": "12229-001",
    "name": "長浦駅北口駐車場",
    "address": "千葉県袖ケ浦市蔵波25-1",
    "latitude": 35.451355,
    "longitude": 139.996109,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12229",
    "cityName": "袖ケ浦市",
    "accessibleSpaceTotal": 2,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "conditions": "療育手帳・身体障がい者手帳・精神障がい者保健福祉手帳の交付を受けている方が対象。申請により定期利用料金を半額に減免。減免申請書と手帳の写しの提出が必要(一時利用には適用なし)。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 一時利用(1暦日):市民500円/市民以外550円(入庫後20分無料)、定期利用(1ヶ月):市民4,500円/市民以外5,000円\n障害者割引: 定期利用料50%減免\n総台数: 100台",
    "sourceUrl": "https://www.city.sodegaura.lg.jp/soshiki/toshi/sieityuusyajounoriyouhouhou.html",
    "updatedAt": "2026-08-12T00:00:00Z"
  },
  {
    "id": "12229-002",
    "name": "袖ケ浦駅前第1駐車場",
    "address": "千葉県袖ケ浦市奈良輪1301-10",
    "latitude": 35.431938,
    "longitude": 139.95697,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12229",
    "cityName": "袖ケ浦市",
    "accessibleSpaceTotal": 2,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "conditions": "療育手帳・身体障がい者手帳・精神障がい者保健福祉手帳の交付を受けている方が対象。申請により定期利用料金を半額に減免。減免申請書と手帳の写しの提出が必要(一時利用には適用なし)。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 一時利用(1暦日):市民500円/市民以外550円(入庫後20分無料)、定期利用(1ヶ月):市民5,000円/市民以外5,500円\n障害者割引: 定期利用料50%減免\n総台数: 65台",
    "sourceUrl": "https://www.city.sodegaura.lg.jp/soshiki/toshi/sieityuusyajounoriyouhouhou.html",
    "updatedAt": "2026-08-12T00:00:00Z"
  },
  {
    "id": "12229-003",
    "name": "長浦駅臨海駐車場",
    "address": "千葉県袖ケ浦市長浦1-31",
    "latitude": 35.45697,
    "longitude": 139.990341,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12229",
    "cityName": "袖ケ浦市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "conditions": "療育手帳・身体障がい者手帳・精神障がい者保健福祉手帳の交付を受けている方が対象。申請により定期利用料金を半額に減免。減免申請書と手帳の写しの提出が必要(一時利用には適用なし)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 一時利用(1暦日):市民450円/市民以外500円(入庫後20分無料)、定期利用(1ヶ月):市民4,500円/市民以外5,000円\n障害者割引: 定期利用料50%減免\n総台数: 69台",
    "sourceUrl": "https://www.city.sodegaura.lg.jp/soshiki/toshi/sieityuusyajounoriyouhouhou.html",
    "updatedAt": "2026-08-12T00:00:00Z"
  },
  {
    "id": "12229-004",
    "name": "袖ケ浦駅前第2駐車場",
    "address": "千葉県袖ケ浦市奈良輪2-3-5",
    "latitude": 35.431046,
    "longitude": 139.959702,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12229",
    "cityName": "袖ケ浦市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "conditions": "療育手帳・身体障がい者手帳・精神障がい者保健福祉手帳の交付を受けている方が対象。申請により定期利用料金を半額に減免。減免申請書と手帳の写しの提出が必要(一時利用には適用なし)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 一時利用(1暦日):市民500円/市民以外550円(入庫後20分無料)、定期利用(1ヶ月):市民4,500円/市民以外5,000円\n障害者割引: 定期利用料50%減免\n総台数: 30台",
    "sourceUrl": "https://www.city.sodegaura.lg.jp/soshiki/toshi/sieityuusyajounoriyouhouhou.html",
    "updatedAt": "2026-08-12T00:00:00Z"
  },
  {
    "id": "12229-005",
    "name": "袖ケ浦バスターミナル駐車場",
    "address": "千葉県袖ケ浦市坂戸市場2533-1",
    "latitude": 35.418282,
    "longitude": 139.956238,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12229",
    "cityName": "袖ケ浦市",
    "accessibleSpaceTotal": 2,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "conditions": "療育手帳・身体障がい者手帳・精神障がい者保健福祉手帳の交付を受けている方が対象。申請により定期利用料金を半額に減免。減免申請書と手帳の写しの提出が必要(一時利用には適用なし)。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 一時利用(1暦日):四輪 市民500円/市民以外550円、二輪 市民250円/市民以外300円(入庫後60分無料)。定期利用は他駐車場と同様の月額制。\n障害者割引: 定期利用料50%減免\n総台数: 70台",
    "sourceUrl": "https://www.city.sodegaura.lg.jp/soshiki/toshi/sieityuusyajounoriyouhouhou.html",
    "updatedAt": "2026-08-12T00:00:00Z"
  },
  {
    "id": "12231-001",
    "name": "千葉県立北総花の丘公園駐車場",
    "address": "千葉県印西市原山1-12-1",
    "latitude": 35.800854,
    "longitude": 140.124664,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12231",
    "cityName": "印西市",
    "accessibleSpaceTotal": 5,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "運転手または同乗者が身体障害者手帳・療育手帳・精神障害者保健福祉手帳などを提示。手帳原本(コピー不可)と発券された駐車券をBゾーン花と緑の文化館1階インフォメーションに提出、または電話で問い合わせが必要。"
    },
    "accessibleSpaces": [
      {
        "count": 5
      }
    ],
    "notes": "通常料金: 準中型車・普通車: 4時間まで300円、4時間超~8時間以内600円、8時間超は1時間ごと100円増/中型車・大型車: 1回2,400円\n障害者割引: 無料\n総台数: 405台",
    "sourceUrl": "https://hayashi-lce.jp/hokusou/pages/58/",
    "updatedAt": "2026-08-12T00:00:00Z"
  },
  {
    "id": "12410-001",
    "name": "坂田城跡梅林 梅林有料駐車場",
    "address": "千葉県山武郡横芝光町坂田750",
    "latitude": 35.666958,
    "longitude": 140.473816,
    "prefectureCode": "12",
    "prefectureName": "千葉県",
    "cityCode": "12410",
    "cityName": "横芝光町",
    "accessibleSpaceTotal": 0,
    "discountType": "unknown",
    "discount": {
      "type": "unknown",
      "conditions": "身体障害者手帳提示。坂田城跡梅まつり開催期間中(例年2月下旬〜3月上旬)の有料駐車場が対象。問い合わせ先: 横芝光町観光まちづくり協会 0479-74-8585、または産業課 0479-84-1215"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1日500円\n障害者割引: 1日200円\n総台数: 40台",
    "sourceUrl": "https://www.town.yokoshibahikari.chiba.jp/site/yokoshibahikari-navi/1580.html",
    "updatedAt": "2026-08-13T00:00:00Z"
  },
  {
    "id": "27102-001",
    "name": "都島区役所駐車場",
    "address": "大阪府大阪市都島区中野町2丁目16番20号",
    "latitude": 34.701317,
    "longitude": 135.528412,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27102",
    "cityName": "大阪市都島区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳のいずれかを区役所窓口で提示。開庁時間内に区役所を利用する場合が対象。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 午前8時~午後7時:40分ごとに200円(最大料金は月~金・第4日曜700円、土曜・日曜・祝日500円)。午後7時~午前8時:1時間ごとに100円(最大料金300円)。\n障害者割引: 開庁時間内に区役所窓口を利用する方で、障がいのある方が乗車する車両は駐車料金が無料。\n総台数: 15台",
    "sourceUrl": "https://www.city.osaka.lg.jp/miyakojima/page/0000327853.html",
    "updatedAt": "2026-08-13T00:00:00Z"
  },
  {
    "id": "27102-002",
    "name": "大阪市立総合医療センター駐車場(都島センタービル)",
    "address": "大阪府大阪市都島区都島本通2丁目13番22号",
    "latitude": 34.708454,
    "longitude": 135.523514,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27102",
    "cityName": "大阪市都島区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳を提示。外来受診時は総合案内(時間外は警備室)に駐車券・手帳・診療費領収書(または外来基本カード)を提示。入院患者・家族(運転者が障がい者)はナースステーションに手帳を提示し、入退院日用の無料券を2枚配付。マイナポータル連携済みのミライロIDは手帳提示と同等の扱い(スマホ画面で必要情報が確認できない場合は手帳提示が必要)。駐車禁止除外標章では割引不可。面会者は無料ではなく割引料金の適用。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 一般の方:20分毎に400円加算、24時間最大3,000円。当日受診・入院患者は60分まで200円、以降30分毎100円加算、24時間最大1,200円。\n障害者割引: 障がい者(当日受診の患者・入院患者)は24時間以内は駐車料金無料。24時間以降は当日受診患者と同じ料金(60分まで200円、以降30分毎100円加算、24時間最大1,200円)が適用。",
    "sourceUrl": "https://www.osakacity-hp.or.jp/ocgh/about/access.html",
    "updatedAt": "2026-08-13T00:00:00Z"
  },
  {
    "id": "27103-001",
    "name": "福島区役所地下駐車場",
    "address": "大阪府大阪市福島区大開1丁目8番1号",
    "latitude": 34.6922,
    "longitude": 135.472565,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27103",
    "cityName": "大阪市福島区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "区役所内の相談窓口(用件に応じた担当窓口)にて障害者手帳(または「ミライロID」アプリの提示)を確認のうえ、駐車券を無料処理。駐車料金を先に精算すると割引不可のため要事前提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分/200円(1日最大1,400円)\n障害者割引: 身体障害者手帳・精神障害者保健福祉手帳・療育手帳の交付を受けている方(本人運転または当該障がい者が乗車し他の方が運転する車両)が利用する場合、駐車料金無料\n総台数: 14台",
    "sourceUrl": "https://www.city.osaka.lg.jp/fukushima/page/0000400199.html",
    "updatedAt": "2026-08-13T00:00:00Z"
  },
  {
    "id": "27104-001",
    "name": "此花区役所駐車場(南側)",
    "address": "大阪府大阪市此花区春日出北1-8-4",
    "latitude": 34.682819,
    "longitude": 135.452499,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27104",
    "cityName": "大阪市此花区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳、精神障がい者保健福祉手帳、療育手帳のいずれかの保有者、要介護状態区分「要介護1~5」の認定者、または大阪府障がい者等用駐車区画利用証の交付を受けている方が対象。無料手続きの際に手帳等の提示が必須(窓口で申請)。北側駐車場(19台)には本制度の適用なし。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 平日8時~20時 1時間200円、20時~翌8時 2時間100円、土日祝は当日最大500円\n障害者割引: 対象者が運転または乗車する車両は駐車料金無料\n総台数: 8台",
    "sourceUrl": "https://www.city.osaka.lg.jp/konohana/page/0000487404.html",
    "updatedAt": "2026-08-13T00:00:00Z"
  },
  {
    "id": "27106-001",
    "name": "西区役所駐車場",
    "address": "大阪府大阪市西区新町4丁目5番14号",
    "latitude": 34.676029,
    "longitude": 135.485992,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27106",
    "cityName": "大阪市西区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳、精神障がい者保健福祉手帳、療育手帳の交付を受けている方が運転または同乗している車両が対象。利用窓口で駐車券と手帳を提示。区役所開庁時間内のみ受付。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初30分300円、以降30分以内まで15分毎200円、以降1時間毎100円\n障害者割引: 無料(区役所での手続き・相談で来庁し、運転または同乗している場合)\n総台数: 27台",
    "sourceUrl": "https://www.osaka-city-callcenter.jp/faq/detail.aspx?id=1144",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27106-002",
    "name": "大阪市立西横堀駐車場",
    "address": "大阪府大阪市西区立売堀1丁目(阪神高速道路環状線高架下)",
    "latitude": 34.67968,
    "longitude": 135.495377,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27106",
    "cityName": "大阪市西区",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障がい者手帳、精神障がい者保健福祉手帳、療育手帳(またはミライロID)の所持者本人が運転、または介護者運転の車に同乗する場合が対象。管理事務所で精算前に駐車券と手帳等を提示する必要がある(精算後は割引不可)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 0時~24時 30分までごとに350円、上限料金1,700円~2,200円(ブロックにより異なる)\n障害者割引: 一時駐車料金及び上限料金を半額に減額\n総台数: 1191台",
    "sourceUrl": "https://www.city.osaka.lg.jp/kensetsu/page/0000258436.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27106-003",
    "name": "大阪市立靱地下駐車場",
    "address": "大阪府大阪市西区靱本町2丁目(靱公園地下)",
    "latitude": 34.684086,
    "longitude": 135.491104,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27106",
    "cityName": "大阪市西区",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障がい者手帳、精神障がい者保健福祉手帳、療育手帳(またはミライロID)の所持者本人が運転、または介護者運転の車に同乗する場合が対象。管理事務所で精算前に駐車券と手帳等を提示する必要がある(精算後は割引不可)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分ごとに300円、24時間上限1,800円(土日祝1,600円)\n障害者割引: 一時駐車料金及び上限料金を半額に減額\n総台数: 246台",
    "sourceUrl": "https://www.city.osaka.lg.jp/kensetsu/page/0000258436.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27106-004",
    "name": "大阪市立本町地下駐車場",
    "address": "大阪府大阪市西区靱本町1丁目(本町通道路下)",
    "latitude": 34.68528,
    "longitude": 135.495178,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27106",
    "cityName": "大阪市西区",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障がい者手帳、精神障がい者保健福祉手帳、療育手帳(またはミライロID)の所持者本人が運転、または介護者運転の車に同乗する場合が対象。管理事務所で精算前に駐車券と手帳等を提示する必要がある(精算後は割引不可)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分ごとに200円、上限料金24時間までごとに1,500円\n障害者割引: 一時駐車料金及び上限料金を半額に減額\n総台数: 154台",
    "sourceUrl": "https://www.city.osaka.lg.jp/kensetsu/page/0000258436.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27106-005",
    "name": "大阪市立土佐堀地下駐車場",
    "address": "大阪府大阪市西区土佐堀1丁目(江戸堀線道路下)",
    "latitude": 34.690697,
    "longitude": 135.493271,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27106",
    "cityName": "大阪市西区",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障がい者手帳、精神障がい者保健福祉手帳、療育手帳(またはミライロID)の所持者本人が運転、または介護者運転の車に同乗する場合が対象。管理事務所で精算前に駐車券と手帳等を提示する必要がある(精算後は割引不可)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 0時~24時 20分までごとに200円、上限料金入庫後24時間までごとに1,400円\n障害者割引: 一時駐車料金及び上限料金を半額に減額\n総台数: 210台",
    "sourceUrl": "https://www.city.osaka.lg.jp/kensetsu/page/0000258436.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27107-001",
    "name": "港区役所地下駐車場",
    "address": "大阪府大阪市港区市岡1丁目15番25号",
    "latitude": 34.664059,
    "longitude": 135.460693,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27107",
    "cityName": "大阪市港区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳、精神障がい者保健福祉手帳、療育手帳、被爆者健康手帳等の所持者本人が運転する場合、または当該障がい者が乗車し移動のために他の方が運転する場合が対象。1・3・6階の各課窓口(2・4・5階利用者は6階61番窓口)で手帳を提示し確認を受けたうえでQRコードの発行を受ける。駐車料金を先に精算すると割引を受けられないため注意。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 終日60分までごとに300円\n障害者割引: 駐車料金が24時間無料になるQRコードを発行\n総台数: 14台",
    "sourceUrl": "https://www.city.osaka.lg.jp/minato/page/0000032161.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27107-002",
    "name": "港区民センター駐車場",
    "address": "大阪府大阪市港区磯路1丁目7番17号",
    "latitude": 34.668053,
    "longitude": 135.461746,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27107",
    "cityName": "大阪市港区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がい者手帳等をお持ちの方が対象。3階窓口に駐車券と障がい者手帳を持参して手続きする。駐車台数に限りがあるため公共交通機関の利用が推奨されている。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 20分200円、最大料金1,200円(9:00~18:00)/400円(18:00~9:00)\n障害者割引: 駐車料金無料\n総台数: 9台",
    "sourceUrl": "https://www.osakacommunity.jp/minato-center/facility/",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27108-001",
    "name": "大正区役所屋外駐車場",
    "address": "大阪府大阪市大正区千島2丁目7番95号",
    "latitude": 34.650146,
    "longitude": 135.472366,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27108",
    "cityName": "大阪市大正区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体・精神・療育いずれかの障がい者手帳所持者が対象。区役所での手続き等での来庁時に手帳を提示することが条件(当日限り)。運営はタイムズ24株式会社(2025年4月1日から)。バイク駐車不可。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 60分300円。最大料金は平日7時~21時500円・21時~7時300円、土日祝7時~21時1000円・21時~7時300円(24時間365日利用可、現金・クレジットカード・コード決済対応)\n障害者割引: 身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳の交付を受けている方が、区役所に手続き等で来庁する際に手帳を提示すると、当日に限り駐車料金が無料\n総台数: 38台",
    "sourceUrl": "https://www.city.osaka.lg.jp/taisho/page/0000651470.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27109-001",
    "name": "天王寺区役所・天王寺区保健福祉センター駐車場",
    "address": "大阪府大阪市天王寺区真法院町20番33号",
    "latitude": 34.658142,
    "longitude": 135.519348,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27109",
    "cityName": "大阪市天王寺区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳のいずれかの交付を受けている方が運転する場合、または当該手帳所持者が乗車しその移動のために他の方が運転する場合が対象。駐車場管理室(駐車場出口)にて手帳を提示。区役所地下1階、高さ制限2.3m。土曜・日曜(開庁日以外)、国民の祝日、12月29日~1月3日は利用不可。運営管理会社:日本駐車場メンテナンス株式会社。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初の30分200円、以降60分ごと300円(現金のみ、1万円・5千円札不可)\n障害者割引: 駐車料金無料\n総台数: 13台",
    "sourceUrl": "https://www.city.osaka.lg.jp/tennoji/page/0000025197.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27109-002",
    "name": "大阪市立上汐地下駐車場",
    "address": "大阪府大阪市天王寺区上汐4丁目(市道天王寺区第8601号線道路下)",
    "latitude": 34.662468,
    "longitude": 135.516525,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27109",
    "cityName": "大阪市天王寺区",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳の提示(ミライロID提示も可)。駐車料金を先に精算すると割引を受けられないため、出庫時に管理事務所で手帳を提示してから精算する必要がある。定期券利用時は障がい者割引の対象外。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 0時~24時 30分までごとに200円、上限料金:入庫後24時間までごとに1,500円\n障害者割引: 一時駐車料金及び上限料金が半額\n総台数: 124台",
    "sourceUrl": "https://www.city.osaka.lg.jp/kensetsu/page/0000258259.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27109-003",
    "name": "大阪赤十字病院駐車場",
    "address": "大阪府大阪市天王寺区筆ケ崎町5-30",
    "latitude": 34.664013,
    "longitude": 135.525162,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27109",
    "cityName": "大阪市天王寺区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳をお持ちの方が対象。防災センター(北玄関)に障害者手帳を提示し割引手続きが必要。外来患者は精算機に駐車券・診察券を挿入し精算。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 外来患者・入院患者ご家族(入退院日のみ):3時間まで無料、以降30分毎200円、当日24時までの最大料金1,000円/一般の方:15分まで無料、以降30分毎300円、当日24時までの最大料金2,000円\n障害者割引: 駐車料金無料(終日)\n総台数: 423台",
    "sourceUrl": "https://www.osaka-med.jrc.or.jp/access/",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27111-001",
    "name": "浪速区役所駐車場",
    "address": "大阪府大阪市浪速区敷津東1-4-20",
    "latitude": 34.659534,
    "longitude": 135.499527,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27111",
    "cityName": "大阪市浪速区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳の交付を受けている方本人が運転する車両、または当該障がい者が乗車し他の方が運転する車両が対象。区役所内で用件のある窓口にて手帳を提示のうえ、駐車券とあわせて提示すると窓口で駐車無料券が発行される。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 営業時間内 20分ごと200円\n障害者割引: 駐車料金全額免除(駐車無料券発行)\n総台数: 18台",
    "sourceUrl": "https://www.osaka-city-callcenter.jp/faq/detail.aspx?id=1411",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27111-002",
    "name": "大阪市立塩草地下駐車場",
    "address": "大阪府大阪市浪速区塩草1丁目(浪速公園地下)",
    "latitude": 34.66188,
    "longitude": 135.492065,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27111",
    "cityName": "大阪市浪速区",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳をお持ちの方本人が運転、または介護者運転の車に同乗する場合に適用。出庫時に駐車券と手帳等(ミライロID可)を提示。駐車料金を先に精算すると割引不可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 0時~24時 40分までごとに200円、入庫後24時間までごとの上限900円\n障害者割引: 一時駐車料金及び上限料金が半額\n総台数: 133台",
    "sourceUrl": "https://www.city.osaka.lg.jp/kensetsu/page/0000258258.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27111-003",
    "name": "浪速スポーツセンター駐車場",
    "address": "大阪府大阪市浪速区難波中3丁目8-8",
    "latitude": 34.66098,
    "longitude": 135.499725,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27111",
    "cityName": "大阪市浪速区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 1,
      "conditions": "施設を利用し障がい者手帳を受付に提示した場合に適用。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分250円(平日最大12時間1,000円、土日祝最大12時間1,500円)\n障害者割引: 1時間を超えた分の駐車料金が無料",
    "sourceUrl": "https://cs-plaza.co.jp/naniwa-sc/charge",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27111-004",
    "name": "石井記念愛染園附属愛染橋病院 障がい者用駐車場",
    "address": "大阪府大阪市浪速区日本橋5-16-15",
    "latitude": 34.657345,
    "longitude": 135.505142,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27111",
    "cityName": "大阪市浪速区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がいのある方が対象。障がい者用駐車区画(1台分)を無料で利用できる。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 併設立体駐車場は2024年4月1日より利用中止(周辺提携駐車場は別途)\n障害者割引: 障がい者用駐車場1台を無料で利用可能",
    "sourceUrl": "https://byouin.aizenen.or.jp/info/faq/",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27113-001",
    "name": "西淀川区役所来庁者用駐車場",
    "address": "大阪府大阪市西淀川区御幣島1丁目2番10号",
    "latitude": 34.711246,
    "longitude": 135.455872,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27113",
    "cityName": "大阪市西淀川区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳、療育手帳又は精神障がい者保健福祉手帳のいずれかの交付を受けている方が運転または同乗する車両が対象(区役所施設利用時に限る)。デジタル障がい者手帳「ミライロID」の提示でも可。開庁時間内に利用窓口で駐車券と手帳(またはミライロID)を提示して申し出る必要がある。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 60分ごと300円(24時間最大1000円、最大料金は1回限り)\n障害者割引: 無料(無料駐車サービス券発行)\n総台数: 29台",
    "sourceUrl": "https://www.city.osaka.lg.jp/nishiyodogawa/page/0000226422.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27114-001",
    "name": "東淀川区役所駐車場",
    "address": "大阪府大阪市東淀川区東淡路4丁目15番1号",
    "latitude": 34.737885,
    "longitude": 135.516174,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27114",
    "cityName": "大阪市東淀川区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "区役所利用者のうち障がいのある方が運転または同乗する車両が対象。窓口で身体障害者手帳・精神障害者保健福祉手帳・療育手帳のいずれかを提示(障がい者手帳アプリ「ミライロID」の提示でも可)。駐車台数に限りがあるため公共交通機関の利用を推奨。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 60分300円、6時間最大500円(以降も同料金を反復適用)\n障害者割引: 無料(駐車料金全額免除)\n総台数: 27台",
    "sourceUrl": "https://www.city.osaka.lg.jp/higashiyodogawa/page/0000000457.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27114-002",
    "name": "東淀川体育館駐車場",
    "address": "大阪府大阪市東淀川区東中島4丁目4番4号",
    "latitude": 34.732517,
    "longitude": 135.505173,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27114",
    "cityName": "大阪市東淀川区",
    "accessibleSpaceTotal": 1,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "障がい者用区画利用者は通常料金の半額。駐車料金は前払い制で2階事務所受付にて現金精算。指定管理者:公益財団法人大阪スポーツみどり振興財団フィットネス21。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 午前・午後・夜間毎600円、2区分使用1,000円、全日(9時~21時)1,300円\n障害者割引: 通常料金の半額\n総台数: 15台",
    "sourceUrl": "http://osakashi.opas.jp/chikubetu/facility_n/city_ward_higashiyodogawa/%E6%9D%B1%E6%B7%80%E5%B7%9D%E4%BD%93%E8%82%B2%E9%A4%A8/1003.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27114-003",
    "name": "東淀川複合施設駐車場(HST東淀川屋内プール・東淀川図書館・東淀川区民会館)",
    "address": "大阪府大阪市東淀川区東淡路1丁目4番53号",
    "latitude": 34.733337,
    "longitude": 135.519348,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27114",
    "cityName": "大阪市東淀川区",
    "accessibleSpaceTotal": 1,
    "discountType": "unknown",
    "discount": {
      "type": "unknown",
      "conditions": "障がい者手帳等の提示で1回220円の定額料金が適用される(一般利用者の増分課金なし)。同建物は1階プール・2階トレーニング室・3階図書館・4階区民会館の複合施設で駐車場を共用。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 施設利用者:最初の1時間220円(以降30分毎110円)、一般利用者:最初の1時間330円(以降1時間毎330円)\n障害者割引: 1回220円(定額)\n総台数: 20台",
    "sourceUrl": "http://osakashi.opas.jp/chikubetu/facility_n/city_ward_higashiyodogawa/%EF%BC%A8%EF%BC%B3%EF%BC%B4%E6%9D%B1%E6%B7%80%E5%B7%9D%E5%B1%8B%E5%86%85%E3%83%97%E3%83%BC%E3%83%AB/982.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27115-001",
    "name": "大阪市立東成スポーツセンター駐車場",
    "address": "大阪府大阪市東成区東中本2-11-30",
    "latitude": 34.67894,
    "longitude": 135.547882,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27115",
    "cityName": "大阪市東成区",
    "accessibleSpaceTotal": 1,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "障がい者本人が利用する場合、出庫時等に証明書(障がい者手帳等)の提示が必要。障がい者用区画は1台分。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 30分毎100円\n障害者割引: 2時間まで無料\n総台数: 18台",
    "sourceUrl": "https://higashinarisc.sbt-csp.jp/archives/access/%E6%89%80%E5%9C%A8%E5%9C%B0%E8%A9%B3%E7%B4%B0%EF%BC%8F%E9%A7%90%E8%BB%8A%E5%A0%B4",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27116-001",
    "name": "生野区役所駐車場",
    "address": "大阪府大阪市生野区勝山南3-1-19",
    "latitude": 34.654057,
    "longitude": 135.534515,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27116",
    "cityName": "大阪市生野区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳のいずれかを持つ方が運転する車両、またはその方が乗車し他の方が運転する車両が対象。手帳またはミライロIDを提示。高さ230cm超の車両は利用不可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初の30分300円、以降30分ごとに200円、24時間最大1,100円\n障害者割引: 無料(駐車料金が無料になる駐車無料券を発行)",
    "sourceUrl": "https://www.city.osaka.lg.jp/ikuno/page/0000000473.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27116-002",
    "name": "大阪市立生野屋内プール(メディプランプール生野)駐車場",
    "address": "大阪府大阪市生野区桃谷3丁目8番18号",
    "latitude": 34.660564,
    "longitude": 135.535553,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27116",
    "cityName": "大阪市生野区",
    "accessibleSpaceTotal": 1,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "身体障害者手帳の提示が条件。2時間を超えた分は通常料金が適用される。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 一般30分200円・施設利用者60分200円、6時間最大800円\n障害者割引: 身体障害者は2時間無料、以降は通常料金(60分200円、6時間最大800円)\n総台数: 8台",
    "sourceUrl": "https://www.cospa-wellness.co.jp/corp/ikuno-pool/",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27117-001",
    "name": "大阪市立芸術創造館・旭図書館駐車場",
    "address": "大阪府大阪市旭区中宮1-11-14",
    "latitude": 34.721626,
    "longitude": 135.542526,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27117",
    "cityName": "大阪市旭区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳のいずれかを持つ本人が運転、または同乗する車両が対象。芸術創造館窓口で手帳を提示して手続き。旭図書館と併設の地下駐車場。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 2時間まで30分ごとに100円、2~4時間600円、4時間以上1,000円\n障害者割引: 無料(芸術創造館の開館時間内に限る、9:15~22:45)\n総台数: 33台",
    "sourceUrl": "https://geijutsusozokan.jp/facility/",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27117-002",
    "name": "大阪市立旭スポーツセンター駐車場",
    "address": "大阪府大阪市旭区高殿5-3-25",
    "latitude": 34.71674,
    "longitude": 135.54071,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27117",
    "cityName": "大阪市旭区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "受付にて駐車証明書と障がい者手帳を提示し、無料券を受け取る。24時間営業。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 60分毎200円(最大600円)\n障害者割引: 無料\n総台数: 6台",
    "sourceUrl": "http://asahisc.sbt-csp.jp/",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27118-001",
    "name": "城東区役所駐車場（城東区民センター・城東図書館・城東区老人福祉センター共用）",
    "address": "大阪府大阪市城東区中央3丁目5番45号",
    "latitude": 34.703159,
    "longitude": 135.545578,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27118",
    "cityName": "大阪市城東区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳の交付を受けている方が運転する車両、または同乗する車両は無料。駐車場管理室（常駐管理時間帯：月~木・土 8:30-17:30、金 8:30-19:00、日 8:30-17:30、国民の祝日・12/29~1/3を除く）に手帳を提示。管理時間外に身障者用スペースが満車等の場合は、城東区役所3階総務課、城東図書館4階貸出カウンター、城東区民センター2階事務室、城東区老人福祉センター4階事務室のいずれかへ申し出。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 8:00~22:30 最初60分300円、以降30分毎200円（22:30~8:00は夜間駐車300円）\n障害者割引: 無料\n総台数: 16台",
    "sourceUrl": "https://www.city.osaka.lg.jp/joto/page/0000504401.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27118-002",
    "name": "大阪市立城東屋内プール駐車場",
    "address": "大阪府大阪市城東区関目2丁目17-45",
    "latitude": 34.706394,
    "longitude": 135.552948,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27118",
    "cityName": "大阪市城東区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "障がいのある方には駐車2時間無料のサービス券を交付。障がい者本人および介助者1名はプール入場料も無料。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00~22:00 60分毎200円、22:00~8:00 60分毎100円（最大料金24時間800円）\n障害者割引: 2時間無料\n総台数: 8台",
    "sourceUrl": "https://joto.sbt-csp.jp/",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27120-001",
    "name": "住吉区役所駐車場(住吉区民センター・住吉図書館 共用)",
    "address": "大阪府大阪市住吉区南住吉3-15-55",
    "latitude": 34.604515,
    "longitude": 135.500015,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27120",
    "cityName": "大阪市住吉区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "住吉区役所・住吉区民センター・住吉図書館いずれかの利用者で、身体障がい者手帳、精神障がい者保健福祉手帳、療育手帳のいずれかを所持する方(本人運転、または当該障がい者が乗車し介助者が運転する場合を含む)が対象。利用施設の窓口(住吉区役所は各課窓口、3階は総務課のみ／住吉図書館は図書館窓口)にて駐車券と手帳(またはミライロID)を提示し手続きすることで無料。精算前に必ず窓口での手続きが必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 40分300円(入庫後24時間最大料金600円、最大料金は1回限り以降は通常料金加算)\n障害者割引: 無料\n総台数: 59台",
    "sourceUrl": "https://www.oml.city.osaka.lg.jp/index.php?page_id=322",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27120-002",
    "name": "大阪急性期・総合医療センター駐車場",
    "address": "大阪府大阪市住吉区万代東3丁目1番56号",
    "latitude": 34.616692,
    "longitude": 135.503952,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27120",
    "cityName": "大阪市住吉区",
    "accessibleSpaceTotal": 23,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳、精神障がい者保健福祉手帳、療育手帳のいずれかの交付を受けている方は駐車料金無料。平日9時~17時30分は会計窓口、夜間・土日祝は守衛室に申し出て手続きが必要。駐車禁止除外指定車標章を車内フロントに掲示すること。"
    },
    "accessibleSpaces": [
      {
        "count": 23
      }
    ],
    "notes": "通常料金: 1時間300円\n障害者割引: 無料",
    "sourceUrl": "https://www.gh.opho.jp/access.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27120-003",
    "name": "住吉スポーツセンター・屋内プール駐車場",
    "address": "大阪府大阪市住吉区浅香1-8-15",
    "latitude": 34.592316,
    "longitude": 135.51207,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27120",
    "cityName": "大阪市住吉区",
    "accessibleSpaceTotal": 2,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "障がい者手帳をお持ちの方は1階窓口で割引手続きをすることで最初の2時間駐車無料(2時間を超える分は通常料金が加算される)。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 30分無料、以降60分毎200円\n障害者割引: 最初の2時間無料\n総台数: 39台",
    "sourceUrl": "https://www.hos-sumiyoshi.com/access/",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27121-001",
    "name": "長居公園地下駐車場",
    "address": "大阪府大阪市東住吉区長居公園1丁目",
    "latitude": 34.610451,
    "longitude": 135.514496,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27121",
    "cityName": "大阪市東住吉区",
    "accessibleSpaceTotal": 0,
    "discountType": "unknown",
    "discount": {
      "type": "unknown",
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳(またはミライロID)を提示すると当日1回300円の均一料金になる。出庫時に現地係員へ駐車券と手帳を提示すること。先に精算機で精算すると割引を受けられないため要注意。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 平日60分350円(当日上限1,000円)/土日祝30分300円(当日上限2,000円)\n障害者割引: 当日1回300円\n総台数: 255台",
    "sourceUrl": "https://www.city.osaka.lg.jp/kensetsu/page/0000258436.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27121-002",
    "name": "長居公園南駐車場(タイムズ長居植物園前)",
    "address": "大阪府大阪市東住吉区長居公園1",
    "latitude": 34.610451,
    "longitude": 135.514496,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27121",
    "cityName": "大阪市東住吉区",
    "accessibleSpaceTotal": 0,
    "discountType": "unknown",
    "discount": {
      "type": "unknown",
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳等の提示で1回300円の均一料金。出庫時に精算機備え付けのオートホンを使用してモニターへ手帳を提示する。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 平日(月〜金)60分350円(最大1,000円/日)/土日祝30分300円(最大2,000円/日)\n障害者割引: 300円/回\n総台数: 272台",
    "sourceUrl": "https://times-info.net/P27-osaka/C121/park-detail-BUK0038648/",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27122-001",
    "name": "西成区役所駐車場",
    "address": "大阪府大阪市西成区岸里1丁目5番20号",
    "latitude": 34.634983,
    "longitude": 135.494125,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27122",
    "cityName": "大阪市西成区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳、精神障がい者保健福祉手帳、療育手帳の所持者が運転または同乗する車両が対象。区役所窓口(総務課)にて確認の上、駐車無料券を発行(区役所閉庁日・閉庁時間帯は発行不可)。入出庫可能時間7:00~21:30。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 60分300円(最大料金 平日19時~9時300円、土日祝9時~19時500円)\n障害者割引: 無料(駐車無料券発行)\n総台数: 36台",
    "sourceUrl": "https://www.osaka-city-callcenter.jp/faq/detail.aspx?id=1145",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27122-002",
    "name": "西成スポーツセンター駐車場",
    "address": "大阪府大阪市西成区玉出東1丁目6-1",
    "latitude": 34.628033,
    "longitude": 135.496353,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27122",
    "cityName": "大阪市西成区",
    "accessibleSpaceTotal": 1,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "障がい者は駐車場利用開始から2時間まで無料(それ以降は通常料金)。施設利用者は最初の2時間を100円で利用可の別枠あり。夜間の出退不可。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 昼間(8:30~21:30)1時間毎200円、夜間(21:30~8:30)1時間毎100円、1日最大700円\n障害者割引: 2時間まで無料\n総台数: 19台",
    "sourceUrl": "http://osakashi.opas.jp/chikubetu/facility_s/city_ward_nishinari/%E3%83%95%E3%82%A3%E3%83%83%E3%83%88%E3%83%8D%E3%82%B9%EF%BC%92%EF%BC%91%E8%A5%BF%E6%88%90%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%84%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC/",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27123-001",
    "name": "淀川区役所駐車場",
    "address": "大阪府大阪市淀川区十三東2丁目3番3号",
    "latitude": 34.72102,
    "longitude": 135.486923,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27123",
    "cityName": "大阪市淀川区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳の交付を受けている方が自ら運転する車両、または当該障がい者が乗車しその移動のために他の方が運転する車両が対象。駐車券と手帳を持参のうえ各階窓口に申し出る。ミライロID提示も可(画面で確認できない場合は原本提示が必要)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 40分ごとに200円(24時間最大 平日800円・土日祝600円)\n障害者割引: 無料\n総台数: 32台",
    "sourceUrl": "https://www.city.osaka.lg.jp/yodogawa/page/0000037856.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27123-002",
    "name": "大阪市立十三市民病院 駐車場",
    "address": "大阪府大阪市淀川区野中北2丁目12番27号",
    "latitude": 34.729,
    "longitude": 135.476791,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27123",
    "cityName": "大阪市淀川区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の交付を受けた方、またはその方が来院するために運転する方が対象。手帳を添えて駐車券を会計窓口・総合案内・時間外受付(警備員室)のいずれかに提示し認証を受ける。お見舞い・新型コロナワクチン接種利用は一般料金(対象外)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 一般料金 1時間毎に330円(21時~7時は1時間毎110円)、24時間最大770円\n障害者割引: 無料",
    "sourceUrl": "https://www.osakacity-hp.or.jp/juso/access.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27123-003",
    "name": "新大阪駅南駐車場(大阪市立)",
    "address": "大阪府大阪市淀川区西中島5丁目(新御堂筋高架下)",
    "latitude": 34.731316,
    "longitude": 135.500122,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27123",
    "cityName": "大阪市淀川区",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳(本人運転または介護者運転で同乗)が対象。ミライロID提示可。管理事務所で駐車券と手帳を提示して精算(先に精算機で精算すると適用不可)。定期券は対象外。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 7時~23時 30分ごとに350円、23時~翌7時 60分ごとに100円、24時間最大2,300円\n障害者割引: 一時駐車料金・上限料金とも半額\n総台数: 241台",
    "sourceUrl": "https://www.city.osaka.lg.jp/kensetsu/page/0000258251.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27123-004",
    "name": "新大阪駅南第2駐車場(大阪市立)",
    "address": "大阪府大阪市淀川区西中島5丁目(新御堂筋高架下)",
    "latitude": 34.731316,
    "longitude": 135.500122,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27123",
    "cityName": "大阪市淀川区",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳(本人運転または介護者運転で同乗)が対象。ミライロID提示可。管理事務所で駐車券と手帳を提示して精算(先に精算機で精算すると適用不可)。定期券は対象外。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 7時~22時 30分ごとに350円、22時~翌7時 60分ごとに100円、24時間最大2,200円\n障害者割引: 一時駐車料金・上限料金とも半額\n総台数: 66台",
    "sourceUrl": "https://www.city.osaka.lg.jp/kensetsu/page/0000258252.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27124-001",
    "name": "大阪市鶴見区役所駐車場",
    "address": "大阪府大阪市鶴見区横堤5-4-19",
    "latitude": 34.704277,
    "longitude": 135.574509,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27124",
    "cityName": "大阪市鶴見区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳・精神障がい者福祉手帳・療育手帳の交付を受けている方が、手続き等で区役所に来庁される際、窓口で手帳を提示すると駐車無料。管理事業者は日本駐車場メンテナンス株式会社。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 終日100円/30分\n障害者割引: 無料\n総台数: 20台",
    "sourceUrl": "https://www.city.osaka.lg.jp/tsurumi/page/0000384917.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27124-002",
    "name": "鶴見区民センター・鶴見図書館駐車場",
    "address": "大阪府大阪市鶴見区横堤5-3-15",
    "latitude": 34.704643,
    "longitude": 135.573578,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27124",
    "cityName": "大阪市鶴見区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳をお持ちの方が対象。駐車後に精算機で駐車券(駐車カード)を受け取り、鶴見区民センターまたは鶴見図書館の窓口で手帳とともに提示すると、無料化した駐車カードと交換される。鶴見図書館・鶴見区民センターの共用駐車場(タイムズ運営)。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 9:00~22:00 30分110円、22:00~9:00 60分110円、駐車後24時間最大770円\n障害者割引: 無料\n総台数: 14台",
    "sourceUrl": "https://www.oml.city.osaka.lg.jp/index.php?page_id=332",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27124-003",
    "name": "花博記念公園鶴見緑地駐車場",
    "address": "大阪府大阪市鶴見区緑地公園2-163",
    "latitude": 34.709694,
    "longitude": 135.576126,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27124",
    "cityName": "大阪市鶴見区",
    "accessibleSpaceTotal": 0,
    "discountType": "unknown",
    "discount": {
      "type": "unknown",
      "conditions": "障がい者手帳等の公的証明書を提示。鶴見緑地パークセンター(対応時間9:00~17:30)まで駐車券と手帳等を持参して事前認証を受けるか、出口ゲートのインターホンで電話オペレーターに手帳等を提示。問合せ: 06-6911-8787。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 駐車場ごとに異なる(例: 中央第一駐車場 昼間300円/60分、平日上限700円・土日祝上限1,400円)。園内に中央第一(760台)、中央第二(239台)、南(360台)、南第二(141台)、北西(148台)、西(69台)の各駐車場あり。\n障害者割引: 24時間上限200円(鶴見緑地パークセンター事前認証)または300円(出口ゲート・電話オペレーター対応)\n総台数: 1717台",
    "sourceUrl": "https://www.tsurumi-ryokuchi.jp/news/19614",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27125-001",
    "name": "住之江公園駐車場",
    "address": "大阪府大阪市住之江区南加賀屋1-1-117",
    "latitude": 34.61256,
    "longitude": 135.473618,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27125",
    "cityName": "大阪市住之江区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳・被爆者健康手帳・特定疾患医療受給者証・小児慢性特定疾患医療受診券、またはミライロIDアプリの提示(普通自動車・小型自動車に乗車の場合が対象)。入庫時もしくは出庫時に管理事務所へ提示。早朝・夜間は出庫ゲートのインターホンで警備会社係員に連絡しカメラに提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00〜19:00 最初の1時間390円、以降1時間毎100円(ただし最初加算のみ110円)、平日最大800円(5時間超)・休日最大1,600円(12時間超)、19:00〜翌8:00は早朝夜間割引で一律300円\n障害者割引: 無料(全額免除)\n総台数: 63台",
    "sourceUrl": "https://www.toshi-kouen.jp/staticpages/index.php/suminoe_facilities10",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27125-002",
    "name": "大阪府咲洲庁舎駐車場",
    "address": "大阪府大阪市住之江区南港北1-14-16",
    "latitude": 34.638866,
    "longitude": 135.415039,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27125",
    "cityName": "大阪市住之江区",
    "accessibleSpaceTotal": 6,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "1階正面玄関前の障がい者等用駐車スペース(6台)利用時のみ無料。障がい者手帳、被爆者健康手帳、障がい者等用駐車区画利用証のいずれかを警備員に提示し誘導に従う。地下駐車場に入庫した場合は料金免除の対象外。"
    },
    "accessibleSpaces": [
      {
        "count": 6
      }
    ],
    "notes": "通常料金: 全日30分300円、当日1日最大料金 平日1,000円・土日祝1,200円(午前0時まで、以降繰返し適用)、利用時間6:00〜0:00\n障害者割引: 無料\n総台数: 173台",
    "sourceUrl": "https://www.pref.osaka.lg.jp/faq/o040070/faq_001910.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27125-003",
    "name": "ATC(アジア太平洋トレードセンター)駐車場",
    "address": "大阪府大阪市住之江区南港北2-1-10",
    "latitude": 34.638329,
    "longitude": 135.412613,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27125",
    "cityName": "大阪市住之江区",
    "accessibleSpaceTotal": 21,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 1,
      "conditions": "身体障害者手帳・精神障害者保健福祉手帳・療育手帳・指定難病登録者証等をお持ちの方(本人運転、または介護者が運転する車に同乗の場合)が対象。精算機のインターホンで申し出(清算後は対応不可)。身障者用駐車場はITM(第1)駐車場12台/O's(第2)駐車場9台。"
    },
    "accessibleSpaces": [
      {
        "count": 21
      }
    ],
    "notes": "通常料金: 300円/30分毎、最大料金/1日 平日1,000円・土日祝特定日1,200円、営業時間7:00〜24:00\n障害者割引: 1時間分の駐車料金無料サービス\n総台数: 1200台",
    "sourceUrl": "https://www.atc-co.com/guide/access",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27126-001",
    "name": "平野区役所駐車場",
    "address": "大阪府大阪市平野区背戸口3丁目8番19号",
    "latitude": 34.621017,
    "longitude": 135.546494,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27126",
    "cityName": "大阪市平野区",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳、精神障がい者保健福祉手帳、療育手帳のいずれかを持つ方が自ら運転する車両、またはその方が乗車し移動のために他の方が運転する車両が対象。お手続きをする窓口にて手帳等と駐車券を提示し、駐車無料券の交付を受ける必要がある(先に精算すると割引不可)。営業時間外は出入庫不可。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 入庫から60分ごとに300円(営業時間中の最大料金600円)\n障害者割引: 無料\n総台数: 43台",
    "sourceUrl": "https://www.city.osaka.lg.jp/hirano/page/0000039470.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27126-002",
    "name": "大阪市立平野図書館 障がい者用駐車場",
    "address": "大阪府大阪市平野区平野東1-8-2",
    "latitude": 34.624668,
    "longitude": 135.559143,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27126",
    "cityName": "大阪市平野区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "一般来館者用駐車場は無く、障がい者用のみ2台設置され無料で利用可能。詳細は図書館(06-6793-0881)へ要問合せ。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.oml.city.osaka.lg.jp/page/372.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27126-003",
    "name": "平野スポーツセンター駐車場",
    "address": "大阪府大阪市平野区平野南4-6-1",
    "latitude": 34.61813,
    "longitude": 135.560059,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27126",
    "cityName": "大阪市平野区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "障がい者は証明書(障害者手帳等)の提示で2時間まで無料。駐車券が必要で、施設利用の確認を行った上で割引処理される。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:30~21:30 60分毎200円、21:30~8:30 120分毎100円、24時間最大700円(北側:屋内12台+屋外3台、南側:屋外16台)\n障害者割引: 2時間まで無料\n総台数: 31台",
    "sourceUrl": "https://hiranosc.sbt-csp.jp/archives/access/%E6%89%80%E5%9C%A8%E5%9C%B0%E8%A9%B3%E7%B4%B0%EF%BC%8F%E9%A7%90%E8%BB%8A%E5%A0%B4",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27127-001",
    "name": "大阪市北区役所地下駐車場",
    "address": "大阪府大阪市北区扇町2丁目1番27号",
    "latitude": 34.705719,
    "longitude": 135.510284,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27127",
    "cityName": "大阪市北区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "北区役所・区民センターを利用した方で、身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳の交付を受けている方が運転または同乗する車両が対象。利用した窓口へ駐車券と手帳を提示して申し出ること。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 平日8時〜17時: 最初30分300円、以後20分毎300円/平日17時〜22時: 20分毎300円/土日祝: 終日20分毎300円/24時間最大1,800円\n障害者割引: 利用時間分のサービス券発行(無料)\n総台数: 38台",
    "sourceUrl": "https://www.city.osaka.lg.jp/kita/page/0000215984.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27127-002",
    "name": "大阪市役所本庁舎駐車場",
    "address": "大阪府大阪市北区中之島1丁目3番20号",
    "latitude": 34.693871,
    "longitude": 135.501282,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27127",
    "cityName": "大阪市北区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳のいずれかの交付を受けている方が運転または同乗する車両が対象。出庫時に出口ゲート精算機で手帳を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 終日20分毎300円、24時間最大2,500円(利用時間: 月〜金7時〜23時、祝日・振替休日・12/29〜1/3を除く)\n障害者割引: 必要時間無料\n総台数: 100台",
    "sourceUrl": "https://www.city.osaka.lg.jp/somu/page/0000004215.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27127-003",
    "name": "大阪市立大阪駅前地下駐車場",
    "address": "大阪府大阪市北区梅田1丁目3番地先",
    "latitude": 34.698891,
    "longitude": 135.49646,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27127",
    "cityName": "大阪市北区",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳(ミライロID提示可)を管理事務所係員に駐車券とあわせて提示。駐車料金を先に精算すると割引不可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 6時〜23時: 60分700円/23時〜翌6時: 60分350円\n障害者割引: 一時駐車料金及び上限料金 半額\n総台数: 340台",
    "sourceUrl": "https://www.city.osaka.lg.jp/kensetsu/page/0000258262.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27127-004",
    "name": "大阪市立扇町通地下駐車場",
    "address": "大阪府大阪市北区扇町1丁目1番20号",
    "latitude": 34.702637,
    "longitude": 135.508713,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27127",
    "cityName": "大阪市北区",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳(ミライロID提示可)を管理事務所係員に駐車券とあわせて提示。駐車料金を先に精算すると割引不可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8時〜22時: 30分300円/22時〜翌8時: 60分100円/当日1日上限1,600円(24時まで)\n障害者割引: 一時駐車料金及び上限料金 半額\n総台数: 262台",
    "sourceUrl": "https://www.city.osaka.lg.jp/kensetsu/page/0000258263.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27127-005",
    "name": "大阪市立豊崎地下駐車場",
    "address": "大阪府大阪市北区豊崎3丁目21号",
    "latitude": 34.709175,
    "longitude": 135.49707,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27127",
    "cityName": "大阪市北区",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳(ミライロID提示可)を管理事務所係員に駐車券とあわせて提示。駐車料金を先に精算すると割引不可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 7時〜23時: 30分350円/23時〜翌7時: 30分150円/当日1日上限1,900円(24時まで)\n障害者割引: 一時駐車料金及び上限料金 半額(定期券利用者は対象外)\n総台数: 116台",
    "sourceUrl": "https://www.city.osaka.lg.jp/kensetsu/page/0000258254.html",
    "updatedAt": "2026-08-14T00:00:00Z"
  },
  {
    "id": "27128-001",
    "name": "大阪市中央区役所地下駐車場",
    "address": "大阪府大阪市中央区久太郎町1丁目2番27号",
    "latitude": 34.681446,
    "longitude": 135.509827,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27128",
    "cityName": "大阪市中央区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳の交付を受けている方が運転する車両または同乗する車両は無料。障がい者手帳アプリ「ミライロID」の提示でも適用可（スマホ画面で確認できない場合は原本提示）。出口の駐車場管理室または5階54番総務課窓口に手帳等を提示。区役所・保健福祉センターの開庁時間内に限る。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 月～金曜日 9時～19時 20分300円、19時～翌9時 30分100円（最大料金 9時～19時 1,900円、19時～翌9時 400円）／土曜日・日曜日・国民の祝日・国民の休日 9時～19時 30分100円、19時～翌9時 60分100円（最大料金 9時～19時 1,000円、19時～翌9時 400円）\n障害者割引: 無料\n総台数: 41台",
    "sourceUrl": "https://www.city.osaka.lg.jp/chuo/page/0000360071.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27128-002",
    "name": "大阪府庁本館西側駐車場",
    "address": "大阪府大阪市中央区大手前2丁目（大阪府庁本館と大阪府公館の間）",
    "latitude": 34.687008,
    "longitude": 135.519318,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27128",
    "cityName": "大阪市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "利用者または同乗者が障がい者手帳または被爆者健康手帳を提示した場合、開庁日の7時から20時までの利用料金が無料。駐車場内西側に障がい者等用駐車スペースあり。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 全日30分400円（駐車後12時間まで最大料金2,500円、繰り返し適用）\n障害者割引: 開庁日7時～20時は無料\n総台数: 55台",
    "sourceUrl": "https://www.pref.osaka.lg.jp/o040070/yodo/chuushajyou/index.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27128-003",
    "name": "大阪城前駐車場（大阪府庁分館6号館東側）",
    "address": "大阪府大阪市中央区大手前（大阪府庁分館6号館東側）",
    "latitude": 34.690132,
    "longitude": 135.519943,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27128",
    "cityName": "大阪市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "利用者または同乗者が障がい者手帳または被爆者健康手帳を提示した場合、開庁日の7時から20時までの利用料金が無料。駐車場内に障がい者等用駐車スペースあり。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 全日30分400円（駐車後12時間まで最大料金2,500円、繰り返し適用）\n障害者割引: 開庁日7時～20時は無料\n総台数: 59台",
    "sourceUrl": "https://www.pref.osaka.lg.jp/o040070/yodo/chuushajyou/index.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27128-004",
    "name": "大阪府立男女共同参画・青少年センター（ドーンセンター）駐車場",
    "address": "大阪府大阪市中央区大手前1丁目3番49号",
    "latitude": 34.689968,
    "longitude": 135.520569,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27128",
    "cityName": "大阪市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "ドーンセンター利用者で障がい者手帳をお持ちの方は、センター利用時間内に限り駐車場料金を全額免除。駐車券と障がい者手帳を2階総合受付に持参し、施設利用内容確認後に手帳確認済みの記録、出庫時に係員へ確認済み駐車券を提示して無料精算。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分ごとに200円、最大料金（24時間以内）2,400円\n障害者割引: 全額免除\n総台数: 92台",
    "sourceUrl": "https://www.dawncenter.jp/shisetsu/park.php",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27128-005",
    "name": "大阪国際がんセンター駐車場",
    "address": "大阪府大阪市中央区大手前3丁目1番69号",
    "latitude": 34.685032,
    "longitude": 135.519012,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27128",
    "cityName": "大阪市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "「身体障がい者手帳」「療育手帳」「精神障がい者保健福祉手帳」をお持ちの方、デジタル障害者手帳「ミライロID」をお持ちの方、血液及び骨髄提供者の方は無料。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 患者さま1日1回400円／その他の方30分まで（超過30分毎）400円（500円）、1日最大料金上限なし\n障害者割引: 無料\n総台数: 175台",
    "sourceUrl": "https://oici.jp/hospital/patient/nyuuinmachi/cyushajyo/",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27128-006",
    "name": "大阪歴史博物館地下駐車場",
    "address": "大阪府大阪市中央区大手前4丁目1番32号",
    "latitude": 34.683029,
    "longitude": 135.521225,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27128",
    "cityName": "大阪市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "障がい者手帳等の提示で駐車料金が半額。出庫前に駐車場管理窓口へ立ち寄る必要あり。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初の1時間500円、以降30分ごとに200円（高さ2.1mまでの乗用車）\n障害者割引: 半額\n総台数: 120台",
    "sourceUrl": "https://www.osakamushis.jp/about/faq.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27128-007",
    "name": "大阪市立安土町地下駐車場",
    "address": "大阪府大阪市中央区安土町3丁目",
    "latitude": 34.684418,
    "longitude": 135.502136,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27128",
    "cityName": "大阪市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳をお持ちの方が利用（本人運転または介護者運転の車に同乗）される場合、一時駐車料金及び上限料金が半額。ミライロIDの提示でも適用可。駐車料金を先に精算すると割引不可。定期券は割引対象外。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 0時～24時 30分までごとに350円、上限料金 入庫後24時間までごとに2,000円\n障害者割引: 半額\n総台数: 527台",
    "sourceUrl": "https://www.city.osaka.lg.jp/kensetsu/page/0000258268.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27128-008",
    "name": "大阪市立谷町筋地下駐車場",
    "address": "大阪府大阪市中央区谷町1・2丁目",
    "latitude": 34.688431,
    "longitude": 135.517487,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27128",
    "cityName": "大阪市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳をお持ちの方が利用（本人運転または介護者運転の車に同乗）される場合、一時駐車料金及び上限料金が半額。ミライロIDの提示でも適用可。駐車料金を先に精算すると割引不可。定期券は割引対象外。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 0時～24時 30分までごとに350円、上限料金 入庫後24時間までごとに1,800円（日祝は900円）\n障害者割引: 半額\n総台数: 211台",
    "sourceUrl": "https://www.city.osaka.lg.jp/kensetsu/page/0000258493.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27128-009",
    "name": "大阪市立法円坂駐車場",
    "address": "大阪府大阪市中央区法円坂2丁目（中央大通高架下）",
    "latitude": 34.680103,
    "longitude": 135.519852,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27128",
    "cityName": "大阪市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳をお持ちの方が利用（本人運転または介護者運転の車に同乗）される場合、一時駐車料金及び上限料金が半額。ミライロIDの提示でも適用可。駐車料金を先に精算すると割引不可。定期券は割引対象外。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 第1ブロック・第2ブロックとも 0時～24時 30分までごとに350円、上限料金 入庫後24時間までごとに1,700円\n障害者割引: 半額\n総台数: 501台",
    "sourceUrl": "https://www.city.osaka.lg.jp/kensetsu/page/0000258257.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27128-010",
    "name": "大阪市立長堀通地下駐車場",
    "address": "大阪府大阪市中央区南船場2～4丁目",
    "latitude": 34.676491,
    "longitude": 135.504868,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27128",
    "cityName": "大阪市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳をお持ちの方が利用（本人運転または介護者運転の車に同乗）される場合、一時駐車料金及び上限料金が半額。ミライロIDの提示でも適用可。駐車料金を先に精算すると割引不可。定期券は割引対象外。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 0時～24時 30分までごとに350円、当日1日上限料金（24時まで）1,500円（土日祝は1,700円）\n障害者割引: 半額\n総台数: 1030台",
    "sourceUrl": "https://www.city.osaka.lg.jp/kensetsu/page/0000258273.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27128-011",
    "name": "大阪市立東長堀地下駐車場",
    "address": "大阪府大阪市中央区南船場1丁目",
    "latitude": 34.676468,
    "longitude": 135.508621,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27128",
    "cityName": "大阪市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳をお持ちの方が利用（本人運転または介護者運転の車に同乗）される場合、一時駐車料金及び上限料金が半額。ミライロIDの提示でも適用可。駐車料金を先に精算すると割引不可。定期券は割引対象外。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 0時～24時 30分までごとに350円、上限料金 入庫後24時間までごとに1,400円\n障害者割引: 半額\n総台数: 270台",
    "sourceUrl": "https://www.city.osaka.lg.jp/kensetsu/page/0000258280.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27141-001",
    "name": "大仙公園第1駐車場",
    "address": "大阪府堺市堺区旭ヶ丘北町5丁256番地",
    "latitude": 34.558056,
    "longitude": 135.479996,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27141",
    "cityName": "堺市堺区",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳・被爆者健康手帳・特定疾患医療受給者証・特定医療費(指定難病)受給者証・小児慢性特定疾病医療受給者証、またはミライロID画面提示で全額免除。自動精算機設置駐車場では精算機横の受話器でコールセンターへ申し出た後、手帳を提示。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 普通乗用車等：2時間まで200円、2時間超3時間まで300円、3時間超4時間まで400円、4時間超5時間まで500円、5時間超閉門まで600円（バス・マイクロバスは1回1,000円）\n障害者割引: 無料（全額免除）\n総台数: 127台",
    "sourceUrl": "https://sakai-park.or.jp/access/parking.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27141-002",
    "name": "大仙公園第3駐車場",
    "address": "大阪府堺市堺区百舌鳥夕雲町2丁151番地",
    "latitude": 34.559666,
    "longitude": 135.486862,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27141",
    "cityName": "堺市堺区",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳・被爆者健康手帳・特定疾患医療受給者証・特定医療費(指定難病)受給者証・小児慢性特定疾病医療受給者証、またはミライロID画面提示で全額免除。堺市博物館の来館者もこの駐車場を利用。自動精算機設置駐車場では精算機横の受話器でコールセンターへ申し出た後、手帳を提示。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 普通乗用車等：2時間まで200円、2時間超3時間まで300円、3時間超4時間まで400円、4時間超5時間まで500円、5時間超閉門まで600円（バス・マイクロバスは1回1,000円）\n障害者割引: 無料（全額免除）\n総台数: 113台",
    "sourceUrl": "https://sakai-park.or.jp/access/parking.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27141-003",
    "name": "大浜公園駐車場",
    "address": "大阪府堺市堺区大浜北町4丁3番50号",
    "latitude": 34.580994,
    "longitude": 135.461838,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27141",
    "cityName": "堺市堺区",
    "accessibleSpaceTotal": 6,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳・被爆者健康手帳・特定疾患医療受給者証・特定医療費(指定難病)受給者証・小児慢性特定疾病医療受給者証、またはミライロID画面提示で全額免除。自動精算機設置駐車場では精算機横の受話器でコールセンターへ申し出た後、手帳を提示。"
    },
    "accessibleSpaces": [
      {
        "count": 6
      }
    ],
    "notes": "通常料金: 普通乗用車等：2時間まで200円、2時間超3時間まで300円、3時間超4時間まで400円、4時間超5時間まで500円、5時間超閉門まで600円（バス・マイクロバスは1回1,000円）\n障害者割引: 無料（全額免除）\n総台数: 270台",
    "sourceUrl": "https://sakai-park.or.jp/access/parking.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27141-004",
    "name": "大浜公園野球場駐車場",
    "address": "大阪府堺市堺区大浜北町4丁3番50号",
    "latitude": 34.580994,
    "longitude": 135.461838,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27141",
    "cityName": "堺市堺区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳・被爆者健康手帳・特定疾患医療受給者証・特定医療費(指定難病)受給者証・小児慢性特定疾病医療受給者証、またはミライロID画面提示で全額免除。自動精算機設置駐車場では精算機横の受話器でコールセンターへ申し出た後、手帳を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通乗用車等：2時間まで200円、2時間超3時間まで300円、3時間超4時間まで400円、4時間超5時間まで500円、5時間超閉門まで600円\n障害者割引: 無料（全額免除）\n総台数: 70台",
    "sourceUrl": "https://sakai-park.or.jp/access/parking.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27141-005",
    "name": "堺市役所本庁舎駐車場（堺区役所）",
    "address": "大阪府堺市堺区南瓦町3番1号",
    "latitude": 34.573673,
    "longitude": 135.482986,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27141",
    "cityName": "堺市堺区",
    "accessibleSpaceTotal": 13,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "車いす利用者、障害のある方、妊娠中の方、未就学児連れ、松葉杖利用者など移動に配慮が必要な方が市役所・区役所に用務で来庁した場合、用務先窓口で障害者手帳等（身体障害者手帳・療育手帳・精神保健福祉手帳・ミライロID・母子手帳等）と駐車券を提示すると所要時間分の無料券を受け取れる。正面玄関前にゆずりあい駐車区画4区画あり（立体6区画・地下3区画は別途）。展望ロビーや食堂のみの利用は対象外。"
    },
    "accessibleSpaces": [
      {
        "count": 13
      }
    ],
    "notes": "通常料金: 立体駐車場：30分200円／地下駐車場：3時間まで200円、以降3時間ごと200円（開庁日）。閉庁日はいずれも1日最大500円。\n障害者割引: 所要時間分無料（無料券発行）\n総台数: 130台",
    "sourceUrl": "https://www.city.sakai.lg.jp/shisei/gaiyo/annai/siyakusyosimintyuusyajou.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27141-006",
    "name": "フェニーチェ堺駐車場",
    "address": "大阪府堺市堺区翁橋町2-1-1",
    "latitude": 34.572079,
    "longitude": 135.479675,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27141",
    "cityName": "堺市堺区",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害のある方専用の駐車スペース（3台）は無料。専用スペース満車等で敷地内有料駐車スペースを利用した場合は、総合受付窓口で駐車券と障害者手帳等（身体障害者手帳・療育手帳・精神障害者手帳またはミライロID）を提示すると駐車料金無料。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 30分200円（最大料金の適用なし）\n障害者割引: 無料\n総台数: 94台",
    "sourceUrl": "https://www.fenice-sacay.jp/about/barrier-free/",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27141-007",
    "name": "堺市立健康福祉プラザ駐車場",
    "address": "大阪府堺市堺区旭ヶ丘中町4丁3番1号",
    "latitude": 34.558006,
    "longitude": 135.476456,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27141",
    "cityName": "堺市堺区",
    "accessibleSpaceTotal": 15,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳等（身体障害者手帳、障害福祉サービス受給者証、指定難病に係る医療費受給証等）を提示すると1時間超過分を含め駐車料金全額免除。詳細は市民交流センター（072-275-5017）へ問い合わせ。"
    },
    "accessibleSpaces": [
      {
        "count": 15
      }
    ],
    "notes": "通常料金: 1時間まで無料、1時間超2時間まで200円、2時間超3時間まで300円、3時間超4時間まで400円、4時間超5時間まで500円、5時間超閉場まで600円\n障害者割引: 無料（全額免除）\n総台数: 77台",
    "sourceUrl": "http://www.sakai-kfp.info/html/access.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27142-001",
    "name": "堺市中区役所駐車場",
    "address": "大阪府堺市中区深井沢町2470-7",
    "latitude": 34.528427,
    "longitude": 135.498566,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27142",
    "cityName": "堺市中区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳(ミライロID提示可)をお持ちの方は、区役所窓口で手帳等と駐車券を提示し所要時間を申し出ることで、用務で来庁した所要時間分の駐車料金が無料になる。区役所窓口での駐車券提示による一般来庁者向け1時間無料とは別措置。駐車場入口付近に車いす使用者用駐車区画2区画、ゆずりあい駐車区画2区画を設置(大阪府障がい者等用駐車区画利用証制度協力施設)。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 午前8時から午後6時までは最初の1時間200円、以後30分ごとに100円。午後6時から翌午前8時までは60分ごとに100円(夜間最大料金300円)\n障害者割引: 所要時間無料",
    "sourceUrl": "https://www.city.sakai.lg.jp/naka/annai/access_yasashiinihongo/index.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27142-002",
    "name": "堺市教育文化センター(ソフィア・堺)駐車場",
    "address": "大阪府堺市中区深井清水町1426",
    "latitude": 34.534042,
    "longitude": 135.491669,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27142",
    "cityName": "堺市中区",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳をお持ちの方は駐車料金が無料減免。1階の中文化会館事務所で手帳と駐車券を提示して手続きが必要。総台数134台のうち身体障害者用3台、ゆずりあい駐車区画1台を設置。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 入庫後30分は無料、以降30分ごとに100円\n障害者割引: 無料\n総台数: 134台",
    "sourceUrl": "https://www.sofia-sakai.jp/about/access/",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27142-003",
    "name": "原池公園体育館駐車場",
    "address": "大阪府堺市中区八田寺町320",
    "latitude": 34.528957,
    "longitude": 135.478668,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27142",
    "cityName": "堺市中区",
    "accessibleSpaceTotal": 7,
    "discountType": "unknown",
    "discount": {
      "type": "unknown",
      "conditions": "堺市発行の一覧(市内公共施設における駐車場料金)にて身体障害者手帳・療育手帳・精神障害者保健福祉手帳・特定疾患医療受給者証・特定医療費(指定難病)受給者証・小児慢性特定疾病医療受給者証の提示で駐車料金の割引対象施設として掲載。割引の具体的な割合・上限等は施設により異なるため要問合せ(TEL 072-278-1004)。総台数453台のうち身障者用スペース7台を設置。"
    },
    "accessibleSpaces": [
      {
        "count": 7
      }
    ],
    "notes": "通常料金: 普通車:30分まで無料、30分以上2時間まで200円、以降1時間ごとに100円(1日最大1,000円)。バス:1日1回1,500円\n障害者割引: 障害者手帳等提示による駐車料金の割引\n総台数: 453台",
    "sourceUrl": "https://www.city.sakai.lg.jp/kenko/fukushikaigo/shogaifukushi/shiori/shiori/waribiki2.files/2025tyusyajyou.pdf",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27143-001",
    "name": "東区役所駐車場",
    "address": "大阪府堺市東区日置荘原寺町195番地1",
    "latitude": 34.538452,
    "longitude": 135.536819,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27143",
    "cityName": "堺市東区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳(スマートフォンアプリ「ミライロID」の提示も可)をお持ちの方が、区役所に用事で来られた際、行き先の窓口で手帳と駐車券を提示し所要時間をお申し付けることで、その所要時間分の駐車料金が無料になる。1階案内係では手続き不可、行き先窓口でのみ手続き可能。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 平日8時~18時: 最初の1時間200円、以後30分毎に100円(上限設定なし)／平日18時~8時: 60分100円(最大300円)／休日8時~18時: 最初の1時間200円、以後30分毎に100円(最大600円)／休日18時~8時: 60分100円(最大300円)\n障害者割引: 所要時間分無料",
    "sourceUrl": "https://www.city.sakai.lg.jp/higashi/annai/access/parking.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27143-002",
    "name": "初芝体育館駐車場",
    "address": "大阪府堺市東区野尻町221-4",
    "latitude": 34.539497,
    "longitude": 135.522629,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27143",
    "cityName": "堺市東区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳、難病医療受給証、小児慢性特定疾病医療受給証、特定疾患医療受給証、被爆者健康手帳のいずれかを所持する者(または同伴の保護者)が体育館受付にて提示した場合、駐車料金を無料とする。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 入庫から30分まで無料、30分超~2時間200円、2時間超~3時間300円、3時間超~4時間400円、4時間超~5時間500円、5時間超~閉場まで600円\n障害者割引: 無料\n総台数: 98台",
    "sourceUrl": "https://hatsushiba-taiikukan.com/access/",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27143-003",
    "name": "堺市立東文化会館 ベルヒル駐車場(ベルヒル北野田6・7階)",
    "address": "大阪府堺市東区北野田1084-136",
    "latitude": 34.52737,
    "longitude": 135.548828,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27143",
    "cityName": "堺市東区",
    "accessibleSpaceTotal": 4,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳等(身体障害者手帳・療育手帳・精神障害者保健福祉手帳等)をお持ちの方は受付にその旨お申し出いただくと駐車料金が無料になる。大阪府障がい者等専用駐車区画利用認証制度協力施設で、車いす使用者駐車区画(6階・7階各1区画)およびゆずりあい駐車区画(6階・7階各1区画)を設置。当館利用者は必ず6階・7階に駐車すること。"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 30分150円(最初の30分は無料)。当館利用者は受付提示で60%割引(6階・7階駐車の場合のみ、3階駐車は割引対象外)\n障害者割引: 無料",
    "sourceUrl": "https://www.sakai-higashibunka.jp/access/",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27144-001",
    "name": "堺市西区役所駐車場(第一・第二駐車場)",
    "address": "大阪府堺市西区鳳東町6丁600",
    "latitude": 34.535034,
    "longitude": 135.46405,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27144",
    "cityName": "堺市西区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかを持参し、区役所の用務先窓口で手帳と駐車券を提示、所要時間を申し出ることで無料。ミライロID提示でも可。一般来庁者は窓口でサービス券発行を受ければ1時間まで無料。第1・第2駐車場それぞれに車いす使用者用駐車区画1区画、ゆずりあい駐車区画1区画あり(大阪府障がい者等用駐車区画利用証制度協力施設)。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 第一駐車場: 8:00-22:00 最初の1時間200円、以降30分ごとに100円(最大600円)/22:00-8:00 1時間ごとに100円(最大300円)。第二駐車場: 8:00-22:00 最初の1時間200円、以降30分ごとに100円(最大700円)/22:00-8:00 最初の1時間200円、以降30分ごとに100円(最大300円)\n障害者割引: 用務所要時間は無料",
    "sourceUrl": "https://www.city.sakai.lg.jp/nishi/annai/chizu.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27144-002",
    "name": "大仙公園第2駐車場",
    "address": "大阪府堺市西区上野芝町1",
    "latitude": 34.553326,
    "longitude": 135.480316,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27144",
    "cityName": "堺市西区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳・特定疾患医療受給者証・特定医療費(指定難病)受給者証・小児慢性特定疾病医療受給者証の提示で全額免除。運営は公益財団法人堺市公園協会(072-245-0070)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車: 1時間200円、2時間まで300円、3時間まで400円、4時間まで500円、5時間以降600円(1日最大)\n障害者割引: 全額免除\n総台数: 144台",
    "sourceUrl": "https://www.city.sakai.lg.jp/kenko/fukushikaigo/shogaifukushi/shiori/shiori/waribiki2.files/2025tyusyajyou.pdf",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27144-003",
    "name": "家原大池公園体育館前・公園前駐車場",
    "address": "大阪府堺市西区家原寺町1-18-1",
    "latitude": 34.536457,
    "longitude": 135.47084,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27144",
    "cityName": "堺市西区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "体育館受付に駐車券を持参し、身体障害者手帳・療育手帳・精神障害者保健福祉手帳・被爆者健康手帳・特定疾患医療受給者証・特定医療費(指定難病)受給者証・小児慢性特定疾病医療受給者証、またはミライロIDを提示することで駐車料金が全額減免。営業時間8:00-21:30。問合せ: 家原大池体育館 072-271-1718。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初の2時間200円、以降1時間毎100円、最大600円\n障害者割引: 全額減免\n総台数: 109台",
    "sourceUrl": "https://www.city.sakai.lg.jp/kurashi/koen/shokai/ebaraooike.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27144-004",
    "name": "浜寺公園駐車場(第1〜第5駐車場)",
    "address": "大阪府堺市西区浜寺公園町",
    "latitude": 34.544964,
    "longitude": 135.443848,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27144",
    "cityName": "堺市西区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・精神障害者保健福祉手帳・療育手帳・被爆者健康手帳・特定疾患医療受給者証・小児慢性特定疾病医療受給者証等の交付を受けている方が乗車している場合、出庫時に係員へ手帳(またはミライロID)を提示することで駐車料金が免除。運営: 一般財団法人大阪府公園協会。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車 24時間以内1,350円(大型車は4時間以内1,050円、24時間以内2,100円)\n障害者割引: 無料(全額免除)\n総台数: 1085台",
    "sourceUrl": "https://hamadera.osaka-park.or.jp/access/",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27145-001",
    "name": "堺市南区役所駐車場(第1・第2)",
    "address": "大阪府堺市南区桃山台1丁1番1号",
    "latitude": 34.486538,
    "longitude": 135.490402,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27145",
    "cityName": "堺市南区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示で、用務にかかった時間相当分の駐車料金が無料になる無料券が発行される。駐車券を最終用務先窓口に提示し、所要時間分の処理を受ける。大阪府障がい者等用駐車区画利用証制度協力施設で、車いす使用者用駐車区画2区画・ゆずりあい駐車区画2区画を設置。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 来庁者は最初の60分無料。以降は有料(区画・時間帯により異なる、詳細は運営会社へ要確認)\n障害者割引: 無料(来庁の所要時間相当分)\n総台数: 393台",
    "sourceUrl": "https://www.city.sakai.lg.jp/minami/annai/chizu/index.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27145-002",
    "name": "荒山公園(P1・P2・P3・臨時)駐車場",
    "address": "大阪府堺市南区宮山台2-3",
    "latitude": 34.502922,
    "longitude": 135.496719,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27145",
    "cityName": "堺市南区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳・特定疾患医療受給者証・特定医療費(指定難病)受給者証・小児慢性特定疾病医療受給者証の提示で、有料期間中の駐車料金が全額免除。駐車場入口付近の詰所係員に手帳等を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 通常は無料。梅・桜の時期(例年2月上旬〜4月上旬)のみ全駐車場有料: 普通車500円、マイクロバス1,000円、バス(大型・中型)2,000円(利用時間7:30-18:30)\n障害者割引: 全額免除\n総台数: 90台",
    "sourceUrl": "https://www.city.sakai.lg.jp/kenko/fukushikaigo/shogaifukushi/shiori/shiori/waribiki2.files/2025tyusyajyou.pdf",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27145-003",
    "name": "大蓮公園駐車場(タイムズ大蓮公園)",
    "address": "大阪府堺市南区若松台2-5",
    "latitude": 34.49144,
    "longitude": 135.511368,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27145",
    "cityName": "堺市南区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳・特定疾患医療受給者証・特定医療費(指定難病)受給者証・小児慢性特定疾病医療受給者証の提示で全額免除。自動精算機右側の受話器でコールセンターへ減免を申し出た後、手帳を提示。ミライロID対応。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 60分200円(平日は当日1日最大料金700円・24時迄、土日祝は最大料金の適用なし)\n障害者割引: 全額免除\n総台数: 31台",
    "sourceUrl": "https://www.city.sakai.lg.jp/kenko/fukushikaigo/shogaifukushi/shiori/shiori/waribiki2.files/2025tyusyajyou.pdf",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27145-004",
    "name": "堺市立ビッグバン駐車場(第1・第2)",
    "address": "大阪府堺市南区茶山台1-9-1",
    "latitude": 34.493732,
    "longitude": 135.513275,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27145",
    "cityName": "堺市南区",
    "accessibleSpaceTotal": 6,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳など公的機関発行の手帳を提示した利用者は駐車料金無料。第1駐車場に障害者専用区画5台、第2駐車場(入館口まで約400m)に1台設置。"
    },
    "accessibleSpaces": [
      {
        "count": 6
      }
    ],
    "notes": "通常料金: 第1駐車場: 3時間まで700円、以降1時間毎300円(平日当日最大1,000円、土日祝最大料金なし)。第2駐車場: 平日60分200円(当日最大500円)、休日3時間まで700円・以降60分毎300円(最大料金なし)\n障害者割引: 無料\n総台数: 158台",
    "sourceUrl": "https://www.city.sakai.lg.jp/shisei/toshi/senbokusaisei/alacarte/bigbang/index.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27146-001",
    "name": "堺市北区役所・北図書館・北保健センター駐車場",
    "address": "大阪府堺市北区新金岡町5丁1番4号",
    "latitude": 34.565651,
    "longitude": 135.515381,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27146",
    "cityName": "堺市北区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかを窓口で提示(ミライロIDの提示でも可)すると所要時間の駐車料金が無料。一般来庁者(区役所・図書館利用)は駐車券を窓口提示で1時間まで無料。車いす使用者用駐車区画2区画、ゆずりあい駐車区画2区画あり(大阪府障がい者等用駐車区画利用証制度協力施設)。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 最初の1時間200円、以後30分ごとに100円(最大料金の設定なし)\n障害者割引: 無料(所要時間分)",
    "sourceUrl": "https://www.city.sakai.lg.jp/kita/annai/access_kita/index.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27146-002",
    "name": "堺市三国ヶ丘庁舎市民駐車場",
    "address": "大阪府堺市北区百舌鳥赤畑町1丁3番1",
    "latitude": 34.563251,
    "longitude": 135.492233,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27146",
    "cityName": "堺市北区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳を持つ本人または同乗者で用務来庁の場合、用務先窓口で手帳と駐車券を提示すると所要時間分の駐車料金が無料。一般来庁者は用務先窓口で1時間無料券を配布。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 最初の1時間200円、以降30分毎100円(平日18時〜翌8時、土日祝終日は最大料金500円)\n障害者割引: 無料(所要時間分)\n総台数: 20台",
    "sourceUrl": "https://www.city.sakai.lg.jp/shisei/gaiyo/annai/mikunigaokacyousya.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27146-003",
    "name": "金岡公園南駐車場",
    "address": "大阪府堺市北区長曽根町1179-18",
    "latitude": 34.57233,
    "longitude": 135.504929,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27146",
    "cityName": "堺市北区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳・被爆者健康手帳・特定疾患医療受給者証・特定医療費(指定難病)受給者証・小児慢性特定疾病医療受給者証、または障害者手帳アプリ「ミライロID」の提示で駐車料金が全額減免。運営は公益財団法人堺市公園協会(072-245-0070)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車: 2時間まで200円(以降1時間毎100円、1日最大600円)、中型車以上: 1日1回1000円\n障害者割引: 全額減免(無料)\n総台数: 271台",
    "sourceUrl": "https://www.city.sakai.lg.jp/kurashi/koen/shokai/kanaoka.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27146-004",
    "name": "金岡公園北駐車場",
    "address": "大阪府堺市北区長曽根町1179-18",
    "latitude": 34.57233,
    "longitude": 135.504929,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27146",
    "cityName": "堺市北区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳・被爆者健康手帳・特定疾患医療受給者証・特定医療費(指定難病)受給者証・小児慢性特定疾病医療受給者証、または障害者手帳アプリ「ミライロID」の提示で駐車料金が全額減免。運営は公益財団法人堺市公園協会(072-245-0070)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車: 2時間まで200円(以降1時間毎100円、1日最大600円)、中型車以上: 1日1回1000円(土曜・日曜・祝日のみ営業)\n障害者割引: 全額減免(無料)\n総台数: 135台",
    "sourceUrl": "https://www.city.sakai.lg.jp/kurashi/koen/shokai/kanaoka.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27146-005",
    "name": "堺市立のびやか健康館 駐車場",
    "address": "大阪府堺市北区金岡町2760-1",
    "latitude": 34.558048,
    "longitude": 135.527603,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27146",
    "cityName": "堺市北区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳を受付窓口で駐車券とともに提示すると駐車料金が無料。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 入庫から30分無料、3時間まで100円、以降1時間ごと100円\n障害者割引: 無料\n総台数: 220台",
    "sourceUrl": "https://www.cospa-wellness.co.jp/corp/nobiyaka/",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27146-006",
    "name": "大泉緑地 駐車場(第1〜第3駐車場)",
    "address": "大阪府堺市北区金岡町128",
    "latitude": 34.566017,
    "longitude": 135.524185,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27146",
    "cityName": "堺市北区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・精神障害者保健福祉手帳・療育手帳・被爆者健康手帳(またはミライロID)の交付を受けた方が乗車している場合、出庫時に係員へ申し出て手帳等を提示すると駐車料金が全額免除。係員不在時は出庫ゲートのインターホンまたは管理事務所(072-259-0316)へ連絡。運営: 一般財団法人大阪府公園協会。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車: 入庫〜1時間190円/390円(土日祝)、以降段階加算、最大24時間800円(平日)/1,490円(土日祝)。大型バス4時間まで520円(平日)/1,050円(土日祝)\n障害者割引: 全額免除(無料)\n総台数: 787台",
    "sourceUrl": "https://oizumi.osaka-park.or.jp/access/",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27203-001",
    "name": "タイムズ豊中市役所自動車駐車場(豊中市役所来庁者用駐車場)",
    "address": "大阪府豊中市中桜塚3丁目1番1号",
    "latitude": 34.781261,
    "longitude": 135.469757,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27203",
    "cityName": "豊中市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳、療育手帳、小児慢性特定疾病医療受給者証、特定疾患医療受給者証、特定医療費(指定難病)受給者証の交付を受けている人が対象。開庁時(8:45-17:15)は第一庁舎・第二庁舎1階総合受付で手帳等を提示しQR駐車サービス券を受け取る。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 平日8:30-18:00: 最初30分無料、以降30分毎100円/平日夜間18:00-8:30: 60分毎100円(最大200円)/土日祝8:30-18:00: 40分毎200円(1日最大700円)/土日祝夜間18:00-8:30: 60分毎100円(最大200円)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.toyonaka.osaka.jp/shisetsu/shi/raityousyaparking.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27203-002",
    "name": "市立豊中病院駐車場",
    "address": "大阪府豊中市柴原町4丁目14番1号",
    "latitude": 34.802406,
    "longitude": 135.458038,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27203",
    "cityName": "豊中市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳、戦傷病者手帳、被爆者健康手帳等の交付を受けている方が対象。1階総合案内所で駐車券と手帳等を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 外来: 最初1時間無料、以降30分毎100円(1.5時間以降200円)/面会者: 最初30分無料、以降30分毎100円/入退院: 1時間まで無料、以降30分毎100円(上限500円)\n障害者割引: 無料\n総台数: 293台",
    "sourceUrl": "https://www.city.toyonaka.osaka.jp/hp/info/sisetu/parking.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27203-003",
    "name": "エトレとよなか地下駐車場(旧・市立豊中駅西自動車駐車場)",
    "address": "大阪府豊中市玉井町1丁目1-1",
    "latitude": 34.787334,
    "longitude": 135.461502,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27203",
    "cityName": "豊中市",
    "accessibleSpaceTotal": 0,
    "discountType": "unknown",
    "discount": {
      "type": "unknown",
      "conditions": "身体障がい者手帳、療育手帳、精神障がい者保健福祉手帳、戦傷病者手帳、被爆者健康手帳、小児慢性特定疾病医療受給者証、特定疾患医療受給者証、特定医療費(指定難病)受給者証の交付を受けている方が運転または同乗している場合が対象。駐車券を精算機に通す前に駐車場係員へ手帳等を提示。運営はエヌエイチサービス株式会社(旧市営駐車場、市の減免ページからも案内あり)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 基本料金30分200円(6:30-23:00)/当日最大1,000円(6:30-24:00)/夜間600円(24:00-6:30、入出庫不可)\n障害者割引: 料金の50%減額",
    "sourceUrl": "https://etre-parking.com/price/",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27203-004",
    "name": "豊中市立文化芸術センター駐車場",
    "address": "大阪府豊中市曽根東町3-7-2",
    "latitude": 34.769993,
    "longitude": 135.469788,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27203",
    "cityName": "豊中市",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳・戦傷病者手帳・被爆者健康手帳・小児慢性特定疾病医療受給者証・特定医療費(指定難病)受給者証の交付を受けている方が対象(ミライロID可)。1階事務所で駐車券と証明書を本人が提示。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 8:00-22:30/最初30分無料、以降30分毎100円\n障害者割引: 全額免除(無料)\n総台数: 64台",
    "sourceUrl": "https://www.toyonaka-hall.jp/faq/",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27203-005",
    "name": "すこやかプラザ駐車場(とよなかハートパレット有料駐車場)",
    "address": "大阪府豊中市岡上の町2丁目1番15号",
    "latitude": 34.783966,
    "longitude": 135.464203,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27203",
    "cityName": "豊中市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 4,
      "conditions": "公共施設(すこやかプラザ)利用時のみ4時間無料。身体障害者手帳、精神障害者保健福祉手帳、療育手帳、特定疾患医療受給者証、特定医療費(指定難病)受給者証等の交付を受けている方が対象(ミライロID可)。1階窓口で駐車券と手帳等を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 不明(時間貸有料駐車場)\n障害者割引: 4時間無料",
    "sourceUrl": "https://www.city.toyonaka.osaka.jp/kenko/shougai/syogaifukushi_shimin/keigen/sonota_waribiki/tyuusyajouryoukinn.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27203-006",
    "name": "青少年交流文化館いぶき駐車場(武道館ひびき・豊島体育館と共用)",
    "address": "大阪府豊中市服部西町4丁目13番1号",
    "latitude": 34.763241,
    "longitude": 135.466583,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27203",
    "cityName": "豊中市",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "市の駐車場利用料金割引制度における「文化・体育施設駐車場(体育館・プール・武道館・いぶき等)」に該当。身体障害者手帳、療育手帳、精神障害者保健福祉手帳、難病患者医療助成受給確認証の所持者が運転または同乗している自動車が対象。各施設総合案内所で手続き。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 最初30分無料、以降30分毎100円\n障害者割引: 無料\n総台数: 54台",
    "sourceUrl": "https://www.city.toyonaka.osaka.jp/kenko/shougai/syogaifukushi_shimin/keigen/sonota_waribiki/tyuusyajouryoukinn.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27203-007",
    "name": "二ノ切池公園自動車駐車場",
    "address": "大阪府豊中市東豊中町5丁目地内",
    "latitude": 34.795425,
    "longitude": 135.487045,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27203",
    "cityName": "豊中市",
    "accessibleSpaceTotal": 4,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳等の交付を受けている方が運転または同乗している場合、駐車料金無料(ミライロID対応)。特定医療費(指定難病)受給者証・小児慢性特定疾病医療受給者証保持者も対象。"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 24時間利用可/最初30分無料、以降30分毎100円、夜間最大料金(20:00-8:00)500円\n障害者割引: 無料\n総台数: 79台",
    "sourceUrl": "https://www.city.toyonaka.osaka.jp/machi/kouen_midori/kouen_joho/kouentyusyajyo.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27203-008",
    "name": "豊島公園自動車駐車場",
    "address": "大阪府豊中市曽根南町1丁目地内",
    "latitude": 34.767139,
    "longitude": 135.469269,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27203",
    "cityName": "豊中市",
    "accessibleSpaceTotal": 4,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳等の交付を受けている方が運転または同乗している場合、駐車料金無料(ミライロID対応)。特定医療費(指定難病)受給者証・小児慢性特定疾病医療受給者証保持者も対象。"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 5:00-22:00/最初30分無料、以降30分毎100円、夜間最大料金(20:00-8:00)500円\n障害者割引: 無料\n総台数: 105台",
    "sourceUrl": "https://www.city.toyonaka.osaka.jp/machi/kouen_midori/kouen_joho/kouentyusyajyo.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27203-009",
    "name": "ふれあい緑地(北)自動車駐車場",
    "address": "大阪府豊中市利倉東1丁目地内",
    "latitude": 34.764668,
    "longitude": 135.46405,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27203",
    "cityName": "豊中市",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳等の交付を受けている方が運転または同乗している場合、駐車料金無料(ミライロID対応)。特定医療費(指定難病)受給者証・小児慢性特定疾病医療受給者証保持者も対象。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 8:00-20:00/最初30分無料、以降30分毎100円\n障害者割引: 無料\n総台数: 61台",
    "sourceUrl": "https://www.city.toyonaka.osaka.jp/machi/kouen_midori/kouen_joho/kouentyusyajyo.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27203-010",
    "name": "ふれあい緑地(中央)自動車駐車場",
    "address": "大阪府豊中市服部西町5丁目地内",
    "latitude": 34.761509,
    "longitude": 135.463623,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27203",
    "cityName": "豊中市",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳等の交付を受けている方が運転または同乗している場合、駐車料金無料(ミライロID対応)。特定医療費(指定難病)受給者証・小児慢性特定疾病医療受給者証保持者も対象。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 7:00-21:00/最初30分無料、以降30分毎100円\n障害者割引: 無料\n総台数: 82台",
    "sourceUrl": "https://www.city.toyonaka.osaka.jp/machi/kouen_midori/kouen_joho/kouentyusyajyo.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27203-011",
    "name": "ふれあい緑地(南)自動車駐車場",
    "address": "大阪府豊中市服部寿町4丁目地内",
    "latitude": 34.75919,
    "longitude": 135.466736,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27203",
    "cityName": "豊中市",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳等の交付を受けている方が運転または同乗している場合、駐車料金無料(ミライロID対応)。特定医療費(指定難病)受給者証・小児慢性特定疾病医療受給者証保持者も対象。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 8:00-20:00/最初30分無料、以降30分毎100円\n障害者割引: 無料\n総台数: 94台",
    "sourceUrl": "https://www.city.toyonaka.osaka.jp/machi/kouen_midori/kouen_joho/kouentyusyajyo.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27203-012",
    "name": "千里中央公園自動車駐車場",
    "address": "大阪府豊中市新千里東町3丁目地内",
    "latitude": 34.812321,
    "longitude": 135.503952,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27203",
    "cityName": "豊中市",
    "accessibleSpaceTotal": 4,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳等の交付を受けている方が運転または同乗している場合、駐車料金無料(ミライロID対応)。特定医療費(指定難病)受給者証・小児慢性特定疾病医療受給者証保持者も対象。管理運営は株式会社カンソー。"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 24時間利用可/最初30分無料、以降30分毎100円、夜間最大料金(20:00-8:00)500円\n障害者割引: 無料\n総台数: 144台",
    "sourceUrl": "https://www.city.toyonaka.osaka.jp/machi/kouen_midori/kouen_joho/kouentyusyajyo.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27204-001",
    "name": "池田市立駐車場(池田ステーションN地下1階)",
    "address": "大阪府池田市菅原町3-1(池田ステーションN地下1階)",
    "latitude": 34.821121,
    "longitude": 135.427109,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27204",
    "cityName": "池田市",
    "accessibleSpaceTotal": 1,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "障がいのある方が運転又は同乗している場合、身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示(ミライロID利用可)で、駐車料金が2時間まで無料。場内防災センター等で提示。2時間超過分は通常料金。夜間(23時以降)の入庫不可。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 1時間以内300円、1時間超20分ごとに100円、昼間上限(8時~23時)1,200円、夜間上限(23時~8時)900円\n障害者割引: 駐車料金が2時間まで無料\n総台数: 28台",
    "sourceUrl": "https://www.city.ikeda.osaka.jp/soshiki/toshiseibibu/toshiseisaku/shieichushajo/1585901565725.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27204-002",
    "name": "池田市立図書館 サンシティ池田駐車場(タイムズサンシティ池田)",
    "address": "大阪府池田市呉服町1-1",
    "latitude": 34.821445,
    "longitude": 135.425156,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27204",
    "cityName": "池田市",
    "accessibleSpaceTotal": 0,
    "discountType": "unknown",
    "discount": {
      "type": "unknown",
      "conditions": "身体の障がいが原因で車による来館が必要な池田市立図書館利用者が対象。身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示(ミライロID利用可)で駐車割引券を発行。駐車券及び手帳を図書館カウンターへ提示すること。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 平日7時~23時:30分200円(最大1,200円)、土日祝7時~23時:30分200円(最大1,300円)、23時~7時:60分100円\n障害者割引: 図書館利用時間により30分または1時間分の駐車割引券を発行\n総台数: 75台",
    "sourceUrl": "https://lib-ikedacity.jp/disability/parking.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27204-003",
    "name": "ツナガリエ石橋 石橋西パーキング",
    "address": "大阪府池田市石橋1丁目9-10",
    "latitude": 34.806507,
    "longitude": 135.443268,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27204",
    "cityName": "池田市",
    "accessibleSpaceTotal": 0,
    "discountType": "unknown",
    "discount": {
      "type": "unknown",
      "conditions": "ツナガリエ石橋(ダイバーシティセンター)の利用に伴う駐車。障がい者手帳(身体障害者手帳・療育手帳・精神障がい者保健福祉手帳、ミライロID可)、またはけが・妊産婦の方が対象。障害者手帳又はミライロIDと駐車券・駐車証明書を提示し、申込書に記入。詳細はダイバーシティセンター(072-768-8020)へ。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 利用時間により30分または60分の駐車券を交付",
    "sourceUrl": "https://www.city.ikeda.osaka.jp/soshiki/siminseikatsu/jinkenbunka/diversity/16279.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27205-001",
    "name": "吹田市役所本庁舎駐車場",
    "address": "大阪府吹田市泉町1丁目3番40号",
    "latitude": 34.759232,
    "longitude": 135.516708,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27205",
    "cityName": "吹田市",
    "accessibleSpaceTotal": 6,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "手帳の交付を受けている方が運転または同乗する車両が対象。出入口に配置している警備員に手帳等を提示し確認を受ける。市役所での用務が1時間を超えた場合や閉庁日等の利用時は、最後に立ち寄った行先課へ申し出ると利用時間に応じた追加の割引処理あり。"
    },
    "accessibleSpaces": [
      {
        "count": 6
      }
    ],
    "notes": "通常料金: 開庁日(月〜金)午前8時30分〜午後6時出場:最初の1時間無料、以降30分ごとに250円。午後6時〜午後10時出場および閉庁日(土日祝・12/29〜1/3):30分ごとに250円。最大料金設定なし。\n障害者割引: 身体障害者手帳・精神障害者保健福祉手帳・療育手帳の提示で3時間まで駐車料金無料(以降は通常料金)\n総台数: 105台",
    "sourceUrl": "https://www.city.suita.osaka.jp/shisei/1018754/1020203/1037766.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27205-002",
    "name": "子育て青少年拠点夢つながり未来館(ゆいぴあ)駐車場",
    "address": "大阪府吹田市山田西4丁目2番43号",
    "latitude": 34.804256,
    "longitude": 135.51622,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27205",
    "cityName": "吹田市",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "施設利用者で障がい者手帳をお持ちの方が対象。精算機で受付券を発券し、3階貸室受付窓口で手帳(またはミライロID)とともに提示すると無料。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 20分ごとに100円(1日の上限なし)\n障害者割引: 障がい者手帳提示で駐車料金無料(無料券発行)\n総台数: 20台",
    "sourceUrl": "https://www.city.suita.osaka.jp/kosodate/1018331/1018260/1013870.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27205-003",
    "name": "千里ニュータウンプラザ駐車場",
    "address": "大阪府吹田市津雲台1丁目2番1号",
    "latitude": 34.794083,
    "longitude": 135.508316,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27205",
    "cityName": "吹田市",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・精神障害者保健福祉手帳・療育手帳の交付を受けている方が運転または同乗する場合、出入口に配置している警備員に手帳等を提示し確認を受ける。同施設内の千里図書館・千里市民センター利用者にも適用。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 自動車機械式駐車場、30分まで無料、以降30分ごとに200円。利用時間8時30分〜22時30分。\n障害者割引: 障害者手帳等提示で駐車料金無料\n総台数: 68台",
    "sourceUrl": "https://www.city.suita.osaka.jp/shisei/shisetsu/1019110/1018385/1006616.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27205-004",
    "name": "千里南公園駐車場",
    "address": "大阪府吹田市津雲台1丁目3番",
    "latitude": 34.796333,
    "longitude": 135.508972,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27205",
    "cityName": "吹田市",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "駐車場出口に設置の直通電話から手帳番号を申告する。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 最初の30分無料。8時〜22時は30分ごとに100円。22時〜翌8時は60分ごとに100円(夜間最大料金400円)。\n障害者割引: 障がい者手帳保持者は終日無料\n総台数: 48台",
    "sourceUrl": "https://www.city.suita.osaka.jp/sangyo/1018152/1018167/1018168/1028864/index.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27205-005",
    "name": "万博記念公園駐車場(東・南・中央・西・日本庭園前)",
    "address": "大阪府吹田市千里万博公園1-1",
    "latitude": 34.809277,
    "longitude": 135.524734,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27205",
    "cityName": "吹田市",
    "accessibleSpaceTotal": 12,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳、療育手帳、精神障がい者保健福祉手帳、被爆者健康手帳、特定医療費(指定難病)受給者証、小児慢性特定疾病医療受給者証の交付を受けた方が対象。窓口で手帳等と駐車券を提示(事前申請の場合は来園日7日前〔土日祝除く〕までに申請可)。ただし特別支援学校以外の学校団体利用の大型車両等は対象外。テニスコート・フットサルコート利用者に限り西駐車場は無料(別条件)。"
    },
    "accessibleSpaces": [
      {
        "count": 12
      }
    ],
    "notes": "通常料金: 平日:普通車2時間まで410円、以降加算、4時間超24時間まで1,100円。土日祝:2時間まで620円、4時間超24時間まで1,600円(マイクロバス・大型車・二輪車は別料金)。\n障害者割引: 身体障がい者手帳等提示で駐車場使用料無料\n総台数: 982台",
    "sourceUrl": "https://www.expo70-park.jp/guide/fee/",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27205-006",
    "name": "吹田市立中央図書館駐車場",
    "address": "大阪府吹田市出口町18-9",
    "latitude": 34.764126,
    "longitude": 135.515961,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27205",
    "cityName": "吹田市",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳等をお持ちの方は駐車券を1階カウンターへ持参。6台中1台が障がい者用スペースで無料。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 最初の30分無料、以降30分ごとに100円、最大700円(午前10時〜午後8時入庫時)\n障害者割引: 障がい者用駐車スペース(1台)利用は無料\n総台数: 6台",
    "sourceUrl": "https://www.lib.suita.osaka.jp/facilities/010/index.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27206-001",
    "name": "泉大津市立駐車場",
    "address": "大阪府泉大津市旭町20番6号",
    "latitude": 34.502491,
    "longitude": 135.407867,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27206",
    "cityName": "泉大津市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "精算時に(1)身体障害者手帳、(2)精神障害者保健福祉手帳、(3)療育手帳のいずれかを提示。定期料金には割引適用なし。運営はパラカ株式会社(パラカコールセンター 0120-100-608)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 終日30分毎200円、駐車後24時間最大料金600円、午後8時から午前8時の時間最大料金400円\n障害者割引: 駐車料金の5割減額(10円未満の端数は切り捨て)",
    "sourceUrl": "https://www.city.izumiotsu.lg.jp/kakuka/tosiseisakubu/doboku/osirase/1538296817167.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27207-001",
    "name": "高槻駅南立体駐車場",
    "address": "大阪府高槻市紺屋町1番2号",
    "latitude": 34.851776,
    "longitude": 135.618851,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27207",
    "cityName": "高槻市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障がい者手帳・療育手帳・精神障がい者保健福祉手帳の交付を受けた方が運転もしくは同乗している車両が対象。精算機にミライロIDのQRコードをかざす、精算機のインターフォンでカメラに手帳を提示する、または駐車場係員に手帳を提示する。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 全日20分ごとに100円(夜間最大600円)\n障害者割引: 有料分の半額(10円未満切捨て)\n総台数: 150台",
    "sourceUrl": "https://www.city.takatsuki.osaka.jp/soshiki/52/3937.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27207-002",
    "name": "桃園町駐車場",
    "address": "大阪府高槻市桃園町3番1号",
    "latitude": 34.846581,
    "longitude": 135.616714,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27207",
    "cityName": "高槻市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障がい者手帳・療育手帳・精神障がい者保健福祉手帳の交付を受けた方が運転もしくは同乗している車両が対象。精算機にミライロIDのQRコードをかざす、精算機のインターフォンでカメラに手帳を提示する、または駐車場係員に手帳を提示する。市役所本庁舎北側に位置し、行政手続き来庁者は別途1時間無料あり。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 全日20分ごとに100円(夜間最大600円)\n障害者割引: 有料分の半額(10円未満切捨て)\n総台数: 177台",
    "sourceUrl": "https://www.city.takatsuki.osaka.jp/soshiki/52/3937.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27207-003",
    "name": "高槻駅北地下駐車場",
    "address": "大阪府高槻市芥川町一丁目2番",
    "latitude": 34.851784,
    "longitude": 135.616257,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27207",
    "cityName": "高槻市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障がい者手帳・療育手帳・精神障がい者保健福祉手帳の交付を受けた方が運転もしくは同乗している車両が対象。精算機にミライロIDのQRコードをかざす、精算機のインターフォンでカメラに手帳を提示する、または駐車場係員に手帳を提示する。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 全日20分ごとに100円(夜間最大600円)\n障害者割引: 有料分の半額(10円未満切捨て)\n総台数: 441台",
    "sourceUrl": "https://www.city.takatsuki.osaka.jp/soshiki/52/3937.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27207-004",
    "name": "萩谷総合公園駐車場",
    "address": "大阪府高槻市大字萩谷地内",
    "latitude": 34.89679,
    "longitude": 135.576736,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27207",
    "cityName": "高槻市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障がい者手帳・療育手帳・精神障がい者保健福祉手帳の交付を受けた方が運転もしくは同乗している車両が対象。駐車場設置の電話(インターフォン)使用でカメラに手帳を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通自動車 1時間までごとに100円(3時間超は400円上限)\n障害者割引: 有料分の半額(10円未満切捨て)\n総台数: 350台",
    "sourceUrl": "https://www.city.takatsuki.osaka.jp/soshiki/54/5532.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27207-005",
    "name": "古曽部防災公園駐車場",
    "address": "大阪府高槻市古曽部町3丁目地内",
    "latitude": 34.861816,
    "longitude": 135.622482,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27207",
    "cityName": "高槻市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障がい者手帳・療育手帳・精神障がい者保健福祉手帳の交付を受けた方が運転もしくは同乗している車両が対象。駐車場設置の電話(インターフォン)使用でカメラに手帳を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通自動車 1時間までごとに100円(3時間超は400円上限)\n障害者割引: 有料分の半額(10円未満切捨て)\n総台数: 84台",
    "sourceUrl": "https://www.city.takatsuki.osaka.jp/soshiki/54/5532.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27207-006",
    "name": "芥川緑地駐車場",
    "address": "大阪府高槻市南平台5丁目地内",
    "latitude": 34.86507,
    "longitude": 135.589325,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27207",
    "cityName": "高槻市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障がい者手帳・療育手帳・精神障がい者保健福祉手帳の交付を受けた方が運転もしくは同乗している車両が対象。精算前に駐車場詰所へ手帳を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通自動車 1日1時間までごとに100円(3時間超は400円上限)\n障害者割引: 有料分の半額(10円未満切捨て)\n総台数: 119台",
    "sourceUrl": "https://www.city.takatsuki.osaka.jp/soshiki/54/5532.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27207-007",
    "name": "安満遺跡公園駐車場",
    "address": "大阪府高槻市八丁畷町12番3号",
    "latitude": 34.854542,
    "longitude": 135.629242,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27207",
    "cityName": "高槻市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障がい者手帳、療育手帳(または知的障がい判定書)、精神障がい者保健福祉手帳、もしくはミライロIDの提示が必要。入庫時の駐車券と証明書類を持参し、パークセンター内公園事務室(9時~19時)で手続き。2023年4月1日より高槻市外在住者も対象に拡大。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 100円/30分(1日最大料金800円)\n障害者割引: 利用料金の5割引\n総台数: 416台",
    "sourceUrl": "https://www.seibu-la.co.jp/park/ama-sitepark/about/",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27207-008",
    "name": "高槻城公園芸術文化劇場 南館地下駐車場",
    "address": "大阪府高槻市野見町6番8号",
    "latitude": 34.844921,
    "longitude": 135.62178,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27207",
    "cityName": "高槻市",
    "accessibleSpaceTotal": 3,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "障がい者手帳またはミライロIDの提示が必要。出庫前に1階劇場事務室または地下1階防災センターで手続き。車いす区画3台あり。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 30分200円(1日最大1,600円)\n障害者割引: 記載料金の半額\n総台数: 150台",
    "sourceUrl": "https://www.takatsuki-bsj.jp/tat/facility/accessibility",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27208-001",
    "name": "貝塚市役所第1駐車場",
    "address": "大阪府貝塚市畠中1丁目17番1号",
    "latitude": 34.437611,
    "longitude": 135.358231,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27208",
    "cityName": "貝塚市",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳を提示された方は、施設利用者以外も無料。初期無料時間を超える場合は本庁舎総合案内(開庁時間中)・当直室(時間外)で駐車券のテナントチェッカー処理が必要。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 60分200円(7:00~22:00、初期無料4時間)/60分100円(22:00~7:00、初期無料30分)、24時間最大料金3,000円\n障害者割引: 無料\n総台数: 112台",
    "sourceUrl": "https://www.city.kaizuka.lg.jp/kakuka/soumu/shomu/topics/chuusyajyoyuuryouka.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27208-002",
    "name": "貝塚市役所第2駐車場",
    "address": "大阪府貝塚市畠中1丁目17番1号",
    "latitude": 34.437611,
    "longitude": 135.358231,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27208",
    "cityName": "貝塚市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳を提示された方は、施設利用者以外も無料。初期無料時間を超える場合は本庁舎総合案内(開庁時間中)・当直室(時間外)で駐車券のテナントチェッカー処理が必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 60分200円(7:00~22:00、初期無料4時間)/60分100円(22:00~7:00、初期無料30分)、24時間最大料金3,000円\n障害者割引: 無料\n総台数: 53台",
    "sourceUrl": "https://www.city.kaizuka.lg.jp/kakuka/soumu/shomu/topics/chuusyajyoyuuryouka.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27208-003",
    "name": "貝塚市民文化会館(コスモスシアター)駐車場",
    "address": "大阪府貝塚市畠中1丁目18番1号",
    "latitude": 34.437508,
    "longitude": 135.359283,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27208",
    "cityName": "貝塚市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳を提示された方は、施設利用者以外も無料。初期無料時間を超える場合はコスモスシアター内・文化振興事業団事務所で駐車券処理が必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 60分200円(7:00~22:00、初期無料4時間)/60分100円(22:00~7:00、初期無料30分)、24時間最大料金3,000円\n障害者割引: 無料",
    "sourceUrl": "https://www.city.kaizuka.lg.jp/kakuka/soumu/shomu/topics/chuusyajyoyuuryouka.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27208-004",
    "name": "保健・福祉合同庁舎駐車場",
    "address": "大阪府貝塚市畠中1丁目18番8号",
    "latitude": 34.437019,
    "longitude": 135.359711,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27208",
    "cityName": "貝塚市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳を提示された方は、施設利用者以外も無料。初期無料時間を超える場合は健康推進課カウンターで駐車券処理が必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 60分200円(7:00~22:00、初期無料4時間)/60分100円(22:00~7:00、初期無料30分)、24時間最大料金3,000円\n障害者割引: 無料",
    "sourceUrl": "https://www.city.kaizuka.lg.jp/kakuka/soumu/shomu/topics/chuusyajyoyuuryouka.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27208-005",
    "name": "貝塚市立総合体育館駐車場",
    "address": "大阪府貝塚市畠中1丁目13番1号",
    "latitude": 34.437244,
    "longitude": 135.359863,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27208",
    "cityName": "貝塚市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳を提示された方は、施設利用者以外も無料。初期無料時間を超える場合は総合体育館受付で駐車券処理が必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 60分200円(7:00~22:00、初期無料4時間)/60分100円(22:00~7:00、初期無料30分)、24時間最大料金3,000円\n障害者割引: 無料",
    "sourceUrl": "https://www.city.kaizuka.lg.jp/kakuka/soumu/shomu/topics/chuusyajyoyuuryouka.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27208-006",
    "name": "二色の浜公園駐車場(第1~第4駐車場)",
    "address": "大阪府貝塚市澤859-1",
    "latitude": 34.435703,
    "longitude": 135.335373,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27208",
    "cityName": "貝塚市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・精神障害者保健福祉手帳・療育手帳・被爆者健康手帳・特定疾患医療受給者証・小児慢性特定疾患医療受診券のいずれか(原本またはミライロID)を入庫時に係員へ提示することで利用料金を免除。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車 平日1時間200円/土日祝1時間300円(入庫後最大料金640円)\n障害者割引: 無料(免除)",
    "sourceUrl": "https://nishikinohama-park.com/download/shinsei/3/techo.pdf",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27208-007",
    "name": "市立貝塚病院駐車場",
    "address": "大阪府貝塚市堀3丁目10番20号",
    "latitude": 34.449715,
    "longitude": 135.360535,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27208",
    "cityName": "貝塚市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかをお持ちの方は、来院の際に総合案内へお申し出ることで駐車場料金が無料。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://www.hosp.kaizuka.osaka.jp/hospital/access/index.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27209-001",
    "name": "守口市役所来庁者駐車場",
    "address": "大阪府守口市京阪本通2-5-5",
    "latitude": 34.735928,
    "longitude": 135.561172,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27209",
    "cityName": "守口市",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳、特定医療費(指定難病)受給者証、小児慢性特定疾病医療受給者証のいずれかを所持し、用務等で駐車場を利用する場合が対象。窓口で駐車券に押印を受けたうえで、手帳等とあわせて庁舎1階総合案内に提示し無料処理を受ける。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 30分150円(最大料金なし)。庁舎内駐車場は入庫後60分まで無料、以降30分ごとに150円。西側駐車場は平日8時~18時のみ同様の割引あり。\n障害者割引: 利用時間全額無料\n総台数: 74台",
    "sourceUrl": "https://www.city.moriguchi.osaka.jp/kakukanoannai/somubu/soumuka/cyousya/16572.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27209-002",
    "name": "守口市立図書館駐車場",
    "address": "大阪府守口市大日町2丁目14番10号",
    "latitude": 34.751598,
    "longitude": 135.57753,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27209",
    "cityName": "守口市",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳、特定医療費(指定難病)受給者証、小児慢性特定疾病医療受給者証のいずれかを所持する方が対象。清算前に図書館カウンタースタッフへ声をかけ、対象の手帳・受給者証を提示することで割引処理(無料)を受けられる。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 初めの1時間無料、以降30分ごとに150円(利用可能時間8:45~21:15)\n障害者割引: 無料\n総台数: 24台",
    "sourceUrl": "https://lib-moriguchi.jp/guide/",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27210-001",
    "name": "枚方市役所駐車場",
    "address": "大阪府枚方市大垣内町2丁目1番20号",
    "latitude": 34.814358,
    "longitude": 135.650635,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27210",
    "cityName": "枚方市",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳またはミライロIDの所持者。窓口で提示。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 平日8:30~18:00は10分毎100円、平日18:00~翌8:30は60分毎100円(最大300円)、土日祝8:30~18:00は30分毎200円(最大700円)、土日祝18:00~翌8:30は60分毎100円(最大300円)\n障害者割引: 所要に要した全時間無料\n総台数: 71台",
    "sourceUrl": "https://www.city.hirakata.osaka.jp/0000008542.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27210-002",
    "name": "市営岡東町自動車駐車場",
    "address": "大阪府枚方市岡東町14-49",
    "latitude": 34.814304,
    "longitude": 135.648956,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27210",
    "cityName": "枚方市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳、療育手帳または精神障害者保健福祉手帳(またはミライロID)の交付を受けた本人が運転するか同乗している場合。使用料精算前に駐車場管理事務所で手帳を係員に提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分ごとに100円、当日最大1,400円(7:00~24:00)\n障害者割引: 一時使用料および定期使用料が半額",
    "sourceUrl": "https://www.city.hirakata.osaka.jp/0000002692.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27210-003",
    "name": "枚方市総合文化芸術センター駐車場(第1~第3駐車場)",
    "address": "大阪府枚方市新町2-1-60",
    "latitude": 34.818077,
    "longitude": 135.645584,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27210",
    "cityName": "枚方市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳、療育手帳の所持者、または知的障害者更生相談所・児童相談所・精神保健指定医により知的障害があると判定された方(ミライロID可)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 入庫後30分無料、以降1時間毎200円(入庫後1時間以内利用時は500円となる場合あり)\n障害者割引: 全額減免(無料)\n総台数: 150台",
    "sourceUrl": "https://hirakata-arts.jp/news/2021/11/detail_540.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27210-004",
    "name": "王仁公園駐車場",
    "address": "大阪府枚方市王仁公園1-1",
    "latitude": 34.817825,
    "longitude": 135.705948,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27210",
    "cityName": "枚方市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "運転者または同乗者が障害者手帳(身体・精神・知的・療育)を提示。事務所開所時間内(9~17時)は窓口で手帳と駐車券を提示、閉所時間帯(17時~翌9時)はゲートのカメラに手帳を提示。フラップ式(運動広場横)は対応不可。指定管理者:京阪ひらかたスポーツみどりグループ。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 9:00~18:00は入庫後30分無料、以降30分毎100円(24時間最大500円)。18:00~9:00は入庫後30分無料、以降60分毎100円(24時間最大500円)\n障害者割引: 使用料免除(無料)",
    "sourceUrl": "https://gomypark.com/wp-content/uploads/2023/06/b072456e059fd8379456ee8c95aa8775.pdf",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27210-005",
    "name": "中の池公園駐車場",
    "address": "大阪府枚方市東山2",
    "latitude": 34.848587,
    "longitude": 135.691498,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27210",
    "cityName": "枚方市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "運転者または同乗者が障害者手帳(身体・精神・知的・療育)をゲートのカメラに提示することで免除。指定管理者:京阪ひらかたスポーツみどりグループ。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 9:00~18:00は入庫後30分無料、以降30分毎100円(24時間最大500円)。18:00~9:00は入庫後30分無料、以降60分毎100円(24時間最大500円)\n障害者割引: 使用料免除(無料)\n総台数: 43台",
    "sourceUrl": "https://gomypark.com/wp-content/uploads/2023/06/b072456e059fd8379456ee8c95aa8775.pdf",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27210-006",
    "name": "ラポールひらかた地下駐車場(枚方市立総合福祉会館)",
    "address": "大阪府枚方市新町2丁目1番35号",
    "latitude": 34.816734,
    "longitude": 135.646515,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27210",
    "cityName": "枚方市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳、戦傷病者手帳、被爆者健康手帳、小児慢性特定疾患医療受給者証、特定疾患医療受給者証、特定医療費(指定難病)受給者証、介護保険被保険者証(要介護3以上)のいずれかを入口で係員に提示。利用時間8:55~21:45。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 自動車以外での移動が困難な方専用の駐車場のため一般開放なし(一般料金設定なし)\n障害者割引: 無料\n総台数: 17台",
    "sourceUrl": "https://www.hirakata-shakyo.net/wp-content/themes/rapport/pdf/rapport-access.pdf",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27210-007",
    "name": "市立ひらかた病院・枚方市保健センター駐車場",
    "address": "大阪府枚方市禁野本町2-14-1",
    "latitude": 34.819572,
    "longitude": 135.6577,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27210",
    "cityName": "枚方市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳、戦傷病者手帳、被爆者手帳、小児慢性特定疾患医療受給者証、特定疾患医療受給者証、特定医療費(指定難病)受給者証の所持者は無料。会計窓口等で駐車券を提示し割引処理を受ける。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 一般利用者(お見舞い等):7:00~21:00は60分毎300円、21:00~7:00は60分毎100円(最初の30分無料)、平日当日最大1,200円、土日祝当日最大600円。外来受診者:当日1日200円(最初の30分無料)\n障害者割引: 無料",
    "sourceUrl": "https://hirakatacity-hp.osaka.jp/other/access/",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27211-001",
    "name": "茨木市役所駐車場",
    "address": "大阪府茨木市駅前三丁目8番13号",
    "latitude": 34.816399,
    "longitude": 135.568848,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27211",
    "cityName": "茨木市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかを提示、または市長等が交付する「減免者等駐車場専用カード」を利用。市内外在住問わず利用可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00~20:00 30分100円、20:00~8:00 60分100円、24時間最大料金1,200円(2日目以降繰り返し)。来庁者は1階受付の割引ライターに駐車券を通せば30分無料。\n障害者割引: 利用料金の5割減免",
    "sourceUrl": "https://www.city.ibaraki.osaka.jp/office/hobun/reiki_int/reiki_honbun/k213RG00000671.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27211-002",
    "name": "茨木市中央公園駐車場",
    "address": "大阪府茨木市駅前四丁目8番38号",
    "latitude": 34.818096,
    "longitude": 135.569351,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27211",
    "cityName": "茨木市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかを提示、または「減免者等駐車場専用カード」を利用。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00~20:00 30分100円、20:00~8:00 60分100円、24時間最大料金1,200円(2日目以降繰り返し)。定期契約は月15,000円。\n障害者割引: 利用料金の5割減免",
    "sourceUrl": "https://www.city.ibaraki.osaka.jp/office/hobun/reiki_int/reiki_honbun/k213RG00000671.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27211-003",
    "name": "JR茨木北駐車場",
    "address": "大阪府茨木市春日一丁目4番5号",
    "latitude": 34.816975,
    "longitude": 135.562073,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27211",
    "cityName": "茨木市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかを提示、または「減免者等駐車場専用カード」を利用。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00~20:00 30分100円、24時間最大料金1,200円(2日目以降繰り返し)。\n障害者割引: 利用料金の5割減免",
    "sourceUrl": "https://www.city.ibaraki.osaka.jp/office/hobun/reiki_int/reiki_honbun/k213RG00000671.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27211-004",
    "name": "JR駅前ビル駐車場",
    "address": "大阪府茨木市西駅前町4番112号",
    "latitude": 34.816601,
    "longitude": 135.561981,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27211",
    "cityName": "茨木市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかを提示、または「減免者等駐車場専用カード」を利用。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00~20:00 30分100円、20:00~8:00 60分100円、24時間最大料金1,200円(2日目以降繰り返し)。定期契約は月15,000円。\n障害者割引: 利用料金の5割減免",
    "sourceUrl": "https://www.city.ibaraki.osaka.jp/office/hobun/reiki_int/reiki_honbun/k213RG00000671.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27211-005",
    "name": "阪急茨木西口駐車場",
    "address": "大阪府茨木市永代町2番19号",
    "latitude": 34.816376,
    "longitude": 135.574753,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27211",
    "cityName": "茨木市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかを提示、または「減免者等駐車場専用カード」を利用。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00~20:00 30分100円、20:00~8:00 60分100円、24時間最大料金1,200円(2日目以降繰り返し)。\n障害者割引: 利用料金の5割減免",
    "sourceUrl": "https://www.city.ibaraki.osaka.jp/office/hobun/reiki_int/reiki_honbun/k213RG00000671.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27211-006",
    "name": "阪急茨木北口駐車場",
    "address": "大阪府茨木市永代町8番32号",
    "latitude": 34.818363,
    "longitude": 135.576065,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27211",
    "cityName": "茨木市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかを提示、または「減免者等駐車場専用カード」を利用。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00~20:00 30分100円、20:00~8:00 60分100円、24時間最大料金1,200円(2日目以降繰り返し)。\n障害者割引: 利用料金の5割減免",
    "sourceUrl": "https://www.city.ibaraki.osaka.jp/office/hobun/reiki_int/reiki_honbun/k213RG00000671.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27211-007",
    "name": "双葉町駐車場",
    "address": "大阪府茨木市双葉町11番街区",
    "latitude": 34.815464,
    "longitude": 135.575256,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27211",
    "cityName": "茨木市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかを提示、または「減免者等駐車場専用カード」を利用。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00~20:00 20分100円、20:00~8:00 60分100円、24時間最大料金1,200円(2日目以降繰り返し)。\n障害者割引: 利用料金の5割減免",
    "sourceUrl": "https://www.city.ibaraki.osaka.jp/office/hobun/reiki_int/reiki_honbun/k213RG00000671.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27211-008",
    "name": "阪急茨木東口駐車場",
    "address": "大阪府茨木市双葉町1番14号",
    "latitude": 34.817093,
    "longitude": 135.576691,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27211",
    "cityName": "茨木市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかを提示、または「減免者等駐車場専用カード」を利用。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00~20:00 20分100円、20:00~8:00 60分100円、24時間最大料金1,200円(2日目以降繰り返し)。\n障害者割引: 利用料金の5割減免",
    "sourceUrl": "https://www.city.ibaraki.osaka.jp/office/hobun/reiki_int/reiki_honbun/k213RG00000671.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27211-009",
    "name": "総持寺駅南駐車場",
    "address": "大阪府茨木市中総持寺町3番35号",
    "latitude": 34.825005,
    "longitude": 135.584915,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27211",
    "cityName": "茨木市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかを提示、または「減免者等駐車場専用カード」を利用。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00~20:00 30分100円、20:00~8:00 60分100円、24時間最大料金1,200円(2日目以降繰り返し)。定期契約は月12,000円。管理人駐在時間 6:00~11:00、16:00~20:00。\n障害者割引: 利用料金の5割減免",
    "sourceUrl": "https://www.city.ibaraki.osaka.jp/office/hobun/reiki_int/reiki_honbun/k213RG00000671.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27211-010",
    "name": "生涯学習センターきらめき駐車場",
    "address": "大阪府茨木市畑田町1番43号",
    "latitude": 34.827572,
    "longitude": 135.565948,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27211",
    "cityName": "茨木市",
    "accessibleSpaceTotal": 3,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかを事務室に提示。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 8:00~20:00 最初30分無料、以降30分100円(最大600円)。20:00~8:00 60分100円(24時間最大1,200円)。\n障害者割引: 駐車場使用料の5割減額\n総台数: 116台",
    "sourceUrl": "https://www.city.ibaraki.osaka.jp/kikou/shimin/kirameki/index.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27211-011",
    "name": "茨木市立中央図書館駐車場",
    "address": "大阪府茨木市畑田町1番51号",
    "latitude": 34.826859,
    "longitude": 135.565826,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27211",
    "cityName": "茨木市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "障害者手帳・療育手帳をお持ちの方が対象。市内有人駐車場で発行される「減免者等駐車場専用カード」の利用が必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00~20:00 最初30分無料、以降30分100円(最大600円)。20:00~8:00(夜間) 1時間100円、24時間最大料金1,200円(2日目以降繰り返し)。\n障害者割引: 利用料金の5割減免",
    "sourceUrl": "https://www.lib.ibaraki.osaka.jp/information/120/20251032252912.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27212-001",
    "name": "八尾市立総合体育館「ウイング」駐車場",
    "address": "大阪府八尾市青山町3丁目5-24",
    "latitude": 34.622471,
    "longitude": 135.614426,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27212",
    "cityName": "八尾市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がい者本人が運転または同乗し、施設利用のために駐車した場合。受付窓口にて障がい者手帳等の証明書と駐車券を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通自動車:2時間まで300円(うち最初30分無料)、以後1時間ごとに100円増。準中型・中型自動車:2時間まで450円、以後1時間ごとに150円増。大型自動車:2時間まで600円、以後1時間ごとに200円増\n障害者割引: 無料(施設利用時のみ)\n総台数: 196台",
    "sourceUrl": "http://yao-taisin.com/kaku-shisetu-soutai.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27212-002",
    "name": "八尾市立山本球場駐車場",
    "address": "大阪府八尾市山本町南7丁目9-11",
    "latitude": 34.621738,
    "longitude": 135.621185,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27212",
    "cityName": "八尾市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がい者本人が運転または同乗し、施設利用のために駐車した場合。受付窓口にて障がい者手帳等の証明書と駐車券を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通自動車:2時間まで300円(うち最初30分無料)、以後1時間ごとに100円増。準中型・中型自動車:2時間まで450円、以後1時間ごとに150円増。大型自動車:2時間まで600円、以後1時間ごとに200円増\n障害者割引: 無料(施設利用時のみ)\n総台数: 42台",
    "sourceUrl": "http://yao-taisin.com/kaku-shisetu-yamakyuu.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27212-003",
    "name": "八尾市立志紀テニス場駐車場",
    "address": "大阪府八尾市志紀町西1-3",
    "latitude": 34.601353,
    "longitude": 135.607742,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27212",
    "cityName": "八尾市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がい者本人が運転または同乗し、施設利用のために駐車した場合。受付窓口にて障がい者手帳等の証明書と駐車券を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通自動車:2時間まで300円(うち最初30分無料)、以後1時間ごとに100円増\n障害者割引: 無料(施設利用時のみ)\n総台数: 28台",
    "sourceUrl": "http://yao-taisin.com/kaku-shisetu-shiki.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27212-004",
    "name": "八尾市立南木の本防災体育館駐車場",
    "address": "大阪府八尾市南木の本3-1-9",
    "latitude": 34.605396,
    "longitude": 135.588242,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27212",
    "cityName": "八尾市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がい者本人が運転または同乗し、施設利用のために駐車した場合。受付窓口にて障がい者手帳等の証明書と駐車券を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分を超え2時間まで300円、以降1時間ごとに100円加算\n障害者割引: 無料(施設利用時のみ)\n総台数: 34台",
    "sourceUrl": "http://www.mk-bousai.sakura.ne.jp/minaki-sisetuannai.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27212-005",
    "name": "八尾市生涯学習センター(かがやき)駐車場",
    "address": "大阪府八尾市旭ヶ丘5-85-16",
    "latitude": 34.633636,
    "longitude": 135.608475,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27212",
    "cityName": "八尾市",
    "accessibleSpaceTotal": 7,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者が運転または乗車している場合。受付窓口にて障がい者手帳等の証明書と駐車券を提示"
    },
    "accessibleSpaces": [
      {
        "count": 7
      }
    ],
    "notes": "通常料金: 普通自動車:30分を超え2時間まで300円、以後1時間ごとに100円加算。準中型・中型自動車:450円/150円、大型自動車:600円/200円\n障害者割引: 無料(施設利用時のみ)\n総台数: 86台",
    "sourceUrl": "https://kagayaki-yao.jp/access/",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27212-006",
    "name": "八尾市立病院駐車場",
    "address": "大阪府八尾市龍華町1丁目3番1号",
    "latitude": 34.620766,
    "longitude": 135.587952,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27212",
    "cityName": "八尾市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳のいずれかを持ち、当院を利用した場合"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分無料、以降30分ごとに100円\n障害者割引: 無料",
    "sourceUrl": "https://www.hospital.yao.osaka.jp/access/",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27213-001",
    "name": "りんくう公園 第1駐車場",
    "address": "大阪府泉佐野市りんくう往来北1-271",
    "latitude": 34.41449,
    "longitude": 135.295395,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27213",
    "cityName": "泉佐野市",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・精神障害者保健福祉手帳・療育手帳・被爆者健康手帳・特定疾患医療受給者証・小児慢性特定疾患医療受診券のいずれかを所持する方が同乗している場合が対象。駐車場係員へ手帳原本またはミライロIDアプリ画面を提示(スクリーンショット・コピー不可)。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 普通車:平日 30分310円/最大24時間800円、土日祝 30分510円/最大24時間1490円(時間帯・時期により変動あり)\n障害者割引: 無料(全額免除)\n総台数: 73台",
    "sourceUrl": "https://rinku.osaka-park.or.jp/18368",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27213-002",
    "name": "りんくう公園 第2駐車場",
    "address": "大阪府泉佐野市りんくう往来北1-271",
    "latitude": 34.41449,
    "longitude": 135.295395,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27213",
    "cityName": "泉佐野市",
    "accessibleSpaceTotal": 6,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・精神障害者保健福祉手帳・療育手帳・被爆者健康手帳・特定疾患医療受給者証・小児慢性特定疾患医療受診券のいずれかを所持する方が同乗している場合が対象。駐車場係員へ手帳原本またはミライロIDアプリ画面を提示(スクリーンショット・コピー不可)。"
    },
    "accessibleSpaces": [
      {
        "count": 6
      }
    ],
    "notes": "通常料金: 普通車:平日 30分310円/最大24時間800円、土日祝 30分510円/最大24時間1490円(時間帯・時期により変動あり)\n障害者割引: 無料(全額免除)\n総台数: 59台",
    "sourceUrl": "https://rinku.osaka-park.or.jp/18348",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27213-003",
    "name": "関西国際空港 P1・P2駐車場",
    "address": "大阪府泉佐野市泉州空港北1",
    "latitude": 34.436893,
    "longitude": 135.253601,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27213",
    "cityName": "泉佐野市",
    "accessibleSpaceTotal": 0,
    "discountType": "unknown",
    "discount": {
      "type": "unknown",
      "conditions": "身体障害者手帳等の対象手帳またはミライロIDアプリを所持する方。出庫時に駐車場出口(2番ブース)で係員に駐車券と手帳等を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分220円(通常期)〜300円(繁忙期)、24時間最大3,080円(通常期)〜4,200円(繁忙期)\n障害者割引: 駐車料金50%割引",
    "sourceUrl": "https://www.kansai-airport.or.jp/access/parking/disabled.html",
    "updatedAt": "2026-08-15T00:00:00Z"
  },
  {
    "id": "27214-001",
    "name": "錦織公園 南駐車場",
    "address": "大阪府富田林市錦織1560",
    "latitude": 34.483078,
    "longitude": 135.573944,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27214",
    "cityName": "富田林市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "conditions": "障がい者手帳を駐車場の係員に提示すると利用料金が減免される(大阪府公式バリアフリー情報に記載。具体的な割引率・全額免除かは公式ページに明記なし)。南駐車場の利用時間は9時〜17時(入庫は16時30分まで)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車:平日無料・土日祝640円(1日)/大型車:平日無料(要予約)・土日祝利用不可/単車:無料\n障害者割引: 減免(割引率は明記なし)\n総台数: 245台",
    "sourceUrl": "https://www.pref.osaka.lg.jp/o130170/kenshi_kikaku/seinou-hyouji/bf-294.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27215-001",
    "name": "寝屋川公園第1駐車場(北駐車場)",
    "address": "大阪府寝屋川市寝屋川公園1707",
    "latitude": 34.760391,
    "longitude": 135.652222,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27215",
    "cityName": "寝屋川市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・精神障害者保健福祉手帳・療育手帳・被爆者健康手帳・特定医療費(指定難病)受給者証・特定疾患医療受給者証・小児慢性特定疾患医療受診券のいずれかを所持する方が乗車している車両が対象。入庫時または出庫時に係員へ手帳原本またはミライロID(アプリを自身で起動して提示、スクリーンショット・コピー不可)を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車:平日1時間まで190円、以降段階制で10時間超24時間まで800円/土日祝1時間まで390円、以降段階制で10時間超24時間まで1,490円\n障害者割引: 無料(全額免除)\n総台数: 244台",
    "sourceUrl": "https://neyagawa.osaka-park.or.jp/riyouryoukin",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27215-002",
    "name": "寝屋川公園第2駐車場(南駐車場)",
    "address": "大阪府寝屋川市寝屋川公園1707",
    "latitude": 34.760391,
    "longitude": 135.652222,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27215",
    "cityName": "寝屋川市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・精神障害者保健福祉手帳・療育手帳・被爆者健康手帳・特定医療費(指定難病)受給者証・特定疾患医療受給者証・小児慢性特定疾患医療受診券のいずれかを所持する方が乗車している車両が対象。入庫時または出庫時に係員へ手帳原本またはミライロID(アプリを自身で起動して提示、スクリーンショット・コピー不可)を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車:平日1時間まで190円、以降段階制で10時間超24時間まで800円/土日祝1時間まで390円、以降段階制で10時間超24時間まで1,490円\n障害者割引: 無料(全額免除)\n総台数: 210台",
    "sourceUrl": "https://neyagawa.osaka-park.or.jp/riyouryoukin",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27216-001",
    "name": "河内長野市立市民総合体育館・大師総合運動場駐車場",
    "address": "大阪府河内長野市大師町25-1",
    "latitude": 34.445225,
    "longitude": 135.571854,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27216",
    "cityName": "河内長野市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳をお持ちの施設利用者および介助者は、駐車料金無料。詳しくは市民総合体育館(0721-65-0121)へ問合せ。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 施設利用者:入庫後60分無料、以降30分毎50円/施設利用者以外:入庫後60分無料、以降30分毎100円(当日最大料金500円)\n障害者割引: 無料\n総台数: 159台",
    "sourceUrl": "https://www.ssksports.com/shisetsu/kawachinagano/guide",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27216-002",
    "name": "河内長野市立下里総合運動場・コノミヤスペランツァ球技場駐車場",
    "address": "大阪府河内長野市下里町892-3",
    "latitude": 34.442455,
    "longitude": 135.533737,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27216",
    "cityName": "河内長野市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳をお持ちの施設利用者および介助者は、駐車料金無料。詳しくは市民総合体育館(0721-65-0121)へ問合せ。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 施設利用者/施設利用者以外:平日1回200円、土日祝1回400円(入庫後30分無料)\n障害者割引: 無料\n総台数: 134台",
    "sourceUrl": "https://www.ssksports.com/shisetsu/kawachinagano/guide",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27217-001",
    "name": "タイムズ スポーツパークまつばら",
    "address": "大阪府松原市三宅西5-876",
    "latitude": 34.592686,
    "longitude": 135.54747,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27217",
    "cityName": "松原市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳をお持ちのご本人が対象。ミライロIDアプリの「QRコード機能」を起動し、精算機に貼付されたQRコードをスキャンすることで駐車場・駐輪場料金の減免が適用される。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 60分100円\n障害者割引: 駐車場・駐輪場料金の減免(割引額は現地精算機の表示による)\n総台数: 50台",
    "sourceUrl": "https://mirairo-id.jp/place/times/",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27218-001",
    "name": "深北緑地 第1駐車場・第2駐車場",
    "address": "大阪府大東市深野北4-284",
    "latitude": 34.727352,
    "longitude": 135.628754,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27218",
    "cityName": "大東市",
    "accessibleSpaceTotal": 10,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳、精神障がい者手帳、療育手帳、被爆者健康手帳、特定疾患医療受給者証、小児慢性特定疾患医療受診券、またはミライロIDの提示で駐車料金を免除。手帳保有者本人が同乗していることが必要。提示方法は(1)係員に手帳を提示、(2)精算機で音声案内に従い操作、(3)管理事務所(9:00-17:00)で手帳と駐車券を提示、のいずれか。第1駐車場・第2駐車場それぞれに車いす使用者用駐車区画5台分(計10台)あり。"
    },
    "accessibleSpaces": [
      {
        "count": 10
      }
    ],
    "notes": "通常料金: 普通車 1時間まで 平日300円/土日祝390円(以降段階加算、最大料金あり)\n障害者割引: 無料",
    "sourceUrl": "https://fukakitaryokuchi.jp/faq",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27219-001",
    "name": "和泉市庁舎駐車場",
    "address": "大阪府和泉市府中町二丁目7番5号",
    "latitude": 34.483067,
    "longitude": 135.424164,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27219",
    "cityName": "和泉市",
    "accessibleSpaceTotal": 4,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の交付を受けている者が庁舎(本館・別館・飲食物販店舗)または和泉市コミュニティセンター利用のために駐車する場合が対象。サービス券は庁舎本館1階・2階総合案内受付で発券。立体駐車場1階に車いす区画4台、2階・屋上階におもいやり駐車区画2台あり。問合せ:和泉市総務部総務管財室 0725-99-8105"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 平日入庫後30分無料、以降30分毎100円(最大料金:平日9時~16時は設定なし、16時~翌9時は400円)。土日祝も同様に30分無料、以降30分毎100円\n障害者割引: 庁舎等利用のサービス券(2時間無料)に加え、障がい者手帳提示でさらに2時間無料(合計最大4時間無料)\n総台数: 192台",
    "sourceUrl": "https://www.city.osaka-izumi.lg.jp/kakukano/soumubu/soumuka/tyousyatyuusyazyou/22923.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27219-002",
    "name": "黒鳥山公園駐車場",
    "address": "大阪府和泉市黒鳥町四丁目531-1",
    "latitude": 34.485916,
    "longitude": 135.444839,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27219",
    "cityName": "和泉市",
    "accessibleSpaceTotal": 2,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 1,
      "conditions": "出庫時に障がい者手帳(身体障害者手帳等)の提示が必要。令和7年(2025年)3月20日よりデジタル障害者手帳「ミライロID」による割引も利用可(事前登録要)。身体障がい者用区画2台、おもいやり駐車区画2台あり。特別期間中は臨時駐車場等で約300台対応。問合せ:和泉市都市デザイン部都市整備室公園緑地担当 0725-99-8139"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 通常期間(5/20~翌3/19):入場後2時間無料、以降30分毎100円、22時~翌6時は1回1,000円。特別期間(3/20~5/19):入場後1時間無料、以降30分毎150円、22時~翌6時は1回1,000円\n障害者割引: 通常の無料時間に加えて1時間無料\n総台数: 67台",
    "sourceUrl": "https://www.city.osaka-izumi.lg.jp/kakukano/dezainbu/kouenryokuti/osirase/1419499658856.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27219-003",
    "name": "和泉シティプラザ駐車場",
    "address": "大阪府和泉市いぶき野五丁目4番7号",
    "latitude": 34.458324,
    "longitude": 135.457458,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27219",
    "cityName": "和泉市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 4,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示で入庫後4時間まで駐車料金免除(令和5年10月1日実施)。入庫後2時間までは手続き不要、それを超える場合は出庫前に1階生涯学習センター受付で手続きが必要。屋内駐車場110台・屋外駐車場120台の合計230台。問合せ:0725-57-6660"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 利用時間8:30~22:30、入庫後2時間無料、以降30分毎100円\n障害者割引: 入庫後4時間まで無料\n総台数: 230台",
    "sourceUrl": "https://www.izumicityplaza.or.jp/news/20231003-15481.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27220-001",
    "name": "箕面駅前第一駐車場",
    "address": "大阪府箕面市箕面6丁目4番17号",
    "latitude": 34.833294,
    "longitude": 135.47023,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27220",
    "cityName": "箕面市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳、戦傷病者手帳、被爆者健康手帳(障害者手帳アプリ「ミライロID」含む)の所持者本人が運転または同乗している場合に限り、上記料金の半額。ミライロIDはQRコード読み取り機、手帳原本は管理事務所で対応。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8時~20時:60分200円(最大1,200円)/20時~翌8時:60分100円(最大400円)\n障害者割引: 半額\n総台数: 285台",
    "sourceUrl": "https://www.city.minoh.lg.jp/dourokanri/publicparking/minoh.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27220-002",
    "name": "箕面駅前第二駐車場",
    "address": "大阪府箕面市箕面5丁目12番67号",
    "latitude": 34.832047,
    "longitude": 135.470413,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27220",
    "cityName": "箕面市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "対象障害者手帳(ミライロID含む)所持者本人が運転または同乗している場合に限り、上記料金の半額。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8時~20時:60分200円(最大1,000円)/20時~翌8時:60分100円(最大300円)\n障害者割引: 半額\n総台数: 281台",
    "sourceUrl": "https://www.city.minoh.lg.jp/dourokanri/publicparking/minoh.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27220-003",
    "name": "箕面市立箕面船場駐車場",
    "address": "大阪府箕面市船場東3丁目10番1号",
    "latitude": 34.821384,
    "longitude": 135.491364,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27220",
    "cityName": "箕面市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳等の提示で半額。駐車券と手帳の両方が揃っている場合のみ適用。船場図書館利用者もこの駐車場を利用(館内に専用駐車場なし)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 60分200円、昼間(8時~18時)最大800円、夜間(18時~翌8時)最大500円\n障害者割引: 半額(60分100円、昼間最大400円、夜間最大250円)\n総台数: 116台",
    "sourceUrl": "https://www.city.minoh.lg.jp/dourokanri/publicparking/semba.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27220-004",
    "name": "箕面船場第二駐車場",
    "address": "大阪府箕面市船場東3丁目14番1号",
    "latitude": 34.823799,
    "longitude": 135.4953,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27220",
    "cityName": "箕面市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "対象障害者手帳所持者が運転または同乗している場合半額。夜間等無人時はゲートのオートフォンでコールセンターに連絡し、ウェブカメラに手帳を提示して遠隔確認・精算。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 60分200円、24時間最大600円(現在500円)\n障害者割引: 半額\n総台数: 446台",
    "sourceUrl": "https://www.city.minoh.lg.jp/dourokanri/publicparking/semba.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27220-005",
    "name": "箕面市立中央図書館地下駐車場",
    "address": "大阪府箕面市箕面5丁目11番23号",
    "latitude": 34.831169,
    "longitude": 135.471313,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27220",
    "cityName": "箕面市",
    "accessibleSpaceTotal": 8,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳等保持者専用の地下駐車場(全8台とも身障者用)。中央生涯学習センター・メイプルホールと共用。一般利用者向け区画ではなく手帳保持者専用のため常時無料。"
    },
    "accessibleSpaces": [
      {
        "count": 8
      }
    ],
    "notes": "障害者割引: 無料\n総台数: 8台",
    "sourceUrl": "https://www.city.minoh.lg.jp/library/annai/chuuou.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27220-006",
    "name": "箕面市立西南図書館駐車場",
    "address": "大阪府箕面市半町4-6-39",
    "latitude": 34.811695,
    "longitude": 135.457108,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27220",
    "cityName": "箕面市",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳等の所持者が運転または同乗している場合、利用料金が無料。図書館1階または2階カウンターで手帳と駐車券を提示。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 30分100円(最初30分無料)、入庫後24時間最大700円(繰り返し適用)\n障害者割引: 無料\n総台数: 25台",
    "sourceUrl": "https://www.city.minoh.lg.jp/library/annai/seinan.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27220-007",
    "name": "箕面市立東図書館駐車場(東生涯学習センター駐車場)",
    "address": "大阪府箕面市粟生間谷西3-1-3",
    "latitude": 34.843979,
    "longitude": 135.511826,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27220",
    "cityName": "箕面市",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳、戦傷病者手帳、被爆者健康手帳の提示で無料。身障者用区画が満車の場合も同様に無料対応。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 最初30分無料、1時間まで200円、3時間まで300円、以降30分毎100円、24時間最大600円\n障害者割引: 無料\n総台数: 82台",
    "sourceUrl": "https://www.city.minoh.lg.jp/library/annai/higashi.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27220-008",
    "name": "箕面市立小野原図書館駐車場",
    "address": "大阪府箕面市小野原西5-2-36",
    "latitude": 34.830925,
    "longitude": 135.511276,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27220",
    "cityName": "箕面市",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体・知的・精神障害者手帳等の提示で無料。専用駐車スペースが満車の場合も手帳提示で無料対応。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 30分100円(最初30分無料)\n障害者割引: 無料\n総台数: 22台",
    "sourceUrl": "https://www.city.minoh.lg.jp/library/annai/onohara.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27221-001",
    "name": "柏原駅西口自動車駐車場",
    "address": "大阪府柏原市上市1丁目149番7ほか",
    "latitude": 34.584503,
    "longitude": 135.623718,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27221",
    "cityName": "柏原市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "柏原市自動車駐車場条例第12条第1項に基づき、身体障害者手帳・精神障害者保健福祉手帳・療育手帳の交付を受けている者、またはこれらの者を同乗させている者は利用料金半額(一時利用・定期利用とも対象、定期利用限定の文言なし)。減額を受けるには規則で定める手続きにより指定管理者の承認が必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 一時利用: 入庫後30分まで無料、以降30分毎100円(4時間30分〜24時間は800円、以降24時間毎800円加算) / 定期利用: 1ヶ月12,000円\n障害者割引: 半額\n総台数: 37台",
    "sourceUrl": "https://www.city.kashiwara.lg.jp/reiki/reiki_honbun/e600RG00000827.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27221-002",
    "name": "柏原駅東自動車駐車場",
    "address": "大阪府柏原市上市4丁目388番42ほか",
    "latitude": 34.586155,
    "longitude": 135.62561,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27221",
    "cityName": "柏原市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "柏原市自動車駐車場条例第12条第1項に基づき、身体障害者手帳・精神障害者保健福祉手帳・療育手帳の交付を受けている者、またはこれらの者を同乗させている者は利用料金半額(一時利用のみ対象施設、定期利用制度なし)。減額を受けるには規則で定める手続きにより指定管理者の承認が必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 一時利用のみ: 入庫後30分まで無料、以降30分毎100円(4時間30分〜24時間は800円、以降24時間毎800円加算)\n障害者割引: 半額\n総台数: 14台",
    "sourceUrl": "https://www.city.kashiwara.lg.jp/reiki/reiki_honbun/e600RG00000827.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27222-001",
    "name": "大阪はびきの医療センター駐車場",
    "address": "大阪府羽曳野市はびきの3-7-1",
    "latitude": 34.549576,
    "longitude": 135.592239,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27222",
    "cityName": "羽曳野市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳をお持ちの方は総合案内または守衛室に手帳を提示することで駐車料金が免除。精神障害者保健福祉手帳・療育手帳については公式ページに記載なし。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 外来受診患者 1回200円(30分以内無料)、それ以外は1時間ごとに200円\n障害者割引: 免除(無料)",
    "sourceUrl": "https://www.ra.opho.jp/about/access/",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27223-001",
    "name": "門真市役所第1駐車場(旧本館前駐車場)",
    "address": "大阪府門真市中町1-1",
    "latitude": 34.738827,
    "longitude": 135.587341,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27223",
    "cityName": "門真市",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "市役所での用務のため、午前8時から午後6時までに利用する場合が対象。身体障害者手帳、精神障害者保健福祉手帳、療育手帳、難病患者医療助成受給確認証の交付を受けている者、その他市がこれらの者に準ずると認める者が運転または同乗している車両に必要時間分の駐車料金が付与される。思いやり駐車区画3区画あり。管理:名鉄協商株式会社 0120-722-247。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 30分100円\n障害者割引: 無料(市役所用務のための必要時間分)\n総台数: 37台",
    "sourceUrl": "https://www.city.kadoma.osaka.jp/soshiki/somu/zaisankatuyou/siseijouhou/sisetusyoukai/24788.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27223-002",
    "name": "門真市役所第2駐車場(別館前駐車場及び旧第六中学校運動広場駐車場)",
    "address": "大阪府門真市中町1-1",
    "latitude": 34.738827,
    "longitude": 135.587341,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27223",
    "cityName": "門真市",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "市役所での用務のため、午前8時から午後6時までに利用する場合が対象。身体障害者手帳、精神障害者保健福祉手帳、療育手帳、難病患者医療助成受給確認証の交付を受けている者、その他市がこれらの者に準ずると認める者が運転または同乗している車両に必要時間分の駐車料金が付与される。車いす使用者駐車区画2区画、思いやり駐車区画1区画あり。管理:名鉄協商株式会社 0120-722-247。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 30分100円\n障害者割引: 無料(市役所用務のための必要時間分)\n総台数: 69台",
    "sourceUrl": "https://www.city.kadoma.osaka.jp/soshiki/somu/zaisankatuyou/siseijouhou/sisetusyoukai/24788.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27223-003",
    "name": "門真市民文化会館ルミエールホール地下駐車場",
    "address": "大阪府門真市末広町29番1号",
    "latitude": 34.736668,
    "longitude": 135.593307,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27223",
    "cityName": "門真市",
    "accessibleSpaceTotal": 2,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2,
      "conditions": "身体障がい者手帳、療育手帳、精神障がい者保健福祉手帳、難病患者医療助成受給確認証を1階管理事務所に提示し署名すると2時間の無料駐車券を交付。手帳1冊につき1日1枚。2時間超過分は通常料金が適用される。現在一部20台が閉鎖中で使用可能台数は20台。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 20分100円(1日最大1,300円、9:00〜22:00)\n障害者割引: 2時間無料\n総台数: 40台",
    "sourceUrl": "https://npotoybox.jp/lumi/institution/undergroundparkinglot.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27224-001",
    "name": "摂津市立コミュニティプラザ立体駐車場(保健センター横)",
    "address": "大阪府摂津市南千里丘5番30号",
    "latitude": 34.786041,
    "longitude": 135.554062,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27224",
    "cityName": "摂津市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳をお持ちの方が運転する自動車、またはその方が同乗する自動車は駐車料金無料。摂津市立コミュニティプラザ・摂津市保健センター利用者専用(公共施設利用者以外の駐車不可)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1台500円(駐車時間1時間以内は無料)\n障害者割引: 無料\n総台数: 22台",
    "sourceUrl": "https://settsu-cp.com/?page_id=7",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27224-002",
    "name": "摂津市立小川自動車駐車場",
    "address": "大阪府摂津市学園町一丁目4番",
    "latitude": 34.785748,
    "longitude": 135.558609,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27224",
    "cityName": "摂津市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "摂津市立自動車駐車場条例施行規則第7条第1項第3号により、身体障害者手帳・療育手帳・精神障害者保健福祉手帳の交付を受けている者が、摂津市立男女共同参画センター、摂津市民文化ホール、摂津市立保健センター、摂津市立休日小児急病診療所、摂津市立柳田テニスコート、三宅柳田小学校多目的ホール、摂津市立コミュニティプラザ、摂津市教育センターのいずれかを利用する場合、当駐車場の利用料金が全額免除。同条第4号により、上記以外の一時・定期利用の障害者は5割減額。手帳の提示が必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間までごと100円、6時間超24時間以内600円。定期利用(1か月)11,000円。\n障害者割引: 特定公共施設利用時は全額免除(無料)。それ以外の一時・定期利用は5割減額(1時間までごと50円、6時間超24時間以内300円、定期利用月5,500円)。\n総台数: 59台",
    "sourceUrl": "https://www.city.settsu.osaka.jp/section/reiki/reiki_honbun/v100RG00000359.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27224-003",
    "name": "摂津市立摂津駅前自転車自動車駐車場",
    "address": "大阪府摂津市鶴野一丁目1番41号",
    "latitude": 34.779877,
    "longitude": 135.561401,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27224",
    "cityName": "摂津市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳の交付を受けておられる方が対象。摂津市立自動車駐車場条例施行規則に基づく5割減額。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 自動車:30分100円、5時間超24時間以内1,000円\n障害者割引: 5割引(自動車:30分50円、5時間超24時間以内500円)\n総台数: 2台",
    "sourceUrl": "https://www.n-parking.com/park/w_park022.php",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27224-004",
    "name": "摂津市立南摂津駅前第1自動車駐車場",
    "address": "大阪府摂津市東一津屋17番1号",
    "latitude": 34.766178,
    "longitude": 135.569046,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27224",
    "cityName": "摂津市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳の交付を受けておられる方が対象。摂津市立自動車駐車場条例施行規則に基づく5割減額。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分ごとに100円、5時間超24時間以内1,000円。定期利用(1か月)13,000円。\n障害者割引: 5割引(30分ごとに50円、5時間超24時間以内500円、定期利用月6,500円)\n総台数: 127台",
    "sourceUrl": "https://www.n-parking.com/park/w_park032.php",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27224-005",
    "name": "摂津市立南摂津駅前第2自転車自動車駐車場",
    "address": "大阪府摂津市一津屋三丁目16番1号",
    "latitude": 34.765045,
    "longitude": 135.567856,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27224",
    "cityName": "摂津市",
    "accessibleSpaceTotal": 3,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "自動車区画3台はすべて障害者専用区画。身体障害者手帳、療育手帳、精神障害者保健福祉手帳の交付を受けておられる方が対象。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 自動車区画3台はすべて障害者専用のため一般料金設定なし\n障害者割引: 30分までごと50円、5時間超24時間以内500円(通常料金の5割相当)\n総台数: 3台",
    "sourceUrl": "https://www.n-parking.com/park/w_park020.php",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27224-006",
    "name": "フォルテ摂津自動車駐車場",
    "address": "大阪府摂津市千里丘東2丁目10-1",
    "latitude": 34.791924,
    "longitude": 135.551773,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27224",
    "cityName": "摂津市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳の交付を受けている方が対象(摂津市立自動車駐車場条例施行規則に基づく5割減額)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 5時間まで30分毎100円、5時間超24時間まで1,000円\n障害者割引: 5割引(5時間まで30分毎50円、5時間超24時間まで500円)",
    "sourceUrl": "https://settutosikaihatu.sakura.ne.jp/tyusya/tyusya.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27225-001",
    "name": "高石市立高石駅前自動車駐車場",
    "address": "大阪府高石市綾園1丁目9番1号(アプラたかいし地下1・2階)",
    "latitude": 34.521965,
    "longitude": 135.433899,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27225",
    "cityName": "高石市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳、療育手帳又は精神障害者保健福祉手帳の交付を受けている方等が対象。高石都市開発株式会社(アプラたかいし3階、受付時間 午前9時30分〜午後5時、電話072-267-0018)へ申し出ることで減額を受けられる場合がある。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 昼間時間帯(7:00〜24:00)最初の30分無料、以後30分ごとに110円、最大料金1,100円(5時間超過)。夜間時間帯(24:00〜7:00)1回につき1,100円。\n障害者割引: 料金の5割に相当する金額を減額\n総台数: 215台",
    "sourceUrl": "https://www.city.takaishi.lg.jp/kakuka/doboku/dobokukanri_ka/koutsu/parking/yuuryoujidousyatyuusyajou.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27225-002",
    "name": "高石市庁舎自動車駐車場",
    "address": "大阪府高石市加茂4丁目1番1号",
    "latitude": 34.521198,
    "longitude": 135.442276,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27225",
    "cityName": "高石市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳(知的障害と判定された者に交付)又は精神障害者保健福祉手帳の交付を受けている者が運転し、又は同乗する自動車が対象。自動車を出場させる際に出口精算機へ当該手帳を提示することが必要(高石市庁舎自動車駐車場条例施行規則第5条第2項)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 5時間以内は1時間ごとに100円、5時間超〜12時間以内は500円、12時間超〜24時間以内は800円。\n障害者割引: 使用料全額免除",
    "sourceUrl": "https://www.city.takaishi.lg.jp/section/reiki_int/reiki_honbun/k227RG00000739.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27226-001",
    "name": "藤井寺市役所本庁舎駐車場",
    "address": "大阪府藤井寺市岡1丁目1番1号",
    "latitude": 34.574944,
    "longitude": 135.597244,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27226",
    "cityName": "藤井寺市",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "各種障害者手帳(身体障害者手帳・療育手帳・精神障害者保健福祉手帳等)所持者、要介護者で配慮が必要な方など(付き添いの方を含む)は、来庁目的での利用時、駐車券を取り総合案内で減免処理を受けることで無料。地下駐車場に障害者専用スペース2区画(既設)、ゆずりあいスペース3区画(増設)あり。管理運営はアマノマネジメントサービス株式会社大阪支店。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 令和4年8月1日より有料化。入庫後1時間まで無料、それ以降は有料(具体的な時間単価・上限額は現地掲示の料金表(画像)のみで公式サイト本文には未記載)\n障害者割引: 各種障害者手帳所持者は駐車料金無料",
    "sourceUrl": "https://www.city.fujiidera.lg.jp/soshiki/somubu/soumu/osirase/14203.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27226-002",
    "name": "藤井寺市立市民総合会館(パープルホール)駐車場",
    "address": "大阪府藤井寺市北岡1-2-3",
    "latitude": 34.575703,
    "longitude": 135.596603,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27226",
    "cityName": "藤井寺市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・精神障害者保健福祉手帳・療育手帳所持者、要介護が必要な方とその付き添いの方は無料。パープルホール事務室へ駐車券または手帳を提示するか、精算機横の受話器でコールセンターに連絡しカメラに手帳を提示。障害者手帳アプリ「ミライロID」の提示でも可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 2024年8月1日より有料化。入庫後1時間まで無料、以降30分ごとに100円、24時間最大料金1,000円。本館1階駐車場32台(ゲート式、8:00〜22:30)、屋外駐車場21台(フラップ式、24時間)。\n障害者割引: 障害者手帳所持者は駐車料金無料\n総台数: 53台",
    "sourceUrl": "https://www.city-fujiidera-kosha.or.jp/topics/6929",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27226-003",
    "name": "藤井寺市立藤井寺駅南駐輪・駐車場",
    "address": "大阪府藤井寺市藤井寺1丁目19番69号",
    "latitude": 34.570389,
    "longitude": 135.594772,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27226",
    "cityName": "藤井寺市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "conditions": "身体障がい者手帳、精神障がい者保健福祉手帳、療育手帳、難病受給者証等を現地にて呈示(本人が自ら運転、または同乗している場合に限る)。障がい者手帳アプリ「ミライロID」の呈示でも減免可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 自動車一時利用: 目安として最初の1時間300円、以降60分毎150円、24時間最大800円程度(詳細は現地表示の料金表による)\n障害者割引: 自動車一時使用300円減免、自転車一時使用150円減免、原動機付自転車一時使用200円減免",
    "sourceUrl": "https://www.city.fujiidera.lg.jp/soshiki/toshiseibi/toshikeikaku/tyuurinn_tyuusyazyou/fujideraekiminami.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27226-004",
    "name": "藤井寺市立ふじみ緑地駐車場",
    "address": "大阪府藤井寺市小山藤美町880番40",
    "latitude": 34.580196,
    "longitude": 135.596802,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27226",
    "cityName": "藤井寺市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "障害者手帳(身体障害者手帳・精神障害者保健福祉手帳・療育手帳等)の呈示、またはミライロIDの呈示により、精算時に駐車料金の半額を減免。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 有料(具体的な時間単価・上限額は一次情報からは未確認)。車椅子使用者用駐車施設あり。\n障害者割引: 精算時に駐車料金を半額減免",
    "sourceUrl": "https://www.city.fujiidera.lg.jp/soshiki/toshiseibi/machihozen/tyuurinn_tyuusyazyou/10504.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27227-001",
    "name": "花園中央公園駐車場(第1〜5駐車場)",
    "address": "大阪府東大阪市松原南2丁目1番(第1〜4駐車場)/大阪府東大阪市吉田6丁目7番(第5駐車場)",
    "latitude": 34.66806,
    "longitude": 135.628601,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27227",
    "cityName": "東大阪市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳、療育手帳、精神障がい者保健福祉手帳の交付を受けている方、またはその方と同乗する介助者が対象。出庫時に手帳またはスマートフォンアプリ「ミライロID」を提示。第1〜4駐車場は2023年6月からゲート式駐車場としては国内初のミライロIDQRコード読取による減免システムを導入し、精算機にかざすだけで手続き可能。花園ラグビー場、花園中央公園野球場、東大阪市民美術センター来場者も本駐車場を利用。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 平日:60分200円、22時以降100円、1日最大1,000円/土日祝・特定日:60分300円、22時以降100円、1日最大1,500円(入庫後30分以内出庫は無料)\n障害者割引: 出庫時に障害者手帳またはミライロIDの提示で駐車料金無料\n総台数: 465台",
    "sourceUrl": "https://hanazono-centralparks-hos.com/hanazono-parking/",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27227-002",
    "name": "東大阪アリーナ駐車場(総合体育館)",
    "address": "大阪府東大阪市中小阪4丁目7番60号",
    "latitude": 34.656837,
    "longitude": 135.593674,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27227",
    "cityName": "東大阪市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳、療育手帳、精神障がい者保健福祉手帳の交付を受けている方が対象。手帳またはスマートフォンアプリ「ミライロID」を総合受付に提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車:2時間まで300円、以降30分ごとに50円/大型車:2時間まで900円、以降30分ごとに150円\n障害者割引: 障害者手帳提示で駐車場使用料金免除\n総台数: 102台",
    "sourceUrl": "https://www.hos-arena.com/access/",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27227-003",
    "name": "東大阪市文化創造館駐車場",
    "address": "大阪府東大阪市御厨南二丁目3番4号",
    "latitude": 34.665787,
    "longitude": 135.588867,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27227",
    "cityName": "東大阪市",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳、精神障がい者保健福祉手帳、療育手帳所持者が運転または同乗している場合が対象。1階受付で手帳またはスマートフォンアプリ「ミライロID」を提示。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 30分を超えて利用する1時間ごとに200円。1日上限:平日8〜23時500円、土日祝8〜23時700円、夜間23〜8時300円\n障害者割引: 施設利用時間分の駐車料金免除。車椅子専用駐車場は無料\n総台数: 65台",
    "sourceUrl": "https://higashiosaka.hall-info.jp/access/index.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27227-004",
    "name": "中部緑地庭球場駐車場",
    "address": "大阪府東大阪市中新開2丁目7番17号",
    "latitude": 34.682636,
    "longitude": 135.62178,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27227",
    "cityName": "東大阪市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳の所持者、またはその方と同乗する介助者が対象。出庫時に手帳またはミライロIDを提示。管理はタイムズ24株式会社。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初10分無料、7時〜22時1時間200円、22時〜7時1時間100円、24時間最大800円\n障害者割引: 出庫時に手帳提示で駐車料金無料",
    "sourceUrl": "https://www.city.higashiosaka.lg.jp/0000003722.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27227-005",
    "name": "吉原公園野球場駐車場",
    "address": "大阪府東大阪市吉原2丁目2番15号",
    "latitude": 34.686089,
    "longitude": 135.621933,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27227",
    "cityName": "東大阪市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳の交付を受けている方、またはその方と同乗する介助者が対象。出庫時に手帳またはミライロIDを提示。管理はタイムズ24株式会社。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初10分無料、7時〜22時1時間200円、22時〜7時1時間100円、24時間最大800円\n障害者割引: 出庫時に手帳提示で駐車料金無料",
    "sourceUrl": "https://www.city.higashiosaka.lg.jp/0000004465.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27227-006",
    "name": "布施公園野球場駐車場",
    "address": "大阪府東大阪市森河内東1丁目10番2号",
    "latitude": 34.679005,
    "longitude": 135.570969,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27227",
    "cityName": "東大阪市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳の交付を受けている方、またはその方と同乗する介助者が対象。出庫時に手帳またはミライロIDを提示。管理はタイムズ24株式会社。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初10分無料、平日1時間200円(当日最大600円)、休日1時間200円・22時〜7時100円(当日最大800円)\n障害者割引: 出庫時に手帳提示で駐車料金無料",
    "sourceUrl": "https://www.city.higashiosaka.lg.jp/0000004434.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27227-007",
    "name": "金岡公園野球場駐車場",
    "address": "大阪府東大阪市大蓮東1丁目5番8号",
    "latitude": 34.642174,
    "longitude": 135.578293,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27227",
    "cityName": "東大阪市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳をお持ちの方が対象。出庫時に手帳を提示。管理はタイムズ24株式会社。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初10分無料、7時〜22時1時間200円、22時〜7時1時間100円、24時間最大800円\n障害者割引: 出庫時に手帳提示で駐車料金無料",
    "sourceUrl": "https://www.city.higashiosaka.lg.jp/0000004113.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27227-008",
    "name": "金岡公園庭球場駐車場",
    "address": "大阪府東大阪市大蓮東1丁目5番8号",
    "latitude": 34.642174,
    "longitude": 135.578293,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27227",
    "cityName": "東大阪市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳をお持ちの方が対象。出庫時に手帳を提示。管理はタイムズ24株式会社。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初10分無料、7時〜22時1時間200円、22時〜7時1時間100円、24時間最大800円\n障害者割引: 出庫時に手帳提示で駐車料金無料",
    "sourceUrl": "https://www.city.higashiosaka.lg.jp/0000003867.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27227-009",
    "name": "大阪府立中央図書館駐車場(ライティホール)",
    "address": "大阪府東大阪市荒本北1丁目2番1号",
    "latitude": 34.679993,
    "longitude": 135.601273,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27227",
    "cityName": "東大阪市",
    "accessibleSpaceTotal": 5,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、精神障がい者保健福祉手帳、療育手帳を1階総合案内(エントランス受付)に提示すると無料サービス券を発行。平面駐車場に車いす使用者用1台、地下駐車場に車いす使用者用2台・ゆずりあい区画2台あり。"
    },
    "accessibleSpaces": [
      {
        "count": 5
      }
    ],
    "notes": "通常料金: 入庫後15分間無料、平日60分100円(最大料金なし)、土日祝60分150円(当日最大600円)\n障害者割引: 無料サービス券発行による駐車料金無料\n総台数: 108台",
    "sourceUrl": "https://www.library.pref.osaka.jp/central/taimen/taimen_shisetsu.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27227-010",
    "name": "東大阪市立東体育館駐車場",
    "address": "大阪府東大阪市鷹殿町1番2号",
    "latitude": 34.667862,
    "longitude": 135.64003,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27227",
    "cityName": "東大阪市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳の交付を受けている方が対象。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8時〜22時1時間200円、22時〜8時1時間100円、平日24時間最大500円、土日祝24時間最大600円、夜間最大(18時〜8時)300円\n障害者割引: 障害者手帳提示で駐車料金免除\n総台数: 18台",
    "sourceUrl": "https://www.hos-higashitaiikukan.com/access/",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27230-001",
    "name": "大阪府民の森 ほしだ園地 駐車場",
    "address": "大阪府交野市星田5019-1",
    "latitude": 34.768608,
    "longitude": 135.669647,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27230",
    "cityName": "交野市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳、療育手帳、特定医療費(指定難病)受給者証、小児慢性特定疾病医療受給者証、被ばく者健康手帳のいずれかを所持する方とその介護者が対象。駐車場及びクライミングウォール利用料が全額免除。提示方法等の詳細は管理事務所(ピトンの小屋)に要問合せ。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通自動車200円/時間(大型バス600円/時間・要予約)\n障害者割引: 全額免除(無料)\n総台数: 88台",
    "sourceUrl": "https://o-wonderforest.com/hoshida/info.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27231-001",
    "name": "大阪狭山市役所本庁舎駐車場",
    "address": "大阪府大阪狭山市狭山一丁目2384番地の1",
    "latitude": 34.503681,
    "longitude": 135.555862,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27231",
    "cityName": "大阪狭山市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "有効な障がい者手帳(ミライロID可)を所持している人は障がい者減免により無料。出庫前に事前精算機を使用し、障がい者手帳を提示して必ず減免処理を行うこと。市役所利用者向けの用務時間減免(窓口発行の減免処理券、最大2時間まで)とは別枠の障がい者減免。SAYAKAホール駐車場と相互利用可能。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 入庫から60分まで無料、以降120分まで300円、以降60分毎に100円加算(入庫後24時間最大料金600円、最大料金は繰り返し適用)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.osakasayama.osaka.jp/sosiki/soumubu/shisankatsuyou_keiyaku/shiyakusyo/7800.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27231-002",
    "name": "大阪狭山市文化会館(SAYAKAホール)駐車場",
    "address": "大阪府大阪狭山市狭山一丁目875番地の1",
    "latitude": 34.501736,
    "longitude": 135.555756,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27231",
    "cityName": "大阪狭山市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "有効な障がい者手帳またはミライロIDを事前精算機に提示することで障がい者減免が可能(全額無料)。原則ホール利用者への一般減免処理券の発行はないが、障がい者手帳提示者は対象。市役所本庁舎駐車場と相互利用可能、運営・管理はアマノマネジメントサービス株式会社。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間未満無料、1時間以上2時間未満300円、2時間以上3時間未満400円、3時間以上4時間未満500円、4時間以上24時間未満600円(24時間経過後は60分毎100円、最大料金は繰り返し適用)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.osakasayama.osaka.jp/sosiki/seisakusuishinbu/kouminrenkei_kyoudousuishin/bunka/8119.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27232-001",
    "name": "わんぱく王国駐車場",
    "address": "大阪府阪南市山中渓119-8",
    "latitude": 34.323997,
    "longitude": 135.27449,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27232",
    "cityName": "阪南市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳、または子ども家庭センター・自立相談支援センターで知的障がい者と認定された方が入場時に手帳(コピー不可)を提示することで駐車料金が免除される。第1駐車場が満車の場合のみ第2駐車場を利用可能。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車(軽自動車含む)500円/大型車(マイクロバス含む)1,500円\n障害者割引: 無料\n総台数: 140台",
    "sourceUrl": "https://www.city.hannan.lg.jp/kakuka/toshi/douro/koenkankei/wanpaku.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27361-001",
    "name": "永楽ゆめの森公園駐車場",
    "address": "大阪府泉南郡熊取町大字野田65番10",
    "latitude": 34.369041,
    "longitude": 135.372665,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27361",
    "cityName": "熊取町",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 2.5,
      "conditions": "対象は「障がい者等」に該当する者(1.身体障害者手帳の交付を受けている者 2.療育手帳の交付を受けている者 3.精神障害者保健福祉手帳の交付を受けている者 4.大阪府特定疾患医療受給者証の交付を受けている者 5.難病の患者に対する医療等に関する法律による医療受給者証の交付を受けている者)。町内・町外利用者を問わず適用。利用時に駐車券と対象者であることが確認できるもの(各種手帳・受給者証等)を持参し、公園管理事務所(072-452-7676)で手続きが必要。手続きをしない場合は障がい者等でない町外利用者料金が適用される。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通自動車(1日1回当たり) 町内利用者:2時間30分以内無料、超過時100円/ 町外利用者:平日(祝日除く)300円、土曜・日曜・祝日500円\n障害者割引: 2時間30分以内無料、2時間30分を超える場合は100円(1日1回当たり)\n総台数: 190台",
    "sourceUrl": "https://www.town.kumatori.lg.jp/section/reiki_int/reiki_honbun/k239RG00000506.html",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27362-001",
    "name": "関西国際空港 第5駐車場（P5）",
    "address": "大阪府泉南郡田尻町泉州空港中11-1",
    "latitude": 34.438229,
    "longitude": 135.230042,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27362",
    "cityName": "田尻町",
    "accessibleSpaceTotal": 23,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障がい者手帳をお持ちの方が対象(ミライロIDの提示可)。第2ターミナルビル国内線案内所で割引券を受け取り、出庫時に駐車場出口有人ブースで駐車券・手帳等とあわせて提示のうえ精算。"
    },
    "accessibleSpaces": [
      {
        "count": 23
      }
    ],
    "notes": "通常料金: 普通車:30分200円、24時間未満最大2,800円(通常期)\n障害者割引: 50%割引(半額)\n総台数: 833台",
    "sourceUrl": "https://www.kansai-airport.or.jp/access/parking",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27362-002",
    "name": "関西国際空港 第6駐車場（P6）",
    "address": "大阪府泉南郡田尻町泉州空港中11-1",
    "latitude": 34.438229,
    "longitude": 135.230042,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27362",
    "cityName": "田尻町",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障がい者手帳をお持ちの方が対象(ミライロIDの提示可)。第2ターミナルビル国内線案内所で割引券を受け取り、出庫時に駐車場出口有人ブースで駐車券・手帳等とあわせて提示のうえ精算。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車:30分180円、24時間未満最大2,520円(通常期)\n障害者割引: 50%割引(半額)\n総台数: 779台",
    "sourceUrl": "https://www.kansai-airport.or.jp/access/parking",
    "updatedAt": "2026-08-16T00:00:00Z"
  },
  {
    "id": "27366-001",
    "name": "せんなん里海公園駐車場（岬第1駐車場・岬第2駐車場・潮騒ビバレー駐車場）",
    "address": "大阪府泉南郡岬町淡輪地先",
    "latitude": 34.313828,
    "longitude": 135.182571,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27366",
    "cityName": "岬町",
    "accessibleSpaceTotal": 7,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳、療育手帳、被爆者健康手帳、特定疾患医療受給者証、小児慢性特定疾患医療受診券のいずれかの交付を受けた方が乗車している場合、駐車場利用料金を全額免除。入庫時にインターフォンで係員に申し出のうえ、手帳またはミライロIDを提示(バス等大型車は事前に公園管理事務所へ申請が必要)。"
    },
    "accessibleSpaces": [
      {
        "count": 7
      }
    ],
    "notes": "通常料金: 普通車:平日320円・土日祝640円/大型車:平日1,050円・土日祝2,100円\n障害者割引: 無料",
    "sourceUrl": "https://sennan.osaka-park.or.jp/parkingarea/",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "27383-001",
    "name": "大阪府立金剛登山道駐車場(第一・第二駐車場)",
    "address": "大阪府南河内郡千早赤阪村大字千早1330-2",
    "latitude": 34.407166,
    "longitude": 135.669693,
    "prefectureCode": "27",
    "prefectureName": "大阪府",
    "cityCode": "27383",
    "cityName": "千早赤阪村",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・精神障害者保健手帳・療育手帳の所持者、特定医療費(指定難病)受給者証・小児慢性特定疾病医療受給者証・被爆者健康手帳の所持者およびその介護者が対象。対象施設利用時に駐車場料金が全額免除(テントサイト・バーベキューロストル等は半額免除)。手帳・受給者証の提示が必要。管理は一般財団法人大阪府みどり公社。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車 1日600円、大型バス 1日1,300円\n障害者割引: 無料(全額免除)\n総台数: 307台",
    "sourceUrl": "https://osaka-midori.jp/mori/parking.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23101-001",
    "name": "名古屋市吹上中央帯駐車場",
    "address": "愛知県名古屋市千種区吹上二丁目13番",
    "latitude": 35.158993,
    "longitude": 136.929733,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23101",
    "cityName": "名古屋市千種区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、戦傷病者手帳、愛護(療育)手帳、被爆者健康手帳、精神障害者保健福祉手帳、特定医療費受給者証(指定難病)等の受給者証を所持する方が運転または同乗する場合が対象。駐車料金を支払う前に駐車整理券と手帳等を管理事務所(出口ゲートのインターフォン)で提示し減免手続きを行う。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分200円(平日1日最大2,000円)\n障害者割引: 入庫後8時間まで全額免除(8時間超過分は5割減額)\n総台数: 171台",
    "sourceUrl": "https://www.city.nagoya.jp/ryokuseidoboku/page/0000013132.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23101-002",
    "name": "名古屋市池下駐車場",
    "address": "愛知県名古屋市千種区覚王山通8丁目29番1",
    "latitude": 35.166451,
    "longitude": 136.947205,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23101",
    "cityName": "名古屋市千種区",
    "accessibleSpaceTotal": 0,
    "discountType": "unknown",
    "discount": {
      "type": "unknown",
      "conditions": "身体障害者手帳、愛護(療育)手帳、精神障害者保健福祉手帳、戦傷病者手帳、被爆者健康手帳、特定医療費受給者証(指定難病)等を所持する方が運転または同乗する場合が対象。駐車料金を支払う前に駐車整理券と手帳等を駐車場管理事務所に提示し減免手続きを行う。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分200円(0時~7時は1回600円)\n障害者割引: 駐車料金の50%減額\n総台数: 190台",
    "sourceUrl": "https://www.city.nagoya.jp/ryokuseidoboku/page/0000013137.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23101-003",
    "name": "東山動植物園駐車場(正門前・北園門前・新池・スカイタワー前など園内全駐車場)",
    "address": "愛知県名古屋市千種区東山元町3-70",
    "latitude": 35.153454,
    "longitude": 136.976807,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23101",
    "cityName": "名古屋市千種区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、戦傷病者手帳、愛護(療育)手帳、被爆者健康手帳、精神障害者保健福祉手帳、特定医療費受給者証(指定難病)、その他難病患者向け受給者証、または障害者手帳アプリ「ミライロID」所持者が対象。手続きは、駐車場入口の自動改札機で一旦全額支払い領収書を受取り、入園門の券売所で手帳等原本(コピー不可)と領収書を提示すると駐車料金が全額返金される。ミライロID利用者は入庫時に画面提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通自動車1回800円(2026年9月30日まで、10月1日以降1,000円)、大型自動車1回2,000円、自動二輪車等1回400円\n障害者割引: 駐車料金全額免除(返金方式)\n総台数: 1600台",
    "sourceUrl": "https://www.higashiyama.city.nagoya.jp/01_annai/01_02koutsu/01_02-01.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23101-004",
    "name": "千種文化小劇場(ちくさ座)駐車場",
    "address": "愛知県名古屋市千種区千種三丁目6番10号",
    "latitude": 35.161369,
    "longitude": 136.935471,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23101",
    "cityName": "名古屋市千種区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、戦傷病者手帳、被爆者健康手帳、精神障害者保健福祉手帳、愛護(療育)手帳等の手帳所持者本人が運転する普通自動車が対象(障害者手帳アプリ「ミライロID」対応)。詳細な手続きは施設窓口で要確認。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1日1回 普通自動車300円\n障害者割引: 駐車料金全額免除\n総台数: 13台",
    "sourceUrl": "https://www.bunka758.or.jp/facility/parking/",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23102-001",
    "name": "徳川園駐車場(北駐車場・南駐車場)",
    "address": "愛知県名古屋市東区徳川町1001",
    "latitude": 35.183765,
    "longitude": 136.933029,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23102",
    "cityName": "名古屋市東区",
    "accessibleSpaceTotal": 5,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・戦傷病者手帳・被爆者健康手帳・精神障害者保健福祉手帳・愛護手帳(療育手帳)・特定医療費受給者証(難病)等を所持する本人が乗車している自動車(大型車を除く)が対象。南駐車場は駐車後、駐車場出入口の駐車場事務所に手帳を提示。北駐車場は出庫前に駐車場出入口の駐車場事務所にて駐車券と一緒に手帳を提示。"
    },
    "accessibleSpaces": [
      {
        "count": 5
      }
    ],
    "notes": "通常料金: 普通車:25分毎100円(当日最大1,000円、6:00~23:00) 北駐車場地下79台(身障者用2台)。南駐車場は大型車専用4台+身障者用3台、大型車は最初の1時間500円・以降30分毎500円(9:15~17:45)\n障害者割引: 無料\n総台数: 79台",
    "sourceUrl": "https://www.tokugawaen.aichi.jp/transportation-guide/index.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23102-002",
    "name": "東文化小劇場駐車場(カルポート東駐車場、東図書館・市民ギャラリー矢田・東スポーツセンター共用)",
    "address": "愛知県名古屋市東区大幸南一丁目1番10号 カルポート東",
    "latitude": 35.188923,
    "longitude": 136.946381,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23102",
    "cityName": "名古屋市東区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・戦傷病者手帳・被爆者健康手帳・精神障害者保健福祉手帳・愛護手帳(療育手帳)、または種別「難病患者」の医療受給者証・障害福祉サービス受給者証・地域相談支援受給者証・移動支援/地域活動支援受給者証を所持する本人が乗車している普通自動車が対象。ミライロID利用可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1日1回 普通自動車300円(回数券11回分3,000円/25回分5,000円)\n障害者割引: 無料(全額減免)\n総台数: 102台",
    "sourceUrl": "https://www.bunka758.or.jp/facility/parking/",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23103-001",
    "name": "名古屋市大曽根駐車場",
    "address": "愛知県名古屋市北区大曽根三丁目1201番",
    "latitude": 35.191853,
    "longitude": 136.93512,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23103",
    "cityName": "名古屋市北区",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳、戦傷病者手帳、被爆者健康手帳、精神障害者保健福祉手帳、愛護手帳、特定医療費受給者証等の交付を受けている方が運転または同乗する自家用車(定期券・回数券は対象外)。駐車場使用料を支払う前に駐車整理券と手帳等を大曽根駐車場管理事務所(TEL 052-991-6612)に提示し減額手続きを行う。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 10分50円、最大料金 昼間(7:00〜翌0:00)1,200円・夜間(0:00〜7:00)500円\n障害者割引: 5割減額\n総台数: 146台",
    "sourceUrl": "https://www.city.nagoya.jp/ryokuseidoboku/page/0000013141.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23103-002",
    "name": "名城公園北園駐車場",
    "address": "愛知県名古屋市北区名城一丁目",
    "latitude": 35.189117,
    "longitude": 136.901443,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23103",
    "cityName": "名古屋市北区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "名城公園の利用が目的で、身体障害者手帳・愛護手帳・精神障害者保健福祉手帳・戦傷病者手帳・被爆者健康手帳・特定医療費受給者証・難病関連受給者証等の所持者が運転または同乗する自家用車(大型車を除く)が対象。手帳等を係員またはインターホン越しにカメラへ提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 24時間 30分230円\n障害者割引: 無料(全額減額)",
    "sourceUrl": "https://www.kaigo-wel.city.nagoya.jp/view/wel/shiori/kokyo_ryokin/koen_tyusyajyo.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23103-003",
    "name": "名城公園北園第2駐車場",
    "address": "愛知県名古屋市北区名城一丁目2-25",
    "latitude": 35.189415,
    "longitude": 136.903809,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23103",
    "cityName": "名古屋市北区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、愛護手帳、精神障害者保健福祉手帳、戦傷病者手帳、被爆者健康手帳、難病関連受給者証等をお持ちの方。駐車券を使わずインターフォンを押し、カメラに手帳をかざすと出口ゲートが開く方式。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 有料(名城公園フラワープラザ料金表による、名城公園野球場南)\n障害者割引: 無料(全額)",
    "sourceUrl": "https://www.meijyo-fp.com/facility/cafe-49129/index.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23103-004",
    "name": "北文化小劇場駐車場(北図書館共用)",
    "address": "愛知県名古屋市北区志賀町4丁目60番地の31",
    "latitude": 35.203732,
    "longitude": 136.912521,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23103",
    "cityName": "名古屋市北区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、戦傷病者手帳、被爆者健康手帳、精神障害者保健福祉手帳、愛護手帳(療育手帳)等をお持ちの本人が乗車している普通自動車が対象。障害者手帳アプリ「ミライロID」利用可。手続き方法の詳細は施設(TEL 052-910-3366)へ要確認。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1日1回 普通自動車300円\n障害者割引: 無料(全額免除)\n総台数: 31台",
    "sourceUrl": "https://www.bunka758.or.jp/facility/parking/",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23103-005",
    "name": "北スポーツセンター駐車場",
    "address": "愛知県名古屋市北区成願寺一丁目6番12号",
    "latitude": 35.215233,
    "longitude": 136.9142,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23103",
    "cityName": "名古屋市北区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳、戦傷病者手帳、被爆者健康手帳、精神障がい者保健福祉手帳、愛護手帳の交付を受けている方は使用料免除。同行の介護者2名までも使用料免除。問い合わせ TEL 052-917-0501。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 有料(詳細な時間料金は施設へ要確認)\n障害者割引: 使用料免除(無料)\n総台数: 156台",
    "sourceUrl": "https://www.nagoya-rehab.or.jp/portal/facility/2000053.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23104-001",
    "name": "西文化小劇場・西図書館共用駐車場",
    "address": "愛知県名古屋市西区花の木二丁目18番23号",
    "latitude": 35.189823,
    "longitude": 136.889984,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23104",
    "cityName": "名古屋市西区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳、愛護手帳(療育手帳)、戦傷病者手帳、被爆者健康手帳、特定医療費受給者証(難病患者)等をお持ちのご本人が乗車している普通自動車が対象。手帳またはミライロID提示で駐車場利用料金が全額無料。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1日1回 普通自動車300円\n障害者割引: 無料\n総台数: 40台",
    "sourceUrl": "https://www.bunka758.or.jp/facility/parking/",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23104-002",
    "name": "庄内緑地(庄内緑地グリーンプラザ)駐車場",
    "address": "愛知県名古屋市西区山田町大字上小田井字敷地3527",
    "latitude": 35.215015,
    "longitude": 136.886612,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23104",
    "cityName": "名古屋市西区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "公園利用が目的で、身体障害者手帳、愛護手帳(療育手帳等)、戦傷病者手帳、被爆者健康手帳、精神障害者保健福祉手帳、特定医療費受給者証等(難病患者含む)を所持し運転または同乗する普通自動車(自家用車)が対象。係員に手帳等を提示(コピー不可)。日付をまたぐ利用は対象外。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通自動車 基本料金1時間以内200円、以降2時間毎200円加算(平日30分無料)\n障害者割引: 無料(全額減免)\n総台数: 643台",
    "sourceUrl": "https://shonai-ryokuchi.jp/access/parking.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23104-003",
    "name": "西生涯学習センター駐車場",
    "address": "愛知県名古屋市西区浄心一丁目1-45",
    "latitude": 35.19302,
    "longitude": 136.890625,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23104",
    "cityName": "名古屋市西区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、戦傷病者手帳、被爆者健康手帳、精神障害者保健福祉手帳、愛護手帳(これに類するものを含む)、難病患者の特定医療費受給者証等をお持ちの方は窓口で手帳またはミライロID提示により駐車料金無料。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1台につき1回300円(30分以内無料)。令和8年10月1日より500円に改定。\n障害者割引: 無料\n総台数: 13台",
    "sourceUrl": "https://www.city.nagoya.jp/kodomo/shougaigakushu/1015902/1015903/1034379/1015907.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23105-001",
    "name": "中村公園文化プラザ駐車場(中村図書館・中村文化小劇場共用)",
    "address": "愛知県名古屋市中村区中村町字茶ノ木25番地",
    "latitude": 35.174046,
    "longitude": 136.853912,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23105",
    "cityName": "名古屋市中村区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、戦傷病者手帳、被爆者健康手帳、精神障害者保健福祉手帳、愛護手帳(療育手帳)等の手帳所持者本人が乗車する普通自動車が対象。精算窓口/係員に手帳(またはミライロID)を提示することで駐車料金が全額減免される。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 1回300円(入庫後30分以内は無料)※2026年10月1日から1回500円に改定予定\n障害者割引: 無料(全額減免)\n総台数: 26台",
    "sourceUrl": "https://www.bunka758.or.jp/facility/parking/",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23105-002",
    "name": "中村生涯学習センター駐車場",
    "address": "愛知県名古屋市中村区鳥居通3-1-3",
    "latitude": 35.174583,
    "longitude": 136.864548,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23105",
    "cityName": "名古屋市中村区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳等をお持ちの方は駐車料金が減免(施設利用料金自体は減免対象外、駐車料金のみ対象)。ミライロIDの提示も可能。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 1回300円(入庫後30分以内は無料)※2026年10月1日から1回500円に改定予定\n障害者割引: 無料(全額減免)\n総台数: 23台",
    "sourceUrl": "https://www.city.nagoya.jp/kodomo/shougaigakushu/1015902/1015903/1034379/1015908.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23105-003",
    "name": "中村公園駐車場(予約者専用駐車場)",
    "address": "愛知県名古屋市中村区中村町高畑68",
    "latitude": 35.175304,
    "longitude": 136.854553,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23105",
    "cityName": "名古屋市中村区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、愛護手帳(療育手帳)、精神障害者保健福祉手帳、戦傷病者手帳、被爆者健康手帳、難病患者向け受給者証等の所持者(大型自動車を除く)が対象。駐車場係員に手帳(またはミライロID)を提示。利用には事前に中村公園事務所(052-413-5525)への予約が必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車1回300円、大型バス1回2,000円(利用時間8:45~17:30)※2026年10月1日から普通車1回500円に改定予定\n障害者割引: 無料(全額減免)",
    "sourceUrl": "https://www.nakamura-park.com/access/index.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23106-001",
    "name": "久屋駐車場",
    "address": "愛知県名古屋市中区栄三丁目5番12号先",
    "latitude": 35.168533,
    "longitude": 136.908096,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23106",
    "cityName": "名古屋市中区",
    "accessibleSpaceTotal": 0,
    "discountType": "unknown",
    "discount": {
      "type": "unknown",
      "conditions": "身体障害者手帳、戦傷病者手帳、被爆者健康手帳、精神障害者保健福祉手帳、愛護手帳、特定医療費受給者証、指定難病要支援者証明事業により発行される登録者証等を所持する方が運転または同乗する場合が対象。支払い前に駐車整理券と手帳等を駐車場管理事務所(052-261-8505)へ提示し減額手続きが必要(精算後は不可)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 昼間(7時~24時)30分300円(平日最大1,500円)、夜間(24時~7時)600円\n障害者割引: 駐車料金の50%減額(定期券・回数券は対象外)\n総台数: 509台",
    "sourceUrl": "https://www.city.nagoya.jp/jutakutoshi/page/0000012689.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23106-002",
    "name": "大須駐車場",
    "address": "愛知県名古屋市中区大須三丁目14番12号",
    "latitude": 35.161163,
    "longitude": 136.90271,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23106",
    "cityName": "名古屋市中区",
    "accessibleSpaceTotal": 0,
    "discountType": "unknown",
    "discount": {
      "type": "unknown",
      "conditions": "身体障害者手帳、戦傷病者手帳、被爆者健康手帳、精神障害者保健福祉手帳、愛護手帳、特定医療費受給者証、指定難病要支援者証明事業の登録者証、難病患者に該当する障害福祉サービス受給者証等を所持する方が運転または同乗する場合が対象。支払い前に駐車整理券と手帳等を駐車場管理事務所(052-251-6775)へ提示し減額手続きが必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 昼間(7時~22時)平日30分200円(最大1,000円)・休日30分300円、夜間(22時~7時)600円\n障害者割引: 駐車料金の50%減額(定期券・回数券は対象外)\n総台数: 202台",
    "sourceUrl": "https://www.city.nagoya.jp/jutakutoshi/page/0000012694.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23106-003",
    "name": "古沢公園駐車場",
    "address": "愛知県名古屋市中区金山一丁目3番1号",
    "latitude": 35.146961,
    "longitude": 136.901443,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23106",
    "cityName": "名古屋市中区",
    "accessibleSpaceTotal": 0,
    "discountType": "unknown",
    "discount": {
      "type": "unknown",
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳、愛護手帳、特定医療費受給者証、指定難病要支援者証明登録者証、特定の障害福祉サービス受給者証等を所持する方が運転または同乗する場合が対象。駐車前に管理事務所(052-331-4048)で減額手続きが必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 昼間(7時~22時)30分200円、夜間(22時~7時)600円\n障害者割引: 駐車料金の50%減額(定期券・回数券は対象外)\n総台数: 249台",
    "sourceUrl": "https://www.city.nagoya.jp/jutakutoshi/page/0000012703.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23106-004",
    "name": "久屋大通庭園フラリエ駐車場",
    "address": "愛知県名古屋市中区大須四丁目4番1号",
    "latitude": 35.161655,
    "longitude": 136.908325,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23106",
    "cityName": "名古屋市中区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "conditions": "身体障害者手帳、愛護手帳、精神障害者保健福祉手帳、戦傷病者手帳、被爆者健康手帳、特定医療費受給者証等の難病患者向け受給者証等を所持する方が運転または同乗する自家用自動車(大型自動車を除く)が対象。公園利用が目的であること。手帳・受給者証のコピー不可、原本を係員またはインターホン越しに提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8時~22時 30分200円、22時~8時 60分100円\n障害者割引: 使用料全額免除(ただし午前0時~午前8時の利用は減額対象外)\n総台数: 18台",
    "sourceUrl": "https://www.nga.or.jp/exemption/",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23107-001",
    "name": "名古屋市吹上駐車場",
    "address": "愛知県名古屋市昭和区吹上二丁目1番",
    "latitude": 35.157478,
    "longitude": 136.930344,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23107",
    "cityName": "名古屋市昭和区",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳、戦傷病者手帳、愛護手帳(療育手帳)、被爆者健康手帳、精神障害者保健福祉手帳等の所持者。名古屋市営駐車場は8か所あり、久屋・大須・古沢公園・池下・大曽根駐車場は5割減額、吹上・吹上中央帯・金城ふ頭駐車場は全額免除(吹上は8時間超過分のみ5割)。管理事務所で駐車券と手帳を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8時~21時 30分200円、21時~翌8時 1回600円(平日1日最大2,000円)\n障害者割引: 入庫後8時間まで全額免除、8時間超過分は5割減額\n総台数: 199台",
    "sourceUrl": "https://www.city.nagoya.jp/ryokuseidoboku/page/0000013127.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23107-002",
    "name": "昭和文化小劇場 駐車場",
    "address": "愛知県名古屋市昭和区花見通1丁目41番地の2",
    "latitude": 35.149921,
    "longitude": 136.948929,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23107",
    "cityName": "名古屋市昭和区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、戦傷病者手帳、被爆者健康手帳、精神障害者保健福祉手帳、愛護手帳(療育手帳)、医療受給者証(種別「難病患者」)、障害福祉サービス受給者証(種別「難病患者」)、地域相談支援受給者証(種別「難病患者」)、移動支援・地域活動支援受給者証(種別「難病患者」)所持者本人が乗車する普通自動車が対象。ミライロID利用可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通自動車1日1回300円\n障害者割引: 全額免除\n総台数: 25台",
    "sourceUrl": "https://www.bunka758.or.jp/facility/parking/",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23107-003",
    "name": "鶴舞公園駐車場(北・岡谷鋼機名古屋公会堂側)",
    "address": "愛知県名古屋市昭和区鶴舞1丁目1番",
    "latitude": 35.154156,
    "longitude": 136.917221,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23107",
    "cityName": "名古屋市昭和区",
    "accessibleSpaceTotal": 4,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "公園利用目的で身体障害者手帳、愛護手帳(療育手帳等)、戦傷病者手帳、被爆者健康手帳、精神障害者保健福祉手帳、特定医療費受給者証等を所持し運転又は同乗する普通自動車が対象。精算機付近のカメラ付インターホンで申し出て駐車券と手帳(コピー不可)を提示、またはミライロID利用可。障害者用スペースは公会堂裏2台・正面玄関寄り2台の計4台。"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 30分200円(平日9:00~17:00は最大1,400円)、入出庫24時間可能\n障害者割引: 全額免除\n総台数: 150台",
    "sourceUrl": "https://www.kaigo-wel.city.nagoya.jp/view/wel/shiori/kokyo_ryokin/koen_tyusyajyo.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23107-004",
    "name": "鶴舞公園秋の池駐車場",
    "address": "愛知県名古屋市昭和区鶴舞1丁目",
    "latitude": 35.154938,
    "longitude": 136.92009,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23107",
    "cityName": "名古屋市昭和区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "公園利用目的で身体障害者手帳、愛護手帳(療育手帳等)、戦傷病者手帳、被爆者健康手帳、精神障害者保健福祉手帳、特定医療費受給者証等を所持し運転又は同乗する普通自動車が対象。精算機付近のインターホンで申し出て駐車券と手帳を提示、ミライロID利用可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分200円(平日は最大1,400円)、入出庫24時間可能\n障害者割引: 全額免除\n総台数: 42台",
    "sourceUrl": "https://www.kaigo-wel.city.nagoya.jp/view/wel/shiori/kokyo_ryokin/koen_tyusyajyo.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23107-005",
    "name": "鶴舞公園南駐車場(テラスポ鶴舞・名古屋市障害者スポーツセンター側)",
    "address": "愛知県名古屋市昭和区鶴舞1丁目1番156号",
    "latitude": 35.154915,
    "longitude": 136.916733,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23107",
    "cityName": "名古屋市昭和区",
    "accessibleSpaceTotal": 2,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、戦傷病者手帳、被爆者健康手帳、精神障害者保健福祉手帳、愛護手帳(療育手帳)所持者。公園駐車場の障害者減免制度(有料公園施設使用料の減額・全額)が適用され、精算機インターホンで手帳提示。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 20分100円(入庫AM4:30~AM0:00/出庫24時間可能)\n障害者割引: 全額免除\n総台数: 92台",
    "sourceUrl": "https://www.nagoya-rehab.or.jp/portal/facility/2000072.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23108-001",
    "name": "瑞穂区役所地下駐車場",
    "address": "愛知県名古屋市瑞穂区瑞穂通3-32",
    "latitude": 35.131516,
    "longitude": 136.934753,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23108",
    "cityName": "名古屋市瑞穂区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "区役所地下駐車場は障害の有無にかかわらず全利用者が無料。43台(公用車6台と共用)のうち1台が車いす利用者はじめ障害のある方の優先スペース。車高2.3m超の車両は入場不可。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 無料(全利用者対象、駐車料金・駐車券は発生しません)\n障害者割引: 無料\n総台数: 43台",
    "sourceUrl": "https://www.city.nagoya.jp/mizuho/page/0000176278.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23108-002",
    "name": "瑞穂文化小劇場駐車場",
    "address": "愛知県名古屋市瑞穂区豊岡通3-29",
    "latitude": 35.121857,
    "longitude": 136.941101,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23108",
    "cityName": "名古屋市瑞穂区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、戦傷病者手帳、被爆者健康手帳、精神障害者保健福祉手帳、愛護手帳(療育手帳)、医療受給者証・障害福祉サービス受給者証(難病患者)等をお持ちのご本人が乗車する普通自動車が対象。ミライロID提示可。精算時に施設窓口へ手帳等を提示。駐車場は瑞穂図書館と共用(48台)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1回300円(30分以内無料)\n障害者割引: 無料(全額減免)\n総台数: 48台",
    "sourceUrl": "https://www.bunka758.or.jp/facility/parking/",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23108-003",
    "name": "名古屋市瑞穂図書館駐車場",
    "address": "愛知県名古屋市瑞穂区豊岡通3丁目29番地",
    "latitude": 35.121857,
    "longitude": 136.941101,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23108",
    "cityName": "名古屋市瑞穂区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、被爆者健康手帳、戦傷病者手帳等の手帳・受給者証をお持ちの方(敬老手帳は対象外)は、精算時に窓口で手帳を提示することで全額減免。事前申請不要。駐車場は瑞穂文化小劇場と共用(48台)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1回300円(30分以内無料)\n障害者割引: 無料(全額減免)\n総台数: 48台",
    "sourceUrl": "https://www.library.city.nagoya.jp/guide/annai.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23108-004",
    "name": "瑞穂生涯学習センター駐車場",
    "address": "愛知県名古屋市瑞穂区惣作町2-27-3",
    "latitude": 35.120274,
    "longitude": 136.925507,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23108",
    "cityName": "名古屋市瑞穂区",
    "accessibleSpaceTotal": 1,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "conditions": "公式ページ原文:「30分以内無料、身体障害者手帳等をお持ちの方は減免」。全額か一部かは明記なし。詳細は瑞穂生涯学習センター(電話052-871-2255)へ要確認。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 1回300円(30分以内無料)※2026年10月1日から1回500円に改定予定\n障害者割引: 減免あり(減免率の明記なし)\n総台数: 19台",
    "sourceUrl": "https://www.city.nagoya.jp/kyoiku/page/0000051929.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23108-005",
    "name": "パロマ瑞穂スポーツパーク駐車場",
    "address": "愛知県名古屋市瑞穂区山下通5丁目1番地",
    "latitude": 35.124908,
    "longitude": 136.941589,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23108",
    "cityName": "名古屋市瑞穂区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、戦傷病者手帳、被爆者健康手帳、精神障害者保健福祉手帳、愛護手帳(療育手帳等)をお持ちの方が同乗する普通車が対象(マイクロバス等大型車は対象外)。駐車料金支払時の領収書と手帳を持参し管理事務所へ申し出ることで駐車料金を全額減免。身障者用駐車スペースの事前予約は不可。園内5駐車場(P1~P5、合計1,656台)共通の制度。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通自動車 1日1回500円(大型車2,000円)\n障害者割引: 無料(全額減免)\n総台数: 1656台",
    "sourceUrl": "https://www.nespa.or.jp/shisetsu/mizuho/barrierfree/",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23109-001",
    "name": "白鳥庭園駐車場",
    "address": "愛知県名古屋市熱田区熱田西町2-5",
    "latitude": 35.125439,
    "longitude": 136.901764,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23109",
    "cityName": "名古屋市熱田区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、愛護手帳(療育手帳)、戦傷病者手帳、被爆者健康手帳、精神障害者保健福祉手帳、特定医療費受給者証、障害福祉サービス受給者証(障害種別4・5のみ)等の手帳所持者、及び介護者(必要に応じて2名まで)は入園時に窓口で手帳またはデジタル障害者手帳「ミライロID」を提示すれば入園料が無料となり、駐車料金も無料(駐車券を窓口へ提出)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通自動車1回500円\n障害者割引: 無料\n総台数: 40台",
    "sourceUrl": "https://www.shirotori-garden.jp/guidance/waribiki/index.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23109-002",
    "name": "名古屋市体育館駐車場",
    "address": "愛知県名古屋市熱田区六野二丁目5番3号",
    "latitude": 35.134384,
    "longitude": 136.914093,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23109",
    "cityName": "名古屋市熱田区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳等の所持者は、駐車場利用時に手帳を提示することにより駐車料金が無料となる。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 普通自動車1日1回300円(回数券あり、30分以内無料)\n障害者割引: 無料\n総台数: 45台",
    "sourceUrl": "https://www.nagoyashi-taiikukan.jp/parking.php",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23109-003",
    "name": "熱田生涯学習センター駐車場",
    "address": "愛知県名古屋市熱田区熱田西町2-13",
    "latitude": 35.126167,
    "longitude": 136.899551,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23109",
    "cityName": "名古屋市熱田区",
    "accessibleSpaceTotal": 1,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "conditions": "原文「30分以内無料、身体障害者手帳等をお持ちの方は減免」。名古屋市公共施設のミライロID利用可能施設一覧(生涯学習センター区分)でも「駐車料金が対象となります。施設の利用料金は減免されません。」と案内されているが、減免率(全額か一部か)の明記はなく要問合せ。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 普通自動車1台につき1回300円(令和8年10月1日から500円、30分以内無料)\n障害者割引: 減免(具体的な割引率は公式ページに記載なし)\n総台数: 16台",
    "sourceUrl": "https://www.city.nagoya.jp/kyoiku/page/0000051927.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23110-001",
    "name": "中川文化小劇場・中川図書館共用駐車場",
    "address": "愛知県名古屋市中川区吉良町178番地の3",
    "latitude": 35.13802,
    "longitude": 136.861832,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23110",
    "cityName": "名古屋市中川区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳、愛護手帳(療育手帳)等をお持ちのご本人が乗車している普通自動車が対象。ミライロID提示も可。管理事務所窓口にて手帳またはミライロIDを提示し減免手続きを行う。中川文化小劇場と中川図書館が共用する駐車場(85台)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通自動車 1日1回300円(現金のみ)\n障害者割引: 無料(全額減免)\n総台数: 85台",
    "sourceUrl": "https://www.bunka758.or.jp/facility/parking/",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23111-001",
    "name": "名古屋市営金城ふ頭駐車場",
    "address": "愛知県名古屋市港区金城ふ頭二丁目7番2",
    "latitude": 35.050579,
    "longitude": 136.84938,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23111",
    "cityName": "名古屋市港区",
    "accessibleSpaceTotal": 100,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、戦傷病者手帳、被爆者健康手帳、精神障害者保健福祉手帳、愛護手帳、特定医療費受給者証、指定難病要支援者証明事業による登録者証等をお持ちの方が運転または同乗する場合に対象。駐車料金を支払う前に、駐車整理券と手帳等を駐車場管理事務所に提示して減免手続きが必要。名古屋市営駐車場8か所のうち、久屋・大須・古沢公園・池下・大曽根は50%減免だが、当駐車場は吹上・吹上中央帯と並び100%減免。名古屋港水族館・ポートメッセなごや来場者も利用。"
    },
    "accessibleSpaces": [
      {
        "count": 100
      }
    ],
    "notes": "通常料金: 60分500円(平日最大1,000円・休日最大1,500円)\n障害者割引: 無料(駐車場使用料100%減免)\n総台数: 5005台",
    "sourceUrl": "https://www.kaigo-wel.city.nagoya.jp/view/wel/shiori/kokyo_ryokin/shiei_tyusyajyo.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23111-002",
    "name": "名古屋港水族館 身体障がい者用駐車場",
    "address": "愛知県名古屋市港区港町1番3号",
    "latitude": 35.092251,
    "longitude": 136.878876,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23111",
    "cityName": "名古屋市港区",
    "accessibleSpaceTotal": 8,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳、療育手帳・愛護手帳等、被爆者健康手帳、戦傷病者手帳のいずれかを提示(障害者手帳アプリ「ミライロID」でも可)。水族館北側に隣接し8台分、先着順・予約不可。満車の場合は隣接の有料一般駐車場を利用。"
    },
    "accessibleSpaces": [
      {
        "count": 8
      }
    ],
    "notes": "障害者割引: 無料",
    "sourceUrl": "https://nagoyaaqua.jp/news/other/28173/",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23111-003",
    "name": "荒子川公園駐車場(北駐車場ほか)",
    "address": "愛知県名古屋市港区品川町2丁目1-1(荒子川公園ガーデンプラザ)",
    "latitude": 35.102798,
    "longitude": 136.860397,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23111",
    "cityName": "名古屋市港区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、愛護手帳、精神障害者保健福祉手帳、戦傷病者手帳、被爆者健康手帳、特定医療費受給者証等の難病関連受給者証をお持ちの方が運転または同乗する普通自動車が対象(名古屋市有料公園施設使用料減免制度、対象15公園の一つ)。係員に手帳等原本を提示(コピー不可)。日をまたぐ利用は対象外。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 無料(初夏・秋のイベント開催期間中の北駐車場のみ有料500円)\n障害者割引: 無料(全額免除)",
    "sourceUrl": "https://www.nga.or.jp/exemption/",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23111-004",
    "name": "戸田川緑地駐車場(第1~第5駐車場)",
    "address": "愛知県名古屋市港区春田野2-3204",
    "latitude": 35.115471,
    "longitude": 136.812531,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23111",
    "cityName": "名古屋市港区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳等をお持ちの方が運転または同乗する普通自動車が対象(名古屋市有料公園施設使用料減免制度、対象15公園の一つ)。係員に手帳等原本を提示(コピー不可)。イベント有料期間のみ実質的に適用対象。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 無料(初夏の物語・秋の物語開催期間中のみ有料: 普通車500円/回)\n障害者割引: 無料(全額免除)\n総台数: 1101台",
    "sourceUrl": "https://www.nga.or.jp/exemption/",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23112-001",
    "name": "名古屋市南文化小劇場駐車場(南図書館共用)",
    "address": "愛知県名古屋市南区千竈通2丁目10番地の2",
    "latitude": 35.105766,
    "longitude": 136.923782,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23112",
    "cityName": "名古屋市南区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・精神障害者保健福祉手帳・愛護手帳(療育手帳)等をお持ちのご本人が乗車している普通自動車が対象。駐車場利用料金を全額減免。ミライロID利用可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通自動車300円(1日1回)\n障害者割引: 無料\n総台数: 42台",
    "sourceUrl": "https://www.bunka758.or.jp/facility/minami/",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23112-002",
    "name": "名古屋市総合体育館(日本ガイシ スポーツプラザ/日本ガイシホール)駐車場",
    "address": "愛知県名古屋市南区東又兵ヱ町5丁目1番地の16",
    "latitude": 35.095299,
    "longitude": 136.921722,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23112",
    "cityName": "名古屋市南区",
    "accessibleSpaceTotal": 13,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・戦傷病者手帳・被爆者健康手帳・精神障害者保健福祉手帳・愛護手帳(療育手帳)の交付を受けている方は使用料免除。同行する介護者2名までも同様に免除。受付にて手帳等を提示。"
    },
    "accessibleSpaces": [
      {
        "count": 13
      }
    ],
    "notes": "通常料金: 普通自動車(軽自動車含む)1台1日1回500円\n障害者割引: 無料\n総台数: 1385台",
    "sourceUrl": "https://www.nagoya-rehab.or.jp/portal/facility/2000031.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23112-003",
    "name": "道徳公園北駐車場",
    "address": "愛知県名古屋市南区道徳新町5丁目",
    "latitude": 35.103313,
    "longitude": 136.907379,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23112",
    "cityName": "名古屋市南区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、愛護手帳、戦傷病者手帳、被爆者健康手帳、精神障害者保健福祉手帳、特定医療費受給者証等の対象書類所持者(運転または同乗)が対象。有料公園施設(駐車場)使用料を全額減額。利用時に手帳等の原本を係員に提示(コピー不可、日をまたぐ利用は対象外)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 全日60分200円(入庫後6時間まで最大300円)\n障害者割引: 無料\n総台数: 21台",
    "sourceUrl": "https://www.kaigo-wel.city.nagoya.jp/view/wel/shiori/kokyo_ryokin/koen_tyusyajyo.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23113-001",
    "name": "名古屋市守山文化小劇場駐車場",
    "address": "愛知県名古屋市守山区小幡南一丁目24番10号 アクロス小幡3F",
    "latitude": 35.20084,
    "longitude": 136.97612,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23113",
    "cityName": "名古屋市守山区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、戦傷病者手帳、被爆者健康手帳、精神障害者保健福祉手帳、愛護手帳(療育手帳)等の手帳を持つ本人が乗車する普通自動車が対象。劇場専用(Dボタン)で入庫し劇場事務室で精算する場合のみ全額免除。一般(Aボタン)入庫分は事務室精算不可のため対象外。ミライロID可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 劇場専用(Dボタン)入庫:300円(1日1回)/一般(Aボタン)入庫:30分100円・1日600円(最初30分無料)\n障害者割引: 全額免除(劇場専用駐車場のみ)",
    "sourceUrl": "https://www.bunka758.or.jp/facility/moriyama/",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23113-002",
    "name": "名古屋市守山図書館駐車場",
    "address": "愛知県名古屋市守山区守山一丁目6番1号",
    "latitude": 35.196594,
    "longitude": 136.955185,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23113",
    "cityName": "名古屋市守山区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、被爆者健康手帳、戦傷病者手帳、精神障害者保健福祉手帳、愛護手帳等所持者(ミライロID可)。精算時に窓口で手帳等を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1回300円(30分以内無料)※2026年10月1日から500円に改定予定\n障害者割引: 無料(全額減免)\n総台数: 22台",
    "sourceUrl": "https://www.library.city.nagoya.jp/guide/annai.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23113-003",
    "name": "名古屋市志段味図書館駐車場",
    "address": "愛知県名古屋市守山区深沢一丁目101番地",
    "latitude": 35.237206,
    "longitude": 137.003677,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23113",
    "cityName": "名古屋市守山区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、被爆者健康手帳、戦傷病者手帳、精神障害者保健福祉手帳、愛護手帳等所持者(ミライロID可)。精算時に窓口で手帳等を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1回300円(30分以内無料)※2026年10月1日から500円に改定予定\n障害者割引: 無料(全額減免)\n総台数: 28台",
    "sourceUrl": "https://www.library.city.nagoya.jp/guide/annai.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23113-004",
    "name": "守山生涯学習センター駐車場",
    "address": "愛知県名古屋市守山区守山三丁目2-6",
    "latitude": 35.197544,
    "longitude": 136.956665,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23113",
    "cityName": "名古屋市守山区",
    "accessibleSpaceTotal": 1,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "conditions": "名古屋市公式ページに「身体障害者手帳等をお持ちの方は減免」と明記されているが、減免率・提示方法の詳細は記載なし。施設(電話052-791-7161)への要確認。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 1回300円(30分以内無料)※2026年10月1日から500円に改定予定\n障害者割引: 減免あり(減免率の明記なし)\n総台数: 28台",
    "sourceUrl": "https://www.city.nagoya.jp/kyoiku/page/0000051823.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23113-005",
    "name": "守山スポーツセンター(名古屋市障害者スポーツセンター)駐車場",
    "address": "愛知県名古屋市守山区竜泉寺2丁目112番地",
    "latitude": 35.218967,
    "longitude": 136.983276,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23113",
    "cityName": "名古屋市守山区",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、戦傷病者手帳、被爆者健康手帳、精神障害者保健福祉手帳、愛護手帳等所持者。精算時に手帳等を提示。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 1回300円(30分以内無料)\n障害者割引: 無料(全額免除)\n総台数: 152台",
    "sourceUrl": "https://www.nagoya-rehab.or.jp/portal/facility/2000060.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23114-001",
    "name": "緑文化小劇場駐車場",
    "address": "愛知県名古屋市緑区乗鞍二丁目223番地の1",
    "latitude": 35.093246,
    "longitude": 136.998276,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23114",
    "cityName": "名古屋市緑区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳、愛護手帳(療育手帳)、戦傷病者手帳、被爆者健康手帳、特定医療費受給者証等をお持ちの方(ミライロID可)。精算時に窓口で手帳を提示して減免手続きを行う。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1日1回 普通自動車300円\n障害者割引: 無料(全額減免)\n総台数: 48台",
    "sourceUrl": "https://www.bunka758.or.jp/facility/parking/",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23114-002",
    "name": "名古屋市緑スポーツセンター駐車場",
    "address": "愛知県名古屋市緑区相原郷一丁目2901番地",
    "latitude": 35.081676,
    "longitude": 136.971909,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23114",
    "cityName": "名古屋市緑区",
    "accessibleSpaceTotal": 3,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、戦傷病者手帳、被爆者健康手帳、精神障害者保健福祉手帳、愛護手帳の交付を受けている方(敬老手帳は除く)。精算時に手帳を提示することで全額減免。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 1日1回 普通自動車300円(30分以内無料)\n障害者割引: 無料(全額減免)\n総台数: 177台",
    "sourceUrl": "https://www.jpn-sports.com/midori/access",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23114-003",
    "name": "名古屋市緑図書館駐車場",
    "address": "愛知県名古屋市緑区旭出一丁目1104番地",
    "latitude": 35.083958,
    "longitude": 136.965408,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23114",
    "cityName": "名古屋市緑区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、被爆者健康手帳、戦傷病者手帳、精神障害者保健福祉手帳、愛護手帳等の交付を受けている方。精算時に窓口で手帳等を提示することで全額減免(千種・楠・山田・熱田図書館は元々無料、徳重図書館は別体系のため対象外)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1回300円(30分以内無料)\n障害者割引: 無料(全額減免)\n総台数: 30台",
    "sourceUrl": "https://www.library.city.nagoya.jp/guide/annai.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23115-001",
    "name": "名東文化小劇場駐車場",
    "address": "愛知県名古屋市名東区上社一丁目802番地 上社ターミナルビル3階",
    "latitude": 35.173615,
    "longitude": 137.00647,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23115",
    "cityName": "名古屋市名東区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、戦傷病者手帳、被爆者健康手帳、精神障害者保健福祉手帳、愛護手帳(療育手帳)、特定医療費(指定難病)受給者証等の所持者本人が乗車する普通自動車が対象。障害者手帳アプリ「ミライロID」の提示も可。駐車料金を支払う前に手帳等を管理窓口へ提示して減免手続きを行う。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1日1回300円\n障害者割引: 無料(全額免除)\n総台数: 35台",
    "sourceUrl": "https://www.bunka758.or.jp/facility/meito/access/",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23116-001",
    "name": "天白公園駐車場",
    "address": "愛知県名古屋市天白区天白町大字島田字黒石",
    "latitude": 35.117764,
    "longitude": 136.986786,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23116",
    "cityName": "名古屋市天白区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、愛護手帳、精神障害者保健福祉手帳、戦傷病者手帳、被爆者健康手帳、特定医療費受給者証等の難病関連証を所持する方が運転又は同乗する自家用自動車(大型自動車を除く)が対象。駐車整理券とあわせて手帳等を駐車場管理事務所(蔦井株式会社 TEL 0120-924-396)に提示して減額手続きを行う。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 無料(全額減額)",
    "sourceUrl": "https://www.kaigo-wel.city.nagoya.jp/view/wel/shiori/kokyo_ryokin/koen_tyusyajyo.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23116-002",
    "name": "天白文化小劇場駐車場",
    "address": "愛知県名古屋市天白区原一丁目301番地 原ターミナルビル4階",
    "latitude": 35.125988,
    "longitude": 136.99617,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23116",
    "cityName": "名古屋市天白区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、戦傷病者手帳、被爆者健康手帳、精神障害者保健福祉手帳、愛護手帳(療育手帳)、難病患者向け各種受給者証保持者本人が乗車する普通自動車が対象。障害者手帳アプリ「ミライロID」可。窓口で手帳等を提示して手続き。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 300円(1日1回・普通自動車)\n障害者割引: 無料(全額減免)\n総台数: 25台",
    "sourceUrl": "https://www.bunka758.or.jp/facility/parking/",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23116-003",
    "name": "天白生涯学習センター駐車場",
    "address": "愛知県名古屋市天白区天白町大字島田字黒石4050番地",
    "latitude": 35.117764,
    "longitude": 136.986786,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23116",
    "cityName": "名古屋市天白区",
    "accessibleSpaceTotal": 1,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、愛護手帳(療育手帳を含む)、精神障害者保健福祉手帳、戦傷病者手帳、被爆者健康手帳の保持者は窓口で手帳を提示することで駐車料金が無料。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 300円(1日1回・普通自動車)※令和8年10月1日より500円に改定予定\n障害者割引: 無料\n総台数: 29台",
    "sourceUrl": "https://www.tenpaku.llc.nagoya/access/",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23116-004",
    "name": "名古屋市農業センターdelaふぁーむ駐車場",
    "address": "愛知県名古屋市天白区天白町大字平針字黒石2872番地の3",
    "latitude": 35.114296,
    "longitude": 137.011108,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23116",
    "cityName": "名古屋市天白区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害のある方は手帳を提示することで有料日(土日祝・まつり期間)の駐車料金が免除される。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 土日祝1台1回500円(しだれ梅まつり期間は1,000円)、平日及び12・1月は無料\n障害者割引: 無料(有料日の料金が免除)\n総台数: 224台",
    "sourceUrl": "https://dela-farm.com/",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23202-001",
    "name": "岡崎市図書館交流プラザ「りぶら」駐車場(康生パーク)",
    "address": "愛知県岡崎市康生通西4丁目71番地",
    "latitude": 34.959457,
    "longitude": 137.159195,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23202",
    "cityName": "岡崎市",
    "accessibleSpaceTotal": 6,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "身体障がい者手帳、療育手帳、精神障がい者保健福祉手帳、戦傷病者手帳、被爆者健康手帳のいずれかをお持ちの方、またはミライロIDの提示者が対象。図書館交流プラザ2階総合案内に手帳(またはミライロID画面)を提示すること。"
    },
    "accessibleSpaces": [
      {
        "count": 6
      }
    ],
    "notes": "通常料金: 入庫から2時間まで無料、以降30分毎100円(夜間22時~翌7時は30分毎50円)\n障害者割引: 3時間まで無料(一般利用者の2時間無料より1時間延長)\n総台数: 450台",
    "sourceUrl": "https://www.city.okazaki.lg.jp/libra/kotsu/1010198.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23203-001",
    "name": "一宮駅東地下駐車場・一宮市銀座通公共駐車場",
    "address": "愛知県一宮市栄2丁目・3丁目",
    "latitude": 35.304958,
    "longitude": 136.796906,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23203",
    "cityName": "一宮市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "障害者であることを理由に自動車税又は軽自動車税の減免を受けている方が対象(減免対象車両に限る)。障害福祉課(市役所本庁舎2階25番窓口)・尾西庁舎窓口課・木曽川庁舎総務窓口課で、自動車税減免の押印がある身体障害者手帳等と本人確認書類を提示して「特別利用証明書」の交付を受け、利用時に携帯する必要がある。申請書は窓口で作成可能。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 入庫から20分無料、午前7時~午後7時は30分ごとに100円、午後7時~翌午前1時は60分ごとに100円(午前7時~翌午前1時の上限1,000円)\n障害者割引: 普通使用料の2分の1(半額)\n総台数: 236台",
    "sourceUrl": "https://www.city.ichinomiya.aichi.jp/fukushi/shougaifukushi/1044107/1000147/1010684/1001074.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23203-002",
    "name": "一宮市本町自動車整理場",
    "address": "愛知県一宮市本町3丁目9-27",
    "latitude": 35.302235,
    "longitude": 136.799881,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23203",
    "cityName": "一宮市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "障害者であることを理由に自動車税又は軽自動車税の減免を受けている方が対象(減免対象車両に限る)。障害福祉課(市役所本庁舎2階25番窓口)・尾西庁舎窓口課・木曽川庁舎総務窓口課で、自動車税減免の押印がある身体障害者手帳等と本人確認書類を提示して「特別利用証明書」の交付を受け、利用時に携帯する必要がある。申請書は窓口で作成可能。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 午前7時~午後7時は30分ごとに100円、午後7時~翌午前1時は60分ごとに100円(午前1時~午前7時は利用不可)\n障害者割引: 普通使用料の2分の1(半額)\n総台数: 20台",
    "sourceUrl": "https://www.city.ichinomiya.aichi.jp/fukushi/shougaifukushi/1044107/1000147/1010684/1001074.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23203-003",
    "name": "一宮市大宮公園自動車整理場",
    "address": "愛知県一宮市真清田1丁目2-7",
    "latitude": 35.306919,
    "longitude": 136.801529,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23203",
    "cityName": "一宮市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "障害者であることを理由に自動車税又は軽自動車税の減免を受けている方が対象(減免対象車両に限る)。障害福祉課(市役所本庁舎2階25番窓口)・尾西庁舎窓口課・木曽川庁舎総務窓口課で、自動車税減免の押印がある身体障害者手帳等と本人確認書類を提示して「特別利用証明書」の交付を受け、利用時に携帯する必要がある。申請書は窓口で作成可能。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 営業時間午前8時~午後9時30分、最初の1時間150円、以降30分ごとに50円、夜間(午後9時~翌午前8時30分)は1台につき600円\n障害者割引: 普通使用料の2分の1(半額)\n総台数: 43台",
    "sourceUrl": "https://www.city.ichinomiya.aichi.jp/fukushi/shougaifukushi/1044107/1000147/1010684/1001074.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23205-001",
    "name": "半田市福祉文化会館駐車場(瀧上工業雁宿ホール)",
    "address": "愛知県半田市雁宿町一丁目22番地の1",
    "latitude": 34.89624,
    "longitude": 136.925125,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23205",
    "cityName": "半田市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 4,
      "conditions": "半田市身体障がい者福祉センター条例施行規則第4条の規定により利用証の交付を受け、同センター(福祉文化会館内に所在)を利用する者が対象。減免を受けるには利用証の提示が必要(半田市福祉文化会館駐車場管理規則第3条)。なお一般来館者(瀧上工業雁宿ホール利用者)は窓口で駐車券を提示すると入庫後1時間無料。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間まで210円、以降30分ごとに100円(1日最大640円、5:00~24:00・隣接雁宿駐車場と同一料金体系)\n障害者割引: 入庫時から240分(4時間)まで無料\n総台数: 100台",
    "sourceUrl": "https://www1.g-reiki.net/handa-fd/reiki_honbun/i507RG00000253.html",
    "updatedAt": "2026-08-17T00:00:00Z"
  },
  {
    "id": "23206-001",
    "name": "勝川駅南口立体駐車場",
    "address": "愛知県春日井市勝川町8丁目13番地",
    "latitude": 35.228088,
    "longitude": 136.955292,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23206",
    "cityName": "春日井市",
    "accessibleSpaceTotal": 2,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障がい者手帳、療育手帳、精神障がい者保健福祉手帳をお持ちの方が運転又は同乗して利用する場合、料金が3時間まで半額。お帰りの際、出口精算機にて割引の手続きが必要。手続き不明点は指定管理者の勝川開発株式会社(0568-34-6800)へ問い合わせ。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 入庫〜3時間まで30分ごとに150円、3時間超は900円(3時間分)+30分ごとに50円\n障害者割引: 3時間まで半額\n総台数: 73台",
    "sourceUrl": "https://www.city.kasugai.lg.jp/shisei/shisetsu/koutsu/1010596/kachigawaekiminami.html",
    "updatedAt": "2026-08-18T00:00:00Z"
  },
  {
    "id": "23206-002",
    "name": "勝川駅前地下駐車場",
    "address": "愛知県春日井市松新町1丁目36番地",
    "latitude": 35.230503,
    "longitude": 136.955978,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23206",
    "cityName": "春日井市",
    "accessibleSpaceTotal": 3,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障がい者手帳、療育手帳、精神障がい者保健福祉手帳をお持ちの方が運転又は同乗して利用する場合、料金が3時間まで半額。手続きは場内管理事務所で実施。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 入庫〜3時間まで30分ごとに150円、3時間超は900円(3時間分)+30分ごとに50円\n障害者割引: 3時間まで半額\n総台数: 135台",
    "sourceUrl": "https://www.city.kasugai.lg.jp/shisei/shisetsu/koutsu/1010596/kachigawaekimae.html",
    "updatedAt": "2026-08-18T00:00:00Z"
  },
  {
    "id": "23216-001",
    "name": "中部国際空港(セントレア)駐車場(一般駐車場 P1~P3)",
    "address": "愛知県常滑市セントレア1丁目1",
    "latitude": 34.858509,
    "longitude": 136.809021,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23216",
    "cityName": "常滑市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳を所持する本人が対象。一般駐車場が対象で、予約駐車場の予約料金および大型車両は割引対象外。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車 1時間ごとに400円(入庫から1時間無料)、24時間ごとの上限1,800円(通常期、2025年7月1日改定後)\n障害者割引: 身体障害者等割引として駐車料金5割引(1時間あたり200円相当、24時間上限900円相当)\n総台数: 6700台",
    "sourceUrl": "https://www.centrair.jp/access/parking/disability.html",
    "updatedAt": "2026-08-18T00:00:00Z"
  },
  {
    "id": "23219-001",
    "name": "小牧駅地下駐車場",
    "address": "愛知県小牧市中央一丁目261番地",
    "latitude": 35.289227,
    "longitude": 136.927994,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23219",
    "cityName": "小牧市",
    "accessibleSpaceTotal": 6,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "conditions": "身体障害者手帳・精神障害者保健福祉手帳・療育手帳のいずれかを提示(ミライロIDでも可)。対象は午前5時30分~翌日午前0時30分の間に入出庫した当日利用分のみで、夜間駐車(午前0時30分~午前5時30分)は減免対象外。出庫時に駐車券を持参し、地下1階管理人室にて手帳等を提示して減免を受ける。公式ページは「減免」とのみ記載し、全額免除か一部減額かは明記されていないため要確認(問合せ先: 小牧市都市政策部都市整備課 0568-76-1157)。"
    },
    "accessibleSpaces": [
      {
        "count": 6
      }
    ],
    "notes": "通常料金: 入庫から60分無料、以後30分ごとに100円、駐車時間24時間ごとに1,000円を限度(月ぎめ定期券10,000円)\n障害者割引: 身体障害者手帳等の提示により駐車料金を減免(具体的な割引率・金額は公式ページに記載なし、要確認)\n総台数: 193台",
    "sourceUrl": "https://www.city.komaki.aichi.jp/admin/soshiki/toshiseisakubu/toshiseibi/4/3/1/36242.html",
    "updatedAt": "2026-08-18T00:00:00Z"
  },
  {
    "id": "23238-001",
    "name": "愛・地球博記念公園(モリコロパーク)駐車場",
    "address": "愛知県長久手市茨ケ廻間乙1533-1",
    "latitude": 35.174267,
    "longitude": 137.08168,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23238",
    "cityName": "長久手市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育(愛護)手帳・精神障害者保健福祉手帳・ミライロID・難病医療費受給者証のいずれかを、入口ゲートで受け取った駐車券とあわせて北口案内所、西口案内所・休憩所、地球市民交流センターのいずれかの窓口に提示することで駐車料金が免除される。難病医療費受給者証は2022年4月1日より対象。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車500円(通常期)/1,000円(混雑期:土日・祝日・GW・お盆等)、大型車1,700円/3,400円、バイク200円/400円。入場から出場まで1時間30分以内は無料。\n障害者割引: 無料(駐車料金全額免除)",
    "sourceUrl": "https://www.aichi-koen.com/moricoro/riyouannai/genmen/",
    "updatedAt": "2026-08-19T00:00:00Z"
  },
  {
    "id": "23342-001",
    "name": "県営名古屋空港駐車場",
    "address": "愛知県西春日井郡豊山町大字豊場",
    "latitude": 35.243748,
    "longitude": 136.902573,
    "prefectureCode": "23",
    "prefectureName": "愛知県",
    "cityCode": "23342",
    "cityName": "豊山町",
    "accessibleSpaceTotal": 18,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "対象は身体障害者手帳、療育(愛護)手帳、戦傷病者手帳、被爆者健康手帳、精神障害者保健福祉手帳、特定医療費(指定難病)受給者証の交付を受けている方(個人利用のみ)。駐車料金精算前に総合案内所にて駐車券と手帳等を提示(コピー不可、ミライロID可)。手帳等を提示できなかった場合の後日還付は不可。身障者駐車場(B棟1階)18台のほか、思いやり駐車場(A棟1階)22台(うち車いす用8台)も併設。"
    },
    "accessibleSpaces": [
      {
        "count": 18
      }
    ],
    "notes": "通常料金: 入庫から1時間まで無料、以降1時間ごとに100円(通常期)/200円(繁忙期)、24時間上限1,000円(通常期)/2,000円(繁忙期)\n障害者割引: 全額免除(無料)\n総台数: 1349台",
    "sourceUrl": "https://nagoya-airport.jp/access/parking.html",
    "updatedAt": "2026-08-19T00:00:00Z"
  },
  {
    "id": "28101-001",
    "name": "瀬戸公園駐車場",
    "address": "兵庫県神戸市東灘区魚崎南町1丁目2-1",
    "latitude": 34.713669,
    "longitude": 135.279678,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28101",
    "cityName": "神戸市東灘区",
    "accessibleSpaceTotal": 2,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の「福祉駐車券」(事前申請制。身体障害者手帳1~4級所持者本人運転、または身体障害者手帳1種・療育手帳A判定・精神障害者保健福祉手帳1級所持者の介護者運転車両への同乗者が対象)と障害者手帳を携帯し、出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(処理できない場合はインターホンで係員へ)。3時間を超える分は正規料金。定期券併用不可。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 最初の1時間300円、以降1時間ごとに100円\n障害者割引: 3時間まで無料\n総台数: 85台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260726201435.pdf",
    "updatedAt": "2026-08-19T00:00:00Z"
  },
  {
    "id": "28101-002",
    "name": "魚崎浜公園駐車場",
    "address": "兵庫県神戸市東灘区魚崎浜町27-41(第3工区内)",
    "latitude": 34.706108,
    "longitude": 135.282471,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28101",
    "cityName": "神戸市東灘区",
    "accessibleSpaceTotal": 1,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の「福祉駐車券」(事前申請制)と障害者手帳を携帯し、出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(処理できない場合はインターホンで係員へ)。3時間を超える分は正規料金。定期券併用不可。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 1時間ごとに200円、最大料金500円\n障害者割引: 3時間まで無料\n総台数: 40台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260726201435.pdf",
    "updatedAt": "2026-08-19T00:00:00Z"
  },
  {
    "id": "28101-003",
    "name": "住吉公園駐車場",
    "address": "兵庫県神戸市東灘区住吉宮町3丁目4",
    "latitude": 34.715839,
    "longitude": 135.261475,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28101",
    "cityName": "神戸市東灘区",
    "accessibleSpaceTotal": 1,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の「福祉駐車券」(事前申請制)と障害者手帳を携帯し、出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(処理できない場合はインターホンで係員へ)。3時間を超える分は正規料金。定期券併用不可。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 最初の1時間300円、以降1時間ごとに100円\n障害者割引: 3時間まで無料\n総台数: 32台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260726201435.pdf",
    "updatedAt": "2026-08-19T00:00:00Z"
  },
  {
    "id": "28101-004",
    "name": "六甲アイランド公園西駐車場",
    "address": "兵庫県神戸市東灘区向洋町中5丁目(小磯記念美術館地下)",
    "latitude": 34.691814,
    "longitude": 135.265549,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28101",
    "cityName": "神戸市東灘区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の「福祉駐車券」(事前申請制)と障害者手帳を携帯し、出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(処理できない場合はインターホンで係員へ)。3時間を超える分は正規料金。定期券併用不可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分100円、当日1日最大料金500円(24時まで)\n障害者割引: 3時間まで無料\n総台数: 295台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-19T00:00:00Z"
  },
  {
    "id": "28101-005",
    "name": "向洋西公園駐車場",
    "address": "兵庫県神戸市東灘区向洋町中6丁目",
    "latitude": 34.688438,
    "longitude": 135.266205,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28101",
    "cityName": "神戸市東灘区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の「福祉駐車券」(事前申請制)と障害者手帳を携帯し、出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(処理できない場合はインターホンで係員へ)。3時間を超える分は正規料金。定期券併用不可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分100円、当日1日最大料金500円(24時まで)\n障害者割引: 3時間まで無料\n総台数: 108台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-19T00:00:00Z"
  },
  {
    "id": "28101-006",
    "name": "神戸ファッションプラザ駐車場",
    "address": "兵庫県神戸市東灘区向洋町中2丁目9-1",
    "latitude": 34.688877,
    "longitude": 135.27037,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28101",
    "cityName": "神戸市東灘区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の「福祉駐車券」(事前申請制)と駐車券をホテルプラザ神戸3階フロントに提示し、3時間無料駐車場サービス券1枚を受け取り出庫時に精算。24時間利用可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 施設により異なる(詳細は施設へ要問合せ)\n障害者割引: 3時間無料駐車サービス券進呈",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-19T00:00:00Z"
  },
  {
    "id": "28102-001",
    "name": "フォレスタ六甲駐車場",
    "address": "兵庫県神戸市灘区永手町4丁目2",
    "latitude": 34.7155,
    "longitude": 135.238449,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28102",
    "cityName": "神戸市灘区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者が対象。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(処理できない場合はインターホンで係員に申し付け)。福祉駐車券と障害者手帳等の携帯が必要。3時間を超える分は正規料金。業務目的・営利目的・長時間駐車、定期券併用は不可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分220円、当日最大990円\n障害者割引: 3時間まで無料\n総台数: 76台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-19T00:00:00Z"
  },
  {
    "id": "28102-002",
    "name": "ウェルブ六甲道1番街駐車場",
    "address": "兵庫県神戸市灘区備後町5丁目3",
    "latitude": 34.713825,
    "longitude": 135.237976,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28102",
    "cityName": "神戸市灘区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者が対象。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(処理できない場合はインターホンで係員に申し付け)。福祉駐車券と障害者手帳等の携帯が必要。3時間を超える分は正規料金。業務目的・営利目的・長時間駐車、定期券併用は不可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 40分250円、当日最大900円\n障害者割引: 3時間まで無料\n総台数: 161台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-19T00:00:00Z"
  },
  {
    "id": "28102-003",
    "name": "ウェルブ六甲道2番街駐車場",
    "address": "兵庫県神戸市灘区深田町4丁目1",
    "latitude": 34.714649,
    "longitude": 135.239044,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28102",
    "cityName": "神戸市灘区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者が対象。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(処理できない場合はインターホンで係員に申し付け)。福祉駐車券と障害者手帳等の携帯が必要。3時間を超える分は正規料金。業務目的・営利目的・長時間駐車、定期券併用は不可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分250円、当日最大1,350円(24時以降別途加算)\n障害者割引: 3時間まで無料\n総台数: 62台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-19T00:00:00Z"
  },
  {
    "id": "28102-004",
    "name": "ウェルブ六甲道4番街駐車場",
    "address": "兵庫県神戸市灘区桜口町4丁目3",
    "latitude": 34.71254,
    "longitude": 135.239487,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28102",
    "cityName": "神戸市灘区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者が対象。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(処理できない場合はインターホンで係員に申し付け)。福祉駐車券と障害者手帳等の携帯が必要。3時間を超える分は正規料金。業務目的・営利目的・長時間駐車、定期券併用は不可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分250円、当日最大料金 平日1,100円/土日900円\n障害者割引: 3時間まで無料\n総台数: 102台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-19T00:00:00Z"
  },
  {
    "id": "28102-005",
    "name": "ウェルブ六甲道5番街1番館駐車場",
    "address": "兵庫県神戸市灘区桜口町5丁目2",
    "latitude": 34.712116,
    "longitude": 135.238235,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28102",
    "cityName": "神戸市灘区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者が対象。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(処理できない場合はインターホンで係員に申し付け)。福祉駐車券と障害者手帳等の携帯が必要。3時間を超える分は正規料金。業務目的・営利目的・長時間駐車、定期券併用は不可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00-20:00 30分220円、20:00-8:00 60分110円\n障害者割引: 3時間まで無料\n総台数: 39台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-19T00:00:00Z"
  },
  {
    "id": "28102-006",
    "name": "王子公園駐車場",
    "address": "兵庫県神戸市灘区王子町3丁目1",
    "latitude": 34.709831,
    "longitude": 135.213562,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28102",
    "cityName": "神戸市灘区",
    "accessibleSpaceTotal": 6,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者が対象。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入。福祉駐車券と障害者手帳等の携帯が必要。3時間を超える分は正規料金。利用可能時間9:00-17:00(11月~2月は9:00-16:30)、休園日(水曜、12/29~1/1)は利用不可。"
    },
    "accessibleSpaces": [
      {
        "count": 6
      }
    ],
    "notes": "通常料金: 0~2時間 30分ごと150円、2~4時間 30分ごと100円、4時間超 30分ごと50円\n障害者割引: 3時間まで無料\n総台数: 390台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260726201435.pdf",
    "updatedAt": "2026-08-19T00:00:00Z"
  },
  {
    "id": "28105-001",
    "name": "荒田公園駐車場",
    "address": "兵庫県神戸市兵庫区荒田町2丁目(荒田公園地下)",
    "latitude": 34.68232,
    "longitude": 135.167206,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28105",
    "cityName": "神戸市兵庫区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券が対象。出庫時に自動精算機へ駐車券→福祉駐車券の順に挿入(処理できない場合はインターホンで係員へ連絡・割引方法A)。福祉駐車券は身体障害者手帳1〜4級(本人が運転する場合の本人用カード)、または身体障害者手帳1種・療育手帳A判定・精神障害者保健福祉手帳1級所持者を介護者運転の車両に同乗させる場合(介護者用カード)が対象で、神戸市への事前申請が必要。3時間超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分150円、以降10分ごとに50円、当日1日上限810円(入庫5:00〜23:00、出庫5:00〜24:00)\n障害者割引: 3時間まで無料\n総台数: 320台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28105-002",
    "name": "キャナルタウン中央駐車場",
    "address": "兵庫県神戸市兵庫区駅南通5丁目(キャナルタウン広場西側地下)",
    "latitude": 34.666523,
    "longitude": 135.162643,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28105",
    "cityName": "神戸市兵庫区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券が対象。出庫時に自動精算機へ駐車券→福祉駐車券の順に挿入(割引方法A)。対象者・申請方法は荒田公園駐車場と同様。3時間超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 20分220円、駐車後24時間ごとの最大料金800円(利用可能時間6:00〜24:00、現在はタイムズが運営のため料金は変動の可能性あり)\n障害者割引: 3時間まで無料\n総台数: 173台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28105-003",
    "name": "こべっこランド・こども家庭センター駐車場",
    "address": "兵庫県神戸市兵庫区上庄通1丁目1-43",
    "latitude": 34.660172,
    "longitude": 135.175156,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28105",
    "cityName": "神戸市兵庫区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券が対象(割引方法J)。福祉駐車券・障害者手帳・駐車券をこべっこランドまたはこども家庭センターの職員に提示。3時間超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 2026年1月7日改定後: 平日30分150円、土日祝および夏季繁忙期(7/20〜8/31)30分250円(旧来の2時間無料サービスは廃止)。利用時間は入庫8:30〜20:00、出庫8:30〜21:00、年末年始は閉鎖\n障害者割引: 3時間まで無料",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28105-004",
    "name": "和田岬駅前駐車場",
    "address": "兵庫県神戸市兵庫区和田宮通5丁目5",
    "latitude": 34.656509,
    "longitude": 135.175003,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28105",
    "cityName": "神戸市兵庫区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券が対象。出庫時に自動精算機へ駐車券→福祉駐車券の順に挿入(割引方法A)。対象者・申請方法は荒田公園駐車場と同様。3時間超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 20分100円、1日上限料金1,020円(入庫6:30〜23:00、出庫6:30〜24:00)\n障害者割引: 3時間まで無料\n総台数: 120台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28105-005",
    "name": "湊川公園駐車場",
    "address": "兵庫県神戸市兵庫区新開地1丁目(湊川公園地下)",
    "latitude": 34.678547,
    "longitude": 135.168198,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28105",
    "cityName": "神戸市兵庫区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券が対象。出庫時に自動精算機へ駐車券→福祉駐車券の順に挿入(割引方法A)。対象者・申請方法は荒田公園駐車場と同様。3時間超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 15分100円、1日上限料金1,020円(入庫7:00〜23:00、出庫7:00〜24:00)\n障害者割引: 3時間まで無料\n総台数: 295台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28105-006",
    "name": "御崎公園駐車場",
    "address": "兵庫県神戸市兵庫区御崎町1丁目2番地の2",
    "latitude": 34.656662,
    "longitude": 135.169662,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28105",
    "cityName": "神戸市兵庫区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券が対象(割引方法B)。福祉駐車券・障害者手帳・駐車券を料金所係員に提示。事前予約分は減免対象外。対象者・申請方法は荒田公園駐車場と同様。3時間超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 全日20分100円、1日上限料金 平日1,000円/土日祝1,500円(利用時間6:30〜23:30、Jリーグ等イベント開催時は別料金)\n障害者割引: 3時間まで無料\n総台数: 700台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260726201435.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28106-001",
    "name": "神戸市立新長田駐車場",
    "address": "兵庫県神戸市長田区日吉町1丁目2(若松公園地下)",
    "latitude": 34.655994,
    "longitude": 135.143402,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28106",
    "cityName": "神戸市長田区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の「福祉駐車券」保持者対象。本人用は身体障害者手帳1~4級(第2種)で自ら運転する方、介護者用は身体障害者手帳1~4級(第1種)・療育手帳A・精神障害者保健福祉手帳1級所持者で介護者運転の車両に同乗する方。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(方法A)。福祉駐車券と障害者手帳等の携帯必須。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 7:00~20:00 30分100円、20:00~翌7:00 60分100円\n障害者割引: 3時間まで無料(超過分は正規料金)\n総台数: 220台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28106-002",
    "name": "神戸市立細田駐車場",
    "address": "兵庫県神戸市長田区細田町7丁目1(新長田図書館等地下)",
    "latitude": 34.659515,
    "longitude": 135.144745,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28106",
    "cityName": "神戸市長田区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の「福祉駐車券」保持者対象。本人用は身体障害者手帳1~4級(第2種)で自ら運転する方、介護者用は身体障害者手帳1~4級(第1種)・療育手帳A・精神障害者保健福祉手帳1級所持者で介護者運転の車両に同乗する方。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(方法A)。福祉駐車券と障害者手帳等の携帯必須。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 100円/30分\n障害者割引: 3時間まで無料(超過分は正規料金)\n総台数: 93台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28106-003",
    "name": "神戸市立新長田駅前駐車場",
    "address": "兵庫県神戸市長田区若松町4丁目2(JR新長田駅前広場地下・ピフレ新長田地下)",
    "latitude": 34.656769,
    "longitude": 135.145294,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28106",
    "cityName": "神戸市長田区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の「福祉駐車券」保持者対象。本人用は身体障害者手帳1~4級(第2種)で自ら運転する方、介護者用は身体障害者手帳1~4級(第1種)・療育手帳A・精神障害者保健福祉手帳1級所持者で介護者運転の車両に同乗する方。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(方法A)。福祉駐車券と障害者手帳等の携帯必須。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 150円/30分、24時間最大1,020円\n障害者割引: 3時間まで無料(超過分は正規料金)\n総台数: 151台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28106-004",
    "name": "神戸市立長田北町駐車場",
    "address": "兵庫県神戸市長田区北町3丁目4(長田区総合庁舎地下)",
    "latitude": 34.665684,
    "longitude": 135.151108,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28106",
    "cityName": "神戸市長田区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の「福祉駐車券」保持者対象。本人用は身体障害者手帳1~4級(第2種)で自ら運転する方、介護者用は身体障害者手帳1~4級(第1種)・療育手帳A・精神障害者保健福祉手帳1級所持者で介護者運転の車両に同乗する方。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(方法A)。福祉駐車券と障害者手帳等の携帯必須。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 平日30分150円(24時間最大1,020円)、土日祝30分100円(24時間最大510円)\n障害者割引: 3時間まで無料(超過分は正規料金)\n総台数: 141台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28106-005",
    "name": "アスタくにづか3番館駐車場",
    "address": "兵庫県神戸市長田区久保町5丁目1番1号",
    "latitude": 34.65324,
    "longitude": 135.147339,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28106",
    "cityName": "神戸市長田区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の「福祉駐車券」保持者対象。本人用は身体障害者手帳1~4級(第2種)で自ら運転する方、介護者用は身体障害者手帳1~4級(第1種)・療育手帳A・精神障害者保健福祉手帳1級所持者で介護者運転の車両に同乗する方。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(方法A)。福祉駐車券と障害者手帳等の携帯必須。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初30分無料、以降10分毎50円、入庫時より24時間ごとの最大料金800円\n障害者割引: 3時間まで無料(超過分は正規料金)\n総台数: 387台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28106-006",
    "name": "アスタプラザイースト駐車場",
    "address": "兵庫県神戸市長田区大橋町5丁目3番1号",
    "latitude": 34.655128,
    "longitude": 135.145554,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28106",
    "cityName": "神戸市長田区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の「福祉駐車券」保持者対象。本人用は身体障害者手帳1~4級(第2種)で自ら運転する方、介護者用は身体障害者手帳1~4級(第1種)・療育手帳A・精神障害者保健福祉手帳1級所持者で介護者運転の車両に同乗する方。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(方法A)。福祉駐車券と障害者手帳等の携帯必須。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初30分無料、以降10分毎50円、入庫時より24時間ごとの最大料金800円\n障害者割引: 3時間まで無料(超過分は正規料金)\n総台数: 100台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28106-007",
    "name": "アスタプラザウエスト駐車場",
    "address": "兵庫県神戸市長田区大橋町6丁目1番1号",
    "latitude": 34.654652,
    "longitude": 135.145309,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28106",
    "cityName": "神戸市長田区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の「福祉駐車券」保持者対象。本人用は身体障害者手帳1~4級(第2種)で自ら運転する方、介護者用は身体障害者手帳1~4級(第1種)・療育手帳A・精神障害者保健福祉手帳1級所持者で介護者運転の車両に同乗する方。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(方法A)。福祉駐車券と障害者手帳等の携帯必須。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初30分無料、以降10分毎50円、入庫時より24時間ごとの最大料金800円\n障害者割引: 3時間まで無料(超過分は正規料金)\n総台数: 139台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28106-008",
    "name": "神戸市立医療センター西市民病院 駐車場",
    "address": "兵庫県神戸市長田区一番町2-4",
    "latitude": 34.667542,
    "longitude": 135.156799,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28106",
    "cityName": "神戸市長田区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の「福祉駐車券」保持者対象。本人用は身体障害者手帳1~4級(第2種)で自ら運転する方、介護者用は身体障害者手帳1~4級(第1種)・療育手帳A・精神障害者保健福祉手帳1級所持者で介護者運転の車両に同乗する方。福祉駐車券・障害者手帳・駐車券を同病院1階「院外処方箋コーナー」に提示(方法F)。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 3時間まで無料(超過分は正規料金)",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28106-009",
    "name": "西代公園駐車場",
    "address": "兵庫県神戸市長田区蓮池町(西代公園内)",
    "latitude": 34.664043,
    "longitude": 135.144913,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28106",
    "cityName": "神戸市長田区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の「福祉駐車券」保持者対象。本人用は身体障害者手帳1~4級(第2種)で自ら運転する方、介護者用は身体障害者手帳1~4級(第1種)・療育手帳A・精神障害者保健福祉手帳1級所持者で介護者運転の車両に同乗する方。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(方法B)。福祉駐車券と障害者手帳等の携帯必須。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 3時間まで無料(超過分は正規料金)",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260726201435.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28107-001",
    "name": "須磨浦公園駐車場",
    "address": "兵庫県神戸市須磨区一の谷町5丁目",
    "latitude": 34.637539,
    "longitude": 135.101196,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28107",
    "cityName": "神戸市須磨区",
    "accessibleSpaceTotal": 5,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者が対象。入庫時に福祉駐車券と障害者手帳を係員に提示。福祉駐車券と障害者手帳等の携帯が必要。3時間を超える分は正規料金。業務目的・営利目的・長時間駐車、定期券併用は不可。24時間利用可。"
    },
    "accessibleSpaces": [
      {
        "count": 5
      }
    ],
    "notes": "通常料金: 平日 最初1時間300円、以降1時間毎200円(1日上限1,200円)。土日祝・桜シーズン(3/20~4/15) 最初1時間400円、以降1時間毎200円(上限なし)。バス1日2,000円(要予約)、原付・自動二輪1日200円\n障害者割引: 3時間まで無料\n総台数: 223台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260726201435.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28107-002",
    "name": "須磨海浜公園駐車場",
    "address": "兵庫県神戸市須磨区若宮町1丁目",
    "latitude": 34.643597,
    "longitude": 135.130142,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28107",
    "cityName": "神戸市須磨区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者が対象。精算時に福祉駐車券を係員に提示。福祉駐車券と障害者手帳等の携帯が必要。3時間を超える分は正規料金。24時間利用可能だが時間帯により割引の受け方(提示方法)が異なる場合あり。業務目的・営利目的・長時間駐車、定期券併用は不可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 平日(祝日・7月8月を除く) 最初1時間400円、以降60分ごと200円、当日上限700円。土日祝及び7月8月 最初1時間500円、以降60分ごと500円(当日上限なし)\n障害者割引: 3時間まで無料\n総台数: 1316台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260726201435.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28107-003",
    "name": "神戸総合運動公園駐車場",
    "address": "兵庫県神戸市須磨区緑台",
    "latitude": 34.679955,
    "longitude": 135.077774,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28107",
    "cityName": "神戸市須磨区",
    "accessibleSpaceTotal": 50,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者が対象。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入。福祉駐車券と障害者手帳等の携帯が必要。3時間を超える分は正規料金。P3駐車場は減免対象外。立体駐車場(P2)の入出庫は6:00~翌1:30、他は24時間。業務目的・営利目的・長時間駐車、定期券併用は不可。"
    },
    "accessibleSpaces": [
      {
        "count": 50
      }
    ],
    "notes": "通常料金: P1・P2・P5・P7: 1日1回700円。P3(駅前): 1時間ごと200円(平日上限1,200円/日)\n障害者割引: 3時間まで無料(P3駐車場は減免対象外)\n総台数: 1627台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260726201435.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28107-004",
    "name": "名谷公園駐車場",
    "address": "兵庫県神戸市須磨区西落合7丁目6",
    "latitude": 34.68272,
    "longitude": 135.089066,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28107",
    "cityName": "神戸市須磨区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者が対象。入庫時に福祉駐車券と障害者手帳を係員に提示。福祉駐車券と障害者手帳等の携帯が必要。3時間を超える分は正規料金。24時間利用可。業務目的・営利目的・長時間駐車、定期券併用は不可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初1時間300円、以降1時間毎100円\n障害者割引: 3時間まで無料\n総台数: 32台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260726201435.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28107-005",
    "name": "須磨離宮公園本園駐車場",
    "address": "兵庫県神戸市須磨区東須磨1-1",
    "latitude": 34.659939,
    "longitude": 135.11145,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28107",
    "cityName": "神戸市須磨区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者が対象(記名の本人に限る)。入庫時に福祉駐車券と障害者手帳を係員に提示。3時間を超える分は正規料金。利用可能時間9:00~17:00、休園日(木曜日)は利用不可。業務目的・営利目的・長時間駐車、定期券併用は不可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1日1回 普通車700円(5月の土日祝は900円)、二輪車100円、バス2,800円\n障害者割引: 3時間まで無料\n総台数: 272台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260726201435.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28107-006",
    "name": "須磨離宮公園植物園駐車場",
    "address": "兵庫県神戸市須磨区若木町4-11",
    "latitude": 34.652924,
    "longitude": 135.122528,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28107",
    "cityName": "神戸市須磨区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者が対象。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入。予約優先制のため満車時は利用不可の場合あり。利用可能時間9:00~17:00、休園日(木曜日)は利用不可。3時間を超える分は正規料金。業務目的・営利目的・長時間駐車、定期券併用は不可。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1日1回 普通車700円(5月の土日祝は900円、乗用車のみ)\n障害者割引: 3時間まで無料\n総台数: 22台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260726201435.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28107-007",
    "name": "落合中央公園駐車場",
    "address": "兵庫県神戸市須磨区中落合3丁目1",
    "latitude": 34.682709,
    "longitude": 135.091736,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28107",
    "cityName": "神戸市須磨区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者が対象。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入。福祉駐車券と障害者手帳等の携帯が必要。3時間を超える分は正規料金。24時間利用可。管理:神戸市建設局公園部管理課。業務目的・営利目的・長時間駐車、定期券併用は不可。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 3時間まで無料",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260726201435.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28107-008",
    "name": "下中島公園駐車場",
    "address": "兵庫県神戸市須磨区中島町1丁目",
    "latitude": 34.651596,
    "longitude": 135.130112,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28107",
    "cityName": "神戸市須磨区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者が対象。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入。福祉駐車券と障害者手帳等の携帯が必要。3時間を超える分は正規料金。24時間利用可。管理:神戸市建設局公園部管理課。業務目的・営利目的・長時間駐車、定期券併用は不可。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 3時間まで無料",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260726201435.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28107-009",
    "name": "妙法寺川左岸公園駐車場",
    "address": "兵庫県神戸市須磨区大池町5丁目",
    "latitude": 34.652683,
    "longitude": 135.134094,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28107",
    "cityName": "神戸市須磨区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者が対象。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入。福祉駐車券と障害者手帳等の携帯が必要。3時間を超える分は正規料金。24時間利用可。管理:神戸市建設局公園部管理課。業務目的・営利目的・長時間駐車、定期券併用は不可。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 3時間まで無料",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260726201435.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28108-001",
    "name": "レバンテ垂水1番館駐車場",
    "address": "兵庫県神戸市垂水区日向1丁目(レバンテ垂水1番館地下)",
    "latitude": 34.629929,
    "longitude": 135.056458,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28108",
    "cityName": "神戸市垂水区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市福祉駐車券制度の対象駐車場。対象者は、本人運転の場合は身体障害者手帳1~4級(第2種)所持者、介護者同乗(介護者または本人運転)の場合は身体障害者手帳1~4級(第1種)・精神障害者保健福祉手帳1級・療育手帳A判定の所持者。神戸市建設局自転車課へ事前申請し交付される磁気カード「福祉駐車券」と障害者手帳等を携帯し、出庫時に自動精算機へ駐車券→福祉駐車券の順に挿入(処理できない場合は係員対応)。入庫から3時間まで無料、超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 200円/30分(当日最大1,300円、泊り0:00~7:00は1,000円)\n障害者割引: 3時間まで無料",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28108-002",
    "name": "レバンテ垂水2番館駐車場(垂水区役所地下)",
    "address": "兵庫県神戸市垂水区日向1丁目(レバンテ垂水2番館地下)",
    "latitude": 34.629929,
    "longitude": 135.056458,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28108",
    "cityName": "神戸市垂水区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市福祉駐車券制度の対象駐車場。対象者・申請方法はレバンテ垂水1番館と同様。出庫時に自動精算機へ駐車券→福祉駐車券の順に挿入。入庫から3時間まで無料、超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 200円/30分\n障害者割引: 3時間まで無料",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28108-003",
    "name": "ウエステ垂水駐車場",
    "address": "兵庫県神戸市垂水区天ノ下町1-1",
    "latitude": 34.629604,
    "longitude": 135.053192,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28108",
    "cityName": "神戸市垂水区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市福祉駐車券制度の対象駐車場。対象者・申請方法は同制度共通(身体障害者手帳1~4級/精神障害者保健福祉手帳1級/療育手帳A判定、本人または介護者運転)。出庫時に自動精算機へ駐車券→福祉駐車券の順に挿入。入庫から3時間まで無料、超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 200円/30分(当日最大1,300円、泊り0:00~7:00は1,000円)\n障害者割引: 3時間まで無料\n総台数: 95台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28108-004",
    "name": "舞子駅前駐車場",
    "address": "兵庫県神戸市垂水区東舞子町10(JR舞子駅北駅前広場地下)",
    "latitude": 34.633957,
    "longitude": 135.033859,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28108",
    "cityName": "神戸市垂水区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市福祉駐車券制度の対象駐車場。対象者・申請方法は同制度共通。福祉駐車券と障害者手帳等を提示のうえ、入庫から3時間まで駐車料金無料、超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 150円/30分(1日上限2,000円)\n障害者割引: 3時間まで無料\n総台数: 178台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28108-005",
    "name": "ティオ舞子駐車場",
    "address": "兵庫県神戸市垂水区東舞子町",
    "latitude": 34.631954,
    "longitude": 135.035583,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28108",
    "cityName": "神戸市垂水区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市福祉駐車券制度の対象駐車場として市の公式一覧に別掲。対象者・申請方法は同制度共通。福祉駐車券と障害者手帳等を提示のうえ、入庫から3時間まで駐車料金無料、超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 150円/30分(1日上限2,000円)相当(舞子駅前駐車場と同一エリア)\n障害者割引: 3時間まで無料",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28108-006",
    "name": "アジュール舞子駐車場",
    "address": "兵庫県神戸市垂水区海岸通11(JR舞子駅南東)",
    "latitude": 34.627522,
    "longitude": 135.040451,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28108",
    "cityName": "神戸市垂水区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市福祉駐車券制度の対象駐車場(西側駐車場296台・東側駐車場100台)。対象者・申請方法は同制度共通。入庫時に福祉駐車券と障害者手帳を係員に提示。入庫から3時間まで無料、超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車200円/1時間(上限なし)\n障害者割引: 3時間まで無料\n総台数: 396台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260726201435.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28108-007",
    "name": "垂水健康公園駐車場",
    "address": "兵庫県神戸市垂水区名谷町字丸尾(垂水ジャンクション西)",
    "latitude": 34.654167,
    "longitude": 135.06955,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28108",
    "cityName": "神戸市垂水区",
    "accessibleSpaceTotal": 5,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市福祉駐車券制度の対象駐車場。対象者・申請方法は同制度共通。入庫時に福祉駐車券と障害者手帳を係員に提示。入庫から3時間まで無料、超過分は正規料金。"
    },
    "accessibleSpaces": [
      {
        "count": 5
      }
    ],
    "notes": "通常料金: 平日:最初の1時間無料、2時間まで200円、以降1時間毎100円(4時間超500円)/土日祝:最初の1時間200円、以降1時間毎100円(3時間超500円)。別に臨時駐車場48台(身障者用5台、土日祝8:15~17:00のみ営業)あり。\n障害者割引: 3時間まで無料\n総台数: 119台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260726201435.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28108-008",
    "name": "本多聞南公園駐車場",
    "address": "兵庫県神戸市垂水区本多聞7丁目3",
    "latitude": 34.653366,
    "longitude": 135.041748,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28108",
    "cityName": "神戸市垂水区",
    "accessibleSpaceTotal": 1,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市福祉駐車券制度の対象駐車場。対象者・申請方法は同制度共通。入庫時に福祉駐車券と障害者手帳を係員に提示。入庫から3時間まで無料、超過分は正規料金。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 最初の1時間300円、以降1時間毎100円\n障害者割引: 3時間まで無料\n総台数: 30台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260726201435.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28109-001",
    "name": "鈴蘭台駐車場(北区文化センターすずらんホール地下)",
    "address": "兵庫県神戸市北区鈴蘭台西町1丁目26",
    "latitude": 34.726486,
    "longitude": 135.145233,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28109",
    "cityName": "神戸市北区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の「福祉駐車券」を交付された身体障害者手帳1種・療育手帳A判定・精神障害者保健福祉手帳1級等の対象者(または介護者)が、入庫時に福祉駐車券と障害者手帳を係員に提示(割引方法A)。3時間を超える分は正規料金、駐車時間により1日上限料金になる場合あり。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 45分まで150円、以降10分ごとに50円、24時間以内最大1,020円(入庫7:00〜23:00、出庫7:00〜24:00)\n障害者割引: 3時間まで無料\n総台数: 91台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28109-002",
    "name": "神戸市立森林植物園駐車場",
    "address": "兵庫県神戸市北区山田町上谷上字長尾1-2",
    "latitude": 34.737984,
    "longitude": 135.177368,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28109",
    "cityName": "神戸市北区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の「福祉駐車券」を交付された対象者(身体障害者手帳1種・療育手帳A判定・精神障害者保健福祉手帳1級等)またはその介護者が、入庫時に福祉駐車券と障害者手帳を係員に提示(割引方法A)。3時間超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車700円(6・7月の土日祝は900円)、バス(定員11名以上)2,800円、二輪車無料(1回)。営業時間9:00〜17:00、休園日(水曜日)は利用不可。\n障害者割引: 3時間まで無料\n総台数: 700台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260726201435.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28109-003",
    "name": "北神戸田園スポーツ公園駐車場",
    "address": "兵庫県神戸市北区有野町二郎",
    "latitude": 34.846638,
    "longitude": 135.227936,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28109",
    "cityName": "神戸市北区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の「福祉駐車券」を交付された対象者(身体障害者手帳1種・療育手帳A判定・精神障害者保健福祉手帳1級等)またはその介護者が、出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(処理不可の場合は係員に福祉駐車券と障害者手帳を提示、割引方法B)。3時間超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 平日最大300円、土日祝最大500円(自転車・バイクは無料)。入庫7:00〜22:00、出庫24時間。\n障害者割引: 3時間まで無料\n総台数: 300台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260726201435.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28109-004",
    "name": "しあわせの村 駐車場(P1〜P6他)",
    "address": "兵庫県神戸市北区しあわせの村1-1",
    "latitude": 34.709728,
    "longitude": 135.107468,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28109",
    "cityName": "神戸市北区",
    "accessibleSpaceTotal": 89,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳、兵庫ゆずりあい駐車場利用証、またはミライロIDのいずれかを窓口(管理事務所等)で提示すると、施設利用の有無にかかわらず駐車券が無料処理される。障害者用区画(ゆずりあい駐車場)はP1:9台、P3:10台、P4:19台、P5:3台、P6:15台等、園内合計89台設置。"
    },
    "accessibleSpaces": [
      {
        "count": 89
      }
    ],
    "notes": "通常料金: 普通車1日1回500円、大型車(車高2.7m以上)1日1回2,000円、二輪車無料\n障害者割引: 無料\n総台数: 1600台",
    "sourceUrl": "https://shiawasenomura.org/access/parking/",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28110-001",
    "name": "デザイン・クリエイティブセンター神戸(KIITO) 駐車場",
    "address": "兵庫県神戸市中央区小野浜町1丁目4",
    "latitude": 34.685116,
    "longitude": 135.199448,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28110",
    "cityName": "神戸市中央区",
    "accessibleSpaceTotal": 1,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者(本人:身体障害者手帳1級~4級で第2種、介護者:身体障害者手帳1級~4級で第1種・精神障害者保健福祉手帳1級・療育手帳A判定のいずれかの方)が対象。福祉駐車券、障害者手帳及び駐車券をKIITO1階事務所にて提示(車いす区画利用の場合は駐車券不要)。減免受付は施設の開館時間内のみ(開館時間9:00~21:00、休館日:月曜(祝日の場合は翌日))。3時間超過分は正規料金。"
    },
    "accessibleSpaces": [
      {
        "count": 1
      }
    ],
    "notes": "通常料金: 7:00~21:00 30分100円、21:00~7:00 60分100円、平日24時間最大800円、土日祝24時間最大1,000円\n障害者割引: 3時間まで無料\n総台数: 21台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28110-002",
    "name": "三宮(北・南)駐車場",
    "address": "兵庫県神戸市中央区加納町6丁目(フラワーロード・東遊園地地下)",
    "latitude": 34.688801,
    "longitude": 135.196121,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28110",
    "cityName": "神戸市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者(本人:身体障害者手帳1級~4級で第2種、介護者:身体障害者手帳1級~4級で第1種・精神障害者保健福祉手帳1級・療育手帳A判定のいずれかの方)が対象。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(処理できない場合はインターホンで係員へ)。24時間利用可。北駐車場・南駐車場を連絡する中間精算機経由で両方を連続利用する場合、最初に入った駐車場のみ3時間以内無料の対象。3時間超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分250円、1日上限1,200円(平日)/1,800円(土日祝)。自動二輪車250台分あり\n障害者割引: 3時間まで無料\n総台数: 1044台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28110-003",
    "name": "三宮中央通り駐車場",
    "address": "兵庫県神戸市中央区三宮町1丁目(花時計線地下)",
    "latitude": 34.691757,
    "longitude": 135.193298,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28110",
    "cityName": "神戸市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者(本人:身体障害者手帳1級~4級で第2種、介護者:身体障害者手帳1級~4級で第1種・精神障害者保健福祉手帳1級・療育手帳A判定のいずれかの方)が対象。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(処理できない場合はインターホンで係員へ)。入庫7:00~23:00、出庫7:00~24:00。3時間超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分まで250円、以後12分ごと100円、1日上限1,530円(平日)/1,830円(土日祝)。自動二輪車86台分あり\n障害者割引: 3時間まで無料\n総台数: 488台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28110-004",
    "name": "サンセンタープラザ駐車場",
    "address": "兵庫県神戸市中央区三宮町1丁目",
    "latitude": 34.691757,
    "longitude": 135.193298,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28110",
    "cityName": "神戸市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者(本人:身体障害者手帳1級~4級で第2種、介護者:身体障害者手帳1級~4級で第1種・精神障害者保健福祉手帳1級・療育手帳A判定のいずれかの方)が対象。福祉駐車券、障害者手帳及び駐車券を駐車場管理事務所に提示。入庫7:00~23:30、出庫7:00~24:00。3時間超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 3時間まで無料",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28110-005",
    "name": "こうべ市民福祉交流センター駐車場",
    "address": "兵庫県神戸市中央区磯上通3丁目1-32",
    "latitude": 34.692993,
    "longitude": 135.201996,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28110",
    "cityName": "神戸市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者(本人:身体障害者手帳1級~4級で第2種、介護者:身体障害者手帳1級~4級で第1種・精神障害者保健福祉手帳1級・療育手帳A判定のいずれかの方)が対象。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(処理できない場合は係員に福祉駐車券・障害者手帳・駐車券を提示)。利用可能時間8:30~21:30(日祝8:30~17:30)。3時間超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 3時間まで無料",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28110-006",
    "name": "ポートアイランド市民広場駐車場",
    "address": "兵庫県神戸市中央区港島中町6丁目",
    "latitude": 34.665726,
    "longitude": 135.212982,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28110",
    "cityName": "神戸市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者(本人:身体障害者手帳1級~4級で第2種、介護者:身体障害者手帳1級~4級で第1種・精神障害者保健福祉手帳1級・療育手帳A判定のいずれかの方)が対象。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(処理できない場合は係員に福祉駐車券・障害者手帳・駐車券を提示)。入庫7:30~21:30、出庫7:30~22:00。3時間超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 3時間まで無料",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28110-007",
    "name": "空港島西緑地駐車場",
    "address": "兵庫県神戸市中央区神戸空港12番",
    "latitude": 34.637703,
    "longitude": 135.224792,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28110",
    "cityName": "神戸市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者(本人:身体障害者手帳1級~4級で第2種、介護者:身体障害者手帳1級~4級で第1種・精神障害者保健福祉手帳1級・療育手帳A判定のいずれかの方)が対象。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(処理できない場合はインターホンで係員へ)。利用可能時間は7・8月 入庫10:00~18:30/出庫10:00~19:00、それ以外の月 入庫10:00~16:30/出庫10:00~17:00。3時間超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 3時間まで無料",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28110-008",
    "name": "神戸市立医療センター中央市民病院 駐車場",
    "address": "兵庫県神戸市中央区港島南町2丁目1-1",
    "latitude": 34.6586,
    "longitude": 135.21521,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28110",
    "cityName": "神戸市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者(本人:身体障害者手帳1級~4級で第2種、介護者:身体障害者手帳1級~4級で第1種・精神障害者保健福祉手帳1級・療育手帳A判定のいずれかの方)が対象。福祉駐車券、障害者手帳及び駐車券を同病院1階守衛室(全日)に提示。24時間利用可。3時間超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 160円/1時間、1日上限1,000円(患者及び付添の方は最初60分無料)\n障害者割引: 3時間まで無料",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28110-009",
    "name": "中突堤駐車施設(メリケン駐車場)",
    "address": "兵庫県神戸市中央区波止場町(ホテルオークラ北側)",
    "latitude": 34.682678,
    "longitude": 135.187027,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28110",
    "cityName": "神戸市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者(本人:身体障害者手帳1級~4級で第2種、介護者:身体障害者手帳1級~4級で第1種・精神障害者保健福祉手帳1級・療育手帳A判定のいずれかの方)が対象。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(処理できない場合はインターホンで係員へ)。24時間利用可。3時間超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 平日 最初60分無料、以降30分ごと210円/土日祝 最初30分無料、以降30分ごと210円。夜間(20:00~8:00)最大840円\n障害者割引: 3時間まで無料\n総台数: 110台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28110-010",
    "name": "中突堤中央ターミナル駐車施設(かもめりあ駐車場)",
    "address": "兵庫県神戸市中央区波止場町(中突堤中央ターミナル北側)",
    "latitude": 34.682678,
    "longitude": 135.187027,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28110",
    "cityName": "神戸市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者(本人:身体障害者手帳1級~4級で第2種、介護者:身体障害者手帳1級~4級で第1種・精神障害者保健福祉手帳1級・療育手帳A判定のいずれかの方)が対象。福祉駐車券と障害者手帳と駐車券を中突堤中央ターミナル内の総合インフォメーションカウンターで警備員に提示。24時間利用可だが、減免受付は警備員対応時間の9:00~19:00の間のみ可。3時間超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分210円、夜間(20:00~翌8:00)最大840円\n障害者割引: 3時間まで無料\n総台数: 130台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28110-011",
    "name": "花隈駐車場",
    "address": "兵庫県神戸市中央区花隈町1(花隈公園地下)",
    "latitude": 34.687752,
    "longitude": 135.1828,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28110",
    "cityName": "神戸市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者(本人:身体障害者手帳1級~4級で第2種、介護者:身体障害者手帳1級~4級で第1種・精神障害者保健福祉手帳1級・療育手帳A判定のいずれかの方)が対象。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(処理できない場合はインターホンで係員へ)。入庫7:00~23:00、出庫7:00~24:00。3時間超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分250円、1日上限1,000円。自動二輪車20台分あり\n障害者割引: 3時間まで無料\n総台数: 252台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28110-012",
    "name": "神戸駅南駐車場",
    "address": "兵庫県神戸市中央区東川崎町1丁目(JR神戸駅南側地下)",
    "latitude": 34.679077,
    "longitude": 135.181961,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28110",
    "cityName": "神戸市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者(本人:身体障害者手帳1級~4級で第2種、介護者:身体障害者手帳1級~4級で第1種・精神障害者保健福祉手帳1級・療育手帳A判定のいずれかの方)が対象。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(処理できない場合はインターホンで係員へ)。3時間超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分200円、1日上限1,220円(平日)/1,530円(土日祝)。自動二輪車63台分あり\n障害者割引: 3時間まで無料\n総台数: 240台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28110-013",
    "name": "大倉山駐車場",
    "address": "兵庫県神戸市中央区楠町4丁目(中央体育館北側広場地下)",
    "latitude": 34.683533,
    "longitude": 135.173096,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28110",
    "cityName": "神戸市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者(本人:身体障害者手帳1級~4級で第2種、介護者:身体障害者手帳1級~4級で第1種・精神障害者保健福祉手帳1級・療育手帳A判定のいずれかの方)が対象。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(処理できない場合はインターホンで係員へ)。3時間超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 昼間(7:00~22:00)30分150円、夜間60分100円、1日上限1,020円。自動二輪車30台分あり\n障害者割引: 3時間まで無料\n総台数: 279台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28110-014",
    "name": "神戸市立神戸アイセンター病院 駐車場",
    "address": "兵庫県神戸市中央区港島南町2丁目1-8",
    "latitude": 34.6586,
    "longitude": 135.21521,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28110",
    "cityName": "神戸市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者(本人:身体障害者手帳1級~4級で第2種、介護者:身体障害者手帳1級~4級で第1種・精神障害者保健福祉手帳1級・療育手帳A判定のいずれかの方)が対象。福祉駐車券、障害者手帳及び駐車券を同病院2階受付に提示。24時間利用可。3時間超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間160円、1日上限1,000円(利用内容により1~3時間無料になる場合あり)\n障害者割引: 3時間まで無料",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28110-015",
    "name": "中央区役所駐車場",
    "address": "兵庫県神戸市中央区東町115番地(中央区役所地下)",
    "latitude": 34.689537,
    "longitude": 135.194977,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28110",
    "cityName": "神戸市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者(本人:身体障害者手帳1級~4級で第2種、介護者:身体障害者手帳1級~4級で第1種・精神障害者保健福祉手帳1級・療育手帳A判定のいずれかの方)が対象。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(処理できない場合はインターホンで係員へ)。利用可能時間 平日(第2・4木曜以外)8:30~18:00、第2・4木曜8:30~19:15。3時間超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 3時間まで無料",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28110-016",
    "name": "ポートアイランド南公園駐車場",
    "address": "兵庫県神戸市中央区港島中町8丁目",
    "latitude": 34.661572,
    "longitude": 135.212021,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28110",
    "cityName": "神戸市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の福祉駐車券保有者(本人:身体障害者手帳1級~4級で第2種、介護者:身体障害者手帳1級~4級で第1種・精神障害者保健福祉手帳1級・療育手帳A判定のいずれかの方)が対象。出庫時に自動精算機へ駐車券・福祉駐車券の順に挿入(処理できない場合は係員に福祉駐車券・障害者手帳・駐車券を提示)。24時間利用可。管理:神戸市建設局公園部管理課。3時間超過分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 60分160円\n障害者割引: 3時間まで無料\n総台数: 88台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260726201435.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28111-001",
    "name": "西神中央駅駐車場",
    "address": "兵庫県神戸市西区糀台5丁目2-3",
    "latitude": 34.718746,
    "longitude": 135.019836,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28111",
    "cityName": "神戸市西区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の「福祉駐車券」を交付された対象者(身体障害者手帳1種・療育手帳A判定・精神障害者保健福祉手帳1級等)またはその介護者が、精算時に福祉駐車券と障害者手帳を係員に提示(割引方法C)。3時間超過分は正規料金、駐車時間により1日上限料金になる場合あり。入庫5:00~23:30、出庫5:00~翌1:30。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初の60分250円、以降30分あたり70円(2026年7月1日改定後、税込)\n障害者割引: 3時間まで無料",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260729195724.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28111-002",
    "name": "神戸市立西神戸医療センター 駐車場",
    "address": "兵庫県神戸市西区糀台5丁目7-1",
    "latitude": 34.716888,
    "longitude": 135.018921,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28111",
    "cityName": "神戸市西区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "障害者手帳所持者が駐車場事前精算機(1階救急外来待合い付近、2階フロアーマネージャーコーナー付近)に駐車券と診察券を挿入すると3時間無料(以後30分50円)。障害者用長時間駐車承認書所持者は終日無料。市発行の福祉駐車券による3時間無料(割引方法A)も利用可(西神戸医療センター利用者に限る)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間220円、以後30分50円(外来患者・付添者は最初の1時間無料)\n障害者割引: 3時間無料、以後30分50円",
    "sourceUrl": "https://nmc.kcho.jp/news/news/20240405.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28111-003",
    "name": "高塚公園駐車場",
    "address": "兵庫県神戸市西区高塚台5丁目2-1",
    "latitude": 34.72591,
    "longitude": 135.012939,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28111",
    "cityName": "神戸市西区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "神戸市発行の「福祉駐車券」を交付された対象者(身体障害者手帳1種・療育手帳A判定・精神障害者保健福祉手帳1級等)またはその介護者が、入庫時に福祉駐車券と障害者手帳を係員に提示(割引方法A)。3時間超過分は正規料金。入庫8:00~18:00、出庫24時間。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初の1時間300円、以降1時間ごとに100円\n障害者割引: 3時間まで無料\n総台数: 41台",
    "sourceUrl": "https://www.city.kobe.lg.jp/documents/6570/20260726201435.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28201-001",
    "name": "市営大手前地下駐車場(タイムズ大手前地下駐車場)",
    "address": "兵庫県姫路市白銀町",
    "latitude": 34.830681,
    "longitude": 134.690689,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28201",
    "cityName": "姫路市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかを持つ方またはその介護者。手帳またはミライロIDを提示することで駐車料金の5割相当額を減免。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分につき200円、24時間最大800円(定期:1ヶ月20,000円/3ヶ月55,000円)\n障害者割引: 5割減免\n総台数: 153台",
    "sourceUrl": "https://www.city.himeji.lg.jp/sangyo/0000001595.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28201-002",
    "name": "大手門駐車場",
    "address": "兵庫県姫路市本町68番地",
    "latitude": 34.835873,
    "longitude": 134.687363,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28201",
    "cityName": "姫路市",
    "accessibleSpaceTotal": 8,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかを持つ方またはその介護者。窓口受付時間9時~17時の間、精算前(事前精算含む)に窓口または自動電話(カメラに手帳提示)で手帳を提示することで駐車料金の5割を減免。大型バス等は利用日の1週間前までに事前申請が必要。"
    },
    "accessibleSpaces": [
      {
        "count": 8
      }
    ],
    "notes": "通常料金: 普通車:最初の3時間以内600円、3時間超~24時間以内900円/大型バス等:1日1回2,500円\n障害者割引: 5割減免\n総台数: 555台",
    "sourceUrl": "https://himeji-machishin.jp/toshi/parking/news.html/?id=206",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28201-003",
    "name": "兵庫県立はりま姫路総合医療センター 立体駐車場",
    "address": "兵庫県姫路市神屋町3丁目264番地",
    "latitude": 34.828217,
    "longitude": 134.702499,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28201",
    "cityName": "姫路市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかを持つ来院者(手帳提示者本人)。総合案内カウンターにて駐車券と手帳を提示することで駐車料金全額免除。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 外来患者:入庫後6時間まで100円、以降60分ごと100円(最大1,000円/24時まで)/一般・見舞い・付き添い:60分ごと200円(最大1,000円/24時まで)\n障害者割引: 全額免除\n総台数: 505台",
    "sourceUrl": "https://hgmc.hyogo.jp/about/access.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28202-001",
    "name": "阪神尼崎駅前駐車場",
    "address": "兵庫県尼崎市神田中通1丁目1番地",
    "latitude": 34.719048,
    "longitude": 135.416733,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28202",
    "cityName": "尼崎市",
    "accessibleSpaceTotal": 6,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳の保持者が運転または同乗する車両が対象。出口ゲート精算機のWebカメラに手帳を提示して減免処理するか、あまがさき観光案内所(9:00~17:00)で駐車券持参のうえ事前手続き。3時間を超える分は正規料金。"
    },
    "accessibleSpaces": [
      {
        "count": 6
      }
    ],
    "notes": "通常料金: 普通車20分100円(24時間最大1,000円)、二輪車60分100円(24時間最大400円)\n障害者割引: 3時間まで無料\n総台数: 295台",
    "sourceUrl": "https://www.city.amagasaki.hyogo.jp/kurashi/kuruma/tyusyajo/090_chusya.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28202-002",
    "name": "尼崎市役所第1・第2駐車場",
    "address": "兵庫県尼崎市東七松町1丁目23番1号",
    "latitude": 34.734482,
    "longitude": 135.406021,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28202",
    "cityName": "尼崎市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳所有者が乗車する車両が対象。ご利用の窓口で申し出。開庁日の開庁時間中のみ適用され、3時間を超える分は正規料金。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 平日8:00~18:00は最初60分無料、以降30分毎100円。平日18:00~翌8:00は60分200円(最大400円)。土日祝8:00~18:00は60分200円(最大500円)。土日祝18:00~翌8:00は60分200円(最大400円)。\n障害者割引: 3時間分無料(開庁時間中)\n総台数: 131台",
    "sourceUrl": "https://www.city.amagasaki.hyogo.jp/shisei/siyakusyo/026tel_annai/026chushajou.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28202-003",
    "name": "尼崎市総合文化センター駐車場",
    "address": "兵庫県尼崎市昭和通2丁目7-16",
    "latitude": 34.720459,
    "longitude": 135.419983,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28202",
    "cityName": "尼崎市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳の提示、またはミライロIDの提示。来館時に係員へ声掛けして減免処理。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分200円、最大料金1,000円(入庫当日限り)\n障害者割引: 無料\n総台数: 164台",
    "sourceUrl": "https://www.archaic.or.jp/guide/access.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28202-004",
    "name": "尼崎市立魚つり公園駐車場",
    "address": "兵庫県尼崎市平左衛門町66",
    "latitude": 34.682587,
    "longitude": 135.37146,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28202",
    "cityName": "尼崎市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳、療育手帳保持者が対象。魚つり公園管理棟受付にて手帳を提示のうえ、減免申請書に記入することで駐車料金が半額になる。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車: 30分未満100円、30分以上1時間未満200円、以降30分毎に加算、8時間以上800円(大型車は同区分の2倍)\n障害者割引: 半額",
    "sourceUrl": "https://amagasaki-uoturikouen.com/guide.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28203-001",
    "name": "明石駅前立体駐車場",
    "address": "兵庫県明石市山下町14-7",
    "latitude": 34.649059,
    "longitude": 134.995224,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28203",
    "cityName": "明石市",
    "accessibleSpaceTotal": 8,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかの交付を受けている方が自ら運転し、または同乗する普通自動車が対象。料金支払い前に精算機横のインターフォンからオペレーターへ申し出るか、7時~20時の間は管理人に申し出て減免処理を受ける。"
    },
    "accessibleSpaces": [
      {
        "count": 8
      }
    ],
    "notes": "通常料金: 24時間以内は20分ごとに100円(上限1,200円)、24時間超過時は24時間ごとに1,200円に加え端数時間分を加算\n障害者割引: 5割減免\n総台数: 304台",
    "sourceUrl": "https://www.city.akashi.lg.jp/doboku/kouan_ka/shisetsu/riyoryokin/ryokin/087.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28203-002",
    "name": "大蔵海岸駐車場(東駐車場)",
    "address": "兵庫県明石市大蔵海岸通1丁目4番",
    "latitude": 34.643356,
    "longitude": 135.014389,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28203",
    "cityName": "明石市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかの交付を受けている方が自ら運転し、または同乗する普通自動車が対象。出庫前に駐車場事務所(東西各駐車場出口横、午前9時~午後5時)で申請が必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通自動車:1時間以内100円、以降1時間毎100円、9時間超24時間以内1,000円\n障害者割引: 5割減免\n総台数: 146台",
    "sourceUrl": "https://www.city.akashi.lg.jp/doboku/kaigan_ka/shisetsu/koen-sports/kaigan/ookurakaigantyuushazyou.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28203-003",
    "name": "大蔵海岸駐車場(西駐車場)",
    "address": "兵庫県明石市大蔵海岸通2丁目5番",
    "latitude": 34.643745,
    "longitude": 135.009232,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28203",
    "cityName": "明石市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかの交付を受けている方が自ら運転し、または同乗する普通自動車が対象。出庫前に駐車場事務所(東西各駐車場出口横、午前9時~午後5時)で申請が必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通自動車:1時間以内100円、以降1時間毎100円、9時間超24時間以内1,000円\n障害者割引: 5割減免\n総台数: 178台",
    "sourceUrl": "https://www.city.akashi.lg.jp/doboku/kaigan_ka/shisetsu/koen-sports/kaigan/ookurakaigantyuushazyou.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28203-004",
    "name": "明石市立文化博物館駐車場",
    "address": "兵庫県明石市上ノ丸2丁目13番1号",
    "latitude": 34.65184,
    "longitude": 134.995255,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28203",
    "cityName": "明石市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳または療育手帳をお持ちの方が受付で提示することで駐車料金が半額減免。開館時間内(18時30分まで)に出庫が必要。台数限定のため公共交通機関の利用推奨。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1台1時間100円(1時間未満は1時間として計算)、上限1,000円\n障害者割引: 半額減免\n総台数: 32台",
    "sourceUrl": "https://www.akashibunpaku.com/access.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28204-001",
    "name": "西宮市勤労福祉センター駐車場(松原体育館・サン・アビリティーズにしのみや共用)",
    "address": "兵庫県西宮市松原町2番37号",
    "latitude": 34.736263,
    "longitude": 135.345932,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28204",
    "cityName": "西宮市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳保持者は使用料を免除。出庫の際に精算機横のインターホンで申し出て、精算機上のカメラ部に手帳を提示する(駐車場No.8835 西宮市勤労福祉センター駐車場と伝える)。営業時間7:30~22:30。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初の30分以内無料、以後30分ごとに100円(上限1,000円)\n障害者割引: 無料\n総台数: 21台",
    "sourceUrl": "https://www.nishi.or.jp/kurashi/rodo/kinrofukushishisetsu/oshirase/parking.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28204-002",
    "name": "西宮市立中央体育館・武道場 河原町駐車場",
    "address": "兵庫県西宮市河原町1番16号",
    "latitude": 34.7486,
    "longitude": 135.344666,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28204",
    "cityName": "西宮市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "本市住民で、身体障害者手帳・療育手帳若しくは精神障害者保健福祉手帳の交付を受けている方、又はその方の介護者が運転する自動車が対象。手帳と駐車券を施設窓口で提示すると確認後に無料サービス券を発行。駐車料金を先に精算すると免除できない。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初の1時間以内100円、1時間を超え30分毎100円(営業時間内最大1,000円)\n障害者割引: 無料\n総台数: 62台",
    "sourceUrl": "https://www.nishi.or.jp/access/sports/taiikukan/budojo.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28204-003",
    "name": "西宮市立中央テニスコート 中屋町駐車場",
    "address": "兵庫県西宮市中屋町8番",
    "latitude": 34.750034,
    "longitude": 135.345001,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28204",
    "cityName": "西宮市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "本市住民で、身体障害者手帳・療育手帳若しくは精神障害者保健福祉手帳の交付を受けている方、又はその方の介護者が運転する自動車が対象。手帳と駐車券を施設窓口で提示すると確認後に無料サービス券を発行。駐車料金を先に精算すると免除できない。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初の1時間以内100円、1時間を超え30分毎100円(営業時間内最大1,000円/営業時間外1回1,000円、大型車は3倍)\n障害者割引: 無料\n総台数: 51台",
    "sourceUrl": "https://www.nishi.or.jp/access/sports/tennis/centertennis.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28204-004",
    "name": "西宮市立浜甲子園体育館 第1・第2駐車場",
    "address": "兵庫県西宮市枝川町20番15号",
    "latitude": 34.708809,
    "longitude": 135.362442,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28204",
    "cityName": "西宮市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "本市住民で、身体障害者手帳・療育手帳若しくは精神障害者保健福祉手帳の交付を受けている方、又はその方の介護者が運転する自動車が対象。手帳と駐車券を施設窓口で提示すると確認後に無料サービス券を発行。駐車料金を先に精算すると免除できない。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初の1時間以内100円、1時間を超え30分毎100円(営業時間内最大1,000円/営業時間外1回1,000円、大型車は3倍)\n障害者割引: 無料\n総台数: 257台",
    "sourceUrl": "https://www.nishi.or.jp/access/sports/taiikukan/hamako.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28204-005",
    "name": "鳴尾浜臨海公園北地区駐車場(鳴尾浜臨海野球場・鳴尾浜臨海テニスコート)",
    "address": "兵庫県西宮市鳴尾浜1丁目5番地2",
    "latitude": 34.700878,
    "longitude": 135.366653,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28204",
    "cityName": "西宮市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "本市住民で、身体障害者手帳・療育手帳若しくは精神障害者保健福祉手帳の交付を受けている方、又はその方の介護者が運転する自動車が対象。「利用料金を全額免除します」。手帳と駐車券を施設窓口で提示すると確認後に無料サービス券を発行。駐車料金を先に精算すると免除できない。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初の1時間以内100円、1時間を超え30分毎100円(営業時間内最大1,000円/営業時間外1回1,000円)\n障害者割引: 無料\n総台数: 60台",
    "sourceUrl": "https://www.nishi.or.jp/access/sports/tennis/naruotennis.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28204-006",
    "name": "兵庫県立西宮総合医療センター 駐車場・駐輪場",
    "address": "兵庫県西宮市津門大塚町11番62号",
    "latitude": 34.736698,
    "longitude": 135.356064,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28204",
    "cityName": "西宮市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "conditions": "原文「ミライロIDのQRコード機能の利用で駐車場・駐輪場料金の減免」。精算機のカメラにミライロIDのQRコードを読み取らせる(または精算機貼付のQRコードをミライロIDでスキャンする)ことで障害者割引が適用される。減免率・全額免除か否かは公式サイト未確認(要問い合わせ)。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 減免",
    "sourceUrl": "https://mirairo-id.jp/place/times/",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28205-001",
    "name": "洲本市営洲本バスセンター前駐車場",
    "address": "兵庫県洲本市港1番1",
    "latitude": 34.344151,
    "longitude": 134.898788,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28205",
    "cityName": "洲本市",
    "accessibleSpaceTotal": 0,
    "discountType": "unknown",
    "discount": {
      "type": "unknown",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳の提示により24時間最大300円。事前精算機右側のコールセンター直通電話を利用し、オペレーターの指示に従って手帳をカメラに提示する。24時間営業。指定管理者は大和ハウスパーキング株式会社。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 入庫から1時間まで無料、以降1時間毎100円、24時間最大600円\n障害者割引: 24時間最大300円\n総台数: 451台",
    "sourceUrl": "https://www.city.sumoto.lg.jp/uploaded/attachment/14938.pdf",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28205-002",
    "name": "兵庫県立淡路医療センター 駐車場",
    "address": "兵庫県洲本市塩屋1丁目1番137号",
    "latitude": 34.34618,
    "longitude": 134.896713,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28205",
    "cityName": "洲本市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者は外来受診の場合は駐車料金無料。障害者手帳の提示が必要。救急患者用駐車場に駐車した場合は減免不可。事後の申し出には対応不可(領収書がある場合を除く)のため精算前に手続きが必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間100円(15分以内は無料、外来受診当日は1回100円)\n障害者割引: 無料",
    "sourceUrl": "https://www.awajimc.jp/access.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28206-001",
    "name": "芦屋市民センター駐車場(タイムズ芦屋市民センター)",
    "address": "兵庫県芦屋市業平町8番24号",
    "latitude": 34.732414,
    "longitude": 135.302536,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28206",
    "cityName": "芦屋市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "芦屋市民センターご利用のかたで、身体障がい者手帳、精神障がい者保健福祉手帳、療育手帳をお持ちのかたは、駐車場使用料は無料。免除の処理をしますので、手帳と駐車券をご持参の上、市民センター窓口(本館2階)へお申し出ください。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 午前8時~午後9時 30分100円、午後9時~午前8時 60分100円(夜間最大400円)\n障害者割引: 無料\n総台数: 27台",
    "sourceUrl": "https://www.city.ashiya.lg.jp/kouminkan/parking.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28206-002",
    "name": "芦屋市立図書館駐車場(タイムズ芦屋市立図書館)",
    "address": "兵庫県芦屋市伊勢町12番5号",
    "latitude": 34.722698,
    "longitude": 135.312378,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28206",
    "cityName": "芦屋市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳、療育手帳をお持ちの方は、駐車場使用料は無料。手帳と駐車券をお持ちの上、図書館のカウンターへお申し出ください。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 開館日8:00~20:00 30分100円、20:00~8:00 60分100円(夜間最大500円)\n障害者割引: 無料\n総台数: 46台",
    "sourceUrl": "https://www.city.ashiya.lg.jp/toshokan/riyou.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28206-003",
    "name": "芦屋市立美術博物館駐車場(タイムズ芦屋市立美術博物館)",
    "address": "兵庫県芦屋市伊勢町12番25号",
    "latitude": 34.722248,
    "longitude": 135.310989,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28206",
    "cityName": "芦屋市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "芦屋市立美術博物館、芦屋市谷崎潤一郎記念館及び芦屋市立図書館をご利用の方で、身体障がい者手帳・精神障がい者保健福祉手帳・療育手帳をお持ちの方は、駐車場使用料は無料。免除の処理をしますので、手帳と駐車券を受付にご提示ください。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00~20:00 30分100円、20:00~8:00 60分100円(夜間最大400円、休館日8:00~翌8:00最大600円)\n障害者割引: 無料\n総台数: 20台",
    "sourceUrl": "https://ashiya-museum.jp/access",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28206-004",
    "name": "市立芦屋病院駐車場(北側・南側)",
    "address": "兵庫県芦屋市朝日ケ丘町39番1号",
    "latitude": 34.748474,
    "longitude": 135.307892,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28206",
    "cityName": "芦屋市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "診療を受けた障がい者の患者さん(本人)又はその介護者(付き添いの方)の運転する自動車の駐車料金が全額免除。免除に際しては手帳(身体障害者手帳、精神障害者保健福祉手帳、療育手帳)の確認が必要。手帳及び駐車カードを持参の上、医事課窓口又は総務課へ。時間外は守衛室で受付。お見舞いの方は免除対象者ではない。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初の30分無料、以降30分ごとに100円、1日最大1,600円\n障害者割引: 無料\n総台数: 199台",
    "sourceUrl": "https://www.ashiya-hosp.com/byouin/parking.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28206-005",
    "name": "芦屋市立体育館・青少年センター駐車場(シンコースポーツ体育館・青少年センター)",
    "address": "兵庫県芦屋市川西町15番3号",
    "latitude": 34.727421,
    "longitude": 135.301285,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28206",
    "cityName": "芦屋市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳、精神障がい者保健福祉手帳、療育手帳をお持ちの方は、駐車場は無料。免除の処理をしますので、手帳と駐車券をご持参の上、体育館・青少年センターの窓口へ申し出てください。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 施設利用者は30分まで無料、以降30分ごとに100円\n障害者割引: 無料\n総台数: 27台",
    "sourceUrl": "https://www.city.ashiya.lg.jp/sports/sentaa.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28206-006",
    "name": "芦屋市立潮芦屋交流センター駐車場",
    "address": "兵庫県芦屋市海洋町7番1号",
    "latitude": 34.711414,
    "longitude": 135.316101,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28206",
    "cityName": "芦屋市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳又は療育手帳を提示していただいた場合は、駐車料金を免除します。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間無料、以降30分毎100円加算\n障害者割引: 無料\n総台数: 23台",
    "sourceUrl": "https://ashiya-sec.jp/access/index.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28206-007",
    "name": "芦屋公園テニスコート駐車場(タイムズ芦屋公園テニスコート)",
    "address": "兵庫県芦屋市松浜町4",
    "latitude": 34.721897,
    "longitude": 135.305099,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28206",
    "cityName": "芦屋市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳、療育手帳をお持ちの方は、駐車場使用料は無料。免除の処理をしますので、手帳と駐車券をご持参の上、芦屋公園テニスコート窓口へ申し出てください。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 全日 30分100円(8:00-20:00最大600円、20:00-8:00最大300円)\n障害者割引: 無料\n総台数: 28台",
    "sourceUrl": "https://times-info.net/P28-hyogo/C206/park-detail-BUK0030726/",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28206-008",
    "name": "芦屋海浜公園・海浜公園水泳プール駐車場(タイムズ海浜公園プール)",
    "address": "兵庫県芦屋市浜風町30",
    "latitude": 34.72319,
    "longitude": 135.323654,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28206",
    "cityName": "芦屋市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "海浜公園プールをご利用の方で、身体障害者手帳、精神障害者保健福祉手帳、療育手帳をお持ちの方は、駐車場使用料は無料。免除の処理をしますので、手帳と駐車券をご持参の上、海浜公園プール窓口へ申し出てください。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分100円(全日8:00-8:00 最大600円)\n障害者割引: 無料\n総台数: 84台",
    "sourceUrl": "https://times-info.net/P28-hyogo/C206/park-detail-BUK0030664/",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28206-009",
    "name": "芦屋中央公園駐車場(タイムズ芦屋中央公園)",
    "address": "兵庫県芦屋市若葉町1",
    "latitude": 34.720459,
    "longitude": 135.311874,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28206",
    "cityName": "芦屋市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳、療育手帳をお持ちの方は、駐車場使用料は無料。精算は機械式のため、インターホン等により手帳の提示方法等を確認のこと。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初の30分無料、以降30分ごとに100円(全日8:00-8:00 最大700円)\n障害者割引: 無料\n総台数: 58台",
    "sourceUrl": "https://times-info.net/P28-hyogo/C206/park-detail-BUK0030729/",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28206-010",
    "name": "ミラタップパーク芦屋(芦屋市総合公園)駐車場(北・東・西)",
    "address": "兵庫県芦屋市陽光町1番1号",
    "latitude": 34.711044,
    "longitude": 135.3078,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28206",
    "cityName": "芦屋市",
    "accessibleSpaceTotal": 9,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がい者手帳をお持ちの方は、営業時間内に管理事務所へお越しください。駐車料金が無料になります(公園管理事務所 0797-25-2023)。北駐車場150台(身体障がい者用5台含む・24時間)、東駐車場76台(同2台・7:00~19:00)、西駐車場132台(同2台・7:00~19:00)。市のFAQでは「芦屋市総合公園北駐車場(陽光町)」が減免対象として列挙されている。"
    },
    "accessibleSpaces": [
      {
        "count": 9
      }
    ],
    "notes": "通常料金: 普通車 初めの30分間は無料、以降30分毎100円(最大料金なし)\n障害者割引: 無料\n総台数: 358台",
    "sourceUrl": "https://shisetsu.mizuno.jp/m-7319/access",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28206-011",
    "name": "潮芦屋緑地西駐車場(潮芦屋西駐車場)",
    "address": "兵庫県芦屋市南浜町",
    "latitude": 34.708797,
    "longitude": 135.309265,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28206",
    "cityName": "芦屋市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がい者手帳を提示することにより駐車場料金の減免を受けられる。精算は機械式となっていますので、インターホン等により手帳の提示方法等をご確認ください。市の「公共料金などの割引」では「潮芦屋緑地・ビーチ」の駐車場について、身体障害者手帳・療育手帳・精神障害者保健福祉手帳所持者が自ら運転する自動車又はその介護者が運転する自動車は全額免除と記載。営業時間7時~19時。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分以内は無料、以降30分ごとに100円\n障害者割引: 無料",
    "sourceUrl": "https://www.city.ashiya.lg.jp/info/shougai/yuuryoutyuusyajyu.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28206-012",
    "name": "潮芦屋緑地東駐車場(潮芦屋東駐車場)",
    "address": "兵庫県芦屋市南浜町",
    "latitude": 34.708797,
    "longitude": 135.309265,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28206",
    "cityName": "芦屋市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がい者手帳を提示することにより駐車場料金の減免を受けられる。精算は機械式となっていますので、インターホン等により手帳の提示方法等をご確認ください。市の「公共料金などの割引」では「潮芦屋緑地・ビーチ」の駐車場について、身体障害者手帳・療育手帳・精神障害者保健福祉手帳所持者が自ら運転する自動車又はその介護者が運転する自動車は全額免除と記載。営業時間7時~19時。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分以内は無料、以降30分ごとに100円\n障害者割引: 無料",
    "sourceUrl": "https://www.city.ashiya.lg.jp/info/shougai/yuuryoutyuusyajyu.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28206-013",
    "name": "南緑地西駐車場(南芦屋浜南緑地)",
    "address": "兵庫県芦屋市涼風町",
    "latitude": 34.707451,
    "longitude": 135.316574,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28206",
    "cityName": "芦屋市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がい者手帳を提示することにより駐車場料金の減免を受けられる。精算は機械式となっていますので、インターホン等により手帳の提示方法等をご確認ください。市の「公共料金などの割引」では「芦屋市総合公園・潮芦屋緑地・ビーチ」の駐車場について全額免除と記載。営業時間8時~19時(出庫のみ20時まで)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分以内は無料、以降30分ごとに100円\n障害者割引: 無料",
    "sourceUrl": "https://www.city.ashiya.lg.jp/info/shougai/yuuryoutyuusyajyu.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28206-014",
    "name": "南緑地東駐車場(南芦屋浜南緑地)",
    "address": "兵庫県芦屋市涼風町",
    "latitude": 34.707451,
    "longitude": 135.316574,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28206",
    "cityName": "芦屋市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がい者手帳を提示することにより駐車場料金の減免を受けられる。精算は機械式となっていますので、インターホン等により手帳の提示方法等をご確認ください。市の「公共料金などの割引」では「芦屋市総合公園・潮芦屋緑地・ビーチ」の駐車場について全額免除と記載。営業時間8時~19時(出庫のみ20時まで)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分以内は無料、以降30分ごとに100円\n障害者割引: 無料",
    "sourceUrl": "https://www.city.ashiya.lg.jp/info/shougai/yuuryoutyuusyajyu.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28207-001",
    "name": "伊丹市役所内駐車場(市役所南側)",
    "address": "兵庫県伊丹市千僧1丁目1番地",
    "latitude": 34.784084,
    "longitude": 135.400986,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28207",
    "cityName": "伊丹市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 6,
      "conditions": "障害者手帳1級~4級、療育手帳AまたはB1、精神障害者保健福祉手帳1級または2級をお持ちの方及びその介護者は、最初の入庫から6時間に限り減免(全額免除)。出口インターホンでコールセンターを呼び出し、手帳をモニターカメラに提示。開庁日の最初の60分以内、閉庁日の最初の30分以内は手続不要。事前精算機・出口精算機・対応窓口でも処理可能。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初の1時間無料、以後30分につき150円\n障害者割引: 6時間無料\n総台数: 151台",
    "sourceUrl": "https://www.city.itami.lg.jp/SOSIKI/SOMU/KANZAI/TYUSYAJO/1390634804057.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28207-002",
    "name": "いたみ総合保健センター内駐車場",
    "address": "兵庫県伊丹市千僧1丁目1番地1 いたみ総合保健センター内",
    "latitude": 34.784084,
    "longitude": 135.400986,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28207",
    "cityName": "伊丹市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 6,
      "conditions": "障害者手帳1級から4級、療育手帳AまたはB1、精神障害者保健福祉手帳1級または2級をお持ちの方及びその介護者は、最初の入庫から6時間に限り全額免除。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 平日昼間:最初の1時間無料、以後30分につき150円(休業日昼間は最初の30分無料、以後30分につき200円、最大500円)\n障害者割引: 6時間無料\n総台数: 44台",
    "sourceUrl": "https://www.city.itami.lg.jp/SOSIKI/KENKOFUKUSHI/KENKO_SEISAKU/30989.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28207-003",
    "name": "伊丹市立宮ノ前地区地下駐車場(東リ いたみホール/伊丹アイフォニックホール地下駐車場)",
    "address": "兵庫県伊丹市宮ノ前1丁目73-4",
    "latitude": 34.782562,
    "longitude": 135.414841,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28207",
    "cityName": "伊丹市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 6,
      "conditions": "身体障がい者1~4級、知的障がい者A・B1、精神障がい者1・2級(いずれも介護者運転にも適用)は、入庫から6時間までの使用に係る料金に限り全額免除。入庫時に駐車場管理室【Bゾーン(B-1)】で障がい福祉の手帳と駐車券を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初の30分200円、その後30分毎に200円(午後11時~翌午前7時は60分100円/当日1日最大料金 平日800円・土日祝1,200円)\n障害者割引: 6時間無料\n総台数: 326台",
    "sourceUrl": "https://itami-cs.or.jp/itamihall/acces/parking.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28207-004",
    "name": "伊丹市立JR伊丹駅前駐車場(タイムズ伊丹市立JR伊丹駅前駐車場)",
    "address": "兵庫県伊丹市伊丹1丁目14-18",
    "latitude": 34.782425,
    "longitude": 135.420975,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28207",
    "cityName": "伊丹市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 6,
      "conditions": "身体障害者手帳1級から4級、療育手帳AまたはB1、精神障害者保健福祉手帳1級または2級をお持ちの方及びその介護者は、最初の入庫から6時間に限り全額免除。入庫時に係員に手帳を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 07:00-23:00 30分200円、23:00-07:00 60分100円(当日1日最大料金 月~土800円・日祝1,200円)\n障害者割引: 6時間無料\n総台数: 237台",
    "sourceUrl": "https://www.city.itami.lg.jp/SOSIKI/TOSHIKOTU/KOTU_SEISAKU/TYUSYAJO/1384332921059.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28207-005",
    "name": "伊丹市立アリオ地下駐車場(タイムズ伊丹市立アリオ地下駐車場)",
    "address": "兵庫県伊丹市伊丹2丁目5-5",
    "latitude": 34.780033,
    "longitude": 135.42041,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28207",
    "cityName": "伊丹市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 6,
      "conditions": "身体障害者手帳1級から4級、療育手帳AまたはB1、精神障害者保健福祉手帳1級または2級をお持ちの方及びその介護者は、最初の入庫から6時間に限り全額免除。入庫時に係員に手帳を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 07:00-23:00 30分200円、23:00-07:00 60分100円(日祝のみ当日1日最大料金1,200円)\n障害者割引: 6時間無料\n総台数: 93台",
    "sourceUrl": "https://www.city.itami.lg.jp/SOSIKI/TOSHIKOTU/KOTU_SEISAKU/TYUSYAJO/1384332921059.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28207-006",
    "name": "昆陽池公園駐車場(立体駐車場)",
    "address": "兵庫県伊丹市昆陽池3丁目",
    "latitude": 34.789017,
    "longitude": 135.393921,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28207",
    "cityName": "伊丹市",
    "accessibleSpaceTotal": 3,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 6,
      "conditions": "身体障害者手帳1級から4級、療育手帳AまたはB1、精神障害者保健福祉手帳1級または2級をお持ちの方及びその介護者は、最初の入庫から6時間に限り全額免除。昆陽池公園・昆虫館売店で手帳を提示、または駐車場自動精算機のインターホンで係員を呼び出す。"
    },
    "accessibleSpaces": [
      {
        "count": 3
      }
    ],
    "notes": "通常料金: 1時間まで200円、以降30分毎に100円加算(30分未満は30分とする)\n障害者割引: 6時間無料\n総台数: 151台",
    "sourceUrl": "https://www.city.itami.lg.jp/SOSIKI/TOSHIKOTU/KOUEN/oashisu/15104.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28207-007",
    "name": "荒牧バラ公園駐車場(伊丹市立みどりのプラザ)",
    "address": "兵庫県伊丹市荒牧6丁目4番12号",
    "latitude": 34.811256,
    "longitude": 135.387039,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28207",
    "cityName": "伊丹市",
    "accessibleSpaceTotal": 4,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 6,
      "conditions": "身体障害者手帳1~4級、療育手帳A・B1、精神障害者保健福祉手帳1~2級をお持ちの方及びその介護者は、最初の入庫から6時間に限り全額免除。みどりのプラザ(バラ公園隣接)で手帳を提示。"
    },
    "accessibleSpaces": [
      {
        "count": 4
      }
    ],
    "notes": "通常料金: 普通車1日1回500円(マイクロバス1,500円、大型バス3,000円/要予約)\n障害者割引: 6時間無料\n総台数: 230台",
    "sourceUrl": "https://www.city.itami.lg.jp/SOSIKI/KENKOFUKUSHI/SYOGAIF/josei_waribiki/1496410340676.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28207-008",
    "name": "伊丹スカイパーク駐車場(北駐車場・中央駐車場・南駐車場)",
    "address": "兵庫県伊丹市森本7丁目1-1",
    "latitude": 34.778679,
    "longitude": 135.441757,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28207",
    "cityName": "伊丹市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 6,
      "conditions": "身体障がい者手帳1級から4級、療育手帳AまたはB1、精神障がい者手帳1級または2級をお持ちの方及びその介護者は、最初の入庫から6時間に限り全額免除。帰りまでに駐車券と各手帳を持参のうえ北管理棟(パークセンター)・南管理棟で手続き。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車20分100円(平日および土日祝17時以降は最大料金600円)\n障害者割引: 6時間無料\n総台数: 341台",
    "sourceUrl": "https://www.itami-skypark.com/information/",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28207-009",
    "name": "伊丹市立生涯学習センター(ラスタホール)駐車場",
    "address": "兵庫県伊丹市南野2丁目3-25",
    "latitude": 34.765945,
    "longitude": 135.409088,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28207",
    "cityName": "伊丹市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 6,
      "conditions": "身体障がい者1~4級、知的障がい者A・B1、精神障がい者1~2級が対象。減免となる時間は6時間(無料となるはじめの1時間を含む)。事務所に駐車券と手帳を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初の1時間は無料、それ以降1時間につき150円\n障害者割引: 6時間無料\n総台数: 40台",
    "sourceUrl": "https://www.lustrehall.com/access/",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28207-010",
    "name": "スワンホール(伊丹市立産業・情報センター)駐車場",
    "address": "兵庫県伊丹市昆陽池2丁目1",
    "latitude": 34.786411,
    "longitude": 135.395233,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28207",
    "cityName": "伊丹市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 6,
      "conditions": "身体障がい者1~4級、知的障がい者A・B1、精神障がい者1~2級及びその介護者が対象。入庫から6時間までの使用に限り全額免除。事務所に駐車券と手帳を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 当初の60分は無料、当該60分を超えたときは30分につき150円\n障害者割引: 6時間無料",
    "sourceUrl": "https://nem-shiteikanri.jp/shisetsu/itami/access/",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28207-011",
    "name": "きららホール(伊丹市立北部学習センター)駐車場",
    "address": "兵庫県伊丹市北野4丁目30",
    "latitude": 34.802628,
    "longitude": 135.388474,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28207",
    "cityName": "伊丹市",
    "accessibleSpaceTotal": 2,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 6,
      "conditions": "身体障害者手帳1級から4級、療育手帳A・B1、精神障害者保健福祉手帳1級または2級の交付を受けている方とその介護者について、使用料の全額(ただし駐車場の使用料のうち当初6時間に限る)を免除。1階カウンター(事務所)で駐車券と手帳を提示。"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 最初の1時間は無料、それ以降は1時間150円\n障害者割引: 6時間無料\n総台数: 43台",
    "sourceUrl": "https://kirara-itami.com/access/",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28207-012",
    "name": "TOYO TIRES伊丹スポーツセンター駐車場(第1・第2・第3駐車場)",
    "address": "兵庫県伊丹市鴻池1丁目1番1号",
    "latitude": 34.794991,
    "longitude": 135.393402,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28207",
    "cityName": "伊丹市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 6,
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳の交付を受けている人及びその介護者が運転する自動車は、利用料金のうち当初の6時間に係る利用料金が全額減免。事務所に駐車券と手帳を提示し無料券の交付を受ける。(伊丹市の案内ページでは時間制限の記載がなく「無料」とされており、要確認)"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初の30分無料、入庫後30分を超えて1時間まで100円、1時間を超えると1時間ごとに100円加算(当日最長1,000円)\n障害者割引: 6時間無料\n総台数: 207台",
    "sourceUrl": "https://www.itami-sports.jp/access/",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28207-013",
    "name": "市立伊丹病院 患者用駐車場(平面駐車場・立体駐車場)",
    "address": "兵庫県伊丹市昆陽池1丁目100番地",
    "latitude": 34.783733,
    "longitude": 135.396973,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28207",
    "cityName": "伊丹市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳をお持ちの患者またはその付添の方が運転する自動車の駐車料金が全額免除。初診受付窓口(平日8:35~17:00)で1.駐車券 2.各種障害者手帳 3.当日の領収書(支払いが発生しない場合は診察券で代用可)の3点を提示。手帳所持者本人の来院が必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 入庫から30分まで無料、入庫から8時間まで200円、以降30分毎100円積上げ(最大24時間2,000円)\n障害者割引: 無料\n総台数: 180台",
    "sourceUrl": "https://www.hosp.itami.hyogo.jp/utilization/access.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28209-001",
    "name": "豊岡市営出石西の丸駐車場",
    "address": "兵庫県豊岡市出石町内町87番地の6",
    "latitude": 35.458183,
    "longitude": 134.875443,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28209",
    "cityName": "豊岡市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかの交付を受けている方が対象。精算機横に設置のオートフォンで申し出るか、ミライロIDの認証を行うことで駐車料金の5割相当額の減免が適用される。管理者:タイムズ24株式会社(電話:0120-72-8924)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 軽自動車・普通自動車:24時間ごとに400円/準中型・中型・大型自動車:24時間ごとに1,200円/自動二輪車:24時間まで100円(いずれも繰り返し適用)\n障害者割引: 駐車料金の5割相当額を減免",
    "sourceUrl": "https://times-info.net/P28-hyogo/C209/park-detail-BUK0073308/",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28209-002",
    "name": "豊岡市営出石鉄砲町駐車場",
    "address": "兵庫県豊岡市出石町鉄砲1番地の2",
    "latitude": 35.464733,
    "longitude": 134.875488,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28209",
    "cityName": "豊岡市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれかの交付を受けている方が対象。精算機横に設置のオートフォンで申し出るか、ミライロIDの認証を行うことで駐車料金の5割相当額の減免が適用される。管理者:タイムズ24株式会社(電話:0120-72-8924)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 軽自動車・普通自動車:24時間ごとに400円/準中型・中型・大型自動車:24時間ごとに1,200円/自動二輪車:24時間まで100円(いずれも繰り返し適用)\n障害者割引: 駐車料金の5割相当額を減免\n総台数: 96台",
    "sourceUrl": "https://times-info.net/P28-hyogo/C209/park-detail-BUK0073311/",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28210-001",
    "name": "加古川市営駐車場（たんようカーパークつつじ）",
    "address": "兵庫県加古川市加古川町北在家2002",
    "latitude": 34.756058,
    "longitude": 134.839615,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28210",
    "cityName": "加古川市",
    "accessibleSpaceTotal": 5,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳の交付を受けている方が運転又は同乗する自動車が対象。市役所へ用務来庁の場合は駐車券を携行し、精算時に手帳を提示して割引処理を受ける。(市公式サイトはbot対策により直接WebFetch不可のため、複数回の独立したWeb検索結果で一貫した内容を確認して採用。要再確認)"
    },
    "accessibleSpaces": [
      {
        "count": 5
      }
    ],
    "notes": "通常料金: 100円/30分（入場後30分は一律無料、上限600円/24時間ごと）\n障害者割引: 半額\n総台数: 437台",
    "sourceUrl": "https://www.city.kakogawa.lg.jp/soshikikarasagasu/somubu/kanzai/carpark/index.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28212-001",
    "name": "赤穂駅南駐車場",
    "address": "兵庫県赤穂市加里屋290",
    "latitude": 34.756844,
    "longitude": 134.392395,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28212",
    "cityName": "赤穂市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳(身体障害者福祉法第15条)、療育手帳、精神障害者保健福祉手帳の交付を受けている方が自ら運転する自動車を定期駐車もしくは一時駐車させるとき、または同乗する自動車を一時駐車させるときに料金の5割を免除。減免を受けるにはプラット赤穂2階管理事務所で各種手帳の提示等の手続きが必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分以内無料、その後1時間以内200円、以降30分ごとに100円加算、上限800円(6時~24時、一時駐車の場合)\n障害者割引: 5割減免(半額)\n総台数: 191台",
    "sourceUrl": "https://www.city.ako.lg.jp/kensetsu/shoukou/station_parking.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28212-002",
    "name": "赤穂駅北駐車場",
    "address": "兵庫県赤穂市山手町2",
    "latitude": 34.756962,
    "longitude": 134.39502,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28212",
    "cityName": "赤穂市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳(身体障害者福祉法第15条)、療育手帳、精神障害者保健福祉手帳の交付を受けている方が自ら運転する自動車を定期駐車もしくは一時駐車させるとき、または同乗する自動車を一時駐車させるときに料金の5割を免除。減免を受けるにはプラット赤穂2階管理事務所で各種手帳の提示等の手続きが必要。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分以内無料、その後1時間以内200円、以降30分ごとに100円加算、上限500円(6時~24時、一時駐車の場合)\n障害者割引: 5割減免(半額)\n総台数: 42台",
    "sourceUrl": "https://www.city.ako.lg.jp/kensetsu/shoukou/station_parking.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28212-003",
    "name": "丸山県民サンビーチ駐車場",
    "address": "兵庫県赤穂市尾崎字丸山2296-3",
    "latitude": 34.744137,
    "longitude": 134.419159,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28212",
    "cityName": "赤穂市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "障害者手帳の提示があった場合、駐車料金が半額になる。デジタル障害者手帳アプリ「ミライロID」の提示にも対応。問合せ先: 赤穂市産業振興部観光課(電話0791-43-6839)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 60分200円(入庫から1時間以内の出庫は無料)、24時間最大500円(4月~11月の土日祝日は最大1,800円)、バイク・自転車は無料\n障害者割引: 半額",
    "sourceUrl": "https://www.city.ako.lg.jp/sangyoshinko/kankou/maruyama_parking.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28213-001",
    "name": "西脇中央駐車場（アピカ駐車場）",
    "address": "兵庫県西脇市西脇951",
    "latitude": 34.985954,
    "longitude": 134.968094,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28213",
    "cityName": "西脇市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳のいずれかの交付を受けている方が乗車する普通自動車が対象。駐車場利用1回につき3時間までの駐車料金が無料。出庫時に管理事務所へ申し出て手帳を提示すること。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分ごと100円、1日最大1,200円（6時間以上24時間未満）\n障害者割引: 3時間まで無料\n総台数: 250台",
    "sourceUrl": "https://www.city.nishiwaki.lg.jp/kakukanogoannai/kensetsusuidoubu/shisetukanrika/parking_cycle_parking/apikaparking.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28214-001",
    "name": "宝塚市役所内駐車場",
    "address": "兵庫県宝塚市東洋町1番1号",
    "latitude": 34.799294,
    "longitude": 135.360291,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28214",
    "cityName": "宝塚市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳、療育手帳の交付を受けた方、またはその方のために他の方が運転する自動車が対象。事前精算機のウェブカメラ、防災センター窓口、本庁舎4階管財課窓口、または駐車場出口ゲート精算機のウェブカメラのいずれかに手帳を提示。歩行困難者向けの屋根付き駐車スペースもあり。問合せ：総務部管財課 0797-77-2031"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初の60分無料、以降30分ごとに100円\n障害者割引: 無料（使用料免除）",
    "sourceUrl": "https://www.city.takarazuka.hyogo.jp/about/profile/1001188.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28214-002",
    "name": "末広中央公園駐車場",
    "address": "兵庫県宝塚市末広町",
    "latitude": 34.801384,
    "longitude": 135.358231,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28214",
    "cityName": "宝塚市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳（身体障害者手帳、療育手帳、精神障害者保健福祉手帳）の交付を受けた方、またはその方のために他の方が運転する自動車が対象。出庫口のインターフォンで三井リパークコールセンター（0120-050-321）へ連絡して免除手続き。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初の60分無料、以降30分ごとに100円\n障害者割引: 無料（使用料免除）\n総台数: 120台",
    "sourceUrl": "https://www.city.takarazuka.hyogo.jp/anzen/1009516/park/1055989.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28214-003",
    "name": "武田尾駅前駐車場",
    "address": "兵庫県宝塚市玉瀬字イヅリハ1-42",
    "latitude": 34.854725,
    "longitude": 135.301178,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28214",
    "cityName": "宝塚市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳、療育手帳をお持ちの方が対象。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1回1日500円\n障害者割引: 無料（使用料免除）",
    "sourceUrl": "https://www.city.takarazuka.hyogo.jp/anzen/1009491/1009710/1049759.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28214-004",
    "name": "宝塚市立スポーツセンター駐車場",
    "address": "兵庫県宝塚市小浜1丁目1番11号",
    "latitude": 34.801941,
    "longitude": 135.363022,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28214",
    "cityName": "宝塚市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳、療育手帳をお持ちの方が対象。受付事務所で手帳を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 6時〜22時：1時間以内無料、以降1時間ごとに150円／22時〜翌6時：2,000円\n障害者割引: 無料（駐車料金免除）",
    "sourceUrl": "https://tspf.hyogo.jp/access/",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28214-005",
    "name": "宝塚市立西公民館駐車場（西図書館共用）",
    "address": "兵庫県宝塚市小林2丁目7番30号",
    "latitude": 34.790161,
    "longitude": 135.352997,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28214",
    "cityName": "宝塚市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がい者手帳をお持ちの方が対象。窓口でお申し出が必要。西図書館利用者もこの駐車場を利用（車いす使用者対応駐車区画あり）。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 駐車開始から1時間無料、以降30分ごとに100円（30分未満切り上げ）、最大900円\n障害者割引: 無料（駐車場利用料免除）",
    "sourceUrl": "https://www.takarazuka-kominkan.jp/nishi/faq/",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28214-006",
    "name": "ベガ・ホール駐車場（中央図書館共用）",
    "address": "兵庫県宝塚市清荒神1丁目2番18号",
    "latitude": 34.811108,
    "longitude": 135.352737,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28214",
    "cityName": "宝塚市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳または療育手帳をベガ・ホールで提示することで無料。中央図書館利用者もこの駐車場を利用。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 最初の30分無料、以降30分ごとに200円（水曜8:00〜19:00最大800円、全曜日19:00〜翌8:00最大400円）\n障害者割引: 無料（提示により無料）\n総台数: 23台",
    "sourceUrl": "https://www.city.takarazuka.hyogo.jp/1060680/1060699/kyoikuiinkai/library/1054760.html",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28214-007",
    "name": "宝塚市立病院駐車場",
    "address": "兵庫県宝塚市小浜4丁目5-1",
    "latitude": 34.804588,
    "longitude": 135.365311,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28214",
    "cityName": "宝塚市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳、療育手帳をお持ちの方が対象。総合案内または初診・再診受付にて駐車券と手帳を提示し認証を受ける。診療が長時間になる等で4時間を超える場合は200円据え置きの特例あり（要認証）。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分以内無料、4時間以内200円、以降30分ごとに100円加算\n障害者割引: 無料（駐車料金免除）",
    "sourceUrl": "https://www.takarazukacity-hp.com/faq/",
    "updatedAt": "2026-08-20T00:00:00Z"
  },
  {
    "id": "28217-001",
    "name": "川西市役所内駐車場",
    "address": "兵庫県川西市中央町12番1号",
    "latitude": 34.830666,
    "longitude": 135.417191,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28217",
    "cityName": "川西市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳所持者が自ら運転または同乗している場合、開庁時に行先の窓口で手帳を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 開庁時(平日8:00-18:00)最初の60分無料、以降平日30分200円・18:00-翌8:00は60分100円、休日(土日祝・年末年始)は当日午前0時まで最大500円\n障害者割引: 駐車料金免除(開庁時間中)",
    "sourceUrl": "https://www.city.kawanishi.hyogo.jp/kurashi/fukushi_kaigo/syougai/1001023/1001032.html",
    "updatedAt": "2026-08-21T00:00:00Z"
  },
  {
    "id": "28217-002",
    "name": "ドラゴンランド駐車場",
    "address": "兵庫県川西市小花2丁目",
    "latitude": 34.823242,
    "longitude": 135.417267,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28217",
    "cityName": "川西市",
    "accessibleSpaceTotal": 2,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 3,
      "conditions": "障がい者手帳をお持ちの方(3時間経過後は通常料金が加算される)。詳細は管理業者アマノマネジメントサービス株式会社(0120-951-365)へ"
    },
    "accessibleSpaces": [
      {
        "count": 2
      }
    ],
    "notes": "通常料金: 平日:最初30分無料、以降60分ごとに200円、当日最大550円/土日祝:最初30分無料、以降60分ごとに200円、最大料金設定なし\n障害者割引: 最初の3時間無料\n総台数: 62台",
    "sourceUrl": "https://www.city.kawanishi.hyogo.jp/kurashi/1017490/midori/dragonland_parking.html",
    "updatedAt": "2026-08-21T00:00:00Z"
  },
  {
    "id": "28217-003",
    "name": "市民温水プール・総合体育館・弓道場駐車場(キセラ川西プラザ駐車場・市民温水プール駐車場)",
    "address": "兵庫県川西市火打1丁目1番4号",
    "latitude": 34.833416,
    "longitude": 135.418976,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28217",
    "cityName": "川西市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳または療育手帳保持者。利用施設の窓口へ手帳を提示"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 施設利用者は最初の3時間無料、以降30分につき100円(1日上限600円)\n障害者割引: 駐車料金免除\n総台数: 376台",
    "sourceUrl": "https://www.city.kawanishi.hyogo.jp/kurashi/shimin/sports/sshisetuan/1007525.html",
    "updatedAt": "2026-08-21T00:00:00Z"
  },
  {
    "id": "28219-001",
    "name": "三田市営駐車場(市役所横・屋外)",
    "address": "兵庫県三田市三輪2丁目1番1号",
    "latitude": 34.889999,
    "longitude": 135.226074,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28219",
    "cityName": "三田市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳所持者(本人運転または介護者運転)、精神障害者保健福祉手帳所持者(同乗)、療育手帳所持者(同乗)が対象。手帳等の提示により免除。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 平日8時-18時:入庫後60分無料、以降30分ごと150円/平日18時-翌8時・土日祝日:30分ごと150円(最大1,000円)\n障害者割引: 使用料全額免除",
    "sourceUrl": "https://www.city.sanda.lg.jp/soshiki/138/gyomu/doro/4614.html",
    "updatedAt": "2026-08-21T00:00:00Z"
  },
  {
    "id": "28219-002",
    "name": "新三田駅前駐車場",
    "address": "兵庫県三田市福島455番地9",
    "latitude": 34.909298,
    "longitude": 135.207367,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28219",
    "cityName": "三田市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳所持者が対象。定期使用・一時使用のいずれも適用。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 一時駐車:30分ごと150円(3時間以内)、3時間超24時間以内は1,000円/定期券:全日1箇月14,000円\n障害者割引: 5割減免\n総台数: 280台",
    "sourceUrl": "https://www.city.sanda.lg.jp/material/files/group/38/tyuurinntyuusyajyougaiyou.pdf",
    "updatedAt": "2026-08-21T00:00:00Z"
  },
  {
    "id": "28219-003",
    "name": "藍本駅前駐車場",
    "address": "兵庫県三田市藍本876-2番地",
    "latitude": 34.983997,
    "longitude": 135.15773,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28219",
    "cityName": "三田市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・療育手帳・精神障害者保健福祉手帳所持者が対象。定期使用・一時使用のいずれも適用。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 一時使用:1日500円/定期券:全日1箇月6,000円\n障害者割引: 5割減免\n総台数: 21台",
    "sourceUrl": "https://www.city.sanda.lg.jp/material/files/group/38/tyuurinntyuusyajyougaiyou.pdf",
    "updatedAt": "2026-08-21T00:00:00Z"
  },
  {
    "id": "28219-004",
    "name": "三田市総合文化センター(郷の音ホール)駐車場",
    "address": "兵庫県三田市天神1丁目3番1号",
    "latitude": 34.890026,
    "longitude": 135.223053,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28219",
    "cityName": "三田市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身障者用駐車許可証またはゆずりあい駐車場利用証を提示。専用駐車スペース利用時は証明書を車のフロントに提示。専用スペースが満車の場合は一般駐車場を利用し、総合案内所で駐車券と証明書を提示すれば免除。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 8:00-23:00は1時間ごと100円(最初30分無料)、23:00-翌8:00は出庫のみ可(2,000円加算)\n障害者割引: 駐車料金免除(無料)\n総台数: 400台",
    "sourceUrl": "https://sanda-bunka.jp/faq/%e8%ba%ab%e4%bd%93%e9%9a%9c%e5%ae%b3%e8%80%85%e3%81%a7%e3%81%99%e3%81%8c%e3%80%81%e9%a7%90%e8%bb%8a%e6%96%99%e9%87%91%e3%81%af%e7%84%a1%e6%96%99%e3%81%ab%e3%81%aa%e3%82%8a%e3%81%be%e3%81%9b%e3%82%93/",
    "updatedAt": "2026-08-21T00:00:00Z"
  },
  {
    "id": "28221-001",
    "name": "丹波篠山市三の丸西駐車場",
    "address": "兵庫県丹波篠山市北新町24番地1",
    "latitude": 35.073341,
    "longitude": 135.21611,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28221",
    "cityName": "丹波篠山市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳の交付を受けている者が定期駐車(月極契約駐車)する場合に駐車料金の5割を減免(丹波篠山市営駐車場条例施行規則第7条第1項第4号)。減免を受けるには「市営駐車場定期駐車使用料減免申請書」を市長に提出。時間貸し・都度利用への適用は規則上明記されていない。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車500円/回(繁忙期4・5・9・10・11月は800円)、バス1,000円(繁忙期1,300円)\n障害者割引: 定期駐車の場合、料金の5割引\n総台数: 350台",
    "sourceUrl": "https://www.city.tambasasayama.lg.jp/section/reiki_int/reiki_honbun/j700RG00000856.html",
    "updatedAt": "2026-08-21T00:00:00Z"
  },
  {
    "id": "28221-002",
    "name": "丹波篠山市大手前南駐車場",
    "address": "兵庫県丹波篠山市北新町47番地2",
    "latitude": 35.075439,
    "longitude": 135.216354,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28221",
    "cityName": "丹波篠山市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳の交付を受けている者が定期駐車(月極契約駐車)する場合に駐車料金の5割を減免(丹波篠山市営駐車場条例施行規則第7条第1項第4号)。減免を受けるには「市営駐車場定期駐車使用料減免申請書」を市長に提出。時間貸し・都度利用への適用は規則上明記されていない。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間未満無料、1時間以上500円/回(繁忙期800円)\n障害者割引: 定期駐車の場合、料金の5割引",
    "sourceUrl": "https://www.city.tambasasayama.lg.jp/section/reiki_int/reiki_honbun/j700RG00000856.html",
    "updatedAt": "2026-08-21T00:00:00Z"
  },
  {
    "id": "28221-003",
    "name": "丹波篠山市大手前北駐車場",
    "address": "兵庫県丹波篠山市北新町88番地1",
    "latitude": 35.076054,
    "longitude": 135.216003,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28221",
    "cityName": "丹波篠山市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳の交付を受けている者が定期駐車(月極契約駐車)する場合に駐車料金の5割を減免(丹波篠山市営駐車場条例施行規則第7条第1項第4号)。減免を受けるには「市営駐車場定期駐車使用料減免申請書」を市長に提出。時間貸し・都度利用への適用は規則上明記されていない。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間未満無料、1時間以上500円/回(繁忙期800円)\n障害者割引: 定期駐車の場合、料金の5割引",
    "sourceUrl": "https://www.city.tambasasayama.lg.jp/section/reiki_int/reiki_honbun/j700RG00000856.html",
    "updatedAt": "2026-08-21T00:00:00Z"
  },
  {
    "id": "28221-004",
    "name": "丹波篠山市交響ホール西駐車場",
    "address": "兵庫県丹波篠山市北新町41番地",
    "latitude": 35.075584,
    "longitude": 135.218216,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28221",
    "cityName": "丹波篠山市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳の交付を受けている者が定期駐車(月極契約駐車)する場合に駐車料金の5割を減免(丹波篠山市営駐車場条例施行規則第7条第1項第4号)。減免を受けるには「市営駐車場定期駐車使用料減免申請書」を市長に提出。時間貸し・都度利用への適用は規則上明記されていない。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間未満無料、1時間以上500円/回(繁忙期800円)\n障害者割引: 定期駐車の場合、料金の5割引",
    "sourceUrl": "https://www.city.tambasasayama.lg.jp/section/reiki_int/reiki_honbun/j700RG00000856.html",
    "updatedAt": "2026-08-21T00:00:00Z"
  },
  {
    "id": "28221-005",
    "name": "丹波篠山市河原町駐車場",
    "address": "兵庫県丹波篠山市河原町209番地1",
    "latitude": 35.07127,
    "longitude": 135.224197,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28221",
    "cityName": "丹波篠山市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳の交付を受けている者が定期駐車(月極契約駐車)する場合に駐車料金の5割を減免(丹波篠山市営駐車場条例施行規則第7条第1項第4号)。減免を受けるには「市営駐車場定期駐車使用料減免申請書」を市長に提出。時間貸し・都度利用への適用は規則上明記されていない。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間未満無料、1時間以上500円/回(繁忙期800円)\n障害者割引: 定期駐車の場合、料金の5割引",
    "sourceUrl": "https://www.city.tambasasayama.lg.jp/section/reiki_int/reiki_honbun/j700RG00000856.html",
    "updatedAt": "2026-08-21T00:00:00Z"
  },
  {
    "id": "28221-006",
    "name": "丹波篠山市立町駐車場",
    "address": "兵庫県丹波篠山市立町49番地",
    "latitude": 35.073948,
    "longitude": 135.222916,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28221",
    "cityName": "丹波篠山市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳の交付を受けている者が定期駐車(月極契約駐車)する場合に駐車料金の5割を減免(丹波篠山市営駐車場条例施行規則第7条第1項第4号)。減免を受けるには「市営駐車場定期駐車使用料減免申請書」を市長に提出。時間貸し・都度利用への適用は規則上明記されていない。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間未満無料、1時間以上500円/回(繁忙期800円)\n障害者割引: 定期駐車の場合、料金の5割引",
    "sourceUrl": "https://www.city.tambasasayama.lg.jp/section/reiki_int/reiki_honbun/j700RG00000856.html",
    "updatedAt": "2026-08-21T00:00:00Z"
  },
  {
    "id": "28221-007",
    "name": "丹波篠山市歴史美術館前駐車場",
    "address": "兵庫県丹波篠山市二階町7番地1",
    "latitude": 35.077152,
    "longitude": 135.219574,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28221",
    "cityName": "丹波篠山市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳の交付を受けている者が定期駐車(月極契約駐車)する場合に駐車料金の5割を減免(丹波篠山市営駐車場条例施行規則第7条第1項第4号)。減免を受けるには「市営駐車場定期駐車使用料減免申請書」を市長に提出。時間貸し・都度利用への適用は規則上明記されていない。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間未満無料、1時間以上500円/回(繁忙期800円)\n障害者割引: 定期駐車の場合、料金の5割引",
    "sourceUrl": "https://www.city.tambasasayama.lg.jp/section/reiki_int/reiki_honbun/j700RG00000856.html",
    "updatedAt": "2026-08-21T00:00:00Z"
  },
  {
    "id": "28221-008",
    "name": "丹波篠山市裁判所北駐車場",
    "address": "兵庫県丹波篠山市黒岡314番地",
    "latitude": 35.079494,
    "longitude": 135.220276,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28221",
    "cityName": "丹波篠山市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳の交付を受けている者が定期駐車(月極契約駐車)する場合に駐車料金の5割を減免(丹波篠山市営駐車場条例施行規則第7条第1項第4号)。減免を受けるには「市営駐車場定期駐車使用料減免申請書」を市長に提出。時間貸し・都度利用への適用は規則上明記されていない。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間未満無料、1時間以上500円/回(繁忙期800円)\n障害者割引: 定期駐車の場合、料金の5割引",
    "sourceUrl": "https://www.city.tambasasayama.lg.jp/section/reiki_int/reiki_honbun/j700RG00000856.html",
    "updatedAt": "2026-08-21T00:00:00Z"
  },
  {
    "id": "28221-009",
    "name": "丹波篠山市役所庁舎前駐車場",
    "address": "兵庫県丹波篠山市北新町41番地",
    "latitude": 35.075584,
    "longitude": 135.218216,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28221",
    "cityName": "丹波篠山市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳の交付を受けている者が定期駐車(月極契約駐車)する場合に駐車料金の5割を減免(丹波篠山市営駐車場条例施行規則第7条第1項第4号)。減免を受けるには「市営駐車場定期駐車使用料減免申請書」を市長に提出。時間貸し・都度利用への適用は規則上明記されていない。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間未満無料、1時間以上500円/回(繁忙期800円)\n障害者割引: 定期駐車の場合、料金の5割引",
    "sourceUrl": "https://www.city.tambasasayama.lg.jp/section/reiki_int/reiki_honbun/j700RG00000856.html",
    "updatedAt": "2026-08-21T00:00:00Z"
  },
  {
    "id": "28221-010",
    "name": "丹波篠山市西町駐車場",
    "address": "兵庫県丹波篠山市西新町53番地1",
    "latitude": 35.073441,
    "longitude": 135.213287,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28221",
    "cityName": "丹波篠山市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳の交付を受けている者が定期駐車(月極契約駐車)する場合に駐車料金の5割を減免(丹波篠山市営駐車場条例施行規則第7条第1項第4号)。減免を受けるには「市営駐車場定期駐車使用料減免申請書」を市長に提出。時間貸し・都度利用への適用は規則上明記されていない。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間未満無料、1時間以上500円/回(繁忙期800円)\n障害者割引: 定期駐車の場合、料金の5割引",
    "sourceUrl": "https://www.city.tambasasayama.lg.jp/section/reiki_int/reiki_honbun/j700RG00000856.html",
    "updatedAt": "2026-08-21T00:00:00Z"
  },
  {
    "id": "28221-011",
    "name": "丹波篠山市南新町駐車場",
    "address": "兵庫県丹波篠山市南新町148番地1",
    "latitude": 35.069206,
    "longitude": 135.219543,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28221",
    "cityName": "丹波篠山市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳の交付を受けている者が定期駐車(月極契約駐車)する場合に駐車料金の5割を減免(丹波篠山市営駐車場条例施行規則第7条第1項第4号)。減免を受けるには「市営駐車場定期駐車使用料減免申請書」を市長に提出。時間貸し・都度利用への適用は規則上明記されていない。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間未満無料、1時間以上500円/回(繁忙期800円)\n障害者割引: 定期駐車の場合、料金の5割引",
    "sourceUrl": "https://www.city.tambasasayama.lg.jp/section/reiki_int/reiki_honbun/j700RG00000856.html",
    "updatedAt": "2026-08-21T00:00:00Z"
  },
  {
    "id": "28226-001",
    "name": "淡路島 国営明石海峡公園 淡路口駐車場",
    "address": "兵庫県淡路市夢舞台8-10",
    "latitude": 34.565056,
    "longitude": 135.013855,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28226",
    "cityName": "淡路市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳又は精神障害者保健福祉手帳を提示の場合、駐車料無料。同乗者が11名以上の場合は2名の手帳提示が必要。海岸南駐車場も同一料金体系(12月〜2月は閉鎖)。観光バスは減免対象外。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通車500円/日、大型車1,600円/日、自動二輪100円/日\n障害者割引: 無料",
    "sourceUrl": "https://awaji-kaikyopark.kkr.mlit.go.jp/about",
    "updatedAt": "2026-08-21T00:00:00Z"
  },
  {
    "id": "28382-001",
    "name": "播磨町健康いきいきセンター 駐車場",
    "address": "兵庫県加古郡播磨町南大中1丁目8番60号",
    "latitude": 34.72039,
    "longitude": 134.868805,
    "prefectureCode": "28",
    "prefectureName": "兵庫県",
    "cityCode": "28382",
    "cityName": "播磨町",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳または療育手帳をフロントにて提示することで、無料の出庫カードを交付。台数に限りがあるため自転車・徒歩・公共交通機関での来場が推奨されている。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1回1台につき100円(フロントで出庫カードを購入)\n障害者割引: 無料(出庫カードを無料で交付)",
    "sourceUrl": "https://ikiiki-harima.com/guide/",
    "updatedAt": "2026-08-21T00:00:00Z"
  },
  {
    "id": "01101-001",
    "name": "北一条地下駐車場",
    "address": "北海道札幌市中央区北一条西5-1",
    "latitude": 43.062305,
    "longitude": 141.349228,
    "prefectureCode": "01",
    "prefectureName": "北海道",
    "cityCode": "01101",
    "cityName": "札幌市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "unknown",
    "discount": {
      "type": "unknown",
      "conditions": "身体障害者手帳等の障がい者手帳を精算時に提示することで駐車料金が50%優待になる(運営:タイムズ24)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分300円(平日最大2,500円[7:30-22:00]/夜間最大1,000円[21:30-8:00]、土日祝最大2,200円)\n障害者割引: 50%割引\n総台数: 149台",
    "sourceUrl": "https://times-info.net/P01-hokkaido/C101/park-detail-BUK0029883/",
    "updatedAt": "2026-08-22T00:00:00Z"
  },
  {
    "id": "01101-002",
    "name": "市立札幌病院 駐車場",
    "address": "北海道札幌市中央区北11条西13丁目1-1",
    "latitude": 43.069893,
    "longitude": 141.33429,
    "prefectureCode": "01",
    "prefectureName": "北海道",
    "cityCode": "01101",
    "cityName": "札幌市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障害者手帳を所持する外来受診患者は駐車料金無料。1階中央ロビー総合案内または防災センターで駐車券の確認(磁気入力処理)を受ける必要あり。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間まで100円(以降30分ごとに50円)\n障害者割引: 無料",
    "sourceUrl": "https://www.city.sapporo.jp/hospital/access/parking.html",
    "updatedAt": "2026-08-22T00:00:00Z"
  },
  {
    "id": "01101-003",
    "name": "札幌医科大学附属病院 駐車場(第1・第2・東駐車場)",
    "address": "北海道札幌市中央区南1条西16丁目291番地",
    "latitude": 43.055676,
    "longitude": 141.333206,
    "prefectureCode": "01",
    "prefectureName": "北海道",
    "cityCode": "01101",
    "cityName": "札幌市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、精神障害者保健福祉手帳、療育手帳のいずれか所持者は駐車料金全額免除。受診を証明する書類(領収書・受付票・予約票等)と手帳を持参し、平日9時~18時に1階ロビー「駐車券割引カウンター」で認証を受ける。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 外来受診者 1回400円\n障害者割引: 無料\n総台数: 300台",
    "sourceUrl": "https://web.sapmed.ac.jp/hospital/access/mumhv600000033px.html",
    "updatedAt": "2026-08-22T00:00:00Z"
  },
  {
    "id": "01101-004",
    "name": "ビッグシャイン88北1条駐車場(北海道立近代美術館提携)",
    "address": "北海道札幌市中央区北1条西15丁目1-6",
    "latitude": 43.059322,
    "longitude": 141.333847,
    "prefectureCode": "01",
    "prefectureName": "北海道",
    "cityCode": "01101",
    "cityName": "札幌市中央区",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "maxHours": 1,
      "conditions": "北海道立近代美術館の提携駐車場。身体障害者手帳・療育手帳・精神障害者保健福祉手帳のいずれか提示で1時間無料。美術館来館者向けの押印割引(20分無料)とは併用不可(美術館で押印すると障害者割引は適用不可)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 20分130円\n障害者割引: 1時間無料",
    "sourceUrl": "https://artmuseum.pref.hokkaido.lg.jp/knb/access/",
    "updatedAt": "2026-08-22T00:00:00Z"
  },
  {
    "id": "01103-001",
    "name": "タイムズ札幌丘珠空港",
    "address": "北海道札幌市東区丘珠町63",
    "latitude": 43.120789,
    "longitude": 141.39444,
    "prefectureCode": "01",
    "prefectureName": "北海道",
    "cityCode": "01103",
    "cityName": "札幌市東区",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳・精神障害者保健福祉手帳・療育手帳をお持ちの利用者及びその同伴者は減免(半額)。駐車場内東側精算機の専用オートフォンより手続き。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間まで無料、2時間まで200円、24時間まで400円、以降24時間毎400円(最大料金:駐車後24時間で400円)\n障害者割引: 半額\n総台数: 386台",
    "sourceUrl": "https://times-info.net/P01-hokkaido/C103/park-detail-BUK0043675/",
    "updatedAt": "2026-08-22T00:00:00Z"
  },
  {
    "id": "01105-001",
    "name": "大和ハウス プレミストドーム(札幌ドーム) 駐車場",
    "address": "北海道札幌市豊平区羊ケ丘1番地",
    "latitude": 42.996433,
    "longitude": 141.394989,
    "prefectureCode": "01",
    "prefectureName": "北海道",
    "cityCode": "01105",
    "cityName": "札幌市豊平区",
    "accessibleSpaceTotal": 0,
    "discountType": "unknown",
    "discount": {
      "type": "unknown",
      "conditions": "身体障がい者手帳・療育手帳・精神障がい者保健福祉手帳・いつくしみの手帳・被爆者健康手帳のいずれかの所持者が対象。利用当日は手帳所有者本人の同乗が必須。購入はローソンチケット・セブンチケット・チケットぴあのみ取扱い(前売限定、当日券売り場での障がい者割引の記載なし)。車いす利用者向けに敷地内無料送迎サービス(事前予約制)あり。通常時(イベントなしの時間貸)については障害者割引の記載は確認できなかった。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: イベント開催時(前売): 普通車3,000円/台。当日払い: 普通車1,000円/台。通常時(イベントなし): 最初の1時間220円、以降30分ごと110円\n障害者割引: イベント開催時、障がい者用駐車券・車いす席専用駐車券は1,200円/台(前売のみ)",
    "sourceUrl": "https://www.sapporo-dome.co.jp/access/parking/",
    "updatedAt": "2026-08-22T00:00:00Z"
  },
  {
    "id": "01106-001",
    "name": "北海道立真駒内公園駐車場(A・B・C駐車場)",
    "address": "北海道札幌市南区真駒内公園3番1号",
    "latitude": 42.996368,
    "longitude": 141.34285,
    "prefectureCode": "01",
    "prefectureName": "北海道",
    "cityCode": "01106",
    "cityName": "札幌市南区",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "有料期間・時間内(4月29日~11月3日の土曜・日曜・祝日、6:30~19:00、C駐車場は7:00~18:00)の利用が対象。対象は(1)身体障がい者・知的障がい者・精神障がい者及びその引率者、(2)盲学校・聾学校・養護学校の児童生徒の引率者、(3)児童福祉施設入所又は通園する児童の引率者、(4)老人福祉施設入所者及びその引率者、(5)(6)公園維持管理・子育て支援ボランティア団体(要事前登録)。個人利用の場合は駐車場入口で障害者手帳等の証明書を提示すれば事前申請不要で即時免除。団体利用は前日までに公園事務所へ連絡し申請書提出が必要。なお有料期間・時間外は全利用者が無料。"
    },
    "accessibleSpaces": [],
    "notes": "障害者割引: 免除(全額無料)",
    "sourceUrl": "https://makomanai-park.jp/access/",
    "updatedAt": "2026-08-22T00:00:00Z"
  },
  {
    "id": "01202-001",
    "name": "函館空港駐車場",
    "address": "北海道函館市高松町511番地",
    "latitude": 41.77327,
    "longitude": 140.813065,
    "prefectureCode": "01",
    "prefectureName": "北海道",
    "cityCode": "01202",
    "cityName": "函館市",
    "accessibleSpaceTotal": 10,
    "discountType": "unknown",
    "discount": {
      "type": "unknown",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳、戦傷病者手帳、被爆者健康手帳、特定疾患医療受給者証、特定医療費(指定難病)受給者証、小児慢性特定疾病医療受給者証のいずれかの保有者が対象。出庫時に自動精算機からAMSお客様さぽーとセンター(0120-951-365)を呼び出して手続き。運営:北海道エアポート株式会社。公式ページには割引制度の存在は明記されているが具体的な割引率(%)の記載はなく、電話確認が必要。"
    },
    "accessibleSpaces": [
      {
        "count": 10
      }
    ],
    "notes": "通常料金: 1時間まで無料、1時間30分まで200円、2時間まで300円、以降1時間毎150円(通常期)/24時間毎最大1,000円(多客期は1時間毎200円・24時間毎最大1,200円)\n障害者割引: 障がい者割引あり(割引率は公式ページに明記なし、要問合せ)",
    "sourceUrl": "https://www.hokkaido-airports.com/rd_parking/hkd/",
    "updatedAt": "2026-08-22T00:00:00Z"
  },
  {
    "id": "01203-001",
    "name": "小樽市立病院駐車場",
    "address": "北海道小樽市若松1丁目1番1号",
    "latitude": 43.185734,
    "longitude": 141.007629,
    "prefectureCode": "01",
    "prefectureName": "北海道",
    "cityCode": "01203",
    "cityName": "小樽市",
    "accessibleSpaceTotal": 20,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障がい者手帳所持者が対象。受診後、1階料金計算窓口に駐車券を提示のうえ申し出ることで無料処理(手帳の提示・確認を求められる場合あり)。身障者用駐車区画は計20台(駐車場内5台、建物正面8台、救急前7台)。"
    },
    "accessibleSpaces": [
      {
        "count": 20
      }
    ],
    "notes": "通常料金: 一般来院者:1回100円(12時間超過ごとに100円加算)\n障害者割引: 無料\n総台数: 250台",
    "sourceUrl": "https://www.otaru-general-hospital.jp/for-visitors/access-parking/",
    "updatedAt": "2026-08-22T00:00:00Z"
  },
  {
    "id": "01204-001",
    "name": "旭川市 ときわ市民ホール・勤労者福祉会館・勤労者体育センター・サン・アザレア共用駐車場(第1・第2駐車場)",
    "address": "北海道旭川市5条通4丁目・6条通4丁目",
    "latitude": 43.771515,
    "longitude": 142.356323,
    "prefectureCode": "01",
    "prefectureName": "北海道",
    "cityCode": "01204",
    "cityName": "旭川市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "障がい者の方は駐車料金が免除。ときわ市民ホール・旭川勤労者福祉会館・旭川勤労者体育センター・旭川建設労働者福祉センター(サン・アザレア)の4施設が共用する第1・第2駐車場(合計160台、各施設公式ページに同一文言で記載)。提示方法等詳細は各施設へ要確認。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 30分以内無料、以降1時間100円(超過30分ごとに50円加算)\n障害者割引: 無料\n総台数: 160台",
    "sourceUrl": "https://www.city.asahikawa.hokkaido.jp/facility00/facility08/p006191.html",
    "updatedAt": "2026-08-22T00:00:00Z"
  },
  {
    "id": "01205-001",
    "name": "東室蘭駅前パークアンドライド駐車場",
    "address": "北海道室蘭市海岸町1丁目4番1号",
    "latitude": 42.320992,
    "longitude": 140.971924,
    "prefectureCode": "01",
    "prefectureName": "北海道",
    "cityCode": "01205",
    "cityName": "室蘭市",
    "accessibleSpaceTotal": 0,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身体障害者手帳、療育手帳又は精神障害者保健福祉手帳の交付を受けている者が、当該手帳を提示して駐車券の認証を受けた場合に駐車料金を免除する(室蘭市道路附属物自動車駐車場条例施行規則第7条)。認証は蘭東支所「えきがるセンター」窓口等で受け、東室蘭駅東口の精算機で精算する。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 利用1回につき500円(入庫から30分以内の出庫でも有料)\n障害者割引: 無料\n総台数: 95台",
    "sourceUrl": "https://www1.g-reiki.net/muroran/reiki_honbun/q000RG00000762.html",
    "updatedAt": "2026-08-22T00:00:00Z"
  },
  {
    "id": "01205-002",
    "name": "市立室蘭総合病院 外来駐車場",
    "address": "北海道室蘭市山手町3丁目8番1号",
    "latitude": 42.314796,
    "longitude": 140.975647,
    "prefectureCode": "01",
    "prefectureName": "北海道",
    "cityCode": "01205",
    "cityName": "室蘭市",
    "accessibleSpaceTotal": 0,
    "discountType": "cap_hours",
    "discount": {
      "type": "cap_hours",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳の交付を受けている方及びこれらの方を乗車させて来院する方が対象。利用時に手帳の提示が必要で、開院日8時30分~17時は「総合案内」、閉院日・時間外は「救急外来窓口」で駐車券の認証を受ける。第2駐車場に障害をお持ちの方向けの優先駐車場を設置(従来の車椅子用駐車場は現在は車椅子専用)。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 外来患者:1日1回100円/外来患者以外(面会者等):1時間まで100円、以後30分毎に50円加算\n障害者割引: 1回100円(減額又は免除のため時間経過による加算なし)",
    "sourceUrl": "https://www.city.muroran.lg.jp/hospital/introduction/?content=2601",
    "updatedAt": "2026-08-22T00:00:00Z"
  },
  {
    "id": "01205-003",
    "name": "日鋼記念病院 身障者用駐車場",
    "address": "北海道室蘭市新富町1丁目5番13号",
    "latitude": 42.316559,
    "longitude": 140.984314,
    "prefectureCode": "01",
    "prefectureName": "北海道",
    "cityCode": "01205",
    "cityName": "室蘭市",
    "accessibleSpaceTotal": 37,
    "discountType": "free",
    "discount": {
      "type": "free",
      "conditions": "身障者用駐車場(37台、立体駐車場とは別区画)は24時間無料で利用可能。身体障害者手帳をお持ちの方は手帳の掲示に協力を依頼。手帳非保持でも通院に支障がある患者には病院から駐車場許可証を発行(受診時に各外来窓口へ申出)。なお一般の外来患者・入院面会者向けにも別途割引制度あり(外来患者:1階会計カウンターで割引QRコード発行により100円/6時間ごと、入院・お見舞いの方:1階総合案内で面会証確認により100円/3時間まで、以降100円/30分ごと)。"
    },
    "accessibleSpaces": [
      {
        "count": 37
      }
    ],
    "notes": "通常料金: 立体駐車場:200円/30分、最大料金1,000円/入庫から24時間ごと(繰り返し適用)\n障害者割引: 無料\n総台数: 260台",
    "sourceUrl": "https://www.nikko-kinen.or.jp/guide/access/",
    "updatedAt": "2026-08-22T00:00:00Z"
  },
  {
    "id": "01206-001",
    "name": "たんちょう釧路空港 駐車場",
    "address": "北海道釧路市鶴丘2番地",
    "latitude": 43.043812,
    "longitude": 144.192734,
    "prefectureCode": "01",
    "prefectureName": "北海道",
    "cityCode": "01206",
    "cityName": "釧路市",
    "accessibleSpaceTotal": 13,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "出口精算機手前の呼び出しブザーを押し、窓口係員に身体障害者手帳・療育手帳・精神障害者保健福祉手帳・戦傷病者手帳・被爆者健康手帳・特定疾患医療受給者証・特定医療費(指定難病)受給者証・小児慢性特定疾病医療受給者証のいずれかを提示すると駐車料金が半額になる。職員不在時間帯(対応時間 平日9:00〜17:00)に出庫した場合は後日精算可能。"
    },
    "accessibleSpaces": [
      {
        "count": 13
      }
    ],
    "notes": "通常料金: 1時間まで無料、1時間30分まで200円、2時間まで300円、以降1時間毎150円、24時間毎最大800円(多客期は1,100円、いずれも6日目以降は割引あり)\n障害者割引: 半額",
    "sourceUrl": "https://www.hokkaido-airports.com/rd_parking/kuh/",
    "updatedAt": "2026-08-22T00:00:00Z"
  },
  {
    "id": "01207-001",
    "name": "とかち帯広空港駐車場(A・B駐車場)",
    "address": "北海道帯広市泉町西9線中8-41",
    "latitude": 42.722912,
    "longitude": 143.209183,
    "prefectureCode": "01",
    "prefectureName": "北海道",
    "cityCode": "01207",
    "cityName": "帯広市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳、戦傷病者手帳、被爆者健康手帳、特定疾患医療受給者証、特定医療費(指定難病)受給者証、小児慢性特定疾病医療受給者証のいずれかを提示すると駐車料金が半額。出庫時、自動精算機にてAMSお客様さぽーとセンターを呼び出して手続き。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 通常期:1時間まで無料/1時間30分まで200円/2時間まで300円/以降1時間毎150円、24時間毎の最大800円(6日目以降24時間毎最大700円)。多客期(土日祝・お盆・年末年始):以降1時間毎200円、24時間毎の最大1,100円(6日目以降24時間毎最大1,000円)\n障害者割引: 半額",
    "sourceUrl": "https://www.hokkaido-airports.com/ja/obihiro/access/parking/",
    "updatedAt": "2026-08-22T00:00:00Z"
  },
  {
    "id": "01217-001",
    "name": "大麻中町駐車場(市営駐車場)",
    "address": "北海道江別市大麻中町26-8",
    "latitude": 43.07494,
    "longitude": 141.493698,
    "prefectureCode": "01",
    "prefectureName": "北海道",
    "cityCode": "01217",
    "cityName": "江別市",
    "accessibleSpaceTotal": 0,
    "discountType": "unknown",
    "discount": {
      "type": "unknown",
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳を所持する方が対象。介助者が運転する自動車も対象。利用時に駐車券と手帳(またはミライロID)を提示。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 普通自動車 1時間ごと70円、二輪車 1時間ごと30円(令和6年10月1日改定)\n障害者割引: 利用料金50%割引(回数券は対象外)\n総台数: 105台",
    "sourceUrl": "https://www.city.ebetsu.hokkaido.jp/soshiki/dorokanri/76126.html",
    "updatedAt": "2026-08-23T00:00:00Z"
  },
  {
    "id": "01224-001",
    "name": "新千歳空港駐車場 A駐車場",
    "address": "北海道千歳市美々987-22",
    "latitude": 42.787346,
    "longitude": 141.678482,
    "prefectureCode": "01",
    "prefectureName": "北海道",
    "cityCode": "01224",
    "cityName": "千歳市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳、戦傷病者手帳、被爆者健康手帳、特定疾患医療受給者証、特定医療費(指定難病)受給者証、小児慢性特定疾病医療受給者証のいずれかを提示。出口(または事前)精算機のインターホンで「さぽーとセンター」が対応し、駐車券と手帳提示により駐車料金が半額になる。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間まで無料、2時間まで1,000円、3時間まで1,500円、以降1時間毎500円加算、24時間ごとの最大料金3,500円(通常期)/4,500円(多客期・土日祝・お盆・年末年始)\n障害者割引: 半額\n総台数: 1800台",
    "sourceUrl": "https://www.hokkaido-airports.com/ja/new-chitose/access/parking/",
    "updatedAt": "2026-08-23T00:00:00Z"
  },
  {
    "id": "01224-002",
    "name": "新千歳空港駐車場 B駐車場",
    "address": "北海道千歳市美々987-22",
    "latitude": 42.787346,
    "longitude": 141.678482,
    "prefectureCode": "01",
    "prefectureName": "北海道",
    "cityCode": "01224",
    "cityName": "千歳市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳、戦傷病者手帳、被爆者健康手帳、特定疾患医療受給者証、特定医療費(指定難病)受給者証、小児慢性特定疾病医療受給者証のいずれかを提示。出口(または事前)精算機のインターホンで「さぽーとセンター」が対応し、駐車券と手帳提示により駐車料金が半額になる。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 1時間まで無料、2時間まで1,000円、3時間まで1,500円、以降1時間毎500円加算、24時間ごとの最大料金3,500円(通常期)/4,500円(多客期・土日祝・お盆・年末年始)\n障害者割引: 半額\n総台数: 2416台",
    "sourceUrl": "https://www.hokkaido-airports.com/ja/new-chitose/access/parking/",
    "updatedAt": "2026-08-23T00:00:00Z"
  },
  {
    "id": "01224-003",
    "name": "新千歳空港駐車場 C駐車場",
    "address": "北海道千歳市美々987-22",
    "latitude": 42.787346,
    "longitude": 141.678482,
    "prefectureCode": "01",
    "prefectureName": "北海道",
    "cityCode": "01224",
    "cityName": "千歳市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体障害者手帳、療育手帳、精神障害者保健福祉手帳、戦傷病者手帳、被爆者健康手帳、特定疾患医療受給者証、特定医療費(指定難病)受給者証、小児慢性特定疾病医療受給者証のいずれかを提示。出口(または事前)精算機のインターホンで「さぽーとセンター」が対応し、駐車券と手帳提示により駐車料金が半額になる。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 入場から24時間まで2,500円、以降24時間毎2,500円加算(通常期)/入場から24時間まで3,000円、以降24時間毎3,000円加算(多客期)\n障害者割引: 半額\n総台数: 1011台",
    "sourceUrl": "https://www.hokkaido-airports.com/ja/new-chitose/access/parking/",
    "updatedAt": "2026-08-23T00:00:00Z"
  },
  {
    "id": "01231-001",
    "name": "恵庭駅東口駐車場",
    "address": "北海道恵庭市黄金中央2丁目1001番",
    "latitude": 42.883743,
    "longitude": 141.588898,
    "prefectureCode": "01",
    "prefectureName": "北海道",
    "cityCode": "01231",
    "cityName": "恵庭市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体若しくは精神に障害があるため歩行が困難な障害者、又は当該障害者と生計を一にする者が所有する自動車で、自動車税又は軽自動車税の課税免除・減免を受けている車両が対象。減免対象者は券売機では購入不可。市民活動センター(恵庭市緑町2丁目1-1 えにあす1階、平日10時~17時、土日祝は0123-34-7000へ要事前電話予約)の有人窓口で、初回は申込書・障がい者手帳(原本)・手帳コピー(顔写真氏名頁+自動車税減免頁)・代金(現金のみ)を提示して購入。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 入庫から30分まで無料、以降60分ごとに100円(当日1日最大料金500円、24時以降は加算)\n障害者割引: 定期駐車券・プリペイドカード購入時5割減免(定期駐車券5,000円/月→2,500円/月)\n総台数: 105台",
    "sourceUrl": "https://www.city.eniwa.hokkaido.jp/soshikikarasagasu/seikatsukankyoubu/seikatukankyou/shiminseikatsu/kotsu/3/2450.html",
    "updatedAt": "2026-08-23T00:00:00Z"
  },
  {
    "id": "01231-002",
    "name": "恵庭駅西口駐車場",
    "address": "北海道恵庭市相生町1丁目602番",
    "latitude": 42.882767,
    "longitude": 141.584839,
    "prefectureCode": "01",
    "prefectureName": "北海道",
    "cityCode": "01231",
    "cityName": "恵庭市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体若しくは精神に障害があるため歩行が困難な障害者、又は当該障害者と生計を一にする者が所有する自動車で、自動車税又は軽自動車税の課税免除・減免を受けている車両が対象。減免対象者は券売機では購入不可。市民活動センター(恵庭市緑町2丁目1-1 えにあす1階、平日10時~17時、土日祝は0123-34-7000へ要事前電話予約)の有人窓口で、初回は申込書・障がい者手帳(原本)・手帳コピー(顔写真氏名頁+自動車税減免頁)・代金(現金のみ)を提示して購入。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 入庫から30分まで無料、以降60分ごとに100円(当日1日最大料金500円、24時以降は加算)\n障害者割引: 定期駐車券・プリペイドカード購入時5割減免(定期駐車券5,000円/月→2,500円/月)\n総台数: 83台",
    "sourceUrl": "https://www.city.eniwa.hokkaido.jp/soshikikarasagasu/seikatsukankyoubu/seikatukankyou/shiminseikatsu/kotsu/3/2450.html",
    "updatedAt": "2026-08-23T00:00:00Z"
  },
  {
    "id": "01231-003",
    "name": "恵み野駅東口駐車場",
    "address": "北海道恵庭市恵み野西1丁目2番3",
    "latitude": 42.903149,
    "longitude": 141.574829,
    "prefectureCode": "01",
    "prefectureName": "北海道",
    "cityCode": "01231",
    "cityName": "恵庭市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体若しくは精神に障害があるため歩行が困難な障害者、又は当該障害者と生計を一にする者が所有する自動車で、自動車税又は軽自動車税の課税免除・減免を受けている車両が対象。減免対象者は券売機では購入不可。市民活動センター(恵庭市緑町2丁目1-1 えにあす1階、平日10時~17時、土日祝は0123-34-7000へ要事前電話予約)の有人窓口で、初回は申込書・障がい者手帳(原本)・手帳コピー(顔写真氏名頁+自動車税減免頁)・代金(現金のみ)を提示して購入。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 入庫から30分まで無料、以降60分ごとに100円(当日1日最大料金500円、24時以降は加算)\n障害者割引: 定期駐車券・プリペイドカード購入時5割減免(定期駐車券5,000円/月→2,500円/月)\n総台数: 124台",
    "sourceUrl": "https://www.city.eniwa.hokkaido.jp/soshikikarasagasu/seikatsukankyoubu/seikatukankyou/shiminseikatsu/kotsu/3/2450.html",
    "updatedAt": "2026-08-23T00:00:00Z"
  },
  {
    "id": "01231-004",
    "name": "恵み野高架下東駐車場",
    "address": "北海道恵庭市中島町6丁目18番26、18番29",
    "latitude": 42.898514,
    "longitude": 141.577469,
    "prefectureCode": "01",
    "prefectureName": "北海道",
    "cityCode": "01231",
    "cityName": "恵庭市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体若しくは精神に障害があるため歩行が困難な障害者、又は当該障害者と生計を一にする者が所有する自動車で、自動車税又は軽自動車税の課税免除・減免を受けている車両が対象。プリペイドカードは全駐車場共通で利用可能。減免対象者は券売機では購入不可。市民活動センター(恵庭市緑町2丁目1-1 えにあす1階、平日10時~17時、土日祝は0123-34-7000へ要事前電話予約)の有人窓口で障がい者手帳等を提示して購入。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 入庫から30分まで無料、以降60分ごとに100円(当日1日最大料金500円、24時以降は加算)\n障害者割引: プリペイドカード購入時5割減免(定期駐車券の販売窓口対象外エリア)\n総台数: 76台",
    "sourceUrl": "https://www.city.eniwa.hokkaido.jp/soshikikarasagasu/seikatsukankyoubu/seikatukankyou/shiminseikatsu/kotsu/3/2450.html",
    "updatedAt": "2026-08-23T00:00:00Z"
  },
  {
    "id": "01231-005",
    "name": "恵み野高架下西駐車場",
    "address": "北海道恵庭市柏陽町1丁目1番5、2番5",
    "latitude": 42.900612,
    "longitude": 141.573563,
    "prefectureCode": "01",
    "prefectureName": "北海道",
    "cityCode": "01231",
    "cityName": "恵庭市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体若しくは精神に障害があるため歩行が困難な障害者、又は当該障害者と生計を一にする者が所有する自動車で、自動車税又は軽自動車税の課税免除・減免を受けている車両が対象。プリペイドカードは全駐車場共通で利用可能。減免対象者は券売機では購入不可。市民活動センター(恵庭市緑町2丁目1-1 えにあす1階、平日10時~17時、土日祝は0123-34-7000へ要事前電話予約)の有人窓口で障がい者手帳等を提示して購入。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 入庫から30分まで無料、以降60分ごとに100円(当日1日最大料金500円、24時以降は加算)\n障害者割引: プリペイドカード購入時5割減免(定期駐車券の販売窓口対象外エリア)\n総台数: 73台",
    "sourceUrl": "https://www.city.eniwa.hokkaido.jp/soshikikarasagasu/seikatsukankyoubu/seikatukankyou/shiminseikatsu/kotsu/3/2450.html",
    "updatedAt": "2026-08-23T00:00:00Z"
  },
  {
    "id": "01231-006",
    "name": "島松駅横駐車場",
    "address": "北海道恵庭市島松仲町1丁目557番9",
    "latitude": 42.920574,
    "longitude": 141.575394,
    "prefectureCode": "01",
    "prefectureName": "北海道",
    "cityCode": "01231",
    "cityName": "恵庭市",
    "accessibleSpaceTotal": 0,
    "discountType": "percentage",
    "discount": {
      "type": "percentage",
      "value": 50,
      "conditions": "身体若しくは精神に障害があるため歩行が困難な障害者、又は当該障害者と生計を一にする者が所有する自動車で、自動車税又は軽自動車税の課税免除・減免を受けている車両が対象。減免対象者は券売機では購入不可。市民活動センター(恵庭市緑町2丁目1-1 えにあす1階、平日10時~17時、土日祝は0123-34-7000へ要事前電話予約)の有人窓口で障がい者手帳等を提示して購入。なお本駐車場の定期駐車券は2025年10月分より販売休止中のため、現状はプリペイドカードのみ減免対象。"
    },
    "accessibleSpaces": [],
    "notes": "通常料金: 入庫から30分まで無料、以降60分ごとに100円(当日1日最大料金500円、24時以降は加算)\n障害者割引: プリペイドカード購入時5割減免(定期駐車券は令和7年10月分より販売休止中)\n総台数: 109台",
    "sourceUrl": "https://www.city.eniwa.hokkaido.jp/kurashi/kurashi_tetsuzuki/kotsu/shiminchushajo/3782.html",
    "updatedAt": "2026-08-23T00:00:00Z"
  }
];
