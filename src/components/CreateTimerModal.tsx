import { useContext, useRef } from 'react';
import { DataContextType } from '../types/DataContextType';
import { DataContext } from '../context/DataContext';
import { ACTIONS } from '../reducers/Actions';
import { TimerType } from '../types/TimerType';
import { FormEvent } from 'react';
import ReactDOM from 'react-dom';

const CreateTimerModal = ({
  isModalOpen = false,
  onCancel,
}: CreateTimerModalProps) => {
  const { dispatch } = useContext<DataContextType>(DataContext);
  const timerName = useRef<HTMLInputElement>(null);
  const timerSeconds = useRef<HTMLInputElement>(null);

  const defaultTimerName = 'New Timer';
  const defaultTimerSeconds = 10;

  const modalSelector = document.querySelector('#createTimerModal');

  const createTimer = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const timerLabel = timerName.current?.value || defaultTimerName;
    const timerValue =
      Number(timerSeconds.current?.value) || defaultTimerSeconds;

    const newTimer: TimerType = {
      id: crypto.randomUUID(),
      label: timerLabel,
      initialTimeStamp: new Date(),
      initialValue: timerValue,
      latestTimeStamp: new Date(),
      latestValue: timerValue,
      paused: true,
      completed: false,
    };
    dispatch({ type: ACTIONS.CREATE_TIMER, payload: newTimer });
  };

  if (!modalSelector) return;
  if (!isModalOpen) return;

  return ReactDOM.createPortal(
    <>
      <h2>Create new timer</h2>
      <form onSubmit={createTimer}>
        <div>
          <label htmlFor="timer-name">Timer name</label>
          <input
            id="timer-name"
            type="text"
            ref={timerName}
            defaultValue={defaultTimerName}
          />
        </div>
        <div>
          <label htmlFor="seconds">Number of seconds</label>
          <input
            id="seconds"
            type="number"
            ref={timerSeconds}
            defaultValue={defaultTimerSeconds}
          />
        </div>
        <div>
          <button onClick={onCancel}>Cancel</button>
          <button>Create timer</button>
        </div>
      </form>
    </>,
    modalSelector
  );
};

type CreateTimerModalProps = {
  isModalOpen: boolean;
  onCancel: () => unknown;
};

export default CreateTimerModal;
