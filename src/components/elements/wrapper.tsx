import React from 'react';

import { cn } from '@/utils';

export default function Wrapper({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn('bg-overlay w-full h-full p-4 rounded-md', className)}>{children}</div>
    );
}
