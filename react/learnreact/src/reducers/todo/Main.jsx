import { useReducer } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

// WHEN WE USE REDUCERS, THE FIRST THING INVOKED ON ANY USER ACTION IS THE DISPATCH FUNCTION
// DISPATCH FUNCTION TAKES IN THE ACTION TYPE AND THE PAYLOAD
// THE DISPATCH FUNCTION THEN CALLS THE REDUCER FUNCTION WITH THE CURRENT STATE AND THE ACTION

const initialState = {
  input: "",
  tasks: [],
  isEditing: false,
  editId: null,
};
function todoReducer(state, action) {
  switch (action.type) {
    case "SET_INPUT":
      return {
        ...state,
        input: action.payload,
      };

    case "ADD_TASK":
      return state.isEditing
        ? {
            ...state,
            tasks: state.tasks.map((task, indx) =>
              indx === state.editId ? state.input : task
            ),
            //RESETTING
            isEditing: false,
            editId: null,
            input: "",
          }
        : { ...state, tasks: [...state.tasks, state.input], input: "" };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task, indx) => indx !== action.id),
      };
    case "EDIT_TASK":
      return {
        ...state,
        isEditing: true,
        input: action.payload,
        editId: action.id,
      };
  }
}

function Main() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

    

  return (
    <>
      <input
        type="text"
        placeholder="Enter your task"
        className="border-2 border-blue-200"
        value={state.input}
        onChange={(e) =>
          dispatch({
            type: "SET_INPUT",
            payload: e.target.value,
          })
        }
      />
      <button
        className="border-2 bg-blue-400 text-white px-4 py-1"
        onClick={() =>
          dispatch({
            type: "ADD_TASK",
          })
        }
      >
        {state.isEditing ? "Edit Task" : "Add Task"}
      </button>

      <ul>
        {state.tasks.map((task, index) => {
          return (
            <li key={index}>
              {task}
              <MdDelete
                onClick={() =>
                  dispatch({
                    type: "DELETE_TASK",
                    id: index,
                  })
                }
              />
              <MdEdit
                onClick={() =>
                  dispatch({
                    type: "EDIT_TASK",
                    id: index,
                    payload: task,
                  })
                }
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Main;
