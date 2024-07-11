import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import setPrimeVue from './modules/prime.modules'
import setComponent from './modules/components.module'

const app = createApp(App);
app.use(createPinia())
app.use(router)
app.use(PrimeVue)
setPrimeVue(app)
setComponent(app)
app.mount('#app')
