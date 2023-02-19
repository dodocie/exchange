import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('user', () => {
  const enrolled = ref(false)
  function login() {
    enrolled.value = true
  }
  function logout(){
    enrolled.value = false
  }


  return { enrolled, login, logout }
})

export const useUserStore = defineStore('user', () => {
  const login = useLoginStore()


  return { ...login }
})