import { batch } from "react-redux";
// import * as reduxConstants from "./constants";
import { convertStringToConstantSyntax as constant } from "../functions";
import { STAT_NAME, FIELD_TYPE, SELECTOR_TYPE } from "../constantsNonRedux";

export const updateCalculatorField = (
  payload,
  fieldType, // baseStat, currentStat, iv, ev, natureModifier, level, nature, pokemon
  statName = "" // hp, attack, defense, specialAttack, specialDefense, speed
) => ({
  type: statName
    ? `${constant(statName)}_${constant(fieldType)}_SET`
    : `${constant(fieldType)}_SET`,
  payload: Number(payload),
});

export const updateNatureModifiers = (payload) => (dispatch) => {
  batch(() => {
    Object.keys(STAT_NAME)
      .slice(1) // slicing because hp is not affected by nature and it is the first item in the array
      .map((statName) =>
        dispatch(
          updateCalculatorField(
            payload[statName],
            SELECTOR_TYPE.natureModifier,
            STAT_NAME[statName]
          )
        )
      );
  });
};

export const resetCalculator = () => (dispatch) => {
  const resetCalculatorField = (fieldTypeOrStatName) => ({
    type: `${constant(fieldTypeOrStatName)}_RESET`,
  });
  const { nature, pokemon } = SELECTOR_TYPE;
  batch(() =>
    Object.keys(STAT_NAME)
      .concat([nature, pokemon, FIELD_TYPE.level])
      .map((fieldTypeOrStatName) =>
        dispatch(resetCalculatorField(fieldTypeOrStatName))
      )
  );
};
