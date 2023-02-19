<script lang="ts" setup>
const errorHandler = () => true;
</script>

<template>
  <div class="demo-type">
    <el-avatar :size="60" src="https://empty" @error="errorHandler">
      <img src="@/assets/images/avatar.jpg" />
    </el-avatar>
  </div>
</template>
