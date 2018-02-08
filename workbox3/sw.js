// workbox 2.x 是将 workbox 核心内容放在 workbox-sw node_modules 包里维护的
// workbox 3.x 开始是将 workbox 核心 lib 放在 CDN 维护
// 当然也可以挪到自己的 CDN 维护
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.0/workbox-sw.js');

if (workbox) {
  console.log('Yay! Workbox is loaded');
  workbox.precaching.preacheAndRoute([
	    'static/test.css',
	    'static/mm1.jpg',
	    'index.html',
	    { url: '/https-worker/workbox3/index.html', revision: '383676' },
	]);
 //  workbox.routing.registerRoute(
	//   /.*\.css/,
	//   workbox.strategies.staleWhileRevalidate({
	//     cacheName: 'css-cache',
	//   })
	// );

	// workbox.routing.registerRoute(
	//   /.*\.(?:png|jpg|jpeg|svg|gif)/,
	//   workbox.strategies.cacheFirst({
	//     cacheName: 'image-cache',
	//     plugins: [
	//       new workbox.expiration.Plugin({
	//         maxEntries: 20,
	//         maxAgeSeconds: 7 * 24 * 60 * 60,
	//       })
	//     ],
	//   })
	// );

} else {
  console.log("Boo! Workbox didn't load");
}











