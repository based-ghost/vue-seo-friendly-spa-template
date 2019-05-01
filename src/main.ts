import "@/assets/style/main.scss";
import "@/config/fa.config";
import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import Meta from "vue-meta";
import VueAnalytics from "vue-analytics";
import "@/registerServiceWorker";

// Register vue-meta
Vue.use(Meta);

// Register vue-analytics (Google Analytics Configuration)
// id: Replace with your tracking code
// checkDuplicatedScript: prevents duplicate analytics.js tags from being added
// debug/sendHitTask: Prevents GA collection hits from being sent in non-production builds
Vue.use(VueAnalytics, {
  id: "UA-xxxxxxxxx-x",
  checkDuplicatedScript: true,
  router,
  debug: {
    sendHitTask: process.env.NODE_ENV === "production"
  }
});

// Vue Configuration flags
Vue.config.productionTip = false;

// Mount app to Vue instance
// mounted() has callback to fire event that the prerender plugin listens for in order to take its snapshot
new Vue({
  router,
  render: (h) => h(App),
  mounted() {
    document.dispatchEvent(new Event("render-event"));
  }
}).$mount("#app");
