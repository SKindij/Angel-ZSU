// @/views/Home/blog/Award.tsx
// surface-level container for grouping related components
import Card from '@mui/material/Card';
// an optional wrapper for the Card header
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import VolunteerActivismTwoToneIcon from '@mui/icons-material/VolunteerActivismTwoTone';
// container for displaying background images and gradient layers
import CardMedia from '@mui/material/CardMedia';
// the wrapper for the Card content
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// an optional wrapper that groups a set of buttons
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
// allows users to interact with the specified area of the Card
import { CardActionArea } from '@mui/material';

import GratitudeKrakenPic from '../../../../public/images/blog/Gratitude-Kraken.jpg';

export default function Award() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="award"
            sx={{ bgcolor:'polliwog', color:'primary.main' }}
          >
              ЗСУ
          </Avatar>
        }
        action={
          <IconButton aria-label="gratitude" size="large">
            <VolunteerActivismTwoToneIcon color='primary'/>
          </IconButton>
        }
        title="ОРДП KRAKEN"
      />
      <CardMedia component="img" height="340"
        image={GratitudeKrakenPic.src} alt="Chevrolet"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Спецпідрозділ «Kraken» — окремий розвідувально-диверсійний підрозділ Головного управління розвідки Міністерства оборони України.
        </Typography>
      </CardContent>
    </Card>
  );
}














