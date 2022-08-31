import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favCoins: [],
};
export const favCoinsSlice = createSlice({
  name: "favCoins",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const favCoinsIndex = state.favCoins.findIndex(
        (item) => item.id === action.payload.id
      );
      if (favCoinsIndex < 0) {
        state.favCoins.push(action.payload);
      } else {
        state.favCoins.splice(favCoinsIndex, 1);
      }
    },
  },
});

export const { addToFavorite } = favCoinsSlice.actions;
export default favCoinsSlice.reducer;
