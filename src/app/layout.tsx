// @/app/layout.tsx
import ThemeRegistry from '@/views/ThemeRegistry/ThemeRegistry';
import './globals.css';
// MUI components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// views (design) elements
import AppHeader from '@/views/Common/AppHeader';
import AppFooter from '@/views/Common/AppFooter';

export const metadata = {
  title: 'Янгол ЗСУ',
  description: 'Благодійний фонд Янгол Збройних Сил України.',
  keywords: 'благодійний фонд, Янгол ЗСУ, благодійність, Україна',
  author: 'SKindij',
};

export default function RootLayout({ children }:{ children:React.ReactNode }) {
  return (
    <html lang="uk">
      <body>
        <ThemeRegistry>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

            {/* menu and app site navigation */}
            <AppHeader />

            {/* the main content of the site */}
            <Container component="main" sx={{ flexGrow: 1, p: 1 }}>
              {children}
            </Container>

            {/* bottom content of site */}
			      <AppFooter />

          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}