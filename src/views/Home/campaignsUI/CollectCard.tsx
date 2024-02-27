// @/views/Home/campaignsUI/CollectCard.tsx
import Link from 'next/link';
// MUI components
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// MUI icons
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

import { IFundRaising } from '@/models/interfaces';
type CollectCardProps = { collectData:IFundRaising } ;

import { getFundraisingImagePath } from '@/services/utils';

const CollectCard = ( { collectData }:CollectCardProps ) => {
  const fundraisingImagePath = getFundraisingImagePath(collectData.variation);

  return (
    <Box sx={{ px: 2, pt: 1, pb: 4 }}>
      <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 8 }}>
	    {/* актульність та різновид збору */}
	      <CardHeader
          sx={{ color: collectData.is_actual ? 'warning.main' : 'text.primary' }}
          title={collectData.is_actual ? 'Актуальний Збір' : 'Збір Закрито'}
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
          <Typography variant="subtitle1" color="info.main" mb={1}>
            {collectData.purpose}
          </Typography>
          <Typography variant="body2" mb={1}>
            {collectData.info}
          </Typography>
          <Typography variant="subtitle2" color="primary.dark">
            Ціль: {collectData.value} грн {collectData.is_actual ? '' : 'досягнуто'}
          </Typography>
        </CardContent>
        <CardActions sx={{ display:'flex', flexDirection:'column', justifyContent:'center' }}>
          {/* функціональні кнопки для відвідувача сайту */}
          <Box sx={{ mb:2,
		        display:'flex', gap:1, justifyContent:'center',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' }
		        }}
          >
            {/* conditional rendering for the button */}
            {collectData.requestVideoUrl && (
              <Button variant="outlined" size="small" startIcon={<PlayCircleOutlinedIcon />}>
                YouTube запиту
              </Button>
            )}
            {/* conditional rendering for the button */}
            {collectData.reportVideoUrl && (
              <Button variant="outlined" size="small" startIcon={<PlayCircleOutlinedIcon />}>
                YouTube звіту
              </Button>
            )}
          </Box>
		      <Typography variant="body1" mb={1}>
            {collectData.is_actual ? 'Задонатити на Збір' : 'Підтримати Фонд'}
          </Typography>
          <Box sx={{ display:'flex', flexDirection:'column', justifyContent:'center', mb:2 }}>
            {collectData.is_actual && (
              <Link href={collectData.monobanka ? collectData.monobanka : '/donate'} >
                <Button variant="contained" size="medium" color="success">
                на Mono банку
                </Button>
              </Link>
            )}
            <Link href={'/donate'} >
              <Button sx={{ mt:1 }} variant="contained" size="medium" color="success">
                за реквізитами
              </Button>
            </Link>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};
export default CollectCard;