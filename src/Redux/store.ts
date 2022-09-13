import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { favoriteReducer } from "./reducers/favoriteReducer";

const reducer = combineReducers({
  FavoriteReducer: favoriteReducer,
});

const store = configureStore({ reducer });

export default store;
