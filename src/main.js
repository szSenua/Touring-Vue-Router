import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GStore from './store'
import 'nprogress/nprogress.css'

//crear un objeto reactivo global para implementarlo en múltiples componentes.


createApp(App)
  .use(router)
  .provide('GStore' , GStore) // String (Key , Value) Hace que nuestro objeto esté disponble para usarlos en componentes de nuestra app (inyección)
  .mount('#app')
