import React from 'react';

import { cn } from '@/utils/tw-merge';

export default function Wrapper({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn('bg-overlay w-full h-full p-4 rounded-lg', className)}>{children}</div>
    );
}
