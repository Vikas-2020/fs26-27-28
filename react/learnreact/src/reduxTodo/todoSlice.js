import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    input: "",
    tasks: [],
    isEditing: false,
    editId: null,
  },
  reducers: {
    setInput: function (state, action) {
      state.input = action.payload;
    },
    addTasks: function (state) {
      state.isEditing
        ? (state.tasks = state.tasks.map((obj) => {
            return obj.id === state.editId
              ? { ...obj, task: state.input }
              : obj;
          }))
        : (state.tasks = [
            ...state.tasks,
            { id: Date.now(), task: state.input },
          ]);

      state.isEditing = false;
      state.editId = null;
      state.input = "";
    },
    deleteTask: function (state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTask: function (state, action) {
      const task = state.tasks.find((obj) => obj.id === action.payload);
      if (task) {
        state.input = task.task;
        state.isEditing = true;
        state.editId = action.payload;
      }
    },
  },
});

export const { setInput, addTasks, deleteTask, editTask } = todoSlice.actions; //went into UI(Main.jsx)
export const todoReducer = todoSlice.reducer; //went into the store
