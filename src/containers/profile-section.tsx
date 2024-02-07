import React from 'react';

import ProfileHeader from '@/components/core/profile-header';
import ProfileInformation from '@/components/core/profile-information';
import { Content } from '@/interfaces/content/content.interface';

export default function ProfileSection({ content }: { content: Content }) {
    return (
        <div className='relative w-full h-full flex flex-col'>
            <ProfileHeader />
            <ProfileInformation content={content} />
        </div>
    );
}
