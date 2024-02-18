// @/app/campaigns/page.tsx
import { Metadata } from 'next';
import Container from '@mui/material/Container';
// views components
import SectionHeader from '@/views/CommonUI/SectionHeader';
import {
  VideoRequestsForCars, VideoRequestFromMilitaryMedics, VideoRequestForUFO, VideoRequestForMilitaryEquipment
} from '@/views/CampaignsUI/VideoCampaigns';

export const metadata:Metadata = {
  title: 'Відео-запити від ЗСУ',
  description: 'Колекція відео-запитів від військовослужбовців щодо потреб їх життедіяльності.',
  keywords: ['позашляховик для ЗСУ, військовий медик, безпілотний літальний апарат, бронежилет, тепловізор'],
};

export default function CampaignsPage() {
  return (
    <Container maxWidth="lg">
      {/* requests for cars and auto goods */}
      <SectionHeader
        title="Запити на автомобілі та автотовари"
        description="відео звернення"
      />
      <VideoRequestsForCars />
      {/* requests from military medics */}
      <SectionHeader
        title="Запити від військових медиків"
        description="відео звернення"
      />
      <VideoRequestFromMilitaryMedics />
      {/* requests for unmanned aerial vehicles */}
      <SectionHeader
        title="Запити на безпілотні літальні апарати"
        description="відео звернення"
      />
      <VideoRequestForUFO />
      {/* requests for military equipment */}
      <SectionHeader
        title="Запити на військове та інше обладнання"
        description="відео звернення"
      />
      <VideoRequestForMilitaryEquipment />
    </Container>
  );
}