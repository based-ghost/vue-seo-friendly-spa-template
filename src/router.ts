import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import NotFound from "@/views/NotFound.vue";
import { RoutesConfig } from "@/config/routes.config";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "is-active",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      component: Home,
      ...RoutesConfig.Home
    },
    {
      component: About,
      ...RoutesConfig.About
    },
    {
      component: NotFound,
      ...RoutesConfig.NotFound
    }
  ]
});
