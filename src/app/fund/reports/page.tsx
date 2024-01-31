// @/app/reports/page.tsx
import Container from '@mui/material/Container';
// views components
import SectionHeader from '@/views/Common/SectionHeader';
import {
  VideoOfCarsReports, VideoOfMedicalInstrumentsReports, VideoOfUFOreports, VideoOfUsefulThingsReports
} from '@/views/Reports/VideoReports';

export default function ReportsPage() {
  return (
    <Container maxWidth="lg">
      {/* Reports on cars provided by the fund */}
      <SectionHeader
        title="Відео повідомлення"
        description="Звіти про надані фондом автівки."
      />
      <VideoOfCarsReports />
      {/* Reports on medical equipment provided by the fund */}
      <SectionHeader
        title="Відео повідомлення"
        description="Звіти про надане фондом медичне обладнання."
      />
      <VideoOfMedicalInstrumentsReports />
      {/* Reports on unmanned aerial vehicles provided by the fund */}
      <SectionHeader
        title="Відео повідомлення"
        description="Звіти про надані фондом безпілотні літальні апарати."
      />
      <VideoOfUFOreports />
      {/* Reports on useful things for the military provided by the fund */}
      <SectionHeader
        title="Відео повідомлення"
        description="Звіти про надані фондом корисні речі для військових."
      />
      <VideoOfUsefulThingsReports />
    </Container>
  );
}