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

import { IOurAward } from '@/models/interfaces';

interface AwardProps {
  award:IOurAward;
};

export default function Award({ award }:AwardProps) {
  const { id, title, image, body } = award;

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
        title={title}
      />
      <CardMedia component="img" height="340" alt={title}
        image={image || 'images/blog/Gratitude-Volounteer-Day.jpg'}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};
