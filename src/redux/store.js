import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/slices/counterSlice";
import { baseApi } from "./features/baseApi/baseApi";

export const store = configureStore({
  reducer: {
    counterReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    getDefaultMiddleware().concat(baseApi.middleware);
  },
});
