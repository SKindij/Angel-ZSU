// @/views/AuthUI/SignInForm.tsx
'use client';

// to manipulate routes in response to user actions
import { useRouter } from 'next/navigation';
// to login the user using the credentials from the form
import { signIn } from 'next-auth/react';
// type for form event handler
import type { FormEventHandler } from 'react';
// MUI components
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import backPic from '../../../public/images/backsingin.jpg';

export default function SignInForm() {
  // initialize router to change the route
  const router = useRouter();
  // login form submit event handler
  const handleSubmit:FormEventHandler<HTMLFormElement> = async (event) => {
    // запобігання автоматичній відправці форми
    event.preventDefault();
    // отримання даних з форми
    const formData = new FormData(event.currentTarget);
    // виклик функції для входу з обліковими даними користувача
    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      // вимкнення автоматичного перенаправлення після входу
      redirect: false,
    });
    // перевірка результату входу користувача та дій після входу
    if (res && !res.error) {
      // перенаправлення на сторінку профілю після успішного входу
      router.push('/admin');
    } else {
      // виведення помилки в консоль у разі невдалого входу
      console.log(res);
    }
  };

  return (
    <Grid container sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid item
		    xs={false} sm={4} md={7}
        sx={{
          backgroundImage: `url(${backPic.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8, mx: 4, display: 'flex',
            flexDirection: 'column', alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
              Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField name="email"
              margin="normal" required fullWidth
              id="email" label="Email Address"
              autoComplete="email" autoFocus
            />
            <TextField type="password" name="password"
              margin="normal" required fullWidth
              label="Password" id="password"
              autoComplete="current-password"
            />
            <Button type="submit"
              fullWidth variant="contained"
              sx={{ mt: 4, mb: 2 }}
            >
                УВІЙТИ
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}