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
    return {
      value:
      (Math.floor(((2 * baseStat + iv + Math.floor(ev / 4)) * level) / 100) + level + 10)
    };
  } else {
    // prettier-ignore
    return {
      value:
        Math.floor((Math.floor(((2 * baseStat + iv + Math.floor(ev / 4)) * level) / 100) + 5) * natureModifier)
    };
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
    return {
      value: (Math.ceil(((currentStat - level - 10) * 100) / level) - iv - 2 * baseStat) * 4,
      maxValue: (Math.ceil(((currentStat + 1 - level - 10) * 100) / level) - iv - 2 * baseStat) * 4 - 1
    }
    // return (Math.ceil(((currentStat - level - 10) * 100) / level) - iv - 2 * baseStat) * 4; // formula is correct for MINIMUM for current inputs
    // return (Math.ceil(((currentStat + 1 - level - 10) * 100) / level) - iv - 2 * baseStat) * 4 - 1; // formula is correct for MAXIMUM for current inputs
    // the first formula is a reversal of the currentStat formula
    // the second formula is the same, but doing so after incrementing the currentStat by 1, and then subtracting the whole thing by one to achieve the maximum evs for the currentStat
  } else {
    // prettier-ignore
    return {
      value: (Math.ceil(((Math.ceil(currentStat / natureModifier) - 5) * 100) / level) - iv - 2 * baseStat) * 4,
      maxValue: ((Math.ceil(((Math.ceil((currentStat + 1) / natureModifier) - 5) * 100) / level) - iv - 2 * baseStat) * 4) - 1
    }
    // return ((Math.ceil(((Math.ceil(currentStat / natureModifier) - 5) * 100) / level) - iv - 2 * baseStat) * 4); // formula is correct for MINIMUM for current inputs
    // return ((Math.ceil(((Math.ceil((currentStat + 1) / natureModifier) - 5) * 100) / level) - iv - 2 * baseStat) * 4) - 1; // formula is correct for MAXIMUM for current inputs
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
    return {
      value: Math.ceil(Math.ceil(((currentStat - level - 10) * 100) / level) - 2 * baseStat - ev / 4),
      maxValue: Math.ceil(Math.ceil(((currentStat + 1 - level - 10) * 100) / level) - 2 * baseStat - ev / 4) - 1
    }
    // return Math.ceil(Math.ceil(((currentStat - level - 10) * 100) / level) - 2 * baseStat - ev / 4); // formula is correct for MINIMUM for current inputs
    // return Math.ceil(Math.ceil(((currentStat + 1 - level - 10) * 100) / level) - 2 * baseStat - ev / 4) - 1; // formula is correct for MAXIMUM for current inputs
    // the first formula is a reversal of the currentStat formula
    // the second formula is the same, but doing so after incrementing the currentStat by 1, and then subtracting the whole thing by one to achieve the maximum evs for the currentStat
  } else {
    // prettier-ignore
    return {
      value: Math.ceil(((Math.ceil(currentStat / natureModifier) - 5) * 100) / level - 2 * baseStat - ev / 4),
      maxValue: Math.ceil(((Math.ceil(Math.ceil(currentStat + 1) / natureModifier) - 5) * 100) / level - 2 * baseStat - ev / 4) - 1,
    }
    // return Math.ceil(((Math.ceil(currentStat / natureModifier) - 5) * 100) / level - 2 * baseStat - ev / 4); // formula is correct for MINIMUM for current inputs
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

const convertKebabToCamelCase = (string) => {
  if (!string) {
    return;
  }
  let newString = string[0];
  for (let i = 1; i < string.length; i++) {
    if (string.charCodeAt(i - 1) === 45) {
      newString = newString.concat(string[i].toUpperCase());
    } else if (string.charCodeAt(i) !== 45) {
      newString = newString.concat(string[i]);
    }
  }
  return newString;
};

export const setExtremeValue = (valuesObject, fieldType, statName) => {
  return Number.isInteger(valuesObject[fieldType])
    ? valuesObject[fieldType]
    : valuesObject[fieldType][statName];
  // the MAX_VALUE and MIN_VALUE objects go one level deeper for currentStat and baseStat than they do for level, iv, and ev
};

export const cleanPokemonName = (name) => {
  switch (name) {
    case "mr-mime":
      return "Mr. Mime";
    case "mime-jr":
      return "Mime Jr.";
    case "mr-rime":
      return "Mr. Rime";
    case "tapu-lele":
      return "Tapu Lele";
    case "tapu-bulu":
      return "Tapu Bulu";
    case "tapu-fini":
      return "Tapu Fini";
    case "tapu-koko":
      return "Tapu Koko";
    case "type-null":
      return "Type: Null";
    case "porygon-z":
      return "Porygon-Z";
    case "ho-oh":
      return "Ho-Oh";
    case "nidoran-f":
      return "Nidoran-F";
    case "nidoran-m":
      return "Nidoran-M";
    case "flabebe":
      return "Flabébé";
    case "sirfetchd":
      return "Sirfetch'd";
    case "farfetchd":
      return "Farfetch'd";
    case "great-tusk":
      return "Great Tusk";
    case "scream-tail":
      return "Scream Tail";
    case "brute-bonnet":
      return "Brute Bonnet";
    case "flutter-mane":
      return "Flutter Mane";
    case "slither-wing":
      return "Slither Wing";
    case "sandy-shocks":
      return "Sandy Shocks";
    case "iron-treads":
      return "Iron Treads";
    case "iron-bundle":
      return "Iron Bundle";
    case "iron-hands":
      return "Iron Hands";
    case "iron-jugulis":
      return "Iron Jugulis";
    case "iron-moth":
      return "Iron Moth";
    case "iron-thorns":
      return "Iron Thorns";
    case "roaring-moon":
      return "Roaring Moon";
    case "iron-valiant":
      return "Iron Valiant";
    case "walking-wake":
      return "Walking Wake";
    case "iron-leaves":
      return "Iron Leaves";
    case "wo-chien":
      return "Wo-Chien";
    case "chien-pao":
      return "Chien-Pao";
    case "ting-lu":
      return "Ting-Lu";
    case "chi-yu":
      return "Chi-Yu";
    default:
      return name.charAt(0).toUpperCase() + name.slice(1);
  }
};

export const stringDexNumber = (number) => {
  const string = number.toString();
  switch (string.length) {
    case 1:
      return `000${string}`;
    case 2:
      return `00${string}`;
    case 3:
      return `0${string}`;
    default:
      return string;
  }
};

export const fetchPokemonBaseStats = (url) =>
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const baseStats = {};
      data.stats.forEach((stat) => {
        baseStats[convertKebabToCamelCase(stat.stat.name)] = stat.base_stat;
      });
      return baseStats;
    });
