import { redirect } from 'next/navigation';
import { use } from 'react';

import QuizSection from '@/containers/quiz-section';
import getQuizData from '@/services/flanders-quiz-api/flanders-quiz.api';

export async function getStaticParams() {
    const quizData = await getQuizData();
    return quizData.map((quiz) => ({ page: quiz.page }));
}

export default function Page({ params }: { params: { page: string } }) {
    const { page } = params;
    const quizData = use(getQuizData());
    const currentQuiz = quizData.find((quiz) => quiz.page.toString() === page);

    if (!currentQuiz) return redirect('/1');

    return (
        <>
            <QuizSection currentQuiz={currentQuiz} />
        </>
    );
}
