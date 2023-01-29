import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { favoriteReducer } from "./reducers/favoriteReducer";
import { stackReducer } from "./stack/stackReducer";
import { loadState } from "../localStorage";
import { themeReducer } from "./userTheme/userThemeReducer";
import { referenceCurrencyReducer } from "./referenceCurrency/referenceCurrencyReducer";
import { timePeriodReducer } from "./timePeriod/timePeriodReducer";

const reducer = combineReducers({
  FavoriteReducer: favoriteReducer,
  stack: stackReducer,
  theme: themeReducer,
  referenceCurrency: referenceCurrencyReducer,
  timePeriod: timePeriodReducer,
});

const preloadedState = loadState();
const initialStore = {
  preloadedState,
};
const store = configureStore({ reducer, preloadedState });

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
