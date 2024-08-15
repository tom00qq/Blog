import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('../views/Article.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('../views/Category.vue')
    }
  ]
});

export default router;
