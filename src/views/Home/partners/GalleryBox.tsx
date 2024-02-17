/* eslint-disable @next/next/no-img-element */
// @/views/Home/partners/GalleryBox.tsx
import { Box } from '@mui/material';
import { GalleryWrapperBox } from './MainWrapper';

import { PartnerImage } from '@/models/types';
interface GalleryBoxProps {
  images:PartnerImage[];
}

export default function GalleryBox({images}:GalleryBoxProps) {
  return (
    <>
      <GalleryWrapperBox>
        <Box sx={{ display: 'flex', m: 0, p: 0 }}>
          {images.map((image) => {
            return (
              <Box key={image.alt} sx={{ width: '100%', mx: 2 }}>
                <img
                  style={{ width: '100%', height: 'auto' }}
                  src={image.src}
                  alt={image.alt}
                />
              </Box>
            );
          })}
        </Box>
      </GalleryWrapperBox>
    </>
  );
};
