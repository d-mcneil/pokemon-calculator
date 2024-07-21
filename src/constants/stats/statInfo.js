import { STAT_LIST } from '@/constants/stats/stats';
import { STAT_ATTRIBUTES } from '@/constants/stats/statAttributes';
import { STAT_LONG_NAME, STAT_SHORT_NAME } from '@/constants/stats/names';
import { MAX_IV, MIN_IV } from '@/constants/stats/iv';
import { MAX_EV, MIN_EV } from '@/constants/stats/ev';
import { MAX_BASE_STAT, MIN_BASE_STAT } from '@/constants/stats/baseStats';
import {
    MAX_CURRENT_STAT,
    MIN_CURRENT_STAT,
} from '@/constants/stats/currentStats';
const { LONG_NAME, SHORT_NAME, IV, EV, BASE_STAT, CURRENT_STAT } =
    STAT_ATTRIBUTES;
// ******************************************* EXPORTS ********************************************
export const NAME = 'NAME';
export const MAX = 'MAX';
export const MIN = 'MIN';
export const STAT_INFO = (() => {
    const statInfo = {};
    const NUMERICAL_STAT_ATTRIBUTES = {
        [IV]: {
            [MAX]: MAX_IV,
            [MIN]: MIN_IV,
        },
        [EV]: {
            [MAX]: MAX_EV,
            [MIN]: MIN_EV,
        },
        [BASE_STAT]: {
            [MAX]: MAX_BASE_STAT,
            [MIN]: MIN_BASE_STAT,
        },
        [CURRENT_STAT]: {
            [MAX]: MAX_CURRENT_STAT,
            [MIN]: MIN_CURRENT_STAT,
        },
    };
    for (const stat of STAT_LIST) {
        statInfo[stat] = {
            [NAME]: {},
            [MAX]: {},
            [MIN]: {},
        };
        statInfo[stat][NAME][LONG_NAME] = STAT_LONG_NAME[stat];
        statInfo[stat][NAME][SHORT_NAME] = STAT_SHORT_NAME[stat];
        for (const attribute of Object.keys(NUMERICAL_STAT_ATTRIBUTES)) {
            statInfo[stat][MAX][attribute] =
                NUMERICAL_STAT_ATTRIBUTES[attribute][MAX][stat];
            statInfo[stat][MIN][attribute] =
                NUMERICAL_STAT_ATTRIBUTES[attribute][MIN][stat];
        }
    }
    return statInfo;
})();
/*
    const STAT_INFO = {
        HP: {
            NAME: {
                LONG_NAME: 'HP',
                SHORT_NAME: 'HP',
            },
            MAX: {
                IV: 31,
                EV: 252,
                BASE_STAT: 255,
                CURRENT_STAT: 714,
            },
            MIN: {
                IV: 0,
                EV: 0,
                BASE_STAT: 0,
                CURRENT_STAT: 11,
            },
        },
        ATTACK: {
            NAME: {
                LONG_NAME: 'Attack',
                SHORT_NAME: 'Atk',
            },
            MAX: {
                IV: 31,
                EV: 252,
                BASE_STAT: 190,
                CURRENT_STAT: 526,
            },
            MIN: {
                IV: 0,
                EV: 0,
                BASE_STAT: 0,
                CURRENT_STAT: 4,
            },
        },
        DEFENSE: {
            NAME: {
                LONG_NAME: 'Defense',
                SHORT_NAME: 'Def',
            },
            MAX: {
                IV: 31,
                EV: 252,
                BASE_STAT: 230,
                CURRENT_STAT: 614,
            },
            MIN: {
                IV: 0,
                EV: 0,
                BASE_STAT: 0,
                CURRENT_STAT: 4,
            },
        },
        SPECIAL_ATTACK: {
            NAME: {
                LONG_NAME: 'Special Attack',
                SHORT_NAME: 'SpA',
            },
            MAX: {
                IV: 31,
                EV: 252,
                BASE_STAT: 194,
                CURRENT_STAT: 535,
            },
            MIN: {
                IV: 0,
                EV: 0,
                BASE_STAT: 0,
                CURRENT_STAT: 4,
            },
        },
        SPECIAL_DEFENSE: {
            NAME: {
                LONG_NAME: 'Special Defense',
                SHORT_NAME: 'SpD',
            },
            MAX: {
                IV: 31,
                EV: 252,
                BASE_STAT: 230,
                CURRENT_STAT: 614,
            },
            MIN: {
                IV: 0,
                EV: 0,
                BASE_STAT: 0,
                CURRENT_STAT: 4,
            },
        },
        SPEED: {
            NAME: {
                LONG_NAME: 'Speed',
                SHORT_NAME: 'Spe',
            },
            MAX: {
                IV: 31,
                EV: 252,
                BASE_STAT: 200,
                CURRENT_STAT: 548,
            },
            MIN: {
                IV: 0,
                EV: 0,
                BASE_STAT: 0,
                CURRENT_STAT: 4,
            },
        },
    };
*/
