import { env } from 'process';

import {
    FlandersQuiz,
    FlandersQuizApi,
    TFlandersQuiz,
} from '@/interfaces/quiz/flanders-quiz.entity';

export default async function getQuizData(): Promise<TFlandersQuiz[]> {
    const url: string = env.NEXT_PUBLIC_API_URL ?? '';
    const res = await fetch(url);
    const data = await res.json(); // Parse the response as JSON

    const quizData = data as FlandersQuizApi[];

    return quizData.map((quizData, index) => {
        const classFlanders = new FlandersQuiz({ ...quizData, index });

        const typedFlanders = {
            question: classFlanders.question,
            timeLimitMs: classFlanders.timeLimitMs,
            answers: classFlanders.answers,
            page: classFlanders.page,
            isCompleted: classFlanders.isCompleted,
        }; // Classes are not supported by Next.js in the use case of 'use client', so we need to typecast it to a plain object

        return typedFlanders;
    }); // Typecast the data to FlandersQuizApi
}
