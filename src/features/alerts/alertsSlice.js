import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alerts: [],
};
export const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    addToAlerts: (state, action) => {
      const alertId = state.alerts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (alertId < 0) {
        state.alerts.push(action.payload);
      }else{
        state.alerts.splice(alertId,1)
      }
    },
  },
});

export const { addToAlerts } = alertsSlice.actions;
export default alertsSlice.reducer;
