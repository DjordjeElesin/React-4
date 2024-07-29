import React, {useRef, useState} from "react";

export default function ToggleVisibility() {
    const [isVisible, setIsVisible] = useState(false);
    const divRef = useRef(null);

    const handleToggleVisibility = () => {
        setIsVisible(!isVisible);
        isVisible ? divRef.current.style.visibility = "visible" : divRef.current.style.visibility = "hidden"
    }


    
    
    return (
        <>
            <div ref={divRef}>
                <h3>Some text inside a div</h3>
            </div>
            <button onClick={handleToggleVisibility}>Toggle Visibility</button>
        </>
    )
}