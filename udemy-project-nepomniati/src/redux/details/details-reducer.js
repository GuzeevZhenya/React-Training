export const SET_LOADING = "@@details/SET_LOADING";
export const SET_ERROR = "@@details/SET_ERROR";
export const SET_COUNTRY = "@@details/SET_COUNTRY";
export const CLEAR_DETAILS = "@@details/CLEAR_DETAILS";
export const SET_NEIGHBORS = "@@details/SET_NEIGHBORS";

export const initialState = {
  currentCountry: null,
  status: "idle",
  error: null,
  neighbors: [],
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

    case SET_NEIGHBORS:
      console.log(1);
      return {
        ...state,
        neighbors: action.neighbors,
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

export const setNeighbors = (neighbors) => ({
  type: SET_NEIGHBORS,
  neighbors,
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

// export const loadNeighborsByBorder =
//   (border) =>
//   (dispatch, _, { client, api }) => {
//     client.get(
//       api
//         .filterByCode(border)
//         .then(({ data }) => dispatch(setNeighbors(data.map((el) => el.name))))
//         .catch(console.log(1))
//     );
//   };

export const loadNeighborsByBorder =
  (border) =>
  (dispatch, _, { client, api }) => {
    client
      .get(api.filterByCode(border))
      .then(({ data }) => dispatch(setNeighbors(data.map((el) => el.name))))
      .catch((err) => setError(err.message));
  };
