<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-wrapper">
      <div class="brand-wrapper">
        <img
          width="215"
          alt="Vue SEO Logo"
          src="@/assets/img/vue-seo-template.png"
        />
      </div>
      <div id="navbar-routes" class="navbar-routes">
        <router-link :to="routesConfig.Home.path" class="navbar-item">
          <span class="icon">
            <font-awesome-icon :icon="routesConfig.Home.meta.icon"/>
          </span>
          <span>{{routesConfig.Home.name}}</span>
        </router-link>
        <router-link :to="routesConfig.About.path" class="navbar-item">
          <span class="icon">
            <font-awesome-icon :icon="routesConfig.About.meta.icon"/>
          </span>
          <span>{{routesConfig.About.name}}</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { RoutesConfig } from "@/config/routes.config";

@Component
export default class NavBar extends Vue {
  public readonly routesConfig: RoutesConfig = RoutesConfig;
}
</script>