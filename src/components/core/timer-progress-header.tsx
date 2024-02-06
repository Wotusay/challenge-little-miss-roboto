import { Progress } from '@nextui-org/progress';

import { cn } from '@/utils';

import Timer from '../elements/timer';

export type TTimerProgressHeaderClassName = {
    wrapper?: string;
    progress?: string;
    timer?: string;
};

export default function TimerProgressHeader({
    classNames,
    timeInMs,
    isRunning,
    ranOut,
    pageLength,
    currentPage,
}: {
    classNames?: TTimerProgressHeaderClassName;
    timeInMs: number;
    currentPage: number;
    ranOut: () => void;
    pageLength: number;
    isRunning?: boolean;
    className?: string;
}) {
    return (
        <div className={(cn(classNames?.wrapper), 'w-full')}>
            {!isRunning && (
                <Progress
                    value={currentPage}
                    maxValue={pageLength}
                    minValue={1}
                    showValueLabel={false}
                    isStriped
                    radius='md'
                    className={cn(classNames?.progress, 'w-full')}
                    color='warning'
                />
            )}
            {isRunning && (
                <Timer
                    timeInMs={timeInMs}
                    ranOut={ranOut}
                    isRunning={isRunning}
                    className={classNames?.timer}
                />
            )}
        </div>
    );
}
