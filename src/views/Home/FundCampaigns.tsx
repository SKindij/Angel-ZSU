// @/views/Home/FundCampaigns.tsx
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// views components
import SectionHeader from '@/views/CommonUI/SectionHeader';
import CollectCard from '@/views/Home/campaignsUI/CollectCard';
import ToVideoBButtons from '@/views/Home/campaignsUI/ToVideoButtons';
// info from data base
import { fundRaisingData } from '@/services/get-data';

const FundCampaigns = () => {
  return (
    <Box id="fund-campaigns" sx={{ }}>
      <SectionHeader
        title="Актуальні грошові збори"
        description="Приєднуйтеся до наших благодійних ініціатив.
          Ваш внесок допомагає підтримати важливі проекти та надати допомогу тим, хто цього найбільше потребує."
      />
      {/* Actual cash fees */}
      <Container sx={{ mb: 3 }}>
        <Grid container justifyContent="space-evenly"
          rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 6 }}
        >
          <Grid item key={fundRaisingData[0].id} xs={12} sm={6} md={4}>
            <CollectCard collectData={fundRaisingData[3]}/>
          </Grid>
          <Grid item key={fundRaisingData[1].id} xs={12} sm={6} md={4}>
            <CollectCard collectData={fundRaisingData[2]}/>
          </Grid>
          <Grid item key={fundRaisingData[2].id} xs={12} sm={6} md={4}>
            <CollectCard collectData={fundRaisingData[1]}/>
          </Grid>
          <Grid item key={fundRaisingData[2].id} xs={12} sm={6} md={4}>
            <CollectCard collectData={fundRaisingData[0]}/>
          </Grid>
        </Grid>
      </Container>

	    {/* Buttons to go to pages with videos */}
	    <ToVideoBButtons />

    </Box>
  );
};
export default FundCampaigns;