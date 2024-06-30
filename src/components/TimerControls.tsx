const TimerControls = ({ timerId }: TimerControlsProps) => {
  return (
    <div>
      <p>{timerId}</p>
      <button>Delete Timer</button>
      <button>Start/Pause/Resume</button>
    </div>
  );
};

type TimerControlsProps = {
  timerId: string;
};

export default TimerControls;
