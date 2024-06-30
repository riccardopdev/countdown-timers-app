import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { DataContextType } from '../types/DataContextType';
import { ACTIONS } from '../reducers/Actions';
import { TimerType } from '../types/TimerType';

const TimerControls = ({ timerId }: TimerControlsProps) => {
  const { state, dispatch } = useContext<DataContextType>(DataContext);
  const thisTimer = state.timers.find(
    (timer) => timer.id === timerId
  ) as TimerType;

  const deleteTimer = () => {
    dispatch({ type: ACTIONS.DELETE_TIMER, payload: thisTimer });
  };

  const startTimer = () => {
    dispatch({ type: ACTIONS.START_TIMER, payload: thisTimer });
  };

  const pauseTimer = () => {
    dispatch({ type: ACTIONS.PAUSE_TIMER, payload: thisTimer });
  };

  const resetTimer = () => {
    dispatch({ type: ACTIONS.RESET_TIMER, payload: thisTimer });
  };

  let controlText = 'Start';
  let controlCallback = startTimer;

  const setControlProps = () => {
    if (thisTimer.paused && thisTimer.latestValue === thisTimer.initialValue) {
      controlText = 'Start';
      controlCallback = startTimer;
    }

    if (thisTimer.paused && thisTimer.latestValue !== thisTimer.initialValue) {
      controlText = 'Resume';
      controlCallback = startTimer;
    }

    if (!thisTimer.paused && !thisTimer.completed) {
      controlText = 'Pause';
      controlCallback = pauseTimer;
    }
  };

  setControlProps();

  return (
    <div>
      <button onClick={deleteTimer}>Delete</button>
      <button onClick={controlCallback}>{controlText}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

type TimerControlsProps = {
  timerId: string;
};

export default TimerControls;
