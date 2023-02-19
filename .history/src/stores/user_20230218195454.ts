import { ref } from 'vue'
import { defineStore } from 'pinia'

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
    avatar: '',
  })

  return {profile}
}

export const useUserStore = defineStore('user', () => {
  const login = useLogin()
  const profile = useProfile()

  return { ...login }
})