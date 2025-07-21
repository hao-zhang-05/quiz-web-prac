import { useEffect, useState } from 'react'

export default function Timer({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        setTimeout(onTimeout, timeout);
    }, [timeout, onTimeout]);

    useEffect(() => {
        setInterval(() => {
            setRemainingTime(prevTimeRemaining => prevTimeRemaining - 100);
        }, 100)
    }, []);

    return (
        <progress id="question-time" max={timeout} value={remainingTime} />
    )
}