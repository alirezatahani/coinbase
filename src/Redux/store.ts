import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { favoriteReducer } from "./reducers/favoriteReducer";
import { alertReducer } from "./reducers/alertReducer";
import { stackReducer } from "./stack/stackReducer";
import { loadState } from "../localStorage";

const reducer = combineReducers({
  FavoriteReducer: favoriteReducer,
  AlertReducer: alertReducer,
  stack: stackReducer,
});

const preloadedState = loadState();
const initialStore = {
  preloadedState,
};
const store = configureStore({ reducer, preloadedState });

export default store;
