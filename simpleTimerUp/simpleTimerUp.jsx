import React, { useState, useEffect } from "react";

const IntervalExample = () => {
  const [seconds, setSeconds] = useState(0);
  const [pause, setPause] = useState(true);

  const reset = () => {
    setSeconds(0);
    setPause(prev => !prev);
  };

  useEffect(() => {
    if (pause === false) {
      const interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [pause]);

  return (
    <div className="App">
      <header className="App-header">
        {seconds} seconds have elapsed since mounting.
        <button onClick={() => setPause((prev) => !prev)}>{pause ? 'start' : 'pause'}</button>
        <button onClick={reset}>Reset</button>
      </header>
    </div>
  );
};

export default IntervalExample;