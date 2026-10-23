sw.js
const CACHE_NAME = 'cyber-hack-v1';
const ASSETS = [
 './index.html',
 './manifest.json',
 'https://cdn-icons-png.flaticon.com/512/462/462212.png'
];

self.addEventListener('install', (event) => {
 event.waitUntil(
 caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
 );
});

self.addEventListener('fetch', (event) => {
 event.respondWith(
 caches.match(event.request).then((response) => response || fetch(event.request))
 );
});