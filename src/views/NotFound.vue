<template>
  <section class="container">
    <div class="tile is-parent is-8 is-vertical is-notification-tile is-not-found-tile">
      <div
        class="notification tile is-child is-danger"
        :class="{ 'rubberBand-animation': isLocation404 }"
      >
        <div>
          <font-awesome-icon icon="exclamation-circle" size="2x" />
          <span class="title">404 Not Found</span>
        </div>
        <p class="subtitle">The requested page could not be found.</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NotFound extends Vue {
  public mounted(): void {
    if (window.location.pathname !== "/404") {
      window.location.href = "/404";
    }
  }

  get isLocation404(): boolean {
    return (window && window.location.pathname === '/404');
  }
}
</script>