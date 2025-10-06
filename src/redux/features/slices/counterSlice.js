import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    incrementByValue: (state, { payload }) => {
      state.value = state.value + payload;
    },
    decrementByValue: (state, { payload }) => {
      state.value = state.value - payload;
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const { increment, decrement, incrementByValue, decrementByValue } = counterSlice.actions;
