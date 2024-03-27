// @/views/Home/FundFrame.tsx
import Link from 'next/link';
// MUI components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const FundFrame:React.FC = () => {
  const videoSrc = 'https://www.youtube.com/embed/ZRwwa9RFv70';
  return (
    <Box sx={{ bgcolor:'background.paper', py: { xs: 1, md: 2 } }}>
      <Container>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <Card >
              <CardActionArea >
                <CardMedia>
                  <iframe
                    width="100%" height="500"
                    src={videoSrc} title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="body2">
                    🔥 Збір на автомобілі та дрони для військовослужбовців в гарячих точках! 🔥
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h2" color="primary.main">
              Мега збір на 3 000 000 грн
            </Typography>
            <Typography variant="body1" paragraph>
              Долучайтесь до збору та отримайте змогу виграти один з сотні ексклюзивних подарунків!
            </Typography>
            <Typography variant="body1" paragraph>
              Головний ЛОТ збору - прапор з підписом Валерія Залужного!
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={9} >
			            <Link href={'https://send.monobank.ua/jar/8W7xqUd953'}
                    rel="noopener noreferrer" target="_blank" passHref >
                    <Button color="primary" variant="contained" size="large"
				              sx={{
                        px: 4, py: 1, letterSpacing: 3,
                        '&:hover': {backgroundColor:'sassyYellow', color:'primary.dark', fontWeight:'bold'}
                      }}
                    >
                      донат на Mono банку
                    </Button>
                  </Link>
			          </Grid>
                <Grid item xs={9} >
                  <Link href={'/donate'} >
                    <Button variant="outlined" size="large" color="success"
				              sx={{px: 2, py: 1, letterSpacing: 3 }}
                    >
                      донат за реквізитами
                    </Button>
                  </Link>
			          </Grid>
                <Grid item xs={9} >
			            <Link href={'https://linktr.ee/BFAngelZSU'}
                    rel="noopener noreferrer" target="_blank" passHref >
                    <Button
                      color="secondary" variant="contained" size="large"
                      sx={{
                        px: 5, py: 1, letterSpacing: 3, color: 'primary.dark',
                        '&:hover': { color:'secondary.contrastText' }
                      }}
                    >
                      подарунки за донат
                    </Button>
                  </Link>
			          </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default FundFrame;