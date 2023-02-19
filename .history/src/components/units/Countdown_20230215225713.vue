<script lang="ts" setup>
import { watch, defineExpose, computed } from "vue";
import { useCountdown, type CurrentTime } from "./useCountdown";

const props = defineProps<{ time: number }>();
const emit = defineEmits<{
  (e: "finish"): void;
}>();

const { start, reset, current } = useCountdown({
  time: +props.time,
  onFinish: () => emit("finish"),
});

const timeText = computed(() => {
  const remain = (['seconds'] as const)//可再扩展。
  .map(v => current.value[v]).join(':')
  return `重试 ${remain}s`
})

const resetTime = () => {
  reset(+props.time);
};

watch(() => props.time, resetTime, { immediate: true });
defineExpose({
  start,
  reset
});
</script>

<template>
  <span id="role" v-text="timeText"></span>
</template>
