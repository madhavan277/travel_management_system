import { createSlice } from "@reduxjs/toolkit";
import {
  forgotPassword,
  resetPassword,
  verifyOTP,
} from "../Extra actions/userActions";

const forgotPassSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    success: false,
    error: null,
    emailMsg: "",
    otpMsg: "",
    otp: "",
  },
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = "";
      state.success = false;
      state.otp = "";
      state.otpMsg = "";
      state.emailMsg = "";
    },
  },
  extraReducers: {
    [forgotPassword.pending]: (state) => {
      state.loading = true;
    },
    [forgotPassword.fulfilled]: (state, action) => {
      state.loading = false;
      state.emailMsg = action.payload.message || "";
      state.otpMsg = action.payload.phoneMessage || "";
    },
    [forgotPassword.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error;
    },
    [resetPassword.pending]: (state) => {
      state.loading = true;
    },
    [resetPassword.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = action.payload.success;
    },
    [resetPassword.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error;
    },
    [verifyOTP.pending]: (state) => {
      state.loading = true;
    },
    [verifyOTP.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = action.payload.success;
      state.otp = action.payload.otp;
    },
    [verifyOTP.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error;
    },
  },
});

export const { clearErrors, clearMessage } = forgotPassSlice.actions;
export const forgotPasswordReducer = forgotPassSlice.reducer;
