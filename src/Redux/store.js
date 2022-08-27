import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { coinReducer } from "./Reducers/coinReducer";

const reducer = combineReducers({
  coinsReducer: coinReducer,
});

const store = configureStore({ reducer });

export default store;
