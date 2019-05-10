'use strict';

require('cookieconsent');

const cookieConsent = {
    init() {
        window.cookieconsent.initialise({
            theme: 'classic',
            palette: {
                popup: {
                    background: '#fff',
                },
                button: {
                    background: '#0660f5',
                }
            }
        });
    }
}

export { cookieConsent };
