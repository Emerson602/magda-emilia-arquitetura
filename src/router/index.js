import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projects',
    name: 'projects', 
    component: function () {
      return import('../views/ProjectsView.vue')
    }
  },
  {
    path: '/about',
    name: 'about', 
    component: function () {
      return import('../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
