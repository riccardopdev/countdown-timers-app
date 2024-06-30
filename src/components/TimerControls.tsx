import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { DataContextType } from '../types/DataContextType';
import { ACTIONS } from '../reducers/Actions';
import { TimerType } from '../types/TimerType';

const TimerControls = ({ timerId }: TimerControlsProps) => {
  const { state, dispatch } = useContext<DataContextType>(DataContext);

  const deleteTimer = () => {
    const timerToDelete = state.timers.find(
      (timer) => timer.id === timerId
    ) as TimerType;

    dispatch({ type: ACTIONS.DELETE_TIMER, payload: timerToDelete });
  };

  return (
    <div>
      <p>{timerId}</p>
      <button onClick={deleteTimer}>Delete Timer</button>
      <button>Start/Pause/Resume</button>
    </div>
  );
};

type TimerControlsProps = {
  timerId: string;
};

export default TimerControls;
