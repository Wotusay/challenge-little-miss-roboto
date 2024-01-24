import { Button } from '@nextui-org/button';

import { Question, ArrowRotateRight, MusicNoteSlash, Map } from '@/components/icons/icons';

export default function SettingsSection() {
    const settings = [Question, ArrowRotateRight, MusicNoteSlash];
    return (
        <div>
            {settings.map((Setting, index) => (
                <Button key={index} radius='sm' isIconOnly>
                    <Setting />
                </Button>
            ))}
            <Button
                color='primary'
                className='font-bold'
                variant='solid'
                radius='sm'
                startContent={<Map className='w-[24px]' />}>
                Naar de kaart
            </Button>
        </div>
    );
}
