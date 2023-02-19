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
  const uid = Math.random().toString(36).slice(-8)
  const profile = ref({
    nickname: uid,
    uid,
    avatar,
  })
  const updateNickname = (customName: string) => {
    profile.value.nickname = customName
  }

  return {profile, updateNickname}
}

const useShelf = () => {
  const publish = ref<string[]>([])
  const likes = ref<string[]>([])
  const footprint = ref<string[]>([])
  return {publish, likes, footprint}
}

export const useUserStore = defineStore('user', () => {
  const login = useLogin()
  const userInfo = useProfile()
  const shelf = useShelf()

  return { ...login, ...userInfo, ...shelf }
})