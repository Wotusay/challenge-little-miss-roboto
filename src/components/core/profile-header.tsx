import Image from 'next/image';

export function ProfileHeader() {
    return (
        <div>
            <div>
                <Image
                    className='object-cover w-full h-full max-h-[300px]'
                    src='/assets/images/background.png'
                    width={1345}
                    height={696}
                    alt='Machines Working'
                />
            </div>
        </div>
    );
}
