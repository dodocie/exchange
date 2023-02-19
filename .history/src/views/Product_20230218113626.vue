<script lang="ts" setup>
import { ref } from "vue";
import { Search, ArrowDown, ArrowUp } from "@element-plus/icons-vue";

const searchName = ref("");
const searchCategory = ref("");
</script>

<template>
  <div class="mt-2">
    <el-container>
      <el-aside width="200px">
        <el-input
          v-model="searchName"
          placeholder="请输入"
          class="input-with-select"
          :suffix-icon="Search"
          :preffix-icon="Select"
        >
        </el-input>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>
