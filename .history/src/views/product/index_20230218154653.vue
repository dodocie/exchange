<script lang="ts" setup>
import Stuff from "./Selector.vue";
import AsideMenu from "./AsideMenu.vue";
import Billboard from "./Billboard.vue";
import { ref } from "vue";

const items = ref([]);
const onSearch = () => {};
const onSelect = () => {};
</script>

<template>
  <div class="mt-8">
    <el-container>
      <el-aside width="300px">
        <Stuff :on-search="onSearch" />
        <AsideMenu style="height: 75vh; overflow: scroll" :on-select="onSelect" />
      </el-aside>
      <el-main class="ml-4">
        <div style="height: 80vh; overflow: scroll">
          <Billboard :items="items" />
        </div>
        <el-pagination layout="prev, pager, next" :total="items.length" />
      </el-main>
    </el-container>
  </div>
</template>
