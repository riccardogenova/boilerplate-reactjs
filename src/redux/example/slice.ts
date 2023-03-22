import { createSlice } from "@reduxjs/toolkit";

import { thunkExample } from "./thunks";

interface State {
  isLoading?: true;
  data?: string;
}

export const sliceGeneral = createSlice<State, {}>({
  name: "general",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunkExample.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(thunkExample.rejected, (state) => {
      delete state.isLoading;
    });
  },
});
