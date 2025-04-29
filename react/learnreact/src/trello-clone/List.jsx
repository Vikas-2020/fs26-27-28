import { FaPencil } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

function List({ obj, isActive, setIsActiveListId }) {
  const [tasks, setTasks] = useState(obj.tasks);

  function handleDragStart(e, id) {
    e.dataTransfer.setData("text/plain", id);
  }

  function handleDrop(e, id) {
    e.preventDefault();

    const dragId = e.dataTransfer.getData("text/plain");
    const dragIndex = tasks.findIndex((task) => task.id === Number(dragId));
    const dropIndex = tasks.findIndex((task) => task.id === id);
    console.log(dragIndex, dropIndex);
    const updatedTasks = [...tasks];
    const [draggedTask] = updatedTasks.splice(dragIndex, 1);
    console.log(draggedTask);
    updatedTasks.splice(dropIndex, 0, draggedTask);
    console.log(updatedTasks);
    setTasks(updatedTasks);
  }
  function handleDragOver(e) {
    e.preventDefault();
  }

  return (
    <div className="list w-[24%] min-h-[3rem] rounded px-2 py-3 bg-[rgb(226,232,240)]">
      <header>
        <h1 className="flex justify-between items-center mb-2">
          <span>{obj.name}</span>
          <span className="inline-flex items-center">...</span>
        </h1>
      </header>

      <ul>
        {tasks.map((object) => (
          <li
            className="flex justify-between rounded p-2 shadow mb-2 bg-[rgb(248,250,252)] group"
            key={object.id}
            draggable
            onDragStart={(e) => handleDragStart(e, object.id)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, object.id)}
          >
            {object.task}
            <div className="flex items-center gap-1 invisible group-hover:visible">
              <FaPencil />
              <FaRegTrashAlt />
            </div>
          </li>
        ))}
      </ul>

      <footer>
        {isActive ? (
          <>
            <textarea name="" id=""></textarea>
            <button>Add Card</button>
            <IoIosClose onClick={() => setIsActiveListId(null)} />
          </>
        ) : (
          <button onClick={() => setIsActiveListId(obj.id)}>
            + Add Another Card
          </button>
        )}
      </footer>
    </div>
  );
}

export default List;
