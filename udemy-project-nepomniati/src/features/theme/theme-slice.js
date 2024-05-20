import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  initialState: "dark",
  name: "theme",
  reducers: {
    addTheme(state, action) {
      return action.payload;
    },
  },
});

export const themeReducer = slice.reducer;
export const { addTheme } = slice.actions;
