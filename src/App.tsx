import { useReducer } from 'react';
import Reducer from './reducers/Reducer';
import { DataContext } from './context/DataContext';
import { State } from './state/State';

const App = () => {
  const [state, dispatch] = useReducer(Reducer, State);
  return (
    <>
      <DataContext.Provider value={{ state, dispatch }}>
        <h1>App</h1>
      </DataContext.Provider>
    </>
  );
};

export default App;
