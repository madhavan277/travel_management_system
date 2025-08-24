import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const base = process.env.REACT_APP_BACKEND_URL || "";

export const registerUser = createAsyncThunk(
  "user/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${base}/api/signup`, userData, {
        headers: { "Content-Type": "application/json" },
      });
      return { data: data.user, isAuthenticated: true };
    } catch (err) {
      return rejectWithValue(err.response.data.error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${base}/api/login`, userData, {
        headers: { "Content-Type": "application/json" },
      });
      return { data: data.user, isAuthenticated: true };
    } catch (err) {
      return rejectWithValue(err.response.data.error);
    }
  }
);

export const getUser = createAsyncThunk(
  "user/getInfo",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${base}/api/aboutme`);
      return { data: data.user, isAuthenticated: data.success };
    } catch (err) {
      return rejectWithValue(err.response.data.error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/getInfo",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${base}/api/logout`);
      return data.message;
    } catch (err) {
      return rejectWithValue(err.response.data.error);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "user/password/forgot",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${base}/api/password/forgot`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data.error);
    }
  }
);

export const verifyOTP = createAsyncThunk(
  "user/password/verifyOTP",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${base}/api/otp/verify`, userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (data) return data;
    } catch (err) {
      return rejectWithValue(err.response.data.error);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "user/password/reset",
  async ({ token, ...userData }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `${base}/api/password/reset/${token}`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data) return data;
    } catch (err) {
      return rejectWithValue(err.response.data.error);
    }
  }
);
