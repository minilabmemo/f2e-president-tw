import { VotingResult, candidateInfo, candidate_2020, votingResults_2020 } from "./data";

//總統得票數
interface Overall {
  name: string;
  number: number;
  party: string;
  color: string;
  imageNode: React.ReactNode;
  total: number;
  percentage?: string;
}
export function allVotes(year: string) {
  var votingResults: VotingResult[] = [];
  var candidateInfos: candidateInfo[] = [];
  if (year === "2020") {
    votingResults = votingResults_2020
    candidateInfos = candidate_2020
  }

  var result: Overall[] = [];
  var totalVote = votingResults.find((item, index) => {
    return item.行政區別 === "總 計";
  });

  for (const number in totalVote?.各組候選人得票情形) {
    const voteNumber = totalVote.各組候選人得票情形[number];
    const candidate = candidateInfos.find(candidate => candidate.number === parseInt(number, 10));
    if (candidate) {
      const transformedResult: Overall = {
        name: candidate.name,
        number: candidate.number,
        party: candidate.party,
        color: candidate.color,
        imageNode: candidate.imageNode,
        total: voteNumber
      };
      result.push(transformedResult)

    }

  }


  return result

}

