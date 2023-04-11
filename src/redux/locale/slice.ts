/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TLocale, utilityGetDefaultLocale } from '../../utils/getDefaultLocale';

const initialState = utilityGetDefaultLocale();

export const sliceLocale = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    setLocale(_: TLocale, action: PayloadAction<TLocale>) {
      return action.payload;
    },
  },
});
