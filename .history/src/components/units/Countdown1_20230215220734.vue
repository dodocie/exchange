<script lang="ts" setup>
import { watch, defineExpose, defineComponent } from "vue";
import { useCountdown } from "./useCountdown";

const props = defineProps<{ time: number }>();
const emit = defineEmits<{
  (e: "change", current: number): void;
  (e: "finish"): void;
}>();

const { start, pause, reset, current } = useCountdown({
  time: +props.time,
  onChange: (current) => emit("change", current),
  onFinish: () => emit("finish"),
});

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
