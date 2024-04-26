const initialState = "light";
const SET_THEME = "SET_THEME";

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME: {
      return action.theme;
    }
    default:
      return state;
  }
};

export const addThemeAC = (theme) => ({
  type: SET_THEME,
  theme,
});
