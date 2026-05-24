// クライアントから動的 import される MSW 起動エントリ。
// NEXT_PUBLIC_API_MOCKING=enabled の時のみ呼ばれる想定。
export async function startMocks() {
  if (typeof window === "undefined") return;
  const { worker } = await import("./browser");
  await worker.start({
    serviceWorker: { url: "/mockServiceWorker.js" },
    onUnhandledRequest: "bypass",
  });
}
