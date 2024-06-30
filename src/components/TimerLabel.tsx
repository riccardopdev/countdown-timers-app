import { TimerType } from '../types/TimerType';
import st from './TimerLabel.module.css';

const TimerLabel = ({ timer }: TimerLabelProps) => {
  return (
    <p className={st.p}>
      {timer.label}: {timer.initialValue} seconds
    </p>
  );
};

type TimerLabelProps = {
  timer: TimerType;
};

export default TimerLabel;
