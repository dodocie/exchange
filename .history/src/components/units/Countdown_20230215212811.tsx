import { watch, computed, defineComponent, type ExtractPropTypes } from 'vue'


const props = defineProps<{
  time: number
}>()

export default defineComponent({
  name: 'Countdown',
  // props,
  emits: ['change', 'finish'],
})