<script lang="ts" setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";

const searchName = ref("");
const searchCategory = ref("");
</script>

<template>
  <div>
    <el-input v-model="searchName" placeholder="Please input" class="input-with-select">
      <template #prepend>
        <el-button :icon="Search" />
      </template>
      <template #append>
        <el-select v-model="searchCategory" placeholder="Select" style="width: 115px">
          <el-option label="Restaurant" value="1" />
          <el-option label="Order No." value="2" />
          <el-option label="Tel" value="3" />
        </el-select>
      </template>
    </el-input>
  </div>
</template>
