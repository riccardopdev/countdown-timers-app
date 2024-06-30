const Header = () => {
  const createTimer = () => {
    console.log('Create timer');
  };

  return (
    <header>
      <h1>Timers</h1>
      <button onClick={createTimer}>+</button>
    </header>
  );
};

export default Header;
