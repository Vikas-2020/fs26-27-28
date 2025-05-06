import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "./slices/movieSlice";

const store = configureStore({
  reducer: {
    movieReducer: movieReducer,
  },
});
export default store;
