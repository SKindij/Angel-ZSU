// @/services/fund-common-data.ts
import {
  IOurAchievement, ITeamMember, IOurAward,
} from '@/models/interfaces';
// for Local Images
import KrutogolovaPic from '../../public/images/members/Krutogolova.png';
import ShevchenkoPic from '../../public/images/members/Shevchenko.png';
import BalbekovPic from '../../public/images/members/Balbekov.png';
import SlominskaPic from '../../public/images/members/Slominska.png';
import KvashaPic from '../../public/images/members/Kvasha.png';
import PereverzevaPic from '../../public/images/members/Pereverzeva.jpg';
import StotskiyPic from '../../public/images/members/Stotskiy.jpg';
import KrutogolovPic from '../../public/images/members/Krutogolov.png';
import TurchynPic from '../../public/images/members/Turchyn.png';
import KazminPic from '../../public/images/members/Kazmin.png';
import PugachPic from '../../public/images/members/Pugach.png';
import AbramenkopPic from '../../public/images/members/Abramenko.png';
import GoidenkoPic from '../../public/images/members/Goidenko.png';

/* ----- НАШІ З ВАМИ ДОСЯГНЕННЯ ----- */
export const ourAchievements:IOurAchievement[] = [
  {
    id: 3111,
    label: 'отримали допомогу від фонду',
    value: '60 бригад +',
  },
  {
    id: 3112,
    label: 'зібрано на потреби ЗСУ',
    value: '20 000 000 грн +',
  },
  {
    id: 3113,
    label: 'привезено гуманітарної допомоги',
    value: '100 тон +',
  },
  {
    id: 3114,
    label: 'доставлено на потреби фронту',
    value: '36 авто +',
  },
  {
    id: 3115,
    label: 'передано наши військовим',
    value: '50 дронів +',
  },
];

/* ----- Члени нашої команди ----- */
export const ourMembersData:ITeamMember[] = [
  {
    id: 8511,
    photo: KrutogolovaPic,
    name: 'Крутоголов Юлія',
    professional: 'директор фонду',
    description: 'Дмитрівка. Ніжинський район. Чернігівщина.',
    territory: {
      city: 'Nizhyn',
      logo: '/images/emblems/Nizhyn-COA.png',
    },
  },
  {
    id: 8512,
    photo: ShevchenkoPic,
    name: 'Шевченко Ігор',
    professional: 'волонтер',
    description: 'Бровари. Броварський район. Київська область.',
    territory: {
      city: 'Brovary',
      logo: '/images/emblems/Brovary-gerb.png',
    },
  },
  {
    id: 8513,
    photo: BalbekovPic,
    name: 'Балбеков Ілля',
    professional: 'волонтер',
    description: 'Конотоп. Конотопський район. Сумщина.',
    territory: {
      city: 'Konotop',
      logo: '/images/emblems/Coat-Konotop.png',
    },
  },
  {
    id: 8514,
    photo: SlominskaPic,
    name: 'Сломінська Анастасія',
    professional: 'волонтер',
    description: 'Бровари. Броварський район. Київська область.',
    territory: {
      city: 'Brovary',
      logo: '/images/emblems/Brovary-gerb.png',
    },
  },
  {
    id: 8515,
    photo: KvashaPic,
    name: 'Ігор Кваша',
    professional: 'волонтер',
    description: 'Київ. Київська область. Україна.',
    territory: {
      city: 'Kyiv',
      logo: '/images/emblems/COA-of-Kyiv.png',
    },
  },
  {
    id: 8516,
    photo: PereverzevaPic,
    name: 'Переверзєва Владислава',
    professional: 'волонтер',
    description: 'Дніпро. Придніпровська височина. Україна.',
    territory: {
      city: 'Dnipro',
      logo: '/images/emblems/Dnipro_Gerb.png',
    },
  },
  {
    id: 8517,
    photo: StotskiyPic,
    name: 'Стоцький Віталій',
    professional: 'волонтер',
    description: 'Бровари. Броварський район. Київська область.',
    territory: {
      city: 'Brovary',
      logo: '/images/emblems/Brovary-gerb.png',
    },
  },
  {
    id: 8518,
    photo: KrutogolovPic,
    name: 'Крутоголов Микола',
    professional: 'волонтер',
    description: 'Київ. Київська область. Україна.',
    territory: {
      city: 'Kyiv',
      logo: '/images/emblems/COA-of-Kyiv.png',
    },
  },
  {
    id: 8519,
    photo: TurchynPic,
    name: 'Віктор Турчин',
    professional: 'волонтер',
    description: 'Україна.',
    territory: {
      city: 'Kyiv',
      logo: '/images/emblems/COA-of-Kyiv.png',
    },
  },
  {
    id: 8520,
    photo: KazminPic,
    name: 'Олександр Казьмін',
    professional: 'волонтер',
    description: 'Бровари. Броварський район. Київська область.',
    territory: {
      city: 'Brovary',
      logo: '/images/emblems/Brovary-gerb.png',
    },
  },
  {
    id: 8521,
    photo: PugachPic,
    name: 'Іван Пугач',
    professional: 'волонтер',
    description: 'Бахмач. Ніжинський район. Чернігівщина.',
    territory: {
      city: 'Bachmach',
      logo: '/images/emblems/Bahmach-gerb.png',
    },
  },
  {
    id: 8522,
    photo: AbramenkopPic,
    name: 'Абраменко Дмитро',
    professional: 'волонтер',
    description: 'Бровари. Броварський район. Київська область.',
    territory: {
      city: 'Brovary',
      logo: '/images/emblems/Brovary-gerb.png',
    },
  },
  {
    id: 8523,
    photo: GoidenkoPic,
    name: 'Євгеній Гойденко',
    professional: 'волонтер',
    description: 'Суми. Сумська область. Україна.',
    territory: {
      city: 'Sumy',
      logo: '/images/emblems/Sumy-Koehne.png',
    },
  },
];

