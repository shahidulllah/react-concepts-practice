import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
} from "../../redux/features/slices/counterSlice";

const Counter = () => {
  const { value } = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div className="h-44 text-center mt-16">
      <button onClick={() => dispatch(decrement())} className="btn btn-accent">
        Decrement
      </button>
      <button
        onClick={() => dispatch(decrementByValue(5))}
        className="btn btn-accent"
      >
        Decrement 5
      </button>
      <div className="my-5 text-2xl font-semibold">{value}</div>
      <button
        onClick={() => dispatch(increment())}
        className="btn btn-accent mr-12"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(incrementByValue(5))}
        className="btn btn-accent"
      >
        Increment 5
      </button>
    </div>
  );
};

export default Counter;
