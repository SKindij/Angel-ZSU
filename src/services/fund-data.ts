// @/services/fund-data.ts
import {
  IOurAchievement, IOurVideos, ITeamMember, IOurAward,
} from '@/models/interfaces';

/* ----- НАШІ З ВАМИ ДОСЯГНЕННЯ ----- */
export const ourAchievements:IOurAchievement[] = [
  {
    id: 111,
    label: 'Донарів вже долучилося до зборів.',
    value: '1 000 +',
  },
  {
    id: 112,
    label: 'Зібрано з вашою допомогою.',
    value: '700 000 +',
  },
  {
    id: 113,
    label: 'Подяк від ЗСУ за допомогу.',
    value: '50 +',
  },
];

/* ----- Відео з YouTube ----- */
export const ourCampaignVideos:IOurVideos[] = [
  {
    id: 311,
    title: 'Запит на автівку хлопцям з 54 бригади 25 батальйону (ОТУ Соледар, направлення Кремінна)',
    url: 'https://www.youtube.com/embed/w07ODwsCv-M?si=OfDt4rWgTRLWXGNx',
  },
  {
    id: 312,
    title: 'Запит на зимову гуму від хлопців з медичної групи підрозділу НГУ',
    url: 'https://www.youtube.com/embed/XF1B_h_4bGs?si=bZrpmk7-4_SiYyMs',
  },
  {
    id: 313,
    title: 'Запит на тепловізор від 3 ОШбр',
    url: 'https://www.youtube.com/embed/5rZi-ggcZWc?si=mZmOnPkAD0IIseSj',
  },
  {
    id: 314,
    title: 'Запит від Білоруських добровольців, батальйону імені Дмитра Терору на засоби звязку та 3D окуляри.',
    url: 'https://www.youtube.com/embed/i14Un9lESEk?si=2YlK_An_HZKpJIMU',
  },
  {
    id: 315,
    title: 'Запит від 10 ОГШБр на 2 позашляховики для виконання бойових завдань',
    url: 'https://www.youtube.com/embed/YLM3dQF6Ar8?si=I5KtNfjxnCOolNzQ',
  },
  {
    id: 316,
    title: 'Запит від 65 Бригади Аеророзвідки на DJI Mavic 3 Fly More Combo',
    url: 'https://www.youtube.com/embed/jkJXkKsvo7c?si=Z4Uwy8qBbNjf7qe7',
  },
  {
    id: 317,
    title: 'Запит від Взводу Ударних БПЛА 4 Мех. Батальйону Окремої Президентської Бригади ім. Б. Хмельницького',
    url: 'https://www.youtube.com/embed/pAKI30hez10?si=KOrqtU84EhTNwTtM',
  },
  {
    id: 318,
    title: 'Запит від 35 Бригади Морської Піхоти на автомобіль',
    url: 'https://www.youtube.com/embed/wJVzGoQC7vQ?si=pnib-vfOMlYjSTa5"',
  },
  {
    id: 319,
    title: 'Запит на авто від 203 батальйону звязку 108 бригади',
    url: 'https://www.youtube.com/embed/mBh9iV0lTsk?si=j3ou6U1ZKbAdyp9W',
  },
  {
    id: 320,
    title: 'Запит від 3 Роти на ноши',
    url: 'https://www.youtube.com/embed/ViZfJRB6CpA?si=dBGsO5RdT5CBd_OD',
  },
  {
    id: 321,
    title: 'Запит від Окремої Єгерської Бригади ДШВ',
    url: 'https://www.youtube.com/embed/TBgwOZsiuvs?si=dIhXjKtts2Y2Pgpb',
  },
  {
    id: 322,
    title: 'Запит від Мобільної Вогневої Групи на прожектори',
    url: 'https://www.youtube.com/embed/R0F0ycjZnDs?si=Of9BxysBTbLH190U',
  },
];

