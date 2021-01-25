import Vue from 'vue'
import VueRouter from './my-router'
import Home from '@/components/Home'
import About from '@/components/About'
import AboutChildOne from '@/components/AboutChildOne'
import AboutChildTwo from '@/components/AboutChildTwo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    children: [
      {
        path: 'one',
        name: 'AboutChildOne',
        component: AboutChildOne
      },
      {
        path: 'two',
        name: 'AboutChildTwo',
        component: AboutChildTwo
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
