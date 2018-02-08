// workbox 2.x 是将 workbox 核心内容放在 workbox-sw node_modules 包里维护的
// workbox 3.x 开始是将 workbox 核心 lib 放在 CDN 维护
// 当然也可以挪到自己的 CDN 维护
importScripts('./build/workbox-sw.js');

const workboxSW = new WorkboxSW();
workboxSW.precache([
  {
    url: './static/logo.jpg',
    revision: 'acd124',
  }
]);













