import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // TryCloudflare 経由で dev サーバを公開するため、*.trycloudflare.com を許可。
  // 設定しないと cross-origin の HMR / RSC streaming が 403 で弾かれる。
  allowedDevOrigins: ["*.trycloudflare.com"],
  // Next.js Dev Tools の N ボタンを右下に。マップ画面の左下「現在地に戻す」ボタンと重ならないように。
  devIndicators: { position: "bottom-right" },
};

export default nextConfig;
