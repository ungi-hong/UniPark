import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js Dev Tools の N ボタンを右下に。マップ画面の左下「現在地に戻す」ボタンと重ならないように。
  devIndicators: { position: "bottom-right" },
};

export default nextConfig;
