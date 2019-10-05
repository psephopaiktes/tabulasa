import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

window.console.log(
  "%chttps://github.com/psephopaiktes/tabulasa",
  `
    padding: 20px 40px;
    margin: 40px 0px;
    border: 2px solid #ccc;
    border-radius: 8px;
    letter-spacing: .1em;
    font-size: large;
    font-weight: bold;
    text-align: center;
  `
);
