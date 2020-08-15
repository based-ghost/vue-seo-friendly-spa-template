<template>
  <a
    href="#"
    id="back-to-top"
    :class="{ show }"
    v-scroll-to="'#app'"
    aria-label="BackToTop"
  >
    <font-awesome-icon icon="angle-double-up" />
  </a>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {
  public show: boolean = false;

  public created(): void {
    document.addEventListener('scroll', this.handleScroll, true);
  }

  public beforeDestroy(): void {
    document.removeEventListener('scroll', this.handleScroll, true);
  }

  public handleScroll(): void {
    if ((window.scrollY || window.pageYOffset) > 100) {
      this.show = true;
    } else if ((window.scrollY || window.pageYOffset) === 0) {
      this.show = false;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/scoped/back-to-top.scss";
</style>