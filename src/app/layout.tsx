import './globals.scss';
import { Metadata } from 'next';
import localFont from 'next/font/local';

import { cn } from '@/utils';

import Providers from './providers';

const FlandersArtSans = localFont({
    src: [
        {
            path: '../fonts/FlandersArtSans-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/FlandersArtSans-Bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../fonts/FlandersArtSans-Light.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../fonts/FlandersArtSans-Medium.otf',
            weight: '500',
            style: 'normal',
        },
    ],
    variable: '--font-flanders-art',
});

export const metadata: Metadata = {
    title: { default: 'VDAB', template: 'VDAB - %s' },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className={cn(FlandersArtSans.variable, 'font-sans')}>
            <body suppressHydrationWarning={true} className='h-screen'>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
