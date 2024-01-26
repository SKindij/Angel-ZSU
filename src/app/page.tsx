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
import MainTypowriter from '@/views/Home/MainTypowriter';
import mainPic from '../../public/images/angels.jpg';
import FundHero from '@/views/Home/FundHero';
import FundCampaigns from '@/views/Home/FundCampaigns';
import FundTeam from '@/views/Home/FundTeam';
import FundBlog from '@/views/Home/FundBlog';

export default function Home() {
  return (
    <div>
      {/* welcome content block */}
      <FundHero />

      {/* several run-on sentences */}
      <Container
        sx={{
          mb: 3, padding: 1, textAlign: 'center',
          color: 'darkgreen', letterSpacing: 3, fontSize: '1.6rem',
        }}
      >
        <MainTypowriter />
      </Container>

	  {/* actual cash fees */}
	  <FundCampaigns />

      {/* members of our fund */}
	  <FundTeam />

	  {/* some more information */}
	  <FundBlog />

    </div>
  );
}
