<template>
  <NavBar/>
  <img alt="Vue logo" src="./assets/logo.png">
  <RouterView/>
</template>

<script>
// video 123: lazy load of a compoment which is not in the router
import { defineAsyncComponent } from 'vue';

export default {
  name: 'App',
  components: { 
    NavBar: defineAsyncComponent(() => import ('@/modules/shared/components/NavBar'))
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
  margin-top: 0rem;
}
</style>
