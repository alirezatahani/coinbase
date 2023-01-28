import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { favoriteReducer } from "./reducers/favoriteReducer";
import { stackReducer } from "./stack/stackReducer";
import { loadState } from "../localStorage";
import { themeReducer } from "./userTheme/userThemeReducer";
import { referenceCurrencyReducer } from "./referenceCurrency/referenceCurrencyReducer";

const reducer = combineReducers({
  FavoriteReducer: favoriteReducer,
  stack: stackReducer,
  theme: themeReducer,
  referenceCurrency: referenceCurrencyReducer,
});

const preloadedState = loadState();
const initialStore = {
  preloadedState,
};
const store = configureStore({ reducer, preloadedState });

export default store;
