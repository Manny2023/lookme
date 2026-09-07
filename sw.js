const CACHE="tedycam-v42-pwa-real-20260907";
const APP=[
 "./index.html","./manifest.webmanifest","./logo.png",
 "./icons/icon-144.png","./icons/icon-192.png","./icons/icon-256.png",
 "./icons/icon-384.png","./icons/icon-512.png","./icons/maskable-512.png"
];
self.addEventListener("install",e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(APP)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET") return;
  if(e.request.mode==="navigate"){
    e.respondWith(fetch(e.request).catch(()=>caches.match("./index.html")));
    return;
  }
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
