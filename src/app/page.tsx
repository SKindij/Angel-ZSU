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
import FundHeroTest from '@/views/Home/FundHeroTest';
import FundCampaigns from '@/views/Home/FundCampaigns';
import FundTeam from '@/views/Home/FundTeam';
import FundBlog from '@/views/Home/FundBlog';

export default function Home() {
  return (
    <div>
      {/* home page */}
      <Container
        sx={{
          marginBottom: 3,
          padding: 1,
          textAlign: 'center',
          color: 'darkgreen',
          letterSpacing: 3,
          fontSize: '1.6rem',
        }}
      >
        {/* several run-on sentences */}
        <MainTypowriter />
      </Container>
	  {/* welcome content block */}
	  <FundHeroTest />
	  {/* actual cash fees */}
	  <FundCampaigns />
      {/* members of our fund */}
	  <FundTeam />
	  {/* some more information */}
	  <FundBlog />
    </div>
  );
}
