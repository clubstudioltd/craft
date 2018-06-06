let mix = require('laravel-mix');

require('laravel-mix-criticalcss');

mix.setPublicPath('web/')
   .js('resources/assets/js/app.js', 'web/js')
   .sass('resources/assets/sass/main.scss', 'web/css')
   .version()
   .criticalCss({
        enabled: mix.inProduction(),
        paths: {
            base: process.env.SITE_URL,
            templates: 'resources/templates/_includes/critical-css/'
        },
        urls: [
            { url: '/', template: 'index' },
        ],
        options: {
            minify: true,
        },
    });
