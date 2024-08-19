import { HomePage } from './home';
import { api } from './api';
import { handleGenericEvent } from './events/eventListener';

export const signIn = async (access_token, environment) => {
  const response = await api.signIn(access_token, environment);
  return response.isValid;
};

export const Flourish = ({ token, language, environment, genericEventCallback }) => {
  handleGenericEvent(data => {
    if (genericEventCallback) {
      genericEventCallback(data);
    }
  });

  const { iframe, removeListeners } = HomePage({
    token,
    environment,
    language
  });

  const appContainer = document.getElementById('app');
  if (appContainer) {
    appContainer.appendChild(iframe);
  }

  return removeListeners;
};
