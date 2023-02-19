<script lang="ts" setup>
import { MoreFilled } from "@element-plus/icons-vue";
import type { Component } from "vue";

const props = defineProps<Activity[]>();
type Activity = {
  content: string;
  timestamp: string;
  color?: string;
  size?: "large" | "normal";
  type?: "success" | "primary" | "warning" | "info" | "danger";
  hollow?: boolean;
  icon?: Component;
};
</script>

<template>
  <el-timeline>
    <el-timeline-item
      v-for="(activity, index) in props.activities"
      :key="index"
      :icon="activity.icon"
      :type="activity.type"
      :size="activity.size"
      :color="activity.color"
      :hollow="activity.hollow"
      :timestamp="activity.timestamp"
    >
      <el-card>
        <h4>Update Github template</h4>
        <p v-text="activity.content"></p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>
