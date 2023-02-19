<script lang="ts" setup>
const errorHandler = () => true;
</script>

<template>
  <el-result title="404" sub-title="Sorry, request error">
    <template #icon>
      <el-avatar :size="200" src="https://empty" @error="errorHandler">
        <img src="@/assets/images/avatar.jpg" />
      </el-avatar>
    </template>
    <template #extra>
      <el-button type="primary">Back</el-button>
    </template>
  </el-result>
</template>
