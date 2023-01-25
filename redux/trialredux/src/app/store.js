import { configureStore } from '@reduxjs/toolkit';
import fruitReducer from '../features/fruits/fruitSlice';

export const store = configureStore({
  reducer: {
    fruitReducer: fruitReducer,
  },
});
