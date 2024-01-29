// @/views/Home/features/FeaturesDataBlock.tsx
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

import { IFundFeatures } from '@/models/interfaces';
/* ----- Особливості фонду ----- */
export const fundFeatures:IFundFeatures[] = [
  {
    title: 'Easy Accessable',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    icon: <ArtTrackIcon />
  },
  {
    title: 'More Affordable Cost',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    icon: <AttachMoneyIcon />
  },
  {
    title: 'Flexible Study Time',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    icon: <LocalLibraryIcon />
  },
  {
    title: 'Consultation With Mentor',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    icon: <ContactSupportIcon />
  },
]

const FeaturesDataBlock = () => {
  return (
    <Grid container spacing={2} sx={{ ml: { xs: 0, md: 2 } }}>
      {fundFeatures.map(({ title, description, icon }, index) => (
        <Grid item key={title}  xs={12} md={6}>
          <Box 
		    sx={{ display: 'flex', alignItems: 'center',
			  px: 2, py: 1.5, boxShadow: 1, borderRadius: 4
		    }}
		  >
            <Box
              sx={{ display: 'flex',
                mr: 1, height: 36, width: 36,
				alignItems: 'center', justifyContent: 'center',
                backgroundColor: 'primary.main',
                borderRadius: '50%',
                color: 'primary.contrastText',
                '& svg': { fontSize: 20 },
              }}
            >
              {icon}
            </Box>
            <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
              <Typography variant="h6" sx={{ fontSize: '1rem', mb: 1, color: 'secondary.main' }}>
                {title}
              </Typography>
              <Typography color="text.secondary" variant="subtitle2">
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