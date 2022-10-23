import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { favoriteReducer } from "./reducers/favorite/favoriteReducer";
import { routerReducer } from "./reducers/Router/routerReducer";
import { alertReducer } from "./reducers/alert/alertReducer";
import { stackReducer } from "./stack/stackReducer";
import { loadState } from "../localStorage";
import storage from "redux-persist/lib/storage";

const reducer = combineReducers({
  FavoriteReducer: favoriteReducer,
  AlertReducer: alertReducer,
  RouterReducer: routerReducer,
  stack: stackReducer,
});
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  reducer
) as typeof reducer;

const preloadedState = loadState();
const initialStore = {
  preloadedState,
};

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
