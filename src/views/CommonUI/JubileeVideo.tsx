// @/views/CommonUI/JubileeVideo.tsx
// MUI components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const JubileeVideo:React.FC = () => {
  const videoSrc = 'https://www.youtube.com/embed/ZRwwa9RFv70';
  return (
    <Box sx={{ bgcolor:'background.paper', py: { xs: 1, md: 2 } }}>
      <Container>
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
                    🔥 Цей соціальний ролик приурочений до річниці заснування фонду. 🔥
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </Box>
  );
};
export default JubileeVideo;