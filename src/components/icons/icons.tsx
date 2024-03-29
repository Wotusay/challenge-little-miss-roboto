interface IconProps {
    className?: string;
}

const constantClass = 'aspect-square p-3';
const svgClass = 'w-full h-full';

export function ArrowRotateRight({ className = constantClass }: IconProps) {
    return (
        <div className={className}>
            <svg fill='currentColor' className={svgClass} viewBox='0 0 512 512'>
                <path d='M496 48v144c0 17.69-14.31 32-32 32H320c-17.69 0-32-14.31-32-32s14.31-32 32-32h63.39c-29.97-39.7-77.25-63.78-127.6-63.78C167.7 96.22 96 167.9 96 256s71.69 159.8 159.8 159.8c34.88 0 68.03-11.03 95.88-31.94 14.22-10.53 34.22-7.75 44.81 6.375 10.59 14.16 7.75 34.22-6.375 44.81-39.03 29.28-85.36 44.86-134.2 44.86C132.5 479.9 32 379.4 32 256S132.5 32.1 255.9 32.1c69.15 0 134 32.47 176.1 86.12V48c0-17.69 14.31-32 32-32s32 14.31 32 32' />
            </svg>
        </div>
    );
}

export function Map({ className = constantClass }: IconProps) {
    return (
        <div className={className}>
            <svg
                fill='currentColor'
                className={svgClass}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 576 512'>
                <path d='M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z' />
            </svg>
        </div>
    );
}

export function MusicNoteSlash({ className = constantClass }: IconProps) {
    return (
        <div className={className}>
            <svg fill='currentColor' className={svgClass} viewBox='0 0 512 512'>
                <path d='M630.8 469.1 384 275.7V148.1l72.1-21.38c13.62-3.1 22.1-16.5 22.1-30.75V31.98c0-10.13-4.75-19.64-12.88-25.64-7.1-6.002-18.5-7.877-28.12-5.002l-96.62 28.5C329.1 33.95 319.1 46.33 319.1 60.33v165.2L38.81 5.111A23.96 23.96 0 0 0 24.03.001C16.905 0 9.84 3.158 5.12 9.189c-8.187 10.44-6.37 25.53 4.068 33.7L601.2 506.9c10.5 8.203 25.57 6.328 33.69-4.078 8.21-10.422 6.31-25.522-4.09-33.722m-359.7-118c-61.86 0-111.1 35.82-111.1 80s50.14 79.1 111.1 79.1 111.1-35.82 111.1-79.1-48.3-80-111.1-80' />
            </svg>
        </div>
    );
}

export function Question({ className = constantClass }: IconProps) {
    return (
        <div className={className}>
            <svg
                fill='currentColor'
                className={svgClass}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 384 512'>
                <path d='M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z' />
            </svg>
        </div>
    );
}

export function Stopwatch({ className = constantClass }: IconProps) {
    return (
        <div className={className}>
            <svg fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                <path d='M432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-104 76.3-190.2 176-205.5V64h-28c-6.6 0-12-5.4-12-12V12c0-6.6 5.4-12 12-12h120c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-28v34.5c37.5 5.8 71.7 21.6 99.7 44.6l27.5-27.5c4.7-4.7 12.3-4.7 17 0l28.3 28.3c4.7 4.7 4.7 12.3 0 17l-29.4 29.4-.6.6C419.7 223.3 432 262.2 432 304zm-176 36V188.5c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12V340c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z' />
            </svg>
        </div>
    );
}
