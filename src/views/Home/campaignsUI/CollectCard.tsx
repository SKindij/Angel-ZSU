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

import DeleteIcon from '@mui/icons-material/Delete';

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
      <CardActions sx={{ display:'flex', flexDirection:'column', justifyContent:'center' }}>
        {/* функціональні кнопки для відвідувача сайту */}
        <Box sx={{ display:'flex', gap:3, justifyContent:'center', mb:2 }}>
          <Button variant="outlined" size="small" >
            YouTube запиту
          </Button>
          <Button variant="outlined" size="small" >
            YouTube звіту
          </Button>
        </Box>
        <Box sx={{ display:'flex', justifyContent:'center', mb:2 }}>
          {collectData.isActual ? (
            <Button variant="contained" size="small" color="success">
              Задонатити на збір
            </Button>
          ) : (
            <Button variant="contained" size="small" color="success">
              Підтримати команду
            </Button>
          )}
        </Box>
        {/* функціональні кнопки для адміністратора сайту */}
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mb:2 }}>
          <Button variant="contained" size="small" color="secondary">
            <Link href={`/admin/collect/${collectData.id}/edit`} >
              Редагувати
            </Link>
          </Button>
          <Button variant="contained" size="small" color="error" startIcon={<DeleteIcon />}>
            Видалити
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};
export default CollectCard;