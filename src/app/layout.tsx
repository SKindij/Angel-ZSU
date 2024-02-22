// @/app/layout.tsx
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import ThemeRegistry from '@/views/ThemeRegistry/ThemeRegistry';
import './globals.css';
import './react-slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
// MUI components
import Box from '@mui/material/Box';
// views (design) elements
import AppHeader from '@/views/RootLayout/AppHeader';
import AppFooter from '@/views/RootLayout/AppFooter';

export const metadata:Metadata = {
  title: {
    template: '%s | Янгол ЗСУ',
    default: 'Янгол ЗСУ',
  },
  description: 'Приганяємо автомобілі. Допомагаємо медикам. Забезпечуємо дронами. Збираємо військове спорядження. Благодійний фонд Янгол Збройних Сил України.',
  keywords: ['донати, ЗСУ, авто для бригади, благодійний фонд, військові медики, Янгол ЗСУ, дрони, БПЛА, благодійність, Україна'],
  authors: [{ name: 'Serhii Kindij', url: 'https://github.com/SKindij' }],
  generator: 'Next.js',
  applicationName: 'AngelZSU',
  creator: 'Serhii Kindij',
  metadataBase: new URL('https://angelzsu.com/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Янгол ЗСУ',
    description: 'Благодійний фонд Янгол Збройних Сил України.',
    url: 'https://angelzsu.com/',
    siteName: 'Angel ZSU',
    locale: 'uk',
    type: 'website',
  },
  publisher: 'Serhii Kindij'
};

export default function RootLayout({ children }:{ children:React.ReactNode }) {
  return (
    <html lang="uk">
      <body>
        <ThemeRegistry>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* menu and app site navigation */}
            <AppHeader />
            <Box component="main">
              {/* the main content of the site */}
              {children}
            </Box>
            {/* bottom content of site */}
			      <AppFooter />
          </Box>
        </ThemeRegistry>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}