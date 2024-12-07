export interface ITimerStore {
  currentTime: Date;
  startTimer: () => void;
  stopTimer: () => void;

  // eslint-disable-next-line no-unused-vars
  getLeftTime: (_endTime: string | Date) => {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  timerId: NodeJS.Timeout | null;
}
