'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';

import QuizButtons from '@/components/core/quiz-buttons';
import TimerProgressHeader from '@/components/core/timer-progress-header';
import CheckboxButton from '@/components/elements/checkbox-button';
import { TFlandersQuiz } from '@/interfaces/flanders-quiz.entity';
import { QuizSubmit } from '@/interfaces/quiz-submit.interface';

type FormContainerProps = {
    currentQuiz: TFlandersQuiz;
    pageLength: number;
    isAllCorrect: (allCorrect: boolean) => void;
};

export default function FormContainer({
    currentQuiz,
    pageLength,
    isAllCorrect,
}: FormContainerProps) {
    const [isSubmitted, setIsSubmitted] = useState<QuizSubmit>({
        allCorrect: false,
        submitted: false,
    });
    const [beenPicked, setBeenPicked] = useState<string[]>([]);
    const [isRunning, setIsRunning] = useState(false);
    const router = useRouter();

    const defaultValues: { [key: string]: boolean } = currentQuiz.answers.reduce(
        (acc: { [key: string]: boolean }, curr) => {
            acc[curr.answer] = false;
            return acc;
        },
        {},
    );

    const {
        control,
        handleSubmit,
        watch,
        setValue,
        formState: { isDirty },
    } = useForm({ mode: 'onChange', defaultValues });

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
    console.info(watchAllFieldsValuesLengthIsTrue);

    function onSubmit(data: { [key: string]: boolean | undefined }) {
        // remove all undefined values in data
        const filteredData = Object.fromEntries(
            Object.entries(data).filter(([, value]) => value !== undefined),
        );

        // get the keys of the filteredData
        checkData(filteredData, false);
    }

    function checkData(
        filteredData: { [key: string]: boolean | undefined },
        setAllCorrect: boolean | undefined = false,
    ) {
        if (setAllCorrect)
            return setIsSubmitted(() => ({ allCorrect: setAllCorrect, submitted: true }));

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

        isAllCorrect(allCorrect);
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

    function timeRanOut() {
        setIsRunning(false);
        currentQuiz.answers.forEach((answer) => {
            if (answer.correct) {
                setValue(answer.answer, true);
            } else {
                setValue(answer.answer, false);
            }

            if (!beenPicked.includes(answer.answer)) {
                setBeenPicked((array) => [...array, answer.answer]);
            }
        });
        checkData({}, true);
    }

    useEffect(() => {
        if (isDirty && !isRunning && !isSubmitted.allCorrect) {
            setIsRunning(true);
        }
        if (isSubmitted.allCorrect) {
            setIsRunning(false);
        }
    }, [isDirty, isSubmitted.allCorrect]);

    return (
        <form className='h-full w-full' onSubmit={handleSubmit(onSubmit)}>
            <section className='bg-cards text-white rounded-lg h-full grid grid-rows-[auto_auto_auto_200px] justify-center flex-col w-full justify-items-center text-center gap-8 p-10'>
                <TimerProgressHeader
                    classNames={{
                        progress: 'max-w-[190px]',
                        timer: 'text-xl inset-blue flex gap-2 bg-white rounded-full items-center px-7 py-3 text-foreground font-bold',
                    }}
                    pageLength={pageLength}
                    currentPage={currentQuiz.page}
                    timeInMs={currentQuiz.timeLimitMs}
                    ranOut={timeRanOut}
                    isRunning={isRunning}
                />
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
                            disabled={!isSelected(quiz.answer) && watchAllFieldsValuesLengthIsTrue}
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
    );
}
