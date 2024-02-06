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
}) {
    return (
        <div
            className={
                (cn(classNames?.wrapper), 'w-full flex justify-center items-center h-[50px]')
            }>
            {!isRunning && (
                <Progress
                    value={currentPage}
                    maxValue={pageLength}
                    minValue={0}
                    showValueLabel={false}
                    isStriped
                    radius='sm'
                    disableAnimation
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
