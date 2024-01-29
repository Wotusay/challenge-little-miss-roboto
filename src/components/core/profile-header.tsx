import Image from 'next/image';

export default function ProfileHeader() {
    return (
        <div className='relative'>
            <Image
                className='object-cover w-full rounded-t-lg h-full max-h-[300px]'
                src='/assets/images/background.png'
                width={1345}
                height={696}
                loading='eager'
                priority={true}
                alt='Machines Working'
            />
            <div className='rounded-t-lg absolute inset-0 bg-custom-blue'></div>
        </div>
    );
}
