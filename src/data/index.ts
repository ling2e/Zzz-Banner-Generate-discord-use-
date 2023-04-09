// importing iamge
import Images from "../assets/images";

interface CharacterInfoObject {
  [key: number]: {
    name: string;
    CnName: string;
    CnCategory: string;
    EnCategory: string;
    image: string;
    CategoryImage: string;
    color: string;
  };
}

const CharacterInfo: CharacterInfoObject = {
  1: {
    name: "Nicole Demara",
    CnName: "妮可▪德玛拉",
    CnCategory: "狡兔屋",
    EnCategory: "Gentle House AKA Cunning Hares",
    image: Images.character.NicoleDemara,
    CategoryImage: Images.category.GentleHouseAKACunningHares,
    color: "#f5bfbd",
  },
  2: {
    name: "Anby Demara",
    CnName: "安比▪德玛拉",
    CnCategory: "狡兔屋",
    EnCategory: "Gentle House AKA Cunning Hares",
    image: Images.character.AnbyDemara,
    CategoryImage: Images.category.GentleHouseAKACunningHares,
    color: "#d0e974",
  },
  3: {
    name: "Nekomiya Mana",
    CnName: "猫宫又奈",
    CnCategory: "狡兔屋",
    EnCategory: "Gentle House AKA Cunning Hares",
    image: Images.character.NekomiyaMana,
    CategoryImage: Images.category.GentleHouseAKACunningHares,
    color: "#c84f30",
  },
  4: {
    name: "Billy Kid",
    CnName: "比利▪奇德",
    CnCategory: "狡兔屋",
    EnCategory: "Gentle House AKA Cunning Hares",
    image: Images.character.BillyKid,
    CategoryImage: Images.category.GentleHouseAKACunningHares,
    color: "#cf443f",
  },

  5: {
    name: "Soldier 11",
    CnName: "11号",
    CnCategory: "阵营不明",
    EnCategory: "Faction Unknow",
    image: Images.character.Soldier11,
    CategoryImage: Images.category.FactionUnknow,
    color: "#ffbb2a",
  },

  6: {
    name: "Corin Wickes",
    CnName: "可琳▪威克斯",
    CnCategory: "维多利亚家政",
    EnCategory: "Victoria Housekeeping Co.",
    image: Images.character.CorinWickes,
    CategoryImage: Images.category.VictoriaHousekeepingCo,
    color: "#c8d7bd",
  },
  7: {
    name: "Von Lycaon",
    CnName: "冯▪莱卡恩",
    CnCategory: "维多利亚家政",
    EnCategory: "Victoria Housekeeping Co.",
    image: Images.character.VonLycaon,
    CategoryImage: Images.category.VictoriaHousekeepingCo,
    color: "#d0d3e0",
  },

  8: {
    name: "Ben Bigger",
    CnName: "本·比格",
    CnCategory: "白祇重工",
    EnCategory: "Belobog Heavy Industries",
    image: Images.character.BenBigger,
    CategoryImage: Images.category.BelobogHeavyIndustries,
    color: "#a68d73",
  },
  9: {
    name: "Koleda Belobog",
    CnName: "珂蕾妲·贝洛伯格",
    CnCategory: "白祇重工",
    EnCategory: "Belobog Heavy Industries",
    image: Images.character.KoledaBelobog,
    CategoryImage: Images.category.BelobogHeavyIndustries,
    color: "#e94f13",
  },
  10: {
    name: "Anton Invanov",
    CnName: "安东·伊万诺夫",
    CnCategory: "白祇重工",
    EnCategory: "Belobog Heavy Industries",
    image: Images.character.AntonInvanov,
    CategoryImage: Images.category.BelobogHeavyIndustries,
    color: "#d7be71",
  },

  11: {
    name: "Hoshimi Miyabi",
    CnName: "星见雅",
    CnCategory: "H.S.O.S.6",
    EnCategory: "Section 6",
    image: Images.character.HoshimiMiyabi,
    CategoryImage: Images.category.Section6,
    color: "#4ba3ad",
  },
  12: {
    name: "Soukaku",
    CnName: "苍角",
    CnCategory: "H.S.O.S.6",
    EnCategory: "Section 6",
    image: Images.character.Soukaku,
    CategoryImage: Images.category.Section6,
    color: "#6ea0d9",
  },
};

export default CharacterInfo;
