// @/app/reports/page.tsx
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import SectionHeader from '@/views/Common/SectionHeader';

export default function ReportsPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <SectionHeader
        title="Відео звіти"
        description="Що було виконано."
      />
      {/* Додатковий вміст вашого розділу */}



    </Box>
  );
}