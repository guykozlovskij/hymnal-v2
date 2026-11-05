import { createRouter, createWebHistory } from 'vue-router'
import hymns from '../data/hymnal-data.json'

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
      component: () => import('../views/HymnView.vue'),
      beforeEnter: (to) => {
        const hymnNumber = Number(to.params.id)
        if (!hymns.some((hymn) => hymn.number === hymnNumber)) {
          return { name: 'not-found', replace: true }
        }
      }
    },
    {
      path: '/settings',
      component: () => import('../views/SettingsView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
