import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('user', () => {
  const login = ref(true)
  function onLogin() {
    login.value = true
  }

  return { login, doubleCount, increment }
})
