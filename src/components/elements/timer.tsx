import React, { useEffect, useState } from 'react';

export default function Timer({
    timeInMs,
    className,
    isRunning = false,
    ranOut,
}: {
    timeInMs: number;
    isRunning?: boolean;
    ranOut: () => void;
    className?: string;
}) {
    const [time, setTime] = useState(timeInMs);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);

        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setTime((prevTime) => prevTime - 1000);
        }, 1000);

        if (time === 0) {
            ranOut();
        }

        return () => {
            clearInterval(interval);
        };
    }, [isRunning, time, ranOut]);

    return <span className={className}>{formatTime(time)}</span>;
}
