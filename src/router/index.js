import Vue from 'vue'
import Router, { createWebHistory } from 'vue-router'
import Main from '@/components/Main'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
  { 
    path: '/',
    component: Main 
  },
  { 
    path: '/about/', 
    component: About
  }
  ]
})
