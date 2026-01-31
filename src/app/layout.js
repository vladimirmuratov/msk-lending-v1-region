import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';
import { Box } from '@mui/material';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/navigation/Navigation';
import { Metrika } from '@/components/Metrika';
import { Suspense } from 'react';
import theme from '@/theme';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
    metadataBase: new URL('https://msk-region.vercel.app'),
    title: 'Госпитализация из регионов и стран СНГ в клиники Москвы',
    description: 'Организация госпитализации пациентов из регионов России и стран СНГ. Подбор клиники, оформление документов, медицинское сопровождение.',
    keywords: ['платная госпитализация из регионов'],
    other: {
        ['yandex-verification']: '04067e503a181476',
    },
    openGraph: {
        title: 'Медицинская Сервисная Компания. Госпитализация в Москву из регионов — быстро, легально, платно. 8 (499) 719-81-00, 24/7',
        description: 'Поможем пройти лечение и диагностику в лучших клиниках Москвы и федеральных медцентрах. Принимаем без ОМС, с сопровождением и оформлением документов.',
        images: ['/images/banner2.webp'],
        url: 'https://msk-region.vercel.app/',
        type: 'website',
        locale: 'ru_RU',
    },
    alternates: {
        canonical: 'https://msk-region.vercel.app',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" prefix="og: https://ogp.me/ns#">
        <body className={montserrat.className}>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <Box className="container">
                    <Suspense>
                        <Navigation />
                        {children}
                        <Footer />
                        <Metrika />
                    </Suspense>
                </Box>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
