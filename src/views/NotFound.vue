<script setup>
  import { unref } from 'vue';
  import { Alert } from '@/components';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const { path } = unref(router.currentRoute);

  if (path !== '/404') {
    router.replace({ path: '/404' });
  }
</script>

<template>
  <section class="container view-wrapper">
    <Alert
      title="404 Not Found"
      class-name="is-danger"
      icon-name="exclamation-circle"
      :show="$route?.path === '/404'"
      sub-title="The requested page could not be found."
    />
  </section>
</template>