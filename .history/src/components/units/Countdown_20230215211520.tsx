import { watch, computed, defineComponent, type ExtractPropTypes } from 'vue'

type TimeFormat = 'HH:mm:ss'

const props = defineProps<{
  time: number
  format: string
}>()

export default defineComponent({
  name: 'Countdown'
})