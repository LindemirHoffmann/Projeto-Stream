import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/index.vue'
import SeriesView from '../views/Series/index.vue'
import MovieView from '../views/Movies/index.vue'

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
    }
  ]
})

export default router
