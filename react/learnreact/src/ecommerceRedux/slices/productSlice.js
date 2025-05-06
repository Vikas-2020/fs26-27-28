import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("allProducts", async () => {
  const response = await axios.get("https://fakestoreapi.in/api/products");
  return response.data;
});

export const fetchSingleProduct = createAsyncThunk(
  "singleProduct",
  async (id) => {
    const response = await axios.get(
      "https://fakestoreapi.in/api/products/" + id
    );
    return response.data;
  }
);

const productSl = createSlice({
  name: "productSlice",
  initialState: {
    products: [],
    singleProduct: {},
    loading: true,
    error: null,
  },
  reducers: {},

  extraReducers: (actionBuilder) => {
    actionBuilder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = "There is a problem in fetching products";
      })
      .addCase(fetchSingleProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.singleProduct = action.payload.product;
      })
      .addCase(fetchSingleProduct.rejected, (state) => {
        state.loading = false;
        state.error = "There is a problem in fetching the product";
      });
  },
});

export const productReducer = productSl.reducer;
