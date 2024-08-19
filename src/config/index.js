import ProdConfig from './config.production';
import StagingConfig from './config.staging';

let BACKEND_API_URL = new Map();
let FRONTEND_URL = new Map();
let FLOURISH_SDK_APP_VERSION = new Map();

BACKEND_API_URL.set('staging', StagingConfig.BACKEND_API_URL);
BACKEND_API_URL.set('production', ProdConfig.BACKEND_API_URL);

FRONTEND_URL.set('staging', StagingConfig.FRONTEND_URL);
FRONTEND_URL.set('production', ProdConfig.FRONTEND_URL);

FLOURISH_SDK_APP_VERSION.set('staging', StagingConfig.FLOURISH_SDK_APP_VERSION);
FLOURISH_SDK_APP_VERSION.set('production', ProdConfig.FLOURISH_SDK_APP_VERSION);

const Config = {
  BACKEND_API_URL,
  FRONTEND_URL,
  FLOURISH_SDK_APP_VERSION
};

export const buildFrontEndUrl = (environment) => {
  return Config.FRONTEND_URL.get(`${environment}`);
}

export const buildBackEndUrl = (environment) => {
  return Config.BACKEND_API_URL.get(environment);
}

export const getSdkVersion = (environment) => {
  return Config.FLOURISH_SDK_APP_VERSION.get(environment);
}
