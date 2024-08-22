<template>
  <FlourishComponent
      token="FLOURISH_TOKEN_HERE"
      language="en"
      environment="staging"
    />
</template>

<script>
import FlourishComponent from './components/FlourishComponent.vue'

export default {
  name: 'App',
  components: {
    FlourishComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  width: 100%;
  height: 100%;
}
</style>
