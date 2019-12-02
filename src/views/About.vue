<template>
  <section class="container view-wrapper">
    <div class="tile is-parent is-8 is-vertical is-notification-tile">
      <div class="notification tile is-child is-primary">
        <div>
          <font-awesome-icon icon="info-circle" size="2x" />
          <span class="title">About Page</span>
        </div>
        <p class="subtitle">Very interesting information may go here.</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { MetaInfoAbout } from "@/config/metaInfo.config";

@Component({
  metaInfo: MetaInfoAbout
})
export default class About extends Vue {}
</script>