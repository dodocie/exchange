<script lang="ts" setup>
import Stuff from "./Selector.vue";
import AsideMenu from "./AsideMenu.vue";
import Billboard from "./Billboard.vue";
import { ref, onMounted } from "vue";
import { stuff, type StuffItem } from "@/lib/jumble";

const items = ref<StuffItem[]>([]);
const onSearch = () => {};
const onSelect = () => {};

onMounted(() => {
  if (!items.value.length) {
    console.log('stuff', stuff)
    const len = Object.keys(stuff).reduce((arr, key) => {
      const subItems = stuff[key as keyof typeof stuff];
      subItems.forEach((v) => arr.push(v));
      return arr;
    }, [] as StuffItem[]);
    items.value = len;
  }
});
</script>

<template>
  <div class="mt-8">
    <el-container>
      <el-aside width="300px">
        <Stuff :on-search="onSearch" />
        <AsideMenu style="height: 75vh; overflow: scroll" :on-select="onSelect" />
      </el-aside>
      <el-main class="ml-4">
        <div class="mb-3" style="height: 72vh; overflow: scroll">
          <Billboard :items="items" />
        </div>
        <el-pagination
          :hide-on-single-page="true"
          layout="prev, pager, next"
          :page-size="6"
          :total="items.length"
        />
      </el-main>
    </el-container>
  </div>
</template>
