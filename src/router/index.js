import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AltHomeView from '../views/AltHomeView.vue'
import store from "../store"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:pathMatch(.*)*', component: () => import('../views/PathNotFoundView.vue') },
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
      path: '/projects',
      name: 'projects',

      component: () => import('../views/AllProjects.vue')
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
      path: '/events',
      name: 'events',
      
      component: () => import('../views/EventsView.vue')
    },
    {
      path: '/resources',
      name: 'resources',
      
      component: () => import('../views/StudentResourcesView.vue')
    },
    // TODO: lock this route to logged in users
    {
      path: '/create',
      name: 'create',
      
      component: () => import('../views/CreateView.vue'),
      beforeEnter: ((to) => {
        if (store.getters.user.loggedIn === false) {
          alert("Log-in with your netId!")
          return {
            name: 'home',
          } 
        }

        return true
      }),
    },
    {
      path: '/test',
      name: 'test',

      component: () => import('../views/TestView.vue')
    },
  ]
})

export default router
