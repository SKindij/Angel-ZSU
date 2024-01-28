// @/views/Home/blog/AwardsGrid.tsx
import Grid from '@mui/material/Grid';
import Award from '@/views/Home/blog/Award';

// information from the database
import { ourAwards } from '@/services/fund-data';

const AwardsGrid = () => {

  return (
    <Grid container spacing={{ xs:3, sm:2, md:3 }}>
      {ourAwards.map((award) => (
        <Grid key={award.id} item xs={12} sm={6} md={4} lg={3}>
          <Award award={award} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AwardsGrid;