<template>
  <div id="app">
    <navbar />
    <transition :name="$route.meta.transitionName" mode="out-in">
      <router-view />
    </transition>
    <back-to-top />
    <app-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AppFooter, Navbar, BackToTop } from "@/components";

@Component({
  components: {
    Navbar,
    AppFooter,
    BackToTop
  }
})
export default class App extends Vue {}
</script>