import { DataType } from '../types/DataType';

//Sample data for timers
const SAMPLE_TIMERS_DATA = [
  {
    id: crypto.randomUUID(),
    label: 'Sample timer',
    initialValue: 30,
    latestTimeStamp: new Date(),
    latestValue: 30,
    valueToSubtract: 1,
    paused: true,
    completed: false,
  },
];

export const State: DataType = {
  timers: SAMPLE_TIMERS_DATA,
};
