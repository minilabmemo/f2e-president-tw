import { Years, candidateInfo, candidate_2020, getDataByYear, } from "./data";
// const data = [
//   { year: '1996', 菠菜黨：4000, 鋼鐵黨：2400, 復仇黨：2400, },
//   { year: '2000', 菠菜黨：3000, 鋼鐵黨：1398, 復仇黨：2210, },
//   { year: '2004', 菠菜黨：2000, 鋼鐵黨：9800, 復仇黨：2290, },
//   { year: '2008', 菠菜黨：2780, 鋼鐵黨：3908, 復仇黨：2000, },
//   { year: '2012', 菠菜黨：1890, 鋼鐵黨：4800, 復仇黨：2181, },
//   { year: '2016', 菠菜黨：2390, 鋼鐵黨：3800, 復仇黨：2500, },
//   { year: '2020', 菠菜黨：3490, 鋼鐵黨：4300, 復仇黨：2100, },];



interface DatChart {
  year: string;
  [key: string]: number | string;
}


//TODO year number
export const calcDatChart = (year: string): DatChart[] => {
  const { voteResults, candidateInfos } = getDataByYear(year);

  const data: DatChart[] = Years.map((yearObj) => {
    const yearData: DatChart = { year: yearObj.year.toString() };

    candidate_2020.forEach((candidate) => {
      const partyName = candidate.party as string; // Explicitly cast partyName to string
      const voteCount = Math.floor(Math.random() * 5000) + 2000;
      yearData[partyName] = voteCount;
    });

    return yearData;
  });
  data.sort((a, b) => parseInt(a.year) - parseInt(b.year));

  return data;
};

