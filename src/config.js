let BACKEND_API_URL = new Map();
let FRONTEND_URL = new Map();
let FLOURISH_SDK_APP_VERSION = new Map();

BACKEND_API_URL.set('staging', 'https://api-stg.flourishfi.com/api/v1');
BACKEND_API_URL.set('production', 'https://api.flourishfi.com/api/v1');

FRONTEND_URL.set('staging', 'https://platform-stg.flourishfi.com');
FRONTEND_URL.set('production', 'https://platform.flourishfi.com');

FLOURISH_SDK_APP_VERSION.set('staging', '1.0.0');
FLOURISH_SDK_APP_VERSION.set('production', '1.0.0');

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
