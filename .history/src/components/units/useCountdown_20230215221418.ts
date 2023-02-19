
import {
  ref,
  computed,
  onActivated,
  onDeactivated,
} from 'vue';

export type CurrentTime = {
  days: number;
  hours: number;
  total: number;
  minutes: number;
  seconds: number;
};

export type UseCountDownOptions = {
  time: number;
  onChange?: (current: CurrentTime) => void;
  onFinish?: () => void;
};

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function parseTime(time: number): CurrentTime {
  const days = Math.floor(time / DAY);
  const hours = Math.floor((time % DAY) / HOUR);
  const minutes = Math.floor((time % HOUR) / MINUTE);
  const seconds = Math.floor((time % MINUTE) / SECOND);

  return {
    total: time,
    days,
    hours,
    minutes,
    seconds,
  };
}
const inBrowser = typeof window !== 'undefined'
function raf(fn: FrameRequestCallback): number {
  return inBrowser ? requestAnimationFrame(fn) : -1;
}
function cancelRaf(id: number) {
  if (inBrowser) {
    cancelAnimationFrame(id);
  }
}

function isSameSecond(time1: number, time2: number): boolean {
  return Math.floor(time1 / 1000) === Math.floor(time2 / 1000);
}

export function useCountdown(options: UseCountDownOptions) {
  let rafId: number;
  let endTime: number;
  let counting: boolean;
  let deactivated: boolean;

  const remain = ref(options.time);
  const current = computed(() => parseTime(remain.value));

  const pause = () => {
    counting = false;
    cancelRaf(rafId);
  };
  const getCurrentRemain = () => Math.max(endTime - Date.now(), 0);

  const setRemain = (value: number) => {
    remain.value = value;
    options.onChange?.(current.value);

    if (value === 0) {
      options.onFinish?.();
    }
  };

  const macroTick = () => {
    rafId = raf(() => {
      // in case of call reset immediately after finish
      if (counting) {
        const remainRemain = getCurrentRemain();

        if (!isSameSecond(remainRemain, remain.value) || remainRemain === 0) {
          setRemain(remainRemain);
        }

        if (remain.value > 0) {
          macroTick();
        }
      }
    });
  };

  const tick = () => {
    if(!inBrowser) return
    macroTick()
  };

  const start = () => {
    if (!counting) {
      endTime = Date.now() + remain.value;
      counting = true;
      tick();
    }
  };

  const reset = (totalTime: number = options.time) => {
    remain.value = totalTime;
  };


  onActivated(() => {
    if (deactivated) {
      counting = true;
      deactivated = false;
      tick();
    }
  });

  onDeactivated(() => {
    if (counting) {
      deactivated = true;
    }
  });

  return {
    start,
    reset,
    current,
    pause
  };
}