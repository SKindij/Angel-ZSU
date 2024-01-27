// @/views/Home/hero/ScrollingButtons.tsx
'use client';
import { Link as ScrollLink } from 'react-scroll';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const ScrollingButtons = () => {
  return (
    <Box sx={{ '& button': { mr: { xs:1, md:3 } } }}>
      <ScrollLink to="fund-campaigns" spy={true} smooth={true} offset={0} duration={350}>
        <Button color="primary" variant="contained" size="large">
                    Актуальні збори
        </Button>
      </ScrollLink>
      <ScrollLink to="fund-blog" spy={true} smooth={true} offset={0} duration={350}>
        <Button color="primary" variant="outlined" startIcon={<SendIcon/>} size="large">
                    Наш блог
        </Button>
      </ScrollLink>
    </Box>

  );
};
export default ScrollingButtons;