import { useState } from "react"

export default function BasicCounter() {
    const [count, setCount] = useState(0)

    function increase() {
        setCount(count + 1)
    }
    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={increase}>Increase</button>
            <hr />
        </>
    )
}