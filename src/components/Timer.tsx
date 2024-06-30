import { TimerType } from '../types/TimerType';
import TimerDisplay from './TimerDisplay';

const Timer = ({ timer }: TimerProps) => {
  return (
    <div>
      <TimerDisplay seconds={timer.latestValue} />
      <p>
        {timer.label} - {timer.initialValue} seconds.
      </p>
    </div>
  );
};

type TimerProps = {
  timer: TimerType;
};

export default Timer;
