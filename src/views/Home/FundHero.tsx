// @/views/Home/FundHero.tsx
'use client';
import { Link as ScrollLink } from 'react-scroll';
// MUI components
import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// MUI icons
import SendIcon from '@mui/icons-material/Send';
// information from the database
import { IOurAchievement } from '@/models/interfaces';
import { ourAchievements } from '@/services/fund-data';


interface AchievItemProps {
  item:IOurAchievement;
};

const AchievItem = ({ item }:AchievItemProps) => {
  const { value, label } = item;
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0 } }}>
      <Typography
        sx={{ color:'secondary.main', mb:1, fontSize: { xs:30, md:40 }, fontWeight:'bold' }}
      >
        {value}
      </Typography>
      <Typography color="text.secondary" variant="subtitle2">
        {label}
      </Typography>
    </Box>
  );
};

const FundHero = () => {
  return (
    <Box id="fund-hero" sx={{ bgcolor:'background.paper', position:'relative', pt:1, pb: { xs:8, md:10 } }}>
      <Container maxWidth="lg">

        <Grid container spacing={0} sx={{ flexDirection: { xs:'column', md:'unset' } }}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{ display: 'flex', height: '100%',
                textAlign: { xs:'center', md:'left' },
                flexDirection:'column', justifyContent:'center',
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography component="h2"
                  sx={{ position: 'relative',
                    fontSize: { xs: 30, md: 48 }, lineHeight: 1.3,
                    letterSpacing: 1.5, fontWeight: 'bold',
                  }}
                >
                  <Typography component="mark"
                    sx={{ position:'relative', backgroundColor: 'unset',
                      color:'primary.main', fontSize:'inherit', fontWeight:'inherit',
                    }}
                  >
                    Збройні{' '}
                    <Box
                      sx={{ position:'absolute',
                        top: { xs:24, md:34 }, left: 2,
                        transform: 'rotate(3deg)',
                        '& img': { width: { xs:146, md:210 }, height:'auto' },
                      }}
                    >
                      {/* eslint-disable-next-line */}
                      <img src="/images/layout/headline-curve.svg" alt="Headline curve" />
                    </Box>
                  </Typography>
                  сили{' '}
                  <Typography component="span"
                    sx={{ position: 'relative',
                      fontSize: 'inherit', fontWeight: 'inherit',
                      '& svg': {
                        position:'absolute', top: -16, right: -21,
                        width: { xs: 22, md: 30 }, height: 'auto',
                      },
                    }}
                  >
                    України
                    <svg version="1.1" viewBox="0 0 3183 3072">
                      <g id="Layer_x0020_1">
                        <path fill="#127C71"
                          d="M2600 224c0,0 0,0 0,0 236,198 259,562 52,809 -254,303 -1849,2089 -2221,1776 -301,-190 917,-1964 1363,-2496 207,-247 570,-287 806,-89z"
                        />
                        <path fill="#127C71"
                          d="M3166 2190c0,0 0,0 0,0 64,210 -58,443 -270,516 -260,90 -1848,585 -1948,252 -104,-230 1262,-860 1718,-1018 212,-73 437,39 500,250z"
                        />
                        <path fill="#127C71"
                          d="M566 3c0,0 0,0 0,0 -219,-26 -427,134 -462,356 -44,271 -255,1921 90,1962 245,62 628,-1392 704,-1869 36,-221 -114,-424 -332,-449z"
                        />
                      </g>
                    </svg>
                  </Typography>{' '}
                  <br /> наш головний пріоритет
                </Typography>
              </Box>
			        {/* eslint-disable-next-line */}
              <Box sx={{ mb: 4, width: { xs:'100%', md:'70%' } }}>
                <Typography sx={{ color:'text.secondary', lineHeight:1.6 }}>
                  {'Наша команда закриває запити у досить короткі терміни та відвозить все необхідне у найгарячіші точки України.'}
                </Typography>
              </Box>
			        {/* scrolling buttons */}
              <Box sx={{ '& button': { mr: 2 } }}>
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
            </Box>
          </Grid>

          <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
            {/* Ukrainian Trident */}
            <Box
              sx={{ position: 'absolute', display: 'flex',
                bottom: 30, left: { xs: 0, md: -150 },
                boxShadow: 1, borderRadius: 3,
                px: 2,  py: 1.4, zIndex: 1,
                backgroundColor: 'background.paper',
                alignItems: 'flex-start', width: 280,
              }}
            >
              <Box
                sx={{ display: 'flex',
                  boxShadow: 1, borderRadius: '50%',
                  width: 44, height: 44, mr: 2,
                  alignItems: 'center', justifyContent: 'center',
                  '& img': { width:'32px !important', height:'auto' },
                }}
              >
                <Image src="/images/layout/trident.png" alt="Ukrainian Trident" width={50} height={50} quality={97} />
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ color:'secondary.main', fontWeight:700 }}>
                  Слава нації
                </Typography>
                <Typography variant="subtitle2" sx={{ color:'primary.main', fontWeight:700 }}>
                  Смерть ворогам
                </Typography>
              </Box>
            </Box>
            <Box sx={{ position: 'relative', maxWidth: '100%', margin: '0 auto' }}>
              <Image src="/images/layout/angel-zsu-brend.png" width={480} height={480} alt="Angel zsu brend" />
            </Box>
          </Grid>
        </Grid>

        {/* Experience */}
        <Box sx={{ boxShadow: 2, py: 3, px: 7, borderRadius: 4 }}>
          <Grid container spacing={2}>
            {ourAchievements.map((item) => (
              <Grid key={item.id} item xs={12} md={4}>
                <AchievItem item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>

      </Container>
    </Box>
  );
};
export default FundHero;
