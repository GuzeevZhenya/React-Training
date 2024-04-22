export const ADD_POSITIONS = "ADD_POSITIONS";

export const positionReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POSITIONS: {
      return action.positions;
    }

    default:
      return state;
  }
};

export const addPositions = (positions) => ({
  type: ADD_POSITIONS,
  positions,
});
