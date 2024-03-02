// @/views/Admin/FundCollects.tsx
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// views content components
import CollectInfo from '@/views/Admin/CollectInfo';

import {IFundRaising} from '@/models/interfaces';
// get info from data base
import { fetchAllFundRaiserData } from '@/services/get-data';

const FundCollects = async () => {
  const fundRaisers:IFundRaising[] = await fetchAllFundRaiserData();

  if (!fundRaisers || fundRaisers.length === 0) {
    console.log('No Fund Raisers data received.');
    return <p>No Fund Raisers info available.</p>;
  }
  console.log('Received Collects Info!');

  return (
    <Box sx={{ py: 2, my: 2 }}>
      <div>
        <Typography variant="h3" component="h2" >
        Ви можете керувати інформаційними картками про збори.
        </Typography>
        {fundRaisers.map((fundRaiser) => (
          <CollectInfo key={fundRaiser.id} collectData={fundRaiser} />
        ))}
      </div>
    </Box>
  );
};
export default FundCollects;