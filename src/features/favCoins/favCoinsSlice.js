import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favCoins: [],
  loading: false,
  error: null,
};

export const favCoinsSlice = createSlice({
  name: "favCoins",
  initialState,
  reducers: {
    addToFavCoins: (state, action) => {
      const favCoinIndex = state.favCoins.findIndex(
        (coin) => coin.name === action.payload.name
      );
      if (favCoinIndex < 0) {
        state.favCoins.push(action.payload);
      } else {
        state.favCoins.splice(favCoinIndex, 1);
      }
    },
  },
});

export const { addToFavCoins } = favCoinsSlice.actions;
export default favCoinsSlice.reducer;
