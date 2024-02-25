// @/app/candidate/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@mui/material/Container';
// views components
import SectionHeader from '@/views/CommonUI/SectionHeader';
import ComplexButton from '@/views/CandidateUI/ComplexButton';

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
      {/* button-link to questionnaire on Google Docs */}
      <Link
        href='https://docs.google.com/forms/d/e/1FAIpQLSfsm3963R77mW8nWuw_2BW_rbPh_tbo6t1e6S_qW0xsXNWxUw/viewform'
        rel="noopener noreferrer" target="_blank" passHref
      >
        <ComplexButton />
      </Link>
    </Container>
  );
}