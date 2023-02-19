import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('user', () => {
  const enroll = ref(true)
  function login() {
    enroll.value = true
  }
  function logout(){
    enroll.value = false
  }
  return { enroll, login, logout }
})
