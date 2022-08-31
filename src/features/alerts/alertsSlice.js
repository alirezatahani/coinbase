import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = "coinranking369971eebd30ea4d94a91d301bd9fb9099e6792808fd718c";
const headers = {
  "x-access-token": apiKey,
};
export const getAsyncAlertsCoins = createAsyncThunk(
  "alerts/coins",
  async (query, { rejectWithValue }) => {
    const baseUrl = `https://api.coinranking.com/v2/coins?${query}`;
    try {
      const response = await axios.get(baseUrl, { headers: headers });
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);
const initialState = {
  alerts: [],
  alertedCoinData: [],
  loading: false,
  error: null,
};
export const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    addToAlerts: (state, action) => {
      state.alerts.push(action.payload);
    },
    removeFromAlerts: (state,action) => {
      const alertIndex = state.alerts.findIndex(
        (item) => item.id === action.payload.id
      );
      state.alerts.splice(alertIndex, 1);
    },
  },
  extraReducers: {
    [getAsyncAlertsCoins.fulfilled]: (state, action) => {
      return {
        ...state,
        alertedCoinData: action.payload,
        error: null,
        loading: false,
      };
    },
    [getAsyncAlertsCoins.pending]: (state, action) => {
      return { ...state, alertedCoinData: [], error: null, loading: true };
    },
    [getAsyncAlertsCoins.rejected]: (state, action) => {
      return {
        ...state,
        alertedCoinData: [],
        loading: false,
        error: action.error.message,
      };
    },
  },
});

export const { addToAlerts ,removeFromAlerts} = alertsSlice.actions;
export default alertsSlice.reducer;
