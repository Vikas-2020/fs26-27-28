import { useDispatch, useSelector } from "react-redux";
import { setInput, addTasks, deleteTask, editTask } from "./todoSlice";
import { MdDeleteOutline, MdEdit } from "react-icons/md";

function Main() {
  const dispatch = useDispatch();
  const initState = useSelector((state) => {
    return state.todo;
  });
  return (
    <>
      <input
        type="text"
        placeholder="Enter your task"
        onChange={(e) => dispatch(setInput(e.target.value))}
        value={initState.input}
      />
      <button onClick={() => dispatch(addTasks())}>{initState.isEditing ? "Edit Task" : "Add Task"}</button>

      <ul className="w-52 my-10">
        {initState.tasks.map((obj) => {
          return (
            <li key={obj.id} className="flex justify-between items-center">
              {obj.task}
              <MdDeleteOutline
                title="Delete this task"
                onClick={() => dispatch(deleteTask(obj.id))}
              />
              <MdEdit
                title="Edit this task"
                onClick={() => dispatch(editTask(obj.id))}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Main;
