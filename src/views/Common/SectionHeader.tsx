// @/views/Common/SectionHeader.tsx
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface SectionHeaderProps {
  title:string;
  description:string;
}

const SectionHeader:React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {description}
      </Typography>
    </Box>
  );
};
export default SectionHeader;