import { combineReducers } from "redux";
import * as constants from "./constants";

// ************************************************************ initial states ************************************************************

const initialStateBaseStat = {
  hp: 0,
  attack: 0,
  defense: 0,
  specialAttack: 0,
  specialDefense: 0,
  speed: 0,
};
const initialStateCurrentStat = {
  hp: 11,
  attack: 4,
  defense: 4,
  specialAttack: 4,
  specialDefense: 4,
  speed: 4,
};
const initialStateIv = {
  hp: 0,
  attack: 0,
  defense: 0,
  specialAttack: 0,
  specialDefense: 0,
  speed: 0,
};
const initialStateEv = {
  hp: 0,
  attack: 0,
  defense: 0,
  specialAttack: 0,
  specialDefense: 0,
  speed: 0,
};

// ************************************************************ reducers ************************************************************
const baseStat = (state = initialStateBaseStat, action = {}) => {
  switch (action.type) {
    case constants.BASE_STAT_HP:
      return { ...state, hp: action.payload };
    case constants.BASE_STAT_ATTACK:
      return { ...state, attack: action.payload };
    case constants.BASE_STAT_DEFENSE:
      return { ...state, defense: action.payload };
    case constants.BASE_STAT_SPECIAL_ATTACK:
      return { ...state, specialAttack: action.payload };
    case constants.BASE_STAT_SPECIAL_DEFENSE:
      return { ...state, specialDefense: action.payload };
    case constants.BASE_STAT_SPEED:
      return { ...state, speed: action.payload };
    case constants.BASE_STAT_SET:
      return { ...state, ...action.payload };
    case constants.BASE_STAT_RESET:
      return { ...state, ...initialStateBaseStat };
    default:
      return state;
  }
};
const currentStat = (state = initialStateCurrentStat, action = {}) => {
  switch (action.type) {
    case constants.CURRENT_STAT_HP:
      return { ...state, hp: action.payload };
    case constants.CURRENT_STAT_ATTACK:
      return { ...state, attack: action.payload };
    case constants.CURRENT_STAT_DEFENSE:
      return { ...state, defense: action.payload };
    case constants.CURRENT_STAT_SPECIAL_ATTACK:
      return { ...state, specialAttack: action.payload };
    case constants.CURRENT_STAT_SPECIAL_DEFENSE:
      return { ...state, specialDefense: action.payload };
    case constants.CURRENT_STAT_SPEED:
      return { ...state, speed: action.payload };
    case constants.CURRENT_STAT_SET:
      return { ...state, ...action.payload };
    case constants.CURRENT_STAT_RESET:
      return { ...state, ...initialStateCurrentStat };
    default:
      return state;
  }
};
const iv = (state = initialStateIv, action = {}) => {
  switch (action.type) {
    case constants.IV_HP:
      return { ...state, hp: action.payload };
    case constants.IV_ATTACK:
      return { ...state, attack: action.payload };
    case constants.IV_DEFENSE:
      return { ...state, defense: action.payload };
    case constants.IV_SPECIAL_ATTACK:
      return { ...state, specialAttack: action.payload };
    case constants.IV_SPECIAL_DEFENSE:
      return { ...state, specialDefense: action.payload };
    case constants.IV_SPEED:
      return { ...state, speed: action.payload };
    case constants.IV_SET:
      return { ...state, ...action.payload };
    case constants.IV_RESET:
      return { ...state, ...initialStateIv };
    default:
      return state;
  }
};
const ev = (state = initialStateEv, action = {}) => {
  switch (action.type) {
    case constants.EV_HP:
      return { ...state, hp: action.payload };
    case constants.EV_ATTACK:
      return { ...state, attack: action.payload };
    case constants.EV_DEFENSE:
      return { ...state, defense: action.payload };
    case constants.EV_SPECIAL_ATTACK:
      return { ...state, specialAttack: action.payload };
    case constants.EV_SPECIAL_DEFENSE:
      return { ...state, specialDefense: action.payload };
    case constants.EV_SPEED:
      return { ...state, speed: action.payload };
    case constants.EV_SET:
      return { ...state, ...action.payload };
    case constants.EV_RESET:
      return { ...state, ...initialStateEv };
    default:
      return state;
  }
};
// ************************************************************ combine reducers ************************************************************

export const rootReducer = combineReducers({ baseStat, currentStat, iv, ev });
