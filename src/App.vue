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
import NavBar from "@/components/NavBar.vue";
import AppFooter from "@/components/Footer.vue";

@Component({
  components: {
    NavBar,
    AppFooter
  }
})
export default class App extends Vue { }
</script>