<template>
    <v-app style="position:relative">
        <p>kyon hello</p>
        <router-view />
    </v-app>
</template>

<style scoped>
</style>

<script>
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
  }
};
</script>