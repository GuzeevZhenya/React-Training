import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  error: null,
  country: [],
};

export const loadCountries = createAsyncThunk(
  "@@countries/load-countries",
  async (_, { extra: { client, api } }) => {
    const data = await client.get(api.ALL_COUNTRIES);
    return data;
  }
);
const countrySlice = createSlice({
  initialState,
  name: "countries",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadCountries.pending, (state, action) => {
      console.log(1);
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(loadCountries.rejected, (state, action) => {
      console.log(action.payload);
      state.status = "rejected";
      state.error = action.payload || action.meta.error;
    });
    builder.addCase(loadCountries.fulfilled, (state, action) => {
      console.log(action.payload);
      state.status = "received";
      state.countries = action.payload.data;
    });
  },
});

export const countryReducer = countrySlice.reducer;

//selectors
export const selectAllCountriesInfo = (state) => ({
  status: state.country.status,
  error: state.country.error,
  qty: state.country.country.lenght,
});

export const selectAllCountries = (state) => state.country.country;

export const selectVisibleCountry = (state, { search = "", region = "" }) => {
  const value = state.country.country.filter(
    (country) =>
      country.name.toLowerCase().startsWith(search.toLocaleLowerCase()) &&
      country.region.startsWith(region)
  );

  return value;
};
