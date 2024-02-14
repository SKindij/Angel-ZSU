// @/views/Home/FundCampaigns.tsx
import Box from '@mui/material/Box';
// views components
import SectionHeader from '@/views/Common/SectionHeader';
import CollectCard from '@/views/Home/campaigns/CollectCard';
import ToVideoBButtons from '@/views/Home/campaigns/ToVideoButtons';
// info from data base
// import { fundRaisingData } from '@/services/get-data';

const FundCampaigns = () => {
  return (
    <Box id="fund-campaigns" sx={{ }}>
      <SectionHeader
        title="Актуальні грошові збори"
        description="Приєднуйтеся до наших благодійних ініціатив.
          Ваш внесок допомагає підтримати важливі проекти та надати допомогу тим, хто цього найбільше потребує."
      />
      {/* Додатковий вміст вашого розділу */}



	    {/* Buttons to go to pages with videos */}
	    <ToVideoBButtons />

    </Box>
  );
};
export default FundCampaigns;