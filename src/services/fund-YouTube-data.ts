// @/services/fund-YouTube-data.ts
import { IOurVideos } from '@/models/interfaces';

/* ------- ВІДЕО YouTube ЗАПИТИ ------- */
/* ----- запити на автомобілі та автотовари ----- */
export const requestsForCarsVideos:IOurVideos[] = [
  {
    id: 1101,
    title: 'Запит на автівку хлопцям з 54 бригади 25 батальйону (ОТУ Соледар, направлення Кремінна)',
    url: 'https://www.youtube.com/embed/w07ODwsCv-M?si=OfDt4rWgTRLWXGNx',
  },
  {
    id: 1102,
    title: 'Запит на зимову гуму від хлопців з медичної групи підрозділу НГУ',
    url: 'https://www.youtube.com/embed/XF1B_h_4bGs?si=bZrpmk7-4_SiYyMs',
  },
  {
    id: 1103,
    title: 'Запит від 10 ОГШБр на 2 позашляховики для виконання бойових завдань',
    url: 'https://www.youtube.com/embed/YLM3dQF6Ar8?si=I5KtNfjxnCOolNzQ',
  },
  {
    id: 1104,
    title: 'Запит від 35 Бригади Морської Піхоти на автомобіль',
    url: 'https://www.youtube.com/embed/wJVzGoQC7vQ?si=pnib-vfOMlYjSTa5"',
  },
  {
    id: 1105,
    title: 'Запит на авто від 203 батальйону звязку 108 бригади',
    url: 'https://www.youtube.com/embed/mBh9iV0lTsk?si=j3ou6U1ZKbAdyp9W',
  },
  {
    id: 1106,
    title: '',
    url: '',
  },
  {
    id: 1107,
    title: '',
    url: '',
  },
  {
    id: 1108,
    title: '',
    url: '',
  },
];
/* ----- запити від військових медиків ----- */
export const requestFromMilitaryMedicsVideos:IOurVideos[] = [
  {
    id: 1201,
    title: 'Запит від Окремої Єгерської Бригади ДШВ',
    url: 'https://www.youtube.com/embed/TBgwOZsiuvs?si=dIhXjKtts2Y2Pgpb',
  },
  {
    id: 1202,
    title: '',
    url: '',
  },
  {
    id: 1203,
    title: 'Запит від 3 Роти на ноши',
    url: 'https://www.youtube.com/embed/ViZfJRB6CpA?si=dBGsO5RdT5CBd_OD',
  },
  {
    id: 1204,
    title: '',
    url: '',
  },
  {
    id: 1205,
    title: '',
    url: '',
  },
  {
    id: 1206,
    title: '',
    url: '',
  },
];
/* ----- запити на безпілотні літальні апарати ----- */
export const requestForMilitaryEquipmentVideos:IOurVideos[] = [
  {
    id: 1201,
    title: 'Запит на тепловізор від 3 ОШбр',
    url: 'https://www.youtube.com/embed/5rZi-ggcZWc?si=mZmOnPkAD0IIseSj',
  },
  {
    id: 1202,
    title: 'Запит від Білоруських добровольців, батальйону імені Дмитра Терору на засоби звязку та 3D окуляри.',
    url: 'https://www.youtube.com/embed/i14Un9lESEk?si=2YlK_An_HZKpJIMU',
  },
  {
    id: 1203,
    title: 'Запит від 65 Бригади Аеророзвідки на DJI Mavic 3 Fly More Combo',
    url: 'https://www.youtube.com/embed/jkJXkKsvo7c?si=Z4Uwy8qBbNjf7qe7',
  },
  {
    id: 317,
    title: 'Запит від Взводу Ударних БПЛА 4 Мех. Батальйону Окремої Президентської Бригади ім. Б. Хмельницького',
    url: 'https://www.youtube.com/embed/pAKI30hez10?si=KOrqtU84EhTNwTtM',
  },
  {
    id: 322,
    title: 'Запит від Мобільної Вогневої Групи на прожектори',
    url: 'https://www.youtube.com/embed/R0F0ycjZnDs?si=Of9BxysBTbLH190U',
  },
];
/* ----- запити на військове обладнання ----- */
export const requestForUFOvideos:IOurVideos[] = [
  {
    id: 1201,
    title: 'Запит на тепловізор від 3 ОШбр',
    url: 'https://www.youtube.com/embed/5rZi-ggcZWc?si=mZmOnPkAD0IIseSj',
  },
  {
    id: 1202,
    title: 'Запит від Білоруських добровольців, батальйону імені Дмитра Терору на засоби звязку та 3D окуляри.',
    url: 'https://www.youtube.com/embed/i14Un9lESEk?si=2YlK_An_HZKpJIMU',
  },
  {
    id: 1203,
    title: 'Запит від 65 Бригади Аеророзвідки на DJI Mavic 3 Fly More Combo',
    url: 'https://www.youtube.com/embed/jkJXkKsvo7c?si=Z4Uwy8qBbNjf7qe7',
  },
  {
    id: 317,
    title: 'Запит від Взводу Ударних БПЛА 4 Мех. Батальйону Окремої Президентської Бригади ім. Б. Хмельницького',
    url: 'https://www.youtube.com/embed/pAKI30hez10?si=KOrqtU84EhTNwTtM',
  },
  {
    id: 322,
    title: 'Запит від Мобільної Вогневої Групи на прожектори',
    url: 'https://www.youtube.com/embed/R0F0ycjZnDs?si=Of9BxysBTbLH190U',
  },
];


