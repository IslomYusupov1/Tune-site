const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
    // ...другие настройки Webpack...
    plugins: [
        new GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            runtimeCaching: [
                {
                    urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'images',
                        expiration: {
                            maxEntries: 50,
                            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 дней
                        },
                    },
                },
            ],
        }),
    ],
};