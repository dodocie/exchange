import { watch, computed, defineComponent, type ExtractPropTypes } from 'vue'

type TimeFormat = 'HH:mm:ss'
type Hour = 'HH'
type Minites = 'mm'
type Second = 'ss'

const props = defineProps<{
  time: number
  format: string
}>()

export default defineComponent({
  name: 'Countdown'
})