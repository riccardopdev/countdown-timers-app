import { useReducer } from 'react';
import Reducer from './reducers/Reducer';
import { DataContext } from './context/DataContext';
import { State } from './state/State';
import TimerList from './components/TimerList';

const App = () => {
  const [state, dispatch] = useReducer(Reducer, State);
  return (
    <>
      <DataContext.Provider value={{ state, dispatch }}>
        <TimerList />
      </DataContext.Provider>
    </>
  );
};

export default App;
