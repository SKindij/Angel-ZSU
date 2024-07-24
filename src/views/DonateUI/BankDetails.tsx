// @/views/DonateUI/BankDetails.tsx
// import Image from 'next/image';
// MUI components
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

// import qrCode from '../../../public/images/donate/qr-pb-donate.webp';

const BankDetails = () => {
  return (
    <Box
      sx={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', mb: 5,
      }}
    >
      <Paper
        sx={{
          padding: '20px', maxWidth: '1000px',
          textAlign: 'center', boxShadow: 3, marginBottom: '15px'
        }}
      >
        <Typography variant="h5" gutterBottom>
          БО «БФ «Янгол ЗСУ»
        </Typography>
        <Typography paragraph>
        💰 PayPal: zgodayulia12@gmail.com
        </Typography>
      </Paper>

      <Paper
        sx={{
          padding: '20px', maxWidth: '1000px',
          textAlign: 'center', boxShadow: 3, marginBottom: '15px'
        }}
      >
        <Typography variant="h5" gutterBottom>
          БО «БФ «Янгол ЗСУ»
        </Typography>
        {/*
        <Image
          src={qrCode} alt="ПриватБанк QR Code"
          width={200} height={200}
        />
        */}
        <Typography paragraph>
          Код  отримувача : 45089754
        </Typography>
        <Typography paragraph>
          Рахунок БФ : UA953004650000026003300810446
        </Typography>
        <Typography paragraph>
          МФО: 300465
        </Typography>
        <Typography paragraph>
          Назва Банку АТ «Ощадбанк»
        </Typography>
        <Typography paragraph>
          Призначення платежу: Добровільні внески БО БФ ЯНГОЛ ЗСУ
        </Typography>
      </Paper>
      <Paper
        sx={{
          padding: '20px', maxWidth: '1000px',
          textAlign: 'center', boxShadow: 3
        }}
      >
        <Typography variant="h5" gutterBottom>
          БО «БФ «Янгол ЗСУ»
        </Typography>
        <Typography paragraph>
        💲 USDT TRC20 :TBWW2WRhqum1jYTbX3nU6UMtCivuDLQWDg
        </Typography>
      </Paper>
    </Box>
  );
};
export default BankDetails;