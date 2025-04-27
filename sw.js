// Cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('green-tea-cafe-cache')
      .then(cache => {
        return cache.addAll([
          '/',
          'index.html',
          'styles.css',
          'script.js',
          'images/logo.png'
        ]);
      })
  );
});
// Serve cached assets
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});