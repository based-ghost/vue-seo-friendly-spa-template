<script setup lang="ts">
  import { useMetaRoute, useSharedTheme } from '@/composables';
  import { FEATURES, PACKAGES, LOREM_IPSUM_TEXT } from '@/config';

  useMetaRoute();
  const { themeCls } = useSharedTheme();
</script>

<template>
  <div class="view-wrapper">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="is-flex is-horizontal-center">
            <figure class="image is-132x132">
              <font-awesome-icon
                class="vue-svg"
                :icon="['fab', 'vuejs']"
              />
            </figure>
          </div>
          <h1 class="title">SEO Friendly SPA</h1>
          <hr>
          <p
            v-for="({ package_name, description }, index) in FEATURES"
            :key="index"
            class="feature"
          >
            <font-awesome-icon icon="check" />
            {{ description }}
            <code v-if="package_name">{{ package_name }}</code>
          </p>
        </div>
      </div>
    </section>
    <section :class="['container dashboard-content', themeCls]">
      <div class="columns">
        <div
          v-for="{ package_name, description_1, description_2 } in PACKAGES"
          :key="package_name"
          class="column"
        >
          <p class="title">{{ package_name }}</p>
          <div class="content">
            <p>
              <code>{{ package_name }}</code> {{ description_1 }}
            </p>
            <p>{{ description_2 }}</p>
          </div>
        </div>
      </div>
      <hr>
      <div class="columns">
        <div class="column">
          <p class="title">lorem ipsum</p>
          <div class="content">{{ LOREM_IPSUM_TEXT }}</div>
        </div>
      </div>
    </section>
  </div>
</template>