import { userAgent } from "next/server";
import React, {useRef} from "react";

export default function ClickCounter() {
    const countRef = useRef(null);

    const handleButtonClick = () => {
        countRef.current = countRef.current + 1;
        console.log("Counter ref: ", countRef.current);
    }
    
    const handleResetCountRef = () => {
        countRef.current= 0;
        console.log("Counter ref: ", countRef.current);
    }

    return (
        <div>
            <button style={{margin: "10px"}} onClick={handleButtonClick}>Increase counter ref</button>
            <button onClick={handleResetCountRef}>Reset couter ref</button>
        </div>
    )
}