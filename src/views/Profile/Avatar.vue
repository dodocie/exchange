<script lang="ts" setup>
import { useUserStore } from "@/stores/user";

const { profile } = useUserStore();
const errorHandler = () => true;
</script>

<template>
  <el-result :title="profile.nickname" sub-title="此人很懒，什么都没留下">
    <template #icon>
      <el-avatar :size="200" :src="profile.avatar" @error="errorHandler"> </el-avatar>
    </template>
    <template #extra>
      <el-button type="primary">编辑资料</el-button>
    </template>
  </el-result>
</template>
