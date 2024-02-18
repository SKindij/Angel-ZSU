// @/services/utils.ts
import { FundRaisingVariation } from '@/models/types';

function getFundraisingImagePath(variation:FundRaisingVariation):string {
  switch (variation) {
    case 'for car':
      return '/images/donate/car_fundraising.jpg';
    case 'for dron':
      return '/images/donate/dron_fundraising.jpg';
    case 'for medicine':
      return '/images/donate/medicine_fundraising.jpg';
    case 'for equipment':
      return '/images/donate/tools_fundraising.jpg';
    default:
      return '/images/donate/other_fundraising.jpg';
  }
}

