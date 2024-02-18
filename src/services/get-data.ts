// @/services/get-data.ts
import { unstable_noStore as noStore } from 'next/cache';
// function allows you to make queries to the database
import { sql } from '@vercel/postgres';

/* -----  ----- */






/* -----  ----- */
import {IFundRaising} from '@/models/interfaces';
export const fundRaisingData:IFundRaising[] = [
  {
    id: 7001,
    isActual: false,
    variation:'for car',
    purpose: 'На ремонт евакуаційного автомобіля',
    info:'Допоможіть нам придбати автомобіль для ефективної доставки бійців до медичних пунктів.',
    value: 98000,

  },
  {
    id: 7002,
    isActual: false,
    variation:'for medicine',
    purpose: 'На закупівлю медичного обладнання та препаратів',
    info:'Збираємо кошти на закупівлю турнікетів, нош, ліків.',
    value: 23000,

  },
  {
    id: 7003,
    isActual: false,
    variation:'for equipment',
    purpose: 'На придбання інструментів для бліндажів',
    info:'Потрібні кошти на закупівлю інструментів для проведення робіт у прифронтових районах.',
    value: 18000,

  },
  {
    id: 7004,
    isActual: true,
    variation:'for drone',
    purpose: 'На придбання дронів для військового підрозділу',
    info:'Допоможіть нам придбати дрони для ведення ефективної розвідки ворожих позицій.',
    value: 37000,

  },
];
