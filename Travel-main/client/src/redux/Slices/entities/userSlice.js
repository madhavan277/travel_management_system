import { createSlice } from "@reduxjs/toolkit";
import { getUser, loginUser, registerUser } from "../Extra actions/userActions";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload.data;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [registerUser.pending]: (state) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload.data;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    [registerUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getUser.pending]: (state) => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload.data;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    [getUser.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { clearErrors } = userSlice.actions;
export const userReducer = userSlice.reducer;
