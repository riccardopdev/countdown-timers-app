export type TimerType = {
  id: string;
  label: string;
  initialTimeStamp: Date;
  initialValue: number;
  latestTimeStamp: Date;
  latestValue: number;
  paused: boolean;
  completed: boolean;
};
