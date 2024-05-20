// import axios from "axios";

// const initialState = {
//   country: [],
//   error: null,
//   status: "idle",
// };
// const SET_COUNTRY = "@@country/SET_COUNTRY";
// const SET_LOADING = "@@country/SET_LOADING";
// const SET_ERROR = "@@country/SET_ERROR";

// export const countryReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_COUNTRY: {
//       return { ...state, country: action.country, status: "received" };
//     }
//     case SET_LOADING: {
//       return {
//         ...state,
//         error: null,
//         status: "loading",
//       };
//     }

//     case SET_ERROR: {
//       return {
//         ...state,
//         status: "rejected",
//         error: action.error,
//       };
//     }

//     default:
//       return state;
//   }
// };

// export const setCountry = (country) => ({
//   type: SET_COUNTRY,
//   country,
// });

// export const setLoading = () => ({
//   type: SET_LOADING,
// });
// export const setError = (error) => ({
//   type: SET_ERROR,
//   error,
// });

// export const loadCountry =
//   () =>
//   (dispatch, _, { client, api }) => {
//     dispatch(setLoading());
//     client
//       .get(api.ALL_COUNTRIES)
//       .then(({ data }) => dispatch(setCountry(data)))
//       .catch((err) => dispatch(setError(err)));
//   };
