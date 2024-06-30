import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { DataContextType } from '../types/DataContextType';

const TimerList = () => {
  const { state } = useContext<DataContextType>(DataContext);

  const renderTimerList = () => {
    return state.timers.map((timer) => {
      return <p>{timer.initialTimeStamp.toString()}</p>;
    });
  };

  return <h1>{renderTimerList()}</h1>;
};

export default TimerList;
