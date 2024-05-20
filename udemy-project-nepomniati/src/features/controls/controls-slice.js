import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  region: "",
  search: "",
};

const slice = createSlice({
  name: "controls",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setRegion(state, action) {
      state.region = action.payload;
    },
    clearControls(state, action) {
      return initialState;
    },
  },
});

export const searchReducer = slice.reducer;
export const { setRegion, setSearch, clearControls } = slice.actions;

export const selectAllControls = (state) => state.controls;
