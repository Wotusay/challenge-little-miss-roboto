import React from 'react';

import useCountdownTimer from '@/hooks/useCountdownTimer';

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
    const time = useCountdownTimer(timeInMs, isRunning, ranOut);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);

        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <span className={className}>
            <Stopwatch className='w-[18px] h-[18px]' /> {formatTime(time)}
        </span>
    );
}
