import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://api.coinranking.com/v2/coins";
const apiKey = "coinranking369971eebd30ea4d94a91d301bd9fb9099e6792808fd718c";

const headers = {
  "x-access-token": apiKey,
};

export const getAsyncCoins = createAsyncThunk(
  "coins/getCoins",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(baseUrl, {
        headers: headers,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

const initialState = {
  coins: [],
  error: null,
  loading: false,
};
export const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {},
  extraReducers: {
    [getAsyncCoins.fulfilled]: (state, action) => {
      return { ...state, coins: action.payload, error: null, loading: false };
    },
    [getAsyncCoins.pending]: (state, action) => {
      return { ...state, coins: [], error: null, loading: true };
    },
    [getAsyncCoins.rejected]: (state, action) => {
      return {
        ...state,
        coins: [],
        loading: false,
        error: action.error.message,
      };
    },
  },
});

export const {} = coinsSlice.actions;
export default coinsSlice.reducer;
