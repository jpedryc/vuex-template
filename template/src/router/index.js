import Vue from 'vue'
import Router from 'vue-router'
import GeneralView from '../views/generalView.vue'
import Dashboard from '../components/dashboard/dashboard.vue'
import Login from '../components/landing/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // ROUTE
    {
      path: '/',
      name: 'GeneralView',
      component: GeneralView,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '/',
          name: 'Dashboard',
          component: Dashboard
        }
      ]
    },
    // LOGIN
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requiresAuth: false
      }
    }
  ]
})
