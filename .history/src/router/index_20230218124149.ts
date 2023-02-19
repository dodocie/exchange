import type { ValuesOfType } from './../utils/types';
import { createRouter, createWebHistory, useRouter, type LocationQueryRaw } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Login from '@/views/Login.vue'
import Product from '@/views/product/Product.vue'

export const enum ViewNames {
  HOME = "home",
  PROD = "product",
  LOGIN = "login",
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ViewNames.HOME,
      component: Home
    },
    {
      path: '/login',
      name: ViewNames.LOGIN,
      component: Login
    },
    {
      path: '/product',
      name: ViewNames.PROD,
      component: Product
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

export type Views = ValuesOfType<typeof ViewNames>;

