import { TimerType } from '../types/TimerType';

const Timer = ({ timer }: TimerProps) => {
  return (
    <div>
      <p>Timer Value: {timer.initialValue}</p>
      <p>Timer Name: {timer.label}</p>
      <p>{timer.initialTimeStamp.toString()}</p>
    </div>
  );
};

type TimerProps = {
  timer: TimerType;
};

export default Timer;
