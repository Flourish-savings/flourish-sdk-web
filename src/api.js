import { buildBackEndUrl, getSdkVersion } from '../config';

export const api = {
  signIn: async (access_token, environment) => {
    try {
      const response = await fetch(
        `${buildBackEndUrl(environment)}/sign_in`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`,
            'Sdk-Version': getSdkVersion(environment)
          },
        }
      );
      await response.json();
      return response.status === 200 ? { isValid: true } : { isValid: false };
    } catch (error) {
      console.error(error);
      return { isValid: false };
    }
  }
};
