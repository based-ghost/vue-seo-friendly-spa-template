<script setup>
  import { watch, unref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useGtag } from 'vue-gtag-next';
  import { useTheme } from '@/compositions';
  import { useMeta, useActiveMeta } from 'vue-meta';
  import { Navbar, AppFooter, BackToTop } from '@/components';

  const router = useRouter();
  const { pageview } = useGtag();
  const { themeCls } = useTheme();
  const activeMeta = useActiveMeta();

  useMeta({
    charset: 'utf8',
    og: {
      type: 'website'
    },
    htmlAttrs: {
      amp: true,
      lang: ['en']
    }
  });

  function trackPageView() {
    setTimeout(() => {
      const { currentRoute, getRoutes } = router;
      const { path } = unref(currentRoute);
      const isValidPath = getRoutes().some((x) => x.path === path);

      if (isValidPath) {
        pageview(path);
      }
    }, 10);
  }

  watch(
    () => activeMeta,
    () => trackPageView(),
    { deep: true }
  );

  watch(themeCls, (themeCls) => {
    document.body.className = themeCls;
  });
</script>

<template>
  <metainfo>
    <template #title="{ content }">
      {{ `VueSeoFriendlySpa | ${content}` }}
    </template>
  </metainfo>
  <Navbar />
  <router-view v-slot="{ Component, route }">
    <transition
      mode="out-in"
      :name="route.meta.transition"
    >
      <component :is="Component" />
    </transition>
  </router-view>
  <BackToTop />
  <AppFooter />
</template>