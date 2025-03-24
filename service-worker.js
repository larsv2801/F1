self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/F1/index.html',
        '/F1/manifest.json',
        '/F1/voorlopiglogo192.png',
        '/F1/voorlopiglogo144.png',
        '/F1/voorlopiglogo.png',
        '/F1/Formula1-Bold.otf'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
