let mix = require('laravel-mix'),
    tailwindcss = require('tailwindcss');

require('laravel-mix-criticalcss');
require('laravel-mix-purgecss');

mix.setPublicPath('web/')
    .js('resources/assets/js/app.js', 'web/js')
    .sass('resources/assets/sass/main.scss', 'web/css')
    .copy('resources/assets/img', 'web/img')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.config.js') ],
    })
    .version()
    .purgeCss({
        globs: [
            path.join(__dirname, 'resources/templates/**/*.twig'),
            path.join(__dirname, 'resources/assets/js/**/*.vue')
        ],
        extensions: ['html', 'twig', 'js', 'php', 'vue'],
        whitelistPatterns: [/cc-/],
        whitelistPatternsChildren: [],
    })
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
