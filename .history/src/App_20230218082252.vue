<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menu from '@/components/Menu.vue'
import { ref, provide } from 'vue';

const currView = ref(ViewNames.HOME)
const useViewState = ({keyPath}: {keyPath: [Views, number]}) => {
  currView.value = keyPath[0]
}
provide('currView', currView)

</script>

<template>
  <Menu />
  <img class="absolute" src="https://tailwindui.com/img/beams-home@95.jpg" alt="" />
  <RouterView />
</template>

<style scoped>

</style>
