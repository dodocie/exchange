<script lang="ts" setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";

const searchName = ref("");
const searchCategory = ref("");
</script>

<template>
  <div class="mt-2">
    <el-container>
      <el-aside width="200px">
        <el-input
          v-model="searchName"
          placeholder="请输入您要搜索的宝贝"
          class="input-with-select"
        >
          <template #append>
            <el-button :icon="Search" />
          </template>
          <template #prepend>
            <el-select v-model="searchCategory" style="width: 30px">
              <el-option label="数码" value="digital" />
              <el-option label="Order No." value="2" />
              <el-option label="Tel" value="3" />
            </el-select>
          </template>
        </el-input>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>
