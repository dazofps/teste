// Esse script permite que o app seja instalado e funcione offline
self.addEventListener('install', (e) => {
  console.log('Service Worker instalado!');
});

self.addEventListener('fetch', (e) => {
  // Necessário para o Chrome validar o PWA
  e.respondWith(fetch(e.request));
});