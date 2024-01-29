import { TFlandersQuiz } from '@/interfaces/flanders-quiz.entity';

import InformationSection from './information-section';
import QuizSection from './quiz-section';

export default function QuizLayoutSection({
    currentQuiz,
    pageLength,
}: {
    currentQuiz: TFlandersQuiz;
    pageLength: number;
}) {
    return (
        <section className='grid grid-cols-[minmax(200px,_400px)_1fr] mx-5 py-5 h-full gap-4'>
            <InformationSection />
            <QuizSection pageLength={pageLength} currentQuiz={currentQuiz} />
        </section>
    );
}
