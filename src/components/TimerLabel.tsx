import { TimerType } from '../types/TimerType';

const TimerLabel = ({ timer }: TimerLabelProps) => {
  return (
    <p>
      {timer.label} - {timer.initialValue} seconds.
    </p>
  );
};

type TimerLabelProps = {
  timer: TimerType;
};

export default TimerLabel;
