import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { favoriteReducer } from "./reducers/favoriteReducer";
import {stackReducer} from "./stack/stackReducer"
import {loadState} from '../localStorage';
import { themeReducer } from "./userTheme/userThemeReducer";

const reducer = combineReducers({
  FavoriteReducer: favoriteReducer,
  stack:stackReducer,
  theme:themeReducer
});

const preloadedState =loadState() ;
const initialStore={
  preloadedState
}
const store = configureStore({ reducer,preloadedState });

export default store;
