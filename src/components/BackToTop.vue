<template>
  <a
    href="#"
    id="back-to-top"
    :class="{ show }"
    v-scroll-to="'#app'"
    aria-label="Back to top"
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
    document.addEventListener('scroll', this.handleScroll);
  }

  public beforeDestroy(): void {
    document.removeEventListener('scroll', this.handleScroll);
  }

  private handleScroll(): void {
    const scrollYPos = window.scrollY || window.pageYOffset;

    if (scrollYPos > 100) {
      this.show = true;
    } else if (scrollYPos === 0) {
      this.show = false;
    }
  }
}
</script>

<style lang="scss" scoped>
  #back-to-top {
    opacity: 0;
    width: 3.5rem;
    z-index: 9999;
    display: block;
    height: 3.5rem;
    right: 1.25rem;
    bottom: -3.5rem;
    cursor: pointer;
    position: fixed;
    user-select: none;
    border-radius: 50%;
    background: rgb(37, 40, 47);
    -webkit-tap-highlight-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px;
    transition: opacity 0.4s ease, bottom 0.4s ease;

    &.show {
      opacity: 1;
      bottom: 1.25rem;
    }

    > svg {
      display: block;
      color: #67dea9;
      font-size: 1.75em;
      padding-left: 0.1rem;
      margin: 0.75rem auto auto auto;
    }
  }
</style>