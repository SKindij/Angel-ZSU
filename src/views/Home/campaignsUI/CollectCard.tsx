// @/views/Home/campaignsUI/CollectCard.tsx
import Link from 'next/link';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { IFundRaising } from '@/models/interfaces';
type CollectCardProps = { collectData:IFundRaising } ;

import { getFundraisingImagePath } from '@/services/utils';

const CollectCard = ( { collectData }:CollectCardProps ) => {
  const fundraisingImagePath = getFundraisingImagePath(collectData.variation);

  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 8 }}>
	    {/* актульність та різновид збору */}
	    <CardHeader
        sx={{ color: collectData.isActual ? 'warning.main' : 'text.primary' }}
        title={collectData.isActual ? 'Актуальний Збір' : 'Збір Закрито'}
        subheader={collectData.variation}
      />
	  {/* картинка, що залежить від різновиду збору */}
	  <CardMedia component="img"
        sx={{ objectFit: 'cover', height: '100%', }}
        image={fundraisingImagePath}
        alt={collectData.variation}
      />
	  {/* Інформація щодо конкретного збору коштів */}
      <CardContent>
        <Typography variant="h5" color="info.main" mb={1}>
          {collectData.purpose}
        </Typography>
        <Typography variant="body2" mb={1}>
          {collectData.info}
        </Typography>
        <Typography variant="body1" mt={2}>
          {collectData.value}
        </Typography>
      </CardContent>
      <CardActions>
        {/* функціональні кнопки для відвідувача сайту */}
        <Box>
          <Button variant="contained" size="small" >
            YouTube запиту
          </Button>
          <Button variant="contained" size="small" >
            YouTube звіту
          </Button>
        </Box>
        <Box>
          <Button variant="contained" size="small" color="secondary">
            Задонатити на збір
          </Button>
          <Button variant="contained" size="small" color="secondary">
            Підтримати команду
          </Button>
        </Box>
        {/* функціональні кнопки для адміністратора сайту */}
        <Box>
          <Button variant="contained" size="small" color="secondary">
            <Link href={`/admin/collect/${collectData.id}/edit`} >
              Редагувати
            </Link>
          </Button>
          <Button variant="contained" size="small" color="primary">
            Видалити
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};
export default CollectCard;