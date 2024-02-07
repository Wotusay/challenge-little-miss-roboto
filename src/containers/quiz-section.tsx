'use client';

import dynamic from 'next/dynamic';
import React, { useState } from 'react';

import Wrapper from '@/components/common/wrapper';
import useHeight from '@/hooks/useHeight';
import { TFlandersQuiz } from '@/interfaces/quiz/flanders-quiz.entity';

import FormContainer from './form-container';

const ConfettiComponent = dynamic(() => import('@/components/common/confeti'));

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

    const height = useHeight() ?? 2000;

    return (
        <>
            <Wrapper className='relative'>
                <FormContainer
                    isAllCorrect={allCorrect}
                    currentQuiz={currentQuiz}
                    pageLength={pageLength}
                />
                {isSubmitted && <ConfettiComponent height={height} />}
            </Wrapper>
        </>
    );
}
