import { candidateInfo, candidate_2020, votingResults_2020 } from "./data";


interface VotingResult {
  行政區別: string;
  各組候選人得票情形: {
    [key: string]: number;
  };
  總計: number;
  投票率: number;
}



interface NewVotingResult extends VotingResult {

  投票率統計: { [k: string]: { percentage: string, party: string | undefined } };
  勝出: { number: number, name: string, party: string | undefined, color: string };
}
export const calcVotingResults = (year: string): NewVotingResult[] => {
  var voteResults: VotingResult[] = [];
  var candidateInfos: candidateInfo[] = [];
  if (year === "2020") {
    voteResults = votingResults_2020;
    candidateInfos = candidate_2020;
  }

  const calculatedResults = voteResults.map(result => {
    const { 各組候選人得票情形 } = result;

    const totalVotes = Object.values(各組候選人得票情形).reduce((acc, curr) => acc + curr, 0);
    const 投票率統計 = Object.fromEntries(
      Object.entries(各組候選人得票情形).map(([key, votes]) => [
        key,
        {
          percentage: ((votes / totalVotes) * 100).toFixed(2) + '%',
          party: candidateInfos.find(person => person.number === Number(key))?.party
        }
      ])
    );

    const 勝出Key = Object.keys(各組候選人得票情形).reduce((a, b) =>
      各組候選人得票情形[a as string] > 各組候選人得票情形[b as string] ? a : b
    );

    return {
      ...result,
      投票率統計,
      勝出: {
        number: Number(勝出Key),
        name: candidateInfos.find(person => person.number === Number(勝出Key))?.name ?? '',
        party: candidateInfos.find(person => person.number === Number(勝出Key))?.party ?? '',
        color: candidateInfos.find(person => person.number === Number(勝出Key))?.color ?? ''
      },
    };
  });

  return calculatedResults;
};

//FIXME tidy
export const calcKeyVoteWinCity = (year: string): Map<string, { value: NewVotingResult }> => {
  var voteResults: VotingResult[] = [];
  var candidateInfos: candidateInfo[] = [];
  if (year === "2020") {
    voteResults = votingResults_2020;
    candidateInfos = candidate_2020;
  }

  const keyVotingResultsArray: [string, { value: NewVotingResult }][] = voteResults.map(result => {
    const { 行政區別, 各組候選人得票情形 } = result;

    const totalVotes = Object.values(各組候選人得票情形).reduce((acc, curr) => acc + curr, 0);
    const 投票率統計 = Object.fromEntries(
      Object.entries(各組候選人得票情形).map(([key, votes]) => [
        key,
        {
          percentage: ((votes / totalVotes) * 100).toFixed(2) + '%',
          party: candidateInfos.find(person => person.number === Number(key))?.party
        }
      ])
    );

    const 勝出Key = Object.keys(各組候選人得票情形).reduce((a, b) =>
      各組候選人得票情形[a as string] > 各組候選人得票情形[b as string] ? a : b
    );

    const newVotingResult: NewVotingResult = {
      ...result,
      投票率統計,
      勝出: {
        number: Number(勝出Key),
        name: candidateInfos.find(person => person.number === Number(勝出Key))?.name ?? '',
        party: candidateInfos.find(person => person.number === Number(勝出Key))?.party ?? '',
        color: candidateInfos.find(person => person.number === Number(勝出Key))?.color ?? ''
      },
    };

    return [行政區別, { value: newVotingResult }] as [string, { value: NewVotingResult }];
  });

  return new Map(keyVotingResultsArray);
};

