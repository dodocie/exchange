<script lang="ts" setup>
import { watch, defineExpose, defineComponent } from 'vue'
import { useCountdown } from './useCountdown';

const props = defineProps<{time: number}>()
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()
</script>