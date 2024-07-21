import { STAT_LIST } from '@/constants/stats/stats';

const EV = 'EV';

const MAX_TOTAL_EV = 510;
const MAX_EV_VALUE = 252;
const MIN_EV_VALUE = 0;

const MAX_EV = {};
const MIN_EV = {};

for (const stat of STAT_LIST) {
    MAX_EV[stat] = MAX_EV_VALUE;
    MIN_EV[stat] = MIN_EV_VALUE;
}

export { EV, MAX_EV, MIN_EV, MAX_TOTAL_EV };
