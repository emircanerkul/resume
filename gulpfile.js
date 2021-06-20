const gulp = require('gulp');
const workboxBuild = require('workbox-build');

gulp.task('generate-service-worker', () => {
  var rootDir = 'themes/hugo-devresume-theme/static';
  var swDest = rootDir + '/sw.js';
  
  return workboxBuild.generateSW({
    globDirectory: 'docs',
    globPatterns: [
      '**/*.{js,html,css,png,jpg,gif,eot,svg,ttf,woff,woff2,otf}',
    ],
    swDest: swDest,

    runtimeCaching: [{
      urlPattern: /\.(?:html)$/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "markup",
        expiration: {
          maxAgeSeconds: 60 * 60 * 24 * 7,
        },
      },
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
      handler: 'CacheFirst',

      options: {
        cacheName: 'images',
        expiration: {
          maxEntries: 10,
        },
      },
    }],
  });
});