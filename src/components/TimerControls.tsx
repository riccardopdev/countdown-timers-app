import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { DataContextType } from '../types/DataContextType';
import { ACTIONS } from '../reducers/Actions';
import { TimerType } from '../types/TimerType';
import st from './TimerControls.module.css';

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
      <button onClick={controlCallback} className={`${st.button} ${st.start}`}>
        {controlText}
      </button>
      <button onClick={resetTimer} className={`${st.button} ${st.reset}`}>
        Reset
      </button>
      <button onClick={deleteTimer} className={`${st.button} ${st.delete}`}>
        Delete
      </button>
    </div>
  );
};

type TimerControlsProps = {
  timerId: string;
};

export default TimerControls;
