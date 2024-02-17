// @/views/Home/FundPartners.tsx
import Box from '@mui/material/Box';
import SectionHeader from '@/views/Common/SectionHeader';

import classes from './partners/Gallery.module.css';
import { GalleryWrapper } from './partners/GalleryWrapper';
import GalleryBox from './partners/GalleryBox';
import { partnersImages1, partnersImages2 } from '@/services/fund-common-data';

const FundPartners = () => {
  return (
    <Box id="fund-partners" sx={{ backgroundColor:'background.paper' }}>
      <SectionHeader
        title="Партнери нашого фонду"
        description="Їхні внески та співпраця є невід'ємною частиною нашої успішної роботи на благо спільноти"
      />
      {/* Додатковий вміст вашого розділу */}
      <Box sx={{ overflowX: 'hidden' }}>
        <GalleryWrapper className={classes.article}>
          <GalleryBox images={partnersImages1} />
          <GalleryBox images={partnersImages1} />
        </GalleryWrapper>
        <GalleryWrapper className={classes.article}>
          <GalleryBox images={partnersImages2} />
          <GalleryBox images={partnersImages2} />
        </GalleryWrapper>
      </Box>

    </Box>
  );
};
export default FundPartners;