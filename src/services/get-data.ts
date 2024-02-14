// @/services/get-data.ts
import { unstable_noStore as noStore } from 'next/cache';
// function allows you to make queries to the database
import { sql } from '@vercel/postgres';

/* -----  ----- */






/* -----  ----- */
import {IFundRaising} from '@/models/interfaces';
export const fundRaisingData:IFundRaising = {
  id: 1001,
  title: 'Назва збору',
  variation:'onCar',
  info:'Щось про збір',
  value: 27000,
  isСomplete: false
};
