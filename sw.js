importScripts('node_modules/sw-toolbox/sw-toolbox.js');


toolbox.precache([
  '/',
  '/index.html',
  '/images/profile@x1.jpg',
  '/images/profile@x2.jpg',
  '/fonts/fontawesome.woff',
  '/fonts/roboto.woff',
]);


toolbox.router.get('/', toolbox.fastest);
toolbox.router.get('/index.html', toolbox.fastest);
toolbox.router.get('/images/profile@x1.jpg', toolbox.fastest);
toolbox.router.get('/images/profile@x2.jpg', toolbox.fastest);
toolbox.router.get('/fonts/fontawesome.woff', toolbox.fastest);
toolbox.router.get('/fonts/roboto.woff', toolbox.fastest);
