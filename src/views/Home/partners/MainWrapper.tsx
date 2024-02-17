// @/views/Home/partners/MainWrapper.tsx
import classes from './Gallery.module.css';
import Box from '@mui/material/Box';

export const GalleryWrapper = ({ children }:{ children:React.ReactNode }) => (
  <Box className={classes.article}
    sx={{
      display: 'flex',
      marginBottom: '0.5rem',
      width: '200%', // default for md
      '@media (min-width: 726px) and (max-width: 900px)': {
        width: '300%',
      },
      '@media (min-width: 589px) and (max-width: 725px)': {
        width: '400%',
      },
      '@media (min-width: 421px) and (max-width: 588px)': {
        width: '500%',
      },
      '@media (min-width: 320px) and (max-width: 420px)': {
        width: '700%',
      },
      '@media (max-width: 319px)': {
        width: '700%',
      },
    }}
  >
    {children}
  </Box>
);

export const GalleryWrapperBox = ({ children }:{ children:React.ReactNode }) => (
  <Box
    sx={{
      width: '100%', // default for md
      '@media (min-width: 726px) and (max-width: 900px)': {
        width: '150%',
      },
      '@media (min-width: 589px) and (max-width: 725px)': {
        width: '200%',
      },
      '@media (min-width: 421px) and (max-width: 588px)': {
        width: '250%',
      },
      '@media (min-width: 320px) and (max-width: 420px)': {
        width: '350%',
      },
      '@media (max-width: 319px)': {
        width: '350%',
      },
    }}
  >
    {children}
  </Box>
);
