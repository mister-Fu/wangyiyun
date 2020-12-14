import Vue from "vue";
import Vuerouter from "vue-router";
Vue.use(Vuerouter);
const router = new Vuerouter({
  routes: [
    { path: "/", redirect: "/find" },
    { path: "/find", component: () => import("../views/find") },
    { path: "/boke", component: () => import("../views/boke") },
    { path: "/mine", component: () => import("../views/mine") },
    { path: "/keige", component: () => import("../views/keige") },
    { path: "/yuncun", component: () => import("../views/yuncun") },
  ],
});
export default router;
