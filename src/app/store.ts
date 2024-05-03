import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { characterItemReducer } from '../features/charactersItem';

const rootReducer = combineReducers({
  characterItem: characterItemReducer,
})

export const store = configureStore({reducer: rootReducer})

export type RootState = ReturnType<typeof store.getState>;
