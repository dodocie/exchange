<script setup lang="ts">
import Avatar from "./Avatar.vue";
</script>

<template>
  <el-result title="404" sub-title="Sorry, request error">
    <template #icon>
      <el-image
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      />
    </template>
    <template #extra>
      <el-button type="primary">Back</el-button>
    </template>
  </el-result>
  <div class="mt-4 pt-16">
    <el-container>
      <el-aside width="400px" class="pl-20">
        <Avatar />
      </el-aside>
    </el-container>
  </div>
</template>
