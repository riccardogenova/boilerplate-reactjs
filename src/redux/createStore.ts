import { configureStore } from "@reduxjs/toolkit";

import { sliceGeneral } from "./example/slice";

export const createStore = () => {
  const store = configureStore({
    reducer: {
      example: sliceGeneral.reducer,
    },
  });

  return store;
};

export const store = createStore();

export type TStore = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
