export const ADD_FILTERS = "ADD_FILTERS";
export const REMOVE_FILTERS = "REMOVE_FILTERS";
export const CLEAR_FILTERS = "CLEAR_FILTERS";

export const filterReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FILTERS: {
      if (!state.includes(action.filters)) {
        return [...state, action.filters];
      }
      return state;
    }

    case REMOVE_FILTERS: {
      return state.filter((el) => el !== action.filter);
    }

    case CLEAR_FILTERS: {
      return [];
    }

    default:
      return state;
  }
};

export const addPositions = (filters) => ({
  type: ADD_FILTERS,
  filters,
});

export const removeFilter = (filter) => ({
  type: REMOVE_FILTERS,
  filter,
});

export const clearFilter = {
  type: CLEAR_FILTERS,
};

export const selectFilters = (state) => state.filters;
