import Vue from "vue";
import App from "./App.vue";
import vant from "vant";
import "vant/lib/index.css";
import { Tabbar, TabbarItem } from "vant";
Vue.use(vant);
Vue.use(Tabbar);
Vue.use(TabbarItem);
import { Icon } from "vant";
import { Popup } from "vant";

Vue.use(Popup);

Vue.use(Icon);
import router from "../src/router/index";
Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
