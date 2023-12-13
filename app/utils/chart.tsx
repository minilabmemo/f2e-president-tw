import { Years, candidateInfo, candidate_2016, candidate_2020, candidate_fake, getDataByYear, votingResults_2016, votingResults_2020, } from "./data";
// const data = [
//   { year: '1996', 菠菜黨：4000, 鋼鐵黨：2400, 復仇黨：2400, },
//   { year: '2000', 菠菜黨：3000, 鋼鐵黨：1398, 復仇黨：2210, },
//   { year: '2004', 菠菜黨：2000, 鋼鐵黨：9800, 復仇黨：2290, },
//   { year: '2008', 菠菜黨：2780, 鋼鐵黨：3908, 復仇黨：2000, },
//   { year: '2012', 菠菜黨：1890, 鋼鐵黨：4800, 復仇黨：2181, },
//   { year: '2016', 菠菜黨：2390, 鋼鐵黨：3800, 復仇黨：2500, },
//   { year: '2020', 菠菜黨：3490, 鋼鐵黨：4300, 復仇黨：2100, },];

interface DataChart {
  year: string;
  [key: string]: number | string;
}


//TODO all year number
export const calcDataChart = (): DataChart[] => {

  const data: DataChart[] = Years.map((yearObj) => {
    const yearData: DataChart = { year: yearObj.year.toString() };
    const { voteResults, candidateInfos } = getDataByYear(yearData.year);
    if (yearData.year !== "1996") {
      candidateInfos.forEach((candidate) => {
        const partyName = candidate.party as string;
        var totalVote = voteResults.find((item, index) => {
          return item.行政區別 === "總 計";
        });

        const voteCount = totalVote?.各組候選人得票情形[candidate.number] || '0';
        yearData[partyName] = voteCount;
      });

      return yearData;

    } else {
      candidateInfos.forEach((candidate) => {
        const partyName = candidate.party as string;

        const voteCount = Math.floor(Math.random() * 5000000) + 2000;
        yearData[partyName] = voteCount;
      });

      return yearData;
    }
  });
  data.sort((a, b) => parseInt(a.year) - parseInt(b.year));

  return data;
};


export const calcDataChartRate = (): DataChart[] => {
  const data = calcDataChart();
  data.forEach(item => {

    const total = Object.values(item)
      .filter((value, index) => typeof value === 'number' && Object.keys(item)[index] !== 'year')
      .reduce((acc, val) => Number(acc) + Number(val), 0);


    for (const key in item) {
      if (typeof item[key] === 'number' && key !== 'year') {
        item[key] = (((item[key] as number) / Number(total)) * 100).toFixed(0)  //百分比數字 必須是數字
          ;
      }
    }
  });

  return data;
}


export const calcAllPartyInfos = (): candidateInfo[] => {
  let data: candidateInfo[] = [];
  let uniqueCandidates = new Set<string>();

  // Helper function to add unique candidates to the result array
  const addUniqueCandidates = (candidates: candidateInfo[]) => {
    candidates.forEach(candidate => {
      if (!uniqueCandidates.has(candidate.party)) {
        data.push(candidate);
        uniqueCandidates.add(candidate.party);
      }
    });
  };

  // Add candidates from different years while avoiding duplicates
  addUniqueCandidates(getDataByYear("2020").candidateInfos);
  addUniqueCandidates(getDataByYear("2016").candidateInfos);
  addUniqueCandidates(getDataByYear("2012").candidateInfos);

  return data;
};
