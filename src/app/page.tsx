// @/app/page.tsc
import styles from './page.module.css';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';

import MainTypowriter from '@/views/Home/MainTypowriter';
import mainPic from '../../public/images/angels.jpg';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* home page */}
      <Grid container justifyContent="center"
        alignItems="center" direction="column"
        pt={4}
      >
        <Grid container item justifyContent="center" alignItems="center">
          <MainTypowriter />
        </Grid>
        <Grid container item mb={5} justifyContent="center" alignItems="flex-start">
          <Typography paragraph>
            Вже тривалий час ми активно беремо участь у підтримці військових та цивільного населення. Наша команда
            закриває запити у досить короткі терміни та відвозить все необхідне у найгарячіші точки України. На рахунку
            понад 30 бригад, яким ми вже змогли допомогти та тисячі цивільних.
          </Typography>
          <Typography paragraph>
            Для звернення до фонду просимо надати: відео чи офіційний лист з частини. Працюємо лише з перевіреними особами.
          </Typography>
          <Typography paragraph>
            Детально про нашу роботу та актуальну інформацію ви можете дізнатися на телеграм каналі{' '}
            <Link href="https://t.me/angel_zsu" rel="noopener noreferrer" target="_blank">
              <span className={styles.linkHighlight}>Official БФ &ldquo;Янгол ЗСУ&rdquo;</span>
            </Link>,
            там публікується детальна звітність по закритим запитам та проводяться збори коштів.
          </Typography>
          <Image
            src={mainPic}
            alt="Ангел, що охороняє джип із українськими військовослужбовцями"
            width={600} height={600}
            style={{
              borderRadius: '8px',
              marginTop: '10px',
              marginBottom: '20px'
            }}
          />
          <Typography paragraph>
            Прохання уважно перевіряти <Link href="/fund/donate"><span className={styles.linkHighlight}>реквізити</span></Link> при перерахунку коштів.
          </Typography>
          <Typography
            sx={{ fontSize: '1.5rem', fontWeight: 'bold', }}
          >
            Разом до перемоги!
          </Typography>
        </Grid>
      </Grid>
    </main>
  );
}
