import { TimerType } from '../types/TimerType';
import TimerControls from './TimerControls';
import TimerDisplay from './TimerDisplay';

const Timer = ({ timer }: TimerProps) => {
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
