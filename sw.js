const CACHE_NAME = 'apple-clone-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  // add other files you want cached here
];

// Install SW and cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch resources
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
