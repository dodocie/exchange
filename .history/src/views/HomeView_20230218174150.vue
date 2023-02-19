<script setup lang="ts">
import { useLoginStore } from "@/stores/user";
import { useRouter } from "vue-router";

const router = useRouter();
const { enrolled } = useLoginStore();

const joinNow = () => {
  const query = {};
  if (!enrolled) {
    router.push({ name: "login", query: { action: "post" });
  }
};
</script>

<template>
  <div class="w-3/4 h-full mx-auto flex items-center">
    <section class="mx-auto text-center">
      <dl class="mx-auto text-center text-4xl mb-2">
        <dt class="leading-loose">欢迎来到物品交换平台！</dt>
        <dd class="text-3xl leading-normal">
          在这里，你可以交换闲置的物品，换取你想要的物品。<br />
          无需花费任何金钱，只需将你不需要的物品换成你需要的物品。<br />
          加入我们，开启绿色、环保、健康的生活方式吧。<br />
        </dd>
      </dl>
      <el-button color="#626aef" size="large" @click="joinNow">现在发布</el-button>
    </section>
  </div>
</template>
