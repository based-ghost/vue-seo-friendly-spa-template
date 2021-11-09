<script setup>
  import { defineProps } from 'vue';

  defineProps({
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: true
    },
    show: {
      type: Boolean,
      required: false,
      default: true
    },
    className: {
      type: String,
      required: false,
      default: 'is-primary'
    },
    iconName: {
      type: String,
      required: false,
      default: 'info-circle'
    },
    iconSize: {
      type: String,
      required: false,
      default: '2x'
    },
    transitionName: {
      type: String,
      required: false,
      default: 'rubber-band'
    }
  });
</script>

<template>
  <div class="tile notification-tile is-parent is-vertical is-8">
    <transition
      appear
      :name="transitionName"
    >
      <div
        v-if="show"
        :class="['notification tile is-child', className]"
      >
        <div>
          <font-awesome-icon
            :size="iconSize"
            :icon="iconName"
          />
          <span class="title">{{ title }}</span>
        </div>
        <p class="subtitle">
          {{ subTitle }}
        </p>
      </div>
    </transition>
  </div>
</template>