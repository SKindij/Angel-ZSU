// @/app/contacts/page.tsx
import { Metadata } from 'next';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

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
        alignItems: 'center', padding: '20px',
      }}
    >
      <Typography paragraph>
        Тут будуть наші контакти.
      </Typography>
      {/* invitation to join the community */}
      <СandidateButton />
    </Box>
  );
}