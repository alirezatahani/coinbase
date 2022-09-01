import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiKey } from "../../utils/key";


const headers = {
  "x-access-token": apiKey,
};

export const getAsyncCoins = createAsyncThunk(
  "coins/getCoins",
  async (query, { rejectWithValue }) => {
    const baseUrl = `https://api.coinranking.com/v2/search-suggestions?query=${
      query ? query : "redux"
    }`;
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

export default coinsSlice.reducer;
