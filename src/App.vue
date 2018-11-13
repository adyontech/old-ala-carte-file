<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Montserrat, "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.headline,
.title,
.subheading,
.display-1 {
  font-family: Montserrat !important;
}
</style>


<script>
import { initSession } from "./sessionManager";
export default {
  data() {
    return {
      title: "hirerare"
    };
  },
  mounted() {
    initSession();
  }
};
</script>
