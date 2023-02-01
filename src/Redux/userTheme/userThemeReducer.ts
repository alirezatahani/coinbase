import { DARK_THEME, LIGHT_THEME } from "./userThemeTypes";
const initialState = {
  theme: "light",
};
export const themeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case DARK_THEME:
      return { ...state, theme: "dark" };
    case LIGHT_THEME:
      return { ...state, theme: "light" };
    default:
      return state;
  }
};
