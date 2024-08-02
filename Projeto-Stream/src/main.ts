import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Prime from 'primevue/config'

import { setPrimeVueComponent } from './modules/prime.modules'
import { setComponent } from './modules/components.module'
import router from './router/index'
import Lara from '@primevue/themes/lara'
import ToastService from 'primevue/toastservice'
import 'primeicons/primeicons.css'

const app = createApp(App)
setPrimeVueComponent(app)
setComponent(app)
app.use(router)
app.use(Prime, {
  theme: {
    preset: Lara
  }
})
app.use(ToastService)
app.mount('#app')
