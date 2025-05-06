import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("fetchData", async (url) => {
  const response = await axios.get(url);
  return response.data.results;
});

const movieSl = createSlice({
  name: "movieSlice",
  initialState: {
    loading: true,
    error: null,
    movies: [],
  },
  reducers: {},
  extraReducers: (actionBuilder) => {
    actionBuilder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    actionBuilder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    });
    actionBuilder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
// export {} = movieSl.actions;
export const movieReducer = movieSl.reducer;
