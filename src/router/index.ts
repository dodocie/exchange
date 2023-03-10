import { useUserStore } from './../stores/user'
import type { ValuesOfType } from './../utils/types'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Login from '@/views/Login.vue'
import Product from '@/views/product/index.vue'

export const enum ViewNames {
  HOME = 'home',
  PROD = 'product',
  DETAIL = 'detail',
  LOGIN = 'login',
  POST = 'post',
  PROFILE = 'profile',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ViewNames.HOME,
      component: Home,
    },
    {
      path: '/login',
      name: ViewNames.LOGIN,
      component: Login,
    },
    {
      path: '/product',
      name: ViewNames.PROD,
      component: Product,
    },
    {
      path: '/product/:id',
      name: ViewNames.DETAIL,
      component: () => import('../views/Detail.vue'),
    },
    {
      path: '/post',
      name: ViewNames.POST,
      component: () => import('../views/Post.vue'),
      beforeEnter: (to, form, next) => {
        const { enrolled } = useUserStore()
        if (!enrolled) {
          router.push({
            name: ViewNames.LOGIN,
            query: {
              redirect: ViewNames.POST,
            },
          })
          return
        }
        next()
      },
    },
    {
      path: '/profile',
      name: ViewNames.PROFILE,
      component: () => import('../views/Profile/index.vue'),
      beforeEnter: (to, form, next) => {
        const { enrolled } = useUserStore()
        if (!enrolled) {
          router.push({
            name: ViewNames.LOGIN,
            query: {
              redirect: ViewNames.PROFILE,
            },
          })
          return
        }
        next()
      },
    },
  ],
})

export default router

export type Views = ValuesOfType<typeof ViewNames>
