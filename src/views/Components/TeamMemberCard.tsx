// @/views/Components/TeamMemberCard.tsx
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { TeamMember } from '@/models/interfaces';

interface Props {
  member:TeamMember;
}

const TeamMemberCard = ({ member }:Props) => {
  return (
    <Box sx={{ px: 1.5, py: 5 }}>
      <Box
        sx={{
          p: 2, borderRadius: 4,
          backgroundColor:'background.paper',
          transition: (theme) => theme.transitions.create(['box-shadow']),
          '&:hover': { boxShadow: 2 },
        }}
      >
        <Box
          sx={{
            height: 200, mb: 2, borderRadius: 3,
            lineHeight: 0, overflow: 'hidden',
          }}
        >
          <Image src={member.photo as string} width={570} height={427} alt={'Mentor ' + member.id} />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography component="h2" variant="h4" sx={{ fontSize: '1.4rem' }}>
            {member.name}
          </Typography>
          <Typography sx={{ mb: 2, color: 'text.secondary' }}>{member.category}</Typography>
          <Typography sx={{ mb: 2, color: 'text.secondary' }} variant="subtitle1">
            {member.description}
          </Typography>
          <Box sx={{ '& img': { height: 26 } }}>
            {/* eslint-disable-next-line */}
            <img src={member.company?.logo} alt={member.company?.name + ' logo'} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default TeamMemberCard;