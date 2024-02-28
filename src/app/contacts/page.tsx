// @/app/contacts/page.tsx
import { Metadata } from 'next';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import СandidateButton from '@/views/Home/teamUI/СandidateButton';

export const metadata:Metadata = {
  title: 'Контакти',
  description: 'Способи контактування із представниками фонду.',
  keywords: ['контакти волонтерів, телефони фонду'],
};

export default function ContactsPage() {
  return (
    <Box
      sx={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', p: 2, mb: 4
      }}
    >
      <Typography variant="h1" gutterBottom>
        Контактна інформація
      </Typography>
      <Paper sx={{ p: 2, maxWidth: 400 }}>
        <Typography variant="body1" gutterBottom>
          <strong>Номер телефону Янгол ЗСУ:</strong> 067-955-77-44 (Telegram, Viber, WhatsApp, Signal)
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Пошта Янгол ЗСУ:</strong> cf.angel.zsu@gmail.com
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Телеграм канал:</strong> <a href="https://t.me/angel_zsu">t.me/angel_zsu</a>
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Для приватних звернень в Телеграмі:</strong> <a href="https://t.me/BF_Angel_ZSU">t.me/BF_Angel_ZSU</a>
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Офіційний Ютуб канал:</strong> <a href="https://youtube.com/@cf_angel_zsu">youtube.com/@cf_angel_zsu</a>
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Офіційний Тік Ток:</strong> <a href="https://tiktok.com/@_angel_zsu_?_t=8kBgG4kFSyb">tiktok.com/@_angel_zsu_?_t=8kBgG4kFSyb</a>
        </Typography>
      </Paper>
      {/* invitation to join the community */}
      <СandidateButton />
    </Box>
  );
}