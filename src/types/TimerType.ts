export type TimerType = {
  id: string;
  label: string;
  initialValue: number;
  latestTimeStamp: Date;
  latestValue: number;
  valueToSubtract: number;
  paused: boolean;
  completed: boolean;
};
