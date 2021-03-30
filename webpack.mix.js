let mix = require('laravel-mix'),
    tailwindcss = require('tailwindcss');

require('laravel-mix-criticalcss');

mix.setPublicPath('web/')
    .js('resources/js/app.js', 'web/js')
    .sass('resources/sass/main.scss', 'web/css')
    .copy('resources/img', 'web/img')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.config.js') ],
    })
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
