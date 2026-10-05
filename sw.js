/* Service worker J3D v2 – fonctionnement hors ligne
   - index.html, procedure_J3D.md, firebase-config.json : réseau d'abord, cache si hors ligne
   - Bibliothèques Firebase (gstatic) et images : cache d'abord
   Incrémenter VERSION à chaque modification de index.html ou sw.js. */
const VERSION = 'j3d-v6';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'procedure_J3D.md', 'firebase-config.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => Promise.allSettled(SHELL.map(u => c.add(new Request(u, { cache: 'reload' }))))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

async function networkFirst(req, cacheKey) {
  const c = await caches.open(VERSION);
  try {
    const r = await fetch(req.url, { cache: 'no-cache' });
    if (r.ok) c.put(cacheKey || req, r.clone());
    return r;
  } catch (e) {
    const hit = await c.match(cacheKey || req, { ignoreSearch: true });
    return hit || new Response('Hors ligne', { status: 504 });
  }
}
async function cacheFirst(req) {
  const c = await caches.open(VERSION);
  const hit = await c.match(req);
  if (hit) return hit;
  try { const r = await fetch(req); if (r.ok || r.type === 'opaque') c.put(req, r.clone()); return r; }
  catch (e) { return new Response('', { status: 504 }); }
}
async function staleWhileRevalidate(req) {
  const c = await caches.open(VERSION);
  const hit = await c.match(req, { ignoreSearch: true });
  const net = fetch(req).then(r => { if (r.ok) c.put(req, r.clone()); return r; }).catch(() => null);
  return hit || (await net) || new Response('Hors ligne', { status: 503 });
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.hostname === 'www.gstatic.com' && url.pathname.startsWith('/firebasejs/')) { e.respondWith(cacheFirst(req)); return; }
  if (url.origin !== location.origin) return;           // Firestore / Auth : gérés par Firebase (hors ligne intégré)
  if (url.pathname.endsWith('.md') || url.pathname.endsWith('.json')) { e.respondWith(networkFirst(req)); return; }
  if (req.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('.html')) { e.respondWith(networkFirst(req, 'index.html')); return; }
  if (/\.(png|jpe?g|webp|gif|svg)$/i.test(url.pathname)) { e.respondWith(cacheFirst(req)); return; }
  e.respondWith(staleWhileRevalidate(req));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window' }).then(cs => cs.length ? cs[0].focus() : self.clients.openWindow('./')));
});
