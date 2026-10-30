/* オーバーツ: Service Worker(オフライン対応 + ホーム画面追加) */
const VERSION = 'owz-v4';
const SHELL = [
  './',
  'index.html',
  'players-data.js',
  'heroes-meta.js',
  'analyst-data.js',
  'manifest.json',
  'icons/favicon.svg',
  'icons/icon-192.png',
  'icons/icon-512.png'
];
/* ネット優先(更新が頻繁なもの) / キャッシュ優先(静的) */
const NET_FIRST = [/\/$/, /index\.html$/, /players-data\.js$/, /heroes-meta\.js$/, /analyst-data\.js$/];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(VERSION)
      .then((c) => Promise.all(SHELL.map((u) => c.add(new Request(u, { cache: 'reload' })).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;   // 外部CDNの画像などはそのまま
  // ファビコン等はブラウザ管理に任せる
  if (url.pathname.endsWith('/favicon.ico')) return;

  /* ページ遷移(navigate)は常にネット優先。GitHub Pages は /<repo>/ 配下なのでパス末尾で判定する */
  const isNetFirst = req.mode === 'navigate' || NET_FIRST.some((re) => re.test(url.pathname));
  if (isNetFirst) {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match('index.html')))
    );
    return;
  }
  e.respondWith(
    caches.match(req).then((hit) => {
      if (hit) {
        fetch(req).then((res) => caches.open(VERSION).then((c) => c.put(req, res.clone()))).catch(() => {});
        return hit;
      }
      return fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(VERSION).then((c) => c.put(req, copy)).catch(() => {});
        return res;
      }).catch(() => caches.match('index.html'));
    })
  );
});
