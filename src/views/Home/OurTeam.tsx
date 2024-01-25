// @/views/Home/OurTeam.tsx
'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Slider, { Settings } from 'react-slick';
// MUI components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import IconArrowBack from '@mui/icons-material/ArrowBack';
import IconArrowForward from '@mui/icons-material/ArrowForward';
// information about fund participants
import TeamMemberCard from '@/views/Components/TeamMemberCard';
import { MembersData } from '@/services/app-data';

interface SliderArrowProps {
  onClick?:()=>void;
  type:'next' | 'prev';
  className?:string;
}

const SliderArrow = ({onClick, type, className}:SliderArrowProps) => {
  const [isClient, setIsClient] = useState(false);
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down('md'));

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <IconButton className={className} onClick={onClick}
        sx={{
          backgroundColor: 'background.paper',
          color: 'primary.main',
          '&:hover': { backgroundColor:'primary.main', color:'primary.contrastText' },
          bottom: '-28px !important',
          left: 'unset !important',
          right: type === 'prev' ? '60px !important' : '0 !important',
          zIndex: 10,
          boxShadow: 1,
        }}
        disableRipple color="inherit"
      >
        {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
      </IconButton>
    )
  );
};

const StyledDots = ({ children }:any) => (
  <ul className="slick-dots">
    {React.Children.map(children, (dot) => (
      <li>
        {React.cloneElement(dot as React.ReactElement, {
          className: `slick-active${dot.props.className ? ' ' + dot.props.className : ''}`,
        })}
      </li>
    ))}
  </ul>
);

const OurTeam = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down('md'));

  const sliderConfig:Settings = {
    infinite: true,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    dots: true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box sx={{ height:8, width:30, backgroundColor:'divider', display:'inline-block', borderRadius:4 }} />
    ),
  };

  return (
    <Box id="members"
      sx={{
        pt: { xs: 6, md: 8 },
        pb: { xs: 8, md: 12,
        },
        backgroundColor: '#ecf3f3',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h1" sx={{ fontSize: 40 }}>
          Our Expert Mentors
        </Typography>

        <Slider {...sliderConfig}>
          {MembersData.map((member) => (
            <TeamMemberCard key={String(member.id)} member={member} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default OurTeam;