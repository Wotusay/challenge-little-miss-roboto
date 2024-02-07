'use client';

import { Confetti } from '@neoconfetti/react';

export default function ConfettiComponent({ height }: { height: number }) {
    return (
        <div className='w-full h-full absolute inset-0 flex justify-center pointer-events-none'>
            <Confetti
                stageHeight={height ?? 2000}
                colors={['#FFE200', '#B0E1F3', '#0C6AAE', '#FFFFFF']}
            />
        </div>
    );
}
