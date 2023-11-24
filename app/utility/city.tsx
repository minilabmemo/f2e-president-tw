import { VotingResult, candidateInfo, candidate_2020, votingResults_2020 } from "./data";



//各縣市投票總覽
interface VoteResultByCity {
  area: string;// VotingResult.行政區別
  total: number;//  VotingResult.總計：number;
  voteRate: number;// VotingResult.投票率：number;
  voteRateByCandidate: { [k: string]: { percentage: string, party: string | undefined, color: string } };
  winner: { number: number, name: string, party: string | undefined, color: string, imageNode: React.ReactNode; };
}
export const calcVoteResultByCity = (year: string): VoteResultByCity[] => {
  var voteResults: VotingResult[] = [];
  var candidateInfos: candidateInfo[] = [];
  if (year === "2020") {
    voteResults = votingResults_2020;
    candidateInfos = candidate_2020;
  }

  const calculatedResults = voteResults.map(result => {
    const { 行政區別, 總計, 投票率, 各組候選人得票情形 } = result;


    const totalVotes = Object.values(各組候選人得票情形).reduce((acc, curr) => acc + curr, 0);
    const voteRateByCandidate = Object.fromEntries(
      Object.entries(各組候選人得票情形).map(([key, votes]) => [
        key,
        {
          percentage: ((votes / totalVotes) * 100).toFixed(2) + '%',
          party: candidateInfos.find(person => person.number === Number(key))?.party,
          color: candidateInfos.find(person => person.number === Number(key))?.color ?? '',
        }
      ])
    );

    const winnerKey = Object.keys(各組候選人得票情形).reduce((a, b) =>
      各組候選人得票情形[a as string] > 各組候選人得票情形[b as string] ? a : b
    );

    return {
      area: 行政區別,
      total: 總計,
      voteRate: 投票率,
      voteRateByCandidate,
      winner: {
        number: Number(winnerKey),
        name: candidateInfos.find(person => person.number === Number(winnerKey))?.name ?? '',
        party: candidateInfos.find(person => person.number === Number(winnerKey))?.party ?? '',
        color: candidateInfos.find(person => person.number === Number(winnerKey))?.color ?? '',
        imageNode: candidateInfos.find(person => person.number === Number(winnerKey))?.imageNode ?? ''
      },
    };
  });

  return calculatedResults;
};

interface winnerColor {
  winner: { color: string, };
}

//地圖勝出區域與顏色 key:行政區別 value:勝者顏色
export const calcKeyVoteWinCity = (year: string): Map<string, { value: winnerColor }> => {
  var voteResults: VotingResult[] = [];
  var candidateInfos: candidateInfo[] = [];
  if (year === "2020") {
    voteResults = votingResults_2020;
    candidateInfos = candidate_2020;
  }
  const keyVotingResultsArray: [string, { value: winnerColor }][] = voteResults.map(result => {
    const { 行政區別, 各組候選人得票情形 } = result;
    const winnerKey = Object.keys(各組候選人得票情形).reduce((a, b) =>
      各組候選人得票情形[a as string] > 各組候選人得票情形[b as string] ? a : b
    );
    const newVotingResult: winnerColor = {

      winner: {
        color: candidateInfos.find(person => person.number === Number(winnerKey))?.color ?? '',
      },
    };

    return [行政區別, { value: newVotingResult }] as [string, { value: winnerColor }];
  });

  return new Map(keyVotingResultsArray);
};

