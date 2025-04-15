import { useRef, useState } from "react";

function Main() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);
  const count = useRef(1); //{current: 1}
  const inputRef = useRef(null);

  function handleClick() {
    const obj = { id: count.current++, name: name };
    setNames([...names, obj]);
    setName("");
    inputRef.current.focus();
  }

  console.log("countRef: ", count);
  console.log("inputRef: ", inputRef);

  return (
    <>
      <div className="flex p-4">
        <input
          type="text"
          placeholder="Enter a name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 mr-2 focus:outline-none focus:border-blue-500"
          ref={inputRef}
        />
        <button
          onClick={handleClick}
          className="border-2 bg-rose-400 border-rose-400 shadow shadow-rose-600 p-2 rounded-2xl cursor-pointer text-white"
        >
          Add Name
        </button>
      </div>

      <ul className="flex flex-col gap-2 p-4">
        {names.length > 0 &&
          names.map((obj) => (
            <li id={`name${obj.id}`} key={obj.id}>
              {obj.name}
            </li>
          ))}
      </ul>
    </>
  );
}

export default Main;
