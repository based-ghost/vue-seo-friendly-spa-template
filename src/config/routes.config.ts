import { RouteConfig } from "vue-router";

export const RoutesConfig = Object.freeze<Record<string, RouteConfig>>({
  Home: {
    path: "/",
    name: "Home",
    meta: {
      transitionName: "fade",
      icon: "home"
    }
  },
  About: {
    path: "/about",
    name: "About",
    meta: {
      transitionName: "pageSlideDown",
      icon: "info"
    }
  },
  NotFound: {
    path: "*"
  }
});