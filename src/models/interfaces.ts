// @/models/interfaces.ts

export interface User {
  id:number | string;
  name:string;
  photo?:string;
  professional?:string;
}

export interface TeamMember extends Omit<User, 'professional'> {
  description?:string;
  category:string;
  company?:{
    name:string;
    logo:string;
  };
}








