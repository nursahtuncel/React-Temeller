import React from "react";
import { useRef } from "react";

// ekrana basmak istemeyeceğim değerleri useRef ile kullanılırız .Ekrana basacağım değerleri useState ile kullanırım
const Counter = () => {
  const countRef = useRef(1);

  const handleIncrement = () => {
    countRef.current++;
  };
  const handleDecrement = () => {
    countRef.current--;
  };

  return (
    <div>
      <button onClick={handleIncrement}>Arttır</button>
      <span style={{ color: "red" }} ref={countRef}>
        {countRef.current}
      </span>
      <button onClick={handleDecrement}>Azalt</button>
    </div>
  );
};

export default Counter;
