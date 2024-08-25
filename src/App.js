import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increase = (num) => {
    dispatch({ type: "INCREAMENT", payload: { num } });
  };

  const decrease = (num) => {
    dispatch({ type: "DECREAMENT", payload: { num } });
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => increase(5)}>5 증가</button>
      <button onClick={() => increase(1)}>1 증가</button>
      <button onClick={() => decrease(1)}>1 감소</button>
      <button onClick={() => decrease(5)}>5 증가</button>
    </div>
  );
}

export default App;