/* ----- Подяки нам від військових ----- */
export const ourAwards:IOurAward[] = [
  {
    id: 711,
    title: 'ОРДП KRAKEN',
    image: '/images/blog/Gratitude-Kraken.jpg',
    body: 'Розвідувально-диверсійний підрозділ ГУР'
  },
  {
    id: 712,
    title: '61 ОМБР',
    image: '/images/blog/Gratitude-61OMSB2-ua.jpg',
    body: '61-ша окрема механізована Степова бригада'
  },
  {
    id: 713,
    title: 'A 4062',
    image: '/images/blog/Gratitude-A4062-ua.jpg',
    body: 'Військова частина A 4062'
  },
  {
    id: 714,
    title: 'A 3160',
    image: '/images/blog/Gratitude-A3160-ua.jpg',
    body: 'Військова частина A 3160'
  },
  {
    id: 715,
    title: 'A 4247',
    image: '/images/blog/Gratitude-Krutogolov-A4247-ua.jpg',
    body: 'Військова частина A 4247'
  },
  {
    id: 716,
    title: '79 ОДШБр',
    image: '/images/blog/Gratitude-79ODSB-ua.jpg',
    body: '79-та десантно-штурмова Таврійська бригада'
  },
  {
    id: 717,
    title: '61 ОМБР',
    image: '/images/blog/Gratitude-61OMSB-ua.jpg',
    body: '61-ша окрема механізована Степова бригада'
  },
  {
    id: 718,
    title: 'ПРСБ',
    image: '/images/blog/Gratitude-PRSBor-ua.jpg',
    body: 'Пожежно-рятувальна служба Бориспільщини'
  },
  {
    id: 719,
    title: 'A 4010',
    image: '/images/blog/Gratitude-A4010-ua.jpg',
    body: 'Військова частина A 4010'
  },
];

