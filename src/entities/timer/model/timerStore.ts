import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { ITimerStore } from "../types/timerStore.types";

export const TimerStore = create<ITimerStore>()(
  subscribeWithSelector((set, get) => ({
    currentTime: new Date(),
    timerId: null,
    startTimer: () => {
      if (get().timerId) return;
      const timerID = setInterval(() => {
        set({ currentTime: new Date() });
      }, 1000);
      set({ timerId: timerID });
    },
    stopTimer: () => {
      const { timerId } = get();
      if (timerId) {
        clearInterval(timerId);
        set({ timerId: null });
      }
    },
    getLeftTime: (endTime) => {
      const timeDiff =
        new Date(endTime).getTime() - get().currentTime.getTime();
      if (timeDiff < 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }
      const seconds = Math.floor((timeDiff / 1000) % 60);
      const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

      return {
        days,
        hours,
        minutes,
        seconds,
      };
    },
  })),
);
