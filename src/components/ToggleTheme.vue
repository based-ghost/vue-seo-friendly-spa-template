<script setup lang="ts">
  import { ref, unref } from 'vue';
  import { useTheme, Theme } from '@/composables';

  const focused = ref(false);
  const { theme, setTheme, themeCls } = useTheme();

  function removeFocus() {
    focused.value = false;
  }

  function toggleTheme() {
    const nextTheme = unref(theme) === Theme.PRIMARY ? Theme.SECONDARY : Theme.PRIMARY;
    focused.value = true;
    setTheme(nextTheme);
  }
</script>

<template>
  <div
    id="theme-toggle"
    :class="themeCls"
    @click="toggleTheme"
    v-click-outside="removeFocus"
  >
    <div class="theme-toggle-track">
      <div>
        <font-awesome-icon icon="sun" />
      </div>
      <div>
        <font-awesome-icon icon="moon" />
      </div>
    </div>
    <div :class="['theme-toggle-thumb', { focused }]" />
  </div>
</template>

<style lang="scss">
  #theme-toggle {
    cursor: pointer;
    user-select: none;
    position: relative;
    touch-action: pan-x;
    display: inline-block;
    -webkit-tap-highlight-color: transparent;

    &.primary-theme > .theme-toggle-thumb {
      transform: translateX(31px);
    }

    > .theme-toggle-track {
      width: 58px;
      height: 28px;
      border-radius: 30px;
      background-color: #4d4d4d;

      > div {
        height: 100%;
        position: absolute;

        &:first-of-type {
          left: 8px;
        }

        &:last-of-type {
          right: 8px;
        }

        > .svg-inline--fa {
          color: #fac863;
          width: 1.05rem;
          height: 1.05rem;
          font-size: 1.05rem;
          vertical-align: -.165rem;
        }
      }
    }

    > .theme-toggle-thumb {
      left: 0px;
      top: 1.5px;
      width: 25px;
      height: 25px;
      position: absolute;
      border-radius: 50%;
      box-sizing: border-box;
      transform: translateX(2.5px);
      border: 0.5px solid #4d4d4d;
      background-color: #fafafa;
      transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s cubic-bezier(0.23, 1, 0.32, 1), border 0.5s cubic-bezier(0.23, 1, 0.32, 1);
      will-change: transform, box-shadow, border;

      &.focused {
        border-color: #67dea9;
        box-shadow: 0 0 2.75px 1.75px #67dea9;
      }
    }
  }
</style>