// @/services/utils.ts
import { FundRaisingVariation } from '@/models/types';

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

