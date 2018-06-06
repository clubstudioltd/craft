<?php
/**
 * Craft web bootstrap file
 */


// Set path constants
define('CRAFT_BASE_PATH', dirname(__DIR__));
define('CRAFT_VENDOR_PATH', CRAFT_BASE_PATH.'/vendor');
define('CRAFT_TEMPLATES_PATH', CRAFT_BASE_PATH.'/resources/templates');
define('CRAFT_TRANSLATIONS_PATH', CRAFT_BASE_PATH.'/resources/translations');
define('CRAFT_CONTENT_MIGRATIONS_PATH', CRAFT_BASE_PATH.'/database/migrations');

// Load Composer's autoloader
require_once CRAFT_VENDOR_PATH.'/autoload.php';

// Load dotenv?
if (file_exists(CRAFT_BASE_PATH.'/.env')) {
    (new Dotenv\Dotenv(CRAFT_BASE_PATH))->load();
}

// Load and run Craft
define('CRAFT_ENVIRONMENT', getenv('ENVIRONMENT') ?: 'production');

$app = require CRAFT_VENDOR_PATH.'/craftcms/cms/bootstrap/web.php';

// Define any custom Yii aliases here, so that aliases such as @web and @webroot 
// can be used within the .env file. These can be moved to config/general.php 
// once Craft uses Yii 2.1 (https://github.com/yiisoft/yii2/issues/10157).
Yii::setAlias('@assetBasePath', getenv('ASSET_BASE_PATH'));
Yii::setAlias('@assetBaseUrl', getenv('ASSET_BASE_URL'));

$app->run();
