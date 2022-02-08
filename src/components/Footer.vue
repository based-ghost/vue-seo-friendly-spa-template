<template>
  <footer class="footer">
    <div class="buttons">
      <a
        target="_blank"
        aria-label="GitHub"
        class="button is-medium"
        rel="noopener noreferrer"
        href="https://github.com/based-ghost"
      >
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
      <a
        target="_blank"
        aria-label="Twitter"
        class="button is-medium"
        rel="noopener noreferrer"
        href="https://github.com/based-ghost"
      >
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </a>
      <a
        target="_blank"
        aria-label="Medium"
        class="button is-medium"
        rel="noopener noreferrer"
        href="https://github.com/based-ghost"
      >
        <font-awesome-icon :icon="['fab', 'etsy']" />
      </a>
    </div>
    <div class="content has-text-centered">
      Copyright © {{new Date().getFullYear()}} vueseofriendlyspa.com
    </div>
  </footer>
</template>