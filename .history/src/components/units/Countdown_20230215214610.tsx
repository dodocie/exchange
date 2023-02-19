import { watch, defineExpose, defineComponent, type ExtractPropTypes } from 'vue'
import { useCountdown } from './useCountdown';

export default defineComponent({
  name: 'Countdown',
  emits: ['change', 'finish'],
  setup(props: {time: number}, { emit, slots }){
    const { start, pause, reset, current } = useCountdown({
      time: +props.time,
      onChange: (current) => emit('change', current),
      onFinish: () => emit('finish'),
    })

    const resetTime = () => {
      reset(+props.time);
    };

    watch(() => props.time, resetTime, { immediate: true });
    defineExpose({
      start,
      pause,
      reset: resetTime,
    });

    return () => (
      <div role="timer" class={bem()}>
        {slots.default ? slots.default(current.value) : props.time}
      </div>
    );
  }
})