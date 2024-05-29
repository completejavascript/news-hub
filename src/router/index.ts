import {createRouter, createWebHistory} from 'vue-router';

import NewsLayout from '../layouts/NewsLayout.vue';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: NewsLayout,
      children: [
        {
          path: '',
          component: HomeView,
        },
        {
          path: 'category/:category',
          component: () => import('../views/CategoryNewsView.vue'),
        },
        {
          path: 'source/:source',
          component: () => import('../views/SourceNewsView.vue'),
        },
        {
          path: 'domain/:domain',
          component: () => import('../views/DomainNewsView.vue'),
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

export default router;
