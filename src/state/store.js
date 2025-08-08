import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import userSlice from "./usersSlice";

export const store = configureStore({
  reducer: {
    counterSlice,
    userSlice,
  },
});
