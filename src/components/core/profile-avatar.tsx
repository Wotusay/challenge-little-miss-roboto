import { Avatar } from '@nextui-org/avatar';
import React from 'react';

import { cn } from '@/utils/tw-merge';

export default function ProfileAvatar({ className }: { className?: string }) {
    return (
        <div className={cn(className, 'relative w-full h-full flex justify-center')}>
            <Avatar
                classNames={{
                    base: 'bg-avatar-blue w-full h-full max-w-[120px] max-h-[120px] z-10',
                }}
                src='/assets/images/avatar.png'
                size='lg'
            />
            <Avatar
                classNames={{
                    base: 'bg-avatar-blue w-full h-full absolute opacity-25 max-w-[120px] max-h-[120px] top-0 mt-1 -z-1',
                }}
                src='/assets/images/avatar.png'
                size='lg'
            />
        </div>
    );
}
