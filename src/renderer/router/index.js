import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/next',
      name: 'next',
      component: require('@/components/Next').default
    },
    {
      path: '/setting',
      name: 'setting',
      component: require('@/components/Setting').default
    },
    {
      path: '*',
      redirect: 'home'
    }
  ]
})
