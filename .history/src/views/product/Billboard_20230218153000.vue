<script lang="ts" setup>
import { ref } from "vue";

const currentDate = ref(new Date());
</script>

<template>
  <el-space :size="80" wrap>
    <el-card
      v-for="(o, index) in 10"
      :key="o"
      :body-style="{ padding: '0px' }"
      style="width: 280px"
    >
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="image"
      />
      <div style="padding: 14px">
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
  margin-top: 13px;
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
