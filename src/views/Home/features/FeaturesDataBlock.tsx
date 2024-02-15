// @/views/Home/features/FeaturesDataBlock.tsx
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import DriveEtaIcon from '@mui/icons-material/DriveEta';
import MedicationIcon from '@mui/icons-material/Medication';
import BugReportIcon from '@mui/icons-material/BugReport';
import ExploreIcon from '@mui/icons-material/Explore';

import { IFundFeatures } from '@/models/interfaces';
/* ----- Особливості фонду ----- */
const fundFeatures:IFundFeatures[] = [
  {
    title: 'Приганяємо автомобілі',
    description: 'Забезпечуємо транспортом військових для надійної та швидкої мобільності на фронті. Хороші засоби пересування сприяють ефективності військових підрозділів.',
    icon: <DriveEtaIcon />
  },
  {
    title: 'Допомагаємо медикам',
    description: 'Надаємо підтримку медичним працівникам, які служать на передовій. Постачаємо необхідне медичне обладнання, щоб вони могли надавати якісну медичну допомогу.',
    icon: <MedicationIcon />
  },
  {
    title: 'Забезпечуємо дронами',
    description: 'Безпілотні літальні апарати (БПЛА) використовуються для розвідки та виконання бойових завдань. Дрони допомагають збирати інформацію та нищити ворогів України.',
    icon: <BugReportIcon />
  },
  {
    title: 'Збираємо спорядження',
    description: 'Передаємо у військові підрозділи необхідні речі для безпеки та комфорту під час несення служби. Наша мета - зробити службу військових максимально ефективною.',
    icon: <ExploreIcon />
  },
];

const FeaturesDataBlock = () => {
  return (
    <Grid container spacing={2} >
      {fundFeatures.map(({ title, description, icon }, index) => (
        <Grid item key={title}  xs={12} md={6}>
          <Box
		        sx={{ display: 'flex', alignItems: 'center',
			        px: 2, py: 1.5,
              boxShadow: 2, borderRadius: 4
		        }}
		      >
            <Box
              sx={{ display: 'flex',
                mr: 1, height: 36, width: 36, borderRadius: '50%',
                alignItems: 'center', justifyContent: 'center',
                backgroundColor: 'primary.light',
                color: 'primary.contrastText',
                '& svg': { fontSize: 20 },
              }}
            >
              {icon}
            </Box>
            <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
              <Typography variant="h5" sx={{ fontSize: '1.2rem', mb: 1, color: 'secondary.dark' }}>
                {title}
              </Typography>
              <Typography color="text.secondary" variant="body2">
                {description}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
export default FeaturesDataBlock;