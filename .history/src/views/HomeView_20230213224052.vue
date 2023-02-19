<script setup lang="ts">
import Menu from '@/components/Menu.vue'
import { ref } from 'vue'
import HomeBox from '@/components/HomeBox'

const view = ref('home')
const MenuPage = HomeBox(view.value)

</script>

<template>
  <img class="absolute" src="https://tailwindui.com/img/beams-home@95.jpg" alt="">
  <Menu />
  <main>
    
  </main>
</template>
