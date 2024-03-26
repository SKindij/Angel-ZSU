// @/views/Home/FundFrame.tsx
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const FundFrame:React.FC = () => {
  const videoSrc = 'https://www.youtube.com/embed/ZRwwa9RFv70';

  return (
    <Box sx={{ bgcolor:'background.paper', py: { xs: 1, md: 2 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={1} sx={{ flexDirection: { xs:'column', md:'unset' } }}>
          <Grid item xs={12} md={8}>
            <iframe
              width="100%" height="515"
              src={videoSrc} title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" component="h2">
          Мега збір на 3 000 000 грн
            </Typography>
            <Typography variant="body1" paragraph>
            Долучайтесь до збору та отримайте змогу виграти один з сотні ексклюзивних подарунків!
            </Typography>
            <Typography variant="body1" paragraph>
            Головний ЛОТ збору - прапор з підписом Валерія ЗАЛУЖНОГО!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FundFrame;
