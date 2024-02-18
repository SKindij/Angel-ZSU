// @/app/candidate/page.tsx
import { Metadata } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// views components
import SectionHeader from '@/views/CommonUI/SectionHeader';

export const metadata:Metadata = {
  title: 'Волонтер',
  description: 'Запрошення приєднатися до команди волонтерів.',
  keywords: ['стати волонтером, доброволець, самопожертва, збір'],
};

export default function CandidatePage() {
  return (
    <Container maxWidth="lg">
      <SectionHeader
        title="СТАНЬ ВОЛОНТЕРОМ"
        description="ЗАПРОШУЄМО В НАШУ КОМАНДУ"
      />
      {/* Додатковий вміст вашого розділу */}


    </Container>
  );
}