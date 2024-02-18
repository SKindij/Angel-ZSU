// @/services/get-data.ts
import { unstable_noStore as noStore } from 'next/cache';
// function allows you to make queries to the database
import { sql } from '@vercel/postgres';

/* -----  ----- */






/* -----  ----- */
import {IFundRaising} from '@/models/interfaces';
export const fundRaisingData:IFundRaising[] = [
  {
    id: 1001,
    title: 'Четвертий збір',
    variation:'onCar',
    info:'Інформація про цей збір',
    value: 475000,
    isСomplete: false
  },
  {
    id: 1002,
    title: 'Третій збір',
    variation:'onMedicine',
    info:'Інформація про цей збір',
    value: 32000,
    isСomplete: true
  },
  {
    id: 1003,
    title: 'Другий збір',
    variation:'onTools',
    info:'Інформація про цей збір',
    value: 21000,
    isСomplete: true
  },
  {
    id: 1004,
    title: 'Перший збір',
    variation:'onDron',
    info:'Інформація про цей збір',
    value: 47000,
    isСomplete: true
  },
];
