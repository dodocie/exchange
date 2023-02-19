<script lang="ts" setup>
import { genStuffMenu } from "@/lib/jumble";

const props = defineProps<{ onSelect: (value: string[]) => void }>();
const asideMenu = genStuffMenu();

const handleSelect = (key: string, keyPath: string[]) => {
  props.onSelect(keyPath);
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
        <span v-text="menuItem.label"></span>
      </template>
      <div v-if="menuItem.subMenuType === 'item' && menuItem.children?.length">
        <el-menu-item
          v-for="(subItem, j) in menuItem.children"
          :key="`${i}_${j}`"
          :index="subItem.value"
          v-text="subItem.label"
        ></el-menu-item>
      </div>
      <div v-if="menuItem.subMenuType === 'group' && menuItem.children?.length">
        <el-menu-item-group
          v-for="(subItem, j) in menuItem.children"
          :key="`${i}_${j}`"
          :index="subItem.value"
          :title="subItem.label"
        >
          <el-menu-item
            v-for="(subSubItem, k) in subItem.children"
            :key="`${i}_${j}_${k}`"
            :index="subSubItem.value"
            v-text="subSubItem.label"
          ></el-menu-item>
        </el-menu-item-group>
      </div>
    </el-sub-menu>
  </el-menu>
</template>
