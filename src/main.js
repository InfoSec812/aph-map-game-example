import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

import "./styles/quasar.styl";
import "quasar-framework/dist/quasar.ie.polyfills";
import "quasar-extras/roboto-font";
import "quasar-extras/material-icons";
import Quasar from "quasar";
import { Map, TileLayer, OsmSource, Geoloc } from "vuelayers";
import "vuelayers/lib/style.css"; // needs css-loader;

Vue.use(Map);
Vue.use(TileLayer);
Vue.use(OsmSource);
Vue.use(Geoloc);

Vue.use(Quasar, {
  config: {}
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
