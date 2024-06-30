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
    case ACTIONS.START_TIMER:
      return state;
    case ACTIONS.PAUSE_TIMER:
      return state;
    case ACTIONS.RESUME_TIMER:
      return state;
    case ACTIONS.RESET_TIMER:
      return state;
    default:
      return state;
  }
};

export default Reducer;
