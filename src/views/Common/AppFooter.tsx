// @/views/Common/AppFooter.tsx
import Link from '@mui/material/Link';
import * as NextLink from 'next/link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// data for site navigation elements
import { FooterSocialLinks } from '@/views/Common/SocialLinks';
import AppNavLinks from '@/views/Common/AppNavLinks';

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
    <Box component="footer" sx={{ pt:10, pb:5, mt:'auto', bgcolor:'customBackground' }}>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={5}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
              {/* footer info */}
			  <Typography component="h4" variant="h4" sx={{ mb: 2, color: 'white' }}>
                Благодійний фонд &ldquo;Янгол ЗСУ&rdquo;
              </Typography>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2, color: 'white' }}>
                Мета - надання підтримки воїнам Збройних Сил України.
              </Typography>
			  
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
		    {/* footer links */}
            <FooterSocialLinks />
		    {/* footer nav links */}
            <Box sx={{ flexGrow: 1, display: 'flex', ml: 6 }}>
              {AppNavLinks.map(({ label, href }) => (
                <NextLink href={href} passHref key={label}>
                  <Button  sx={{ 
				    my: 2, color: 'white', display: 'block', pl: 2, pr: 2,
                    '&:hover': { color: 'secondary.main'}
				  }} >
                    {label}
                  </Button>
                </NextLink>
              ))}
            </Box>	
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default AppFooter;