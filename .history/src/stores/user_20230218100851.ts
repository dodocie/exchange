import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('user', () => {
  const login = ref(true)
  const doubleCount = computed(() => login.value * 2)
  function increment() {
    login.value++
  }

  return { login, doubleCount, increment }
})
