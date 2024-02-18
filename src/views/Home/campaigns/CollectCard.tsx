// @/views/Home/campaigns/CollectCard.tsx
import Link from 'next/link';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {IFundRaising} from '@/models/interfaces';
type CollectCardProps = {
  collectData:IFundRaising;
};

const CollectCard = ( { collectData }:CollectCardProps ) => {

  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 8 }}>
	  {/* актульність та різновид збору */}
	  <CardHeader
        title={collectData.title}
        subheader={collectData.variation}
      />
	  {/* картинка, що залежить від різновиду збору */}
	  <CardMedia component="img"
        sx={{ objectFit: 'cover', height: '100%', }}
        image={'/images/donate/reptile.jpg'}
        alt={collectData.title}
      />
	  {/*  */}
      <CardContent>
        <Typography variant="h4" color="secondary" mb={1}>
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
