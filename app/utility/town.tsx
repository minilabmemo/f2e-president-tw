

interface GeoJSONFeature {
  properties: GeoJSONProperties;
}
interface GeoJSONProperties {
  TOWNID: string;
  COUNTYCODE: string;
  COUNTYNAME: string;
  COUNTYENG: string;
  TOWNENG: string;
}

const townData: GeoJSONFeature[] = [
  {
    "properties": {
      "TOWNID": "V02",
      "TOWNCODE": "10014020",
      "COUNTYNAME": "臺東縣",
      "TOWNNAME": "成功鎮",
      "TOWNENG": "Chenggong Township",
      "COUNTYID": "V",
      "COUNTYCODE": "10014"
    }
  },
  {
    "properties": {
      "TOWNID": "T21",
      "TOWNCODE": "10013210",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "佳冬鄉",
      "TOWNENG": "Jiadong Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "P13",
      "TOWNCODE": "10009130",
      "COUNTYNAME": "雲林縣",
      "TOWNNAME": "麥寮鄉",
      "TOWNENG": "Mailiao Township",
      "COUNTYID": "P",
      "COUNTYCODE": "10009"
    }
  },
  {
    "properties": {
      "TOWNID": "V11",
      "TOWNCODE": "10014110",
      "COUNTYNAME": "臺東縣",
      "TOWNNAME": "綠島鄉",
      "TOWNENG": "Lüdao Township",
      "COUNTYID": "V",
      "COUNTYCODE": "10014"
    }
  },
  {
    "properties": {
      "TOWNID": "V16",
      "TOWNCODE": "10014160",
      "COUNTYNAME": "臺東縣",
      "TOWNNAME": "蘭嶼鄉",
      "TOWNENG": "Lanyu Township",
      "COUNTYID": "V",
      "COUNTYCODE": "10014"
    }
  },
  {
    "properties": {
      "TOWNID": "N07",
      "TOWNCODE": "10007120",
      "COUNTYNAME": "彰化縣",
      "TOWNNAME": "田中鎮",
      "TOWNENG": "Tianzhong Township",
      "COUNTYID": "N",
      "COUNTYCODE": "10007"
    }
  },
  {
    "properties": {
      "TOWNID": "N19",
      "TOWNCODE": "10007170",
      "COUNTYNAME": "彰化縣",
      "TOWNNAME": "社頭鄉",
      "TOWNENG": "Shetou Township",
      "COUNTYID": "N",
      "COUNTYCODE": "10007"
    }
  },
  {
    "properties": {
      "TOWNID": "T14",
      "TOWNCODE": "10013140",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "竹田鄉",
      "TOWNENG": "Zhutian Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T05",
      "TOWNCODE": "10013050",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "萬丹鄉",
      "TOWNENG": "Wandan Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "K13",
      "TOWNCODE": "10005160",
      "COUNTYNAME": "苗栗縣",
      "TOWNNAME": "三灣鄉",
      "TOWNENG": "Sanwan Township",
      "COUNTYID": "K",
      "COUNTYCODE": "10005"
    }
  },
  {
    "properties": {
      "TOWNID": "J13",
      "TOWNCODE": "10004110",
      "COUNTYNAME": "新竹縣",
      "TOWNNAME": "峨眉鄉",
      "TOWNENG": "Emei Township",
      "COUNTYID": "J",
      "COUNTYCODE": "10004"
    }
  },
  {
    "properties": {
      "TOWNID": "K14",
      "TOWNCODE": "10005110",
      "COUNTYNAME": "苗栗縣",
      "TOWNNAME": "南庄鄉",
      "TOWNENG": "Nanzhuang Township",
      "COUNTYID": "K",
      "COUNTYCODE": "10005"
    }
  },
  {
    "properties": {
      "TOWNID": "Q12",
      "TOWNCODE": "10010010",
      "COUNTYNAME": "嘉義縣",
      "TOWNNAME": "太保市",
      "TOWNENG": "Taibao City",
      "COUNTYID": "Q",
      "COUNTYCODE": "10010"
    }
  },
  {
    "properties": {
      "TOWNID": "Q14",
      "TOWNCODE": "10010130",
      "COUNTYNAME": "嘉義縣",
      "TOWNNAME": "中埔鄉",
      "TOWNENG": "Zhongpu Township",
      "COUNTYID": "Q",
      "COUNTYCODE": "10010"
    }
  },
  {
    "properties": {
      "TOWNID": "Q17",
      "TOWNCODE": "10010160",
      "COUNTYNAME": "嘉義縣",
      "TOWNNAME": "番路鄉",
      "TOWNENG": "Fanlu Township",
      "COUNTYID": "Q",
      "COUNTYCODE": "10010"
    }
  },
  {
    "properties": {
      "TOWNID": "Q13",
      "TOWNCODE": "10010120",
      "COUNTYNAME": "嘉義縣",
      "TOWNNAME": "水上鄉",
      "TOWNENG": "Shuishang Township",
      "COUNTYID": "Q",
      "COUNTYCODE": "10010"
    }
  },
  {
    "properties": {
      "TOWNID": "N05",
      "TOWNCODE": "10007100",
      "COUNTYNAME": "彰化縣",
      "TOWNNAME": "員林市",
      "TOWNENG": "Yuanlin City",
      "COUNTYID": "N",
      "COUNTYCODE": "10007"
    }
  },
  {
    "properties": {
      "TOWNID": "E11",
      "TOWNCODE": "64000110",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "小港區",
      "TOWNENG": "Xiaogang District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "G09",
      "TOWNCODE": "10002030",
      "COUNTYNAME": "宜蘭縣",
      "TOWNNAME": "蘇澳鎮",
      "TOWNENG": "Su'ao Township",
      "COUNTYID": "G",
      "COUNTYCODE": "10002"
    }
  },
  {
    "properties": {
      "TOWNID": "G07",
      "TOWNCODE": "10002090",
      "COUNTYNAME": "宜蘭縣",
      "TOWNNAME": "五結鄉",
      "TOWNENG": "Wujie Township",
      "COUNTYID": "G",
      "COUNTYCODE": "10002"
    }
  },
  {
    "properties": {
      "TOWNID": "G01",
      "TOWNCODE": "10002010",
      "COUNTYNAME": "宜蘭縣",
      "TOWNNAME": "宜蘭市",
      "TOWNENG": "Yilan City",
      "COUNTYID": "G",
      "COUNTYCODE": "10002"
    }
  },
  {
    "properties": {
      "TOWNID": "G04",
      "TOWNCODE": "10002060",
      "COUNTYNAME": "宜蘭縣",
      "TOWNNAME": "壯圍鄉",
      "TOWNENG": "Zhuangwei Township",
      "COUNTYID": "G",
      "COUNTYCODE": "10002"
    }
  },
  {
    "properties": {
      "TOWNID": "Z01",
      "TOWNCODE": "09007010",
      "COUNTYNAME": "連江縣",
      "TOWNNAME": "南竿鄉",
      "TOWNENG": "Nangan Township",
      "COUNTYID": "Z",
      "COUNTYCODE": "09007"
    }
  },
  {
    "properties": {
      "TOWNID": "Z03",
      "TOWNCODE": "09007030",
      "COUNTYNAME": "連江縣",
      "TOWNNAME": "莒光鄉",
      "TOWNENG": "Juguang Township",
      "COUNTYID": "Z",
      "COUNTYCODE": "09007"
    }
  },
  {
    "properties": {
      "TOWNID": "W04",
      "TOWNCODE": "09020040",
      "COUNTYNAME": "金門縣",
      "TOWNNAME": "金寧鄉",
      "TOWNENG": "Jinning Township",
      "COUNTYID": "W",
      "COUNTYCODE": "09020"
    }
  },
  {
    "properties": {
      "TOWNID": "W06",
      "TOWNCODE": "09020060",
      "COUNTYNAME": "金門縣",
      "TOWNNAME": "烏坵鄉",
      "TOWNENG": "Wuqiu Township",
      "COUNTYID": "W",
      "COUNTYCODE": "09020"
    }
  },
  {
    "properties": {
      "TOWNID": "G06",
      "TOWNCODE": "10002020",
      "COUNTYNAME": "宜蘭縣",
      "TOWNNAME": "羅東鎮",
      "TOWNENG": "Luodong Township",
      "COUNTYID": "G",
      "COUNTYCODE": "10002"
    }
  },
  {
    "properties": {
      "TOWNID": "G05",
      "TOWNCODE": "10002070",
      "COUNTYNAME": "宜蘭縣",
      "TOWNNAME": "員山鄉",
      "TOWNENG": "Yuanshan Township",
      "COUNTYID": "G",
      "COUNTYCODE": "10002"
    }
  },
  {
    "properties": {
      "TOWNID": "G08",
      "TOWNCODE": "10002080",
      "COUNTYNAME": "宜蘭縣",
      "TOWNNAME": "冬山鄉",
      "TOWNENG": "Dongshan Township",
      "COUNTYID": "G",
      "COUNTYCODE": "10002"
    }
  },
  {
    "properties": {
      "TOWNID": "G10",
      "TOWNCODE": "10002100",
      "COUNTYNAME": "宜蘭縣",
      "TOWNNAME": "三星鄉",
      "TOWNENG": "Sanxing Township",
      "COUNTYID": "G",
      "COUNTYCODE": "10002"
    }
  },
  {
    "properties": {
      "TOWNID": "G11",
      "TOWNCODE": "10002110",
      "COUNTYNAME": "宜蘭縣",
      "TOWNNAME": "大同鄉",
      "TOWNENG": "Datong Township",
      "COUNTYID": "G",
      "COUNTYCODE": "10002"
    }
  },
  {
    "properties": {
      "TOWNID": "J02",
      "TOWNCODE": "10004020",
      "COUNTYNAME": "新竹縣",
      "TOWNNAME": "竹東鎮",
      "TOWNENG": "Zhudong Township",
      "COUNTYID": "J",
      "COUNTYCODE": "10004"
    }
  },
  {
    "properties": {
      "TOWNID": "J04",
      "TOWNCODE": "10004030",
      "COUNTYNAME": "新竹縣",
      "TOWNNAME": "新埔鎮",
      "TOWNENG": "Xinpu Township",
      "COUNTYID": "J",
      "COUNTYCODE": "10004"
    }
  },
  {
    "properties": {
      "TOWNID": "J03",
      "TOWNCODE": "10004040",
      "COUNTYNAME": "新竹縣",
      "TOWNNAME": "關西鎮",
      "TOWNENG": "Guanxi Township",
      "COUNTYID": "J",
      "COUNTYCODE": "10004"
    }
  },
  {
    "properties": {
      "TOWNID": "J06",
      "TOWNCODE": "10004050",
      "COUNTYNAME": "新竹縣",
      "TOWNNAME": "湖口鄉",
      "TOWNENG": "Hukou Township",
      "COUNTYID": "J",
      "COUNTYCODE": "10004"
    }
  },
  {
    "properties": {
      "TOWNID": "J10",
      "TOWNCODE": "10004070",
      "COUNTYNAME": "新竹縣",
      "TOWNNAME": "芎林鄉",
      "TOWNENG": "Qionglin Township",
      "COUNTYID": "J",
      "COUNTYCODE": "10004"
    }
  },
  {
    "properties": {
      "TOWNID": "J08",
      "TOWNCODE": "10004080",
      "COUNTYNAME": "新竹縣",
      "TOWNNAME": "橫山鄉",
      "TOWNENG": "Hengshan Township",
      "COUNTYID": "J",
      "COUNTYCODE": "10004"
    }
  },
  {
    "properties": {
      "TOWNID": "J12",
      "TOWNCODE": "10004090",
      "COUNTYNAME": "新竹縣",
      "TOWNNAME": "北埔鄉",
      "TOWNENG": "Beipu Township",
      "COUNTYID": "J",
      "COUNTYCODE": "10004"
    }
  },
  {
    "properties": {
      "TOWNID": "J14",
      "TOWNCODE": "10004120",
      "COUNTYNAME": "新竹縣",
      "TOWNNAME": "尖石鄉",
      "TOWNENG": "Jianshi Township",
      "COUNTYID": "J",
      "COUNTYCODE": "10004"
    }
  },
  {
    "properties": {
      "TOWNID": "J15",
      "TOWNCODE": "10004130",
      "COUNTYNAME": "新竹縣",
      "TOWNNAME": "五峰鄉",
      "TOWNENG": "Wufeng Township",
      "COUNTYID": "J",
      "COUNTYCODE": "10004"
    }
  },
  {
    "properties": {
      "TOWNID": "B25",
      "TOWNCODE": "66000250",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "龍井區",
      "TOWNENG": "Longjing District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "B18",
      "TOWNCODE": "66000180",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "大雅區",
      "TOWNENG": "Daya District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "B13",
      "TOWNCODE": "66000130",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "沙鹿區",
      "TOWNENG": "Shalu District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "B14",
      "TOWNCODE": "66000140",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "梧棲區",
      "TOWNENG": "Wuqi District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "X02",
      "TOWNCODE": "10016020",
      "COUNTYNAME": "澎湖縣",
      "TOWNNAME": "湖西鄉",
      "TOWNENG": "Huxi Township",
      "COUNTYID": "X",
      "COUNTYCODE": "10016"
    }
  },
  {
    "properties": {
      "TOWNID": "V15",
      "TOWNCODE": "10014140",
      "COUNTYNAME": "臺東縣",
      "TOWNNAME": "金峰鄉",
      "TOWNENG": "Jinfeng Township",
      "COUNTYID": "V",
      "COUNTYCODE": "10014"
    }
  },
  {
    "properties": {
      "TOWNID": "V06",
      "TOWNCODE": "10014090",
      "COUNTYNAME": "臺東縣",
      "TOWNNAME": "太麻里鄉",
      "TOWNENG": "Taimali Township",
      "COUNTYID": "V",
      "COUNTYCODE": "10014"
    }
  },
  {
    "properties": {
      "TOWNID": "K01",
      "TOWNCODE": "10005010",
      "COUNTYNAME": "苗栗縣",
      "TOWNNAME": "苗栗市",
      "TOWNENG": "Miaoli City",
      "COUNTYID": "K",
      "COUNTYCODE": "10005"
    }
  },
  {
    "properties": {
      "TOWNID": "K16",
      "TOWNCODE": "10005070",
      "COUNTYNAME": "苗栗縣",
      "TOWNNAME": "卓蘭鎮",
      "TOWNENG": "Zhuolan Township",
      "COUNTYID": "K",
      "COUNTYCODE": "10005"
    }
  },
  {
    "properties": {
      "TOWNID": "K15",
      "TOWNCODE": "10005080",
      "COUNTYNAME": "苗栗縣",
      "TOWNNAME": "大湖鄉",
      "TOWNENG": "Dahu Township",
      "COUNTYID": "K",
      "COUNTYCODE": "10005"
    }
  },
  {
    "properties": {
      "TOWNID": "K04",
      "TOWNCODE": "10005090",
      "COUNTYNAME": "苗栗縣",
      "TOWNNAME": "公館鄉",
      "TOWNENG": "Gongguan Township",
      "COUNTYID": "K",
      "COUNTYCODE": "10005"
    }
  },
  {
    "properties": {
      "TOWNID": "K05",
      "TOWNCODE": "10005100",
      "COUNTYNAME": "苗栗縣",
      "TOWNNAME": "銅鑼鄉",
      "TOWNENG": "Tongluo Township",
      "COUNTYID": "K",
      "COUNTYCODE": "10005"
    }
  },
  {
    "properties": {
      "TOWNID": "K08",
      "TOWNCODE": "10005120",
      "COUNTYNAME": "苗栗縣",
      "TOWNNAME": "頭屋鄉",
      "TOWNENG": "Touwu Township",
      "COUNTYID": "K",
      "COUNTYCODE": "10005"
    }
  },
  {
    "properties": {
      "TOWNID": "K06",
      "TOWNCODE": "10005130",
      "COUNTYNAME": "苗栗縣",
      "TOWNNAME": "三義鄉",
      "TOWNENG": "Sanyi Township",
      "COUNTYID": "K",
      "COUNTYCODE": "10005"
    }
  },
  {
    "properties": {
      "TOWNID": "K07",
      "TOWNCODE": "10005140",
      "COUNTYNAME": "苗栗縣",
      "TOWNNAME": "西湖鄉",
      "TOWNENG": "Xihu Township",
      "COUNTYID": "K",
      "COUNTYCODE": "10005"
    }
  },
  {
    "properties": {
      "TOWNID": "K11",
      "TOWNCODE": "10005150",
      "COUNTYNAME": "苗栗縣",
      "TOWNNAME": "造橋鄉",
      "TOWNENG": "Zaoqiao Township",
      "COUNTYID": "K",
      "COUNTYCODE": "10005"
    }
  },
  {
    "properties": {
      "TOWNID": "K17",
      "TOWNCODE": "10005170",
      "COUNTYNAME": "苗栗縣",
      "TOWNNAME": "獅潭鄉",
      "TOWNENG": "Shitan Township",
      "COUNTYID": "K",
      "COUNTYCODE": "10005"
    }
  },
  {
    "properties": {
      "TOWNID": "K18",
      "TOWNCODE": "10005180",
      "COUNTYNAME": "苗栗縣",
      "TOWNNAME": "泰安鄉",
      "TOWNENG": "Tai'an Township",
      "COUNTYID": "K",
      "COUNTYCODE": "10005"
    }
  },
  {
    "properties": {
      "TOWNID": "N01",
      "TOWNCODE": "10007010",
      "COUNTYNAME": "彰化縣",
      "TOWNNAME": "彰化市",
      "TOWNENG": "Changhua City",
      "COUNTYID": "N",
      "COUNTYCODE": "10007"
    }
  },
  {
    "properties": {
      "TOWNID": "N03",
      "TOWNCODE": "10007030",
      "COUNTYNAME": "彰化縣",
      "TOWNNAME": "和美鎮",
      "TOWNENG": "Hemei Township",
      "COUNTYID": "N",
      "COUNTYCODE": "10007"
    }
  },
  {
    "properties": {
      "TOWNID": "N09",
      "TOWNCODE": "10007040",
      "COUNTYNAME": "彰化縣",
      "TOWNNAME": "線西鄉",
      "TOWNENG": "Xianxi Township",
      "COUNTYID": "N",
      "COUNTYCODE": "10007"
    }
  },
  {
    "properties": {
      "TOWNID": "N10",
      "TOWNCODE": "10007050",
      "COUNTYNAME": "彰化縣",
      "TOWNNAME": "伸港鄉",
      "TOWNENG": "Shengang Township",
      "COUNTYID": "N",
      "COUNTYCODE": "10007"
    }
  },
  {
    "properties": {
      "TOWNID": "N12",
      "TOWNCODE": "10007070",
      "COUNTYNAME": "彰化縣",
      "TOWNNAME": "秀水鄉",
      "TOWNENG": "Xiushui Township",
      "COUNTYID": "N",
      "COUNTYCODE": "10007"
    }
  },
  {
    "properties": {
      "TOWNID": "N13",
      "TOWNCODE": "10007080",
      "COUNTYNAME": "彰化縣",
      "TOWNNAME": "花壇鄉",
      "TOWNENG": "Huatan Township",
      "COUNTYID": "N",
      "COUNTYCODE": "10007"
    }
  },
  {
    "properties": {
      "TOWNID": "N14",
      "TOWNCODE": "10007090",
      "COUNTYNAME": "彰化縣",
      "TOWNNAME": "芬園鄉",
      "TOWNENG": "Fenyuan Township",
      "COUNTYID": "N",
      "COUNTYCODE": "10007"
    }
  },
  {
    "properties": {
      "TOWNID": "N06",
      "TOWNCODE": "10007110",
      "COUNTYNAME": "彰化縣",
      "TOWNNAME": "溪湖鎮",
      "TOWNENG": "Xihu Township",
      "COUNTYID": "N",
      "COUNTYCODE": "10007"
    }
  },
  {
    "properties": {
      "TOWNID": "Q09",
      "TOWNCODE": "10010090",
      "COUNTYNAME": "嘉義縣",
      "TOWNNAME": "東石鄉",
      "TOWNENG": "Dongshi Township",
      "COUNTYID": "Q",
      "COUNTYCODE": "10010"
    }
  },
  {
    "properties": {
      "TOWNID": "N15",
      "TOWNCODE": "10007130",
      "COUNTYNAME": "彰化縣",
      "TOWNNAME": "大村鄉",
      "TOWNENG": "Dacun Township",
      "COUNTYID": "N",
      "COUNTYCODE": "10007"
    }
  },
  {
    "properties": {
      "TOWNID": "N16",
      "TOWNCODE": "10007140",
      "COUNTYNAME": "彰化縣",
      "TOWNNAME": "埔鹽鄉",
      "TOWNENG": "Puyan Township",
      "COUNTYID": "N",
      "COUNTYCODE": "10007"
    }
  },
  {
    "properties": {
      "TOWNID": "N17",
      "TOWNCODE": "10007150",
      "COUNTYNAME": "彰化縣",
      "TOWNNAME": "埔心鄉",
      "TOWNENG": "Puxin Township",
      "COUNTYID": "N",
      "COUNTYCODE": "10007"
    }
  },
  {
    "properties": {
      "TOWNID": "N18",
      "TOWNCODE": "10007160",
      "COUNTYNAME": "彰化縣",
      "TOWNNAME": "永靖鄉",
      "TOWNENG": "Yongjing Township",
      "COUNTYID": "N",
      "COUNTYCODE": "10007"
    }
  },
  {
    "properties": {
      "TOWNID": "N20",
      "TOWNCODE": "10007180",
      "COUNTYNAME": "彰化縣",
      "TOWNNAME": "二水鄉",
      "TOWNENG": "Ershui Township",
      "COUNTYID": "N",
      "COUNTYCODE": "10007"
    }
  },
  {
    "properties": {
      "TOWNID": "N08",
      "TOWNCODE": "10007200",
      "COUNTYNAME": "彰化縣",
      "TOWNNAME": "二林鎮",
      "TOWNENG": "Erlin Township",
      "COUNTYID": "N",
      "COUNTYCODE": "10007"
    }
  },
  {
    "properties": {
      "TOWNID": "N22",
      "TOWNCODE": "10007220",
      "COUNTYNAME": "彰化縣",
      "TOWNNAME": "埤頭鄉",
      "TOWNENG": "Pitou Township",
      "COUNTYID": "N",
      "COUNTYCODE": "10007"
    }
  },
  {
    "properties": {
      "TOWNID": "N23",
      "TOWNCODE": "10007230",
      "COUNTYNAME": "彰化縣",
      "TOWNNAME": "芳苑鄉",
      "TOWNENG": "Fangyuan Township",
      "COUNTYID": "N",
      "COUNTYCODE": "10007"
    }
  },
  {
    "properties": {
      "TOWNID": "N24",
      "TOWNCODE": "10007240",
      "COUNTYNAME": "彰化縣",
      "TOWNNAME": "大城鄉",
      "TOWNENG": "Dacheng Township",
      "COUNTYID": "N",
      "COUNTYCODE": "10007"
    }
  },
  {
    "properties": {
      "TOWNID": "N25",
      "TOWNCODE": "10007250",
      "COUNTYNAME": "彰化縣",
      "TOWNNAME": "竹塘鄉",
      "TOWNENG": "Zhutang Township",
      "COUNTYID": "N",
      "COUNTYCODE": "10007"
    }
  },
  {
    "properties": {
      "TOWNID": "N26",
      "TOWNCODE": "10007260",
      "COUNTYNAME": "彰化縣",
      "TOWNNAME": "溪州鄉",
      "TOWNENG": "Xizhou Township",
      "COUNTYID": "N",
      "COUNTYCODE": "10007"
    }
  },
  {
    "properties": {
      "TOWNID": "M01",
      "TOWNCODE": "10008010",
      "COUNTYNAME": "南投縣",
      "TOWNNAME": "南投市",
      "TOWNENG": "Nantou City",
      "COUNTYID": "M",
      "COUNTYCODE": "10008"
    }
  },
  {
    "properties": {
      "TOWNID": "M02",
      "TOWNCODE": "10008020",
      "COUNTYNAME": "南投縣",
      "TOWNNAME": "埔里鎮",
      "TOWNENG": "Puli Township",
      "COUNTYID": "M",
      "COUNTYCODE": "10008"
    }
  },
  {
    "properties": {
      "TOWNID": "M03",
      "TOWNCODE": "10008030",
      "COUNTYNAME": "南投縣",
      "TOWNNAME": "草屯鎮",
      "TOWNENG": "Caotun Township",
      "COUNTYID": "M",
      "COUNTYCODE": "10008"
    }
  },
  {
    "properties": {
      "TOWNID": "M04",
      "TOWNCODE": "10008040",
      "COUNTYNAME": "南投縣",
      "TOWNNAME": "竹山鎮",
      "TOWNENG": "Zhushan Township",
      "COUNTYID": "M",
      "COUNTYCODE": "10008"
    }
  },
  {
    "properties": {
      "TOWNID": "M05",
      "TOWNCODE": "10008050",
      "COUNTYNAME": "南投縣",
      "TOWNNAME": "集集鎮",
      "TOWNENG": "Jiji Township",
      "COUNTYID": "M",
      "COUNTYCODE": "10008"
    }
  },
  {
    "properties": {
      "TOWNID": "M06",
      "TOWNCODE": "10008060",
      "COUNTYNAME": "南投縣",
      "TOWNNAME": "名間鄉",
      "TOWNENG": "Mingjian Township",
      "COUNTYID": "M",
      "COUNTYCODE": "10008"
    }
  },
  {
    "properties": {
      "TOWNID": "M07",
      "TOWNCODE": "10008070",
      "COUNTYNAME": "南投縣",
      "TOWNNAME": "鹿谷鄉",
      "TOWNENG": "Lugu Township",
      "COUNTYID": "M",
      "COUNTYCODE": "10008"
    }
  },
  {
    "properties": {
      "TOWNID": "M08",
      "TOWNCODE": "10008080",
      "COUNTYNAME": "南投縣",
      "TOWNNAME": "中寮鄉",
      "TOWNENG": "Zhongliao Township",
      "COUNTYID": "M",
      "COUNTYCODE": "10008"
    }
  },
  {
    "properties": {
      "TOWNID": "M09",
      "TOWNCODE": "10008090",
      "COUNTYNAME": "南投縣",
      "TOWNNAME": "魚池鄉",
      "TOWNENG": "Yuchi Township",
      "COUNTYID": "M",
      "COUNTYCODE": "10008"
    }
  },
  {
    "properties": {
      "TOWNID": "M10",
      "TOWNCODE": "10008100",
      "COUNTYNAME": "南投縣",
      "TOWNNAME": "國姓鄉",
      "TOWNENG": "Guoxing Township",
      "COUNTYID": "M",
      "COUNTYCODE": "10008"
    }
  },
  {
    "properties": {
      "TOWNID": "M11",
      "TOWNCODE": "10008110",
      "COUNTYNAME": "南投縣",
      "TOWNNAME": "水里鄉",
      "TOWNENG": "Shuili Township",
      "COUNTYID": "M",
      "COUNTYCODE": "10008"
    }
  },
  {
    "properties": {
      "TOWNID": "M12",
      "TOWNCODE": "10008120",
      "COUNTYNAME": "南投縣",
      "TOWNNAME": "信義鄉",
      "TOWNENG": "Xinyi Township",
      "COUNTYID": "M",
      "COUNTYCODE": "10008"
    }
  },
  {
    "properties": {
      "TOWNID": "M13",
      "TOWNCODE": "10008130",
      "COUNTYNAME": "南投縣",
      "TOWNNAME": "仁愛鄉",
      "TOWNENG": "Ren'ai Township",
      "COUNTYID": "M",
      "COUNTYCODE": "10008"
    }
  },
  {
    "properties": {
      "TOWNID": "P01",
      "TOWNCODE": "10009010",
      "COUNTYNAME": "雲林縣",
      "TOWNNAME": "斗六市",
      "TOWNENG": "Douliu City",
      "COUNTYID": "P",
      "COUNTYCODE": "10009"
    }
  },
  {
    "properties": {
      "TOWNID": "P02",
      "TOWNCODE": "10009020",
      "COUNTYNAME": "雲林縣",
      "TOWNNAME": "斗南鎮",
      "TOWNENG": "Dounan Township",
      "COUNTYID": "P",
      "COUNTYCODE": "10009"
    }
  },
  {
    "properties": {
      "TOWNID": "P03",
      "TOWNCODE": "10009030",
      "COUNTYNAME": "雲林縣",
      "TOWNNAME": "虎尾鎮",
      "TOWNENG": "Huwei Township",
      "COUNTYID": "P",
      "COUNTYCODE": "10009"
    }
  },
  {
    "properties": {
      "TOWNID": "P04",
      "TOWNCODE": "10009040",
      "COUNTYNAME": "雲林縣",
      "TOWNNAME": "西螺鎮",
      "TOWNENG": "Xiluo Township",
      "COUNTYID": "P",
      "COUNTYCODE": "10009"
    }
  },
  {
    "properties": {
      "TOWNID": "P05",
      "TOWNCODE": "10009050",
      "COUNTYNAME": "雲林縣",
      "TOWNNAME": "土庫鎮",
      "TOWNENG": "Tuku Township",
      "COUNTYID": "P",
      "COUNTYCODE": "10009"
    }
  },
  {
    "properties": {
      "TOWNID": "P06",
      "TOWNCODE": "10009060",
      "COUNTYNAME": "雲林縣",
      "TOWNNAME": "北港鎮",
      "TOWNENG": "Beigang Township",
      "COUNTYID": "P",
      "COUNTYCODE": "10009"
    }
  },
  {
    "properties": {
      "TOWNID": "P07",
      "TOWNCODE": "10009070",
      "COUNTYNAME": "雲林縣",
      "TOWNNAME": "古坑鄉",
      "TOWNENG": "Gukeng Township",
      "COUNTYID": "P",
      "COUNTYCODE": "10009"
    }
  },
  {
    "properties": {
      "TOWNID": "P08",
      "TOWNCODE": "10009080",
      "COUNTYNAME": "雲林縣",
      "TOWNNAME": "大埤鄉",
      "TOWNENG": "Dapi Township",
      "COUNTYID": "P",
      "COUNTYCODE": "10009"
    }
  },
  {
    "properties": {
      "TOWNID": "P09",
      "TOWNCODE": "10009090",
      "COUNTYNAME": "雲林縣",
      "TOWNNAME": "莿桐鄉",
      "TOWNENG": "Citong Township",
      "COUNTYID": "P",
      "COUNTYCODE": "10009"
    }
  },
  {
    "properties": {
      "TOWNID": "P10",
      "TOWNCODE": "10009100",
      "COUNTYNAME": "雲林縣",
      "TOWNNAME": "林內鄉",
      "TOWNENG": "Linnei Township",
      "COUNTYID": "P",
      "COUNTYCODE": "10009"
    }
  },
  {
    "properties": {
      "TOWNID": "P11",
      "TOWNCODE": "10009110",
      "COUNTYNAME": "雲林縣",
      "TOWNNAME": "二崙鄉",
      "TOWNENG": "Erlun Township",
      "COUNTYID": "P",
      "COUNTYCODE": "10009"
    }
  },
  {
    "properties": {
      "TOWNID": "P12",
      "TOWNCODE": "10009120",
      "COUNTYNAME": "雲林縣",
      "TOWNNAME": "崙背鄉",
      "TOWNENG": "Lunbei Township",
      "COUNTYID": "P",
      "COUNTYCODE": "10009"
    }
  },
  {
    "properties": {
      "TOWNID": "P14",
      "TOWNCODE": "10009140",
      "COUNTYNAME": "雲林縣",
      "TOWNNAME": "東勢鄉",
      "TOWNENG": "Dongshi Township",
      "COUNTYID": "P",
      "COUNTYCODE": "10009"
    }
  },
  {
    "properties": {
      "TOWNID": "P15",
      "TOWNCODE": "10009150",
      "COUNTYNAME": "雲林縣",
      "TOWNNAME": "褒忠鄉",
      "TOWNENG": "Baozhong Township",
      "COUNTYID": "P",
      "COUNTYCODE": "10009"
    }
  },
  {
    "properties": {
      "TOWNID": "P17",
      "TOWNCODE": "10009170",
      "COUNTYNAME": "雲林縣",
      "TOWNNAME": "元長鄉",
      "TOWNENG": "Yuanchang Township",
      "COUNTYID": "P",
      "COUNTYCODE": "10009"
    }
  },
  {
    "properties": {
      "TOWNID": "P20",
      "TOWNCODE": "10009200",
      "COUNTYNAME": "雲林縣",
      "TOWNNAME": "水林鄉",
      "TOWNENG": "Shuilin Township",
      "COUNTYID": "P",
      "COUNTYCODE": "10009"
    }
  },
  {
    "properties": {
      "TOWNID": "Q02",
      "TOWNCODE": "10010020",
      "COUNTYNAME": "嘉義縣",
      "TOWNNAME": "朴子市",
      "TOWNENG": "Puzi City",
      "COUNTYID": "Q",
      "COUNTYCODE": "10010"
    }
  },
  {
    "properties": {
      "TOWNID": "Q04",
      "TOWNCODE": "10010040",
      "COUNTYNAME": "嘉義縣",
      "TOWNNAME": "大林鎮",
      "TOWNENG": "Dalin Township",
      "COUNTYID": "Q",
      "COUNTYCODE": "10010"
    }
  },
  {
    "properties": {
      "TOWNID": "Q05",
      "TOWNCODE": "10010050",
      "COUNTYNAME": "嘉義縣",
      "TOWNNAME": "民雄鄉",
      "TOWNENG": "Minxiong Township",
      "COUNTYID": "Q",
      "COUNTYCODE": "10010"
    }
  },
  {
    "properties": {
      "TOWNID": "Q06",
      "TOWNCODE": "10010060",
      "COUNTYNAME": "嘉義縣",
      "TOWNNAME": "溪口鄉",
      "TOWNENG": "Xikou Township",
      "COUNTYID": "Q",
      "COUNTYCODE": "10010"
    }
  },
  {
    "properties": {
      "TOWNID": "Q07",
      "TOWNCODE": "10010070",
      "COUNTYNAME": "嘉義縣",
      "TOWNNAME": "新港鄉",
      "TOWNENG": "Xingang Township",
      "COUNTYID": "Q",
      "COUNTYCODE": "10010"
    }
  },
  {
    "properties": {
      "TOWNID": "Q08",
      "TOWNCODE": "10010080",
      "COUNTYNAME": "嘉義縣",
      "TOWNNAME": "六腳鄉",
      "TOWNENG": "Liujiao Township",
      "COUNTYID": "Q",
      "COUNTYCODE": "10010"
    }
  },
  {
    "properties": {
      "TOWNID": "Q10",
      "TOWNCODE": "10010100",
      "COUNTYNAME": "嘉義縣",
      "TOWNNAME": "義竹鄉",
      "TOWNENG": "Yizhu Township",
      "COUNTYID": "Q",
      "COUNTYCODE": "10010"
    }
  },
  {
    "properties": {
      "TOWNID": "Q11",
      "TOWNCODE": "10010110",
      "COUNTYNAME": "嘉義縣",
      "TOWNNAME": "鹿草鄉",
      "TOWNENG": "Lucao Township",
      "COUNTYID": "Q",
      "COUNTYCODE": "10010"
    }
  },
  {
    "properties": {
      "TOWNID": "Q15",
      "TOWNCODE": "10010140",
      "COUNTYNAME": "嘉義縣",
      "TOWNNAME": "竹崎鄉",
      "TOWNENG": "Zhuqi Township",
      "COUNTYID": "Q",
      "COUNTYCODE": "10010"
    }
  },
  {
    "properties": {
      "TOWNID": "Q16",
      "TOWNCODE": "10010150",
      "COUNTYNAME": "嘉義縣",
      "TOWNNAME": "梅山鄉",
      "TOWNENG": "Meishan Township",
      "COUNTYID": "Q",
      "COUNTYCODE": "10010"
    }
  },
  {
    "properties": {
      "TOWNID": "Q18",
      "TOWNCODE": "10010170",
      "COUNTYNAME": "嘉義縣",
      "TOWNNAME": "大埔鄉",
      "TOWNENG": "Dapu Township",
      "COUNTYID": "Q",
      "COUNTYCODE": "10010"
    }
  },
  {
    "properties": {
      "TOWNID": "Q20",
      "TOWNCODE": "10010180",
      "COUNTYNAME": "嘉義縣",
      "TOWNNAME": "阿里山鄉",
      "TOWNENG": "Alishan Township",
      "COUNTYID": "Q",
      "COUNTYCODE": "10010"
    }
  },
  {
    "properties": {
      "TOWNID": "T01",
      "TOWNCODE": "10013010",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "屏東市",
      "TOWNENG": "Pingtung City",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T02",
      "TOWNCODE": "10013020",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "潮州鎮",
      "TOWNENG": "Chaozhou Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T06",
      "TOWNCODE": "10013060",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "長治鄉",
      "TOWNENG": "Changzhi Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T07",
      "TOWNCODE": "10013070",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "麟洛鄉",
      "TOWNENG": "Linluo Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T08",
      "TOWNCODE": "10013080",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "九如鄉",
      "TOWNENG": "Jiuru Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T09",
      "TOWNCODE": "10013090",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "里港鄉",
      "TOWNENG": "Ligang Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T10",
      "TOWNCODE": "10013100",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "鹽埔鄉",
      "TOWNENG": "Yanpu Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T11",
      "TOWNCODE": "10013110",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "高樹鄉",
      "TOWNENG": "Gaoshu Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T12",
      "TOWNCODE": "10013120",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "萬巒鄉",
      "TOWNENG": "Wanluan Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T13",
      "TOWNCODE": "10013130",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "內埔鄉",
      "TOWNENG": "Neipu Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T15",
      "TOWNCODE": "10013150",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "新埤鄉",
      "TOWNENG": "Xinpi Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T18",
      "TOWNCODE": "10013180",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "崁頂鄉",
      "TOWNENG": "Kanding Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T20",
      "TOWNCODE": "10013200",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "南州鄉",
      "TOWNENG": "Nanzhou Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T22",
      "TOWNCODE": "10013220",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "琉球鄉",
      "TOWNENG": "Liuqiu Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T26",
      "TOWNCODE": "10013260",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "三地門鄉",
      "TOWNENG": "Sandimen Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T27",
      "TOWNCODE": "10013270",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "霧臺鄉",
      "TOWNENG": "Wutai Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T28",
      "TOWNCODE": "10013280",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "瑪家鄉",
      "TOWNENG": "Majia Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T29",
      "TOWNCODE": "10013290",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "泰武鄉",
      "TOWNENG": "Taiwu Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T30",
      "TOWNCODE": "10013300",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "來義鄉",
      "TOWNENG": "Laiyi Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T31",
      "TOWNCODE": "10013310",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "春日鄉",
      "TOWNENG": "Chunri Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T32",
      "TOWNCODE": "10013320",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "獅子鄉",
      "TOWNENG": "Shizi Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "V09",
      "TOWNCODE": "10014050",
      "COUNTYNAME": "臺東縣",
      "TOWNNAME": "鹿野鄉",
      "TOWNENG": "Luye Township",
      "COUNTYID": "V",
      "COUNTYCODE": "10014"
    }
  },
  {
    "properties": {
      "TOWNID": "V10",
      "TOWNCODE": "10014060",
      "COUNTYNAME": "臺東縣",
      "TOWNNAME": "池上鄉",
      "TOWNENG": "Chishang Township",
      "COUNTYID": "V",
      "COUNTYCODE": "10014"
    }
  },
  {
    "properties": {
      "TOWNID": "V12",
      "TOWNCODE": "10014130",
      "COUNTYNAME": "臺東縣",
      "TOWNNAME": "延平鄉",
      "TOWNENG": "Yanping Township",
      "COUNTYID": "V",
      "COUNTYCODE": "10014"
    }
  },
  {
    "properties": {
      "TOWNID": "U02",
      "TOWNCODE": "10015070",
      "COUNTYNAME": "花蓮縣",
      "TOWNNAME": "光復鄉",
      "TOWNENG": "Guangfu Township",
      "COUNTYID": "U",
      "COUNTYCODE": "10015"
    }
  },
  {
    "properties": {
      "TOWNID": "U09",
      "TOWNCODE": "10015090",
      "COUNTYNAME": "花蓮縣",
      "TOWNNAME": "瑞穗鄉",
      "TOWNENG": "Ruisui Township",
      "COUNTYID": "U",
      "COUNTYCODE": "10015"
    }
  },
  {
    "properties": {
      "TOWNID": "U10",
      "TOWNCODE": "10015100",
      "COUNTYNAME": "花蓮縣",
      "TOWNNAME": "富里鄉",
      "TOWNENG": "Fuli Township",
      "COUNTYID": "U",
      "COUNTYCODE": "10015"
    }
  },
  {
    "properties": {
      "TOWNID": "X01",
      "TOWNCODE": "10016010",
      "COUNTYNAME": "澎湖縣",
      "TOWNNAME": "馬公市",
      "TOWNENG": "Magong City",
      "COUNTYID": "X",
      "COUNTYCODE": "10016"
    }
  },
  {
    "properties": {
      "TOWNID": "X03",
      "TOWNCODE": "10016030",
      "COUNTYNAME": "澎湖縣",
      "TOWNNAME": "白沙鄉",
      "TOWNENG": "Baisha Township",
      "COUNTYID": "X",
      "COUNTYCODE": "10016"
    }
  },
  {
    "properties": {
      "TOWNID": "X04",
      "TOWNCODE": "10016040",
      "COUNTYNAME": "澎湖縣",
      "TOWNNAME": "西嶼鄉",
      "TOWNENG": "Xiyu Township",
      "COUNTYID": "X",
      "COUNTYCODE": "10016"
    }
  },
  {
    "properties": {
      "TOWNID": "X05",
      "TOWNCODE": "10016050",
      "COUNTYNAME": "澎湖縣",
      "TOWNNAME": "望安鄉",
      "TOWNENG": "Wang'an Township",
      "COUNTYID": "X",
      "COUNTYCODE": "10016"
    }
  },
  {
    "properties": {
      "TOWNID": "X06",
      "TOWNCODE": "10016060",
      "COUNTYNAME": "澎湖縣",
      "TOWNNAME": "七美鄉",
      "TOWNENG": "Qimei Township",
      "COUNTYID": "X",
      "COUNTYCODE": "10016"
    }
  },
  {
    "properties": {
      "TOWNID": "C03",
      "TOWNCODE": "10017030",
      "COUNTYNAME": "基隆市",
      "TOWNNAME": "暖暖區",
      "TOWNENG": "Nuannuan District",
      "COUNTYID": "C",
      "COUNTYCODE": "10017"
    }
  },
  {
    "properties": {
      "TOWNID": "A02",
      "TOWNCODE": "63000030",
      "COUNTYNAME": "臺北市",
      "TOWNNAME": "大安區",
      "TOWNENG": "Da'an District",
      "COUNTYID": "A",
      "COUNTYCODE": "63000"
    }
  },
  {
    "properties": {
      "TOWNID": "A11",
      "TOWNCODE": "63000080",
      "COUNTYNAME": "臺北市",
      "TOWNNAME": "文山區",
      "TOWNENG": "Wenshan District",
      "COUNTYID": "A",
      "COUNTYCODE": "63000"
    }
  },
  {
    "properties": {
      "TOWNID": "E01",
      "TOWNCODE": "64000010",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "鹽埕區",
      "TOWNENG": "Yancheng District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E06",
      "TOWNCODE": "64000060",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "新興區",
      "TOWNENG": "Xinxing District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E07",
      "TOWNCODE": "64000070",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "前金區",
      "TOWNENG": "Qianjin District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E09",
      "TOWNCODE": "64000090",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "前鎮區",
      "TOWNENG": "Qianzhen District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "G02",
      "TOWNCODE": "10002040",
      "COUNTYNAME": "宜蘭縣",
      "TOWNNAME": "頭城鎮",
      "TOWNENG": "Toucheng Township",
      "COUNTYID": "G",
      "COUNTYCODE": "10002"
    }
  },
  {
    "properties": {
      "TOWNID": "G12",
      "TOWNCODE": "10002120",
      "COUNTYNAME": "宜蘭縣",
      "TOWNNAME": "南澳鄉",
      "TOWNENG": "Nan'ao Township",
      "COUNTYID": "G",
      "COUNTYCODE": "10002"
    }
  },
  {
    "properties": {
      "TOWNID": "J05",
      "TOWNCODE": "10004010",
      "COUNTYNAME": "新竹縣",
      "TOWNNAME": "竹北市",
      "TOWNENG": "Zhubei City",
      "COUNTYID": "J",
      "COUNTYCODE": "10004"
    }
  },
  {
    "properties": {
      "TOWNID": "J09",
      "TOWNCODE": "10004060",
      "COUNTYNAME": "新竹縣",
      "TOWNNAME": "新豐鄉",
      "TOWNENG": "Xinfeng Township",
      "COUNTYID": "J",
      "COUNTYCODE": "10004"
    }
  },
  {
    "properties": {
      "TOWNID": "K02",
      "TOWNCODE": "10005020",
      "COUNTYNAME": "苗栗縣",
      "TOWNNAME": "苑裡鎮",
      "TOWNENG": "Yuanli Township",
      "COUNTYID": "K",
      "COUNTYCODE": "10005"
    }
  },
  {
    "properties": {
      "TOWNID": "K03",
      "TOWNCODE": "10005030",
      "COUNTYNAME": "苗栗縣",
      "TOWNNAME": "通霄鎮",
      "TOWNENG": "Tongxiao Township",
      "COUNTYID": "K",
      "COUNTYCODE": "10005"
    }
  },
  {
    "properties": {
      "TOWNID": "K09",
      "TOWNCODE": "10005040",
      "COUNTYNAME": "苗栗縣",
      "TOWNNAME": "竹南鎮",
      "TOWNENG": "Zhunan Township",
      "COUNTYID": "K",
      "COUNTYCODE": "10005"
    }
  },
  {
    "properties": {
      "TOWNID": "K12",
      "TOWNCODE": "10005060",
      "COUNTYNAME": "苗栗縣",
      "TOWNNAME": "後龍鎮",
      "TOWNENG": "Houlong Township",
      "COUNTYID": "K",
      "COUNTYCODE": "10005"
    }
  },
  {
    "properties": {
      "TOWNID": "N02",
      "TOWNCODE": "10007020",
      "COUNTYNAME": "彰化縣",
      "TOWNNAME": "鹿港鎮",
      "TOWNENG": "Lukang Township",
      "COUNTYID": "N",
      "COUNTYCODE": "10007"
    }
  },
  {
    "properties": {
      "TOWNID": "N11",
      "TOWNCODE": "10007060",
      "COUNTYNAME": "彰化縣",
      "TOWNNAME": "福興鄉",
      "TOWNENG": "Fuxing Township",
      "COUNTYID": "N",
      "COUNTYCODE": "10007"
    }
  },
  {
    "properties": {
      "TOWNID": "P16",
      "TOWNCODE": "10009160",
      "COUNTYNAME": "雲林縣",
      "TOWNNAME": "臺西鄉",
      "TOWNENG": "Taixi Township",
      "COUNTYID": "P",
      "COUNTYCODE": "10009"
    }
  },
  {
    "properties": {
      "TOWNID": "P18",
      "TOWNCODE": "10009180",
      "COUNTYNAME": "雲林縣",
      "TOWNNAME": "四湖鄉",
      "TOWNENG": "Sihu Township",
      "COUNTYID": "P",
      "COUNTYCODE": "10009"
    }
  },
  {
    "properties": {
      "TOWNID": "P19",
      "TOWNCODE": "10009190",
      "COUNTYNAME": "雲林縣",
      "TOWNNAME": "口湖鄉",
      "TOWNENG": "Kouhu Township",
      "COUNTYID": "P",
      "COUNTYCODE": "10009"
    }
  },
  {
    "properties": {
      "TOWNID": "Q03",
      "TOWNCODE": "10010030",
      "COUNTYNAME": "嘉義縣",
      "TOWNNAME": "布袋鎮",
      "TOWNENG": "Budai Township",
      "COUNTYID": "Q",
      "COUNTYCODE": "10010"
    }
  },
  {
    "properties": {
      "TOWNID": "T03",
      "TOWNCODE": "10013030",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "東港鎮",
      "TOWNENG": "Donggang Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T16",
      "TOWNCODE": "10013160",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "枋寮鄉",
      "TOWNENG": "Fangliao Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T17",
      "TOWNCODE": "10013170",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "新園鄉",
      "TOWNENG": "Xinyuan Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T19",
      "TOWNCODE": "10013190",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "林邊鄉",
      "TOWNENG": "Linbian Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T23",
      "TOWNCODE": "10013230",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "車城鄉",
      "TOWNENG": "Checheng Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T24",
      "TOWNCODE": "10013240",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "滿州鄉",
      "TOWNENG": "Manzhou Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T25",
      "TOWNCODE": "10013250",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "枋山鄉",
      "TOWNENG": "Fangshan Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "T33",
      "TOWNCODE": "10013330",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "牡丹鄉",
      "TOWNENG": "Mudan Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "V01",
      "TOWNCODE": "10014010",
      "COUNTYNAME": "臺東縣",
      "TOWNNAME": "臺東市",
      "TOWNENG": "Taitung City",
      "COUNTYID": "V",
      "COUNTYCODE": "10014"
    }
  },
  {
    "properties": {
      "TOWNID": "V04",
      "TOWNCODE": "10014040",
      "COUNTYNAME": "臺東縣",
      "TOWNNAME": "卑南鄉",
      "TOWNENG": "Beinan Township",
      "COUNTYID": "V",
      "COUNTYCODE": "10014"
    }
  },
  {
    "properties": {
      "TOWNID": "V07",
      "TOWNCODE": "10014070",
      "COUNTYNAME": "臺東縣",
      "TOWNNAME": "東河鄉",
      "TOWNENG": "Donghe Township",
      "COUNTYID": "V",
      "COUNTYCODE": "10014"
    }
  },
  {
    "properties": {
      "TOWNID": "U05",
      "TOWNCODE": "10015050",
      "COUNTYNAME": "花蓮縣",
      "TOWNNAME": "吉安鄉",
      "TOWNENG": "Ji'an Township",
      "COUNTYID": "U",
      "COUNTYCODE": "10015"
    }
  },
  {
    "properties": {
      "TOWNID": "U06",
      "TOWNCODE": "10015060",
      "COUNTYNAME": "花蓮縣",
      "TOWNNAME": "壽豐鄉",
      "TOWNENG": "Shoufeng Township",
      "COUNTYID": "U",
      "COUNTYCODE": "10015"
    }
  },
  {
    "properties": {
      "TOWNID": "U11",
      "TOWNCODE": "10015110",
      "COUNTYNAME": "花蓮縣",
      "TOWNNAME": "秀林鄉",
      "TOWNENG": "Xiulin Township",
      "COUNTYID": "U",
      "COUNTYCODE": "10015"
    }
  },
  {
    "properties": {
      "TOWNID": "E04",
      "TOWNCODE": "64000040",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "楠梓區",
      "TOWNENG": "Nanzi District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E12",
      "TOWNCODE": "64000120",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "鳳山區",
      "TOWNENG": "Fengshan District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E14",
      "TOWNCODE": "64000140",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "大寮區",
      "TOWNENG": "Daliao District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E15",
      "TOWNCODE": "64000150",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "大樹區",
      "TOWNENG": "Dashu District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E16",
      "TOWNCODE": "64000160",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "大社區",
      "TOWNENG": "Dashe District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E17",
      "TOWNCODE": "64000170",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "仁武區",
      "TOWNENG": "Renwu District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E18",
      "TOWNCODE": "64000180",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "鳥松區",
      "TOWNENG": "Niaosong District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E19",
      "TOWNCODE": "64000190",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "岡山區",
      "TOWNENG": "Gangshan District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E20",
      "TOWNCODE": "64000200",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "橋頭區",
      "TOWNENG": "Qiaotou District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E21",
      "TOWNCODE": "64000210",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "燕巢區",
      "TOWNENG": "Yanchao District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E22",
      "TOWNCODE": "64000220",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "田寮區",
      "TOWNENG": "Tianliao District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E23",
      "TOWNCODE": "64000230",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "阿蓮區",
      "TOWNENG": "Alian District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E24",
      "TOWNCODE": "64000240",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "路竹區",
      "TOWNENG": "Luzhu District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E25",
      "TOWNCODE": "64000250",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "湖內區",
      "TOWNENG": "Hunei District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E30",
      "TOWNCODE": "64000300",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "旗山區",
      "TOWNENG": "Qishan District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E31",
      "TOWNCODE": "64000310",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "美濃區",
      "TOWNENG": "Meinong District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E32",
      "TOWNCODE": "64000320",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "六龜區",
      "TOWNENG": "Liugui District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E33",
      "TOWNCODE": "64000330",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "甲仙區",
      "TOWNENG": "Jiaxian District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E34",
      "TOWNCODE": "64000340",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "杉林區",
      "TOWNENG": "Shanlin District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E35",
      "TOWNCODE": "64000350",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "內門區",
      "TOWNENG": "Neimen District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E36",
      "TOWNCODE": "64000360",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "茂林區",
      "TOWNENG": "Maolin District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E37",
      "TOWNCODE": "64000370",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "桃源區",
      "TOWNENG": "Taoyuan District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E38",
      "TOWNCODE": "64000380",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "那瑪夏區",
      "TOWNENG": "Namaxia District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "F33",
      "TOWNCODE": "65000040",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "永和區",
      "TOWNENG": "Yonghe District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "F07",
      "TOWNCODE": "65000060",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "新店區",
      "TOWNENG": "Xindian District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "F19",
      "TOWNCODE": "65000130",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "土城區",
      "TOWNENG": "Tucheng District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "F04",
      "TOWNCODE": "65000140",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "蘆洲區",
      "TOWNENG": "Luzhou District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "F03",
      "TOWNCODE": "65000150",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "五股區",
      "TOWNENG": "Wugu District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "F10",
      "TOWNCODE": "65000200",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "坪林區",
      "TOWNENG": "Pinglin District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "F22",
      "TOWNCODE": "65000240",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "平溪區",
      "TOWNENG": "Pingxi District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "F11",
      "TOWNCODE": "65000290",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "烏來區",
      "TOWNENG": "Wulai District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "B09",
      "TOWNCODE": "66000090",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "豐原區",
      "TOWNENG": "Fengyuan District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "B10",
      "TOWNCODE": "66000100",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "東勢區",
      "TOWNENG": "Dongshi District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "B15",
      "TOWNCODE": "66000150",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "后里區",
      "TOWNENG": "Houli District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "B16",
      "TOWNCODE": "66000160",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "神岡區",
      "TOWNENG": "Shengang District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "B19",
      "TOWNCODE": "66000190",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "新社區",
      "TOWNENG": "Xinshe District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "B20",
      "TOWNCODE": "66000200",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "石岡區",
      "TOWNENG": "Shigang District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "B21",
      "TOWNCODE": "66000210",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "外埔區",
      "TOWNENG": "Waipu District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "B24",
      "TOWNCODE": "66000240",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "大肚區",
      "TOWNENG": "Dadu District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "B29",
      "TOWNCODE": "66000290",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "和平區",
      "TOWNENG": "Heping District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "D09",
      "TOWNCODE": "67000010",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "新營區",
      "TOWNENG": "Xinying District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D10",
      "TOWNCODE": "67000020",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "鹽水區",
      "TOWNENG": "Yanshui District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D12",
      "TOWNCODE": "67000030",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "白河區",
      "TOWNENG": "Baihe District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D13",
      "TOWNCODE": "67000050",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "後壁區",
      "TOWNENG": "Houbi District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D15",
      "TOWNCODE": "67000070",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "麻豆區",
      "TOWNENG": "Madou District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D16",
      "TOWNCODE": "67000080",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "下營區",
      "TOWNENG": "Xiaying District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D17",
      "TOWNCODE": "67000090",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "六甲區",
      "TOWNENG": "Liujia District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D18",
      "TOWNCODE": "67000100",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "官田區",
      "TOWNENG": "Guantian District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D19",
      "TOWNCODE": "67000110",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "大內區",
      "TOWNENG": "Danei District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D20",
      "TOWNCODE": "67000120",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "佳里區",
      "TOWNENG": "Jiali District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D25",
      "TOWNCODE": "67000130",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "學甲區",
      "TOWNENG": "Xuejia District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D21",
      "TOWNCODE": "67000140",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "西港區",
      "TOWNENG": "Xigang District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D26",
      "TOWNCODE": "67000180",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "新化區",
      "TOWNENG": "Xinhua District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D28",
      "TOWNCODE": "67000200",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "新市區",
      "TOWNENG": "Xinshi District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D29",
      "TOWNCODE": "67000210",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "安定區",
      "TOWNENG": "Anding District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D36",
      "TOWNCODE": "67000230",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "玉井區",
      "TOWNENG": "Yujing District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D37",
      "TOWNCODE": "67000240",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "楠西區",
      "TOWNENG": "Nanxi District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D38",
      "TOWNCODE": "67000250",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "南化區",
      "TOWNENG": "Nanhua District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D31",
      "TOWNCODE": "67000260",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "左鎮區",
      "TOWNENG": "Zuozhen District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D32",
      "TOWNCODE": "67000270",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "仁德區",
      "TOWNENG": "Rende District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D33",
      "TOWNCODE": "67000280",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "歸仁區",
      "TOWNENG": "Guiren District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D34",
      "TOWNCODE": "67000290",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "關廟區",
      "TOWNENG": "Guanmiao District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D35",
      "TOWNCODE": "67000300",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "龍崎區",
      "TOWNENG": "Longqi District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D39",
      "TOWNCODE": "67000310",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "永康區",
      "TOWNENG": "Yongkang District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D04",
      "TOWNCODE": "67000340",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "北區",
      "TOWNENG": "North District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "E13",
      "TOWNCODE": "64000130",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "林園區",
      "TOWNENG": "Linyuan District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E26",
      "TOWNCODE": "64000260",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "茄萣區",
      "TOWNENG": "Qieding District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E27",
      "TOWNCODE": "64000270",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "永安區",
      "TOWNENG": "Yong'an District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E28",
      "TOWNCODE": "64000280",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "彌陀區",
      "TOWNENG": "Mituo District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E29",
      "TOWNCODE": "64000290",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "梓官區",
      "TOWNENG": "Ziguan District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "F27",
      "TOWNCODE": "65000100",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "淡水區",
      "TOWNENG": "Tamsui District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "F21",
      "TOWNCODE": "65000120",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "瑞芳區",
      "TOWNENG": "Ruifang District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "F02",
      "TOWNCODE": "65000170",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "林口區",
      "TOWNENG": "Linkou District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "F30",
      "TOWNCODE": "65000210",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "三芝區",
      "TOWNENG": "Sanzhi District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "F32",
      "TOWNCODE": "65000230",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "八里區",
      "TOWNENG": "Bali District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "B11",
      "TOWNCODE": "66000110",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "大甲區",
      "TOWNENG": "Dajia District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "B22",
      "TOWNCODE": "66000220",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "大安區",
      "TOWNENG": "Da'an District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "D24",
      "TOWNCODE": "67000170",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "北門區",
      "TOWNENG": "Beimen District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D06",
      "TOWNCODE": "67000350",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "安南區",
      "TOWNENG": "Annan District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "H05",
      "TOWNCODE": "68000050",
      "COUNTYNAME": "桃園市",
      "TOWNNAME": "蘆竹區",
      "TOWNENG": "Luzhu District",
      "COUNTYID": "H",
      "COUNTYCODE": "68000"
    }
  },
  {
    "properties": {
      "TOWNID": "H07",
      "TOWNCODE": "68000070",
      "COUNTYNAME": "桃園市",
      "TOWNNAME": "龜山區",
      "TOWNENG": "Guishan District",
      "COUNTYID": "H",
      "COUNTYCODE": "68000"
    }
  },
  {
    "properties": {
      "TOWNID": "H13",
      "TOWNCODE": "68000130",
      "COUNTYNAME": "桃園市",
      "TOWNNAME": "復興區",
      "TOWNENG": "Fuxing District",
      "COUNTYID": "H",
      "COUNTYCODE": "68000"
    }
  },
  {
    "properties": {
      "TOWNID": "I01",
      "TOWNCODE": "10020010",
      "COUNTYNAME": "嘉義市",
      "TOWNNAME": "東區",
      "TOWNENG": "East District",
      "COUNTYID": "I",
      "COUNTYCODE": "10020"
    }
  },
  {
    "properties": {
      "TOWNID": "I02",
      "TOWNCODE": "10020020",
      "COUNTYNAME": "嘉義市",
      "TOWNNAME": "西區",
      "TOWNENG": "West District",
      "COUNTYID": "I",
      "COUNTYCODE": "10020"
    }
  },
  {
    "properties": {
      "TOWNID": "V14",
      "TOWNCODE": "10014150",
      "COUNTYNAME": "臺東縣",
      "TOWNNAME": "達仁鄉",
      "TOWNENG": "Daren Township",
      "COUNTYID": "V",
      "COUNTYCODE": "10014"
    }
  },
  {
    "properties": {
      "TOWNID": "V05",
      "TOWNCODE": "10014100",
      "COUNTYNAME": "臺東縣",
      "TOWNNAME": "大武鄉",
      "TOWNENG": "Dawu Township",
      "COUNTYID": "V",
      "COUNTYCODE": "10014"
    }
  },
  {
    "properties": {
      "TOWNID": "V03",
      "TOWNCODE": "10014030",
      "COUNTYNAME": "臺東縣",
      "TOWNNAME": "關山鎮",
      "TOWNENG": "Guanshan Township",
      "COUNTYID": "V",
      "COUNTYCODE": "10014"
    }
  },
  {
    "properties": {
      "TOWNID": "V13",
      "TOWNCODE": "10014120",
      "COUNTYNAME": "臺東縣",
      "TOWNNAME": "海端鄉",
      "TOWNENG": "Haiduan Township",
      "COUNTYID": "V",
      "COUNTYCODE": "10014"
    }
  },
  {
    "properties": {
      "TOWNID": "O02",
      "TOWNCODE": "10018020",
      "COUNTYNAME": "新竹市",
      "TOWNNAME": "北區",
      "TOWNENG": "North District",
      "COUNTYID": "O",
      "COUNTYCODE": "10018"
    }
  },
  {
    "properties": {
      "TOWNID": "O03",
      "TOWNCODE": "10018030",
      "COUNTYNAME": "新竹市",
      "TOWNNAME": "香山區",
      "TOWNENG": "Xiangshan District",
      "COUNTYID": "O",
      "COUNTYCODE": "10018"
    }
  },
  {
    "properties": {
      "TOWNID": "G03",
      "TOWNCODE": "10002050",
      "COUNTYNAME": "宜蘭縣",
      "TOWNNAME": "礁溪鄉",
      "TOWNENG": "Jiaoxi Township",
      "COUNTYID": "G",
      "COUNTYCODE": "10002"
    }
  },
  {
    "properties": {
      "TOWNID": "U03",
      "TOWNCODE": "10015030",
      "COUNTYNAME": "花蓮縣",
      "TOWNNAME": "玉里鎮",
      "TOWNENG": "Yuli Township",
      "COUNTYID": "U",
      "COUNTYCODE": "10015"
    }
  },
  {
    "properties": {
      "TOWNID": "U13",
      "TOWNCODE": "10015130",
      "COUNTYNAME": "花蓮縣",
      "TOWNNAME": "卓溪鄉",
      "TOWNENG": "Zhuoxi Township",
      "COUNTYID": "U",
      "COUNTYCODE": "10015"
    }
  },
  {
    "properties": {
      "TOWNID": "K10",
      "TOWNCODE": "10005050",
      "COUNTYNAME": "苗栗縣",
      "TOWNNAME": "頭份市",
      "TOWNENG": "Toufen City",
      "COUNTYID": "K",
      "COUNTYCODE": "10005"
    }
  },
  {
    "properties": {
      "TOWNID": "B12",
      "TOWNCODE": "66000120",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "清水區",
      "TOWNENG": "Qingshui District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "D02",
      "TOWNCODE": "67000330",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "南區",
      "TOWNENG": "South District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D01",
      "TOWNCODE": "67000320",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "東區",
      "TOWNENG": "East District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D07",
      "TOWNCODE": "67000360",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "安平區",
      "TOWNENG": "Anping District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D08",
      "TOWNCODE": "67000370",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "中西區",
      "TOWNENG": "West Central District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "H02",
      "TOWNCODE": "68000030",
      "COUNTYNAME": "桃園市",
      "TOWNNAME": "大溪區",
      "TOWNENG": "Daxi District",
      "COUNTYID": "H",
      "COUNTYCODE": "68000"
    }
  },
  {
    "properties": {
      "TOWNID": "H08",
      "TOWNCODE": "68000080",
      "COUNTYNAME": "桃園市",
      "TOWNNAME": "八德區",
      "TOWNENG": "Bade District",
      "COUNTYID": "H",
      "COUNTYCODE": "68000"
    }
  },
  {
    "properties": {
      "TOWNID": "H01",
      "TOWNCODE": "68000010",
      "COUNTYNAME": "桃園市",
      "TOWNNAME": "桃園區",
      "TOWNENG": "Taoyuan District",
      "COUNTYID": "H",
      "COUNTYCODE": "68000"
    }
  },
  {
    "properties": {
      "TOWNID": "H06",
      "TOWNCODE": "68000060",
      "COUNTYNAME": "桃園市",
      "TOWNNAME": "大園區",
      "TOWNENG": "Dayuan District",
      "COUNTYID": "H",
      "COUNTYCODE": "68000"
    }
  },
  {
    "properties": {
      "TOWNID": "H04",
      "TOWNCODE": "68000040",
      "COUNTYNAME": "桃園市",
      "TOWNNAME": "楊梅區",
      "TOWNENG": "Yangmei District",
      "COUNTYID": "H",
      "COUNTYCODE": "68000"
    }
  },
  {
    "properties": {
      "TOWNID": "C02",
      "TOWNCODE": "10017020",
      "COUNTYNAME": "基隆市",
      "TOWNNAME": "七堵區",
      "TOWNENG": "Qidu District",
      "COUNTYID": "C",
      "COUNTYCODE": "10017"
    }
  },
  {
    "properties": {
      "TOWNID": "C04",
      "TOWNCODE": "10017040",
      "COUNTYNAME": "基隆市",
      "TOWNNAME": "仁愛區",
      "TOWNENG": "Ren'ai District",
      "COUNTYID": "C",
      "COUNTYCODE": "10017"
    }
  },
  {
    "properties": {
      "TOWNID": "C07",
      "TOWNCODE": "10017070",
      "COUNTYNAME": "基隆市",
      "TOWNNAME": "信義區",
      "TOWNENG": "Xinyi District",
      "COUNTYID": "C",
      "COUNTYCODE": "10017"
    }
  },
  {
    "properties": {
      "TOWNID": "C01",
      "TOWNCODE": "10017010",
      "COUNTYNAME": "基隆市",
      "TOWNNAME": "中正區",
      "TOWNENG": "Zhongzheng District",
      "COUNTYID": "C",
      "COUNTYCODE": "10017"
    }
  },
  {
    "properties": {
      "TOWNID": "C05",
      "TOWNCODE": "10017050",
      "COUNTYNAME": "基隆市",
      "TOWNNAME": "中山區",
      "TOWNENG": "Zhongshan District",
      "COUNTYID": "C",
      "COUNTYCODE": "10017"
    }
  },
  {
    "properties": {
      "TOWNID": "C06",
      "TOWNCODE": "10017060",
      "COUNTYNAME": "基隆市",
      "TOWNNAME": "安樂區",
      "TOWNENG": "Anle District",
      "COUNTYID": "C",
      "COUNTYCODE": "10017"
    }
  },
  {
    "properties": {
      "TOWNID": "F15",
      "TOWNCODE": "65000090",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "三峽區",
      "TOWNENG": "Sanxia District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "F16",
      "TOWNCODE": "65000080",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "鶯歌區",
      "TOWNENG": "Yingge District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "F18",
      "TOWNCODE": "65000030",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "中和區",
      "TOWNENG": "Zhonghe District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "F17",
      "TOWNCODE": "65000070",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "樹林區",
      "TOWNENG": "Shulin District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "F09",
      "TOWNCODE": "65000180",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "深坑區",
      "TOWNENG": "Shenkeng District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "F14",
      "TOWNCODE": "65000010",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "板橋區",
      "TOWNENG": "Banqiao District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "F08",
      "TOWNCODE": "65000190",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "石碇區",
      "TOWNENG": "Shiding District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "F01",
      "TOWNCODE": "65000050",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "新莊區",
      "TOWNENG": "Xinzhuang District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "F06",
      "TOWNCODE": "65000160",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "泰山區",
      "TOWNENG": "Taishan District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "F05",
      "TOWNCODE": "65000020",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "三重區",
      "TOWNENG": "Sanchong District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "F23",
      "TOWNCODE": "65000250",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "雙溪區",
      "TOWNENG": "Shuangxi District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "F24",
      "TOWNCODE": "65000260",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "貢寮區",
      "TOWNENG": "Gongliao District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "F28",
      "TOWNCODE": "65000110",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "汐止區",
      "TOWNENG": "Xizhi District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "F26",
      "TOWNCODE": "65000280",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "萬里區",
      "TOWNENG": "Wanli District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "F25",
      "TOWNCODE": "65000270",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "金山區",
      "TOWNENG": "Jinshan District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "F31",
      "TOWNCODE": "65000220",
      "COUNTYNAME": "新北市",
      "TOWNNAME": "石門區",
      "TOWNENG": "Shimen District",
      "COUNTYID": "F",
      "COUNTYCODE": "65000"
    }
  },
  {
    "properties": {
      "TOWNID": "E08",
      "TOWNCODE": "64000080",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "苓雅區",
      "TOWNENG": "Lingya District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E05",
      "TOWNCODE": "64000050",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "三民區",
      "TOWNENG": "Sanmin District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "H11",
      "TOWNCODE": "68000110",
      "COUNTYNAME": "桃園市",
      "TOWNNAME": "新屋區",
      "TOWNENG": "Xinwu District",
      "COUNTYID": "H",
      "COUNTYCODE": "68000"
    }
  },
  {
    "properties": {
      "TOWNID": "H12",
      "TOWNCODE": "68000120",
      "COUNTYNAME": "桃園市",
      "TOWNNAME": "觀音區",
      "TOWNENG": "Guanyin District",
      "COUNTYID": "H",
      "COUNTYCODE": "68000"
    }
  },
  {
    "properties": {
      "TOWNID": "Z02",
      "TOWNCODE": "09007020",
      "COUNTYNAME": "連江縣",
      "TOWNNAME": "北竿鄉",
      "TOWNENG": "Beigan Township",
      "COUNTYID": "Z",
      "COUNTYCODE": "09007"
    }
  },
  {
    "properties": {
      "TOWNID": "Z04",
      "TOWNCODE": "09007040",
      "COUNTYNAME": "連江縣",
      "TOWNNAME": "東引鄉",
      "TOWNENG": "Dongyin Township",
      "COUNTYID": "Z",
      "COUNTYCODE": "09007"
    }
  },
  {
    "properties": {
      "TOWNID": "W05",
      "TOWNCODE": "09020050",
      "COUNTYNAME": "金門縣",
      "TOWNNAME": "烈嶼鄉",
      "TOWNENG": "Lieyu Township",
      "COUNTYID": "W",
      "COUNTYCODE": "09020"
    }
  },
  {
    "properties": {
      "TOWNID": "E10",
      "TOWNCODE": "64000100",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "旗津區",
      "TOWNENG": "Qijin District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "V08",
      "TOWNCODE": "10014080",
      "COUNTYNAME": "臺東縣",
      "TOWNNAME": "長濱鄉",
      "TOWNENG": "Changbin Township",
      "COUNTYID": "V",
      "COUNTYCODE": "10014"
    }
  },
  {
    "properties": {
      "TOWNID": "U08",
      "TOWNCODE": "10015080",
      "COUNTYNAME": "花蓮縣",
      "TOWNNAME": "豐濱鄉",
      "TOWNENG": "Fengbin Township",
      "COUNTYID": "U",
      "COUNTYCODE": "10015"
    }
  },
  {
    "properties": {
      "TOWNID": "B26",
      "TOWNCODE": "66000260",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "霧峰區",
      "TOWNENG": "Wufeng District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "B28",
      "TOWNCODE": "66000280",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "大里區",
      "TOWNENG": "Dali District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "B03",
      "TOWNCODE": "66000030",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "南區",
      "TOWNENG": "South District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "B23",
      "TOWNCODE": "66000230",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "烏日區",
      "TOWNENG": "Wuri District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "B01",
      "TOWNCODE": "66000010",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "中區",
      "TOWNENG": "Central District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "B04",
      "TOWNCODE": "66000040",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "西區",
      "TOWNENG": "West District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "B07",
      "TOWNCODE": "66000070",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "南屯區",
      "TOWNENG": "Nantun District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "B05",
      "TOWNCODE": "66000050",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "北區",
      "TOWNENG": "North District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "B06",
      "TOWNCODE": "66000060",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "西屯區",
      "TOWNENG": "Xitun District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "B08",
      "TOWNCODE": "66000080",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "北屯區",
      "TOWNENG": "Beitun District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "B17",
      "TOWNCODE": "66000170",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "潭子區",
      "TOWNENG": "Tanzi District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "A17",
      "TOWNCODE": "63000020",
      "COUNTYNAME": "臺北市",
      "TOWNNAME": "信義區",
      "TOWNENG": "Xinyi District",
      "COUNTYID": "A",
      "COUNTYCODE": "63000"
    }
  },
  {
    "properties": {
      "TOWNID": "A05",
      "TOWNCODE": "63000070",
      "COUNTYNAME": "臺北市",
      "TOWNNAME": "萬華區",
      "TOWNENG": "Wanhua District",
      "COUNTYID": "A",
      "COUNTYCODE": "63000"
    }
  },
  {
    "properties": {
      "TOWNID": "A03",
      "TOWNCODE": "63000050",
      "COUNTYNAME": "臺北市",
      "TOWNNAME": "中正區",
      "TOWNENG": "Zhongzheng District",
      "COUNTYID": "A",
      "COUNTYCODE": "63000"
    }
  },
  {
    "properties": {
      "TOWNID": "A01",
      "TOWNCODE": "63000010",
      "COUNTYNAME": "臺北市",
      "TOWNNAME": "松山區",
      "TOWNENG": "Songshan District",
      "COUNTYID": "A",
      "COUNTYCODE": "63000"
    }
  },
  {
    "properties": {
      "TOWNID": "A09",
      "TOWNCODE": "63000060",
      "COUNTYNAME": "臺北市",
      "TOWNNAME": "大同區",
      "TOWNENG": "Datong District",
      "COUNTYID": "A",
      "COUNTYCODE": "63000"
    }
  },
  {
    "properties": {
      "TOWNID": "A10",
      "TOWNCODE": "63000040",
      "COUNTYNAME": "臺北市",
      "TOWNNAME": "中山區",
      "TOWNENG": "Zhongshan District",
      "COUNTYID": "A",
      "COUNTYCODE": "63000"
    }
  },
  {
    "properties": {
      "TOWNID": "A15",
      "TOWNCODE": "63000110",
      "COUNTYNAME": "臺北市",
      "TOWNNAME": "士林區",
      "TOWNENG": "Shilin District",
      "COUNTYID": "A",
      "COUNTYCODE": "63000"
    }
  },
  {
    "properties": {
      "TOWNID": "A16",
      "TOWNCODE": "63000120",
      "COUNTYNAME": "臺北市",
      "TOWNNAME": "北投區",
      "TOWNENG": "Beitou District",
      "COUNTYID": "A",
      "COUNTYCODE": "63000"
    }
  },
  {
    "properties": {
      "TOWNID": "U01",
      "TOWNCODE": "10015010",
      "COUNTYNAME": "花蓮縣",
      "TOWNNAME": "花蓮市",
      "TOWNENG": "Hualien City",
      "COUNTYID": "U",
      "COUNTYCODE": "10015"
    }
  },
  {
    "properties": {
      "TOWNID": "U04",
      "TOWNCODE": "10015040",
      "COUNTYNAME": "花蓮縣",
      "TOWNNAME": "新城鄉",
      "TOWNENG": "Xincheng Township",
      "COUNTYID": "U",
      "COUNTYCODE": "10015"
    }
  },
  {
    "properties": {
      "TOWNID": "D27",
      "TOWNCODE": "67000190",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "善化區",
      "TOWNENG": "Shanhua District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D30",
      "TOWNCODE": "67000220",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "山上區",
      "TOWNENG": "Shanshang District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "N04",
      "TOWNCODE": "10007190",
      "COUNTYNAME": "彰化縣",
      "TOWNNAME": "北斗鎮",
      "TOWNENG": "Beidou Township",
      "COUNTYID": "N",
      "COUNTYCODE": "10007"
    }
  },
  {
    "properties": {
      "TOWNID": "N21",
      "TOWNCODE": "10007210",
      "COUNTYNAME": "彰化縣",
      "TOWNNAME": "田尾鄉",
      "TOWNENG": "Tianwei Township",
      "COUNTYID": "N",
      "COUNTYCODE": "10007"
    }
  },
  {
    "properties": {
      "TOWNID": "W03",
      "TOWNCODE": "09020010",
      "COUNTYNAME": "金門縣",
      "TOWNNAME": "金城鎮",
      "TOWNENG": "Jincheng Township",
      "COUNTYID": "W",
      "COUNTYCODE": "09020"
    }
  },
  {
    "properties": {
      "TOWNID": "W02",
      "TOWNCODE": "09020020",
      "COUNTYNAME": "金門縣",
      "TOWNNAME": "金沙鎮",
      "TOWNENG": "Jinsha Township",
      "COUNTYID": "W",
      "COUNTYCODE": "09020"
    }
  },
  {
    "properties": {
      "TOWNID": "W01",
      "TOWNCODE": "09020030",
      "COUNTYNAME": "金門縣",
      "TOWNNAME": "金湖鎮",
      "TOWNENG": "Jinhu Township",
      "COUNTYID": "W",
      "COUNTYCODE": "09020"
    }
  },
  {
    "properties": {
      "TOWNID": "D11",
      "TOWNCODE": "67000040",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "柳營區",
      "TOWNENG": "Liuying District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D14",
      "TOWNCODE": "67000060",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "東山區",
      "TOWNENG": "Dongshan District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D22",
      "TOWNCODE": "67000150",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "七股區",
      "TOWNENG": "Qigu District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "D23",
      "TOWNCODE": "67000160",
      "COUNTYNAME": "臺南市",
      "TOWNNAME": "將軍區",
      "TOWNENG": "Jiangjun District",
      "COUNTYID": "D",
      "COUNTYCODE": "67000"
    }
  },
  {
    "properties": {
      "TOWNID": "E02",
      "TOWNCODE": "64000020",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "鼓山區",
      "TOWNENG": "Gushan District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "E03",
      "TOWNCODE": "64000030",
      "COUNTYNAME": "高雄市",
      "TOWNNAME": "左營區",
      "TOWNENG": "Zuoying District",
      "COUNTYID": "E",
      "COUNTYCODE": "64000"
    }
  },
  {
    "properties": {
      "TOWNID": "H03",
      "TOWNCODE": "68000020",
      "COUNTYNAME": "桃園市",
      "TOWNNAME": "中壢區",
      "TOWNENG": "Zhongli District",
      "COUNTYID": "H",
      "COUNTYCODE": "68000"
    }
  },
  {
    "properties": {
      "TOWNID": "J11",
      "TOWNCODE": "10004100",
      "COUNTYNAME": "新竹縣",
      "TOWNNAME": "寶山鄉",
      "TOWNENG": "Baoshan Township",
      "COUNTYID": "J",
      "COUNTYCODE": "10004"
    }
  },
  {
    "properties": {
      "TOWNID": "O01",
      "TOWNCODE": "10018010",
      "COUNTYNAME": "新竹市",
      "TOWNNAME": "東區",
      "TOWNENG": "East District",
      "COUNTYID": "O",
      "COUNTYCODE": "10018"
    }
  },
  {
    "properties": {
      "TOWNID": "T04",
      "TOWNCODE": "10013040",
      "COUNTYNAME": "屏東縣",
      "TOWNNAME": "恆春鎮",
      "TOWNENG": "Hengchun Township",
      "COUNTYID": "T",
      "COUNTYCODE": "10013"
    }
  },
  {
    "properties": {
      "TOWNID": "B02",
      "TOWNCODE": "66000020",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "東區",
      "TOWNENG": "East District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "B27",
      "TOWNCODE": "66000270",
      "COUNTYNAME": "臺中市",
      "TOWNNAME": "太平區",
      "TOWNENG": "Taiping District",
      "COUNTYID": "B",
      "COUNTYCODE": "66000"
    }
  },
  {
    "properties": {
      "TOWNID": "U07",
      "TOWNCODE": "10015020",
      "COUNTYNAME": "花蓮縣",
      "TOWNNAME": "鳳林鎮",
      "TOWNENG": "Fenglin Township",
      "COUNTYID": "U",
      "COUNTYCODE": "10015"
    }
  },
  {
    "properties": {
      "TOWNID": "U12",
      "TOWNCODE": "10015120",
      "COUNTYNAME": "花蓮縣",
      "TOWNNAME": "萬榮鄉",
      "TOWNENG": "Wanrong Township",
      "COUNTYID": "U",
      "COUNTYCODE": "10015"
    }
  },
  {
    "properties": {
      "TOWNID": "H09",
      "TOWNCODE": "68000090",
      "COUNTYNAME": "桃園市",
      "TOWNNAME": "龍潭區",
      "TOWNENG": "Longtan District",
      "COUNTYID": "H",
      "COUNTYCODE": "68000"
    }
  },
  {
    "properties": {
      "TOWNID": "H10",
      "TOWNCODE": "68000100",
      "COUNTYNAME": "桃園市",
      "TOWNNAME": "平鎮區",
      "TOWNENG": "Pingzhen District",
      "COUNTYID": "H",
      "COUNTYCODE": "68000"
    }
  },
  {
    "properties": {
      "TOWNID": "A13",
      "TOWNCODE": "63000090",
      "COUNTYNAME": "臺北市",
      "TOWNNAME": "南港區",
      "TOWNENG": "Nangang District",
      "COUNTYID": "A",
      "COUNTYCODE": "63000"
    }
  },
  {
    "properties": {
      "TOWNID": "A14",
      "TOWNCODE": "63000100",
      "COUNTYNAME": "臺北市",
      "TOWNNAME": "內湖區",
      "TOWNENG": "Neihu District",
      "COUNTYID": "A",
      "COUNTYCODE": "63000"
    }
  }
];


export function getTownList(city: string) {
  console.log("🚀 ~ file: town.tsx:4058 ~ getTownList ~ city:", city)
  let data: string[] = [];

  townData.forEach(element => {
    if (element.properties.COUNTYNAME === city) {
      data.push(element.properties.TOWNNAME)
    }
  });
  console.log("🚀 ~ file: town.tsx:4059 ~ getTownList ~ data:", data)
  return data;

}