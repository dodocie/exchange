<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ViewNames } from '@/router'
import { House, Shop } from "@element-plus/icons-vue";
import {usePageStore} from '@/stores/page';

const router = useRouter();
const {currPage, updatePage} = usePageStore()

const handleSelect = (key: string): void => {
  router.push({name: key});
  updatePage(key as ViewNames)
};
</script>

<template>
  <el-menu
    :default-active="currPage"
    class="el-menu-demo items-center fixed top-0 left-0 w-screen z-30"
    style="height: 8vh; max-height: 50px"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <div><img class="w-28 pl-4" src="@/assets/images/logo.jpg" alt="" /></div>
    <div class="grow" />
    <el-menu-item :index="ViewNames.HOME">
      <template #title>
        <el-icon><House /></el-icon>
        <span>首页</span>
      </template>
    </el-menu-item>
    <el-menu-item :index="ViewNames.PROD">
      <template #title>
        <el-icon><Shop /></el-icon>
        <span>物品</span>
      </template>
    </el-menu-item>
    <el-menu-item :index="ViewNames.PROFILE">
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
