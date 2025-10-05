import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    incrementByValue: (state, actions) => {
      state.value = state.value + actions.payload;
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const { increment, decrement, incrementByValue } = counterSlice.actions;
