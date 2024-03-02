// @/app/admin/layout.tsx
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// authentication configuration
import { authConfig } from '@/controllers/auth';
// to get a session on the server
import { getServerSession } from 'next-auth/next';
// automatically optimizes images for loading speed
import Image from 'next/image';

import FundCollects from '@/views/Admin/FundCollects';

// displays the user's profile
export default async function AdminPage() {
  // getting user session on server
  const session = await getServerSession(authConfig);

  return (
    <Box sx={{ p: 2, }}>
      <Typography variant="subtitle1" color="lostLavender">
        Вітаю {session?.user?.name} !
      </Typography>
	    <Typography variant="body1" color="textSecondary">
        Ви можете керувати інформаційними картками про збори на головній сторінці сайту.
      </Typography>

      <FundCollects />

    </Box>
  );
}