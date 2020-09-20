import Vue from "vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import NotFound from "@/views/NotFound.vue";
import Router, { RouteConfig } from "vue-router";

Vue.use(Router);

export const routes: RouteConfig[] = [
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
      transitionName: 'pageSlideDown',
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
    return { x: 0, y: 0 };
  },
});
