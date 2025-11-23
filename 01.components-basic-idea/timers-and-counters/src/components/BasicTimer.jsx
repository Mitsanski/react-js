import { useState } from "react"

export default function BasicTimer() {
    const [time, setTime] = useState(0)

    setTimeout(() => {
            setTime(time + 1)
    }, 1000);

    return (
        <>
            <h2>Basic Timer</h2>
            <div>{time}</div>
                
            <hr />
        </>
    )
}