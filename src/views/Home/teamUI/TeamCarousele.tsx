// @/views/Home/team/TeamCarousele.tsx
'use client';
import { FC } from 'react';
import Slider, { Settings } from 'react-slick';
import { useTheme, styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// MUI components
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
// MUI icons
import IconArrowBack from '@mui/icons-material/ArrowBack';
import IconArrowForward from '@mui/icons-material/ArrowForward';
// views components
import TeamMember from '@/views/Home/teamUI/TeamMember';
// info from the database
import { ourMembersData } from '@/services/fund-common-data';

interface SliderArrowArrow {
  onClick?:()=>void;
  type:'next'|'prev';
  className?:'string';
};
const SliderArrow:FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props;
  return (
    <IconButton className={className} aria-label='flip through picture slides'
      disableRipple color="inherit" onClick={onClick}
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

const TeamCarousele = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down('sm'));
  const matchTabletView = useMediaQuery(breakpoints.down('md'));

  const sliderConfig:Settings = {
    // infinite: true, speed: 300, autoplay: true,
    slidesToShow: matchMobileView ? 1 : (matchTabletView ? 2 : 3),
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />, nextArrow: <SliderArrow type="next" />,
    dots: !matchMobileView, appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box sx={{ height:10, width:30, backgroundColor:'divider', display:'inline-block', borderRadius:4 }}/>
    ),
  };

  return (
    <>
      {/* members of the charity fund team */}
      <Slider {...sliderConfig}>
        {ourMembersData.map((member) => (
          <TeamMember key={String(member.id)} member={member} />
        ))}
      </Slider>
    </>
  );
};
export default TeamCarousele;
