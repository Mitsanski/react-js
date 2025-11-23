import { useEffect, useState } from "react";

export default function Timer() {
    const [isManual, setIsManual] = useState(false);
    const [time, setTime] = useState(() => {
        return new Date().getSeconds()
    });

    useEffect(() => {
        if (!isManual) {
            setTimeout(() => {
                setTime(prev => prev + 1)
                setIsManual(false);
            }, 1000);
        }
    }, [time]);


    const addTimeHandler = () => {
        setTime(s => s + 10);
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