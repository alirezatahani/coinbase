import { configureStore} from "@reduxjs/toolkit";
import alertsReducer from "./features/alerts/alertsSlice";
import coinReducer from "./features/coins/coinsSlice";
import favCoinsReducer from "./features/favCoins/favCoinsSlice";

export const store = configureStore({
  reducer: {
    coins: coinReducer,
    alerts: alertsReducer,
    favCoins:favCoinsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck:false
  })
});
