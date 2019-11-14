import { RouteConfig } from "vue-router";

export type RoutesConfig = { [key: string]: RouteConfig; };

export const RoutesConfig = Object.freeze<RoutesConfig>({
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