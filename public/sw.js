self.addEventListener('install', function (event) {
  console.log('SW Installed');
  event.waitUntil(
    caches.open('static')
      .then(function (cache) {    
        cache.addAll([
          '/',
          '/index.html',
          '/adicionar_arquivo_adm',
          'adicionar_video_adm.html',
          '/cadastro_evento.html',
          '/cadastro_participante.html',
          '/detalhe_evento_adm.html',
          '/detalhe_evento_user.html',
          '/cadastro_evento.html',
          '/evento.html',
          '/eventos_adm.html',
          '/eventos_usuario.html',
          '/lista_eventos.html',
          '/inscricao.html',
          '/lista_participante.html',
          '/lista_presenca.html',
          '/meu_cadastro.html',
          '/meus_eventos.html',
          '/src/js/app.js',
          '/src/css/app.css',
          '/src/css/bootstrap.css',
          '/src/css/bootstrap.min.css',
          '/src/css/style.css',
          '/src/images/pwa.jpg',
          'https://fonts.googleapis.com/css?family=Raleway:400,700'
        ]);
      })
  );
});

self.addEventListener('activate', function () {
  console.log('SW Ativado');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (res) {
          return res;
        } else {
          return fetch(event.request);
        }
      })
  );
});