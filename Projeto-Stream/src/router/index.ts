import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SeriesView from '@/views/SeriesView/SeriesView.vue'
import FilmesView from '../views/FilmesView.vue/FilmesView.vue'

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
      path: '/filmes',
      name: 'filmes',
      component: FilmesView
    }
  ]
})

export default router
