<script lang="ts" setup>
import { watch, defineExpose, computed } from "vue";
import { useCountdown, type CurrentTime } from "./useCountdown";

const props = defineProps<{ time: number }>();
const emit = defineEmits<{
  (e: "change", current: CurrentTime): void;
  (e: "finish"): void;
}>();

const { start, pause, reset, current } = useCountdown({
  time: +props.time,
  onChange: (current) => emit("change", current),
  onFinish: () => emit("finish"),
});

const timeText = computed(() => {
  const remain = (['hours', 'minutes', 'seconds'] as const)
  .filter(v => current.value[v] > 0)
  .map(v => current.value[v]).join(':')
  return `${remain}s`
})

const resetTime = () => {
  reset(+props.time);
};

watch(() => props.time, resetTime, { immediate: true });
defineExpose({
  start
});
</script>

<template>
  <div id="role" class="w-24" v-text="timeText"></div>
</template>
