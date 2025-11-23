import { useEffect, useState } from "react";

export default function Input() {
    const [state, setState] = useState(true);
    const [text, setText] = useState("");

    // On Mount
    useEffect(() => {
        console.log("Mounting");
    }, []);

    const buttonClickHandler = () => {
        console.log("Button clicked");

        // Toggle state
        setState((prev) => !prev);
    };

    useEffect(() => {
        console.log("shit was changed");
    }, [text]);

    useEffect(() => { 
        // cleanup function
        return () => {
            console.log('On unmount')
        }
    });

    const inputChangeHandler = (e) => {
        setText(e.target.value);
    };
    return (
        <>
            <h3>Input Component</h3>
            <input type="text" onChange={inputChangeHandler} />

            <button onClick={buttonClickHandler}>Update</button>
        </>
    );
}
