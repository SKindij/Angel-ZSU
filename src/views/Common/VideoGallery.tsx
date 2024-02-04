// @/views/Common/VideoGallery.tsx
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import YouTubeFrame from '@/views/Common/YouTubeFrame';

import { IOurVideos } from '@/models/interfaces';
interface VideoGalleryProps {
  videoUrls:IOurVideos[];
}

const VideoGallery:React.FC<VideoGalleryProps> = ({ videoUrls }) => {
  return (
    <Box p={1}>
      <Grid container rowSpacing={1} columnSpacing={{ xs:1, sm:2, md:3, lg:6 }}>
        {videoUrls.map((video) => (
          <Grid key={video.id} item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Card>
              <CardActionArea>
                <YouTubeFrame
                  video={video.url}
                  width='100%'
                  height='100%'
                />
                <CardContent>
                  <Typography variant="body2">
                    {video.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default VideoGallery;