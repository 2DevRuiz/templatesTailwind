import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard1',
      name: 'dashboard1',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/template1/dashboard.vue')
    },
    {
      path: '/dashboard2',
      name: 'dashboard2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/template1/dashboard2.vue')
    },
    {
      path: '/dashboard3',
      name: 'dashboard3',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/template1/dashboard3.vue')
    },
    {
      path: '/dashboard4',
      name: 'dashboard4',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/template1/dashboard4.vue')
    },
    {
      path: '/dashboard5',
      name: 'dashboard5',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/template1/dashboard5.vue')
    },
    {
      path: '/dashboard6',
      name: 'dashboard6',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/template1/dashboard6.vue')
    },
    {
      path: '/dashboard7',
      name: 'dashboard7',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/template2/dash1.vue')
    },
    {
      path: '/dashboard8',
      name: 'dashboard8',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/template2/dash2.vue')
    },
    {
      path: '/dashboard5',
      name: 'dashboard5',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/template1/dashboard5.vue')
    },
    {
      path: '/dashboard5',
      name: 'dashboard5',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/template1/dashboard5.vue')
    },
    {
      path: '/dashboard5',
      name: 'dashboard5',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/template1/dashboard5.vue')
    },
    {
      path: '/dashboard5',
      name: 'dashboard5',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/template1/dashboard5.vue')
    },
    {
      path: '/dashboard5',
      name: 'dashboard5',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/template1/dashboard5.vue')
    },
    {
      path: '/dashboard5',
      name: 'dashboard5',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/template1/dashboard5.vue')
    }
  ]
})

export default router
