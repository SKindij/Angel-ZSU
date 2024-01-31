// @/app/campaigns/page.tsx
import Container from '@mui/material/Container';
// views components
import SectionHeader from '@/views/Common/SectionHeader';
import {
  VideoRequestsForCars, VideoRequestFromMilitaryMedics, VideoRequestForUFO, VideoRequestForMilitaryEquipment
} from '@/views/Campaigns/VideoCampaigns';

export default function CampaignsPage() {
  return (
    <Container maxWidth="lg">
      {/* requests for cars and auto goods */}
      <SectionHeader
        title="Відео звернення"
        description="запити на автомобілі та автотовари"
      />
      <VideoRequestsForCars />
      {/* requests from military medics */}
      <SectionHeader
        title="Відео звернення"
        description="запити від військових медиків"
      />
      <VideoRequestFromMilitaryMedics />
      {/* requests for unmanned aerial vehicles */}
      <SectionHeader
        title="Відео звернення"
        description="запити на безпілотні літальні апарати"
      />
      <VideoRequestForUFO />
      {/* requests for military equipment */}
      <SectionHeader
        title="Відео звернення"
        description="запити на військове обладнання"
      />
      <VideoRequestForMilitaryEquipment />
    </Container>
  );
}