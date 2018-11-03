import Vue from "vue";
import Router from "vue-router";
import { ifAuthenticated, ifNotAuthenticated } from "./routerLogic";
Vue.use(Router);
const entryPages = () => import("../pages/entryPages/entryPages.vue");
import innerPagesRoutes from "../pages/entryPages/entryPagesRoutes.index";

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "innerPages",
      component: entryPages,
      children: [...innerPagesRoutes]
      //   beforeEnter: ifAuthenticated
    }
  ]
});
