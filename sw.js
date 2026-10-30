const CACHE_NAME = 'seiri-static-v3';
const CORE_ASSETS = ['./', './index.html', './manifest.webmanifest', './icon.svg'];
const STATIC_ASSET = /\.(?:avif|gif|ico|jpe?g|js|png|svg|webp|woff2?)$/i;

function cacheWithLongLifetime(response) {
  const headers = new Headers(response.headers);
  headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || url.pathname.endsWith('/sw.js')) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response.ok) {
            const copy = response.clone();
            event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)));
          }
          return response;
        })
        .catch(async () => (await caches.match(event.request)) || (await caches.match('./index.html')))
    );
    return;
  }

  if (!STATIC_ASSET.test(url.pathname)) return;
  event.respondWith(
    caches.open(CACHE_NAME).then(async cache => {
      const cached = await cache.match(event.request);
      if (cached) return cached;
      const response = await fetch(event.request);
      if (!response.ok) return response;
      const cacheable = cacheWithLongLifetime(response);
      event.waitUntil(cache.put(event.request, cacheable.clone()));
      return cacheable;
    }).catch(() => caches.match(event.request))
  );
});