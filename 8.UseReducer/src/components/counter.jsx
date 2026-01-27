import React from "react";
import { useReducer } from "react";
import counterReducer from "../reducer/counter-reducer";
const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, 1);
  return (
    <div>
      <h1>sayaç:{state}</h1>

      <div>
        <button onClick={() => dispatch({ type: "Sıfırla" })}>sıfırla</button>
        <button onClick={() => dispatch({ type: "Arttır" })}>arttır</button>
        <button onClick={() => dispatch({ type: "Azalt" })}>azalt</button>
      </div>
    </div>
  );
};

export default Counter;
