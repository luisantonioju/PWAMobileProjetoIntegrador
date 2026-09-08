const CACHE_NAME = 'olhar-protege-v1';

const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './manifest.json',
    './assets/css/main.css',
    './assets/img/olhar_que_protege_transparente.svg',
    './assets/img/image 5.png',
    './assets/img/MONITORAR = CUIDAR..png',
    './assets/img/Rectangle 7.png',
    './assets/img/banner1.png',
    './assets/img/banner2.png',
    './assets/img/banner3.png',
    './assets/img/SUA_IMAGEM_AQUI.jpg',
    './assets/img/meninas-assistindo-laptop-adolescentes-modernos-em-casa-surpresa-e-emocoes 1.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});