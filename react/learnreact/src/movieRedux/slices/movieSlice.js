import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, BASE_URL } from "../data";

export const fetchData = createAsyncThunk("fetchData", async (arr) => {
  if (Array.isArray(arr)) {
    const promises = [];
    arr.forEach((url) => promises.push(axios.get(url)));
    const response = await Promise.all(promises);
    // console.log(response);
    return response.map((obj) => obj.data);
  }
});

export const fetchSingleData = createAsyncThunk(
  "fetchSingleData",
  async (arr) => {
    const response = await axios.get(
      `${BASE_URL}${arr.join(
        "/"
      )}?api_key=${API_KEY}&append_to_response=credits`
    );
    return response.data;
  }
);

export const searchData = createAsyncThunk("searchData", async (url, data) => {
  await axios.get(url + "&query=" + data);
});

const movieSl = createSlice({
  name: "movieSlice",
  initialState: {
    loading: true,
    error: null,
    movies: [],
    singleMovie: {},
    searchTerm: "",
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
    actionBuilder.addCase(fetchSingleData.pending, (state) => {
      state.loading = true;
    });
    actionBuilder.addCase(fetchSingleData.fulfilled, (state, action) => {
      state.loading = false;
      state.singleMovie = action.payload;
    });
    actionBuilder.addCase(fetchSingleData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
// export {} = movieSl.actions;
export const movieReducer = movieSl.reducer;
