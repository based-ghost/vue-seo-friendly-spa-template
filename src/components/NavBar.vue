<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-wrapper">
      <div class="brand-wrapper">
        <vue-seo-logo
          role="img"
          width="170"
          id="vue-seo-logo"
          aria-hidden="true"
        />
      </div>
      <div class="navbar-routes">
        <router-link :to="routesConfig.Home.path" class="navbar-item">
          <span>{{routesConfig.Home.name}}</span>
        </router-link>
        <router-link :to="routesConfig.About.path" class="navbar-item">
          <span>{{routesConfig.About.name}}</span>
        </router-link>
        <div class="seperator" />
        <a
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          href="https://github.com/based-ghost"
          class="navbar-item"
        >
          <span>GitHub</span>
          <font-awesome-icon icon="external-link-alt" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { RouteConfig } from "vue-router";
import { RoutesConfig } from "@/config/routes.config";
import VueSeoLogo from "@/assets/img/VueSeoLogo.svg?inline";

@Component({
  components: {
    VueSeoLogo
  }
})
export default class NavBar extends Vue {
  public readonly routesConfig: Record<string, RouteConfig> = RoutesConfig;
}
</script>