import { useReducer, useState, useEffect } from 'react';
import Reducer from './reducers/Reducer';
import { DataContext } from './context/DataContext';
import { State } from './state/State';
import TimerList from './components/TimerList';
import CreateTimerModal from './components/CreateTimerModal';
import Header from './components/Header';

const App = () => {
  const getInitialState = () => {
    // localStorage.clear();
    const storedState = localStorage.getItem('timerAppLocalState');
    return storedState ? JSON.parse(storedState) : State;
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
