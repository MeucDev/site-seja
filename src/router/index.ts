import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Congresso2022 from '../views/Congresso2022.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/congresso-de-jovens',
    name: 'Congresso de Jovens',
    component: Congresso2022
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
