const initialState = {
  search: "",
  region: "",
};

const SET_SEARCH = "SET_SEARCH";
const SET_REGION = "SET_REGION";
const CLEAR_CONTROLS = "CLEAR_CONTROLS";

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        search: action.search,
      };

    case SET_REGION:
      return {
        ...state,
        region: action.region,
      };

    case CLEAR_CONTROLS:
      return initialState;
    default:
      return state;
  }
};

export const setSearch = (search) => ({
  type: SET_SEARCH,
  search,
});

export const setRegion = (region) => ({
  type: SET_REGION,
  region,
});

export const clearControls = () => ({
  type: CLEAR_CONTROLS,
});
