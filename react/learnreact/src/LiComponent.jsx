import { MdDelete } from "react-icons/md";

export function LiComponent({ arr, setArr }) {
  function handleDelete(id) {
    setArr(
      arr.filter((obj) => {
        return obj.id !== id;
      })
    );
  }

  return arr.map((obj) => {
    return (
      <li className="li" key={obj.id}>
        {obj.name} {obj.age}
        <MdDelete
          onClick={() => handleDelete(obj.id)}
          style={{ color: "red" }}
        />
      </li>
    );
  });
}

// export default LiComponent;

// BEM

// npm i react-icons
