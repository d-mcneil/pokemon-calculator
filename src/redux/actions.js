import { batch } from "react-redux";
import * as constants from "./constants";

const baseStatReset = () => ({ type: constants.BASE_STAT_RESET });
const currentStatReset = () => ({ type: constants.CURRENT_STAT_RESET });
const ivReset = () => ({ type: constants.IV_RESET });
const evReset = () => ({ type: constants.EV_RESET });

const resetCalculator = () => (dispatch) =>
  batch(() => {
    dispatch(baseStatReset());
    dispatch(currentStatReset());
    dispatch(ivReset());
    dispatch(evReset());
  });
