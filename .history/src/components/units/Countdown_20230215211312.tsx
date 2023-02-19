import { watch, computed, defineComponent, type ExtractPropTypes } from 'vue'

const props = defineProps<{
  start: number
}>()

export default defineComponent({
  name: 'Countdown'
})