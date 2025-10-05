import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
    const count = useSelector((state)=> state.counterReducer)
    console.log(count);
    return (
        <div>
            <button>Decrement</button>
            <div></div>
            <button>Increment</button>
            <button>Increment 5</button>
        </div>
    );
};

export default Counter;