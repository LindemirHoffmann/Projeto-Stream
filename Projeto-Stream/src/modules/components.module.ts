import type { App } from "vue";

import Menubar from "primevue/menubar"; 

export default function setComponent(app:App){
    app.component('menu-bar', Menubar)
}