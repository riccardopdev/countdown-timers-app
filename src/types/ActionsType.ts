import { ACTIONS } from '../reducers/Actions';
import { TimerType } from './TimerType';

export type ActionsType = {
  type:
    | ACTIONS.CREATE_TIMER
    | ACTIONS.DELETE_TIMER
    | ACTIONS.START_TIMER
    | ACTIONS.PAUSE_TIMER
    | ACTIONS.RESET_TIMER
    | ACTIONS.UPDATE_TIMER
    | ACTIONS.STOP_TIMER;
  payload: TimerType;
};
