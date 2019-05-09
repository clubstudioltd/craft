let glob = require('glob-all'),
    mix = require('laravel-mix'),
    purgecss = require('purgecss-webpack-plugin'),
    tailwindcss = require('tailwindcss');

require('laravel-mix-criticalcss');

class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
    }
}

mix.setPublicPath('web/')
   .js('resources/assets/js/app.js', 'web/js')
   .sass('resources/assets/sass/main.scss', 'web/css')
   .copy('resources/assets/img', 'web/img')
   .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.js') ],
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

// Only run PurgeCSS during production builds for faster development builds
// and so you still have the full set of utilities available during
// development.
if (mix.inProduction()) {
    mix.webpackConfig({
        plugins: [
            new purgecss({
                // Specify the locations of any files you want to scan for class names.
                paths: glob.sync([
                    path.join(__dirname, 'resources/templates/**/*.twig'),
                    path.join(__dirname, 'resources/assets/js/**/*.vue')
                ]),
                extractors: [
                    {
                        extractor: TailwindExtractor,

                        // Specify the file extensions to include when scanning
                        // for class names.
                        extensions: ['html', 'twig', 'js', 'php', 'vue']
                    }
                ]
            })
        ]
    });
}
