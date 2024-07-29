import React, { useState, useRef, useEffect } from "react";

export default function RenderCount() {
  const countRef = useRef(0);
  const [counter, setCounter] = useState(0);


  const increase = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  useEffect(() => {
      countRef.current = countRef.current + 1;

  }, [counter])

  return (
    <div>
      <button onClick={increase}>Click me!</button>
      <p>Counter: {counter}</p>
      <p>Rerenders: {countRef.current}</p>
    </div>
  );
}
