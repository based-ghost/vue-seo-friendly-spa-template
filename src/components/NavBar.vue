<script setup>
  import { VueSEO } from '@/icons';
  import ToggleTheme from './ToggleTheme.vue';
</script>

<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-wrapper">
      <div class="brand-wrapper">
        <VueSEO
          role="img"
          width="162"
          height="65"
          id="vue-seo-logo"
          aria-hidden="true"
        />
      </div>
      <div class="navbar-routes">
        <router-link
          :to="{ name: 'Home' }"
          class="navbar-item"
        >
          <span>Home</span>
        </router-link>
        <router-link
          :to="{ name: 'About' }"
          class="navbar-item"
        >
          <span>About</span>
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
        <div class="navbar-theme-toggle">
          <ToggleTheme />
        </div>
      </div>
    </div>
  </nav>
</template>
