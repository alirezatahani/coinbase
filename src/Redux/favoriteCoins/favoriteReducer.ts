import { ADD_TO_FAVORITE } from "@redux/favoriteCoins/favoriteTypes";
import { CoinInterface } from "types";

const initialState: {
  favoriteCoinsUuid: string[];
  favoriteCoins: CoinInterface[];
} = {
  favoriteCoinsUuid: [],
  favoriteCoins: [],
};

export const favoriteReducer = (
  state = initialState,
  action: { type: string; payload: CoinInterface }
) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      const favoriteCoinIndex = state.favoriteCoinsUuid.findIndex(
        (item) => item == action.payload.uuid
      );

      if (favoriteCoinIndex < 0) {
        return {
          ...state,
          favoriteCoinsUuid: [...state.favoriteCoinsUuid, action.payload.uuid],
          favoriteCoins: [...state.favoriteCoins, action.payload],
        };
      } else {
        const newArray = state.favoriteCoinsUuid.filter(
          (item) => item !== action.payload.uuid
        );
        const newFavCoins = state.favoriteCoins.filter(
          (item) => item.uuid !== action.payload.uuid
        );
        return {
          ...state,
          favoriteCoinsUuid: newArray,
          favoriteCoins: newFavCoins,
        };
      }
    default:
      return state;
  }
};
