const CACHE_NAME = 'gym-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  // Ikkada nee video links kooda add cheyali
];

// Files ni cache lo store chestundi
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Internet lenappudu cache nundi files isthundi
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
