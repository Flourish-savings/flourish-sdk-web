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
        console.log('Generic event received in Vue Example:', data);
      }
    }
  };
  </script>
  
  <style scoped>
  .flourish-container {
    width: 100%;
    height: 100vh; /* Full viewport height */
  }
  </style>
  