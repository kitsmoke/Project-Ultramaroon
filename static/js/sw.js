importScripts('https://cdn.jsdelivr.net/gh/greatshot101/Project-Ultramaroon/static/uv/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', event =>
    event.respondWith(
        sw.fetch(event)
    )
);
