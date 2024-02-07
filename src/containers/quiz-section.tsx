'use client';

import React, { useState } from 'react';

import ConfettiComponent from '@/components/common/confeti';
import Wrapper from '@/components/common/wrapper';
import { TFlandersQuiz } from '@/interfaces/quiz/flanders-quiz.entity';

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
                {isSubmitted && <ConfettiComponent />}
            </Wrapper>
        </>
    );
}
