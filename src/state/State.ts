import { DataType } from '../types/DataType';

//Dummy data for timers
const TIMERS_DATA = [
  {
    id: 'a',
    label: 'First timer',
    initialTimeStamp: new Date(),
    initialValue: 30,
    latestTimeStamp: new Date(),
    latestValue: 30,
    paused: true,
    completed: false,
  },
  {
    id: 'b',
    label: 'Second timer',
    initialTimeStamp: new Date(),
    initialValue: 45,
    latestTimeStamp: new Date(),
    latestValue: 45,
    paused: true,
    completed: false,
  },
  {
    id: 'c',
    label: 'Third timer',
    initialTimeStamp: new Date(),
    initialValue: 90,
    latestTimeStamp: new Date(),
    latestValue: 90,
    paused: true,
    completed: false,
  },
];

export const State: DataType = {
  // timers: [],
  timers: TIMERS_DATA,
};
