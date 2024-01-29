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
                'checkbox-default': '#C2E2FE',
            },
            fontFamily: {
                sans: ['var(--font-flanders-art)'],
            },
            boxShadow: {
                'inset-black-25': '0px -3px 0px 0px rgba(0, 0, 0, 0.25) inset',
            },
            backgroundColor: {
                'avatar-blue': '#B0E1F3',
                'custom-blue': 'rgba(0, 68, 117, 0.60)',
                'yellow-ffe200': '#FFE200',
            },
            backgroundImage: {
                'gradient-repeating':
                    'repeating-linear-gradient(-45deg, #DBC413, #DBC413 5.5px, #FFE200 5.5px, #FFE200 27.5px)',
            },
        },
    },
    darkMode: 'class',
    plugins: [
        nextui({
            addCommonColors: true,
            defaultTheme: 'light',
            defaultExtendTheme: 'light',
            layout: {
                disabledOpacity: '0.75',
            },
            themes: {
                light: {
                    colors: {
                        background: '#004475',
                        primary: {
                            foreground: '#004475',
                            DEFAULT: '#FFE200',
                        },
                        divider: '#2D89CC',
                        overlay: '#0C6AAE',
                        secondary: {
                            foreground: '#004475',
                            DEFAULT: '#FFFFFF',
                        },
                        foreground: '#004475',
                        default: {
                            foreground: '#FFFFFF',
                            DEFAULT: '#004475',
                        },
                        success: '#38CF1F',
                        danger: '#CF1F1F',
                    },
                },
            },
        }),
    ],
};
export default config;
