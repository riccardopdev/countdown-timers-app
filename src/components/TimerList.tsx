import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { DataContextType } from '../types/DataContextType';
import Timer from './Timer';

const TimerList = () => {
  const { state } = useContext<DataContextType>(DataContext);

  const renderTimerList = () => {
    return state.timers.map((timer) => {
      return <Timer key={timer.id} timer={timer} />;
    });
  };

  return <>{renderTimerList()}</>;
};

export default TimerList;
