const personsName = [
  { "name": "鋼鐵人", "number": 1, "party": "復仇黨", color: "blue-150" },
  { "name": "綠巨人", "number": 2, "party": "怪獸黨", color: "green-150" },
  { "name": "蜘蛛人", "number": 3, "party": "昆蟲黨", color: "orange-150" },
]


interface VotingResult {
  行政區別: string;
  各組候選人得票情形: {
    [key: string]: number;
  };
  總計: number;
  投票率: number;
}

const votingResults: VotingResult[] = [
  { 行政區別: '總 計', 各組候選人得票情形: { 1: 608590, 2: 5522119, 3: 8170231 }, 總計: 608590, 投票率: 74.9029 },
  { 行政區別: '臺北市', 各組候選人得票情形: { 1: 70769, 2: 685830, 3: 875854 }, 總計: 70769, 投票率: 76.3098 },
  { 行政區別: '新北市', 各組候選人得票情形: { 1: 112620, 2: 959631, 3: 1393936 }, 總計: 112620, 投票率: 75.0943 },
  { 行政區別: '桃園市', 各組候選人得票情形: { 1: 63132, 2: 529749, 3: 718260 }, 總計: 63132, 投票率: 74.4183 },
  { 行政區別: '臺中市', 各組候選人得票情形: { 1: 84800, 2: 646366, 3: 967304 }, 總計: 84800, 投票率: 76.3648 },
  { 行政區別: '臺南市', 各組候選人得票情形: { 1: 41075, 2: 339702, 3: 786471 }, 總計: 41075, 投票率: 75.7679 },
  { 行政區別: '高雄市', 各組候選人得票情形: { 1: 55309, 2: 610896, 3: 1097621 }, 總計: 55309, 投票率: 77.4424 },
  { 行政區別: '新竹縣', 各組候選人得票情形: { 1: 18435, 2: 154224, 3: 152380 }, 總計: 18435, 投票率: 75.1078 },
  { 行政區別: '苗栗縣', 各組候選人得票情形: { 1: 15222, 2: 164345, 3: 147034 }, 總計: 15222, 投票率: 73.7959 },
  { 行政區別: '彰化縣', 各組候選人得票情形: { 1: 35060, 2: 291835, 3: 436336 }, 總計: 35060, 投票率: 74.6985 },
  { 行政區別: '南投縣', 各組候選人得票情形: { 1: 13315, 2: 133791, 3: 152046 }, 總計: 13315, 投票率: 73.2087 },
  { 行政區別: '雲林縣', 各組候選人得票情形: { 1: 15331, 2: 138341, 3: 246116 }, 總計: 15331, 投票率: 71.6457 },
  { 行政區別: '嘉義縣', 各組候選人得票情形: { 1: 11138, 2: 98810, 3: 197342 }, 總計: 11138, 投票率: 72.5639 },
  { 行政區別: '屏東縣', 各組候選人得票情形: { 1: 14021, 2: 179353, 3: 317676 }, 總計: 14021, 投票率: 74.9198 },
  { 行政區別: '宜蘭縣', 各組候選人得票情形: { 1: 10739, 2: 90010, 3: 173657 }, 總計: 10739, 投票率: 73.8629 },
  { 行政區別: '花蓮縣', 各組候選人得票情形: { 1: 6869, 2: 111834, 3: 66509 }, 總計: 6869, 投票率: 69.4815 },
  { 行政區別: '臺東縣', 各組候選人得票情形: { 1: 4163, 2: 67413, 3: 44092 }, 總計: 4163, 投票率: 65.0493 },
  { 行政區別: '澎湖縣', 各組候選人得票情形: { 1: 2583, 2: 20911, 3: 27410 }, 總計: 2583, 投票率: 58.2911 },
  { 行政區別: '基隆市', 各組候選人得票情形: { 1: 11878, 2: 99360, 3: 114966 }, 總計: 11878, 投票率: 73.3359 },
  { 行政區別: '新竹市', 各組候選人得票情形: { 1: 14103, 2: 102725, 3: 144274 }, 總計: 14103, 投票率: 76.5973 },
  { 行政區別: '嘉義市', 各組候選人得票情形: { 1: 6204, 2: 56269, 3: 99265 }, 總計: 6204, 投票率: 75.9815 },
  { 行政區別: '金門縣', 各組候選人得票情形: { 1: 1636, 2: 35948, 3: 10456 }, 總計: 1636, 投票率: 40.1446 },
  { 行政區別: '連江縣', 各組候選人得票情形: { 1: 188, 2: 4776, 3: 1226 }, 總計: 188, 投票率: 57.3361 },
];



interface NewVotingResult extends VotingResult {
  投票率統計: { [k: string]: { percentage: string, party: string | undefined } };
  勝出: { number: number, name: string, party: string | undefined, color: string };
}

export const calcVotingResults: NewVotingResult[] = votingResults.map(result => {
  const { 各組候選人得票情形 } = result;

  const totalVotes = Object.values(各組候選人得票情形).reduce((acc, curr) => acc + curr, 0);
  const 投票率統計 = Object.fromEntries(
    Object.entries(各組候選人得票情形).map(([key, votes]) => [
      key,
      {
        percentage: ((votes / totalVotes) * 100).toFixed(2) + '%',
        party: personsName.find(person => person.number === Number(key))?.party
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
      name: personsName.find(person => person.number === Number(勝出Key))?.name ?? '',
      party: personsName.find(person => person.number === Number(勝出Key))?.party ?? '',
      color: personsName.find(person => person.number === Number(勝出Key))?.color ?? ''
    },

  };
});


interface KeyVotingResult {
  [k: string]: { value: NewVotingResult } | undefined;
}
export const calcKeyVotingResults: Map<string, { value: NewVotingResult }> = new Map(
  votingResults.map(result => {
    const { 行政區別, 各組候選人得票情形 } = result;

    const totalVotes = Object.values(各組候選人得票情形).reduce((acc, curr) => acc + curr, 0);
    const 投票率統計 = Object.fromEntries(
      Object.entries(各組候選人得票情形).map(([key, votes]) => [
        key,
        {
          percentage: ((votes / totalVotes) * 100).toFixed(2) + '%',
          party: personsName.find(person => person.number === Number(key))?.party
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
        name: personsName.find(person => person.number === Number(勝出Key))?.name ?? '',
        party: personsName.find(person => person.number === Number(勝出Key))?.party ?? '',
        color: personsName.find(person => person.number === Number(勝出Key))?.color ?? ''
      },
    };

    return [行政區別, { value: newVotingResult }];
  })
);
