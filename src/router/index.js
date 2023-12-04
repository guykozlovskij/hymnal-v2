import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
      component: () => import('../views/NewHymns.vue')
    }
  ]
})

export default router
