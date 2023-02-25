import { batch } from "react-redux";
// import * as reduxConstants from "./constants";
import {
  calculateCurrentStat,
  convertStringToConstantSyntax as constant,
} from "../functions";
import { STAT_NAME, FIELD_TYPE } from "../constantsNonRedux";

// const pokemonReset = () => ({ type: reduxConstants.POKEMON_RESET });
// const levelReset = () => ({ type: reduxConstants.LEVEL_RESET });
// const natureReset = () => ({ type: reduxConstants.NATURE_RESET });
// const hpReset = () => ({ type: reduxConstants.HP_RESET });
// const attackReset = () => ({ type: reduxConstants.ATTACK_RESET });
// const defenseReset = () => ({ type: reduxConstants.DEFENSE_RESET });
// const specialAttackReset = () => ({
//   type: reduxConstants.SPECIAL_ATTACK_RESET,
// });
// const specialDefenseReset = () => ({
//   type: reduxConstants.SPECIAL_DEFENSE_RESET,
// });
// const speedReset = () => ({ type: reduxConstants.SPEED_RESET });

const resetCalculatorField = (fieldTypeOrStatName) => ({
  type: `${constant(fieldTypeOrStatName)}_RESET`,
});

export const updateCalculatorField = (
  payload,
  fieldType, // baseStat, currentStat, iv, ev, natureModifier, level, nature, pokemon
  statName = "" // hp, attack, defense, specialAttack, specialDefense, speed
) => ({
  type: statName
    ? `${constant(statName)}_${constant(fieldType)}_SET`
    : `${constant(fieldType)}_SET`,
  payload,
});

const resetCalculator = () => (dispatch) => {
  const { hp, attack, defense, specialAttack, specialDefense, speed } =
    STAT_NAME;
  const { level, nature, pokemon } = FIELD_TYPE;
  const fieldTypeOrStatNameArray = [
    hp,
    attack,
    defense,
    specialAttack,
    specialDefense,
    speed,
    level,
    nature,
    pokemon,
  ];
  batch(() =>
    fieldTypeOrStatNameArray.map((fieldTypeOrStatName) =>
      dispatch(resetCalculatorField(fieldTypeOrStatName))
    )
  );
};
