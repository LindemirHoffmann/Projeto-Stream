import type { App } from "vue";

import Menubar from "primevue/menubar"; 
import Card from "primevue/card"
import DataView from 'primevue/dataview'
import Paginator from "primevue/paginator";

export default function setPrimeVue(app:App){
    app.component('Menu-bar', Menubar)
    app.component('Card', Card)
    app.component('data-vew', DataView)
    app.component('paginator', Paginator)
}