import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                wrapper: '#0C6AAE',
                cards: '#0E325B',
            },
            fontFamily: {
                sans: ['var(--font-flanders-art)'],
            },
            boxShadow: {
                'inset-black-25': '0px -3px 0px 0px rgba(0, 0, 0, 0.25) inset',
            },
        },
    },
    darkMode: 'class',
    plugins: [
        nextui({
            addCommonColors: true,
            defaultTheme: 'light',
            defaultExtendTheme: 'light',
            themes: {
                light: {
                    colors: {
                        background: '#004475',
                        primary: {
                            foreground: '#004475',
                            DEFAULT: '#FFE200',
                        },
                        divider: '#0C6AAE',
                        overlay: '#0C6AAE',
                        secondary: {
                            foreground: '#004475',
                            DEFAULT: '#FFFFFF',
                        },
                        foreground: '#004475',
                        default: {
                            foreground: '#FFFFFF',
                            DEFAULT: '#0E325B',
                        },
                    },
                },
            },
        }),
    ],
};
export default config;
