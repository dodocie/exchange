<script lang="ts" setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";

const searchName = ref("");
const searchCategory = ref("");
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"> </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
  <div class="w-3/5 mx-auto pt-4 mb-2"></div>
  <div>列表</div>
</template>
