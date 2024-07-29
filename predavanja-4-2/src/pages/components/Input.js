import { useEffect, useRef } from "react"

export default function Input(){
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Enter text"/>
        </div>
    )
}