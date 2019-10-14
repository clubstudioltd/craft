
/* --------------------------------------------------------------------------
 * Load the project's JavaScript dependencies - Vue and other libraries.
 * -------------------------------------------------------------------------- */

require('./bootstrap');

/* --------------------------------------------------------------------------
 * Require Vue
 * -------------------------------------------------------------------------- */

window.Vue = require('vue');

/* --------------------------------------------------------------------------
 * Configure Vue Components
 * -------------------------------------------------------------------------- */

import ExampleComponent from './components/ExampleComponent.vue';

Vue.component('example-component', ExampleComponent);

/* --------------------------------------------------------------------------
 * Create main Vue instance
 * -------------------------------------------------------------------------- */

const app = new Vue({
    el: '#app'
});

/* --------------------------------------------------------------------------
 * Include modules
 * -------------------------------------------------------------------------- */

import { cookieConsent } from './modules/cookieconsent';
cookieConsent.init();
