import { createApp } from 'vue';
import App from '@/App.vue';

import '@/registerServiceWorker';
import '@/assets/style/main.scss';
import '@/config/fa.config';

import router from '@/router';
import VueGtag from 'vue-gtag-next';
import VueScrollTo from 'vue-scrollto';
import { vClickOutside } from '@/directives';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { META_MANAGER, VUE_GTAG_OPTIONS, VUE_SCROLLTO_OPTIONS } from '@/config';

createApp(App)
  .use(router)
  .use(META_MANAGER)
  .use(VueGtag, VUE_GTAG_OPTIONS)
  .use(VueScrollTo, VUE_SCROLLTO_OPTIONS)
  .directive('click-outside', vClickOutside)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');