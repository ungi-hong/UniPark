import type { components } from "@unipark/api-types";

type Prefecture = components["schemas"]["Prefecture"];
type City = components["schemas"]["City"];

export const prefectures: Prefecture[] = [
  { code: "13", name: "東京都" },
];

const tokyoCities: City[] = [
  // 23区 (JIS X 0402)
  { code: "13101", name: "千代田区", prefectureCode: "13" },
  { code: "13102", name: "中央区", prefectureCode: "13" },
  { code: "13103", name: "港区", prefectureCode: "13" },
  { code: "13104", name: "新宿区", prefectureCode: "13" },
  { code: "13105", name: "文京区", prefectureCode: "13" },
  { code: "13106", name: "台東区", prefectureCode: "13" },
  { code: "13107", name: "墨田区", prefectureCode: "13" },
  { code: "13108", name: "江東区", prefectureCode: "13" },
  { code: "13109", name: "品川区", prefectureCode: "13" },
  { code: "13110", name: "目黒区", prefectureCode: "13" },
  { code: "13111", name: "大田区", prefectureCode: "13" },
  { code: "13112", name: "世田谷区", prefectureCode: "13" },
  { code: "13113", name: "渋谷区", prefectureCode: "13" },
  { code: "13114", name: "中野区", prefectureCode: "13" },
  { code: "13115", name: "杉並区", prefectureCode: "13" },
  { code: "13116", name: "豊島区", prefectureCode: "13" },
  { code: "13117", name: "北区", prefectureCode: "13" },
  { code: "13118", name: "荒川区", prefectureCode: "13" },
  { code: "13119", name: "板橋区", prefectureCode: "13" },
  { code: "13120", name: "練馬区", prefectureCode: "13" },
  { code: "13121", name: "足立区", prefectureCode: "13" },
  { code: "13122", name: "葛飾区", prefectureCode: "13" },
  { code: "13123", name: "江戸川区", prefectureCode: "13" },
  // 多摩 26市
  { code: "13201", name: "八王子市", prefectureCode: "13" },
  { code: "13202", name: "立川市", prefectureCode: "13" },
  { code: "13203", name: "武蔵野市", prefectureCode: "13" },
  { code: "13204", name: "三鷹市", prefectureCode: "13" },
  { code: "13205", name: "青梅市", prefectureCode: "13" },
  { code: "13206", name: "府中市", prefectureCode: "13" },
  { code: "13207", name: "昭島市", prefectureCode: "13" },
  { code: "13208", name: "調布市", prefectureCode: "13" },
  { code: "13209", name: "町田市", prefectureCode: "13" },
  { code: "13210", name: "小金井市", prefectureCode: "13" },
  { code: "13211", name: "小平市", prefectureCode: "13" },
  { code: "13212", name: "日野市", prefectureCode: "13" },
  { code: "13213", name: "東村山市", prefectureCode: "13" },
  { code: "13214", name: "国分寺市", prefectureCode: "13" },
  { code: "13215", name: "国立市", prefectureCode: "13" },
  { code: "13218", name: "福生市", prefectureCode: "13" },
  { code: "13219", name: "狛江市", prefectureCode: "13" },
  { code: "13220", name: "東大和市", prefectureCode: "13" },
  { code: "13221", name: "清瀬市", prefectureCode: "13" },
  { code: "13222", name: "東久留米市", prefectureCode: "13" },
  { code: "13223", name: "武蔵村山市", prefectureCode: "13" },
  { code: "13224", name: "多摩市", prefectureCode: "13" },
  { code: "13225", name: "稲城市", prefectureCode: "13" },
  { code: "13227", name: "羽村市", prefectureCode: "13" },
  { code: "13228", name: "あきる野市", prefectureCode: "13" },
  { code: "13229", name: "西東京市", prefectureCode: "13" },
];

export const citiesByPrefecture: Record<string, City[]> = {
  "13": tokyoCities,
};
