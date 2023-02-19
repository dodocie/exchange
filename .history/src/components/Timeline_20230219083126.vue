<script lang="ts" setup>
import { MoreFilled } from "@element-plus/icons-vue";

const activities = [
  {
    content: "Custom icon",
    timestamp: "2018-04-12 20:46",
    size: "large",
    type: "primary",
    icon: MoreFilled,
  },
  {
    content: "Custom color",
    timestamp: "2018-04-03 20:46",
    color: "#0bbd87",
  },
  {
    content: "Custom size",
    timestamp: "2018-04-03 20:46",
    type: "primary",
    size: "large",
  },
  {
    content: "Custom hollow",
    timestamp: "2018-04-03 20:46",
    type: "primary",
    hollow: true,
  },
  {
    content: "Default node",
    timestamp: "2018-04-03 20:46",
    type: "primary",
  },
];
</script>

<template>
  <el-timeline>
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :icon="activity.icon"
      :type="activity.type"
      :color="activity.color"
      :size="activity.size"
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
