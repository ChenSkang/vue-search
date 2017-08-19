import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/main'
import introduction from '@/pages/introduction/introduction'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/introduction',
      component: introduction
    }
  ]
})
