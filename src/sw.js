const cache_NAME = "v1_cache_EDO_PWA";

var urlsToCache = [
	"public/assets/favicon/android-chrome-192x192.png",
];

self.addEventListener("install", (e) => {
	e.waitUntil(
		caches
		.open(cache_NAME)
		.then((cache) => {
			return cache.addAll(urlsToCache).then(() => {
				self.skipWaiting();
			});
		})
		.catch((err) => console.log("No se ha registrado el cache"), err)
	);
});

//Event activate
self.addEventListener("activate", (e) => {
	const cacheWhiteList = [cache_NAME];
	e.waitUntil(
		caches.keys()
		.then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cacheNames) => {
					if (cacheWhiteList.indexOf(cacheName) == -1) {
						return cache.delete(cacheNames);
					}
				})
			);
		})
		.then(() => {
			self.clients.claim();
		})
	);
});


//Event fetch
self.addEventListener("fetch", (e) => {
	e.respondWith(
		caches.match(e.request)
		.then(res => {
			if (res) {
				return res;
			}
			return fetch(e.request);
		})
	);
});