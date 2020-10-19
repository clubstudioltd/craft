
/* --------------------------------------------------------------------------
 * Include Axios and set default headers (https://github.com/axios/axios)
 * -------------------------------------------------------------------------- */

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/* --------------------------------------------------------------------------
 * Add CSRF Token to outgoing HTTP requests.
 * -------------------------------------------------------------------------- */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found.');
}
