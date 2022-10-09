<script setup lang="ts">
  interface Props {
    title: string
    subTitle: string
    show?: boolean
    className?: string
    iconName?: string
    iconSize?: string
    transitionName?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    show: true,
    className: 'is-primary',
    iconName: 'info-circle',
    iconSize: '2x',
    transitionName: 'rubber-band'
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