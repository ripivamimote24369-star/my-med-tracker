// 修改 sw.js 的第一行
const CACHE_NAME = 'med-tracker-v8'; // 只要改变这个字符串，手机就会识别到新版本
const ASSETS = [
  'index.html',
  'manifest.json'
];

self.addEventListener('install', (e) => {
  // 强制跳过等待，立即激活新版本
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});






