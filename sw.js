// Legacy service-worker cleanup for the previous demo site.
// The personal blog intentionally does not use offline caching yet.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
