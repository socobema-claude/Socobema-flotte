/* Comptabilité : cache de l'application pour un chargement rapide et l'ouverture hors connexion. */
const CACHE="compta-v2";
const SHELL=["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const r=e.request; if(r.method!=="GET") return;
  const u=new URL(r.url);
  const same=u.origin===self.location.origin;
  const lib=/(cdnjs\.cloudflare\.com|fonts\.googleapis\.com|fonts\.gstatic\.com|www\.gstatic\.com\/firebasejs)/.test(u.href);
  if(!same&&!lib) return; // Firebase (données), cartes, etc. : jamais interceptés
  if(same&&(r.mode==="navigate"||u.pathname.endsWith(".html")||u.pathname.endsWith("/"))){
    // Page : réseau d'abord (pour recevoir les mises à jour), cache si hors connexion
    e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp));return res}).catch(()=>caches.match(r).then(m=>m||caches.match("./index.html"))));
    return;
  }
  // Bibliothèques et icônes : cache d'abord
  e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>{if(res.ok||res.type==="opaque"){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp))}return res})));
});
