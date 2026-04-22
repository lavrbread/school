// lavr.SCHOOL — service worker (offline cache)
const CACHE = 'lavr-school-v7';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Для навігаційних запитів (перезавантаження сторінки) — network-first з фолбеком на кеш
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Для іншого (css/js вбудований — але ми кешуємо іконку, маніфест) — cache-first
  e.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        // кешуємо тільки same-origin успішні відповіді
        if (res.ok && url.origin === self.location.origin) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => cached);
    })
  );
});
