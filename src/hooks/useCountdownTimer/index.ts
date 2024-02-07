import { useState, useEffect } from 'react';

export default function useCountdownTimer(
    timeInMs: number,
    isRunning: boolean,
    ranOut: () => void,
) {
    const [time, setTime] = useState(timeInMs);

    useEffect(() => {
        let interval: any = null;

        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1000);
            }, 1000);
        } else if (!isRunning && time !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRunning, time]);

    useEffect(() => {
        if (time === 0) {
            ranOut();
        }
    }, [time, ranOut]);

    return time;
}
