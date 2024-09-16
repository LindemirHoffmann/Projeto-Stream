import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/index.vue'
import SeriesView from '../views/Series/index.vue'
import MovieView from '../views/Movies/index.vue'
import FavoritesView from '../views/Favorites/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/series',
      name: 'series',
      component: SeriesView
    },
    {
      path: '/movie',
      name: 'movie',
      component: MovieView
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView
    },
    {
      path: '/details/:type/:id',
      name: 'details',
      component: () => import('../views/Home/homeDetail.vue')
    }
  ]
})

export default router
