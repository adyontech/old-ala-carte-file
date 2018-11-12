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
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "bubble_chart",
          title: "Inspire"
        }
      ],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  },
  components: {
    AuthBar
  }
};
</script>