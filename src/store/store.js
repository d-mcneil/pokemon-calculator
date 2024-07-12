import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';

import logger from 'redux-logger';

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger), // TODO: Remove logger in production
});

export default store;
