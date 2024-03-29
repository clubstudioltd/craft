<?php

return [
    'enabled'       => \craft\helpers\App::env('ENVIRONMENT') !== 'dev',
    'anonymous'     => false, // Determines to log user info or not
    'clientDsn'     => getenv('SENTRY_DSN'), // Set as string or use environment variable.
    'excludedCodes' => ['400', '404', '429'],
    'release'       => getenv('SENTRY_RELEASE') ?: null, // Release number/name used by sentry.
];
