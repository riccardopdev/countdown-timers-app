import { useEffect, useContext } from 'react';
import { TimerType } from '../types/TimerType';
import TimerControls from './TimerControls';
import TimerDisplay from './TimerDisplay';
import { DataContextType } from '../types/DataContextType';
import { DataContext } from '../context/DataContext';
import { ACTIONS } from '../reducers/Actions';

const Timer = ({ timer }: TimerProps) => {
  const { dispatch } = useContext<DataContextType>(DataContext);

  useEffect(() => {
    if (timer.latestValue === 0 && !timer.completed) {
      dispatch({ type: ACTIONS.STOP_TIMER, payload: timer });
    }

    if (!timer.paused && !timer.completed) {
      const timerId = setTimeout(() => {
        dispatch({ type: ACTIONS.UPDATE_TIMER, payload: timer });
      }, 1000);

      return () => clearTimeout(timerId);
    }
  }, [timer, dispatch]);

  return (
    <div>
      <TimerDisplay seconds={timer.latestValue} />
      <p>
        {timer.label} - {timer.initialValue} seconds.
      </p>
      <TimerControls timerId={timer.id} />
    </div>
  );
};

type TimerProps = {
  timer: TimerType;
};

export default Timer;
