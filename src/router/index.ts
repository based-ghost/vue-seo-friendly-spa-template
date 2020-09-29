import Vue from "vue";
import Router, { RouteConfig } from "vue-router";
import { Home, About, NotFound } from '@/views';

Vue.use(Router);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      transitionName: 'fade',
      icon: 'home'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      transitionName: 'page-slide-down',
      icon: 'info'
    }
  },
  {
    path: '*',
    component: NotFound
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
