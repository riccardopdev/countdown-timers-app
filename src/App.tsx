import { useReducer, useState, useEffect } from 'react';
import Reducer from './reducers/Reducer';
import { DataContext } from './context/DataContext';
import { State } from './state/State';
import TimerList from './components/TimerList';
import CreateTimerModal from './components/CreateTimerModal';
import Header from './components/Header';
import { differenceInSeconds } from 'date-fns';
import { TimerType } from './types/TimerType';
import { DataType } from './types/DataType';

const App = () => {
  //We check if we have state stored in localStorage and use this to populate the initial state
  const getInitialState = () => {
    // localStorage.clear();
    const storedState = localStorage.getItem('timerAppLocalState');
    const parsedData = storedState ? JSON.parse(storedState) : null;

    //If we have localStorage data, we check if the timers have discrepancies between the latest update and the current time
    if (parsedData) {
      parsedData.timers = checkTimersDiscrepancies(parsedData);
    }

    return parsedData ? parsedData : State;
  };

  const checkTimersDiscrepancies = (data: DataType) => {
    return (data.timers = data.timers.map((timer: TimerType) => {
      //If the time is not paused check the difference between the latest time stamp and the current time
      //If the difference is bigger than one second the timer was running in the background.
      //To resolve the discrepancy we need to subtract a larger value than 1 second from this timer
      if (!timer.paused && timer.latestValue > 1) {
        const currentDate = new Date();
        const currentDateIsoString = currentDate.toISOString();
        const latestTimeStamp = new Date(timer.latestTimeStamp);

        //The time elapsed in seconds from the latest time stamp update and now
        const secondsDifference = differenceInSeconds(
          currentDateIsoString,
          latestTimeStamp
        );

        if (
          secondsDifference > 1 &&
          timer.latestValue - secondsDifference > 0
        ) {
          //The time elapsed is bigger than 1 second and the timer current value is bigger than this difference
          //We update the timer by subtracting the correct elapsed time
          return { ...timer, valueToSubtract: secondsDifference };
        } else if (
          secondsDifference > 1 &&
          timer.latestValue - secondsDifference <= 0
        ) {
          //The time elapsed is bigger than 1 second and the timer current value is smaller than this difference
          //We update the timer by subtracting all its current value and setting it equal to zero
          return { ...timer, valueToSubtract: timer.latestValue };
        } else {
          return timer;
        }
      } else {
        return timer;
      }
    }));
  };

  const [state, dispatch] = useReducer(Reducer, getInitialState());
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('timerAppLocalState', JSON.stringify(state));
  }, [state]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <DataContext.Provider value={{ state, dispatch }}>
        <Header showCreateTimerModal={openModal} />
        <main>
          <TimerList />
        </main>
        <CreateTimerModal isModalOpen={showModal} onCancel={closeModal} />
      </DataContext.Provider>
    </>
  );
};

export default App;
