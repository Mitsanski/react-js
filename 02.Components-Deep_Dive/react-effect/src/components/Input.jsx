import { useEffect, useState } from "react";

export default function Input() {
    const [state, setState] = useState(true)
    const [text, setText] = useState('')
    console.log('Render')
    // on mount 
    useEffect(() => {
        console.log('Mounting')
    }, []);

    // on input change
    useEffect(() => {
        console.log('On text change - ')
    }, [text])

    // on button click

    useEffect(() => {
        console.log('on state change')
    }, [state]);

    // on unmount
    useEffect(() => {
        // clean up function
        return () => {
            console.log('On unmount')
        }
    }, []);

    const buttonClickHandler = () => {
        console.log('Button Clicked');

        // Toggle state
        setState(oldState => !oldState)
    }

    const inputChangeHandler = (e) => {
        setText(e.target.value)
    }
    return (
        <>
            <h3>Input Component</h3>

            <input type="text" onChange={inputChangeHandler} />

            <button onClick={buttonClickHandler}>Update</button>
        </>
    )
}