import { STAT_LIST } from '@/constants/stats/stats';

const IV = 'IV';

const MAX_IV_VALUE = 31;
const MIN_IV_VALUE = 0;

const MAX_IV = {};
const MIN_IV = {};

for (const stat of STAT_LIST) {
    MAX_IV[stat] = MAX_IV_VALUE;
    MIN_IV[stat] = MIN_IV_VALUE;
}

export { IV, MAX_IV, MIN_IV };
