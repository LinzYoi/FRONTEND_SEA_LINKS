import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      { path: '', component: () => import('@/pages/index.vue') },
      { path: 'sign-in', component: () => import('@/pages/sign-in.vue') },
      { path: 'sign-up', component: () => import('@/pages/sign-up.vue') },
    ],
  },
  {
    path: '/sea-links',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [      
      { path: 'menu/home', component: () => import('@/pages/menu/home.vue') },
      { path: 'menu/profile', component: () => import('@/pages/menu/profile.vue') },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
