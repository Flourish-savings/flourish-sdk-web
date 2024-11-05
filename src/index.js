import { api } from './api';
import { buildFrontEndUrl, getSdkVersion } from './config';
import { handleGenericEvent } from './events/eventListener';

export const signIn = async (access_token, environment) => {
  const response = await api.signIn(access_token, environment);
  return response.isValid;
};

export function Flourish(token, language, environment, genericEventCallback) {
  const baseURL = buildFrontEndUrl(environment);
  const sdk_version = getSdkVersion(environment);

  const completeURL = language
    ? `${baseURL}?token=${token}&lang=${language}&sdk_version=${sdk_version}`
    : `${baseURL}?token=${token}&sdk_version=${sdk_version}`;

  if (typeof window !== 'undefined') {
    if (!window.customEmitFunction) {
      window.customEmitFunction = function customEmitFunction(ev) {
        genericEventCallback(ev.data);
      };
    }

    window.removeEventListener('message', window.customEmitFunction);
    window.addEventListener('message', window.customEmitFunction, false);
  }

  let iframe ;
  if (typeof document !== 'undefined') {
    iframe = document.createElement('iframe');
    iframe.src = completeURL;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.position = 'relative';
    iframe.style.overflow = 'hidden';
    iframe.style.paddingTop = 'env(safe-area-inset-top)';
    iframe.style.paddingBottom = 'env(safe-area-inset-bottom)';
  }


  return iframe;
}