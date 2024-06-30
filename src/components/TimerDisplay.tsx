import st from './TimerDisplay.module.css';

const TimerDisplay = ({ seconds }: TimerDisplayProps) => {
  return <h2 className={st.h2}>{seconds}</h2>;
};

type TimerDisplayProps = {
  seconds: number;
};

export default TimerDisplay;
