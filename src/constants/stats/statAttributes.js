import { BASE_STAT } from './baseStats';
import { CURRENT_STAT } from './currentStats';
import { EV } from './ev';
import { IV } from './iv';
import { LONG_NAME, SHORT_NAME } from './names';

export const STAT_ATTRIBUTES = {
    IV,
    EV,
    BASE_STAT,
    CURRENT_STAT,
    LONG_NAME,
    SHORT_NAME,
};
export const NUMERICAL_STAT_ATTRIBUTES = [IV, EV, BASE_STAT, CURRENT_STAT];
