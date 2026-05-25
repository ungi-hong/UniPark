// UniPark Service Worker
// 目的: 詳細ページ (/parking/{id}) と対応する API レスポンスを network-first で
// キャッシュし、オフラインで直近閲覧した駐車場詳細が見られるようにする。

const CACHE = "unipark-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names.filter((n) => n !== CACHE).map((n) => caches.delete(n)),
      );
      await self.clients.claim();
    })(),
  );
});

function shouldCache(request) {
  if (request.method !== "GET") return false;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return false;
  if (url.pathname.startsWith("/parking/")) return true;
  if (url.pathname.startsWith("/api/v1/parking-lots/")) return true;
  return false;
}

async function networkFirst(request) {
  const cache = await caches.open(CACHE);
  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone()).catch(() => {});
    }
    return response;
  } catch (err) {
    const cached = await cache.match(request);
    if (cached) return cached;
    throw err;
  }
}

self.addEventListener("fetch", (event) => {
  if (!shouldCache(event.request)) return;
  event.respondWith(networkFirst(event.request));
});
