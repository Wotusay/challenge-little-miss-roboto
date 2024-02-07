export interface FlandersAnswer {
    answer: string;
    correct: boolean;
}

export type FlandersQuizApi = {
    question: string;
    time_limit_s: number;
    answers: FlandersAnswer[];
    index: number;
};

export type TFlandersQuiz = {
    question: string;
    timeLimitMs: number;
    answers: FlandersAnswer[];
    page: number;
    isCompleted: boolean;
};

export class FlandersQuiz {
    private _question!: string;
    private _timeLimitMs: number = 0;
    private _page = 0;
    private _answers: FlandersAnswer[] = [];
    private completed = false;

    constructor(options: FlandersQuizApi) {
        this.initialize(options);
    }

    private initialize(options: FlandersQuizApi): void {
        this.setQuestion(options.question);
        this.setTimeLimitMs(options.time_limit_s);
        this.setAnswers(options.answers);
        this.setPage(options.index);
    }

    private setQuestion(question: string): void {
        this._question = question;
    }

    private setTimeLimitMs(timeLimitS: number): void {
        const timeLimitMs = timeLimitS * 1000;
        this._timeLimitMs = timeLimitMs;
    }

    private setAnswers(answers: FlandersAnswer[]): void {
        this._answers = answers;
    }

    private setPage(index: number): void {
        this._page = index + 1;
    }

    public get question(): string {
        return this._question;
    }

    public get timeLimitMs(): number {
        return this._timeLimitMs;
    }

    public get answers(): FlandersAnswer[] {
        return this._answers;
    }

    public get page(): number {
        return this._page;
    }

    public get isCompleted(): boolean {
        return this.completed;
    }

    public changeStatus(): void {
        this.completed = !this.completed;
    }
}
