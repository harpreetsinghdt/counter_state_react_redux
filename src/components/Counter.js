// Counter.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../components/actions/actions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleClick = (e, type) => {
    e.preventDefault();
    if (type === "inc") dispatch(increment());
    if (type === "dec") dispatch(decrement());
  };

  return (
    <div className="container">
      <p>Count: {count}</p>
      <button onClick={(e) => handleClick(e, "dec")}>Decrement</button>
      <button onClick={(e) => handleClick(e, "inc")}>Increment</button>
    </div>
  );
};

export default Counter;
