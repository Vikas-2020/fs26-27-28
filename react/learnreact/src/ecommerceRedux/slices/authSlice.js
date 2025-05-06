import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase.js";
const auth = getAuth(app);

export const handleSubmit = createAsyncThunk("handleSubmit", async (form) => {
  await signInWithEmailAndPassword(auth, form.email, form.password);
});

export const handleLogout = createAsyncThunk("handleLogout", async () => {
  await auth.signOut();
});

const authSl = createSlice({
  name: "authSlice",
  initialState: {
    isLoggedIn: false,
    form: {
      email: "",
      password: "",
    },
    message: {
      type: "",
      text: "",
    },
    loading: false,
    error: null,
  },
  reducers: {
    handleChange: function (state, action) {
      const { name, value } = action.payload;
      state.form[name] = value;
    },
    setUser: function (state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (actionBuilder) => {
    actionBuilder
      .addCase(handleSubmit.pending, (state) => {
        state.loading = true;
      })
      .addCase(handleSubmit.fulfilled, (state) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.message.type = "success";
        state.message.text = "Login successful!";
        console.log(state);
      })
      .addCase(handleSubmit.rejected, (state) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.message.type = "error";
        state.message.text = "Login failed! Please try again.";
      })
      .addCase(handleLogout.pending, (state) => {
        state.loading = true;
      })
      .addCase(handleLogout.fulfilled, (state) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.message.type = "success";
        state.message.text = "Logout successful!";
      })
      .addCase(handleLogout.rejected, (state) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.message.type = "error";
        state.message.text = "Logout failed! Please try again.";
      });
  },
});

export const { handleChange, setUser } = authSl.actions;

export const authReducer = authSl.reducer;
