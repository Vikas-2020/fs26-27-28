import { useState } from "react";
import { LiComponent } from "./LiComponent.jsx";
import "./List.css";

const data = [
  { id: 1, name: "Kiran", age: 22 },
  { id: 2, name: "Abhishek", age: 24 },
  { id: 3, name: "Shikhar", age: 25 },
  { id: 4, name: "Rishabh", age: 20 },
  { id: 5, name: "Aditya", age: 19 },
];

// WE CANNOT USE for, while, do..while, for..of, for..in, foreach, inside the return statement
// WE USE HOFs
// WHENEVER WE ARE CREATING HTML ELEMENTS WITH THE HELP OF A LOOP, each instance must have a key attribute with a unique value

const Lists = () => {
  const [arr, setArr] = useState(data);
  return (
    <>
      <ul className="lists">
        <LiComponent arr={arr} setArr={setArr} />
      </ul>
    </>
  );
};

export default Lists;
