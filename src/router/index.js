import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/hymns/:id',
      component: () => import('../views/HymnView.vue')
    },
    {
      path: '/settings',
      component: () => import('../views/SettingsView.vue')
    }
  ]
})

export default router
