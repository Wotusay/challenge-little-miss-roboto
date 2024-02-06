'use client';

import { Confetti } from '@neoconfetti/react';

import React, { useState } from 'react';

import Wrapper from '@/components/elements/wrapper';
import { TFlandersQuiz } from '@/interfaces/flanders-quiz.entity';

import FormContainer from './form-container';

export default function QuizSection({
    currentQuiz,
    pageLength,
}: {
    currentQuiz: TFlandersQuiz;
    pageLength: number;
}) {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    function allCorrect(allCorrect: boolean) {
        setIsSubmitted(allCorrect);
    }

    return (
        <>
            <Wrapper className='relative'>
                <FormContainer
                    isAllCorrect={allCorrect}
                    currentQuiz={currentQuiz}
                    pageLength={pageLength}
                />
                {isSubmitted && (
                    <div className='w-full h-full absolute inset-0 flex justify-center pointer-events-none'>
                        <Confetti
                            stageHeight={1000}
                            colors={['#FFE200', '#B0E1F3', '#0C6AAE', '#FFFFFF']}
                        />
                    </div>
                )}
            </Wrapper>
        </>
    );
}
