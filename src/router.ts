import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import NotFoundComponent from '@/views/NotFoundComponent.vue';
import { RoutesConfig } from '@/config/routes.config';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'is-active',
  routes: [
      {
          path: RoutesConfig.Home.path,
          name: RoutesConfig.Home.displayName,
          component: Home,
          meta: RoutesConfig.Home.meta,
      },
      {
          path: RoutesConfig.About.path,
          name: RoutesConfig.About.displayName,
          component: About,
          meta: RoutesConfig.About.meta,
      },
      {
          path: '*',
          component: NotFoundComponent,
      },
  ],
});
