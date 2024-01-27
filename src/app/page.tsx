// @/app/page.tsc
import { Fragment } from 'react';
// material-ui
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
// views components
import FundHero from '@/views/Home/FundHero';
import MainTypowriter from '@/views/Home/MainTypowriter';
import angelsDefendersPic from '../../public/images/angels-defend-cars.jpg';
import angelOnSUVPic from '../../public/images/angel-on-SUV.jpg';

import FundCampaigns from '@/views/Home/FundCampaigns';
import FundTeam from '@/views/Home/FundTeam';
import FundBlog from '@/views/Home/FundBlog';

export default function Home() {
  return (
    <div>
      {/* welcome content block */}
      <FundHero />
      <Box
        sx={{
        // use relative position for the parent div
          position: 'relative', overflow: 'hidden',
          width: '100%', height: 700,
        }}
      >
        <Image alt={'Angel defends car'}
          src={angelOnSUVPic}
          fill placeholder='blur' quality={90}
          sizes='100vw'
          style={{
            objectFit: 'cover', // cover, contain, none
          }}
        />
        <Box
          sx={{
          // use absolute position for the child element
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            // use higher zIndex than the image
            zIndex: 1,
          }}
        >
          {/* several run-on sentences */}
          <Container
            sx={{
              textAlign: 'center',
              fontSize: {xs:'1.4rem', md:'3.0rem'},
              color: 'primary.contrastText', letterSpacing: 3,
            }}
          >
            <MainTypowriter />
          </Container>
        </Box>
      </Box>

	  {/* actual cash fees */}
	  <FundCampaigns />

      {/* members of our fund */}
	  <FundTeam />

	  {/* some more information */}
	  <FundBlog />

    </div>
  );
}
