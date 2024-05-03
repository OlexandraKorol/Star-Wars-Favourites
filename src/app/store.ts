import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { characterItemReducer } from '../features/charactersItem';
import { statisticReducer } from '../features/statistic';

const rootReducer = combineReducers({
  characterItem: characterItemReducer,
  statisticItem: statisticReducer
})

export const store = configureStore({reducer: rootReducer})

export type RootState = ReturnType<typeof store.getState>;

