<script lang="ts" setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";

const searchName = ref("");
const searchCategory = ref("");
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-input
          v-model="searchName"
          size="large"
          placeholder="请输入您要搜索的宝贝"
          class="input-with-select"
        >
          <template #prepend>
            <el-button :icon="Search" />
          </template>
          <template #append>
            <el-select
              v-model="searchCategory"
              size="large"
              placeholder="Select"
              style="width: 115px"
            >
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
