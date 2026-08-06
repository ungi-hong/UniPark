import type { components } from "@unipark/api-types";

type Prefecture = components["schemas"]["Prefecture"];
type City = components["schemas"]["City"];

// 自動生成ファイル — 手で編集しないこと。
// 生成元: apps/web/data/discount-research.json + PLACE-DATA.md (都道府県名)
// 生成スクリプト: apps/web/scripts/build-parking-mock.mjs
// 駐車場データが 1 件以上ある自治体のみ掲載。

export const prefectures: Prefecture[] = [
  {
    "code": "13",
    "name": "東京都"
  },
  {
    "code": "14",
    "name": "神奈川県"
  }
];

const cities: City[] = [
  {
    "code": "13101",
    "name": "千代田区",
    "prefectureCode": "13"
  },
  {
    "code": "13102",
    "name": "中央区",
    "prefectureCode": "13"
  },
  {
    "code": "13103",
    "name": "港区",
    "prefectureCode": "13"
  },
  {
    "code": "13104",
    "name": "新宿区",
    "prefectureCode": "13"
  },
  {
    "code": "13105",
    "name": "文京区",
    "prefectureCode": "13"
  },
  {
    "code": "13106",
    "name": "台東区",
    "prefectureCode": "13"
  },
  {
    "code": "13107",
    "name": "墨田区",
    "prefectureCode": "13"
  },
  {
    "code": "13108",
    "name": "江東区",
    "prefectureCode": "13"
  },
  {
    "code": "13109",
    "name": "品川区",
    "prefectureCode": "13"
  },
  {
    "code": "13110",
    "name": "目黒区",
    "prefectureCode": "13"
  },
  {
    "code": "13111",
    "name": "大田区",
    "prefectureCode": "13"
  },
  {
    "code": "13112",
    "name": "世田谷区",
    "prefectureCode": "13"
  },
  {
    "code": "13113",
    "name": "渋谷区",
    "prefectureCode": "13"
  },
  {
    "code": "13114",
    "name": "中野区",
    "prefectureCode": "13"
  },
  {
    "code": "13115",
    "name": "杉並区",
    "prefectureCode": "13"
  },
  {
    "code": "13116",
    "name": "豊島区",
    "prefectureCode": "13"
  },
  {
    "code": "13117",
    "name": "北区",
    "prefectureCode": "13"
  },
  {
    "code": "13118",
    "name": "荒川区",
    "prefectureCode": "13"
  },
  {
    "code": "13119",
    "name": "板橋区",
    "prefectureCode": "13"
  },
  {
    "code": "13120",
    "name": "練馬区",
    "prefectureCode": "13"
  },
  {
    "code": "13121",
    "name": "足立区",
    "prefectureCode": "13"
  },
  {
    "code": "13122",
    "name": "葛飾区",
    "prefectureCode": "13"
  },
  {
    "code": "13123",
    "name": "江戸川区",
    "prefectureCode": "13"
  },
  {
    "code": "13201",
    "name": "八王子市",
    "prefectureCode": "13"
  },
  {
    "code": "13202",
    "name": "立川市",
    "prefectureCode": "13"
  },
  {
    "code": "13203",
    "name": "武蔵野市",
    "prefectureCode": "13"
  },
  {
    "code": "13204",
    "name": "三鷹市",
    "prefectureCode": "13"
  },
  {
    "code": "13205",
    "name": "青梅市",
    "prefectureCode": "13"
  },
  {
    "code": "13206",
    "name": "府中市",
    "prefectureCode": "13"
  },
  {
    "code": "13207",
    "name": "昭島市",
    "prefectureCode": "13"
  },
  {
    "code": "13208",
    "name": "調布市",
    "prefectureCode": "13"
  },
  {
    "code": "13209",
    "name": "町田市",
    "prefectureCode": "13"
  },
  {
    "code": "13210",
    "name": "小金井市",
    "prefectureCode": "13"
  },
  {
    "code": "13211",
    "name": "小平市",
    "prefectureCode": "13"
  },
  {
    "code": "13212",
    "name": "日野市",
    "prefectureCode": "13"
  },
  {
    "code": "13213",
    "name": "東村山市",
    "prefectureCode": "13"
  },
  {
    "code": "13214",
    "name": "国分寺市",
    "prefectureCode": "13"
  },
  {
    "code": "13215",
    "name": "国立市",
    "prefectureCode": "13"
  },
  {
    "code": "13218",
    "name": "福生市",
    "prefectureCode": "13"
  },
  {
    "code": "13219",
    "name": "狛江市",
    "prefectureCode": "13"
  },
  {
    "code": "13220",
    "name": "東大和市",
    "prefectureCode": "13"
  },
  {
    "code": "13221",
    "name": "清瀬市",
    "prefectureCode": "13"
  },
  {
    "code": "13222",
    "name": "東久留米市",
    "prefectureCode": "13"
  },
  {
    "code": "13223",
    "name": "武蔵村山市",
    "prefectureCode": "13"
  },
  {
    "code": "13224",
    "name": "多摩市",
    "prefectureCode": "13"
  },
  {
    "code": "13225",
    "name": "稲城市",
    "prefectureCode": "13"
  },
  {
    "code": "13227",
    "name": "羽村市",
    "prefectureCode": "13"
  },
  {
    "code": "13228",
    "name": "あきる野市",
    "prefectureCode": "13"
  },
  {
    "code": "13229",
    "name": "西東京市",
    "prefectureCode": "13"
  },
  {
    "code": "14101",
    "name": "横浜市鶴見区",
    "prefectureCode": "14"
  },
  {
    "code": "14102",
    "name": "横浜市神奈川区",
    "prefectureCode": "14"
  },
  {
    "code": "14103",
    "name": "横浜市西区",
    "prefectureCode": "14"
  },
  {
    "code": "14104",
    "name": "横浜市中区",
    "prefectureCode": "14"
  },
  {
    "code": "14105",
    "name": "横浜市南区",
    "prefectureCode": "14"
  },
  {
    "code": "14106",
    "name": "横浜市保土ケ谷区",
    "prefectureCode": "14"
  },
  {
    "code": "14107",
    "name": "横浜市磯子区",
    "prefectureCode": "14"
  },
  {
    "code": "14108",
    "name": "横浜市金沢区",
    "prefectureCode": "14"
  },
  {
    "code": "14109",
    "name": "横浜市港北区",
    "prefectureCode": "14"
  },
  {
    "code": "14110",
    "name": "横浜市戸塚区",
    "prefectureCode": "14"
  },
  {
    "code": "14111",
    "name": "横浜市港南区",
    "prefectureCode": "14"
  },
  {
    "code": "14112",
    "name": "横浜市旭区",
    "prefectureCode": "14"
  },
  {
    "code": "14113",
    "name": "横浜市緑区",
    "prefectureCode": "14"
  },
  {
    "code": "14114",
    "name": "横浜市瀬谷区",
    "prefectureCode": "14"
  },
  {
    "code": "14115",
    "name": "横浜市栄区",
    "prefectureCode": "14"
  },
  {
    "code": "14116",
    "name": "横浜市泉区",
    "prefectureCode": "14"
  },
  {
    "code": "14117",
    "name": "横浜市青葉区",
    "prefectureCode": "14"
  }
];

export const citiesByPrefecture: Record<string, City[]> = {};
for (const c of cities) {
  (citiesByPrefecture[c.prefectureCode] ??= []).push(c);
}
