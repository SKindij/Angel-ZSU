// @/views/CandidateUI/ComplexButton.tsx
'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const image = {
  url: '/images/questionnaire.jpg',
  title: 'Заповнити Анкету',
  width: '60%',
};

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 400,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 300,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0, right: 0, top: 0, bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const ImageBox = styled('span')(({ theme }) => ({
  position: 'absolute', display: 'flex',
  left: 0, right: 0, top: 0, bottom: 0,
  alignItems: 'center', justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0, right: 0, top: 0, bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 4, width: 70,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ComplexButton() {
  return (
    <Box sx={{ mb:4, textAlign:'center' }}>
      <ImageButton
        focusRipple
        key={image.title}
        style={{
          width: image.width,
        }}
      >
        <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <ImageBox>
          <Typography component="span"
            variant="h3" color="inherit"
            sx={{
              position: 'relative',
              p: 4, pt: 2,
              pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            }}
          >
            {image.title}
            <ImageMarked className="MuiImageMarked-root" />
          </Typography>
        </ImageBox>
      </ImageButton>
    </Box>
  );
}