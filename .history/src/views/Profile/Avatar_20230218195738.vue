<script lang="ts" setup>
import { useUserStore } from "@/stores/user";

const { profile } = useUserStore();
const errorHandler = () => true;
</script>

<template>
  <el-result :title="profile.nickname" sub-title="Sorry, request error">
    <template #icon>
      <el-avatar :size="200" :src="require(profile.avatar)" @error="errorHandler">
      </el-avatar>
    </template>
    <template #extra>
      <el-button type="primary">编辑资料</el-button>
    </template>
  </el-result>
</template>
