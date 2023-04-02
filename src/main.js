import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//crear un objeto reactivo global para implementarlo en múltiples componentes.
const GStore = reactive({ flashMessage: '' })

createApp(App)
  .use(store)
  .use(router)
  .provide('GStore' , GStore) // String (Key , Value) Hace que nuestro objeto esté disponble para usarlos en componentes de nuestra app (inyección)
  .mount('#app')
