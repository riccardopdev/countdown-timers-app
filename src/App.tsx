import { useReducer, useState } from 'react';
import Reducer from './reducers/Reducer';
import { DataContext } from './context/DataContext';
import { State } from './state/State';
import TimerList from './components/TimerList';
import CreateTimerModal from './components/CreateTimerModal';
import Header from './components/Header';

const App = () => {
  const [state, dispatch] = useReducer(Reducer, State);
  const [showModal, setShowModal] = useState<boolean>(false);

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
