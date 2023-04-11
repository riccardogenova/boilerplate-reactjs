/** @format */

import { configureStore } from '@reduxjs/toolkit';

import { sliceLocale } from './locale/slice';

export const createStore = () => {
  const store = configureStore({
    reducer: {
      locale: sliceLocale.reducer,
    },
  });

  return store;
};

export const store = createStore();

export type TStore = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
