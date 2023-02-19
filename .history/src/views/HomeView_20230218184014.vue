<script setup lang="ts">
import { useLoginStore } from "@/stores/user";
import { useRouter } from "vue-router";

const router = useRouter();
const { enrolled } = useLoginStore();

const joinNow = () => {
  const query = {};
  if (!enrolled) {
    router.push({ name: "login", query: { redirect: "post" } });
    return;
  }
  router.push("post");
};
</script>

<template>
  <div class="w-3/4 h-full mx-auto flex items-center">
    <section class="mx-auto text-center">
      <dl class="mx-auto text-center text-4xl mb-2">
        <dt class="leading-loose">欢迎来到物品交换平台！</dt>
        <dd class="text-3xl leading-normal">
          把邻居们聚在一起。买家和卖家之间不需要发货或在线交易。<br />
          无需花费任何金钱，只需将你不需要的物品换成你需要的物品。<br />
          加入我们，开启绿色、环保、健康的生活方式吧。<br />
        </dd>
      </dl>
      <el-button color="#626aef" size="large" @click="joinNow">现在发布</el-button>
    </section>
  </div>
</template>
