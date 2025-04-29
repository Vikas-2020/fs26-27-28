import { useState, useEffect, useRef } from 'react';

function Main() {
  const [counter, setCounter] = useState(0);
  const interval = useRef(null);
  const isThrottled = useRef(false);

  const startCounter = () => {
    if (isThrottled.current) return;
    isThrottled.current = true;

    interval.current = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={startCounter}>Start Counter</button>
    </div>
  );
}

export default Main;