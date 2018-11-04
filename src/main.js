import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

import "./styles/quasar.styl";
import "quasar-framework/dist/quasar.ie.polyfills";
import "quasar-extras/roboto-font";
import "quasar-extras/material-icons";
import Quasar from "quasar";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

Vue.use(Quasar, {
  config: {}
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
