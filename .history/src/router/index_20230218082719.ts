import { ValuesOfType } from './../utils/types';
import { createRouter, createWebHistory, useRouter, type LocationQueryRaw } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Login from '@/views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TheWelcome.vue')
    }
  ]
})

export default router

const enum ViewNames {
  HOME = "home",
  PROD = "production",
  LOGIN = "login",
}

type Views = ValuesOfType<typeof ViewNames>;

