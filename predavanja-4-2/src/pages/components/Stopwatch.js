import React, { useState, useRef, useEffect } from "react";

export default function Stopwatch() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  let intervalRef = useRef(null);

  const ONE_SECOND = 1000;

  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, ONE_SECOND);
  };

  const handleStop = () => {
    if (!isRunning) return;
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setElapsedTime(0);
  };

  const handleStopwatch = () => {
    setIsRunning(!isRunning);
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, ONE_SECOND);
    } else {
      clearInterval(intervalRef.current);
      setElapsedTime(0);
    }
  };

  return (
    <div>
      <p ref={intervalRef}>{elapsedTime}</p>
      <button onClick={handleStopwatch}>{isRunning ? "Start" : "Stop"}</button>
     {/*  <button onClick={handleStop}>Stop</button> */}
    </div>
  );
}
