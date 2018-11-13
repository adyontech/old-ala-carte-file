import Vue from "vue";
import Vuex from "vuex";
import AuthStore from "./modules/auth.store";
Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  modules: {
    AuthStore
  },
  state: {
    //  baseServerURL:"https://something.tk/",
    baseServerURL: "http://localhost:3000"
  },
  getters: {
    getBaseURL: state => state.baseServerURL
  },
  mutations: {}
});

export default store;
