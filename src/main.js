require("../node_modules/vuetify/src/stylus/app.styl");
import ve from "./vuetify.theme.js";
import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/store";
new Vue({
  el: "#app",
  router,
  store,
  components: {
    App
  },
  template: "<App/>"
});
