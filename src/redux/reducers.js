import { combineReducers } from "redux";
import * as constants from "./constants";

// ************************************************************ initial states ************************************************************
const initialStateResetIndex = { resetIndex: 0 };
const initialStatePokemon = { pokemon: "pokemon" };
const initialStatePokemonSelector = { pokemonOptions: [] };
const initialStateLevel = { level: 1 };
const initialStateNature = { nature: "nature" };
const initialStateHp = {
  baseStat: 0,
  currentStat: 11,
  iv: 0,
  ivMax: 31,
  ev: 0,
  evMax: 252,
};

const initialStateAttack = {
  baseStat: 0,
  currentStat: 5,
  iv: 0,
  ivMax: 31,
  ev: 0,
  evMax: 252,
  natureModifier: 1,
};

const initialStateDefense = {
  baseStat: 0,
  currentStat: 5,
  iv: 0,
  ivMax: 31,
  ev: 0,
  evMax: 252,
  natureModifier: 1,
};

const initialStateSpecialAttack = {
  baseStat: 0,
  currentStat: 5,
  iv: 0,
  ivMax: 31,
  ev: 0,
  evMax: 252,
  natureModifier: 1,
};

const initialStateSpecialDefense = {
  baseStat: 0,
  currentStat: 5,
  iv: 0,
  ivMax: 31,
  ev: 0,
  evMax: 252,
  natureModifier: 1,
};

const initialStateSpeed = {
  baseStat: 0,
  currentStat: 5,
  iv: 0,
  ivMax: 31,
  ev: 0,
  evMax: 252,
  natureModifier: 1,
};

const initialStateFilterfields = {
  pokemonFilterfield: "",
  natureFilterfield: "",
};

// ************************************************************ reducers ************************************************************
const resetIndex = (state = initialStateResetIndex, action = {}) => {
  switch (action.type) {
    case constants.INCREMENT_RESET_INDEX:
      return { ...state, resetIndex: state.resetIndex + 1 };
    default:
      return state;
  }
};

const pokemon = (state = initialStatePokemon, action = {}) => {
  switch (action.type) {
    case constants.POKEMON_SET:
      return { ...state, pokemon: action.payload };
    case constants.POKEMON_RESET:
      return { ...state, ...initialStatePokemon };
    default:
      return state;
  }
};

const pokemonSelector = (state = initialStatePokemonSelector, action = {}) => {
  switch (action.type) {
    case constants.POPULATE_POKEMON_SELECTOR:
      return { ...state, pokemonOptions: action.payload };
    default:
      return state;
  }
};

const level = (state = initialStateLevel, action = {}) => {
  switch (action.type) {
    case constants.LEVEL_SET:
      return { ...state, level: action.payload };
    case constants.LEVEL_RESET:
      return { ...state, ...initialStateLevel };
    default:
      return state;
  }
};

const nature = (state = initialStateNature, action = {}) => {
  switch (action.type) {
    case constants.NATURE_SET:
      return { ...state, nature: action.payload };
    case constants.NATURE_RESET:
      return { ...state, ...initialStateNature };
    default:
      return state;
  }
};

const hp = (state = initialStateHp, action = {}) => {
  switch (action.type) {
    case constants.HP_BASE_STAT_SET:
      return { ...state, baseStat: action.payload };
    case constants.HP_CURRENT_STAT_SET:
      return { ...state, currentStat: action.payload };
    case constants.HP_IV_SET:
      return { ...state, iv: action.payload };
    case constants.HP_EV_SET:
      return { ...state, ev: action.payload };
    case constants.HP_IV_MAX_SET:
      return { ...state, ivMax: action.payload };
    case constants.HP_EV_MAX_SET:
      return { ...state, evMax: action.payload };
    case constants.HP_RESET:
      return { ...state, ...initialStateHp };
    default:
      return state;
  }
};

const attack = (state = initialStateAttack, action = {}) => {
  switch (action.type) {
    case constants.ATTACK_BASE_STAT_SET:
      return { ...state, baseStat: action.payload };
    case constants.ATTACK_CURRENT_STAT_SET:
      return { ...state, currentStat: action.payload };
    case constants.ATTACK_IV_SET:
      return { ...state, iv: action.payload };
    case constants.ATTACK_EV_SET:
      return { ...state, ev: action.payload };
    case constants.ATTACK_IV_MAX_SET:
      return { ...state, ivMax: action.payload };
    case constants.ATTACK_EV_MAX_SET:
      return { ...state, evMax: action.payload };
    case constants.ATTACK_NATURE_MODIFIER_SET:
      return { ...state, natureModifier: action.payload };
    case constants.ATTACK_RESET:
      return { ...state, ...initialStateAttack };
    default:
      return state;
  }
};

