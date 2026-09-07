const CACHE = "tedycam-pro-v31-horizontal-20260907";
const CORE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./logo.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", event=>{
  event.waitUntil(
    caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())
  );
});

self.addEventListener("activate", event=>{
  event.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch", event=>{
  if(event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // Always try network first for HTML so updates do not get stuck on old versions.
  if(event.request.mode === "navigate" || url.pathname.endsWith("/index.html")){
    event.respondWith(
      fetch(event.request)
        .then(resp=>{
          const copy = resp.clone();
          caches.open(CACHE).then(c=>c.put(event.request,copy)).catch(()=>{});
          return resp;
        })
        .catch(()=>caches.match(event.request).then(r=>r||caches.match("./index.html")))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached=>{
      return cached || fetch(event.request).then(resp=>{
        const copy = resp.clone();
        caches.open(CACHE).then(c=>c.put(event.request,copy)).catch(()=>{});
        return resp;
      });
    })
  );
});
