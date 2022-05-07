let mix = require('laravel-mix');

require('laravel-mix-criticalcss');

mix.setPublicPath('web/')
    .js('resources/js/app.js', 'web/js')
    .postCss('resources/css/main.css', 'web/css', [
        require("tailwindcss"),
    ])
    .copy('resources/img', 'web/img')
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
