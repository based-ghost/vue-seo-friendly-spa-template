import { About, Home, NotFound } from '@/views';
import { createRouter, createWebHistory } from 'vue-router';

import type { RouteRecordRaw } from 'vue-router';

const DESC_SUFFIX = 'description - length <= 160 chars.';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      transition: 'fade',
      title: 'Home',
      description: `Home ${DESC_SUFFIX}`
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      transition: 'fade',
      title: 'About',
      description: `About ${DESC_SUFFIX}`
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
];

function scrollBehavior() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ left: 0, top: 0 });
    }, 250);
  });
}

// Create new instance of vue-router
const router = createRouter({
  routes,
  scrollBehavior,
  linkExactActiveClass: 'is-active',
  history: createWebHistory(process.env.BASE_URL)
});

export default router;