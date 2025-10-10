import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./features/slices/counterSlice";
import { baseApi } from "./features/api/baseApi";

export const store = configureStore({
  reducer: {
    counterSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    getDefaultMiddleware().concat(baseApi.middleware);
  },
});
