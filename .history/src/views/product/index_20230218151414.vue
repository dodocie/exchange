<script lang="ts" setup>
import Stuff from "./Selector.vue";
import AsideMenu from "./AsideMenu.vue";
import Billboard from "./Billboard.vue";

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
      <el-main>
        <Billboard :on-select="onSelect" />
      </el-main>
    </el-container>
  </div>
</template>
