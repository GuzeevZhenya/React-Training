export const SET_LOADING = "@@details/SET_LOADING";
export const SET_ERROR = "@@details/SET_ERROR";
export const SET_COUNTRY = "@@details/SET_COUNTRY";
export const CLEAR_DETAILS = "@@details/CLEAR_DETAILS";

export const initialState = {
  currentCountry: null,
  status: "idle",
  error: null,
};

export const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        status: "loading",
        error: null,
      };

    case SET_ERROR:
      return {
        ...state,
        status: "rejected",
        error: action.error,
      };
    case SET_COUNTRY:
      return {
        ...state,
        status: "fullfiled",
        currentCountry: action.country,
      };

    case CLEAR_DETAILS:
      return {
        initialState,
      };
    default:
      return state;
  }
};

const setLoading = () => ({
  type: SET_LOADING,
});

const setError = (error) => ({
  type: SET_ERROR,
  error,
});

const setCountry = (country) => ({
  type: SET_COUNTRY,
  country,
});

export const clearDetails = () => ({
  type: CLEAR_DETAILS,
});

export const loadCountryByName =
  (name) =>
  (dispatch, _, { client, api }) => {
    dispatch(setLoading());

    client
      .get(api.searchByCountry(name))
      .then(({ data }) => dispatch(setCountry(data[0])))
      .catch((err) => setError(err.message));
  };
