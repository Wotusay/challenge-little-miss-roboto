import React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

import { cn } from '@/utils/tw-merge';

export type CheckboxButtonProps = {
    label: string;
    isCorrect: boolean;
    isSubmitted: boolean;
    beenPicked: boolean;
    allCorrect: boolean;

    disabled?: boolean;
    control?: Control<FieldValues, any>;
};

export default function CheckboxButton({
    label,
    isCorrect,
    isSubmitted,
    beenPicked,
    allCorrect,
    control,
    disabled = false,
}: CheckboxButtonProps) {
    const isCorrectAnswer = isCorrect && isSubmitted && beenPicked;
    const wrongAnswer = !isCorrect && beenPicked && isSubmitted;

    const classesForStates = isCorrectAnswer
        ? 'peer-checked:bg-white peer-checked:border-success peer-checked:text-background peer-disabled:opacity-100'
        : wrongAnswer
          ? 'peer-disabled:border-danger peer-disabled:opacity-75'
          : 'peer-checked:bg-divider peer-checked:border-primary peer-checked:text-white peer-disabled:opacity-75';

    return (
        <label className='w-full h-full'>
            <Controller
                name={label}
                control={control}
                disabled={allCorrect || wrongAnswer || disabled}
                render={({ field }) => (
                    <input
                        checked={field.value}
                        className='hidden peer'
                        type='checkbox'
                        {...field}
                    />
                )}
            />
            <span
                className={cn(
                    classesForStates,
                    'text-xl opacity-100 border-solid border-3 border-checkbox-default w-full z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 px-unit-6 min-w-unit-24 h-unit-16 gap-unit-3 rounded-small active:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-checkbox-default text-background hover:opacity-hover font-bold',
                )}>
                {label}
            </span>
        </label>
    );
}
