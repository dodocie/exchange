import { watch, computed, defineComponent, type ExtractPropTypes } from 'vue'


export default defineComponent({
  name: 'Countdown',
  emits: ['change', 'finish'],
  setup(props, { emit, slots }){
    const { start, pause, reset, current } = useCountDown({
      time: +props.time,
      millisecond: props.millisecond,
      onChange: (current) => emit('change', current),
      onFinish: () => emit('finish'),
    });
  }
})