// @/views/Admin/FundCollects.tsx
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// views content components
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
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
    <Box sx={{ py: 2, my: 2, ml: 3 }}>
      <div>
        <Typography variant="h3" component="h2" mb={2}>
          Керувати існуючими інфо-картками про збори
        </Typography>
        {fundRaisers.map((fundRaiser) => (
          <CollectInfo key={fundRaiser.id} collectData={fundRaiser} />
        ))}
        <Typography variant="h3" component="h3" mb={2}>
          Додати нову інфо-картку про збір
        </Typography>
        <Link href={'/admin/collect/create'} >
          <Button variant="contained" size="medium" color="info"
            sx={{ px:5, ml: 7 }} startIcon={<AddCircleTwoToneIcon />}
          >
            Створити Збір
          </Button>
        </Link>
      </div>
    </Box>
  );
};
export default FundCollects;