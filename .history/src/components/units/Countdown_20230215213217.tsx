import { watch, computed, defineComponent, type ExtractPropTypes } from 'vue'

const reset = (totalTime: number = options.time) => {
  pause();
  remain.value = totalTime;
}

export default defineComponent({
  name: 'Countdown',
  emits: ['change', 'finish'],
  setup(props, { emit, slots }){

  }
})