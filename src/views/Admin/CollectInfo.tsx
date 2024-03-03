// @/views/Admin/CollectInfo.tsx
import Link from 'next/link';
// MUI components
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
// admin view components
import { UpdateRaiserCard, DeleteRaiser } from '@/views/Admin/AdminButtons';

import { IFundRaising } from '@/models/interfaces';
import { formatDateToLocal } from '@/services/utils';
type CollectInfoProps = { collectData:IFundRaising } ;

const CollectInfo = ( { collectData }:CollectInfoProps ) => {
  return (
    <div>
      <Paper sx={{
        p: 2, mb: 3, maxWidth: '1000px',
        textAlign: 'center', boxShadow: 3
      }}
      >
	    {/* актульність та різновид збору */}
        <Typography variant="subtitle1" color="info.main" mb={1}>
          {collectData.is_actual ? 'Актуальний Збір' : 'Збір Закрито'}
        </Typography>
        <Typography paragraph>
          {collectData.variation}
        </Typography>
	    {/* Інформація щодо конкретного збору коштів */}
        <Typography variant="subtitle1" color="info.main" mb={1}>
          {collectData.purpose}
        </Typography>
        <Typography variant="body2" mb={1}>
          {collectData.info}
        </Typography>
        <Typography variant="subtitle2" color="primary.dark">
          Ціль: {collectData.value} грн {collectData.is_actual ? '' : 'досягнуто'}
        </Typography>
        <Typography variant="body1" my={1}>
           Наявні відео посилання
        </Typography>
        {/* функціональні кнопки для відвідувача сайту */}
        <Box sx={{ mb:2, display:'flex', gap:1, justifyContent:'center' }} >
          {/* conditional rendering for the button */}
          {collectData.request_video_url && (
            <Link href={collectData.request_video_url}
              rel="noopener noreferrer" target="_blank" passHref >
              <Button variant="outlined" size="small" startIcon={<PlayCircleOutlinedIcon />}>
                YouTube запиту
              </Button>
            </Link>
          )}
          {/* conditional rendering for the button */}
          {collectData.report_video_url && (
            <Link href={collectData.report_video_url}
              rel="noopener noreferrer" target="_blank" passHref >
              <Button variant="outlined" size="small" startIcon={<PlayCircleOutlinedIcon />}>
                YouTube звіту
              </Button>
            </Link>
          )}
        </Box>
		    <Typography variant="body1" mb={1}>
          {collectData.is_actual ? 'Задонатити на Збір' : 'Підтримати Фонд'}
        </Typography>
        <Box sx={{ display:'flex', justifyContent:'center', mb:2 }}>
          {collectData.is_actual && collectData.monobanka && (
            <Link href={collectData.monobanka}
              rel="noopener noreferrer" target="_blank" passHref >
              <Button variant="text" size="medium" color="success">
                на Mono банку
              </Button>
            </Link>
          )}
          <Link href={'/donate'} >
            <Button sx={{ ml: 1 }} variant="text" size="medium" color="success">
              за реквізитами
            </Button>
          </Link>
        </Box>
        {/* функціональні кнопки для адміністратора сайту */}
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mb:2 }}>
          <UpdateRaiserCard id={collectData.id} />
          <DeleteRaiser id={collectData.id} />
        </Box>
        <Typography variant="body1" mb={1}>
          Остання зміна: {formatDateToLocal(collectData.last_updated)}
        </Typography>
      </Paper>
    </div>
  );
};
export default CollectInfo;