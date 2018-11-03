import Vue from "vue";
import Vuex from "vuex";
import AuthStore from "./auth.store";
Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  modules: {
    // AuthStore
  },
  state: {
    //  baseServerURL:"https://skylimservices.tk/",
    baseServerURL: "http://localhost:4000"
  },
  getters: {
    getBaseURL: state => state.baseServerURL
  },
  mutations: {}
});

export default store;
