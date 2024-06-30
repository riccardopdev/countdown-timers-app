const TimerDisplay = ({ seconds }: TimerDisplayProps) => {
  return <h3>{seconds}</h3>;
};

type TimerDisplayProps = {
  seconds: number;
};

export default TimerDisplay;