/* ------- ВІДЕО YouTube ЗВІТИ ------- */
/* ----- Звіти про надані фондом автівки ----- */
export const reportOfCarsVideos:IOurVideos[] = [
  {
    id: 2101,
    title: 'Звіт по запиту на авто від підрозділу аеророзвідки 203 батальйону 108 бригади',
    url: 'https://www.youtube.com/embed/v6QTmE_a-dc?si=T3WFes6LMty4wWyz',
  },
  {
    id: 2102,
    title: 'Звіт від 1 батальйону 53 ОМБр по авто',
    url: 'https://www.youtube.com/embed/aP1f6E9OS0I?si=7xdyYFLx35GwY9uC',
  },
  {
    id: 2103,
    title: '',
    url: '',
  },
  {
    id: 2104,
    title: '',
    url: '',
  },
  {
    id: 2105,
    title: '',
    url: '',
  },
  {
    id: 2106,
    title: '',
    url: '',
  },
];
/* ----- Звіти про надане фондом медичне обладнання ----- */
export const reportOfMedicalInstruments:IOurVideos[] = [
  {
    id: 2201,
    title: '',
    url: '',
  },
  {
    id: 2202,
    title: '',
    url: '',
  },
  {
    id: 2203,
    title: 'Звіт від 17 бригади 3 роти',
    url: 'https://www.youtube.com/embed/58ezz5PRbLU?si=Y7O9pBg45kKf5Xxv',
  },
  {
    id: 2204,
    title: '',
    url: '',
  },
  {
    id: 2205,
    title: '',
    url: '',
  },
  {
    id: 2206,
    title: '',
    url: '',
  },
];
/* ----- Звіти про надані фондом безпілотні літальні апарати ----- */
export const reportOfUFOvideos:IOurVideos[] = [
  {
    id: 2301,
    title: 'Звіт по дронах та техніці для 45 ОСБ',
    url: 'https://www.youtube.com/embed/m5dNdkC_1F4?si=J0IZS11CUfsjXLCr',
  },
  {
    id: 2302,
    title: '',
    url: '',
  },
  {
    id: 2303,
    title: '',
    url: '',
  },
  {
    id: 2304,
    title: '',
    url: '',
  },
  {
    id: 2305,
    title: '',
    url: '',
  },
  {
    id: 2306,
    title: '',
    url: '',
  },
];
/* ----- Звіти про надані фондом корисні речі для військових ----- */
export const reportOfUsefulThingsVideos:IOurVideos[] = [
  {
    id: 2401,
    title: 'Звіт від спецпідрозділу ГУРа за EcoFlow',
    url: 'https://www.youtube.com/embed/GfrIZ5Ls5Ls?si=iEkvSbYwMS0JwE0x',
  },
  {
    id: 2402,
    title: 'Звіт від 36 бригади 1 окремоного батальйону морської піхоти',
    url: 'https://www.youtube.com/embed/WrRfq8YGi9Q?si=gfTiyddzA10NywAj',
  },
  {
    id: 2403,
    title: 'Звіт від 406 ОСБ про Ecoflow',
    url: 'https://www.youtube.com/embed/2I9P4KyS_Ic?si=RC7K9hfO5av2fbuS',
  },
  {
    id: 2404,
    title: 'Звіт про допомогу на позицію Піски',
    url: 'https://www.youtube.com/embed/8PNTfB2UGTs?si=HFhTHF-VdWsWcDsl',
  },
  {
    id: 2405,
    title: 'Звіт від 71 Єгерської Бригади',
    url: 'https://www.youtube.com/embed/_DQReyTKlOE?si=FtB7IIO73LKhua2G',
  },
  {
    id: 2406,
    title: '',
    url: '',
  },
  {
    id: 2407,
    title: '',
    url: '',
  },
  {
    id: 2408,
    title: '',
    url: '',
  },
  {
    id: 2409,
    title: '',
    url: '',
  },
];




