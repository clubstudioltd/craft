let mix = require('laravel-mix');

mix.js('resources/assets/js/app.js', 'web/js')
   .sass('resources/assets/sass/main.scss', 'web/css');
