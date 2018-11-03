<template>
    <v-app style="position:relative">
        <!--OHHHHH here I am, The router-view-->
        <!-- <router-view/> -->
        <p>phellko</p>
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