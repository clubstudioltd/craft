<?php
/**
 * Craft web bootstrap file
 */

// Load shared bootstrap
require __DIR__ . '/bootstrap.php';

define('CRAFT_TEMPLATES_PATH', CRAFT_BASE_PATH.'/resources/templates');
define('CRAFT_TRANSLATIONS_PATH', CRAFT_BASE_PATH.'/resources/translations');

// Load and run Craft
/** @var craft\web\Application $app */
$app = require CRAFT_VENDOR_PATH . '/craftcms/cms/bootstrap/web.php';
$app->run();
