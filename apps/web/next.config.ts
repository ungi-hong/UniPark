import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // TryCloudflare 経由で dev サーバを公開するため、*.trycloudflare.com を許可。
  // 設定しないと cross-origin の HMR / RSC streaming が 403 で弾かれる。
  allowedDevOrigins: ["*.trycloudflare.com"],
  // Next.js Dev Tools の N ボタンを非表示。マップ UI と重なるため。
  devIndicators: false,
};

export default nextConfig;
