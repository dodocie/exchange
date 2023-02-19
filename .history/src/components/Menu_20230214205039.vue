<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo items-center"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="logo" class="">
      <img class="w-32" src="@/assets/images/logo.jpg" alt="">
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="Processing">Processing Center</el-menu-item>
    <el-sub-menu index="Workspace">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="avatar">
      <div class="h-14 flex items-center">
        <el-avatar shape="square" :size="'small'" :src="'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'" />
      </div>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ViewNames, type Views } from '@/components/HomeBox';

const emit = defineEmits(['onSelect'])
const activeIndex = ref('Processing')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
  emit('onSelect', {keyPath})
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
