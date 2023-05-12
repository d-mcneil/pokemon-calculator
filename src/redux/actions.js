import { batch } from "react-redux";
import * as reduxConstants from "./constants";
import { convertStringToConstantSyntax as constant } from "../functions";
import {
  STAT_NAME,
  FIELD_TYPE,
  SELECTOR_TYPE,
  MAX_VALUE,
} from "../constantsNonRedux";
import { MIN_VALUE } from "../constantsNonRedux";

export const updateCalculatorField = (
  payload,
  fieldTypeOrSelectorType, // baseStat, currentStat, iv, ev, natureModifier, level, nature, pokemon
  statName = "" // hp, attack, defense, specialAttack, specialDefense, speed
) => ({
  type: statName
    ? `${constant(statName)}_${constant(fieldTypeOrSelectorType)}_SET`
    : `${constant(fieldTypeOrSelectorType)}_SET`,
  payload,
});

export const updateNature =
  (natureModifierPayload, natureValue) => (dispatch) => {
    batch(() => {
      Object.keys(STAT_NAME)
        .slice(1) // slicing because hp is not affected by nature and it is the first item in the array
        .map((statName) =>
          dispatch(
            updateCalculatorField(
              natureModifierPayload[statName],
              SELECTOR_TYPE.natureModifier,
              STAT_NAME[statName]
            )
          )
        );
      dispatch(updateCalculatorField(natureValue, SELECTOR_TYPE.nature));
    });
  };

export const resetCalculator = () => (dispatch) => {
  const resetCalculatorField = (fieldTypeOrStatName) => ({
    type: `${constant(fieldTypeOrStatName)}_RESET`,
  });

  const incrementResetIndex = () => ({
    type: reduxConstants.INCREMENT_RESET_INDEX,
  });

  const { nature, pokemon } = SELECTOR_TYPE;
  batch(() => {
    Object.keys(STAT_NAME)
      .concat([nature, pokemon, FIELD_TYPE.level])
      .map((fieldTypeOrStatName) =>
        dispatch(resetCalculatorField(fieldTypeOrStatName))
      );
    dispatch(incrementResetIndex());
  });
};

export const setPokemonBaseStats = (pokemonName, baseStats) => (dispatch) => {
  batch(() => {
    Object.keys(STAT_NAME).map((statName) =>
      dispatch(
        updateCalculatorField(
          baseStats[statName],
          FIELD_TYPE.baseStat,
          statName
        )
      )
    );
    dispatch(updateCalculatorField(pokemonName, SELECTOR_TYPE.pokemon));
  });
};

export const populatePokemonSelector = (pokemonArray) => ({
  type: reduxConstants.POPULATE_POKEMON_SELECTOR,
  payload: pokemonArray,
});

export const maxIv =
  ({ attack = true, speed = true }) =>
  (dispatch) => {
    batch(() => {
      Object.keys(STAT_NAME).forEach((statName) => {
        let payload;

        if (
          (statName === STAT_NAME.attack && !attack) ||
          (statName === STAT_NAME.speed && !speed)
        ) {
          payload = MIN_VALUE.iv;
          dispatch(updateCalculatorField(payload, FIELD_TYPE.iv, statName));
        } else {
          payload = MAX_VALUE.iv;
          dispatch(updateCalculatorField(payload, FIELD_TYPE.iv, statName));
        }

        document.getElementById(
          `calculator-field-${FIELD_TYPE.iv}-${statName}`
        ).value = payload;
      });
    });
  };
