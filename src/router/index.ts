import Vue from "vue";
import Router from "vue-router";
import { Home, About, NotFound404 } from "@/views";

import type { RouteConfig } from "vue-router";

Vue.use(Router);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      transitionName: 'fade'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      transitionName: 'page-slide-down'
    }
  },
  {
    path: '*',
    component: NotFound404
  }
];

export default new Router({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'is-active',
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 250); // Timout delay set to match animation duration of from-page
    });
  }
});
