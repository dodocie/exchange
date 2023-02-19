<script lang="ts" setup>
import type { StuffItem } from "@/lib/jumble";

const props = defineProps<{ items: StuffItem[] }>();
</script>

<template>
  <el-space :size="25" wrap>
    <el-card
      v-for="(o, index) in props.items"
      :key="o"
      :body-style="{ padding: '0px' }"
      style="width: 280px"
    >
      <img src="@/assets/images/bbb.jpg" class="image" />
      <div style="padding: 10px 14px">
        <span>Yummy hamburger</span>
        <div class="bottom">
          <span>描述或标签</span>
          <el-button text class="button">Operating</el-button>
        </div>
      </div>
    </el-card>
  </el-space>
</template>
<style scoped>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 5px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
