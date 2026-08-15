import type { components } from "@unipark/api-types";

type ParkingLotDetail = components["schemas"]["ParkingLotDetail"];

// 自動生成ファイル — 手で編集しないこと。
// 生成元: apps/web/data/discount-research.json
// 生成スクリプト: apps/web/scripts/build-parking-mock.mjs
// 緯度経度は国土地理院ジオコーディング API による住所→座標変換 (一部は市区町村名でフォールバック)。
// 件数: 671

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
  }
];
