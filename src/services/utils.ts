// @/services/utils.ts
import { FundRaisingVariation } from '@/models/types';

export function getFundraisingImagePath(variation:FundRaisingVariation):string {
  switch (variation) {
    case 'for car':
      return '/images/donate/car_fundraising.jpg';
    case 'for drone':
      return '/images/donate/dron_fundraising.jpg';
    case 'for medicine':
      return '/images/donate/medicine_fundraising.jpg';
    case 'for equipment':
      return '/images/donate/tools_fundraising.jpg';
    case 'for another':
      return '/images/donate/other_fundraising.jpg';
  }
};

