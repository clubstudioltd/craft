<?php
/**
 * Yii Application Config
 *
 * Edit this file at your own risk!
 *
 * The array returned by this file will get merged with
 * vendor/craftcms/cms/src/config/app/main.php and [web|console].php, when
 * Craft's bootstrap script is defining the configuration for the entire
 * application.
 *
 * You can define custom modules and system components, and even override the
 * built-in system components.
 */

return [
    'modules' => [
        'my-module' => \modules\Module::class,
    ],
    //'bootstrap' => ['my-module'],
    'components' => [
        'mailer' => function () {
            // Get the stored email settings
            $settings = Craft::$app->systemSettings->getEmailSettings();

            // Override the transport adapter class
            $settings->transportType = craft\mailgun\MailgunAdapter::class;

            // Override the transport adapter settings
            $settings->transportSettings = [
                'domain' => getenv('MAILGUN_DOMAIN'),
                'apiKey' => getenv('MAILGUN_API_KEY'),
            ];

            return craft\helpers\MailerHelper::createMailer($settings);
        },
    ],
];
