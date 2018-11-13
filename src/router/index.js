import Vue from "vue";
import Router from "vue-router";
import innerPagesRoutes from "../pages/entryPages/entryPagesRoutes.index";
import recruiterRoutes from "../pages/recruiterPages/recruiter.router.js";
import { ifAuthenticated, ifNotAuthenticated } from "./routerLogic";
Vue.use(Router);
const entryPages = () => import("../pages/entryPages/entryPages.vue");
const recruiterPages = () =>
  import("../pages/recruiterPages/recruiter.index.vue");
export default new Router({
  mode: "history",
  routes: [
    {
      path: "",
      name: "innerPages",
      component: entryPages,
      children: [...innerPagesRoutes]
      //   beforeEnter: ifAuthenticated
    },
    {
      path: "",
      name: "innerPages",
      component: recruiterPages,
      children: [...recruiterRoutes]
      //   beforeEnter: ifAuthenticated
    }
  ]
});
