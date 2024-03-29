import { Button } from '@nextui-org/button';

import { QuizSubmit } from '@/interfaces/quiz/quiz-submit.interface';
import { cn } from '@/utils/tw-merge';

type QuizButtonsProps = {
    proceed: () => void;
    isSubmitted: QuizSubmit;
    watchAllFieldsValuesLengthIsTrue: boolean;
};

export default function QuizButtons({
    proceed,
    isSubmitted,
    watchAllFieldsValuesLengthIsTrue,
}: QuizButtonsProps) {
    return (
        <div>
            <div
                className={cn(
                    isSubmitted.allCorrect ? 'hidden' : 'flex',
                    'flex-col gap-4 self-center justify-self-center w-[400px]',
                )}>
                <Button
                    aria-label='Klaar'
                    type='submit'
                    className='shadow-inset-black-25 font-bold'
                    size='lg'
                    radius='sm'
                    color={!watchAllFieldsValuesLengthIsTrue ? 'secondary' : 'primary'}
                    isDisabled={!watchAllFieldsValuesLengthIsTrue}
                    variant='solid'>
                    Klaar!
                </Button>
                <Button
                    aria-label='Geef me een tip'
                    className='shadow-inset-black-25 font-bold'
                    size='lg'
                    radius='sm'
                    color='secondary'
                    variant='solid'>
                    Geef me een tip...
                </Button>
            </div>
            <Button
                size='lg'
                aria-label='Doorgaan'
                radius='sm'
                color='primary'
                variant='solid'
                onClick={proceed}
                className={cn(
                    isSubmitted.allCorrect ? 'flex' : 'hidden',
                    'font-bold shadow-inset-black-25 w-[400px]',
                )}>
                Doorgaan
            </Button>
        </div>
    );
}
