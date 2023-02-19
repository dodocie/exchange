import { watch, computed, defineComponent, type ExtractPropTypes } from 'vue'


const props = defineProps<{
  time: number
}>()

export default defineComponent({
  name: 'Countdown',
  emits: ['change', 'finish'],
  setup(props){

  }
})