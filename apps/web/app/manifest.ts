import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "障害者くらしナビ",
    short_name: "くらしナビ",
    description: "障害者向けの割引施設・バリアフリー・駐車場情報を探せます",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1769aa",
    lang: "ja",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
