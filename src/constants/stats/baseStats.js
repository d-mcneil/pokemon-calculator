import { STATS } from '@/constants/stats/stats';
const { HP, ATTACK, DEFENSE, SPECIAL_ATTACK, SPECIAL_DEFENSE, SPEED } = STATS;

export const BASE_STAT = 'BASE_STAT';

export const MAX_BASE_STAT = {
    [HP]: 255,
    [ATTACK]: 190,
    [DEFENSE]: 230,
    [SPECIAL_ATTACK]: 194,
    [SPECIAL_DEFENSE]: 230,
    [SPEED]: 200,
};
export const MIN_BASE_STAT = {
    [HP]: 0,
    [ATTACK]: 0,
    [DEFENSE]: 0,
    [SPECIAL_ATTACK]: 0,
    [SPECIAL_DEFENSE]: 0,
    [SPEED]: 0,
};
