import React, {useRef, useState} from "react";

export default function DynamicFontSize() {
    const paragraphRef = useRef(null);
    const [fontSize, setFontSize] = useState(18);

    const handleIncreaseFontSize = () =>{
        setFontSize((prev) => {return prev + 2})
        console.log(fontSize);
        paragraphRef.current.style.fontSize = `${fontSize}px`;
    }

    return (

        <>
            <p ref={paragraphRef} style={{fontSize: "16px"}}>Paragraph text</p>
            <button onClick={handleIncreaseFontSize}>Increase font size</button>
        </>
    )   
}