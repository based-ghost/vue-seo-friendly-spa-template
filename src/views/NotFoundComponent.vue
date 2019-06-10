<template>
  <section class="container">
    <div class="tile is-parent is-notification-tile-parent is-vertical is-8">
      <div class="notification is-danger">
        <div class="title">
          <font-awesome-icon icon="exclamation-circle"/>404 Not Found
        </div>
        <p class="subtitle">The requested page could not be found.</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { buildMetaInfo } from "@/utils/metaInfo";

@Component({
  metaInfo: () => buildMetaInfo()
})
export default class NotFoundComponent extends Vue {
  private mounted(): void {
    if (window.location.pathname !== "/404") {
      window.location.href = "/404";
    }
  }
}
</script>