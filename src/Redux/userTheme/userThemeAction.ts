import { DARK_THEME,LIGHT_THEME } from "./userThemeTypes";

export const changeToDark = () => {
  return {
    type: DARK_THEME,
  };
};
export const changeToLight = () => {
  return {
    type: LIGHT_THEME,
  };
};
