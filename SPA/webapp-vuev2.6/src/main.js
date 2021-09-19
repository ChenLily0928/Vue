// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;

/* eslint-disable no-new */
const app = new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

// 透過 $mount 掛載至指定的網頁節點
app.$mount("#app");
