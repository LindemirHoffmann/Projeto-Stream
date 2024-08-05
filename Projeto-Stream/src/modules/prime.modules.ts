import Menubar from 'primevue/menubar'
import type { App } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Paginator from 'primevue/paginator'
import Toast from 'primevue/toast'

export function setPrimeVueComponent(app: App) {
  app.component('prime-menubar', Menubar)
  app.component('prime-card', Card)
  app.component('prime-button', Button)
  app.component('prime-paginator', Paginator)
  app.component('prime-toast', Toast)
}