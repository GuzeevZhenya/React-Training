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

export const rootReducer = combineReducers({
  theme: themeReducer,
  country: countryReducer,
  controls: searchReducer,
  details: detailsReducer,
});

export const store = legacy_createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ client: axios, api })),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
