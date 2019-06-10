<template functional>
  <footer class="footer">
    <div class="buttons">
      <a class="button is-medium" aria-label="GitHub">
        <font-awesome-icon :icon="['fab', 'github']"/>
      </a>
      <a class="button is-medium" aria-label="Twitter">
        <font-awesome-icon :icon="['fab', 'twitter']"/>
      </a>
      <a class="button is-medium" aria-label="Medium">
        <font-awesome-icon :icon="['fab', 'medium-m']"/>
      </a>
    </div>
    <div class="content">VueSeoFriendlySpaTemplate.com &copy; 2019</div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue { }
</script>