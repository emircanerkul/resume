if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise((async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},s=(s,c)=>{Promise.all(s.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(s)};self.define=(s,a,f)=>{c[s]||(c[s]=Promise.resolve().then((()=>{let c={};const r={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return c;case"module":return r;default:return e(s)}}))).then((e=>{const s=f(...e);return c.default||(c.default=s),c}))})))}}define("./sw.js",["./workbox-df08cad0"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/css/devresume.min.097156e3f8720094bc4f5838b676e608d9ebcf61c74f8fa595edda8e25cc5319.css",revision:"b243981b300aaf181c432555e1952711"},{url:"assets/css/devresume.min.0c93cdf82f4b3c06f910cd8310916941fad0ec989d19e68cbe69b716f9ecfc8e.css",revision:"5e81c171c4a31eb5d2e8a92e345c9b55"},{url:"assets/css/devresume.min.18c33dc876a870f3afaff8da84e44926aaef89748417b552324384bea598d7ef.css",revision:"08c3e2fa31700a63234692541e2c5baa"},{url:"assets/css/devresume.min.51f01b44a80710dafeb8481abd9b8d7ace326cf306ff58961725901ac4ffa670.css",revision:"bf1b4fee43dfae889d83cc63ab6ec6ed"},{url:"assets/css/devresume.min.6916c4f05713ff452640fdf5c5a50d0150077af483b8959d6f67b5bbe5a8b1f9.css",revision:"5c44be7727c1836d49da988809b84722"},{url:"assets/css/devresume.min.90b17756ca71de2c74e1a992e988ffc7c7789f0840d3b26fa73160cb0361a0c9.css",revision:"18060ef5e959ff2278b87ef6531085a4"},{url:"assets/css/devresume.min.99fe6c224df609f1709f4777cd92f736cfc173c44416bc75020f070bc852933b.css",revision:"15668c49be31673bdb013c18f945a9bc"},{url:"assets/css/devresume.min.b27c58c336efd1a207c09f3dc873cdcd8275c7c709fcf6af9c348017d9679499.css",revision:"5492c59925808e8c7786d2dbedc24aa5"},{url:"assets/css/terminal-mode.min.1bba550bff1945f96c0e8d3d8aedbb3eb587855eaf3b6f7857e3429df8cc315e.css",revision:"8a49a2b208417cb7d08bf1159ff42ed5"},{url:"assets/css/terminal-mode.min.5d325b7e73bc5d8555fa486ee75dac36bf0f113d3facb4130e9d983467eddbd5.css",revision:"5a163901c30c07c891a1f4e2fec47fd7"},{url:"assets/fonts/icomoon.eot",revision:"f948652b93ee1cee36d39d96221c278c"},{url:"assets/fonts/icomoon.svg",revision:"dc6b43fe2e8acf6a78c05f3125155902"},{url:"assets/fonts/icomoon.ttf",revision:"b6426bc5834f8c7d2b9316147df5abee"},{url:"assets/fonts/icomoon.woff",revision:"77b603c9c3138693e0e70a3b5dc5677c"},{url:"assets/icons/logo-128x128.png",revision:"db7782169a022b5ddc8cd0c9f0ec80e3"},{url:"assets/icons/logo-144x144.png",revision:"56e71a664f63adf65a8f1dddbf414a94"},{url:"assets/icons/logo-152x152.png",revision:"429fddd4695ef88450e2a938a802d9bb"},{url:"assets/icons/logo-192x192.png",revision:"4704ce659cece484f9b302a387ca3c47"},{url:"assets/icons/logo-256x256.png",revision:"e34884deb3473e9f4c83c5a68ef79e98"},{url:"assets/icons/logo-512x512.png",revision:"ef5ec1ecc1a34fe8f190b9ad38022c57"},{url:"assets/images/avatar.png",revision:"8ee628f8d894c7b45742926860f4667f"},{url:"assets/images/og.jpg",revision:"2af697c035cafd05d359d126eaabeea5"},{url:"index.html",revision:"6eaeb21f73448d9ec4fa92dba76d82cd"},{url:"sw.js",revision:"19b8cab9bcd0265b20255f9cba443d53"},{url:"workbox-df08cad0.js",revision:"17b2b27552395a20df0e6b9c0d6c5412"}],{}),e.registerRoute(/\.(?:html)$/,new e.StaleWhileRevalidate({cacheName:"markup",plugins:[new e.ExpirationPlugin({maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:10,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp4)$/,new e.CacheFirst({cacheName:"videos",plugins:[new e.ExpirationPlugin({maxEntries:10,purgeOnQuotaError:!0})]}),"GET")}));
//# sourceMappingURL=sw.js.map
