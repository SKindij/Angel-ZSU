// @/views/Common/AppFooter.tsx
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2">
      {'Copyright © '}
      <Link color="inherit" href="https://angelzsu.com/">
        Angel ZSU
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const AppFooter = () => {
  return (
    <Box component="footer"
      sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: 'primary.main' }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
            My sticky footer can be found here.
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
};
export default AppFooter;