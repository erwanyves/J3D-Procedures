/* Service worker J3D – fonctionnement hors ligne
   - Écrans de l'appli : servis depuis le cache, mis à jour en arrière-plan
   - procedure_J3D.md : réseau d'abord (dernière version), cache si hors ligne
   - Images : cache d'abord, téléchargées une fois puis conservées
   Incrémenter VERSION à chaque modification de index.html ou sw.js. */
const VERSION = 'j3d-v4';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'procedure_J3D.md'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => Promise.allSettled(SHELL.map(u => c.add(u)))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

async function networkFirst(req) {
  const c = await caches.open(VERSION);
  try {
    const r = await fetch(req, { cache: 'no-cache' });
    if (r.ok) c.put(req, r.clone());
    return r;
  } catch (e) {
    const hit = await c.match(req, { ignoreSearch: true });
    return hit || new Response('', { status: 504 });
  }
}
async function cacheFirst(req) {
  const c = await caches.open(VERSION);
  const hit = await c.match(req);
  if (hit) return hit;
  try { const r = await fetch(req); if (r.ok) c.put(req, r.clone()); return r; }
  catch (e) { return new Response('', { status: 504 }); }
}
async function staleWhileRevalidate(req) {
  const c = await caches.open(VERSION);
  const hit = await c.match(req, { ignoreSearch: true });
  const net = fetch(req).then(r => { if (r.ok) c.put(req, r.clone()); return r; }).catch(() => null);
  return hit || (await net) || (await c.match('index.html')) || new Response('Hors ligne', { status: 503 });
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  if (url.pathname.endsWith('.md')) { e.respondWith(networkFirst(req)); return; }
  if (/\.(png|jpe?g|webp|gif|svg)$/i.test(url.pathname)) { e.respondWith(cacheFirst(req)); return; }
  e.respondWith(staleWhileRevalidate(req));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window' }).then(cs => cs.length ? cs[0].focus() : self.clients.openWindow('./')));
});
