import { useDispatch, useSelector } from "react-redux";
import { setInput, addTasks } from "./todoSlice";

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
      <button onClick={() => dispatch(addTasks())}>Add Task</button>

      <ul>
        {initState.tasks.map((obj) => {
          return <li key={obj.id}>{obj.task}</li>;
        })}
      </ul>
    </>
  );
}

export default Main;
