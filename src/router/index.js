import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('../views/HymnIndex.vue')
    },
    {
      path: '/hymns/:id',
      component: () => import('../views/HymnView.vue')
    },
    {
      path: '/hymns/n/:id',
      component: () => import('../views/NewHymnView.vue')
    },
    {
      path: '/new-hymns',
      component: () => import('../views/NewHymnsList.vue')
    }
  ]
})

export default router
