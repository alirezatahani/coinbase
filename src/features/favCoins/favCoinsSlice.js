import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favCoins: [],
};
export const favCoinsSlice = createSlice({
  name: "favCoins",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      return {
        ...state,
        favCoins: [...state.favCoins, action.payload],
      };
    },
  },
});

export const { addToFavorite } = favCoinsSlice.actions;
export default favCoinsSlice.reducer;
