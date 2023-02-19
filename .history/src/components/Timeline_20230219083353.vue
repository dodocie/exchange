<script lang="ts" setup>
import { MoreFilled } from "@element-plus/icons-vue";
import type { Component } from "vue";

const activities: Activity[] = [
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

type Activity = {
  content: string;
  timestamp: string;
  color?: string;
  size?: "large" | "small";
  type?: "success" | "primary" | "warning" | "info" | "danger";
  hollow?: boolean;
  icon?: Component;
};
</script>

<template>
  <el-timeline>
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :icon="activity.icon"
      :type="activity.type"
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
