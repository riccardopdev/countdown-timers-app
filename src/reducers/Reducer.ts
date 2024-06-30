import { ActionsType } from '../types/ActionsType';
import { DataType } from '../types/DataType';
import { ACTIONS } from './Actions';

const Reducer = (state: DataType, action: ActionsType) => {
  switch (action.type) {
    case ACTIONS.CREATE_TIMER:
      state = { timers: [...state.timers, action.payload] };
      return state;
    case ACTIONS.DELETE_TIMER:
      state = {
        timers: state.timers.filter((timer) => timer.id !== action.payload.id),
      };
      return state;
    case ACTIONS.START_TIMER: {
      state = {
        timers: state.timers.map((timer) =>
          timer.id === action.payload.id ? { ...timer, paused: false } : timer
        ),
      };
      return state;
    }
    case ACTIONS.PAUSE_TIMER:
      state = {
        timers: state.timers.map((timer) =>
          timer.id === action.payload.id ? { ...timer, paused: true } : timer
        ),
      };
      return state;
    case ACTIONS.RESUME_TIMER:
      state = {
        timers: state.timers.map((timer) =>
          timer.id === action.payload.id ? { ...timer, paused: false } : timer
        ),
      };
      return state;
    case ACTIONS.RESET_TIMER: {
      const currentDate = new Date();

      state = {
        timers: state.timers.map((timer) =>
          timer.id === action.payload.id
            ? {
                ...timer,
                initialTimeStamp: currentDate,
                latestTimeStamp: currentDate,
                latestValue: timer.initialValue,
                paused: true,
                completed: false,
              }
            : timer
        ),
      };

      return state;
    }
    default:
      return state;
  }
};

export default Reducer;
