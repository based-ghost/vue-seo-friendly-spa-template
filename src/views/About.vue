<script setup>
  import { Alert } from '@/components';
  import { useMetaRoute } from '@/compositions';

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