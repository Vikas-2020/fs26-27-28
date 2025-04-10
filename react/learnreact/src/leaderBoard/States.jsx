import { useState } from "react";

function States() {
  const [age, setAge] = useState(20);

  //STATE CHANGES ARE ASYNCHRONOUS. REACT UPDATES THE STATE IN BATCHES

  // RACE CONDITIONS: when the value of set function depends on the previous renders. In such cases we use UPDATER FUNCTION.
  // THESE updater functions only accept 1 argument, the value of state variable from previous render

  function changeAge() {
    // setAge(age + 1);
    // setAge(age + 1);
    // setAge(age + 1);

    setAge((prevAge) => prevAge + 1);
    setAge((prevAge) => prevAge + 1);
    setAge((prevAge) => prevAge + 1);
  }

  return (
    <>
      <button onClick={changeAge}>Click Me</button>
      <p>{age}</p>
    </>
  );
}

export default States;
