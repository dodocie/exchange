import { watch, computed, defineComponent, type ExtractPropTypes } from 'vue'

type TimeFormat = ''

const props = defineProps<{
  time: number
  format: string
}>()

export default defineComponent({
  name: 'Countdown'
})