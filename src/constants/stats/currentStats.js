import { STATS } from '@/constants/stats/stats';
const { HP, ATTACK, DEFENSE, SPECIAL_ATTACK, SPECIAL_DEFENSE, SPEED } = STATS;

export const CURRENT_STAT = 'CURRENT_STAT';

export const MAX_CURRENT_STAT = {
    [HP]: 714,
    [ATTACK]: 526,
    [DEFENSE]: 614,
    [SPECIAL_ATTACK]: 535,
    [SPECIAL_DEFENSE]: 614,
    [SPEED]: 548,
};
export const MIN_CURRENT_STAT = {
    [HP]: 11,
    [ATTACK]: 4,
    [DEFENSE]: 4,
    [SPECIAL_ATTACK]: 4,
    [SPECIAL_DEFENSE]: 4,
    [SPEED]: 4,
};
