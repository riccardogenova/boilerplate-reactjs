/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';

export const thunkExample = createAsyncThunk<{}, {}>('EXAMPLE', async (payload, thunkAPI) => {
  try {
    // insert your code here
    return payload;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
