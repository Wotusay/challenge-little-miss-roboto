'use client';

import { Confetti } from '@neoconfetti/react';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

import QuizButtons from '@/components/core/quiz-buttons';
import CheckboxButton from '@/components/elements/checkbox-button';
import Wrapper from '@/components/elements/wrapper';
import { TFlandersQuiz } from '@/interfaces/flanders-quiz.entity';
import { QuizSubmit } from '@/interfaces/quiz-submit.interface';

export default function QuizSection({
    currentQuiz,
    pageLength,
}: {
    currentQuiz: TFlandersQuiz;
    pageLength: number;
}) {
    const [isSubmitted, setIsSubmitted] = useState<QuizSubmit>({
        allCorrect: false,
        submitted: false,
    });
    const [beenPicked, setBeenPicked] = useState<string[]>([]);

    const router = useRouter();
    const { control, handleSubmit, watch, setValue } = useForm();
    const watchAllFields = watch();

    const correctAnswer = currentQuiz.answers.filter((quiz) => quiz.correct === true);
    // watchAllFields is an object with name as key => { name: boolean }
    // If 3 checkboxes are true set an single boolean to true
    const watchAllFieldsValues = Object.values(watchAllFields);
    // watchAllFieldsValues is an array with booleans => [true, false, true]
    const watchAllFieldsValuesTrue = watchAllFieldsValues.filter((value) => value === true);
    // watchAllFieldsValuesLength is an number => correctAnswer.length
    const watchAllFieldsValuesLength = watchAllFieldsValuesTrue.length;
    // If correctAnswer.length checkboxes are true set an single boolean to true
    const watchAllFieldsValuesLengthIsTrue = watchAllFieldsValuesLength === correctAnswer.length;
    // Also if there are 3 checkboxes make sure that the user can't select more

    function onSubmit(data: { [key: string]: boolean | undefined }) {
        // remove all undefined values in data
        const filteredData = Object.fromEntries(
            Object.entries(data).filter(([, value]) => value !== undefined),
        );

        // get the keys of the filteredData
        const keys = Object.keys(filteredData);
        // Check if the key is in the correctAnswer array
        keys.forEach((key) => {
            const isCorrect = correctAnswer.some((answer) => answer.answer === key);
            setValue(key, isCorrect);

            // push the key if its not already in the array
            if (!beenPicked.includes(key)) {
                setBeenPicked((array) => [...array, key]);
            }
        });
        // check if the keys is equal to the correctAnswer array item answer
        const allCorrect = keys.every((key) =>
            correctAnswer.map((answer) => answer.answer).includes(key),
        );

        setIsSubmitted(() => ({ allCorrect, submitted: true }));
    }

    function isSelected(label: string): boolean {
        return watchAllFields[label];
    }

    function proceed() {
        currentQuiz.isCompleted = true;
        // If we are on the end of the page length just go back to the start else just go forward
        // get a copy of the current page so it wont mutate
        const currentPage = currentQuiz.page;
        if (currentQuiz.page === pageLength) {
            return router.push('/1');
        }
        return router.push(`/${currentPage + 1}`);
    }

    return (
        <>
            <Wrapper className='relative'>
                <form className='h-full w-full' onSubmit={handleSubmit(onSubmit)}>
                    <section className='bg-cards text-white rounded-lg h-full grid grid-rows-[auto_auto_auto_200px] justify-center flex-col w-full justify-items-center text-center gap-8 p-10'>
                        <div>Progress</div>
                        <h2 className='font-bold max-w-[550px] self-center text-3xl'>
                            {currentQuiz.question}
                        </h2>
                        <div className='grid grid-cols-[repeat(_2,_450px)] self-center gap-y-6 gap-x-8 m-auto'>
                            {currentQuiz.answers.map((quiz, index) => (
                                <CheckboxButton
                                    key={`${quiz.answer}-${index}`}
                                    beenPicked={beenPicked.includes(quiz.answer)}
                                    isSubmitted={isSubmitted.submitted}
                                    control={control}
                                    label={quiz.answer}
                                    disabled={
                                        !isSelected(quiz.answer) && watchAllFieldsValuesLengthIsTrue
                                    }
                                    isCorrect={quiz.correct}
                                    allCorrect={isSubmitted.allCorrect}
                                />
                            ))}
                        </div>
                        <QuizButtons
                            proceed={proceed}
                            isSubmitted={isSubmitted}
                            watchAllFieldsValuesLengthIsTrue={watchAllFieldsValuesLengthIsTrue}
                        />
                    </section>
                </form>
                {isSubmitted.allCorrect && (
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
