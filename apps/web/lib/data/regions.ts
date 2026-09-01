import type { components } from "@unipark/api-types";

type Prefecture = components["schemas"]["Prefecture"];
type City = components["schemas"]["City"];

// 自動生成ファイル — 手で編集しないこと。
// 生成元: apps/web/data/discount-research.json + PLACE-DATA.md (都道府県名)
// 生成スクリプト: apps/web/scripts/build-parking-mock.mjs
// 駐車場データが 1 件以上ある自治体のみ掲載。

export const prefectures: Prefecture[] = [
  {
    "code": "01",
    "name": "北海道"
  },
  {
    "code": "02",
    "name": "青森県"
  },
  {
    "code": "04",
    "name": "宮城県"
  },
  {
    "code": "07",
    "name": "福島県"
  },
  {
    "code": "08",
    "name": "茨城県"
  },
  {
    "code": "09",
    "name": "栃木県"
  },
  {
    "code": "10",
    "name": "群馬県"
  },
  {
    "code": "11",
    "name": "埼玉県"
  },
  {
    "code": "12",
    "name": "千葉県"
  },
  {
    "code": "13",
    "name": "東京都"
  },
  {
    "code": "14",
    "name": "神奈川県"
  },
  {
    "code": "15",
    "name": "新潟県"
  },
  {
    "code": "20",
    "name": "長野県"
  },
  {
    "code": "21",
    "name": "岐阜県"
  },
  {
    "code": "22",
    "name": "静岡県"
  },
  {
    "code": "23",
    "name": "愛知県"
  },
  {
    "code": "26",
    "name": "京都府"
  },
  {
    "code": "27",
    "name": "大阪府"
  },
  {
    "code": "28",
    "name": "兵庫県"
  },
  {
    "code": "33",
    "name": "岡山県"
  },
  {
    "code": "34",
    "name": "広島県"
  },
  {
    "code": "40",
    "name": "福岡県"
  }
];

