import Vue from 'vue'
import Router from 'vue-router'

/* Route Modules */
import Index from "../pages/Index"
import HomeRoute from './routes/home.route'


Vue.use(Router)

export const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '',
      // redirectTo: '/home',
      name: 'Index',
      component: import('../pages/Index').then(m => m.default),
      children: [
        HomeRoute,
      ]
    }
  ]
})
