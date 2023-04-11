/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';

export interface TAuth {
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const thunkAuth = createAsyncThunk<TAuth, TAuth>('AUTH', async (payload, thunkAPI) => {
  try {
    const getAuthWithDelay = async (): Promise<TAuth> =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(payload);
        }, 1000);
      });

    return await getAuthWithDelay().then((data: TAuth) => data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
