<template>
  <div id="app">
    <landing-page />
  </div>
</template>

<script>
import LandingPage from '@/views/LandingPage.vue'

export default {
  name: 'App',
  components: {
    LandingPage
  }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  height: 100%;
  margin: 0 auto;
  background-color: white;
}
</style>
