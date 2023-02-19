<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { usePageStore } from "@/stores/page";
import { useRouter } from "vue-router";
import { ViewNames } from '@/router';

const router = useRouter();
const { enrolled } = useUserStore();
const { updatePage} = usePageStore()

const joinNow = () => {
  if (!enrolled) {
    updatePage(ViewNames.LOGIN)
    router.push({ name: "login", query: { redirect: "post" } });
    return;
  }
  router.push("post");
  updatePage(ViewNames.POST)
};
</script>

<template>
  <div class="w-3/4 h-full mx-auto flex items-center">
    <section class="mx-auto text-center">
      <dl class="mx-auto text-center mb-3">
        <dt class="leading-loose text-2xl">欢迎来到物品交换平台！</dt>
        <dd class="text-2xl leading-relaxed">
          在这里，你可以交换闲置的物品，换取你想要的物品。<br />
          <p class="leading-loose">
            易淘云把邻居们聚在一起。<span class="text-3xl">不需要发货或在线交易。</span>
          </p>
          无需花费任何金钱，只需将你不需要的物品换成你需要的物品。<br />
          加入我们，开启绿色、环保、健康的生活方式吧。<br />
        </dd>
      </dl>
      <el-button color="#626aef" size="large" @click="joinNow">现在发布</el-button>
    </section>
  </div>
</template>
