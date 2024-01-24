import { env } from 'process';

import { FlandersQuiz, FlandersQuizApi } from '@/interfaces/flanders-quiz.entity';

export default async function getQuizData(): Promise<FlandersQuiz[]> {
    const url: string = env.NEXT_PUBLIC_API_URL ?? '';
    const res = await fetch(url);
    const data = await res.json(); // Parse the response as JSON

    const quizData = data as FlandersQuizApi[];

    return quizData.map((quizData, index) => new FlandersQuiz({ ...quizData, index })); // Typecast the data to FlandersQuizApi
}