const cities: City[] = [
  {
    "code": "01101",
    "name": "札幌市中央区",
    "prefectureCode": "01"
  },
  {
    "code": "01103",
    "name": "札幌市東区",
    "prefectureCode": "01"
  },
  {
    "code": "01105",
    "name": "札幌市豊平区",
    "prefectureCode": "01"
  },
  {
    "code": "01106",
    "name": "札幌市南区",
    "prefectureCode": "01"
  },
  {
    "code": "01202",
    "name": "函館市",
    "prefectureCode": "01"
  },
  {
    "code": "01203",
    "name": "小樽市",
    "prefectureCode": "01"
  },
  {
    "code": "01204",
    "name": "旭川市",
    "prefectureCode": "01"
  },
  {
    "code": "01205",
    "name": "室蘭市",
    "prefectureCode": "01"
  },
  {
    "code": "01206",
    "name": "釧路市",
    "prefectureCode": "01"
  },
  {
    "code": "01207",
    "name": "帯広市",
    "prefectureCode": "01"
  },
  {
    "code": "01217",
    "name": "江別市",
    "prefectureCode": "01"
  },
  {
    "code": "01224",
    "name": "千歳市",
    "prefectureCode": "01"
  },
  {
    "code": "01231",
    "name": "恵庭市",
    "prefectureCode": "01"
  },
  {
    "code": "01453",
    "name": "東神楽町",
    "prefectureCode": "01"
  },
  {
    "code": "01564",
    "name": "大空町",
    "prefectureCode": "01"
  },
  {
    "code": "01578",
    "name": "白老町",
    "prefectureCode": "01"
  },
  {
    "code": "02201",
    "name": "青森市",
    "prefectureCode": "02"
  },
  {
    "code": "04101",
    "name": "仙台市青葉区",
    "prefectureCode": "04"
  },
  {
    "code": "04102",
    "name": "仙台市宮城野区",
    "prefectureCode": "04"
  },
  {
    "code": "04105",
    "name": "仙台市泉区",
    "prefectureCode": "04"
  },
  {
    "code": "04207",
    "name": "名取市",
    "prefectureCode": "04"
  },
  {
    "code": "04323",
    "name": "柴田町",
    "prefectureCode": "04"
  },
  {
    "code": "04324",
    "name": "川崎町",
    "prefectureCode": "04"
  },
  {
    "code": "07202",
    "name": "会津若松市",
    "prefectureCode": "07"
  },
  {
    "code": "07203",
    "name": "郡山市",
    "prefectureCode": "07"
  },
  {
    "code": "07207",
    "name": "須賀川市",
    "prefectureCode": "07"
  },
  {
    "code": "07208",
    "name": "喜多方市",
    "prefectureCode": "07"
  },
  {
    "code": "08220",
    "name": "つくば市",
    "prefectureCode": "08"
  },
  {
    "code": "08221",
    "name": "ひたちなか市",
    "prefectureCode": "08"
  },
  {
    "code": "08309",
    "name": "大洗町",
    "prefectureCode": "08"
  },
  {
    "code": "09201",
    "name": "宇都宮市",
    "prefectureCode": "09"
  },
  {
    "code": "10202",
    "name": "高崎市",
    "prefectureCode": "10"
  },
  {
    "code": "10205",
    "name": "太田市",
    "prefectureCode": "10"
  },
  {
    "code": "10206",
    "name": "沼田市",
    "prefectureCode": "10"
  },
  {
    "code": "10207",
    "name": "館林市",
    "prefectureCode": "10"
  },
  {
    "code": "10209",
    "name": "藤岡市",
    "prefectureCode": "10"
  },
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
    "code": "11230",
    "name": "新座市",
    "prefectureCode": "11"
  },
  {
    "code": "11237",
    "name": "三郷市",
    "prefectureCode": "11"
  },
  {
    "code": "11238",
    "name": "蓮田市",
    "prefectureCode": "11"
  },
  {
    "code": "11240",
    "name": "幸手市",
    "prefectureCode": "11"
  },
  {
    "code": "11242",
    "name": "日高市",
    "prefectureCode": "11"
  },
  {
    "code": "11326",
    "name": "毛呂山町",
    "prefectureCode": "11"
  },
  {
    "code": "11341",
    "name": "滑川町",
    "prefectureCode": "11"
  },
  {
    "code": "12101",
    "name": "千葉市中央区",
    "prefectureCode": "12"
  },
  {
    "code": "12102",
    "name": "千葉市花見川区",
    "prefectureCode": "12"
  },
  {
    "code": "12104",
    "name": "千葉市若葉区",
    "prefectureCode": "12"
  },
  {
    "code": "12105",
    "name": "千葉市緑区",
    "prefectureCode": "12"
  },
  {
    "code": "12106",
    "name": "千葉市美浜区",
    "prefectureCode": "12"
  },
  {
    "code": "12203",
    "name": "市川市",
    "prefectureCode": "12"
  },
  {
    "code": "12204",
    "name": "船橋市",
    "prefectureCode": "12"
  },
  {
    "code": "12207",
    "name": "松戸市",
    "prefectureCode": "12"
  },
  {
    "code": "12211",
    "name": "成田市",
    "prefectureCode": "12"
  },
  {
    "code": "12212",
    "name": "佐倉市",
    "prefectureCode": "12"
  },
  {
    "code": "12213",
    "name": "東金市",
    "prefectureCode": "12"
  },
  {
    "code": "12215",
    "name": "旭市",
    "prefectureCode": "12"
  },
  {
    "code": "12217",
    "name": "柏市",
    "prefectureCode": "12"
  },
  {
    "code": "12218",
    "name": "勝浦市",
    "prefectureCode": "12"
  },
  {
    "code": "12219",
    "name": "市原市",
    "prefectureCode": "12"
  },
  {
    "code": "12221",
    "name": "八千代市",
    "prefectureCode": "12"
  },
  {
    "code": "12222",
    "name": "我孫子市",
    "prefectureCode": "12"
  },
  {
    "code": "12225",
    "name": "君津市",
    "prefectureCode": "12"
  },
  {
    "code": "12227",
    "name": "浦安市",
    "prefectureCode": "12"
  },
  {
    "code": "12229",
    "name": "袖ケ浦市",
    "prefectureCode": "12"
  },
  {
    "code": "12231",
    "name": "印西市",
    "prefectureCode": "12"
  },
  {
    "code": "12410",
    "name": "横芝光町",
    "prefectureCode": "12"
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
  },
  {
    "code": "15102",
    "name": "新潟市東区",
    "prefectureCode": "15"
  },
  {
    "code": "15103",
    "name": "新潟市中央区",
    "prefectureCode": "15"
  },
  {
    "code": "20201",
    "name": "長野市",
    "prefectureCode": "20"
  },
  {
    "code": "20203",
    "name": "上田市",
    "prefectureCode": "20"
  },
  {
    "code": "20213",
    "name": "飯山市",
    "prefectureCode": "20"
  },
  {
    "code": "20218",
    "name": "千曲市",
    "prefectureCode": "20"
  },
  {
    "code": "20321",
    "name": "軽井沢町",
    "prefectureCode": "20"
  },
  {
    "code": "21201",
    "name": "岐阜市",
    "prefectureCode": "21"
  },
  {
    "code": "21202",
    "name": "大垣市",
    "prefectureCode": "21"
  },
  {
    "code": "21203",
    "name": "高山市",
    "prefectureCode": "21"
  },
  {
    "code": "21204",
    "name": "多治見市",
    "prefectureCode": "21"
  },
  {
    "code": "21210",
    "name": "恵那市",
    "prefectureCode": "21"
  },
  {
    "code": "21212",
    "name": "土岐市",
    "prefectureCode": "21"
  },
  {
    "code": "22203",
    "name": "沼津市",
    "prefectureCode": "22"
  },
  {
    "code": "22215",
    "name": "御殿場市",
    "prefectureCode": "22"
  },
  {
    "code": "22341",
    "name": "清水町",
    "prefectureCode": "22"
  },
  {
    "code": "23101",
    "name": "名古屋市千種区",
    "prefectureCode": "23"
  },
  {
    "code": "23102",
    "name": "名古屋市東区",
    "prefectureCode": "23"
  },
  {
    "code": "23103",
    "name": "名古屋市北区",
    "prefectureCode": "23"
  },
  {
    "code": "23104",
    "name": "名古屋市西区",
    "prefectureCode": "23"
  },
  {
    "code": "23105",
    "name": "名古屋市中村区",
    "prefectureCode": "23"
  },
  {
    "code": "23106",
    "name": "名古屋市中区",
    "prefectureCode": "23"
  },
  {
    "code": "23107",
    "name": "名古屋市昭和区",
    "prefectureCode": "23"
  },
  {
    "code": "23108",
    "name": "名古屋市瑞穂区",
    "prefectureCode": "23"
  },
  {
    "code": "23109",
    "name": "名古屋市熱田区",
    "prefectureCode": "23"
  },
  {
    "code": "23110",
    "name": "名古屋市中川区",
    "prefectureCode": "23"
  },
  {
    "code": "23111",
    "name": "名古屋市港区",
    "prefectureCode": "23"
  },
  {
    "code": "23112",
    "name": "名古屋市南区",
    "prefectureCode": "23"
  },
  {
    "code": "23113",
    "name": "名古屋市守山区",
    "prefectureCode": "23"
  },
  {
    "code": "23114",
    "name": "名古屋市緑区",
    "prefectureCode": "23"
  },
  {
    "code": "23115",
    "name": "名古屋市名東区",
    "prefectureCode": "23"
  },
  {
    "code": "23116",
    "name": "名古屋市天白区",
    "prefectureCode": "23"
  },
  {
    "code": "23202",
    "name": "岡崎市",
    "prefectureCode": "23"
  },
  {
    "code": "23203",
    "name": "一宮市",
    "prefectureCode": "23"
  },
  {
    "code": "23205",
    "name": "半田市",
    "prefectureCode": "23"
  },
  {
    "code": "23206",
    "name": "春日井市",
    "prefectureCode": "23"
  },
  {
    "code": "23216",
    "name": "常滑市",
    "prefectureCode": "23"
  },
  {
    "code": "23219",
    "name": "小牧市",
    "prefectureCode": "23"
  },
  {
    "code": "23225",
    "name": "知立市",
    "prefectureCode": "23"
  },
  {
    "code": "23238",
    "name": "長久手市",
    "prefectureCode": "23"
  },
  {
    "code": "23342",
    "name": "豊山町",
    "prefectureCode": "23"
  },
  {
    "code": "26102",
    "name": "京都市上京区",
    "prefectureCode": "26"
  },
  {
    "code": "26103",
    "name": "京都市左京区",
    "prefectureCode": "26"
  },
  {
    "code": "26105",
    "name": "京都市東山区",
    "prefectureCode": "26"
  },
  {
    "code": "26107",
    "name": "京都市南区",
    "prefectureCode": "26"
  },
  {
    "code": "26202",
    "name": "舞鶴市",
    "prefectureCode": "26"
  },
  {
    "code": "26205",
    "name": "宮津市",
    "prefectureCode": "26"
  },
  {
    "code": "26208",
    "name": "向日市",
    "prefectureCode": "26"
  },
  {
    "code": "26209",
    "name": "長岡京市",
    "prefectureCode": "26"
  },
  {
    "code": "27102",
    "name": "大阪市都島区",
    "prefectureCode": "27"
  },
  {
    "code": "27103",
    "name": "大阪市福島区",
    "prefectureCode": "27"
  },
  {
    "code": "27104",
    "name": "大阪市此花区",
    "prefectureCode": "27"
  },
  {
    "code": "27106",
    "name": "大阪市西区",
    "prefectureCode": "27"
  },
  {
    "code": "27107",
    "name": "大阪市港区",
    "prefectureCode": "27"
  },
  {
    "code": "27108",
    "name": "大阪市大正区",
    "prefectureCode": "27"
  },
  {
    "code": "27109",
    "name": "大阪市天王寺区",
    "prefectureCode": "27"
  },
  {
    "code": "27111",
    "name": "大阪市浪速区",
    "prefectureCode": "27"
  },
  {
    "code": "27113",
    "name": "大阪市西淀川区",
    "prefectureCode": "27"
  },
  {
    "code": "27114",
    "name": "大阪市東淀川区",
    "prefectureCode": "27"
  },
  {
    "code": "27115",
    "name": "大阪市東成区",
    "prefectureCode": "27"
  },
  {
    "code": "27116",
    "name": "大阪市生野区",
    "prefectureCode": "27"
  },
  {
    "code": "27117",
    "name": "大阪市旭区",
    "prefectureCode": "27"
  },
  {
    "code": "27118",
    "name": "大阪市城東区",
    "prefectureCode": "27"
  },
  {
    "code": "27120",
    "name": "大阪市住吉区",
    "prefectureCode": "27"
  },
  {
    "code": "27121",
    "name": "大阪市東住吉区",
    "prefectureCode": "27"
  },
  {
    "code": "27122",
    "name": "大阪市西成区",
    "prefectureCode": "27"
  },
  {
    "code": "27123",
    "name": "大阪市淀川区",
    "prefectureCode": "27"
  },
  {
    "code": "27124",
    "name": "大阪市鶴見区",
    "prefectureCode": "27"
  },
  {
    "code": "27125",
    "name": "大阪市住之江区",
    "prefectureCode": "27"
  },
  {
    "code": "27126",
    "name": "大阪市平野区",
    "prefectureCode": "27"
  },
  {
    "code": "27127",
    "name": "大阪市北区",
    "prefectureCode": "27"
  },
  {
    "code": "27128",
    "name": "大阪市中央区",
    "prefectureCode": "27"
  },
  {
    "code": "27141",
    "name": "堺市堺区",
    "prefectureCode": "27"
  },
  {
    "code": "27142",
    "name": "堺市中区",
    "prefectureCode": "27"
  },
  {
    "code": "27143",
    "name": "堺市東区",
    "prefectureCode": "27"
  },
  {
    "code": "27144",
    "name": "堺市西区",
    "prefectureCode": "27"
  },
  {
    "code": "27145",
    "name": "堺市南区",
    "prefectureCode": "27"
  },
  {
    "code": "27146",
    "name": "堺市北区",
    "prefectureCode": "27"
  },
  {
    "code": "27203",
    "name": "豊中市",
    "prefectureCode": "27"
  },
  {
    "code": "27204",
    "name": "池田市",
    "prefectureCode": "27"
  },
  {
    "code": "27205",
    "name": "吹田市",
    "prefectureCode": "27"
  },
  {
    "code": "27206",
    "name": "泉大津市",
    "prefectureCode": "27"
  },
  {
    "code": "27207",
    "name": "高槻市",
    "prefectureCode": "27"
  },
  {
    "code": "27208",
    "name": "貝塚市",
    "prefectureCode": "27"
  },
  {
    "code": "27209",
    "name": "守口市",
    "prefectureCode": "27"
  },
  {
    "code": "27210",
    "name": "枚方市",
    "prefectureCode": "27"
  },
  {
    "code": "27211",
    "name": "茨木市",
    "prefectureCode": "27"
  },
  {
    "code": "27212",
    "name": "八尾市",
    "prefectureCode": "27"
  },
  {
    "code": "27213",
    "name": "泉佐野市",
    "prefectureCode": "27"
  },
  {
    "code": "27214",
    "name": "富田林市",
    "prefectureCode": "27"
  },
  {
    "code": "27215",
    "name": "寝屋川市",
    "prefectureCode": "27"
  },
  {
    "code": "27216",
    "name": "河内長野市",
    "prefectureCode": "27"
  },
  {
    "code": "27217",
    "name": "松原市",
    "prefectureCode": "27"
  },
  {
    "code": "27218",
    "name": "大東市",
    "prefectureCode": "27"
  },
  {
    "code": "27219",
    "name": "和泉市",
    "prefectureCode": "27"
  },
  {
    "code": "27220",
    "name": "箕面市",
    "prefectureCode": "27"
  },
  {
    "code": "27221",
    "name": "柏原市",
    "prefectureCode": "27"
  },
  {
    "code": "27222",
    "name": "羽曳野市",
    "prefectureCode": "27"
  },
  {
    "code": "27223",
    "name": "門真市",
    "prefectureCode": "27"
  },
  {
    "code": "27224",
    "name": "摂津市",
    "prefectureCode": "27"
  },
  {
    "code": "27225",
    "name": "高石市",
    "prefectureCode": "27"
  },
  {
    "code": "27226",
    "name": "藤井寺市",
    "prefectureCode": "27"
  },
  {
    "code": "27227",
    "name": "東大阪市",
    "prefectureCode": "27"
  },
  {
    "code": "27230",
    "name": "交野市",
    "prefectureCode": "27"
  },
  {
    "code": "27231",
    "name": "大阪狭山市",
    "prefectureCode": "27"
  },
  {
    "code": "27232",
    "name": "阪南市",
    "prefectureCode": "27"
  },
  {
    "code": "27361",
    "name": "熊取町",
    "prefectureCode": "27"
  },
  {
    "code": "27362",
    "name": "田尻町",
    "prefectureCode": "27"
  },
  {
    "code": "27366",
    "name": "岬町",
    "prefectureCode": "27"
  },
  {
    "code": "27383",
    "name": "千早赤阪村",
    "prefectureCode": "27"
  },
  {
    "code": "28101",
    "name": "神戸市東灘区",
    "prefectureCode": "28"
  },
  {
    "code": "28102",
    "name": "神戸市灘区",
    "prefectureCode": "28"
  },
  {
    "code": "28105",
    "name": "神戸市兵庫区",
    "prefectureCode": "28"
  },
  {
    "code": "28106",
    "name": "神戸市長田区",
    "prefectureCode": "28"
  },
  {
    "code": "28107",
    "name": "神戸市須磨区",
    "prefectureCode": "28"
  },
  {
    "code": "28108",
    "name": "神戸市垂水区",
    "prefectureCode": "28"
  },
  {
    "code": "28109",
    "name": "神戸市北区",
    "prefectureCode": "28"
  },
  {
    "code": "28110",
    "name": "神戸市中央区",
    "prefectureCode": "28"
  },
  {
    "code": "28111",
    "name": "神戸市西区",
    "prefectureCode": "28"
  },
  {
    "code": "28201",
    "name": "姫路市",
    "prefectureCode": "28"
  },
  {
    "code": "28202",
    "name": "尼崎市",
    "prefectureCode": "28"
  },
  {
    "code": "28203",
    "name": "明石市",
    "prefectureCode": "28"
  },
  {
    "code": "28204",
    "name": "西宮市",
    "prefectureCode": "28"
  },
  {
    "code": "28205",
    "name": "洲本市",
    "prefectureCode": "28"
  },
  {
    "code": "28206",
    "name": "芦屋市",
    "prefectureCode": "28"
  },
  {
    "code": "28207",
    "name": "伊丹市",
    "prefectureCode": "28"
  },
  {
    "code": "28209",
    "name": "豊岡市",
    "prefectureCode": "28"
  },
  {
    "code": "28210",
    "name": "加古川市",
    "prefectureCode": "28"
  },
  {
    "code": "28212",
    "name": "赤穂市",
    "prefectureCode": "28"
  },
  {
    "code": "28213",
    "name": "西脇市",
    "prefectureCode": "28"
  },
  {
    "code": "28214",
    "name": "宝塚市",
    "prefectureCode": "28"
  },
  {
    "code": "28217",
    "name": "川西市",
    "prefectureCode": "28"
  },
  {
    "code": "28219",
    "name": "三田市",
    "prefectureCode": "28"
  },
  {
    "code": "28221",
    "name": "丹波篠山市",
    "prefectureCode": "28"
  },
  {
    "code": "28226",
    "name": "淡路市",
    "prefectureCode": "28"
  },
  {
    "code": "28382",
    "name": "播磨町",
    "prefectureCode": "28"
  },
  {
    "code": "33101",
    "name": "岡山市北区",
    "prefectureCode": "33"
  },
  {
    "code": "33103",
    "name": "岡山市東区",
    "prefectureCode": "33"
  },
  {
    "code": "33104",
    "name": "岡山市南区",
    "prefectureCode": "33"
  },
  {
    "code": "33202",
    "name": "倉敷市",
    "prefectureCode": "33"
  },
  {
    "code": "33205",
    "name": "笠岡市",
    "prefectureCode": "33"
  },
  {
    "code": "34101",
    "name": "広島市中区",
    "prefectureCode": "34"
  },
  {
    "code": "34103",
    "name": "広島市南区",
    "prefectureCode": "34"
  },
  {
    "code": "34104",
    "name": "広島市西区",
    "prefectureCode": "34"
  },
  {
    "code": "34106",
    "name": "広島市安佐北区",
    "prefectureCode": "34"
  },
  {
    "code": "34108",
    "name": "広島市佐伯区",
    "prefectureCode": "34"
  },
  {
    "code": "34202",
    "name": "呉市",
    "prefectureCode": "34"
  },
  {
    "code": "34205",
    "name": "尾道市",
    "prefectureCode": "34"
  },
  {
    "code": "34207",
    "name": "福山市",
    "prefectureCode": "34"
  },
  {
    "code": "34211",
    "name": "大竹市",
    "prefectureCode": "34"
  },
  {
    "code": "34212",
    "name": "東広島市",
    "prefectureCode": "34"
  },
  {
    "code": "40101",
    "name": "北九州市門司区",
    "prefectureCode": "40"
  },
  {
    "code": "40105",
    "name": "北九州市戸畑区",
    "prefectureCode": "40"
  },
  {
    "code": "40106",
    "name": "北九州市小倉北区",
    "prefectureCode": "40"
  },
  {
    "code": "40107",
    "name": "北九州市小倉南区",
    "prefectureCode": "40"
  },
  {
    "code": "40108",
    "name": "北九州市八幡東区",
    "prefectureCode": "40"
  },
  {
    "code": "40109",
    "name": "北九州市八幡西区",
    "prefectureCode": "40"
  },
  {
    "code": "40131",
    "name": "福岡市東区",
    "prefectureCode": "40"
  },
  {
    "code": "40132",
    "name": "福岡市博多区",
    "prefectureCode": "40"
  },
  {
    "code": "40133",
    "name": "福岡市中央区",
    "prefectureCode": "40"
  },
  {
    "code": "40134",
    "name": "福岡市南区",
    "prefectureCode": "40"
  },
  {
    "code": "40135",
    "name": "福岡市西区",
    "prefectureCode": "40"
  },
  {
    "code": "40136",
    "name": "福岡市城南区",
    "prefectureCode": "40"
  },
  {
    "code": "40202",
    "name": "大牟田市",
    "prefectureCode": "40"
  },
  {
    "code": "40203",
    "name": "久留米市",
    "prefectureCode": "40"
  },
  {
    "code": "40205",
    "name": "飯塚市",
    "prefectureCode": "40"
  },
  {
    "code": "40218",
    "name": "春日市",
    "prefectureCode": "40"
  },
  {
    "code": "40345",
    "name": "新宮町",
    "prefectureCode": "40"
  }
];

export const citiesByPrefecture: Record<string, City[]> = {};
for (const c of cities) {
  (citiesByPrefecture[c.prefectureCode] ??= []).push(c);
}
