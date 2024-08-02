import type { App } from 'vue'
import Card from '@/components/card.vue'
import NavBar from '@/components/nav-bar.vue'

export function setComponent(app: App) {
  app.component('navbar', NavBar)
  app.component('card', Card)
}
