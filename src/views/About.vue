<script setup lang="ts">
  import { Alert } from '@/components';
  import { useMetaRoute } from '@/composables';

  useMetaRoute();
</script>

<template>
  <section class="container view-wrapper">
    <Alert
      title="About Page"
      sub-title="Very interesting information may go here."
    />
  </section>
</template>