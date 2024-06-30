import { useReducer } from 'react';
import Reducer from './reducers/Reducer';
import { DataContext } from './context/DataContext';
import { State } from './state/State';
import TimerList from './components/TimerList';
import Header from './components/Header';

const App = () => {
  const [state, dispatch] = useReducer(Reducer, State);
  return (
    <>
      <DataContext.Provider value={{ state, dispatch }}>
        <Header />
        <main>
          <TimerList />
        </main>
      </DataContext.Provider>
    </>
  );
};

export default App;
