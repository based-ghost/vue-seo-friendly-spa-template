<template>
  <div id="app">
    <nav-bar />
    <transition :name="$route.meta.transitionName" mode="out-in">
      <router-view />
    </transition>
    <back-to-top />
    <app-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AppFooter, NavBar, BackToTop } from "@/components";

@Component({
  components: {
    NavBar,
    AppFooter,
    BackToTop,
  }
})
export default class App extends Vue {}
</script>