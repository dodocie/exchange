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

  return (['days', 'hours', 'minutes', 'seconds']as const).filter(v=>current.value[v] > 0).map
})

const resetTime = () => {
  reset(+props.time);
};

watch(() => props.time, resetTime, { immediate: true });
defineExpose({
  start,
  pause,
  reset: resetTime,
});
</script>

<template>
  <div id="role" v-text="current.seconds"></div>
</template>
