// To prevent any component/a function or a variable from being re-created on every render, we can use memoization.
// Memoization is a technique to cache the result of a function call and return the cached result when the same inputs occur again.

import { memo, useCallback, useState } from "react";

// In React, we can use the `useMemo` and `useCallback` hooks to memoize values and functions respectively.
// `useMemo` is used to memoize a value, while `useCallback` is used to memoize a function.
// With useCallback, more often than not, we also use React.memo().

// useCallback ensures that the increment function reference remains stable across renders of the App component.
// The problem remains. Without React.memo, the Child component would still re-render every time the App component renders, even if the increment function reference doesn't change.
// React.memo is used to memoize the rendering of the Child component. It ensures that the Child component only re-renders if its props change.

function Main() {
  const [counter, setCounter] = useState(0);

  //   function increment() {
  //     setCounter((prev) => prev + 1);
  //   }

  const increment = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  return (
    <>
      <p>{counter}</p>
      <Child increment={increment} />
    </>
  );
}

// function Child({ increment }) {
//   for (let i = 0; i < 100000000; i++) {
//     //Simulating an expensive computation
//   }
//   console.log("Child Component Rendered");
//   return <button onClick={increment}>Increment</button>;
// }

const Child = memo(({ increment }) => {
  for (let i = 0; i < 100000000; i++) {
    //Simulating an expensive computation
  }
  console.log("Child Component Rendered");
  return <button onClick={increment}>Increment</button>;
});

export default Main;
