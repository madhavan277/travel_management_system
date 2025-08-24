import { configureStore } from "@reduxjs/toolkit";
import { forgotPasswordReducer } from "./Slices/entities/forgotPasswordSlice";
import { userReducer } from "./Slices/entities/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    forgotPass: forgotPasswordReducer,
  },
});