export const ourReportVideos:IOurVideos[] = [
  {
    id: 411,
    title: 'Звіт по запиту на авто від підрозділу аеророзвідки 203 батальйону 108 бригади',
    url: 'https://www.youtube.com/embed/v6QTmE_a-dc?si=T3WFes6LMty4wWyz',
  },
  {
    id: 412,
    title: 'Звіт від 1 батальйону 53 ОМБр по авто',
    url: 'https://www.youtube.com/embed/aP1f6E9OS0I?si=7xdyYFLx35GwY9uC',
  },
  {
    id: 413,
    title: 'Звіт по дронах та техніці для 45 ОСБ',
    url: 'https://www.youtube.com/embed/m5dNdkC_1F4?si=J0IZS11CUfsjXLCr',
  },
  {
    id: 414,
    title: 'Звіт від спецпідрозділу ГУРа за EcoFlow',
    url: 'https://www.youtube.com/embed/GfrIZ5Ls5Ls?si=iEkvSbYwMS0JwE0x',
  },
  {
    id: 415,
    title: 'Звіт від 17 бригади 3 роти',
    url: 'https://www.youtube.com/embed/58ezz5PRbLU?si=Y7O9pBg45kKf5Xxv',
  },
  {
    id: 416,
    title: 'Звіт від 36 бригади 1 окремоного батальйону морської піхоти',
    url: 'https://www.youtube.com/embed/WrRfq8YGi9Q?si=gfTiyddzA10NywAj',
  },
  {
    id: 417,
    title: 'Звіт від 406 ОСБ про Ecoflow',
    url: 'https://www.youtube.com/embed/2I9P4KyS_Ic?si=RC7K9hfO5av2fbuS',
  },
  {
    id: 418,
    title: 'Звіт про допомогу на позицію Піски',
    url: 'https://www.youtube.com/embed/8PNTfB2UGTs?si=HFhTHF-VdWsWcDsl',
  },
  {
    id: 419,
    title: 'Звіт від 71 Єгерської Бригади',
    url: 'https://www.youtube.com/embed/_DQReyTKlOE?si=FtB7IIO73LKhua2G',
  },
];

/* ----- Члени нашої команди ----- */
export const ourMembersData:ITeamMember[] = [
  {
    id: 511,
    photo: '/images/members/christian-buehner.jpg',
    name: 'Jhon Dwirian',
    professional: 'волонтер',
    description:
      'Київ. Київська область. Україна.',
    territory: {
      city: 'Grab',
      logo: '/images/emblems/COA_of_Kyiv.png',
    },
  },
  {
    id: 512,
    photo: '/images/members/jonas-kakaroto.jpg',
    name: 'Leon Kennedy',
    professional: 'волонтер',
    description:
      'Бровари. Броварський район. Київська область.',
    territory: {
      city: 'Google',
      logo: '/images/emblems/google.png',
    },
  },
  {
    id: 513,
    photo: '/images/members/noah-buscher.jpg',
    name: 'Nguyn Thuy',
    professional: 'волонтер',
    description:
      'Ніжин. Ніжинський район. Чернігівська область.',
    territory: {
      city: 'Airbnb',
      logo: '/images/emblems/airbnb.png',
    },
  },
  {
    id: 514,
    photo: '/images/members/philip-martin.jpg',
    name: 'Rizki Known',
    professional: 'волонтер',
    description:
      'Duisaute. Excepnon proident.',
    territory: {
      city: 'Microsoft',
      logo: '/images/emblems/microsoft.png',
    },
  },
];

/* ----- Подяки нам від військових ----- */
export const ourAwards:IOurAward[] = [
  {
    id: 711,
    title: 'ОРДП KRAKEN',
    image: 'images/blog/Gratitude-Kraken.jpg',
    body: 'Розвідувально-диверсійний підрозділ ГУР'
  },
  {
    id: 712,
    title: '61 ОМБР',
    image: 'images/blog/Gratitude-61OMSB2-ua.jpg',
    body: '61-ша окрема механізована Степова бригада'
  },
  {
    id: 713,
    title: 'A 4062',
    image: 'images/blog/Gratitude-A4062-ua.jpg',
    body: 'Військова частина A 4062'
  },
  {
    id: 714,
    title: 'A 3160',
    image: 'images/blog/Gratitude-A3160-ua.jpg',
    body: 'Військова частина A 3160'
  },
  {
    id: 715,
    title: 'A 4247',
    image: 'images/blog/Gratitude-Krutogolov-A4247-ua.jpg',
    body: 'Військова частина A 4247'
  },
  {
    id: 716,
    title: '79 ОДШБр',
    image: 'images/blog/Gratitude-79ODSB-ua.jpg',
    body: '79-та десантно-штурмова Таврійська бригада'
  },
  {
    id: 717,
    title: '61 ОМБР',
    image: 'images/blog/Gratitude-61OMSB-ua.jpg',
    body: '61-ша окрема механізована Степова бригада'
  },
  {
    id: 718,
    title: 'ПРСБ',
    image: 'images/blog/Gratitude-PRSBor-ua.jpg',
    body: 'Пожежно-рятувальна служба Бориспільщини'
  },
  {
    id: 719,
    title: 'A 4010',
    image: 'images/blog/Gratitude-A4010-ua.jpg',
    body: 'Військова частина A 4010'
  },
];








