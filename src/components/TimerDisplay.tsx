const TimerDisplay = ({ seconds }: TimerDisplayProps) => {
  return <h2>{seconds}</h2>;
};

type TimerDisplayProps = {
  seconds: number;
};

export default TimerDisplay;
