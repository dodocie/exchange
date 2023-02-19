<script lang="ts" setup>
import Stuff from "./Selector.vue";
import AsideMenu from "./AsideMenu.vue";
import Billboard from "./Billboard.vue";
import { ref, onMounted } from "vue";
import { stuff, type StuffItem } from "@/lib/jumble";

const items = ref<StuffItem[]>([]);
const onSearch = () => {};
const onSelect = () => {};

const PAGESIZE = 6
const currPage = ref(1)
const setCurrPage = (page: number) => {
  currPage.value = page
}

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
  <div class="mt-4">
    <el-container>
      <el-aside width="300px">
        <Stuff :on-search="onSearch" />
        <AsideMenu style="height: 75vh; overflow: scroll" :on-select="onSelect" />
      </el-aside>
      <el-main class="ml-4" style="padding-top: 0">
        <div class="mb-3" style="height: 76vh; overflow: scroll">
          <Billboard :items="items.slice(PAGESIZE * currPage - 6, PAGESIZE * currPage)" />
        </div>
        <el-pagination
          class="justify-items-center"
          :hide-on-single-page="true"
          layout="prev, pager, next"
          :page-size="PAGESIZE"
          :total="items.length"
          @current-change="setCurrPage"
        />
      </el-main>
    </el-container>
  </div>
</template>
