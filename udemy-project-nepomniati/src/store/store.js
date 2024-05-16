import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { themeReducer } from "../redux/theme/theme-reducer";
import axios from "axios";
import * as api from "../config";
import { countryReducer } from "../redux/country/country-reducer";
import { searchReducer } from "../redux/search/search-reducer";
import { detailsReducer } from "../redux/details/details-reducer";
import { loadState, saveState } from "../localStorage/localStorage";
import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";

export const rootReducer = combineReducers({
  theme: themeReducer,
  country: countryReducer,
  controls: searchReducer,
  details: detailsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// export const configurateStore = () => {
//   const persistedState = loadState();
//   const store = legacy_createStore(
//     rootReducer,

//     compose(
//       applyMiddleware(thunk.withExtraArgument({ client: axios, api })),
//       window.__REDUX_DEVTOOLS_EXTENSION__ &&
//         window.__REDUX_DEVTOOLS_EXTENSION__()
//     ),
//     persistedState
//   );

//   store.subscribe(() => {
//     saveState(store.getState());
//   });
//   return store;
// };
