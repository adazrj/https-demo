// workbox 2.x 是将 workbox 核心内容放在 workbox-sw node_modules 包里维护的
// workbox 3.x 开始是将 workbox 核心 lib 放在 CDN 维护
// 当然也可以挪到自己的 CDN 维护
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.3/workbox-sw.js');

if (workbox) {
    console.log(`Yay! workbox is loaded 🎉`);
    workbox.precaching.preacheAndRoute([
        './index.html',
        './static/jquery.min.js',
        './static/mm1.jpg'
        {
            url: '/index.html',
            revision: '383676'
        },
    ]);
}
else {
    console.log(`Boo! workbox didn't load 😬`);
}














