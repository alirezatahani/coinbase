import { configureStore} from "@reduxjs/toolkit";
import alertsReducer from "./features/alerts/alertsSlice";
import coinReducer from "./features/coins/coinsSlice";

export const store = configureStore({
  reducer: {
    coins: coinReducer,
    alerts: alertsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck:false
  })
});
