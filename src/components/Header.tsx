import st from './Header.module.css';

const Header = ({ showCreateTimerModal }: HeaderProps) => {
  return (
    <header className={st.header}>
      <h1>Timers</h1>
      <button onClick={showCreateTimerModal} className={st.button}>
        +
      </button>
    </header>
  );
};

type HeaderProps = {
  showCreateTimerModal: () => unknown;
};

export default Header;
