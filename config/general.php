<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 */

return [
    // Global settings
    '*' => [
        // Default Week Start Day (0 = Sunday, 1 = Monday...)
        'defaultWeekStartDay' => 0,

        // Enable CSRF Protection (recommended, will be enabled by default in Craft 3)
        'enableCsrfProtection' => true,

        // Whether "index.php" should be visible in URLs
        'omitScriptNameInUrls' => true,

        // Error templates path
        'errorTemplatePrefix' => "_errors/",

        // Control Panel trigger word
        'cpTrigger' => 'admin',

        // The secure key Craft will use for hashing and encrypting data
        'securityKey' => getenv('SECURITY_KEY'),

        // Base site URL
        'siteUrl' => getenv('SITE_URL'),

        // Dev Mode (see https://craftcms.com/support/dev-mode)
        'devMode' => getenv('DEV_MODE'),

        // Allow updates?
        'allow_updates' => false,

        // Default timezone
        'timezone' => 'Europe/London',
    ],

    // Dev environment settings
    'dev' => [
        'allow_updates' => true,
    ],

    // Staging environment settings
    'staging' => [

    ],

    // Production environment settings
    'production' => [

    ],
];
