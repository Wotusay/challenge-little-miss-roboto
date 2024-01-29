import { Button } from '@nextui-org/button';

import { Question, ArrowRotateRight, MusicNoteSlash, Map } from '@/components/icons/icons';

export default function SettingsSection() {
    const settings = [Question, ArrowRotateRight, MusicNoteSlash];
    return (
        <div className='flex justify-between h-full w-full flex-wrap 2xl:flex-nowrap gap-y-4'>
            {settings.map((Setting, index) => (
                <Button
                    className='shadow-inset-black-25 h-full max-h-[50px]'
                    key={index}
                    radius='sm'
                    size='lg'
                    isIconOnly>
                    <Setting />
                </Button>
            ))}
            <Button
                color='primary'
                className='font-bold shadow-inset-black-25 w-full 2xl:w-auto'
                variant='solid'
                size='lg'
                radius='sm'
                startContent={<Map className='w-[24px]' />}>
                Naar de kaart
            </Button>
        </div>
    );
}
