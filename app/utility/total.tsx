

import role from "../../assets/images/role.png"

import Image from 'next/image'
export type TotalItem = {
  party: string;
  name: string;
  number: string;
  imageNode: React.ReactNode;
};
export const getResultByYear = (year: number): TotalItem[] | null => {
  switch (year) {
    case 2020:
      return result_2020;
    case 2016:
      return result_2016;
    default:
      return null;
  }
};
export const result_2020: TotalItem[] = [
  {
    party: '蝙蝠黨',
    name: '德古拉',
    number: '8,170,231',
    imageNode: <Image src={role} alt="role" />
  },
  {
    party: '弓箭黨',
    name: '林克',
    number: '3,522,119',
    imageNode: <Image src={role} alt="role" />
  },
  {
    party: '木棍黨',
    name: '綠巨人',
    number: '5,522,119',
    imageNode: <Image src={role} alt="role" />
  },
  {
    party: '木棍黨',
    name: '綠巨人',
    number: '5,522,119',
    imageNode: <Image src={role} alt="role" />
  },

];
export const result_2016: TotalItem[] = [
  {
    party: '蝙蝠黨',
    name: '德 16',
    number: '8,170,231',
    imageNode: <Image src={role} alt="role" />


  },
  {
    party: '弓箭黨',
    name: '林克',
    number: '3,522,119',
    imageNode: <Image src={role} alt="role" />
  },
  {
    party: '木棍黨',
    name: '綠巨人',
    number: '5,522,119',
    imageNode: <Image src={role} alt="role" />
  },
  {
    party: '木棍黨',
    name: '綠巨人',
    number: '5,522,119',
    imageNode: <Image src={role} alt="role" />
  },

];
