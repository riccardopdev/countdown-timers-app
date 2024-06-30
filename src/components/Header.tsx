const Header = ({ showCreateTimerModal }: HeaderProps) => {
  return (
    <header>
      <h1>Timers</h1>
      <button onClick={showCreateTimerModal}>+</button>
    </header>
  );
};

type HeaderProps = {
  showCreateTimerModal: () => unknown;
};

export default Header;
