import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
// import DataBindingClass from '../views/DataBindingClass.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'databind',
    component: DataBinding
  },
  {
    path: '/databindingClass',
    name: 'databindingClass',
    component: () => import('../views/DataBingdingClass.vue')
  },
  {
    path: '/databindingButton',
    name: 'databindingButton',
    component: () => import('../views/DataBindingButton.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
