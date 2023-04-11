/** @format */

import { configureStore } from '@reduxjs/toolkit';

import { sliceAuth } from './auth/slice';
import { sliceLocale } from './locale/slice';

export const createStore = () => {
  const store = configureStore({
    reducer: {
      locale: sliceLocale.reducer,
      auth: sliceAuth.reducer,
    },
  });

  return store;
};

export const store = createStore();

export type TStore = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
