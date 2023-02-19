<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menu from '@/components/Menu.vue'
import { ref } from 'vue';
import { ViewNames } from './components/HomeBox';

const currView = ref(ViewNames.HOME)
const useViewState = () => {
  
}

</script>

<template>
  <Menu />
  <img class="absolute" src="https://tailwindui.com/img/beams-home@95.jpg" alt="" />
  <RouterView />
</template>

<style scoped>

</style>
