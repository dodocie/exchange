<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps<{
  selectorHandler: (key: string) => void;
}>();

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
  props.selectorHandler(key)
};
</script>
<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">我的物品</el-menu-item>
    <el-menu-item index="2">收藏夹</el-menu-item>
  </el-menu>
</template>
