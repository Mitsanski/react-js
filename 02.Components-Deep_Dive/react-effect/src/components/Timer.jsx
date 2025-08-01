import { useEffect, useState } from "react"

export default function Timer() {
    const [isManual, setIsManual] = useState(false);
    const [time, setTime] = useState(new Date().getSeconds());

    useEffect(() => {
        if (!isManual) {
            setTimeout(() => {
                setTime(seconds => seconds + 1)
                setIsManual(false)
            }, 1000);
        }
    }, [time, isManual])


    const addTimeHandler = () => {
        setTime(seconds => seconds + 10)
        setIsManual(true);
    }
    return (
        <>
            <h3>Timer</h3>
            <div>{time}</div>
            <button onClick={addTimeHandler}>Add time</button>
        </>
    )
}