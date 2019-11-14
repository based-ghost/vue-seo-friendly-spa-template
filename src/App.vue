<template>
  <div id="app">
    <nav-bar/>
    <transition :name="$route.meta.transitionName" mode="out-in">
      <router-view/>
    </transition>
    <app-footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AppFooter, NavBar } from "@/components";

@Component({
  components: {
    NavBar,
    AppFooter
  }
})
export default class App extends Vue { }
</script>