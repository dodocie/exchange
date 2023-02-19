<script setup lang="ts">
import Form from "../components/Form.vue";
</script>

<template>
  <main class="w-4/5 h-full mx-auto flex items-center justify-between">
    <dl class="w-4/6">
      <dt class="text-base text-slate-500 leading-loose">更节俭、更智慧、更环保</dt>
      <dt class="text-5xl text-purple-700 leading-tight">
        来易淘云，<br />以物换物更方便
      </dt>
      <dd class="mt-2.5 text-xs text-slate-400 leading-loose">
        让您的废物变成他人的珍宝，来参与变废为宝的运动<br />
        在这里，你能按品类和价位等信息筛选心仪之物，快速发布新换品，管理个人发布的换品信息。<br />
        你还等什么，快来加入换客吧。
      </dd>
    </dl>
    <Form />
  </main>
</template>
