
import Image from 'next/image'
export type TotalItem = {
  party: string;
  name: string;
  number: string;
  imageNode: React.ReactNode;
  percentage?: string;
  color?: string;
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
    imageNode: <Image src="/images/role1.png" width={48} height={48} alt="role" />,
    color: "blue-150"
  },
  {
    party: '弓箭黨',
    name: '林克',
    number: '3,522,119',
    imageNode: <Image src="/images/role2.png" width={48} height={48} alt="role" />,
    color: "orange-150"
  },
  {
    party: '木棍黨',
    name: '綠巨人',
    number: '5,522,119',
    imageNode: <Image src="/images/role3.png" width={48} height={48} alt="role" />,
    color: "green-150"
  }


];
export const result_2016: TotalItem[] = [
  {
    party: '蝙蝠黨',
    name: '德 16',
    number: '8,170,231',
    imageNode: <Image src="/images/role.png" width={48} height={48} alt="role" />


  },
  {
    party: '弓箭黨',
    name: '林克',
    number: '3,522,119',
    imageNode: <Image src="/images/role.png" width={48} height={48} alt="role" />
  },
  {
    party: '木棍黨',
    name: '綠巨人',
    number: '5,522,119',
    imageNode: <Image src="/images/role.png" width={48} height={48} alt="role" />
  },
  {
    party: '木棍黨',
    name: '綠巨人',
    number: '5,522,119',
    imageNode: <Image src="/images/role.png" width={48} height={48} alt="role" />
  },

];
