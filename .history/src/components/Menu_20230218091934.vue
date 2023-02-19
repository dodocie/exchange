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

<template>
  <el-menu
    :default-active="activeIndex"
    class="w-4/5 mx-auto el-menu-demo items-center fixed top-0 left-0 right-0 px-6 z-30"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <div><img class="w-32" src="@/assets/images/logo.jpg" alt="" /></div>
    <div class="flex-grow" />
    <el-menu-item :index="ViewNames.HOME">首页</el-menu-item>
    <el-sub-menu :index="ViewNames.PROD">
      <template #title>物品</template>
      <el-sub-menu index="digital">
        <template #title>数码</template>
        <el-menu-item index="cellPhone">手机</el-menu-item>
        <el-menu-item index="laptop">电脑</el-menu-item>
        <el-menu-item index="iWatch">运动手表</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="2-2">衣物&饰品</el-menu-item>
      <el-menu-item index="2-3">办公用品</el-menu-item>
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

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
