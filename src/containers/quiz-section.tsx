import { FlandersQuiz } from '@/interfaces/flanders-quiz.entity';

import InformationSection from './information-section';

export default function QuizSection({ currentQuiz }: { currentQuiz: FlandersQuiz }) {
    return (
        <section>
            <InformationSection />
        </section>
    );
}
