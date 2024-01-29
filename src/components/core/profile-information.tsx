import { Divider } from '@nextui-org/divider';
import React from 'react';

import { Content } from '@/interfaces/content.interface';

import ProfileAvatar from './profile-avatar';

export default function ProfileInformation({ content }: { content: Content }) {
    return (
        <div className='bg-white relative rounded-b-lg w-full h-full p-12 px-6 flex flex-col gap-4 text-center items-center'>
            <div className='absolute -top-[90px] w-auto'>
                <ProfileAvatar />
            </div>
            <div className='flex w-full flex-col gap-2 items-center'>
                <h2 className='font-bold text-2xl'>{content.title}</h2>
                <Divider className='h-[3px] w-[100px]' />
            </div>
            <p className='w-full text-lg'>{content.description}</p>
            <p
                className='w-full pt-2 text-lg'
                dangerouslySetInnerHTML={{ __html: content.richText }}></p>
        </div>
    );
}
