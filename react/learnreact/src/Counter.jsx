// Counter is a normal variable
// STATE VARIABLE

import { useState } from "react";

function Counter() {
  //   let counter = 0; //normal JS variable
  //   function increment() {
  //     counter++;
  //     console.log(counter);
  //   }
  //   function decrement() {
  //     counter--;
  //     console.log(counter);
  //   }

  //counter is variable initialized to 0
  // setCounter is a function with the sole purpose of modifying counter's value, AS STATES ARE IMMUTABLE

  // HOOKS: a function prefixed  with the word "use"

  const [counter, setCounter] = useState(0);

  //   function useState(value) {
  //     let counter = value;
  //     function setCounter(newValue) {
  //       counter = newValue;
  //     }
  //     return [counter, setCounter];
  //   }

  function increment() {
    // console.log(typeof setCounter);
    // setCounter((prev) => prev + 1);
    setCounter(counter + 1);
  }
  function decrement() {
    if (counter > 0) setCounter(counter - 1);
  }

  return (
    <>
      <h2>Counter App</h2>
      <button onClick={increment}>Increment</button>
      <p>{counter}</p>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}
export default Counter;

// btn.addEventListener("click", handleClick)
