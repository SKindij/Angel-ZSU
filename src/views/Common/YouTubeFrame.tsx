/* eslint-disable @next/next/no-img-element */
// @/views/Common/YouTubeFrame.tsx
'use client';
import { useRef } from 'react';
import Box from '@mui/material/Box';

export type YouTubeFrameProps = {
  video:string;
  width:string;
  height:string;
};

const YouTubeFrame:React.FC<YouTubeFrameProps> = ({
  video,
  width,
  height,
}) => {
  const divRef = useRef<HTMLDivElement | null>(null);

  const onClick = () => {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '1');
    iframe.setAttribute(
      'allow',
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    );
    iframe.style.width = width;
    iframe.style.height = height;
    iframe.setAttribute(
      'src',
      `https://www.youtube.com/embed/${video}?rel=0&showinfo=1&autoplay=1`
    );
    if (divRef.current) {
      divRef.current.innerHTML = '';
      divRef.current.appendChild(iframe);
    }
  };

  return (
    <Box
      position="relative"
      borderRadius={4}
      overflow="hidden"
      sx={{
        position: 'relative',
        borderRadius: 4,
        overflow: 'hidden',
        cursor: 'pointer',
        '&:hover img': {
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        },
        '& img': {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'box-shadow 0.3s ease',
          borderRadius: 4,
        },
        '& span': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '2rem',
          color: 'white',
        },
      }}
      ref={divRef}
    >
      <span onClick={onClick} className="ti-control-play" />
      <img alt="YouTube Video Thumbnail"
        onClick={onClick}
        loading="lazy"
        src={`https://i.ytimg.com/vi/${video}/mqdefault.jpg`}
      />
    </Box>
  );
};
export default YouTubeFrame;