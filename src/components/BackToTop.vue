<script setup>
  import { ref, unref, onUnmounted, onMounted } from 'vue';

  const show = ref(false);

  function handleScroll() {
    const showVal = unref(show);
    const { pageYOffset } = window;

    if (
      (!showVal && pageYOffset > 100) ||
      (showVal && pageYOffset === 0)
    ) {
      show.value = !showVal;
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true,
      capture: false
    });
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
</script>

<template>
  <a
    href="#"
    id="back-to-top"
    :class="{ show }"
    aria-label="Back to top"
    v-scroll-to="{ element: '#app' }"
  >
    <font-awesome-icon icon="angle-double-up" />
  </a>
</template>

<style lang="scss">
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
    background: #67dea9;
    border: 1px solid transparent;
    -webkit-tap-highlight-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 20px;
    transition: opacity 0.4s ease, bottom 0.4s ease;

    &.show {
      opacity: 1;
      bottom: 1.25rem;
    }

    > svg {
      display: block;
      color: #20232a;
      font-size: 1.5em;
      padding-left: 0.1rem;
      margin: 0.95rem auto auto auto;
    }
  }
</style>