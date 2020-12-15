import Vue from "vue";
import Vuerouter from "vue-router";
Vue.use(Vuerouter);
const router = new Vuerouter({
  routes: [
    { path: "/", redirect: "/layout" },
    { path: "/login", component: () => import("../views/login") },
    {
      path: "/layout",
      component: () => import("../views/layout"),
      children: [
        { path: "/layout", redirect: "/layout/find" },
        { path: "/layout/find", component: () => import("../views/find") },
        { path: "/layout/boke", component: () => import("../views/boke") },
        { path: "/layout/mine", component: () => import("../views/mine") },
        { path: "/layout/keige", component: () => import("../views/keige") },
        { path: "/layout/yuncun", component: () => import("../views/yuncun") },
      ],
    },
  ],
});
export default router;
