<?php

return [
    'authToken' => getenv('SENTRY_AUTH_TOKEN'),
    'project' => getenv('SENTRY_PROJECT'),
    'clientDsn' => getenv('SENTRY_DSN'),
    // 'excludedCodes' => '',
];
