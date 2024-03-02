// @/app/admin/page.tsx
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// authentication configuration
import { authConfig } from '@/controllers/auth';
// to get a session on the server
import { getServerSession } from 'next-auth/next';
import FundCollects from '@/views/Admin/FundCollects';

// displays the user's profile
export default async function AdminPage() {
  // getting user session on server
  const session = await getServerSession(authConfig);
  return (
    <Box sx={{ p: 2, }}>
      <div>
        <Typography variant="h1" color="info.main">
          Панель адміністратора
        </Typography>
        <Typography variant="subtitle1" color="lostLavender">
          Вітаю {session?.user?.name} !
        </Typography>
        <FundCollects />
      </div>
    </Box>
  );
}