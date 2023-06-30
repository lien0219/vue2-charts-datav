import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dataV from "@jiaminghi/data-view";
import * as echarts from "echarts";

import "./assets/css/index.css";

Vue.use(dataV);
Vue.prototype.echarts = echarts; // 挂载到Vue实例上，方便全局使用
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
