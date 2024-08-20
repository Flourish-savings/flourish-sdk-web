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

  handleGenericEvent(data => {
    if (genericEventCallback) {
      genericEventCallback(data);
    }
  });

  const iframe = document.createElement('iframe');
  iframe.src = completeURL;
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';

  return iframe;
}