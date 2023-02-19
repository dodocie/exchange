import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('user', () => {
  const login = ref(true)
  function onLogin() {
    login.value = true
  }
  function logout(){
    login.value = false
  }
  return { login, onLogin, logout }
})
