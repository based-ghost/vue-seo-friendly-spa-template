import Vue from "vue";
import App from "@/App.vue";
import "@/registerServiceWorker";
import "@/assets/style/main.scss";
import router from "@/router";
import Meta from "vue-meta";
import VueAnalytics from "vue-analytics";
import VueScrollTo from 'vue-scrollto';
import "@/config/fa.config";

const googleTrackingNum = 'UA-xxxxxxxxx-x';
const prerenderEventName = 'prerender-event';
const isProd = (process.env.NODE_ENV === 'production');

// Register vue-meta
Vue.use(Meta);

// Register vue-analytics (Google Analytics Configuration - replace 'id' with trackingid)
Vue.use(VueAnalytics, {
  id: googleTrackingNum,
  checkDuplicatedScript: true,
  router,
  debug: {
    enabled: !isProd,
    sendHitTask: isProd,
  },
});

// Register & configure vue-scroll-to package used by BackToTop.vue component
Vue.use(VueScrollTo, {
  duration: 500,
  container: 'body',
  easing: 'ease-in-out',
});

// In the mounted callback dispatch the event telling prerendered app to render
// ...wrap in this.$nextTick callback to ensure all components/child components have finished mounting
new Vue({
  router,
  render: (h) => h(App),
  mounted: function() {
    this.$nextTick(() => {
      document.dispatchEvent(new Event(prerenderEventName));
    });
  }
}).$mount('#app');
