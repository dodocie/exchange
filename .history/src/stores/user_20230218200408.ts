import { ref } from 'vue'
import { defineStore } from 'pinia'

import avatar from '@/assets/images/avatar.jpg'

const useLogin = () => {
  const enrolled = ref(false)
  function login() {
    enrolled.value = true
  }
  function logout(){
    enrolled.value = false
  }

  return { enrolled, login, logout }
}

const useProfile = () => {
  const profile = ref({
    nickname: Math.random().toString(36).slice(-8),
    avatar: '@/assets/images/avatar.jpg',
  })

  return {profile}
}

export const useUserStore = defineStore('user', () => {
  const login = useLogin()
  const userInfo = useProfile()

  return { ...login, ...userInfo }
})