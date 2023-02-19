<script setup lang="ts">
import { RouterView } from "vue-router";
import Menu from "@/components/Menu.vue";
import { onMounted } from 'vue';
import { useProductStore } from './stores/products';
import {genTestDataOnload} from '@/lib/jumble';

const { useProductState } = useProductStore()

onMounted(() => {
  useProductState(genTestDataOnload())
})

</script>

<template>
  <Menu />
  <img class="absolute" src="https://tailwindui.com/img/beams-home@95.jpg" alt="" />
  <RouterView />
</template>

<style scoped></style>
