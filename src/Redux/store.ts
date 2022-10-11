import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { favoriteReducer } from "./reducers/favoriteReducer";
import {stackReducer} from "./stack/stackReducer"
import {loadState} from '../localStorage';

const reducer = combineReducers({
  FavoriteReducer: favoriteReducer,
  stack:stackReducer
});

const preloadedState =loadState() ;
const initialStore={
  preloadedState
}
const store = configureStore({ reducer,preloadedState });

export default store;
