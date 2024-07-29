import React, { useState, useRef  } from "react"

export default function PreviousState () {
    const [state, setState] = useState("currentState");
    const stateRef = useRef(null);

    const toggleState = () => {
        state ===  "currentState" ? setState("prevState") : setState("currentState");
    }


    return (
        <div>
            <p ref={stateRef}>{state}</p>
            <button onClick={toggleState}>Change state</button>
        </div>
    )
}