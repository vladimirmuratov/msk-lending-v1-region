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
    title: 'Медицинская Сервисная Компания. Госпитализация из регионов. 8 (499) 719-81-00, 24/7',
    description: 'Официальный координатор по госпитализации в московские клиники. Оперативно. 10 лет опыта. Минимум документов. Финансовая прозрачность',
    keywords: ['платная госпитализация из регионов'],
    other: {
        ['yandex-verification']: '04067e503a181476',
    },
    openGraph: {
        title: 'Медицинская Сервисная Компания. Госпитализация из регионов. 8 (499) 719-81-00, 24/7',
        description: 'Официальный координатор по госпитализации в московские клиники. Оперативно. 10 лет опыта. Минимум документов. Финансовая прозрачность',
        images: ['/images/banner2.webp'],
        url: 'https://region.mskdoctor.ru/',
        type: 'website',
        locale: 'ru_RU',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
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
