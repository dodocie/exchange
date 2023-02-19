<script lang="ts" setup>
import Stuff from "./Selector.vue";
import AsideMenu from "./AsideMenu.vue";
import Billboard from "./Billboard.vue";
import { ref, onMounted } from "vue";
import { stuff } from "@/lib/jumble";

const items = ref([]);
const onSearch = () => {};
const onSelect = () => {};

onMounted(() => {
  if (!items.value.length) {
    const len = Object.keys(stuff).reduce((num, key) => {
      num += stuff[key as keyof typeof stuff].length;
      return num;
    }, 0);
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
        <div style="height: 72vh; overflow: scroll">
          <Billboard :items="items" />
        </div>
        <el-pagination layout="prev, pager, next" :page-size="6" :total="items.length" />
      </el-main>
    </el-container>
  </div>
</template>
