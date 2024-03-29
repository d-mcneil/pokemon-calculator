export const STAT_NAME = {
  hp: "hp",
  attack: "attack",
  defense: "defense",
  specialAttack: "specialAttack",
  specialDefense: "specialDefense",
  speed: "speed",
};

export const STAT_NAME_SHORT = {
  hp: "hp",
  attack: "atk",
  defense: "def",
  specialAttack: "spA",
  specialDefense: "spD",
  speed: "spe",
};

export const FIELD_TYPE = {
  level: "level",
  iv: "iv",
  ev: "ev",
  baseStat: "baseStat",
  currentStat: "currentStat",
};

export const SELECTOR_TYPE = {
  natureModifier: "natureModifier",
  nature: "nature",
  pokemon: "pokemon",
};

export const MAX_VALUE = {
  level: 100,
  baseStat: {
    hp: 255,
    attack: 190,
    defense: 230,
    specialAttack: 194,
    specialDefense: 230,
    speed: 200,
  },
  currentStat: {
    hp: 714,
    attack: 526,
    defense: 614,
    specialAttack: 535,
    specialDefense: 614,
    speed: 548,
  },
  iv: 31,
  ev: 252,
  dexNumber: 1010,
};

export const MIN_VALUE = {
  level: 1,
  baseStat: {
    hp: 0,
    attack: 0,
    defense: 0,
    specialAttack: 0,
    specialDefense: 0,
    speed: 0,
  },
  currentStat: {
    hp: 11,
    attack: 4,
    defense: 4,
    specialAttack: 4,
    specialDefense: 4,
    speed: 4,
  },
  iv: 0,
  ev: 0,
};

export const NATURE = [
  //  ********************************************** raise attack **************************************************
  {
    name: "lonely",
    attack: 1.1,
    defense: 0.9,
    specialAttack: 1,
    specialDefense: 1,
    speed: 1,
    increases: "attack",
    decreases: "defense",
  },
  {
    name: "adamant",
    attack: 1.1,
    defense: 1,
    specialAttack: 0.9,
    specialDefense: 1,
    speed: 1,
    increases: "attack",
    decreases: "specialAttack",
  },
  {
    name: "naughty",
    attack: 1.1,
    defense: 1,
    specialAttack: 1,
    specialDefense: 0.9,
    speed: 1,
    increases: "attack",
    decreases: "specialDefense",
  },
  {
    name: "brave",
    attack: 1.1,
    defense: 1,
    specialAttack: 1,
    specialDefense: 1,
    speed: 0.9,
    increases: "attack",
    decreases: "speed",
  },
  //  ********************************************** raise defense **************************************************
  {
    name: "bold",
    attack: 0.9,
    defense: 1.1,
    specialAttack: 1,
    specialDefense: 1,
    speed: 1,
    increases: "defense",
    decreases: "attack",
  },
  {
    name: "impish",
    attack: 1,
    defense: 1.1,
    specialAttack: 0.9,
    specialDefense: 1,
    speed: 1,
    increases: "defense",
    decreases: "specialAttack",
  },
  {
    name: "lax",
    attack: 1,
    defense: 1.1,
    specialAttack: 1,
    specialDefense: 0.9,
    speed: 1,
    increases: "defense",
    decreases: "specialDefense",
  },
  {
    name: "relaxed",
    attack: 1,
    defense: 1.1,
    specialAttack: 1,
    specialDefense: 1,
    speed: 0.9,
    increases: "defense",
    decreases: "speed",
  },
  //  ********************************************** raise specialAttack **************************************************
  {
    name: "modest",
    attack: 0.9,
    defense: 1,
    specialAttack: 1.1,
    specialDefense: 1,
    speed: 1,
    increases: "specialAttack",
    decreases: "attack",
  },
  {
    name: "mild",
    attack: 1,
    defense: 0.9,
    specialAttack: 1.1,
    specialDefense: 1,
    speed: 1,
    increases: "specialAttack",
    decreases: "defense",
  },
  {
    name: "rash",
    attack: 1,
    defense: 1,
    specialAttack: 1.1,
    specialDefense: 0.9,
    speed: 1,
    increases: "specialAttack",
    decreases: "specialDefense",
  },
  {
    name: "quiet",
    attack: 1,
    defense: 1,
    specialAttack: 1.1,
    specialDefense: 1,
    speed: 0.9,
    increases: "specialAttack",
    decreases: "speed",
  },

  //  ********************************************** raise specialDefense **************************************************
  {
    name: "calm",
    attack: 0.9,
    defense: 1,
    specialAttack: 1,
    specialDefense: 1.1,
    speed: 1,
    increases: "specialDefense",
    decreases: "attack",
  },
  {
    name: "gentle",
    attack: 1,
    defense: 0.9,
    specialAttack: 1,
    specialDefense: 1.1,
    speed: 1,
    increases: "specialDefense",
    decreases: "defense",
  },
  {
    name: "careful",
    attack: 1,
    defense: 1,
    specialAttack: 0.9,
    specialDefense: 1.1,
    speed: 1,
    increases: "specialDefense",
    decreases: "specialAttack",
  },

  {
    name: "sassy",
    attack: 1,
    defense: 1,
    specialAttack: 1,
    specialDefense: 1.1,
    speed: 0.9,
    increases: "specialDefense",
    decreases: "speed",
  },
  //  ********************************************** raise speed **************************************************
  {
    name: "timid",
    attack: 0.9,
    defense: 1,
    specialAttack: 1,
    specialDefense: 1,
    speed: 1.1,
    increases: "speed",
    decreases: "attack",
  },
  {
    name: "hasty",
    attack: 1,
    defense: 0.9,
    specialAttack: 1,
    specialDefense: 1,
    speed: 1.1,
    increases: "speed",
    decreases: "defense",
  },
  {
    name: "jolly",
    attack: 1,
    defense: 1,
    specialAttack: 0.9,
    specialDefense: 1,
    speed: 1.1,
    increases: "speed",
    decreases: "specialAttack",
  },
  {
    name: "naive",
    attack: 1,
    defense: 1,
    specialAttack: 1,
    specialDefense: 0.9,
    speed: 1.1,
    increases: "speed",
    decreases: "specialDefense",
  },
  //  ********************************************** neutral **************************************************
  {
    name: "bashful",
    attack: 1,
    defense: 1,
    specialAttack: 1,
    specialDefense: 1,
    speed: 1,
  },
  {
    name: "docile",
    attack: 1,
    defense: 1,
    specialAttack: 1,
    specialDefense: 1,
    speed: 1,
  },
  {
    name: "hardy",
    attack: 1,
    defense: 1,
    specialAttack: 1,
    specialDefense: 1,
    speed: 1,
  },
  {
    name: "quirky",
    attack: 1,
    defense: 1,
    specialAttack: 1,
    specialDefense: 1,
    speed: 1,
  },
  {
    name: "serious",
    attack: 1,
    defense: 1,
    specialAttack: 1,
    specialDefense: 1,
    speed: 1,
  },
];
