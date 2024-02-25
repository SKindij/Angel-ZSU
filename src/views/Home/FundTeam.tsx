// @/views/Home/FundTeam.tsx
// MUI components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// views components
import SectionHeader from '@/views/CommonUI/SectionHeader';
import TeamCarousele from '@/views/Home/teamUI/TeamCarousele';
import СandidateButton from '@/views/Home/teamUI/СandidateButton';

const FundTeam = () => {
  return (
    <Box id="fund-team"
	    sx={{ pt:1, pb:{xs:4, md:6}, backgroundColor:'background.paper' }}
	  >
      <Container maxWidth="lg">

        <SectionHeader
          title="Наша команда"
          description="Дізнайтеся більше про тих, хто стоїть за успіхами та досягненнями нашого фонду."
        />

        {/* members of the charity fund team */}
        <TeamCarousele />
      </Container>

	    {/* invitation to join the community */}
      <СandidateButton />

    </Box>
  );
};
export default FundTeam;
