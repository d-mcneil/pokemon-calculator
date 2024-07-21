import { combineSlices } from '@reduxjs/toolkit';

import pokemon from './slices/pokemon';

const rootReducer = combineSlices({
    pokemon,
});

export default rootReducer;
