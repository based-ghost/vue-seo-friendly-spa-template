import Vue from 'vue';
import Meta from 'vue-meta';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Archive from './views/Archive.vue';
import { RoutesConfig } from './config/routes.config';

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes: [
      {
          path: RoutesConfig.Home.path,
          name: RoutesConfig.Home.displayName,
          component: Home,
          meta: RoutesConfig.Home.meta
      },
      {
          path: RoutesConfig.Archive.path,
          name: RoutesConfig.Archive.displayName,
          component: Archive,
          meta: RoutesConfig.Archive.meta
      }
  ]
});
