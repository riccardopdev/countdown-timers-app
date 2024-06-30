import { useContext, useRef } from 'react';
import { DataContextType } from '../types/DataContextType';
import { DataContext } from '../context/DataContext';
import { ACTIONS } from '../reducers/Actions';
import { TimerType } from '../types/TimerType';
import { FormEvent } from 'react';
import ReactDOM from 'react-dom';
import st from './CreateTimerModal.module.css';

const CreateTimerModal = ({
  isModalOpen = false,
  onCancel,
}: CreateTimerModalProps) => {
  const { dispatch } = useContext<DataContextType>(DataContext);
  const timerName = useRef<HTMLInputElement>(null);
  const timerSeconds = useRef<HTMLInputElement>(null);

  const defaultTimerName = 'New Timer';
  const defaultTimerSeconds = 30;

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
      valueToSubtract: 1,
      paused: true,
      completed: false,
    };
    dispatch({ type: ACTIONS.CREATE_TIMER, payload: newTimer });
    onCancel();
  };

  if (!modalSelector) return;
  if (!isModalOpen) return;

  return ReactDOM.createPortal(
    <div className={st.modalOverlay}>
      <div className={st.modal}>
        <h2 className={st.h2}>Create new timer</h2>
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
              min={1}
              max={3600}
            />
          </div>
          <div>
            <button onClick={onCancel} className={`${st.button} ${st.cancel}`}>
              Cancel
            </button>
            <button className={`${st.button} ${st.create}`}>Create</button>
          </div>
        </form>
      </div>
    </div>,
    modalSelector
  );
};

type CreateTimerModalProps = {
  isModalOpen: boolean;
  onCancel: () => unknown;
};

export default CreateTimerModal;
