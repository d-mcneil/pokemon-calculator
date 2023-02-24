import { batch } from "react-redux";
import * as constants from "./constants";
import { calculateCurrentStat, convertStringToConstantSyntax as constant } from "../functions";

const baseStatReset = () => ({ type: constants.BASE_STAT_RESET });
const currentStatReset = () => ({ type: constants.CURRENT_STAT_RESET });
const ivReset = () => ({ type: constants.IV_RESET });
const evReset = () => ({ type: constants.EV_RESET });

export const updateCalculatorField = (
  fieldType, // baseStat, currentStat, iv, ev, level, natureModifier
  statLabel, // hp, attack, defense, specialAttack, specialDefense, speed, level
  payload
) => {
  const type =
    fieldType === "level"
      ? "LEVEL"
      : `${constant(fieldType)}_${constant(statLabel)}`;
  return {
    type,
    payload,
  };
};

const calculateStat = () => {
    return {calculateCurrentStat()}
}

const resetCalculator = () => (dispatch) =>
  batch(() => {
    dispatch(baseStatReset());
    dispatch(currentStatReset());
    dispatch(ivReset());
    dispatch(evReset());
  });
