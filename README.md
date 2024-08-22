[<img width="400" src="https://github.com/Flourish-savings/flourish-web-sdk-angular/blob/main/images/logo_flourish.png?raw=true"/>](https://flourishfi.com)
# Web SDK

The Flourish SDK allows you to easily integrate Flourish's features into your web applications, providing seamless authentication and event handling for vanilla JavaScript, Angular, Vue,js, React etc.

## Getting Started
The integration with us works as follows, the client will make a call to our [API](https://docs.flourishfi.com/#intro) to authenticates himself, retrieve an access token and pass to our component, given that, the sdk serves to encapsulate and help in loading this webview.

### Step 1: Installation
Start by adding our SDK into your project with the following command: 

```sh
npm install flourish-sdk-web
```
```sh
yarn add flourish-sdk-web
```

### Step 2: Initializing the SDK
After adding our module, it is necessary to retrieve an access token from our API, and we strongly recommend that it be done through a backend because the request needs your credentials and it's good to avoid the harmful environment of the web.

With your accessToken in hand, a call must happen to the signIn method along with your application initialization, which is required to complete the initialization of our component.
```javascript
import { signIn } from 'flourish-sdk-web'

signIn(accessToken, 'staging')
```

### Step 3: Using the SDK

## Usage
### Basic Integration (Vanilla JavaScript)
You can directly use the SDK in a vanilla JavaScript environment:

After initialization and with your accessToken in hand, it is possible to pass it to the SDK component, along with the desired environment and language, just like this:

```javascript
import { Flourish, signIn } from 'flourish-sdk-web';

// Sign in the user
signIn('YOUR_ACCESS_TOKEN', 'production').then(isValid => {
  if (isValid) {
    console.log('User signed in successfully.');
  }
});

// Initialize and display the Flourish component
const flourishComponent = Flourish('YOUR_TOKEN', 'en', 'production');

document.getElementById('flourish-container').appendChild(flourishComponent);

```


### Basic Integration (React Integration)
The SDK can also be used within a React application:

```javascript
import React, { useEffect, useRef } from 'react';
import { Flourish } from 'flourish-sdk-web';

function App() {
  const flourishRef = useRef(null);

  useEffect(() => {
    const flourishComponent = Flourish('YOUR_TOKEN', 'en', 'staging');

    if (flourishRef.current) {
      flourishRef.current.appendChild(flourishComponent);
    }

    return () => {
      if (flourishRef.current) {
        flourishRef.current.removeChild(flourishComponent);
      }
    };
  }, []);

  const genericEventCallback = (eventData) => {
    console.log('Generic event data:', eventData);
  };

  return (
    <div
      ref={flourishRef}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}

export default App;
```


### Basic Integration (Angular Integration)
The SDK can also be used within a Angular application:

```javascript
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Flourish } from 'flourish-sdk-web';

@Component({
  selector: 'app-flourish',
  standalone: true,
  templateUrl: './flourish.component.html',
  styleUrl: './flourish.component.css'
})
export class FlourishComponent implements OnInit {

  @Input() token!: string;
  @Input() language: string = 'en';
  @Input() environment!: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // Initialize the Flourish SDK and append the iframe to the container
    const flourishIframe = Flourish(this.token, this.language, this.environment, this.handleGenericEvent);
    this.elementRef.nativeElement.querySelector('.flourish-container').appendChild(flourishIframe);
  }

  handleGenericEvent(data: any): void {
    console.log('Generic event received:', data);
  }

}

```

### Basic Integration (Vue Integration)
The SDK can also be used within a Vue.js application:

```javascript
<template>
    <div class="flourish-container" ref="flourishContainer"></div>
  </template>
  
  <script>
  import { Flourish } from 'flourish-sdk-web';
  
  export default {
    name: 'FlourishComponent',
    props: {
      token: {
        type: String,
        required: true
      },
      language: {
        type: String,
        default: 'en'
      },
      environment: {
        type: String,
        required: true
      }
    },
    mounted() {
      // Initialize the Flourish SDK and append the iframe to the container
      const flourishApp = Flourish(this.token, this.language, this.environment, this.handleGenericEvent);
      this.$refs.flourishContainer.appendChild(flourishApp);
    },
    methods: {
      handleGenericEvent(data) {
        console.log('Generic event received:', data);
      }
    }
  };
  </script>
  
  <style scoped>
  .flourish-container {
    width: 100%;
    height: 100vh;
  }
  </style>

```



### Basic Integration (Capacitor Integration)
The SDK can also be used within a Capacitor application:

```javascript
import { Flourish } from 'flourish-sdk-web';


document.addEventListener('DOMContentLoaded', () => {
  const token = 'FLOURISH_TOKEN_HERE';
  const language = 'en';
  const environment = 'staging';

  // Generic event callback
  const onGenericEvent = (data) => {
    console.log('Generic event received:', data);
  };

  // Initialize the Flourish SDK
  const flourishIframe = Flourish(token, language, environment, onGenericEvent);

  // Append the iframe to the container in index.html
  const appContainer = document.getElementById('app');
  if (appContainer) {
    appContainer.appendChild(flourishIframe);
  }
});

```

---
### Step 4: Listening events

You can register for some events to know when something happens within our platform.

### Listen our events
To listen to our events, you will pass a callback function to our Flourish component when you add it to your screen.

### To listen all events
you can listen to all events at once, to do this, just pass a callback function in the "genericEventCallback" attribute

```js
import Flourish from 'flourish-sdk-web';

const genericEventCallback = (eventData: string): void => {
  console.log('All events here', eventData);
};

Flourish('YOUR_TOKEN', 'en', 'production', genericEventCallback);
```

### Events to listen
here you have all events we will return
| Event name                     | Description                                                                                                       |
|--------------------------------|-------------------------------------------------------------------------------------------------------------------|
| BACK_BUTTON_PRESSED            | When you need to know when the user clicks on the back menu button on our platform.                               |
| ERROR_BACK_BUTTON_PRESSED      | When you need to know when the user clicks on the back menu button on our error page.                             |
| HOME_BACK_BUTTON_PRESSED       | When you need to know when the user clicks on the back menu button when on the home screen of our platform.       |
| ONBOARDING_BACK_BUTTON_PRESSED | When you need to know when the user clicks on the back menu button when on the onboarding screen of our platform. |
| TERMS_ACCEPTED                 | When you need to know when the user clicks to accept the terms.                                                   |
| TRIVIA_GAME_FINISHED           | When you need to know when the user finishes a Trivia game on our platform.                                       |
| TRIVIA_CLOSED                  | When you need to know when the user closed the Trivia game on our platform.                                       |
| REFERRAL_COPY                  | When you need to know when the user copy the referral code to the clipboard area.                                 |
| REFERRAL_FINISHED              | When you need to know when the referral finished.                                                                 |
| REFERRAL_REWARD_REDEEMED       | When you need to know when the user redeem the referral rewards.                                                  |
| REFERRAL_REWARD_SKIPPED        | When you need to know when the user slipped the referral rewards.                                                 |
| GIFT_CARD_COPY                 | When you need to know when the user copy the Gift code to the clipboard area.                                     |
| HOME_BANNER_ACTION             | When you need to know when the user clicks on the home banner.                                                    |
| MISSION_ACTION                 | When you need to know when the user clicks on a mission card                                                      |
| AUTHENTICATION_FAILURE         | When you need to know when the Authentication failed                                                              |
| ERROR                          | When you need to know when a not mapped error happened.                                                           |

