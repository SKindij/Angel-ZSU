// @/services/utils.ts
import { FundRaisingVariation } from '@/models/types';

// returns date as string depending on localization
export const formatDateToLocal = (
  date:Date,
  locale:string = 'uk-UA',
) => {
  // options to format date into string representation
  const options:Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };
    // create an object Intl.DateTimeFormat
  const formatter = new Intl.DateTimeFormat(locale, options);
  // use the created formatter
  return formatter.format(date);
};

// for automatic image selection depending on collection type
export function getFundraisingImagePath(variation:FundRaisingVariation):string {
  switch (variation) {
    case 'for car':
      return '/images/donate/car_fundraising.png';
    case 'for drone':
      return '/images/donate/dron_fundraising.png';
    case 'for medicine':
      return '/images/donate/medicine_fundraising.png';
    case 'for equipment':
      return '/images/donate/tools_fundraising.png';
    case 'for another':
      return '/images/donate/other_fundraising.png';
  }
};

