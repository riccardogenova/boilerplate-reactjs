/** @format */

import { createSlice } from '@reduxjs/toolkit';

import { thunkAuth } from './thunks';

interface State {
  isLoading?: boolean;
  isAuthenticated?: boolean;
}

export const sliceAuth = createSlice<State, {}>({
  name: 'auth',
  initialState: { isLoading: false, isAuthenticated: false },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(thunkAuth.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(thunkAuth.fulfilled, (state, action) => {
      state.isLoading = action.payload.isLoading;
      state.isAuthenticated = action.payload.isAuthenticated;
    });
    builder.addCase(thunkAuth.rejected, state => {
      delete state.isLoading;
    });
  },
});
