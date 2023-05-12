import { useEffect } from "react";
import { calculateField } from "./functions";

export const useCalculateField = (
  stat,
  level,
  fieldType,
  statName,
  fieldTypeArray,
  actionCallback,
  calculatingHp = false
) => {
  const dependencyArray = [
    level,
    stat[`${fieldTypeArray[0]}`],
    stat[`${fieldTypeArray[1]}`],
    stat[`${fieldTypeArray[2]}`],
    fieldType,
  ];
  if (!calculatingHp) {
    dependencyArray.push(stat.natureModifier);
  }
  return useEffect(() => {
    const result = calculateField(
      fieldType,
      calculatingHp,
      level,
      stat.baseStat,
      stat.iv,
      stat.ev,
      stat.currentStat,
      calculatingHp ? 1 : stat.natureModifier
    );
    actionCallback(result.value, fieldType, statName);
    if (result.maxValue || result.maxValue === 0) {
      actionCallback(result.maxValue, `${fieldType}Max`, statName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencyArray]);
};

// what was in Calculator.container.jsx before pulling the hook into this file and
// combining the calculating hp with the other calculation hook:
//
// const dependencyArrayHp = [
//   level,
//   hp[`${fieldTypeArray[0]}`],
//   hp[`${fieldTypeArray[1]}`],
//   hp[`${fieldTypeArray[2]}`],
//   calculatedFieldType,
// ];
// // recalculate hp... hp is not affected by nature, so forumla is different
// useEffect(() => {
//   const result = calculateField(
//     calculatedFieldType,
//     true,
//     level,
//     hp.baseStat,
//     hp.iv,
//     hp.ev,
//     hp.currentStat
//   );
//   handleUpdateCalculatorField(
//     result.value,
//     calculatedFieldType,
//     STAT_NAME.hp
//   );
//   if (result.maxValue || result.maxValue === 0) {
//     handleUpdateCalculatorField(
//       result.maxValue,
//       `${calculatedFieldType}Max`,
//       STAT_NAME.hp
//     );
//   }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [...dependencyArrayHp]);
// // custom hook
// const useCalculateField = (stat, level, fieldType, statName) => {
//   const dependencyArray = [
//     level,
//     stat[`${fieldTypeArray[0]}`],
//     stat[`${fieldTypeArray[1]}`],
//     stat[`${fieldTypeArray[2]}`],
//     stat.natureModifier,
//     fieldType,
//   ];
//   return useEffect(() => {
//     const result = calculateField(
//       calculatedFieldType,
//       false,
//       level,
//       stat.baseStat,
//       stat.iv,
//       stat.ev,
//       stat.currentStat,
//       stat.natureModifier
//     );
//     handleUpdateCalculatorField(result.value, fieldType, statName);
//     if (result.maxValue || result.maxValue === 0) {
//       handleUpdateCalculatorField(
//         result.maxValue,
//         `${fieldType}Max`,
//         statName
//       );
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [...dependencyArray]);
// };
// recalculate other stats using custom hook
