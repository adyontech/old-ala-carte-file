<template>
  <v-app style="position:relative" class="white">
    <AuthBar />
    <router-view />
  </v-app>
</template>

<style scoped>
</style>

<script>
import AuthBar from "../../components/Navbars/authPages.vue";
export default {
  data() {
    return {};
  },
  components: {
    AuthBar
  }
};
</script>