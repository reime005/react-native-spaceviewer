export const env = 'dev';
export const keys = require('../../env/keys');
export const values = require('../../env/values');
export const envKeys = keys;
export const envValues = values;
export const APP_NAME = 'Rocket Launcher';

export const IS_DEV = env[keys.env] === values.env.dev;
export const IS_STAG = env[keys.env] === values.env.stag;
export const IS_PROD = env[keys.env] === values.env.prod;
