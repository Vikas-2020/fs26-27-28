import { MdDelete, MdEdit } from "react-icons/md";

function Todos({ tasks, handleDelete, handleEdit }) {
  return (
    <>
      <ul className="m-1 p-4">
        {tasks.map((task) => {
          return (
            <li
              className="flex w-32 items-center justify-between gap-1"
              key={task.id}
            >
              <span>{task.task}</span>
              <MdDelete onClick={() => handleDelete(task.id)} />
              <MdEdit onClick={() => handleEdit(task.id)} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todos;
