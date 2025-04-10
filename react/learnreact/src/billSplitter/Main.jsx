import { useState, useEffect } from "react";

function Main() {
  const [billAmount, setBillAmount] = useState("");
  const [tipAmount, setTipAmount] = useState("");
  const [total, setTotal] = useState(0);

  // LIFECYCLE OF A COMPONENT:
  /*
   1. Initial render / mounting (componentDidMount())
   2. Reloaded / rerendered
   3. Deleted / unmounted (a cleanup function inside useEffect runs)
  */

  //useEffect runs on mounting as well as on dependency change

  useEffect(() => {
    console.log("Inside useEffect");
    setTotal(Number(billAmount) + Number(tipAmount));
  }, [billAmount, tipAmount]);

  function handleTip(tip) {
    setTipAmount(Math.floor((billAmount * tip) / 100));
  }

  return (
    <>
      <label htmlFor="billAmount">Bill Amount</label>
      <input
        id="billAmount"
        type="text"
        placeholder="Enter bill amount"
        name="billAmount"
        value={billAmount}
        onChange={(e) => setBillAmount(e.target.value)}
        className="border-2 border-red-500 m-2 p-2 rounded-lg"
      />

      <div className="tip-wrapper">
        <label htmlFor="selectTip">Select Tip (in %)</label>
        <div className="flex gap-2 w-32 justify-around my-4 p-2">
          <p
            className="border-2 border-blue-500 p-2 cursor-pointer transition-all duration-300 hover:bg-blue-500"
            onClick={(e) => handleTip(e.target.innerText)}
          >
            5
          </p>
          <p
            className="border-2 border-blue-500 p-2 cursor-pointer transition-all duration-300 hover:bg-blue-500"
            onClick={(e) => handleTip(e.target.innerText)}
          >
            10
          </p>
          <p
            className="border-2 border-blue-500 p-2 cursor-pointer transition-all duration-300 hover:bg-blue-500"
            onClick={(e) => handleTip(e.target.innerText)}
          >
            15
          </p>
          <p
            className="border-2 border-blue-500 p-2 cursor-pointer transition-all duration-300 hover:bg-blue-500"
            onClick={(e) => handleTip(e.target.innerText)}
          >
            25
          </p>
          <p
            className="border-2 border-blue-500 p-2 cursor-pointer transition-all duration-300 hover:bg-blue-500"
            onClick={(e) => handleTip(e.target.innerText)}
          >
            50
          </p>
          <p
            className="border-2 border-blue-500 p-2 cursor-pointer transition-all duration-300 hover:bg-blue-500"
            onClick={(e) => handleTip(e.target.innerText)}
          >
            75
          </p>
        </div>
      </div>

      <label htmlFor="tipAmount">Tip Amount</label>
      <input
        id="tipAmount"
        type="text"
        placeholder="Enter custom tip amount (in %)"
        name="tipAmount"
        value={tipAmount}
        onChange={(e) => setTipAmount(e.target.value)}
        className="border-2 border-red-500 m-2 p-2 rounded-lg"
      />
      <p className="m-2 p-2">Total: {total}</p>
    </>
  );
}

export default Main;
