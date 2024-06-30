export type TimerType = {
  id: string;
  label: string;
  initialTimeStamp: Date;
  initialValue: number;
  latestTimeStamp: Date;
  latestValue: number;
  valueToSubtract: number;
  paused: boolean;
  completed: boolean;
};
