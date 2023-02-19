<script lang="ts" setup>
import { genStuffMenu } from "@/lib/jumble";

const props = defineProps<{ onSelect: (value: string) => void }>();
const asideMenu = genStuffMenu();

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
  props.onSelect(key);
};
</script>

<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo mt-4"
    background-color="transparent"
    @select="handleSelect"
  >
    <el-sub-menu v-for="(menuItem, i) in asideMenu" :key="i" :index="menuItem.value">
      <template #title>
        <span v-text="menuItem.title"></span>
      </template>
      <div v-if="menuItem.subMenuType === 'item' && menuItem.subMenu?.length">
        <el-menu-item
          v-for="(subItem, j) in menuItem.subMenu"
          :key="`${i}_${j}`"
          :index="subItem.value"
          v-text="subItem.title"
        ></el-menu-item>
      </div>
      <div v-if="menuItem.subMenuType === 'group' && menuItem.subMenu?.length">
        <el-menu-item-group
          v-for="(subItem, j) in menuItem.subMenu"
          :key="`${i}_${j}`"
          :index="subItem.value"
          :title="subItem.title"
        >
          <el-menu-item
            v-for="(subSubItem, k) in subItem.subMenu"
            :key="`${i}_${j}_${k}`"
            :index="subSubItem.value"
            v-text="subSubItem.title"
          ></el-menu-item>
        </el-menu-item-group>
      </div>
    </el-sub-menu>
  </el-menu>
</template>
