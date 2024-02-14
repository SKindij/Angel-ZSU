// @/views/Home/campaigns/CollectCard.tsx
import Link from 'next/link';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { purple } from '@mui/material/colors';

import {IFundRaising} from '@/models/interfaces';
type CollectCardProps = {
  collectData:IFundRaising;
};


const CollectCard = ( { collectData }:CollectCardProps ) => {
  const firstCollectLetter = collectData.title.charAt(0);

  return (
    <Card sx={{ boxShadow: 3, borderRadius: 8 }}>
	  {/*  */}
	  <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: purple[500] }} aria-label="collectData">
            {firstCollectLetter}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={collectData.title}
        subheader={collectData.variation}
      />
	  {/*  */}
	  <CardMedia component="img"
        sx={{ objectFit: 'cover', height: '100%', }}
        image={'/images//donate/qr-pb-donate.webp'}
        alt={collectData.title}
      />
	  {/*  */}
      <CardContent>
        <Typography variant="h3" color="secondary">
          {collectData.title}
        </Typography>
        {/* Таблиця із цінами по супермаркетах */}
        <Typography variant="body2" mb={1}>
		      Оголошуємо збір
        </Typography>
        {/* Опис напою */}
        <Typography variant="body2" mt={2}>
          {collectData.info}
        </Typography>
      </CardContent>
	  {/*  */}
      <CardActions>
	      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button size="small" color="primary">
          Редагувати
        </Button>
        <Button size="small" color="secondary">
          Закрити
        </Button>
      </CardActions>
    </Card>
  );
};

export default CollectCard;
