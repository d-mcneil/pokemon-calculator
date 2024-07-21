import { STATS } from '@/constants/stats/stats';
const { HP, ATTACK, DEFENSE, SPECIAL_ATTACK, SPECIAL_DEFENSE, SPEED } = STATS;

export const LONG_NAME = 'LONG_NAME';
export const SHORT_NAME = 'SHORT_NAME';

export const STAT_LONG_NAME = {
    [HP]: 'HP',
    [ATTACK]: 'Attack',
    [DEFENSE]: 'Defense',
    [SPECIAL_ATTACK]: 'Special Attack',
    [SPECIAL_DEFENSE]: 'Special Defense',
    [SPEED]: 'Speed',
};
export const STAT_SHORT_NAME = {
    [HP]: STAT_LONG_NAME[HP],
    [ATTACK]: 'Atk',
    [DEFENSE]: 'Def',
    [SPECIAL_ATTACK]: 'SpA',
    [SPECIAL_DEFENSE]: 'SpD',
    [SPEED]: 'Spe',
};
