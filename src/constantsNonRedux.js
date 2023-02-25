export const STAT_NAME = {
  hp: "hp",
  attack: "attack",
  defense: "defense",
  specialAttack: "specialAttack",
  specialDefense: "specialDefense",
  speed: "speed",
};

export const FIELD_TYPE = {
  level: "level",
  iv: "iv",
  ev: "ev",
  baseStat: "baseStat",
  currentStat: "currentStat",
  natureModifier: "natureModifier",
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
    hp: 1,
    attack: 4,
    defense: 4,
    specialAttack: 4,
    specialDefense: 4,
    speed: 4,
  },
  iv: 0,
  ev: 0,
};
