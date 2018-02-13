importScripts('./build/workbox-sw.prod.v2.1.2.js');
const workboxSW = new self.WorkboxSW();
workboxSW.precache([
  {
    "url": "build/sw.js",
    "revision": "57d9fde4fd4e7494fe645f8cc373e53d"
  },
  {
    "url": "build/workbox-sw.js",
    "revision": "3fb3e299750822f4098267936945e759"
  },
  {
    "url": "build/workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  },
  {
    "url": "build/workbox-sw.prod.v2.1.2.js.map",
    "revision": "8e170beaf8b748367396e6039c808c74"
  },
  {
    "url": "index.html",
    "revision": "a887aa5b7790ad156d2f23071a8443ae"
  },
  {
    "url": "static/jquery.min.js",
    "revision": "0652da382b6fceb033dfe2b6c06d4d11"
  },
  {
    "url": "static/logo.jpg",
    "revision": "71d9d86dc186fe1898f214428c61944e"
  },
  {
    "url": "sw.js",
    "revision": "2dab96ef1f9f59d015454ef38460447e"
  },
  {
    "url": "workbox-cli-config.js",
    "revision": "769eec9f27f63a04d0e9281cb34ec1ec"
  }
]) 