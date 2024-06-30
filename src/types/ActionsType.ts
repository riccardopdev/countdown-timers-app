import { ACTIONS } from '../reducers/Actions';
import { TimerType } from './TimerType';

export type ActionsType = {
  type:
    | ACTIONS.CREATE_TIMER
    | ACTIONS.DELETE_TIMER
    | ACTIONS.START_TIMER
    | ACTIONS.PAUSE_TIMER
    | ACTIONS.RESUME_TIMER;
  payload: TimerType;
};
