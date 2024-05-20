import { combineReducers } from "redux";
import thunk from "redux-thunk";

import { themeReducer } from "../features/theme/theme-slice";
import axios from "axios";
import * as api from "../config";
import { searchReducer } from "../features/controls/controls-slice";
import { detailsReducer } from "../redux/details/details-reducer";
import { loadState, saveState } from "../localStorage/localStorage";
import { configureStore } from "@reduxjs/toolkit";
import { countryReducer } from "../features/country/countries-slice";

export const rootReducer = combineReducers({
  theme: themeReducer,
  country: countryReducer,
  controls: searchReducer,
  details: detailsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});