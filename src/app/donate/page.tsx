// @/app/donate/page.tsx
import { Metadata } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// views components
import SectionHeader from '@/views/CommonUI/SectionHeader';
// import BankDetails from '@/views/DonateUI/BankDetails';

export const metadata:Metadata = {
  title: 'Реквізити',
  description: 'Варіанти переказу коштів на рахунок фонду.',
  keywords: ['зробити донат, внести кошти для ЗСУ, реквізити для пожертви'],
};

export default function DonatePage() {
  return (
    <Container maxWidth="lg">
      <SectionHeader
        title="ЗРОБИТИ ВНЕСОК"
        description="Здійсніть свою допомогу для сприяння перемозі."
      />
      {/* Банківські реквізити для внесення донатів. */}
      {/* <BankDetails /> */}

      <Typography variant="h5" gutterBottom>
          БАНКІВСЬКІ НАРАЗІ РЕКВІЗИТИ ОНОВЛЮЮТЬСЯ
      </Typography>

    </Container>
  );
}
