import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import EventLayout from '../views/event/Layout.vue'
import EventDetails from '../views/event/Details.vue'
import EventRegister from '../views/event/Register.vue'
import EventEdit from '../views/event/Edit.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import NetworkError from '../views/NetworkError.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: route => ({page: parseInt(route.query.page) || 1})
  },
  {
    path: '/events/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    children: [
      {
        path: '', //toma el id del elemento padre que es el de más arriba
        name: 'EventDetails',
        component: EventDetails
      },
      {
        path: 'register',
        name: 'EventRegister',
        component: EventRegister
      },
      
      {
        path: 'edit',
        name: 'EventEdit',
        component: EventEdit
      },
    ]
  },
 {
path: '/event/:afterEvent(.*)',
redirect: to => {
  return{ path: '/events/' + to.params.afterEvent } //captura todo lo que haya después de Event.
}

 },
  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    path: '/:catchAll(.*)', //rutas que no coincidan con una ruta existente, esto no funcionara con ids de eventos que no existen.
    name: 'NotFound',
    component: NotFound
  },

  {
    path: '/404/:resource', //usaremos /404/event
    name: '404Resource',
    component: NotFound,
    props: true

  },

  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError,
    props: true

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
