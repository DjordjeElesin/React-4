import React, { useState, useRef, useEffect } from "react";

export default function CountdownTimer() {
  const [inputValue, setInputValue] = useState("");
  const [countdown, setCountdown] = useState(0);
  const intervalRef = useRef(null);

  const ONE_SECOND = 1000;

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const startCountdown = (time) => {
    setCountdown(time);
  };

  useEffect(() => {
    
  })

 /*  useEffect(() => {
    const test = setInterval(() => {
      console.log(countdown);
      setCountdown(prevState => {
        return prevState - 1
      })
    }, ONE_SECOND);

    if (countdown === 0) {
      clearInterval(test);
    }

    return () => {
      return clearInterval(test);
    };
  }, [countdown]);
 */
  return (
    <div>
      <input
        type="number"
        placeholder="Enter countdown start"
        onChange={handleChangeInput}
        value={inputValue}
      />
      <button onClick={() => startCountdown(inputValue)}>
        Start countdown
      </button>
      <h3>{countdown}</h3>
    </div>
  );
}
