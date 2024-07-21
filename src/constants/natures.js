import { STATS } from '@/constants/stats';
const { HP, ATTACK, DEFENSE, SPECIAL_ATTACK, SPECIAL_DEFENSE, SPEED } = STATS;
// ************************************************************************************************
const LONELY = 'LONELY';
const ADAMANT = 'ADAMANT';
const NAUGHTY = 'NAUGHTY';
const BRAVE = 'BRAVE';
const BOLD = 'BOLD';
const IMPISH = 'IMPISH';
const LAX = 'LAX';
const RELAXED = 'RELAXED';
const MODEST = 'MODEST';
const MILD = 'MILD';
const RASH = 'RASH';
const QUIET = 'QUIET';
const CALM = 'CALM';
const GENTLE = 'GENTLE';
const CAREFUL = 'CAREFUL';
const SASSY = 'SASSY';
const TIMID = 'TIMID';
const HASTY = 'HASTY';
const JOLLY = 'JOLLY';
const NAIVE = 'NAIVE';
const BASHFUL = 'BASHFUL';
const DOCILE = 'DOCILE';
const HARDY = 'HARDY';
const QUIRKY = 'QUIRKY';
const SERIOUS = 'SERIOUS';
// ************************************************************************************************
const BOOSTING_NATURE_MODIFIER = 1.1;
const NEUTRAL_NATURE_MODIFIER = 1;
const HINDERING_NATURE_MODIFIER = 0.9;
const _ = NEUTRAL_NATURE_MODIFIER;
// ************************************************************************************************
export const NAME = 'NAME';
// ************************************************************************************************
export const NATURES = {
    // ************************************** ATTACK BOOSTING *************************************
    [LONELY]: {
        [NAME]: 'Lonely',
        [HP]: _,
        [ATTACK]: BOOSTING_NATURE_MODIFIER,
        [DEFENSE]: HINDERING_NATURE_MODIFIER,
        [SPECIAL_ATTACK]: _,
        [SPECIAL_DEFENSE]: _,
        [SPEED]: _,
    },
    [ADAMANT]: {
        [NAME]: 'Adamant',
        [HP]: _,
        [ATTACK]: BOOSTING_NATURE_MODIFIER,
        [DEFENSE]: _,
        [SPECIAL_ATTACK]: HINDERING_NATURE_MODIFIER,
        [SPECIAL_DEFENSE]: _,
        [SPEED]: _,
    },
    [NAUGHTY]: {
        [NAME]: 'Naughty',
        [HP]: _,
        [ATTACK]: BOOSTING_NATURE_MODIFIER,
        [DEFENSE]: _,
        [SPECIAL_ATTACK]: _,
        [SPECIAL_DEFENSE]: HINDERING_NATURE_MODIFIER,
        [SPEED]: _,
    },
    [BRAVE]: {
        [NAME]: 'Brave',
        [HP]: _,
        [ATTACK]: BOOSTING_NATURE_MODIFIER,
        [DEFENSE]: _,
        [SPECIAL_ATTACK]: _,
        [SPECIAL_DEFENSE]: _,
        [SPEED]: HINDERING_NATURE_MODIFIER,
    },
    // ************************************** DEFENSE BOOSTING ************************************
    [BOLD]: {
        [NAME]: 'Bold',
        [HP]: _,
        [ATTACK]: _,
        [DEFENSE]: BOOSTING_NATURE_MODIFIER,
        [SPECIAL_ATTACK]: HINDERING_NATURE_MODIFIER,
        [SPECIAL_DEFENSE]: _,
        [SPEED]: _,
    },
    [IMPISH]: {
        [NAME]: 'Impish',
        [HP]: _,
        [ATTACK]: _,
        [DEFENSE]: BOOSTING_NATURE_MODIFIER,
        [SPECIAL_ATTACK]: _,
        [SPECIAL_DEFENSE]: HINDERING_NATURE_MODIFIER,
        [SPEED]: _,
    },
    [LAX]: {
        [NAME]: 'Lax',
        [HP]: _,
        [ATTACK]: _,
        [DEFENSE]: BOOSTING_NATURE_MODIFIER,
        [SPECIAL_ATTACK]: _,
        [SPECIAL_DEFENSE]: _,
        [SPEED]: HINDERING_NATURE_MODIFIER,
    },
    [RELAXED]: {
        [NAME]: 'Relaxed',
        [HP]: _,
        [ATTACK]: _,
        [DEFENSE]: BOOSTING_NATURE_MODIFIER,
        [SPECIAL_ATTACK]: _,
        [SPECIAL_DEFENSE]: _,
        [SPEED]: HINDERING_NATURE_MODIFIER,
    },
    // ************************************** SPECIAL ATTACK BOOSTING *****************************
    [MODEST]: {
        [NAME]: 'Modest',
        [HP]: _,
        [ATTACK]: HINDERING_NATURE_MODIFIER,
        [DEFENSE]: _,
        [SPECIAL_ATTACK]: BOOSTING_NATURE_MODIFIER,
        [SPECIAL_DEFENSE]: _,
        [SPEED]: _,
    },
    [MILD]: {
        [NAME]: 'Mild',
        [HP]: _,
        [ATTACK]: _,
        [DEFENSE]: _,
        [SPECIAL_ATTACK]: BOOSTING_NATURE_MODIFIER,
        [SPECIAL_DEFENSE]: HINDERING_NATURE_MODIFIER,
        [SPEED]: _,
    },
    [RASH]: {
        [NAME]: 'Rash',
        [HP]: _,
        [ATTACK]: _,
        [DEFENSE]: _,
        [SPECIAL_ATTACK]: BOOSTING_NATURE_MODIFIER,
        [SPECIAL_DEFENSE]: _,
        [SPEED]: HINDERING_NATURE_MODIFIER,
    },
    [QUIET]: {
        [NAME]: 'Quiet',
        [HP]: _,
        [ATTACK]: _,
        [DEFENSE]: _,
        [SPECIAL_ATTACK]: BOOSTING_NATURE_MODIFIER,
        [SPECIAL_DEFENSE]: _,
        [SPEED]: HINDERING_NATURE_MODIFIER,
    },
    // ************************************** SPECIAL DEFENSE BOOSTING ****************************
    [CALM]: {
        [NAME]: 'Calm',
        [HP]: _,
        [ATTACK]: _,
        [DEFENSE]: _,
        [SPECIAL_ATTACK]: HINDERING_NATURE_MODIFIER,
        [SPECIAL_DEFENSE]: BOOSTING_NATURE_MODIFIER,
        [SPEED]: _,
    },
    [GENTLE]: {
        [NAME]: 'Gentle',
        [HP]: _,
        [ATTACK]: _,
        [DEFENSE]: _,
        [SPECIAL_ATTACK]: _,
        [SPECIAL_DEFENSE]: BOOSTING_NATURE_MODIFIER,
        [SPEED]: HINDERING_NATURE_MODIFIER,
    },
    [CAREFUL]: {
        [NAME]: 'Careful',
        [HP]: _,
        [ATTACK]: _,
        [DEFENSE]: _,
        [SPECIAL_ATTACK]: _,
        [SPECIAL_DEFENSE]: BOOSTING_NATURE_MODIFIER,
        [SPEED]: HINDERING_NATURE_MODIFIER,
    },
    [SASSY]: {
        [NAME]: 'Sassy',
        [HP]: _,
        [ATTACK]: _,
        [DEFENSE]: _,
        [SPECIAL_ATTACK]: _,
        [SPECIAL_DEFENSE]: BOOSTING_NATURE_MODIFIER,
        [SPEED]: HINDERING_NATURE_MODIFIER,
    },
    // ************************************** SPEED BOOSTING **************************************
    [TIMID]: {
        [NAME]: 'Timid',
        [HP]: _,
        [ATTACK]: HINDERING_NATURE_MODIFIER,
        [DEFENSE]: _,
        [SPECIAL_ATTACK]: _,
        [SPECIAL_DEFENSE]: _,
        [SPEED]: BOOSTING_NATURE_MODIFIER,
    },
    [HASTY]: {
        [NAME]: 'Hasty',
        [HP]: _,
        [ATTACK]: _,
        [DEFENSE]: HINDERING_NATURE_MODIFIER,
        [SPECIAL_ATTACK]: _,
        [SPECIAL_DEFENSE]: _,
        [SPEED]: BOOSTING_NATURE_MODIFIER,
    },
    [JOLLY]: {
        [NAME]: 'Jolly',
        [HP]: _,
        [ATTACK]: _,
        [DEFENSE]: _,
        [SPECIAL_ATTACK]: HINDERING_NATURE_MODIFIER,
        [SPECIAL_DEFENSE]: _,
        [SPEED]: BOOSTING_NATURE_MODIFIER,
    },
    [NAIVE]: {
        [NAME]: 'Naive',
        [HP]: _,
        [ATTACK]: _,
        [DEFENSE]: _,
        [SPECIAL_ATTACK]: HINDERING_NATURE_MODIFIER,
        [SPECIAL_DEFENSE]: _,
        [SPEED]: BOOSTING_NATURE_MODIFIER,
    },
    // ************************************** NEUTRAL *********************************************
    [BASHFUL]: {
        [NAME]: 'Bashful',
        [HP]: _,
        [ATTACK]: _,
        [DEFENSE]: _,
        [SPECIAL_ATTACK]: _,
        [SPECIAL_DEFENSE]: _,
        [SPEED]: _,
    },
    [DOCILE]: {
        [NAME]: 'Docile',
        [HP]: _,
        [ATTACK]: _,
        [DEFENSE]: _,
        [SPECIAL_ATTACK]: _,
        [SPECIAL_DEFENSE]: _,
        [SPEED]: _,
    },
    [HARDY]: {
        [NAME]: 'Hardy',
        [HP]: _,
        [ATTACK]: _,
        [DEFENSE]: _,
        [SPECIAL_ATTACK]: _,
        [SPECIAL_DEFENSE]: _,
        [SPEED]: _,
    },
    [QUIRKY]: {
        [NAME]: 'Quirky',
        [HP]: _,
        [ATTACK]: _,
        [DEFENSE]: _,
        [SPECIAL_ATTACK]: _,
        [SPECIAL_DEFENSE]: _,
        [SPEED]: _,
    },
    [SERIOUS]: {
        [NAME]: 'Serious',
        [HP]: _,
        [ATTACK]: _,
        [DEFENSE]: _,
        [SPECIAL_ATTACK]: _,
        [SPECIAL_DEFENSE]: _,
        [SPEED]: _,
    },
};
// ************************************************************************************************
export const NATURE_LIST = Object.keys(NATURES);
