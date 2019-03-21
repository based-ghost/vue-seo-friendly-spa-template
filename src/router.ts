import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import NotFoundComponent from '@/views/NotFoundComponent.vue';
import { routesConfig } from '@/config/routes.config';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'is-active',
  routes: [
      {
          component: Home,
          ...routesConfig.Home
      },
      {
          component: About,
          ...routesConfig.About
      },
      {
          path: '*',
          component: NotFoundComponent,
      },
  ],
});
