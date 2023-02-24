const calculateCurrentStat = (
  hp = false,
  level = 100,
  natureModifier = 1,
  baseStat = 0,
  iv = 0,
  ev = 0
) => {
  if (hp) {
    return ((2 * baseStat + iv + ev / 4) * level) / 100 + level + 10;
  } else {
    return (((2 * baseStat + iv + ev / 4) * level) / 100 + 5) * natureModifier;
  }
};
