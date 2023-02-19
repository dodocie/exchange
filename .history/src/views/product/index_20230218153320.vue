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
        <AsideMenu :on-select="onSelect" />
      </el-aside>
      <el-main style="height: 78vh; overflow: scroll">
        <Billboard :items="items" />
      </el-main>
    </el-container>
  </div>
</template>
