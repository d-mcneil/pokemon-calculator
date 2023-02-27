import { FIELD_TYPE } from "./constantsNonRedux";

const calculateCurrentStat = (
  hp = false,
  level = 1,
  baseStat = 0,
  iv = 0,
  ev = 0,
  currentStat = (hp = true ? 11 : 4), // not used, but included because calculateField calls one of 3 functions, and they all need to have the same argument structure
  natureModifier = 1
) => {
  if (hp) {
    // prettier-ignore
    return (Math.floor(((2 * baseStat + iv + Math.floor(ev / 4)) * level) / 100) + level + 10);
  } else {
    // prettier-ignore
    return Math.floor((Math.floor(((2 * baseStat + iv + Math.floor(ev / 4)) * level) / 100) + 5) * natureModifier);
  }
};

const calculateEv = (
  hp = false,
  level = 1,
  baseStat = 0,
  iv = 0,
  ev = 0, // not used, but included because calculateField calls one of 3 functions, and they all need to have the same argument structure
  currentStat = (hp = true ? 11 : 4),
  natureModifier = 1
) => {
  if (hp) {
    // prettier-ignore
    // return (Math.ceil(((currentStat - level - 10) * 100) / level) - iv - 2 * baseStat) * 4; // formula is correct for MINIMUM for current inputs
    return (Math.ceil(((currentStat + 1 - level - 10) * 100) / level) - iv - 2 * baseStat) * 4 - 1; // formula is correct for MAXIMUM for current inputs
    // the first formula is a reversal of the currentStat formula
    // the second formula is the same, but doing so after incrementing the currentStat by 1, and then subtracting the whole thing by one to achieve the maximum evs for the currentStat
  } else {
    // prettier-ignore
    // return ((Math.ceil(((Math.ceil(currentStat / natureModifier) - 5) * 100) / level) - iv - 2 * baseStat) * 4); // formula is correct for MINIMUM for current inputs
    return ((Math.ceil(((Math.ceil((currentStat + 1) / natureModifier) - 5) * 100) / level) - iv - 2 * baseStat) * 4) - 1; // formula is correct for MAXIMUM for current inputs
    // the first formula is a reversal of the currentStat formula
    // the second formula is the same, but doing so after incrementing the currentStat by 1, and then subtracting the whole thing by one to achieve the maximum evs for the currentStat
  }
};

const calculateIv = (
  hp = false,
  level = 1,
  baseStat = 0,
  iv = 0, // not used, but included because calculateField calls one of 3 functions, and they all need to have the same argument structure
  ev = 0,
  currentStat = (hp = true ? 11 : 4),
  natureModifier = 1
) => {
  if (hp) {
    // prettier-ignore
    return Math.ceil(Math.ceil(((currentStat - level - 10) * 100) / level) - 2 * baseStat - ev / 4); // formula is correct for MINIMUM for current inputs
    // return Math.ceil(Math.ceil(((currentStat + 1 - level - 10) * 100) / level) - 2 * baseStat - ev / 4) - 1; // formula is correct for MAXIMUM for current inputs
    // the first formula is a reversal of the currentStat formula
    // the second formula is the same, but doing so after incrementing the currentStat by 1, and then subtracting the whole thing by one to achieve the maximum evs for the currentStat
  } else {
    // prettier-ignore
    return Math.ceil(((Math.ceil(currentStat / natureModifier) - 5) * 100) / level - 2 * baseStat - ev / 4); // formula is correct for MINIMUM for current inputs
    // return Math.ceil(((Math.ceil(Math.ceil(currentStat + 1) / natureModifier) - 5) * 100) / level - 2 * baseStat - ev / 4) - 1; // formula is correct for MAXIMUM for current inputs
    // the first formula is a reversal of the currentStat formula
    // the second formula is the same, but doing so after incrementing the currentStat by 1, and then subtracting the whole thing by one to achieve the maximum evs for the currentStat
  }
};

export const calculateField = (calculatedFieldType, ...args) => {
  if (calculatedFieldType === FIELD_TYPE.ev) {
    return calculateEv(...args);
  } else if (calculatedFieldType === FIELD_TYPE.iv) {
    return calculateIv(...args);
  } else {
    return calculateCurrentStat(...args);
  }
};

export const convertStringToConstantSyntax = (string) => {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      newString = newString.concat("_", string[i]);
    } else {
      newString = newString.concat(string[i].toUpperCase());
    }
  }
  return newString;
};

export const convertStringToLabel = (string) => {
  if (!string) {
    return;
  }
  if (string.length === 2) {
    return string.toUpperCase();
  }
  let newString = string[0].toUpperCase();
  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      newString = newString.concat(" ", string[i]);
    } else {
      newString = newString.concat(string[i]);
    }
  }
  return newString;
};
