const calculateCurrentStat = (
  hp = false,
  level = 1,
  baseStat = 0,
  iv = 0,
  ev = 0,
  currentStat = (hp = true ? 11 : 4),
  natureModifier = 1
) => {
  if (hp) {
    return (
      Math.floor(((2 * baseStat + iv + Math.floor(ev / 4)) * level) / 100) +
      level +
      10
    );
  } else {
    return Math.floor(
      (Math.floor(((2 * baseStat + iv + Math.floor(ev / 4)) * level) / 100) +
        5) *
        natureModifier
    );
  }
};

const calculateEv = (
  hp = false,
  level = 1,
  baseStat = 0,
  iv = 0,
  ev = 0,
  currentStat = (hp = true ? 11 : 4),
  natureModifier = 1
) => {
  if (hp) {
    return (((currentStat - level - 10) * 100) / level - iv - 2 * baseStat) * 4;
  } else {
    return (
      (((currentStat / natureModifier - 5) * 100) / level - iv - 2 * baseStat) *
      4
    );
  }
};

const calculateIv = (
  hp = false,
  level = 1,
  baseStat = 0,
  iv = 0,
  ev = 0,
  currentStat = (hp = true ? 11 : 4),
  natureModifier = 1
) => {
  if (hp) {
    return ((currentStat - level - 10) * 100) / level - 2 * baseStat - ev / 4;
  } else {
    return (
      ((currentStat / natureModifier - 5) * 100) / level - 2 * baseStat - ev / 4
    );
  }
};

export const calculateField = (calculateFieldType, ...args) => {
  return calculateCurrentStat(...args);
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
