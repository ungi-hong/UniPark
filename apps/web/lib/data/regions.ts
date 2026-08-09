import type { components } from "@unipark/api-types";

type Prefecture = components["schemas"]["Prefecture"];
type City = components["schemas"]["City"];

// 自動生成ファイル — 手で編集しないこと。
// 生成元: apps/web/data/discount-research.json + PLACE-DATA.md (都道府県名)
// 生成スクリプト: apps/web/scripts/build-parking-mock.mjs
// 駐車場データが 1 件以上ある自治体のみ掲載。

export const prefectures: Prefecture[] = [
  {
    "code": "11",
    "name": "埼玉県"
  },
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
    "code": "11102",
    "name": "さいたま市北区",
    "prefectureCode": "11"
  },
  {
    "code": "11103",
    "name": "さいたま市大宮区",
    "prefectureCode": "11"
  },
  {
    "code": "11105",
    "name": "さいたま市中央区",
    "prefectureCode": "11"
  },
  {
    "code": "11106",
    "name": "さいたま市桜区",
    "prefectureCode": "11"
  },
  {
    "code": "11107",
    "name": "さいたま市浦和区",
    "prefectureCode": "11"
  },
  {
    "code": "11108",
    "name": "さいたま市南区",
    "prefectureCode": "11"
  },
  {
    "code": "11109",
    "name": "さいたま市緑区",
    "prefectureCode": "11"
  },
  {
    "code": "11110",
    "name": "さいたま市岩槻区",
    "prefectureCode": "11"
  },
  {
    "code": "11201",
    "name": "川越市",
    "prefectureCode": "11"
  },
  {
    "code": "11203",
    "name": "川口市",
    "prefectureCode": "11"
  },
  {
    "code": "11206",
    "name": "行田市",
    "prefectureCode": "11"
  },
  {
    "code": "11208",
    "name": "所沢市",
    "prefectureCode": "11"
  },
  {
    "code": "11214",
    "name": "春日部市",
    "prefectureCode": "11"
  },
  {
    "code": "11215",
    "name": "狭山市",
    "prefectureCode": "11"
  },
  {
    "code": "11217",
    "name": "鴻巣市",
    "prefectureCode": "11"
  },
  {
    "code": "11221",
    "name": "草加市",
    "prefectureCode": "11"
  },
  {
    "code": "11222",
    "name": "越谷市",
    "prefectureCode": "11"
  },
  {
    "code": "11224",
    "name": "戸田市",
    "prefectureCode": "11"
  },
  {
    "code": "11227",
    "name": "朝霞市",
    "prefectureCode": "11"
  },
  {
    "code": "11229",
    "name": "和光市",
    "prefectureCode": "11"
  },
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
  },
  {
    "code": "14118",
    "name": "横浜市都筑区",
    "prefectureCode": "14"
  },
  {
    "code": "14131",
    "name": "川崎市川崎区",
    "prefectureCode": "14"
  },
  {
    "code": "14132",
    "name": "川崎市幸区",
    "prefectureCode": "14"
  },
  {
    "code": "14133",
    "name": "川崎市中原区",
    "prefectureCode": "14"
  },
  {
    "code": "14134",
    "name": "川崎市高津区",
    "prefectureCode": "14"
  },
  {
    "code": "14135",
    "name": "川崎市多摩区",
    "prefectureCode": "14"
  },
  {
    "code": "14136",
    "name": "川崎市宮前区",
    "prefectureCode": "14"
  },
  {
    "code": "14137",
    "name": "川崎市麻生区",
    "prefectureCode": "14"
  },
  {
    "code": "14151",
    "name": "相模原市緑区",
    "prefectureCode": "14"
  },
  {
    "code": "14152",
    "name": "相模原市中央区",
    "prefectureCode": "14"
  },
  {
    "code": "14153",
    "name": "相模原市南区",
    "prefectureCode": "14"
  },
  {
    "code": "14201",
    "name": "横須賀市",
    "prefectureCode": "14"
  },
  {
    "code": "14203",
    "name": "平塚市",
    "prefectureCode": "14"
  },
  {
    "code": "14204",
    "name": "鎌倉市",
    "prefectureCode": "14"
  },
  {
    "code": "14205",
    "name": "藤沢市",
    "prefectureCode": "14"
  },
  {
    "code": "14206",
    "name": "小田原市",
    "prefectureCode": "14"
  },
  {
    "code": "14207",
    "name": "茅ヶ崎市",
    "prefectureCode": "14"
  },
  {
    "code": "14208",
    "name": "逗子市",
    "prefectureCode": "14"
  },
  {
    "code": "14210",
    "name": "三浦市",
    "prefectureCode": "14"
  },
  {
    "code": "14211",
    "name": "秦野市",
    "prefectureCode": "14"
  },
  {
    "code": "14212",
    "name": "厚木市",
    "prefectureCode": "14"
  },
  {
    "code": "14213",
    "name": "大和市",
    "prefectureCode": "14"
  },
  {
    "code": "14215",
    "name": "海老名市",
    "prefectureCode": "14"
  },
  {
    "code": "14216",
    "name": "座間市",
    "prefectureCode": "14"
  },
  {
    "code": "14218",
    "name": "綾瀬市",
    "prefectureCode": "14"
  },
  {
    "code": "14301",
    "name": "葉山町",
    "prefectureCode": "14"
  },
  {
    "code": "14341",
    "name": "大磯町",
    "prefectureCode": "14"
  },
  {
    "code": "14342",
    "name": "二宮町",
    "prefectureCode": "14"
  },
  {
    "code": "14382",
    "name": "箱根町",
    "prefectureCode": "14"
  },
  {
    "code": "14401",
    "name": "愛川町",
    "prefectureCode": "14"
  },
  {
    "code": "14402",
    "name": "清川村",
    "prefectureCode": "14"
  }
];

export const citiesByPrefecture: Record<string, City[]> = {};
for (const c of cities) {
  (citiesByPrefecture[c.prefectureCode] ??= []).push(c);
}
