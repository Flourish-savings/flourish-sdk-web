import { Flourish } from 'flourish-sdk-web';


document.addEventListener('DOMContentLoaded', () => {
  const token = 'FLOURISH_TOKEN_HERE';
  const language = 'en';
  const environment = 'staging';

  // Generic event callback
  const onGenericEvent = (data) => {
    console.log('Generic event received in Capacitor Example:', data);
  };

  // Initialize the Flourish SDK
  const flourishIframe = Flourish(token, language, environment, onGenericEvent);

  // Append the iframe to the container in index.html
  const appContainer = document.getElementById('app');
  if (appContainer) {
    appContainer.appendChild(flourishIframe);
  }
});