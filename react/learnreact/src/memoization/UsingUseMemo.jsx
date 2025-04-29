import { useMemo, useState } from "react";

function UsingUseMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function expensiveFunction(num) {
    let result = 0;
    console.log("inside expensive function");
    for (let i = 0; i < 1000000000; i++) {
      result += num;
    }
    return result;
  }

  //   const calculateCount = expensiveFunction(count);
  const calculateCount = useMemo(() => {
    expensiveFunction(count);
  }, [count]);

  return (
    <div>
      <h1 className="font-bold text-3xl mb-2">Using Usememo</h1>
      <p>Counter: {calculateCount}</p>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="border-2 bg-green-400"
      >
        Increment
      </button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-2 border-gray-300"
      />
    </div>
  );
}

export default UsingUseMemo;
