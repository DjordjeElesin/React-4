import React, {useRef, useState} from "react";

export default function AddClassOnClick () {
    const divRef = useRef(null);

    const handleAddClass = () => {
        divRef.current.classList.add = "addedClass"
    }

    return (
        <div ref={divRef} className="">
            <button onClick={handleAddClass}>Add Class</button>
        </div>
    )
}