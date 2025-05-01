import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  initialState: {
    input: "",
    tasks: [],
  },
  reducers: {
    setInput: function (state, action) {
      state.input = action.payload;
    },
    addTasks: function (state) {
      state.tasks = [...state.tasks, { id: Date.now(), task: state.input }];
      state.input = "";
    },
  },
  name: "todo",
});

export const { setInput, addTasks } = todoSlice.actions; //went into UI(Main.jsx)
export const todoReducer = todoSlice.reducer; //went into the store