const defense = (state = initialStateDefense, action = {}) => {
  switch (action.type) {
    case constants.DEFENSE_BASE_STAT_SET:
      return { ...state, baseStat: action.payload };
    case constants.DEFENSE_CURRENT_STAT_SET:
      return { ...state, currentStat: action.payload };
    case constants.DEFENSE_IV_SET:
      return { ...state, iv: action.payload };
    case constants.DEFENSE_EV_SET:
      return { ...state, ev: action.payload };
    case constants.DEFENSE_IV_MAX_SET:
      return { ...state, ivMax: action.payload };
    case constants.DEFENSE_EV_MAX_SET:
      return { ...state, evMax: action.payload };
    case constants.DEFENSE_NATURE_MODIFIER_SET:
      return { ...state, natureModifier: action.payload };
    case constants.DEFENSE_RESET:
      return { ...state, ...initialStateDefense };
    default:
      return state;
  }
};

const specialAttack = (state = initialStateSpecialAttack, action = {}) => {
  switch (action.type) {
    case constants.SPECIAL_ATTACK_BASE_STAT_SET:
      return { ...state, baseStat: action.payload };
    case constants.SPECIAL_ATTACK_CURRENT_STAT_SET:
      return { ...state, currentStat: action.payload };
    case constants.SPECIAL_ATTACK_IV_SET:
      return { ...state, iv: action.payload };
    case constants.SPECIAL_ATTACK_EV_SET:
      return { ...state, ev: action.payload };
    case constants.SPECIAL_ATTACK_IV_MAX_SET:
      return { ...state, ivMax: action.payload };
    case constants.SPECIAL_ATTACK_EV_MAX_SET:
      return { ...state, evMax: action.payload };
    case constants.SPECIAL_ATTACK_NATURE_MODIFIER_SET:
      return { ...state, natureModifier: action.payload };
    case constants.SPECIAL_ATTACK_RESET:
      return { ...state, ...initialStateSpecialAttack };
    default:
      return state;
  }
};

const specialDefense = (state = initialStateSpecialDefense, action = {}) => {
  switch (action.type) {
    case constants.SPECIAL_DEFENSE_BASE_STAT_SET:
      return { ...state, baseStat: action.payload };
    case constants.SPECIAL_DEFENSE_CURRENT_STAT_SET:
      return { ...state, currentStat: action.payload };
    case constants.SPECIAL_DEFENSE_IV_SET:
      return { ...state, iv: action.payload };
    case constants.SPECIAL_DEFENSE_EV_SET:
      return { ...state, ev: action.payload };
    case constants.SPECIAL_DEFENSE_IV_MAX_SET:
      return { ...state, ivMax: action.payload };
    case constants.SPECIAL_DEFENSE_EV_MAX_SET:
      return { ...state, evMax: action.payload };
    case constants.SPECIAL_DEFENSE_NATURE_MODIFIER_SET:
      return { ...state, natureModifier: action.payload };
    case constants.SPECIAL_DEFENSE_RESET:
      return { ...state, ...initialStateSpecialDefense };
    default:
      return state;
  }
};

const speed = (state = initialStateSpeed, action = {}) => {
  switch (action.type) {
    case constants.SPEED_BASE_STAT_SET:
      return { ...state, baseStat: action.payload };
    case constants.SPEED_CURRENT_STAT_SET:
      return { ...state, currentStat: action.payload };
    case constants.SPEED_IV_SET:
      return { ...state, iv: action.payload };
    case constants.SPEED_EV_SET:
      return { ...state, ev: action.payload };
    case constants.SPEED_IV_MAX_SET:
      return { ...state, ivMax: action.payload };
    case constants.SPEED_EV_MAX_SET:
      return { ...state, evMax: action.payload };
    case constants.SPEED_NATURE_MODIFIER_SET:
      return { ...state, natureModifier: action.payload };
    case constants.SPEED_RESET:
      return { ...state, ...initialStateSpeed };
    default:
      return state;
  }
};

const filterfields = (state = initialStateFilterfields, action = {}) => {
  switch (action.type) {
    case constants.UPDATE_POKEMON_FILTERFIELD:
      return { ...state, pokemonFilterfield: action.payload };
    case constants.UPDATE_NATURE_FILTERFIELD:
      return { ...state, natureFilterfield: action.payload };
    case constants.RESET_FILTERFIELDS:
      return { ...state, ...initialStateFilterfields };
    default:
      return state;
  }
};

// ************************************************************ combine reducers ************************************************************
export const rootReducer = combineReducers({
  resetIndex,
  pokemon,
  pokemonSelector,
  level,
  nature,
  hp,
  attack,
  defense,
  specialAttack,
  specialDefense,
  speed,
  filterfields,
});
