import React, { useEffect, useState } from 'react';

import { Stopwatch } from '../icons/icons';

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

    return (
        <span className={className}>
            <Stopwatch className='w-[18px] h-[18px]' /> {formatTime(time)}
        </span>
    );
}
