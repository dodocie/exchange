<script lang="ts" setup>
import type { StuffItem } from "@/lib/jumble";
import { ArrowRight } from "@element-plus/icons-vue";

const props = defineProps<{ items: StuffItem[] }>();
</script>

<template>
  <el-space :size="25" wrap>
    <el-card
      v-for="(item, index) in props.items"
      :key="item.id"
      :body-style="{ padding: '0px' }"
      style="width: 280px"
    >
      <img src="@/assets/images/bbb.jpg" class="image" />
      <div style="padding: 10px 14px">
        <span v-text="item.descr"></span>
        <div class="bottom">
          <span v-text="item.name"></span>
          <el-button text type="primary" class="button"
            >查看详情 <el-icon> <ArrowRight /> </el-icon
          ></el-button>
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
