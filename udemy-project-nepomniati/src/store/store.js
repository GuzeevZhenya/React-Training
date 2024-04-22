import { combineReducers } from "redux";
import { legacy_createStore } from "redux";
import { positionReducer } from "./positions/positions-reducer";
import { filterReducer } from "./filters/filters-reducer";

const rootReducer = combineReducers({
  positions: positionReducer,
  filters: filterReducer,
});

export const store = legacy_createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
