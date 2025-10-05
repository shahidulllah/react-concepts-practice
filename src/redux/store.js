import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/slices/counterSlice";

export const store = configureStore({
  reducer: {
    counterReducer,
  },
});
