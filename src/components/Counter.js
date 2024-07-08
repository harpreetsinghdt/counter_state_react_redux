// Counter.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../components/actions/actions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleClick = (e, type) => {
    e.preventDefault();
    console.log(type);
    if (type === "inc") dispatch(increment());
    if (type === "dec") dispatch(decrement());
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={(e) => handleClick(e, "inc")}>Increment</button>
      <button onClick={(e) => handleClick(e, "dec")}>Decrement</button>
    </div>
  );
};

export default Counter;
