<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menu from '@/components/Menu.vue'
import { ref } from 'vue';
import { ViewNames, type Views } from './components/HomeBox';

const currView = ref(ViewNames.HOME)
const useViewState = ({keyPath}: {keyPath: [Views, number]}) => {
  currView.value = view
}

</script>

<template>
  <Menu @onSelect="useViewState" />
  <img class="absolute" src="https://tailwindui.com/img/beams-home@95.jpg" alt="" />
  <RouterView />
</template>

<style scoped>

</style>
