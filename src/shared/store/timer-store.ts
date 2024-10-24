import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
interface TimerStore {
  currentTime: Date;
  startTimer: () => void;
  stopTimer: () => void;
  getLeftTime: (endTime: string | Date) => {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  timerId: NodeJS.Timeout | null;
}

export const TimerStore = create<TimerStore>()(
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
      const timerId = get().timerId;
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

export default TimerStore;
