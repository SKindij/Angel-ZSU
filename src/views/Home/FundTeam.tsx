// @/views/Home/FundTeam.tsx
'use client';
import React, { FC } from 'react';
import Slider, { Settings } from 'react-slick';
import { useTheme, styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// MUI components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// MUI icons
import IconArrowBack from '@mui/icons-material/ArrowBack';
import IconArrowForward from '@mui/icons-material/ArrowForward';
// views components
import SectionHeader from '@/views/Common/SectionHeader';
import TeamMember from '@/views/Home/team/TeamMember';
// info from the database
import { ourMembersData } from '@/services/fund-data';

interface SliderArrowArrow {
  onClick?:()=>void;
  type:'next'|'prev';
  className?:'string';
};
const SliderArrow:FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props;
  return (
    <IconButton className={className} disableRipple
	  color="inherit" onClick={onClick}
      sx={{
	    bottom: '-28px !important', left: 'unset !important',
        right: type === 'prev' ? '60px !important' : '0 !important',
        backgroundColor: 'sassyYellow',
        color: 'primary.dark', boxShadow: 1,
        '&:hover': {backgroundColor:'primary.main', color:'primary.contrastText'},
        zIndex: 10,
      }}
    >
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  );
};
const StyledDots = styled('ul')(({ theme }) => ({
  '&.slick-dots': {
    position: 'absolute', left: -80, bottom: -20,
    '& li': {
      marginRight: 1,
      '&.slick-active>div': { backgroundColor: theme.palette.primary.main },
    },
  },
}));

const FundTeam = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down('md'));

  const sliderConfig:Settings = {
    infinite: true, speed: 300, // autoplay: true,
    slidesToShow: matchMobileView ? 1 : 3, slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />, nextArrow: <SliderArrow type="next" />,
    dots: true, appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box sx={{ height:10, width:30, backgroundColor:'divider', display:'inline-block', borderRadius:4 }}/>
    ),
  };

  return (
    <Box id="fund-team"
	    sx={{ pt:1, pb:{xs:6, md:8}, backgroundColor:'background.paper' }}
	  >
      <Container maxWidth="lg">

        <SectionHeader
          title="Наша команда"
          description="Дізнайтеся більше про тих, хто стоїть за успіхами та досягненнями нашого фонду."
        />

        {/* members of the charity fund team */}
        <Slider {...sliderConfig}>
          {ourMembersData.map((member) => (
            <TeamMember key={String(member.id)} member={member} />
          ))}
        </Slider>

      </Container>
    </Box>
  );
};
export default FundTeam;
