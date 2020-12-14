import Vue from "vue";
import App from "./App.vue";
import vant from "vant";
import "vant/lib/index.css";
import { Tabbar, TabbarItem } from "vant";
Vue.use(vant);
Vue.use(Tabbar);
Vue.use(TabbarItem);
import { Icon } from "vant";
// import server from "../src/units/server";

Vue.use(Icon);
import router from "../src/router/index";
Vue.config.productionTip = false;
// Vue.filter("dalImg", (str) => {
//   if (str) {
//     if (str.startsWith("http")) {
//       return str;
//     } else {
//       return server + str;
//     }
//   } else {
//     return "./assets/1.png";
//   }
// });
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
