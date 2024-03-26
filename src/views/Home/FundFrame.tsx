// @/views/Home/FundFrame.tsx
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const FundFrame:React.FC = () => {
  const videoSrc = 'https://www.youtube.com/embed/ZRwwa9RFv70';

  return (
    <Box sx={{ bgcolor:'background.paper', py: { xs: 1, md: 2 } }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <iframe
            width="100%" height="515"
            src={videoSrc} title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5" component="h2">
          Мега збір на 3 000 000грн
          </Typography>
          <Typography variant="body1">
            Долучайтесь до збору та отримайте змогу виграти один з сотні ексклюзивних подарунків!
          </Typography>
          <Typography variant="body1">
            Головний ЛОТ збору - прапор з підписом Валерія ЗАЛУЖНОГО!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FundFrame;


