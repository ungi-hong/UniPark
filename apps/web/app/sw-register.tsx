"use client";

import { useEffect } from "react";

// 詳細ページのオフラインキャッシュ用 Service Worker を登録する。
// dev (NODE_ENV !== 'production') では HMR 干渉を避けて登録しない。
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) {
      return;
    }
    navigator.serviceWorker
      .register("/sw.js", { scope: "/", updateViaCache: "none" })
      .catch((err) => {
        console.error("Service Worker registration failed", err);
      });
  }, []);
  return null;
}
