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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/opportunities/filmmakers',
      name: 'opportunitiesFilmmakers',

      component: () => import('../views/OpportunitiesFilmmakersView.vue')
    },
    {
      path: '/opportunities/actors',
      name: 'opportunitiesActors',

      component: () => import('../views/OpportunitiesActorsView.vue')
    },
    {
      path: '/screenings',
      name: 'screenings',
      
      component: () => import('../views/ScreeningsView.vue')
    },
    {
      path: '/create',
      name: 'create',
      
      component: () => import('../views/CreateView.vue')
    },
    {
      path: '/test',
      name: 'test',

      component: () => import('../views/TestView.vue')
    },
  ]
})

export default router
