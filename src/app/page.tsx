// @/app/page.tsc
import styles from './page.module.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Grid from '@mui/material/Grid';

export default function Home() {
  return (
    <main className={styles.main}>
      <Typography variant="h1">
        Ваш помічник у виборі товарів з найкращою ціною.
      </Typography>
      <Typography variant="h2">
        А також до вашої уваги добірки рецептів та коктейлів.
      </Typography>
      {/*  */}
      <Grid container spacing={2} className={styles.gridContainer}>
        <Grid item xs={12} md={4}>
          <Image alt="Coctails Palitre"
            src="/images/cocktails-palitre.jpg"
            width={400} height={400}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Image alt="Picture of Price-Pulse"
            src="/images/main-page.jpg"
            width={400} height={400}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Image alt="Receipes Palitre"
            src="/images/receipes-palitre.jpg"
            width={400} height={400}
          />
        </Grid>
      </Grid>
    </main>
  );
}
