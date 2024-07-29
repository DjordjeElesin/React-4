
import React, { useState, useRef  } from "react"

export default function ChangeColor () {
    const [color, setColor] = useState();
    const colorRef = useRef(null);

    const colorarray = ["red", "blue", "green", "yellow", "orange"]

    const changeColor = () => {
        setColor(colorarray[Math.floor(Math.random() * colorarray.length)])
        console.log(color)
        colorRef.current.style.background = color;
    }


    return (
        <div ref={colorRef}>
            <button onClick={() => changeColor()}>Change color</button>
        </div>
    )
}