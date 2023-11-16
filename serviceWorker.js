const urls = ['index.html', 'offline.html'];

self.addEventListener('install', (event) => {
    console.log("SW Installed")
    /*event.waitUntil(
        caches.open("Cache").then((cache) => {
            console.log("Cache oppened");
            cache.addAll(urls);
        })
    );*/
});

self.addEventListener('fetch', (e) => {
    console.log(e);
    /*
    e.respondWith(
        caches.match(e.request).then((res) => {
            return fetch(e.request).catch(() => caches.match('offline.html'));
        })
    );*/
});

self.addEventListener('activate', (e) => {
    console.log("SW activated")
    /*const cacheWhiteList = [];
    cacheWhiteList.push("Cache");
    e.waitUntil(caches.keys().then((cacheNames) => Promise.all(
        cacheNames.map((cashN) => {
            if (!cacheWhiteList.includes(cashN)) {
                return caches.delete(cashN);
            }
        })
    )))*/
})

