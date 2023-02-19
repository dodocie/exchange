<script lang="ts" setup>
import Stuff from "@/components/selector/stuff.vue";

const onSearch = () => {};
</script>

<template>
  <div class="mt-8">
    <el-container>
      <el-aside width="300px">
        <Stuff />
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>
