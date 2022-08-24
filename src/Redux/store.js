import { applyMiddleware } from "redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { coinReducer } from "./Reducers/coinReducer";

import thunk from "redux-thunk";

const reducer = combineReducers({
  coinsReducer: coinReducer,
});

const middlewere = [thunk];

const store = configureStore({ reducer }, applyMiddleware(...middlewere));

export default store;
