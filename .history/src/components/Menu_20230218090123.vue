<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo items-center fixed top-0 left-0 px-6 w-screen z-30"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <!-- <el-menu-item disabled class=""> </el-menu-item> -->
    <div><img class="w-32" src="@/assets/images/logo.jpg" alt="" /></div>
    <div class="flex-grow" />
    <el-menu-item :index="ViewNames.HOME">首页</el-menu-item>
    <el-sub-menu :index="ViewNames.PROD">
      <template #title>物品</template>
      <el-menu-item index="2-1">数码</el-menu-item>
      <el-menu-item index="2-2">小家电</el-menu-item>
      <el-menu-item index="2-3">饰品</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>书籍</template>
        <el-menu-item index="2-4-1">小说</el-menu-item>
        <el-menu-item index="2-4-2">杂志</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item :index="ViewNames.LOGIN">
      <div class="h-14 flex items-center">
        <el-avatar
          shape="square"
          :size="'small'"
          :src="'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'"
        />
      </div>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import {type Views, ViewNames} from '@/router'

const router = useRouter();
const activeIndex = ref("Processing");

const handleSelect = (key: string, keyPath: Views) => {
  console.log(key, keyPath);
  const [routeName] = keyPath;
  router.push({name: routeName});
};
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
