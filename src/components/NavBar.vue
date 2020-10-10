<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-wrapper">
      <div class="brand-wrapper">
        <vue-seo-logo
          role="img"
          width="170"
          height="68"
          id="vue-seo-logo"
          aria-hidden="true"
        />
      </div>
      <div class="navbar-routes">
        <router-link v-for="route in navLinkRoutes" :key="route.name" :to="route.path" class="navbar-item">
          <span>{{route.name}}</span>
        </router-link>
        <div class="seperator" />
        <a
          target="_blank"
          aria-label="GitHub"
          class="navbar-item"
          rel="noopener noreferrer"
          href="https://github.com/based-ghost"
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
import VueSeoLogo from "@/assets/img/VueSeoLogo.svg?inline";
import { RouteConfig } from "vue-router";

@Component({
  components: {
    VueSeoLogo
  }
})
export default class Navbar extends Vue {
  public navLinkRoutes: RouteConfig[] = (this.$router.options.routes || []).filter(({ name }) => !!name);
}
</script>
