"use client";

import { useEffect } from "react";

// 詳細ページのオフラインキャッシュ用 Service Worker を登録する。
// MSW (mockServiceWorker.js) も scope='/' で登録されるため、MSW 稼働中は PWA SW を
// 登録しない。Phase 1-B で MSW を無効化した時点でオフラインキャッシュが有効になる。
// dev (NODE_ENV !== 'production') でも HMR 干渉を避けて登録しない。
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") return;
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
