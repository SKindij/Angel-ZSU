// @/models/types.ts
export type FundRaisingVariation = 'for car' | 'for drone' | 'for medicine' | 'for equipment' | 'for another';

export type PartnerImage = {
  src:string;
  alt:string;
};

export type TUser = {
  id:string;
  name:string;
  role:string;
  email:string;
  password:string;
  image?:string;
  alt?:string;
};