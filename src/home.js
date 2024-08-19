import { buildFrontEndUrl, getSdkVersion } from './config';
import emitEvent from './events/eventEmitter';

export const HomePage = ({ token, environment, language }) => {
  const baseURL = buildFrontEndUrl(environment);
  const sdk_version = getSdkVersion(environment);

  const completeURL = language
    ? `${baseURL}?token=${token}&lang=${language}&sdk_version=${sdk_version}`
    : `${baseURL}?token=${token}&sdk_version=${sdk_version}`;

  const iframe = document.createElement('iframe');
  iframe.src = completeURL;
  iframe.style.border = '0';
  iframe.style.width = '100%';
  iframe.style.height = '100%';

  const customEmitFunction = (ev) => {
    emitEvent(ev.data);
  };

  if (typeof window !== 'undefined') {
    if (!window.customEmitFunction) {
      window.customEmitFunction = customEmitFunction;
    }

    window.removeEventListener('message', window.customEmitFunction);
    window.addEventListener('message', window.customEmitFunction, false);
  }

  const removeListeners = () => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('message', window.customEmitFunction);
    }
  };

  return { iframe, removeListeners };
};
