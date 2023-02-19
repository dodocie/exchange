<script lang="ts" setup>
import { watch, defineExpose, defineComponent } from 'vue'
import { useCountdown } from './useCountdown';

const props = defineProps<{time: number}>()

</script>