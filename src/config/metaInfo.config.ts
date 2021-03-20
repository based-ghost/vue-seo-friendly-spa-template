import type { MetaInfo } from 'vue-meta';

// Home.vue
export const MetaInfoHome: MetaInfo = {
  title: 'Home',
  titleTemplate: '%s | VueSeoFriendlySpaTemplate',
  meta: [
    {
      property: 'og:title',
      content: 'Home',
      vmid: 'og:title'
    },
    {
      property: 'og:description',
      content: 'Home page description - limit of 160 characters (try for 150-155).',
      vmid: 'og:description'
    },
    {
      name: 'description',
      content: 'Home page description - limit of 160 characters (try for 150-155).'
    }
  ]
};

// About.vue
export const MetaInfoAbout: MetaInfo = {
  title: 'About',
  titleTemplate: '%s | VueSeoFriendlySpaTemplate',
  meta: [
    {
      property: 'og:title',
      content: 'About',
      vmid: 'og:title'
    },
    {
      property: 'og:description',
      content: 'About page description - limit of 160 characters (try for 150-155).',
      vmid: 'og:description'
    },
    {
      name: 'description',
      content: 'About page description - limit of 160 characters (try for 150-155).'
    }
  ]
};